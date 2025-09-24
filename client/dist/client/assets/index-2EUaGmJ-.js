import{a as _}from"./createLucideIcon-4KffNfrb.js";import{r,j as y}from"./index-Bxjeq3ub.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],k=_("github",M);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],L=_("heart",S);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],P=_("mail",$);function j(t,e=[]){let c=[];function a(x,o){const n=r.createContext(o),s=c.length;c=[...c,o];const d=m=>{var v;const{scope:u,children:h,...p}=m,f=((v=u==null?void 0:u[t])==null?void 0:v[s])||n,l=r.useMemo(()=>p,Object.values(p));return y.jsx(f.Provider,{value:l,children:h})};d.displayName=x+"Provider";function C(m,u){var f;const h=((f=u==null?void 0:u[t])==null?void 0:f[s])||n,p=r.useContext(h);if(p)return p;if(o!==void 0)return o;throw new Error(`\`${m}\` must be used within \`${x}\``)}return[d,C]}const i=()=>{const x=c.map(o=>r.createContext(o));return function(n){const s=(n==null?void 0:n[t])||x;return r.useMemo(()=>({[`__scope${t}`]:{...n,[t]:s}}),[n,s])}};return i.scopeName=t,[a,E(i,...e)]}function E(...t){const e=t[0];if(t.length===1)return e;const c=()=>{const a=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(x){const o=a.reduce((n,{useScope:s,scopeName:d})=>{const m=s(x)[`__scope${d}`];return{...n,...m}},{});return r.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return c.scopeName=e.scopeName,c}function w(t){const e=r.useRef(t);return r.useEffect(()=>{e.current=t}),r.useMemo(()=>(...c)=>{var a;return(a=e.current)==null?void 0:a.call(e,...c)},[])}var N=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};export{k as G,L as H,P as M,N as a,j as c,w as u};
