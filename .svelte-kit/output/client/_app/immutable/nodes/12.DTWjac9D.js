import{c as X,a as S,t as Z}from"../chunks/disclose-version.N1JcEE3x.js";import{i as Y}from"../chunks/legacy.Bq8hjaPg.js";import{f as aa,p as ea,l as sa,b as ta,m as ra,e as ia,s,c as e,t as O,g as t,a as oa,r as a,n}from"../chunks/runtime.BpsoJ9mv.js";import{s as na,b as la,a as l}from"../chunks/store.CIqAHlUC.js";import{I as va,e as da,i as ca}from"../chunks/Icon.oS-Lt7LZ.js";import{s as pa,a as U}from"../chunks/attributes.C59D3o5x.js";import{p as ma}from"../chunks/stores.8gzRtGeB.js";import{l as ua,s as _a}from"../chunks/props.Du0vtbS7.js";import{P as ga}from"../chunks/plus.DRRX1CZ4.js";import{S as fa}from"../chunks/server.CxxYWvAu.js";import{D as xa}from"../chunks/database.mMrgwlhs.js";function ba(c,v){const p=ua(v,["children","$$slots","$$events","$$legacy"]);va(c,_a({name:"layers"},()=>p,{iconNode:[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]],children:(d,j)=>{var i=X(),o=aa(i);pa(o,v,"default",{},null),S(d,i)},$$slots:{default:!0}}))}var ha=Z('<div class="group relative overflow-hidden rounded-lg bg-neutral-900 p-6"><div class="absolute inset-0 bg-gradient-to-bl from-blue-950/30 via-transparent to-transparent"></div> <div class="relative"><h3 class="text-xl font-semibold text-white mb-4"> </h3> <div class="space-y-4"><div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400"><!> <span>Applications</span></div> <span class="text-white"> </span></div> <div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400"><!> <span>Services</span></div> <span class="text-white"> </span></div> <div><div class="flex justify-between text-sm mb-2"><span class="text-gray-400">Memory Usage</span> <span class="text-white"> </span></div> <div class="w-full bg-neutral-800 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full transition-all"></div></div></div></div> <div class="mt-6 flex space-x-3"><a><button class="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Dashboard</button></a> <button class="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Settings</button></div></div></div>'),ya=Z('<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center"><div><div class="text-sm text-gray-400 mb-1"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations</a> <span class="mx-2">/</span> <span> </span></div> <div class="flex items-center space-x-3"><!> <h1 class="text-2xl font-semibold text-white">Spaces</h1></div></div> <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"><!> <span>New Space</span></button></div> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div></div>');function Ba(c,v){ea(v,!1);const p=na(),m=()=>la(ma,"$page",p),d=ra();let j=[{guid:"1",name:"Development",apps_count:8,services_count:5,memory_usage:2.1,memory_quota:5},{guid:"2",name:"Staging",apps_count:4,services_count:3,memory_usage:1.8,memory_quota:5}];sa(()=>m(),()=>{ta(d,m().params.orgId)}),ia(),Y();var i=ya(),o=e(i),u=e(o),_=e(u),q=s(e(_),4),k=e(q,!0);a(q),a(_);var D=s(_,2),C=e(D);ba(C,{class:"w-6 h-6 text-blue-400"}),n(2),a(D),a(u);var I=s(u,2),E=e(I);ga(E,{class:"w-4 h-4"}),n(2),a(I),a(o);var L=s(o,2);da(L,5,()=>j,ca,(F,r)=>{var g=ha(),N=s(e(g),2),f=e(N),H=e(f,!0);a(f);var x=s(f,2),b=e(x),h=e(b),J=e(h);fa(J,{class:"w-4 h-4"}),n(2),a(h);var P=s(h,2),K=e(P,!0);a(P),a(b);var y=s(b,2),w=e(y),Q=e(w);xa(Q,{class:"w-4 h-4"}),n(2),a(w);var z=s(w,2),R=e(z,!0);a(z),a(y);var B=s(y,2),$=e(B),G=s(e($),2),T=e(G);a(G),a($);var A=s($,2),V=e(A);a(A),a(B),a(x);var M=s(x,2),W=e(M);n(2),a(M),a(N),a(g),O(()=>{l(H,t(r).name),l(K,t(r).apps_count),l(R,t(r).services_count),l(T,`${t(r).memory_usage??""}GB / ${t(r).memory_quota??""}GB`),U(V,"style",`width: ${t(r).memory_usage/t(r).memory_quota*100}%`),U(W,"href",`./space/${t(r).guid??""}/`)}),S(F,g)}),a(L),a(i),O(()=>l(k,t(d))),S(c,i),oa()}export{Ba as component};
