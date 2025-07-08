(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const J={},Dt=[],Xe=()=>{},ki=()=>!1,On=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ar=e=>e.startsWith("onUpdate:"),he=Object.assign,Pr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xi=Object.prototype.hasOwnProperty,Y=(e,t)=>xi.call(e,t),$=Array.isArray,It=e=>Fn(e)==="[object Map]",Ks=e=>Fn(e)==="[object Set]",O=e=>typeof e=="function",ue=e=>typeof e=="string",ht=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Qs=e=>(oe(e)||O(e))&&O(e.then)&&O(e.catch),Js=Object.prototype.toString,Fn=e=>Js.call(e),wi=e=>Fn(e).slice(8,-1),Zs=e=>Fn(e)==="[object Object]",Dr=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vi=/-(\w)/g,ut=jn(e=>e.replace(vi,(t,n)=>n?n.toUpperCase():"")),Si=/\B([A-Z])/g,St=jn(e=>e.replace(Si,"-$1").toLowerCase()),eo=jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=jn(e=>e?`on${eo(e)}`:""),ct=(e,t)=>!Object.is(e,t),bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ur=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},fr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ti=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let is;const Wn=()=>is||(is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ir(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ue(s)?Pi(s):Ir(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ue(e)||oe(e))return e}const Ci=/;(?![^(]*\))/g,_i=/:([^]+)/,Ai=/\/\*[^]*?\*\//g;function Pi(e){const t={};return e.replace(Ai,"").split(Ci).forEach(n=>{if(n){const s=n.split(_i);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function wt(e){let t="";if(ue(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const s=wt(e[n]);s&&(t+=s+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Di="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ii=_r(Di);function to(e){return!!e||e===""}const no=e=>!!(e&&e.__v_isRef===!0),Me=e=>ue(e)?e:e==null?"":$(e)||oe(e)&&(e.toString===Js||!O(e.toString))?no(e)?Me(e.value):JSON.stringify(e,ro,2):String(e),ro=(e,t)=>no(t)?ro(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[Zn(s,o)+" =>"]=r,n),{})}:Ks(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zn(n))}:ht(t)?Zn(t):oe(t)&&!$(t)&&!Zs(t)?String(t):t,Zn=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Ri{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){this._on>0&&--this._on===0&&(Te=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ei(){return Te}let ne;const er=new WeakSet;class so{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,er.has(this)&&(er.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,as(this),ao(this);const t=ne,n=Le;ne=this,Le=!0;try{return this.fn()}finally{lo(this),ne=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$r(t);this.deps=this.depsTail=void 0,as(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?er.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dr(this)&&this.run()}get dirty(){return dr(this)}}let oo=0,Xt,qt;function io(e,t=!1){if(e.flags|=8,t){e.next=qt,qt=e;return}e.next=Xt,Xt=e}function Rr(){oo++}function Er(){if(--oo>0)return;if(qt){let t=qt;for(qt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xt;){let t=Xt;for(Xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ao(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),$r(s),$i(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function dr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(co(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function co(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zt)||(e.globalVersion=Zt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dr(e))))return;e.flags|=2;const t=e.dep,n=ne,s=Le;ne=e,Le=!0;try{ao(e);const r=e.fn(e._value);(t.version===0||ct(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ne=n,Le=s,lo(e),e.flags&=-3}}function $r(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)$r(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const uo=[];function nt(){uo.push(Le),Le=!1}function rt(){const e=uo.pop();Le=e===void 0?!0:e}function as(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Zt=0;class Mi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Le||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Mi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,fo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(t){this.version++,Zt++,this.notify(t)}notify(t){Rr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Er()}}}function fo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)fo(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const hr=new WeakMap,xt=Symbol(""),pr=Symbol(""),en=Symbol("");function ge(e,t,n){if(Le&&ne){let s=hr.get(e);s||hr.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Mr),r.map=s,r.key=n),r.track()}}function Qe(e,t,n,s,r,o){const i=hr.get(e);if(!i){Zt++;return}const a=l=>{l&&l.trigger()};if(Rr(),t==="clear")i.forEach(a);else{const l=$(e),f=l&&Dr(n);if(l&&n==="length"){const c=Number(s);i.forEach((h,g)=>{(g==="length"||g===en||!ht(g)&&g>=c)&&a(h)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),f&&a(i.get(en)),t){case"add":l?f&&a(i.get("length")):(a(i.get(xt)),It(e)&&a(i.get(pr)));break;case"delete":l||(a(i.get(xt)),It(e)&&a(i.get(pr)));break;case"set":It(e)&&a(i.get(xt));break}}Er()}function Ct(e){const t=q(e);return t===e?t:(ge(t,"iterate",en),Ee(e)?t:t.map(de))}function Hn(e){return ge(e=q(e),"iterate",en),e}const Li={__proto__:null,[Symbol.iterator](){return tr(this,Symbol.iterator,de)},concat(...e){return Ct(this).concat(...e.map(t=>$(t)?Ct(t):t))},entries(){return tr(this,"entries",e=>(e[1]=de(e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,n=>n.map(de),arguments)},find(e,t){return Ge(this,"find",e,t,de,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,de,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return nr(this,"includes",e)},indexOf(...e){return nr(this,"indexOf",e)},join(e){return Ct(this).join(e)},lastIndexOf(...e){return nr(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return ls(this,"reduce",e,t)},reduceRight(e,...t){return ls(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return Ct(this).toReversed()},toSorted(e){return Ct(this).toSorted(e)},toSpliced(...e){return Ct(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return tr(this,"values",de)}};function tr(e,t,n){const s=Hn(e),r=s[t]();return s!==e&&!Ee(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Ni=Array.prototype;function Ge(e,t,n,s,r,o){const i=Hn(e),a=i!==e&&!Ee(e),l=i[t];if(l!==Ni[t]){const h=l.apply(e,o);return a?de(h):h}let f=n;i!==e&&(a?f=function(h,g){return n.call(this,de(h),g,e)}:n.length>2&&(f=function(h,g){return n.call(this,h,g,e)}));const c=l.call(i,f,s);return a&&r?r(c):c}function ls(e,t,n,s){const r=Hn(e);let o=n;return r!==e&&(Ee(e)?n.length>3&&(o=function(i,a,l){return n.call(this,i,a,l,e)}):o=function(i,a,l){return n.call(this,i,de(a),l,e)}),r[t](o,...s)}function nr(e,t,n){const s=q(e);ge(s,"iterate",en);const r=s[t](...n);return(r===-1||r===!1)&&Or(n[0])?(n[0]=q(n[0]),s[t](...n)):r}function Ft(e,t,n=[]){nt(),Rr();const s=q(e)[t].apply(e,n);return Er(),rt(),s}const Bi=_r("__proto__,__v_isRef,__isVue"),ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Oi(e){ht(e)||(e=String(e));const t=q(this);return ge(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?Yi:bo:o?yo:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=$(t);if(!r){let l;if(i&&(l=Li[n]))return l;if(n==="hasOwnProperty")return Oi}const a=Reflect.get(t,n,ye(t)?t:s);return(ht(n)?ho.has(n):Bi(n))||(r||ge(t,"get",n),o)?a:ye(a)?i&&Dr(n)?a:a.value:oe(a)?r?ko(a):Nr(a):a}}class go extends po{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const l=ft(o);if(!Ee(s)&&!ft(s)&&(o=q(o),s=q(s)),!$(t)&&ye(o)&&!ye(s))return l?!1:(o.value=s,!0)}const i=$(t)&&Dr(n)?Number(n)<t.length:Y(t,n),a=Reflect.set(t,n,s,ye(t)?t:r);return t===q(r)&&(i?ct(s,o)&&Qe(t,"set",n,s):Qe(t,"add",n,s)),a}deleteProperty(t,n){const s=Y(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Qe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!ho.has(n))&&ge(t,"has",n),s}ownKeys(t){return ge(t,"iterate",$(t)?"length":xt),Reflect.ownKeys(t)}}class Fi extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ji=new go,Wi=new Fi,Hi=new go(!0);const gr=e=>e,hn=e=>Reflect.getPrototypeOf(e);function Ui(e,t,n){return function(...s){const r=this.__v_raw,o=q(r),i=It(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=r[e](...s),c=n?gr:t?_n:de;return!t&&ge(o,"iterate",l?pr:xt),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:a?[c(h[0]),c(h[1])]:c(h),done:g}},[Symbol.iterator](){return this}}}}function pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zi(e,t){const n={get(r){const o=this.__v_raw,i=q(o),a=q(r);e||(ct(r,a)&&ge(i,"get",r),ge(i,"get",a));const{has:l}=hn(i),f=t?gr:e?_n:de;if(l.call(i,r))return f(o.get(r));if(l.call(i,a))return f(o.get(a));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&ge(q(r),"iterate",xt),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=q(o),a=q(r);return e||(ct(r,a)&&ge(i,"has",r),ge(i,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const i=this,a=i.__v_raw,l=q(a),f=t?gr:e?_n:de;return!e&&ge(l,"iterate",xt),a.forEach((c,h)=>r.call(o,f(c),f(h),i))}};return he(n,e?{add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear")}:{add(r){!t&&!Ee(r)&&!ft(r)&&(r=q(r));const o=q(this);return hn(o).has.call(o,r)||(o.add(r),Qe(o,"add",r,r)),this},set(r,o){!t&&!Ee(o)&&!ft(o)&&(o=q(o));const i=q(this),{has:a,get:l}=hn(i);let f=a.call(i,r);f||(r=q(r),f=a.call(i,r));const c=l.call(i,r);return i.set(r,o),f?ct(o,c)&&Qe(i,"set",r,o):Qe(i,"add",r,o),this},delete(r){const o=q(this),{has:i,get:a}=hn(o);let l=i.call(o,r);l||(r=q(r),l=i.call(o,r)),a&&a.call(o,r);const f=o.delete(r);return l&&Qe(o,"delete",r,void 0),f},clear(){const r=q(this),o=r.size!==0,i=r.clear();return o&&Qe(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ui(r,e,t)}),n}function Lr(e,t){const n=zi(e,t);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Y(n,r)&&r in s?n:s,r,o)}const Xi={get:Lr(!1,!1)},qi={get:Lr(!1,!0)},Gi={get:Lr(!0,!1)};const mo=new WeakMap,yo=new WeakMap,bo=new WeakMap,Yi=new WeakMap;function Vi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ki(e){return e.__v_skip||!Object.isExtensible(e)?0:Vi(wi(e))}function Nr(e){return ft(e)?e:Br(e,!1,ji,Xi,mo)}function Qi(e){return Br(e,!1,Hi,qi,yo)}function ko(e){return Br(e,!0,Wi,Gi,bo)}function Br(e,t,n,s,r){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ki(e);if(o===0)return e;const i=r.get(e);if(i)return i;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Rt(e){return ft(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function Or(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ji(e){return!Y(e,"__v_skip")&&Object.isExtensible(e)&&ur(e,"__v_skip",!0),e}const de=e=>oe(e)?Nr(e):e,_n=e=>oe(e)?ko(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function fe(e){return Zi(e,!1)}function Zi(e,t){return ye(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new Mr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:q(t),this._value=n?t:de(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ee(t)||ft(t);t=s?t:q(t),ct(t,n)&&(this._rawValue=t,this._value=s?t:de(t),this.dep.trigger())}}function Et(e){return ye(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:Et(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ye(r)&&!ye(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function xo(e){return Rt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Mr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return co(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ra(e,t,n=!1){let s,r;return O(e)?s=e:(s=e.get,r=e.set),new na(s,r,n)}const gn={},An=new WeakMap;let bt;function sa(e,t=!1,n=bt){if(n){let s=An.get(n);s||An.set(n,s=[]),s.push(e)}}function oa(e,t,n=J){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:a,call:l}=n,f=D=>r?D:Ee(D)||r===!1||r===0?Je(D,1):Je(D);let c,h,g,x,C=!1,P=!1;if(ye(e)?(h=()=>e.value,C=Ee(e)):Rt(e)?(h=()=>f(e),C=!0):$(e)?(P=!0,C=e.some(D=>Rt(D)||Ee(D)),h=()=>e.map(D=>{if(ye(D))return D.value;if(Rt(D))return f(D);if(O(D))return l?l(D,2):D()})):O(e)?t?h=l?()=>l(e,2):e:h=()=>{if(g){nt();try{g()}finally{rt()}}const D=bt;bt=c;try{return l?l(e,3,[x]):e(x)}finally{bt=D}}:h=Xe,t&&r){const D=h,G=r===!0?1/0:r;h=()=>Je(D(),G)}const re=Ei(),j=()=>{c.stop(),re&&re.active&&Pr(re.effects,c)};if(o&&t){const D=t;t=(...G)=>{D(...G),j()}}let U=P?new Array(e.length).fill(gn):gn;const z=D=>{if(!(!(c.flags&1)||!c.dirty&&!D))if(t){const G=c.run();if(r||C||(P?G.some((ie,ae)=>ct(ie,U[ae])):ct(G,U))){g&&g();const ie=bt;bt=c;try{const ae=[G,U===gn?void 0:P&&U[0]===gn?[]:U,x];U=G,l?l(t,3,ae):t(...ae)}finally{bt=ie}}}else c.run()};return a&&a(z),c=new so(h),c.scheduler=i?()=>i(z,!1):z,x=D=>sa(D,!1,c),g=c.onStop=()=>{const D=An.get(c);if(D){if(l)l(D,4);else for(const G of D)G();An.delete(c)}},t?s?z(!0):U=c.run():i?i(z.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function Je(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))Je(e.value,t,n);else if($(e))for(let s=0;s<e.length;s++)Je(e[s],t,n);else if(Ks(e)||It(e))e.forEach(s=>{Je(s,t,n)});else if(Zs(e)){for(const s in e)Je(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Je(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,n,s){try{return s?e(...s):e()}catch(r){Un(r,t,n)}}function Ne(e,t,n,s){if(O(e)){const r=an(e,t,n,s);return r&&Qs(r)&&r.catch(o=>{Un(o,t,n)}),r}if($(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Ne(e[o],t,n,s));return r}}function Un(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||J;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,l,f)===!1)return}a=a.parent}if(o){nt(),an(o,null,10,[e,l,f]),rt();return}}ia(e,n,r,s,i)}function ia(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const ke=[];let Ue=-1;const $t=[];let it=null,At=0;const wo=Promise.resolve();let Pn=null;function Dn(e){const t=Pn||wo;return e?t.then(this?e.bind(this):e):t}function aa(e){let t=Ue+1,n=ke.length;for(;t<n;){const s=t+n>>>1,r=ke[s],o=tn(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function Fr(e){if(!(e.flags&1)){const t=tn(e),n=ke[ke.length-1];!n||!(e.flags&2)&&t>=tn(n)?ke.push(e):ke.splice(aa(t),0,e),e.flags|=1,vo()}}function vo(){Pn||(Pn=wo.then(To))}function la(e){$(e)?$t.push(...e):it&&e.id===-1?it.splice(At+1,0,e):e.flags&1||($t.push(e),e.flags|=1),vo()}function cs(e,t,n=Ue+1){for(;n<ke.length;n++){const s=ke[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function So(e){if($t.length){const t=[...new Set($t)].sort((n,s)=>tn(n)-tn(s));if($t.length=0,it){it.push(...t);return}for(it=t,At=0;At<it.length;At++){const n=it[At];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}it=null,At=0}}const tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function To(e){try{for(Ue=0;Ue<ke.length;Ue++){const t=ke[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),an(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ue<ke.length;Ue++){const t=ke[Ue];t&&(t.flags&=-2)}Ue=-1,ke.length=0,So(),Pn=null,(ke.length||$t.length)&&To()}}let Pe=null,Co=null;function In(e){const t=Pe;return Pe=e,Co=e&&e.type.__scopeId||null,t}function Gt(e,t=Pe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ks(-1);const o=In(t);let i;try{i=e(...r)}finally{In(o),s._d&&ks(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function ca(e,t){if(Pe===null)return e;const n=Yn(Pe),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,a,l=J]=t[r];o&&(O(o)&&(o={mounted:o,updated:o}),o.deep&&Je(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function pt(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let l=a.dir[s];l&&(nt(),Ne(l,n,8,[e.el,a,e,t]),rt())}}const ua=Symbol("_vte"),_o=e=>e.__isTeleport,at=Symbol("_leaveCb"),mn=Symbol("_enterCb");function fa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ln(()=>{e.isMounted=!0}),jr(()=>{e.isUnmounting=!0}),e}const Re=[Function,Array],Ao={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},Po=e=>{const t=e.subTree;return t.component?Po(t.component):t},da={name:"BaseTransition",props:Ao,setup(e,{slots:t}){const n=il(),s=fa();return()=>{const r=t.default&&Ro(t.default(),!0);if(!r||!r.length)return;const o=Do(r),i=q(e),{mode:a}=i;if(s.isLeaving)return rr(o);const l=us(o);if(!l)return rr(o);let f=mr(l,i,s,n,h=>f=h);l.type!==xe&&nn(l,f);let c=n.subTree&&us(n.subTree);if(c&&c.type!==xe&&!kt(l,c)&&Po(n).type!==xe){let h=mr(c,i,s,n);if(nn(c,h),a==="out-in"&&l.type!==xe)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,c=void 0},rr(o);a==="in-out"&&l.type!==xe?h.delayLeave=(g,x,C)=>{const P=Io(s,c);P[String(c.key)]=c,g[at]=()=>{x(),g[at]=void 0,delete f.delayedLeave,c=void 0},f.delayedLeave=()=>{C(),delete f.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Do(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==xe){t=n;break}}return t}const ha=da;function Io(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function mr(e,t,n,s,r){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:g,onLeave:x,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:re,onAppear:j,onAfterAppear:U,onAppearCancelled:z}=t,D=String(e.key),G=Io(n,e),ie=(F,X)=>{F&&Ne(F,s,9,X)},ae=(F,X)=>{const se=X[1];ie(F,X),$(F)?F.every(A=>A.length<=1)&&se():F.length<=1&&se()},pe={mode:i,persisted:a,beforeEnter(F){let X=l;if(!n.isMounted)if(o)X=re||l;else return;F[at]&&F[at](!0);const se=G[D];se&&kt(e,se)&&se.el[at]&&se.el[at](),ie(X,[F])},enter(F){let X=f,se=c,A=h;if(!n.isMounted)if(o)X=j||f,se=U||c,A=z||h;else return;let ee=!1;const I=F[mn]=L=>{ee||(ee=!0,L?ie(A,[F]):ie(se,[F]),pe.delayedLeave&&pe.delayedLeave(),F[mn]=void 0)};X?ae(X,[F,I]):I()},leave(F,X){const se=String(e.key);if(F[mn]&&F[mn](!0),n.isUnmounting)return X();ie(g,[F]);let A=!1;const ee=F[at]=I=>{A||(A=!0,X(),I?ie(P,[F]):ie(C,[F]),F[at]=void 0,G[se]===e&&delete G[se])};G[se]=e,x?ae(x,[F,ee]):ee()},clone(F){const X=mr(F,t,n,s,r);return r&&r(X),X}};return pe}function rr(e){if(zn(e))return e=dt(e),e.children=null,e}function us(e){if(!zn(e))return _o(e.type)&&e.children?Do(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&O(n.default))return n.default()}}function nn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ro(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Ce?(i.patchFlag&128&&r++,s=s.concat(Ro(i.children,t,a))):(t||i.type!==xe)&&s.push(a!=null?dt(i,{key:a}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Eo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Yt(e,t,n,s,r=!1){if($(e)){e.forEach((C,P)=>Yt(C,t&&($(t)?t[P]:t),n,s,r));return}if(Vt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Yt(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Yn(s.component):s.el,i=r?null:o,{i:a,r:l}=e,f=t&&t.r,c=a.refs===J?a.refs={}:a.refs,h=a.setupState,g=q(h),x=h===J?()=>!1:C=>Y(g,C);if(f!=null&&f!==l&&(ue(f)?(c[f]=null,x(f)&&(h[f]=null)):ye(f)&&(f.value=null)),O(l))an(l,a,12,[i,c]);else{const C=ue(l),P=ye(l);if(C||P){const re=()=>{if(e.f){const j=C?x(l)?h[l]:c[l]:l.value;r?$(j)&&Pr(j,o):$(j)?j.includes(o)||j.push(o):C?(c[l]=[o],x(l)&&(h[l]=c[l])):(l.value=[o],e.k&&(c[e.k]=l.value))}else C?(c[l]=i,x(l)&&(h[l]=i)):P&&(l.value=i,e.k&&(c[e.k]=i))};i?(re.id=-1,Ae(re,n)):re()}}}Wn().requestIdleCallback;Wn().cancelIdleCallback;const Vt=e=>!!e.type.__asyncLoader,zn=e=>e.type.__isKeepAlive;function pa(e,t){$o(e,"a",t)}function ga(e,t){$o(e,"da",t)}function $o(e,t,n=me){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Xn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)zn(r.parent.vnode)&&ma(s,t,n,r),r=r.parent}}function ma(e,t,n,s){const r=Xn(t,e,s,!0);Wr(()=>{Pr(s[t],r)},n)}function Xn(e,t,n=me,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{nt();const a=cn(n),l=Ne(t,n,e,i);return a(),rt(),l});return s?r.unshift(o):r.push(o),o}}const st=e=>(t,n=me)=>{(!sn||e==="sp")&&Xn(e,(...s)=>t(...s),n)},ya=st("bm"),ln=st("m"),Mo=st("bu"),ba=st("u"),jr=st("bum"),Wr=st("um"),ka=st("sp"),xa=st("rtg"),wa=st("rtc");function va(e,t=me){Xn("ec",e,t)}const Sa=Symbol.for("v-ndc");function Rn(e,t,n,s){let r;const o=n,i=$(e);if(i||ue(e)){const a=i&&Rt(e);let l=!1,f=!1;a&&(l=!Ee(e),f=ft(e),e=Hn(e)),r=new Array(e.length);for(let c=0,h=e.length;c<h;c++)r[c]=t(l?f?_n(de(e[c])):de(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o)}else if(oe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const c=a[l];r[l]=t(e[c],c,l,o)}}else r=[];return r}const yr=e=>e?ti(e)?Yn(e):yr(e.parent):null,Kt=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>No(e),$forceUpdate:e=>e.f||(e.f=()=>{Fr(e.update)}),$nextTick:e=>e.n||(e.n=Dn.bind(e.proxy)),$watch:e=>Xa.bind(e)}),sr=(e,t)=>e!==J&&!e.__isScriptSetup&&Y(e,t),Ta={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const x=i[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(sr(s,t))return i[t]=1,s[t];if(r!==J&&Y(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&Y(f,t))return i[t]=3,o[t];if(n!==J&&Y(n,t))return i[t]=4,n[t];br&&(i[t]=0)}}const c=Kt[t];let h,g;if(c)return t==="$attrs"&&ge(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==J&&Y(n,t))return i[t]=4,n[t];if(g=l.config.globalProperties,Y(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return sr(r,t)?(r[t]=n,!0):s!==J&&Y(s,t)?(s[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let a;return!!n[i]||e!==J&&Y(e,i)||sr(t,i)||(a=o[0])&&Y(a,i)||Y(s,i)||Y(Kt,i)||Y(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fs(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let br=!0;function Ca(e){const t=No(e),n=e.proxy,s=e.ctx;br=!1,t.beforeCreate&&ds(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:a,provide:l,inject:f,created:c,beforeMount:h,mounted:g,beforeUpdate:x,updated:C,activated:P,deactivated:re,beforeDestroy:j,beforeUnmount:U,destroyed:z,unmounted:D,render:G,renderTracked:ie,renderTriggered:ae,errorCaptured:pe,serverPrefetch:F,expose:X,inheritAttrs:se,components:A,directives:ee,filters:I}=t;if(f&&_a(f,s,null),i)for(const B in i){const W=i[B];O(W)&&(s[B]=W.bind(n))}if(r){const B=r.call(n,n);oe(B)&&(e.data=Nr(B))}if(br=!0,o)for(const B in o){const W=o[B],$e=O(W)?W.bind(n,n):O(W.get)?W.get.bind(n,n):Xe,Be=!O(W)&&O(W.set)?W.set.bind(n):Xe,qe=Ve({get:$e,set:Be});Object.defineProperty(s,B,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ie=>qe.value=Ie})}if(a)for(const B in a)Lo(a[B],s,n,B);if(l){const B=O(l)?l.call(n):l;Reflect.ownKeys(B).forEach(W=>{Ea(W,B[W])})}c&&ds(c,e,"c");function N(B,W){$(W)?W.forEach($e=>B($e.bind(n))):W&&B(W.bind(n))}if(N(ya,h),N(ln,g),N(Mo,x),N(ba,C),N(pa,P),N(ga,re),N(va,pe),N(wa,ie),N(xa,ae),N(jr,U),N(Wr,D),N(ka,F),$(X))if(X.length){const B=e.exposed||(e.exposed={});X.forEach(W=>{Object.defineProperty(B,W,{get:()=>n[W],set:$e=>n[W]=$e})})}else e.exposed||(e.exposed={});G&&e.render===Xe&&(e.render=G),se!=null&&(e.inheritAttrs=se),A&&(e.components=A),ee&&(e.directives=ee),F&&Eo(e)}function _a(e,t,n=Xe){$(e)&&(e=kr(e));for(const s in e){const r=e[s];let o;oe(r)?"default"in r?o=kn(r.from||s,r.default,!0):o=kn(r.from||s):o=kn(r),ye(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function ds(e,t,n){Ne($(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lo(e,t,n,s){let r=s.includes(".")?Vo(n,s):()=>n[s];if(ue(e)){const o=t[e];O(o)&&Lt(r,o)}else if(O(e))Lt(r,e.bind(n));else if(oe(e))if($(e))e.forEach(o=>Lo(o,t,n,s));else{const o=O(e.handler)?e.handler.bind(n):t[e.handler];O(o)&&Lt(r,o,e)}}function No(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(f=>En(l,f,i,!0)),En(l,t,i)),oe(t)&&o.set(t,l),l}function En(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&En(e,o,n,!0),r&&r.forEach(i=>En(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Aa[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Aa={data:hs,props:ps,emits:ps,methods:Ut,computed:Ut,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Ut,directives:Ut,watch:Da,provide:hs,inject:Pa};function hs(e,t){return t?e?function(){return he(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Pa(e,t){return Ut(kr(e),kr(t))}function kr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?he(Object.create(null),e,t):t}function ps(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:he(Object.create(null),fs(e),fs(t??{})):t}function Da(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const s in t)n[s]=be(e[s],t[s]);return n}function Bo(){return{app:null,config:{isNativeTag:ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ia=0;function Ra(e,t){return function(s,r=null){O(s)||(s=he({},s)),r!=null&&!oe(r)&&(r=null);const o=Bo(),i=new WeakSet,a=[];let l=!1;const f=o.app={_uid:Ia++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:hl,get config(){return o.config},set config(c){},use(c,...h){return i.has(c)||(c&&O(c.install)?(i.add(c),c.install(f,...h)):O(c)&&(i.add(c),c(f,...h))),f},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),f},component(c,h){return h?(o.components[c]=h,f):o.components[c]},directive(c,h){return h?(o.directives[c]=h,f):o.directives[c]},mount(c,h,g){if(!l){const x=f._ceVNode||le(s,r);return x.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),e(x,c,g),l=!0,f._container=c,c.__vue_app__=f,Yn(x.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Ne(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,h){return o.provides[c]=h,f},runWithContext(c){const h=Mt;Mt=f;try{return c()}finally{Mt=h}}};return f}}let Mt=null;function Ea(e,t){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[e]=t}}function kn(e,t,n=!1){const s=me||Pe;if(s||Mt){let r=Mt?Mt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const Oo={},Fo=()=>Object.create(Oo),jo=e=>Object.getPrototypeOf(e)===Oo;function $a(e,t,n,s=!1){const r={},o=Fo();e.propsDefaults=Object.create(null),Wo(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:Qi(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Ma(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,a=q(r),[l]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let g=c[h];if(qn(e.emitsOptions,g))continue;const x=t[g];if(l)if(Y(o,g))x!==o[g]&&(o[g]=x,f=!0);else{const C=ut(g);r[C]=xr(l,a,C,x,e,!1)}else x!==o[g]&&(o[g]=x,f=!0)}}}else{Wo(e,t,r,o)&&(f=!0);let c;for(const h in a)(!t||!Y(t,h)&&((c=St(h))===h||!Y(t,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=xr(l,a,h,void 0,e,!0)):delete r[h]);if(o!==a)for(const h in o)(!t||!Y(t,h))&&(delete o[h],f=!0)}f&&Qe(e.attrs,"set","")}function Wo(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(zt(l))continue;const f=t[l];let c;r&&Y(r,c=ut(l))?!o||!o.includes(c)?n[c]=f:(a||(a={}))[c]=f:qn(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=q(n),f=a||J;for(let c=0;c<o.length;c++){const h=o[c];n[h]=xr(r,l,h,f[h],e,!Y(f,h))}}return i}function xr(e,t,n,s,r,o){const i=e[n];if(i!=null){const a=Y(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&O(l)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const c=cn(r);s=f[n]=l.call(null,t),c()}}else s=l;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===St(n))&&(s=!0))}return s}const La=new WeakMap;function Ho(e,t,n=!1){const s=n?La:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},a=[];let l=!1;if(!O(e)){const c=h=>{l=!0;const[g,x]=Ho(h,t,!0);he(i,g),x&&a.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return oe(e)&&s.set(e,Dt),Dt;if($(o))for(let c=0;c<o.length;c++){const h=ut(o[c]);gs(h)&&(i[h]=J)}else if(o)for(const c in o){const h=ut(c);if(gs(h)){const g=o[c],x=i[h]=$(g)||O(g)?{type:g}:he({},g),C=x.type;let P=!1,re=!0;if($(C))for(let j=0;j<C.length;++j){const U=C[j],z=O(U)&&U.name;if(z==="Boolean"){P=!0;break}else z==="String"&&(re=!1)}else P=O(C)&&C.name==="Boolean";x[0]=P,x[1]=re,(P||Y(x,"default"))&&a.push(h)}}const f=[i,a];return oe(e)&&s.set(e,f),f}function gs(e){return e[0]!=="$"&&!zt(e)}const Hr=e=>e[0]==="_"||e==="$stable",Ur=e=>$(e)?e.map(ze):[ze(e)],Na=(e,t,n)=>{if(t._n)return t;const s=Gt((...r)=>Ur(t(...r)),n);return s._c=!1,s},Uo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Hr(r))continue;const o=e[r];if(O(o))t[r]=Na(r,o,s);else if(o!=null){const i=Ur(o);t[r]=()=>i}}},zo=(e,t)=>{const n=Ur(t);e.slots.default=()=>n},Xo=(e,t,n)=>{for(const s in t)(n||!Hr(s))&&(e[s]=t[s])},Ba=(e,t,n)=>{const s=e.slots=Fo();if(e.vnode.shapeFlag&32){const r=t.__;r&&ur(s,"__",r,!0);const o=t._;o?(Xo(s,t,n),n&&ur(s,"_",o,!0)):Uo(t,s)}else t&&zo(e,t)},Oa=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=J;if(s.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Xo(r,t,n):(o=!t.$stable,Uo(t,r)),i=t}else t&&(zo(e,t),i={default:1});if(o)for(const a in r)!Hr(a)&&i[a]==null&&delete r[a]},Ae=Ja;function Fa(e){return ja(e)}function ja(e,t){const n=Wn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:c,parentNode:h,nextSibling:g,setScopeId:x=Xe,insertStaticContent:C}=e,P=(u,d,p,b=null,m=null,y=null,S=void 0,v=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!kt(u,d)&&(b=dn(u),Ie(u,m,y,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:k,ref:E,shapeFlag:T}=d;switch(k){case Gn:re(u,d,p,b);break;case xe:j(u,d,p,b);break;case xn:u==null&&U(d,p,b,S);break;case Ce:A(u,d,p,b,m,y,S,v,w);break;default:T&1?G(u,d,p,b,m,y,S,v,w):T&6?ee(u,d,p,b,m,y,S,v,w):(T&64||T&128)&&k.process(u,d,p,b,m,y,S,v,w,Bt)}E!=null&&m?Yt(E,u&&u.ref,y,d||u,!d):E==null&&u&&u.ref!=null&&Yt(u.ref,null,y,u,!0)},re=(u,d,p,b)=>{if(u==null)s(d.el=a(d.children),p,b);else{const m=d.el=u.el;d.children!==u.children&&f(m,d.children)}},j=(u,d,p,b)=>{u==null?s(d.el=l(d.children||""),p,b):d.el=u.el},U=(u,d,p,b)=>{[u.el,u.anchor]=C(u.children,d,p,b,u.el,u.anchor)},z=({el:u,anchor:d},p,b)=>{let m;for(;u&&u!==d;)m=g(u),s(u,p,b),u=m;s(d,p,b)},D=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),r(u),u=p;r(d)},G=(u,d,p,b,m,y,S,v,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?ie(d,p,b,m,y,S,v,w):F(u,d,m,y,S,v,w)},ie=(u,d,p,b,m,y,S,v)=>{let w,k;const{props:E,shapeFlag:T,transition:R,dirs:M}=u;if(w=u.el=i(u.type,y,E&&E.is,E),T&8?c(w,u.children):T&16&&pe(u.children,w,null,b,m,or(u,y),S,v),M&&pt(u,null,b,"created"),ae(w,u,u.scopeId,S,b),E){for(const te in E)te!=="value"&&!zt(te)&&o(w,te,null,E[te],y,b);"value"in E&&o(w,"value",null,E.value,y),(k=E.onVnodeBeforeMount)&&We(k,b,u)}M&&pt(u,null,b,"beforeMount");const H=Wa(m,R);H&&R.beforeEnter(w),s(w,d,p),((k=E&&E.onVnodeMounted)||H||M)&&Ae(()=>{k&&We(k,b,u),H&&R.enter(w),M&&pt(u,null,b,"mounted")},m)},ae=(u,d,p,b,m)=>{if(p&&x(u,p),b)for(let y=0;y<b.length;y++)x(u,b[y]);if(m){let y=m.subTree;if(d===y||Qo(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=m.vnode;ae(u,S,S.scopeId,S.slotScopeIds,m.parent)}}},pe=(u,d,p,b,m,y,S,v,w=0)=>{for(let k=w;k<u.length;k++){const E=u[k]=v?lt(u[k]):ze(u[k]);P(null,E,d,p,b,m,y,S,v)}},F=(u,d,p,b,m,y,S)=>{const v=d.el=u.el;let{patchFlag:w,dynamicChildren:k,dirs:E}=d;w|=u.patchFlag&16;const T=u.props||J,R=d.props||J;let M;if(p&&gt(p,!1),(M=R.onVnodeBeforeUpdate)&&We(M,p,d,u),E&&pt(d,u,p,"beforeUpdate"),p&&gt(p,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&c(v,""),k?X(u.dynamicChildren,k,v,p,b,or(d,m),y):S||W(u,d,v,null,p,b,or(d,m),y,!1),w>0){if(w&16)se(v,T,R,p,m);else if(w&2&&T.class!==R.class&&o(v,"class",null,R.class,m),w&4&&o(v,"style",T.style,R.style,m),w&8){const H=d.dynamicProps;for(let te=0;te<H.length;te++){const Q=H[te],ve=T[Q],Se=R[Q];(Se!==ve||Q==="value")&&o(v,Q,ve,Se,m,p)}}w&1&&u.children!==d.children&&c(v,d.children)}else!S&&k==null&&se(v,T,R,p,m);((M=R.onVnodeUpdated)||E)&&Ae(()=>{M&&We(M,p,d,u),E&&pt(d,u,p,"updated")},b)},X=(u,d,p,b,m,y,S)=>{for(let v=0;v<d.length;v++){const w=u[v],k=d[v],E=w.el&&(w.type===Ce||!kt(w,k)||w.shapeFlag&198)?h(w.el):p;P(w,k,E,null,b,m,y,S,!0)}},se=(u,d,p,b,m)=>{if(d!==p){if(d!==J)for(const y in d)!zt(y)&&!(y in p)&&o(u,y,d[y],null,m,b);for(const y in p){if(zt(y))continue;const S=p[y],v=d[y];S!==v&&y!=="value"&&o(u,y,v,S,m,b)}"value"in p&&o(u,"value",d.value,p.value,m)}},A=(u,d,p,b,m,y,S,v,w)=>{const k=d.el=u?u.el:a(""),E=d.anchor=u?u.anchor:a("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:M}=d;M&&(v=v?v.concat(M):M),u==null?(s(k,p,b),s(E,p,b),pe(d.children||[],p,E,m,y,S,v,w)):T>0&&T&64&&R&&u.dynamicChildren?(X(u.dynamicChildren,R,p,m,y,S,v),(d.key!=null||m&&d===m.subTree)&&qo(u,d,!0)):W(u,d,p,E,m,y,S,v,w)},ee=(u,d,p,b,m,y,S,v,w)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?m.ctx.activate(d,p,b,S,w):I(d,p,b,m,y,S,w):L(u,d,w)},I=(u,d,p,b,m,y,S)=>{const v=u.component=ol(u,b,m);if(zn(u)&&(v.ctx.renderer=Bt),al(v,!1,S),v.asyncDep){if(m&&m.registerDep(v,N,S),!u.el){const w=v.subTree=le(xe);j(null,w,d,p)}}else N(v,u,d,p,m,y,S)},L=(u,d,p)=>{const b=d.component=u.component;if(Ka(u,d,p))if(b.asyncDep&&!b.asyncResolved){B(b,d,p);return}else b.next=d,b.update();else d.el=u.el,b.vnode=d},N=(u,d,p,b,m,y,S)=>{const v=()=>{if(u.isMounted){let{next:T,bu:R,u:M,parent:H,vnode:te}=u;{const Fe=Go(u);if(Fe){T&&(T.el=te.el,B(u,T,S)),Fe.asyncDep.then(()=>{u.isUnmounted||v()});return}}let Q=T,ve;gt(u,!1),T?(T.el=te.el,B(u,T,S)):T=te,R&&bn(R),(ve=T.props&&T.props.onVnodeBeforeUpdate)&&We(ve,H,T,te),gt(u,!0);const Se=ys(u),Oe=u.subTree;u.subTree=Se,P(Oe,Se,h(Oe.el),dn(Oe),u,m,y),T.el=Se.el,Q===null&&Qa(u,Se.el),M&&Ae(M,m),(ve=T.props&&T.props.onVnodeUpdated)&&Ae(()=>We(ve,H,T,te),m)}else{let T;const{el:R,props:M}=d,{bm:H,m:te,parent:Q,root:ve,type:Se}=u,Oe=Vt(d);gt(u,!1),H&&bn(H),!Oe&&(T=M&&M.onVnodeBeforeMount)&&We(T,Q,d),gt(u,!0);{ve.ce&&ve.ce._def.shadowRoot!==!1&&ve.ce._injectChildStyle(Se);const Fe=u.subTree=ys(u);P(null,Fe,p,b,u,m,y),d.el=Fe.el}if(te&&Ae(te,m),!Oe&&(T=M&&M.onVnodeMounted)){const Fe=d;Ae(()=>We(T,Q,Fe),m)}(d.shapeFlag&256||Q&&Vt(Q.vnode)&&Q.vnode.shapeFlag&256)&&u.a&&Ae(u.a,m),u.isMounted=!0,d=p=b=null}};u.scope.on();const w=u.effect=new so(v);u.scope.off();const k=u.update=w.run.bind(w),E=u.job=w.runIfDirty.bind(w);E.i=u,E.id=u.uid,w.scheduler=()=>Fr(E),gt(u,!0),k()},B=(u,d,p)=>{d.component=u;const b=u.vnode.props;u.vnode=d,u.next=null,Ma(u,d.props,b,p),Oa(u,d.children,p),nt(),cs(u),rt()},W=(u,d,p,b,m,y,S,v,w=!1)=>{const k=u&&u.children,E=u?u.shapeFlag:0,T=d.children,{patchFlag:R,shapeFlag:M}=d;if(R>0){if(R&128){Be(k,T,p,b,m,y,S,v,w);return}else if(R&256){$e(k,T,p,b,m,y,S,v,w);return}}M&8?(E&16&&Nt(k,m,y),T!==k&&c(p,T)):E&16?M&16?Be(k,T,p,b,m,y,S,v,w):Nt(k,m,y,!0):(E&8&&c(p,""),M&16&&pe(T,p,b,m,y,S,v,w))},$e=(u,d,p,b,m,y,S,v,w)=>{u=u||Dt,d=d||Dt;const k=u.length,E=d.length,T=Math.min(k,E);let R;for(R=0;R<T;R++){const M=d[R]=w?lt(d[R]):ze(d[R]);P(u[R],M,p,null,m,y,S,v,w)}k>E?Nt(u,m,y,!0,!1,T):pe(d,p,b,m,y,S,v,w,T)},Be=(u,d,p,b,m,y,S,v,w)=>{let k=0;const E=d.length;let T=u.length-1,R=E-1;for(;k<=T&&k<=R;){const M=u[k],H=d[k]=w?lt(d[k]):ze(d[k]);if(kt(M,H))P(M,H,p,null,m,y,S,v,w);else break;k++}for(;k<=T&&k<=R;){const M=u[T],H=d[R]=w?lt(d[R]):ze(d[R]);if(kt(M,H))P(M,H,p,null,m,y,S,v,w);else break;T--,R--}if(k>T){if(k<=R){const M=R+1,H=M<E?d[M].el:b;for(;k<=R;)P(null,d[k]=w?lt(d[k]):ze(d[k]),p,H,m,y,S,v,w),k++}}else if(k>R)for(;k<=T;)Ie(u[k],m,y,!0),k++;else{const M=k,H=k,te=new Map;for(k=H;k<=R;k++){const _e=d[k]=w?lt(d[k]):ze(d[k]);_e.key!=null&&te.set(_e.key,k)}let Q,ve=0;const Se=R-H+1;let Oe=!1,Fe=0;const Ot=new Array(Se);for(k=0;k<Se;k++)Ot[k]=0;for(k=M;k<=T;k++){const _e=u[k];if(ve>=Se){Ie(_e,m,y,!0);continue}let je;if(_e.key!=null)je=te.get(_e.key);else for(Q=H;Q<=R;Q++)if(Ot[Q-H]===0&&kt(_e,d[Q])){je=Q;break}je===void 0?Ie(_e,m,y,!0):(Ot[je-H]=k+1,je>=Fe?Fe=je:Oe=!0,P(_e,d[je],p,null,m,y,S,v,w),ve++)}const ss=Oe?Ha(Ot):Dt;for(Q=ss.length-1,k=Se-1;k>=0;k--){const _e=H+k,je=d[_e],os=_e+1<E?d[_e+1].el:b;Ot[k]===0?P(null,je,p,os,m,y,S,v,w):Oe&&(Q<0||k!==ss[Q]?qe(je,p,os,2):Q--)}}},qe=(u,d,p,b,m=null)=>{const{el:y,type:S,transition:v,children:w,shapeFlag:k}=u;if(k&6){qe(u.component.subTree,d,p,b);return}if(k&128){u.suspense.move(d,p,b);return}if(k&64){S.move(u,d,p,Bt);return}if(S===Ce){s(y,d,p);for(let T=0;T<w.length;T++)qe(w[T],d,p,b);s(u.anchor,d,p);return}if(S===xn){z(u,d,p);return}if(b!==2&&k&1&&v)if(b===0)v.beforeEnter(y),s(y,d,p),Ae(()=>v.enter(y),m);else{const{leave:T,delayLeave:R,afterLeave:M}=v,H=()=>{u.ctx.isUnmounted?r(y):s(y,d,p)},te=()=>{T(y,()=>{H(),M&&M()})};R?R(y,H,te):te()}else s(y,d,p)},Ie=(u,d,p,b=!1,m=!1)=>{const{type:y,props:S,ref:v,children:w,dynamicChildren:k,shapeFlag:E,patchFlag:T,dirs:R,cacheIndex:M}=u;if(T===-2&&(m=!1),v!=null&&(nt(),Yt(v,null,p,u,!0),rt()),M!=null&&(d.renderCache[M]=void 0),E&256){d.ctx.deactivate(u);return}const H=E&1&&R,te=!Vt(u);let Q;if(te&&(Q=S&&S.onVnodeBeforeUnmount)&&We(Q,d,u),E&6)bi(u.component,p,b);else{if(E&128){u.suspense.unmount(p,b);return}H&&pt(u,null,d,"beforeUnmount"),E&64?u.type.remove(u,d,p,Bt,b):k&&!k.hasOnce&&(y!==Ce||T>0&&T&64)?Nt(k,d,p,!1,!0):(y===Ce&&T&384||!m&&E&16)&&Nt(w,d,p),b&&ns(u)}(te&&(Q=S&&S.onVnodeUnmounted)||H)&&Ae(()=>{Q&&We(Q,d,u),H&&pt(u,null,d,"unmounted")},p)},ns=u=>{const{type:d,el:p,anchor:b,transition:m}=u;if(d===Ce){yi(p,b);return}if(d===xn){D(u);return}const y=()=>{r(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:v}=m,w=()=>S(p,y);v?v(u.el,y,w):w()}else y()},yi=(u,d)=>{let p;for(;u!==d;)p=g(u),r(u),u=p;r(d)},bi=(u,d,p)=>{const{bum:b,scope:m,job:y,subTree:S,um:v,m:w,a:k,parent:E,slots:{__:T}}=u;ms(w),ms(k),b&&bn(b),E&&$(T)&&T.forEach(R=>{E.renderCache[R]=void 0}),m.stop(),y&&(y.flags|=8,Ie(S,u,d,p)),v&&Ae(v,d),Ae(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Nt=(u,d,p,b=!1,m=!1,y=0)=>{for(let S=y;S<u.length;S++)Ie(u[S],d,p,b,m)},dn=u=>{if(u.shapeFlag&6)return dn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=g(u.anchor||u.el),p=d&&d[ua];return p?g(p):d};let Qn=!1;const rs=(u,d,p)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),d._vnode=u,Qn||(Qn=!0,cs(),So(),Qn=!1)},Bt={p:P,um:Ie,m:qe,r:ns,mt:I,mc:pe,pc:W,pbc:X,n:dn,o:e};return{render:rs,hydrate:void 0,createApp:Ra(rs)}}function or({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const s=e.children,r=t.children;if($(s)&&$(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=lt(r[o]),a.el=i.el),!n&&a.patchFlag!==-2&&qo(i,a)),a.type===Gn&&(a.el=i.el),a.type===xe&&!a.el&&(a.el=i.el)}}function Ha(e){const t=e.slice(),n=[0];let s,r,o,i,a;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Go(t)}function ms(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ua=Symbol.for("v-scx"),za=()=>kn(Ua);function Lt(e,t,n){return Yo(e,t,n)}function Yo(e,t,n=J){const{immediate:s,deep:r,flush:o,once:i}=n,a=he({},n),l=t&&s||!t&&o!=="post";let f;if(sn){if(o==="sync"){const x=za();f=x.__watcherHandles||(x.__watcherHandles=[])}else if(!l){const x=()=>{};return x.stop=Xe,x.resume=Xe,x.pause=Xe,x}}const c=me;a.call=(x,C,P)=>Ne(x,c,C,P);let h=!1;o==="post"?a.scheduler=x=>{Ae(x,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(x,C)=>{C?x():Fr(x)}),a.augmentJob=x=>{t&&(x.flags|=4),h&&(x.flags|=2,c&&(x.id=c.uid,x.i=c))};const g=oa(e,t,a);return sn&&(f?f.push(g):l&&g()),g}function Xa(e,t,n){const s=this.proxy,r=ue(e)?e.includes(".")?Vo(s,e):()=>s[e]:e.bind(s,s);let o;O(t)?o=t:(o=t.handler,n=t);const i=cn(this),a=Yo(r,o.bind(s),n);return i(),a}function Vo(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const qa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ut(t)}Modifiers`]||e[`${St(t)}Modifiers`];function Ga(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||J;let r=n;const o=t.startsWith("update:"),i=o&&qa(s,t.slice(7));i&&(i.trim&&(r=n.map(c=>ue(c)?c.trim():c)),i.number&&(r=n.map(fr)));let a,l=s[a=Jn(t)]||s[a=Jn(ut(t))];!l&&o&&(l=s[a=Jn(St(t))]),l&&Ne(l,e,6,r);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ne(f,e,6,r)}}function Ko(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},a=!1;if(!O(e)){const l=f=>{const c=Ko(f,t,!0);c&&(a=!0,he(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(oe(e)&&s.set(e,null),null):($(o)?o.forEach(l=>i[l]=null):he(i,o),oe(e)&&s.set(e,i),i)}function qn(e,t){return!e||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,St(t))||Y(e,t))}function ys(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:a,emit:l,render:f,renderCache:c,props:h,data:g,setupState:x,ctx:C,inheritAttrs:P}=e,re=In(e);let j,U;try{if(n.shapeFlag&4){const D=r||s,G=D;j=ze(f.call(G,D,c,h,x,g,C)),U=a}else{const D=t;j=ze(D.length>1?D(h,{attrs:a,slots:i,emit:l}):D(h,null)),U=t.props?a:Ya(a)}}catch(D){Qt.length=0,Un(D,e,1),j=le(xe)}let z=j;if(U&&P!==!1){const D=Object.keys(U),{shapeFlag:G}=z;D.length&&G&7&&(o&&D.some(Ar)&&(U=Va(U,o)),z=dt(z,U,!1,!0))}return n.dirs&&(z=dt(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&nn(z,n.transition),j=z,In(re),j}const Ya=e=>{let t;for(const n in e)(n==="class"||n==="style"||On(n))&&((t||(t={}))[n]=e[n]);return t},Va=(e,t)=>{const n={};for(const s in e)(!Ar(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ka(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?bs(s,i,f):!!i;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const g=c[h];if(i[g]!==s[g]&&!qn(f,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?bs(s,i,f):!0:!!i;return!1}function bs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!qn(n,o))return!0}return!1}function Qa({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Qo=e=>e.__isSuspense;function Ja(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):la(e)}const Ce=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),xe=Symbol.for("v-cmt"),xn=Symbol.for("v-stc"),Qt=[];let De=null;function Z(e=!1){Qt.push(De=e?null:[])}function Za(){Qt.pop(),De=Qt[Qt.length-1]||null}let rn=1;function ks(e,t=!1){rn+=e,e<0&&De&&t&&(De.hasOnce=!0)}function Jo(e){return e.dynamicChildren=rn>0?De||Dt:null,Za(),rn>0&&De&&De.push(e),e}function ce(e,t,n,s,r,o){return Jo(_(e,t,n,s,r,o,!0))}function wn(e,t,n,s,r){return Jo(le(e,t,n,s,r,!0))}function $n(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const Zo=({key:e})=>e??null,vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||ye(e)||O(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function _(e,t=null,n=null,s=0,r=null,o=e===Ce?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zo(t),ref:t&&vn(t),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?(zr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),rn>0&&!i&&De&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&De.push(l),l}const le=el;function el(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Sa)&&(e=xe),$n(e)){const a=dt(e,t,!0);return n&&zr(a,n),rn>0&&!o&&De&&(a.shapeFlag&6?De[De.indexOf(e)]=a:De.push(a)),a.patchFlag=-2,a}if(fl(e)&&(e=e.__vccOpts),t){t=tl(t);let{class:a,style:l}=t;a&&!ue(a)&&(t.class=wt(a)),oe(l)&&(Or(l)&&!$(l)&&(l=he({},l)),t.style=Ir(l))}const i=ue(e)?1:Qo(e)?128:_o(e)?64:oe(e)?4:O(e)?2:0;return _(e,t,n,s,r,i,o,!0)}function tl(e){return e?Or(e)||jo(e)?he({},e):e:null}function dt(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:a,transition:l}=e,f=t?nl(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Zo(f),ref:t&&t.ref?n&&o?$(o)?o.concat(vn(t)):[o,vn(t)]:vn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&nn(c,l.clone(c)),c}function ei(e=" ",t=0){return le(Gn,null,e,t)}function xs(e,t){const n=le(xn,null,e);return n.staticCount=t,n}function Ze(e="",t=!1){return t?(Z(),wn(xe,null,e)):le(xe,null,e)}function ze(e){return e==null||typeof e=="boolean"?le(xe):$(e)?le(Ce,null,e.slice()):$n(e)?lt(e):le(Gn,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function zr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),zr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!jo(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),s&64?(n=16,t=[ei(t)]):n=8);e.children=t,e.shapeFlag|=n}function nl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=wt([t.class,s.class]));else if(r==="style")t.style=Ir([t.style,s.style]);else if(On(r)){const o=t[r],i=s[r];i&&o!==i&&!($(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function We(e,t,n,s=null){Ne(e,t,7,[n,s])}const rl=Bo();let sl=0;function ol(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||rl,o={uid:sl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ri(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(s,r),emitsOptions:Ko(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Ga.bind(null,o),e.ce&&e.ce(o),o}let me=null;const il=()=>me||Pe;let Mn,wr;{const e=Wn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Mn=t("__VUE_INSTANCE_SETTERS__",n=>me=n),wr=t("__VUE_SSR_SETTERS__",n=>sn=n)}const cn=e=>{const t=me;return Mn(e),e.scope.on(),()=>{e.scope.off(),Mn(t)}},ws=()=>{me&&me.scope.off(),Mn(null)};function ti(e){return e.vnode.shapeFlag&4}let sn=!1;function al(e,t=!1,n=!1){t&&wr(t);const{props:s,children:r}=e.vnode,o=ti(e);$a(e,s,o,t),Ba(e,r,n||t);const i=o?ll(e,t):void 0;return t&&wr(!1),i}function ll(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ta);const{setup:s}=n;if(s){nt();const r=e.setupContext=s.length>1?ul(e):null,o=cn(e),i=an(s,e,0,[e.props,r]),a=Qs(i);if(rt(),o(),(a||e.sp)&&!Vt(e)&&Eo(e),a){if(i.then(ws,ws),t)return i.then(l=>{vs(e,l)}).catch(l=>{Un(l,e,0)});e.asyncDep=i}else vs(e,i)}else ni(e)}function vs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=xo(t)),ni(e)}function ni(e,t,n){const s=e.type;e.render||(e.render=s.render||Xe);{const r=cn(e);nt();try{Ca(e)}finally{rt(),r()}}}const cl={get(e,t){return ge(e,"get",""),e[t]}};function ul(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cl),slots:e.slots,emit:e.emit,expose:t}}function Yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xo(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}})):e.proxy}function fl(e){return O(e)&&"__vccOpts"in e}const Ve=(e,t)=>ra(e,t,sn);function dl(e,t,n){const s=arguments.length;return s===2?oe(t)&&!$(t)?$n(t)?le(e,null,[t]):le(e,t):le(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&$n(n)&&(n=[n]),le(e,t,n))}const hl="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vr;const Ss=typeof window<"u"&&window.trustedTypes;if(Ss)try{vr=Ss.createPolicy("vue",{createHTML:e=>e})}catch{}const ri=vr?e=>vr.createHTML(e):e=>e,pl="http://www.w3.org/2000/svg",gl="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,Ts=Ke&&Ke.createElement("template"),ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ke.createElementNS(pl,e):t==="mathml"?Ke.createElementNS(gl,e):n?Ke.createElement(e,{is:n}):Ke.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ke.createTextNode(e),createComment:e=>Ke.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ke.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ts.innerHTML=ri(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Ts.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ot="transition",jt="animation",on=Symbol("_vtc"),si={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yl=he({},Ao,si),bl=e=>(e.displayName="Transition",e.props=yl,e),Sn=bl((e,{slots:t})=>dl(ha,kl(e),t)),mt=(e,t=[])=>{$(e)?e.forEach(n=>n(...t)):e&&e(...t)},Cs=e=>e?$(e)?e.some(t=>t.length>1):e.length>1:!1;function kl(e){const t={};for(const A in e)A in si||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,C=xl(r),P=C&&C[0],re=C&&C[1],{onBeforeEnter:j,onEnter:U,onEnterCancelled:z,onLeave:D,onLeaveCancelled:G,onBeforeAppear:ie=j,onAppear:ae=U,onAppearCancelled:pe=z}=t,F=(A,ee,I,L)=>{A._enterCancelled=L,yt(A,ee?c:a),yt(A,ee?f:i),I&&I()},X=(A,ee)=>{A._isLeaving=!1,yt(A,h),yt(A,x),yt(A,g),ee&&ee()},se=A=>(ee,I)=>{const L=A?ae:U,N=()=>F(ee,A,I);mt(L,[ee,N]),_s(()=>{yt(ee,A?l:o),Ye(ee,A?c:a),Cs(L)||As(ee,s,P,N)})};return he(t,{onBeforeEnter(A){mt(j,[A]),Ye(A,o),Ye(A,i)},onBeforeAppear(A){mt(ie,[A]),Ye(A,l),Ye(A,f)},onEnter:se(!1),onAppear:se(!0),onLeave(A,ee){A._isLeaving=!0;const I=()=>X(A,ee);Ye(A,h),A._enterCancelled?(Ye(A,g),Is()):(Is(),Ye(A,g)),_s(()=>{A._isLeaving&&(yt(A,h),Ye(A,x),Cs(D)||As(A,s,re,I))}),mt(D,[A,I])},onEnterCancelled(A){F(A,!1,void 0,!0),mt(z,[A])},onAppearCancelled(A){F(A,!0,void 0,!0),mt(pe,[A])},onLeaveCancelled(A){X(A),mt(G,[A])}})}function xl(e){if(e==null)return null;if(oe(e))return[ir(e.enter),ir(e.leave)];{const t=ir(e);return[t,t]}}function ir(e){return Ti(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[on]||(e[on]=new Set)).add(t)}function yt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[on];n&&(n.delete(t),n.size||(e[on]=void 0))}function _s(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wl=0;function As(e,t,n,s){const r=e._endId=++wl,o=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=vl(e,t);if(!i)return s();const f=i+"end";let c=0;const h=()=>{e.removeEventListener(f,g),o()},g=x=>{x.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(f,g)}function vl(e,t){const n=window.getComputedStyle(e),s=C=>(n[C]||"").split(", "),r=s(`${ot}Delay`),o=s(`${ot}Duration`),i=Ps(r,o),a=s(`${jt}Delay`),l=s(`${jt}Duration`),f=Ps(a,l);let c=null,h=0,g=0;t===ot?i>0&&(c=ot,h=i,g=o.length):t===jt?f>0&&(c=jt,h=f,g=l.length):(h=Math.max(i,f),c=h>0?i>f?ot:jt:null,g=c?c===ot?o.length:l.length:0);const x=c===ot&&/\b(transform|all)(,|$)/.test(s(`${ot}Property`).toString());return{type:c,timeout:h,propCount:g,hasTransform:x}}function Ps(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ds(n)+Ds(e[s])))}function Ds(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Is(){return document.body.offsetHeight}function Sl(e,t,n){const s=e[on];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Rs=Symbol("_vod"),Tl=Symbol("_vsh"),Cl=Symbol(""),_l=/(^|;)\s*display\s*:/;function Al(e,t,n){const s=e.style,r=ue(n);let o=!1;if(n&&!r){if(t)if(ue(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Tn(s,a,"")}else for(const i in t)n[i]==null&&Tn(s,i,"");for(const i in n)i==="display"&&(o=!0),Tn(s,i,n[i])}else if(r){if(t!==n){const i=s[Cl];i&&(n+=";"+i),s.cssText=n,o=_l.test(n)}}else t&&e.removeAttribute("style");Rs in e&&(e[Rs]=o?s.display:"",e[Tl]&&(s.display="none"))}const Es=/\s*!important$/;function Tn(e,t,n){if($(n))n.forEach(s=>Tn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Pl(e,t);Es.test(n)?e.setProperty(St(s),n.replace(Es,""),"important"):e[s]=n}}const $s=["Webkit","Moz","ms"],ar={};function Pl(e,t){const n=ar[t];if(n)return n;let s=ut(t);if(s!=="filter"&&s in e)return ar[t]=s;s=eo(s);for(let r=0;r<$s.length;r++){const o=$s[r]+s;if(o in e)return ar[t]=o}return t}const Ms="http://www.w3.org/1999/xlink";function Ls(e,t,n,s,r,o=Ii(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ms,t.slice(6,t.length)):e.setAttributeNS(Ms,t,n):n==null||o&&!to(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ht(n)?String(n):n)}function Ns(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ri(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=to(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function Pt(e,t,n,s){e.addEventListener(t,n,s)}function Dl(e,t,n,s){e.removeEventListener(t,n,s)}const Bs=Symbol("_vei");function Il(e,t,n,s,r=null){const o=e[Bs]||(e[Bs]={}),i=o[t];if(s&&i)i.value=s;else{const[a,l]=Rl(t);if(s){const f=o[t]=Ml(s,r);Pt(e,a,f,l)}else i&&(Dl(e,a,i,l),o[t]=void 0)}}const Os=/(?:Once|Passive|Capture)$/;function Rl(e){let t;if(Os.test(e)){t={};let s;for(;s=e.match(Os);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let lr=0;const El=Promise.resolve(),$l=()=>lr||(El.then(()=>lr=0),lr=Date.now());function Ml(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ne(Ll(s,n.value),t,5,[s])};return n.value=e,n.attached=$l(),n}function Ll(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Fs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nl=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?Sl(e,s,i):t==="style"?Al(e,n,s):On(t)?Ar(t)||Il(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bl(e,t,s,i))?(Ns(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ls(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ue(s))?Ns(e,ut(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ls(e,t,s,i))};function Bl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fs(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fs(t)&&ue(n)?!1:t in e}const js=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>bn(t,n):t};function Ol(e){e.target.composing=!0}function Ws(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cr=Symbol("_assign"),Fl={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[cr]=js(r);const o=s||r.props&&r.props.type==="number";Pt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=fr(a)),e[cr](a)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",Ol),Pt(e,"compositionend",Ws),Pt(e,"change",Ws))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},i){if(e[cr]=js(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?fr(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},jl=["ctrl","shift","alt","meta"],Wl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jl.some(n=>e[`${n}Key`]&&!t.includes(n))},Xr=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const a=Wl[t[i]];if(a&&a(r,t))return}return e(r,...o)})},Hl=he({patchProp:Nl},ml);let Hs;function Ul(){return Hs||(Hs=Fa(Hl))}const zl=(...e)=>{const t=Ul().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=ql(s);if(!r)return;const o=t._component;!O(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,Xl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Xl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ql(e){return ue(e)?document.querySelector(e):e}function qr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Tt=qr();function oi(e){Tt=e}var Jt={exec:()=>null};function K(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(r,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(we.caret,"$1"),n=n.replace(r,i),s},getRegex:()=>new RegExp(n,t)};return s}var we={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Gl=/^(?:[ \t]*(?:\n|$))+/,Yl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Vl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,un=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Kl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Gr=/(?:[*+-]|\d{1,9}[.)])/,ii=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ai=K(ii).replace(/bull/g,Gr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ql=K(ii).replace(/bull/g,Gr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Jl=/^[^\n]+/,Vr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Zl=K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Vr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ec=K(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Gr).getRegex(),Vn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Kr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tc=K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Kr).replace("tag",Vn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),li=K(Yr).replace("hr",un).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex(),nc=K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",li).getRegex(),Qr={blockquote:nc,code:Yl,def:Zl,fences:Vl,heading:Kl,hr:un,html:tc,lheading:ai,list:ec,newline:Gl,paragraph:li,table:Jt,text:Jl},Us=K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",un).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex(),rc={...Qr,lheading:Ql,table:Us,paragraph:K(Yr).replace("hr",un).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Us).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex()},sc={...Qr,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Kr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(Yr).replace("hr",un).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ai).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},oc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ic=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ci=/^( {2,}|\\)\n(?!\s*$)/,ac=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Kn=/[\p{P}\p{S}]/u,Jr=/[\s\p{P}\p{S}]/u,ui=/[^\s\p{P}\p{S}]/u,lc=K(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Jr).getRegex(),fi=/(?!~)[\p{P}\p{S}]/u,cc=/(?!~)[\s\p{P}\p{S}]/u,uc=/(?:[^\s\p{P}\p{S}]|~)/u,fc=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,di=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,dc=K(di,"u").replace(/punct/g,Kn).getRegex(),hc=K(di,"u").replace(/punct/g,fi).getRegex(),hi="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",pc=K(hi,"gu").replace(/notPunctSpace/g,ui).replace(/punctSpace/g,Jr).replace(/punct/g,Kn).getRegex(),gc=K(hi,"gu").replace(/notPunctSpace/g,uc).replace(/punctSpace/g,cc).replace(/punct/g,fi).getRegex(),mc=K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ui).replace(/punctSpace/g,Jr).replace(/punct/g,Kn).getRegex(),yc=K(/\\(punct)/,"gu").replace(/punct/g,Kn).getRegex(),bc=K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),kc=K(Kr).replace("(?:-->|$)","-->").getRegex(),xc=K("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",kc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ln=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,wc=K(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ln).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pi=K(/^!?\[(label)\]\[(ref)\]/).replace("label",Ln).replace("ref",Vr).getRegex(),gi=K(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vr).getRegex(),vc=K("reflink|nolink(?!\\()","g").replace("reflink",pi).replace("nolink",gi).getRegex(),Zr={_backpedal:Jt,anyPunctuation:yc,autolink:bc,blockSkip:fc,br:ci,code:ic,del:Jt,emStrongLDelim:dc,emStrongRDelimAst:pc,emStrongRDelimUnd:mc,escape:oc,link:wc,nolink:gi,punctuation:lc,reflink:pi,reflinkSearch:vc,tag:xc,text:ac,url:Jt},Sc={...Zr,link:K(/^!?\[(label)\]\((.*?)\)/).replace("label",Ln).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ln).getRegex()},Sr={...Zr,emStrongRDelimAst:gc,emStrongLDelim:hc,url:K(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Tc={...Sr,br:K(ci).replace("{2,}","*").getRegex(),text:K(Sr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},yn={normal:Qr,gfm:rc,pedantic:sc},Wt={normal:Zr,gfm:Sr,breaks:Tc,pedantic:Sc},Cc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zs=e=>Cc[e];function He(e,t){if(t){if(we.escapeTest.test(e))return e.replace(we.escapeReplace,zs)}else if(we.escapeTestNoEncode.test(e))return e.replace(we.escapeReplaceNoEncode,zs);return e}function Xs(e){try{e=encodeURI(e).replace(we.percentDecode,"%")}catch{return null}return e}function qs(e,t){let n=e.replace(we.findPipe,(o,i,a)=>{let l=!1,f=i;for(;--f>=0&&a[f]==="\\";)l=!l;return l?"|":" |"}),s=n.split(we.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(we.slashPipe,"|");return s}function Ht(e,t,n){let s=e.length;if(s===0)return"";let r=0;for(;r<s&&e.charAt(s-r-1)===t;)r++;return e.slice(0,s-r)}function _c(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Gs(e,t,n,s,r){let o=t.href,i=t.title||null,a=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:i,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}function Ac(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let r=s[1];return t.split(`
`).map(o=>{let i=o.match(n.other.beginningSpace);if(i===null)return o;let[a]=i;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}var Nn=class{options;rules;lexer;constructor(e){this.options=e||Tt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ht(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Ac(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Ht(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ht(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Ht(t[0],`
`).split(`
`),s="",r="",o=[];for(;n.length>0;){let i=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),i=!0;else if(!i)a.push(n[l]);else break;n=n.slice(l);let f=a.join(`
`),c=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${f}`:f,r=r?`${r}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,o,!0),this.lexer.state.top=h,n.length===0)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let x=g,C=x.raw+`
`+n.join(`
`),P=this.blockquote(C);o[o.length-1]=P,s=s.substring(0,s.length-x.raw.length)+P.raw,r=r.substring(0,r.length-x.text.length)+P.text;break}else if(g?.type==="list"){let x=g,C=x.raw+`
`+n.join(`
`),P=this.list(C);o[o.length-1]=P,s=s.substring(0,s.length-g.raw.length)+P.raw,r=r.substring(0,r.length-x.raw.length)+P.raw,n=C.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),i=!1;for(;e;){let l=!1,f="",c="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;f=t[0],e=e.substring(f.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,j=>" ".repeat(3*j.length)),g=e.split(`
`,1)[0],x=!h.trim(),C=0;if(this.options.pedantic?(C=2,c=h.trimStart()):x?C=t[1].length+1:(C=t[2].search(this.rules.other.nonSpaceChar),C=C>4?1:C,c=h.slice(C),C+=t[1].length),x&&this.rules.other.blankLine.test(g)&&(f+=g+`
`,e=e.substring(g.length+1),l=!0),!l){let j=this.rules.other.nextBulletRegex(C),U=this.rules.other.hrRegex(C),z=this.rules.other.fencesBeginRegex(C),D=this.rules.other.headingBeginRegex(C),G=this.rules.other.htmlBeginRegex(C);for(;e;){let ie=e.split(`
`,1)[0],ae;if(g=ie,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),ae=g):ae=g.replace(this.rules.other.tabCharGlobal,"    "),z.test(g)||D.test(g)||G.test(g)||j.test(g)||U.test(g))break;if(ae.search(this.rules.other.nonSpaceChar)>=C||!g.trim())c+=`
`+ae.slice(C);else{if(x||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||z.test(h)||D.test(h)||U.test(h))break;c+=`
`+g}!x&&!g.trim()&&(x=!0),f+=ie+`
`,e=e.substring(ie.length+1),h=ae.slice(C)}}r.loose||(i?r.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(i=!0));let P=null,re;this.options.gfm&&(P=this.rules.other.listIsTask.exec(c),P&&(re=P[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:f,task:!!P,checked:re,loose:!1,text:c,tokens:[]}),r.raw+=f}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l=0;l<r.items.length;l++)if(this.lexer.state.top=!1,r.items[l].tokens=this.lexer.blockTokens(r.items[l].text,[]),!r.loose){let f=r.items[l].tokens.filter(h=>h.type==="space"),c=f.length>0&&f.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=c}if(r.loose)for(let l=0;l<r.items.length;l++)r.items[l].loose=!0;return r}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=qs(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?o.align.push("right"):this.rules.other.tableAlignCenter.test(i)?o.align.push("center"):this.rules.other.tableAlignLeft.test(i)?o.align.push("left"):o.align.push(null);for(let i=0;i<n.length;i++)o.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:o.align[i]});for(let i of r)o.rows.push(qs(i,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Ht(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=_c(t[2],"()");if(o===-2)return;if(o>-1){let i=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Gs(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Gs(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...s[0]].length-1,o,i,a=r,l=0,f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+r);(s=f.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(i=[...o].length,s[3]||s[4]){a+=i;continue}else if((s[5]||s[6])&&r%3&&!((r+i)%3)){l+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+l);let c=[...s[0]][0].length,h=e.slice(0,r+s.index+c+i);if(Math.min(r,i)%2){let x=h.slice(1,-1);return{type:"em",raw:h,text:x,tokens:this.lexer.inlineTokens(x)}}let g=h.slice(2,-2);return{type:"strong",raw:h,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},et=class Tr{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Tt,this.options.tokenizer=this.options.tokenizer||new Nn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:we,block:yn.normal,inline:Wt.normal};this.options.pedantic?(n.block=yn.pedantic,n.inline=Wt.pedantic):this.options.gfm&&(n.block=yn.gfm,this.options.breaks?n.inline=Wt.breaks:n.inline=Wt.gfm),this.tokenizer.rules=n}static get rules(){return{block:yn,inline:Wt}}static lex(t,n){return new Tr(n).lex(t)}static lexInline(t,n){return new Tr(n).inlineTokens(t)}lex(t){t=t.replace(we.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(we.tabCharGlobal,"    ").replace(we.spaceLine,""));t;){let r;if(this.options.extensions?.block?.some(i=>(r=i.call({lexer:this},t,n))?(t=t.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length);let i=n.at(-1);r.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),n.push(r);continue}let o=t;if(this.options.extensions?.startBlock){let i=1/0,a=t.slice(1),l;this.options.extensions.startBlock.forEach(f=>{l=f.call({lexer:this},a),typeof l=="number"&&l>=0&&(i=Math.min(i,l))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let i=n.at(-1);s&&i?.type==="paragraph"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r),s=o.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(t){let i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,r=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;t;){o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(f=>(a=f.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);let f=n.at(-1);a.type==="text"&&f?.type==="text"?(f.raw+=a.raw,f.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(t,s,i)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),n.push(a);continue}let l=t;if(this.options.extensions?.startInline){let f=1/0,c=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},c),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(l=t.substring(0,f+1))}if(a=this.tokenizer.inlineText(l)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let f=n.at(-1);f?.type==="text"?(f.raw+=a.raw,f.text+=a.text):n.push(a);continue}if(t){let f="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}},Bn=class{options;parser;constructor(e){this.options=e||Tt}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(we.notSpaceStart)?.[0],r=e.replace(we.endingNewline,"")+`
`;return s?'<pre><code class="language-'+He(s)+'">'+(n?r:He(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:He(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let i=0;i<e.items.length;i++){let a=e.items[i];s+=this.listitem(a)}let r=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+He(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){let o=e.rows[r];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${He(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),r=Xs(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return t&&(o+=' title="'+He(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let r=Xs(e);if(r===null)return He(n);e=r;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${He(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:He(e.text)}},es=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},tt=class Cr{options;renderer;textRenderer;constructor(t){this.options=t||Tt,this.options.renderer=this.options.renderer||new Bn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new es}static parse(t,n){return new Cr(n).parse(t)}static parseInline(t,n){return new Cr(n).parseInline(t)}parse(t,n=!0){let s="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){s+=l||"";continue}}let i=o;switch(i.type){case"space":{s+=this.renderer.space(i);continue}case"hr":{s+=this.renderer.hr(i);continue}case"heading":{s+=this.renderer.heading(i);continue}case"code":{s+=this.renderer.code(i);continue}case"table":{s+=this.renderer.table(i);continue}case"blockquote":{s+=this.renderer.blockquote(i);continue}case"list":{s+=this.renderer.list(i);continue}case"html":{s+=this.renderer.html(i);continue}case"paragraph":{s+=this.renderer.paragraph(i);continue}case"text":{let a=i,l=this.renderer.text(a);for(;r+1<t.length&&t[r+1].type==="text";)a=t[++r],l+=`
`+this.renderer.text(a);n?s+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):s+=l;continue}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(t,n=this.renderer){let s="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=a||"";continue}}let i=o;switch(i.type){case"escape":{s+=n.text(i);break}case"html":{s+=n.html(i);break}case"link":{s+=n.link(i);break}case"image":{s+=n.image(i);break}case"strong":{s+=n.strong(i);break}case"em":{s+=n.em(i);break}case"codespan":{s+=n.codespan(i);break}case"br":{s+=n.br(i);break}case"del":{s+=n.del(i);break}case"text":{s+=n.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},Cn=class{options;block;constructor(e){this.options=e||Tt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?et.lex:et.lexInline}provideParser(){return this.block?tt.parse:tt.parseInline}},Pc=class{defaults=qr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=tt;Renderer=Bn;TextRenderer=es;Lexer=et;Tokenizer=Nn;Hooks=Cn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let r=s;for(let o of r.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of r.rows)for(let i of o)n=n.concat(this.walkTokens(i.tokens,t));break}case"list":{let r=s;n=n.concat(this.walkTokens(r.items,t));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let i=r[o].flat(1/0);n=n.concat(this.walkTokens(i,t))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=t.renderers[r.name];o?t.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){let r=this.defaults.renderer||new Bn(this.defaults);for(let o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,a=n.renderer[i],l=r[i];r[i]=(...f)=>{let c=a.apply(r,f);return c===!1&&(c=l.apply(r,f)),c||""}}s.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new Nn(this.defaults);for(let o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,a=n.tokenizer[i],l=r[i];r[i]=(...f)=>{let c=a.apply(r,f);return c===!1&&(c=l.apply(r,f)),c}}s.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new Cn;for(let o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,a=n.hooks[i],l=r[i];Cn.passThroughHooks.has(o)?r[i]=f=>{if(this.defaults.async)return Promise.resolve(a.call(r,f)).then(h=>l.call(r,h));let c=a.call(r,f);return l.call(r,c)}:r[i]=(...f)=>{let c=a.apply(r,f);return c===!1&&(c=l.apply(r,f)),c}}s.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),r&&(a=a.concat(r.call(this,i))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return et.lex(e,t??this.defaults)}parser(e,t){return tt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},r={...this.defaults,...s},o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);let i=r.hooks?r.hooks.provideLexer():e?et.lex:et.lexInline,a=r.hooks?r.hooks.provideParser():e?tt.parse:tt.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then(l=>i(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>a(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(t=r.hooks.preprocess(t));let l=i(t,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let f=a(l,r);return r.hooks&&(f=r.hooks.postprocess(f)),f}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+He(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},vt=new Pc;function V(e,t){return vt.parse(e,t)}V.options=V.setOptions=function(e){return vt.setOptions(e),V.defaults=vt.defaults,oi(V.defaults),V};V.getDefaults=qr;V.defaults=Tt;V.use=function(...e){return vt.use(...e),V.defaults=vt.defaults,oi(V.defaults),V};V.walkTokens=function(e,t){return vt.walkTokens(e,t)};V.parseInline=vt.parseInline;V.Parser=tt;V.parser=tt.parse;V.Renderer=Bn;V.TextRenderer=es;V.Lexer=et;V.lexer=et.lex;V.Tokenizer=Nn;V.Hooks=Cn;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;tt.parse;et.lex;const fn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Dc={name:"MarkdownEditor",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t,expose:n}){const s=fe(null);return n({insertTextAtCursor:async o=>{const i=s.value;if(!i)return;const a=i.selectionStart,l=i.selectionEnd,f=e.modelValue.substring(0,a)+o+e.modelValue.substring(l);t("update:modelValue",f),await Dn(),i.focus(),i.selectionStart=i.selectionEnd=a+o.length},textareaRef:s}),{textareaRef:s}}},Ic={class:"relative flex flex-col h-full"},Rc={key:0,class:"absolute top-0 left-0 mt-12 px-4 py-3 text-slate-400 dark:text-slate-600 pointer-events-none"},Ec=["value"];function $c(e,t,n,s,r,o){return Z(),ce("div",Ic,[n.modelValue?Ze("",!0):(Z(),ce("div",Rc,t[1]||(t[1]=[_("p",null,"Start typing your markdown here...",-1),_("p",null,"Use / to view commands",-1)]))),_("textarea",{ref:"textareaRef",value:n.modelValue,onInput:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value)),class:"flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 transition-colors resize-none custom-scroll z-10"},null,40,Ec)])}const Mc=fn(Dc,[["render",$c]]),Lc={class:"flex flex-col h-full min-h-0"},Nc=["innerHTML"],Bc={__name:"MarkdownViewer",props:{markdown:{type:String,required:!0}},setup(e,{expose:t}){const n=e,s=fe(null),r=Ve(()=>V(n.markdown,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1}));return t({viewerRef:s}),(o,i)=>(Z(),ce("div",Lc,[_("div",{ref_key:"viewerRef",ref:s,innerHTML:r.value,class:"overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"},null,8,Nc)]))}};function ts(e){const t=n=>{n.key==="Escape"&&e()};ln(()=>{window.addEventListener("keydown",t)}),Wr(()=>{window.removeEventListener("keydown",t)})}const Oc={name:"TemplatesModal",props:{templates:{type:Array,required:!0}},emits:["close","insert-template"],setup(e,{emit:t}){ts(()=>{t("close")})},data(){return{searchTerm:""}},computed:{categorizedTemplates(){const e=this.searchTerm.toLowerCase();return e?this.templates.filter(n=>n.name.toLowerCase().includes(e)||n.category&&n.category.toLowerCase().includes(e)).reduce((n,s)=>{const r=s.category||"General";return n[r]||(n[r]=[]),n[r].push(s),n},{}):this.templates.reduce((n,s)=>{const r=s.category||"General";return n[r]||(n[r]=[]),n[r].push(s),n},{})}}},Fc={class:"w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col max-h-[85vh]"},jc={class:"flex-shrink-0 flex justify-between items-center mb-4"},Wc={class:"flex-shrink-0 mb-4"},Hc={class:"flex-grow min-h-0 overflow-y-auto custom-scroll pr-2"},Uc={class:"text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 first:mt-0 mb-2 pt-4 text-center"},zc={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Xc={class:"flex justify-between items-center"},qc={class:"font-medium text-gray-800 dark:text-gray-200"},Gc=["onClick"],Yc={key:0,class:"text-center text-slate-500 dark:text-slate-400 py-10"};function Vc(e,t,n,s,r,o){return Z(),ce("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[2]||(t[2]=Xr(i=>e.$emit("close"),["self"]))},[_("div",Fc,[_("div",jc,[t[3]||(t[3]=_("h2",{class:"text-xl font-bold text-cyan-600 dark:text-cyan-400"},"Markdown Templates",-1)),_("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"dark:text-slate-200 text-2xl leading-none"}," × ")]),_("div",Wc,[ca(_("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>r.searchTerm=i),placeholder:"Search templates...",class:"w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"},null,512),[[Fl,r.searchTerm]])]),_("div",Hc,[(Z(!0),ce(Ce,null,Rn(o.categorizedTemplates,(i,a)=>(Z(),ce("div",{key:a},[_("h3",Uc,Me(a),1),_("ul",zc,[(Z(!0),ce(Ce,null,Rn(i,l=>(Z(),ce("li",{key:l.name,class:"border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700"},[_("div",Xc,[_("span",qc,Me(l.name),1),_("button",{onClick:f=>e.$emit("insert-template",l.content),class:"text-sm bg-cyan-600 text-white px-3 py-1 rounded-md hover:bg-cyan-700 flex-shrink-0"}," Insert ",8,Gc)])]))),128))])]))),128)),Object.keys(o.categorizedTemplates).length===0?(Z(),ce("div",Yc," No templates found. ")):Ze("",!0)])])])}const Kc=fn(Oc,[["render",Vc]]),Qc={name:"CheatsheetModal",emits:["close"],setup(e,{emit:t}){return ts(()=>{t("close")}),{activeCheatSheetTab:"basic"}}},Jc={class:"relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"},Zc={class:"flex justify-between items-center mb-4"},eu={key:0},tu={key:1};function nu(e,t,n,s,r,o){return Z(),ce("div",{class:"fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors z-50",onClick:t[3]||(t[3]=Xr(i=>e.$emit("close"),["self"]))},[_("div",Jc,[_("div",Zc,[t[4]||(t[4]=_("h2",{class:"text-2xl font-bold text-cyan-700 dark:text-cyan-400"},"Markdown Cheatsheet",-1)),_("div",null,[_("button",{onClick:t[0]||(t[0]=i=>s.activeCheatSheetTab="basic"),class:wt([{"font-bold underline text-cyan-700 dark:text-cyan-400":s.activeCheatSheetTab==="basic"},"px-2 py-1"])}," Basic ",2),_("button",{onClick:t[1]||(t[1]=i=>s.activeCheatSheetTab="gfm"),class:wt([{"font-bold underline text-cyan-700 dark:text-cyan-400":s.activeCheatSheetTab==="gfm"},"px-2 py-1"])}," GFM ",2)]),_("button",{onClick:t[2]||(t[2]=i=>e.$emit("close")),class:"absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-2xl leading-none transition-colors"}," × ")]),s.activeCheatSheetTab==="basic"?(Z(),ce("div",eu,t[5]||(t[5]=[xs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Text Formatting</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">*Italic*</code> → <em>Italic</em></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">**Bold**</code> → <strong>Bold</strong></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code> → <del>Strikethrough</del></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Headings</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700"># Heading 1</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">## Heading 2</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Lists</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links &amp; Images</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">[Link Text](https://...)</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">![Alt Text](image.jpg)</code></li></ul><h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code &amp; Blockquotes</h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\\ncode block\\n```</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code></li></ul>',10)]))):Ze("",!0),s.activeCheatSheetTab==="gfm"?(Z(),ce("div",tu,t[6]||(t[6]=[xs('<h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500"> GitHub Flavored Markdown (GFM) </h3><ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task list</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Table | Header |</code></li><li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">https://example.com</code> → Autolink </li></ul>',2)]))):Ze("",!0)])])}const ru=fn(Qc,[["render",nu]]),_t=fe(!1);function mi(){const e=fe("🌙"),t=()=>{_t.value?(document.documentElement.classList.add("dark"),e.value="🌙",localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),e.value="☀️",localStorage.setItem("theme","light"))},n=()=>{localStorage.getItem("theme")==="light"?_t.value=!1:_t.value=!0,t()},s=()=>{_t.value=!_t.value,t()};return ln(()=>{n()}),{isDark:_t,themeDefault:e,themeToggle:s}}const su={__name:"ThemeToggle",setup(e){const{themeDefault:t,themeToggle:n}=mi();return(s,r)=>(Z(),ce("button",{onClick:r[0]||(r[0]=(...o)=>Et(n)&&Et(n)(...o)),class:"flex items-center justify-center h-10 w-10 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},Me(Et(t)),1))}},ou={name:"EmojiPickerModal",emits:["close","select-emoji"],setup(e,{emit:t}){return ts(()=>{t("close")}),{emojis:["😊","😂","❤️","👍","🎉","🔥","🚀","🤔","👀","👋","👏","✅","✨","💡","⚠️","💯","🔗","🧑‍💻","💻","📝","📁","📈","⚙️","🌍"]}}},iu={class:"w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4"},au={class:"relative flex justify-center items-center mb-4"},lu={class:"grid grid-cols-8 gap-2 max-h-[50vh] overflow-y-auto custom-scroll"},cu=["onClick"];function uu(e,t,n,s,r,o){return Z(),ce("div",{class:"fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50",onClick:t[1]||(t[1]=Xr(i=>e.$emit("close"),["self"]))},[_("div",iu,[_("div",au,[t[2]||(t[2]=_("h2",{class:"w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400"}," Select an Emoji ",-1)),_("button",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"absolute right-0 text-2xl leading-none"}," × ")]),_("div",lu,[(Z(!0),ce(Ce,null,Rn(s.emojis,i=>(Z(),ce("button",{key:i,onClick:a=>e.$emit("select-emoji",i),class:"text-2xl rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"},Me(i),9,cu))),128))])])])}const fu=fn(ou,[["render",uu]]);function du(e,t){const n=s=>{e.value&&!e.value.contains(s.target)&&t()};ln(()=>{document.addEventListener("mousedown",n)}),jr(()=>{document.removeEventListener("mousedown",n)})}const hu={class:"relative"},pu={key:0,class:"absolute mt-2 right-0 w-40 bg-white dark:text-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"},gu={class:"text-sm text-left"},mu={__name:"HeaderActions",emits:["toggle-help","toggle-templates","download-md","download-html","download-txt"],setup(e){const t=fe(!1),n=fe(null);return du(n,()=>{t.value=!1}),(s,r)=>(Z(),ce("div",{ref_key:"exportMenuContainer",ref:n,class:"flex items-center gap-3"},[_("button",{onClick:r[0]||(r[0]=o=>s.$emit("toggle-help")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Help "),_("button",{onClick:r[1]||(r[1]=o=>s.$emit("toggle-templates")),class:"px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"}," Templates "),_("div",hu,[_("button",{onClick:r[2]||(r[2]=o=>t.value=!t.value),class:"px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"},r[6]||(r[6]=[ei(" Export "),_("span",null,"▼",-1)])),le(Sn,null,{default:Gt(()=>[t.value?(Z(),ce("div",pu,[_("ul",gu,[_("li",null,[_("button",{onClick:r[3]||(r[3]=o=>s.$emit("download-md")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"}," Download .MD ")]),_("li",null,[_("button",{onClick:r[4]||(r[4]=o=>s.$emit("download-html")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .HTML ")]),_("li",null,[_("button",{onClick:r[5]||(r[5]=o=>s.$emit("download-txt")),class:"w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"}," Download .txt ")])])])):Ze("",!0)]),_:1})])],512))}},yu={name:"EditorToolbar",props:{copyText:{type:String,default:"Copy"}},emits:["toggle-emojis","copy","clear"]},bu={class:"flex items-center gap-2"};function ku(e,t,n,s,r,o){return Z(),ce("div",bu,[_("button",{onClick:t[0]||(t[0]=i=>e.$emit("toggle-emojis")),class:"flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"},t[3]||(t[3]=[_("span",{class:"text-xl"},"😊",-1)])),_("button",{onClick:t[1]||(t[1]=i=>e.$emit("copy")),class:"px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"},Me(n.copyText),1),_("button",{onClick:t[2]||(t[2]=i=>e.$emit("clear")),class:"px-3 py-1 rounded-md text-sm font-medium border border-red-500/50 text-red-600 hover:bg-red-50 dark:border-red-500/50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors"}," Clear ")])}const xu=fn(yu,[["render",ku]]),wu=[{name:"README Starter",category:"Software Development",content:`
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
`}],Ys=[{name:"h1",description:"Large heading",content:"# "},{name:"h2",description:"Medium heading",content:"## "},{name:"h3",description:"Small heading",content:"### "},{name:"list",description:"Bulleted list",content:"- "},{name:"numbered list",description:"Numbered list",content:"1. "},{name:"todo",description:"Task checklist",content:"- [ ] "},{name:"quote",description:"Blockquote",content:"> "},{name:"divider",description:"Horizontal rule",content:`
---
`},{name:"code",description:"Code block",content:"```\n\n```"},{name:"table",description:"Insert a 3x2 table",content:`| Column 1 | Column 2 |
| :--- | :--- |
| Cell | Cell |`},{name:"date",description:"Insert current date",content:new Date().toDateString()},{name:"templates",description:"Browse templates",action:"open-templates"},{name:"emoji",description:"Pick an emoji",action:"open-emojis"},{name:"help",description:"Open cheatsheet",action:"open-help"}];function Vs(e,t){let n;return function(){const s=arguments,r=this;n||(e.apply(r,s),n=!0,setTimeout(()=>n=!1,t))}}function vu(e,t){const n=fe(!1),s=(i,a)=>{if(n.value)return;n.value=!0;const l=i.value,f=a.value;if(l&&f){const c=l.scrollTop,h=l.scrollHeight-l.clientHeight,g=c/h,x=f.scrollHeight-f.clientHeight;f.scrollTop=g*x}setTimeout(()=>{n.value=!1},100)},r=Vs(()=>s(e,t),10),o=Vs(()=>s(t,e),10);Lt([e,t],([i,a])=>(i&&a&&(i.addEventListener("scroll",r),a.addEventListener("scroll",o)),()=>{i&&i.removeEventListener("scroll",r),a&&a.removeEventListener("scroll",o)}))}const Su={class:"flex-shrink-0 flex items-center justify-between px-4 sm:px-8 h-16 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"},Tu={class:"flex items-center gap-4"},Cu={class:"flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-4 sm:p-8"},_u={class:"grid h-full gap-2",style:{"grid-template-rows":"1fr auto"}},Au={class:"relative min-h-0"},Pu={key:0,class:"absolute bottom-2 left-0 right-0 z-10 mx-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg"},Du={class:"max-h-64 overflow-y-auto custom-scroll"},Iu=["onClick"],Ru={class:"font-medium text-slate-800 dark:text-slate-200"},Eu={class:"text-sm text-slate-500 dark:text-slate-400"},$u={class:"flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"},Mu={class:"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"},Lu={class:"flex flex-col h-full min-h-0"},Nu={__name:"App",setup(e){const{isDark:t}=mi(),n=fe(localStorage.getItem("savedMarkdown")||"# Hello, world!"),s=fe("Copy"),r=fe(!1),o=fe(!1),i=fe(!1),a=fe(null),l=fe(null),f=fe(!1),c=fe(""),h=fe(0),g=fe([]),x=Ve(()=>a.value?.textareaRef),C=Ve(()=>l.value?.viewerRef);vu(x,C),Lt(n,async I=>{localStorage.setItem("savedMarkdown",I),await Dn();const L=a.value?.textareaRef;if(!L)return;const N=L.selectionStart,B=I.substring(0,N),W=B.lastIndexOf("/"),$e=B.lastIndexOf(" "),Be=B.lastIndexOf(`
`);W!==-1&&W>$e&&W>Be?(f.value=!0,c.value=B.substring(W+1),h.value=0):f.value=!1}),Lt(h,I=>{const L=g.value[I];L&&L.scrollIntoView({block:"nearest"})}),Mo(()=>{g.value=[]});const P=Ve(()=>c.value?Ys.filter(I=>I.name.toLowerCase().startsWith(c.value.toLowerCase())):Ys),re=Ve(()=>V(n.value,{gfm:!0,breaks:!0,mangle:!1,headerIds:!1})),j=Ve(()=>n.value.length),U=Ve(()=>n.value.trim()?n.value.trim().split(/\s+/).length:0),z=Ve(()=>Math.ceil(U.value/200)),D=I=>{const L=a.value?.textareaRef;if(!L)return;const N=L.selectionStart,B=n.value.substring(0,N),W=n.value.substring(N),$e=`/${c.value}`,Be=B.slice(0,B.length-$e.length);if(I.action)I.action==="open-templates"&&(o.value=!0),I.action==="open-emojis"&&(i.value=!0),I.action==="open-help"&&(r.value=!0),n.value=Be+W;else if(I.content){const qe=Be+I.content+W;n.value=qe,Dn(()=>{L.focus();const Ie=(Be+I.content).length;L.selectionStart=L.selectionEnd=Ie})}f.value=!1},G=I=>{if(f.value)if(I.key==="ArrowUp")I.preventDefault(),h.value=(h.value-1+P.value.length)%P.value.length;else if(I.key==="ArrowDown")I.preventDefault(),h.value=(h.value+1)%P.value.length;else if(I.key==="Enter"||I.key==="Tab"){I.preventDefault();const L=P.value[h.value];L&&D(L)}else I.key==="Escape"&&(f.value=!1)},ie=I=>{n.value=I,o.value=!1},ae=I=>{a.value&&a.value.insertTextAtCursor(I),i.value=!1},pe=()=>{navigator.clipboard.writeText(n.value),s.value="Copied!",setTimeout(()=>{s.value="Copy"},2e3)},F=()=>{confirm("Are you sure you want to clear the Canvas?")&&(n.value="")},X=()=>{r.value=!r.value},se=()=>{const I=new Blob([n.value],{type:"text/markdown"}),L=URL.createObjectURL(I),N=document.createElement("a");N.href=L,N.download="MarkCanvas.md",N.click(),URL.revokeObjectURL(L)},A=()=>{const I=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MarkCanvas Export</title>
  <style>body { font-family: sans-serif; }</style>
</head>
<body>
${re.value}
</body>
</html>`,L=new Blob([I],{type:"text/html"}),N=URL.createObjectURL(L),B=document.createElement("a");B.href=N,B.download="MarkCanvas.html",B.click(),URL.revokeObjectURL(N)},ee=()=>{let I=n.value;I=I.replace(/^#+\s/gm,"").replace(/(\*\*|__|\*|_|~~)/g,"").replace(/!\[(.*?)\]\(.*?\)/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/^[\s\t]*(\*|-|\d+\.)\s/gm,"").replace(/^>\s?/gm,"").replace(/^[=-]{3,}/gm,"").replace(/`{3}.*$/gm,"").replace(/`/g,"").replace(/\n{3,}/g,`

`);const L=new Blob([I],{type:"text/plain"}),N=URL.createObjectURL(L),B=document.createElement("a");B.href=N,B.download="MarkCanvas.txt",B.click(),URL.revokeObjectURL(N)};return(I,L)=>(Z(),ce("div",{onKeydown:G,class:wt([{dark:Et(t)},"flex flex-col h-screen w-full font-sans bg-slate-100 dark:bg-slate-900"])},[_("header",Su,[L[5]||(L[5]=_("div",{class:"flex items-center gap-3"},[_("h1",{class:"text-xl font-bold text-slate-800 dark:text-slate-100"},"MarkCanvas")],-1)),_("div",Tu,[le(mu,{onToggleHelp:X,onToggleTemplates:L[0]||(L[0]=N=>o.value=!0),onDownloadMd:se,onDownloadHtml:A,onDownloadTxt:ee}),le(su)])]),_("main",Cu,[_("div",_u,[_("div",Au,[le(Mc,{class:"h-full",ref_key:"editorRef",ref:a,modelValue:n.value,"onUpdate:modelValue":L[1]||(L[1]=N=>n.value=N)},null,8,["modelValue"]),f.value?(Z(),ce("div",Pu,[_("ul",Du,[(Z(!0),ce(Ce,null,Rn(P.value,(N,B)=>(Z(),ce("li",{key:N.name,ref_for:!0,ref:W=>{W&&(g.value[B]=W)}},[_("button",{onClick:W=>D(N),class:wt([{"bg-slate-100 dark:bg-slate-700":B===h.value},"w-full text-left p-3 hover:bg-slate-100 dark:hover:bg-slate-700"])},[_("p",Ru,"/"+Me(N.name),1),_("p",Eu,Me(N.description),1)],10,Iu)]))),128))])])):Ze("",!0)]),_("div",$u,[le(xu,{class:"mr-6","copy-text":s.value,onCopy:pe,onClear:F,onToggleEmojis:L[2]||(L[2]=N=>i.value=!0)},null,8,["copy-text"]),_("div",Mu,[_("span",null,Me(U.value)+" Words",1),_("span",null,Me(j.value)+" Characters",1),_("span",null,Me(z.value)+" min read",1)])])]),_("div",Lu,[le(Bc,{markdown:n.value,ref_key:"viewerRef",ref:l},null,8,["markdown"])])]),le(Sn,null,{default:Gt(()=>[o.value?(Z(),wn(Kc,{key:0,templates:Et(wu),onClose:L[3]||(L[3]=N=>o.value=!1),onInsertTemplate:ie},null,8,["templates"])):Ze("",!0)]),_:1}),le(Sn,null,{default:Gt(()=>[r.value?(Z(),wn(ru,{key:0,onClose:X})):Ze("",!0)]),_:1}),le(Sn,null,{default:Gt(()=>[i.value?(Z(),wn(fu,{key:0,onClose:L[4]||(L[4]=N=>i.value=!1),onSelectEmoji:ae})):Ze("",!0)]),_:1})],34))}};zl(Nu).mount("#app");
