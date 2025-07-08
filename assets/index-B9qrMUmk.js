(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Z={},$t=[],Ve=()=>{},ki=()=>!1,jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Dr=e=>e.startsWith("onUpdate:"),me=Object.assign,Ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xi=Object.prototype.hasOwnProperty,q=(e,t)=>xi.call(e,t),E=Array.isArray,Mt=e=>Wn(e)==="[object Map]",Js=e=>Wn(e)==="[object Set]",L=e=>typeof e=="function",de=e=>typeof e=="string",pt=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Zs=e=>(ie(e)||L(e))&&L(e.then)&&L(e.catch),eo=Object.prototype.toString,Wn=e=>eo.call(e),wi=e=>Wn(e).slice(8,-1),to=e=>Wn(e)==="[object Object]",Rr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yt=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vi=/-(\w)/g,dt=Hn(e=>e.replace(vi,(t,n)=>n?n.toUpperCase():"")),Si=/\B([A-Z])/g,At=Hn(e=>e.replace(Si,"-$1").toLowerCase()),no=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=Hn(e=>e?`on${no(e)}`:""),ut=(e,t)=>!Object.is(e,t),wn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fr=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},hr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ti=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let ls;const Un=()=>ls||(ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Er(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Pi(r):Er(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(de(e)||ie(e))return e}const Ci=/;(?![^(]*\))/g,Ai=/:([^]+)/,_i=/\/\*[^]*?\*\//g;function Pi(e){const t={};return e.replace(_i,"").split(Ci).forEach(n=>{if(n){const r=n.split(Ai);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tt(e){let t="";if(de(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const r=Tt(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Di="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ii=Pr(Di);function ro(e){return!!e||e===""}const so=e=>!!(e&&e.__v_isRef===!0),Be=e=>de(e)?e:e==null?"":E(e)||ie(e)&&(e.toString===eo||!L(e.toString))?so(e)?Be(e.value):JSON.stringify(e,oo,2):String(e),oo=(e,t)=>so(t)?oo(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[tr(r,o)+" =>"]=s,n),{})}:Js(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>tr(n))}:pt(t)?tr(t):ie(t)&&!E(t)&&!to(t)?String(t):t,tr=(e,t="")=>{var n;return pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Ri{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){this._on>0&&--this._on===0&&(Pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ei(){return Pe}let ne;const nr=new WeakSet;class io{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nr.has(this)&&(nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cs(this),co(this);const t=ne,n=Oe;ne=this,Oe=!0;try{return this.fn()}finally{uo(this),ne=t,Oe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Lr(t);this.deps=this.depsTail=void 0,cs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pr(this)&&this.run()}get dirty(){return pr(this)}}let ao=0,Kt,Qt;function lo(e,t=!1){if(e.flags|=8,t){e.next=Qt,Qt=e;return}e.next=Kt,Kt=e}function $r(){ao++}function Mr(){if(--ao>0)return;if(Qt){let t=Qt;for(Qt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Kt;){let t=Kt;for(Kt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function co(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function uo(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Lr(r),$i(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===sn)||(e.globalVersion=sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!pr(e))))return;e.flags|=2;const t=e.dep,n=ne,r=Oe;ne=e,Oe=!0;try{co(e);const s=e.fn(e._value);(t.version===0||ut(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=n,Oe=r,uo(e),e.flags&=-3}}function Lr(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Lr(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Oe=!0;const ho=[];function rt(){ho.push(Oe),Oe=!1}function st(){const e=ho.pop();Oe=e===void 0?!0:e}function cs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let sn=0;class Mi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Oe||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Mi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,po(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(t){this.version++,sn++,this.notify(t)}notify(t){$r();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mr()}}}function po(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)po(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const gr=new WeakMap,St=Symbol(""),mr=Symbol(""),on=Symbol("");function be(e,t,n){if(Oe&&ne){let r=gr.get(e);r||gr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nr),s.map=r,s.key=n),s.track()}}function Je(e,t,n,r,s,o){const i=gr.get(e);if(!i){sn++;return}const a=l=>{l&&l.trigger()};if($r(),t==="clear")i.forEach(a);else{const l=E(e),u=l&&Rr(n);if(l&&n==="length"){const c=Number(r);i.forEach((h,p)=>{(p==="length"||p===on||!pt(p)&&p>=c)&&a(h)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(on)),t){case"add":l?u&&a(i.get("length")):(a(i.get(St)),Mt(e)&&a(i.get(mr)));break;case"delete":l||(a(i.get(St)),Mt(e)&&a(i.get(mr)));break;case"set":Mt(e)&&a(i.get(St));break}}Mr()}function Dt(e){const t=U(e);return t===e?t:(be(t,"iterate",on),Ne(e)?t:t.map(ge))}function zn(e){return be(e=U(e),"iterate",on),e}const Li={__proto__:null,[Symbol.iterator](){return rr(this,Symbol.iterator,ge)},concat(...e){return Dt(this).concat(...e.map(t=>E(t)?Dt(t):t))},entries(){return rr(this,"entries",e=>(e[1]=ge(e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,n=>n.map(ge),arguments)},find(e,t){return Ge(this,"find",e,t,ge,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,ge,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return sr(this,"includes",e)},indexOf(...e){return sr(this,"indexOf",e)},join(e){return Dt(this).join(e)},lastIndexOf(...e){return sr(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return zt(this,"pop")},push(...e){return zt(this,"push",e)},reduce(e,...t){return us(this,"reduce",e,t)},reduceRight(e,...t){return us(this,"reduceRight",e,t)},shift(){return zt(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return zt(this,"splice",e)},toReversed(){return Dt(this).toReversed()},toSorted(e){return Dt(this).toSorted(e)},toSpliced(...e){return Dt(this).toSpliced(...e)},unshift(...e){return zt(this,"unshift",e)},values(){return rr(this,"values",ge)}};function rr(e,t,n){const r=zn(e),s=r[t]();return r!==e&&!Ne(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Ni=Array.prototype;function Ge(e,t,n,r,s,o){const i=zn(e),a=i!==e&&!Ne(e),l=i[t];if(l!==Ni[t]){const h=l.apply(e,o);return a?ge(h):h}let u=n;i!==e&&(a?u=function(h,p){return n.call(this,ge(h),p,e)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,e)}));const c=l.call(i,u,r);return a&&s?s(c):c}function us(e,t,n,r){const s=zn(e);let o=n;return s!==e&&(Ne(e)?n.length>3&&(o=function(i,a,l){return n.call(this,i,a,l,e)}):o=function(i,a,l){return n.call(this,i,ge(a),l,e)}),s[t](o,...r)}function sr(e,t,n){const r=U(e);be(r,"iterate",on);const s=r[t](...n);return(s===-1||s===!1)&&jr(n[0])?(n[0]=U(n[0]),r[t](...n)):s}function zt(e,t,n=[]){rt(),$r();const r=U(e)[t].apply(e,n);return Mr(),st(),r}const Bi=Pr("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt));function Oi(e){pt(e)||(e=String(e));const t=U(this);return be(t,"has",e),t.hasOwnProperty(e)}class mo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Gi:xo:o?ko:bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=E(t);if(!s){let l;if(i&&(l=Li[n]))return l;if(n==="hasOwnProperty")return Oi}const a=Reflect.get(t,n,xe(t)?t:r);return(pt(n)?go.has(n):Bi(n))||(s||be(t,"get",n),o)?a:xe(a)?i&&Rr(n)?a:a.value:ie(a)?s?wo(a):Or(a):a}}class yo extends mo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._isShallow){const l=ft(o);if(!Ne(r)&&!ft(r)&&(o=U(o),r=U(r)),!E(t)&&xe(o)&&!xe(r))return l?!1:(o.value=r,!0)}const i=E(t)&&Rr(n)?Number(n)<t.length:q(t,n),a=Reflect.set(t,n,r,xe(t)?t:s);return t===U(s)&&(i?ut(r,o)&&Je(t,"set",n,r):Je(t,"add",n,r)),a}deleteProperty(t,n){const r=q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Je(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!pt(n)||!go.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",E(t)?"length":St),Reflect.ownKeys(t)}}class Fi extends mo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ji=new yo,Wi=new Fi,Hi=new yo(!0);const yr=e=>e,mn=e=>Reflect.getPrototypeOf(e);function Ui(e,t,n){return function(...r){const s=this.__v_raw,o=U(s),i=Mt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=s[e](...r),c=n?yr:t?Dn:ge;return!t&&be(o,"iterate",l?mr:St),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[c(h[0]),c(h[1])]:c(h),done:p}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zi(e,t){const n={get(s){const o=this.__v_raw,i=U(o),a=U(s);e||(ut(s,a)&&be(i,"get",s),be(i,"get",a));const{has:l}=mn(i),u=t?yr:e?Dn:ge;if(l.call(i,s))return u(o.get(s));if(l.call(i,a))return u(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&be(U(s),"iterate",St),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,i=U(o),a=U(s);return e||(ut(s,a)&&be(i,"has",s),be(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=U(a),u=t?yr:e?Dn:ge;return!e&&be(l,"iterate",St),a.forEach((c,h)=>s.call(o,u(c),u(h),i))}};return me(n,e?{add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear")}:{add(s){!t&&!Ne(s)&&!ft(s)&&(s=U(s));const o=U(this);return mn(o).has.call(o,s)||(o.add(s),Je(o,"add",s,s)),this},set(s,o){!t&&!Ne(o)&&!ft(o)&&(o=U(o));const i=U(this),{has:a,get:l}=mn(i);let u=a.call(i,s);u||(s=U(s),u=a.call(i,s));const c=l.call(i,s);return i.set(s,o),u?ut(o,c)&&Je(i,"set",s,o):Je(i,"add",s,o),this},delete(s){const o=U(this),{has:i,get:a}=mn(o);let l=i.call(o,s);l||(s=U(s),l=i.call(o,s)),a&&a.call(o,s);const u=o.delete(s);return l&&Je(o,"delete",s,void 0),u},clear(){const s=U(this),o=s.size!==0,i=s.clear();return o&&Je(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ui(s,e,t)}),n}function Br(e,t){const n=zi(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,o)}const Xi={get:Br(!1,!1)},qi={get:Br(!1,!0)},Vi={get:Br(!0,!1)};const bo=new WeakMap,ko=new WeakMap,xo=new WeakMap,Gi=new WeakMap;function Yi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ki(e){return e.__v_skip||!Object.isExtensible(e)?0:Yi(wi(e))}function Or(e){return ft(e)?e:Fr(e,!1,ji,Xi,bo)}function Qi(e){return Fr(e,!1,Hi,qi,ko)}function wo(e){return Fr(e,!0,Wi,Vi,xo)}function Fr(e,t,n,r,s){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ki(e);if(o===0)return e;const i=s.get(e);if(i)return i;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Lt(e){return ft(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Ne(e){return!!(e&&e.__v_isShallow)}function jr(e){return e?!!e.__v_raw:!1}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ji(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&fr(e,"__v_skip",!0),e}const ge=e=>ie(e)?Or(e):e,Dn=e=>ie(e)?wo(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function pe(e){return Zi(e,!1)}function Zi(e,t){return xe(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new Nr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:U(t),this._value=n?t:ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ne(t)||ft(t);t=r?t:U(t),ut(t,n)&&(this._rawValue=t,this._value=r?t:ge(t),this.dep.trigger())}}function Nt(e){return xe(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:Nt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function vo(e){return Lt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Nr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return lo(this,!0),!0}get value(){const t=this.dep.track();return fo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ra(e,t,n=!1){let r,s;return L(e)?r=e:(r=e.get,s=e.set),new na(r,s,n)}const bn={},In=new WeakMap;let wt;function sa(e,t=!1,n=wt){if(n){let r=In.get(n);r||In.set(n,r=[]),r.push(e)}}function oa(e,t,n=Z){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,u=D=>s?D:Ne(D)||s===!1||s===0?Ze(D,1):Ze(D);let c,h,p,y,T=!1,_=!1;if(xe(e)?(h=()=>e.value,T=Ne(e)):Lt(e)?(h=()=>u(e),T=!0):E(e)?(_=!0,T=e.some(D=>Lt(D)||Ne(D)),h=()=>e.map(D=>{if(xe(D))return D.value;if(Lt(D))return u(D);if(L(D))return l?l(D,2):D()})):L(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){rt();try{p()}finally{st()}}const D=wt;wt=c;try{return l?l(e,3,[y]):e(y)}finally{wt=D}}:h=Ve,t&&s){const D=h,z=s===!0?1/0:s;h=()=>Ze(D(),z)}const re=Ei(),O=()=>{c.stop(),re&&re.active&&Ir(re.effects,c)};if(o&&t){const D=t;t=(...z)=>{D(...z),O()}}let j=_?new Array(e.length).fill(bn):bn;const H=D=>{if(!(!(c.flags&1)||!c.dirty&&!D))if(t){const z=c.run();if(s||T||(_?z.some((ae,ue)=>ut(ae,j[ue])):ut(z,j))){p&&p();const ae=wt;wt=c;try{const ue=[z,j===bn?void 0:_&&j[0]===bn?[]:j,y];j=z,l?l(t,3,ue):t(...ue)}finally{wt=ae}}}else c.run()};return a&&a(H),c=new io(h),c.scheduler=i?()=>i(H,!1):H,y=D=>sa(D,!1,c),p=c.onStop=()=>{const D=In.get(c);if(D){if(l)l(D,4);else for(const z of D)z();In.delete(c)}},t?r?H(!0):j=c.run():i?i(H.bind(null,!0),!0):c.run(),O.pause=c.pause.bind(c),O.resume=c.resume.bind(c),O.stop=O,O}function Ze(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,xe(e))Ze(e.value,t,n);else if(E(e))for(let r=0;r<e.length;r++)Ze(e[r],t,n);else if(Js(e)||Mt(e))e.forEach(r=>{Ze(r,t,n)});else if(to(e)){for(const r in e)Ze(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ze(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fn(e,t,n,r){try{return r?e(...r):e()}catch(s){Xn(s,t,n)}}function Fe(e,t,n,r){if(L(e)){const s=fn(e,t,n,r);return s&&Zs(s)&&s.catch(o=>{Xn(o,t,n)}),s}if(E(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Fe(e[o],t,n,r));return s}}function Xn(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Z;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,l,u)===!1)return}a=a.parent}if(o){rt(),fn(o,null,10,[e,l,u]),st();return}}ia(e,n,s,r,i)}function ia(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ve=[];let Xe=-1;const Bt=[];let at=null,Rt=0;const So=Promise.resolve();let Rn=null;function Ot(e){const t=Rn||So;return e?t.then(this?e.bind(this):e):t}function aa(e){let t=Xe+1,n=ve.length;for(;t<n;){const r=t+n>>>1,s=ve[r],o=an(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function Wr(e){if(!(e.flags&1)){const t=an(e),n=ve[ve.length-1];!n||!(e.flags&2)&&t>=an(n)?ve.push(e):ve.splice(aa(t),0,e),e.flags|=1,To()}}function To(){Rn||(Rn=So.then(Ao))}function la(e){E(e)?Bt.push(...e):at&&e.id===-1?at.splice(Rt+1,0,e):e.flags&1||(Bt.push(e),e.flags|=1),To()}function ds(e,t,n=Xe+1){for(;n<ve.length;n++){const r=ve[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Co(e){if(Bt.length){const t=[...new Set(Bt)].sort((n,r)=>an(n)-an(r));if(Bt.length=0,at){at.push(...t);return}for(at=t,Rt=0;Rt<at.length;Rt++){const n=at[Rt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}at=null,Rt=0}}const an=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ao(e){try{for(Xe=0;Xe<ve.length;Xe++){const t=ve[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<ve.length;Xe++){const t=ve[Xe];t&&(t.flags&=-2)}Xe=-1,ve.length=0,Co(),Rn=null,(ve.length||Bt.length)&&Ao()}}let Ee=null,_o=null;function En(e){const t=Ee;return Ee=e,_o=e&&e.type.__scopeId||null,t}function Jt(e,t=Ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ws(-1);const o=En(t);let i;try{i=e(...s)}finally{En(o),r._d&&ws(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function ca(e,t){if(Ee===null)return e;const n=Kn(Ee),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=Z]=t[s];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&Ze(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function yt(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(rt(),Fe(l,n,8,[e.el,a,e,t]),st())}}const ua=Symbol("_vte"),Po=e=>e.__isTeleport,lt=Symbol("_leaveCb"),kn=Symbol("_enterCb");function da(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hn(()=>{e.isMounted=!0}),Hr(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],Do={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},Io=e=>{const t=e.subTree;return t.component?Io(t.component):t},fa={name:"BaseTransition",props:Do,setup(e,{slots:t}){const n=il(),r=da();return()=>{const s=t.default&&$o(t.default(),!0);if(!s||!s.length)return;const o=Ro(s),i=U(e),{mode:a}=i;if(r.isLeaving)return or(o);const l=fs(o);if(!l)return or(o);let u=br(l,i,r,n,h=>u=h);l.type!==Se&&ln(l,u);let c=n.subTree&&fs(n.subTree);if(c&&c.type!==Se&&!vt(l,c)&&Io(n).type!==Se){let h=br(c,i,r,n);if(ln(c,h),a==="out-in"&&l.type!==Se)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,c=void 0},or(o);a==="in-out"&&l.type!==Se?h.delayLeave=(p,y,T)=>{const _=Eo(r,c);_[String(c.key)]=c,p[lt]=()=>{y(),p[lt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Ro(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Se){t=n;break}}return t}const ha=fa;function Eo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function br(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:p,onLeave:y,onAfterLeave:T,onLeaveCancelled:_,onBeforeAppear:re,onAppear:O,onAfterAppear:j,onAppearCancelled:H}=t,D=String(e.key),z=Eo(n,e),ae=(N,X)=>{N&&Fe(N,r,9,X)},ue=(N,X)=>{const se=X[1];ae(N,X),E(N)?N.every(P=>P.length<=1)&&se():N.length<=1&&se()},ye={mode:i,persisted:a,beforeEnter(N){let X=l;if(!n.isMounted)if(o)X=re||l;else return;N[lt]&&N[lt](!0);const se=z[D];se&&vt(e,se)&&se.el[lt]&&se.el[lt](),ae(X,[N])},enter(N){let X=u,se=c,P=h;if(!n.isMounted)if(o)X=O||u,se=j||c,P=H||h;else return;let ee=!1;const he=N[kn]=Me=>{ee||(ee=!0,Me?ae(P,[N]):ae(se,[N]),ye.delayedLeave&&ye.delayedLeave(),N[kn]=void 0)};X?ue(X,[N,he]):he()},leave(N,X){const se=String(e.key);if(N[kn]&&N[kn](!0),n.isUnmounting)return X();ae(p,[N]);let P=!1;const ee=N[lt]=he=>{P||(P=!0,X(),he?ae(_,[N]):ae(T,[N]),N[lt]=void 0,z[se]===e&&delete z[se])};z[se]=e,y?ue(y,[N,ee]):ee()},clone(N){const X=br(N,t,n,r,s);return s&&s(X),X}};return ye}function or(e){if(qn(e))return e=ht(e),e.children=null,e}function fs(e){if(!qn(e))return Po(e.type)&&e.children?Ro(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&L(n.default))return n.default()}}function ln(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ln(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $o(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===De?(i.patchFlag&128&&s++,r=r.concat($o(i.children,t,a))):(t||i.type!==Se)&&r.push(a!=null?ht(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Mo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Zt(e,t,n,r,s=!1){if(E(e)){e.forEach((T,_)=>Zt(T,t&&(E(t)?t[_]:t),n,r,s));return}if(en(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zt(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?Kn(r.component):r.el,i=s?null:o,{i:a,r:l}=e,u=t&&t.r,c=a.refs===Z?a.refs={}:a.refs,h=a.setupState,p=U(h),y=h===Z?()=>!1:T=>q(p,T);if(u!=null&&u!==l&&(de(u)?(c[u]=null,y(u)&&(h[u]=null)):xe(u)&&(u.value=null)),L(l))fn(l,a,12,[i,c]);else{const T=de(l),_=xe(l);if(T||_){const re=()=>{if(e.f){const O=T?y(l)?h[l]:c[l]:l.value;s?E(O)&&Ir(O,o):E(O)?O.includes(o)||O.push(o):T?(c[l]=[o],y(l)&&(h[l]=c[l])):(l.value=[o],e.k&&(c[e.k]=l.value))}else T?(c[l]=i,y(l)&&(h[l]=i)):_&&(l.value=i,e.k&&(c[e.k]=i))};i?(re.id=-1,Re(re,n)):re()}}}Un().requestIdleCallback;Un().cancelIdleCallback;const en=e=>!!e.type.__asyncLoader,qn=e=>e.type.__isKeepAlive;function pa(e,t){Lo(e,"a",t)}function ga(e,t){Lo(e,"da",t)}function Lo(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Vn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)qn(s.parent.vnode)&&ma(r,t,n,s),s=s.parent}}function ma(e,t,n,r){const s=Vn(t,e,r,!0);Ur(()=>{Ir(r[t],s)},n)}function Vn(e,t,n=ke,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{rt();const a=pn(n),l=Fe(t,n,e,i);return a(),st(),l});return r?s.unshift(o):s.push(o),o}}const ot=e=>(t,n=ke)=>{(!un||e==="sp")&&Vn(e,(...r)=>t(...r),n)},ya=ot("bm"),hn=ot("m"),No=ot("bu"),ba=ot("u"),Hr=ot("bum"),Ur=ot("um"),ka=ot("sp"),xa=ot("rtg"),wa=ot("rtc");function va(e,t=ke){Vn("ec",e,t)}const Sa=Symbol.for("v-ndc");function $n(e,t,n,r){let s;const o=n,i=E(e);if(i||de(e)){const a=i&&Lt(e);let l=!1,u=!1;a&&(l=!Ne(e),u=ft(e),e=zn(e)),s=new Array(e.length);for(let c=0,h=e.length;c<h;c++)s[c]=t(l?u?Dn(ge(e[c])):ge(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(ie(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=t(e[c],c,l,o)}}else s=[];return s}const kr=e=>e?ri(e)?Kn(e):kr(e.parent):null,tn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oo(e),$forceUpdate:e=>e.f||(e.f=()=>{Wr(e.update)}),$nextTick:e=>e.n||(e.n=Ot.bind(e.proxy)),$watch:e=>Xa.bind(e)}),ir=(e,t)=>e!==Z&&!e.__isScriptSetup&&q(e,t),Ta={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ir(r,t))return i[t]=1,r[t];if(s!==Z&&q(s,t))return i[t]=2,s[t];if((u=e.propsOptions[0])&&q(u,t))return i[t]=3,o[t];if(n!==Z&&q(n,t))return i[t]=4,n[t];xr&&(i[t]=0)}}const c=tn[t];let h,p;if(c)return t==="$attrs"&&be(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Z&&q(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return ir(s,t)?(s[t]=n,!0):r!==Z&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==Z&&q(e,i)||ir(t,i)||(a=o[0])&&q(a,i)||q(r,i)||q(tn,i)||q(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function hs(e){return E(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xr=!0;function Ca(e){const t=Oo(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&ps(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:p,beforeUpdate:y,updated:T,activated:_,deactivated:re,beforeDestroy:O,beforeUnmount:j,destroyed:H,unmounted:D,render:z,renderTracked:ae,renderTriggered:ue,errorCaptured:ye,serverPrefetch:N,expose:X,inheritAttrs:se,components:P,directives:ee,filters:he}=t;if(u&&Aa(u,r,null),i)for(const oe in i){const Q=i[oe];L(Q)&&(r[oe]=Q.bind(n))}if(s){const oe=s.call(n,n);ie(oe)&&(e.data=Or(oe))}if(xr=!0,o)for(const oe in o){const Q=o[oe],$=L(Q)?Q.bind(n,n):L(Q.get)?Q.get.bind(n,n):Ve,B=!L(Q)&&L(Q.set)?Q.set.bind(n):Ve,W=Ke({get:$,set:B});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>W.value,set:Y=>W.value=Y})}if(a)for(const oe in a)Bo(a[oe],r,n,oe);if(l){const oe=L(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(Q=>{Ea(Q,oe[Q])})}c&&ps(c,e,"c");function fe(oe,Q){E(Q)?Q.forEach($=>oe($.bind(n))):Q&&oe(Q.bind(n))}if(fe(ya,h),fe(hn,p),fe(No,y),fe(ba,T),fe(pa,_),fe(ga,re),fe(va,ye),fe(wa,ae),fe(xa,ue),fe(Hr,j),fe(Ur,D),fe(ka,N),E(X))if(X.length){const oe=e.exposed||(e.exposed={});X.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>n[Q],set:$=>n[Q]=$})})}else e.exposed||(e.exposed={});z&&e.render===Ve&&(e.render=z),se!=null&&(e.inheritAttrs=se),P&&(e.components=P),ee&&(e.directives=ee),N&&Mo(e)}function Aa(e,t,n=Ve){E(e)&&(e=wr(e));for(const r in e){const s=e[r];let o;ie(s)?"default"in s?o=vn(s.from||r,s.default,!0):o=vn(s.from||r):o=vn(s),xe(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function ps(e,t,n){Fe(E(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bo(e,t,n,r){let s=r.includes(".")?Qo(n,r):()=>n[r];if(de(e)){const o=t[e];L(o)&&jt(s,o)}else if(L(e))jt(s,e.bind(n));else if(ie(e))if(E(e))e.forEach(o=>Bo(o,t,n,r));else{const o=L(e.handler)?e.handler.bind(n):t[e.handler];L(o)&&jt(s,o,e)}}function Oo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>Mn(l,u,i,!0)),Mn(l,t,i)),ie(t)&&o.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Mn(e,o,n,!0),s&&s.forEach(i=>Mn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=_a[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const _a={data:gs,props:ms,emits:ms,methods:Gt,computed:Gt,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Gt,directives:Gt,watch:Da,provide:gs,inject:Pa};function gs(e,t){return t?e?function(){return me(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Pa(e,t){return Gt(wr(e),wr(t))}function wr(e){if(E(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Gt(e,t){return e?me(Object.create(null),e,t):t}function ms(e,t){return e?E(e)&&E(t)?[...new Set([...e,...t])]:me(Object.create(null),hs(e),hs(t??{})):t}function Da(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function Fo(){return{app:null,config:{isNativeTag:ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ia=0;function Ra(e,t){return function(r,s=null){L(r)||(r=me({},r)),s!=null&&!ie(s)&&(s=null);const o=Fo(),i=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Ia++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:hl,get config(){return o.config},set config(c){},use(c,...h){return i.has(c)||(c&&L(c.install)?(i.add(c),c.install(u,...h)):L(c)&&(i.add(c),c(u,...h))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,h){return h?(o.components[c]=h,u):o.components[c]},directive(c,h){return h?(o.directives[c]=h,u):o.directives[c]},mount(c,h,p){if(!l){const y=u._ceVNode||le(r,s);return y.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(y,c,p),l=!0,u._container=c,c.__vue_app__=u,Kn(y.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Fe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,h){return o.provides[c]=h,u},runWithContext(c){const h=Ft;Ft=u;try{return c()}finally{Ft=h}}};return u}}let Ft=null;function Ea(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function vn(e,t,n=!1){const r=ke||Ee;if(r||Ft){let s=Ft?Ft._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}const jo={},Wo=()=>Object.create(jo),Ho=e=>Object.getPrototypeOf(e)===jo;function $a(e,t,n,r=!1){const s={},o=Wo();e.propsDefaults=Object.create(null),Uo(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Qi(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ma(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=U(s),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let p=c[h];if(Gn(e.emitsOptions,p))continue;const y=t[p];if(l)if(q(o,p))y!==o[p]&&(o[p]=y,u=!0);else{const T=dt(p);s[T]=vr(l,a,T,y,e,!1)}else y!==o[p]&&(o[p]=y,u=!0)}}}else{Uo(e,t,s,o)&&(u=!0);let c;for(const h in a)(!t||!q(t,h)&&((c=At(h))===h||!q(t,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(s[h]=vr(l,a,h,void 0,e,!0)):delete s[h]);if(o!==a)for(const h in o)(!t||!q(t,h))&&(delete o[h],u=!0)}u&&Je(e.attrs,"set","")}function Uo(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Yt(l))continue;const u=t[l];let c;s&&q(s,c=dt(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Gn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(o){const l=U(n),u=a||Z;for(let c=0;c<o.length;c++){const h=o[c];n[h]=vr(s,l,h,u[h],e,!q(u,h))}}return i}function vr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=q(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&L(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=pn(s);r=u[n]=l.call(null,t),c()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===At(n))&&(r=!0))}return r}const La=new WeakMap;function zo(e,t,n=!1){const r=n?La:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!L(e)){const c=h=>{l=!0;const[p,y]=zo(h,t,!0);me(i,p),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return ie(e)&&r.set(e,$t),$t;if(E(o))for(let c=0;c<o.length;c++){const h=dt(o[c]);ys(h)&&(i[h]=Z)}else if(o)for(const c in o){const h=dt(c);if(ys(h)){const p=o[c],y=i[h]=E(p)||L(p)?{type:p}:me({},p),T=y.type;let _=!1,re=!0;if(E(T))for(let O=0;O<T.length;++O){const j=T[O],H=L(j)&&j.name;if(H==="Boolean"){_=!0;break}else H==="String"&&(re=!1)}else _=L(T)&&T.name==="Boolean";y[0]=_,y[1]=re,(_||q(y,"default"))&&a.push(h)}}const u=[i,a];return ie(e)&&r.set(e,u),u}function ys(e){return e[0]!=="$"&&!Yt(e)}const zr=e=>e[0]==="_"||e==="$stable",Xr=e=>E(e)?e.map(qe):[qe(e)],Na=(e,t,n)=>{if(t._n)return t;const r=Jt((...s)=>Xr(t(...s)),n);return r._c=!1,r},Xo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(zr(s))continue;const o=e[s];if(L(o))t[s]=Na(s,o,r);else if(o!=null){const i=Xr(o);t[s]=()=>i}}},qo=(e,t)=>{const n=Xr(t);e.slots.default=()=>n},Vo=(e,t,n)=>{for(const r in t)(n||!zr(r))&&(e[r]=t[r])},Ba=(e,t,n)=>{const r=e.slots=Wo();if(e.vnode.shapeFlag&32){const s=t.__;s&&fr(r,"__",s,!0);const o=t._;o?(Vo(r,t,n),n&&fr(r,"_",o,!0)):Xo(t,r)}else t&&qo(e,t)},Oa=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=Z;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Vo(s,t,n):(o=!t.$stable,Xo(t,s)),i=t}else t&&(qo(e,t),i={default:1});if(o)for(const a in s)!zr(a)&&i[a]==null&&delete s[a]},Re=Ja;function Fa(e){return ja(e)}function ja(e,t){const n=Un();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:p,setScopeId:y=Ve,insertStaticContent:T}=e,_=(d,f,g,k=null,m=null,b=null,S=void 0,v=null,w=!!f.dynamicChildren)=>{if(d===f)return;d&&!vt(d,f)&&(k=Pt(d),Y(d,m,b,!0),d=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:x,ref:R,shapeFlag:C}=f;switch(x){case Yn:re(d,f,g,k);break;case Se:O(d,f,g,k);break;case Sn:d==null&&j(f,g,k,S);break;case De:P(d,f,g,k,m,b,S,v,w);break;default:C&1?z(d,f,g,k,m,b,S,v,w):C&6?ee(d,f,g,k,m,b,S,v,w):(C&64||C&128)&&x.process(d,f,g,k,m,b,S,v,w,Ht)}R!=null&&m?Zt(R,d&&d.ref,b,f||d,!f):R==null&&d&&d.ref!=null&&Zt(d.ref,null,b,d,!0)},re=(d,f,g,k)=>{if(d==null)r(f.el=a(f.children),g,k);else{const m=f.el=d.el;f.children!==d.children&&u(m,f.children)}},O=(d,f,g,k)=>{d==null?r(f.el=l(f.children||""),g,k):f.el=d.el},j=(d,f,g,k)=>{[d.el,d.anchor]=T(d.children,f,g,k,d.el,d.anchor)},H=({el:d,anchor:f},g,k)=>{let m;for(;d&&d!==f;)m=p(d),r(d,g,k),d=m;r(f,g,k)},D=({el:d,anchor:f})=>{let g;for(;d&&d!==f;)g=p(d),s(d),d=g;s(f)},z=(d,f,g,k,m,b,S,v,w)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),d==null?ae(f,g,k,m,b,S,v,w):N(d,f,m,b,S,v,w)},ae=(d,f,g,k,m,b,S,v)=>{let w,x;const{props:R,shapeFlag:C,transition:I,dirs:M}=d;if(w=d.el=i(d.type,b,R&&R.is,R),C&8?c(w,d.children):C&16&&ye(d.children,w,null,k,m,ar(d,b),S,v),M&&yt(d,null,k,"created"),ue(w,d,d.scopeId,S,k),R){for(const te in R)te!=="value"&&!Yt(te)&&o(w,te,null,R[te],b,k);"value"in R&&o(w,"value",null,R.value,b),(x=R.onVnodeBeforeMount)&&Ue(x,k,d)}M&&yt(d,null,k,"beforeMount");const F=Wa(m,I);F&&I.beforeEnter(w),r(w,f,g),((x=R&&R.onVnodeMounted)||F||M)&&Re(()=>{x&&Ue(x,k,d),F&&I.enter(w),M&&yt(d,null,k,"mounted")},m)},ue=(d,f,g,k,m)=>{if(g&&y(d,g),k)for(let b=0;b<k.length;b++)y(d,k[b]);if(m){let b=m.subTree;if(f===b||Zo(b.type)&&(b.ssContent===f||b.ssFallback===f)){const S=m.vnode;ue(d,S,S.scopeId,S.slotScopeIds,m.parent)}}},ye=(d,f,g,k,m,b,S,v,w=0)=>{for(let x=w;x<d.length;x++){const R=d[x]=v?ct(d[x]):qe(d[x]);_(null,R,f,g,k,m,b,S,v)}},N=(d,f,g,k,m,b,S)=>{const v=f.el=d.el;let{patchFlag:w,dynamicChildren:x,dirs:R}=f;w|=d.patchFlag&16;const C=d.props||Z,I=f.props||Z;let M;if(g&&bt(g,!1),(M=I.onVnodeBeforeUpdate)&&Ue(M,g,f,d),R&&yt(f,d,g,"beforeUpdate"),g&&bt(g,!0),(C.innerHTML&&I.innerHTML==null||C.textContent&&I.textContent==null)&&c(v,""),x?X(d.dynamicChildren,x,v,g,k,ar(f,m),b):S||Q(d,f,v,null,g,k,ar(f,m),b,!1),w>0){if(w&16)se(v,C,I,g,m);else if(w&2&&C.class!==I.class&&o(v,"class",null,I.class,m),w&4&&o(v,"style",C.style,I.style,m),w&8){const F=f.dynamicProps;for(let te=0;te<F.length;te++){const K=F[te],Ae=C[K],_e=I[K];(_e!==Ae||K==="value")&&o(v,K,Ae,_e,m,g)}}w&1&&d.children!==f.children&&c(v,f.children)}else!S&&x==null&&se(v,C,I,g,m);((M=I.onVnodeUpdated)||R)&&Re(()=>{M&&Ue(M,g,f,d),R&&yt(f,d,g,"updated")},k)},X=(d,f,g,k,m,b,S)=>{for(let v=0;v<f.length;v++){const w=d[v],x=f[v],R=w.el&&(w.type===De||!vt(w,x)||w.shapeFlag&198)?h(w.el):g;_(w,x,R,null,k,m,b,S,!0)}},se=(d,f,g,k,m)=>{if(f!==g){if(f!==Z)for(const b in f)!Yt(b)&&!(b in g)&&o(d,b,f[b],null,m,k);for(const b in g){if(Yt(b))continue;const S=g[b],v=f[b];S!==v&&b!=="value"&&o(d,b,v,S,m,k)}"value"in g&&o(d,"value",f.value,g.value,m)}},P=(d,f,g,k,m,b,S,v,w)=>{const x=f.el=d?d.el:a(""),R=f.anchor=d?d.anchor:a("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:M}=f;M&&(v=v?v.concat(M):M),d==null?(r(x,g,k),r(R,g,k),ye(f.children||[],g,R,m,b,S,v,w)):C>0&&C&64&&I&&d.dynamicChildren?(X(d.dynamicChildren,I,g,m,b,S,v),(f.key!=null||m&&f===m.subTree)&&Go(d,f,!0)):Q(d,f,g,R,m,b,S,v,w)},ee=(d,f,g,k,m,b,S,v,w)=>{f.slotScopeIds=v,d==null?f.shapeFlag&512?m.ctx.activate(f,g,k,S,w):he(f,g,k,m,b,S,w):Me(d,f,w)},he=(d,f,g,k,m,b,S)=>{const v=d.component=ol(d,k,m);if(qn(d)&&(v.ctx.renderer=Ht),al(v,!1,S),v.asyncDep){if(m&&m.registerDep(v,fe,S),!d.el){const w=v.subTree=le(Se);O(null,w,f,g)}}else fe(v,d,f,g,m,b,S)},Me=(d,f,g)=>{const k=f.component=d.component;if(Ka(d,f,g))if(k.asyncDep&&!k.asyncResolved){oe(k,f,g);return}else k.next=f,k.update();else f.el=d.el,k.vnode=f},fe=(d,f,g,k,m,b,S)=>{const v=()=>{if(d.isMounted){let{next:C,bu:I,u:M,parent:F,vnode:te}=d;{const We=Yo(d);if(We){C&&(C.el=te.el,oe(d,C,S)),We.asyncDep.then(()=>{d.isUnmounted||v()});return}}let K=C,Ae;bt(d,!1),C?(C.el=te.el,oe(d,C,S)):C=te,I&&wn(I),(Ae=C.props&&C.props.onVnodeBeforeUpdate)&&Ue(Ae,F,C,te),bt(d,!0);const _e=ks(d),je=d.subTree;d.subTree=_e,_(je,_e,h(je.el),Pt(je),d,m,b),C.el=_e.el,K===null&&Qa(d,_e.el),M&&Re(M,m),(Ae=C.props&&C.props.onVnodeUpdated)&&Re(()=>Ue(Ae,F,C,te),m)}else{let C;const{el:I,props:M}=f,{bm:F,m:te,parent:K,root:Ae,type:_e}=d,je=en(f);bt(d,!1),F&&wn(F),!je&&(C=M&&M.onVnodeBeforeMount)&&Ue(C,K,f),bt(d,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(_e);const We=d.subTree=ks(d);_(null,We,g,k,d,m,b),f.el=We.el}if(te&&Re(te,m),!je&&(C=M&&M.onVnodeMounted)){const We=f;Re(()=>Ue(C,K,We),m)}(f.shapeFlag&256||K&&en(K.vnode)&&K.vnode.shapeFlag&256)&&d.a&&Re(d.a,m),d.isMounted=!0,f=g=k=null}};d.scope.on();const w=d.effect=new io(v);d.scope.off();const x=d.update=w.run.bind(w),R=d.job=w.runIfDirty.bind(w);R.i=d,R.id=d.uid,w.scheduler=()=>Wr(R),bt(d,!0),x()},oe=(d,f,g)=>{f.component=d;const k=d.vnode.props;d.vnode=f,d.next=null,Ma(d,f.props,k,g),Oa(d,f.children,g),rt(),ds(d),st()},Q=(d,f,g,k,m,b,S,v,w=!1)=>{const x=d&&d.children,R=d?d.shapeFlag:0,C=f.children,{patchFlag:I,shapeFlag:M}=f;if(I>0){if(I&128){B(x,C,g,k,m,b,S,v,w);return}else if(I&256){$(x,C,g,k,m,b,S,v,w);return}}M&8?(R&16&&mt(x,m,b),C!==x&&c(g,C)):R&16?M&16?B(x,C,g,k,m,b,S,v,w):mt(x,m,b,!0):(R&8&&c(g,""),M&16&&ye(C,g,k,m,b,S,v,w))},$=(d,f,g,k,m,b,S,v,w)=>{d=d||$t,f=f||$t;const x=d.length,R=f.length,C=Math.min(x,R);let I;for(I=0;I<C;I++){const M=f[I]=w?ct(f[I]):qe(f[I]);_(d[I],M,g,null,m,b,S,v,w)}x>R?mt(d,m,b,!0,!1,C):ye(f,g,k,m,b,S,v,w,C)},B=(d,f,g,k,m,b,S,v,w)=>{let x=0;const R=f.length;let C=d.length-1,I=R-1;for(;x<=C&&x<=I;){const M=d[x],F=f[x]=w?ct(f[x]):qe(f[x]);if(vt(M,F))_(M,F,g,null,m,b,S,v,w);else break;x++}for(;x<=C&&x<=I;){const M=d[C],F=f[I]=w?ct(f[I]):qe(f[I]);if(vt(M,F))_(M,F,g,null,m,b,S,v,w);else break;C--,I--}if(x>C){if(x<=I){const M=I+1,F=M<R?f[M].el:k;for(;x<=I;)_(null,f[x]=w?ct(f[x]):qe(f[x]),g,F,m,b,S,v,w),x++}}else if(x>I)for(;x<=C;)Y(d[x],m,b,!0),x++;else{const M=x,F=x,te=new Map;for(x=F;x<=I;x++){const Ie=f[x]=w?ct(f[x]):qe(f[x]);Ie.key!=null&&te.set(Ie.key,x)}let K,Ae=0;const _e=I-F+1;let je=!1,We=0;const Ut=new Array(_e);for(x=0;x<_e;x++)Ut[x]=0;for(x=M;x<=C;x++){const Ie=d[x];if(Ae>=_e){Y(Ie,m,b,!0);continue}let He;if(Ie.key!=null)He=te.get(Ie.key);else for(K=F;K<=I;K++)if(Ut[K-F]===0&&vt(Ie,f[K])){He=K;break}He===void 0?Y(Ie,m,b,!0):(Ut[He-F]=x+1,He>=We?We=He:je=!0,_(Ie,f[He],g,null,m,b,S,v,w),Ae++)}const is=je?Ha(Ut):$t;for(K=is.length-1,x=_e-1;x>=0;x--){const Ie=F+x,He=f[Ie],as=Ie+1<R?f[Ie+1].el:k;Ut[x]===0?_(null,He,g,as,m,b,S,v,w):je&&(K<0||x!==is[K]?W(He,g,as,2):K--)}}},W=(d,f,g,k,m=null)=>{const{el:b,type:S,transition:v,children:w,shapeFlag:x}=d;if(x&6){W(d.component.subTree,f,g,k);return}if(x&128){d.suspense.move(f,g,k);return}if(x&64){S.move(d,f,g,Ht);return}if(S===De){r(b,f,g);for(let C=0;C<w.length;C++)W(w[C],f,g,k);r(d.anchor,f,g);return}if(S===Sn){H(d,f,g);return}if(k!==2&&x&1&&v)if(k===0)v.beforeEnter(b),r(b,f,g),Re(()=>v.enter(b),m);else{const{leave:C,delayLeave:I,afterLeave:M}=v,F=()=>{d.ctx.isUnmounted?s(b):r(b,f,g)},te=()=>{C(b,()=>{F(),M&&M()})};I?I(b,F,te):te()}else r(b,f,g)},Y=(d,f,g,k=!1,m=!1)=>{const{type:b,props:S,ref:v,children:w,dynamicChildren:x,shapeFlag:R,patchFlag:C,dirs:I,cacheIndex:M}=d;if(C===-2&&(m=!1),v!=null&&(rt(),Zt(v,null,g,d,!0),st()),M!=null&&(f.renderCache[M]=void 0),R&256){f.ctx.deactivate(d);return}const F=R&1&&I,te=!en(d);let K;if(te&&(K=S&&S.onVnodeBeforeUnmount)&&Ue(K,f,d),R&6)gt(d.component,g,k);else{if(R&128){d.suspense.unmount(g,k);return}F&&yt(d,null,f,"beforeUnmount"),R&64?d.type.remove(d,f,g,Ht,k):x&&!x.hasOnce&&(b!==De||C>0&&C&64)?mt(x,f,g,!1,!0):(b===De&&C&384||!m&&R&16)&&mt(w,f,g),k&&Ce(d)}(te&&(K=S&&S.onVnodeUnmounted)||F)&&Re(()=>{K&&Ue(K,f,d),F&&yt(d,null,f,"unmounted")},g)},Ce=d=>{const{type:f,el:g,anchor:k,transition:m}=d;if(f===De){Wt(g,k);return}if(f===Sn){D(d);return}const b=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:v}=m,w=()=>S(g,b);v?v(d.el,b,w):w()}else b()},Wt=(d,f)=>{let g;for(;d!==f;)g=p(d),s(d),d=g;s(f)},gt=(d,f,g)=>{const{bum:k,scope:m,job:b,subTree:S,um:v,m:w,a:x,parent:R,slots:{__:C}}=d;bs(w),bs(x),k&&wn(k),R&&E(C)&&C.forEach(I=>{R.renderCache[I]=void 0}),m.stop(),b&&(b.flags|=8,Y(S,d,f,g)),v&&Re(v,f),Re(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},mt=(d,f,g,k=!1,m=!1,b=0)=>{for(let S=b;S<d.length;S++)Y(d[S],f,g,k,m)},Pt=d=>{if(d.shapeFlag&6)return Pt(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const f=p(d.anchor||d.el),g=f&&f[ua];return g?p(g):f};let Zn=!1;const os=(d,f,g)=>{d==null?f._vnode&&Y(f._vnode,null,null,!0):_(f._vnode||null,d,f,null,null,null,g),f._vnode=d,Zn||(Zn=!0,ds(),Co(),Zn=!1)},Ht={p:_,um:Y,m:W,r:Ce,mt:he,mc:ye,pc:Q,pbc:X,n:Pt,o:e};return{render:os,hydrate:void 0,createApp:Ra(os)}}function ar({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Go(e,t,n=!1){const r=e.children,s=t.children;if(E(r)&&E(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ct(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&Go(i,a)),a.type===Yn&&(a.el=i.el),a.type===Se&&!a.el&&(a.el=i.el)}}function Ha(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Yo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yo(t)}function bs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ua=Symbol.for("v-scx"),za=()=>vn(Ua);function jt(e,t,n){return Ko(e,t,n)}function Ko(e,t,n=Z){const{immediate:r,deep:s,flush:o,once:i}=n,a=me({},n),l=t&&r||!t&&o!=="post";let u;if(un){if(o==="sync"){const y=za();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=Ve,y.resume=Ve,y.pause=Ve,y}}const c=ke;a.call=(y,T,_)=>Fe(y,c,T,_);let h=!1;o==="post"?a.scheduler=y=>{Re(y,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(y,T)=>{T?y():Wr(y)}),a.augmentJob=y=>{t&&(y.flags|=4),h&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const p=oa(e,t,a);return un&&(u?u.push(p):l&&p()),p}function Xa(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?Qo(r,e):()=>r[e]:e.bind(r,r);let o;L(t)?o=t:(o=t.handler,n=t);const i=pn(this),a=Ko(s,o.bind(r),n);return i(),a}function Qo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${dt(t)}Modifiers`]||e[`${At(t)}Modifiers`];function Va(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let s=n;const o=t.startsWith("update:"),i=o&&qa(r,t.slice(7));i&&(i.trim&&(s=n.map(c=>de(c)?c.trim():c)),i.number&&(s=n.map(hr)));let a,l=r[a=er(t)]||r[a=er(dt(t))];!l&&o&&(l=r[a=er(At(t))]),l&&Fe(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Fe(u,e,6,s)}}function Jo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!L(e)){const l=u=>{const c=Jo(u,t,!0);c&&(a=!0,me(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ie(e)&&r.set(e,null),null):(E(o)?o.forEach(l=>i[l]=null):me(i,o),ie(e)&&r.set(e,i),i)}function Gn(e,t){return!e||!jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,At(t))||q(e,t))}function ks(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:h,data:p,setupState:y,ctx:T,inheritAttrs:_}=e,re=En(e);let O,j;try{if(n.shapeFlag&4){const D=s||r,z=D;O=qe(u.call(z,D,c,h,y,p,T)),j=a}else{const D=t;O=qe(D.length>1?D(h,{attrs:a,slots:i,emit:l}):D(h,null)),j=t.props?a:Ga(a)}}catch(D){nn.length=0,Xn(D,e,1),O=le(Se)}let H=O;if(j&&_!==!1){const D=Object.keys(j),{shapeFlag:z}=H;D.length&&z&7&&(o&&D.some(Dr)&&(j=Ya(j,o)),H=ht(H,j,!1,!0))}return n.dirs&&(H=ht(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ln(H,n.transition),O=H,En(re),O}const Ga=e=>{let t;for(const n in e)(n==="class"||n==="style"||jn(n))&&((t||(t={}))[n]=e[n]);return t},Ya=(e,t)=>{const n={};for(const r in e)(!Dr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ka(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xs(r,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const p=c[h];if(i[p]!==r[p]&&!Gn(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?xs(r,i,u):!0:!!i;return!1}function xs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Gn(n,o))return!0}return!1}function Qa({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Zo=e=>e.__isSuspense;function Ja(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):la(e)}const De=Symbol.for("v-fgt"),Yn=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Sn=Symbol.for("v-stc"),nn=[];let $e=null;function J(e=!1){nn.push($e=e?null:[])}function Za(){nn.pop(),$e=nn[nn.length-1]||null}let cn=1;function ws(e,t=!1){cn+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function ei(e){return e.dynamicChildren=cn>0?$e||$t:null,Za(),cn>0&&$e&&$e.push(e),e}function ce(e,t,n,r,s,o){return ei(A(e,t,n,r,s,o,!0))}function Tn(e,t,n,r,s){return ei(le(e,t,n,r,s,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const ti=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||xe(e)||L(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function A(e,t=null,n=null,r=0,s=null,o=e===De?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ti(t),ref:t&&Cn(t),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(qr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),cn>0&&!i&&$e&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&$e.push(l),l}const le=el;function el(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Sa)&&(e=Se),Ln(e)){const a=ht(e,t,!0);return n&&qr(a,n),cn>0&&!o&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(dl(e)&&(e=e.__vccOpts),t){t=tl(t);let{class:a,style:l}=t;a&&!de(a)&&(t.class=Tt(a)),ie(l)&&(jr(l)&&!E(l)&&(l=me({},l)),t.style=Er(l))}const i=de(e)?1:Zo(e)?128:Po(e)?64:ie(e)?4:L(e)?2:0;return A(e,t,n,r,s,i,o,!0)}function tl(e){return e?jr(e)||Ho(e)?me({},e):e:null}function ht(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,u=t?nl(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ti(u),ref:t&&t.ref?n&&o?E(o)?o.concat(Cn(t)):[o,Cn(t)]:Cn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&ln(c,l.clone(c)),c}function ni(e=" ",t=0){return le(Yn,null,e,t)}function vs(e,t){const n=le(Sn,null,e);return n.staticCount=t,n}function et(e="",t=!1){return t?(J(),Tn(Se,null,e)):le(Se,null,e)}function qe(e){return e==null||typeof e=="boolean"?le(Se):E(e)?le(De,null,e.slice()):Ln(e)?ct(e):le(Yn,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function qr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(E(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),qr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ho(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[ni(t)]):n=8);e.children=t,e.shapeFlag|=n}function nl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Tt([t.class,r.class]));else if(s==="style")t.style=Er([t.style,r.style]);else if(jn(s)){const o=t[s],i=r[s];i&&o!==i&&!(E(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ue(e,t,n,r=null){Fe(e,t,7,[n,r])}const rl=Fo();let sl=0;function ol(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||rl,o={uid:sl++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ri(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(r,s),emitsOptions:Jo(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Va.bind(null,o),e.ce&&e.ce(o),o}let ke=null;const il=()=>ke||Ee;let Nn,Sr;{const e=Un(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Nn=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Sr=t("__VUE_SSR_SETTERS__",n=>un=n)}const pn=e=>{const t=ke;return Nn(e),e.scope.on(),()=>{e.scope.off(),Nn(t)}},Ss=()=>{ke&&ke.scope.off(),Nn(null)};function ri(e){return e.vnode.shapeFlag&4}let un=!1;function al(e,t=!1,n=!1){t&&Sr(t);const{props:r,children:s}=e.vnode,o=ri(e);$a(e,r,o,t),Ba(e,s,n||t);const i=o?ll(e,t):void 0;return t&&Sr(!1),i}function ll(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ta);const{setup:r}=n;if(r){rt();const s=e.setupContext=r.length>1?ul(e):null,o=pn(e),i=fn(r,e,0,[e.props,s]),a=Zs(i);if(st(),o(),(a||e.sp)&&!en(e)&&Mo(e),a){if(i.then(Ss,Ss),t)return i.then(l=>{Ts(e,l)}).catch(l=>{Xn(l,e,0)});e.asyncDep=i}else Ts(e,i)}else si(e)}function Ts(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=vo(t)),si(e)}function si(e,t,n){const r=e.type;e.render||(e.render=r.render||Ve);{const s=pn(e);rt();try{Ca(e)}finally{st(),s()}}}const cl={get(e,t){return be(e,"get",""),e[t]}};function ul(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cl),slots:e.slots,emit:e.emit,expose:t}}function Kn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vo(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}})):e.proxy}function dl(e){return L(e)&&"__vccOpts"in e}const Ke=(e,t)=>ra(e,t,un);function fl(e,t,n){const r=arguments.length;return r===2?ie(t)&&!E(t)?Ln(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ln(n)&&(n=[n]),le(e,t,n))}const hl="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tr;const Cs=typeof window<"u"&&window.trustedTypes;if(Cs)try{Tr=Cs.createPolicy("vue",{createHTML:e=>e})}catch{}const oi=Tr?e=>Tr.createHTML(e):e=>e,pl="http://www.w3.org/2000/svg",gl="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,As=Qe&&Qe.createElement("template"),ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Qe.createElementNS(pl,e):t==="mathml"?Qe.createElementNS(gl,e):n?Qe.createElement(e,{is:n}):Qe.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{As.innerHTML=oi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=As.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},it="transition",Xt="animation",dn=Symbol("_vtc"),ii={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yl=me({},Do,ii),bl=e=>(e.displayName="Transition",e.props=yl,e),An=bl((e,{slots:t})=>fl(ha,kl(e),t)),kt=(e,t=[])=>{E(e)?e.forEach(n=>n(...t)):e&&e(...t)},_s=e=>e?E(e)?e.some(t=>t.length>1):e.length>1:!1;function kl(e){const t={};for(const P in e)P in ii||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,T=xl(s),_=T&&T[0],re=T&&T[1],{onBeforeEnter:O,onEnter:j,onEnterCancelled:H,onLeave:D,onLeaveCancelled:z,onBeforeAppear:ae=O,onAppear:ue=j,onAppearCancelled:ye=H}=t,N=(P,ee,he,Me)=>{P._enterCancelled=Me,xt(P,ee?c:a),xt(P,ee?u:i),he&&he()},X=(P,ee)=>{P._isLeaving=!1,xt(P,h),xt(P,y),xt(P,p),ee&&ee()},se=P=>(ee,he)=>{const Me=P?ue:j,fe=()=>N(ee,P,he);kt(Me,[ee,fe]),Ps(()=>{xt(ee,P?l:o),Ye(ee,P?c:a),_s(Me)||Ds(ee,r,_,fe)})};return me(t,{onBeforeEnter(P){kt(O,[P]),Ye(P,o),Ye(P,i)},onBeforeAppear(P){kt(ae,[P]),Ye(P,l),Ye(P,u)},onEnter:se(!1),onAppear:se(!0),onLeave(P,ee){P._isLeaving=!0;const he=()=>X(P,ee);Ye(P,h),P._enterCancelled?(Ye(P,p),Es()):(Es(),Ye(P,p)),Ps(()=>{P._isLeaving&&(xt(P,h),Ye(P,y),_s(D)||Ds(P,r,re,he))}),kt(D,[P,he])},onEnterCancelled(P){N(P,!1,void 0,!0),kt(H,[P])},onAppearCancelled(P){N(P,!0,void 0,!0),kt(ye,[P])},onLeaveCancelled(P){X(P),kt(z,[P])}})}function xl(e){if(e==null)return null;if(ie(e))return[lr(e.enter),lr(e.leave)];{const t=lr(e);return[t,t]}}function lr(e){return Ti(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[dn]||(e[dn]=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[dn];n&&(n.delete(t),n.size||(e[dn]=void 0))}function Ps(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wl=0;function Ds(e,t,n,r){const s=e._endId=++wl,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=vl(e,t);if(!i)return r();const u=i+"end";let c=0;const h=()=>{e.removeEventListener(u,p),o()},p=y=>{y.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(u,p)}function vl(e,t){const n=window.getComputedStyle(e),r=T=>(n[T]||"").split(", "),s=r(`${it}Delay`),o=r(`${it}Duration`),i=Is(s,o),a=r(`${Xt}Delay`),l=r(`${Xt}Duration`),u=Is(a,l);let c=null,h=0,p=0;t===it?i>0&&(c=it,h=i,p=o.length):t===Xt?u>0&&(c=Xt,h=u,p=l.length):(h=Math.max(i,u),c=h>0?i>u?it:Xt:null,p=c?c===it?o.length:l.length:0);const y=c===it&&/\b(transform|all)(,|$)/.test(r(`${it}Property`).toString());return{type:c,timeout:h,propCount:p,hasTransform:y}}function Is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Rs(n)+Rs(e[r])))}function Rs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Es(){return document.body.offsetHeight}function Sl(e,t,n){const r=e[dn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $s=Symbol("_vod"),Tl=Symbol("_vsh"),Cl=Symbol(""),Al=/(^|;)\s*display\s*:/;function _l(e,t,n){const r=e.style,s=de(n);let o=!1;if(n&&!s){if(t)if(de(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&_n(r,a,"")}else for(const i in t)n[i]==null&&_n(r,i,"");for(const i in n)i==="display"&&(o=!0),_n(r,i,n[i])}else if(s){if(t!==n){const i=r[Cl];i&&(n+=";"+i),r.cssText=n,o=Al.test(n)}}else t&&e.removeAttribute("style");$s in e&&(e[$s]=o?r.display:"",e[Tl]&&(r.display="none"))}const Ms=/\s*!important$/;function _n(e,t,n){if(E(n))n.forEach(r=>_n(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pl(e,t);Ms.test(n)?e.setProperty(At(r),n.replace(Ms,""),"important"):e[r]=n}}const Ls=["Webkit","Moz","ms"],cr={};function Pl(e,t){const n=cr[t];if(n)return n;let r=dt(t);if(r!=="filter"&&r in e)return cr[t]=r;r=no(r);for(let s=0;s<Ls.length;s++){const o=Ls[s]+r;if(o in e)return cr[t]=o}return t}const Ns="http://www.w3.org/1999/xlink";function Bs(e,t,n,r,s,o=Ii(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ns,t.slice(6,t.length)):e.setAttributeNS(Ns,t,n):n==null||o&&!ro(n)?e.removeAttribute(t):e.setAttribute(t,o?"":pt(n)?String(n):n)}function Os(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?oi(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ro(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function Et(e,t,n,r){e.addEventListener(t,n,r)}function Dl(e,t,n,r){e.removeEventListener(t,n,r)}const Fs=Symbol("_vei");function Il(e,t,n,r,s=null){const o=e[Fs]||(e[Fs]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=Rl(t);if(r){const u=o[t]=Ml(r,s);Et(e,a,u,l)}else i&&(Dl(e,a,i,l),o[t]=void 0)}}const js=/(?:Once|Passive|Capture)$/;function Rl(e){let t;if(js.test(e)){t={};let r;for(;r=e.match(js);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):At(e.slice(2)),t]}let ur=0;const El=Promise.resolve(),$l=()=>ur||(El.then(()=>ur=0),ur=Date.now());function Ml(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Ll(r,n.value),t,5,[r])};return n.value=e,n.attached=$l(),n}function Ll(e,t){if(E(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ws=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nl=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?Sl(e,r,i):t==="style"?_l(e,n,r):jn(t)?Dr(t)||Il(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bl(e,t,r,i))?(Os(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Bs(e,t,r,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?Os(e,dt(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Bs(e,t,r,i))};function Bl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ws(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ws(t)&&de(n)?!1:t in e}const Hs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return E(t)?n=>wn(t,n):t};function Ol(e){e.target.composing=!0}function Us(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),Fl={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[dr]=Hs(s);const o=r||s.props&&s.props.type==="number";Et(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=hr(a)),e[dr](a)}),n&&Et(e,"change",()=>{e.value=e.value.trim()}),t||(Et(e,"compositionstart",Ol),Et(e,"compositionend",Us),Et(e,"change",Us))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},i){if(e[dr]=Hs(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?hr(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===l)||(e.value=l))}},jl=["ctrl","shift","alt","meta"],Wl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jl.some(n=>e[`${n}Key`]&&!t.includes(n))},Vr=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...o)=>{for(let i=0;i<t.length;i++){const a=Wl[t[i]];if(a&&a(s,t))return}return e(s,...o)})},Hl=me({patchProp:Nl},ml);let zs;function Ul(){return zs||(zs=Fa(Hl))}const zl=(...e)=>{const t=Ul().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ql(r);if(!s)return;const o=t._component;!L(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Xl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Xl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ql(e){return de(e)?document.querySelector(e):e}function Gr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _t=Gr();function ai(e){_t=e}var rn={exec:()=>null};function G(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(s,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(Te.caret,"$1"),n=n.replace(s,i),r},getRegex:()=>new RegExp(n,t)};return r}var Te={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Vl=/^(?:[ \t]*(?:\n|$))+/,Gl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Yl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,gn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Kl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yr=/(?:[*+-]|\d{1,9}[.)])/,li=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ci=G(li).replace(/bull/g,Yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ql=G(li).replace(/bull/g,Yr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Kr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Jl=/^[^\n]+/,Qr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Zl=G(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ec=G(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yr).getRegex(),Qn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Jr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tc=G("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Jr).replace("tag",Qn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ui=G(Kr).replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qn).getRegex(),nc=G(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ui).getRegex(),Zr={blockquote:nc,code:Gl,def:Zl,fences:Yl,heading:Kl,hr:gn,html:tc,lheading:ci,list:ec,newline:Vl,paragraph:ui,table:rn,text:Jl},Xs=G("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qn).getRegex(),rc={...Zr,lheading:Ql,table:Xs,paragraph:G(Kr).replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qn).getRegex()},sc={...Zr,html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Jr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(Kr).replace("hr",gn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ci).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},oc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ic=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,di=/^( {2,}|\\)\n(?!\s*$)/,ac=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Jn=/[\p{P}\p{S}]/u,es=/[\s\p{P}\p{S}]/u,fi=/[^\s\p{P}\p{S}]/u,lc=G(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,es).getRegex(),hi=/(?!~)[\p{P}\p{S}]/u,cc=/(?!~)[\s\p{P}\p{S}]/u,uc=/(?:[^\s\p{P}\p{S}]|~)/u,dc=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,pi=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,fc=G(pi,"u").replace(/punct/g,Jn).getRegex(),hc=G(pi,"u").replace(/punct/g,hi).getRegex(),gi="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",pc=G(gi,"gu").replace(/notPunctSpace/g,fi).replace(/punctSpace/g,es).replace(/punct/g,Jn).getRegex(),gc=G(gi,"gu").replace(/notPunctSpace/g,uc).replace(/punctSpace/g,cc).replace(/punct/g,hi).getRegex(),mc=G("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fi).replace(/punctSpace/g,es).replace(/punct/g,Jn).getRegex(),yc=G(/\\(punct)/,"gu").replace(/punct/g,Jn).getRegex(),bc=G(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),kc=G(Jr).replace("(?:-->|$)","-->").getRegex(),xc=G("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",kc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,wc=G(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Bn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mi=G(/^!?\[(label)\]\[(ref)\]/).replace("label",Bn).replace("ref",Qr).getRegex(),yi=G(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qr).getRegex(),vc=G("reflink|nolink(?!\\()","g").replace("reflink",mi).replace("nolink",yi).getRegex(),ts={_backpedal:rn,anyPunctuation:yc,autolink:bc,blockSkip:dc,br:di,code:ic,del:rn,emStrongLDelim:fc,emStrongRDelimAst:pc,emStrongRDelimUnd:mc,escape:oc,link:wc,nolink:yi,punctuation:lc,reflink:mi,reflinkSearch:vc,tag:xc,text:ac,url:rn},Sc={...ts,link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",Bn).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Bn).getRegex()},Cr={...ts,emStrongRDelimAst:gc,emStrongLDelim:hc,url:G(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Tc={...Cr,br:G(di).replace("{2,}","*").getRegex(),text:G(Cr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xn={normal:Zr,gfm:rc,pedantic:sc},qt={normal:ts,gfm:Cr,breaks:Tc,pedantic:Sc},Cc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qs=e=>Cc[e];function ze(e,t){if(t){if(Te.escapeTest.test(e))return e.replace(Te.escapeReplace,qs)}else if(Te.escapeTestNoEncode.test(e))return e.replace(Te.escapeReplaceNoEncode,qs);return e}function Vs(e){try{e=encodeURI(e).replace(Te.percentDecode,"%")}catch{return null}return e}function Gs(e,t){let n=e.replace(Te.findPipe,(o,i,a)=>{let l=!1,u=i;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),r=n.split(Te.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Te.slashPipe,"|");return r}function Vt(e,t,n){let r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function Ac(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ys(e,t,n,r,s){let o=t.href,i=t.title||null,a=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function _c(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let s=r[1];return t.split(`
`).map(o=>{let i=o.match(n.other.beginningSpace);if(i===null)return o;let[a]=i;return a.length>=s.length?o.slice(s.length):o}).join(`
`)}var On=class{options;rules;lexer;constructor(e){this.options=e||_t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Vt(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],r=_c(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let r=Vt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Vt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Vt(t[0],`
`).split(`
`),r="",s="",o=[];for(;n.length>0;){let i=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),i=!0;else if(!i)a.push(n[l]);else break;n=n.slice(l);let u=a.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,o,!0),this.lexer.state.top=h,n.length===0)break;let p=o.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let y=p,T=y.raw+`
`+n.join(`
`),_=this.blockquote(T);o[o.length-1]=_,r=r.substring(0,r.length-y.raw.length)+_.raw,s=s.substring(0,s.length-y.text.length)+_.text;break}else if(p?.type==="list"){let y=p,T=y.raw+`
`+n.join(`
`),_=this.list(T);o[o.length-1]=_,r=r.substring(0,r.length-p.raw.length)+_.raw,s=s.substring(0,s.length-y.raw.length)+_.raw,n=T.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),i=!1;for(;e;){let l=!1,u="",c="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,O=>" ".repeat(3*O.length)),p=e.split(`
`,1)[0],y=!h.trim(),T=0;if(this.options.pedantic?(T=2,c=h.trimStart()):y?T=t[1].length+1:(T=t[2].search(this.rules.other.nonSpaceChar),T=T>4?1:T,c=h.slice(T),T+=t[1].length),y&&this.rules.other.blankLine.test(p)&&(u+=p+`
`,e=e.substring(p.length+1),l=!0),!l){let O=this.rules.other.nextBulletRegex(T),j=this.rules.other.hrRegex(T),H=this.rules.other.fencesBeginRegex(T),D=this.rules.other.headingBeginRegex(T),z=this.rules.other.htmlBeginRegex(T);for(;e;){let ae=e.split(`
`,1)[0],ue;if(p=ae,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),ue=p):ue=p.replace(this.rules.other.tabCharGlobal,"    "),H.test(p)||D.test(p)||z.test(p)||O.test(p)||j.test(p))break;if(ue.search(this.rules.other.nonSpaceChar)>=T||!p.trim())c+=`
`+ue.slice(T);else{if(y||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(h)||D.test(h)||j.test(h))break;c+=`
`+p}!y&&!p.trim()&&(y=!0),u+=ae+`
`,e=e.substring(ae.length+1),h=ue.slice(T)}}s.loose||(i?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(i=!0));let _=null,re;this.options.gfm&&(_=this.rules.other.listIsTask.exec(c),_&&(re=_[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!_,checked:re,loose:!1,text:c,tokens:[]}),s.raw+=u}let a=s.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l=0;l<s.items.length;l++)if(this.lexer.state.top=!1,s.items[l].tokens=this.lexer.blockTokens(s.items[l].text,[]),!s.loose){let u=s.items[l].tokens.filter(h=>h.type==="space"),c=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));s.loose=c}if(s.loose)for(let l=0;l<s.items.length;l++)s.items[l].loose=!0;return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Gs(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let i of r)this.rules.other.tableAlignRight.test(i)?o.align.push("right"):this.rules.other.tableAlignCenter.test(i)?o.align.push("center"):this.rules.other.tableAlignLeft.test(i)?o.align.push("left"):o.align.push(null);for(let i=0;i<n.length;i++)o.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:o.align[i]});for(let i of s)o.rows.push(Gs(i,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Vt(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Ac(t[2],"()");if(o===-2)return;if(o>-1){let i=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Ys(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Ys(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,i,a=s,l=0,u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+s);(r=u.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(i=[...o].length,r[3]||r[4]){a+=i;continue}else if((r[5]||r[6])&&s%3&&!((s+i)%3)){l+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+l);let c=[...r[0]][0].length,h=e.slice(0,s+r.index+c+i);if(Math.min(s,i)%2){let y=h.slice(1,-1);return{type:"em",raw:h,text:y,tokens:this.lexer.inlineTokens(y)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=t[0],r="mailto:"+n;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);n=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},tt=class Ar{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||_t,this.options.tokenizer=this.options.tokenizer||new On,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Te,block:xn.normal,inline:qt.normal};this.options.pedantic?(n.block=xn.pedantic,n.inline=qt.pedantic):this.options.gfm&&(n.block=xn.gfm,this.options.breaks?n.inline=qt.breaks:n.inline=qt.gfm),this.tokenizer.rules=n}static get rules(){return{block:xn,inline:qt}}static lex(t,n){return new Ar(n).lex(t)}static lexInline(t,n){return new Ar(n).inlineTokens(t)}lex(t){t=t.replace(Te.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){for(this.options.pedantic&&(t=t.replace(Te.tabCharGlobal,"    ").replace(Te.spaceLine,""));t;){let s;if(this.options.extensions?.block?.some(i=>(s=i.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let i=n.at(-1);s.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.at(-1).src=i.text):n.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),n.push(s);continue}let o=t;if(this.options.extensions?.startBlock){let i=1/0,a=t.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},a),typeof l=="number"&&l>=0&&(i=Math.min(i,l))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){let i=n.at(-1);r&&i?.type==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(s),r=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(s);continue}if(t){let i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r=t,s=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;t;){o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(u=>(a=u.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);let u=n.at(-1);a.type==="text"&&u?.type==="text"?(u.raw+=a.raw,u.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(t,r,i)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if(this.options.extensions?.startInline){let u=1/0,c=t.slice(1),h;this.options.extensions.startInline.forEach(p=>{h=p.call({lexer:this},c),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(l=t.substring(0,u+1))}if(a=this.tokenizer.inlineText(l)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let u=n.at(-1);u?.type==="text"?(u.raw+=a.raw,u.text+=a.text):n.push(a);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}},Fn=class{options;parser;constructor(e){this.options=e||_t}space(e){return""}code({text:e,lang:t,escaped:n}){let r=(t||"").match(Te.notSpaceStart)?.[0],s=e.replace(Te.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ze(r)+'">'+(n?s:ze(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:ze(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r="";for(let i=0;i<e.items.length;i++){let a=e.items[i];r+=this.listitem(a)}let s=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+r+"</"+s+`>
`}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+ze(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let r="";for(let s=0;s<e.rows.length;s++){let o=e.rows[s];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ze(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),s=Vs(e);if(s===null)return r;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+ze(t)+'"'),o+=">"+r+"</a>",o}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let s=Vs(e);if(s===null)return ze(n);e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${ze(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ze(e.text)}},ns=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},nt=class _r{options;renderer;textRenderer;constructor(t){this.options=t||_t,this.options.renderer=this.options.renderer||new Fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ns}static parse(t,n){return new _r(n).parse(t)}static parseInline(t,n){return new _r(n).parseInline(t)}parse(t,n=!0){let r="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let a=o,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){r+=l||"";continue}}let i=o;switch(i.type){case"space":{r+=this.renderer.space(i);continue}case"hr":{r+=this.renderer.hr(i);continue}case"heading":{r+=this.renderer.heading(i);continue}case"code":{r+=this.renderer.code(i);continue}case"table":{r+=this.renderer.table(i);continue}case"blockquote":{r+=this.renderer.blockquote(i);continue}case"list":{r+=this.renderer.list(i);continue}case"html":{r+=this.renderer.html(i);continue}case"paragraph":{r+=this.renderer.paragraph(i);continue}case"text":{let a=i,l=this.renderer.text(a);for(;s+1<t.length&&t[s+1].type==="text";)a=t[++s],l+=`
`+this.renderer.text(a);n?r+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):r+=l;continue}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}parseInline(t,n=this.renderer){let r="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=a||"";continue}}let i=o;switch(i.type){case"escape":{r+=n.text(i);break}case"html":{r+=n.html(i);break}case"link":{r+=n.link(i);break}case"image":{r+=n.image(i);break}case"strong":{r+=n.strong(i);break}case"em":{r+=n.em(i);break}case"codespan":{r+=n.codespan(i);break}case"br":{r+=n.br(i);break}case"del":{r+=n.del(i);break}case"text":{r+=n.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},Pn=class{options;block;constructor(e){this.options=e||_t}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?tt.lex:tt.lexInline}provideParser(){return this.block?nt.parse:nt.parseInline}},Pc=class{defaults=Gr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=nt;Renderer=Fn;TextRenderer=ns;Lexer=tt;Tokenizer=On;Hooks=Pn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{let s=r;for(let o of s.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of s.rows)for(let i of o)n=n.concat(this.walkTokens(i.tokens,t));break}case"list":{let s=r;n=n.concat(this.walkTokens(s.items,t));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(o=>{let i=s[o].flat(1/0);n=n.concat(this.walkTokens(i,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=t.renderers[s.name];o?t.renderers[s.name]=function(...i){let a=s.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){let s=this.defaults.renderer||new Fn(this.defaults);for(let o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,a=n.renderer[i],l=s[i];s[i]=(...u)=>{let c=a.apply(s,u);return c===!1&&(c=l.apply(s,u)),c||""}}r.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new On(this.defaults);for(let o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,a=n.tokenizer[i],l=s[i];s[i]=(...u)=>{let c=a.apply(s,u);return c===!1&&(c=l.apply(s,u)),c}}r.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new Pn;for(let o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,a=n.hooks[i],l=s[i];Pn.passThroughHooks.has(o)?s[i]=u=>{if(this.defaults.async)return Promise.resolve(a.call(s,u)).then(h=>l.call(s,h));let c=a.call(s,u);return l.call(s,c)}:s[i]=(...u)=>{let c=a.apply(s,u);return c===!1&&(c=l.apply(s,u)),c}}r.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),s&&(a=a.concat(s.call(this,i))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return tt.lex(e,t??this.defaults)}parser(e,t){return nt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);let i=s.hooks?s.hooks.provideLexer():e?tt.lex:tt.lexInline,a=s.hooks?s.hooks.provideParser():e?nt.parse:nt.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(l=>i(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>a(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));let l=i(t,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=a(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+ze(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},Ct=new Pc;function V(e,t){return Ct.parse(e,t)}V.options=V.setOptions=function(e){return Ct.setOptions(e),V.defaults=Ct.defaults,ai(V.defaults),V};V.getDefaults=Gr;V.defaults=_t;V.use=function(...e){return Ct.use(...e),V.defaults=Ct.defaults,ai(V.defaults),V};V.walkTokens=function(e,t){return Ct.walkTokens(e,t)};V.parseInline=Ct.parseInline;V.Parser=nt;V.parser=nt.parse;V.Renderer=Fn;V.TextRenderer=ns;V.Lexer=tt;V.lexer=tt.lex;V.Tokenizer=On;V.Hooks=Pn;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;nt.parse;tt.lex;const Dc={class:"relative flex flex-col h-full"},Ic={key:0,class:"absolute top-0 left-0 mt-3 px-4 py-3 text-slate-400 dark:text-slate-600 pointer-events-none z-0"},Rc=["value"],Ec={__name:"MarkdownEditor",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","keydown"],setup(e,{expose:t,emit:n}){const r=e,s=n,o=pe(null);return t({insertTextAtCursor:async u=>{const c=o.value;if(!c)return;const h=c.selectionStart,p=c.selectionEnd,y=r.modelValue.substring(0,h)+u+r.modelValue.substring(p);s("update:modelValue",y),await Ot(),c.focus(),c.selectionStart=c.selectionEnd=h+u.length},textareaRef:o,wrapText:(u,c=u)=>{const h=o.value;if(!h)return;const p=h.selectionStart,y=h.selectionEnd,T=r.modelValue.substring(p,y),_=r.modelValue.substring(0,p)+u+T+c+r.modelValue.substring(y);s("update:modelValue",_),Ot(()=>{h.focus(),h.selectionStart=p+u.length,h.selectionEnd=y+u.length})},insertLink:()=>{const u=o.value;if(!u||!prompt("Enter the site title"))return;const h=prompt("Enter the URL:","https://");if(!h)return;const p=u.selectionStart,y=u.selectionEnd,T=r.modelValue.substring(p,y)||"link text",_=r.modelValue.substring(0,p)+`[${T}](${h})`+r.modelValue.substring(y);s("update:modelValue",_),Ot(()=>{u.focus(),u.selectionStart=u.selectionEnd=p+`[${T}](${h})`.length})}}),(u,c)=>(J(),ce("div",Dc,[e.modelValue?et("",!0):(J(),ce("div",Ic,c[2]||(c[2]=[A("p",null,"Start typing your markdown here...",-1),A("p",null,"Use / to view commands",-1)]))),A("textarea",{ref_key:"textareaRef",ref:o,value:e.modelValue,onInput:c[0]||(c[0]=h=>u.$emit("update:modelValue",h.target.value)),onKeydown:c[1]||(c[1]=h=>u.$emit("keydown",h)),class:"relative flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 transition-colors resize-none custom-scroll z-10"},null,40,Rc)]))}},$c={class:"flex flex-col h-full min-h-0"},Mc=["innerHTML"],Lc={__name:"MarkdownViewer",props:{markdown:{type:String,required:!0}},setup(e,{expose:t}){const n=e,r=pe(null),s=Ke(()=>V(n.markdown,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1}));return t({viewerRef:r}),(o,i)=>(J(),ce("div",$c,[A("div",{ref_key:"viewerRef",ref:r,innerHTML:s.value,class:"overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"},null,8,Mc)]))}};function rs(e){const t=n=>{n.key==="Escape"&&e()};hn(()=>{window.addEventListener("keydown",t)}),Ur(()=>{window.removeEventListener("keydown",t)})}const ss=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Nc={name:"TemplatesModal",props:{templates:{type:Array,required:!0}},emits:["close","insert-template"],setup(e,{emit:t}){rs(()=>{t("close")})},data(){return{searchTerm:""}},computed:{categorizedTemplates(){const e=this.searchTerm.toLowerCase();return e?this.templates.filter(n=>n.name.toLowerCase().includes(e)||n.category&&n.category.toLowerCase().includes(e)).reduce((n,r)=>{const s=r.category||"General";return n[s]||(n[s]=[]),n[s].push(r),n},{}):this.templates.reduce((n,r)=>{const s=r.category||"General";return n[s]||(n[s]=[]),n[s].push(r),n},{})}}},Bc={class:"w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col max-h-[85vh]"},Oc={class:"flex-shrink-0 flex justify-between items-center mb-4"},Fc={class:"flex-shrink-0 mb-4"},jc={class:"flex-grow min-h-0 overflow-y-auto custom-scroll pr-2"},Wc={class:"text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 first:mt-0 mb-2 pt-4 text-center"},Hc={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Uc={class:"flex justify-between items-center"},zc={class:"font-medium text-gray-800 dark:text-gray-200"},Xc=["onClick"],qc={key:0,class:"text-center text-slate-500 dark:text-slate-400 py-10"};function Vc(e,t,n,r,s,o){return J(),ce("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[2]||(t[2]=Vr(i=>e.$emit("close"),["self"]))},[A("div",Bc,[A("div",Oc,[t[3]||(t[3]=A("h2",{class:"text-xl font-bold text-cyan-600 dark:text-cyan-400"},"Markdown Templates",-1)),A("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"dark:text-slate-200 text-2xl leading-none"}," × ")]),A("div",Fc,[ca(A("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>s.searchTerm=i),placeholder:"Search templates...",class:"w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"},null,512),[[Fl,s.searchTerm]])]),A("div",jc,[(J(!0),ce(De,null,$n(o.categorizedTemplates,(i,a)=>(J(),ce("div",{key:a},[A("h3",Wc,Be(a),1),A("ul",Hc,[(J(!0),ce(De,null,$n(i,l=>(J(),ce("li",{key:l.name,class:"border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700"},[A("div",Uc,[A("span",zc,Be(l.name),1),A("button",{onClick:u=>e.$emit("insert-template",l.content),class:"text-sm bg-cyan-600 text-white px-3 py-1 rounded-md hover:bg-cyan-700 flex-shrink-0"}," Insert ",8,Xc)])]))),128))])]))),128)),Object.keys(o.categorizedTemplates).length===0?(J(),ce("div",qc," No templates found. ")):et("",!0)])])])}const Gc=ss(Nc,[["render",Vc]]),Yc={name:"CheatsheetModal",emits:["close"],setup(e,{emit:t}){return rs(()=>{t("close")}),{activeCheatSheetTab:"basic"}}},Kc={class:"relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"},Qc={class:"flex justify-between items-center mb-4"},Jc={key:0},Zc={key:1};function eu(e,t,n,r,s,o){return J(),ce("div",{class:"fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors z-50",onClick:t[3]||(t[3]=Vr(i=>e.$emit("close"),["self"]))},[A("div",Kc,[A("div",Qc,[t[4]||(t[4]=A("h2",{class:"text-2xl font-bold text-cyan-700 dark:text-cyan-400"},"Markdown Cheatsheet",-1)),A("div",null,[A("button",{onClick:t[0]||(t[0]=i=>r.activeCheatSheetTab="basic"),class:Tt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="basic"},"px-2 py-1"])}," Basic ",2),A("button",{onClick:t[1]||(t[1]=i=>r.activeCheatSheetTab="gfm"),class:Tt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="gfm"},"px-2 py-1"])}," GFM ",2)]),A("button",{onClick:t[2]||(t[2]=i=>e.$emit("close")),class:"absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-2xl leading-none transition-colors"}," × ")]),r.activeCheatSheetTab==="basic"?(J(),ce("div",Jc,t[5]||(t[5]=[vs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Text Formatting</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">*Italic*</code> → <em>Italic</em></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">**Bold**</code> → <strong>Bold</strong></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code> → <del>Strikethrough</del></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Headings</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700"># Heading 1</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">## Heading 2</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Lists</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links &amp; Images</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">[Link Text](https://...)</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">![Alt Text](image.jpg)</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code &amp; Blockquotes</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\\ncode block\\n```</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code></li></ul>',10)]))):et("",!0),r.activeCheatSheetTab==="gfm"?(J(),ce("div",Zc,t[6]||(t[6]=[vs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500"> GitHub Flavored Markdown (GFM) </h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task list</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Table | Header |</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">https://example.com</code> → Autolink </li></ul>',2)]))):et("",!0)])])}const tu=ss(Yc,[["render",eu]]),It=pe(!1);function bi(){const e=pe("🌙"),t=()=>{It.value?(document.documentElement.classList.add("dark"),e.value="🌙",localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),e.value="☀️",localStorage.setItem("theme","light"))},n=()=>{localStorage.getItem("theme")==="light"?It.value=!1:It.value=!0,t()},r=()=>{It.value=!It.value,t()};return hn(()=>{n()}),{isDark:It,themeDefault:e,themeToggle:r}}const nu={__name:"ThemeToggle",setup(e){const{themeDefault:t,themeToggle:n}=bi();return(r,s)=>(J(),ce("button",{onClick:s[0]||(s[0]=(...o)=>Nt(n)&&Nt(n)(...o)),class:"flex items-center justify-center h-10 w-10 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},Be(Nt(t)),1))}},ru={name:"EmojiPickerModal",emits:["close","select-emoji"],setup(e,{emit:t}){return rs(()=>{t("close")}),{emojis:["😊","😂","❤️","👍","🎉","🔥","🚀","🤔","👀","👋","👏","✅","✨","💡","⚠️","💯","🔗","🧑‍💻","💻","📝","📁","📈","⚙️","🌍"]}}},su={class:"w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4"},ou={class:"relative flex justify-center items-center mb-4"},iu={class:"grid grid-cols-8 gap-2 max-h-[50vh] overflow-y-auto custom-scroll"},au=["onClick"];function lu(e,t,n,r,s,o){return J(),ce("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[1]||(t[1]=Vr(i=>e.$emit("close"),["self"]))},[A("div",su,[A("div",ou,[t[2]||(t[2]=A("h2",{class:"w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400"}," Select an Emoji ",-1)),A("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"absolute right-0 text-2xl leading-none"}," × ")]),A("div",iu,[(J(!0),ce(De,null,$n(r.emojis,i=>(J(),ce("button",{key:i,onClick:a=>e.$emit("select-emoji",i),class:"text-2xl rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"},Be(i),9,au))),128))])])])}const cu=ss(ru,[["render",lu]]);function uu(e,t){const n=r=>{e.value&&!e.value.contains(r.target)&&t()};hn(()=>{document.addEventListener("mousedown",n)}),Hr(()=>{document.removeEventListener("mousedown",n)})}const du={class:"relative"},fu={key:0,class:"absolute mt-2 right-0 w-40 bg-white dark:text-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"},hu={class:"text-sm text-left"},pu={__name:"HeaderActions",emits:["toggle-help","toggle-templates","download-md","download-html","download-txt"],setup(e){const t=pe(!1),n=pe(null);return uu(n,()=>{t.value=!1}),(r,s)=>(J(),ce("div",{ref_key:"exportMenuContainer",ref:n,class:"flex items-center gap-3"},[A("button",{onClick:s[0]||(s[0]=o=>r.$emit("toggle-help")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Help "),A("button",{onClick:s[1]||(s[1]=o=>r.$emit("toggle-templates")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Templates "),A("div",du,[A("button",{onClick:s[2]||(s[2]=o=>t.value=!t.value),class:"px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"},s[6]||(s[6]=[ni(" Export "),A("span",null,"▼",-1)])),le(An,null,{default:Jt(()=>[t.value?(J(),ce("div",fu,[A("ul",hu,[A("li",null,[A("button",{onClick:s[3]||(s[3]=o=>r.$emit("download-md")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"}," Download .MD ")]),A("li",null,[A("button",{onClick:s[4]||(s[4]=o=>r.$emit("download-html")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .HTML ")]),A("li",null,[A("button",{onClick:s[5]||(s[5]=o=>r.$emit("download-txt")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .txt ")])])])):et("",!0)]),_:1})])],512))}},gu={class:"flex items-center gap-2"},mu={__name:"EditorToolbar",props:{copyText:{type:String,default:"Copy"}},emits:["toggle-emojis","copy","clear","format-bold","format-italic","format-strikethrough","format-link","format-code"],setup(e){return(t,n)=>(J(),ce("div",gu,[A("button",{onClick:n[0]||(n[0]=r=>t.$emit("toggle-emojis")),title:"Insert Emoji",class:"flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},n[8]||(n[8]=[A("span",{class:"text-xl"},"😊",-1)])),n[9]||(n[9]=A("div",{class:"h-5 w-px bg-slate-300 dark:bg-slate-600"},null,-1)),A("button",{onClick:n[1]||(n[1]=r=>t.$emit("copy")),class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},Be(e.copyText),1),A("button",{onClick:n[2]||(n[2]=r=>t.$emit("clear")),class:"px-3 py-1 rounded-md text-sm font-medium border border-red-500/50 text-red-600 hover:bg-red-50 dark:border-red-500/50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors"}," Clear "),n[10]||(n[10]=A("div",{class:"h-5 w-px bg-slate-300 dark:bg-slate-600"},null,-1)),A("button",{onClick:n[3]||(n[3]=r=>t.$emit("format-bold")),title:"Bold",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-700 dark:text-slate-300"}," B "),A("button",{onClick:n[4]||(n[4]=r=>t.$emit("format-italic")),title:"Italic",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 italic text-slate-700 dark:text-slate-300"}," I "),A("button",{onClick:n[5]||(n[5]=r=>t.$emit("format-strikethrough")),title:"Strikethrough",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 line-through text-slate-700 dark:text-slate-300"}," S "),A("button",{onClick:n[6]||(n[6]=r=>t.$emit("format-code")),title:"Code",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300"}," </> "),A("button",{onClick:n[7]||(n[7]=r=>t.$emit("format-link")),title:"Link",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"}," 🔗 ")]))}},yu=[{name:"README Starter",category:"Software Development",content:`
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
`}],Ks=[{name:"h1",description:"Large heading",content:"# "},{name:"h2",description:"Medium heading",content:"## "},{name:"h3",description:"Small heading",content:"### "},{name:"list",description:"Bulleted list",content:"- "},{name:"numbered list",description:"Numbered list",content:"1. "},{name:"todo",description:"Task checklist",content:"- [ ] "},{name:"quote",description:"Blockquote",content:"> "},{name:"divider",description:"Horizontal rule",content:`
---
`},{name:"code",description:"Code block",content:"```\n\n```"},{name:"table",description:"Insert a 3x2 table",content:`| Column 1 | Column 2 |
| :--- | :--- |
| Cell | Cell |`},{name:"date",description:"Insert current date",content:new Date().toDateString()},{name:"templates",description:"Browse templates",action:"open-templates"},{name:"emoji",description:"Pick an emoji",action:"open-emojis"},{name:"help",description:"Open cheatsheet",action:"open-help"}];function Qs(e,t){let n;return function(){const r=arguments,s=this;n||(e.apply(s,r),n=!0,setTimeout(()=>n=!1,t))}}function bu(e,t){const n=pe(!1),r=(i,a)=>{if(n.value)return;n.value=!0;const l=i.value,u=a.value;if(l&&u){const c=l.scrollTop,h=l.scrollHeight-l.clientHeight,p=c/h,y=u.scrollHeight-u.clientHeight;u.scrollTop=p*y}setTimeout(()=>{n.value=!1},100)},s=Qs(()=>r(e,t),10),o=Qs(()=>r(t,e),10);jt([e,t],([i,a])=>(i&&a&&(i.addEventListener("scroll",s),a.addEventListener("scroll",o)),()=>{i&&i.removeEventListener("scroll",s),a&&a.removeEventListener("scroll",o)}))}const ku={class:"flex-shrink-0 flex items-center justify-end border-t border-slate-200 dark:border-slate-700 pt-2"},xu={class:"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"},wu={__name:"StatsDisplay",props:{wordCount:Number,characterCount:Number,readingTime:Number},setup(e){return(t,n)=>(J(),ce("div",ku,[A("div",xu,[A("span",null,Be(e.wordCount)+" Words",1),A("span",null,Be(e.characterCount)+" Characters",1),A("span",null,Be(e.readingTime)+" min read",1)])]))}},vu={class:"flex-shrink-0 flex items-center justify-between px-4 sm:px-8 h-16 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"},Su={class:"flex items-center gap-4"},Tu={class:"flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-4 sm:p-8"},Cu={class:"grid h-full gap-2",style:{"grid-template-rows":"1fr auto"}},Au={class:"relative min-h-0 overflow-y-auto"},_u={key:0,class:"absolute bottom-2 left-0 right-0 z-10 mx-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg"},Pu={class:"max-h-64 overflow-y-auto custom-scroll"},Du=["onClick"],Iu={class:"font-medium text-slate-800 dark:text-slate-200"},Ru={class:"text-sm text-slate-500 dark:text-slate-400"},Eu={class:"flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"},$u={class:"grid h-full min-h-0 gap-2",style:{"grid-template-rows":"1fr auto"}},Mu={class:"overflow-y-auto min-h-0"},Lu={__name:"App",setup(e){const{isDark:t}=bi(),n=pe(localStorage.getItem("savedMarkdown")||"# Hello, world!"),r=pe("Copy"),s=pe(!1),o=pe(!1),i=pe(!1),a=pe(null),l=pe(null),u=pe(!1),c=pe(""),h=pe(0),p=pe([]),y=Ke(()=>a.value?.textareaRef),T=Ke(()=>l.value?.viewerRef);bu(y,T),jt(n,async $=>{localStorage.setItem("savedMarkdown",$),await Ot();const B=a.value?.textareaRef;if(!B)return;const W=B.selectionStart,Y=$.substring(0,W),Ce=Y.lastIndexOf("/"),Wt=Y.lastIndexOf(" "),gt=Y.lastIndexOf(`
`);Ce!==-1&&Ce>Wt&&Ce>gt?(u.value=!0,c.value=Y.substring(Ce+1),h.value=0):u.value=!1}),jt(h,$=>{const B=p.value[$];B&&B.scrollIntoView({block:"nearest"})}),No(()=>{p.value=[]});const _=Ke(()=>c.value?Ks.filter($=>$.name.toLowerCase().startsWith(c.value.toLowerCase())):Ks),re=Ke(()=>V(n.value,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1})),O=Ke(()=>n.value.length),j=Ke(()=>n.value.trim()?n.value.trim().split(/\s+/).length:0),H=Ke(()=>Math.ceil(j.value/200)),D=$=>{const B=a.value?.textareaRef;if(!B)return;const W=B.selectionStart,Y=n.value.substring(0,W),Ce=n.value.substring(W),Wt=`/${c.value}`,gt=Y.slice(0,Y.length-Wt.length);if($.action)$.action==="open-templates"&&(o.value=!0),$.action==="open-emojis"&&(i.value=!0),$.action==="open-help"&&(s.value=!0),n.value=gt+Ce;else if($.content){const mt=gt+$.content+Ce;n.value=mt,Ot(()=>{B.focus();const Pt=(gt+$.content).length;B.selectionStart=B.selectionEnd=Pt})}u.value=!1},z=$=>{if(u.value)if($.key==="ArrowUp")$.preventDefault(),h.value=(h.value-1+_.value.length)%_.value.length;else if($.key==="ArrowDown")$.preventDefault(),h.value=(h.value+1)%_.value.length;else if($.key==="Enter"||$.key==="Tab"){$.preventDefault();const B=_.value[h.value];B&&D(B)}else $.key==="Escape"&&(u.value=!1)},ae=$=>{n.value=$,o.value=!1},ue=$=>{a.value&&a.value.insertTextAtCursor($),i.value=!1},ye=()=>{navigator.clipboard.writeText(n.value),r.value="Copied!",setTimeout(()=>{r.value="Copy"},2e3)},N=()=>{confirm("Are you sure you want to clear the Canvas?")&&(n.value="")},X=()=>{a.value?.wrapText("**")},se=()=>{a.value?.wrapText("_")},P=()=>{a.value?.wrapText("\n```\n","\n```\n")},ee=()=>{a.value?.wrapText("~~")},he=()=>{a.value?.insertLink()},Me=()=>{s.value=!s.value},fe=()=>{const $=new Blob([n.value],{type:"text/markdown"}),B=URL.createObjectURL($),W=document.createElement("a");W.href=B,W.download="MarkCanvas.md",W.click(),URL.revokeObjectURL(B)},oe=()=>{const $=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MarkCanvas Export</title>
  <style>body { font-family: sans-serif; }</style>
</head>
<body>
${re.value}
</body>
</html>`,B=new Blob([$],{type:"text/html"}),W=URL.createObjectURL(B),Y=document.createElement("a");Y.href=W,Y.download="MarkCanvas.html",Y.click(),URL.revokeObjectURL(W)},Q=()=>{let $=n.value;$=$.replace(/^#+\s/gm,"").replace(/(\*\*|__|\*|_|~~)/g,"").replace(/!\[(.*?)\]\(.*?\)/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/^[\s\t]*(\*|-|\d+\.)\s/gm,"").replace(/^>\s?/gm,"").replace(/^[=-]{3,}/gm,"").replace(/`{3}.*$/gm,"").replace(/`/g,"").replace(/\n{3,}/g,`

`);const B=new Blob([$],{type:"text/plain"}),W=URL.createObjectURL(B),Y=document.createElement("a");Y.href=W,Y.download="MarkCanvas.txt",Y.click(),URL.revokeObjectURL(W)};return($,B)=>(J(),ce("div",{onKeydown:z,class:Tt([{dark:Nt(t)},"flex flex-col h-screen w-full font-sans bg-slate-100 dark:bg-slate-900"])},[A("header",vu,[B[5]||(B[5]=A("div",{class:"flex items-center gap-3"},[A("h1",{class:"text-xl font-bold text-slate-800 dark:text-slate-100"},"MarkCanvas")],-1)),A("div",Su,[le(pu,{onToggleHelp:Me,onToggleTemplates:B[0]||(B[0]=W=>o.value=!0),onDownloadMd:fe,onDownloadHtml:oe,onDownloadTxt:Q}),le(nu)])]),A("main",Tu,[A("div",Cu,[A("div",Au,[le(Ec,{class:"h-full",ref_key:"editorRef",ref:a,modelValue:n.value,"onUpdate:modelValue":B[1]||(B[1]=W=>n.value=W)},null,8,["modelValue"]),u.value?(J(),ce("div",_u,[A("ul",Pu,[(J(!0),ce(De,null,$n(_.value,(W,Y)=>(J(),ce("li",{key:W.name,ref_for:!0,ref:Ce=>{Ce&&(p.value[Y]=Ce)}},[A("button",{onClick:Ce=>D(W),class:Tt([{"bg-slate-100 dark:bg-slate-700":Y===h.value},"w-full text-left p-3 hover:bg-slate-100 dark:hover:bg-slate-700"])},[A("p",Iu,"/"+Be(W.name),1),A("p",Ru,Be(W.description),1)],10,Du)]))),128))])])):et("",!0)]),A("div",Eu,[le(mu,{class:"h-12 mr-6","copy-text":r.value,onCopy:ye,onClear:N,onToggleEmojis:B[2]||(B[2]=W=>i.value=!0),onFormatBold:X,onFormatItalic:se,onFormatCode:P,onFormatStrikethrough:ee,onFormatLink:he},null,8,["copy-text"])])]),A("div",$u,[A("div",Mu,[le(Lc,{markdown:n.value,ref_key:"viewerRef",ref:l,class:"h-full"},null,8,["markdown"])]),le(wu,{class:"h-14",wordCount:j.value,characterCount:O.value,readingTime:H.value},null,8,["wordCount","characterCount","readingTime"])])]),le(An,null,{default:Jt(()=>[o.value?(J(),Tn(Gc,{key:0,templates:Nt(yu),onClose:B[3]||(B[3]=W=>o.value=!1),onInsertTemplate:ae},null,8,["templates"])):et("",!0)]),_:1}),le(An,null,{default:Jt(()=>[s.value?(J(),Tn(tu,{key:0,onClose:Me})):et("",!0)]),_:1}),le(An,null,{default:Jt(()=>[i.value?(J(),Tn(cu,{key:0,onClose:B[4]||(B[4]=W=>i.value=!1),onSelectEmoji:ue})):et("",!0)]),_:1})],34))}};zl(Lu).mount("#app");
