import { useDataStore } from '../stores/DataStore'
import { useWarehouseStore } from '../stores/WarehouseStore'
import { solve } from "yalps";

const items = useDataStore().items.data;
const stages = useDataStore().stages.data;
const crafts = useDataStore().crafts.data;
const formulas = useDataStore().formulas.data;
const drops = useDataStore().drops.data;
const warehouse = useWarehouseStore().data;

function subtractMaterials(materials) {
    const result = materials.map((matInfo) => ({ ...matInfo }));
    result.forEach((matInfo) => {
        // Find the corresponding craft item in craftJson
        //console.log(matInfo.Material);
        const subtractItem = warehouse.find((item) => item.Material === matInfo.Material);
        //if subtractItem is found
        if (subtractItem) {
            matInfo.Quantity -= subtractItem.Quantity;
        }
    });
    return result;
}

function subtractHigherTierMaterials(materials) {
    const result = materials.map((matInfo) => ({ ...matInfo }));
    result.forEach((matInfo) => {
        // Find the corresponding craft item in craftJson
        //console.log(matInfo.Material);
        const subtractItem = crafts.find((item) => item.Name === matInfo.Material && item.Rarity >= 5) && warehouse.find((item) => item.Material === matInfo.Material);      
        if (subtractItem) {
            //console.log(subtractItem);
            matInfo.Quantity -= subtractItem.Quantity;
        }
    });
    return result;
}  

function sortArcanists(materials) {
    let result = materials.map((matInfo) => ({ ...matInfo }));
    const craftItems = [];

    // Iterate through materials
    result.forEach((matInfo) => {
        // Find the corresponding craft item in craftJson
        const craftItem = crafts.find((item) => item.Name === matInfo.Material);
        //console.log(craftItem);
        // If a matching item is found
        if (craftItem) {
            craftItems.push(craftItem);
            for (let i = 0; i < craftItem.Material.length; i++) {
                const material = craftItem.Material[i];
                const quantity = craftItem.Quantity[i] * matInfo.Quantity;

                // Add or update the quantity in the result object
                if (quantity > 0) {
                    if (result.find((item) => item.Material === material)) {
                        result.find((item) => item.Material === material).Quantity += quantity;
                    } else {
                        result.push({ Material: material, Quantity: quantity });
                    }
                }
            }
        }
    });

    //filter out craft items
    result = result.filter((item) => !craftItems.some((craftItem) => craftItem.Name === item.Material));
    //sort result by material id from items
    result.sort((a, b) => {
        const itemA = items.find((item) => item.Name === a.Material);
        const itemB = items.find((item) => item.Name === b.Material);
        return itemB.Id - itemA.Id;
    });

    return result;
}

function calculateOneiric(matInfo) {
    const item = items.find(item => item.Name === matInfo.Material);
    const rarity = item.Rarity;
    const quantity = matInfo.Quantity;

    if (rarity === 3) return quantity * 40;
    if (rarity === 4) return quantity * 100;
    if (rarity === 5) return quantity * 250;
    if (rarity === 6) return quantity * 1500;
    return 0;
}

function getActivityImagePath(stage) {
    if (stage === 'Oneiric Shop') {
        return `images/items/common/1.png`;
    }
    return `images/items/common/0.png`;
}

function createCard(stage, runs, activity, days, materials) {
    return {
        stage,
        runs: isNaN(runs) ? 0 : runs,
        activity: isNaN(activity) ? 0 : activity,
        days: isNaN(days) ? 0 : days,
        materials,
        activityImagePath: getActivityImagePath(stage)
    };
}

function findOrCreateCard(stage, calculatedCards) {
    let card = calculatedCards.find(c => c.stage === stage);
    if (!card) {
        card = createCard(stage, null, stage === 'Oneiric Shop' ? 0 : null, null, []);
        calculatedCards.push(card);
    }
    return card;
}

function sortLayer(layer) {
    return layer.sort((a, b) => {
        const stageA = stages.find((stage) => stage.Name === a.stage);
        const stageB = stages.find((stage) => stage.Name === b.stage);

        if (stageA && stageB) {
            // If both stages have an id, sort based on id
            return stageA.Id - stageB.Id;
        }
        if (stageA) {
            // If only stageA has an id, place it before stageB
            return -1;
        }
        if (stageB) {
            // If only stageB has an id, place it before stageA
            return 1;
        }
        // If neither stage has an id, maintain the original order
        return 0;
    });
}


