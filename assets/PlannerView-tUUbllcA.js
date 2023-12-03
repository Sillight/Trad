import{o as z}from"./index-X0IYM990.js";import{h as le,o as v,c as g,a as e,n as K,d as _,i as R,w as X,v as ue,F as j,r as E,e as M,t as C,u as q,j as D,k as pe,b as U,f as G,l as me,_ as de,m as Ne,p as ye,q as B,s as be,x as xe,y as $e}from"./index-oMH2eTaw.js";const Le=le("planner",{state:()=>({selectedArcanists:[]}),persist:!0}),je=le("wilderness",{state:()=>({settings:{dust1:6,dust2:6,dust3:6,gold1:6,gold2:6,gold3:6,vigor:0,lazyModo:!1,wildernessOutput:{dust:19440,gold:8640}}}),persist:!0}),Ve=le("plannerSettings",{state:()=>({settings:{showUnreleased:!1}}),persist:!0}),De=["data-tip"],Ue={class:"rounded-md overflow-hidden"},qe={class:"avatar"},Qe=["src","alt"],ke={__name:"ArcanistIcon",props:{arcanist:{type:Object,required:!0}},setup(t){const a=s=>`images/arcanists/icon/${s}.png`;return(s,n)=>(v(),g("div",{class:"tooltip","data-tip":t.arcanist.Name},[e("div",Ue,[e("div",qe,[e("div",{class:K(["w-10 rounded",{"bg-orange-300":t.arcanist.Rarity===6,"bg-yellow-100":t.arcanist.Rarity===5,"bg-purple-400":t.arcanist.Rarity===4,"bg-sky-200":t.arcanist.Rarity===3,"bg-green-200":t.arcanist.Rarity===2}])},[e("img",{src:a(t.arcanist.Id),alt:t.arcanist.Name},null,8,Qe)],2)])])],8,De))}},Pe={class:"list-overlay"},We={class:"custom-modal-small h-2/3"},Be={class:"relative mb-4"},Ge=e("i",{class:"fas fa-times"},null,-1),Ee=[Ge],Te={class:"p-2 overflow-y-auto h-5/6"},Fe=["onClick"],ze={class:"text-white ml-8"},Ke={__name:"ArcanistList",props:{arcanists:{type:Array,required:!0}},emits:{closeOverlay:{type:Function,required:!0},selectArcanist:{type:Function,required:!0}},setup(t,{emit:a}){const s=t,n=a,o=d=>{n("selectArcanist",d),r()},r=()=>{n("closeOverlay")},h=_(""),c=R(()=>s.arcanists.filter(d=>d.Name.toLowerCase().includes(h.value.toLowerCase())));return(d,x)=>(v(),g("div",Pe,[e("div",We,[e("div",Be,[X(e("input",{"onUpdate:modelValue":x[0]||(x[0]=l=>h.value=l),type:"text",placeholder:"Search Arcanists",class:"bg-gray-800 text-white p-2 rounded-md w-11/12 focus:outline-none"},null,512),[[ue,h.value]]),e("button",{onClick:r,class:"absolute top-2 right-0 text-white"},Ee)]),e("div",Te,[(v(!0),g(j,null,E(c.value,l=>(v(),g("div",{key:l.Id,onClick:i=>o(l),class:"p-4 flex items-center cursor-pointer hover:bg-gray-700 transition-colors"},[M(ke,{arcanist:l},null,8,["arcanist"]),e("span",ze,C(l.Name),1)],8,Fe))),128))])])]))}},ge=q().items.data;function ae(t){return t>1e6?`${(t/1e6).toFixed(1)}m`:t>1e4?`${(t/1e3).toFixed(0)}k`:t.toString()}function Ae(t){const a=h=>{const c=ge.find(d=>d.Name==h);return c?c.Id:null},s=h=>{const c=ge.find(d=>d.Name==h);return c?c.Rarity:null},n=h=>{const c=a(h);return c?`images/items/icon/${c}.png`:null},o=h=>{const c=s(h);return c?`images/items/border/${c}.png`:null};return{material:t.Material,quantity:ae(t.Quantity),itemImagePath:n(t.Material),borderImagePath:o(t.Material)}}const Ye=["data-tip"],He={class:"relative inline-block"},Je=["src"],Xe=["src"],Ze={class:"absolute text-white bottom-4 right-3 bg-gray-700 rounded-tl px-1 py-px text-xs"},we={__name:"ItemIcon",props:{material:{type:Object,required:!0}},setup(t){const a=t,s=R(()=>Ae(a.material));return(n,o)=>(v(),g("div",{class:"tooltip","data-tip":s.value.material},[e("div",He,[e("img",{src:s.value.borderImagePath,alt:"Border Image",class:"w-20 h-20 absolute object-contain"},null,8,Je),e("img",{src:s.value.itemImagePath,alt:"Material Image",class:"w-20 h-20 object-contain"},null,8,Xe),e("div",Ze,C(s.value.quantity),1)])],8,Ye))}},et={class:"custom-scrollbar pt-10 flex flex-wrap justify-center overflow-y-scroll overflow-x-hidden"},tt={__name:"ItemList",props:{materialList:{type:Array,required:!0}},setup(t){const a=t;return(s,n)=>(v(),g("div",et,[(v(!0),g(j,null,E(a.materialList,o=>(v(),D(we,{key:o,material:o},null,8,["material"]))),128))]))}},st=q().calculations.data,fe=q().items.data;function Ie(t){t.sort((a,s)=>{const n=fe.find(d=>d.Name===a.Material),o=fe.find(d=>d.Name===s.Material),r=["Base Item","Resonate Material","Insight Material","Build Material"],h=r.indexOf(n.Category),c=r.indexOf(o.Category);return h!==c?h-c:o.Rarity!==n.Rarity?o.Rarity-n.Rarity:n.Name.localeCompare(o.Name)})}function Ce(t){const a={};return t.forEach(n=>{n&&(Array.isArray(n)?n.flat().forEach(({Material:r,Quantity:h})=>{a[r]?a[r]+=h:a[r]=h}):typeof n=="object"&&Object.entries(n).forEach(([o,r])=>{a[o]?a[o]+=r:a[o]=r}))}),Object.keys(a).map(n=>({Material:n,Quantity:a[n]}))}function at(t){var n,o;Ie(t);const a=((n=t.find(r=>r.Material==="Dust"))==null?void 0:n.Quantity)||0,s=((o=t.find(r=>r.Material==="Sharpodonty"))==null?void 0:o.Quantity)||0;return a===0&&s===0?t.filter(h=>h.Material!=="Dust"&&h.Material!=="Sharpodonty"):t}function Se(t){const a=l=>{let i={Dust:0,Sharpodonty:0};if(l.currentInsight==l.goalInsight){const{Dust:u,Sharpodonty:b}=o(l.currentLevel,l.goalLevel,l,l.currentInsight);return i.Dust+=u,i.Sharpodonty+=b,i}for(let u=l.currentInsight;u<=l.goalInsight;u++)if(u<l.goalInsight){const b=n(l,u);if(i.Dust+=b.Total.Dust,i.Sharpodonty+=b.Total.Sharpodonty,u==l.currentInsight){const{Dust:p,Sharpodonty:$}=o(1,l.currentLevel,l,u);i.Dust-=p,i.Sharpodonty-=$}}else{const{Dust:b,Sharpodonty:p}=o(1,l.goalLevel,l,u);i.Dust+=b,i.Sharpodonty+=p}return[{Material:"Dust",Quantity:i.Dust},{Material:"Sharpodonty",Quantity:i.Sharpodonty}]},s=(l,i,m)=>{const u={};if(l===i)return null;for(let p=Number(l+1);p<=i;p++){const $=m.find(I=>I.Id===p);$&&$.Material.forEach((I,S)=>{const V=$.Quantity[S];u[I]?u[I]+=V:u[I]=V})}return Object.keys(u).map(p=>({Material:p,Quantity:u[p]}))},n=(l,i)=>st.find(u=>u.Rarity.includes(l.info.Rarity)&&u.Insight==i),o=(l,i,m,u)=>{let b={Dust:0,Sharpodonty:0};for(let p=Number(++l);p<=Number(i);p++){const $=n(m,u),I=p.toString(),S=$.Levels[I];S&&(b.Dust+=S.Dust,b.Sharpodonty+=S.Sharpodonty)}return b},r=s(t.currentInsight,t.goalInsight,t.info.Insight),h=s(t.currentResonance,t.goalResonance,t.info.Resonance),c=a(t),d=Ce([r,h,c]);return at(d)}const lt={__name:"ArcanistCalculate",props:{arcanist:{type:Object,required:!0}},setup(t){const a=t,s=R(()=>{const n=a.arcanist;return Se(n)});return(n,o)=>(v(),g("div",null,[M(tt,{class:"max-h-48",materialList:s.value},null,8,["materialList"])]))}},nt={class:"relative w-2/3 md:w-1/3 flex justify-center"},ot={key:0},it=e("i",{class:"fa-regular fa-circle text-white"},null,-1),rt=[it],ct={key:1},ut=["src","alt"],dt=e("div",{class:"flex items-center justify-center"},[e("i",{class:"fa-solid fa-caret-up text-blue-500"})],-1),vt={class:"grid grid-cols-4 gap-1 p-3 border border-blue-300 rounded-md shadow-lg options-box custom-gradient-gray-blue"},ht=["onClick"],mt={class:"flex items-center justify-center font-semibold rounded-full w-8 h-8 leading-none flex-col bg-blue-500 text-white"},gt={key:0},ft=e("i",{class:"fa-regular fa-circle text-white"},null,-1),_t=[ft],pt={key:1},yt=["src","alt"],L={__name:"SelectList",props:{label:{type:String,required:!0},options:{type:Array,required:!0},selected:{type:Number}},emits:["update:selected"],setup(t,{emit:a}){const s=t,n=a,o=_(!1),r=_(s.selected),h=_(null),c=()=>{o.value=!0},d=()=>{o.value=!1},x=i=>{r.value=i,n("update:selected",i,s.label),o.value=!1},l=i=>`images/items/common/insight${i}.png`;return z(h,d),pe(()=>{s.selected===void 0?(r.value=s.options[0],n("update:selected",s.options[0],s.label)):(r.value=s.selected,n("update:selected",s.selected,s.label))}),(i,m)=>(v(),g("div",nt,[e("button",{onClick:c,class:"btn btn-sm btn-ghost gradient-blue w-1/2 m-2"},[t.label==="Current Insight"||t.label==="Goal Insight"?(v(),g(j,{key:0},[r.value===0?(v(),g("div",ot,rt)):(v(),g("div",ct,[e("img",{class:"avatar w-6",src:l(r.value),alt:"Option "+r.value},null,8,ut)]))],64)):(v(),g(j,{key:1},[U(C(r.value),1)],64))]),o.value?(v(),g("div",{key:0,ref_key:"containerRef",ref:h,class:"absolute mt-14 w-48 lg:w-64 z-50"},[dt,e("div",vt,[(v(!0),g(j,null,E(t.options,u=>(v(),g("button",{key:u,class:"m-1",onClick:b=>x(u)},[e("div",mt,[t.label==="Current Insight"||t.label==="Goal Insight"?(v(),g(j,{key:0},[u===0?(v(),g("div",gt,_t)):(v(),g("div",pt,[e("img",{src:l(u),alt:"Option "+u},null,8,yt)]))],64)):(v(),g(j,{key:1},[U(C(u),1)],64))])],8,ht))),128))])],512)):G("",!0)]))}},bt={class:"edit-overlay"},xt={class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800 to-blue-950 p-4 border-2 border-black rounded-md w-11/12 sm:max-w-2xl lg:h-auto"},$t={class:"flex items-center p-2 mb-3 shadow-border-b"},kt={class:"flex items-center justify-center mr-2 space-x-3"},At={class:"text-1xl md:text-2xl text-white font-bold"},wt={class:"text-sm text-white",for:"raritySelect"},It={class:"ml-auto flex items-center space-x-3"},Ct={class:"tooltip","data-tip":"Hidden / Show"},St=e("i",{class:"fas fa-times"},null,-1),Mt=[St],Rt=e("div",{class:"custom-line"},null,-1),Ot=e("div",{class:"custom-label text-blue-100"},"Current Level",-1),Nt={class:"mt-2 flex justify-center items-center leading-none"},Lt=e("i",{class:"text-white text-center flex items-center justify-center font-extrabold text-2xl -translate-y-2"},"_",-1),jt=e("div",{class:"custom-label text-blue-100"},"Goal Level",-1),Vt={class:"mt-2 flex justify-center items-center leading-none"},Dt=e("i",{class:"text-white text-center flex items-center justify-center font-extrabold text-2xl -translate-y-2"},"_",-1),Ut=e("div",{class:"custom-label text-blue-100"},"Resonance",-1),qt={class:"mt-2 flex justify-center items-center leading-none"},Qt=e("i",{class:"text-white fa-solid fa-angles-right text-center"},null,-1),Pt={class:"flex justify-center space-x-4"},Wt={key:0,class:"toast toast-middle toast-center"},Bt=e("div",{class:"-translate-x-3 alert alert-info bg-red-300"},[e("span",null,"Current and Goal are the same!")],-1),Gt=[Bt],Et={__name:"PlannerEdit",props:{selectedArcanist:{type:Object,required:!0},selectedArcanists:{type:Array,required:!0},listArcanists:{type:Array,required:!0}},emits:{closeOverlay:{type:Function,required:!0},updateSelectedArcanists:{type:Function,required:!0},updateListArcanists:{type:Function,required:!0}},setup(t,{emit:a}){const s=t,n=a,o=_(!1),r=_(0),h=q().calculations.data,c=_(s.selectedArcanist.info),d=_(s.selectedArcanists),x=_(s.listArcanists),l=_(s.selectedArcanist.currentInsight),i=_(s.selectedArcanist.currentLevel),m=_(s.selectedArcanist.currentResonance),u=_(s.selectedArcanist.goalInsight),b=_(s.selectedArcanist.goalLevel),p=_(s.selectedArcanist.goalResonance),$=_(s.selectedArcanist.isVisible),I=R(()=>({info:c.value,isVisible:$.value,currentInsight:l.value,currentLevel:i.value,goalInsight:u.value,goalLevel:b.value,currentResonance:m.value,goalResonance:p.value})),S=R(()=>c.value.Rarity),V=R(()=>[0,...c.value.Insight.map(y=>y.Id)]),A=R(()=>V.value.filter(y=>y>=l.value)),O=R(()=>{const y=h.find(f=>f.Rarity.includes(c.value.Rarity)&&f.Insight==l.value);return y?[1,...Object.keys(y.Levels).map(Number).filter(f=>f%5===0)]:[]}),N=R(()=>{if(u.value===null)return[];const y=h.find(f=>f.Rarity.includes(c.value.Rarity)&&f.Insight==u.value);return y?u.value===l.value?[1,...Object.keys(y.Levels).map(Number).filter(f=>f%5===0)].filter(f=>f>=i.value):[1,...Object.keys(y.Levels).map(Number).filter(f=>f%5===0)]:[]}),P=R(()=>{if(l.value===null)return[];if(l.value===0)return m.value=0,[0];const y=Number(l.value);if(y===0)return m.value=null,null;const f=y*5;return Array.from({length:f},(w,T)=>Number(T+1))}),H=R(()=>{if(u.value===null)return[];if(u.value===0)return p.value=0,[0];const y=Number(u.value),f=Number(m.value);if(y===0)return p.value=null,null;const w=f||1,T=y*5;return Array.from({length:T-w+1},(ve,k)=>Number(w+k))}),F=(y,f,w,T)=>Number(y)>Number(w)?!0:Number(y)<Number(w)?!1:Number(f)>Number(T),oe=()=>{if(l.value===u.value&&i.value===b.value&&m.value===p.value)return o.value=!0,setTimeout(()=>{o.value=!1},1e3),!0;o.value=!1},ee=()=>{if(oe())return;const y=d.value.findIndex(f=>Number(f.info.Id)===Number(I.value.info.Id));y!==-1?d.value[y]={...d.value[y],...I.value}:d.value.push(I.value),x.value=x.value.filter(f=>f.Id!==I.value.info.Id),n("updateSelectedArcanists",d.value),n("updateListArcanists",x.value),n("closeOverlay")},ie=()=>{const y=d.value.findIndex(f=>Number(f.info.Id)===Number(I.value.info.Id));y!==-1&&d.value.splice(y,1),J()},J=()=>{n("closeOverlay")},W=(y,f)=>{switch(f){case"Current Insight":l.value=y;break;case"Current Level":i.value=y;break;case"Current Resonance":m.value=y;break;case"Goal Insight":u.value=y;break;case"Goal Level":b.value=y;break;case"Goal Resonance":p.value=y;break;case"Visible":$.value=y;break}};return me([l,i,m,u,b,p],()=>{r.value+=1,i.value>O.value[O.value.length-1]&&(i.value=O.value[O.value.length-1]),b.value>N.value[N.value.length-1]&&(b.value=N.value[N.value.length-1])}),me([l,i,m],()=>{F(l.value,i.value,u.value,b.value)&&(u.value=l.value,b.value=i.value),Number(m.value)>Number(p.value)&&(p.value=m.value)}),(y,f)=>(v(),g("div",bt,[e("div",xt,[e("div",$t,[e("div",kt,[M(ke,{class:"ml-2",arcanist:c.value},null,8,["arcanist"]),e("h2",At,C(c.value.Name),1),e("label",wt,[U(C(S.value)+" ",1),e("i",{class:K(["fa-solid fa-star",{"text-orange-300":S.value===6,"text-yellow-100":S.value===5,"text-purple-400":S.value===4,"text-sky-200":S.value===3,"text-green-200":S.value===2}])},null,2)]),e("div",{class:"tooltip","data-tip":"Remove Arcanist"},[e("i",{onClick:ie,class:"fas fa-trash-alt text-gray-500"})])]),e("div",It,[e("div",Ct,[e("div",{onClick:f[0]||(f[0]=w=>$.value=!$.value),class:K(["badge badge-ghost",$.value?"green-badge":"red-badge"])},[e("i",{class:K($.value?"fa-regular fa-eye":"fa-regular fa-eye-slash")},null,2)],2)]),e("button",{onClick:J,class:"text-white"},Mt)])]),Rt,Ot,e("div",Nt,[(v(),D(L,{key:r.value,modelValue:l.value,"onUpdate:modelValue":f[1]||(f[1]=w=>l.value=w),selected:l.value,label:"Current Insight",options:V.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"])),Lt,(v(),D(L,{key:r.value,modelValue:i.value,"onUpdate:modelValue":f[2]||(f[2]=w=>i.value=w),selected:i.value,label:"Current Level",options:O.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"]))]),jt,e("div",Vt,[(v(),D(L,{key:r.value,modelValue:u.value,"onUpdate:modelValue":f[3]||(f[3]=w=>u.value=w),selected:u.value,label:"Goal Insight",options:A.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"])),Dt,(v(),D(L,{key:r.value,modelValue:b.value,"onUpdate:modelValue":f[4]||(f[4]=w=>b.value=w),selected:b.value,label:"Goal Level",options:N.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"]))]),Ut,e("div",qt,[(v(),D(L,{key:r.value,modelValue:m.value,"onUpdate:modelValue":f[5]||(f[5]=w=>m.value=w),selected:m.value,label:"Current Resonance",options:P.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"])),Qt,(v(),D(L,{key:r.value,modelValue:p.value,"onUpdate:modelValue":f[6]||(f[6]=w=>p.value=w),selected:p.value,label:"Goal Resonance",options:H.value,"onUpdate:selected":W},null,8,["modelValue","selected","options"]))]),e("div",Pt,[e("button",{onClick:ee,class:"btn btn-success"},"Save"),o.value?(v(),g("div",Wt,Gt)):G("",!0)]),M(lt,{arcanist:I.value},null,8,["arcanist"])])]))}},Tt=["data-tip"],Ft={class:"rounded-md overflow-hidden"},zt={class:"avatar"},Kt=["src","alt"],Yt={__name:"ArcanistIconToggle",props:{arcanist:{type:Object,required:!0},visible:{type:Boolean,required:!0}},setup(t){const a=s=>`images/arcanists/icon/${s}.png`;return(s,n)=>(v(),g("div",{class:"tooltip","data-tip":t.arcanist.Name},[e("div",Ft,[e("div",zt,[e("div",{class:K(["w-12 rounded",{"filter-grayscale opacity-50":!t.visible,"bg-orange-300":t.arcanist.Rarity===6,"bg-yellow-100":t.arcanist.Rarity===5,"bg-purple-400":t.arcanist.Rarity===4,"bg-sky-200":t.arcanist.Rarity===3,"bg-green-200":t.arcanist.Rarity===2}])},[e("img",{src:a(t.arcanist.Id),alt:t.arcanist.Name},null,8,Kt)],2)])])],8,Tt))}},Ht=de(Yt,[["__scopeId","data-v-11642327"]]),Jt={class:"flex flex-row flex-wrap justify-center space-x-2"},Xt=e("p",{class:"text-center text-slate-300 text-sm opacity-70"},"Left click to edit, right click to show / hide.",-1),Zt={__name:"PlannerSelector",props:{selectedArcanists:{type:Array,required:!0}},emits:["open-edit-overlay"],setup(t,{emit:a}){const s=t,n=a,o=_(s.selectedArcanists),r=c=>{n("open-edit-overlay",c)},h=c=>{c.isVisible=!c.isVisible};return(c,d)=>(v(),g("div",null,[e("div",Jt,[(v(!0),g(j,null,E(o.value,x=>(v(),D(Ht,{key:x.Name,arcanist:x.info,visible:x.isVisible,onClick:l=>r(x),onContextmenu:Ne(l=>h(x),["prevent"])},null,8,["arcanist","visible","onClick","onContextmenu"]))),128))]),Xt]))}},Q=le("warehouse",{state:()=>({isActive:!1,data:[],loaded:!1}),actions:{toggle(){this.isActive=!this.isActive},setData(t){this.data=t},setLoaded(){this.loaded=!0},addItem(t,a){this.data.push({Material:t,Quantity:0,Category:a})},addShopItem(t,a){for(let s=0;s<this.data.length;s++)if(this.data[s].Material===t){this.data[s].Quantity+=a;break}},updateItem(t,a){for(let s=0;s<this.data.length;s++)if(this.data[s].Material===t){this.data[s].Quantity=a;break}},resetAll(){for(let t=0;t<this.data.length;t++)this.data[t].Quantity=0},resetCategory(t){for(let a=0;a<this.data.length;a++)this.data[a].Category===t&&(this.data[a].Quantity=0)}},persist:!0}),Z=q().items.data,ce=q().stages.data,Me=q().crafts.data,Re=Q().data;function es(t){const a=t.map(s=>({...s}));return a.forEach(s=>{const n=Re.find(o=>o.Material===s.Material);n&&(s.Quantity-=n.Quantity)}),a}function ts(t){const a=t.map(s=>({...s}));return a.forEach(s=>{const n=Me.find(o=>o.Name===s.Material&&o.Rarity>=5)&&Re.find(o=>o.Material===s.Material);n&&(s.Quantity-=n.Quantity)}),a}function ss(t){let a=t.map(n=>({...n}));const s=[];return a.forEach(n=>{const o=Me.find(r=>r.Name===n.Material);if(o){s.push(o);for(let r=0;r<o.Material.length;r++){const h=o.Material[r],c=o.Quantity[r]*n.Quantity;c>0&&(a.find(d=>d.Material===h)?a.find(d=>d.Material===h).Quantity+=c:a.push({Material:h,Quantity:c}))}}}),a=a.filter(n=>!s.some(o=>o.Name===n.Material)),a.sort((n,o)=>{const r=Z.find(c=>c.Name===n.Material);return Z.find(c=>c.Name===o.Material).Id-r.Id}),a}function as(t){const s=Z.find(o=>o.Name===t.Material).Rarity,n=t.Quantity;return s===3?n*40:s===4?n*100:s===5?n*250:s===6?n*1500:0}function ls(t){return t==="Oneiric Shop"?"images/items/common/1.png":"images/items/common/0.png"}function Oe(t,a,s,n,o){return{stage:t,runs:isNaN(a)?0:a,activity:isNaN(s)?0:s,days:isNaN(n)?0:n,materials:o,activityImagePath:ls(t)}}function te(t,a){let s=a.find(n=>n.stage===t);return s||(s=Oe(t,null,t==="Oneiric Shop"?0:null,null,[]),a.push(s)),s}function se(t){return t.sort((a,s)=>{const n=ce.find(r=>r.Name===a.stage),o=ce.find(r=>r.Name===s.stage);return n&&o?n.Id-o.Id:n?-1:o?1:0})}function _e(t){const a=[],s=ts(t),n=ss(s);es(n).forEach(l=>{if(l.Quantity<=0)return;const i=ce.find(m=>m.Material.includes(l.Material));if(i){const m=Math.ceil(parseFloat(l.Quantity)/parseFloat(i.Quantity)),u=Math.ceil(m*i.Activity),b=(u/240).toFixed(1);if(l.Quantity>0){const p=a.findIndex($=>$.stage===i.Name);p!==-1?a[p].materials.push(l):a.push(Oe(i.Name,m,u,b,[l]))}}else{const m=te("Tier 3",a),u=te("Tier 2",a),b=te("Oneiric Shop",a),p=te("Unreleased",a);if(Z.find($=>$.Name===l.Material).Category==="Resonate Material")b.activity+=as(l),b.materials.push(l);else{const $=Z.find(S=>S.Name===l.Material).Rarity;($===3?m:$===2?u:p).materials.push(l)}}});const r=a.filter(l=>["The Poussiere VI","Mintage Aesthetics VI","Oneiric Shop"].includes(l.stage)&&l.materials.length>0),h=a.filter(l=>(l.stage.endsWith("II")||l.stage.endsWith("IV")||l.stage.endsWith("VI"))&&!r.some(i=>i.stage===l.stage)&&l.materials.length>0),c=a.filter(l=>!["Tier 2","Tier 3","Unreleased",...r.map(i=>i.stage),...h.map(i=>i.stage)].includes(l.stage)&&l.materials.length>0),d=a.filter(l=>["Tier 2","Tier 3","Unreleased"].includes(l.stage)&&l.materials.length>0);return[{id:0,cards:se(r)},{id:1,cards:se(h)},{id:2,cards:se(c)},{id:3,cards:se(d)}]}function ns(t){let a=0,s=0;return t.forEach(n=>{n.cards.forEach(o=>{o.days!==null&&(a+=o.activity,s+=parseFloat(o.days))})}),[a,s.toFixed(0)]}const os={class:"bg-gray-700/40 shadow rounded flex flex-col items-center justify-between relative"},is={class:"stage text-white p-2"},rs={class:"calculations w-full flex justify-center items-center bg-gradient-to-r from-blue-800/70 to-blue-900/90 text-white p-2 rounded-md"},cs={class:"border-blue-700/90 border-r pr-3"},us={key:0},ds=e("i",{class:"fa-solid fa-xmark text-xs mr-0.5"},null,-1),vs={key:1},hs={class:"pl-2"},ms=["src"],gs={class:"border-blue-700/90 border-l pl-3"},fs={class:"items-center flex"},_s={__name:"Card",props:{card:{type:Object,required:!0}},setup(t){return(a,s)=>(v(),g("div",os,[e("div",is,[e("p",null,C(t.card.stage),1)]),e("div",rs,[e("p",cs,[t.card.runs>0?(v(),g("span",us,[ds,U(C(t.card.runs),1)])):(v(),g("span",vs,C(t.card.runs),1))]),e("p",hs,C(t.card.activity==null?"?":t.card.activity),1),e("img",{src:t.card.activityImagePath,alt:"Activity Image",class:"inline-block w-8 h-8"},null,8,ms),e("p",gs,C(t.card.days)+" "+C(t.card.days===null?"":t.card.days>1?"days":"day"),1)]),e("div",fs,[(v(!0),g(j,null,E(t.card.materials,(n,o)=>(v(),g("div",{key:o},[M(we,{material:n},null,8,["material"])]))),128))])]))}},ps={class:"w-full mb-4 flex flex-col"},ys={class:"mb-4 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"},bs={__name:"PlannerLayer",props:{layer:{type:Object,required:!0}},setup(t){const a=t,s=R(()=>a.layer.cards&&a.layer.cards.length>0),n=R(()=>{switch(a.layer.id){case 0:return"yellow-badge";case 1:return"indigo-badge";case 2:return"purple-badge";case 3:return"green-badge";default:return"red-badge"}}),o=R(()=>{switch(a.layer.id){case 0:return"Resources";case 1:return"Insight";case 2:return"Hard Stages";case 3:return"Miscs";default:return"Undefined"}});return(r,h)=>(v(),g("div",ps,[s.value?(v(),g("div",{key:0,class:K(["badge badge-lg badge-ghost mt-2 mb-2 w-32",n.value])},C(o.value),3)):G("",!0),e("div",ys,[(v(!0),g(j,null,E(t.layer.cards,(c,d)=>(v(),D(_s,{key:d,card:c},null,8,["card"]))),128))])]))}},xs={class:"flex flex-wrap"},$s=e("p",{class:"text-slate-300 opacity-70 text-sm"},"High tier materials are converted to farmable ones.",-1),ks={__name:"PlannerResult",props:{selectedArcanists:{type:Array,required:!0}},emits:["update:totalActivityAndDays"],setup(t,{emit:a}){const s=t,n=a,o=_([]),r=_([]);return ye(()=>{const h=s.selectedArcanists.map(d=>d.isVisible?Se(d):[]),c=Ce(h);o.value=c,n("update:totalActivityAndDays",ns(_e(c))),r.value=_e(c)}),(h,c)=>(v(),g("div",xs,[$s,(v(!0),g(j,null,E(r.value,(d,x)=>(v(),D(bs,{key:x,layer:d},null,8,["layer"]))),128))]))}},As="/Kornblume/images/items/common/0.png",ws="/Kornblume/images/items/icon/55.png",Is="/Kornblume/images/items/icon/54.png",ne=t=>(be("data-v-b116625d"),t=t(),xe(),t),Cs={class:"flex custom-gradient-gray-blue-light px-2 py-2 md:px-4 lg:px-6 rounded-md items-center justify-center"},Ss=ne(()=>e("i",{class:"fa-solid fa-calculator text-white mr-3"},null,-1)),Ms={class:"tooltip flex items-center","data-tip":"Calculations hasn't been optimized"},Rs={class:"text"},Os=ne(()=>e("div",{class:"avatar"},[e("div",{class:"w-8 rounded"},[e("img",{src:As,alt:"avatar"})])],-1)),Ns={class:"text pr-3"},Ls={class:"tooltip","data-tip":"Wilderness Production"},js={class:"text"},Vs=ne(()=>e("div",{class:"avatar"},[e("div",{class:"w-8 rounded"},[e("img",{src:ws,alt:"avatar"})])],-1)),Ds={class:"tooltip","data-tip":"Wilderness Production"},Us={class:"text"},qs=ne(()=>e("div",{class:"avatar"},[e("div",{class:"w-8 rounded"},[e("img",{src:Is,alt:"avatar"})])],-1)),Qs={__name:"PlannerTotal",props:{totalActivityAndDays:{type:Array,required:!0},wildernessSettings:{type:Object,required:!0}},setup(t){return(a,s)=>(v(),g("div",Cs,[Ss,e("div",Ms,[e("div",Rs,C(t.totalActivityAndDays[0]),1),Os,e("div",Ns,C(t.totalActivityAndDays[1])+" "+C(t.totalActivityAndDays[1]>1?"days":"day"),1)]),e("div",Ls,[e("div",js,C(B(ae)(t.wildernessSettings.wildernessOutput.dust*t.totalActivityAndDays[1])),1)]),Vs,e("div",Ds,[e("div",Us,C(B(ae)(t.wildernessSettings.wildernessOutput.gold*t.totalActivityAndDays[1])),1)]),qs]))}},Ps=de(Qs,[["__scopeId","data-v-b116625d"]]),Y=t=>(be("data-v-9672159b"),t=t(),xe(),t),Ws={class:"list-overlay"},Bs={class:"custom-modal-small h-auto"},Gs=Y(()=>e("i",{class:"fas fa-times"},null,-1)),Es=[Gs],Ts=Y(()=>e("div",{class:"custom-label text-yellow-100"},"Dust Bell Towers",-1)),Fs={class:"grid grid-cols-3"},zs=Y(()=>e("div",{class:"custom-label text-yellow-100"},"Gold Bell Towers",-1)),Ks={class:"grid grid-cols-3"},Ys=Y(()=>e("div",{class:"custom-label text-yellow-100"},"Vigor (%)",-1)),Hs={class:"grid grid-cols-2 p-2 items-center"},Js={class:"tooltip","data-tip":"Collect once a day"},Xs={class:"form-control"},Zs={class:"cursor-pointer label justify-center"},ea=Y(()=>e("span",{class:"label-text text-yellow-100 mr-3"},"Lazy Modo",-1)),ta=["checked"],sa=Y(()=>e("div",{class:"custom-label text-yellow-100"},"Output",-1)),aa={class:"grid grid-cols-2 p-2"},la={class:"tooltip","data-tip":"Dust"},na={class:"flex items-center justify-center gradient-blue text-center rounded-xl mx-5 lg:mx-2 h-8"},oa={class:"tooltip","data-tip":"Sharpodonty"},ia={class:"flex items-center justify-center gradient-blue text-center rounded-xl mx-5 lg:mx-2 h-8"},ra={__name:"PlannerWilderness",props:{settings:{type:Object,required:!0}},emits:{closeOverlay:{type:Function,required:!0},saveWildernessSettings:{type:Function,required:!0}},setup(t,{emit:a}){const s=t,n=a,o=()=>{n("closeOverlay")},r=_(s.settings.dust1),h=_(s.settings.dust2),c=_(s.settings.dust3),d=_(s.settings.gold1),x=_(s.settings.gold2),l=_(s.settings.gold3),i=_(s.settings.vigor),m=_(s.settings.lazyModo),u=[0,1,2,3,4,5,6],b=[0,120,150,175,210,240,270],p=[0,60,75,80,96,108,120],$=(A,O)=>{switch(O){case"Dust 1":r.value=A;break;case"Dust 2":h.value=A;break;case"Dust 3":c.value=A;break;case"Gold 1":d.value=A;break;case"Gold 2":x.value=A;break;case"Gold 3":l.value=A;break}},I=()=>{const A=parseInt(i.value,10);if(isNaN(A)){i.value=null;return}if(A<0){i.value=0;return}if(A>50){i.value=50;return}i.value=A},S=()=>{const A={dust1:r.value,dust2:h.value,dust3:c.value,gold1:d.value,gold2:x.value,gold3:l.value,vigor:i.value,lazyModo:m.value,wildernessOutput:V.value};n("saveWildernessSettings",A),o()},V=R(()=>{const A=b[r.value]+b[h.value]+b[c.value],O=p[d.value]+p[x.value]+p[l.value],N=i.value?parseFloat(i.value/100):0,P=m.value?20:24,H=Math.ceil(A*(1+N)*P),F=Math.ceil(O*(1+N)*P);return{dust:H,gold:F}});return(A,O)=>(v(),g("div",Ws,[e("div",Bs,[e("button",{onClick:o,class:"absolute top-2 right-4 text-white"},Es),Ts,e("div",Fs,[M(L,{class:"select-list",options:u,selected:r.value,label:"Dust 1","onUpdate:selected":$},null,8,["selected"]),M(L,{class:"select-list",options:u,selected:h.value,label:"Dust 2","onUpdate:selected":$},null,8,["selected"]),M(L,{class:"select-list",options:u,selected:c.value,label:"Dust 3","onUpdate:selected":$},null,8,["selected"])]),zs,e("div",Ks,[M(L,{class:"select-list",options:u,selected:d.value,label:"Gold 1","onUpdate:selected":$},null,8,["selected"]),M(L,{class:"select-list",options:u,selected:x.value,label:"Gold 2","onUpdate:selected":$},null,8,["selected"]),M(L,{class:"select-list",options:u,selected:l.value,label:"Gold 3","onUpdate:selected":$},null,8,["selected"])]),Ys,e("div",Hs,[X(e("input",{onInput:I,"onUpdate:modelValue":O[0]||(O[0]=N=>i.value=N),type:"text",placeholder:"Vigor",class:"input input-bordered input-info input-sm mx-10 lg:mx-5 gradient-blue text-center"},null,544),[[ue,i.value]]),e("div",Js,[e("div",Xs,[e("label",Zs,[ea,X(e("input",{"onUpdate:modelValue":O[1]||(O[1]=N=>m.value=N),type:"checkbox",checked:m.value,class:"checkbox checkbox-info"},null,8,ta),[[$e,m.value]])])])])]),sa,e("div",aa,[e("div",la,[e("label",na,C(V.value.dust),1)]),e("div",oa,[e("label",ia,C(V.value.gold),1)])]),e("div",{class:"flex justify-center"},[e("button",{onClick:S,class:"btn btn-success"},"Save")])])]))}},ca=de(ra,[["__scopeId","data-v-9672159b"]]);function ua(t){const a=q().shops.data;t in a?a[t].forEach(n=>{const{Material:o,Quantity:r}=n;Q().addShopItem(o,r)}):console.error(`Version ${t} not found in shops data.`)}const da={class:"pb-6 z-50"},va={class:"relative inline-block z-50"},ha=["src"],ma=["src"],ga={__name:"ItemWarehouse",props:{material:{type:Object,required:!0}},setup(t,{emit:a}){const s=t,n=a,o=_(s.material.Quantity),r=R(()=>Ae(s.material)),h=()=>{const d=parseInt(o.value,10);if(isNaN(d)||d<0){o.value=0;return}o.value=ae(d)},c=()=>{h(),n("update:quantity",o.value)};return(d,x)=>(v(),g("div",da,[e("div",va,[e("img",{src:r.value.borderImagePath,alt:"Border Image",class:"w-20 h-20 absolute object-contain"},null,8,ha),e("img",{src:r.value.itemImagePath,alt:"Material Image",class:"w-20 h-20 object-contain"},null,8,ma),X(e("input",{"onUpdate:modelValue":x[0]||(x[0]=l=>o.value=l),onInput:c,type:"text",placeholder:"",class:"bg-slate-600 text-white absolute -bottom-3 left-3 w-14 input input-xs rounded-t-none text-center object-contain"},null,544),[[ue,o.value]])])]))}},fa={class:"list-overlay"},_a={class:"custom-modal-big h-5/6 lg:h-2/3 flex flex-col items-center"},pa=e("i",{class:"fas fa-times"},null,-1),ya=[pa],ba=e("p",{class:"text-white text-center font-bold text-lg"}," Warehouse ",-1),xa={class:"grid grid-cols-2 xl:grid-cols-4 justify-center items-center pb-5 text-center"},$a={class:"form-control items-center"},ka={class:"label cursor-pointer space-x-2"},Aa=e("span",{class:"label-text text-error text-xs font-bold"},"Base Item",-1),wa={class:"form-control items-center"},Ia={class:"label cursor-pointer space-x-2"},Ca=e("span",{class:"label-text text-info text-xs font-bold"},"Build Material",-1),Sa={class:"form-control items-center"},Ma={class:"label cursor-pointer space-x-2"},Ra=e("span",{class:"label-text text-success text-xs font-bold"},"Insight Material",-1),Oa={class:"form-control items-center"},Na={class:"label cursor-pointer space-x-2"},La=e("span",{class:"label-text text-warning text-xs font-bold"},"Resonate Material",-1),ja={class:"custom-scrollbar overflow-y-scroll overflow-x-hidden flex-grow mb-5"},Va={class:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"},Da={class:"flex space-x-10"},Ua={class:"flex space-x-3"},qa=e("button",{class:"btn btn-success btn-sm",onclick:"my_modal_shop1.showModal()"},"1.2 pt.1",-1),Qa={id:"my_modal_shop1",class:"modal"},Pa={class:"modal-box bg-slate-700"},Wa=e("p",{class:"py-4 text-lg text-white text-center"},[U("Add materials from "),e("span",{class:"text-error"},"1.2 part 1"),U(" event shop?")],-1),Ba=e("p",{class:"py-4 text-md text-white text-center"}," You should add once only.",-1),Ga={class:"flex justify-center"},Ea=e("button",{class:"btn btn-error btn-md",onclick:"my_modal_shop1.close()"},"No",-1),Ta=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),Fa=e("button",{class:"btn btn-success btn-sm",onclick:"my_modal_shop2.showModal()"},"1.2 pt.2",-1),za={id:"my_modal_shop2",class:"modal"},Ka={class:"modal-box bg-slate-700"},Ya=e("p",{class:"py-4 text-lg text-white text-center"},[U("Add materials from "),e("span",{class:"text-error"},"1.2 part 2"),U(" event shop?")],-1),Ha=e("p",{class:"py-4 text-md text-white text-center"}," You should add once only.",-1),Ja={class:"flex justify-center"},Xa=e("button",{class:"btn btn-error btn-md",onclick:"my_modal_shop2.close()"},"No",-1),Za=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),el=e("button",{class:"btn btn-error btn-sm",onclick:"my_modal_resetMat.showModal()"},"Reset",-1),tl=e("p",{class:"py-4 text-lg text-white text-center"},[U("Reset quantity of "),e("span",{class:"text-error"},"selected"),U(" categories?")],-1),sl=e("p",{class:"py-4 text-md text-white text-center"}," Click the buttons at the top to select.",-1),al=e("button",{class:"btn btn-error btn-md",onclick:"my_modal_resetMat.close()"},"No",-1),ll=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),nl={__name:"PlannerWarehouse",emits:{closeOverlay:{type:Function,required:!0}},setup(t,{emit:a}){const s=a,n=_({"Base Item":!1,"Build Material":!1,"Insight Material":!1,"Resonate Material":!1});pe(()=>{Q().data.length===0&&(console.log("Setting up warehouse"),q().items.data.forEach(l=>{l.IsReleased==!0&&(l.Category==="Build Material"||l.Category==="Insight Material"||l.Category==="Resonate Material"||l.Name==="Dust"||l.Name==="Sharpodonty")&&Q().addItem(l.Name,l.Category)})),Ie(Q().data)});const o=(l,i)=>{Q().updateItem(l,i)},r=l=>{n.value[l]=!n.value[l]},h=R(()=>Object.values(n.value).some(i=>i)?Q().data.filter(i=>n.value[i.Category]):Q().data),c=()=>{Object.keys(n.value).forEach(l=>{n.value[l]&&Q().resetCategory(l)}),s("closeOverlay")},d=l=>{ua(l),s("closeOverlay")},x=()=>{s("closeOverlay")};return(l,i)=>(v(),g("div",fa,[e("div",_a,[e("button",{onClick:x,class:"absolute top-2 right-4 text-white"},ya),ba,e("div",null,[e("div",xa,[e("div",$a,[e("label",ka,[Aa,e("input",{type:"checkbox",onChange:i[0]||(i[0]=m=>r("Base Item")),class:"checkbox checkbox-error"},null,32)])]),e("div",wa,[e("label",Ia,[Ca,e("input",{type:"checkbox",onChange:i[1]||(i[1]=m=>r("Build Material")),class:"checkbox checkbox-info"},null,32)])]),e("div",Sa,[e("label",Ma,[Ra,e("input",{type:"checkbox",onChange:i[2]||(i[2]=m=>r("Insight Material")),class:"checkbox checkbox-success"},null,32)])]),e("div",Oa,[e("label",Na,[La,e("input",{type:"checkbox",onChange:i[3]||(i[3]=m=>r("Resonate Material")),class:"checkbox checkbox-warning"},null,32)])])])]),e("div",ja,[e("div",Va,[(v(!0),g(j,null,E(h.value,m=>(v(),D(ga,{class:"",key:m.Material,material:m,"onUpdate:quantity":u=>o(m.Material,u)},null,8,["material","onUpdate:quantity"]))),128))])]),e("div",Da,[e("div",Ua,[qa,e("dialog",Qa,[e("div",Pa,[Wa,Ba,e("div",Ga,[e("button",{class:"btn btn-success btn-md mr-2",onClick:i[4]||(i[4]=m=>d("1.21"))},"Yes"),Ea])]),Ta]),Fa,e("dialog",za,[e("div",Ka,[Ya,Ha,e("div",Ja,[e("button",{class:"btn btn-success btn-md mr-2",onClick:i[5]||(i[5]=m=>d("1.22"))},"Yes"),Xa])]),Za])]),el,e("dialog",{id:"my_modal_resetMat",class:"modal"},[e("div",{class:"modal-box bg-slate-700"},[tl,sl,e("div",{class:"flex justify-center"},[e("button",{class:"btn btn-success btn-md mr-2",onClick:c},"Yes"),al])]),ll])])])]))}},ol={class:"list-overlay"},il={class:"custom-modal-small h-auto space-y-5"},rl=e("i",{class:"fas fa-times"},null,-1),cl=[rl],ul={class:"form-control"},dl={class:"cursor-pointer label justify-center space-x-5"},vl=e("span",{class:"label-text text-white text-md"},"Show unreleased",-1),hl={__name:"PlannerSettings",props:{settings:{type:Object,required:!0}},emits:{closeOverlay:{type:Function,required:!0},saveSettings:{type:Function,required:!0}},setup(t,{emit:a}){const s=t,n=a,o=_(s.settings.showUnreleased),r=()=>{n("closeOverlay")},h=()=>{const c={showUnreleased:o.value};n("saveSettings",c),r()};return(c,d)=>(v(),g("div",ol,[e("div",il,[e("button",{onClick:r,class:"absolute top-2 right-4 text-white"},cl),e("div",ul,[e("label",dl,[vl,X(e("input",{"onUpdate:modelValue":d[0]||(d[0]=x=>o.value=x),type:"checkbox",class:"checkbox checkbox-info"},null,512),[[$e,o.value]])])]),e("div",{class:"flex justify-center"},[e("button",{onClick:h,class:"btn btn-success"},"Save")])])]))}},ml={class:"responsive-spacer"},gl=e("h2",{class:"text-2xl text-white font-bold mb-4 lg:mb-6"},"Planner",-1),fl=e("i",{class:"fa-solid fa-wand-magic-sparkles"},null,-1),_l=e("i",{class:"fa-solid fa-tree"},null,-1),pl=[_l],yl=e("i",{class:"fa-solid fa-box-archive"},null,-1),bl=[yl],xl=e("i",{class:"fa-solid fa-gear"},null,-1),$l=[xl],kl=e("div",{class:"custom-line"},null,-1),Al=e("div",{class:"custom-line"},null,-1),wl={key:0,class:"overlay"},Il={key:1,class:"overlay"},Cl={key:2,class:"overlay"},Sl={key:3,class:"overlay"},Ml={key:4,class:"overlay"},Nl={__name:"PlannerView",setup(t){const a=Le(),s=je(),n=q().arcanists.data,o=Ve(),r=_([]),h=R(()=>a.selectedArcanists.map(k=>k.info.Id));ye(()=>{r.value=n.filter(k=>!h.value.includes(k.Id)&&(o.settings.showUnreleased?!0:k.IsReleased)),r.value.sort((k,re)=>{const he=re.Rarity-k.Rarity;return he!==0?he:k.Name.localeCompare(re.Name)})});const c=_([]),d=_([]),x=_(!1),l=_(!1),i=_(!1),m=_(!1),u=_(!1),b=_(null),p=_(null),$=_(null),I=_(null),S=_(null),V=()=>{x.value=!0},A=()=>{x.value=!1},O=()=>{l.value=!0},N=k=>{c.value=k,O()},P=()=>{l.value=!1},H=()=>{i.value=!0},F=()=>{i.value=!1},oe=()=>{m.value=!0},ee=()=>{m.value=!1},ie=()=>{u.value=!0},J=()=>{u.value=!1},W=k=>{c.value={info:k,isVisible:!0,currentInsight:0,currentLevel:1,currentResonance:0,goalInsight:0,goalLevel:1,goalResonance:0},O()},y=k=>{a.selectedArcanists=k,P()},f=k=>{r.value=k},w=k=>{d.value=k},T=k=>{s.settings=k},ve=k=>{o.settings=k};return z(b,A),z(p,P),z($,F),z(I,ee),z(S,J),(k,re)=>(v(),g("div",ml,[gl,M(Zt,{selectedArcanists:B(a).selectedArcanists,onOpenEditOverlay:N},null,8,["selectedArcanists"]),e("div",{class:"flex justify-between items-center mb-2 mt-2"},[e("button",{onClick:V,class:"btn btn-ghost btn-sm custom-gradient-button"},[fl,U(" Add Arcanist")]),e("div",{class:"flex space-x-2"},[e("div",{class:"tooltip","data-tip":"Wilderness Settings"},[e("button",{onClick:H,class:"btn btn-ghost btn-sm custom-gradient-button"},pl)]),e("div",{class:"tooltip","data-tip":"Manage Warehouse"},[e("button",{onClick:oe,class:"btn btn-ghost btn-sm custom-gradient-button"},bl)]),e("button",{onClick:ie,class:"btn btn-ghost btn-sm custom-gradient-button"},$l)])]),kl,M(Ps,{totalActivityAndDays:d.value,wildernessSettings:B(s).settings},null,8,["totalActivityAndDays","wildernessSettings"]),Al,x.value?(v(),g("div",wl,[M(Ke,{ref_key:"arcanistListRef",ref:b,arcanists:r.value,onCloseOverlay:A,onSelectArcanist:W},null,8,["arcanists"])])):G("",!0),l.value?(v(),g("div",Il,[M(Et,{ref_key:"plannerEditRef",ref:p,selectedArcanist:c.value,selectedArcanists:B(a).selectedArcanists,listArcanists:r.value,onCloseOverlay:P,onUpdateSelectedArcanists:y,onUpdateListArcanists:f},null,8,["selectedArcanist","selectedArcanists","listArcanists"])])):G("",!0),i.value?(v(),g("div",Cl,[M(ca,{ref_key:"wildernessRef",ref:$,settings:B(s).settings,onCloseOverlay:F,onSaveWildernessSettings:T},null,8,["settings"])])):G("",!0),m.value?(v(),g("div",Sl,[M(nl,{ref_key:"warehouseRef",ref:I,onCloseOverlay:ee},null,512)])):G("",!0),u.value?(v(),g("div",Ml,[M(hl,{ref_key:"settingsRef",ref:S,settings:B(o).settings,onCloseOverlay:J,onSaveSettings:ve},null,8,["settings"])])):G("",!0),M(ks,{selectedArcanists:B(a).selectedArcanists,"onUpdate:totalActivityAndDays":w},null,8,["selectedArcanists"])]))}};export{Nl as default};