import{c as x,t as h,a as i}from"../chunks/disclose-version.N1JcEE3x.js";import{i as U}from"../chunks/legacy.Bq8hjaPg.js";import{p as j,b as l,m as y,g as _,f as k,c as o,s as v,a as z,r as n}from"../chunks/runtime.BpsoJ9mv.js";import{o as A,i as w}from"../chunks/index-client.CY8cH23_.js";import{s as P}from"../chunks/attributes.C59D3o5x.js";import{S as L}from"../chunks/Spinner.DXFUDTpX.js";import{a as S}from"../chunks/auth.1Uvfqlg4.js";import"../chunks/entry.9noDchyj.js";import{N as M}from"../chunks/Navbar.k2WVONuq.js";var R=h('<div class="flex justify-center items-center h-screen bg-black"><!></div>'),q=h('<div class="min-h-screen text-gray-200"><!> <main class="pt-4.5"><div style="height: 72px;"></div> <!></main></div>'),B=h('<div class="min-h-screen text-gray-200"><!> <main class="pt-4.5"><div style="height: 72px;"></div> <!></main></div>');function O(N,d){j(d,!1);let m=y(null),c=y(!0),g=!0;S.subscribe(a=>{l(m,a.user),l(c,a.loading)}),A(()=>{g=new URLSearchParams(window.location.search).has("test"),g?(l(m,{name:"Test User",email:"test@example.com",avatar:""}),l(c,!1)):_(m)||S.checkAuth()}),U();var b=x(),T=k(b);w(T,()=>_(c),a=>{var r=R(),f=o(r);L(f,{size:"12",class:"text-gray-200 animate-spin"}),n(r),i(a,r)},a=>{var r=x(),f=k(r);w(f,()=>_(m),p=>{var e=q(),s=o(e);M(s);var t=v(s,2),u=v(o(t),2);P(u,d,"default",{},null),n(t),n(e),i(p,e)},p=>{var e=B(),s=o(e);M(s);var t=v(s,2),u=v(o(t),2);P(u,d,"default",{},null),n(t),n(e),i(p,e)},!0),i(a,r)}),i(N,b),z()}export{O as component};
