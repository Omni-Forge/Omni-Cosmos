import{c as _e,t as h,a as p}from"../chunks/disclose-version.N1JcEE3x.js";import{i as de}from"../chunks/legacy.Bq8hjaPg.js";import{p as ce,l as fe,b as d,m as B,G as le,e as xe,f as ye,s as n,c as r,g as e,t as x,i as he,d as ue,a as ve,r as a,n as J}from"../chunks/runtime.BpsoJ9mv.js";import{a as v,e as W}from"../chunks/store.CIqAHlUC.js";import{e as ie,i as me}from"../chunks/Icon.oS-Lt7LZ.js";import{a as y,r as we}from"../chunks/attributes.C59D3o5x.js";import{c as ze,i as K}from"../chunks/index-client.CY8cH23_.js";import{b as Oe}from"../chunks/input.BWE0VUSD.js";import{b as qe}from"../chunks/select.DFFMRfw6.js";import{p as Se}from"../chunks/event-modifiers.CWmzcjye.js";import{p as R}from"../chunks/props.Du0vtbS7.js";import{X as je}from"../chunks/x.DKvme5mQ.js";import{B as Ce}from"../chunks/building-2.Q0QRbmVu.js";import{P as Ee}from"../chunks/plus.DRRX1CZ4.js";import{C as Ne}from"../chunks/cloud.BUB5LT4w.js";import{U as Fe}from"../chunks/users.AQNl68W1.js";var $e=h("<option> </option>"),ke=h('<select class="w-full px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"><option> </option><!></select>'),Be=h('<input class="w-full px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors">'),Te=h('<p class="mt-1 text-sm text-red-400"> </p>'),Ue=h('<div><label class="block text-sm font-medium text-gray-300 mb-1"> </label> <!> <!></div>'),De=h('<p class="text-sm text-red-400"> </p>'),Ge=h('<div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"><div class="bg-neutral-900 rounded-lg w-full max-w-md p-6 space-y-4"><div class="flex justify-between items-center"><h2 class="text-xl font-semibold text-white"> </h2> <button class="text-gray-400 hover:text-white transition-colors"><!></button></div> <form class="space-y-4"><!> <!> <div class="flex justify-end space-x-3"><button type="button" class="px-4 py-2 text-gray-300 hover:text-white transition-colors">Cancel</button> <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> </button></div></form></div></div>');function Me(Y,O){ce(O,!1);const N=ze();let T=R(O,"title",8),q=R(O,"show",8),ee=R(O,"endpoint",8),F=R(O,"fields",8),l=B({}),b=B({}),w=B(!1),g=B(null);function te(t,o){if(t.required&&!o)return`${t.label} is required`;if(t.type==="number"){const u=Number(o);if(t.min!==void 0&&u<t.min)return`${t.label} must be at least ${t.min}`;if(t.max!==void 0&&u>t.max)return`${t.label} must not exceed ${t.max}`}if(t.validations){for(const u of t.validations)if(!u.rule(o))return u.message}return""}function U(){const t={};let o=!0;return F().forEach(u=>{const m=te(u,e(l)[u.id]);m&&(t[u.id]=m,o=!1)}),d(b,t),o}async function ae(){if(U()){d(w,!0),d(g,null);try{const t=await fetch(ee(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e(l))});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const o=await t.json();N("success",{data:o}),S()}catch(t){d(g,t instanceof Error?t.message:"An error occurred while submitting the form"),console.error("Form submission error:",t)}finally{d(w,!1)}}}function S(){d(l,{}),d(b,{}),d(g,null),N("close")}fe(()=>(le(q()),le(F())),()=>{q()&&(d(l,F().reduce((t,o)=>(t[o.id]="",t),{})),d(b,{}),d(g,null))}),xe(),de();var L=_e(),c=ye(L);K(c,q,t=>{var o=Ge(),u=r(o),m=r(u),D=r(m),G=r(D,!0);a(D);var j=n(D,2),M=r(j);je(M,{class:"w-5 h-5"}),a(j),a(m);var P=n(m,2),V=r(P);ie(V,1,F,C=>C.id,(C,s)=>{var _=Ue(),E=r(_),re=r(E,!0);a(E);var I=n(E,2);K(I,()=>e(s).type==="select",z=>{var i=ke();x(()=>{e(l)[e(s).id],he(()=>{e(s)})});var f=r(i);f.value=((f.__value="")==null,"");var pe=r(f);a(f);var be=n(f);ie(be,1,()=>e(s).options||[],me,(ne,Z)=>{var H=$e(),oe={},ge=r(H,!0);a(H),x(()=>{oe!==(oe=e(Z).value)&&(H.value=(H.__value=e(Z).value)==null?"":e(Z).value),v(ge,e(Z).label)}),p(ne,H)}),a(i),x(()=>{y(i,"id",e(s).id),v(pe,`Select ${e(s).label??""}`)}),qe(i,()=>e(l)[e(s).id],ne=>ue(l,e(l)[e(s).id]=ne)),p(z,i)},z=>{var i=Be();we(i),x(()=>{y(i,"id",e(s).id),y(i,"type",e(s).type),y(i,"min",e(s).min),y(i,"max",e(s).max),y(i,"placeholder",e(s).placeholder)}),Oe(i,()=>e(l)[e(s).id],f=>ue(l,e(l)[e(s).id]=f)),p(z,i)});var se=n(I,2);K(se,()=>e(b)[e(s).id],z=>{var i=Te(),f=r(i,!0);a(i),x(()=>v(f,e(b)[e(s).id])),p(z,i)}),a(_),x(()=>{y(E,"for",e(s).id),v(re,e(s).label)}),p(C,_)});var Q=n(V,2);K(Q,()=>e(g),C=>{var s=De(),_=r(s,!0);a(s),x(()=>v(_,e(g))),p(C,s)});var $=n(Q,2),k=r($),A=n(k,2),X=r(A,!0);a(A),a($),a(P),a(u),a(o),x(()=>{v(G,T()),A.disabled=e(w),v(X,e(w)?"Submitting...":"Submit")}),W("click",j,S),W("click",k,S),W("submit",P,Se(ae)),p(t,o)}),p(Y,L),ve()}var Pe=h('<div class="group relative overflow-hidden rounded-lg bg-neutral-900 p-6"><div class="absolute inset-0 bg-gradient-to-bl from-blue-950/30 via-transparent to-transparent"></div> <div class="relative"><h3 class="text-xl font-semibold text-white mb-4"> </h3> <div class="space-y-4"><div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400"><!> <span>Spaces</span></div> <span class="text-white"> </span></div> <div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400"><!> <span>Users</span></div> <span class="text-white"> </span></div> <div><div class="flex justify-between text-sm mb-2"><span class="text-gray-400">Memory Usage</span> <span class="text-white"> </span></div> <div class="w-full bg-neutral-800 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full transition-all"></div></div></div></div> <div class="mt-6 flex space-x-3"><a><button class="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">View Spaces</button></a> <button class="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Settings</button></div></div></div>'),Ve=h('<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center"><div><div class="text-sm text-gray-400 mb-1"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations</a> <span class="mx-2">/</span></div> <div class="flex items-center space-x-3"><!> <h1 class="text-2xl font-semibold text-white">Organizations</h1></div></div> <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"><!> <span>New Organization</span></button></div> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div> <!></div>');function st(Y,O){ce(O,!1);let N=B([{guid:"1",name:"FiveTwenty INC",slug:"fivetwenty-inc",spaces:5,users:12,memory_usage:4.2,memory_quota:10},{guid:"2",name:"CNCF",slug:"cncf",spaces:3,users:8,memory_usage:7.8,memory_quota:20}]),T=B(!1);const q={title:"New Organization",endpoint:"/api/organizations",fields:[{id:"name",label:"Organization Name",type:"text",placeholder:"Enter organization name",required:!0,validations:[{rule:c=>c.length>=3,message:"Organization name must be at least 3 characters"},{rule:c=>/^[a-zA-Z0-9\s-]+$/.test(c),message:"Organization name can only contain letters, numbers, spaces, and hyphens"}]},{id:"memory_quota",label:"Memory Quota (GB)",type:"number",required:!0,min:1,max:100,placeholder:"Enter memory quota in GB"},{id:"org_type",label:"Organization Type",type:"select",required:!0,options:[{value:"business",label:"Business"},{value:"nonprofit",label:"Non-Profit"},{value:"education",label:"Educational"}]}]};function ee(c){const t={...c.detail.data,guid:crypto.randomUUID(),slug:F(c.detail.data.name),spaces:0,users:1,memory_usage:0};d(N,[...e(N),t])}function F(c){return c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}de();var l=Ve(),b=r(l),w=r(b),g=n(r(w),2),te=r(g);Ce(te,{class:"w-6 h-6 text-blue-400"}),J(2),a(g),a(w);var U=n(w,2),ae=r(U);Ee(ae,{class:"w-4 h-4"}),J(2),a(U),a(b);var S=n(b,2);ie(S,5,()=>e(N),me,(c,t)=>{var o=Pe(),u=n(r(o),2),m=r(u),D=r(m,!0);a(m);var G=n(m,2),j=r(G),M=r(j),P=r(M);Ne(P,{class:"w-4 h-4"}),J(2),a(M);var V=n(M,2),Q=r(V,!0);a(V),a(j);var $=n(j,2),k=r($),A=r(k);Fe(A,{class:"w-4 h-4"}),J(2),a(k);var X=n(k,2),C=r(X,!0);a(X),a($);var s=n($,2),_=r(s),E=n(r(_),2),re=r(E);a(E),a(_);var I=n(_,2),se=r(I);a(I),a(s),a(G);var z=n(G,2),i=r(z);J(2),a(z),a(u),a(o),x(()=>{v(D,e(t).name),v(Q,e(t).spaces),v(C,e(t).users),v(re,`${e(t).memory_usage??""}GB / ${e(t).memory_quota??""}GB`),y(se,"style",`width: ${e(t).memory_usage/e(t).memory_quota*100}%`),y(i,"href",`/app/org/${e(t).slug??""}/spaces`)}),p(c,o)}),a(S);var L=n(S,2);Me(L,{get show(){return e(T)},get title(){return q.title},get endpoint(){return q.endpoint},get fields(){return q.fields},$$events:{close:()=>d(T,!1),success:ee}}),a(l),W("click",U,()=>d(T,!0)),p(Y,l),ve()}export{st as component};
