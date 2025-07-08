(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},Jt=[],nt=()=>{},Zl=()=>!1,kr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zo=e=>e.startsWith("onUpdate:"),ve=Object.assign,Wo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ec=Object.prototype.hasOwnProperty,K=(e,t)=>ec.call(e,t),F=Array.isArray,Zt=e=>wr(e)==="[object Map]",Ki=e=>wr(e)==="[object Set]",z=e=>typeof e=="function",me=e=>typeof e=="string",Dt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Qi=e=>(fe(e)||z(e))&&z(e.then)&&z(e.catch),Ji=Object.prototype.toString,wr=e=>Ji.call(e),tc=e=>wr(e).slice(8,-1),Zi=e=>wr(e)==="[object Object]",Ho=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=Bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nc=/-(\w)/g,He=Sr(e=>e.replace(nc,(t,n)=>n?n.toUpperCase():"")),rc=/\B([A-Z])/g,Ut=Sr(e=>e.replace(rc,"-$1").toLowerCase()),Tr=Sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wr=Sr(e=>e?`on${Tr(e)}`:""),At=(e,t)=>!Object.is(e,t),Kn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},io=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t},oc=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let Ds;const Ar=()=>Ds||(Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uo(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=me(r)?lc(r):Uo(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(me(e)||fe(e))return e}const sc=/;(?![^(]*\))/g,ic=/:([^]+)/,ac=/\/\*[^]*?\*\//g;function lc(e){const t={};return e.replace(ac,"").split(sc).forEach(n=>{if(n){const r=n.split(ic);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function dt(e){let t="";if(me(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=dt(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uc=Bo(cc);function ea(e){return!!e||e===""}const ta=e=>!!(e&&e.__v_isRef===!0),Ue=e=>me(e)?e:e==null?"":F(e)||fe(e)&&(e.toString===Ji||!z(e.toString))?ta(e)?Ue(e.value):JSON.stringify(e,na,2):String(e),na=(e,t)=>ta(t)?na(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[Hr(r,s)+" =>"]=o,n),{})}:Ki(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hr(n))}:Dt(t)?Hr(t):fe(t)&&!F(t)&&!Zi(t)?String(t):t,Hr=(e,t="")=>{var n;return Dt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class fc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function dc(){return Ne}let ae;const Ur=new WeakSet;class ra{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ur.has(this)&&(Ur.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ms(this),ia(this);const t=ae,n=Ye;ae=this,Ye=!0;try{return this.fn()}finally{aa(this),ae=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Go(t);this.deps=this.depsTail=void 0,Ms(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ur.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lo(this)&&this.run()}get dirty(){return lo(this)}}let oa=0,bn,vn;function sa(e,t=!1){if(e.flags|=8,t){e.next=vn,vn=e;return}e.next=bn,bn=e}function Yo(){oa++}function Xo(){if(--oa>0)return;if(vn){let t=vn;for(vn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;bn;){let t=bn;for(bn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ia(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function aa(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Go(r),hc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function lo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(la(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function la(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!lo(e))))return;e.flags|=2;const t=e.dep,n=ae,r=Ye;ae=e,Ye=!0;try{ia(e);const o=e.fn(e._value);(t.version===0||At(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ae=n,Ye=r,aa(e),e.flags&=-3}}function Go(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Go(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const ca=[];function ht(){ca.push(Ye),Ye=!1}function pt(){const e=ca.pop();Ye=e===void 0?!0:e}function Ms(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ae;ae=void 0;try{t()}finally{ae=n}}}let _n=0;class pc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!Ye||ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ae)n=this.activeLink=new pc(ae,this),ae.deps?(n.prevDep=ae.depsTail,ae.depsTail.nextDep=n,ae.depsTail=n):ae.deps=ae.depsTail=n,ua(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ae.depsTail,n.nextDep=void 0,ae.depsTail.nextDep=n,ae.depsTail=n,ae.deps===n&&(ae.deps=r)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){Yo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xo()}}}function ua(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ua(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const co=new WeakMap,jt=Symbol(""),uo=Symbol(""),In=Symbol("");function we(e,t,n){if(Ye&&ae){let r=co.get(e);r||co.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Vo),o.map=r,o.key=n),o.track()}}function it(e,t,n,r,o,s){const i=co.get(e);if(!i){_n++;return}const a=l=>{l&&l.trigger()};if(Yo(),t==="clear")i.forEach(a);else{const l=F(e),u=l&&Ho(n);if(l&&n==="length"){const c=Number(r);i.forEach((d,p)=>{(p==="length"||p===In||!Dt(p)&&p>=c)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(In)),t){case"add":l?u&&a(i.get("length")):(a(i.get(jt)),Zt(e)&&a(i.get(uo)));break;case"delete":l||(a(i.get(jt)),Zt(e)&&a(i.get(uo)));break;case"set":Zt(e)&&a(i.get(jt));break}}Xo()}function Gt(e){const t=V(e);return t===e?t:(we(t,"iterate",In),We(e)?t:t.map(xe))}function Cr(e){return we(e=V(e),"iterate",In),e}const mc={__proto__:null,[Symbol.iterator](){return Yr(this,Symbol.iterator,xe)},concat(...e){return Gt(this).concat(...e.map(t=>F(t)?Gt(t):t))},entries(){return Yr(this,"entries",e=>(e[1]=xe(e[1]),e))},every(e,t){return rt(this,"every",e,t,void 0,arguments)},filter(e,t){return rt(this,"filter",e,t,n=>n.map(xe),arguments)},find(e,t){return rt(this,"find",e,t,xe,arguments)},findIndex(e,t){return rt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return rt(this,"findLast",e,t,xe,arguments)},findLastIndex(e,t){return rt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return rt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xr(this,"includes",e)},indexOf(...e){return Xr(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return Xr(this,"lastIndexOf",e)},map(e,t){return rt(this,"map",e,t,void 0,arguments)},pop(){return fn(this,"pop")},push(...e){return fn(this,"push",e)},reduce(e,...t){return Ns(this,"reduce",e,t)},reduceRight(e,...t){return Ns(this,"reduceRight",e,t)},shift(){return fn(this,"shift")},some(e,t){return rt(this,"some",e,t,void 0,arguments)},splice(...e){return fn(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return fn(this,"unshift",e)},values(){return Yr(this,"values",xe)}};function Yr(e,t,n){const r=Cr(e),o=r[t]();return r!==e&&!We(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=n(s.value)),s}),o}const gc=Array.prototype;function rt(e,t,n,r,o,s){const i=Cr(e),a=i!==e&&!We(e),l=i[t];if(l!==gc[t]){const d=l.apply(e,s);return a?xe(d):d}let u=n;i!==e&&(a?u=function(d,p){return n.call(this,xe(d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=l.call(i,u,r);return a&&o?o(c):c}function Ns(e,t,n,r){const o=Cr(e);let s=n;return o!==e&&(We(e)?n.length>3&&(s=function(i,a,l){return n.call(this,i,a,l,e)}):s=function(i,a,l){return n.call(this,i,xe(a),l,e)}),o[t](s,...r)}function Xr(e,t,n){const r=V(e);we(r,"iterate",In);const o=r[t](...n);return(o===-1||o===!1)&&Jo(n[0])?(n[0]=V(n[0]),r[t](...n)):o}function fn(e,t,n=[]){ht(),Yo();const r=V(e)[t].apply(e,n);return Xo(),pt(),r}const yc=Bo("__proto__,__v_isRef,__isVue"),fa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt));function bc(e){Dt(e)||(e=String(e));const t=V(this);return we(t,"has",e),t.hasOwnProperty(e)}class da{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?_c:ga:s?ma:pa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=F(t);if(!o){let l;if(i&&(l=mc[n]))return l;if(n==="hasOwnProperty")return bc}const a=Reflect.get(t,n,Te(t)?t:r);return(Dt(n)?fa.has(n):yc(n))||(o||we(t,"get",n),s)?a:Te(a)?i&&Ho(n)?a:a.value:fe(a)?o?ya(a):Ko(a):a}}class ha extends da{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const l=Ct(s);if(!We(r)&&!Ct(r)&&(s=V(s),r=V(r)),!F(t)&&Te(s)&&!Te(r))return l?!1:(s.value=r,!0)}const i=F(t)&&Ho(n)?Number(n)<t.length:K(t,n),a=Reflect.set(t,n,r,Te(t)?t:o);return t===V(o)&&(i?At(r,s)&&it(t,"set",n,r):it(t,"add",n,r)),a}deleteProperty(t,n){const r=K(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&it(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Dt(n)||!fa.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",F(t)?"length":jt),Reflect.ownKeys(t)}}class vc extends da{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const xc=new ha,kc=new vc,wc=new ha(!0);const fo=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function Sc(e,t,n){return function(...r){const o=this.__v_raw,s=V(o),i=Zt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...r),c=n?fo:t?ar:xe;return!t&&we(s,"iterate",l?uo:jt),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function Un(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Tc(e,t){const n={get(o){const s=this.__v_raw,i=V(s),a=V(o);e||(At(o,a)&&we(i,"get",o),we(i,"get",a));const{has:l}=Hn(i),u=t?fo:e?ar:xe;if(l.call(i,o))return u(s.get(o));if(l.call(i,a))return u(s.get(a));s!==i&&s.get(o)},get size(){const o=this.__v_raw;return!e&&we(V(o),"iterate",jt),Reflect.get(o,"size",o)},has(o){const s=this.__v_raw,i=V(s),a=V(o);return e||(At(o,a)&&we(i,"has",o),we(i,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const i=this,a=i.__v_raw,l=V(a),u=t?fo:e?ar:xe;return!e&&we(l,"iterate",jt),a.forEach((c,d)=>o.call(s,u(c),u(d),i))}};return ve(n,e?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(o){!t&&!We(o)&&!Ct(o)&&(o=V(o));const s=V(this);return Hn(s).has.call(s,o)||(s.add(o),it(s,"add",o,o)),this},set(o,s){!t&&!We(s)&&!Ct(s)&&(s=V(s));const i=V(this),{has:a,get:l}=Hn(i);let u=a.call(i,o);u||(o=V(o),u=a.call(i,o));const c=l.call(i,o);return i.set(o,s),u?At(s,c)&&it(i,"set",o,s):it(i,"add",o,s),this},delete(o){const s=V(this),{has:i,get:a}=Hn(s);let l=i.call(s,o);l||(o=V(o),l=i.call(s,o)),a&&a.call(s,o);const u=s.delete(o);return l&&it(s,"delete",o,void 0),u},clear(){const o=V(this),s=o.size!==0,i=o.clear();return s&&it(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Sc(o,e,t)}),n}function qo(e,t){const n=Tc(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(K(n,o)&&o in r?n:r,o,s)}const Ac={get:qo(!1,!1)},Cc={get:qo(!1,!0)},Pc={get:qo(!0,!1)};const pa=new WeakMap,ma=new WeakMap,ga=new WeakMap,_c=new WeakMap;function Ic(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ec(e){return e.__v_skip||!Object.isExtensible(e)?0:Ic(tc(e))}function Ko(e){return Ct(e)?e:Qo(e,!1,xc,Ac,pa)}function Dc(e){return Qo(e,!1,wc,Cc,ma)}function ya(e){return Qo(e,!0,kc,Pc,ga)}function Qo(e,t,n,r,o){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Ec(e);if(s===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function en(e){return Ct(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function Jo(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Mc(e){return!K(e,"__v_skip")&&Object.isExtensible(e)&&io(e,"__v_skip",!0),e}const xe=e=>fe(e)?Ko(e):e,ar=e=>fe(e)?ya(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function be(e){return Nc(e,!1)}function Nc(e,t){return Te(e)?e:new Lc(e,t)}class Lc{constructor(t,n){this.dep=new Vo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:V(t),this._value=n?t:xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||We(t)||Ct(t);t=r?t:V(t),At(t,n)&&(this._rawValue=t,this._value=r?t:xe(t),this.dep.trigger())}}function Tt(e){return Te(e)?e.value:e}const Rc={get:(e,t,n)=>t==="__v_raw"?e:Tt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Te(o)&&!Te(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function ba(e){return en(e)?e:new Proxy(e,Rc)}class Oc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return sa(this,!0),!0}get value(){const t=this.dep.track();return la(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $c(e,t,n=!1){let r,o;return z(e)?r=e:(r=e.get,o=e.set),new Oc(r,o,n)}const Yn={},lr=new WeakMap;let Ot;function Fc(e,t=!1,n=Ot){if(n){let r=lr.get(n);r||lr.set(n,r=[]),r.push(e)}}function jc(e,t,n=oe){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:a,call:l}=n,u=_=>o?_:We(_)||o===!1||o===0?at(_,1):at(_);let c,d,p,m,P=!1,A=!1;if(Te(e)?(d=()=>e.value,P=We(e)):en(e)?(d=()=>u(e),P=!0):F(e)?(A=!0,P=e.some(_=>en(_)||We(_)),d=()=>e.map(_=>{if(Te(_))return _.value;if(en(_))return u(_);if(z(_))return l?l(_,2):_()})):z(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){ht();try{p()}finally{pt()}}const _=Ot;Ot=c;try{return l?l(e,3,[m]):e(m)}finally{Ot=_}}:d=nt,t&&o){const _=d,j=o===!0?1/0:o;d=()=>at(_(),j)}const $=dc(),w=()=>{c.stop(),$&&$.active&&Wo($.effects,c)};if(s&&t){const _=t;t=(...j)=>{_(...j),w()}}let S=A?new Array(e.length).fill(Yn):Yn;const L=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(t){const j=c.run();if(o||P||(A?j.some((re,Z)=>At(re,S[Z])):At(j,S))){p&&p();const re=Ot;Ot=c;try{const Z=[j,S===Yn?void 0:A&&S[0]===Yn?[]:S,m];S=j,l?l(t,3,Z):t(...Z)}finally{Ot=re}}}else c.run()};return a&&a(L),c=new ra(d),c.scheduler=i?()=>i(L,!1):L,m=_=>Fc(_,!1,c),p=c.onStop=()=>{const _=lr.get(c);if(_){if(l)l(_,4);else for(const j of _)j();lr.delete(c)}},t?r?L(!0):S=c.run():i?i(L.bind(null,!0),!0):c.run(),w.pause=c.pause.bind(c),w.resume=c.resume.bind(c),w.stop=w,w}function at(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Te(e))at(e.value,t,n);else if(F(e))for(let r=0;r<e.length;r++)at(e[r],t,n);else if(Ki(e)||Zt(e))e.forEach(r=>{at(r,t,n)});else if(Zi(e)){for(const r in e)at(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&at(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(e,t,n,r){try{return r?e(...r):e()}catch(o){Pr(o,t,n)}}function Xe(e,t,n,r){if(z(e)){const o=$n(e,t,n,r);return o&&Qi(o)&&o.catch(s=>{Pr(s,t,n)}),o}if(F(e)){const o=[];for(let s=0;s<e.length;s++)o.push(Xe(e[s],t,n,r));return o}}function Pr(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||oe;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(s){ht(),$n(s,null,10,[e,l,u]),pt();return}}Bc(e,n,o,r,i)}function Bc(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const Pe=[];let Je=-1;const tn=[];let kt=null,qt=0;const va=Promise.resolve();let cr=null;function Qn(e){const t=cr||va;return e?t.then(this?e.bind(this):e):t}function zc(e){let t=Je+1,n=Pe.length;for(;t<n;){const r=t+n>>>1,o=Pe[r],s=En(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function Zo(e){if(!(e.flags&1)){const t=En(e),n=Pe[Pe.length-1];!n||!(e.flags&2)&&t>=En(n)?Pe.push(e):Pe.splice(zc(t),0,e),e.flags|=1,xa()}}function xa(){cr||(cr=va.then(wa))}function Wc(e){F(e)?tn.push(...e):kt&&e.id===-1?kt.splice(qt+1,0,e):e.flags&1||(tn.push(e),e.flags|=1),xa()}function Ls(e,t,n=Je+1){for(;n<Pe.length;n++){const r=Pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ka(e){if(tn.length){const t=[...new Set(tn)].sort((n,r)=>En(n)-En(r));if(tn.length=0,kt){kt.push(...t);return}for(kt=t,qt=0;qt<kt.length;qt++){const n=kt[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,qt=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wa(e){try{for(Je=0;Je<Pe.length;Je++){const t=Pe[Je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$n(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Je<Pe.length;Je++){const t=Pe[Je];t&&(t.flags&=-2)}Je=-1,Pe.length=0,ka(),cr=null,(Pe.length||tn.length)&&wa()}}let Re=null,Sa=null;function ur(e){const t=Re;return Re=e,Sa=e&&e.type.__scopeId||null,t}function xn(e,t=Re,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Ys(-1);const s=ur(t);let i;try{i=e(...o)}finally{ur(s),r._d&&Ys(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Hc(e,t){if(Re===null)return e;const n=Nr(Re),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,i,a,l=oe]=t[o];s&&(z(s)&&(s={mounted:s,updated:s}),s.deep&&at(i),r.push({dir:s,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Mt(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[r];l&&(ht(),Xe(l,n,8,[e.el,a,e,t]),pt())}}const Uc=Symbol("_vte"),Ta=e=>e.__isTeleport,wt=Symbol("_leaveCb"),Xn=Symbol("_enterCb");function Yc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sn(()=>{e.isMounted=!0}),Er(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],Aa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},Ca=e=>{const t=e.subTree;return t.component?Ca(t.component):t},Xc={name:"BaseTransition",props:Aa,setup(e,{slots:t}){const n=Yu(),r=Yc();return()=>{const o=t.default&&Ia(t.default(),!0);if(!o||!o.length)return;const s=Pa(o),i=V(e),{mode:a}=i;if(r.isLeaving)return Gr(s);const l=Rs(s);if(!l)return Gr(s);let u=ho(l,i,r,n,d=>u=d);l.type!==_e&&Dn(l,u);let c=n.subTree&&Rs(n.subTree);if(c&&c.type!==_e&&!$t(l,c)&&Ca(n).type!==_e){let d=ho(c,i,r,n);if(Dn(c,d),a==="out-in"&&l.type!==_e)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},Gr(s);a==="in-out"&&l.type!==_e?d.delayLeave=(p,m,P)=>{const A=_a(r,c);A[String(c.key)]=c,p[wt]=()=>{m(),p[wt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Pa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==_e){t=n;break}}return t}const Gc=Xc;function _a(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ho(e,t,n,r,o){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:P,onLeaveCancelled:A,onBeforeAppear:$,onAppear:w,onAfterAppear:S,onAppearCancelled:L}=t,_=String(e.key),j=_a(n,e),re=(W,q)=>{W&&Xe(W,r,9,q)},Z=(W,q)=>{const le=q[1];re(W,q),F(W)?W.every(M=>M.length<=1)&&le():W.length<=1&&le()},de={mode:i,persisted:a,beforeEnter(W){let q=l;if(!n.isMounted)if(s)q=$||l;else return;W[wt]&&W[wt](!0);const le=j[_];le&&$t(e,le)&&le.el[wt]&&le.el[wt](),re(q,[W])},enter(W){let q=u,le=c,M=d;if(!n.isMounted)if(s)q=w||u,le=S||c,M=L||d;else return;let se=!1;const ye=W[Xn]=Be=>{se||(se=!0,Be?re(M,[W]):re(le,[W]),de.delayedLeave&&de.delayedLeave(),W[Xn]=void 0)};q?Z(q,[W,ye]):ye()},leave(W,q){const le=String(e.key);if(W[Xn]&&W[Xn](!0),n.isUnmounting)return q();re(p,[W]);let M=!1;const se=W[wt]=ye=>{M||(M=!0,q(),ye?re(A,[W]):re(P,[W]),W[wt]=void 0,j[le]===e&&delete j[le])};j[le]=e,m?Z(m,[W,se]):se()},clone(W){const q=ho(W,t,n,r,o);return o&&o(q),q}};return de}function Gr(e){if(_r(e))return e=Pt(e),e.children=null,e}function Rs(e){if(!_r(e))return Ta(e.type)&&e.children?Pa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&z(n.default))return n.default()}}function Dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ia(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===Le?(i.patchFlag&128&&o++,r=r.concat(Ia(i.children,t,a))):(t||i.type!==_e)&&r.push(a!=null?Pt(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Vc(e,t){return z(e)?ve({name:e.name},t,{setup:e}):e}function Ea(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function kn(e,t,n,r,o=!1){if(F(e)){e.forEach((P,A)=>kn(P,t&&(F(t)?t[A]:t),n,r,o));return}if(wn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&kn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?Nr(r.component):r.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===oe?a.refs={}:a.refs,d=a.setupState,p=V(d),m=d===oe?()=>!1:P=>K(p,P);if(u!=null&&u!==l&&(me(u)?(c[u]=null,m(u)&&(d[u]=null)):Te(u)&&(u.value=null)),z(l))$n(l,a,12,[i,c]);else{const P=me(l),A=Te(l);if(P||A){const $=()=>{if(e.f){const w=P?m(l)?d[l]:c[l]:l.value;o?F(w)&&Wo(w,s):F(w)?w.includes(s)||w.push(s):P?(c[l]=[s],m(l)&&(d[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else P?(c[l]=i,m(l)&&(d[l]=i)):A&&(l.value=i,e.k&&(c[e.k]=i))};i?($.id=-1,$e($,n)):$()}}}Ar().requestIdleCallback;Ar().cancelIdleCallback;const wn=e=>!!e.type.__asyncLoader,_r=e=>e.type.__isKeepAlive;function qc(e,t){Da(e,"a",t)}function Kc(e,t){Da(e,"da",t)}function Da(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ir(t,r,n),n){let o=n.parent;for(;o&&o.parent;)_r(o.parent.vnode)&&Qc(r,t,n,o),o=o.parent}}function Qc(e,t,n,r){const o=Ir(t,e,r,!0);es(()=>{Wo(r[t],o)},n)}function Ir(e,t,n=ke,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{ht();const a=Fn(n),l=Xe(t,n,e,i);return a(),pt(),l});return r?o.unshift(s):o.push(s),s}}const yt=e=>(t,n=ke)=>{(!Nn||e==="sp")&&Ir(e,(...r)=>t(...r),n)},Jc=yt("bm"),sn=yt("m"),Zc=yt("bu"),eu=yt("u"),Er=yt("bum"),es=yt("um"),tu=yt("sp"),nu=yt("rtg"),ru=yt("rtc");function ou(e,t=ke){Ir("ec",e,t)}const su="components";function iu(e,t){return lu(su,e,!0,t)||e}const au=Symbol.for("v-ndc");function lu(e,t,n=!0,r=!1){const o=Re||ke;if(o){const s=o.type;{const a=Ku(s,!1);if(a&&(a===t||a===He(t)||a===Tr(He(t))))return s}const i=Os(o[e]||s[e],t)||Os(o.appContext[e],t);return!i&&r?s:i}}function Os(e,t){return e&&(e[t]||e[He(t)]||e[Tr(He(t))])}function fr(e,t,n,r){let o;const s=n,i=F(e);if(i||me(e)){const a=i&&en(e);let l=!1,u=!1;a&&(l=!We(e),u=Ct(e),e=Cr(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?ar(xe(e[c])):xe(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];o[l]=t(e[c],c,l,s)}}else o=[];return o}const po=e=>e?Qa(e)?Nr(e):po(e.parent):null,Sn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>po(e.parent),$root:e=>po(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Na(e),$forceUpdate:e=>e.f||(e.f=()=>{Zo(e.update)}),$nextTick:e=>e.n||(e.n=Qn.bind(e.proxy)),$watch:e=>Eu.bind(e)}),Vr=(e,t)=>e!==oe&&!e.__isScriptSetup&&K(e,t),cu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Vr(r,t))return i[t]=1,r[t];if(o!==oe&&K(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&K(u,t))return i[t]=3,s[t];if(n!==oe&&K(n,t))return i[t]=4,n[t];mo&&(i[t]=0)}}const c=Sn[t];let d,p;if(c)return t==="$attrs"&&we(e.attrs,"get",""),c(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==oe&&K(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Vr(o,t)?(o[t]=n,!0):r!==oe&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==oe&&K(e,i)||Vr(t,i)||(a=s[0])&&K(a,i)||K(r,i)||K(Sn,i)||K(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $s(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let mo=!0;function uu(e){const t=Na(e),n=e.proxy,r=e.ctx;mo=!1,t.beforeCreate&&Fs(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:m,updated:P,activated:A,deactivated:$,beforeDestroy:w,beforeUnmount:S,destroyed:L,unmounted:_,render:j,renderTracked:re,renderTriggered:Z,errorCaptured:de,serverPrefetch:W,expose:q,inheritAttrs:le,components:M,directives:se,filters:ye}=t;if(u&&fu(u,r,null),i)for(const ce in i){const te=i[ce];z(te)&&(r[ce]=te.bind(n))}if(o){const ce=o.call(n,n);fe(ce)&&(e.data=Ko(ce))}if(mo=!0,s)for(const ce in s){const te=s[ce],X=z(te)?te.bind(n,n):z(te.get)?te.get.bind(n,n):nt,H=!z(te)&&z(te.set)?te.set.bind(n):nt,G=Se({get:X,set:H});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>G.value,set:he=>G.value=he})}if(a)for(const ce in a)Ma(a[ce],r,n,ce);if(l){const ce=z(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(te=>{yu(te,ce[te])})}c&&Fs(c,e,"c");function ge(ce,te){F(te)?te.forEach(X=>ce(X.bind(n))):te&&ce(te.bind(n))}if(ge(Jc,d),ge(sn,p),ge(Zc,m),ge(eu,P),ge(qc,A),ge(Kc,$),ge(ou,de),ge(ru,re),ge(nu,Z),ge(Er,S),ge(es,_),ge(tu,W),F(q))if(q.length){const ce=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:X=>n[te]=X})})}else e.exposed||(e.exposed={});j&&e.render===nt&&(e.render=j),le!=null&&(e.inheritAttrs=le),M&&(e.components=M),se&&(e.directives=se),W&&Ea(e)}function fu(e,t,n=nt){F(e)&&(e=go(e));for(const r in e){const o=e[r];let s;fe(o)?"default"in o?s=Jn(o.from||r,o.default,!0):s=Jn(o.from||r):s=Jn(o),Te(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Fs(e,t,n){Xe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ma(e,t,n,r){let o=r.includes(".")?Xa(n,r):()=>n[r];if(me(e)){const s=t[e];z(s)&&Bt(o,s)}else if(z(e))Bt(o,e.bind(n));else if(fe(e))if(F(e))e.forEach(s=>Ma(s,t,n,r));else{const s=z(e.handler)?e.handler.bind(n):t[e.handler];z(s)&&Bt(o,s,e)}}function Na(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(u=>dr(l,u,i,!0)),dr(l,t,i)),fe(t)&&s.set(t,l),l}function dr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&dr(e,s,n,!0),o&&o.forEach(i=>dr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=du[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const du={data:js,props:Bs,emits:Bs,methods:mn,computed:mn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:mn,directives:mn,watch:pu,provide:js,inject:hu};function js(e,t){return t?e?function(){return ve(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function hu(e,t){return mn(go(e),go(t))}function go(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ve(Object.create(null),e,t):t}function Bs(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ve(Object.create(null),$s(e),$s(t??{})):t}function pu(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function La(){return{app:null,config:{isNativeTag:Zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mu=0;function gu(e,t){return function(r,o=null){z(r)||(r=ve({},r)),o!=null&&!fe(o)&&(o=null);const s=La(),i=new WeakSet,a=[];let l=!1;const u=s.app={_uid:mu++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Ju,get config(){return s.config},set config(c){},use(c,...d){return i.has(c)||(c&&z(c.install)?(i.add(c),c.install(u,...d)):z(c)&&(i.add(c),c(u,...d))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,d){return d?(s.components[c]=d,u):s.components[c]},directive(c,d){return d?(s.directives[c]=d,u):s.directives[c]},mount(c,d,p){if(!l){const m=u._ceVNode||Y(r,o);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),e(m,c,p),l=!0,u._container=c,c.__vue_app__=u,Nr(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Xe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return s.provides[c]=d,u},runWithContext(c){const d=nn;nn=u;try{return c()}finally{nn=d}}};return u}}let nn=null;function yu(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function Jn(e,t,n=!1){const r=ke||Re;if(r||nn){let o=nn?nn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}const Ra={},Oa=()=>Object.create(Ra),$a=e=>Object.getPrototypeOf(e)===Ra;function bu(e,t,n,r=!1){const o={},s=Oa();e.propsDefaults=Object.create(null),Fa(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Dc(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function vu(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=V(o),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Dr(e.emitsOptions,p))continue;const m=t[p];if(l)if(K(s,p))m!==s[p]&&(s[p]=m,u=!0);else{const P=He(p);o[P]=yo(l,a,P,m,e,!1)}else m!==s[p]&&(s[p]=m,u=!0)}}}else{Fa(e,t,o,s)&&(u=!0);let c;for(const d in a)(!t||!K(t,d)&&((c=Ut(d))===d||!K(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=yo(l,a,d,void 0,e,!0)):delete o[d]);if(s!==a)for(const d in s)(!t||!K(t,d))&&(delete s[d],u=!0)}u&&it(e.attrs,"set","")}function Fa(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(yn(l))continue;const u=t[l];let c;o&&K(o,c=He(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Dr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(s){const l=V(n),u=a||oe;for(let c=0;c<s.length;c++){const d=s[c];n[d]=yo(o,l,d,u[d],e,!K(u,d))}}return i}function yo(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=K(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&z(l)){const{propsDefaults:u}=o;if(n in u)r=u[n];else{const c=Fn(o);r=u[n]=l.call(null,t),c()}}else r=l;o.ce&&o.ce._setProp(n,r)}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}const xu=new WeakMap;function ja(e,t,n=!1){const r=n?xu:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!z(e)){const c=d=>{l=!0;const[p,m]=ja(d,t,!0);ve(i,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return fe(e)&&r.set(e,Jt),Jt;if(F(s))for(let c=0;c<s.length;c++){const d=He(s[c]);zs(d)&&(i[d]=oe)}else if(s)for(const c in s){const d=He(c);if(zs(d)){const p=s[c],m=i[d]=F(p)||z(p)?{type:p}:ve({},p),P=m.type;let A=!1,$=!0;if(F(P))for(let w=0;w<P.length;++w){const S=P[w],L=z(S)&&S.name;if(L==="Boolean"){A=!0;break}else L==="String"&&($=!1)}else A=z(P)&&P.name==="Boolean";m[0]=A,m[1]=$,(A||K(m,"default"))&&a.push(d)}}const u=[i,a];return fe(e)&&r.set(e,u),u}function zs(e){return e[0]!=="$"&&!yn(e)}const ts=e=>e[0]==="_"||e==="$stable",ns=e=>F(e)?e.map(Ze):[Ze(e)],ku=(e,t,n)=>{if(t._n)return t;const r=xn((...o)=>ns(t(...o)),n);return r._c=!1,r},Ba=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ts(o))continue;const s=e[o];if(z(s))t[o]=ku(o,s,r);else if(s!=null){const i=ns(s);t[o]=()=>i}}},za=(e,t)=>{const n=ns(t);e.slots.default=()=>n},Wa=(e,t,n)=>{for(const r in t)(n||!ts(r))&&(e[r]=t[r])},wu=(e,t,n)=>{const r=e.slots=Oa();if(e.vnode.shapeFlag&32){const o=t.__;o&&io(r,"__",o,!0);const s=t._;s?(Wa(r,t,n),n&&io(r,"_",s,!0)):Ba(t,r)}else t&&za(e,t)},Su=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=oe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Wa(o,t,n):(s=!t.$stable,Ba(t,o)),i=t}else t&&(za(e,t),i={default:1});if(s)for(const a in o)!ts(a)&&i[a]==null&&delete o[a]},$e=$u;function Tu(e){return Au(e)}function Au(e,t){const n=Ar();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:m=nt,insertStaticContent:P}=e,A=(f,h,g,x=null,y=null,b=null,I=void 0,C=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!$t(f,h)&&(x=Wn(f),he(f,y,b,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:k,ref:O,shapeFlag:E}=h;switch(k){case Mr:$(f,h,g,x);break;case _e:w(f,h,g,x);break;case Zn:f==null&&S(h,g,x,I);break;case Le:M(f,h,g,x,y,b,I,C,T);break;default:E&1?j(f,h,g,x,y,b,I,C,T):E&6?se(f,h,g,x,y,b,I,C,T):(E&64||E&128)&&k.process(f,h,g,x,y,b,I,C,T,cn)}O!=null&&y?kn(O,f&&f.ref,b,h||f,!h):O==null&&f&&f.ref!=null&&kn(f.ref,null,b,f,!0)},$=(f,h,g,x)=>{if(f==null)r(h.el=a(h.children),g,x);else{const y=h.el=f.el;h.children!==f.children&&u(y,h.children)}},w=(f,h,g,x)=>{f==null?r(h.el=l(h.children||""),g,x):h.el=f.el},S=(f,h,g,x)=>{[f.el,f.anchor]=P(f.children,h,g,x,f.el,f.anchor)},L=({el:f,anchor:h},g,x)=>{let y;for(;f&&f!==h;)y=p(f),r(f,g,x),f=y;r(h,g,x)},_=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),o(f),f=g;o(h)},j=(f,h,g,x,y,b,I,C,T)=>{h.type==="svg"?I="svg":h.type==="math"&&(I="mathml"),f==null?re(h,g,x,y,b,I,C,T):W(f,h,y,b,I,C,T)},re=(f,h,g,x,y,b,I,C)=>{let T,k;const{props:O,shapeFlag:E,transition:R,dirs:B}=f;if(T=f.el=i(f.type,b,O&&O.is,O),E&8?c(T,f.children):E&16&&de(f.children,T,null,x,y,qr(f,b),I,C),B&&Mt(f,null,x,"created"),Z(T,f,f.scopeId,I,x),O){for(const ie in O)ie!=="value"&&!yn(ie)&&s(T,ie,null,O[ie],b,x);"value"in O&&s(T,"value",null,O.value,b),(k=O.onVnodeBeforeMount)&&Ke(k,x,f)}B&&Mt(f,null,x,"beforeMount");const U=Cu(y,R);U&&R.beforeEnter(T),r(T,h,g),((k=O&&O.onVnodeMounted)||U||B)&&$e(()=>{k&&Ke(k,x,f),U&&R.enter(T),B&&Mt(f,null,x,"mounted")},y)},Z=(f,h,g,x,y)=>{if(g&&m(f,g),x)for(let b=0;b<x.length;b++)m(f,x[b]);if(y){let b=y.subTree;if(h===b||Va(b.type)&&(b.ssContent===h||b.ssFallback===h)){const I=y.vnode;Z(f,I,I.scopeId,I.slotScopeIds,y.parent)}}},de=(f,h,g,x,y,b,I,C,T=0)=>{for(let k=T;k<f.length;k++){const O=f[k]=C?St(f[k]):Ze(f[k]);A(null,O,h,g,x,y,b,I,C)}},W=(f,h,g,x,y,b,I)=>{const C=h.el=f.el;let{patchFlag:T,dynamicChildren:k,dirs:O}=h;T|=f.patchFlag&16;const E=f.props||oe,R=h.props||oe;let B;if(g&&Nt(g,!1),(B=R.onVnodeBeforeUpdate)&&Ke(B,g,h,f),O&&Mt(h,f,g,"beforeUpdate"),g&&Nt(g,!0),(E.innerHTML&&R.innerHTML==null||E.textContent&&R.textContent==null)&&c(C,""),k?q(f.dynamicChildren,k,C,g,x,qr(h,y),b):I||te(f,h,C,null,g,x,qr(h,y),b,!1),T>0){if(T&16)le(C,E,R,g,y);else if(T&2&&E.class!==R.class&&s(C,"class",null,R.class,y),T&4&&s(C,"style",E.style,R.style,y),T&8){const U=h.dynamicProps;for(let ie=0;ie<U.length;ie++){const ee=U[ie],Ee=E[ee],De=R[ee];(De!==Ee||ee==="value")&&s(C,ee,Ee,De,y,g)}}T&1&&f.children!==h.children&&c(C,h.children)}else!I&&k==null&&le(C,E,R,g,y);((B=R.onVnodeUpdated)||O)&&$e(()=>{B&&Ke(B,g,h,f),O&&Mt(h,f,g,"updated")},x)},q=(f,h,g,x,y,b,I)=>{for(let C=0;C<h.length;C++){const T=f[C],k=h[C],O=T.el&&(T.type===Le||!$t(T,k)||T.shapeFlag&198)?d(T.el):g;A(T,k,O,null,x,y,b,I,!0)}},le=(f,h,g,x,y)=>{if(h!==g){if(h!==oe)for(const b in h)!yn(b)&&!(b in g)&&s(f,b,h[b],null,y,x);for(const b in g){if(yn(b))continue;const I=g[b],C=h[b];I!==C&&b!=="value"&&s(f,b,C,I,y,x)}"value"in g&&s(f,"value",h.value,g.value,y)}},M=(f,h,g,x,y,b,I,C,T)=>{const k=h.el=f?f.el:a(""),O=h.anchor=f?f.anchor:a("");let{patchFlag:E,dynamicChildren:R,slotScopeIds:B}=h;B&&(C=C?C.concat(B):B),f==null?(r(k,g,x),r(O,g,x),de(h.children||[],g,O,y,b,I,C,T)):E>0&&E&64&&R&&f.dynamicChildren?(q(f.dynamicChildren,R,g,y,b,I,C),(h.key!=null||y&&h===y.subTree)&&Ha(f,h,!0)):te(f,h,g,O,y,b,I,C,T)},se=(f,h,g,x,y,b,I,C,T)=>{h.slotScopeIds=C,f==null?h.shapeFlag&512?y.ctx.activate(h,g,x,I,T):ye(h,g,x,y,b,I,T):Be(f,h,T)},ye=(f,h,g,x,y,b,I)=>{const C=f.component=Uu(f,x,y);if(_r(f)&&(C.ctx.renderer=cn),Xu(C,!1,I),C.asyncDep){if(y&&y.registerDep(C,ge,I),!f.el){const T=C.subTree=Y(_e);w(null,T,h,g)}}else ge(C,f,h,g,y,b,I)},Be=(f,h,g)=>{const x=h.component=f.component;if(Ru(f,h,g))if(x.asyncDep&&!x.asyncResolved){ce(x,h,g);return}else x.next=h,x.update();else h.el=f.el,x.vnode=h},ge=(f,h,g,x,y,b,I)=>{const C=()=>{if(f.isMounted){let{next:E,bu:R,u:B,parent:U,vnode:ie}=f;{const Ve=Ua(f);if(Ve){E&&(E.el=ie.el,ce(f,E,I)),Ve.asyncDep.then(()=>{f.isUnmounted||C()});return}}let ee=E,Ee;Nt(f,!1),E?(E.el=ie.el,ce(f,E,I)):E=ie,R&&Kn(R),(Ee=E.props&&E.props.onVnodeBeforeUpdate)&&Ke(Ee,U,E,ie),Nt(f,!0);const De=Hs(f),Ge=f.subTree;f.subTree=De,A(Ge,De,d(Ge.el),Wn(Ge),f,y,b),E.el=De.el,ee===null&&Ou(f,De.el),B&&$e(B,y),(Ee=E.props&&E.props.onVnodeUpdated)&&$e(()=>Ke(Ee,U,E,ie),y)}else{let E;const{el:R,props:B}=h,{bm:U,m:ie,parent:ee,root:Ee,type:De}=f,Ge=wn(h);Nt(f,!1),U&&Kn(U),!Ge&&(E=B&&B.onVnodeBeforeMount)&&Ke(E,ee,h),Nt(f,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(De);const Ve=f.subTree=Hs(f);A(null,Ve,g,x,f,y,b),h.el=Ve.el}if(ie&&$e(ie,y),!Ge&&(E=B&&B.onVnodeMounted)){const Ve=h;$e(()=>Ke(E,ee,Ve),y)}(h.shapeFlag&256||ee&&wn(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&$e(f.a,y),f.isMounted=!0,h=g=x=null}};f.scope.on();const T=f.effect=new ra(C);f.scope.off();const k=f.update=T.run.bind(T),O=f.job=T.runIfDirty.bind(T);O.i=f,O.id=f.uid,T.scheduler=()=>Zo(O),Nt(f,!0),k()},ce=(f,h,g)=>{h.component=f;const x=f.vnode.props;f.vnode=h,f.next=null,vu(f,h.props,x,g),Su(f,h.children,g),ht(),Ls(f),pt()},te=(f,h,g,x,y,b,I,C,T=!1)=>{const k=f&&f.children,O=f?f.shapeFlag:0,E=h.children,{patchFlag:R,shapeFlag:B}=h;if(R>0){if(R&128){H(k,E,g,x,y,b,I,C,T);return}else if(R&256){X(k,E,g,x,y,b,I,C,T);return}}B&8?(O&16&&ln(k,y,b),E!==k&&c(g,E)):O&16?B&16?H(k,E,g,x,y,b,I,C,T):ln(k,y,b,!0):(O&8&&c(g,""),B&16&&de(E,g,x,y,b,I,C,T))},X=(f,h,g,x,y,b,I,C,T)=>{f=f||Jt,h=h||Jt;const k=f.length,O=h.length,E=Math.min(k,O);let R;for(R=0;R<E;R++){const B=h[R]=T?St(h[R]):Ze(h[R]);A(f[R],B,g,null,y,b,I,C,T)}k>O?ln(f,y,b,!0,!1,E):de(h,g,x,y,b,I,C,T,E)},H=(f,h,g,x,y,b,I,C,T)=>{let k=0;const O=h.length;let E=f.length-1,R=O-1;for(;k<=E&&k<=R;){const B=f[k],U=h[k]=T?St(h[k]):Ze(h[k]);if($t(B,U))A(B,U,g,null,y,b,I,C,T);else break;k++}for(;k<=E&&k<=R;){const B=f[E],U=h[R]=T?St(h[R]):Ze(h[R]);if($t(B,U))A(B,U,g,null,y,b,I,C,T);else break;E--,R--}if(k>E){if(k<=R){const B=R+1,U=B<O?h[B].el:x;for(;k<=R;)A(null,h[k]=T?St(h[k]):Ze(h[k]),g,U,y,b,I,C,T),k++}}else if(k>R)for(;k<=E;)he(f[k],y,b,!0),k++;else{const B=k,U=k,ie=new Map;for(k=U;k<=R;k++){const Oe=h[k]=T?St(h[k]):Ze(h[k]);Oe.key!=null&&ie.set(Oe.key,k)}let ee,Ee=0;const De=R-U+1;let Ge=!1,Ve=0;const un=new Array(De);for(k=0;k<De;k++)un[k]=0;for(k=B;k<=E;k++){const Oe=f[k];if(Ee>=De){he(Oe,y,b,!0);continue}let qe;if(Oe.key!=null)qe=ie.get(Oe.key);else for(ee=U;ee<=R;ee++)if(un[ee-U]===0&&$t(Oe,h[ee])){qe=ee;break}qe===void 0?he(Oe,y,b,!0):(un[qe-U]=k+1,qe>=Ve?Ve=qe:Ge=!0,A(Oe,h[qe],g,null,y,b,I,C,T),Ee++)}const Is=Ge?Pu(un):Jt;for(ee=Is.length-1,k=De-1;k>=0;k--){const Oe=U+k,qe=h[Oe],Es=Oe+1<O?h[Oe+1].el:x;un[k]===0?A(null,qe,g,Es,y,b,I,C,T):Ge&&(ee<0||k!==Is[ee]?G(qe,g,Es,2):ee--)}}},G=(f,h,g,x,y=null)=>{const{el:b,type:I,transition:C,children:T,shapeFlag:k}=f;if(k&6){G(f.component.subTree,h,g,x);return}if(k&128){f.suspense.move(h,g,x);return}if(k&64){I.move(f,h,g,cn);return}if(I===Le){r(b,h,g);for(let E=0;E<T.length;E++)G(T[E],h,g,x);r(f.anchor,h,g);return}if(I===Zn){L(f,h,g);return}if(x!==2&&k&1&&C)if(x===0)C.beforeEnter(b),r(b,h,g),$e(()=>C.enter(b),y);else{const{leave:E,delayLeave:R,afterLeave:B}=C,U=()=>{f.ctx.isUnmounted?o(b):r(b,h,g)},ie=()=>{E(b,()=>{U(),B&&B()})};R?R(b,U,ie):ie()}else r(b,h,g)},he=(f,h,g,x=!1,y=!1)=>{const{type:b,props:I,ref:C,children:T,dynamicChildren:k,shapeFlag:O,patchFlag:E,dirs:R,cacheIndex:B}=f;if(E===-2&&(y=!1),C!=null&&(ht(),kn(C,null,g,f,!0),pt()),B!=null&&(h.renderCache[B]=void 0),O&256){h.ctx.deactivate(f);return}const U=O&1&&R,ie=!wn(f);let ee;if(ie&&(ee=I&&I.onVnodeBeforeUnmount)&&Ke(ee,h,f),O&6)Jl(f.component,g,x);else{if(O&128){f.suspense.unmount(g,x);return}U&&Mt(f,null,h,"beforeUnmount"),O&64?f.type.remove(f,h,g,cn,x):k&&!k.hasOnce&&(b!==Le||E>0&&E&64)?ln(k,h,g,!1,!0):(b===Le&&E&384||!y&&O&16)&&ln(T,h,g),x&&Xt(f)}(ie&&(ee=I&&I.onVnodeUnmounted)||U)&&$e(()=>{ee&&Ke(ee,h,f),U&&Mt(f,null,h,"unmounted")},g)},Xt=f=>{const{type:h,el:g,anchor:x,transition:y}=f;if(h===Le){Ql(g,x);return}if(h===Zn){_(f);return}const b=()=>{o(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:C}=y,T=()=>I(g,b);C?C(f.el,b,T):T()}else b()},Ql=(f,h)=>{let g;for(;f!==h;)g=p(f),o(f),f=g;o(h)},Jl=(f,h,g)=>{const{bum:x,scope:y,job:b,subTree:I,um:C,m:T,a:k,parent:O,slots:{__:E}}=f;Ws(T),Ws(k),x&&Kn(x),O&&F(E)&&E.forEach(R=>{O.renderCache[R]=void 0}),y.stop(),b&&(b.flags|=8,he(I,f,h,g)),C&&$e(C,h),$e(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ln=(f,h,g,x=!1,y=!1,b=0)=>{for(let I=b;I<f.length;I++)he(f[I],h,g,x,y)},Wn=f=>{if(f.shapeFlag&6)return Wn(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[Uc];return g?p(g):h};let zr=!1;const _s=(f,h,g)=>{f==null?h._vnode&&he(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,g),h._vnode=f,zr||(zr=!0,Ls(),ka(),zr=!1)},cn={p:A,um:he,m:G,r:Xt,mt:ye,mc:de,pc:te,pbc:q,n:Wn,o:e};return{render:_s,hydrate:void 0,createApp:gu(_s)}}function qr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Cu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ha(e,t,n=!1){const r=e.children,o=t.children;if(F(r)&&F(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=St(o[s]),a.el=i.el),!n&&a.patchFlag!==-2&&Ha(i,a)),a.type===Mr&&(a.el=i.el),a.type===_e&&!a.el&&(a.el=i.el)}}function Pu(e){const t=e.slice(),n=[0];let r,o,s,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<u?s=a+1:i=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function Ua(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ua(t)}function Ws(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _u=Symbol.for("v-scx"),Iu=()=>Jn(_u);function Bt(e,t,n){return Ya(e,t,n)}function Ya(e,t,n=oe){const{immediate:r,deep:o,flush:s,once:i}=n,a=ve({},n),l=t&&r||!t&&s!=="post";let u;if(Nn){if(s==="sync"){const m=Iu();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=nt,m.resume=nt,m.pause=nt,m}}const c=ke;a.call=(m,P,A)=>Xe(m,c,P,A);let d=!1;s==="post"?a.scheduler=m=>{$e(m,c&&c.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,P)=>{P?m():Zo(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const p=jc(e,t,a);return Nn&&(u?u.push(p):l&&p()),p}function Eu(e,t,n){const r=this.proxy,o=me(e)?e.includes(".")?Xa(r,e):()=>r[e]:e.bind(r,r);let s;z(t)?s=t:(s=t.handler,n=t);const i=Fn(this),a=Ya(o,s.bind(r),n);return i(),a}function Xa(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const Du=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Ut(t)}Modifiers`];function Mu(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let o=n;const s=t.startsWith("update:"),i=s&&Du(r,t.slice(7));i&&(i.trim&&(o=n.map(c=>me(c)?c.trim():c)),i.number&&(o=n.map(ao)));let a,l=r[a=Wr(t)]||r[a=Wr(He(t))];!l&&s&&(l=r[a=Wr(Ut(t))]),l&&Xe(l,e,6,o);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(u,e,6,o)}}function Ga(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!z(e)){const l=u=>{const c=Ga(u,t,!0);c&&(a=!0,ve(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(fe(e)&&r.set(e,null),null):(F(s)?s.forEach(l=>i[l]=null):ve(i,s),fe(e)&&r.set(e,i),i)}function Dr(e,t){return!e||!kr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Ut(t))||K(e,t))}function Hs(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:d,data:p,setupState:m,ctx:P,inheritAttrs:A}=e,$=ur(e);let w,S;try{if(n.shapeFlag&4){const _=o||r,j=_;w=Ze(u.call(j,_,c,d,m,p,P)),S=a}else{const _=t;w=Ze(_.length>1?_(d,{attrs:a,slots:i,emit:l}):_(d,null)),S=t.props?a:Nu(a)}}catch(_){Tn.length=0,Pr(_,e,1),w=Y(_e)}let L=w;if(S&&A!==!1){const _=Object.keys(S),{shapeFlag:j}=L;_.length&&j&7&&(s&&_.some(zo)&&(S=Lu(S,s)),L=Pt(L,S,!1,!0))}return n.dirs&&(L=Pt(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Dn(L,n.transition),w=L,ur($),w}const Nu=e=>{let t;for(const n in e)(n==="class"||n==="style"||kr(n))&&((t||(t={}))[n]=e[n]);return t},Lu=(e,t)=>{const n={};for(const r in e)(!zo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ru(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Us(r,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(i[p]!==r[p]&&!Dr(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Us(r,i,u):!0:!!i;return!1}function Us(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Dr(n,s))return!0}return!1}function Ou({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Va=e=>e.__isSuspense;function $u(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Wc(e)}const Le=Symbol.for("v-fgt"),Mr=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Tn=[];let Fe=null;function ne(e=!1){Tn.push(Fe=e?null:[])}function Fu(){Tn.pop(),Fe=Tn[Tn.length-1]||null}let Mn=1;function Ys(e,t=!1){Mn+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function qa(e){return e.dynamicChildren=Mn>0?Fe||Jt:null,Fu(),Mn>0&&Fe&&Fe.push(e),e}function pe(e,t,n,r,o,s){return qa(D(e,t,n,r,o,s,!0))}function er(e,t,n,r,o){return qa(Y(e,t,n,r,o,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const Ka=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Te(e)||z(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function D(e,t=null,n=null,r=0,o=null,s=e===Le?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ka(t),ref:t&&tr(t),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Re};return a?(os(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Mn>0&&!i&&Fe&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Fe.push(l),l}const Y=ju;function ju(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===au)&&(e=_e),hr(e)){const a=Pt(e,t,!0);return n&&os(a,n),Mn>0&&!s&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Qu(e)&&(e=e.__vccOpts),t){t=Bu(t);let{class:a,style:l}=t;a&&!me(a)&&(t.class=dt(a)),fe(l)&&(Jo(l)&&!F(l)&&(l=ve({},l)),t.style=Uo(l))}const i=me(e)?1:Va(e)?128:Ta(e)?64:fe(e)?4:z(e)?2:0;return D(e,t,n,r,o,i,s,!0)}function Bu(e){return e?Jo(e)||$a(e)?ve({},e):e:null}function Pt(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:a,transition:l}=e,u=t?zu(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ka(u),ref:t&&t.ref?n&&s?F(s)?s.concat(tr(t)):[s,tr(t)]:tr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Dn(c,l.clone(c)),c}function rs(e=" ",t=0){return Y(Mr,null,e,t)}function Xs(e,t){const n=Y(Zn,null,e);return n.staticCount=t,n}function ct(e="",t=!1){return t?(ne(),er(_e,null,e)):Y(_e,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Y(_e):F(e)?Y(Le,null,e.slice()):hr(e)?St(e):Y(Mr,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function os(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),os(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!$a(t)?t._ctx=Re:o===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[rs(t)]):n=8);e.children=t,e.shapeFlag|=n}function zu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=dt([t.class,r.class]));else if(o==="style")t.style=Uo([t.style,r.style]);else if(kr(o)){const s=t[o],i=r[o];i&&s!==i&&!(F(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Ke(e,t,n,r=null){Xe(e,t,7,[n,r])}const Wu=La();let Hu=0;function Uu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Wu,s={uid:Hu++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(r,o),emitsOptions:Ga(r,o),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Mu.bind(null,s),e.ce&&e.ce(s),s}let ke=null;const Yu=()=>ke||Re;let pr,bo;{const e=Ar(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};pr=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),bo=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Fn=e=>{const t=ke;return pr(e),e.scope.on(),()=>{e.scope.off(),pr(t)}},Gs=()=>{ke&&ke.scope.off(),pr(null)};function Qa(e){return e.vnode.shapeFlag&4}let Nn=!1;function Xu(e,t=!1,n=!1){t&&bo(t);const{props:r,children:o}=e.vnode,s=Qa(e);bu(e,r,s,t),wu(e,o,n||t);const i=s?Gu(e,t):void 0;return t&&bo(!1),i}function Gu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cu);const{setup:r}=n;if(r){ht();const o=e.setupContext=r.length>1?qu(e):null,s=Fn(e),i=$n(r,e,0,[e.props,o]),a=Qi(i);if(pt(),s(),(a||e.sp)&&!wn(e)&&Ea(e),a){if(i.then(Gs,Gs),t)return i.then(l=>{Vs(e,l)}).catch(l=>{Pr(l,e,0)});e.asyncDep=i}else Vs(e,i)}else Ja(e)}function Vs(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=ba(t)),Ja(e)}function Ja(e,t,n){const r=e.type;e.render||(e.render=r.render||nt);{const o=Fn(e);ht();try{uu(e)}finally{pt(),o()}}}const Vu={get(e,t){return we(e,"get",""),e[t]}};function qu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vu),slots:e.slots,emit:e.emit,expose:t}}function Nr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ba(Mc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sn)return Sn[n](e)},has(t,n){return n in t||n in Sn}})):e.proxy}function Ku(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Qu(e){return z(e)&&"__vccOpts"in e}const Se=(e,t)=>$c(e,t,Nn);function Za(e,t,n){const r=arguments.length;return r===2?fe(t)&&!F(t)?hr(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),Y(e,t,n))}const Ju="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vo;const qs=typeof window<"u"&&window.trustedTypes;if(qs)try{vo=qs.createPolicy("vue",{createHTML:e=>e})}catch{}const el=vo?e=>vo.createHTML(e):e=>e,Zu="http://www.w3.org/2000/svg",ef="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,Ks=st&&st.createElement("template"),tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?st.createElementNS(Zu,e):t==="mathml"?st.createElementNS(ef,e):n?st.createElement(e,{is:n}):st.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Ks.innerHTML=el(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Ks.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vt="transition",dn="animation",Ln=Symbol("_vtc"),tl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nf=ve({},Aa,tl),rf=e=>(e.displayName="Transition",e.props=nf,e),nr=rf((e,{slots:t})=>Za(Gc,of(e),t)),Lt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Qs=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function of(e){const t={};for(const M in e)M in tl||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,P=sf(o),A=P&&P[0],$=P&&P[1],{onBeforeEnter:w,onEnter:S,onEnterCancelled:L,onLeave:_,onLeaveCancelled:j,onBeforeAppear:re=w,onAppear:Z=S,onAppearCancelled:de=L}=t,W=(M,se,ye,Be)=>{M._enterCancelled=Be,Rt(M,se?c:a),Rt(M,se?u:i),ye&&ye()},q=(M,se)=>{M._isLeaving=!1,Rt(M,d),Rt(M,m),Rt(M,p),se&&se()},le=M=>(se,ye)=>{const Be=M?Z:S,ge=()=>W(se,M,ye);Lt(Be,[se,ge]),Js(()=>{Rt(se,M?l:s),ot(se,M?c:a),Qs(Be)||Zs(se,r,A,ge)})};return ve(t,{onBeforeEnter(M){Lt(w,[M]),ot(M,s),ot(M,i)},onBeforeAppear(M){Lt(re,[M]),ot(M,l),ot(M,u)},onEnter:le(!1),onAppear:le(!0),onLeave(M,se){M._isLeaving=!0;const ye=()=>q(M,se);ot(M,d),M._enterCancelled?(ot(M,p),ni()):(ni(),ot(M,p)),Js(()=>{M._isLeaving&&(Rt(M,d),ot(M,m),Qs(_)||Zs(M,r,$,ye))}),Lt(_,[M,ye])},onEnterCancelled(M){W(M,!1,void 0,!0),Lt(L,[M])},onAppearCancelled(M){W(M,!0,void 0,!0),Lt(de,[M])},onLeaveCancelled(M){q(M),Lt(j,[M])}})}function sf(e){if(e==null)return null;if(fe(e))return[Kr(e.enter),Kr(e.leave)];{const t=Kr(e);return[t,t]}}function Kr(e){return oc(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ln]||(e[Ln]=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Ln];n&&(n.delete(t),n.size||(e[Ln]=void 0))}function Js(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let af=0;function Zs(e,t,n,r){const o=e._endId=++af,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:i,timeout:a,propCount:l}=lf(e,t);if(!i)return r();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,p),s()},p=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,p)}function lf(e,t){const n=window.getComputedStyle(e),r=P=>(n[P]||"").split(", "),o=r(`${vt}Delay`),s=r(`${vt}Duration`),i=ei(o,s),a=r(`${dn}Delay`),l=r(`${dn}Duration`),u=ei(a,l);let c=null,d=0,p=0;t===vt?i>0&&(c=vt,d=i,p=s.length):t===dn?u>0&&(c=dn,d=u,p=l.length):(d=Math.max(i,u),c=d>0?i>u?vt:dn:null,p=c?c===vt?s.length:l.length:0);const m=c===vt&&/\b(transform|all)(,|$)/.test(r(`${vt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:m}}function ei(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ti(n)+ti(e[r])))}function ti(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ni(){return document.body.offsetHeight}function cf(e,t,n){const r=e[Ln];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ri=Symbol("_vod"),uf=Symbol("_vsh"),ff=Symbol(""),df=/(^|;)\s*display\s*:/;function hf(e,t,n){const r=e.style,o=me(n);let s=!1;if(n&&!o){if(t)if(me(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&rr(r,a,"")}else for(const i in t)n[i]==null&&rr(r,i,"");for(const i in n)i==="display"&&(s=!0),rr(r,i,n[i])}else if(o){if(t!==n){const i=r[ff];i&&(n+=";"+i),r.cssText=n,s=df.test(n)}}else t&&e.removeAttribute("style");ri in e&&(e[ri]=s?r.display:"",e[uf]&&(r.display="none"))}const oi=/\s*!important$/;function rr(e,t,n){if(F(n))n.forEach(r=>rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);oi.test(n)?e.setProperty(Ut(r),n.replace(oi,""),"important"):e[r]=n}}const si=["Webkit","Moz","ms"],Qr={};function pf(e,t){const n=Qr[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return Qr[t]=r;r=Tr(r);for(let o=0;o<si.length;o++){const s=si[o]+r;if(s in e)return Qr[t]=s}return t}const ii="http://www.w3.org/1999/xlink";function ai(e,t,n,r,o,s=uc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n):n==null||s&&!ea(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Dt(n)?String(n):n)}function li(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?el(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ea(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Kt(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}const ci=Symbol("_vei");function gf(e,t,n,r,o=null){const s=e[ci]||(e[ci]={}),i=s[t];if(r&&i)i.value=r;else{const[a,l]=yf(t);if(r){const u=s[t]=xf(r,o);Kt(e,a,u,l)}else i&&(mf(e,a,i,l),s[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}let Jr=0;const bf=Promise.resolve(),vf=()=>Jr||(bf.then(()=>Jr=0),Jr=Date.now());function xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(kf(r,n.value),t,5,[r])};return n.value=e,n.attached=vf(),n}function kf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const fi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,wf=(e,t,n,r,o,s)=>{const i=o==="svg";t==="class"?cf(e,r,i):t==="style"?hf(e,n,r):kr(t)?zo(t)||gf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,i))?(li(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ai(e,t,r,i,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!me(r))?li(e,He(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ai(e,t,r,i))};function Sf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&fi(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return fi(t)&&me(n)?!1:t in e}const di=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Kn(t,n):t};function Tf(e){e.target.composing=!0}function hi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zr=Symbol("_assign"),Af={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[Zr]=di(o);const s=r||o.props&&o.props.type==="number";Kt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=ao(a)),e[Zr](a)}),n&&Kt(e,"change",()=>{e.value=e.value.trim()}),t||(Kt(e,"compositionstart",Tf),Kt(e,"compositionend",hi),Kt(e,"change",hi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},i){if(e[Zr]=di(i),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?ao(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===l)||(e.value=l))}},Cf=["ctrl","shift","alt","meta"],Pf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Cf.some(n=>e[`${n}Key`]&&!t.includes(n))},ss=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(o,...s)=>{for(let i=0;i<t.length;i++){const a=Pf[t[i]];if(a&&a(o,t))return}return e(o,...s)})},_f=ve({patchProp:wf},tf);let pi;function If(){return pi||(pi=Tu(_f))}const Ef=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Mf(r);if(!o)return;const s=t._component;!z(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Df(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Df(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Mf(e){return me(e)?document.querySelector(e):e}function is(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Yt=is();function nl(e){Yt=e}var An={exec:()=>null};function J(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(o,s)=>{let i=typeof s=="string"?s:s.source;return i=i.replace(Ie.caret,"$1"),n=n.replace(o,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Nf=/^(?:[ \t]*(?:\n|$))+/,Lf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Rf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,jn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Of=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,as=/(?:[*+-]|\d{1,9}[.)])/,rl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ol=J(rl).replace(/bull/g,as).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$f=J(rl).replace(/bull/g,as).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ls=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ff=/^[^\n]+/,cs=/(?!\s*\])(?:\\.|[^\[\]\\])+/,jf=J(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Bf=J(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,as).getRegex(),Lr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",us=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zf=J("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",us).replace("tag",Lr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sl=J(ls).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex(),Wf=J(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sl).getRegex(),fs={blockquote:Wf,code:Lf,def:jf,fences:Rf,heading:Of,hr:jn,html:zf,lheading:ol,list:Bf,newline:Nf,paragraph:sl,table:An,text:Ff},mi=J("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex(),Hf={...fs,lheading:$f,table:mi,paragraph:J(ls).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",mi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lr).getRegex()},Uf={...fs,html:J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",us).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:An,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:J(ls).replace("hr",jn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ol).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Yf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,il=/^( {2,}|\\)\n(?!\s*$)/,Gf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rr=/[\p{P}\p{S}]/u,ds=/[\s\p{P}\p{S}]/u,al=/[^\s\p{P}\p{S}]/u,Vf=J(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ds).getRegex(),ll=/(?!~)[\p{P}\p{S}]/u,qf=/(?!~)[\s\p{P}\p{S}]/u,Kf=/(?:[^\s\p{P}\p{S}]|~)/u,Qf=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,cl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Jf=J(cl,"u").replace(/punct/g,Rr).getRegex(),Zf=J(cl,"u").replace(/punct/g,ll).getRegex(),ul="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ed=J(ul,"gu").replace(/notPunctSpace/g,al).replace(/punctSpace/g,ds).replace(/punct/g,Rr).getRegex(),td=J(ul,"gu").replace(/notPunctSpace/g,Kf).replace(/punctSpace/g,qf).replace(/punct/g,ll).getRegex(),nd=J("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,al).replace(/punctSpace/g,ds).replace(/punct/g,Rr).getRegex(),rd=J(/\\(punct)/,"gu").replace(/punct/g,Rr).getRegex(),od=J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sd=J(us).replace("(?:-->|$)","-->").getRegex(),id=J("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sd).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),mr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ad=J(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",mr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fl=J(/^!?\[(label)\]\[(ref)\]/).replace("label",mr).replace("ref",cs).getRegex(),dl=J(/^!?\[(ref)\](?:\[\])?/).replace("ref",cs).getRegex(),ld=J("reflink|nolink(?!\\()","g").replace("reflink",fl).replace("nolink",dl).getRegex(),hs={_backpedal:An,anyPunctuation:rd,autolink:od,blockSkip:Qf,br:il,code:Xf,del:An,emStrongLDelim:Jf,emStrongRDelimAst:ed,emStrongRDelimUnd:nd,escape:Yf,link:ad,nolink:dl,punctuation:Vf,reflink:fl,reflinkSearch:ld,tag:id,text:Gf,url:An},cd={...hs,link:J(/^!?\[(label)\]\((.*?)\)/).replace("label",mr).getRegex(),reflink:J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",mr).getRegex()},xo={...hs,emStrongRDelimAst:td,emStrongLDelim:Zf,url:J(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ud={...xo,br:J(il).replace("{2,}","*").getRegex(),text:J(xo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Gn={normal:fs,gfm:Hf,pedantic:Uf},hn={normal:hs,gfm:xo,breaks:ud,pedantic:cd},fd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gi=e=>fd[e];function Qe(e,t){if(t){if(Ie.escapeTest.test(e))return e.replace(Ie.escapeReplace,gi)}else if(Ie.escapeTestNoEncode.test(e))return e.replace(Ie.escapeReplaceNoEncode,gi);return e}function yi(e){try{e=encodeURI(e).replace(Ie.percentDecode,"%")}catch{return null}return e}function bi(e,t){let n=e.replace(Ie.findPipe,(s,i,a)=>{let l=!1,u=i;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),r=n.split(Ie.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Ie.slashPipe,"|");return r}function pn(e,t,n){let r=e.length;if(r===0)return"";let o=0;for(;o<r&&e.charAt(r-o-1)===t;)o++;return e.slice(0,r-o)}function dd(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function vi(e,t,n,r,o){let s=t.href,i=t.title||null,a=e[1].replace(o.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function hd(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let o=r[1];return t.split(`
`).map(s=>{let i=s.match(n.other.beginningSpace);if(i===null)return s;let[a]=i;return a.length>=o.length?s.slice(o.length):s}).join(`
`)}var gr=class{options;rules;lexer;constructor(t){this.options=t||Yt}space(t){let n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){let n=this.rules.block.code.exec(t);if(n){let r=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:pn(r,`
`)}}}fences(t){let n=this.rules.block.fences.exec(t);if(n){let r=n[0],o=hd(r,n[3]||"",this.rules);return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(t){let n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(this.rules.other.endingHash.test(r)){let o=pn(r,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:pn(n[0],`
`)}}blockquote(t){let n=this.rules.block.blockquote.exec(t);if(n){let r=pn(n[0],`
`).split(`
`),o="",s="",i=[];for(;r.length>0;){let a=!1,l=[],u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))l.push(r[u]),a=!0;else if(!a)l.push(r[u]);else break;r=r.slice(u);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${c}`:c,s=s?`${s}
${d}`:d;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=p,r.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let P=m,A=P.raw+`
`+r.join(`
`),$=this.blockquote(A);i[i.length-1]=$,o=o.substring(0,o.length-P.raw.length)+$.raw,s=s.substring(0,s.length-P.text.length)+$.text;break}else if(m?.type==="list"){let P=m,A=P.raw+`
`+r.join(`
`),$=this.list(A);i[i.length-1]=$,o=o.substring(0,o.length-m.raw.length)+$.raw,s=s.substring(0,s.length-P.raw.length)+$.raw,r=A.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:i,text:s}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim(),o=r.length>1,s={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let i=this.rules.other.listItemRegex(r),a=!1;for(;t;){let u=!1,c="",d="";if(!(n=i.exec(t))||this.rules.block.hr.test(t))break;c=n[0],t=t.substring(c.length);let p=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,S=>" ".repeat(3*S.length)),m=t.split(`
`,1)[0],P=!p.trim(),A=0;if(this.options.pedantic?(A=2,d=p.trimStart()):P?A=n[1].length+1:(A=n[2].search(this.rules.other.nonSpaceChar),A=A>4?1:A,d=p.slice(A),A+=n[1].length),P&&this.rules.other.blankLine.test(m)&&(c+=m+`
`,t=t.substring(m.length+1),u=!0),!u){let S=this.rules.other.nextBulletRegex(A),L=this.rules.other.hrRegex(A),_=this.rules.other.fencesBeginRegex(A),j=this.rules.other.headingBeginRegex(A),re=this.rules.other.htmlBeginRegex(A);for(;t;){let Z=t.split(`
`,1)[0],de;if(m=Z,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),de=m):de=m.replace(this.rules.other.tabCharGlobal,"    "),_.test(m)||j.test(m)||re.test(m)||S.test(m)||L.test(m))break;if(de.search(this.rules.other.nonSpaceChar)>=A||!m.trim())d+=`
`+de.slice(A);else{if(P||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(p)||j.test(p)||L.test(p))break;d+=`
`+m}!P&&!m.trim()&&(P=!0),c+=Z+`
`,t=t.substring(Z.length+1),p=de.slice(A)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0));let $=null,w;this.options.gfm&&($=this.rules.other.listIsTask.exec(d),$&&(w=$[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:c,task:!!$,checked:w,loose:!1,text:d,tokens:[]}),s.raw+=c}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){let c=s.items[u].tokens.filter(p=>p.type==="space"),d=c.length>0&&c.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=d}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(t){let n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){let n=this.rules.block.def.exec(t);if(n){let r=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:s}}}table(t){let n=this.rules.block.table.exec(t);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let r=bi(n[1]),o=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=n[3]?.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(let a of o)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<r.length;a++)i.header.push({text:r[a],tokens:this.lexer.inline(r[a]),header:!0,align:i.align[a]});for(let a of s)i.rows.push(bi(a,i.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[u]})));return i}}lheading(t){let n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){let n=this.rules.block.paragraph.exec(t);if(n){let r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){let n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(t){let n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){let n=this.rules.inline.link.exec(t);if(n){let r=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let i=pn(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{let i=dd(n[2],"()");if(i===-2)return;if(i>-1){let a=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let o=n[2],s="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(o);i&&(o=i[1],s=i[3])}else s=n[3]?n[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),vi(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let o=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=n[o.toLowerCase()];if(!s){let i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return vi(r,s,r[0],this.lexer,this.rules)}}emStrong(t,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(t);if(!(!o||o[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!r||this.rules.inline.punctuation.exec(r))){let s=[...o[0]].length-1,i,a,l=s,u=0,c=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,n=n.slice(-1*t.length+s);(o=c.exec(n))!=null;){if(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!i)continue;if(a=[...i].length,o[3]||o[4]){l+=a;continue}else if((o[5]||o[6])&&s%3&&!((s+a)%3)){u+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+u);let d=[...o[0]][0].length,p=t.slice(0,s+o.index+d+a);if(Math.min(s,a)%2){let P=p.slice(1,-1);return{type:"em",raw:p,text:P,tokens:this.lexer.inlineTokens(P)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(t){let n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(r),s=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return o&&s&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:n[0],text:r}}}br(t){let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){let n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){let n=this.rules.inline.autolink.exec(t);if(n){let r,o;return n[2]==="@"?(r=n[1],o="mailto:"+r):(r=n[1],o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let n;if(n=this.rules.inline.url.exec(t)){let r,o;if(n[2]==="@")r=n[0],o="mailto:"+r;else{let s;do s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])?.[0]??"";while(s!==n[0]);r=n[0],n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let n=this.rules.inline.text.exec(t);if(n){let r=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:r}}}},ut=class ko{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Yt,this.options.tokenizer=this.options.tokenizer||new gr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ie,block:Gn.normal,inline:hn.normal};this.options.pedantic?(n.block=Gn.pedantic,n.inline=hn.pedantic):this.options.gfm&&(n.block=Gn.gfm,this.options.breaks?n.inline=hn.breaks:n.inline=hn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Gn,inline:hn}}static lex(t,n){return new ko(n).lex(t)}static lexInline(t,n){return new ko(n).inlineTokens(t)}lex(t){t=t.replace(Ie.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){for(this.options.pedantic&&(t=t.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));t;){let o;if(this.options.extensions?.block?.some(i=>(o=i.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let i=n.at(-1);o.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.at(-1).src=i.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+o.raw,i.text+=`
`+o.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let s=t;if(this.options.extensions?.startBlock){let i=1/0,a=t.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},a),typeof l=="number"&&l>=0&&(i=Math.min(i,l))}),i<1/0&&i>=0&&(s=t.substring(0,i+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){let i=n.at(-1);r&&i?.type==="paragraph"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(o),r=s.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(o);continue}if(t){let i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r=t,o=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,i="";for(;t;){s||(i=""),s=!1;let a;if(this.options.extensions?.inline?.some(u=>(a=u.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);let u=n.at(-1);a.type==="text"&&u?.type==="text"?(u.raw+=a.raw,u.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(t,r,i)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if(this.options.extensions?.startInline){let u=1/0,c=t.slice(1),d;this.options.extensions.startInline.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(l=t.substring(0,u+1))}if(a=this.tokenizer.inlineText(l)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),s=!0;let u=n.at(-1);u?.type==="text"?(u.raw+=a.raw,u.text+=a.text):n.push(a);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}},yr=class{options;parser;constructor(e){this.options=e||Yt}space(e){return""}code({text:e,lang:t,escaped:n}){let r=(t||"").match(Ie.notSpaceStart)?.[0],o=e.replace(Ie.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Qe(r)+'">'+(n?o:Qe(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:Qe(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r="";for(let i=0;i<e.items.length;i++){let a=e.items[i];r+=this.listitem(a)}let o=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+o+s+`>
`+r+"</"+o+`>
`}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+Qe(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let o=0;o<e.header.length;o++)n+=this.tablecell(e.header[o]);t+=this.tablerow({text:n});let r="";for(let o=0;o<e.rows.length;o++){let s=e.rows[o];n="";for(let i=0;i<s.length;i++)n+=this.tablecell(s[i]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Qe(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),o=yi(e);if(o===null)return r;e=o;let s='<a href="'+e+'"';return t&&(s+=' title="'+Qe(t)+'"'),s+=">"+r+"</a>",s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=yi(e);if(o===null)return Qe(n);e=o;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${Qe(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Qe(e.text)}},ps=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ft=class wo{options;renderer;textRenderer;constructor(t){this.options=t||Yt,this.options.renderer=this.options.renderer||new yr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ps}static parse(t,n){return new wo(n).parse(t)}static parseInline(t,n){return new wo(n).parseInline(t)}parse(t,n=!0){let r="";for(let o=0;o<t.length;o++){let s=t[o];if(this.options.extensions?.renderers?.[s.type]){let a=s,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){r+=l||"";continue}}let i=s;switch(i.type){case"space":{r+=this.renderer.space(i);continue}case"hr":{r+=this.renderer.hr(i);continue}case"heading":{r+=this.renderer.heading(i);continue}case"code":{r+=this.renderer.code(i);continue}case"table":{r+=this.renderer.table(i);continue}case"blockquote":{r+=this.renderer.blockquote(i);continue}case"list":{r+=this.renderer.list(i);continue}case"html":{r+=this.renderer.html(i);continue}case"paragraph":{r+=this.renderer.paragraph(i);continue}case"text":{let a=i,l=this.renderer.text(a);for(;o+1<t.length&&t[o+1].type==="text";)a=t[++o],l+=`
`+this.renderer.text(a);n?r+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):r+=l;continue}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}parseInline(t,n=this.renderer){let r="";for(let o=0;o<t.length;o++){let s=t[o];if(this.options.extensions?.renderers?.[s.type]){let a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=a||"";continue}}let i=s;switch(i.type){case"escape":{r+=n.text(i);break}case"html":{r+=n.html(i);break}case"link":{r+=n.link(i);break}case"image":{r+=n.image(i);break}case"strong":{r+=n.strong(i);break}case"em":{r+=n.em(i);break}case"codespan":{r+=n.codespan(i);break}case"br":{r+=n.br(i);break}case"del":{r+=n.del(i);break}case"text":{r+=n.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},or=class{options;block;constructor(t){this.options=t||Yt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?ut.lex:ut.lexInline}provideParser(){return this.block?ft.parse:ft.parseInline}},pd=class{defaults=is();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ft;Renderer=yr;TextRenderer=ps;Lexer=ut;Tokenizer=gr;Hooks=or;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{let o=r;for(let s of o.header)n=n.concat(this.walkTokens(s.tokens,t));for(let s of o.rows)for(let i of s)n=n.concat(this.walkTokens(i.tokens,t));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,t));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(s=>{let i=o[s].flat(1/0);n=n.concat(this.walkTokens(i,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let s=t.renderers[o.name];s?t.renderers[o.name]=function(...i){let a=o.renderer.apply(this,i);return a===!1&&(a=s.apply(this,i)),a}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=t[o.level];s?s.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),r.extensions=t),n.renderer){let o=this.defaults.renderer||new yr(this.defaults);for(let s in n.renderer){if(!(s in o))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let i=s,a=n.renderer[i],l=o[i];o[i]=(...u)=>{let c=a.apply(o,u);return c===!1&&(c=l.apply(o,u)),c||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new gr(this.defaults);for(let s in n.tokenizer){if(!(s in o))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let i=s,a=n.tokenizer[i],l=o[i];o[i]=(...u)=>{let c=a.apply(o,u);return c===!1&&(c=l.apply(o,u)),c}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new or;for(let s in n.hooks){if(!(s in o))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let i=s,a=n.hooks[i],l=o[i];or.passThroughHooks.has(s)?o[i]=u=>{if(this.defaults.async)return Promise.resolve(a.call(o,u)).then(d=>l.call(o,d));let c=a.call(o,u);return l.call(o,c)}:o[i]=(...u)=>{let c=a.apply(o,u);return c===!1&&(c=l.apply(o,u)),c}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(i){let a=[];return a.push(s.call(this,i)),o&&(a=a.concat(o.call(this,i))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ut.lex(e,t??this.defaults)}parser(e,t){return ft.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},o={...this.defaults,...r},s=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);let i=o.hooks?o.hooks.provideLexer():e?ut.lex:ut.lexInline,a=o.hooks?o.hooks.provideParser():e?ft.parse:ft.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(t):t).then(l=>i(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>a(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(s);try{o.hooks&&(t=o.hooks.preprocess(t));let l=i(t,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let u=a(l,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(l){return s(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Qe(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},zt=new pd;function Q(e,t){return zt.parse(e,t)}Q.options=Q.setOptions=function(e){return zt.setOptions(e),Q.defaults=zt.defaults,nl(Q.defaults),Q};Q.getDefaults=is;Q.defaults=Yt;Q.use=function(...e){return zt.use(...e),Q.defaults=zt.defaults,nl(Q.defaults),Q};Q.walkTokens=function(e,t){return zt.walkTokens(e,t)};Q.parseInline=zt.parseInline;Q.Parser=ft;Q.parser=ft.parse;Q.Renderer=yr;Q.TextRenderer=ps;Q.Lexer=ut;Q.lexer=ut.lex;Q.Tokenizer=gr;Q.Hooks=or;Q.parse=Q;Q.options;Q.setOptions;Q.use;Q.walkTokens;Q.parseInline;ft.parse;ut.lex;const md={class:"relative flex flex-col h-full"},gd={key:0,class:"absolute top-0 left-0 mt-3 px-4 py-3 text-slate-400 dark:text-slate-600 pointer-events-none z-0"},yd=["value"],bd={__name:"MarkdownEditor",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","keydown"],setup(e,{expose:t,emit:n}){const r=e,o=n,s=be(null);return t({insertTextAtCursor:async u=>{const c=s.value;if(!c)return;const d=c.selectionStart,p=c.selectionEnd,m=r.modelValue.substring(0,d)+u+r.modelValue.substring(p);o("update:modelValue",m),await Qn(),c.focus(),c.selectionStart=c.selectionEnd=d+u.length},textareaRef:s,wrapText:(u,c=u)=>{const d=s.value;if(!d)return;const p=d.selectionStart,m=d.selectionEnd,P=r.modelValue.substring(p,m),A=r.modelValue.substring(0,p)+u+P+c+r.modelValue.substring(m);o("update:modelValue",A),Qn(()=>{d.focus(),d.selectionStart=p+u.length,d.selectionEnd=m+u.length})},insertLink:()=>{const u=s.value;if(!u||!prompt("Enter the site title"))return;const d=prompt("Enter the URL:","https://");if(!d)return;const p=u.selectionStart,m=u.selectionEnd,P=r.modelValue.substring(p,m)||"link text",A=r.modelValue.substring(0,p)+`[${P}](${d})`+r.modelValue.substring(m);o("update:modelValue",A),Qn(()=>{u.focus(),u.selectionStart=u.selectionEnd=p+`[${P}](${d})`.length})}}),(u,c)=>(ne(),pe("div",md,[e.modelValue?ct("",!0):(ne(),pe("div",gd,c[2]||(c[2]=[D("p",null,"Start typing your markdown here...",-1),D("p",null,"Use / to view commands",-1)]))),D("textarea",{ref_key:"textareaRef",ref:s,value:e.modelValue,onInput:c[0]||(c[0]=d=>u.$emit("update:modelValue",d.target.value)),onKeydown:c[1]||(c[1]=d=>u.$emit("keydown",d)),class:"relative flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 transition-colors resize-none custom-scroll z-10"},null,40,yd)]))}},vd={class:"flex flex-col h-full min-h-0"},xd=["innerHTML"],kd={__name:"MarkdownViewer",props:{markdown:{type:String,required:!0}},setup(e,{expose:t}){const n=e,r=be(null),o=Se(()=>Q(n.markdown,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1}));return t({viewerRef:r}),(s,i)=>(ne(),pe("div",vd,[D("div",{ref_key:"viewerRef",ref:r,innerHTML:o.value,class:"overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"},null,8,xd)]))}};function ms(e){const t=n=>{n.key==="Escape"&&e()};sn(()=>{window.addEventListener("keydown",t)}),es(()=>{window.removeEventListener("keydown",t)})}const gs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},wd={name:"TemplatesModal",props:{templates:{type:Array,required:!0}},emits:["close","insert-template"],setup(e,{emit:t}){ms(()=>{t("close")})},data(){return{searchTerm:""}},computed:{categorizedTemplates(){const e=this.searchTerm.toLowerCase();return e?this.templates.filter(n=>n.name.toLowerCase().includes(e)||n.category&&n.category.toLowerCase().includes(e)).reduce((n,r)=>{const o=r.category||"General";return n[o]||(n[o]=[]),n[o].push(r),n},{}):this.templates.reduce((n,r)=>{const o=r.category||"General";return n[o]||(n[o]=[]),n[o].push(r),n},{})}}},Sd={class:"w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col max-h-[85vh]"},Td={class:"flex-shrink-0 flex justify-between items-center mb-4"},Ad={class:"flex-shrink-0 mb-4"},Cd={class:"flex-grow min-h-0 overflow-y-auto custom-scroll pr-2"},Pd={class:"text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 first:mt-0 mb-2 pt-4 text-center"},_d={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Id={class:"flex justify-between items-center"},Ed={class:"font-medium text-gray-800 dark:text-gray-200"},Dd=["onClick"],Md={key:0,class:"text-center text-slate-500 dark:text-slate-400 py-10"};function Nd(e,t,n,r,o,s){return ne(),pe("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[2]||(t[2]=ss(i=>e.$emit("close"),["self"]))},[D("div",Sd,[D("div",Td,[t[3]||(t[3]=D("h2",{class:"text-xl font-bold text-cyan-600 dark:text-cyan-400"},"Markdown Templates",-1)),D("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"dark:text-slate-200 text-2xl leading-none"}," × ")]),D("div",Ad,[Hc(D("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>o.searchTerm=i),placeholder:"Search templates...",class:"w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"},null,512),[[Af,o.searchTerm]])]),D("div",Cd,[(ne(!0),pe(Le,null,fr(s.categorizedTemplates,(i,a)=>(ne(),pe("div",{key:a},[D("h3",Pd,Ue(a),1),D("ul",_d,[(ne(!0),pe(Le,null,fr(i,l=>(ne(),pe("li",{key:l.name,class:"border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700"},[D("div",Id,[D("span",Ed,Ue(l.name),1),D("button",{onClick:u=>e.$emit("insert-template",l.content),class:"text-sm bg-cyan-600 text-white px-3 py-1 rounded-md hover:bg-cyan-700 flex-shrink-0"}," Insert ",8,Dd)])]))),128))])]))),128)),Object.keys(s.categorizedTemplates).length===0?(ne(),pe("div",Md," No templates found. ")):ct("",!0)])])])}const Ld=gs(wd,[["render",Nd]]),Rd={name:"CheatsheetModal",emits:["close"],setup(e,{emit:t}){return ms(()=>{t("close")}),{activeCheatSheetTab:"basic"}}},Od={class:"relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"},$d={class:"flex justify-between items-center mb-4"},Fd={key:0},jd={key:1};function Bd(e,t,n,r,o,s){return ne(),pe("div",{class:"fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors z-50",onClick:t[3]||(t[3]=ss(i=>e.$emit("close"),["self"]))},[D("div",Od,[D("div",$d,[t[4]||(t[4]=D("h2",{class:"text-2xl font-bold text-cyan-700 dark:text-cyan-400"},"Markdown Cheatsheet",-1)),D("div",null,[D("button",{onClick:t[0]||(t[0]=i=>r.activeCheatSheetTab="basic"),class:dt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="basic"},"px-2 py-1"])}," Basic ",2),D("button",{onClick:t[1]||(t[1]=i=>r.activeCheatSheetTab="gfm"),class:dt([{"font-bold underline text-cyan-700 dark:text-cyan-400":r.activeCheatSheetTab==="gfm"},"px-2 py-1"])}," GFM ",2)]),D("button",{onClick:t[2]||(t[2]=i=>e.$emit("close")),class:"absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-2xl leading-none transition-colors"}," × ")]),r.activeCheatSheetTab==="basic"?(ne(),pe("div",Fd,t[5]||(t[5]=[Xs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Text Formatting</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">*Italic*</code> → <em>Italic</em></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">**Bold**</code> → <strong>Bold</strong></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code> → <del>Strikethrough</del></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Headings</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700"># Heading 1</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">## Heading 2</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Lists</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links &amp; Images</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">[Link Text](https://...)</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">![Alt Text](image.jpg)</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code &amp; Blockquotes</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\\ncode block\\n```</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code></li></ul>',10)]))):ct("",!0),r.activeCheatSheetTab==="gfm"?(ne(),pe("div",jd,t[6]||(t[6]=[Xs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500"> GitHub Flavored Markdown (GFM) </h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task list</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Table | Header |</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">https://example.com</code> → Autolink </li></ul>',2)]))):ct("",!0)])])}const zd=gs(Rd,[["render",Bd]]),Vt=be(!1);function hl(){const e=be("🌙"),t=()=>{Vt.value?(document.documentElement.classList.add("dark"),e.value="🌙",localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),e.value="☀️",localStorage.setItem("theme","light"))},n=()=>{localStorage.getItem("theme")==="light"?Vt.value=!1:Vt.value=!0,t()},r=()=>{Vt.value=!Vt.value,t()};return sn(()=>{n()}),{isDark:Vt,themeDefault:e,themeToggle:r}}const Wd={__name:"ThemeToggle",setup(e){const{themeDefault:t,themeToggle:n}=hl();return(r,o)=>(ne(),pe("button",{onClick:o[0]||(o[0]=(...s)=>Tt(n)&&Tt(n)(...s)),class:"flex items-center justify-center h-10 w-10 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},Ue(Tt(t)),1))}},Hd={name:"EmojiPickerModal",emits:["close","select-emoji"],setup(e,{emit:t}){return ms(()=>{t("close")}),{emojis:["😊","😂","❤️","👍","🎉","🔥","🚀","🤔","👀","👋","👏","✅","✨","💡","⚠️","💯","🔗","🧑‍💻","💻","📝","📁","📈","⚙️","🌍"]}}},Ud={class:"w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4"},Yd={class:"relative flex justify-center items-center mb-4"},Xd={class:"grid grid-cols-8 gap-2 max-h-[50vh] overflow-y-auto custom-scroll"},Gd=["onClick"];function Vd(e,t,n,r,o,s){return ne(),pe("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[1]||(t[1]=ss(i=>e.$emit("close"),["self"]))},[D("div",Ud,[D("div",Yd,[t[2]||(t[2]=D("h2",{class:"w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400"}," Select an Emoji ",-1)),D("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"absolute right-0 text-2xl leading-none"}," × ")]),D("div",Xd,[(ne(!0),pe(Le,null,fr(r.emojis,i=>(ne(),pe("button",{key:i,onClick:a=>e.$emit("select-emoji",i),class:"text-2xl rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"},Ue(i),9,Gd))),128))])])])}const qd=gs(Hd,[["render",Vd]]);function Kd(e,t){const n=r=>{e.value&&!e.value.contains(r.target)&&t()};sn(()=>{document.addEventListener("mousedown",n)}),Er(()=>{document.removeEventListener("mousedown",n)})}const Qd={class:"relative"},Jd={key:0,class:"absolute mt-2 right-0 w-40 bg-white dark:text-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"},Zd={class:"text-sm text-left"},eh={__name:"HeaderActions",emits:["toggle-help","toggle-templates","download-md","download-html","download-txt"],setup(e){const t=be(!1),n=be(null);return Kd(n,()=>{t.value=!1}),(r,o)=>(ne(),pe("div",{ref_key:"exportMenuContainer",ref:n,class:"flex items-center gap-3"},[D("button",{onClick:o[0]||(o[0]=s=>r.$emit("toggle-help")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Help "),D("button",{onClick:o[1]||(o[1]=s=>r.$emit("toggle-templates")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Templates "),D("div",Qd,[D("button",{onClick:o[2]||(o[2]=s=>t.value=!t.value),class:"px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"},o[6]||(o[6]=[rs(" Export "),D("span",null,"▼",-1)])),Y(nr,null,{default:xn(()=>[t.value?(ne(),pe("div",Jd,[D("ul",Zd,[D("li",null,[D("button",{onClick:o[3]||(o[3]=s=>r.$emit("download-md")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"}," Download .MD ")]),D("li",null,[D("button",{onClick:o[4]||(o[4]=s=>r.$emit("download-html")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .HTML ")]),D("li",null,[D("button",{onClick:o[5]||(o[5]=s=>r.$emit("download-txt")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .txt ")])])])):ct("",!0)]),_:1})])],512))}},th={class:"flex items-center gap-2"},nh=["disabled"],rh=["disabled"],oh={__name:"EditorToolbar",props:{copyText:{type:String,default:"Copy"},isUndoable:Boolean,isRedoable:Boolean},emits:["undo","redo","toggle-emojis","copy","clear","format-bold","format-italic","format-strikethrough","format-link","format-code"],setup(e,{emit:t}){const n=t,r=be(!1),o=be(!1);function s(){r.value=!0,setTimeout(()=>r.value=!1,600),n("copy")}function i(){o.value=!0,setTimeout(()=>o.value=!1,600),n("toggle-emojis")}return(a,l)=>{const u=iu("font-awesome-icon");return ne(),pe("div",th,[D("button",{onClick:l[0]||(l[0]=c=>a.$emit("undo")),disabled:!e.isUndoable,title:"Undo",class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},[Y(u,{icon:["fas","arrow-rotate-left"],class:"text-xl"})],8,nh),D("button",{onClick:l[1]||(l[1]=c=>a.$emit("redo")),disabled:!e.isRedoable,title:"Redo",class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},[Y(u,{icon:["fas","arrow-rotate-right"],class:"text-xl"})],8,rh),l[8]||(l[8]=D("div",{class:"h-5 w-px bg-slate-300 dark:bg-slate-600"},null,-1)),D("button",{onClick:s,class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},[Y(u,{icon:["fas","copy"],class:dt([r.value?"fa-beat":"","text-xl"])},null,8,["class"]),rs(" "+Ue(e.copyText),1)]),D("button",{onClick:l[2]||(l[2]=c=>a.$emit("clear")),class:"px-3 py-1 rounded-md text-sm font-medium border border-red-500/50 text-red-600 hover:bg-red-50 dark:border-red-500/50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors"},[Y(u,{icon:["fas","trash"]})]),l[9]||(l[9]=D("div",{class:"h-5 w-px bg-slate-300 dark:bg-slate-600"},null,-1)),D("button",{onClick:i,title:"Insert Emoji",class:"flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},[Y(u,{icon:["fas","face-smile"],class:dt(o.value?"fa-bounce":"")},null,8,["class"])]),D("button",{onClick:l[3]||(l[3]=c=>a.$emit("format-bold")),title:"Bold",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-700 dark:text-slate-300"},[Y(u,{icon:["fas","bold"]})]),D("button",{onClick:l[4]||(l[4]=c=>a.$emit("format-italic")),title:"Italic",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 italic text-slate-700 dark:text-slate-300"},[Y(u,{icon:["fas","italic"]})]),D("button",{onClick:l[5]||(l[5]=c=>a.$emit("format-strikethrough")),title:"Strikethrough",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 line-through text-slate-700 dark:text-slate-300"},[Y(u,{icon:["fas","strikethrough"]})]),D("button",{onClick:l[6]||(l[6]=c=>a.$emit("format-code")),title:"Code",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300"},[Y(u,{icon:["fas","code"]})]),D("button",{onClick:l[7]||(l[7]=c=>a.$emit("format-link")),title:"Link",class:"px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"},[Y(u,{icon:["fas","link"]})])])}}},sh={class:"flex-shrink-0 flex items-center justify-end border-t border-slate-200 dark:border-slate-700 pt-2"},ih={class:"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"},ah={__name:"StatsDisplay",props:{wordCount:Number,characterCount:Number,readingTime:Number},setup(e){return(t,n)=>(ne(),pe("div",sh,[D("div",ih,[D("span",null,Ue(e.wordCount)+" Words",1),D("span",null,Ue(e.characterCount)+" Characters",1),D("span",null,Ue(e.readingTime)+" min read",1)])]))}},lh=[{name:"README Starter",category:"Software Development",content:`
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
`}];function xi(e,t){let n;return function(){const r=arguments,o=this;n||(e.apply(o,r),n=!0,setTimeout(()=>n=!1,t))}}function ch(e,t){const n=be(!1),r=(i,a)=>{if(n.value)return;n.value=!0;const l=i.value,u=a.value;if(l&&u){const c=l.scrollTop,d=l.scrollHeight-l.clientHeight,p=c/d,m=u.scrollHeight-u.clientHeight;u.scrollTop=p*m}setTimeout(()=>{n.value=!1},100)},o=xi(()=>r(e,t),10),s=xi(()=>r(t,e),10);Bt([e,t],([i,a])=>(i&&a&&(i.addEventListener("scroll",o),a.addEventListener("scroll",s)),()=>{i&&i.removeEventListener("scroll",o),a&&a.removeEventListener("scroll",s)}))}function uh(e,t=500){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function fh(e){const t=be([e.value]),n=be([]),r=Se(()=>t.value.length>1),o=Se(()=>n.value.length>0);let s=!1;const i=()=>{const c=t.value[t.value.length-1];e.value!==c&&(t.value.push(e.value),n.value=[])},a=uh(i,500),l=()=>{if(r.value){const c=t.value.pop();n.value.push(c),s=!0,e.value=t.value[t.value.length-1],s=!1}},u=()=>{if(o.value){const c=n.value.pop();t.value.push(c),s=!0,e.value=c,s=!1}};return Bt(e,(c,d)=>{!s&&c!==d&&a()}),{undo:l,redo:u,isUndoable:r,isRedoable:o,recordChange:i}}const dh={class:"flex-shrink-0 flex items-center justify-between px-4 sm:px-8 h-16 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"},hh={class:"flex items-center gap-4"},ph={class:"flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-4 sm:p-8"},mh={class:"grid h-full gap-2",style:{"grid-template-rows":"1fr auto"}},gh={class:"relative min-h-0 overflow-y-auto"},yh={key:0,class:"absolute bottom-2 left-0 right-0 z-10 mx-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg"},bh={class:"max-h-64 overflow-y-auto custom-scroll"},vh=["onClick"],xh={class:"font-medium text-slate-800 dark:text-slate-200"},kh={class:"text-sm text-slate-500 dark:text-slate-400"},wh={class:"flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"},Sh={class:"grid h-full min-h-0 gap-2",style:{"grid-template-rows":"1fr auto"}},Th={class:"overflow-y-auto min-h-0"},Ah={__name:"App",setup(e){const{isDark:t}=hl(),n=be(localStorage.getItem("savedMarkdown")||"# Hello, world!"),r=be("Copy"),o=be(!1),s=be(!1),i=be(!1),a=be(null),l=be(null),{undo:u,redo:c,isUndoable:d,isRedoable:p,recordChange:m}=fh(n);Bt(n,X=>{localStorage.setItem("savedMarkdown",X)});const P=Se(()=>a.value?.textareaRef),A=Se(()=>l.value?.viewerRef);ch(P,A);const $=Se(()=>Q(n.value,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1})),w=Se(()=>n.value.length),S=Se(()=>n.value.trim()?n.value.trim().split(/\s+/).length:0),L=Se(()=>Math.ceil(S.value/200)),_=()=>u(),j=()=>c(),re=X=>{n.value=X,s.value=!1},Z=X=>{a.value&&a.value.insertTextAtCursor(X),i.value=!1},de=()=>{navigator.clipboard.writeText(n.value),r.value="Copied!",setTimeout(()=>{r.value="Copy"},2e3)},W=()=>{confirm("Are you sure you want to clear the Canvas?")&&(n.value="")},q=()=>{a.value?.wrapText("**")},le=()=>{a.value?.wrapText("_")},M=()=>{a.value?.wrapText("\n```\n","\n```\n")},se=()=>{a.value?.wrapText("~~")},ye=()=>{a.value?.insertLink()};sn(()=>{const X=H=>{const he=navigator.platform.toUpperCase().includes("MAC")?H.metaKey:H.ctrlKey;he&&H.key==="z"&&!H.shiftKey&&(H.preventDefault(),_()),he&&(H.key==="y"||H.key==="z"&&H.shiftKey)&&(H.preventDefault(),j()),[" ","Enter",".",",",";",":","?","!"].includes(H.key)&&m()};window.addEventListener("keydown",X),Er(()=>{window.removeEventListener("keydown",X)})});const Be=()=>{o.value=!o.value},ge=()=>{const X=new Blob([n.value],{type:"text/markdown"}),H=URL.createObjectURL(X),G=document.createElement("a");G.href=H,G.download="MarkCanvas.md",G.click(),URL.revokeObjectURL(H)},ce=()=>{const X=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MarkCanvas Export</title>
  <style>body { font-family: sans-serif; }</style>
</head>
<body>
${$.value}
</body>
</html>`,H=new Blob([X],{type:"text/html"}),G=URL.createObjectURL(H),he=document.createElement("a");he.href=G,he.download="MarkCanvas.html",he.click(),URL.revokeObjectURL(G)},te=()=>{let X=n.value;X=X.replace(/^#+\s/gm,"").replace(/(\*\*|__|\*|_|~~)/g,"").replace(/!\[(.*?)\]\(.*?\)/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/^[\s\t]*(\*|-|\d+\.)\s/gm,"").replace(/^>\s?/gm,"").replace(/^[=-]{3,}/gm,"").replace(/`{3}.*$/gm,"").replace(/`/g,"").replace(/\n{3,}/g,`

`);const H=new Blob([X],{type:"text/plain"}),G=URL.createObjectURL(H),he=document.createElement("a");he.href=G,he.download="MarkCanvas.txt",he.click(),URL.revokeObjectURL(G)};return(X,H)=>(ne(),pe("div",{onKeydown:H[5]||(H[5]=(...G)=>X.handleCommandMenuKeys&&X.handleCommandMenuKeys(...G)),class:dt([{dark:Tt(t)},"flex flex-col h-screen w-full font-sans bg-slate-100 dark:bg-slate-900"])},[D("header",dh,[H[6]||(H[6]=D("div",{class:"flex items-center gap-3"},[D("h1",{class:"text-xl font-bold text-slate-800 dark:text-slate-100"},"MarkCanvas")],-1)),D("div",hh,[Y(eh,{onToggleHelp:Be,onToggleTemplates:H[0]||(H[0]=G=>s.value=!0),onDownloadMd:ge,onDownloadHtml:ce,onDownloadTxt:te}),Y(Wd)])]),D("main",ph,[D("div",mh,[D("div",gh,[Y(bd,{class:"h-full",ref_key:"editorRef",ref:a,modelValue:n.value,"onUpdate:modelValue":H[1]||(H[1]=G=>n.value=G)},null,8,["modelValue"]),X.isCommandMenuOpen?(ne(),pe("div",yh,[D("ul",bh,[(ne(!0),pe(Le,null,fr(X.filteredCommands,(G,he)=>(ne(),pe("li",{key:G.name,ref_for:!0,ref:Xt=>{Xt&&(X.commandItems[he]=Xt)}},[D("button",{onClick:Xt=>X.executeCommand(G),class:dt([{"bg-slate-100 dark:bg-slate-700":he===X.commandMenuSelectedIndex},"w-full text-left p-3 hover:bg-slate-100 dark:hover:bg-slate-700"])},[D("p",xh,"/"+Ue(G.name),1),D("p",kh,Ue(G.description),1)],10,vh)]))),128))])])):ct("",!0)]),D("div",wh,[Y(oh,{class:"h-12","copy-text":r.value,"is-undoable":Tt(d),"is-redoable":Tt(p),onCopy:de,onClear:W,onToggleEmojis:H[2]||(H[2]=G=>i.value=!0),onFormatBold:q,onFormatItalic:le,onFormatStrikethrough:se,onFormatCode:M,onFormatLink:ye,onUndo:_,onRedo:j},null,8,["copy-text","is-undoable","is-redoable"])])]),D("div",Sh,[D("div",Th,[Y(kd,{markdown:n.value,ref_key:"viewerRef",ref:l,class:"h-full"},null,8,["markdown"])]),Y(ah,{class:"h-14",wordCount:S.value,characterCount:w.value,readingTime:L.value},null,8,["wordCount","characterCount","readingTime"])])]),Y(nr,null,{default:xn(()=>[s.value?(ne(),er(Ld,{key:0,templates:Tt(lh),onClose:H[3]||(H[3]=G=>s.value=!1),onInsertTemplate:re},null,8,["templates"])):ct("",!0)]),_:1}),Y(nr,null,{default:xn(()=>[o.value?(ne(),er(zd,{key:0,onClose:Be})):ct("",!0)]),_:1}),Y(nr,null,{default:xn(()=>[i.value?(ne(),er(qd,{key:0,onClose:H[4]||(H[4]=G=>i.value=!1),onSelectEmoji:Z})):ct("",!0)]),_:1})],34))}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ch(e,t,n){return(t=_h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ki(Object(n),!0).forEach(function(r){Ch(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ph(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _h(e){var t=Ph(e,"string");return typeof t=="symbol"?t:t+""}const wi=()=>{};let ys={},pl={},ml=null,gl={mark:wi,measure:wi};try{typeof window<"u"&&(ys=window),typeof document<"u"&&(pl=document),typeof MutationObserver<"u"&&(ml=MutationObserver),typeof performance<"u"&&(gl=performance)}catch{}const{userAgent:Si=""}=ys.navigator||{},_t=ys,ue=pl,Ti=ml,Vn=gl;_t.document;const bt=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",yl=~Si.indexOf("MSIE")||~Si.indexOf("Trident/");var Ih=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Eh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bl={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Dh={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ae="classic",Or="duotone",Mh="sharp",Nh="sharp-duotone",xl=[Ae,Or,Mh,Nh],Lh={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Rh={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Oh=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),$h={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Fh=["fak","fa-kit","fakd","fa-kit-duotone"],Ai={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jh=["kit"],Bh={kit:{"fa-kit":"fak"}},zh=["fak","fakd"],Wh={kit:{fak:"fa-kit"}},Ci={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Uh=["fak","fa-kit","fakd","fa-kit-duotone"],Yh={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xh={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Gh={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},So={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Vh=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],To=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Hh,...Vh],qh=["solid","regular","light","thin","duotone","brands"],kl=[1,2,3,4,5,6,7,8,9,10],Kh=kl.concat([11,12,13,14,15,16,17,18,19,20]),Qh=[...Object.keys(Gh),...qh,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",qn.GROUP,qn.SWAP_OPACITY,qn.PRIMARY,qn.SECONDARY].concat(kl.map(e=>"".concat(e,"x"))).concat(Kh.map(e=>"w-".concat(e))),Jh={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const mt="___FONT_AWESOME___",Ao=16,wl="fa",Sl="svg-inline--fa",Wt="data-fa-i2svg",Co="data-fa-pseudo-element",Zh="data-fa-pseudo-element-pending",bs="data-prefix",vs="data-icon",Pi="fontawesome-i2svg",ep="async",tp=["HTML","HEAD","STYLE","SCRIPT"],Tl=(()=>{try{return!0}catch{return!1}})();function Bn(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Ae]}})}const Al=v({},bl);Al[Ae]=v(v(v(v({},{"fa-duotone":"duotone"}),bl[Ae]),Ai.kit),Ai["kit-duotone"]);const np=Bn(Al),Po=v({},$h);Po[Ae]=v(v(v(v({},{duotone:"fad"}),Po[Ae]),Ci.kit),Ci["kit-duotone"]);const _i=Bn(Po),_o=v({},So);_o[Ae]=v(v({},_o[Ae]),Wh.kit);const xs=Bn(_o),Io=v({},Xh);Io[Ae]=v(v({},Io[Ae]),Bh.kit);Bn(Io);const rp=Ih,Cl="fa-layers-text",op=Eh,sp=v({},Lh);Bn(sp);const ip=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],eo=Dh,ap=[...jh,...Qh],Cn=_t.FontAwesomeConfig||{};function lp(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function cp(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}ue&&typeof ue.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const o=cp(lp(n));o!=null&&(Cn[r]=o)});const Pl={styleDefault:"solid",familyDefault:Ae,cssPrefix:wl,replacementClass:Sl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Cn.familyPrefix&&(Cn.cssPrefix=Cn.familyPrefix);const on=v(v({},Pl),Cn);on.autoReplaceSvg||(on.observeMutations=!1);const N={};Object.keys(Pl).forEach(e=>{Object.defineProperty(N,e,{enumerable:!0,set:function(t){on[e]=t,Pn.forEach(n=>n(N))},get:function(){return on[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){on.cssPrefix=e,Pn.forEach(t=>t(N))},get:function(){return on.cssPrefix}});_t.FontAwesomeConfig=N;const Pn=[];function up(e){return Pn.push(e),()=>{Pn.splice(Pn.indexOf(e),1)}}const xt=Ao,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fp(e){if(!e||!bt)return;const t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=ue.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const s=n[o],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=s)}return ue.head.insertBefore(t,r),e}const dp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){let e=12,t="";for(;e-- >0;)t+=dp[Math.random()*62|0];return t}function an(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ks(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function _l(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hp(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(_l(e[n]),'" '),"").trim()}function $r(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ws(e){return e.size!==et.size||e.x!==et.x||e.y!==et.y||e.rotate!==et.rotate||e.flipX||e.flipY}function pp(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function mp(e){let{transform:t,width:n=Ao,height:r=Ao,startCentered:o=!1}=e,s="";return o&&yl?s+="translate(".concat(t.x/xt-n/2,"em, ").concat(t.y/xt-r/2,"em) "):o?s+="translate(calc(-50% + ".concat(t.x/xt,"em), calc(-50% + ").concat(t.y/xt,"em)) "):s+="translate(".concat(t.x/xt,"em, ").concat(t.y/xt,"em) "),s+="scale(".concat(t.size/xt*(t.flipX?-1:1),", ").concat(t.size/xt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var gp=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Il(){const e=wl,t=Sl,n=N.cssPrefix,r=N.replacementClass;let o=gp;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");o=o.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(a,".".concat(r))}return o}let Ii=!1;function to(){N.autoAddCss&&!Ii&&(fp(Il()),Ii=!0)}var yp={mixout(){return{dom:{css:Il,insertCss:to}}},hooks(){return{beforeDOMElementCreation(){to()},beforeI2svg(){to()}}}};const gt=_t||{};gt[mt]||(gt[mt]={});gt[mt].styles||(gt[mt].styles={});gt[mt].hooks||(gt[mt].hooks={});gt[mt].shims||(gt[mt].shims=[]);var tt=gt[mt];const El=[],Dl=function(){ue.removeEventListener("DOMContentLoaded",Dl),br=1,El.map(e=>e())};let br=!1;bt&&(br=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),br||ue.addEventListener("DOMContentLoaded",Dl));function bp(e){bt&&(br?setTimeout(e,0):El.push(e))}function zn(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?_l(e):"<".concat(t," ").concat(hp(n),">").concat(r.map(zn).join(""),"</").concat(t,">")}function Ei(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var no=function(t,n,r,o){var s=Object.keys(t),i=s.length,a=n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<i;l++)u=s[l],c=a(c,t[u],u,t);return c};function vp(e){const t=[];let n=0;const r=e.length;for(;n<r;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((o&1023)<<10)+(s&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Eo(e){const t=vp(e);return t.length===1?t[0].toString(16):null}function xp(e,t){const n=e.length;let r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function Di(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Do(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=Di(t);typeof tt.hooks.addPack=="function"&&!r?tt.hooks.addPack(e,Di(t)):tt.styles[e]=v(v({},tt.styles[e]||{}),o),e==="fas"&&Do("fa",t)}const{styles:On,shims:kp}=tt,Ml=Object.keys(xs),wp=Ml.reduce((e,t)=>(e[t]=Object.keys(xs[t]),e),{});let Ss=null,Nl={},Ll={},Rl={},Ol={},$l={};function Sp(e){return~ap.indexOf(e)}function Tp(e,t){const n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!Sp(o)?o:null}const Fl=()=>{const e=r=>no(On,(o,s,i)=>(o[i]=no(s,r,{}),o),{});Nl=e((r,o,s)=>(o[3]&&(r[o[3]]=s),o[2]&&o[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Ll=e((r,o,s)=>(r[s]=s,o[2]&&o[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),$l=e((r,o,s)=>{const i=o[2];return r[s]=s,i.forEach(a=>{r[a]=s}),r});const t="far"in On||N.autoFetchSvg,n=no(kp,(r,o)=>{const s=o[0];let i=o[1];const a=o[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(r.names[s]={prefix:i,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:i,iconName:a}),r},{names:{},unicodes:{}});Rl=n.names,Ol=n.unicodes,Ss=Fr(N.styleDefault,{family:N.familyDefault})};up(e=>{Ss=Fr(e.styleDefault,{family:N.familyDefault})});Fl();function Ts(e,t){return(Nl[e]||{})[t]}function Ap(e,t){return(Ll[e]||{})[t]}function Ft(e,t){return($l[e]||{})[t]}function jl(e){return Rl[e]||{prefix:null,iconName:null}}function Cp(e){const t=Ol[e],n=Ts("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function It(){return Ss}const Bl=()=>({prefix:null,iconName:null,rest:[]});function Pp(e){let t=Ae;const n=Ml.reduce((r,o)=>(r[o]="".concat(N.cssPrefix,"-").concat(o),r),{});return xl.forEach(r=>{(e.includes(n[r])||e.some(o=>wp[r].includes(o)))&&(t=r)}),t}function Fr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ae}=t,r=np[n][e];if(n===Or&&!e)return"fad";const o=_i[n][e]||_i[n][r],s=e in tt.styles?e:null;return o||s||null}function _p(e){let t=[],n=null;return e.forEach(r=>{const o=Tp(N.cssPrefix,r);o?n=o:r&&t.push(r)}),{iconName:n,rest:t}}function Mi(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function jr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const o=To.concat(Uh),s=Mi(e.filter(d=>o.includes(d))),i=Mi(e.filter(d=>!To.includes(d))),a=s.filter(d=>(r=d,!vl.includes(d))),[l=null]=a,u=Pp(s),c=v(v({},_p(i)),{},{prefix:Fr(l,{family:u})});return v(v(v({},c),Mp({values:e,family:u,styles:On,config:N,canonical:c,givenPrefix:r})),Ip(n,r,c))}function Ip(e,t,n){let{prefix:r,iconName:o}=n;if(e||!r||!o)return{prefix:r,iconName:o};const s=t==="fa"?jl(o):{},i=Ft(r,o);return o=s.iconName||i||o,r=s.prefix||r,r==="far"&&!On.far&&On.fas&&!N.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}const Ep=xl.filter(e=>e!==Ae||e!==Or),Dp=Object.keys(So).filter(e=>e!==Ae).map(e=>Object.keys(So[e])).flat();function Mp(e){const{values:t,family:n,canonical:r,givenPrefix:o="",styles:s={},config:i={}}=e,a=n===Or,l=t.includes("fa-duotone")||t.includes("fad"),u=i.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||c)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ep.includes(n)&&(Object.keys(s).find(p=>Dp.includes(p))||i.autoFetchSvg)){const p=Oh.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Ft(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||o==="fa")&&(r.prefix=It()||"fas"),r}class Np{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(s=>{this.definitions[s]=v(v({},this.definitions[s]||{}),o[s]),Do(s,o[s]);const i=xs[Ae][s];i&&Do(i,o[s]),Fl()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(o=>{const{prefix:s,iconName:i,icon:a}=r[o],l=a[2];t[s]||(t[s]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[s][u]=a)}),t[s][i]=a}),t}}let Ni=[],Qt={};const rn={},Lp=Object.keys(rn);function Rp(e,t){let{mixoutsTo:n}=t;return Ni=e,Qt={},Object.keys(rn).forEach(r=>{Lp.indexOf(r)===-1&&delete rn[r]}),Ni.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(s=>{typeof o[s]=="function"&&(n[s]=o[s]),typeof o[s]=="object"&&Object.keys(o[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=o[s][i]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(i=>{Qt[i]||(Qt[i]=[]),Qt[i].push(s[i])})}r.provides&&r.provides(rn)}),n}function Mo(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(Qt[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function Ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Qt[e]||[]).forEach(s=>{s.apply(null,n)})}function Et(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rn[e]?rn[e].apply(null,t):void 0}function No(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||It();if(t)return t=Ft(n,t)||t,Ei(zl.definitions,n,t)||Ei(tt.styles,n,t)}const zl=new Np,Op=()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,Ht("noAuto")},$p={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(Ht("beforeI2svg",e),Et("pseudoElements2svg",e),Et("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,bp(()=>{jp({autoReplaceSvgRoot:t}),Ht("watch",e)})}},Fp={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ft(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Fr(e[0]);return{prefix:n,iconName:Ft(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(N.cssPrefix,"-"))>-1||e.match(rp))){const t=jr(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||It(),iconName:Ft(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=It();return{prefix:t,iconName:Ft(t,e)||e}}}},je={noAuto:Op,config:N,dom:$p,parse:Fp,library:zl,findIconDefinition:No,toHtml:zn},jp=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=ue}=e;(Object.keys(tt.styles).length>0||N.autoFetchSvg)&&bt&&N.autoReplaceSvg&&je.dom.i2svg({node:t})};function Br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>zn(n))}}),Object.defineProperty(e,"node",{get:function(){if(!bt)return;const n=ue.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Bp(e){let{children:t,main:n,mask:r,attributes:o,styles:s,transform:i}=e;if(ws(i)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};o.style=$r(v(v({},s),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function zp(e){let{prefix:t,iconName:n,children:r,attributes:o,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},o),{},{id:i}),children:r}]}]}function As(e){const{icons:{main:t,mask:n},prefix:r,iconName:o,transform:s,symbol:i,title:a,maskId:l,titleId:u,extra:c,watchable:d=!1}=e,{width:p,height:m}=n.found?n:t,P=zh.includes(r),A=[N.replacementClass,o?"".concat(N.cssPrefix,"-").concat(o):""].filter(j=>c.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(c.classes).join(" ");let $={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":r,"data-icon":o,class:A,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(m)})};const w=P&&!~c.classes.indexOf("fa-fw")?{width:"".concat(p/m*16*.0625,"em")}:{};d&&($.attributes[Wt]=""),a&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(u||Rn())},children:[a]}),delete $.attributes.title);const S=v(v({},$),{},{prefix:r,iconName:o,main:t,mask:n,maskId:l,transform:s,symbol:i,styles:v(v({},w),c.styles)}),{children:L,attributes:_}=n.found&&t.found?Et("generateAbstractMask",S)||{children:[],attributes:{}}:Et("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=L,S.attributes=_,i?zp(S):Bp(S)}function Li(e){const{content:t,width:n,height:r,transform:o,title:s,extra:i,watchable:a=!1}=e,l=v(v(v({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});a&&(l[Wt]="");const u=v({},i.styles);ws(o)&&(u.transform=mp({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=$r(u);c.length>0&&(l.style=c);const d=[];return d.push({tag:"span",attributes:l,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Wp(e){const{content:t,title:n,extra:r}=e,o=v(v(v({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=$r(r.styles);s.length>0&&(o.style=s);const i=[];return i.push({tag:"span",attributes:o,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ro}=tt;function Lo(e){const t=e[0],n=e[1],[r]=e.slice(4);let o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(eo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(eo.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(eo.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:o}}const Hp={found:!1,width:512,height:512};function Up(e,t){!Tl&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ro(e,t){let n=t;return t==="fa"&&N.styleDefault!==null&&(t=It()),new Promise((r,o)=>{if(n==="fa"){const s=jl(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&ro[t]&&ro[t][e]){const s=ro[t][e];return r(Lo(s))}Up(e,t),r(v(v({},Hp),{},{icon:N.showMissingIcons&&e?Et("missingIconAbstract")||{}:{}}))})}const Ri=()=>{},Oo=N.measurePerformance&&Vn&&Vn.mark&&Vn.measure?Vn:{mark:Ri,measure:Ri},gn='FA "6.7.2"',Yp=e=>(Oo.mark("".concat(gn," ").concat(e," begins")),()=>Wl(e)),Wl=e=>{Oo.mark("".concat(gn," ").concat(e," ends")),Oo.measure("".concat(gn," ").concat(e),"".concat(gn," ").concat(e," begins"),"".concat(gn," ").concat(e," ends"))};var Cs={begin:Yp,end:Wl};const sr=()=>{};function Oi(e){return typeof(e.getAttribute?e.getAttribute(Wt):null)=="string"}function Xp(e){const t=e.getAttribute?e.getAttribute(bs):null,n=e.getAttribute?e.getAttribute(vs):null;return t&&n}function Gp(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Vp(){return N.autoReplaceSvg===!0?ir.replace:ir[N.autoReplaceSvg]||ir.replace}function qp(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function Kp(e){return ue.createElement(e)}function Hl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?qp:Kp}=t;if(typeof e=="string")return ue.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(Hl(s,{ceFn:n}))}),r}function Qp(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ir={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Hl(n),t)}),t.getAttribute(Wt)===null&&N.keepOriginalSource){let n=ue.createComment(Qp(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ks(t).indexOf(N.replacementClass))return ir.replace(e);const r=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,a)=>(a===N.replacementClass||a.match(r)?i.toSvg.push(a):i.toNode.push(a),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const o=n.map(s=>zn(s)).join(`
`);t.setAttribute(Wt,""),t.innerHTML=o}};function $i(e){e()}function Ul(e,t){const n=typeof t=="function"?t:sr;if(e.length===0)n();else{let r=$i;N.mutateApproach===ep&&(r=_t.requestAnimationFrame||$i),r(()=>{const o=Vp(),s=Cs.begin("mutate");e.map(o),s(),n()})}}let Ps=!1;function Yl(){Ps=!0}function $o(){Ps=!1}let vr=null;function Fi(e){if(!Ti||!N.observeMutations)return;const{treeCallback:t=sr,nodeCallback:n=sr,pseudoElementsCallback:r=sr,observeMutationsRoot:o=ue}=e;vr=new Ti(s=>{if(Ps)return;const i=It();an(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Oi(a.addedNodes[0])&&(N.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&N.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Oi(a.target)&&~ip.indexOf(a.attributeName))if(a.attributeName==="class"&&Xp(a.target)){const{prefix:l,iconName:u}=jr(ks(a.target));a.target.setAttribute(bs,l||i),u&&a.target.setAttribute(vs,u)}else Gp(a.target)&&n(a.target)})}),bt&&vr.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Jp(){vr&&vr.disconnect()}function Zp(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,o)=>{const s=o.split(":"),i=s[0],a=s.slice(1);return i&&a.length>0&&(r[i]=a.join(":").trim()),r},{})),n}function em(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let o=jr(ks(e));return o.prefix||(o.prefix=It()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Ap(o.prefix,e.innerText)||Ts(o.prefix,Eo(e.innerText))),!o.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function tm(e){const t=an(e.attributes).reduce((o,s)=>(o.name!=="class"&&o.name!=="style"&&(o[s.name]=s.value),o),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function nm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ji(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=em(e),s=tm(e),i=Mo("parseNodeAttributes",{},e);let a=t.styleParser?Zp(e):[];return v({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:s}},i)}const{styles:rm}=tt;function Xl(e){const t=N.autoReplaceSvg==="nest"?ji(e,{styleParser:!1}):ji(e);return~t.extra.classes.indexOf(Cl)?Et("generateLayersText",e,t):Et("generateSvgReplacementMutation",e,t)}function om(){return[...Fh,...To]}function Bi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();const n=ue.documentElement.classList,r=c=>n.add("".concat(Pi,"-").concat(c)),o=c=>n.remove("".concat(Pi,"-").concat(c)),s=N.autoFetchSvg?om():vl.concat(Object.keys(rm));s.includes("fa")||s.push("fa");const i=[".".concat(Cl,":not([").concat(Wt,"])")].concat(s.map(c=>".".concat(c,":not([").concat(Wt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let a=[];try{a=an(e.querySelectorAll(i))}catch{}if(a.length>0)r("pending"),o("complete");else return Promise.resolve();const l=Cs.begin("onTree"),u=a.reduce((c,d)=>{try{const p=Xl(d);p&&c.push(p)}catch(p){Tl||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise((c,d)=>{Promise.all(u).then(p=>{Ul(p,()=>{r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),l(),c()})}).catch(p=>{l(),d(p)})})}function sm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xl(e).then(n=>{n&&Ul([n],t)})}function im(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:No(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:No(o||{})),e(r,v(v({},n),{},{mask:o}))}}const am=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,symbol:r=!1,mask:o=null,maskId:s=null,title:i=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:m}=e;return Br(v({type:"icon"},e),()=>(Ht("beforeDOMElementCreation",{iconDefinition:e,params:t}),N.autoA11y&&(i?u["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(a||Rn()):(u["aria-hidden"]="true",u.focusable="false")),As({icons:{main:Lo(m),mask:o?Lo(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:v(v({},et),n),symbol:r,title:i,maskId:s,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var lm={mixout(){return{icon:im(am)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Bi,e.nodeCallback=sm,e}}},provides(e){e.i2svg=function(t){const{node:n=ue,callback:r=()=>{}}=t;return Bi(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:o,titleId:s,prefix:i,transform:a,symbol:l,mask:u,maskId:c,extra:d}=n;return new Promise((p,m)=>{Promise.all([Ro(r,i),u.iconName?Ro(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[A,$]=P;p([t,As({icons:{main:A,mask:$},prefix:i,iconName:r,transform:a,symbol:l,maskId:c,title:o,titleId:s,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:o,transform:s,styles:i}=t;const a=$r(i);a.length>0&&(r.style=a);let l;return ws(s)&&(l=Et("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(l||o.icon),{children:n,attributes:r}}}},cm={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Br({type:"layer"},()=>{Ht("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(o=>{Array.isArray(o)?o.map(s=>{r=r.concat(s.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},um={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:s={}}=t;return Br({type:"counter",content:e},()=>(Ht("beforeDOMElementCreation",{content:e,params:t}),Wp({content:e.toString(),title:n,extra:{attributes:o,styles:s,classes:["".concat(N.cssPrefix,"-layers-counter"),...r]}})))}}}},fm={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,title:r=null,classes:o=[],attributes:s={},styles:i={}}=t;return Br({type:"text",content:e},()=>(Ht("beforeDOMElementCreation",{content:e,params:t}),Li({content:e,transform:v(v({},et),n),title:r,extra:{attributes:s,styles:i,classes:["".concat(N.cssPrefix,"-layers-text"),...o]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:o,extra:s}=n;let i=null,a=null;if(yl){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();i=u.width/l,a=u.height/l}return N.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Li({content:t.innerHTML,width:i,height:a,transform:o,title:r,extra:s,watchable:!0})])}}};const dm=new RegExp('"',"ug"),zi=[1105920,1112319],Wi=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),Rh),Jh),Yh),Fo=Object.keys(Wi).reduce((e,t)=>(e[t.toLowerCase()]=Wi[t],e),{}),hm=Object.keys(Fo).reduce((e,t)=>{const n=Fo[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function pm(e){const t=e.replace(dm,""),n=xp(t,0),r=n>=zi[0]&&n<=zi[1],o=t.length===2?t[0]===t[1]:!1;return{value:Eo(o?t[0]:t),isSecondary:r||o}}function mm(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),o=isNaN(r)?"normal":r;return(Fo[n]||{})[o]||hm[n]}function Hi(e,t){const n="".concat(Zh).concat(t.replace(":","-"));return new Promise((r,o)=>{if(e.getAttribute(n)!==null)return r();const i=an(e.children).filter(p=>p.getAttribute(Co)===t)[0],a=_t.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(op),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let m=mm(l,c);const{value:P,isSecondary:A}=pm(p),$=u[0].startsWith("FontAwesome");let w=Ts(m,P),S=w;if($){const L=Cp(P);L.iconName&&L.prefix&&(w=L.iconName,m=L.prefix)}if(w&&!A&&(!i||i.getAttribute(bs)!==m||i.getAttribute(vs)!==S)){e.setAttribute(n,S),i&&e.removeChild(i);const L=nm(),{extra:_}=L;_.attributes[Co]=t,Ro(w,m).then(j=>{const re=As(v(v({},L),{},{icons:{main:j,mask:Bl()},prefix:m,iconName:S,extra:_,watchable:!0})),Z=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Z,e.firstChild):e.appendChild(Z),Z.outerHTML=re.map(de=>zn(de)).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function gm(e){return Promise.all([Hi(e,"::before"),Hi(e,"::after")])}function ym(e){return e.parentNode!==document.head&&!~tp.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Co)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ui(e){if(bt)return new Promise((t,n)=>{const r=an(e.querySelectorAll("*")).filter(ym).map(gm),o=Cs.begin("searchPseudoElements");Yl(),Promise.all(r).then(()=>{o(),$o(),t()}).catch(()=>{o(),$o(),n()})})}var bm={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ui,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=ue}=t;N.searchPseudoElements&&Ui(n)}}};let Yi=!1;var vm={mixout(){return{dom:{unwatch(){Yl(),Yi=!0}}}},hooks(){return{bootstrap(){Fi(Mo("mutationObserverCallbacks",{}))},noAuto(){Jp()},watch(e){const{observeMutationsRoot:t}=e;Yi?$o():Fi(Mo("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Xi=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),s=o[0];let i=o.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var xm={mixout(){return{parse:{transform:e=>Xi(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Xi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:o,iconWidth:s}=t;const i={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:i,inner:c,path:d};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),p.path)}]}]}}}};const oo={x:0,y:0,width:"100%",height:"100%"};function Gi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function km(e){return e.tag==="g"?e.children:[e]}var wm={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?jr(n.split(" ").map(o=>o.trim())):Bl();return r.prefix||(r.prefix=It()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:o,mask:s,maskId:i,transform:a}=t;const{width:l,icon:u}=o,{width:c,icon:d}=s,p=pp({transform:a,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:v(v({},oo),{},{fill:"white"})},P=u.children?{children:u.children.map(Gi)}:{},A={tag:"g",attributes:v({},p.inner),children:[Gi(v({tag:u.tag,attributes:v(v({},u.attributes),p.path)},P))]},$={tag:"g",attributes:v({},p.outer),children:[A]},w="mask-".concat(i||Rn()),S="clip-".concat(i||Rn()),L={tag:"mask",attributes:v(v({},oo),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,$]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:km(d)},L]};return n.push(_,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},oo)}),{children:n,attributes:r}}}},Sm={provides(e){let t=!1;_t.matchMedia&&(t=_t.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=v(v({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:v(v({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Tm={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Am=[yp,lm,cm,um,fm,bm,vm,xm,wm,Sm,Tm];Rp(Am,{mixoutsTo:je});je.noAuto;je.config;const Cm=je.library;je.dom;const jo=je.parse;je.findIconDefinition;je.toHtml;const Pm=je.icon;je.layer;je.text;je.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _m={prefix:"fas",iconName:"strikethrough",icon:[512,512,[],"f0cc","M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"]},Im={prefix:"fas",iconName:"bold",icon:[384,512,[],"f032","M0 64C0 46.3 14.3 32 32 32l48 0 16 0 128 0c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128L96 480l-16 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-160L48 96 32 96C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64L112 96l0 128 112 0zM112 288l0 128 144 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-112 0z"]},Em={prefix:"fas",iconName:"italic",icon:[384,512,[],"f033","M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0L160 416l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0L224 96l-64 0c-17.7 0-32-14.3-32-32z"]},Dm={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Mm={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},Nm={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Lm={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},Rm={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Om={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},$m={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};function Vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vi(Object(n),!0).forEach(function(r){Me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jm(e){var t=Fm(e,"string");return typeof t=="symbol"?t:t+""}function xr(e){"@babel/helpers - typeof";return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr(e)}function Me(e,t,n){return t=jm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bm(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zm(e,t){if(e==null)return{};var n=Bm(e,t),r,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gl={exports:{}};(function(e){(function(t){var n=function(w,S,L){if(!u(S)||d(S)||p(S)||m(S)||l(S))return S;var _,j=0,re=0;if(c(S))for(_=[],re=S.length;j<re;j++)_.push(n(w,S[j],L));else{_={};for(var Z in S)Object.prototype.hasOwnProperty.call(S,Z)&&(_[w(Z,L)]=n(w,S[Z],L))}return _},r=function(w,S){S=S||{};var L=S.separator||"_",_=S.split||/(?=[A-Z])/;return w.split(_).join(L)},o=function(w){return P(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var S=o(w);return S.substr(0,1).toUpperCase()+S.substr(1)},i=function(w,S){return r(w,S).toLowerCase()},a=Object.prototype.toString,l=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},c=function(w){return a.call(w)=="[object Array]"},d=function(w){return a.call(w)=="[object Date]"},p=function(w){return a.call(w)=="[object RegExp]"},m=function(w){return a.call(w)=="[object Boolean]"},P=function(w){return w=w-0,w===w},A=function(w,S){var L=S&&"process"in S?S.process:S;return typeof L!="function"?w:function(_,j){return L(_,w,j)}},$={camelize:o,decamelize:i,pascalize:s,depascalize:i,camelizeKeys:function(w,S){return n(A(o,S),w)},decamelizeKeys:function(w,S){return n(A(i,S),w,S)},pascalizeKeys:function(w,S){return n(A(s,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Wm)})(Gl);var Hm=Gl.exports,Um=["class","style"];function Ym(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=Hm.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[o]=s,t},{})}function Xm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Vl(l)}),o=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Xm(c);break;case"style":l.style=Ym(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,i=s===void 0?{}:s,a=zm(n,Um);return Za(e.tag,lt(lt(lt({},t),{},{class:o.class,style:lt(lt({},o.style),i)},o.attrs),a),r)}var ql=!1;try{ql=!0}catch{}function Gm(){if(!ql&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function so(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Me({},e,t):{}}function Vm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Me(Me(Me(Me(Me(Me(Me(Me(Me(Me(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),Me(Me(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function qi(e){if(e&&xr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jo.icon)return jo.icon(e);if(e===null)return null;if(xr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var qm=Vc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,o=Se(function(){return qi(t.icon)}),s=Se(function(){return so("classes",Vm(t))}),i=Se(function(){return so("transform",typeof t.transform=="string"?jo.transform(t.transform):t.transform)}),a=Se(function(){return so("mask",qi(t.mask))}),l=Se(function(){return Pm(o.value,lt(lt(lt(lt({},s.value),i.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Bt(l,function(c){if(!c)return Gm("Could not find one or more icon(s)",o.value,a.value)},{immediate:!0});var u=Se(function(){return l.value?Vl(l.value.abstract[0],{},r):null});return function(){return u.value}}});Cm.add(Lm,Mm,$m,Im,Em,_m,Dm,Rm,Om,Nm);const Kl=Ef(Ah);Kl.component("font-awesome-icon",qm);Kl.mount("#app");
