import{h as l,b as E,g as k,d as P,E as R,e as B,a1 as G,L as K,Q as L,K as S,U as j,a9 as D,i as Q,T as U,$ as V,ad as T,ae as Y,w as H,af as C,ag as J}from"./utils.B3j9k9dF.js";import{g as W,h as O,i as X,j as Z,k as q,l as m,m as ss,o as as,p as es}from"./disclose-version.8BCKBZeZ.js";function is(s,a,e,r,_){var f;l&&E();var u=(f=a.$$slots)==null?void 0:f[e],N=!1;u===!0&&(u=a[e==="default"?"children":e],N=!0),u===void 0?_!==null&&_(s):u(s,N?()=>r:r)}function fs(s){const a={};s.children&&(a.default=!0);for(const e in s.$$slots)a[e]=!0;return a}function ls(s,a,e,r,_,u){let N=l;l&&E();var f,g,c=null;l&&k.nodeType===1&&(c=k,E());var p=l?k:s,v;P(()=>{const n=a()||null;var A=e||n==="svg"?D:null;n!==f&&(v&&(n===null?Q(v,()=>{v=null,g=null}):n===g?U(v):(V(v),O(!1))),n&&n!==g&&(v=B(()=>{if(c=l?c:A?document.createElementNS(A,n):document.createElement(n),W(c,c),r){var h=l?G(c):c.appendChild(K());l&&(h===null?L(!1):S(h)),r(c,h)}j.nodes_end=c,p.before(c)})),f=n,f&&(g=f),O(!0))},R),N&&(L(!0),S(p))}function _s(s){if(l){var a=!1,e=()=>{if(!a){if(a=!0,s.hasAttribute("value")){var r=s.value;$(s,"value",null),s.value=r}if(s.hasAttribute("checked")){var _=s.checked;$(s,"checked",null),s.checked=_}}};s.__on_r=e,Y(e),X()}}function $(s,a,e,r){var _=s.__attributes??(s.__attributes={});l&&(_[a]=s.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&s.nodeName==="LINK")||_[a]!==(_[a]=e)&&(a==="style"&&"__styles"in s&&(s.__styles={}),a==="loading"&&(s[T]=e),e==null?s.removeAttribute(a):typeof e!="string"&&F(s).includes(a)?s[a]=e:s.setAttribute(a,e))}function cs(s,a,e,r,_=!1,u=!1,N=!1){var f=a||{},g=s.tagName==="OPTION";for(var c in a)c in e||(e[c]=null);var p=F(s),v=s.__attributes??(s.__attributes={}),n=[];for(const t in e){let i=e[t];if(g&&t==="value"&&i==null){s.value=s.__value="",f[t]=i;continue}var A=f[t];if(i!==A){f[t]=i;var h=t[0]+t[1];if(h!=="$$"){if(h==="on"){const y={},b="$$"+t;let o=t.slice(2);var w=es(o);if(Z(o)&&(o=o.slice(0,-7),y.capture=!0),!w&&A){if(i!=null)continue;s.removeEventListener(o,f[b],y),f[b]=null}if(i!=null)if(w)s[`__${o}`]=i,m([o]);else{let z=function(M){f[t].call(this,M)};a?f[b]=q(o,s,z,y):n.push([t,i,()=>f[b]=q(o,s,z,y)])}}else if(t==="style"&&i!=null)s.style.cssText=i+"";else if(t==="autofocus")ss(s,!!i);else if(t==="__value"||t==="value"&&i!=null)s.value=s[t]=s.__value=i;else{var d=t;_||(d=as(d)),i==null&&!u?(v[t]=null,s.removeAttribute(t)):p.includes(d)&&(u||typeof i!="string")?s[d]=i:typeof i!="function"&&(l&&(d==="src"||d==="href"||d==="srcset")||$(s,d,i))}t==="style"&&"__styles"in s&&(s.__styles={})}}}return a||H(()=>{if(s.isConnected)for(const[t,i,y]of n)f[t]===i&&y()}),f}var x=new Map;function F(s){var a=x.get(s.nodeName);if(a)return a;x.set(s.nodeName,a=[]);for(var e,r=C(s),_=Element.prototype;_!==r;){e=J(r);for(var u in e)e[u].set&&a.push(u);r=C(r)}return a}function ns(s){if(!l&&s.loading==="lazy"){var a=s.src;s[T]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[T]!=="eager"&&(s.loading="lazy"),s.src=a})}}function us(s,a){var e=s.__className,r=I(a);l&&s.getAttribute("class")===r?s.__className=r:(e!==r||l&&s.getAttribute("class")!==r)&&(r===""?s.removeAttribute("class"):s.setAttribute("class",r),s.__className=r)}function os(s,a){var e=s.__className,r=I(a);l&&s.className===r?s.__className=r:(e!==r||l&&s.className!==r)&&(a==null?s.removeAttribute("class"):s.className=r,s.__className=r)}function I(s){return s??""}export{cs as a,fs as b,os as c,$ as d,ls as e,us as f,ns as h,_s as r,is as s};