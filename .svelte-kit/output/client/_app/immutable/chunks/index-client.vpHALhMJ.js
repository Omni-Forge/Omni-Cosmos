import{S as T,ah as X,ai as k,a6 as w,aj as ee,m as y,ak as p,al as I,k as m,U as j,am as re,af as ne,M as Q,d as te,T as F,e as B,i as M,h as L,b as se,E as ie,O as ae,P as fe,K as ue,Q as U,g as le,an as oe,ao as ce,ap as V,aq as de,v as q,ar as Y,as as S,at as _e,au as ve,av as $,aw as pe,ax as J,ay as be,az as he,I as z,ab as me,aA as we,a5 as ye,aB as Pe,G as N,aC as W,F as ge}from"./utils.B3j9k9dF.js";import{q as xe}from"./disclose-version.8BCKBZeZ.js";function R(e,r=null,i){if(typeof e!="object"||e===null||T in e)return e;const a=ne(e);if(a!==X&&a!==k)return e;var s=new Map,o=Q(e),_=w(0);o&&s.set("length",w(e.length));var d;return new Proxy(e,{defineProperty(u,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&ee();var f=s.get(n);return f===void 0?(f=w(t.value),s.set(n,f)):y(f,R(t.value,d)),!0},deleteProperty(u,n){var t=s.get(n);if(t===void 0)n in u&&s.set(n,w(p));else{if(o&&typeof n=="string"){var f=s.get("length"),l=Number(n);Number.isInteger(l)&&l<f.v&&y(f,l)}y(t,p),G(_)}return!0},get(u,n,t){var h;if(n===T)return e;var f=s.get(n),l=n in u;if(f===void 0&&(!l||(h=I(u,n))!=null&&h.writable)&&(f=w(R(l?u[n]:p,d)),s.set(n,f)),f!==void 0){var c=m(f);return c===p?void 0:c}return Reflect.get(u,n,t)},getOwnPropertyDescriptor(u,n){var t=Reflect.getOwnPropertyDescriptor(u,n);if(t&&"value"in t){var f=s.get(n);f&&(t.value=m(f))}else if(t===void 0){var l=s.get(n),c=l==null?void 0:l.v;if(l!==void 0&&c!==p)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return t},has(u,n){var c;if(n===T)return!0;var t=s.get(n),f=t!==void 0&&t.v!==p||Reflect.has(u,n);if(t!==void 0||j!==null&&(!f||(c=I(u,n))!=null&&c.writable)){t===void 0&&(t=w(f?R(u[n],d):p),s.set(n,t));var l=m(t);if(l===p)return!1}return f},set(u,n,t,f){var x;var l=s.get(n),c=n in u;if(o&&n==="length")for(var h=t;h<l.v;h+=1){var b=s.get(h+"");b!==void 0?y(b,p):h in u&&(b=w(p),s.set(h+"",b))}l===void 0?(!c||(x=I(u,n))!=null&&x.writable)&&(l=w(void 0),y(l,R(t,d)),s.set(n,l)):(c=l.v!==p,y(l,R(t,d)));var g=Reflect.getOwnPropertyDescriptor(u,n);if(g!=null&&g.set&&g.set.call(f,t),!c){if(o&&typeof n=="string"){var A=s.get("length"),P=Number(n);Number.isInteger(P)&&P>=A.v&&y(A,P+1)}G(_)}return!0},ownKeys(u){m(_);var n=Reflect.ownKeys(u).filter(l=>{var c=s.get(l);return c===void 0||c.v!==p});for(var[t,f]of s)f.v!==p&&!(t in u)&&n.push(t);return n},setPrototypeOf(){re()}})}function G(e,r=1){y(e,e.v+r)}function H(e){return e!==null&&typeof e=="object"&&T in e?e[T]:e}function Ne(e,r){return Object.is(H(e),H(r))}function Ke(e,r,i,a=null,s=!1){L&&se();var o=e,_=null,d=null,u=null,n=s?ie:0;te(()=>{if(u===(u=!!r()))return;let t=!1;if(L){const f=o.data===ae;u===f&&(o=fe(),ue(o),U(!1),t=!0)}u?(_?F(_):_=B(()=>i(o)),d&&M(d,()=>{d=null})):(d?F(d):a&&(d=B(()=>a(o))),_&&M(_,()=>{_=null})),t&&U(!0)},n),L&&(o=le)}const Ee={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r,i){return new Proxy({props:e,exclude:r},Ee)}const Re={get(e,r){if(!e.exclude.includes(r))return m(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,i){return r in e.special||(e.special[r]=Oe({get[r](){return e.props[r]}},r,V)),e.special[r](i),Y(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Y(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function je(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Re)}const Ie={get(e,r){let i=e.props.length;for(;i--;){let a=e.props[i];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,i){let a=e.props.length;for(;a--;){let s=e.props[a];S(s)&&(s=s());const o=I(s,r);if(o&&o.set)return o.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let a=e.props[i];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const s=I(a,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){for(let i of e.props)if(S(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){S(i)&&(i=i());for(const a in i)r.includes(a)||r.push(a)}return r}};function qe(...e){return new Proxy({props:e},Ie)}function Z(e){for(var r=j,i=j;r!==null&&!(r.f&(_e|ve));)r=r.parent;try{return $(r),e()}finally{$(i)}}function Oe(e,r,i,a){var C;var s=(i&pe)!==0,o=!J||(i&be)!==0,_=(i&he)!==0,d=(i&we)!==0,u=!1,n;_?[n,u]=xe(()=>e[r]):n=e[r];var t=(C=I(e,r))==null?void 0:C.set,f=a,l=!0,c=!1,h=()=>(c=!0,l&&(l=!1,d?f=q(a):f=a),f);n===void 0&&a!==void 0&&(t&&o&&oe(),n=h(),t&&t(n));var b;if(o)b=()=>{var v=e[r];return v===void 0?h():(l=!0,c=!1,v)};else{var g=Z(()=>(s?z:me)(()=>e[r]));g.f|=ce,b=()=>{var v=m(g);return v!==void 0&&(f=void 0),v===void 0?f:v}}if(!(i&V))return b;if(t){var A=e.$$legacy;return function(v,E){return arguments.length>0?((!o||!E||A||u)&&t(E?b():v),v):b()}}var P=!1,x=!1,D=ye(n),O=Z(()=>z(()=>{var v=b(),E=m(D);return P?(P=!1,x=!0,E):(x=!1,D.v=v)}));return s||(O.equals=de),function(v,E){if(Pe&&(P=x,b(),m(D)),arguments.length>0){const K=E?m(O):o&&_?R(v):v;return O.equals(K)||(P=!0,y(D,K),c&&f!==void 0&&(f=K),q(()=>m(O))),v}return m(O)}}function Ce(e){N===null&&W(),J&&N.l!==null?Te(N).m.push(e):ge(()=>{const r=q(e);if(typeof r=="function")return r})}function Se(e,r,{bubbles:i=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:r,bubbles:i,cancelable:a})}function Fe(){const e=N;return e===null&&W(),(r,i,a)=>{var o;const s=(o=e.s.$$events)==null?void 0:o[r];if(s){const _=Q(s)?s.slice():[s],d=Se(r,i,a);for(const u of _)u.call(e.x,d);return!d.defaultPrevented}return!0}}function Te(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{R as a,Ne as b,Fe as c,Ke as i,je as l,Ce as o,Oe as p,Le as r,qe as s};
