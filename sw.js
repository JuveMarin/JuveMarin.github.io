if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>r(e,n),f={module:{uri:n},exports:o,require:t};i[n]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-1d19b58b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icono.png",revision:"45ef9abd2fd35fb07832d0647c285e70"},{url:"index.html",revision:"19a9b75cc00b485ccc8d12f2719a2ac1"},{url:"manifest.json",revision:"df31c6f3749702a4f5c37d8b5b467554"},{url:"README.md",revision:"749bf9887a5edcf93ff4d269c9a005e1"},{url:"script.js",revision:"43553bc2cfa02d43baf585eac6ef28e4"},{url:"style.css",revision:"4c2203f39daf9b719130b9466872c0f2"},{url:"worker.js",revision:"5ed6405673b40417e42c2a572766837c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map