import{q as p,d as _,D as y,E as x,o as c,c as d,a as s,l as h,t as b}from"./index-gGYtbZo4.js";import{k as I,l as f}from"./images-wvJi_WTB.js";function N(t){return`${(t*100).toFixed(1)}%`}function P(t){return Number.isInteger(t)?t>=1e6?`${(t/1e6).toFixed(1)}m`:t>=1e4?`${(t/1e3).toFixed(0)}k`:t.toString():N(t)}function B(t){return{material:t.Material,quantity:P(t.Quantity),itemImagePath:I(t.Material),borderImagePath:f(t.Material)}}function F(t){return{material:t.Name,itemImagePath:I(t.Name),borderImagePath:f(t.Name)}}function O(t,a){const o=p().items;t.sort((r,e)=>{const i=o.findIndex(m=>m.Name===r.Name),n=o.findIndex(m=>m.Name===e.Name),l=a.indexOf(r.Category),u=a.indexOf(e.Category);if(l!==u)return l-u;const g=e.Rarity-r.Rarity;return g!==0?g:i-n})}const k=["data-tip"],v={class:"avatar"},M={class:"relative inline-block"},C=["src"],D=["src"],S={class:"absolute text-white bottom-4 right-3 bg-gray-700 rounded-tl px-1 py-px text-xs"},R=_({__name:"MaterialIcon",props:{material:{type:Object,required:!0}},setup(t){const a=t,o=y(),r=x(),e=()=>B(a.material),i=()=>{o.setSelectedMaterial(a.material),r.push("/items")};return(n,l)=>(c(),d("div",{onClick:i,class:"cursor-pointer"},[s("div",{class:"tooltip","data-tip":n.$t(e().material)},[s("div",v,[s("div",M,[e().borderImagePath?(c(),d("img",{key:0,src:e().borderImagePath,alt:"Border Image",class:"w-20 h-20 absolute"},null,8,C)):h("",!0),e().itemImagePath?(c(),d("img",{key:1,src:e().itemImagePath,alt:"Material Image",class:"w-20 h-20"},null,8,D)):h("",!0),s("div",S,b(e().quantity),1)])])],8,k)]))}});export{R as _,F as b,P as f,B as n,O as s};