export function useProcessCards(materials) {
    const calculatedCards = [];

    const higherTierSubtractedMaterials = subtractHigherTierMaterials(materials);
    const sortedMaterials = sortArcanists(higherTierSubtractedMaterials);
    const subtractedMaterials = subtractMaterials(sortedMaterials);

    const plan = getPlan(materials);
    console.log(plan);

    subtractedMaterials.forEach((matInfo) => {
        if (matInfo.Quantity <= 0) return;
        const currentStage = stages.find((stage) => stage.Material.includes(matInfo.Material));

        if (currentStage) {
            // Farmable stages
            const runs = Math.ceil(parseFloat(matInfo.Quantity) / parseFloat(currentStage.Quantity));
            const activity = Math.ceil(runs * currentStage.Activity);
            const days = (activity / 240).toFixed(1);

            if (matInfo.Quantity > 0) {
                const existingCardIndex = calculatedCards.findIndex((card) => card.stage === currentStage.Name);

                if (existingCardIndex !== -1) {
                    calculatedCards[existingCardIndex].materials.push(matInfo);
                } else {
                    calculatedCards.push(createCard(currentStage.Name, runs, activity, days, [matInfo]));
                }
            }
        } else {
            const tier3Card = findOrCreateCard('Tier 3', calculatedCards);
            const tier2Card = findOrCreateCard('Tier 2', calculatedCards);
            const oneiric = findOrCreateCard('Oneiric Shop', calculatedCards);
            const unreleased = findOrCreateCard('Unreleased', calculatedCards);

            if (items.find((item) => item.Name === matInfo.Material).Category === 'Resonate Material') {
                oneiric.activity += calculateOneiric(matInfo);
                oneiric.materials.push(matInfo);
            } else {
                const rarity = items.find((item) => item.Name === matInfo.Material).Rarity;
                const targetCard = rarity === 3 ? tier3Card : rarity === 2 ? tier2Card : unreleased;
                targetCard.materials.push(matInfo);
            }
        }
    });

    const stagesFirstLayer = calculatedCards.filter(
        (card) =>
            ['The Poussiere VI', 'Mintage Aesthetics VI', 'Oneiric Shop'].includes(card.stage) &&
            card.materials.length > 0
    );

    const stagesSecondLayer = calculatedCards.filter(
        (card) =>
            (card.stage.endsWith('II') || card.stage.endsWith('IV') || card.stage.endsWith('VI')) &&
            !stagesFirstLayer.some((firstLayerCard) => firstLayerCard.stage === card.stage) &&
            card.materials.length > 0
    );

    const stagesThirdLayer = calculatedCards.filter(
        (card) =>
            !['Tier 2', 'Tier 3', 'Unreleased', ...stagesFirstLayer.map((card) => card.stage), ...stagesSecondLayer.map((card) => card.stage)].includes(
                card.stage
            ) && card.materials.length > 0
    );

    const stagesFourthLayer = calculatedCards.filter(
        (card) =>
            ['Tier 2', 'Tier 3', 'Unreleased'].includes(card.stage) && card.materials.length > 0
    );

    const cardLayers = [
        { id: 0, cards: sortLayer(stagesFirstLayer) },
        { id: 1, cards: sortLayer(stagesSecondLayer) },
        { id: 2, cards: sortLayer(stagesThirdLayer) },
        { id: 3, cards: sortLayer(stagesFourthLayer) },
    ];

    return cardLayers;
}

function getPlan(materials) {
  // TODO: normalize the returned result data from the LP solver for integration with UI

  // TODO: convert the stage count to integer and calculate the expected number of drop materials for each stage based on result
  
  // I think we could arrange the UI according to the strategy, including crafting, stage farming, shop exchange, etc
  // Or maybe we could offer two views, one grouped by material, and the other grouped by strategy
  return getSolve(materials);
}

function getSolve(materials) {

  // prepare constraints
  const materialConstraints = {};
  const neededConstraints = {};
  const resonateMaterial = [
    "Sinuous Howl", "Interlaced Shudder", "Hypocritical Murmur", "Hoarse Echo", "Sonorous Knell", "Brief Cacophony", "Moment of Dissonance"
  ];
  materials.forEach(({ Material: matlName, Quantity: quantity }) => {
    // NOTE: not handle RESONANCE material in this function
    if (!resonateMaterial.includes(matlName))
      neededConstraints[matlName] = { min: quantity };
  });

  // prepare craft mappings
  const craftMapping = {};
  // restrict crafting materials number to integers
  const integers = [];

  for (let { Name: name, Material: matl, Quantity: quantity } of formulas) {
    materialConstraints[name] = { min: 0 };
    if (matl.length === 0) continue;

    const craftMaterials = {};
    matl.forEach((matName, idx) => {
      craftMaterials[matName] = -quantity[idx];
    });

    const strategyName = `Wilderness Crafting - ${name}`;
    craftMapping[strategyName] = {
      [name]: 1,
      ...craftMaterials,
      cost: 0,
    };

    if (!integers.includes(strategyName))
      integers.push(strategyName);
  }

  // prepare drop mappings
  const dropMapping = {};
  for (let stage in drops) {
    const stageInfo = drops[stage];
    const { count: times, cost, drops: dropCount } = stageInfo;
    dropMapping[stage] = { cost };
    for (let matlName in dropCount) {
      dropMapping[stage][matlName] = dropCount[matlName] / times;
    }
  }

  const constraints = {
    ...materialConstraints,
    ...neededConstraints,
  };

  // consider warehouse
  warehouse.forEach((matlInfo) => {
    const {
      Material: matlName,
      Quantity: quantity
    } = matlInfo;
    const matlQuant = parseInt(quantity);
    if (matlQuant > 0) {
        if (constraints[matlName]) {
            constraints[matlName] = {
                min: constraints[matlName].min - matlQuant
            }
        }
        else {
            constraints[matlName] = {
                min: - matlQuant
            }
        }
    }
  })

  // define LP solver
  const variables = Object.assign({}, craftMapping, dropMapping);

  const model = {
    objective: "cost",
    direction: "minimize",
    constraints,
    variables,
    integers, // TODO: we need to manually round up the level count for stages in the solve result 
  };

  const options = {
    precision: 0.01,
    tolerance: 0.1
  }

  return solve(model, options);
}

export function getCardLayers(materials) {
    const { cardLayers } = useProcessCards(materials);
    return cardLayers;
}

export function getTotalActivityAndDays(cardLayers) {
    let totalActivity = 0;
    let totalDays = 0;

    cardLayers.forEach((layer) => {
        layer.cards.forEach((card) => {
            if (card.days !== null) {
                totalActivity += card.activity;
                totalDays += parseFloat(card.days);
            }
        });
    });
    //console.log(totalActivity, totalDays);
    return [totalActivity, totalDays.toFixed(0)];
}