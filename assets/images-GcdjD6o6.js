import{q as s}from"./index-NvrH3v6t.js";const r=s().items,a=t=>{const e=r.find(n=>n.Name===t);return e?e.Id:null},i=t=>{const e=r.find(n=>n.Name===t);return e?e.Rarity:null},c=t=>t<=21?1:t<=45?2:t<=63?3:t<=86?4:t<=114?11:t===115?5:t===116?6:t<=119?7:t<=122?8:t<=125?9:t<=128?10:1,o=t=>{const e=a(t);return e?`images/items/icon/${e}.webp`:""},g=t=>{const e=a(t);return e?`images/items/icon/thumbnails/${e}.webp`:""},u=t=>{const e=i(t);return e?`images/items/border/thumbnails/${e}.webp`:""};function f(t){return`images/items/common/${t==="Oneiric Shop"?1:0}.webp`}function I(t){return`images/items/stage/${c(t)}.webp`}function b(t){return`images/arcanists/icon/thumbnails/${t}.webp`}function h(t){return`images/arcanists/i0/${t}.webp`}function p(t){return`images/arcanists/i2/${t}.webp`}function w(t){return t=t.toLowerCase(),`images/arcanists/misc/logo-${t}.webp`}function P(t){return t=t.toLowerCase(),`images/arcanists/misc/${t}.webp`}function $(t){return`images/arcanists/misc/bg${t}.webp`}export{P as a,$ as b,o as c,b as d,f as e,I as f,h as g,p as h,w as i,g as j,u as k};