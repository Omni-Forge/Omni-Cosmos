import{k as c,o as b,h as P,E as G,j as I,aC as j,ay as x,$ as B,u as E,q as D,J,F as K,ax as U,N as w,M as C,U as F,aD as T,z as V,aE as Y,aF as H}from"./runtime.BpsoJ9mv.js";import{d as O,i as Q,f as W,g as R,h as X,j as Z,n as m,k as ss}from"./store.CIqAHlUC.js";import{b as as}from"./disclose-version.N1JcEE3x.js";function fs(s,a,r,e,o){var f;c&&b();var n=(f=a.$$slots)==null?void 0:f[r],k=!1;n===!0&&(n=a[r==="default"?"children":r],k=!0),n===void 0?o!==null&&o(s):n(s,k?()=>e:e)}function es(s){const a={};s.children&&(a.default=!0);for(const r in s.$$slots)a[r]=!0;return a}function os(s,a,r,e,o,n){let k=c;c&&b();var f,h,u=null;c&&E.nodeType===1&&(u=E,b());var N=c?E:s,d;P(()=>{const _=a()||null;var A=r||_==="svg"?j:null;_!==f&&(d&&(_===null?D(d,()=>{d=null,h=null}):_===h?J(d):(K(d),O(!1))),_&&_!==h&&(d=I(()=>{if(u=c?u:A?document.createElementNS(A,_):document.createElement(_),as(u,u),e){var g=c?U(u):u.appendChild(x());c&&(g===null?w(!1):C(g)),e(u,g)}B.nodes_end=u,N.before(u)})),f=_,f&&(h=f),O(!0))},G),k&&(w(!0),C(N))}function us(s){if(c){var a=!1,r=()=>{if(!a){if(a=!0,s.hasAttribute("value")){var e=s.value;$(s,"value",null),s.value=e}if(s.hasAttribute("checked")){var o=s.checked;$(s,"checked",null),s.checked=o}}};s.__on_r=r,H(r),ss()}}function _s(s,a){var r=s.__attributes??(s.__attributes={});r.value===(r.value=a)||s.value===a&&(a!==0||s.nodeName!=="PROGRESS")||(s.value=a)}function cs(s,a){var r=s.__attributes??(s.__attributes={});r.checked!==(r.checked=a)&&(s.checked=a)}function $(s,a,r,e){var o=s.__attributes??(s.__attributes={});c&&(o[a]=s.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&s.nodeName==="LINK")||o[a]!==(o[a]=r)&&(a==="style"&&"__styles"in s&&(s.__styles={}),a==="loading"&&(s[T]=r),r==null?s.removeAttribute(a):typeof r!="string"&&L(s).includes(a)?s[a]=r:s.setAttribute(a,r))}function ns(s,a,r,e,o=!1,n=!1,k=!1){var f=a||{},h=s.tagName==="OPTION";for(var u in a)u in r||(r[u]=null);var N=L(s),d=s.__attributes??(s.__attributes={}),_=[];for(const i in r){let t=r[i];if(h&&i==="value"&&t==null){s.value=s.__value="",f[i]=t;continue}var A=f[i];if(t!==A){f[i]=t;var g=i[0]+i[1];if(g!=="$$"){if(g==="on"){const y={},p="$$"+i;let l=i.slice(2);var z=W(l);if(Q(l)&&(l=l.slice(0,-7),y.capture=!0),!z&&A){if(t!=null)continue;s.removeEventListener(l,f[p],y),f[p]=null}if(t!=null)if(z)s[`__${l}`]=t,X([l]);else{let S=function(M){f[i].call(this,M)};a?f[p]=R(l,s,S,y):_.push([i,t,()=>f[p]=R(l,s,S,y)])}}else if(i==="style"&&t!=null)s.style.cssText=t+"";else if(i==="autofocus")Z(s,!!t);else if(i==="__value"||i==="value"&&t!=null)s.value=s[i]=s.__value=t;else{var v=i;o||(v=m(v)),t==null&&!n?(d[i]=null,s.removeAttribute(i)):N.includes(v)&&(n||typeof t!="string")?s[v]=t:typeof t!="function"&&(c&&(v==="src"||v==="href"||v==="srcset")||$(s,v,t))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return a||V(()=>{if(s.isConnected)for(const[i,t,y]of _)f[i]===t&&y()}),f}var q=new Map;function L(s){var a=q.get(s.nodeName);if(a)return a;q.set(s.nodeName,a=[]);for(var r,e=F(s),o=Element.prototype;o!==e;){r=Y(e);for(var n in r)r[n].set&&a.push(n);e=F(e)}return a}function ls(s){if(!c&&s.loading==="lazy"){var a=s.src;s[T]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[T]!=="eager"&&(s.loading="lazy"),s.src=a})}}export{$ as a,ns as b,cs as c,_s as d,os as e,es as f,ls as h,us as r,fs as s};