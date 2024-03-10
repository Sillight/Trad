import{d as w,i as r,c as a,a as e,t as s,f as b,u as x,V as k,W as $,X as j,v as S,Y as C,o as l}from"./index-gGYtbZo4.js";import{G as n,s as D}from"./gApi-20_YNS8z.js";const I={class:"responsive-spacer"},G={class:"pb-6"},B={class:"text-2xl text-white font-bold mb-2 lg:mb-4"},E={class:"text-white"},T={class:"flex justify-center items-center p-2 space-x-5"},F={class:"pb-6"},K={class:"text-2xl text-white font-bold mb-2 lg:mb-4"},M={class:"text-white"},V=e("div",{role:"alert",class:"alert alert-info custom-gradient-gray-blue text-white mt-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current shrink-0 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"text-sm lg:text-base"}," Experimental. It is heavily advised to Export Backup first and use a dummy Gmail.")],-1),A={class:"flex justify-center items-center p-2 space-x-5"},N=["disabled"],O=e("i",{class:"fa-brands fa-google-drive"},null,-1),z={key:1,class:"flex flex-col justify-center items-center"},P=["disabled"],R=e("i",{class:"fa-brands fa-google-drive"},null,-1),J={key:0,class:"text-white opacity-90 mt-2"},W={class:"flex space-x-1 items-center"},X=e("p",{class:"text-success text-base"},"•",-1),Y={class:"text-white text-sm opacity-90"},q={class:"pb-6"},H={class:"text-2xl text-white font-bold mb-2 lg:mb-4"},L={class:"text-white"},Q={class:"flex flex-wrap justify-center items-center p-2 space-x-5 gap-y-5"},U={onclick:"resetTracker.showModal()",class:"red-button"},Z={onclick:"resetAll.showModal()",class:"red-button"},ee={id:"resetTracker",class:"modal"},te={class:"modal-box custom-border custom-gradient-gray-blue flex flex-col justify-center items-center"},se=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"},"✕")],-1),oe={class:"pb-4 text-white text-center"},ne={class:"pb-4 text-white text-center"},ae=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),le={id:"resetAll",class:"modal"},ie={class:"modal-box custom-border custom-gradient-gray-blue flex flex-col justify-center items-center"},ce=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"},"✕")],-1),re={class:"pb-4 text-white text-center"},de={class:"pb-4 text-white text-center"},ue=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null," close ")],-1),pe=w({__name:"ProfileView",setup(he){const u=r(null),d=r(!1),i=r(!1),h=r(!1),m=()=>{k()},p=()=>{u.value.click()},g=t=>{const o=t.target.files[0];o&&$(o)},f=()=>{j()},_=()=>{S().reset(),window.location.reload()},v=async()=>{await n.signIn(),i.value=!0;const o=(await n.getFiles()).find(c=>c.name==="kornblume.json");if(!o)await n.createFile("kornblume.json",JSON.stringify(localStorage)),console.log("kornblume.json created");else{console.log("kornblume.json exists. importing data...");const c=await n.downloadFile(o.id);C(c),setTimeout(()=>window.location.reload())}},y=()=>{n.signOut(),i.value=!1};return n.init().then(async()=>{d.value=!0,i.value=await n.isSignedIn(),D()}),(t,o)=>(l(),a("div",I,[e("div",G,[e("h2",B,s(t.$t("profile")),1),e("p",E,s(t.$t("you-can-export-or-import-your-data-here")),1),e("div",T,[e("button",{onClick:m,class:"blue-button"},s(t.$t("export-data")),1),e("input",{type:"file",ref_key:"fileInput",ref:u,onChange:g,accept:".json",class:"ml-4",style:{display:"none"}},null,544),e("button",{onClick:p,class:"green-button"},s(t.$t("import-data")),1)])]),e("div",F,[e("h2",K,s(t.$t("google-drive-save")),1),e("p",M,s(t.$t("you-can-use-google-drive-and-let-kornblume-save-and-sync-data-between-devices-we-only-read-and-write-files-that-kornblume-created"))+".",1),V,e("div",A,[i.value?(l(),a("div",z,[e("button",{disabled:!d.value,class:"blue-button",onClick:y},[b(s(t.$t("sign-out-google-drive"))+" ",1),R],8,P),h.value?(l(),a("div",J,[e("p",null,s(x(n).getEmail()),1)])):(l(),a("button",{key:1,onClick:o[0]||(o[0]=c=>h.value=!0),class:"btn btn-ghost btn-sm mt-2 text-white/90 opacity-90"},s(t.$t("click-to-show-email")),1)),e("div",W,[X,e("p",Y,s(t.$t("synced")),1)])])):(l(),a("button",{key:0,disabled:!d.value,class:"green-button",onClick:v},[b(s(t.$t("login-google-drive"))+" ",1),O],8,N))])]),e("div",q,[e("h2",H,s(t.$t("danger-zone")),1),e("p",L,s(t.$t("if-you-encounter-any-unexpected-issues-with-the-site-you-can-reset-your-data-sorry-for-the-inconvenience")),1),e("div",Q,[e("button",U,s(t.$t("reset-tracker")),1),e("button",Z,s(t.$t("reset-data")),1)]),e("dialog",ee,[e("div",te,[se,e("p",oe,s(t.$t("once-you-delete-your-summon-tracker-data-there-is-no-going-back")),1),e("p",ne,s(t.$t("please-be-certain")),1),e("button",{onClick:_,class:"red-button"},s(t.$t("reset-tracker")),1)]),ae]),e("dialog",le,[e("div",ie,[ce,e("p",re,s(t.$t("once-you-delete-your-data-there-is-no-going-back")),1),e("p",de,s(t.$t("please-be-certain")),1),e("button",{onClick:f,class:"red-button"},s(t.$t("reset-all")),1)]),ue])])]))}});export{pe as default};
