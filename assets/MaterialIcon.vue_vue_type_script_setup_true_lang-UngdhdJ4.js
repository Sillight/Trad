import{q as f,d as h,D as I,E as p,o as _,c as x,a as o,t as y}from"./index-FIXZlUyh.js";import{k as d,l as g}from"./images-keat606P.js";function b(t){return`${(t*100).toFixed(1)}%`}function N(t){return Number.isInteger(t)?t>=1e6?`${(t/1e6).toFixed(1)}m`:t>=1e4?`${(t/1e3).toFixed(0)}k`:t.toString():b(t)}function B(t){return{material:t.Material,quantity:N(t.Quantity),itemImagePath:d(t.Material),borderImagePath:g(t.Material)}}function $(t){return{material:t.Name,itemImagePath:d(t.Name),borderImagePath:g(t.Name)}}function w(t,a){const s=f().items;t.sort((r,e)=>{const i=s.findIndex(c=>c.Name===r.Name),n=s.findIndex(c=>c.Name===e.Name),l=a.indexOf(r.Category),m=a.indexOf(e.Category);if(l!==m)return l-m;const u=e.Rarity-r.Rarity;return u!==0?u:i-n})}const P=["data-tip"],M={class:"relative inline-block"},v=["src"],k=["src"],C={class:"absolute text-white bottom-4 right-3 bg-gray-700 rounded-tl px-1 py-px text-xs"},F=h({__name:"MaterialIcon",props:{material:{type:Object,required:!0}},setup(t){const a=t,s=I(),r=p(),e=()=>B(a.material),i=()=>{s.setSelectedMaterial(a.material),r.push("/items")};return(n,l)=>(_(),x("div",{onClick:i,class:"cursor-pointer"},[o("div",{class:"tooltip","data-tip":n.$t(e().material)},[o("div",M,[o("img",{src:e().borderImagePath,alt:"Border Image",class:"w-20 h-20 absolute"},null,8,v),o("img",{src:e().itemImagePath,alt:"Material Image",class:"w-20 h-20 avatar"},null,8,k),o("div",C,y(e().quantity),1)])],8,P)]))}});export{F as _,$ as b,N as f,B as n,w as s};