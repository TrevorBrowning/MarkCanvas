(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ir(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const X={},ht=[],Ie=()=>{},Bo=()=>!1,kn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ar=e=>e.startsWith("onUpdate:"),de=Object.assign,lr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Fo=Object.prototype.hasOwnProperty,j=(e,t)=>Fo.call(e,t),M=Array.isArray,pt=e=>wn(e)==="[object Map]",xs=e=>wn(e)==="[object Set]",E=e=>typeof e=="function",ee=e=>typeof e=="string",Ke=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",ks=e=>(J(e)||E(e))&&E(e.then)&&E(e.catch),ws=Object.prototype.toString,wn=e=>ws.call(e),Wo=e=>wn(e).slice(8,-1),vs=e=>wn(e)==="[object Object]",cr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rt=ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ho=/-(\w)/g,Ye=vn(e=>e.replace(Ho,(t,n)=>n?n.toUpperCase():"")),Uo=/\B([A-Z])/g,it=vn(e=>e.replace(Uo,"-$1").toLowerCase()),Ss=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=vn(e=>e?`on${Ss(e)}`:""),qe=(e,t)=>!Object.is(e,t),nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zn=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Xn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let jr;const Sn=()=>jr||(jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ur(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ee(s)?Yo(s):ur(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ee(e)||J(e))return e}const zo=/;(?![^(]*\))/g,Xo=/:([^]+)/,qo=/\/\*[^]*?\*\//g;function Yo(e){const t={};return e.replace(qo,"").split(zo).forEach(n=>{if(n){const s=n.split(Xo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function xt(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=xt(e[n]);s&&(t+=s+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vo=ir(Go);function Ts(e){return!!e||e===""}const _s=e=>!!(e&&e.__v_isRef===!0),Be=e=>ee(e)?e:e==null?"":M(e)||J(e)&&(e.toString===ws||!E(e.toString))?_s(e)?Be(e.value):JSON.stringify(e,Cs,2):String(e),Cs=(e,t)=>_s(t)?Cs(e,t.value):pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[Ln(s,o)+" =>"]=r,n),{})}:xs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ln(n))}:Ke(t)?Ln(t):J(t)&&!M(t)&&!vs(t)?String(t):t,Ln=(e,t="")=>{var n;return Ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class Ko{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){++this._on===1&&(this.prevScope=pe,pe=this)}off(){this._on>0&&--this._on===0&&(pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Qo(){return pe}let G;const Nn=new WeakSet;class As{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nn.has(this)&&(Nn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ds(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Br(this),Is(this);const t=G,n=we;G=this,we=!0;try{return this.fn()}finally{Rs(this),G=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)hr(t);this.deps=this.depsTail=void 0,Br(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qn(this)&&this.run()}get dirty(){return qn(this)}}let Ps=0,Mt,$t;function Ds(e,t=!1){if(e.flags|=8,t){e.next=$t,$t=e;return}e.next=Mt,Mt=e}function dr(){Ps++}function fr(){if(--Ps>0)return;if($t){let t=$t;for($t=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Mt;){let t=Mt;for(Mt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Is(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),hr(s),Jo(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function qn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ms(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ms(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Bt)||(e.globalVersion=Bt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qn(e))))return;e.flags|=2;const t=e.dep,n=G,s=we;G=e,we=!0;try{Is(e);const r=e.fn(e._value);(t.version===0||qe(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{G=n,we=s,Rs(e),e.flags&=-3}}function hr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)hr(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const $s=[];function Fe(){$s.push(we),we=!1}function We(){const e=$s.pop();we=e===void 0?!0:e}function Br(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=G;G=void 0;try{t()}finally{G=n}}}let Bt=0;class Zo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!G||!we||G===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==G)n=this.activeLink=new Zo(G,this),G.deps?(n.prevDep=G.depsTail,G.depsTail.nextDep=n,G.depsTail=n):G.deps=G.depsTail=n,Es(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=G.depsTail,n.nextDep=void 0,G.depsTail.nextDep=n,G.depsTail=n,G.deps===n&&(G.deps=s)}return n}trigger(t){this.version++,Bt++,this.notify(t)}notify(t){dr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fr()}}}function Es(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Es(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,rt=Symbol(""),Gn=Symbol(""),Ft=Symbol("");function re(e,t,n){if(we&&G){let s=Yn.get(e);s||Yn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new pr),r.map=s,r.key=n),r.track()}}function Le(e,t,n,s,r,o){const i=Yn.get(e);if(!i){Bt++;return}const a=l=>{l&&l.trigger()};if(dr(),t==="clear")i.forEach(a);else{const l=M(e),f=l&&cr(n);if(l&&n==="length"){const d=Number(s);i.forEach((h,y)=>{(y==="length"||y===Ft||!Ke(y)&&y>=d)&&a(h)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),f&&a(i.get(Ft)),t){case"add":l?f&&a(i.get("length")):(a(i.get(rt)),pt(e)&&a(i.get(Gn)));break;case"delete":l||(a(i.get(rt)),pt(e)&&a(i.get(Gn)));break;case"set":pt(e)&&a(i.get(rt));break}}fr()}function ct(e){const t=O(e);return t===e?t:(re(t,"iterate",Ft),ke(e)?t:t.map(ne))}function Tn(e){return re(e=O(e),"iterate",Ft),e}const ei={__proto__:null,[Symbol.iterator](){return On(this,Symbol.iterator,ne)},concat(...e){return ct(this).concat(...e.map(t=>M(t)?ct(t):t))},entries(){return On(this,"entries",e=>(e[1]=ne(e[1]),e))},every(e,t){return Me(this,"every",e,t,void 0,arguments)},filter(e,t){return Me(this,"filter",e,t,n=>n.map(ne),arguments)},find(e,t){return Me(this,"find",e,t,ne,arguments)},findIndex(e,t){return Me(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Me(this,"findLast",e,t,ne,arguments)},findLastIndex(e,t){return Me(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Me(this,"forEach",e,t,void 0,arguments)},includes(...e){return jn(this,"includes",e)},indexOf(...e){return jn(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return jn(this,"lastIndexOf",e)},map(e,t){return Me(this,"map",e,t,void 0,arguments)},pop(){return _t(this,"pop")},push(...e){return _t(this,"push",e)},reduce(e,...t){return Fr(this,"reduce",e,t)},reduceRight(e,...t){return Fr(this,"reduceRight",e,t)},shift(){return _t(this,"shift")},some(e,t){return Me(this,"some",e,t,void 0,arguments)},splice(...e){return _t(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return _t(this,"unshift",e)},values(){return On(this,"values",ne)}};function On(e,t,n){const s=Tn(e),r=s[t]();return s!==e&&!ke(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const ti=Array.prototype;function Me(e,t,n,s,r,o){const i=Tn(e),a=i!==e&&!ke(e),l=i[t];if(l!==ti[t]){const h=l.apply(e,o);return a?ne(h):h}let f=n;i!==e&&(a?f=function(h,y){return n.call(this,ne(h),y,e)}:n.length>2&&(f=function(h,y){return n.call(this,h,y,e)}));const d=l.call(i,f,s);return a&&r?r(d):d}function Fr(e,t,n,s){const r=Tn(e);let o=n;return r!==e&&(ke(e)?n.length>3&&(o=function(i,a,l){return n.call(this,i,a,l,e)}):o=function(i,a,l){return n.call(this,i,ne(a),l,e)}),r[t](o,...s)}function jn(e,t,n){const s=O(e);re(s,"iterate",Ft);const r=s[t](...n);return(r===-1||r===!1)&&br(n[0])?(n[0]=O(n[0]),s[t](...n)):r}function _t(e,t,n=[]){Fe(),dr();const s=O(e)[t].apply(e,n);return fr(),We(),s}const ni=ir("__proto__,__v_isRef,__isVue"),Ls=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function ri(e){Ke(e)||(e=String(e));const t=O(this);return re(t,"has",e),t.hasOwnProperty(e)}class Ns{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?hi:Fs:o?Bs:js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=M(t);if(!r){let l;if(i&&(l=ei[n]))return l;if(n==="hasOwnProperty")return ri}const a=Reflect.get(t,n,se(t)?t:s);return(Ke(n)?Ls.has(n):ni(n))||(r||re(t,"get",n),o)?a:se(a)?i&&cr(n)?a:a.value:J(a)?r?Ws(a):mr(a):a}}class Os extends Ns{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const l=Ge(o);if(!ke(s)&&!Ge(s)&&(o=O(o),s=O(s)),!M(t)&&se(o)&&!se(s))return l?!1:(o.value=s,!0)}const i=M(t)&&cr(n)?Number(n)<t.length:j(t,n),a=Reflect.set(t,n,s,se(t)?t:r);return t===O(r)&&(i?qe(s,o)&&Le(t,"set",n,s):Le(t,"add",n,s)),a}deleteProperty(t,n){const s=j(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Le(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ke(n)||!Ls.has(n))&&re(t,"has",n),s}ownKeys(t){return re(t,"iterate",M(t)?"length":rt),Reflect.ownKeys(t)}}class si extends Ns{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const oi=new Os,ii=new si,ai=new Os(!0);const Vn=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function li(e,t,n){return function(...s){const r=this.__v_raw,o=O(r),i=pt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=r[e](...s),d=n?Vn:t?dn:ne;return!t&&re(o,"iterate",l?Gn:rt),{next(){const{value:h,done:y}=f.next();return y?{value:h,done:y}:{value:a?[d(h[0]),d(h[1])]:d(h),done:y}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ci(e,t){const n={get(r){const o=this.__v_raw,i=O(o),a=O(r);e||(qe(r,a)&&re(i,"get",r),re(i,"get",a));const{has:l}=Jt(i),f=t?Vn:e?dn:ne;if(l.call(i,r))return f(o.get(r));if(l.call(i,a))return f(o.get(a));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&re(O(r),"iterate",rt),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=O(o),a=O(r);return e||(qe(r,a)&&re(i,"has",r),re(i,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const i=this,a=i.__v_raw,l=O(a),f=t?Vn:e?dn:ne;return!e&&re(l,"iterate",rt),a.forEach((d,h)=>r.call(o,f(d),f(h),i))}};return de(n,e?{add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear")}:{add(r){!t&&!ke(r)&&!Ge(r)&&(r=O(r));const o=O(this);return Jt(o).has.call(o,r)||(o.add(r),Le(o,"add",r,r)),this},set(r,o){!t&&!ke(o)&&!Ge(o)&&(o=O(o));const i=O(this),{has:a,get:l}=Jt(i);let f=a.call(i,r);f||(r=O(r),f=a.call(i,r));const d=l.call(i,r);return i.set(r,o),f?qe(o,d)&&Le(i,"set",r,o):Le(i,"add",r,o),this},delete(r){const o=O(this),{has:i,get:a}=Jt(o);let l=i.call(o,r);l||(r=O(r),l=i.call(o,r)),a&&a.call(o,r);const f=o.delete(r);return l&&Le(o,"delete",r,void 0),f},clear(){const r=O(this),o=r.size!==0,i=r.clear();return o&&Le(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=li(r,e,t)}),n}function gr(e,t){const n=ci(e,t);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(j(n,r)&&r in s?n:s,r,o)}const ui={get:gr(!1,!1)},di={get:gr(!1,!0)},fi={get:gr(!0,!1)};const js=new WeakMap,Bs=new WeakMap,Fs=new WeakMap,hi=new WeakMap;function pi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gi(e){return e.__v_skip||!Object.isExtensible(e)?0:pi(Wo(e))}function mr(e){return Ge(e)?e:yr(e,!1,oi,ui,js)}function mi(e){return yr(e,!1,ai,di,Bs)}function Ws(e){return yr(e,!0,ii,fi,Fs)}function yr(e,t,n,s,r){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=gi(e);if(o===0)return e;const i=r.get(e);if(i)return i;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function gt(e){return Ge(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ge(e){return!!(e&&e.__v_isReadonly)}function ke(e){return!!(e&&e.__v_isShallow)}function br(e){return e?!!e.__v_raw:!1}function O(e){const t=e&&e.__v_raw;return t?O(t):e}function yi(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&zn(e,"__v_skip",!0),e}const ne=e=>J(e)?mr(e):e,dn=e=>J(e)?Ws(e):e;function se(e){return e?e.__v_isRef===!0:!1}function Ee(e){return bi(e,!1)}function bi(e,t){return se(e)?e:new xi(e,t)}class xi{constructor(t,n){this.dep=new pr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:O(t),this._value=n?t:ne(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ke(t)||Ge(t);t=s?t:O(t),qe(t,n)&&(this._rawValue=t,this._value=s?t:ne(t),this.dep.trigger())}}function mt(e){return se(e)?e.value:e}const ki={get:(e,t,n)=>t==="__v_raw"?e:mt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return se(r)&&!se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Hs(e){return gt(e)?e:new Proxy(e,ki)}class wi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new pr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return Ds(this,!0),!0}get value(){const t=this.dep.track();return Ms(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vi(e,t,n=!1){let s,r;return E(e)?s=e:(s=e.get,r=e.set),new wi(s,r,n)}const en={},fn=new WeakMap;let nt;function Si(e,t=!1,n=nt){if(n){let s=fn.get(n);s||fn.set(n,s=[]),s.push(e)}}function Ti(e,t,n=X){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:a,call:l}=n,f=_=>r?_:ke(_)||r===!1||r===0?Ne(_,1):Ne(_);let d,h,y,v,C=!1,I=!1;if(se(e)?(h=()=>e.value,C=ke(e)):gt(e)?(h=()=>f(e),C=!0):M(e)?(I=!0,C=e.some(_=>gt(_)||ke(_)),h=()=>e.map(_=>{if(se(_))return _.value;if(gt(_))return f(_);if(E(_))return l?l(_,2):_()})):E(e)?t?h=l?()=>l(e,2):e:h=()=>{if(y){Fe();try{y()}finally{We()}}const _=nt;nt=d;try{return l?l(e,3,[v]):e(v)}finally{nt=_}}:h=Ie,t&&r){const _=h,$=r===!0?1/0:r;h=()=>Ne(_(),$)}const Z=Qo(),N=()=>{d.stop(),Z&&Z.active&&lr(Z.effects,d)};if(o&&t){const _=t;t=(...$)=>{_(...$),N()}}let U=I?new Array(e.length).fill(en):en;const z=_=>{if(!(!(d.flags&1)||!d.dirty&&!_))if(t){const $=d.run();if(r||C||(I?$.some((H,V)=>qe(H,U[V])):qe($,U))){y&&y();const H=nt;nt=d;try{const V=[$,U===en?void 0:I&&U[0]===en?[]:U,v];U=$,l?l(t,3,V):t(...V)}finally{nt=H}}}else d.run()};return a&&a(z),d=new As(h),d.scheduler=i?()=>i(z,!1):z,v=_=>Si(_,!1,d),y=d.onStop=()=>{const _=fn.get(d);if(_){if(l)l(_,4);else for(const $ of _)$();fn.delete(d)}},t?s?z(!0):U=d.run():i?i(z.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Ne(e,t=1/0,n){if(t<=0||!J(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Ne(e.value,t,n);else if(M(e))for(let s=0;s<e.length;s++)Ne(e[s],t,n);else if(xs(e)||pt(e))e.forEach(s=>{Ne(s,t,n)});else if(vs(e)){for(const s in e)Ne(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ne(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,t,n,s){try{return s?e(...s):e()}catch(r){_n(r,t,n)}}function Re(e,t,n,s){if(E(e)){const r=zt(e,t,n,s);return r&&ks(r)&&r.catch(o=>{_n(o,t,n)}),r}if(M(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Re(e[o],t,n,s));return r}}function _n(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||X;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,l,f)===!1)return}a=a.parent}if(o){Fe(),zt(o,null,10,[e,l,f]),We();return}}_i(e,n,r,s,i)}function _i(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const ae=[];let Pe=-1;const yt=[];let ze=null,dt=0;const Us=Promise.resolve();let hn=null;function zs(e){const t=hn||Us;return e?t.then(this?e.bind(this):e):t}function Ci(e){let t=Pe+1,n=ae.length;for(;t<n;){const s=t+n>>>1,r=ae[s],o=Wt(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function xr(e){if(!(e.flags&1)){const t=Wt(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=Wt(n)?ae.push(e):ae.splice(Ci(t),0,e),e.flags|=1,Xs()}}function Xs(){hn||(hn=Us.then(Ys))}function Ai(e){M(e)?yt.push(...e):ze&&e.id===-1?ze.splice(dt+1,0,e):e.flags&1||(yt.push(e),e.flags|=1),Xs()}function Wr(e,t,n=Pe+1){for(;n<ae.length;n++){const s=ae[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qs(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>Wt(n)-Wt(s));if(yt.length=0,ze){ze.push(...t);return}for(ze=t,dt=0;dt<ze.length;dt++){const n=ze[dt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ze=null,dt=0}}const Wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ys(e){try{for(Pe=0;Pe<ae.length;Pe++){const t=ae[Pe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pe<ae.length;Pe++){const t=ae[Pe];t&&(t.flags&=-2)}Pe=-1,ae.length=0,qs(),hn=null,(ae.length||yt.length)&&Ys()}}let xe=null,Gs=null;function pn(e){const t=xe;return xe=e,Gs=e&&e.type.__scopeId||null,t}function Pi(e,t=xe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Kr(-1);const o=pn(t);let i;try{i=e(...r)}finally{pn(o),s._d&&Kr(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Di(e,t){if(xe===null)return e;const n=Dn(xe),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,a,l=X]=t[r];o&&(E(o)&&(o={mounted:o,updated:o}),o.deep&&Ne(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function et(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let l=a.dir[s];l&&(Fe(),Re(l,n,8,[e.el,a,e,t]),We())}}const Ii=Symbol("_vte"),Ri=e=>e.__isTeleport;function kr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,kr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Et(e,t,n,s,r=!1){if(M(e)){e.forEach((C,I)=>Et(C,t&&(M(t)?t[I]:t),n,s,r));return}if(Lt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Et(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Dn(s.component):s.el,i=r?null:o,{i:a,r:l}=e,f=t&&t.r,d=a.refs===X?a.refs={}:a.refs,h=a.setupState,y=O(h),v=h===X?()=>!1:C=>j(y,C);if(f!=null&&f!==l&&(ee(f)?(d[f]=null,v(f)&&(h[f]=null)):se(f)&&(f.value=null)),E(l))zt(l,a,12,[i,d]);else{const C=ee(l),I=se(l);if(C||I){const Z=()=>{if(e.f){const N=C?v(l)?h[l]:d[l]:l.value;r?M(N)&&lr(N,o):M(N)?N.includes(o)||N.push(o):C?(d[l]=[o],v(l)&&(h[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else C?(d[l]=i,v(l)&&(h[l]=i)):I&&(l.value=i,e.k&&(d[e.k]=i))};i?(Z.id=-1,me(Z,n)):Z()}}}Sn().requestIdleCallback;Sn().cancelIdleCallback;const Lt=e=>!!e.type.__asyncLoader,Ks=e=>e.type.__isKeepAlive;function Mi(e,t){Qs(e,"a",t)}function $i(e,t){Qs(e,"da",t)}function Qs(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Cn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ks(r.parent.vnode)&&Ei(s,t,n,r),r=r.parent}}function Ei(e,t,n,s){const r=Cn(t,e,s,!0);Zs(()=>{lr(s[t],r)},n)}function Cn(e,t,n=ce,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Fe();const a=Xt(n),l=Re(t,n,e,i);return a(),We(),l});return s?r.unshift(o):r.push(o),o}}const He=e=>(t,n=ce)=>{(!Ut||e==="sp")&&Cn(e,(...s)=>t(...s),n)},Li=He("bm"),Js=He("m"),Ni=He("bu"),Oi=He("u"),ji=He("bum"),Zs=He("um"),Bi=He("sp"),Fi=He("rtg"),Wi=He("rtc");function Hi(e,t=ce){Cn("ec",e,t)}const Ui=Symbol.for("v-ndc");function Kn(e,t,n,s){let r;const o=n,i=M(e);if(i||ee(e)){const a=i&&gt(e);let l=!1,f=!1;a&&(l=!ke(e),f=Ge(e),e=Tn(e)),r=new Array(e.length);for(let d=0,h=e.length;d<h;d++)r[d]=t(l?f?dn(ne(e[d])):ne(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o)}else if(J(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const d=a[l];r[l]=t(e[d],d,l,o)}}else r=[];return r}const Qn=e=>e?vo(e)?Dn(e):Qn(e.parent):null,Nt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>{xr(e.update)}),$nextTick:e=>e.n||(e.n=zs.bind(e.proxy)),$watch:e=>da.bind(e)}),Bn=(e,t)=>e!==X&&!e.__isScriptSetup&&j(e,t),zi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const v=i[t];if(v!==void 0)switch(v){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Bn(s,t))return i[t]=1,s[t];if(r!==X&&j(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&j(f,t))return i[t]=3,o[t];if(n!==X&&j(n,t))return i[t]=4,n[t];Jn&&(i[t]=0)}}const d=Nt[t];let h,y;if(d)return t==="$attrs"&&re(e.attrs,"get",""),d(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==X&&j(n,t))return i[t]=4,n[t];if(y=l.config.globalProperties,j(y,t))return y[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Bn(r,t)?(r[t]=n,!0):s!==X&&j(s,t)?(s[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let a;return!!n[i]||e!==X&&j(e,i)||Bn(t,i)||(a=o[0])&&j(a,i)||j(s,i)||j(Nt,i)||j(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hr(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Jn=!0;function Xi(e){const t=to(e),n=e.proxy,s=e.ctx;Jn=!1,t.beforeCreate&&Ur(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:a,provide:l,inject:f,created:d,beforeMount:h,mounted:y,beforeUpdate:v,updated:C,activated:I,deactivated:Z,beforeDestroy:N,beforeUnmount:U,destroyed:z,unmounted:_,render:$,renderTracked:H,renderTriggered:V,errorCaptured:Ue,serverPrefetch:Yt,expose:Qe,inheritAttrs:wt,components:Gt,directives:Vt,filters:Mn}=t;if(f&&qi(f,s,null),i)for(const K in i){const q=i[K];E(q)&&(s[K]=q.bind(n))}if(r){const K=r.call(n,n);J(K)&&(e.data=mr(K))}if(Jn=!0,o)for(const K in o){const q=o[K],Je=E(q)?q.bind(n,n):E(q.get)?q.get.bind(n,n):Ie,Kt=!E(q)&&E(q.set)?q.set.bind(n):Ie,Ze=It({get:Je,set:Kt});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:ve=>Ze.value=ve})}if(a)for(const K in a)eo(a[K],s,n,K);if(l){const K=E(l)?l.call(n):l;Reflect.ownKeys(K).forEach(q=>{Ji(q,K[q])})}d&&Ur(d,e,"c");function oe(K,q){M(q)?q.forEach(Je=>K(Je.bind(n))):q&&K(q.bind(n))}if(oe(Li,h),oe(Js,y),oe(Ni,v),oe(Oi,C),oe(Mi,I),oe($i,Z),oe(Hi,Ue),oe(Wi,H),oe(Fi,V),oe(ji,U),oe(Zs,_),oe(Bi,Yt),M(Qe))if(Qe.length){const K=e.exposed||(e.exposed={});Qe.forEach(q=>{Object.defineProperty(K,q,{get:()=>n[q],set:Je=>n[q]=Je})})}else e.exposed||(e.exposed={});$&&e.render===Ie&&(e.render=$),wt!=null&&(e.inheritAttrs=wt),Gt&&(e.components=Gt),Vt&&(e.directives=Vt),Yt&&Vs(e)}function qi(e,t,n=Ie){M(e)&&(e=Zn(e));for(const s in e){const r=e[s];let o;J(r)?"default"in r?o=rn(r.from||s,r.default,!0):o=rn(r.from||s):o=rn(r),se(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function Ur(e,t,n){Re(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function eo(e,t,n,s){let r=s.includes(".")?go(n,s):()=>n[s];if(ee(e)){const o=t[e];E(o)&&sn(r,o)}else if(E(e))sn(r,e.bind(n));else if(J(e))if(M(e))e.forEach(o=>eo(o,t,n,s));else{const o=E(e.handler)?e.handler.bind(n):t[e.handler];E(o)&&sn(r,o,e)}}function to(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(f=>gn(l,f,i,!0)),gn(l,t,i)),J(t)&&o.set(t,l),l}function gn(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&gn(e,o,n,!0),r&&r.forEach(i=>gn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Yi[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Yi={data:zr,props:Xr,emits:Xr,methods:Dt,computed:Dt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:Dt,directives:Dt,watch:Vi,provide:zr,inject:Gi};function zr(e,t){return t?e?function(){return de(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function Gi(e,t){return Dt(Zn(e),Zn(t))}function Zn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?de(Object.create(null),e,t):t}function Xr(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:de(Object.create(null),Hr(e),Hr(t??{})):t}function Vi(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const s in t)n[s]=ie(e[s],t[s]);return n}function no(){return{app:null,config:{isNativeTag:Bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ki=0;function Qi(e,t){return function(s,r=null){E(s)||(s=de({},s)),r!=null&&!J(r)&&(r=null);const o=no(),i=new WeakSet,a=[];let l=!1;const f=o.app={_uid:Ki++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Ra,get config(){return o.config},set config(d){},use(d,...h){return i.has(d)||(d&&E(d.install)?(i.add(d),d.install(f,...h)):E(d)&&(i.add(d),d(f,...h))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,h){return h?(o.components[d]=h,f):o.components[d]},directive(d,h){return h?(o.directives[d]=h,f):o.directives[d]},mount(d,h,y){if(!l){const v=f._ceVNode||le(s,r);return v.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),e(v,d,y),l=!0,f._container=d,d.__vue_app__=f,Dn(v.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Re(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,h){return o.provides[d]=h,f},runWithContext(d){const h=bt;bt=f;try{return d()}finally{bt=h}}};return f}}let bt=null;function Ji(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function rn(e,t,n=!1){const s=ce||xe;if(s||bt){let r=bt?bt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&E(t)?t.call(s&&s.proxy):t}}const ro={},so=()=>Object.create(ro),oo=e=>Object.getPrototypeOf(e)===ro;function Zi(e,t,n,s=!1){const r={},o=so();e.propsDefaults=Object.create(null),io(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:mi(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function ea(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,a=O(r),[l]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let y=d[h];if(An(e.emitsOptions,y))continue;const v=t[y];if(l)if(j(o,y))v!==o[y]&&(o[y]=v,f=!0);else{const C=Ye(y);r[C]=er(l,a,C,v,e,!1)}else v!==o[y]&&(o[y]=v,f=!0)}}}else{io(e,t,r,o)&&(f=!0);let d;for(const h in a)(!t||!j(t,h)&&((d=it(h))===h||!j(t,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=er(l,a,h,void 0,e,!0)):delete r[h]);if(o!==a)for(const h in o)(!t||!j(t,h))&&(delete o[h],f=!0)}f&&Le(e.attrs,"set","")}function io(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Rt(l))continue;const f=t[l];let d;r&&j(r,d=Ye(l))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:An(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=O(n),f=a||X;for(let d=0;d<o.length;d++){const h=o[d];n[h]=er(r,l,h,f[h],e,!j(f,h))}}return i}function er(e,t,n,s,r,o){const i=e[n];if(i!=null){const a=j(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&E(l)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Xt(r);s=f[n]=l.call(null,t),d()}}else s=l;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===it(n))&&(s=!0))}return s}const ta=new WeakMap;function ao(e,t,n=!1){const s=n?ta:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},a=[];let l=!1;if(!E(e)){const d=h=>{l=!0;const[y,v]=ao(h,t,!0);de(i,y),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return J(e)&&s.set(e,ht),ht;if(M(o))for(let d=0;d<o.length;d++){const h=Ye(o[d]);qr(h)&&(i[h]=X)}else if(o)for(const d in o){const h=Ye(d);if(qr(h)){const y=o[d],v=i[h]=M(y)||E(y)?{type:y}:de({},y),C=v.type;let I=!1,Z=!0;if(M(C))for(let N=0;N<C.length;++N){const U=C[N],z=E(U)&&U.name;if(z==="Boolean"){I=!0;break}else z==="String"&&(Z=!1)}else I=E(C)&&C.name==="Boolean";v[0]=I,v[1]=Z,(I||j(v,"default"))&&a.push(h)}}const f=[i,a];return J(e)&&s.set(e,f),f}function qr(e){return e[0]!=="$"&&!Rt(e)}const wr=e=>e[0]==="_"||e==="$stable",vr=e=>M(e)?e.map(De):[De(e)],na=(e,t,n)=>{if(t._n)return t;const s=Pi((...r)=>vr(t(...r)),n);return s._c=!1,s},lo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(wr(r))continue;const o=e[r];if(E(o))t[r]=na(r,o,s);else if(o!=null){const i=vr(o);t[r]=()=>i}}},co=(e,t)=>{const n=vr(t);e.slots.default=()=>n},uo=(e,t,n)=>{for(const s in t)(n||!wr(s))&&(e[s]=t[s])},ra=(e,t,n)=>{const s=e.slots=so();if(e.vnode.shapeFlag&32){const r=t.__;r&&zn(s,"__",r,!0);const o=t._;o?(uo(s,t,n),n&&zn(s,"_",o,!0)):lo(t,s)}else t&&co(e,t)},sa=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=X;if(s.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:uo(r,t,n):(o=!t.$stable,lo(t,r)),i=t}else t&&(co(e,t),i={default:1});if(o)for(const a in r)!wr(a)&&i[a]==null&&delete r[a]},me=ba;function oa(e){return ia(e)}function ia(e,t){const n=Sn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:d,parentNode:h,nextSibling:y,setScopeId:v=Ie,insertStaticContent:C}=e,I=(c,u,p,b=null,g=null,m=null,S=void 0,w=null,k=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ct(c,u)&&(b=Qt(c),ve(c,g,m,!0),c=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:x,ref:D,shapeFlag:T}=u;switch(x){case Pn:Z(c,u,p,b);break;case Ve:N(c,u,p,b);break;case on:c==null&&U(u,p,b,S);break;case be:Gt(c,u,p,b,g,m,S,w,k);break;default:T&1?$(c,u,p,b,g,m,S,w,k):T&6?Vt(c,u,p,b,g,m,S,w,k):(T&64||T&128)&&x.process(c,u,p,b,g,m,S,w,k,St)}D!=null&&g?Et(D,c&&c.ref,m,u||c,!u):D==null&&c&&c.ref!=null&&Et(c.ref,null,m,c,!0)},Z=(c,u,p,b)=>{if(c==null)s(u.el=a(u.children),p,b);else{const g=u.el=c.el;u.children!==c.children&&f(g,u.children)}},N=(c,u,p,b)=>{c==null?s(u.el=l(u.children||""),p,b):u.el=c.el},U=(c,u,p,b)=>{[c.el,c.anchor]=C(c.children,u,p,b,c.el,c.anchor)},z=({el:c,anchor:u},p,b)=>{let g;for(;c&&c!==u;)g=y(c),s(c,p,b),c=g;s(u,p,b)},_=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=y(c),r(c),c=p;r(u)},$=(c,u,p,b,g,m,S,w,k)=>{u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),c==null?H(u,p,b,g,m,S,w,k):Yt(c,u,g,m,S,w,k)},H=(c,u,p,b,g,m,S,w)=>{let k,x;const{props:D,shapeFlag:T,transition:P,dirs:R}=c;if(k=c.el=i(c.type,m,D&&D.is,D),T&8?d(k,c.children):T&16&&Ue(c.children,k,null,b,g,Fn(c,m),S,w),R&&et(c,null,b,"created"),V(k,c,c.scopeId,S,b),D){for(const Y in D)Y!=="value"&&!Rt(Y)&&o(k,Y,null,D[Y],m,b);"value"in D&&o(k,"value",null,D.value,m),(x=D.onVnodeBeforeMount)&&Ce(x,b,c)}R&&et(c,null,b,"beforeMount");const L=aa(g,P);L&&P.beforeEnter(k),s(k,u,p),((x=D&&D.onVnodeMounted)||L||R)&&me(()=>{x&&Ce(x,b,c),L&&P.enter(k),R&&et(c,null,b,"mounted")},g)},V=(c,u,p,b,g)=>{if(p&&v(c,p),b)for(let m=0;m<b.length;m++)v(c,b[m]);if(g){let m=g.subTree;if(u===m||yo(m.type)&&(m.ssContent===u||m.ssFallback===u)){const S=g.vnode;V(c,S,S.scopeId,S.slotScopeIds,g.parent)}}},Ue=(c,u,p,b,g,m,S,w,k=0)=>{for(let x=k;x<c.length;x++){const D=c[x]=w?Xe(c[x]):De(c[x]);I(null,D,u,p,b,g,m,S,w)}},Yt=(c,u,p,b,g,m,S)=>{const w=u.el=c.el;let{patchFlag:k,dynamicChildren:x,dirs:D}=u;k|=c.patchFlag&16;const T=c.props||X,P=u.props||X;let R;if(p&&tt(p,!1),(R=P.onVnodeBeforeUpdate)&&Ce(R,p,u,c),D&&et(u,c,p,"beforeUpdate"),p&&tt(p,!0),(T.innerHTML&&P.innerHTML==null||T.textContent&&P.textContent==null)&&d(w,""),x?Qe(c.dynamicChildren,x,w,p,b,Fn(u,g),m):S||q(c,u,w,null,p,b,Fn(u,g),m,!1),k>0){if(k&16)wt(w,T,P,p,g);else if(k&2&&T.class!==P.class&&o(w,"class",null,P.class,g),k&4&&o(w,"style",T.style,P.style,g),k&8){const L=u.dynamicProps;for(let Y=0;Y<L.length;Y++){const W=L[Y],fe=T[W],he=P[W];(he!==fe||W==="value")&&o(w,W,fe,he,g,p)}}k&1&&c.children!==u.children&&d(w,u.children)}else!S&&x==null&&wt(w,T,P,p,g);((R=P.onVnodeUpdated)||D)&&me(()=>{R&&Ce(R,p,u,c),D&&et(u,c,p,"updated")},b)},Qe=(c,u,p,b,g,m,S)=>{for(let w=0;w<u.length;w++){const k=c[w],x=u[w],D=k.el&&(k.type===be||!Ct(k,x)||k.shapeFlag&198)?h(k.el):p;I(k,x,D,null,b,g,m,S,!0)}},wt=(c,u,p,b,g)=>{if(u!==p){if(u!==X)for(const m in u)!Rt(m)&&!(m in p)&&o(c,m,u[m],null,g,b);for(const m in p){if(Rt(m))continue;const S=p[m],w=u[m];S!==w&&m!=="value"&&o(c,m,w,S,g,b)}"value"in p&&o(c,"value",u.value,p.value,g)}},Gt=(c,u,p,b,g,m,S,w,k)=>{const x=u.el=c?c.el:a(""),D=u.anchor=c?c.anchor:a("");let{patchFlag:T,dynamicChildren:P,slotScopeIds:R}=u;R&&(w=w?w.concat(R):R),c==null?(s(x,p,b),s(D,p,b),Ue(u.children||[],p,D,g,m,S,w,k)):T>0&&T&64&&P&&c.dynamicChildren?(Qe(c.dynamicChildren,P,p,g,m,S,w),(u.key!=null||g&&u===g.subTree)&&fo(c,u,!0)):q(c,u,p,D,g,m,S,w,k)},Vt=(c,u,p,b,g,m,S,w,k)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?g.ctx.activate(u,p,b,S,k):Mn(u,p,b,g,m,S,k):$r(c,u,k)},Mn=(c,u,p,b,g,m,S)=>{const w=c.component=_a(c,b,g);if(Ks(c)&&(w.ctx.renderer=St),Ca(w,!1,S),w.asyncDep){if(g&&g.registerDep(w,oe,S),!c.el){const k=w.subTree=le(Ve);N(null,k,u,p)}}else oe(w,c,u,p,g,m,S)},$r=(c,u,p)=>{const b=u.component=c.component;if(ma(c,u,p))if(b.asyncDep&&!b.asyncResolved){K(b,u,p);return}else b.next=u,b.update();else u.el=c.el,b.vnode=u},oe=(c,u,p,b,g,m,S)=>{const w=()=>{if(c.isMounted){let{next:T,bu:P,u:R,parent:L,vnode:Y}=c;{const Te=ho(c);if(Te){T&&(T.el=Y.el,K(c,T,S)),Te.asyncDep.then(()=>{c.isUnmounted||w()});return}}let W=T,fe;tt(c,!1),T?(T.el=Y.el,K(c,T,S)):T=Y,P&&nn(P),(fe=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(fe,L,T,Y),tt(c,!0);const he=Gr(c),Se=c.subTree;c.subTree=he,I(Se,he,h(Se.el),Qt(Se),c,g,m),T.el=he.el,W===null&&ya(c,he.el),R&&me(R,g),(fe=T.props&&T.props.onVnodeUpdated)&&me(()=>Ce(fe,L,T,Y),g)}else{let T;const{el:P,props:R}=u,{bm:L,m:Y,parent:W,root:fe,type:he}=c,Se=Lt(u);tt(c,!1),L&&nn(L),!Se&&(T=R&&R.onVnodeBeforeMount)&&Ce(T,W,u),tt(c,!0);{fe.ce&&fe.ce._def.shadowRoot!==!1&&fe.ce._injectChildStyle(he);const Te=c.subTree=Gr(c);I(null,Te,p,b,c,g,m),u.el=Te.el}if(Y&&me(Y,g),!Se&&(T=R&&R.onVnodeMounted)){const Te=u;me(()=>Ce(T,W,Te),g)}(u.shapeFlag&256||W&&Lt(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&me(c.a,g),c.isMounted=!0,u=p=b=null}};c.scope.on();const k=c.effect=new As(w);c.scope.off();const x=c.update=k.run.bind(k),D=c.job=k.runIfDirty.bind(k);D.i=c,D.id=c.uid,k.scheduler=()=>xr(D),tt(c,!0),x()},K=(c,u,p)=>{u.component=c;const b=c.vnode.props;c.vnode=u,c.next=null,ea(c,u.props,b,p),sa(c,u.children,p),Fe(),Wr(c),We()},q=(c,u,p,b,g,m,S,w,k=!1)=>{const x=c&&c.children,D=c?c.shapeFlag:0,T=u.children,{patchFlag:P,shapeFlag:R}=u;if(P>0){if(P&128){Kt(x,T,p,b,g,m,S,w,k);return}else if(P&256){Je(x,T,p,b,g,m,S,w,k);return}}R&8?(D&16&&vt(x,g,m),T!==x&&d(p,T)):D&16?R&16?Kt(x,T,p,b,g,m,S,w,k):vt(x,g,m,!0):(D&8&&d(p,""),R&16&&Ue(T,p,b,g,m,S,w,k))},Je=(c,u,p,b,g,m,S,w,k)=>{c=c||ht,u=u||ht;const x=c.length,D=u.length,T=Math.min(x,D);let P;for(P=0;P<T;P++){const R=u[P]=k?Xe(u[P]):De(u[P]);I(c[P],R,p,null,g,m,S,w,k)}x>D?vt(c,g,m,!0,!1,T):Ue(u,p,b,g,m,S,w,k,T)},Kt=(c,u,p,b,g,m,S,w,k)=>{let x=0;const D=u.length;let T=c.length-1,P=D-1;for(;x<=T&&x<=P;){const R=c[x],L=u[x]=k?Xe(u[x]):De(u[x]);if(Ct(R,L))I(R,L,p,null,g,m,S,w,k);else break;x++}for(;x<=T&&x<=P;){const R=c[T],L=u[P]=k?Xe(u[P]):De(u[P]);if(Ct(R,L))I(R,L,p,null,g,m,S,w,k);else break;T--,P--}if(x>T){if(x<=P){const R=P+1,L=R<D?u[R].el:b;for(;x<=P;)I(null,u[x]=k?Xe(u[x]):De(u[x]),p,L,g,m,S,w,k),x++}}else if(x>P)for(;x<=T;)ve(c[x],g,m,!0),x++;else{const R=x,L=x,Y=new Map;for(x=L;x<=P;x++){const ge=u[x]=k?Xe(u[x]):De(u[x]);ge.key!=null&&Y.set(ge.key,x)}let W,fe=0;const he=P-L+1;let Se=!1,Te=0;const Tt=new Array(he);for(x=0;x<he;x++)Tt[x]=0;for(x=R;x<=T;x++){const ge=c[x];if(fe>=he){ve(ge,g,m,!0);continue}let _e;if(ge.key!=null)_e=Y.get(ge.key);else for(W=L;W<=P;W++)if(Tt[W-L]===0&&Ct(ge,u[W])){_e=W;break}_e===void 0?ve(ge,g,m,!0):(Tt[_e-L]=x+1,_e>=Te?Te=_e:Se=!0,I(ge,u[_e],p,null,g,m,S,w,k),fe++)}const Nr=Se?la(Tt):ht;for(W=Nr.length-1,x=he-1;x>=0;x--){const ge=L+x,_e=u[ge],Or=ge+1<D?u[ge+1].el:b;Tt[x]===0?I(null,_e,p,Or,g,m,S,w,k):Se&&(W<0||x!==Nr[W]?Ze(_e,p,Or,2):W--)}}},Ze=(c,u,p,b,g=null)=>{const{el:m,type:S,transition:w,children:k,shapeFlag:x}=c;if(x&6){Ze(c.component.subTree,u,p,b);return}if(x&128){c.suspense.move(u,p,b);return}if(x&64){S.move(c,u,p,St);return}if(S===be){s(m,u,p);for(let T=0;T<k.length;T++)Ze(k[T],u,p,b);s(c.anchor,u,p);return}if(S===on){z(c,u,p);return}if(b!==2&&x&1&&w)if(b===0)w.beforeEnter(m),s(m,u,p),me(()=>w.enter(m),g);else{const{leave:T,delayLeave:P,afterLeave:R}=w,L=()=>{c.ctx.isUnmounted?r(m):s(m,u,p)},Y=()=>{T(m,()=>{L(),R&&R()})};P?P(m,L,Y):Y()}else s(m,u,p)},ve=(c,u,p,b=!1,g=!1)=>{const{type:m,props:S,ref:w,children:k,dynamicChildren:x,shapeFlag:D,patchFlag:T,dirs:P,cacheIndex:R}=c;if(T===-2&&(g=!1),w!=null&&(Fe(),Et(w,null,p,c,!0),We()),R!=null&&(u.renderCache[R]=void 0),D&256){u.ctx.deactivate(c);return}const L=D&1&&P,Y=!Lt(c);let W;if(Y&&(W=S&&S.onVnodeBeforeUnmount)&&Ce(W,u,c),D&6)jo(c.component,p,b);else{if(D&128){c.suspense.unmount(p,b);return}L&&et(c,null,u,"beforeUnmount"),D&64?c.type.remove(c,u,p,St,b):x&&!x.hasOnce&&(m!==be||T>0&&T&64)?vt(x,u,p,!1,!0):(m===be&&T&384||!g&&D&16)&&vt(k,u,p),b&&Er(c)}(Y&&(W=S&&S.onVnodeUnmounted)||L)&&me(()=>{W&&Ce(W,u,c),L&&et(c,null,u,"unmounted")},p)},Er=c=>{const{type:u,el:p,anchor:b,transition:g}=c;if(u===be){Oo(p,b);return}if(u===on){_(c);return}const m=()=>{r(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:w}=g,k=()=>S(p,m);w?w(c.el,m,k):k()}else m()},Oo=(c,u)=>{let p;for(;c!==u;)p=y(c),r(c),c=p;r(u)},jo=(c,u,p)=>{const{bum:b,scope:g,job:m,subTree:S,um:w,m:k,a:x,parent:D,slots:{__:T}}=c;Yr(k),Yr(x),b&&nn(b),D&&M(T)&&T.forEach(P=>{D.renderCache[P]=void 0}),g.stop(),m&&(m.flags|=8,ve(S,c,u,p)),w&&me(w,u),me(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},vt=(c,u,p,b=!1,g=!1,m=0)=>{for(let S=m;S<c.length;S++)ve(c[S],u,p,b,g)},Qt=c=>{if(c.shapeFlag&6)return Qt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=y(c.anchor||c.el),p=u&&u[Ii];return p?y(p):u};let $n=!1;const Lr=(c,u,p)=>{c==null?u._vnode&&ve(u._vnode,null,null,!0):I(u._vnode||null,c,u,null,null,null,p),u._vnode=c,$n||($n=!0,Wr(),qs(),$n=!1)},St={p:I,um:ve,m:Ze,r:Er,mt:Mn,mc:Ue,pc:q,pbc:Qe,n:Qt,o:e};return{render:Lr,hydrate:void 0,createApp:Qi(Lr)}}function Fn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function aa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fo(e,t,n=!1){const s=e.children,r=t.children;if(M(s)&&M(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Xe(r[o]),a.el=i.el),!n&&a.patchFlag!==-2&&fo(i,a)),a.type===Pn&&(a.el=i.el),a.type===Ve&&!a.el&&(a.el=i.el)}}function la(e){const t=e.slice(),n=[0];let s,r,o,i,a;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function ho(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ho(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ca=Symbol.for("v-scx"),ua=()=>rn(ca);function sn(e,t,n){return po(e,t,n)}function po(e,t,n=X){const{immediate:s,deep:r,flush:o,once:i}=n,a=de({},n),l=t&&s||!t&&o!=="post";let f;if(Ut){if(o==="sync"){const v=ua();f=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Ie,v.resume=Ie,v.pause=Ie,v}}const d=ce;a.call=(v,C,I)=>Re(v,d,C,I);let h=!1;o==="post"?a.scheduler=v=>{me(v,d&&d.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(v,C)=>{C?v():xr(v)}),a.augmentJob=v=>{t&&(v.flags|=4),h&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const y=Ti(e,t,a);return Ut&&(f?f.push(y):l&&y()),y}function da(e,t,n){const s=this.proxy,r=ee(e)?e.includes(".")?go(s,e):()=>s[e]:e.bind(s,s);let o;E(t)?o=t:(o=t.handler,n=t);const i=Xt(this),a=po(r,o.bind(s),n);return i(),a}function go(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const fa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${it(t)}Modifiers`];function ha(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||X;let r=n;const o=t.startsWith("update:"),i=o&&fa(s,t.slice(7));i&&(i.trim&&(r=n.map(d=>ee(d)?d.trim():d)),i.number&&(r=n.map(Xn)));let a,l=s[a=En(t)]||s[a=En(Ye(t))];!l&&o&&(l=s[a=En(it(t))]),l&&Re(l,e,6,r);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Re(f,e,6,r)}}function mo(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},a=!1;if(!E(e)){const l=f=>{const d=mo(f,t,!0);d&&(a=!0,de(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(J(e)&&s.set(e,null),null):(M(o)?o.forEach(l=>i[l]=null):de(i,o),J(e)&&s.set(e,i),i)}function An(e,t){return!e||!kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,it(t))||j(e,t))}function Gr(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:a,emit:l,render:f,renderCache:d,props:h,data:y,setupState:v,ctx:C,inheritAttrs:I}=e,Z=pn(e);let N,U;try{if(n.shapeFlag&4){const _=r||s,$=_;N=De(f.call($,_,d,h,v,y,C)),U=a}else{const _=t;N=De(_.length>1?_(h,{attrs:a,slots:i,emit:l}):_(h,null)),U=t.props?a:pa(a)}}catch(_){Ot.length=0,_n(_,e,1),N=le(Ve)}let z=N;if(U&&I!==!1){const _=Object.keys(U),{shapeFlag:$}=z;_.length&&$&7&&(o&&_.some(ar)&&(U=ga(U,o)),z=kt(z,U,!1,!0))}return n.dirs&&(z=kt(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&kr(z,n.transition),N=z,pn(Z),N}const pa=e=>{let t;for(const n in e)(n==="class"||n==="style"||kn(n))&&((t||(t={}))[n]=e[n]);return t},ga=(e,t)=>{const n={};for(const s in e)(!ar(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ma(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vr(s,i,f):!!i;if(l&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const y=d[h];if(i[y]!==s[y]&&!An(f,y))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Vr(s,i,f):!0:!!i;return!1}function Vr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!An(n,o))return!0}return!1}function ya({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const yo=e=>e.__isSuspense;function ba(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Ai(e)}const be=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),on=Symbol.for("v-stc"),Ot=[];let ye=null;function Q(e=!1){Ot.push(ye=e?null:[])}function xa(){Ot.pop(),ye=Ot[Ot.length-1]||null}let Ht=1;function Kr(e,t=!1){Ht+=e,e<0&&ye&&t&&(ye.hasOnce=!0)}function bo(e){return e.dynamicChildren=Ht>0?ye||ht:null,xa(),Ht>0&&ye&&ye.push(e),e}function te(e,t,n,s,r,o){return bo(A(e,t,n,s,r,o,!0))}function an(e,t,n,s,r){return bo(le(e,t,n,s,r,!0))}function xo(e){return e?e.__v_isVNode===!0:!1}function Ct(e,t){return e.type===t.type&&e.key===t.key}const ko=({key:e})=>e??null,ln=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||se(e)||E(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function A(e,t=null,n=null,s=0,r=null,o=e===be?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ko(t),ref:t&&ln(t),scopeId:Gs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xe};return a?(Sr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Ht>0&&!i&&ye&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ye.push(l),l}const le=ka;function ka(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Ui)&&(e=Ve),xo(e)){const a=kt(e,t,!0);return n&&Sr(a,n),Ht>0&&!o&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag=-2,a}if(Ia(e)&&(e=e.__vccOpts),t){t=wa(t);let{class:a,style:l}=t;a&&!ee(a)&&(t.class=xt(a)),J(l)&&(br(l)&&!M(l)&&(l=de({},l)),t.style=ur(l))}const i=ee(e)?1:yo(e)?128:Ri(e)?64:J(e)?4:E(e)?2:0;return A(e,t,n,s,r,i,o,!0)}function wa(e){return e?br(e)||oo(e)?de({},e):e:null}function kt(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:a,transition:l}=e,f=t?va(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ko(f),ref:t&&t.ref?n&&o?M(o)?o.concat(ln(t)):[o,ln(t)]:ln(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&kr(d,l.clone(d)),d}function wo(e=" ",t=0){return le(Pn,null,e,t)}function Qr(e,t){const n=le(on,null,e);return n.staticCount=t,n}function st(e="",t=!1){return t?(Q(),an(Ve,null,e)):le(Ve,null,e)}function De(e){return e==null||typeof e=="boolean"?le(Ve):M(e)?le(be,null,e.slice()):xo(e)?Xe(e):le(Pn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function Sr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Sr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!oo(t)?t._ctx=xe:r===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),s&64?(n=16,t=[wo(t)]):n=8);e.children=t,e.shapeFlag|=n}function va(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=xt([t.class,s.class]));else if(r==="style")t.style=ur([t.style,s.style]);else if(kn(r)){const o=t[r],i=s[r];i&&o!==i&&!(M(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ce(e,t,n,s=null){Re(e,t,7,[n,s])}const Sa=no();let Ta=0;function _a(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Sa,o={uid:Ta++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ko(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ao(s,r),emitsOptions:mo(s,r),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ha.bind(null,o),e.ce&&e.ce(o),o}let ce=null,mn,tr;{const e=Sn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};mn=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),tr=t("__VUE_SSR_SETTERS__",n=>Ut=n)}const Xt=e=>{const t=ce;return mn(e),e.scope.on(),()=>{e.scope.off(),mn(t)}},Jr=()=>{ce&&ce.scope.off(),mn(null)};function vo(e){return e.vnode.shapeFlag&4}let Ut=!1;function Ca(e,t=!1,n=!1){t&&tr(t);const{props:s,children:r}=e.vnode,o=vo(e);Zi(e,s,o,t),ra(e,r,n||t);const i=o?Aa(e,t):void 0;return t&&tr(!1),i}function Aa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zi);const{setup:s}=n;if(s){Fe();const r=e.setupContext=s.length>1?Da(e):null,o=Xt(e),i=zt(s,e,0,[e.props,r]),a=ks(i);if(We(),o(),(a||e.sp)&&!Lt(e)&&Vs(e),a){if(i.then(Jr,Jr),t)return i.then(l=>{Zr(e,l)}).catch(l=>{_n(l,e,0)});e.asyncDep=i}else Zr(e,i)}else So(e)}function Zr(e,t,n){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Hs(t)),So(e)}function So(e,t,n){const s=e.type;e.render||(e.render=s.render||Ie);{const r=Xt(e);Fe();try{Xi(e)}finally{We(),r()}}}const Pa={get(e,t){return re(e,"get",""),e[t]}};function Da(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Pa),slots:e.slots,emit:e.emit,expose:t}}function Dn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hs(yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nt)return Nt[n](e)},has(t,n){return n in t||n in Nt}})):e.proxy}function Ia(e){return E(e)&&"__vccOpts"in e}const It=(e,t)=>vi(e,t,Ut),Ra="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nr;const es=typeof window<"u"&&window.trustedTypes;if(es)try{nr=es.createPolicy("vue",{createHTML:e=>e})}catch{}const To=nr?e=>nr.createHTML(e):e=>e,Ma="http://www.w3.org/2000/svg",$a="http://www.w3.org/1998/Math/MathML",$e=typeof document<"u"?document:null,ts=$e&&$e.createElement("template"),Ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?$e.createElementNS(Ma,e):t==="mathml"?$e.createElementNS($a,e):n?$e.createElement(e,{is:n}):$e.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ts.innerHTML=To(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=ts.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},La=Symbol("_vtc");function Na(e,t,n){const s=e[La];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ns=Symbol("_vod"),Oa=Symbol("_vsh"),ja=Symbol(""),Ba=/(^|;)\s*display\s*:/;function Fa(e,t,n){const s=e.style,r=ee(n);let o=!1;if(n&&!r){if(t)if(ee(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&cn(s,a,"")}else for(const i in t)n[i]==null&&cn(s,i,"");for(const i in n)i==="display"&&(o=!0),cn(s,i,n[i])}else if(r){if(t!==n){const i=s[ja];i&&(n+=";"+i),s.cssText=n,o=Ba.test(n)}}else t&&e.removeAttribute("style");ns in e&&(e[ns]=o?s.display:"",e[Oa]&&(s.display="none"))}const rs=/\s*!important$/;function cn(e,t,n){if(M(n))n.forEach(s=>cn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Wa(e,t);rs.test(n)?e.setProperty(it(s),n.replace(rs,""),"important"):e[s]=n}}const ss=["Webkit","Moz","ms"],Wn={};function Wa(e,t){const n=Wn[t];if(n)return n;let s=Ye(t);if(s!=="filter"&&s in e)return Wn[t]=s;s=Ss(s);for(let r=0;r<ss.length;r++){const o=ss[r]+s;if(o in e)return Wn[t]=o}return t}const os="http://www.w3.org/1999/xlink";function is(e,t,n,s,r,o=Vo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(os,t.slice(6,t.length)):e.setAttributeNS(os,t,n):n==null||o&&!Ts(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Ke(n)?String(n):n)}function as(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?To(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ts(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function ft(e,t,n,s){e.addEventListener(t,n,s)}function Ha(e,t,n,s){e.removeEventListener(t,n,s)}const ls=Symbol("_vei");function Ua(e,t,n,s,r=null){const o=e[ls]||(e[ls]={}),i=o[t];if(s&&i)i.value=s;else{const[a,l]=za(t);if(s){const f=o[t]=Ya(s,r);ft(e,a,f,l)}else i&&(Ha(e,a,i,l),o[t]=void 0)}}const cs=/(?:Once|Passive|Capture)$/;function za(e){let t;if(cs.test(e)){t={};let s;for(;s=e.match(cs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let Hn=0;const Xa=Promise.resolve(),qa=()=>Hn||(Xa.then(()=>Hn=0),Hn=Date.now());function Ya(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Re(Ga(s,n.value),t,5,[s])};return n.value=e,n.attached=qa(),n}function Ga(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const us=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Va=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?Na(e,s,i):t==="style"?Fa(e,n,s):kn(t)?ar(t)||Ua(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ka(e,t,s,i))?(as(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&is(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ee(s))?as(e,Ye(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),is(e,t,s,i))};function Ka(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&us(t)&&E(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return us(t)&&ee(n)?!1:t in e}const ds=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>nn(t,n):t};function Qa(e){e.target.composing=!0}function fs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),Ja={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Un]=ds(r);const o=s||r.props&&r.props.type==="number";ft(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=Xn(a)),e[Un](a)}),n&&ft(e,"change",()=>{e.value=e.value.trim()}),t||(ft(e,"compositionstart",Qa),ft(e,"compositionend",fs),ft(e,"change",fs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},i){if(e[Un]=ds(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?Xn(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},Za=["ctrl","shift","alt","meta"],el={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Za.some(n=>e[`${n}Key`]&&!t.includes(n))},tl=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const a=el[t[i]];if(a&&a(r,t))return}return e(r,...o)})},nl=de({patchProp:Va},Ea);let hs;function rl(){return hs||(hs=oa(nl))}const sl=(...e)=>{const t=rl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=il(s);if(!r)return;const o=t._component;!E(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,ol(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function ol(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function il(e){return ee(e)?document.querySelector(e):e}function Tr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var at=Tr();function _o(e){at=e}var jt={exec:()=>null};function F(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(r,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(ue.caret,"$1"),n=n.replace(r,i),s},getRegex:()=>new RegExp(n,t)};return s}var ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},al=/^(?:[ \t]*(?:\n|$))+/,ll=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,cl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,qt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ul=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_r=/(?:[*+-]|\d{1,9}[.)])/,Co=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ao=F(Co).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),dl=F(Co).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fl=/^[^\n]+/,Ar=/(?!\s*\])(?:\\.|[^\[\]\\])+/,hl=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ar).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),pl=F(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_r).getRegex(),In="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gl=F("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pr).replace("tag",In).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Po=F(Cr).replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",In).getRegex(),ml=F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Po).getRegex(),Dr={blockquote:ml,code:ll,def:hl,fences:cl,heading:ul,hr:qt,html:gl,lheading:Ao,list:pl,newline:al,paragraph:Po,table:jt,text:fl},ps=F("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",In).getRegex(),yl={...Dr,lheading:dl,table:ps,paragraph:F(Cr).replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ps).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",In).getRegex()},bl={...Dr,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(Cr).replace("hr",qt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ao).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Do=/^( {2,}|\\)\n(?!\s*$)/,wl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rn=/[\p{P}\p{S}]/u,Ir=/[\s\p{P}\p{S}]/u,Io=/[^\s\p{P}\p{S}]/u,vl=F(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ir).getRegex(),Ro=/(?!~)[\p{P}\p{S}]/u,Sl=/(?!~)[\s\p{P}\p{S}]/u,Tl=/(?:[^\s\p{P}\p{S}]|~)/u,_l=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Mo=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Cl=F(Mo,"u").replace(/punct/g,Rn).getRegex(),Al=F(Mo,"u").replace(/punct/g,Ro).getRegex(),$o="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Pl=F($o,"gu").replace(/notPunctSpace/g,Io).replace(/punctSpace/g,Ir).replace(/punct/g,Rn).getRegex(),Dl=F($o,"gu").replace(/notPunctSpace/g,Tl).replace(/punctSpace/g,Sl).replace(/punct/g,Ro).getRegex(),Il=F("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Io).replace(/punctSpace/g,Ir).replace(/punct/g,Rn).getRegex(),Rl=F(/\\(punct)/,"gu").replace(/punct/g,Rn).getRegex(),Ml=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$l=F(Pr).replace("(?:-->|$)","-->").getRegex(),El=F("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$l).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),yn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ll=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",yn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Eo=F(/^!?\[(label)\]\[(ref)\]/).replace("label",yn).replace("ref",Ar).getRegex(),Lo=F(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ar).getRegex(),Nl=F("reflink|nolink(?!\\()","g").replace("reflink",Eo).replace("nolink",Lo).getRegex(),Rr={_backpedal:jt,anyPunctuation:Rl,autolink:Ml,blockSkip:_l,br:Do,code:kl,del:jt,emStrongLDelim:Cl,emStrongRDelimAst:Pl,emStrongRDelimUnd:Il,escape:xl,link:Ll,nolink:Lo,punctuation:vl,reflink:Eo,reflinkSearch:Nl,tag:El,text:wl,url:jt},Ol={...Rr,link:F(/^!?\[(label)\]\((.*?)\)/).replace("label",yn).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",yn).getRegex()},rr={...Rr,emStrongRDelimAst:Dl,emStrongLDelim:Al,url:F(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},jl={...rr,br:F(Do).replace("{2,}","*").getRegex(),text:F(rr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},tn={normal:Dr,gfm:yl,pedantic:bl},At={normal:Rr,gfm:rr,breaks:jl,pedantic:Ol},Bl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gs=e=>Bl[e];function Ae(e,t){if(t){if(ue.escapeTest.test(e))return e.replace(ue.escapeReplace,gs)}else if(ue.escapeTestNoEncode.test(e))return e.replace(ue.escapeReplaceNoEncode,gs);return e}function ms(e){try{e=encodeURI(e).replace(ue.percentDecode,"%")}catch{return null}return e}function ys(e,t){let n=e.replace(ue.findPipe,(o,i,a)=>{let l=!1,f=i;for(;--f>=0&&a[f]==="\\";)l=!l;return l?"|":" |"}),s=n.split(ue.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(ue.slashPipe,"|");return s}function Pt(e,t,n){let s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function Fl(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function bs(e,t,n,s,r){let o=t.href,i=t.title||null,a=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:i,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}function Wl(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let r=s[1];return t.split(`
`).map(o=>{let i=o.match(n.other.beginningSpace);if(i===null)return o;let[a]=i;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}var bn=class{options;rules;lexer;constructor(e){this.options=e||at}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Pt(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Wl(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Pt(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Pt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Pt(t[0],`
`).split(`
`),s="",r="",o=[];for(;n.length>0;){let i=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),i=!0;else if(!i)a.push(n[l]);else break;n=n.slice(l);let f=a.join(`
`),d=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${f}`:f,r=r?`${r}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=h,n.length===0)break;let y=o.at(-1);if(y?.type==="code")break;if(y?.type==="blockquote"){let v=y,C=v.raw+`
`+n.join(`
`),I=this.blockquote(C);o[o.length-1]=I,s=s.substring(0,s.length-v.raw.length)+I.raw,r=r.substring(0,r.length-v.text.length)+I.text;break}else if(y?.type==="list"){let v=y,C=v.raw+`
`+n.join(`
`),I=this.list(C);o[o.length-1]=I,s=s.substring(0,s.length-y.raw.length)+I.raw,r=r.substring(0,r.length-v.raw.length)+I.raw,n=C.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),i=!1;for(;e;){let l=!1,f="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;f=t[0],e=e.substring(f.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,N=>" ".repeat(3*N.length)),y=e.split(`
`,1)[0],v=!h.trim(),C=0;if(this.options.pedantic?(C=2,d=h.trimStart()):v?C=t[1].length+1:(C=t[2].search(this.rules.other.nonSpaceChar),C=C>4?1:C,d=h.slice(C),C+=t[1].length),v&&this.rules.other.blankLine.test(y)&&(f+=y+`
`,e=e.substring(y.length+1),l=!0),!l){let N=this.rules.other.nextBulletRegex(C),U=this.rules.other.hrRegex(C),z=this.rules.other.fencesBeginRegex(C),_=this.rules.other.headingBeginRegex(C),$=this.rules.other.htmlBeginRegex(C);for(;e;){let H=e.split(`
`,1)[0],V;if(y=H,this.options.pedantic?(y=y.replace(this.rules.other.listReplaceNesting,"  "),V=y):V=y.replace(this.rules.other.tabCharGlobal,"    "),z.test(y)||_.test(y)||$.test(y)||N.test(y)||U.test(y))break;if(V.search(this.rules.other.nonSpaceChar)>=C||!y.trim())d+=`
`+V.slice(C);else{if(v||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||z.test(h)||_.test(h)||U.test(h))break;d+=`
`+y}!v&&!y.trim()&&(v=!0),f+=H+`
`,e=e.substring(H.length+1),h=V.slice(C)}}r.loose||(i?r.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(i=!0));let I=null,Z;this.options.gfm&&(I=this.rules.other.listIsTask.exec(d),I&&(Z=I[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:f,task:!!I,checked:Z,loose:!1,text:d,tokens:[]}),r.raw+=f}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l=0;l<r.items.length;l++)if(this.lexer.state.top=!1,r.items[l].tokens=this.lexer.blockTokens(r.items[l].text,[]),!r.loose){let f=r.items[l].tokens.filter(h=>h.type==="space"),d=f.length>0&&f.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=d}if(r.loose)for(let l=0;l<r.items.length;l++)r.items[l].loose=!0;return r}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ys(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?o.align.push("right"):this.rules.other.tableAlignCenter.test(i)?o.align.push("center"):this.rules.other.tableAlignLeft.test(i)?o.align.push("left"):o.align.push(null);for(let i=0;i<n.length;i++)o.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:o.align[i]});for(let i of r)o.rows.push(ys(i,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Pt(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Fl(t[2],"()");if(o===-2)return;if(o>-1){let i=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),bs(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return bs(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...s[0]].length-1,o,i,a=r,l=0,f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(s=f.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(i=[...o].length,s[3]||s[4]){a+=i;continue}else if((s[5]||s[6])&&r%3&&!((r+i)%3)){l+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+l);let d=[...s[0]][0].length,h=e.slice(0,r+s.index+d+i);if(Math.min(r,i)%2){let v=h.slice(1,-1);return{type:"em",raw:h,text:v,tokens:this.lexer.inlineTokens(v)}}let y=h.slice(2,-2);return{type:"strong",raw:h,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Oe=class sr{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||at,this.options.tokenizer=this.options.tokenizer||new bn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ue,block:tn.normal,inline:At.normal};this.options.pedantic?(n.block=tn.pedantic,n.inline=At.pedantic):this.options.gfm&&(n.block=tn.gfm,this.options.breaks?n.inline=At.breaks:n.inline=At.gfm),this.tokenizer.rules=n}static get rules(){return{block:tn,inline:At}}static lex(t,n){return new sr(n).lex(t)}static lexInline(t,n){return new sr(n).inlineTokens(t)}lex(t){t=t.replace(ue.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(ue.tabCharGlobal,"    ").replace(ue.spaceLine,""));t;){let r;if(this.options.extensions?.block?.some(i=>(r=i.call({lexer:this},t,n))?(t=t.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length);let i=n.at(-1);r.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),n.push(r);continue}let o=t;if(this.options.extensions?.startBlock){let i=1/0,a=t.slice(1),l;this.options.extensions.startBlock.forEach(f=>{l=f.call({lexer:this},a),typeof l=="number"&&l>=0&&(i=Math.min(i,l))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let i=n.at(-1);s&&i?.type==="paragraph"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r),s=o.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(t){let i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,r=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;t;){o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(f=>(a=f.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);let f=n.at(-1);a.type==="text"&&f?.type==="text"?(f.raw+=a.raw,f.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(t,s,i)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if(this.options.extensions?.startInline){let f=1/0,d=t.slice(1),h;this.options.extensions.startInline.forEach(y=>{h=y.call({lexer:this},d),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(l=t.substring(0,f+1))}if(a=this.tokenizer.inlineText(l)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let f=n.at(-1);f?.type==="text"?(f.raw+=a.raw,f.text+=a.text):n.push(a);continue}if(t){let f="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}},xn=class{options;parser;constructor(e){this.options=e||at}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(ue.notSpaceStart)?.[0],r=e.replace(ue.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ae(s)+'">'+(n?r:Ae(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:Ae(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let i=0;i<e.items.length;i++){let a=e.items[i];s+=this.listitem(a)}let r=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+Ae(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){let o=e.rows[r];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ae(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),r=ms(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return t&&(o+=' title="'+Ae(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let r=ms(e);if(r===null)return Ae(n);e=r;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${Ae(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ae(e.text)}},Mr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},je=class or{options;renderer;textRenderer;constructor(t){this.options=t||at,this.options.renderer=this.options.renderer||new xn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Mr}static parse(t,n){return new or(n).parse(t)}static parseInline(t,n){return new or(n).parseInline(t)}parse(t,n=!0){let s="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){s+=l||"";continue}}let i=o;switch(i.type){case"space":{s+=this.renderer.space(i);continue}case"hr":{s+=this.renderer.hr(i);continue}case"heading":{s+=this.renderer.heading(i);continue}case"code":{s+=this.renderer.code(i);continue}case"table":{s+=this.renderer.table(i);continue}case"blockquote":{s+=this.renderer.blockquote(i);continue}case"list":{s+=this.renderer.list(i);continue}case"html":{s+=this.renderer.html(i);continue}case"paragraph":{s+=this.renderer.paragraph(i);continue}case"text":{let a=i,l=this.renderer.text(a);for(;r+1<t.length&&t[r+1].type==="text";)a=t[++r],l+=`
`+this.renderer.text(a);n?s+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):s+=l;continue}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(t,n=this.renderer){let s="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=a||"";continue}}let i=o;switch(i.type){case"escape":{s+=n.text(i);break}case"html":{s+=n.html(i);break}case"link":{s+=n.link(i);break}case"image":{s+=n.image(i);break}case"strong":{s+=n.strong(i);break}case"em":{s+=n.em(i);break}case"codespan":{s+=n.codespan(i);break}case"br":{s+=n.br(i);break}case"del":{s+=n.del(i);break}case"text":{s+=n.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},un=class{options;block;constructor(e){this.options=e||at}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Oe.lex:Oe.lexInline}provideParser(){return this.block?je.parse:je.parseInline}},Hl=class{defaults=Tr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=je;Renderer=xn;TextRenderer=Mr;Lexer=Oe;Tokenizer=bn;Hooks=un;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let r=s;for(let o of r.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of r.rows)for(let i of o)n=n.concat(this.walkTokens(i.tokens,t));break}case"list":{let r=s;n=n.concat(this.walkTokens(r.items,t));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let i=r[o].flat(1/0);n=n.concat(this.walkTokens(i,t))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=t.renderers[r.name];o?t.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){let r=this.defaults.renderer||new xn(this.defaults);for(let o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,a=n.renderer[i],l=r[i];r[i]=(...f)=>{let d=a.apply(r,f);return d===!1&&(d=l.apply(r,f)),d||""}}s.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new bn(this.defaults);for(let o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,a=n.tokenizer[i],l=r[i];r[i]=(...f)=>{let d=a.apply(r,f);return d===!1&&(d=l.apply(r,f)),d}}s.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new un;for(let o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,a=n.hooks[i],l=r[i];un.passThroughHooks.has(o)?r[i]=f=>{if(this.defaults.async)return Promise.resolve(a.call(r,f)).then(h=>l.call(r,h));let d=a.call(r,f);return l.call(r,d)}:r[i]=(...f)=>{let d=a.apply(r,f);return d===!1&&(d=l.apply(r,f)),d}}s.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),r&&(a=a.concat(r.call(this,i))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Oe.lex(e,t??this.defaults)}parser(e,t){return je.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},r={...this.defaults,...s},o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);let i=r.hooks?r.hooks.provideLexer():e?Oe.lex:Oe.lexInline,a=r.hooks?r.hooks.provideParser():e?je.parse:je.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then(l=>i(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>a(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(t=r.hooks.preprocess(t));let l=i(t,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let f=a(l,r);return r.hooks&&(f=r.hooks.postprocess(f)),f}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ae(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},ot=new Hl;function B(e,t){return ot.parse(e,t)}B.options=B.setOptions=function(e){return ot.setOptions(e),B.defaults=ot.defaults,_o(B.defaults),B};B.getDefaults=Tr;B.defaults=at;B.use=function(...e){return ot.use(...e),B.defaults=ot.defaults,_o(B.defaults),B};B.walkTokens=function(e,t){return ot.walkTokens(e,t)};B.parseInline=ot.parseInline;B.Parser=je;B.parser=je.parse;B.Renderer=xn;B.TextRenderer=Mr;B.Lexer=Oe;B.lexer=Oe.lex;B.Tokenizer=bn;B.Hooks=un;B.parse=B;B.options;B.setOptions;B.use;B.walkTokens;B.parseInline;je.parse;Oe.lex;const lt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Ul={name:"MarkdownEditor",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t,expose:n}){const s=Ee(null);return n({insertTextAtCursor:async o=>{const i=s.value;if(!i)return;const a=i.selectionStart,l=i.selectionEnd,f=e.modelValue.substring(0,a)+o+e.modelValue.substring(l);t("update:modelValue",f),await zs(),i.focus(),i.selectionStart=i.selectionEnd=a+o.length}}),{textareaRef:s}}},zl={class:"flex flex-col h-full"},Xl=["value"];function ql(e,t,n,s,r,o){return Q(),te("div",zl,[A("textarea",{ref:"textareaRef",value:n.modelValue,onInput:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value)),class:"flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors resize-none custom-scroll",placeholder:"Start typing your markdown here..."},null,40,Xl)])}const Yl=lt(Ul,[["render",ql]]),Gl={name:"MarkdownViewer",props:{markdown:{type:String,required:!0}},computed:{renderedHtml(){return B(this.markdown,{gfm:!0,breaks:!0})}}},Vl={class:"flex flex-col h-full min-h-0"},Kl=["innerHTML"];function Ql(e,t,n,s,r,o){return Q(),te("div",Vl,[A("div",{innerHTML:o.renderedHtml,class:"overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"},null,8,Kl)])}const Jl=lt(Gl,[["render",Ql]]),Zl={name:"TemplatesModal",props:{templates:{type:Array,required:!0}},emits:["close","insert-template"],data(){return{searchTerm:""}},computed:{categorizedTemplates(){const e=this.searchTerm.toLowerCase();return e?this.templates.filter(n=>n.name.toLowerCase().includes(e)||n.category&&n.category.toLowerCase().includes(e)).reduce((n,s)=>{const r=s.category||"General";return n[r]||(n[r]=[]),n[r].push(s),n},{}):this.templates.reduce((n,s)=>{const r=s.category||"General";return n[r]||(n[r]=[]),n[r].push(s),n},{})}}},ec={class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50"},tc={class:"w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col max-h-[85vh]"},nc={class:"flex-shrink-0 flex justify-between items-center mb-4"},rc={class:"flex-shrink-0 mb-4"},sc={class:"flex-grow min-h-0 overflow-y-auto custom-scroll pr-2"},oc={class:"text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 first:mt-0 mb-2 pt-4 text-center"},ic={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},ac={class:"flex justify-between items-center"},lc={class:"font-medium text-gray-800 dark:text-gray-200"},cc=["onClick"],uc={key:0,class:"text-center text-slate-500 dark:text-slate-400 py-10"};function dc(e,t,n,s,r,o){return Q(),te("div",ec,[A("div",tc,[A("div",nc,[t[2]||(t[2]=A("h2",{class:"text-xl font-bold text-cyan-600 dark:text-cyan-400"},"Markdown Templates",-1)),A("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"dark:text-slate-200 text-2xl leading-none"}," × ")]),A("div",rc,[Di(A("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>r.searchTerm=i),placeholder:"Search templates...",class:"w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"},null,512),[[Ja,r.searchTerm]])]),A("div",sc,[(Q(!0),te(be,null,Kn(o.categorizedTemplates,(i,a)=>(Q(),te("div",{key:a},[A("h3",oc,Be(a),1),A("ul",ic,[(Q(!0),te(be,null,Kn(i,l=>(Q(),te("li",{key:l.name,class:"border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700"},[A("div",ac,[A("span",lc,Be(l.name),1),A("button",{onClick:f=>e.$emit("insert-template",l.content),class:"text-sm bg-cyan-600 text-white px-3 py-1 rounded-md hover:bg-cyan-700 flex-shrink-0"}," Insert ",8,cc)])]))),128))])]))),128)),Object.keys(o.categorizedTemplates).length===0?(Q(),te("div",uc," No templates found. ")):st("",!0)])])])}const fc=lt(Zl,[["render",dc]]),hc={name:"CheatsheetModal",emits:["close"],data(){return{activeCheatSheetTab:"basic"}}},pc={class:"fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors z-50"},gc={class:"relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"},mc={class:"flex justify-between items-center mb-4"},yc={key:0},bc={key:1};function xc(e,t,n,s,r,o){return Q(),te("div",pc,[A("div",gc,[A("div",mc,[t[3]||(t[3]=A("h2",{class:"text-2xl font-bold text-cyan-700 dark:text-cyan-400"},"Markdown Cheatsheet",-1)),A("div",null,[A("button",{onClick:t[0]||(t[0]=i=>r.activeCheatSheetTab="basic"),class:xt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="basic"},"px-2 py-1"])}," Basic ",2),A("button",{onClick:t[1]||(t[1]=i=>r.activeCheatSheetTab="gfm"),class:xt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="gfm"},"px-2 py-1"])}," GFM ",2)]),A("button",{onClick:t[2]||(t[2]=i=>e.$emit("close")),class:"absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-2xl leading-none transition-colors"}," × ")]),r.activeCheatSheetTab==="basic"?(Q(),te("div",yc,t[4]||(t[4]=[Qr('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Text Formatting</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">*Italic*</code> → <em>Italic</em></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">**Bold**</code> → <strong>Bold</strong></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code> → <del>Strikethrough</del></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Headings</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700"># Heading 1</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">## Heading 2</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Lists</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links &amp; Images</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">[Link Text](https://...)</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">![Alt Text](image.jpg)</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code &amp; Blockquotes</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\\ncode block\\n```</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code></li></ul>',10)]))):st("",!0),r.activeCheatSheetTab==="gfm"?(Q(),te("div",bc,t[5]||(t[5]=[Qr('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500"> GitHub Flavored Markdown (GFM) </h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task list</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Table | Header |</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">https://example.com</code> → Autolink </li></ul>',2)]))):st("",!0)])])}const kc=lt(hc,[["render",xc]]),ut=Ee(!1);function No(){const e=Ee("🌙"),t=()=>{ut.value?(document.documentElement.classList.add("dark"),e.value="🌙",localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),e.value="☀️",localStorage.setItem("theme","light"))},n=()=>{localStorage.getItem("theme")==="light"?ut.value=!1:ut.value=!0,t()},s=()=>{ut.value=!ut.value,t()};return Js(()=>{n()}),{isDark:ut,themeDefault:e,themeToggle:s}}const wc={__name:"ThemeToggle",setup(e){const{themeDefault:t,themeToggle:n}=No();return(s,r)=>(Q(),te("button",{onClick:r[0]||(r[0]=(...o)=>mt(n)&&mt(n)(...o)),class:"flex items-center justify-center h-10 w-10 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},Be(mt(t)),1))}},vc={name:"EmojiPickerModal",emits:["close","select-emoji"],setup(){return{emojis:["😊","😂","❤️","👍","🎉","🔥","🚀","🤔","👀","👋","👏","✅","✨","💡","⚠️","💯","🔗","🧑‍💻","💻","📝","📁","📈","⚙️","🌍"]}}},Sc={class:"w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4"},Tc={class:"relative flex justify-center items-center mb-4"},_c={class:"grid grid-cols-8 gap-2 max-h-[50vh] overflow-y-auto custom-scroll"},Cc=["onClick"];function Ac(e,t,n,s,r,o){return Q(),te("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[1]||(t[1]=tl(i=>e.$emit("close"),["self"]))},[A("div",Sc,[A("div",Tc,[t[2]||(t[2]=A("h2",{class:"w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400"}," Select an Emoji ",-1)),A("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"absolute right-0 text-2xl leading-none"}," × ")]),A("div",_c,[(Q(!0),te(be,null,Kn(s.emojis,i=>(Q(),te("button",{key:i,onClick:a=>e.$emit("select-emoji",i),class:"text-2xl rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"},Be(i),9,Cc))),128))])])])}const Pc=lt(vc,[["render",Ac]]),Dc={name:"HeaderActions",emits:["toggle-help","toggle-templates","download-md","download-html","download-txt"],data(){return{showExportMenu:!1}},methods:{toggleExportMenu(){this.showExportMenu=!this.showExportMenu,this.showExportMenu&&document.addEventListener("click",this.closeMenuOnOutsideClick,{once:!0})},closeMenuOnOutsideClick(e){this.$el.contains(e.target)||(this.showExportMenu=!1)}}},Ic={class:"flex items-center gap-3"},Rc={class:"relative"},Mc={key:0,class:"absolute mt-2 right-0 w-40 bg-white dark:bg-slate-800 border dark:text-slate-200 border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"},$c={class:"text-sm text-left"};function Ec(e,t,n,s,r,o){return Q(),te("div",Ic,[A("button",{onClick:t[0]||(t[0]=i=>e.$emit("toggle-help")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"}," Cheatsheet "),A("button",{onClick:t[1]||(t[1]=i=>e.$emit("toggle-templates")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"}," Templates "),A("div",Rc,[A("button",{onClick:t[2]||(t[2]=(...i)=>o.toggleExportMenu&&o.toggleExportMenu(...i)),class:"px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"},t[6]||(t[6]=[wo(" Export "),A("span",null,"▼",-1)])),r.showExportMenu?(Q(),te("div",Mc,[A("ul",$c,[A("li",null,[A("button",{onClick:t[3]||(t[3]=i=>e.$emit("download-md")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .MD ")]),A("li",null,[A("button",{onClick:t[4]||(t[4]=i=>e.$emit("download-html")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .HTML ")]),A("li",null,[A("button",{onClick:t[5]||(t[5]=i=>e.$emit("download-txt")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .txt ")])])])):st("",!0)])])}const Lc=lt(Dc,[["render",Ec]]),Nc={name:"EditorToolbar",props:{copyText:{type:String,default:"Copy"}},emits:["toggle-emojis","copy","clear"]},Oc={class:"flex items-center gap-2"};function jc(e,t,n,s,r,o){return Q(),te("div",Oc,[A("button",{onClick:t[0]||(t[0]=i=>e.$emit("toggle-emojis")),class:"flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},t[3]||(t[3]=[A("span",{class:"text-xl"},"😊",-1)])),A("button",{onClick:t[1]||(t[1]=i=>e.$emit("copy")),class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},Be(n.copyText),1),A("button",{onClick:t[2]||(t[2]=i=>e.$emit("clear")),class:"px-3 py-1 rounded-md text-sm font-medium border border-red-500/50 text-red-600 hover:bg-red-50 dark:border-red-500/50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors"}," Clear ")])}const Bc=lt(Nc,[["render",jc]]),Fc=[{name:"README Starter",category:"Software Development",content:`
# Project Title

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)

A brief one-sentence description of what your project does.

## Description

A more detailed description of the project, explaining its purpose, features, and the problem it solves.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Provide step-by-step instructions on how to install your project and its dependencies.

\`\`\`bash
# Example for a Node.js project
npm install your-package-name
\`\`\`

## Usage

Show users how to use your project with clear code examples and explanations.

\`\`\`javascript
// Import the main function/class
import yourFunction from 'your-package-name';

// Show a basic usage example
const result = yourFunction({ option: 'value' });
console.log(result);
\`\`\`

## Contributing

Explain how others can contribute to your project. Include guidelines for pull requests, bug reports, and feature requests.

1.  Fork the Project
2.  Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3.  Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4.  Push to the Branch (\`git push origin feature/AmazingFeature\`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - [@YourTwitter](https://twitter.com/YourTwitter) - email@example.com

Project Link: [https://github.com/your_username/your_project](https://github.com/your_username/your_project)
`},{name:"Blog Post",category:"Content & Writing",content:`---
title: "Your Awesome Blog Post Title"
author: "Your Name"
date: "${new Date().toISOString().split("T")[0]}"
tags: ["tech", "tutorial", "javascript"]
---

# Your Awesome Blog Post Title

*A brief, italicized introduction or summary of the article to hook the reader.*

## Section 1: The Problem

Start by explaining the problem you're about to solve. This sets the stage and makes the content relatable for readers facing the same issue.

## Section 2: The Solution

This is the core of your post. Break down the solution into smaller, easy-to-digest parts. Use subheadings, lists, and code blocks to make it clear.

### Step-by-Step Guide

1.  **First Step:** Explain the first action the user needs to take.
2.  **Second Step:** Use code blocks to illustrate your points.

\`\`\`javascript
function aClearerExample() {
  // This code is much easier to read with syntax highlighting.
  console.log('Hello, World!');
}
\`\`\`

3.  **Third Step:** Use blockquotes to emphasize important notes or tips.

> **Note:** Don't forget to install the necessary dependencies before running the code.

## Conclusion

Summarize the key takeaways from the article. You can also suggest what the reader might want to learn or do next. Thank them for reading and invite them to leave comments or questions.
`},{name:"Meeting Notes",category:"Business & Professional",content:`
# Meeting Notes: [Meeting Topic]

- **Date:** ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
- **Time:** [Start Time] - [End Time]
- **Location:** [e.g., Google Meet, Conference Room A]

## Attendees

- Your Name (Facilitator)
- Jane Doe (Product)
- John Smith (Engineering)

## Agenda

1.  Review Action Items from Last Meeting
2.  Discuss [Main Topic 1]
3.  Brainstorm [Main Topic 2]
4.  Q&A and Next Steps

## Discussion Notes

### Topic 1: Review Action Items
- Action item about [Previous Task] is **complete**.
- Action item about [Another Task] is **in progress**. John to provide an update next week.

### Topic 2: Discuss [Main Topic 1]
- Jane presented the latest user feedback. Key insight was that users are confused about [Specific Feature].
- The team discussed potential solutions, including a new UI tooltip and a short onboarding video.

### Topic 3: Brainstorm [Main Topic 2]
- The team brainstormed ideas for the Q3 roadmap.
- Top ideas included [Idea A], [Idea B], and [Idea C].

## Action Items

- [ ] **All:** Review the new design mockups by EOD Friday.
- [ ] **Jane:** Create a project brief for the onboarding video idea. (Due: Next Wednesday)
- [ ] **John:** Investigate the technical feasibility of [Idea A]. (Due: Next Friday)

## Next Meeting

- **Date:** [Date of Next Meeting]
- **Topic:** [Topic for Next Meeting]
`},{name:"Changelog",category:"Software Development",content:`
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New feature in development.

## [1.1.0] - 2023-10-26

### Added
- User profile pages.
- Ability to comment on posts.

### Changed
- Updated a dependency to a new version.
- Refactored the authentication module for better performance.

### Fixed
- A bug where users could not reset their passwords.

## [1.0.0] - 2023-09-15

### Added
- Initial release of the project.
- User registration and login functionality.
- Core feature for creating and viewing posts.

### Security
- Addressed a potential XSS vulnerability in the search bar.
`},{name:"To-Do List",category:"Personal Productivity",content:`
# My To-Do List - ${new Date().toLocaleDateString("en-US",{month:"long",day:"numeric"})}

A list of tasks to stay organized and productive for the day/week.

## 🎯 Priority Tasks

- [ ] Finish the project proposal and send it for review.
- [ ] Prepare the presentation slides for Friday's meeting.
- [ ] Fix the critical bug reported in ticket #123.

## 💻 Project: [Project Name]

- [ ] Design the database schema for the new feature.
- [ ] Write unit tests for the authentication module.
- [x] Review Jane's pull request for the UI update.

##  errands

- [ ] Pick up groceries after work.
- [x] Schedule a dentist appointment.
- [ ] Mail the package at the post office.

## ✅ Completed Today

- A list of items you've checked off can be moved here to track accomplishments.
`},{name:"Code Documentation",category:"Software Development",content:`
### \`functionName(param1, param2)\`

A concise, one-sentence description of what the function does. A more detailed paragraph can follow, explaining the function's purpose, context, and any potential side effects.

---

#### **Parameters**

| Name     | Type      | Description                                     |
| :------- | :-------- | :---------------------------------------------- |
| \`param1\` | \`string\`  | **Required.** A description of the first parameter. |
| \`param2\` | \`object\`  | *Optional.* A description of the second parameter. |

---

#### **Returns**

**Type:** \`Promise<Array>\`

A clear description of what the function returns. For promises, specify what the promise resolves to. For objects, describe their structure.

---

#### **Example Usage**

Provide a clear, real-world code example of how to use the function.

\`\`\`javascript
import { functionName } from './utils';

async function fetchData() {
  try {
    const options = { retries: 3 };
    const data = await functionName('some-id', options);
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
\`\`\`
`},{name:"Project Idea",category:"Software Development",content:`
# Project Idea: [Project Title]

- **Created By:** [Your Name]
- **Date:** ${new Date().toLocaleDateString()}
- **Status:** [Brainstorming / In Planning / Ready for Dev]

---

## Project Overview

A short paragraph describing the core idea, inspiration, and goal of the project. What are you building, and why does it matter?

---

## Planned Features

List out the features you'd like to include in the MVP and any additional stretch goals.

### MVP Features
- [ ] User Authentication
- [ ] Dashboard with CRUD functionality
- [ ] Responsive UI

### Stretch Goals
- [ ] Dark mode toggle
- [ ] Realtime chat feature
- [ ] User analytics

---

## Tools & Technologies

| Purpose           | Suggested Tool(s)            |
|------------------|------------------------------|
| Frontend         | [Vue / React / HTML + CSS]   |
| Backend          | [Node.js / Flask / Django]   |
| Database         | [MongoDB / PostgreSQL]       |
| Deployment       | [Render / Vercel / Netlify]  |
| Version Control  | Git + GitHub                 |
| Other Tools      | [Figma, Postman, etc.]       |

---

## Pages / Components

Break the UI into manageable views or components.

- **Home Page** – Introduction, CTA, etc.
- **Login/Register**
- **User Dashboard**
- **Profile Settings**
- **[Any custom views your app needs]**

---

## API Endpoints (Optional)

\`\`\`http
GET    /api/items
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
\`\`\`

---

## Team Roles (Optional)

| Name     | Role                  | Notes                        |
|----------|-----------------------|------------------------------|
| Alice    | Frontend Lead         | Handles UI and routing       |
| Bob      | Backend Lead          | API + DB                     |
| Charlie  | Full-stack / QA       | Assists wherever needed      |

---

## Notes & Inspiration

Any helpful links, references, diagrams, or design ideas to guide development.

- [Inspirational project or repo](https://github.com/)
- [Design mockups or wireframes]

---
`},{name:"Weekly Report",category:"Business & Professional",content:`
# Weekly Status Report

- **Name:** Your Name
- **Team:** Your Team Name
- **Report for Week Ending:** ${new Date().toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})}

---

## Executive Summary (TL;DR)

A brief, high-level summary of the week. Mention the most significant achievements and any critical blockers.

---

## Key Accomplishments

A bulleted list of tasks, projects, and milestones completed this week.

- **Project A:** Launched the new feature ahead of schedule, resulting in positive initial feedback.
- **Project B:** Completed the final testing phase for the upcoming Q3 release.
- **Collaboration:** Led a successful brainstorming session with the design team for the new UI.

---

## Challenges & Blockers

A list of any issues that are slowing down progress. For each, note the impact and the required action or support needed.

- **Blocker:** Waiting on API access from the external vendor for Project C.
  - **Impact:** Delays development by an estimated 3 days.
  - **Action Needed:** Following up with our contact daily.

---

## Goals for Next Week

A clear, actionable list of priorities for the upcoming week.

- Begin development on the next phase of Project A.
- Deploy the Q3 release to the staging environment for final review.
- Onboard the new team member and get them set up.
`},{name:"Tutorial / How-To Guide",category:"Content & Writing",content:`
# How to [Accomplish a Specific Task]

A short introduction explaining what this guide will teach the reader and why it's useful.

## Prerequisites

Before you begin, make sure you have the following installed or configured:

- [Required Software, e.g., Node.js v18.0 or higher]
- [Another Requirement, e.g., A code editor like VS Code]
- [Any necessary accounts, e.g., A GitHub account]

---

## Step 1: Setting Up Your Project

Start with the initial setup. This could be creating a new folder, initializing a project, or installing key dependencies.

\`\`\`bash
# Create a new project directory
mkdir my-new-project
cd my-new-project

# Initialize a new Node.js project
npm init -y
\`\`\`

## Step 2: Writing the Core Logic

Explain the main part of the tutorial. Use clear subheadings and code examples to guide the user.

First, create a file named \`index.js\`. Then, add the following code:

\`\`\`javascript
// index.js
function main() {
  console.log("This is the core logic of our tutorial!");
}

main();
\`\`\`

> **Tip:** Use blockquotes to share helpful tips or best practices.

## Step 3: Running and Verifying

Show the user how to run their code and what output they should expect.

\`\`\`bash
node index.js
\`\`\`

**Expected Output:**

\`\`\`text
This is the core logic of our tutorial!
\`\`\`

---

## Troubleshooting

- **Error: \`command not found: node\`**: This means Node.js is not installed or not in your system's PATH. Please verify your installation based on the prerequisites.
- **Issue: [Another common problem]**: A brief explanation of how to solve it.

## Conclusion

Briefly summarize what was accomplished and suggest what the reader could learn or build next.
`},{name:"Personal Journal Entry",category:"Personal Productivity",content:`
# Journal: ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}

- **Mood:** [e.g., Optimistic, Tired, Reflective]
- **Location:** [e.g., Home, Coffee Shop, Traveling]

---

## Today's Highlight

*What was the best or most memorable part of your day?*


## What I'm Grateful For

1.
2.
3.


## Thoughts & Reflections

*A space for free-form writing. What's on your mind? Did you learn something new? Are you working through a challenge?*


`},{name:"Resume / CV",category:"Business & Professional",content:`
# Your Full Name

- **Location:** City, State
- **Phone:** (555) 555-5555
- **Email:** your.email@example.com
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)

---

## Professional Summary

A concise 2-3 sentence summary that highlights your key skills, experience, and career objectives. Enthusiastic and detail-oriented professional with X years of experience in [Your Industry], specializing in [Your Key Skill] and [Another Key Skill].

---

## Work Experience

### **Company Name** | City, State
**Your Job Title** | Month Year – Present

- Led a team to successfully [accomplish something significant], resulting in [a quantifiable result like a 15% increase in efficiency].
- Developed and maintained [a specific system or product] using [technologies like React, Node.js, and Python].
- Collaborated with cross-functional teams to define project requirements and deliver high-quality solutions.

### **Previous Company Name** | City, State
**Previous Job Title** | Month Year – Month Year

- [Description of a key responsibility or achievement.]
- [Another description, starting with an action verb.]

---

## Education

### **University Name** | City, State
**Bachelor of Science in Computer Science** | Graduated Month Year

- **Relevant Coursework:** Data Structures, Algorithms, Web Development, Database Systems.
- **Honors:** cum laude, Dean's List

---

## Skills

- **Languages:** JavaScript (ES6+), Python, HTML5, CSS3/Sass
- **Frameworks & Libraries:** React, Node.js, Express, Vue.js
- **Databases:** PostgreSQL, MongoDB, Redis
- **Tools:** Git, Docker, Webpack, Jira
`},{name:"Bug Report",category:"Software Development",content:`
# Bug Report: [A brief, descriptive title of the bug]

- **Reported By:** Your Name
- **Date:** ${new Date().toLocaleDateString("en-CA")}
- **Severity:** [e.g., Critical, High, Medium, Low]

---

## Environment

- **Operating System:** [e.g., Windows 11, macOS Sonoma 14.5]
- **Browser (if applicable):** [e.g., Chrome 126, Firefox 127]
- **App Version:** [e.g., v2.1.3]

---

## Steps to Reproduce

Provide a clear, step-by-step list of instructions to reliably reproduce the bug.

1.  Navigate to the '...' page.
2.  Click on the '...' button.
3.  Enter '...' into the '...' field.
4.  See error.

---

## Expected Behavior

A clear and concise description of what you expected to happen.

*Example: The form should submit successfully and a confirmation message should appear.*

---

## Actual Behavior

A clear and concise description of what actually happened. Include any error messages.

*Example: The page crashed and displayed a "Cannot read properties of undefined" error in the console.*

---

## Supporting Media

*Include screenshots, GIFs, or video recordings here to help illustrate the bug.*

![Screenshot of the error](https://via.placeholder.com/600x400.png?text=Paste+Screenshot+Here)
`},{name:"Case Study",category:"Business & Professional",content:`
# Case Study: How [Client Name] Achieved [Result] with [Your Product/Service]

- **Client:** [Client Name]
- **Industry:** [e.g., E-commerce, SaaS, Healthcare]
- **Project Date:** [Date or Quarter]

---

## Executive Summary

A brief overview of the case study. [Client Name], a leading company in the [Industry] space, was facing [a major challenge]. By implementing [Your Product/Service], they were able to achieve [a key result, e.g., a 40% increase in user engagement] within [a specific timeframe, e.g., three months].

---

## The Challenge

Describe the specific problems and pain points the client was experiencing before they used your solution. What were their goals? What was blocking them?

*Example: The client's manual workflow for processing orders was slow and prone to errors, leading to customer dissatisfaction and lost revenue.*

---

## The Solution

Detail the strategy and the steps you took to address the client's challenges. Explain how your product or service was implemented and used.

1.  **Discovery & Planning:** We conducted an in-depth analysis of their existing processes.
2.  **Implementation:** Our team integrated [Your Product] with their existing CRM and inventory systems.
3.  **Training & Onboarding:** We provided comprehensive training to their staff to ensure a smooth transition.

---

## The Results

This is the most critical section. Use hard numbers and quantifiable metrics to demonstrate the impact of your solution.

- **40% Increase** in order processing speed.
- **99.9% Reduction** in data entry errors.
- **25% Increase** in customer satisfaction scores.
- **$50,000 Saved** in operational costs in the first quarter alone.

---

## Client Testimonial

> "[A powerful and positive quote from a key stakeholder at the client's company, like the CEO or Project Manager.]"
>
> **– [Name of Stakeholder], [Their Title]**
`},{name:"Press Release",category:"Business & Professional",content:`
**FOR IMMEDIATE RELEASE**

# [Your Company/Product Name] Announces [Major News, e.g., Launch of New Product]

**[City, State] – [Date]** – [Your Company Name], a leader in [Your Industry], today announced the launch of [Your Product Name], a groundbreaking solution designed to [solve a specific problem]. This new product will be available starting [Date] and aims to [state the main benefit for customers].

"[A compelling quote from a key person, like the CEO or Founder, about the significance of this announcement]," said [Name], [Title] at [Your Company Name]. "[Elaborate on the vision or the impact of the news.]"

Key features and benefits of [Your Product Name] include:

* **[Feature 1]:** [Briefly explain the benefit of this feature.]
* **[Feature 2]:** [Briefly explain the benefit of this feature.]
* **[Feature 3]:** [Briefly explain the benefit of this feature.]

[Your Product Name] will be available starting [Date] at [Price, or state where it can be accessed]. For more information, visit [Your Website URL].

**About [Your Company Name]:**
[A brief, standard paragraph about your company. What it does, its mission, and its key accomplishments. This is often called a "boilerplate."]

**Media Contact:**
[Name of Media Contact]
[Title]
[Email Address]
[Phone Number]
[Website URL]

###
`},{name:"Recipe Card",category:"Personal Productivity",content:`
# [Recipe Name, e.g., Classic Lasagna]

*A short, enticing description of the dish. Example: "A rich and savory classic lasagna with layers of pasta, bolognese, and creamy béchamel sauce."*

- **Author:** [Your Name]
- **Yields:** [e.g., 6-8 servings]
- **Prep time:** [e.g., 30 minutes]
- **Cook time:** [e.g., 1 hour]

---

## Ingredients

### For the Bolognese Sauce:
- 1 tbsp Olive Oil
- 1 large Onion, chopped
- 2 cloves Garlic, minced
- 1 lb Ground Beef
- 1 (28 oz) can Crushed Tomatoes
- 1 tsp Dried Oregano
- Salt and Pepper to taste

### For the Béchamel Sauce:
- 4 tbsp Butter
- 1/4 cup All-Purpose Flour
- 4 cups Whole Milk
- Pinch of Nutmeg

### For Assembly:
- 12 Lasagna Noodles, cooked
- 2 cups Mozzarella Cheese, shredded
- 1/2 cup Parmesan Cheese, grated

---

## Instructions

1.  **Make the Bolognese:** Heat olive oil in a large pot over medium heat. Add onion and garlic and cook until softened. Add ground beef and cook until browned. Drain excess fat. Stir in crushed tomatoes, oregano, salt, and pepper. Simmer for at least 20 minutes.
2.  **Make the Béchamel:** In a separate saucepan, melt butter over medium heat. Whisk in flour and cook for 1 minute. Gradually whisk in milk until smooth. Bring to a simmer and cook until the sauce thickens, about 5-7 minutes. Remove from heat and stir in nutmeg.
3.  **Preheat Oven:** Preheat your oven to 375°F (190°C).
4.  **Assemble the Lasagna:** Spread a thin layer of bolognese on the bottom of a 9x13 inch baking dish. Arrange a single layer of noodles on top. Spread with a layer of béchamel, followed by a layer of bolognese, and a sprinkle of mozzarella. Repeat the layers, ending with a final layer of béchamel and a generous topping of mozzarella and Parmesan cheese.
5.  **Bake:** Cover with foil and bake for 25 minutes. Remove the foil and bake for another 20-25 minutes, or until the top is golden and bubbly. Let it rest for 10 minutes before serving.
`},{name:"Project Proposal",category:"Business & Professional",content:`
# Project Proposal: [Project Name]

- **Prepared For:** [Client Name or Department]
- **Prepared By:** [Your Name / Your Company]
- **Date:** ${new Date().toLocaleDateString("en-CA")}

---

## 1. Problem Statement

A clear and concise description of the problem this project aims to solve. What is the current challenge or opportunity? Why is it important to address it now?

---

## 2. Proposed Solution

A high-level overview of our proposed solution. How will we address the problem stated above? What is the core idea or strategy?

---

## 3. Scope of Work

This section details the specific work that will be performed.

### In Scope:
- **Deliverable 1:** [e.g., A fully functional e-commerce website]
- **Deliverable 2:** [e.g., A content management system (CMS) for managing products]
- **Deliverable 3:** [e.g., User authentication and profile management]

### Out of Scope:
- [e.g., Mobile application development]
- [e.g., Ongoing content creation and marketing]

---

## 4. Timeline & Milestones

A projected timeline for the project, broken down into key phases and milestones.

| Milestone                  | Estimated Completion |
| :------------------------- | :------------------- |
| **Phase 1: Discovery & Design** | Week 2               |
| **Phase 2: Development** | Week 6               |
| **Phase 3: Testing & QA** | Week 8               |
| **Final Launch** | Week 9               |

---

## 5. Cost Estimate

A breakdown of the project costs.

| Item                      | Cost        |
| :------------------------ | :---------- |
| **Design & Prototyping** | $X,XXX      |
| **Development & Engineering** | $XX,XXX     |
| **Project Management** | $X,XXX      |
| **Total Estimated Cost** | **$XX,XXX** |

---

## 6. Next Steps

To proceed with this proposal, please sign and return by [Date]. Upon receipt, we will schedule a kickoff meeting to begin the discovery phase.
`},{name:"Product Launch Plan",category:"Project Management",content:`
# Product Launch Plan: [Product Name]

- **Owner:** [Your Name]
- **Target Launch Date:** [Date]

---

## 1. Overview

Brief description of the product and its value proposition.

---

## 2. Goals

- Goal 1: [e.g., Acquire 1,000 users in first 30 days]
- Goal 2: [e.g., Get 20 press mentions]

---

## 3. Launch Timeline

| Phase                | Date         | Description                     |
| --------------------| ------------ | ------------------------------- |
| Pre-launch           | [Date]       | Final testing and prep          |
| Launch               | [Date]       | Press release, email campaign   |
| Post-launch followup | [Date]       | User feedback, bug fixes        |

---

## 4. Key Channels

- Website
- Email
- Social Media (Twitter, LinkedIn)
- Product Hunt
- Influencers / Partners

---

## 5. Metrics to Track

- Signups
- Engagement
- Churn
- Conversion Rate
`},{name:"User Persona",category:"Project Management",content:`
# User Persona: [Persona Name]

- **Age:** [e.g., 28]
- **Occupation:** [e.g., Software Developer]
- **Location:** [e.g., Austin, TX]
- **Tech Comfort Level:** [e.g., High]

---

## Goals

- [e.g., Learn new web frameworks]
- [e.g., Build a portfolio]

## Frustrations

- [e.g., Poor documentation]
- [e.g., Too many tool choices]

## Tools They Use

- VS Code
- GitHub
- Notion

## Summary

[A short story summarizing this user’s typical day or challenges.]
`},{name:"Interview Transcript",category:"Business & Professional",content:`
# Interview with [Name]

- **Role:** [e.g., Product Manager]
- **Date:** ${new Date().toLocaleDateString()}
- **Location:** [e.g., Zoom]

---

## Intro & Background

**Q:** Tell us about your role and responsibilities.  
**A:** [Transcript answer]

---

## Product Feedback

**Q:** What do you think of our current solution?  
**A:** [Transcript answer]

---

## Suggestions & Insights

**Q:** If you could change one thing, what would it be?  
**A:** [Transcript answer]

---

## Closing Notes

Final thoughts or follow-up action items.
`},{name:"Release Notes",category:"Software Development",content:`
# Release Notes: Version X.X.X

**Release Date:** ${new Date().toLocaleDateString()}

---

## New Features

- Added [feature name] for [user benefit].
- Integrated with [API or tool].

## Bug Fixes

- Fixed crash when clicking [button].
- Resolved styling issue in dark mode.

## Improvements

- Improved performance of [component/page].
- Refactored [module].

## Breaking Changes

- [Be sure to update to use \`new-method()\` instead of \`old-method()\`]

## Known Issues

- [Issue summary + workaround, if any.]
`},{name:"Goal Tracker",category:"Personal Productivity",content:`
# Goal Tracker

## Long-Term Goals

- [ ] Launch MVP of [Project]
- [ ] Hit 1,000 subscribers on [Platform]

## Monthly Goals - ${new Date().toLocaleString("default",{month:"long",year:"numeric"})}

- [ ] Complete 3 blog posts
- [ ] Start user interviews

## Weekly Goals

| Week       | Goal                            | Done |
| ---------- | ------------------------------- | ---- |
| Week 1     | Build landing page              | [ ]  |
| Week 2     | Create social content calendar  | [ ]  |

---

## Review Notes

What went well? What to improve next time?
`},{name:"Book Summary",category:"Personal Productivity",content:`
# Book Summary: *[Book Title]*

- **Author:** [Author Name]
- **Read On:** ${new Date().toLocaleDateString()}

---

## Key Themes

- [Theme 1]
- [Theme 2]
- [Theme 3]

---

## Favorite Quotes

> "[Insert Quote Here]" — *[Page X]*

> "[Insert Another Quote]"

---

## Summary

[A few paragraphs summarizing the book.]

---

## Takeaways / Lessons Learned

- [e.g., Focus on consistency over perfection.]
- [e.g., Your mindset shapes your outcomes.]

---

## Would You Recommend It?

[Yes / No + Why]
`},{name:"Learning Tracker",category:"Personal Productivity",content:`
# Learning Tracker

## Subject: [e.g., Vue.js Fundamentals]

---

## Modules or Topics

- [ ] Introduction & Setup
- [ ] Components & Props
- [ ] Computed vs Watch
- [ ] Vue Router Basics
- [ ] Vuex State Management

---

## Resources

- [Course Name](https://example.com)
- [Official Docs](https://vuejs.org)

---

## Notes

Capture things you don’t want to forget:
- \`ref()\` is for reactive primitives
- \`computed()\` is cached until dependency changes

---

## Questions to Revisit

1. How does reactivity work under the hood?
2. What's the difference between props and emits?
`},{name:"Daily Standup",category:"Project Management",content:`
# Daily Standup - ${new Date().toLocaleDateString()}

- **Name:** [Your Name]
- **Team:** [e.g., Frontend]

---

## What I Did Yesterday

- Finished styling login form
- Reviewed PR for markdown editor bug

## What I’m Working on Today

- Implement emoji picker modal
- Draft README starter content

## Blockers

- Waiting on backend endpoint for file upload
`},{name:"Client Onboarding Checklist",category:"Business & Professional",content:`
# Client Onboarding Checklist: [Client Name]

- **Kickoff Date:** [MM/DD/YYYY]
- **Account Manager:** [Your Name]

---

## Access

- [ ] Added to Slack
- [ ] Shared Drive folder created
- [ ] Credentials provided

---

## Discovery

- [ ] Completed intro call
- [ ] Filled out onboarding questionnaire
- [ ] Shared initial design brief

---

## Setup Tasks

- [ ] Project board created in Notion
- [ ] GitHub repo shared
- [ ] Milestones agreed upon

---

## Notes

Any special requests, concerns, or observations.
`},{name:"Quote Collection",category:"Personal Productivity",content:`
# Quote Collection

A personal archive of inspiring quotes.

---

> “Whether you think you can or you think you can’t, you’re right.”  
> — *Henry Ford*

---

> “Simplicity is the soul of efficiency.”  
> — *Austin Freeman*

---

> “In the middle of every difficulty lies opportunity.”  
> — *Albert Einstein*

---

> “The best way to predict the future is to invent it.”  
> — *Alan Kay*

---

Use this space to collect and revisit meaningful ideas.
`},{name:"Design Brief",category:"Project Management",content:`
# Design Brief

- **Project Name:** [Insert name]
- **Prepared By:** [Your Name]
- **Date:** ${new Date().toLocaleDateString()}

---

## Objective

Describe the primary goal of this design project. What problem are you solving, or what outcome are you aiming for?

## Target Audience

Who is the end user? Include relevant demographics, goals, or user behaviors.

## Brand Guidelines

- Fonts: [List fonts]
- Colors: [Primary, secondary, accent]
- Style: [Modern, minimal, playful, etc.]

## Deliverables

List all required outputs (e.g., logo, website design, mobile UI screens).

## Timeline

| Milestone | Target Date |
| --------- | ----------- |
| Kickoff Meeting | [Date] |
| First Draft | [Date] |
| Final Handoff | [Date] |

## Notes

Any other considerations or constraints (e.g., accessibility, responsive design).
`},{name:"Sprint Planning",category:"Project Management",content:`
# Sprint Planning Document

- **Sprint #:** [e.g., 21]
- **Duration:** [Start Date] - [End Date]
- **Team:** [List team members]

---

## Sprint Goal

Summarize the overall goal of the sprint in one or two sentences.

## Backlog Items (Selected for Sprint)

| Issue | Title | Story Points | Assignee |
|-------|-------|--------------|----------|
| #101 | Add login flow | 3 | Alice |
| #102 | Fix cart bug | 2 | Bob |

## Tasks Breakdown

List subtasks or specific actions for each backlog item.

## Blockers

List any known issues or risks before the sprint begins.

## Notes

Any extra context, dependencies, or upcoming events.
`},{name:"API Spec",category:"Software Development",content:`
# API Specification: [Feature or Module Name]

- **Version:** 1.0
- **Author:** [Your Name]
- **Last Updated:** ${new Date().toLocaleDateString()}

---

## Endpoint

\`\`\`
GET /api/resource/:id
\`\`\`

## Description

Briefly describe what this endpoint does.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| id | string | The unique identifier for the resource. |

## Response

\`\`\`json
{
  "id": "abc123",
  "name": "Sample",
  "createdAt": "2024-01-01T00:00:00Z"
}
\`\`\`

## Status Codes

- 200 OK: Resource found
- 404 Not Found: Resource does not exist
- 500 Internal Server Error

## Notes

Any authentication requirements, headers, or special considerations.
`},{name:"Bug Triage Sheet",category:"Software Development",content:`
# Bug Triage - ${new Date().toLocaleDateString()}

## Overview

This document summarizes current open bugs and their triage status.

## Bugs List

| ID | Title | Severity | Status | Owner |
|----|-------|----------|--------|-------|
| #201 | Login fails with invalid token | High | Open | Jane |
| #202 | Tooltip offset issue | Low | Backlog | Tom |

## Notes

Mention test coverage, environment conditions, or reproduction steps if needed.
`},{name:"Workshop Outline",category:"Business & Professional",content:`
# Workshop Outline: [Workshop Title]

- **Facilitator:** [Your Name]
- **Date:** [Insert Date]
- **Duration:** [e.g., 3 hours]
- **Audience:** [e.g., Beginner Developers]

---

## Goals

What should participants be able to do/know by the end?

## Agenda

| Time | Topic |
|------|-------|
| 10:00 AM | Introduction & Icebreaker |
| 10:30 AM | Core Topic 1 |
| 11:15 AM | Break |
| 11:30 AM | Hands-On Activity |
| 12:30 PM | Q&A and Wrap-Up |

## Required Materials

List software, accounts, tools, or downloads needed.

## Feedback

How will you collect feedback after the workshop?
`},{name:"Event Planning Checklist",category:"Project Management",content:`
# Event Planning Checklist

- **Event Name:** [Insert name]
- **Date:** [Insert date]
- **Location:** [Insert location or platform]

---

## Pre-Event Tasks

- [ ] Confirm venue or online platform
- [ ] Create event registration form or page
- [ ] Send invites and promotional materials
- [ ] Arrange speakers, panelists, or guests
- [ ] Prepare slides and materials

## Day-of Tasks

- [ ] Check-in/setup
- [ ] Tech checks (mic, video, projector)
- [ ] Start on time
- [ ] Monitor Q&A or chat
- [ ] Record the session if needed

## Post-Event

- [ ] Send thank-you emails
- [ ] Share recording or slides
- [ ] Collect feedback
- [ ] Write internal debrief

## Notes

Include budget, contact numbers, or links.
`},{name:"Feature Request",category:"Project Management",content:`
# Feature Request: [Feature Name]

- **Submitted By:** [Name]
- **Date:** ${new Date().toLocaleDateString()}

---

## Summary

A brief summary of the feature being proposed.

## Motivation

Explain why this feature is needed. What problem does it solve?

## Proposed Solution

Describe how the feature could work.

## Alternatives Considered

Mention any other ideas that were explored and why they were rejected.

## Impact

How will this feature benefit users or improve the product?

## Notes

Attach any wireframes, mockups, or references here.
`},{name:"Pitch Deck Outline",category:"Business & Professional",content:`
# Pitch Deck Outline

A guide for drafting a startup or product pitch deck in markdown.

---

## Slide 1: Title

- Company name
- Tagline
- Presenter info

## Slide 2: Problem

Clearly define the user or market problem.

## Slide 3: Solution

What do you offer? Show how your product solves the problem.

## Slide 4: Market Opportunity

How big is the market? Include numbers or trends.

## Slide 5: Product Demo

Screenshots or quick description of your product in action.

## Slide 6: Business Model

How do you make money?

## Slide 7: Team

Key people and roles.

## Slide 8: Ask

Funding request, partnership, or next steps.

## Notes

Can be converted into slides using md-to-pdf or similar tools.
`},{name:"Incident Report",category:"Software Development",content:`
# Incident Report: [Issue Summary]

- **Reported On:** ${new Date().toLocaleDateString()}
- **Impact Level:** [High / Medium / Low]
- **Status:** Resolved / Ongoing / Investigating

---

## Summary

Briefly explain what happened.

## Timeline

| Time | Event |
|------|-------|
| 14:02 | Issue reported |
| 14:10 | Engineering notified |
| 14:30 | Fix deployed |

## Root Cause

Explain what caused the incident and how it was diagnosed.

## Resolution

What steps were taken to fix the issue?

## Follow-Up Actions

- [ ] Add monitoring
- [ ] Improve logging
- [ ] Document mitigation steps

## Lessons Learned

What can we improve for next time?
`},{name:"FAQ Document",category:"Content & Writing",content:`
# Frequently Asked Questions (FAQ)

## General

**Q: What is [Product Name]?**  
A: It's a tool that helps you [primary value proposition].

**Q: Is it free to use?**  
A: [Insert your pricing or license terms.]

## Technical

**Q: What browsers are supported?**  
A: [List major browsers and minimum versions.]

**Q: How do I report bugs?**  
A: Use the [GitHub Issues page](https://github.com/your-repo/issues) or contact us at [support@example.com].

## Usage

**Q: Can I import existing data?**  
A: Yes, follow the instructions in the import guide.

**Q: Is there a mobile app?**  
A: Not yet, but it’s on our roadmap.

## Contact

Still have questions? Reach out to us: [support@example.com]
`},{name:"Pull Request (PR) Description",category:"Software Development",content:`
# Pull Request: [Brief, Imperative-Mood Title]

- **Closes:** #[Issue Number]

---

## Description

A clear and concise summary of the changes introduced in this pull request. Explain the "why" behind this change.

## Changes Made

- [ ] Added a new component for [feature].
- [ ] Refactored the authentication service to be more efficient.
- [ ] Fixed a bug where [describe bug].

## How to Test

Provide clear, step-by-step instructions for the reviewer to test these changes.

1.  Checkout this branch.
2.  Run \`npm install\`.
3.  Navigate to the '/new-feature' page.
4.  Verify that [expected behavior] occurs.

## Screenshots

*Include before and after screenshots or GIFs if this PR includes UI changes.*

| Before | After |
| :----: | :---: |
|        |       |

## Notes for Reviewer

Is there anything specific you want the reviewer to focus on? Any potential trade-offs or future considerations?
`},{name:"Architecture Decision Record",category:"Software Development",content:`
# ADR-001: [Title of ADR]

- **Date:** ${new Date().toLocaleDateString("en-CA")}
- **Status:** [Proposed / Accepted / Deprecated / Superseded]

## Context

What is the issue that we're seeing that is motivating this decision or change? Describe the problem, constraints, and forces at play.

## Decision

What is the change that we're proposing and/or doing? Be specific and clear.

## Consequences

What becomes easier or better, what becomes harder or worse, and what are the trade-offs of this decision?

- **Positive:** [e.g., Improved performance, better developer experience]
- **Negative:** [e.g., Increased complexity, reliance on a new dependency]
- **Neutral:** [e.g., A change in coding style]
`},{name:"SWOT Analysis",category:"Business & Professional",content:`
# SWOT Analysis: [Subject of Analysis]

- **Date:** ${new Date().toLocaleDateString()}
- **Participants:** [List of names]

---

## Strengths

*What internal factors give us an advantage?*

- 
- 
- 

## Weaknesses

*What internal factors put us at a disadvantage?*

- 
- 
- 

## Opportunities

*What external factors could we take advantage of?*

- 
- 
- 

## Threats

*What external factors could harm our position?*

- 
- 
- 

---

## Summary & Action Items

Based on the analysis, what are the key takeaways and next steps?
`},{name:"Invoice",category:"Business & Professional",content:`
# Invoice

**From:**
[Your Name / Your Company]
[Your Address]
[Your Email]

**To:**
[Client Name]
[Client Address]
[Client Email]

- **Invoice #:** [001]
- **Date:** ${new Date().toLocaleDateString()}
- **Due Date:** [Date]

---

| Description | Quantity | Unit Price | Total |
| :--- | :---: | :---: | :---: |
| [Service or Product Name] | 1 | $X,XXX | $X,XXX |
| [Another Service] | 10 | $XXX | $X,XXX |
| | | **Subtotal** | **$XX,XXX** |
| | | **Tax (X%)** | **$X,XXX** |
| | | **Total** | **$XX,XXX** |

---

## Payment Details

Please send payment via [Method, e.g., PayPal, Bank Transfer].
**Account:** [Your Payment Details]

*Thank you for your business!*
`},{name:"Performance Review",category:"Business & Professional",content:`
# Performance Review

- **Employee:** [Employee Name]
- **Reviewer:** [Manager Name]
- **Period:** [Start Date] - [End Date]
- **Date of Review:** ${new Date().toLocaleDateString()}

---

## 1. Accomplishments

List the key achievements and successes during this review period.

- 
- 
- 

## 2. Areas for Improvement

Identify areas where growth is needed. Provide specific, constructive examples.

- 
- 
- 

## 3. Employee Comments

A space for the employee to share their perspective on their performance, challenges, and accomplishments.

## 4. Goals for Next Period

Define clear, measurable, and achievable goals for the next review period.

1.  **Goal:** [Specific Goal]
    - **Metric:** [How to measure success]
    - **Target Date:** [Date]

2.  **Goal:** [Another Specific Goal]
    - **Metric:** [How to measure success]
    - **Target Date:** [Date]

---

**Employee Signature:** _________________________

**Manager Signature:** _________________________
`},{name:"Podcast Show Notes",category:"Content & Writing",content:`
# Show Notes: Episode [##] - [Episode Title]

- **Published:** [Date]
- **Host(s):** [Your Name]
- **Guest(s):** [Guest Name], [Guest Title] ([@GuestTwitter](https://twitter.com/GuestTwitter))

---

## Summary

A one-paragraph summary of what this episode is about.

## Topics Discussed

- (01:15) - Introduction to [Topic 1].
- (10:30) - Deep dive into [Topic 2].
- (25:00) - Our guest explains [a key concept].
- (45:10) - Q&A and listener questions.

## Links & Resources

* [Guest's Website](https://example.com)
* [Book Mentioned: "Book Title"](https://example.com)
* [Tool Mentioned: "Tool Name"](https://example.com)

---

*Thanks for listening! Follow us on [Twitter](https://twitter.com/YourShow) and subscribe wherever you get your podcasts.*
`},{name:"YouTube Video Script",category:"Content & Writing",content:`
# YouTube Script: [Video Title]

- **Channel:** [Your Channel Name]
- **Target Length:** [e.g., 8-10 minutes]

---

| Visual / B-Roll | Audio / Dialogue |
| :--- | :--- |
| **Intro (0:00 - 0:15)** | |
| Title card with upbeat music. |**(Hook)** "Have you ever wondered how to [solve a specific problem]? In this video, I'm going to show you exactly how to do it in just three simple steps."|
| Quick montage of final result. | "I'm [Your Name], and you're watching [Your Channel]." |
| **Step 1 (0:15 - 3:00)** | |
| Screencast of [Action 1]. | "Okay, the first thing you need to do is open up your editor and..." |
| Zoom in on a key button. | "Make sure you click this specific checkbox here. This is a common mistake people make."|
| **Step 2 (3:00 - 6:00)** | |
| Whiteboard diagram explaining a concept. | "Now, let's talk about the 'why'. The reason this works is because..." |
| **Outro (6:00 - ...)** | |
| "You" subscribe button animation. | "And there you have it! If you found this useful, click the like button and subscribe for more tutorials every week. Let me know in the comments what you'd like to see next. Thanks for watching!"|
`},{name:"Trip Planner",category:"Personal Productivity",content:`
# Trip to [Destination]

- **Dates:** [Start Date] to [End Date]
- **Travelers:** [List of names]

---

## Transportation

### Flights
- **Departure:** [Airline], Flight [Number] - [Date] @ [Time]
- **Return:** [Airline], Flight [Number] - [Date] @ [Time]
- **Confirmation #:** [Confirmation Number]

### Local Transit
- **Rental Car:** [Company], Confirmation #[Number]
- **Notes:** [e.g., Need to buy subway pass at airport]

---

## Accommodation

- **Hotel/Airbnb Name:** [Name of Place]
- **Address:** [Full Address]
- **Check-in:** [Date] @ [Time]
- **Check-out:** [Date] @ [Time]
- **Confirmation #:** [Confirmation Number]

---

## Itinerary

### Day 1: [Date]
- [ ] Arrive and check in
- [ ] [Activity 1]
- [ ] Dinner at [Restaurant Name]

### Day 2: [Date]
- [ ] [Activity 2]
- [ ] [Activity 3]
- [ ] Lunch at [Cafe Name]

---

## Packing List

- [ ] Passport
- [ ] Chargers
- [ ] [Item]
`},{name:"Weekly Meal Planner",category:"Personal Productivity",content:`
# Weekly Meal Plan

**Week of:** ${new Date().toLocaleDateString()}

---

| Day | Breakfast | Lunch | Dinner |
| :--- | :--- | :--- | :--- |
| **Monday** | Oatmeal | Leftover Dinner | Spaghetti Bolognese |
| **Tuesday** | Yogurt & Granola | Chicken Salad | Tacos |
| **Wednesday** | Scrambled Eggs | Soup & Sandwich | Lemon Herb Salmon |
| **Thursday** | Smoothie | Leftover Salmon | Chicken Stir-fry |
| **Friday** | Cereal | Quinoa Bowl | Pizza Night |
| **Saturday**| Pancakes | Sandwiches | Burgers on the Grill |
| **Sunday** | Omelette | Leftovers | Roast Chicken |

---

## Grocery List

### Produce
- [ ] Onions
- [ ] Garlic
- [ ] Salad Greens
- [ ] Lemons

### Meat / Protein
- [ ] Ground Beef
- [ ] Chicken Breast
- [ ] Salmon

### Pantry
- [ ] Pasta
- [ ] Canned Tomatoes
`},{name:"Habit Tracker",category:"Personal Productivity",content:`
# Habit Tracker: [Month] [Year]

| Habit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | ... |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Wake up at 6 AM | ✅ | ❌ | ✅ | | | | | | | | | | | | | | |
| Exercise | ✅ | ✅ | ❌ | | | | | | | | | | | | | | |
| Read 10 Pages | ✅ | ✅ | ✅ | | | | | | | | | | | | | | |
| No Junk Food | ❌ | ✅ | ✅ | | | | | | | | | | | | | | |
| Meditate | | | | | | | | | | | | | | | | | |

---

## Notes & Reflections

*What patterns did I notice? What can I improve for next month?*
`},{name:"Tech Spec / RFC",category:"Software Development",content:`
# RFC: [Descriptive Title of the Proposal]

- **Author:** [Your Name]
- **Status:** Draft
- **Date:** ${new Date().toLocaleDateString("en-CA")}

## 1. Summary

A high-level summary of the technical proposal. What are we building and why?

## 2. Motivation

What is the problem we are trying to solve? Why is this change necessary? Provide context, user stories, or data to support the need for this work.

## 3. Technical Design

This is the core of the document. Describe the proposed implementation in detail.

- **Data Model Changes:**
- **API Endpoints:**
- **Frontend Components:**
- **Sequence Diagrams or Flowcharts:**

## 4. Drawbacks

What are the potential negative consequences or trade-offs of this approach?

## 5. Alternatives Considered

What other solutions were considered, and why were they rejected in favor of this proposal?

## 6. Unresolved Questions

What questions still need to be answered before implementation can begin?
`},{name:"Job Offer Letter",category:"Business & Professional",content:`
[Your Company Name]
[Your Company Address]

${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

[Candidate Name]
[Candidate Address]

**Subject: Offer of Employment with [Your Company Name]**

Dear [Candidate Name],

On behalf of [Your Company Name], I am delighted to offer you the position of **[Job Title]**. We were all very impressed during the interview process, and we believe your skills and experience will be a valuable asset to our team.

This is a [full-time / part-time / contract] position reporting to [Manager's Name], [Manager's Title]. Your anticipated start date will be on or before **[Start Date]**.

Your starting annual salary will be **$[Salary]**, payable in accordance with the company's standard payroll schedule. You will also be eligible for [mention any bonus, stock options, etc.].

As an employee of [Your Company Name], you will be eligible for our standard benefits package, which includes:
- [Benefit 1, e.g., Health, Dental, and Vision Insurance]
- [Benefit 2, e.g., Paid Time Off]
- [Benefit 3, e.g., 401(k) Plan]

This offer is contingent upon the successful completion of a background check and verification of your employment eligibility.

Please indicate your acceptance of this offer by signing and returning a copy of this letter by **[Acceptance Deadline]**.

We are very excited about the possibility of you joining our team.

Sincerely,

[Your Name]
[Your Title]
`},{name:"Business Plan Outline",category:"Business & Professional",content:`
# Business Plan: [Company Name]

## 1. Executive Summary
A high-level overview of the entire business plan. Write this section last.

## 2. Company Description
- **Mission Statement:**
- **Legal Structure:**
- **Goals & Objectives:**

## 3. Market Analysis
- **Industry Overview:**
- **Target Market:**
- **Competitor Analysis:**

## 4. Organization & Management
- **Management Team:**
- **Organizational Structure:**
- **Key Roles & Responsibilities:**

## 5. Products or Services
- **Product/Service Description:**
- **Competitive Advantage:**
- **Pricing Strategy:**

## 6. Marketing & Sales Strategy
- **Marketing Plan:**
- **Sales Strategy:**
- **Distribution Channels:**

## 7. Financial Projections
- **Startup Costs:**
- **Revenue Projections (Year 1-3):**
- **Break-Even Analysis:**
`},{name:"Meeting Agenda",category:"Business & Professional",content:`
# Meeting Agenda: [Meeting Title]

- **Date:** [Date]
- **Time:** [Start Time] - [End Time]
- **Location:** [e.g., Zoom Link, Conference Room]
- **Attendees:** [List of required attendees]

---

## Meeting Goal

The primary objective of this meeting is to [e.g., decide on the Q4 marketing strategy].

---

## Agenda

| Time | Duration | Topic | Owner |
| :--- | :--- | :--- | :--- |
| 10:00 AM | 5 min | Welcome & Goal Review | [Name] |
| 10:05 AM | 15 min | Review of Q3 Performance | [Name] |
| 10:20 AM | 25 min | Presentation of Q4 Strategy Options | [Name] |
| 10:45 AM | 10 min | Discussion & Decision | All |
| 10:55 AM | 5 min | Action Items & Wrap-up | [Name] |

---

## Pre-Reading / Preparation

*Please review the following documents before the meeting:*
- [Link to Q3 Performance Report](https://example.com)
- [Link to Q4 Strategy Draft](https://example.com)
`},{name:"Cover Letter",category:"Business & Professional",content:`
[Your Name]
[Your Address]
[Your Phone Number]
[Your Email]

${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

[Hiring Manager Name] (If known, otherwise use title)
[Hiring Manager Title]
[Company Name]
[Company Address]

**Subject: Application for the [Job Title] Position**

Dear [Mr./Ms./Mx. Last Name],

I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], which I discovered on [Platform, e.g., LinkedIn, your company website]. With my [X] years of experience in [Your Industry/Field] and a proven track record of [mention a key skill or accomplishment], I am confident that I possess the skills and qualifications necessary to excel in this role.

In my previous position at [Previous Company], I was responsible for [mention a key responsibility]. One of my proudest achievements was [describe a specific accomplishment and its positive result], which demonstrates my ability to [relate the accomplishment to a requirement in the job description]. I am particularly drawn to [Company Name]'s commitment to [mention something specific about the company's mission, values, or products] and I am eager to contribute to such an innovative team.

My resume provides further detail on my accomplishments, and I am keen to discuss how my background in [mention another key skill] can be an asset to [Company Name].

Thank you for your time and consideration. I look forward to the possibility of discussing this exciting opportunity with you further.

Sincerely,
[Your Name]
`},{name:"Newsletter Draft",category:"Content & Writing",content:`
---
**Subject:** [Compelling Subject Line, e.g., ✨ What's New This Week]
**Preheader:** [A short, enticing sentence that appears after the subject line in inboxes.]
---

Hi [First Name],

**(Hook)** A short, engaging opening to grab the reader's attention.

**(Main Content)**
This is the core of your email. Share your main update, story, or piece of content here. Use headings and lists to keep it scannable.

### [Subheading for a key point]

Elaborate on a specific point here.

**(Call to Action - CTA)**
A clear, single action you want the reader to take.

[**→ Read the Full Article**](https://example.com)

Cheers,
[Your Name] / The [Your Brand] Team
`},{name:"Creative Writing Outline",category:"Content & Writing",content:`
# Story Outline: [Working Title]

- **Genre:** [e.g., Sci-Fi, Fantasy, Mystery]
- **Logline:** [A one-sentence summary of the story.]

---

## Characters

- **Protagonist:** [Name, brief description, core motivation, fatal flaw.]
- **Antagonist:** [Name, brief description, what they want, why they oppose the protagonist.]
- **Supporting Character:** [Name, their role in the story.]

---

## The Three-Act Structure

### Act I: The Setup
* **Opening Image:** The first scene, establishing the protagonist's world.
* **Inciting Incident:** The event that kicks off the story and disrupts the protagonist's life.
* **Debate / Refusal of the Call:** The protagonist hesitates to take on the challenge.
* **Plot Point 1 (End of Act I):** The protagonist commits to the journey.

### Act II: The Confrontation
* **Rising Action:** A series of challenges and obstacles. The stakes get higher.
* **Midpoint:** A major turning point—either a false victory or a false defeat.
* **Plot Point 2 (End of Act II):** The "dark night of the soul." All seems lost.

### Act III: The Resolution
* **Climax:** The final confrontation between the protagonist and antagonist.
* **Falling Action:** Tying up loose ends after the climax.
* **Final Image:** The protagonist in their new reality, showing how they have changed.
`},{name:"Workout Log",category:"Personal Productivity",content:`
# Workout Log

- **Date:** ${new Date().toLocaleDateString()}
- **Workout Type:** [e.g., Full Body, Push Day, Cardio]
- **Duration:** [e.g., 60 minutes]

---

| Exercise | Set 1 | Set 2 | Set 3 | Notes |
| :--- | :---: | :---: | :---: | :--- |
| **Squats** | 135lbs x 8 | 135lbs x 8 | 145lbs x 6 | Felt strong |
| **Bench Press** | 150lbs x 6 | 150lbs x 5 | 150lbs x 5 | |
| **Pull-ups** | 8 reps | 7 reps | 6 reps | Bodyweight |
| **Plank** | 60 sec | 60 sec | | |

---

## Cardio

| Activity | Duration | Distance/Notes |
| :--- | :--- | :--- |
| **Treadmill Run** | 20 min | 2 miles, steady pace |

---

## Post-Workout Notes

*How did the workout feel? Any personal records? Anything to change for next time?*
`},{name:"Decision Log",category:"Personal Productivity",content:`
# Decision Log

## Decision: [A clear summary of the decision to be made]

- **Status:** [Not Started / In Progress / Decided]
- **Date:** ${new Date().toLocaleDateString()}
- **Owner:** [Your Name]

---

### 1. The Problem / Context
*What is the core question or problem that requires a decision? Why does it need to be made now?*

### 2. Considered Options

#### Option A: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

#### Option B: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

#### Option C: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

---

### 3. The Decision
**We have decided to proceed with Option [A/B/C].**

*Justify the decision. Why was this option chosen over the others?*

### 4. Outcome & Review
*(To be filled out later)*

- **What was the result of this decision?**
- **Was it the right call? What did we learn?**
`},{name:"Cornell Notes",category:"Personal Productivity",content:`
# Cornell Notes: [Subject/Topic]

- **Date:** ${new Date().toLocaleDateString()}
- **Class/Meeting:** [Name of Class or Meeting]

---

| Cues & Questions (Left Column) | Notes (Right Column) |
| :--- | :--- |
| *After the lecture, write questions or main ideas here that correspond to the notes on the right.* | **Main Notes Area:** Take your detailed notes during the lecture or meeting here. Use shorthand, bullet points, and abbreviations. |
| | |
| What is the primary benefit? | - Main point 1 discussed. |
| | - Detail 1a |
| | - Detail 1b |
| | |
| How does it work? | - Key concept 2 explained. |
| | - Example given: ... |
| | |
| Why is it important? | - Statistic or fact mentioned. |
| | - Connects to [previous topic]. |
| | |

---

## Summary

*After reviewing your notes, write a 1-2 sentence summary of the entire page here. This forces you to process and understand the main points.*
`},{name:"Lab Report",category:"Content & Writing",content:`
# Lab Report: [Title of Experiment]

- **Author(s):** [Your Name(s)]
- **Course:** [Course Name, e.g., CHEM-101]
- **Date:** ${new Date().toLocaleDateString()}

---

## 1. Introduction / Purpose

State the objective of the experiment. What question are you trying to answer or what hypothesis are you testing? Provide any relevant background theory.

## 2. Materials & Equipment

List all materials, chemicals, and equipment used in the experiment.

- Item 1 (e.g., 50ml Beaker)
- Item 2 (e.g., Bunsen Burner)
- Item 3 (e.g., 10g of Sodium Chloride)

## 3. Procedure

Provide a step-by-step description of how the experiment was conducted. It should be detailed enough for someone else to replicate it.

1.  [First step...]
2.  [Second step...]
3.  [Third step...]

## 4. Results / Data

Present the raw data collected during the experiment. Use tables and figures where appropriate.

| Trial | Measurement 1 | Measurement 2 |
| :---: | :---: | :---: |
| 1 | Value A | Value B |
| 2 | Value C | Value D |

## 5. Discussion & Analysis

Interpret the data presented in the Results section. Was the hypothesis supported? Discuss any potential sources of error and their impact on the results.

## 6. Conclusion

Briefly summarize the findings of the experiment and state whether the objective was achieved.
`},{name:"Literature Review Outline",category:"Content & Writing",content:`
# Literature Review: [Topic of Research]

## I. Introduction
- **A. Hook:** Introduce the general topic.
- **B. Context:** Provide background and define the scope of the review.
- **C. Thesis/Purpose:** State the objective of your review (e.g., to identify gaps, to summarize the state of the field).

## II. Body Paragraphs (Grouped by Theme)

### Theme 1: [Name of the First Major Theme]
- **A. Source 1 (Author, Year):**
  - Main finding/argument:
  - Connection to your research:
- **B. Source 2 (Author, Year):**
  - Main finding/argument:
  - How it supports/contradicts Source 1:

### Theme 2: [Name of the Second Major Theme]
- **A. Source 3 (Author, Year):**
  - Main finding/argument:
- **B. Source 4 (Author, Year):**
  - Main finding/argument:

## III. Conclusion
- **A. Summary:** Briefly summarize the main findings from the literature.
- **B. Gaps & Future Research:** Identify what is missing in the current research and suggest directions for future studies.
- **C. Final Statement:** Conclude with a final thought on the topic's importance.
`},{name:"Personal Budget",category:"Personal Productivity",content:`
# Monthly Budget: [Month] [Year]

## Income

| Source | Projected | Actual |
| :--- | :--- | :--- |
| Salary | $X,XXX | |
| Side Hustle | $XXX | |
| **Total Income** | **$XX,XXX** | |

---

## Fixed Expenses

| Expense | Projected | Actual |
| :--- | :--- | :--- |
| Rent/Mortgage | $X,XXX | |
| Utilities | $XXX | |
| Insurance | $XXX | |
| Car Payment | $XXX | |
| **Total Fixed**| **$X,XXX** | |

---

## Variable Expenses

| Expense | Projected | Actual |
| :--- | :--- | :--- |
| Groceries | $XXX | |
| Gas/Transport | $XXX | |
| Entertainment| $XXX | |
| Shopping | $XXX | |
| **Total Variable** | **$X,XXX** | |

---

## Summary

| Category | Projected | Actual |
| :--- | :--- | :--- |
| Total Income | $XX,XXX | |
| Total Expenses | $XX,XXX | |
| **Net (Savings)**| **$X,XXX** | |
`},{name:"User Story (Agile)",category:"Software Development",content:`
# User Story: [Short Title of the Story]

**As a** [type of user],  
**I want** [to perform some action],  
**So that** [I can achieve some goal/benefit].

---

## Acceptance Criteria

- [ ] **Scenario 1:** Given [context], when [I do this], then [this should happen].
- [ ] **Scenario 2:** Given [another context], when [I do something else], then [this is the expected outcome].
- [ ] **Scenario 3 (Edge Case):** Given [a specific edge case], when [I try to break it], then [a specific error or fallback occurs].

## Notes

- [Any technical notes, dependencies, or links to mockups can go here.]
- [Link to Figma Design](https://figma.com/...)
`},{name:"One-on-One (1:1) Meeting",category:"Business & Professional",content:`
# 1:1 Meeting: [Manager Name] & [Employee Name]

- **Date:** ${new Date().toLocaleDateString()}

---

## Employee's Agenda

*(To be filled out by the employee before the meeting)*

- **Topic 1:** [Discussion point, question, or update]
- **Topic 2:** [Career development, feedback request, etc.]
- **Topic 3:** [Blockers or challenges]

## Manager's Agenda

*(To be filled out by the manager before the meeting)*

- **Topic 1:** [Feedback on recent project]
- **Topic 2:** [Company update or team news]
- **Topic 3:** [Checking in on goals]

## Notes & Discussion

*Capture key points from the conversation here.*

## Action Items

- [ ] **(Employee)** [Specific action item to complete] - Due: [Date]
- [ ] **(Manager)** [Specific action item to complete] - Due: [Date]
`},{name:"Game Design Document (GDD) Outline",category:"Content & Writing",content:`
# GDD: [Game Title] - High-Level Outline

- **Genre:** [e.g., 2D Platformer, Puzzle, RPG]
- **Target Audience:** [e.g., Casual Mobile Gamers, Core PC Players]

---

## 1. Core Concept
A one-paragraph "elevator pitch" for the game. What is the core gameplay loop? What makes it unique?

## 2. Gameplay Mechanics
- **Player Actions:** [List all actions the player can take, e.g., run, jump, attack]
- **Core Systems:** [Describe key systems, e.g., combat, inventory, dialogue]
- **Level Progression:** [How does the player advance through the game?]

## 3. Characters
- **Playable Character(s):** [Description, abilities, backstory]
- **Enemies / NPCs:** [List key enemy types or important non-player characters]

## 4. Art & Sound
- **Visual Style:** [Art direction, e.g., pixel art, cel-shaded, realistic]
- **Music & Sound FX:** [Mood and style of the soundtrack and sound effects]

## 5. User Interface (UI)
- **HUD (Heads-Up Display):** [What information is always on screen?]
- **Menus:** [List key menus, e.g., Main Menu, Pause Menu, Inventory Screen]

## 6. Monetization (if applicable)
- [e.g., Premium (one-time purchase), Free-to-play with IAPs, Ads]
`},{name:"D&D Character Sheet",category:"Personal Productivity",content:`
# D&D Character Sheet

## Character Info
- **Name:** - **Class & Level:** - **Race:** - **Alignment:** - **Background:** - **Player Name:** ---

## Ability Scores
| Stat | Score | Modifier |
| :--- | :---: | :---: |
| **Strength** | 10 | +0 |
| **Dexterity** | 10 | +0 |
| **Constitution** | 10 | +0 |
| **Intelligence** | 10 | +0 |
| **Wisdom** | 10 | +0 |
| **Charisma** | 10 | +0 |

---

## Combat
- **Armor Class:** - **Initiative:** - **Speed:** - **Hit Points:** Max __ / Current __
- **Attacks & Spellcasting:** ---

## Skills & Proficiencies
- **Proficiency Bonus:** +2
- **Saving Throws:** - **Skills:** - **Languages & Other Proficiencies:** ---

## Inventory
- **Equipment:** - **Gold:** `},{name:'"Week in Review" Journal',category:"Personal Productivity",content:`
# Week in Review

**For the week of:** [Start Date] - [End Date]

---

## 1. Top 3 Wins This Week
*What were my biggest accomplishments or moments of pride?*

1. 
2. 
3. 

## 2. What Challenges Did I Face?
*What was difficult? Where did I get stuck or feel frustrated?*

- 

## 3. What Did I Learn?
*A new skill, an insight about myself, or a lesson from a mistake.*

- 

## 4. How Am I Feeling?
*A quick check-in on my overall mood and energy levels.*

## 5. What Is My #1 Priority for Next Week?
*What is the single most important thing I need to accomplish next week to move forward?*

- 
`},{name:"Emergency Plan",category:"Personal Productivity",content:`
# Household Emergency Plan

---

## 1. Emergency Contacts

| Name | Relation | Phone Number |
| :--- | :--- | :--- |
| | | |
| | | |
| **Police** | - | 911 |
| **Fire** | - | 911 |
| **Poison Control**| - | (800) 222-1222 |

---

## 2. Meeting Places

- **Indoor (e.g., Fire):** [e.g., The large oak tree across the street]
- **Outdoor (e.g., Earthquake/Evacuation):** [e.g., The front entrance of the local library]

---

## 3. Utility Shut-Off Locations

- **Main Water Shut-Off:** [Location and instructions]
- **Main Gas Shut-Off:** [Location and instructions]
- **Main Electrical Breaker:** [Location and instructions]

---

## 4. Emergency Supply Kit Checklist

- [ ] Water (1 gallon per person, per day, for 3 days)
- [ ] Non-perishable food (3-day supply)
- [ ] First-aid kit
- [ ] Flashlight and extra batteries
- [ ] Battery-powered or hand-crank radio
- [ ] Whistle to signal for help
- [ ] Copies of important documents (ID, insurance)
- [ ] Cash
`}],Wc={class:"flex-shrink-0 flex items-center justify-between px-4 sm:px-8 h-16 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"},Hc={class:"flex items-center gap-4"},Uc={class:"flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-4 sm:p-8"},zc={class:"grid h-full gap-2",style:{"grid-template-rows":"1fr auto"}},Xc={class:"flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"},qc={class:"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"},Yc={class:"flex flex-col h-full min-h-0"},Gc={__name:"App",setup(e){const{isDark:t}=No(),n=Ee(localStorage.getItem("savedMarkdown")||"# Hello, world!"),s=Ee("Copy"),r=Ee(!1),o=Ee(!1),i=Ee(!1),a=Ee(null);sn(n,_=>{localStorage.setItem("savedMarkdown",_)});const l=It(()=>B(n.value,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1})),f=It(()=>n.value.length),d=It(()=>n.value.trim()?n.value.trim().split(/\s+/).length:0),h=It(()=>Math.ceil(d.value/200)),y=_=>{n.value=_,o.value=!1},v=_=>{a.value&&a.value.insertTextAtCursor(_),i.value=!1},C=()=>{navigator.clipboard.writeText(n.value),s.value="Copied!",setTimeout(()=>{s.value="Copy"},2e3)},I=()=>{confirm("Are you sure you want to clear the Canvas?")&&(n.value="")},Z=()=>{r.value=!r.value},N=()=>{const _=new Blob([n.value],{type:"text/markdown"}),$=URL.createObjectURL(_),H=document.createElement("a");H.href=$,H.download="MarkCanvas.md",H.click(),URL.revokeObjectURL($)},U=()=>{const _=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MarkCanvas Export</title>
  <style>body { font-family: sans-serif; }</style>
</head>
<body>
${l.value}
</body>
</html>`,$=new Blob([_],{type:"text/html"}),H=URL.createObjectURL($),V=document.createElement("a");V.href=H,V.download="MarkCanvas.html",V.click(),URL.revokeObjectURL(H)},z=()=>{let _=n.value;_=_.replace(/^#+\s/gm,"").replace(/(\*\*|__|\*|_|~~)/g,"").replace(/!\[(.*?)\]\(.*?\)/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/^[\s\t]*(\*|-|\d+\.)\s/gm,"").replace(/^>\s?/gm,"").replace(/^[=-]{3,}/gm,"").replace(/`{3}.*$/gm,"").replace(/`/g,"").replace(/\n{3,}/g,`

`);const $=new Blob([_],{type:"text/plain"}),H=URL.createObjectURL($),V=document.createElement("a");V.href=H,V.download="MarkCanvas.txt",V.click(),URL.revokeObjectURL(H)};return(_,$)=>(Q(),te("div",{class:xt([{dark:mt(t)},"flex flex-col h-screen w-full font-sans bg-slate-100 dark:bg-slate-900"])},[A("header",Wc,[$[5]||($[5]=A("div",{class:"flex items-center gap-3"},[A("h1",{class:"text-xl font-bold text-slate-800 dark:text-slate-100"},"MarkCanvas")],-1)),A("div",Hc,[le(Lc,{onToggleHelp:Z,onToggleTemplates:$[0]||($[0]=H=>o.value=!0),onDownloadMd:N,onDownloadHtml:U,onDownloadTxt:z}),le(wc)])]),A("main",Uc,[A("div",zc,[le(Yl,{class:"min-h-0",ref_key:"editorRef",ref:a,modelValue:n.value,"onUpdate:modelValue":$[1]||($[1]=H=>n.value=H)},null,8,["modelValue"]),A("div",Xc,[le(Bc,{class:"mr-6","copy-text":s.value,onCopy:C,onClear:I,onToggleEmojis:$[2]||($[2]=H=>i.value=!0)},null,8,["copy-text"]),A("div",qc,[A("span",null,Be(d.value)+" Words",1),A("span",null,Be(f.value)+" Characters",1),A("span",null,Be(h.value)+" min read",1)])])]),A("div",Yc,[le(Jl,{markdown:n.value},null,8,["markdown"])])]),o.value?(Q(),an(fc,{key:0,templates:mt(Fc),onClose:$[3]||($[3]=H=>o.value=!1),onInsertTemplate:y},null,8,["templates"])):st("",!0),r.value?(Q(),an(kc,{key:1,onClose:Z})):st("",!0),i.value?(Q(),an(Pc,{key:2,onClose:$[4]||($[4]=H=>i.value=!1),onSelectEmoji:v})):st("",!0)],2))}};sl(Gc).mount("#app");
