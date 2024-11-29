function bh(n,i){for(var l=0;l<i.length;l++){const a=i[l];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in n)){const f=Object.getOwnPropertyDescriptor(a,s);f&&Object.defineProperty(n,s,f.get?f:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(s){if(s.ep)return;s.ep=!0;const f=l(s);fetch(s.href,f)}})();function $1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fu={exports:{}},Ei={},zu={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Bh(){if(Md)return se;Md=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function _(O,D,ue){this.props=O,this.context=D,this.refs=R,this.updater=ue||T}_.prototype.isReactComponent={},_.prototype.setState=function(O,D){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,D,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function A(){}A.prototype=_.prototype;function z(O,D,ue){this.props=O,this.context=D,this.refs=R,this.updater=ue||T}var $=z.prototype=new A;$.constructor=z,E($,_.prototype),$.isPureReactComponent=!0;var M=Array.isArray,B=Object.prototype.hasOwnProperty,K={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function ne(O,D,ue){var ce,de={},pe=null,ke=null;if(D!=null)for(ce in D.ref!==void 0&&(ke=D.ref),D.key!==void 0&&(pe=""+D.key),D)B.call(D,ce)&&!W.hasOwnProperty(ce)&&(de[ce]=D[ce]);var ye=arguments.length-2;if(ye===1)de.children=ue;else if(1<ye){for(var Re=Array(ye),pt=0;pt<ye;pt++)Re[pt]=arguments[pt+2];de.children=Re}if(O&&O.defaultProps)for(ce in ye=O.defaultProps,ye)de[ce]===void 0&&(de[ce]=ye[ce]);return{$$typeof:n,type:O,key:pe,ref:ke,props:de,_owner:K.current}}function le(O,D){return{$$typeof:n,type:O.type,key:D,ref:O.ref,props:O.props,_owner:O._owner}}function y(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function G(O){var D={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return D[ue]})}var ie=/\/+/g;function ae(O,D){return typeof O=="object"&&O!==null&&O.key!=null?G(""+O.key):D.toString(36)}function Se(O,D,ue,ce,de){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var ke=!1;if(O===null)ke=!0;else switch(pe){case"string":case"number":ke=!0;break;case"object":switch(O.$$typeof){case n:case i:ke=!0}}if(ke)return ke=O,de=de(ke),O=ce===""?"."+ae(ke,0):ce,M(de)?(ue="",O!=null&&(ue=O.replace(ie,"$&/")+"/"),Se(de,D,ue,"",function(pt){return pt})):de!=null&&(y(de)&&(de=le(de,ue+(!de.key||ke&&ke.key===de.key?"":(""+de.key).replace(ie,"$&/")+"/")+O)),D.push(de)),1;if(ke=0,ce=ce===""?".":ce+":",M(O))for(var ye=0;ye<O.length;ye++){pe=O[ye];var Re=ce+ae(pe,ye);ke+=Se(pe,D,ue,Re,de)}else if(Re=C(O),typeof Re=="function")for(O=Re.call(O),ye=0;!(pe=O.next()).done;)pe=pe.value,Re=ce+ae(pe,ye++),ke+=Se(pe,D,ue,Re,de);else if(pe==="object")throw D=String(O),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return ke}function Fe(O,D,ue){if(O==null)return O;var ce=[],de=0;return Se(O,ce,"","",function(pe){return D.call(ue,pe,de++)}),ce}function Be(O){if(O._status===-1){var D=O._result;D=D(),D.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=D)}if(O._status===1)return O._result.default;throw O._result}var Oe={current:null},V={transition:null},re={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Fe,forEach:function(O,D,ue){Fe(O,function(){D.apply(this,arguments)},ue)},count:function(O){var D=0;return Fe(O,function(){D++}),D},toArray:function(O){return Fe(O,function(D){return D})||[]},only:function(O){if(!y(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},se.Component=_,se.Fragment=l,se.Profiler=s,se.PureComponent=z,se.StrictMode=a,se.Suspense=m,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,se.act=X,se.cloneElement=function(O,D,ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ce=E({},O.props),de=O.key,pe=O.ref,ke=O._owner;if(D!=null){if(D.ref!==void 0&&(pe=D.ref,ke=K.current),D.key!==void 0&&(de=""+D.key),O.type&&O.type.defaultProps)var ye=O.type.defaultProps;for(Re in D)B.call(D,Re)&&!W.hasOwnProperty(Re)&&(ce[Re]=D[Re]===void 0&&ye!==void 0?ye[Re]:D[Re])}var Re=arguments.length-2;if(Re===1)ce.children=ue;else if(1<Re){ye=Array(Re);for(var pt=0;pt<Re;pt++)ye[pt]=arguments[pt+2];ce.children=ye}return{$$typeof:n,type:O.type,key:de,ref:pe,props:ce,_owner:ke}},se.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:f,_context:O},O.Consumer=O},se.createElement=ne,se.createFactory=function(O){var D=ne.bind(null,O);return D.type=O,D},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:h,render:O}},se.isValidElement=y,se.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Be}},se.memo=function(O,D){return{$$typeof:g,type:O,compare:D===void 0?null:D}},se.startTransition=function(O){var D=V.transition;V.transition={};try{O()}finally{V.transition=D}},se.unstable_act=X,se.useCallback=function(O,D){return Oe.current.useCallback(O,D)},se.useContext=function(O){return Oe.current.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O){return Oe.current.useDeferredValue(O)},se.useEffect=function(O,D){return Oe.current.useEffect(O,D)},se.useId=function(){return Oe.current.useId()},se.useImperativeHandle=function(O,D,ue){return Oe.current.useImperativeHandle(O,D,ue)},se.useInsertionEffect=function(O,D){return Oe.current.useInsertionEffect(O,D)},se.useLayoutEffect=function(O,D){return Oe.current.useLayoutEffect(O,D)},se.useMemo=function(O,D){return Oe.current.useMemo(O,D)},se.useReducer=function(O,D,ue){return Oe.current.useReducer(O,D,ue)},se.useRef=function(O){return Oe.current.useRef(O)},se.useState=function(O){return Oe.current.useState(O)},se.useSyncExternalStore=function(O,D,ue){return Oe.current.useSyncExternalStore(O,D,ue)},se.useTransition=function(){return Oe.current.useTransition()},se.version="18.3.1",se}var Fd;function _l(){return Fd||(Fd=1,zu.exports=Bh()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function jh(){if(zd)return Ei;zd=1;var n=_l(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,g){var w,S={},C=null,T=null;g!==void 0&&(C=""+g),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(T=m.ref);for(w in m)a.call(m,w)&&!f.hasOwnProperty(w)&&(S[w]=m[w]);if(h&&h.defaultProps)for(w in m=h.defaultProps,m)S[w]===void 0&&(S[w]=m[w]);return{$$typeof:i,type:h,key:C,ref:T,props:S,_owner:s.current}}return Ei.Fragment=l,Ei.jsx=d,Ei.jsxs=d,Ei}var Dd;function Uh(){return Dd||(Dd=1,Fu.exports=jh()),Fu.exports}var we=Uh(),I=_l();const ms=$1(I),vl=bh({__proto__:null,default:ms},[I]);var ol={},Du={exports:{}},ft={},bu={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Wh(){return bd||(bd=1,function(n){function i(V,re){var X=V.length;V.push(re);e:for(;0<X;){var O=X-1>>>1,D=V[O];if(0<s(D,re))V[O]=re,V[X]=D,X=O;else break e}}function l(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var re=V[0],X=V.pop();if(X!==re){V[0]=X;e:for(var O=0,D=V.length,ue=D>>>1;O<ue;){var ce=2*(O+1)-1,de=V[ce],pe=ce+1,ke=V[pe];if(0>s(de,X))pe<D&&0>s(ke,de)?(V[O]=ke,V[pe]=X,O=pe):(V[O]=de,V[ce]=X,O=ce);else if(pe<D&&0>s(ke,X))V[O]=ke,V[pe]=X,O=pe;else break e}}return re}function s(V,re){var X=V.sortIndex-re.sortIndex;return X!==0?X:V.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var m=[],g=[],w=1,S=null,C=3,T=!1,E=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(V){for(var re=l(g);re!==null;){if(re.callback===null)a(g);else if(re.startTime<=V)a(g),re.sortIndex=re.expirationTime,i(m,re);else break;re=l(g)}}function M(V){if(R=!1,$(V),!E)if(l(m)!==null)E=!0,Be(B);else{var re=l(g);re!==null&&Oe(M,re.startTime-V)}}function B(V,re){E=!1,R&&(R=!1,A(ne),ne=-1),T=!0;var X=C;try{for($(re),S=l(m);S!==null&&(!(S.expirationTime>re)||V&&!G());){var O=S.callback;if(typeof O=="function"){S.callback=null,C=S.priorityLevel;var D=O(S.expirationTime<=re);re=n.unstable_now(),typeof D=="function"?S.callback=D:S===l(m)&&a(m),$(re)}else a(m);S=l(m)}if(S!==null)var ue=!0;else{var ce=l(g);ce!==null&&Oe(M,ce.startTime-re),ue=!1}return ue}finally{S=null,C=X,T=!1}}var K=!1,W=null,ne=-1,le=5,y=-1;function G(){return!(n.unstable_now()-y<le)}function ie(){if(W!==null){var V=n.unstable_now();y=V;var re=!0;try{re=W(!0,V)}finally{re?ae():(K=!1,W=null)}}else K=!1}var ae;if(typeof z=="function")ae=function(){z(ie)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Fe=Se.port2;Se.port1.onmessage=ie,ae=function(){Fe.postMessage(null)}}else ae=function(){_(ie,0)};function Be(V){W=V,K||(K=!0,ae())}function Oe(V,re){ne=_(function(){V(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){E||T||(E=!0,Be(B))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return l(m)},n.unstable_next=function(V){switch(C){case 1:case 2:case 3:var re=3;break;default:re=C}var X=C;C=re;try{return V()}finally{C=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=C;C=V;try{return re()}finally{C=X}},n.unstable_scheduleCallback=function(V,re,X){var O=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?O+X:O):X=O,V){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=X+D,V={id:w++,callback:re,priorityLevel:V,startTime:X,expirationTime:D,sortIndex:-1},X>O?(V.sortIndex=X,i(g,V),l(m)===null&&V===l(g)&&(R?(A(ne),ne=-1):R=!0,Oe(M,X-O))):(V.sortIndex=D,i(m,V),E||T||(E=!0,Be(B))),V},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(V){var re=C;return function(){var X=C;C=re;try{return V.apply(this,arguments)}finally{C=X}}}}(Bu)),Bu}var Bd;function Vh(){return Bd||(Bd=1,bu.exports=Wh()),bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Kh(){if(jd)return ft;jd=1;var n=_l(),i=Vh();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function f(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function C(e){return m.call(S,e)?!0:m.call(w,e)?!1:g.test(e)?S[e]=!0:(w[e]=!0,!1)}function T(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,r,o){if(t===null||typeof t>"u"||T(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,r,o,u,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=u,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(A,z);_[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(A,z);_[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(A,z);_[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,t,r,o){var u=_.hasOwnProperty(t)?_[t]:null;(u!==null?u.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,r,u,o)&&(r=null),o||u===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):u.mustUseProperty?e[u.propertyName]=r===null?u.type===3?!1:"":r:(t=u.attributeName,o=u.attributeNamespace,r===null?e.removeAttribute(t):(u=u.type,r=u===3||u===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var M=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),K=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),G=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),V=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,O;function D(e){if(O===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var ue=!1;function ce(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(H){var o=H}Reflect.construct(e,[],t)}else{try{t.call()}catch(H){o=H}e.call(t.prototype)}else{try{throw Error()}catch(H){o=H}e()}}catch(H){if(H&&o&&typeof H.stack=="string"){for(var u=H.stack.split(`
`),c=o.stack.split(`
`),p=u.length-1,v=c.length-1;1<=p&&0<=v&&u[p]!==c[v];)v--;for(;1<=p&&0<=v;p--,v--)if(u[p]!==c[v]){if(p!==1||v!==1)do if(p--,v--,0>v||u[p]!==c[v]){var x=`
`+u[p].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=p&&0<=v);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function de(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case K:return"Portal";case le:return"Profiler";case ne:return"StrictMode";case ae:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:return(e.displayName||"Context")+".Consumer";case y:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pt(e){var t=Re(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(p){o=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=pt(e))}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Re(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function js(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=ye(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Us(e,t){t=t.checked,t!=null&&$(e,"checked",t,!1)}function Vl(e,t){Us(e,t);var r=ye(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Kl(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Kl(e,t,r){(t!=="number"||Yi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Dr=Array.isArray;function nr(e,t,r,o){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ye(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vs(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Dr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ye(r)}}function Ks(e,t){var r=ye(t.value),o=ye(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,u){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Xs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Zs(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,u=Xs(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,u):e[r]=u}}var Vp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,rr=null,ir=null;function qs(e){if(e=si(e)){if(typeof Jl!="function")throw Error(l(280));var t=e.stateNode;t&&(t=So(t),Jl(e.stateNode,e.type,t))}}function Js(e){rr?ir?ir.push(e):ir=[e]:rr=e}function ec(){if(rr){var e=rr,t=ir;if(ir=rr=null,qs(e),t)for(e=0;e<t.length;e++)qs(t[e])}}function tc(e,t){return e(t)}function nc(){}var ea=!1;function rc(e,t,r){if(ea)return e(t,r);ea=!0;try{return tc(e,t,r)}finally{ea=!1,(rr!==null||ir!==null)&&(nc(),ec())}}function jr(e,t){var r=e.stateNode;if(r===null)return null;var o=So(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var ta=!1;if(h)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){ta=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{ta=!1}function Kp(e,t,r,o,u,c,p,v,x){var H=Array.prototype.slice.call(arguments,3);try{t.apply(r,H)}catch(b){this.onError(b)}}var Wr=!1,Zi=null,qi=!1,na=null,Qp={onError:function(e){Wr=!0,Zi=e}};function Gp(e,t,r,o,u,c,p,v,x){Wr=!1,Zi=null,Kp.apply(Qp,arguments)}function Yp(e,t,r,o,u,c,p,v,x){if(Gp.apply(this,arguments),Wr){if(Wr){var H=Zi;Wr=!1,Zi=null}else throw Error(l(198));qi||(qi=!0,na=H)}}function $n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oc(e){if($n(e)!==e)throw Error(l(188))}function Xp(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var u=r.return;if(u===null)break;var c=u.alternate;if(c===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===r)return oc(u),e;if(c===o)return oc(u),t;c=c.sibling}throw Error(l(188))}if(r.return!==o.return)r=u,o=c;else{for(var p=!1,v=u.child;v;){if(v===r){p=!0,r=u,o=c;break}if(v===o){p=!0,o=u,r=c;break}v=v.sibling}if(!p){for(v=c.child;v;){if(v===r){p=!0,r=c,o=u;break}if(v===o){p=!0,o=c,r=u;break}v=v.sibling}if(!p)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function lc(e){return e=Xp(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ac(e);if(t!==null)return t;e=e.sibling}return null}var uc=i.unstable_scheduleCallback,sc=i.unstable_cancelCallback,Zp=i.unstable_shouldYield,qp=i.unstable_requestPaint,ze=i.unstable_now,Jp=i.unstable_getCurrentPriorityLevel,ra=i.unstable_ImmediatePriority,cc=i.unstable_UserBlockingPriority,Ji=i.unstable_NormalPriority,e0=i.unstable_LowPriority,fc=i.unstable_IdlePriority,eo=null,bt=null;function t0(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:i0,n0=Math.log,r0=Math.LN2;function i0(e){return e>>>=0,e===0?32:31-(n0(e)/r0|0)|0}var to=64,no=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,u=e.suspendedLanes,c=e.pingedLanes,p=r&268435455;if(p!==0){var v=p&~u;v!==0?o=Vr(v):(c&=p,c!==0&&(o=Vr(c)))}else p=r&~u,p!==0?o=Vr(p):c!==0&&(o=Vr(c));if(o===0)return 0;if(t!==0&&t!==o&&!(t&u)&&(u=o&-o,c=t&-t,u>=c||u===16&&(c&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ht(t),u=1<<r,o|=e[r],t&=~u;return o}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Ht(c),v=1<<p,x=u[p];x===-1?(!(v&r)||v&o)&&(u[p]=o0(v,t)):x<=t&&(e.expiredLanes|=v),c&=~v}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function oa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=r}function a0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var u=31-Ht(r),c=1<<u;t[u]=0,o[u]=-1,e[u]=-1,r&=~c}}function la(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ht(r),u=1<<o;u&t|e[o]&t&&(e[o]|=t),r&=~u}}var ve=0;function pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,aa,mc,gc,yc,ua=!1,io=[],hn=null,mn=null,gn=null,Qr=new Map,Gr=new Map,yn=[],u0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function Yr(e,t,r,o,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:c,targetContainers:[u]},t!==null&&(t=si(t),t!==null&&aa(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function s0(e,t,r,o,u){switch(t){case"focusin":return hn=Yr(hn,e,t,r,o,u),!0;case"dragenter":return mn=Yr(mn,e,t,r,o,u),!0;case"mouseover":return gn=Yr(gn,e,t,r,o,u),!0;case"pointerover":var c=u.pointerId;return Qr.set(c,Yr(Qr.get(c)||null,e,t,r,o,u)),!0;case"gotpointercapture":return c=u.pointerId,Gr.set(c,Yr(Gr.get(c)||null,e,t,r,o,u)),!0}return!1}function wc(e){var t=Mn(e.target);if(t!==null){var r=$n(t);if(r!==null){if(t=r.tag,t===13){if(t=ic(r),t!==null){e.blockedOn=t,yc(e.priority,function(){mc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Zl=o,r.target.dispatchEvent(o),Zl=null}else return t=si(r),t!==null&&aa(t),e.blockedOn=r,!1;t.shift()}return!0}function Sc(e,t,r){oo(e)&&r.delete(t)}function c0(){ua=!1,hn!==null&&oo(hn)&&(hn=null),mn!==null&&oo(mn)&&(mn=null),gn!==null&&oo(gn)&&(gn=null),Qr.forEach(Sc),Gr.forEach(Sc)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,c0)))}function Zr(e){function t(u){return Xr(u,e)}if(0<io.length){Xr(io[0],e);for(var r=1;r<io.length;r++){var o=io[r];o.blockedOn===e&&(o.blockedOn=null)}}for(hn!==null&&Xr(hn,e),mn!==null&&Xr(mn,e),gn!==null&&Xr(gn,e),Qr.forEach(t),Gr.forEach(t),r=0;r<yn.length;r++)o=yn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<yn.length&&(r=yn[0],r.blockedOn===null);)wc(r),r.blockedOn===null&&yn.shift()}var or=M.ReactCurrentBatchConfig,lo=!0;function f0(e,t,r,o){var u=ve,c=or.transition;or.transition=null;try{ve=1,sa(e,t,r,o)}finally{ve=u,or.transition=c}}function d0(e,t,r,o){var u=ve,c=or.transition;or.transition=null;try{ve=4,sa(e,t,r,o)}finally{ve=u,or.transition=c}}function sa(e,t,r,o){if(lo){var u=ca(e,t,r,o);if(u===null)_a(e,t,o,ao,r),vc(e,o);else if(s0(u,e,t,r,o))o.stopPropagation();else if(vc(e,o),t&4&&-1<u0.indexOf(e)){for(;u!==null;){var c=si(u);if(c!==null&&hc(c),c=ca(e,t,r,o),c===null&&_a(e,t,o,ao,r),c===u)break;u=c}u!==null&&o.stopPropagation()}else _a(e,t,o,null,r)}}var ao=null;function ca(e,t,r,o){if(ao=null,e=ql(o),e=Mn(e),e!==null)if(t=$n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ic(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ao=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case ra:return 1;case cc:return 4;case Ji:case e0:return 16;case fc:return 536870912;default:return 16}default:return 16}}var vn=null,fa=null,uo=null;function xc(){if(uo)return uo;var e,t=fa,r=t.length,o,u="value"in vn?vn.value:vn.textContent,c=u.length;for(e=0;e<r&&t[e]===u[e];e++);var p=r-e;for(o=1;o<=p&&t[r-o]===u[c-o];o++);return uo=u.slice(e,1<o?1-o:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function kc(){return!1}function ht(e){function t(r,o,u,c,p){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(r=e[v],this[v]=r?r(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?co:kc,this.isPropagationStopped=kc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=ht(lr),qr=X({},lr,{view:0,detail:0}),p0=ht(qr),pa,ha,Jr,fo=X({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(pa=e.screenX-Jr.screenX,ha=e.screenY-Jr.screenY):ha=pa=0,Jr=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Ec=ht(fo),h0=X({},fo,{dataTransfer:0}),m0=ht(h0),g0=X({},qr,{relatedTarget:0}),ma=ht(g0),y0=X({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=ht(y0),w0=X({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=ht(w0),C0=X({},lr,{data:0}),Oc=ht(C0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function ga(){return O0}var P0=X({},qr,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=ht(P0),R0=X({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=ht(R0),N0=X({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),T0=ht(N0),H0=X({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=ht(H0),L0=X({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=ht(L0),$0=[9,13,27,32],ya=h&&"CompositionEvent"in window,ei=null;h&&"documentMode"in document&&(ei=document.documentMode);var M0=h&&"TextEvent"in window&&!ei,_c=h&&(!ya||ei&&8<ei&&11>=ei),Rc=" ",Nc=!1;function Tc(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function F0(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Nc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Nc?null:e;default:return null}}function z0(e,t){if(ar)return e==="compositionend"||!ya&&Tc(e,t)?(e=xc(),uo=fa=vn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function Lc(e,t,r,o){Js(o),t=yo(t,"onChange"),0<t.length&&(r=new da("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var ti=null,ni=null;function b0(e){Zc(e,0)}function po(e){var t=dr(e);if(Bs(t))return e}function B0(e,t){if(e==="change")return t}var Ic=!1;if(h){var va;if(h){var wa="oninput"in document;if(!wa){var $c=document.createElement("div");$c.setAttribute("oninput","return;"),wa=typeof $c.oninput=="function"}va=wa}else va=!1;Ic=va&&(!document.documentMode||9<document.documentMode)}function Mc(){ti&&(ti.detachEvent("onpropertychange",Fc),ni=ti=null)}function Fc(e){if(e.propertyName==="value"&&po(ni)){var t=[];Lc(t,ni,e,ql(e)),rc(b0,t)}}function j0(e,t,r){e==="focusin"?(Mc(),ti=t,ni=r,ti.attachEvent("onpropertychange",Fc)):e==="focusout"&&Mc()}function U0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(ni)}function W0(e,t){if(e==="click")return po(t)}function V0(e,t){if(e==="input"||e==="change")return po(t)}function K0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:K0;function ri(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!m.call(t,u)||!At(e[u],t[u]))return!1}return!0}function zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var r=zc(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zc(r)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bc(){for(var e=window,t=Yi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Yi(e.document)}return t}function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q0(e){var t=Bc(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&bc(r.ownerDocument.documentElement,r)){if(o!==null&&Sa(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=r.textContent.length,c=Math.min(o.start,u);o=o.end===void 0?c:Math.min(o.end,u),!e.extend&&c>o&&(u=o,o=c,c=u),u=Dc(r,c);var p=Dc(r,o);u&&p&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),c>o?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=h&&"documentMode"in document&&11>=document.documentMode,ur=null,Ca=null,ii=null,xa=!1;function jc(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;xa||ur==null||ur!==Yi(o)||(o=ur,"selectionStart"in o&&Sa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ii&&ri(ii,o)||(ii=o,o=yo(Ca,"onSelect"),0<o.length&&(t=new da("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=ur)))}function ho(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},ka={},Uc={};h&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function mo(e){if(ka[e])return ka[e];if(!sr[e])return e;var t=sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Uc)return ka[e]=t[r];return e}var Wc=mo("animationend"),Vc=mo("animationiteration"),Kc=mo("animationstart"),Qc=mo("transitionend"),Gc=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Gc.set(e,t),f(t,[e])}for(var Ea=0;Ea<Yc.length;Ea++){var Oa=Yc[Ea],Y0=Oa.toLowerCase(),X0=Oa[0].toUpperCase()+Oa.slice(1);wn(Y0,"on"+X0)}wn(Wc,"onAnimationEnd"),wn(Vc,"onAnimationIteration"),wn(Kc,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Qc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function Xc(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Yp(o,t,void 0,e),e.currentTarget=null}function Zc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;e:{var c=void 0;if(t)for(var p=o.length-1;0<=p;p--){var v=o[p],x=v.instance,H=v.currentTarget;if(v=v.listener,x!==c&&u.isPropagationStopped())break e;Xc(u,v,H),c=x}else for(p=0;p<o.length;p++){if(v=o[p],x=v.instance,H=v.currentTarget,v=v.listener,x!==c&&u.isPropagationStopped())break e;Xc(u,v,H),c=x}}}if(qi)throw e=na,qi=!1,na=null,e}function Pe(e,t){var r=t[La];r===void 0&&(r=t[La]=new Set);var o=e+"__bubble";r.has(o)||(qc(t,e,2,!1),r.add(o))}function Pa(e,t,r){var o=0;t&&(o|=4),qc(r,e,o,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function li(e){if(!e[go]){e[go]=!0,a.forEach(function(r){r!=="selectionchange"&&(Z0.has(r)||Pa(r,!1,e),Pa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,Pa("selectionchange",!1,t))}}function qc(e,t,r,o){switch(Cc(t)){case 1:var u=f0;break;case 4:u=d0;break;default:u=sa}r=u.bind(null,t,r,e),u=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function _a(e,t,r,o,u){var c=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var v=o.stateNode.containerInfo;if(v===u||v.nodeType===8&&v.parentNode===u)break;if(p===4)for(p=o.return;p!==null;){var x=p.tag;if((x===3||x===4)&&(x=p.stateNode.containerInfo,x===u||x.nodeType===8&&x.parentNode===u))return;p=p.return}for(;v!==null;){if(p=Mn(v),p===null)return;if(x=p.tag,x===5||x===6){o=c=p;continue e}v=v.parentNode}}o=o.return}rc(function(){var H=c,b=ql(r),j=[];e:{var F=Gc.get(e);if(F!==void 0){var Q=da,Z=e;switch(e){case"keypress":if(so(r)===0)break e;case"keydown":case"keyup":Q=_0;break;case"focusin":Z="focus",Q=ma;break;case"focusout":Z="blur",Q=ma;break;case"beforeblur":case"afterblur":Q=ma;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=T0;break;case Wc:case Vc:case Kc:Q=v0;break;case Qc:Q=A0;break;case"scroll":Q=p0;break;case"wheel":Q=I0;break;case"copy":case"cut":case"paste":Q=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Pc}var q=(t&4)!==0,De=!q&&e==="scroll",P=q?F!==null?F+"Capture":null:F;q=[];for(var k=H,N;k!==null;){N=k;var U=N.stateNode;if(N.tag===5&&U!==null&&(N=U,P!==null&&(U=jr(k,P),U!=null&&q.push(ai(k,U,N)))),De)break;k=k.return}0<q.length&&(F=new Q(F,Z,null,r,b),j.push({event:F,listeners:q}))}}if(!(t&7)){e:{if(F=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",F&&r!==Zl&&(Z=r.relatedTarget||r.fromElement)&&(Mn(Z)||Z[Jt]))break e;if((Q||F)&&(F=b.window===b?b:(F=b.ownerDocument)?F.defaultView||F.parentWindow:window,Q?(Z=r.relatedTarget||r.toElement,Q=H,Z=Z?Mn(Z):null,Z!==null&&(De=$n(Z),Z!==De||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Q=null,Z=H),Q!==Z)){if(q=Ec,U="onMouseLeave",P="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(q=Pc,U="onPointerLeave",P="onPointerEnter",k="pointer"),De=Q==null?F:dr(Q),N=Z==null?F:dr(Z),F=new q(U,k+"leave",Q,r,b),F.target=De,F.relatedTarget=N,U=null,Mn(b)===H&&(q=new q(P,k+"enter",Z,r,b),q.target=N,q.relatedTarget=De,U=q),De=U,Q&&Z)t:{for(q=Q,P=Z,k=0,N=q;N;N=cr(N))k++;for(N=0,U=P;U;U=cr(U))N++;for(;0<k-N;)q=cr(q),k--;for(;0<N-k;)P=cr(P),N--;for(;k--;){if(q===P||P!==null&&q===P.alternate)break t;q=cr(q),P=cr(P)}q=null}else q=null;Q!==null&&Jc(j,F,Q,q,!1),Z!==null&&De!==null&&Jc(j,De,Z,q,!0)}}e:{if(F=H?dr(H):window,Q=F.nodeName&&F.nodeName.toLowerCase(),Q==="select"||Q==="input"&&F.type==="file")var J=B0;else if(Ac(F))if(Ic)J=V0;else{J=U0;var ee=j0}else(Q=F.nodeName)&&Q.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(J=W0);if(J&&(J=J(e,H))){Lc(j,J,r,b);break e}ee&&ee(e,F,H),e==="focusout"&&(ee=F._wrapperState)&&ee.controlled&&F.type==="number"&&Kl(F,"number",F.value)}switch(ee=H?dr(H):window,e){case"focusin":(Ac(ee)||ee.contentEditable==="true")&&(ur=ee,Ca=H,ii=null);break;case"focusout":ii=Ca=ur=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,jc(j,r,b);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":jc(j,r,b)}var te;if(ya)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ar?Tc(e,r)&&(oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(_c&&r.locale!=="ko"&&(ar||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ar&&(te=xc()):(vn=b,fa="value"in vn?vn.value:vn.textContent,ar=!0)),ee=yo(H,oe),0<ee.length&&(oe=new Oc(oe,e,null,r,b),j.push({event:oe,listeners:ee}),te?oe.data=te:(te=Hc(r),te!==null&&(oe.data=te)))),(te=M0?F0(e,r):z0(e,r))&&(H=yo(H,"onBeforeInput"),0<H.length&&(b=new Oc("onBeforeInput","beforeinput",null,r,b),j.push({event:b,listeners:H}),b.data=te))}Zc(j,t)})}function ai(e,t,r){return{instance:e,listener:t,currentTarget:r}}function yo(e,t){for(var r=t+"Capture",o=[];e!==null;){var u=e,c=u.stateNode;u.tag===5&&c!==null&&(u=c,c=jr(e,r),c!=null&&o.unshift(ai(e,c,u)),c=jr(e,t),c!=null&&o.push(ai(e,c,u))),e=e.return}return o}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jc(e,t,r,o,u){for(var c=t._reactName,p=[];r!==null&&r!==o;){var v=r,x=v.alternate,H=v.stateNode;if(x!==null&&x===o)break;v.tag===5&&H!==null&&(v=H,u?(x=jr(r,c),x!=null&&p.unshift(ai(r,x,v))):u||(x=jr(r,c),x!=null&&p.push(ai(r,x,v)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var q0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(q0,`
`).replace(J0,"")}function vo(e,t,r){if(t=ef(t),ef(e)!==t&&r)throw Error(l(425))}function wo(){}var Ra=null,Na=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ha=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(e){return tf.resolve(null).then(e).catch(nh)}:Ha;function nh(e){setTimeout(function(){throw e})}function Aa(e,t){var r=t,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(o===0){e.removeChild(u),Zr(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=u}while(r);Zr(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+fr,ui="__reactProps$"+fr,Jt="__reactContainer$"+fr,La="__reactEvents$"+fr,rh="__reactListeners$"+fr,ih="__reactHandles$"+fr;function Mn(e){var t=e[Bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Jt]||r[Bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nf(e);e!==null;){if(r=e[Bt])return r;e=nf(e)}return t}e=r,r=e.parentNode}return null}function si(e){return e=e[Bt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function So(e){return e[ui]||null}var Ia=[],pr=-1;function Cn(e){return{current:e}}function _e(e){0>pr||(e.current=Ia[pr],Ia[pr]=null,pr--)}function Ee(e,t){pr++,Ia[pr]=e.current,e.current=t}var xn={},Je=Cn(xn),lt=Cn(!1),Fn=xn;function hr(e,t){var r=e.type.contextTypes;if(!r)return xn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var u={},c;for(c in r)u[c]=t[c];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function at(e){return e=e.childContextTypes,e!=null}function Co(){_e(lt),_e(Je)}function rf(e,t,r){if(Je.current!==xn)throw Error(l(168));Ee(Je,t),Ee(lt,r)}function of(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var u in o)if(!(u in t))throw Error(l(108,ke(e)||"Unknown",u));return X({},r,o)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Fn=Je.current,Ee(Je,e),Ee(lt,lt.current),!0}function lf(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=of(e,t,Fn),o.__reactInternalMemoizedMergedChildContext=e,_e(lt),_e(Je),Ee(Je,e)):_e(lt),Ee(lt,r)}var en=null,ko=!1,$a=!1;function af(e){en===null?en=[e]:en.push(e)}function oh(e){ko=!0,af(e)}function kn(){if(!$a&&en!==null){$a=!0;var e=0,t=ve;try{var r=en;for(ve=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}en=null,ko=!1}catch(u){throw en!==null&&(en=en.slice(e+1)),uc(ra,kn),u}finally{ve=t,$a=!1}}return null}var mr=[],gr=0,Eo=null,Oo=0,kt=[],Et=0,zn=null,tn=1,nn="";function Dn(e,t){mr[gr++]=Oo,mr[gr++]=Eo,Eo=e,Oo=t}function uf(e,t,r){kt[Et++]=tn,kt[Et++]=nn,kt[Et++]=zn,zn=e;var o=tn;e=nn;var u=32-Ht(o)-1;o&=~(1<<u),r+=1;var c=32-Ht(t)+u;if(30<c){var p=u-u%5;c=(o&(1<<p)-1).toString(32),o>>=p,u-=p,tn=1<<32-Ht(t)+u|r<<u|o,nn=c+e}else tn=1<<c|r<<u|o,nn=e}function Ma(e){e.return!==null&&(Dn(e,1),uf(e,1,0))}function Fa(e){for(;e===Eo;)Eo=mr[--gr],mr[gr]=null,Oo=mr[--gr],mr[gr]=null;for(;e===zn;)zn=kt[--Et],kt[Et]=null,nn=kt[--Et],kt[Et]=null,tn=kt[--Et],kt[Et]=null}var mt=null,gt=null,Ne=!1,Lt=null;function sf(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function cf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,gt=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,mt=e,gt=null,!0):!1;default:return!1}}function za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(Ne){var t=gt;if(t){var r=t;if(!cf(e,t)){if(za(e))throw Error(l(418));t=Sn(r.nextSibling);var o=mt;t&&cf(e,t)?sf(o,r):(e.flags=e.flags&-4097|2,Ne=!1,mt=e)}}else{if(za(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ne=!1,mt=e}}}function ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function Po(e){if(e!==mt)return!1;if(!Ne)return ff(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=gt)){if(za(e))throw df(),Error(l(418));for(;t;)sf(e,t),t=Sn(t.nextSibling)}if(ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){gt=Sn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=mt?Sn(e.stateNode.nextSibling):null;return!0}function df(){for(var e=gt;e;)e=Sn(e.nextSibling)}function yr(){gt=mt=null,Ne=!1}function ba(e){Lt===null?Lt=[e]:Lt.push(e)}var lh=M.ReactCurrentBatchConfig;function ci(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var u=o,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var v=u.refs;p===null?delete v[c]:v[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pf(e){var t=e._init;return t(e._payload)}function hf(e){function t(P,k){if(e){var N=P.deletions;N===null?(P.deletions=[k],P.flags|=16):N.push(k)}}function r(P,k){if(!e)return null;for(;k!==null;)t(P,k),k=k.sibling;return null}function o(P,k){for(P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function u(P,k){return P=Hn(P,k),P.index=0,P.sibling=null,P}function c(P,k,N){return P.index=N,e?(N=P.alternate,N!==null?(N=N.index,N<k?(P.flags|=2,k):N):(P.flags|=2,k)):(P.flags|=1048576,k)}function p(P){return e&&P.alternate===null&&(P.flags|=2),P}function v(P,k,N,U){return k===null||k.tag!==6?(k=Hu(N,P.mode,U),k.return=P,k):(k=u(k,N),k.return=P,k)}function x(P,k,N,U){var J=N.type;return J===W?b(P,k,N.props.children,U,N.key):k!==null&&(k.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Be&&pf(J)===k.type)?(U=u(k,N.props),U.ref=ci(P,k,N),U.return=P,U):(U=Zo(N.type,N.key,N.props,null,P.mode,U),U.ref=ci(P,k,N),U.return=P,U)}function H(P,k,N,U){return k===null||k.tag!==4||k.stateNode.containerInfo!==N.containerInfo||k.stateNode.implementation!==N.implementation?(k=Au(N,P.mode,U),k.return=P,k):(k=u(k,N.children||[]),k.return=P,k)}function b(P,k,N,U,J){return k===null||k.tag!==7?(k=Qn(N,P.mode,U,J),k.return=P,k):(k=u(k,N),k.return=P,k)}function j(P,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Hu(""+k,P.mode,N),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case B:return N=Zo(k.type,k.key,k.props,null,P.mode,N),N.ref=ci(P,null,k),N.return=P,N;case K:return k=Au(k,P.mode,N),k.return=P,k;case Be:var U=k._init;return j(P,U(k._payload),N)}if(Dr(k)||re(k))return k=Qn(k,P.mode,N,null),k.return=P,k;_o(P,k)}return null}function F(P,k,N,U){var J=k!==null?k.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return J!==null?null:v(P,k,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return N.key===J?x(P,k,N,U):null;case K:return N.key===J?H(P,k,N,U):null;case Be:return J=N._init,F(P,k,J(N._payload),U)}if(Dr(N)||re(N))return J!==null?null:b(P,k,N,U,null);_o(P,N)}return null}function Q(P,k,N,U,J){if(typeof U=="string"&&U!==""||typeof U=="number")return P=P.get(N)||null,v(k,P,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case B:return P=P.get(U.key===null?N:U.key)||null,x(k,P,U,J);case K:return P=P.get(U.key===null?N:U.key)||null,H(k,P,U,J);case Be:var ee=U._init;return Q(P,k,N,ee(U._payload),J)}if(Dr(U)||re(U))return P=P.get(N)||null,b(k,P,U,J,null);_o(k,U)}return null}function Z(P,k,N,U){for(var J=null,ee=null,te=k,oe=k=0,Ge=null;te!==null&&oe<N.length;oe++){te.index>oe?(Ge=te,te=null):Ge=te.sibling;var he=F(P,te,N[oe],U);if(he===null){te===null&&(te=Ge);break}e&&te&&he.alternate===null&&t(P,te),k=c(he,k,oe),ee===null?J=he:ee.sibling=he,ee=he,te=Ge}if(oe===N.length)return r(P,te),Ne&&Dn(P,oe),J;if(te===null){for(;oe<N.length;oe++)te=j(P,N[oe],U),te!==null&&(k=c(te,k,oe),ee===null?J=te:ee.sibling=te,ee=te);return Ne&&Dn(P,oe),J}for(te=o(P,te);oe<N.length;oe++)Ge=Q(te,P,oe,N[oe],U),Ge!==null&&(e&&Ge.alternate!==null&&te.delete(Ge.key===null?oe:Ge.key),k=c(Ge,k,oe),ee===null?J=Ge:ee.sibling=Ge,ee=Ge);return e&&te.forEach(function(An){return t(P,An)}),Ne&&Dn(P,oe),J}function q(P,k,N,U){var J=re(N);if(typeof J!="function")throw Error(l(150));if(N=J.call(N),N==null)throw Error(l(151));for(var ee=J=null,te=k,oe=k=0,Ge=null,he=N.next();te!==null&&!he.done;oe++,he=N.next()){te.index>oe?(Ge=te,te=null):Ge=te.sibling;var An=F(P,te,he.value,U);if(An===null){te===null&&(te=Ge);break}e&&te&&An.alternate===null&&t(P,te),k=c(An,k,oe),ee===null?J=An:ee.sibling=An,ee=An,te=Ge}if(he.done)return r(P,te),Ne&&Dn(P,oe),J;if(te===null){for(;!he.done;oe++,he=N.next())he=j(P,he.value,U),he!==null&&(k=c(he,k,oe),ee===null?J=he:ee.sibling=he,ee=he);return Ne&&Dn(P,oe),J}for(te=o(P,te);!he.done;oe++,he=N.next())he=Q(te,P,oe,he.value,U),he!==null&&(e&&he.alternate!==null&&te.delete(he.key===null?oe:he.key),k=c(he,k,oe),ee===null?J=he:ee.sibling=he,ee=he);return e&&te.forEach(function(Dh){return t(P,Dh)}),Ne&&Dn(P,oe),J}function De(P,k,N,U){if(typeof N=="object"&&N!==null&&N.type===W&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case B:e:{for(var J=N.key,ee=k;ee!==null;){if(ee.key===J){if(J=N.type,J===W){if(ee.tag===7){r(P,ee.sibling),k=u(ee,N.props.children),k.return=P,P=k;break e}}else if(ee.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Be&&pf(J)===ee.type){r(P,ee.sibling),k=u(ee,N.props),k.ref=ci(P,ee,N),k.return=P,P=k;break e}r(P,ee);break}else t(P,ee);ee=ee.sibling}N.type===W?(k=Qn(N.props.children,P.mode,U,N.key),k.return=P,P=k):(U=Zo(N.type,N.key,N.props,null,P.mode,U),U.ref=ci(P,k,N),U.return=P,P=U)}return p(P);case K:e:{for(ee=N.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===N.containerInfo&&k.stateNode.implementation===N.implementation){r(P,k.sibling),k=u(k,N.children||[]),k.return=P,P=k;break e}else{r(P,k);break}else t(P,k);k=k.sibling}k=Au(N,P.mode,U),k.return=P,P=k}return p(P);case Be:return ee=N._init,De(P,k,ee(N._payload),U)}if(Dr(N))return Z(P,k,N,U);if(re(N))return q(P,k,N,U);_o(P,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,k!==null&&k.tag===6?(r(P,k.sibling),k=u(k,N),k.return=P,P=k):(r(P,k),k=Hu(N,P.mode,U),k.return=P,P=k),p(P)):r(P,k)}return De}var vr=hf(!0),mf=hf(!1),Ro=Cn(null),No=null,wr=null,Ba=null;function ja(){Ba=wr=No=null}function Ua(e){var t=Ro.current;_e(Ro),e._currentValue=t}function Wa(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Sr(e,t){No=e,Ba=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Ba!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(No===null)throw Error(l(308));wr=e,No.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var bn=null;function Va(e){bn===null?bn=[e]:bn.push(e)}function gf(e,t,r,o){var u=t.interleaved;return u===null?(r.next=r,Va(t)):(r.next=u.next,u.next=r),t.interleaved=r,rn(e,o)}function rn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,fe&2){var u=o.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),o.pending=t,rn(e,r)}return u=o.interleaved,u===null?(t.next=t,Va(o)):(t.next=u.next,u.next=t),o.interleaved=t,rn(e,r)}function To(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,la(e,r)}}function vf(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?u=c=p:c=c.next=p,r=r.next}while(r!==null);c===null?u=c=t:c=c.next=t}else u=c=t;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ho(e,t,r,o){var u=e.updateQueue;En=!1;var c=u.firstBaseUpdate,p=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var x=v,H=x.next;x.next=null,p===null?c=H:p.next=H,p=x;var b=e.alternate;b!==null&&(b=b.updateQueue,v=b.lastBaseUpdate,v!==p&&(v===null?b.firstBaseUpdate=H:v.next=H,b.lastBaseUpdate=x))}if(c!==null){var j=u.baseState;p=0,b=H=x=null,v=c;do{var F=v.lane,Q=v.eventTime;if((o&F)===F){b!==null&&(b=b.next={eventTime:Q,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var Z=e,q=v;switch(F=t,Q=r,q.tag){case 1:if(Z=q.payload,typeof Z=="function"){j=Z.call(Q,j,F);break e}j=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=q.payload,F=typeof Z=="function"?Z.call(Q,j,F):Z,F==null)break e;j=X({},j,F);break e;case 2:En=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,F=u.effects,F===null?u.effects=[v]:F.push(v))}else Q={eventTime:Q,lane:F,tag:v.tag,payload:v.payload,callback:v.callback,next:null},b===null?(H=b=Q,x=j):b=b.next=Q,p|=F;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;F=v,v=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);if(b===null&&(x=j),u.baseState=x,u.firstBaseUpdate=H,u.lastBaseUpdate=b,t=u.shared.interleaved,t!==null){u=t;do p|=u.lane,u=u.next;while(u!==t)}else c===null&&(u.shared.lanes=0);Un|=p,e.lanes=p,e.memoizedState=j}}function wf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],u=o.callback;if(u!==null){if(o.callback=null,o=r,typeof u!="function")throw Error(l(191,u));u.call(o)}}}var fi={},jt=Cn(fi),di=Cn(fi),pi=Cn(fi);function Bn(e){if(e===fi)throw Error(l(174));return e}function Qa(e,t){switch(Ee(pi,t),Ee(di,e),Ee(jt,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}_e(jt),Ee(jt,t)}function Cr(){_e(jt),_e(di),_e(pi)}function Sf(e){Bn(pi.current);var t=Bn(jt.current),r=Gl(t,e.type);t!==r&&(Ee(di,e),Ee(jt,r))}function Ga(e){di.current===e&&(_e(jt),_e(di))}var He=Cn(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=[];function Xa(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var Lo=M.ReactCurrentDispatcher,Za=M.ReactCurrentBatchConfig,jn=0,Ae=null,We=null,Ke=null,Io=!1,hi=!1,mi=0,ah=0;function et(){throw Error(l(321))}function qa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!At(e[r],t[r]))return!1;return!0}function Ja(e,t,r,o,u,c){if(jn=c,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?fh:dh,e=r(o,u),hi){c=0;do{if(hi=!1,mi=0,25<=c)throw Error(l(301));c+=1,Ke=We=null,t.updateQueue=null,Lo.current=ph,e=r(o,u)}while(hi)}if(Lo.current=Fo,t=We!==null&&We.next!==null,jn=0,Ke=We=Ae=null,Io=!1,t)throw Error(l(300));return e}function eu(){var e=mi!==0;return mi=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ae.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Pt(){if(We===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ke===null?Ae.memoizedState:Ke.next;if(t!==null)Ke=t,We=e;else{if(e===null)throw Error(l(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ke===null?Ae.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function gi(e,t){return typeof t=="function"?t(e):t}function tu(e){var t=Pt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=We,u=o.baseQueue,c=r.pending;if(c!==null){if(u!==null){var p=u.next;u.next=c.next,c.next=p}o.baseQueue=u=c,r.pending=null}if(u!==null){c=u.next,o=o.baseState;var v=p=null,x=null,H=c;do{var b=H.lane;if((jn&b)===b)x!==null&&(x=x.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),o=H.hasEagerState?H.eagerState:e(o,H.action);else{var j={lane:b,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};x===null?(v=x=j,p=o):x=x.next=j,Ae.lanes|=b,Un|=b}H=H.next}while(H!==null&&H!==c);x===null?p=o:x.next=v,At(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseState=p,t.baseQueue=x,r.lastRenderedState=o}if(e=r.interleaved,e!==null){u=e;do c=u.lane,Ae.lanes|=c,Un|=c,u=u.next;while(u!==e)}else u===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nu(e){var t=Pt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,c=t.memoizedState;if(u!==null){r.pending=null;var p=u=u.next;do c=e(c,p.action),p=p.next;while(p!==u);At(c,t.memoizedState)||(ut=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,o]}function Cf(){}function xf(e,t){var r=Ae,o=Pt(),u=t(),c=!At(o.memoizedState,u);if(c&&(o.memoizedState=u,ut=!0),o=o.queue,ru(Of.bind(null,r,o,e),[e]),o.getSnapshot!==t||c||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,yi(9,Ef.bind(null,r,o,u,t),void 0,null),Qe===null)throw Error(l(349));jn&30||kf(r,t,u)}return u}function kf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ef(e,t,r,o){t.value=r,t.getSnapshot=o,Pf(t)&&_f(e)}function Of(e,t,r){return r(function(){Pf(t)&&_f(e)})}function Pf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!At(e,r)}catch{return!0}}function _f(e){var t=rn(e,1);t!==null&&Ft(t,e,1,-1)}function Rf(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:e},t.queue=e,e=e.dispatch=ch.bind(null,Ae,e),[t.memoizedState,e]}function yi(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Nf(){return Pt().memoizedState}function $o(e,t,r,o){var u=Ut();Ae.flags|=e,u.memoizedState=yi(1|t,r,void 0,o===void 0?null:o)}function Mo(e,t,r,o){var u=Pt();o=o===void 0?null:o;var c=void 0;if(We!==null){var p=We.memoizedState;if(c=p.destroy,o!==null&&qa(o,p.deps)){u.memoizedState=yi(t,r,c,o);return}}Ae.flags|=e,u.memoizedState=yi(1|t,r,c,o)}function Tf(e,t){return $o(8390656,8,e,t)}function ru(e,t){return Mo(2048,8,e,t)}function Hf(e,t){return Mo(4,2,e,t)}function Af(e,t){return Mo(4,4,e,t)}function Lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,r){return r=r!=null?r.concat([e]):null,Mo(4,4,Lf.bind(null,t,e),r)}function iu(){}function $f(e,t){var r=Pt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&qa(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Mf(e,t){var r=Pt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&qa(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Ff(e,t,r){return jn&21?(At(r,t)||(r=dc(),Ae.lanes|=r,Un|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r)}function uh(e,t){var r=ve;ve=r!==0&&4>r?r:4,e(!0);var o=Za.transition;Za.transition={};try{e(!1),t()}finally{ve=r,Za.transition=o}}function zf(){return Pt().memoizedState}function sh(e,t,r){var o=Nn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Df(e))bf(t,r);else if(r=gf(e,t,r,o),r!==null){var u=ot();Ft(r,e,o,u),Bf(r,t,o)}}function ch(e,t,r){var o=Nn(e),u={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Df(e))bf(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,v=c(p,r);if(u.hasEagerState=!0,u.eagerState=v,At(v,p)){var x=t.interleaved;x===null?(u.next=u,Va(t)):(u.next=x.next,x.next=u),t.interleaved=u;return}}catch{}finally{}r=gf(e,t,u,o),r!==null&&(u=ot(),Ft(r,e,o,u),Bf(r,t,o))}}function Df(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function bf(e,t){hi=Io=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bf(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,la(e,r)}}var Fo={readContext:Ot,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},fh={readContext:Ot,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Tf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$o(4194308,4,Lf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Ut();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=sh.bind(null,Ae,e),[o.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Rf,useDebugValue:iu,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Rf(!1),t=e[0];return e=uh.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Ae,u=Ut();if(Ne){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Qe===null)throw Error(l(349));jn&30||kf(o,t,r)}u.memoizedState=r;var c={value:r,getSnapshot:t};return u.queue=c,Tf(Of.bind(null,o,c,e),[e]),o.flags|=2048,yi(9,Ef.bind(null,o,c,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Qe.identifierPrefix;if(Ne){var r=nn,o=tn;r=(o&~(1<<32-Ht(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=mi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ah++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dh={readContext:Ot,useCallback:$f,useContext:Ot,useEffect:ru,useImperativeHandle:If,useInsertionEffect:Hf,useLayoutEffect:Af,useMemo:Mf,useReducer:tu,useRef:Nf,useState:function(){return tu(gi)},useDebugValue:iu,useDeferredValue:function(e){var t=Pt();return Ff(t,We.memoizedState,e)},useTransition:function(){var e=tu(gi)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1},ph={readContext:Ot,useCallback:$f,useContext:Ot,useEffect:ru,useImperativeHandle:If,useInsertionEffect:Hf,useLayoutEffect:Af,useMemo:Mf,useReducer:nu,useRef:Nf,useState:function(){return nu(gi)},useDebugValue:iu,useDeferredValue:function(e){var t=Pt();return We===null?t.memoizedState=e:Ff(t,We.memoizedState,e)},useTransition:function(){var e=nu(gi)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ou(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var zo={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=ot(),u=Nn(e),c=on(o,u);c.payload=t,r!=null&&(c.callback=r),t=On(e,c,u),t!==null&&(Ft(t,e,u,o),To(t,e,u))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=ot(),u=Nn(e),c=on(o,u);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=On(e,c,u),t!==null&&(Ft(t,e,u,o),To(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),o=Nn(e),u=on(r,o);u.tag=2,t!=null&&(u.callback=t),t=On(e,u,o),t!==null&&(Ft(t,e,o,r),To(t,e,o))}};function jf(e,t,r,o,u,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,p):t.prototype&&t.prototype.isPureReactComponent?!ri(r,o)||!ri(u,c):!0}function Uf(e,t,r){var o=!1,u=xn,c=t.contextType;return typeof c=="object"&&c!==null?c=Ot(c):(u=at(t)?Fn:Je.current,o=t.contextTypes,c=(o=o!=null)?hr(e,u):xn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=c),t}function Wf(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function lu(e,t,r,o){var u=e.stateNode;u.props=r,u.state=e.memoizedState,u.refs={},Ka(e);var c=t.contextType;typeof c=="object"&&c!==null?u.context=Ot(c):(c=at(t)?Fn:Je.current,u.context=hr(e,c)),u.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(ou(e,t,c,r),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&zo.enqueueReplaceState(u,u.state,null),Ho(e,r,u,o),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var r="",o=t;do r+=de(o),o=o.return;while(o);var u=r}catch(c){u=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:u,digest:null}}function au(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var hh=typeof WeakMap=="function"?WeakMap:Map;function Vf(e,t,r){r=on(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Vo||(Vo=!0,ku=o),uu(e,t)},r}function Kf(e,t,r){r=on(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var u=t.value;r.payload=function(){return o(u)},r.callback=function(){uu(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){uu(e,t),typeof o!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Qf(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new hh;var u=new Set;o.set(t,u)}else u=o.get(t),u===void 0&&(u=new Set,o.set(t,u));u.has(r)||(u.add(r),e=Rh.bind(null,e,t,r),t.then(e,e))}function Gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yf(e,t,r,o,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=on(-1,1),t.tag=2,On(r,t,1))),r.lanes|=1),e)}var mh=M.ReactCurrentOwner,ut=!1;function it(e,t,r,o){t.child=e===null?mf(t,null,r,o):vr(t,e.child,r,o)}function Xf(e,t,r,o,u){r=r.render;var c=t.ref;return Sr(t,u),o=Ja(e,t,r,o,c,u),r=eu(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,ln(e,t,u)):(Ne&&r&&Ma(t),t.flags|=1,it(e,t,o,u),t.child)}function Zf(e,t,r,o,u){if(e===null){var c=r.type;return typeof c=="function"&&!Tu(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,qf(e,t,c,o,u)):(e=Zo(r.type,null,o,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&u)){var p=c.memoizedProps;if(r=r.compare,r=r!==null?r:ri,r(p,o)&&e.ref===t.ref)return ln(e,t,u)}return t.flags|=1,e=Hn(c,o),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,r,o,u){if(e!==null){var c=e.memoizedProps;if(ri(c,o)&&e.ref===t.ref)if(ut=!1,t.pendingProps=o=c,(e.lanes&u)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,ln(e,t,u)}return su(e,t,r,o,u)}function Jf(e,t,r){var o=t.pendingProps,u=o.children,c=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Er,yt),yt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Er,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:r,Ee(Er,yt),yt|=o}else c!==null?(o=c.baseLanes|r,t.memoizedState=null):o=r,Ee(Er,yt),yt|=o;return it(e,t,u,r),t.child}function ed(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,r,o,u){var c=at(r)?Fn:Je.current;return c=hr(t,c),Sr(t,u),r=Ja(e,t,r,o,c,u),o=eu(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,ln(e,t,u)):(Ne&&o&&Ma(t),t.flags|=1,it(e,t,r,u),t.child)}function td(e,t,r,o,u){if(at(r)){var c=!0;xo(t)}else c=!1;if(Sr(t,u),t.stateNode===null)bo(e,t),Uf(t,r,o),lu(t,r,o,u),o=!0;else if(e===null){var p=t.stateNode,v=t.memoizedProps;p.props=v;var x=p.context,H=r.contextType;typeof H=="object"&&H!==null?H=Ot(H):(H=at(r)?Fn:Je.current,H=hr(t,H));var b=r.getDerivedStateFromProps,j=typeof b=="function"||typeof p.getSnapshotBeforeUpdate=="function";j||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==o||x!==H)&&Wf(t,p,o,H),En=!1;var F=t.memoizedState;p.state=F,Ho(t,o,p,u),x=t.memoizedState,v!==o||F!==x||lt.current||En?(typeof b=="function"&&(ou(t,r,b,o),x=t.memoizedState),(v=En||jf(t,r,v,o,F,x,H))?(j||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=x),p.props=o,p.state=x,p.context=H,o=v):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{p=t.stateNode,yf(e,t),v=t.memoizedProps,H=t.type===t.elementType?v:It(t.type,v),p.props=H,j=t.pendingProps,F=p.context,x=r.contextType,typeof x=="object"&&x!==null?x=Ot(x):(x=at(r)?Fn:Je.current,x=hr(t,x));var Q=r.getDerivedStateFromProps;(b=typeof Q=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==j||F!==x)&&Wf(t,p,o,x),En=!1,F=t.memoizedState,p.state=F,Ho(t,o,p,u);var Z=t.memoizedState;v!==j||F!==Z||lt.current||En?(typeof Q=="function"&&(ou(t,r,Q,o),Z=t.memoizedState),(H=En||jf(t,r,H,o,F,Z,x)||!1)?(b||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,Z,x),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,Z,x)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Z),p.props=o,p.state=Z,p.context=x,o=H):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),o=!1)}return cu(e,t,r,o,c,u)}function cu(e,t,r,o,u,c){ed(e,t);var p=(t.flags&128)!==0;if(!o&&!p)return u&&lf(t,r,!1),ln(e,t,c);o=t.stateNode,mh.current=t;var v=p&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&p?(t.child=vr(t,e.child,null,c),t.child=vr(t,null,v,c)):it(e,t,v,c),t.memoizedState=o.state,u&&lf(t,r,!0),t.child}function nd(e){var t=e.stateNode;t.pendingContext?rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rf(e,t.context,!1),Qa(e,t.containerInfo)}function rd(e,t,r,o,u){return yr(),ba(u),t.flags|=256,it(e,t,r,o),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function du(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,r){var o=t.pendingProps,u=He.current,c=!1,p=(t.flags&128)!==0,v;if((v=p)||(v=e!==null&&e.memoizedState===null?!1:(u&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ee(He,u&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=o.children,e=o.fallback,c?(o=t.mode,c=t.child,p={mode:"hidden",children:p},!(o&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=qo(p,o,0,null),e=Qn(e,o,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=du(r),t.memoizedState=fu,e):pu(t,p));if(u=e.memoizedState,u!==null&&(v=u.dehydrated,v!==null))return gh(e,t,p,o,v,u,r);if(c){c=o.fallback,p=t.mode,u=e.child,v=u.sibling;var x={mode:"hidden",children:o.children};return!(p&1)&&t.child!==u?(o=t.child,o.childLanes=0,o.pendingProps=x,t.deletions=null):(o=Hn(u,x),o.subtreeFlags=u.subtreeFlags&14680064),v!==null?c=Hn(v,c):(c=Qn(c,p,r,null),c.flags|=2),c.return=t,o.return=t,o.sibling=c,t.child=o,o=c,c=t.child,p=e.child.memoizedState,p=p===null?du(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~r,t.memoizedState=fu,o}return c=e.child,e=c.sibling,o=Hn(c,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function pu(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,r,o){return o!==null&&ba(o),vr(t,e.child,null,r),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gh(e,t,r,o,u,c,p){if(r)return t.flags&256?(t.flags&=-257,o=au(Error(l(422))),Do(e,t,p,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=o.fallback,u=t.mode,o=qo({mode:"visible",children:o.children},u,0,null),c=Qn(c,u,p,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,t.mode&1&&vr(t,e.child,null,p),t.child.memoizedState=du(p),t.memoizedState=fu,c);if(!(t.mode&1))return Do(e,t,p,null);if(u.data==="$!"){if(o=u.nextSibling&&u.nextSibling.dataset,o)var v=o.dgst;return o=v,c=Error(l(419)),o=au(c,o,void 0),Do(e,t,p,o)}if(v=(p&e.childLanes)!==0,ut||v){if(o=Qe,o!==null){switch(p&-p){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(o.suspendedLanes|p)?0:u,u!==0&&u!==c.retryLane&&(c.retryLane=u,rn(e,u),Ft(o,e,u,-1))}return Nu(),o=au(Error(l(421))),Do(e,t,p,o)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=Nh.bind(null,e),u._reactRetry=t,null):(e=c.treeContext,gt=Sn(u.nextSibling),mt=t,Ne=!0,Lt=null,e!==null&&(kt[Et++]=tn,kt[Et++]=nn,kt[Et++]=zn,tn=e.id,nn=e.overflow,zn=t),t=pu(t,o.children),t.flags|=4096,t)}function od(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Wa(e.return,t,r)}function hu(e,t,r,o,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=r,c.tailMode=u)}function ld(e,t,r){var o=t.pendingProps,u=o.revealOrder,c=o.tail;if(it(e,t,o.children,r),o=He.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,r,t);else if(e.tag===19)od(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(He,o),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&Ao(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),hu(t,!1,u,r,c);break;case"backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Ao(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}hu(t,!0,r,null,c);break;case"together":hu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Hn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Hn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function yh(e,t,r){switch(t.tag){case 3:nd(t),yr();break;case 5:Sf(t);break;case 1:at(t.type)&&xo(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,u=t.memoizedProps.value;Ee(Ro,o._currentValue),o._currentValue=u;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(He,He.current&1),t.flags|=128,null):r&t.child.childLanes?id(e,t,r):(Ee(He,He.current&1),e=ln(e,t,r),e!==null?e.sibling:null);Ee(He,He.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return ld(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(He,He.current),o)break;return null;case 22:case 23:return t.lanes=0,Jf(e,t,r)}return ln(e,t,r)}var ad,mu,ud,sd;ad=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},mu=function(){},ud=function(e,t,r,o){var u=e.memoizedProps;if(u!==o){e=t.stateNode,Bn(jt.current);var c=null;switch(r){case"input":u=Wl(e,u),o=Wl(e,o),c=[];break;case"select":u=X({},u,{value:void 0}),o=X({},o,{value:void 0}),c=[];break;case"textarea":u=Ql(e,u),o=Ql(e,o),c=[];break;default:typeof u.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=wo)}Yl(r,o);var p;r=null;for(H in u)if(!o.hasOwnProperty(H)&&u.hasOwnProperty(H)&&u[H]!=null)if(H==="style"){var v=u[H];for(p in v)v.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?c||(c=[]):(c=c||[]).push(H,null));for(H in o){var x=o[H];if(v=u!=null?u[H]:void 0,o.hasOwnProperty(H)&&x!==v&&(x!=null||v!=null))if(H==="style")if(v){for(p in v)!v.hasOwnProperty(p)||x&&x.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in x)x.hasOwnProperty(p)&&v[p]!==x[p]&&(r||(r={}),r[p]=x[p])}else r||(c||(c=[]),c.push(H,r)),r=x;else H==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,v=v?v.__html:void 0,x!=null&&v!==x&&(c=c||[]).push(H,x)):H==="children"?typeof x!="string"&&typeof x!="number"||(c=c||[]).push(H,""+x):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(x!=null&&H==="onScroll"&&Pe("scroll",e),c||v===x||(c=[])):(c=c||[]).push(H,x))}r&&(c=c||[]).push("style",r);var H=c;(t.updateQueue=H)&&(t.flags|=4)}},sd=function(e,t,r,o){r!==o&&(t.flags|=4)};function vi(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&14680064,o|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function vh(e,t,r){var o=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return at(t.type)&&Co(),tt(t),null;case 3:return o=t.stateNode,Cr(),_e(lt),_e(Je),Xa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Pu(Lt),Lt=null))),mu(e,t),tt(t),null;case 5:Ga(t);var u=Bn(pi.current);if(r=t.type,e!==null&&t.stateNode!=null)ud(e,t,r,o,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return tt(t),null}if(e=Bn(jt.current),Po(t)){o=t.stateNode,r=t.type;var c=t.memoizedProps;switch(o[Bt]=t,o[ui]=c,e=(t.mode&1)!==0,r){case"dialog":Pe("cancel",o),Pe("close",o);break;case"iframe":case"object":case"embed":Pe("load",o);break;case"video":case"audio":for(u=0;u<oi.length;u++)Pe(oi[u],o);break;case"source":Pe("error",o);break;case"img":case"image":case"link":Pe("error",o),Pe("load",o);break;case"details":Pe("toggle",o);break;case"input":js(o,c),Pe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},Pe("invalid",o);break;case"textarea":Vs(o,c),Pe("invalid",o)}Yl(r,c),u=null;for(var p in c)if(c.hasOwnProperty(p)){var v=c[p];p==="children"?typeof v=="string"?o.textContent!==v&&(c.suppressHydrationWarning!==!0&&vo(o.textContent,v,e),u=["children",v]):typeof v=="number"&&o.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&vo(o.textContent,v,e),u=["children",""+v]):s.hasOwnProperty(p)&&v!=null&&p==="onScroll"&&Pe("scroll",o)}switch(r){case"input":Gi(o),Ws(o,c,!0);break;case"textarea":Gi(o),Qs(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=wo)}o=u,t.updateQueue=o,o!==null&&(t.flags|=4)}else{p=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=p.createElement(r,{is:o.is}):(e=p.createElement(r),r==="select"&&(p=e,o.multiple?p.multiple=!0:o.size&&(p.size=o.size))):e=p.createElementNS(e,r),e[Bt]=t,e[ui]=o,ad(e,t,!1,!1),t.stateNode=e;e:{switch(p=Xl(r,o),r){case"dialog":Pe("cancel",e),Pe("close",e),u=o;break;case"iframe":case"object":case"embed":Pe("load",e),u=o;break;case"video":case"audio":for(u=0;u<oi.length;u++)Pe(oi[u],e);u=o;break;case"source":Pe("error",e),u=o;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),u=o;break;case"details":Pe("toggle",e),u=o;break;case"input":js(e,o),u=Wl(e,o),Pe("invalid",e);break;case"option":u=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},u=X({},o,{value:void 0}),Pe("invalid",e);break;case"textarea":Vs(e,o),u=Ql(e,o),Pe("invalid",e);break;default:u=o}Yl(r,u),v=u;for(c in v)if(v.hasOwnProperty(c)){var x=v[c];c==="style"?Zs(e,x):c==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Ys(e,x)):c==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&br(e,x):typeof x=="number"&&br(e,""+x):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(s.hasOwnProperty(c)?x!=null&&c==="onScroll"&&Pe("scroll",e):x!=null&&$(e,c,x,p))}switch(r){case"input":Gi(e),Ws(e,o,!1);break;case"textarea":Gi(e),Qs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ye(o.value));break;case"select":e.multiple=!!o.multiple,c=o.value,c!=null?nr(e,!!o.multiple,c,!1):o.defaultValue!=null&&nr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=wo)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)sd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=Bn(pi.current),Bn(jt.current),Po(t)){if(o=t.stateNode,r=t.memoizedProps,o[Bt]=t,(c=o.nodeValue!==r)&&(e=mt,e!==null))switch(e.tag){case 3:vo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(o.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Bt]=t,t.stateNode=o}return tt(t),null;case 13:if(_e(He),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&gt!==null&&t.mode&1&&!(t.flags&128))df(),yr(),t.flags|=98560,c=!1;else if(c=Po(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[Bt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),c=!1}else Lt!==null&&(Pu(Lt),Lt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?Ve===0&&(Ve=3):Nu())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Cr(),mu(e,t),e===null&&li(t.stateNode.containerInfo),tt(t),null;case 10:return Ua(t.type._context),tt(t),null;case 17:return at(t.type)&&Co(),tt(t),null;case 19:if(_e(He),c=t.memoizedState,c===null)return tt(t),null;if(o=(t.flags&128)!==0,p=c.rendering,p===null)if(o)vi(c,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=Ao(e),p!==null){for(t.flags|=128,vi(c,!1),o=p.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)c=r,e=o,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(He,He.current&1|2),t.child}e=e.sibling}c.tail!==null&&ze()>Or&&(t.flags|=128,o=!0,vi(c,!1),t.lanes=4194304)}else{if(!o)if(e=Ao(p),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Ne)return tt(t),null}else 2*ze()-c.renderingStartTime>Or&&r!==1073741824&&(t.flags|=128,o=!0,vi(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(r=c.last,r!==null?r.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ze(),t.sibling=null,r=He.current,Ee(He,o?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return Ru(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?yt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function wh(e,t){switch(Fa(t),t.tag){case 1:return at(t.type)&&Co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),_e(lt),_e(Je),Xa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(_e(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(He),null;case 4:return Cr(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var Bo=!1,nt=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,Y=null;function kr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ie(e,t,o)}else r.current=null}function gu(e,t,r){try{r()}catch(o){Ie(e,t,o)}}var cd=!1;function Ch(e,t){if(Ra=lo,e=Bc(),Sa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var p=0,v=-1,x=-1,H=0,b=0,j=e,F=null;t:for(;;){for(var Q;j!==r||u!==0&&j.nodeType!==3||(v=p+u),j!==c||o!==0&&j.nodeType!==3||(x=p+o),j.nodeType===3&&(p+=j.nodeValue.length),(Q=j.firstChild)!==null;)F=j,j=Q;for(;;){if(j===e)break t;if(F===r&&++H===u&&(v=p),F===c&&++b===o&&(x=p),(Q=j.nextSibling)!==null)break;j=F,F=j.parentNode}j=Q}r=v===-1||x===-1?null:{start:v,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Na={focusedElem:e,selectionRange:r},lo=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var Z=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var q=Z.memoizedProps,De=Z.memoizedState,P=t.stateNode,k=P.getSnapshotBeforeUpdate(t.elementType===t.type?q:It(t.type,q),De);P.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(U){Ie(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return Z=cd,cd=!1,Z}function wi(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&e)===e){var c=u.destroy;u.destroy=void 0,c!==void 0&&gu(t,r,c)}u=u.next}while(u!==o)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function yu(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[ui],delete t[La],delete t[rh],delete t[ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wo));else if(o!==4&&(e=e.child,e!==null))for(vu(e,t,r),e=e.sibling;e!==null;)vu(e,t,r),e=e.sibling}function wu(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(wu(e,t,r),e=e.sibling;e!==null;)wu(e,t,r),e=e.sibling}var Ye=null,$t=!1;function Pn(e,t,r){for(r=r.child;r!==null;)hd(e,t,r),r=r.sibling}function hd(e,t,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(eo,r)}catch{}switch(r.tag){case 5:nt||kr(r,t);case 6:var o=Ye,u=$t;Ye=null,Pn(e,t,r),Ye=o,$t=u,Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?Aa(e.parentNode,r):e.nodeType===1&&Aa(e,r),Zr(e)):Aa(Ye,r.stateNode));break;case 4:o=Ye,u=$t,Ye=r.stateNode.containerInfo,$t=!0,Pn(e,t,r),Ye=o,$t=u;break;case 0:case 11:case 14:case 15:if(!nt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){u=o=o.next;do{var c=u,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&gu(r,t,p),u=u.next}while(u!==o)}Pn(e,t,r);break;case 1:if(!nt&&(kr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(v){Ie(r,t,v)}Pn(e,t,r);break;case 21:Pn(e,t,r);break;case 22:r.mode&1?(nt=(o=nt)||r.memoizedState!==null,Pn(e,t,r),nt=o):Pn(e,t,r);break;default:Pn(e,t,r)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Sh),t.forEach(function(o){var u=Th.bind(null,e,o);r.has(o)||(r.add(o),o.then(u,u))})}}function Mt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];try{var c=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 5:Ye=v.stateNode,$t=!1;break e;case 3:Ye=v.stateNode.containerInfo,$t=!0;break e;case 4:Ye=v.stateNode.containerInfo,$t=!0;break e}v=v.return}if(Ye===null)throw Error(l(160));hd(c,p,u),Ye=null,$t=!1;var x=u.alternate;x!==null&&(x.return=null),u.return=null}catch(H){Ie(u,t,H)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}function gd(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Wt(e),o&4){try{wi(3,e,e.return),jo(3,e)}catch(q){Ie(e,e.return,q)}try{wi(5,e,e.return)}catch(q){Ie(e,e.return,q)}}break;case 1:Mt(t,e),Wt(e),o&512&&r!==null&&kr(r,r.return);break;case 5:if(Mt(t,e),Wt(e),o&512&&r!==null&&kr(r,r.return),e.flags&32){var u=e.stateNode;try{br(u,"")}catch(q){Ie(e,e.return,q)}}if(o&4&&(u=e.stateNode,u!=null)){var c=e.memoizedProps,p=r!==null?r.memoizedProps:c,v=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&Us(u,c),Xl(v,p);var H=Xl(v,c);for(p=0;p<x.length;p+=2){var b=x[p],j=x[p+1];b==="style"?Zs(u,j):b==="dangerouslySetInnerHTML"?Ys(u,j):b==="children"?br(u,j):$(u,b,j,H)}switch(v){case"input":Vl(u,c);break;case"textarea":Ks(u,c);break;case"select":var F=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!c.multiple;var Q=c.value;Q!=null?nr(u,!!c.multiple,Q,!1):F!==!!c.multiple&&(c.defaultValue!=null?nr(u,!!c.multiple,c.defaultValue,!0):nr(u,!!c.multiple,c.multiple?[]:"",!1))}u[ui]=c}catch(q){Ie(e,e.return,q)}}break;case 6:if(Mt(t,e),Wt(e),o&4){if(e.stateNode===null)throw Error(l(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(q){Ie(e,e.return,q)}}break;case 3:if(Mt(t,e),Wt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(q){Ie(e,e.return,q)}break;case 4:Mt(t,e),Wt(e);break;case 13:Mt(t,e),Wt(e),u=e.child,u.flags&8192&&(c=u.memoizedState!==null,u.stateNode.isHidden=c,!c||u.alternate!==null&&u.alternate.memoizedState!==null||(xu=ze())),o&4&&md(e);break;case 22:if(b=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(H=nt)||b,Mt(t,e),nt=H):Mt(t,e),Wt(e),o&8192){if(H=e.memoizedState!==null,(e.stateNode.isHidden=H)&&!b&&e.mode&1)for(Y=e,b=e.child;b!==null;){for(j=Y=b;Y!==null;){switch(F=Y,Q=F.child,F.tag){case 0:case 11:case 14:case 15:wi(4,F,F.return);break;case 1:kr(F,F.return);var Z=F.stateNode;if(typeof Z.componentWillUnmount=="function"){o=F,r=F.return;try{t=o,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(q){Ie(o,r,q)}}break;case 5:kr(F,F.return);break;case 22:if(F.memoizedState!==null){wd(j);continue}}Q!==null?(Q.return=F,Y=Q):wd(j)}b=b.sibling}e:for(b=null,j=e;;){if(j.tag===5){if(b===null){b=j;try{u=j.stateNode,H?(c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=j.stateNode,x=j.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null,v.style.display=Xs("display",p))}catch(q){Ie(e,e.return,q)}}}else if(j.tag===6){if(b===null)try{j.stateNode.nodeValue=H?"":j.memoizedProps}catch(q){Ie(e,e.return,q)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;b===j&&(b=null),j=j.return}b===j&&(b=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Mt(t,e),Wt(e),o&4&&md(e);break;case 21:break;default:Mt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(dd(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var u=o.stateNode;o.flags&32&&(br(u,""),o.flags&=-33);var c=pd(e);wu(e,c,u);break;case 3:case 4:var p=o.stateNode.containerInfo,v=pd(e);vu(e,v,p);break;default:throw Error(l(161))}}catch(x){Ie(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xh(e,t,r){Y=e,yd(e)}function yd(e,t,r){for(var o=(e.mode&1)!==0;Y!==null;){var u=Y,c=u.child;if(u.tag===22&&o){var p=u.memoizedState!==null||Bo;if(!p){var v=u.alternate,x=v!==null&&v.memoizedState!==null||nt;v=Bo;var H=nt;if(Bo=p,(nt=x)&&!H)for(Y=u;Y!==null;)p=Y,x=p.child,p.tag===22&&p.memoizedState!==null?Sd(u):x!==null?(x.return=p,Y=x):Sd(u);for(;c!==null;)Y=c,yd(c),c=c.sibling;Y=u,Bo=v,nt=H}vd(e)}else u.subtreeFlags&8772&&c!==null?(c.return=u,Y=c):vd(e)}}function vd(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||jo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!nt)if(r===null)o.componentDidMount();else{var u=t.elementType===t.type?r.memoizedProps:It(t.type,r.memoizedProps);o.componentDidUpdate(u,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&wf(t,c,o);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wf(t,p,r)}break;case 5:var v=t.stateNode;if(r===null&&t.flags&4){r=v;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var H=t.alternate;if(H!==null){var b=H.memoizedState;if(b!==null){var j=b.dehydrated;j!==null&&Zr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}nt||t.flags&512&&yu(t)}catch(F){Ie(t,t.return,F)}}if(t===e){Y=null;break}if(r=t.sibling,r!==null){r.return=t.return,Y=r;break}Y=t.return}}function wd(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Y=r;break}Y=t.return}}function Sd(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{jo(4,t)}catch(x){Ie(t,r,x)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var u=t.return;try{o.componentDidMount()}catch(x){Ie(t,u,x)}}var c=t.return;try{yu(t)}catch(x){Ie(t,c,x)}break;case 5:var p=t.return;try{yu(t)}catch(x){Ie(t,p,x)}}}catch(x){Ie(t,t.return,x)}if(t===e){Y=null;break}var v=t.sibling;if(v!==null){v.return=t.return,Y=v;break}Y=t.return}}var kh=Math.ceil,Uo=M.ReactCurrentDispatcher,Su=M.ReactCurrentOwner,_t=M.ReactCurrentBatchConfig,fe=0,Qe=null,je=null,Xe=0,yt=0,Er=Cn(0),Ve=0,Si=null,Un=0,Wo=0,Cu=0,Ci=null,st=null,xu=0,Or=1/0,an=null,Vo=!1,ku=null,_n=null,Ko=!1,Rn=null,Qo=0,xi=0,Eu=null,Go=-1,Yo=0;function ot(){return fe&6?ze():Go!==-1?Go:Go=ze()}function Nn(e){return e.mode&1?fe&2&&Xe!==0?Xe&-Xe:lh.transition!==null?(Yo===0&&(Yo=dc()),Yo):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e):1}function Ft(e,t,r,o){if(50<xi)throw xi=0,Eu=null,Error(l(185));Kr(e,r,o),(!(fe&2)||e!==Qe)&&(e===Qe&&(!(fe&2)&&(Wo|=r),Ve===4&&Tn(e,Xe)),ct(e,o),r===1&&fe===0&&!(t.mode&1)&&(Or=ze()+500,ko&&kn()))}function ct(e,t){var r=e.callbackNode;l0(e,t);var o=ro(e,e===Qe?Xe:0);if(o===0)r!==null&&sc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&sc(r),t===1)e.tag===0?oh(xd.bind(null,e)):af(xd.bind(null,e)),th(function(){!(fe&6)&&kn()}),r=null;else{switch(pc(o)){case 1:r=ra;break;case 4:r=cc;break;case 16:r=Ji;break;case 536870912:r=fc;break;default:r=Ji}r=Td(r,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Cd(e,t){if(Go=-1,Yo=0,fe&6)throw Error(l(327));var r=e.callbackNode;if(Pr()&&e.callbackNode!==r)return null;var o=ro(e,e===Qe?Xe:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Xo(e,o);else{t=o;var u=fe;fe|=2;var c=Ed();(Qe!==e||Xe!==t)&&(an=null,Or=ze()+500,Vn(e,t));do try{Ph();break}catch(v){kd(e,v)}while(!0);ja(),Uo.current=c,fe=u,je!==null?t=0:(Qe=null,Xe=0,t=Ve)}if(t!==0){if(t===2&&(u=ia(e),u!==0&&(o=u,t=Ou(e,u))),t===1)throw r=Si,Vn(e,0),Tn(e,o),ct(e,ze()),r;if(t===6)Tn(e,o);else{if(u=e.current.alternate,!(o&30)&&!Eh(u)&&(t=Xo(e,o),t===2&&(c=ia(e),c!==0&&(o=c,t=Ou(e,c))),t===1))throw r=Si,Vn(e,0),Tn(e,o),ct(e,ze()),r;switch(e.finishedWork=u,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Kn(e,st,an);break;case 3:if(Tn(e,o),(o&130023424)===o&&(t=xu+500-ze(),10<t)){if(ro(e,0)!==0)break;if(u=e.suspendedLanes,(u&o)!==o){ot(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ha(Kn.bind(null,e,st,an),t);break}Kn(e,st,an);break;case 4:if(Tn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,u=-1;0<o;){var p=31-Ht(o);c=1<<p,p=t[p],p>u&&(u=p),o&=~c}if(o=u,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kh(o/1960))-o,10<o){e.timeoutHandle=Ha(Kn.bind(null,e,st,an),o);break}Kn(e,st,an);break;case 5:Kn(e,st,an);break;default:throw Error(l(329))}}}return ct(e,ze()),e.callbackNode===r?Cd.bind(null,e):null}function Ou(e,t){var r=Ci;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=st,st=r,t!==null&&Pu(t)),e}function Pu(e){st===null?st=e:st.push.apply(st,e)}function Eh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var u=r[o],c=u.getSnapshot;u=u.value;try{if(!At(c(),u))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Cu,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),o=1<<r;e[r]=-1,t&=~o}}function xd(e){if(fe&6)throw Error(l(327));Pr();var t=ro(e,0);if(!(t&1))return ct(e,ze()),null;var r=Xo(e,t);if(e.tag!==0&&r===2){var o=ia(e);o!==0&&(t=o,r=Ou(e,o))}if(r===1)throw r=Si,Vn(e,0),Tn(e,t),ct(e,ze()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,st,an),ct(e,ze()),null}function _u(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(Or=ze()+500,ko&&kn())}}function Wn(e){Rn!==null&&Rn.tag===0&&!(fe&6)&&Pr();var t=fe;fe|=1;var r=_t.transition,o=ve;try{if(_t.transition=null,ve=1,e)return e()}finally{ve=o,_t.transition=r,fe=t,!(fe&6)&&kn()}}function Ru(){yt=Er.current,_e(Er)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,eh(r)),je!==null)for(r=je.return;r!==null;){var o=r;switch(Fa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Co();break;case 3:Cr(),_e(lt),_e(Je),Xa();break;case 5:Ga(o);break;case 4:Cr();break;case 13:_e(He);break;case 19:_e(He);break;case 10:Ua(o.type._context);break;case 22:case 23:Ru()}r=r.return}if(Qe=e,je=e=Hn(e.current,null),Xe=yt=t,Ve=0,Si=null,Cu=Wo=Un=0,st=Ci=null,bn!==null){for(t=0;t<bn.length;t++)if(r=bn[t],o=r.interleaved,o!==null){r.interleaved=null;var u=o.next,c=r.pending;if(c!==null){var p=c.next;c.next=u,o.next=p}r.pending=o}bn=null}return e}function kd(e,t){do{var r=je;try{if(ja(),Lo.current=Fo,Io){for(var o=Ae.memoizedState;o!==null;){var u=o.queue;u!==null&&(u.pending=null),o=o.next}Io=!1}if(jn=0,Ke=We=Ae=null,hi=!1,mi=0,Su.current=null,r===null||r.return===null){Ve=1,Si=t,je=null;break}e:{var c=e,p=r.return,v=r,x=t;if(t=Xe,v.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var H=x,b=v,j=b.tag;if(!(b.mode&1)&&(j===0||j===11||j===15)){var F=b.alternate;F?(b.updateQueue=F.updateQueue,b.memoizedState=F.memoizedState,b.lanes=F.lanes):(b.updateQueue=null,b.memoizedState=null)}var Q=Gf(p);if(Q!==null){Q.flags&=-257,Yf(Q,p,v,c,t),Q.mode&1&&Qf(c,H,t),t=Q,x=H;var Z=t.updateQueue;if(Z===null){var q=new Set;q.add(x),t.updateQueue=q}else Z.add(x);break e}else{if(!(t&1)){Qf(c,H,t),Nu();break e}x=Error(l(426))}}else if(Ne&&v.mode&1){var De=Gf(p);if(De!==null){!(De.flags&65536)&&(De.flags|=256),Yf(De,p,v,c,t),ba(xr(x,v));break e}}c=x=xr(x,v),Ve!==4&&(Ve=2),Ci===null?Ci=[c]:Ci.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=Vf(c,x,t);vf(c,P);break e;case 1:v=x;var k=c.type,N=c.stateNode;if(!(c.flags&128)&&(typeof k.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(_n===null||!_n.has(N)))){c.flags|=65536,t&=-t,c.lanes|=t;var U=Kf(c,v,t);vf(c,U);break e}}c=c.return}while(c!==null)}Pd(r)}catch(J){t=J,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function Ed(){var e=Uo.current;return Uo.current=Fo,e===null?Fo:e}function Nu(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||!(Un&268435455)&&!(Wo&268435455)||Tn(Qe,Xe)}function Xo(e,t){var r=fe;fe|=2;var o=Ed();(Qe!==e||Xe!==t)&&(an=null,Vn(e,t));do try{Oh();break}catch(u){kd(e,u)}while(!0);if(ja(),fe=r,Uo.current=o,je!==null)throw Error(l(261));return Qe=null,Xe=0,Ve}function Oh(){for(;je!==null;)Od(je)}function Ph(){for(;je!==null&&!Zp();)Od(je)}function Od(e){var t=Nd(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Pd(e):je=t,Su.current=null}function Pd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=wh(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,je=null;return}}else if(r=vh(r,t,yt),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ve===0&&(Ve=5)}function Kn(e,t,r){var o=ve,u=_t.transition;try{_t.transition=null,ve=1,_h(e,t,r,o)}finally{_t.transition=u,ve=o}return null}function _h(e,t,r,o){do Pr();while(Rn!==null);if(fe&6)throw Error(l(327));r=e.finishedWork;var u=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(a0(e,c),e===Qe&&(je=Qe=null,Xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ko||(Ko=!0,Td(Ji,function(){return Pr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=_t.transition,_t.transition=null;var p=ve;ve=1;var v=fe;fe|=4,Su.current=null,Ch(e,r),gd(r,e),Q0(Na),lo=!!Ra,Na=Ra=null,e.current=r,xh(r),qp(),fe=v,ve=p,_t.transition=c}else e.current=r;if(Ko&&(Ko=!1,Rn=e,Qo=u),c=e.pendingLanes,c===0&&(_n=null),t0(r.stateNode),ct(e,ze()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)u=t[r],o(u.value,{componentStack:u.stack,digest:u.digest});if(Vo)throw Vo=!1,e=ku,ku=null,e;return Qo&1&&e.tag!==0&&Pr(),c=e.pendingLanes,c&1?e===Eu?xi++:(xi=0,Eu=e):xi=0,kn(),null}function Pr(){if(Rn!==null){var e=pc(Qo),t=_t.transition,r=ve;try{if(_t.transition=null,ve=16>e?16:e,Rn===null)var o=!1;else{if(e=Rn,Rn=null,Qo=0,fe&6)throw Error(l(331));var u=fe;for(fe|=4,Y=e.current;Y!==null;){var c=Y,p=c.child;if(Y.flags&16){var v=c.deletions;if(v!==null){for(var x=0;x<v.length;x++){var H=v[x];for(Y=H;Y!==null;){var b=Y;switch(b.tag){case 0:case 11:case 15:wi(8,b,c)}var j=b.child;if(j!==null)j.return=b,Y=j;else for(;Y!==null;){b=Y;var F=b.sibling,Q=b.return;if(fd(b),b===H){Y=null;break}if(F!==null){F.return=Q,Y=F;break}Y=Q}}}var Z=c.alternate;if(Z!==null){var q=Z.child;if(q!==null){Z.child=null;do{var De=q.sibling;q.sibling=null,q=De}while(q!==null)}}Y=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,Y=p;else e:for(;Y!==null;){if(c=Y,c.flags&2048)switch(c.tag){case 0:case 11:case 15:wi(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,Y=P;break e}Y=c.return}}var k=e.current;for(Y=k;Y!==null;){p=Y;var N=p.child;if(p.subtreeFlags&2064&&N!==null)N.return=p,Y=N;else e:for(p=k;Y!==null;){if(v=Y,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:jo(9,v)}}catch(J){Ie(v,v.return,J)}if(v===p){Y=null;break e}var U=v.sibling;if(U!==null){U.return=v.return,Y=U;break e}Y=v.return}}if(fe=u,kn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(eo,e)}catch{}o=!0}return o}finally{ve=r,_t.transition=t}}return!1}function _d(e,t,r){t=xr(r,t),t=Vf(e,t,1),e=On(e,t,1),t=ot(),e!==null&&(Kr(e,1,t),ct(e,t))}function Ie(e,t,r){if(e.tag===3)_d(e,e,r);else for(;t!==null;){if(t.tag===3){_d(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_n===null||!_n.has(o))){e=xr(r,e),e=Kf(t,e,1),t=On(t,e,1),e=ot(),t!==null&&(Kr(t,1,e),ct(t,e));break}}t=t.return}}function Rh(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Xe&r)===r&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>ze()-xu?Vn(e,0):Cu|=r),ct(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var r=ot();e=rn(e,t),e!==null&&(Kr(e,t,r),ct(e,r))}function Nh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Rd(e,r)}function Th(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Rd(e,r)}var Nd;Nd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)ut=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ut=!1,yh(e,t,r);ut=!!(e.flags&131072)}else ut=!1,Ne&&t.flags&1048576&&uf(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;bo(e,t),e=t.pendingProps;var u=hr(t,Je.current);Sr(t,r),u=Ja(null,t,o,e,u,r);var c=eu();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(o)?(c=!0,xo(t)):c=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ka(t),u.updater=zo,t.stateNode=u,u._reactInternals=t,lu(t,o,e,r),t=cu(null,t,o,!0,c,r)):(t.tag=0,Ne&&c&&Ma(t),it(null,t,u,r),t=t.child),t;case 16:o=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,u=o._init,o=u(o._payload),t.type=o,u=t.tag=Ah(o),e=It(o,e),u){case 0:t=su(null,t,o,e,r);break e;case 1:t=td(null,t,o,e,r);break e;case 11:t=Xf(null,t,o,e,r);break e;case 14:t=Zf(null,t,o,It(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:It(o,u),su(e,t,o,u,r);case 1:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:It(o,u),td(e,t,o,u,r);case 3:e:{if(nd(t),e===null)throw Error(l(387));o=t.pendingProps,c=t.memoizedState,u=c.element,yf(e,t),Ho(t,o,null,r);var p=t.memoizedState;if(o=p.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){u=xr(Error(l(423)),t),t=rd(e,t,o,r,u);break e}else if(o!==u){u=xr(Error(l(424)),t),t=rd(e,t,o,r,u);break e}else for(gt=Sn(t.stateNode.containerInfo.firstChild),mt=t,Ne=!0,Lt=null,r=mf(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(yr(),o===u){t=ln(e,t,r);break e}it(e,t,o,r)}t=t.child}return t;case 5:return Sf(t),e===null&&Da(t),o=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,p=u.children,Ta(o,u)?p=null:c!==null&&Ta(o,c)&&(t.flags|=32),ed(e,t),it(e,t,p,r),t.child;case 6:return e===null&&Da(t),null;case 13:return id(e,t,r);case 4:return Qa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=vr(t,null,o,r):it(e,t,o,r),t.child;case 11:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:It(o,u),Xf(e,t,o,u,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,u=t.pendingProps,c=t.memoizedProps,p=u.value,Ee(Ro,o._currentValue),o._currentValue=p,c!==null)if(At(c.value,p)){if(c.children===u.children&&!lt.current){t=ln(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){p=c.child;for(var x=v.firstContext;x!==null;){if(x.context===o){if(c.tag===1){x=on(-1,r&-r),x.tag=2;var H=c.updateQueue;if(H!==null){H=H.shared;var b=H.pending;b===null?x.next=x:(x.next=b.next,b.next=x),H.pending=x}}c.lanes|=r,x=c.alternate,x!==null&&(x.lanes|=r),Wa(c.return,r,t),v.lanes|=r;break}x=x.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(l(341));p.lanes|=r,v=p.alternate,v!==null&&(v.lanes|=r),Wa(p,r,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}it(e,t,u.children,r),t=t.child}return t;case 9:return u=t.type,o=t.pendingProps.children,Sr(t,r),u=Ot(u),o=o(u),t.flags|=1,it(e,t,o,r),t.child;case 14:return o=t.type,u=It(o,t.pendingProps),u=It(o.type,u),Zf(e,t,o,u,r);case 15:return qf(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:It(o,u),bo(e,t),t.tag=1,at(o)?(e=!0,xo(t)):e=!1,Sr(t,r),Uf(t,o,u),lu(t,o,u,r),cu(null,t,o,!0,e,r);case 19:return ld(e,t,r);case 22:return Jf(e,t,r)}throw Error(l(156,t.tag))};function Td(e,t){return uc(e,t)}function Hh(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,o){return new Hh(e,t,r,o)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ah(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===Fe)return 14}return 2}function Hn(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zo(e,t,r,o,u,c){var p=2;if(o=e,typeof e=="function")Tu(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case W:return Qn(r.children,u,c,t);case ne:p=8,u|=8;break;case le:return e=Rt(12,r,t,u|2),e.elementType=le,e.lanes=c,e;case ae:return e=Rt(13,r,t,u),e.elementType=ae,e.lanes=c,e;case Se:return e=Rt(19,r,t,u),e.elementType=Se,e.lanes=c,e;case Oe:return qo(r,u,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:p=10;break e;case G:p=9;break e;case ie:p=11;break e;case Fe:p=14;break e;case Be:p=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Rt(p,r,t,u),t.elementType=e,t.type=o,t.lanes=c,t}function Qn(e,t,r,o){return e=Rt(7,e,o,t),e.lanes=r,e}function qo(e,t,r,o){return e=Rt(22,e,o,t),e.elementType=Oe,e.lanes=r,e.stateNode={isHidden:!1},e}function Hu(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function Au(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lh(e,t,r,o,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=o,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Lu(e,t,r,o,u,c,p,v,x){return e=new Lh(e,t,r,v,x),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Rt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(c),e}function Ih(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Hd(e){if(!e)return xn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(at(r))return of(e,r,t)}return t}function Ad(e,t,r,o,u,c,p,v,x){return e=Lu(r,o,!0,e,u,c,p,v,x),e.context=Hd(null),r=e.current,o=ot(),u=Nn(r),c=on(o,u),c.callback=t??null,On(r,c,u),e.current.lanes=u,Kr(e,u,o),ct(e,o),e}function Jo(e,t,r,o){var u=t.current,c=ot(),p=Nn(u);return r=Hd(r),t.context===null?t.context=r:t.pendingContext=r,t=on(c,p),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=On(u,t,p),e!==null&&(Ft(e,u,p,c),To(e,u,p)),p}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Iu(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function $h(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}tl.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Jo(e,t,null,null)},tl.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Jo(null,e,null,null)}),t[Jt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yn.length&&t!==0&&t<yn[r].priority;r++);yn.splice(r,0,e),r===0&&wc(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Mh(e,t,r,o,u){if(u){if(typeof o=="function"){var c=o;o=function(){var H=el(p);c.call(H)}}var p=Ad(t,o,e,0,null,!1,!1,"",$d);return e._reactRootContainer=p,e[Jt]=p.current,li(e.nodeType===8?e.parentNode:e),Wn(),p}for(;u=e.lastChild;)e.removeChild(u);if(typeof o=="function"){var v=o;o=function(){var H=el(x);v.call(H)}}var x=Lu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=x,e[Jt]=x.current,li(e.nodeType===8?e.parentNode:e),Wn(function(){Jo(t,x,r,o)}),x}function rl(e,t,r,o,u){var c=r._reactRootContainer;if(c){var p=c;if(typeof u=="function"){var v=u;u=function(){var x=el(p);v.call(x)}}Jo(t,p,e,u)}else p=Mh(r,t,e,u,o);return el(p)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Vr(t.pendingLanes);r!==0&&(la(t,r|1),ct(t,ze()),!(fe&6)&&(Or=ze()+500,kn()))}break;case 13:Wn(function(){var o=rn(e,1);if(o!==null){var u=ot();Ft(o,e,1,u)}}),Iu(e,1)}},aa=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var r=ot();Ft(t,e,134217728,r)}Iu(e,134217728)}},mc=function(e){if(e.tag===13){var t=Nn(e),r=rn(e,t);if(r!==null){var o=ot();Ft(r,e,t,o)}Iu(e,t)}},gc=function(){return ve},yc=function(e,t){var r=ve;try{return ve=e,t()}finally{ve=r}},Jl=function(e,t,r){switch(t){case"input":if(Vl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var u=So(o);if(!u)throw Error(l(90));Bs(o),Vl(o,u)}}}break;case"textarea":Ks(e,r);break;case"select":t=r.value,t!=null&&nr(e,!!r.multiple,t,!1)}},tc=_u,nc=Wn;var Fh={usingClientEntryPoint:!1,Events:[si,dr,So,Js,ec,_u]},ki={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zh={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lc(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||$h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{eo=il.inject(zh),bt=il}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fh,ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(l(200));return Ih(e,t,null,r)},ft.createRoot=function(e,t){if(!Mu(e))throw Error(l(299));var r=!1,o="",u=Id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Lu(e,1,!1,null,null,r,!1,o,u),e[Jt]=t.current,li(e.nodeType===8?e.parentNode:e),new $u(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=lc(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return Wn(e)},ft.hydrate=function(e,t,r){if(!nl(t))throw Error(l(200));return rl(null,e,t,!0,r)},ft.hydrateRoot=function(e,t,r){if(!Mu(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,u=!1,c="",p=Id;if(r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=Ad(t,null,e,1,r??null,u,!1,c,p),e[Jt]=t.current,li(e),o)for(e=0;e<o.length;e++)r=o[e],u=r._getVersion,u=u(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,u]:t.mutableSourceEagerHydrationData.push(r,u);return new tl(t)},ft.render=function(e,t,r){if(!nl(t))throw Error(l(200));return rl(null,e,t,!1,r)},ft.unmountComponentAtNode=function(e){if(!nl(e))throw Error(l(40));return e._reactRootContainer?(Wn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},ft.unstable_batchedUpdates=_u,ft.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!nl(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return rl(e,t,r,!1,o)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Ud;function Qh(){if(Ud)return Du.exports;Ud=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Du.exports=Kh(),Du.exports}var Wd;function Gh(){if(Wd)return ol;Wd=1;var n=Qh();return ol.createRoot=n.createRoot,ol.hydrateRoot=n.hydrateRoot,ol}var Yh=Gh();const Xh=$1(Yh);var ju={exports:{}},Uu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Zh(){if(Vd)return Uu;Vd=1;var n=_l();function i(m,g){return m===g&&(m!==0||1/m===1/g)||m!==m&&g!==g}var l=typeof Object.is=="function"?Object.is:i,a=n.useSyncExternalStore,s=n.useRef,f=n.useEffect,d=n.useMemo,h=n.useDebugValue;return Uu.useSyncExternalStoreWithSelector=function(m,g,w,S,C){var T=s(null);if(T.current===null){var E={hasValue:!1,value:null};T.current=E}else E=T.current;T=d(function(){function _(B){if(!A){if(A=!0,z=B,B=S(B),C!==void 0&&E.hasValue){var K=E.value;if(C(K,B))return $=K}return $=B}if(K=$,l(z,B))return K;var W=S(B);return C!==void 0&&C(K,W)?K:(z=B,$=W)}var A=!1,z,$,M=w===void 0?null:w;return[function(){return _(g())},M===null?void 0:function(){return _(M())}]},[g,w,S,C]);var R=a(m,T[0],T[1]);return f(function(){E.hasValue=!0,E.value=R},[R]),h(R),R},Uu}var Kd;function qh(){return Kd||(Kd=1,ju.exports=Zh()),ju.exports}qh();var sn="default"in vl?ms:vl,Qd=Symbol.for("react-redux-context"),Gd=typeof globalThis<"u"?globalThis:{};function Jh(){if(!sn.createContext)return{};const n=Gd[Qd]??(Gd[Qd]=new Map);let i=n.get(sn.createContext);return i||(i=sn.createContext(null),n.set(sn.createContext,i)),i}var em=Jh();function tm(n){n()}function nm(){let n=null,i=null;return{clear(){n=null,i=null},notify(){tm(()=>{let l=n;for(;l;)l.callback(),l=l.next})},get(){const l=[];let a=n;for(;a;)l.push(a),a=a.next;return l},subscribe(l){let a=!0;const s=i={callback:l,next:null,prev:i};return s.prev?s.prev.next=s:n=s,function(){!a||n===null||(a=!1,s.next?s.next.prev=s.prev:i=s.prev,s.prev?s.prev.next=s.next:n=s.next)}}}}var Yd={notify(){},get:()=>[]};function rm(n,i){let l,a=Yd,s=0,f=!1;function d(R){w();const _=a.subscribe(R);let A=!1;return()=>{A||(A=!0,_(),S())}}function h(){a.notify()}function m(){E.onStateChange&&E.onStateChange()}function g(){return f}function w(){s++,l||(l=n.subscribe(m),a=nm())}function S(){s--,l&&s===0&&(l(),l=void 0,a.clear(),a=Yd)}function C(){f||(f=!0,w())}function T(){f&&(f=!1,S())}const E={addNestedSub:d,notifyNestedSubs:h,handleChangeWrapper:m,isSubscribed:g,trySubscribe:C,tryUnsubscribe:T,getListeners:()=>a};return E}var im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",om=typeof navigator<"u"&&navigator.product==="ReactNative",lm=im||om?sn.useLayoutEffect:sn.useEffect;function am({store:n,context:i,children:l,serverState:a,stabilityCheck:s="once",identityFunctionCheck:f="once"}){const d=sn.useMemo(()=>{const g=rm(n);return{store:n,subscription:g,getServerState:a?()=>a:void 0,stabilityCheck:s,identityFunctionCheck:f}},[n,a,s,f]),h=sn.useMemo(()=>n.getState(),[n]);lm(()=>{const{subscription:g}=d;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),h!==n.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[d,h]);const m=i||em;return sn.createElement(m.Provider,{value:d},l)}var um=am,Oi={},Xd;function sm(){if(Xd)return Oi;Xd=1,Object.defineProperty(Oi,"__esModule",{value:!0}),Oi.parse=d,Oi.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,f=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function d(C,T){const E=new f,R=C.length;if(R<2)return E;const _=(T==null?void 0:T.decode)||w;let A=0;do{const z=C.indexOf("=",A);if(z===-1)break;const $=C.indexOf(";",A),M=$===-1?R:$;if(z>M){A=C.lastIndexOf(";",z-1)+1;continue}const B=h(C,A,z),K=m(C,z,B),W=C.slice(B,K);if(E[W]===void 0){let ne=h(C,z+1,M),le=m(C,M,ne);const y=_(C.slice(ne,le));E[W]=y}A=M+1}while(A<R);return E}function h(C,T,E){do{const R=C.charCodeAt(T);if(R!==32&&R!==9)return T}while(++T<E);return E}function m(C,T,E){for(;T>E;){const R=C.charCodeAt(--T);if(R!==32&&R!==9)return T+1}return E}function g(C,T,E){const R=(E==null?void 0:E.encode)||encodeURIComponent;if(!n.test(C))throw new TypeError(`argument name is invalid: ${C}`);const _=R(T);if(!i.test(_))throw new TypeError(`argument val is invalid: ${T}`);let A=C+"="+_;if(!E)return A;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);A+="; Max-Age="+E.maxAge}if(E.domain){if(!l.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);A+="; Domain="+E.domain}if(E.path){if(!a.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);A+="; Path="+E.path}if(E.expires){if(!S(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);A+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(A+="; HttpOnly"),E.secure&&(A+="; Secure"),E.partitioned&&(A+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return A}function w(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function S(C){return s.call(C)==="[object Date]"}return Oi}sm();/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zd="popstate";function cm(n={}){function i(s,f){let{pathname:d="/",search:h="",hash:m=""}=er(s.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),Ju("",{pathname:d,search:h,hash:m},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function l(s,f){let d=s.document.querySelector("base"),h="";if(d&&d.getAttribute("href")){let m=s.location.href,g=m.indexOf("#");h=g===-1?m:m.slice(0,g)}return h+"#"+(typeof f=="string"?f:Ii(f))}function a(s,f){pn(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return dm(i,l,a,n)}function Le(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function pn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function fm(){return Math.random().toString(36).substring(2,10)}function qd(n,i){return{usr:n.state,key:n.key,idx:i}}function Ju(n,i,l=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?er(i):i,state:l,key:i&&i.key||a||fm()}}function Ii({pathname:n="/",search:i="",hash:l=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function er(n){let i={};if(n){let l=n.indexOf("#");l>=0&&(i.hash=n.substring(l),n=n.substring(0,l));let a=n.indexOf("?");a>=0&&(i.search=n.substring(a),n=n.substring(0,a)),n&&(i.pathname=n)}return i}function dm(n,i,l,a={}){let{window:s=document.defaultView,v5Compat:f=!1}=a,d=s.history,h="POP",m=null,g=w();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function w(){return(d.state||{idx:null}).idx}function S(){h="POP";let _=w(),A=_==null?null:_-g;g=_,m&&m({action:h,location:R.location,delta:A})}function C(_,A){h="PUSH";let z=Ju(R.location,_,A);l&&l(z,_),g=w()+1;let $=qd(z,g),M=R.createHref(z);try{d.pushState($,"",M)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;s.location.assign(M)}f&&m&&m({action:h,location:R.location,delta:1})}function T(_,A){h="REPLACE";let z=Ju(R.location,_,A);l&&l(z,_),g=w();let $=qd(z,g),M=R.createHref(z);d.replaceState($,"",M),f&&m&&m({action:h,location:R.location,delta:0})}function E(_){let A=s.location.origin!=="null"?s.location.origin:s.location.href,z=typeof _=="string"?_:Ii(_);return z=z.replace(/ $/,"%20"),Le(A,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,A)}let R={get action(){return h},get location(){return n(s,d)},listen(_){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Zd,S),m=_,()=>{s.removeEventListener(Zd,S),m=null}},createHref(_){return i(s,_)},createURL:E,encodeLocation(_){let A=E(_);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:C,replace:T,go(_){return d.go(_)}};return R}function M1(n,i,l="/"){return pm(n,i,l,!1)}function pm(n,i,l,a){let s=typeof i=="string"?er(i):i,f=Ln(s.pathname||"/",l);if(f==null)return null;let d=F1(n);hm(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let g=Om(f);h=km(d[m],g,a)}return h}function F1(n,i=[],l=[],a=""){let s=(f,d,h)=>{let m={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(Le(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let g=cn([a,m.relativePath]),w=l.concat(m);f.children&&f.children.length>0&&(Le(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),F1(f.children,i,w,g)),!(f.path==null&&!f.index)&&i.push({path:g,score:Cm(g,f.index),routesMeta:w})};return n.forEach((f,d)=>{var h;if(f.path===""||!((h=f.path)!=null&&h.includes("?")))s(f,d);else for(let m of z1(f.path))s(f,d,m)}),i}function z1(n){let i=n.split("/");if(i.length===0)return[];let[l,...a]=i,s=l.endsWith("?"),f=l.replace(/\?$/,"");if(a.length===0)return s?[f,""]:[f];let d=z1(a.join("/")),h=[];return h.push(...d.map(m=>m===""?f:[f,m].join("/"))),s&&h.push(...d),h.map(m=>n.startsWith("/")&&m===""?"/":m)}function hm(n){n.sort((i,l)=>i.score!==l.score?l.score-i.score:xm(i.routesMeta.map(a=>a.childrenIndex),l.routesMeta.map(a=>a.childrenIndex)))}var mm=/^:[\w-]+$/,gm=3,ym=2,vm=1,wm=10,Sm=-2,Jd=n=>n==="*";function Cm(n,i){let l=n.split("/"),a=l.length;return l.some(Jd)&&(a+=Sm),i&&(a+=ym),l.filter(s=>!Jd(s)).reduce((s,f)=>s+(mm.test(f)?gm:f===""?vm:wm),a)}function xm(n,i){return n.length===i.length&&n.slice(0,-1).every((a,s)=>a===i[s])?n[n.length-1]-i[i.length-1]:0}function km(n,i,l=!1){let{routesMeta:a}=n,s={},f="/",d=[];for(let h=0;h<a.length;++h){let m=a[h],g=h===a.length-1,w=f==="/"?i:i.slice(f.length)||"/",S=wl({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},w),C=m.route;if(!S&&g&&l&&!a[a.length-1].route.index&&(S=wl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},w)),!S)return null;Object.assign(s,S.params),d.push({params:s,pathname:cn([f,S.pathname]),pathnameBase:Nm(cn([f,S.pathnameBase])),route:C}),S.pathnameBase!=="/"&&(f=cn([f,S.pathnameBase]))}return d}function wl(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,a]=Em(n.path,n.caseSensitive,n.end),s=i.match(l);if(!s)return null;let f=s[0],d=f.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:a.reduce((g,{paramName:w,isOptional:S},C)=>{if(w==="*"){let E=h[C]||"";d=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const T=h[C];return S&&!T?g[w]=void 0:g[w]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:d,pattern:n}}function Em(n,i=!1,l=!0){pn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),a]}function Om(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return pn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Ln(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,a=n.charAt(l);return a&&a!=="/"?null:n.slice(l)||"/"}function Pm(n,i="/"){let{pathname:l,search:a="",hash:s=""}=typeof n=="string"?er(n):n;return{pathname:l?l.startsWith("/")?l:_m(l,i):i,search:Tm(a),hash:Hm(s)}}function _m(n,i){let l=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function Wu(n,i,l,a){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rm(n){return n.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function D1(n){let i=Rm(n);return i.map((l,a)=>a===i.length-1?l.pathname:l.pathnameBase)}function b1(n,i,l,a=!1){let s;typeof n=="string"?s=er(n):(s={...n},Le(!s.pathname||!s.pathname.includes("?"),Wu("?","pathname","search",s)),Le(!s.pathname||!s.pathname.includes("#"),Wu("#","pathname","hash",s)),Le(!s.search||!s.search.includes("#"),Wu("#","search","hash",s)));let f=n===""||s.pathname==="",d=f?"/":s.pathname,h;if(d==null)h=l;else{let S=i.length-1;if(!a&&d.startsWith("..")){let C=d.split("/");for(;C[0]==="..";)C.shift(),S-=1;s.pathname=C.join("/")}h=S>=0?i[S]:"/"}let m=Pm(s,h),g=d&&d!=="/"&&d.endsWith("/"),w=(f||d===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(g||w)&&(m.pathname+="/"),m}var cn=n=>n.join("/").replace(/\/\/+/g,"/"),Nm=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Tm=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Hm=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Am(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var B1=["POST","PUT","PATCH","DELETE"];new Set(B1);var Lm=["GET",...B1];new Set(Lm);var Fr=I.createContext(null);Fr.displayName="DataRouter";var Rl=I.createContext(null);Rl.displayName="DataRouterState";var j1=I.createContext({isTransitioning:!1});j1.displayName="ViewTransition";var Im=I.createContext(new Map);Im.displayName="Fetchers";var $m=I.createContext(null);$m.displayName="Await";var Zt=I.createContext(null);Zt.displayName="Navigation";var Bi=I.createContext(null);Bi.displayName="Location";var qt=I.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var gs=I.createContext(null);gs.displayName="RouteError";function Mm(n,{relative:i}={}){Le(ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:a}=I.useContext(Zt),{hash:s,pathname:f,search:d}=Ui(n,{relative:i}),h=f;return l!=="/"&&(h=f==="/"?l:cn([l,f])),a.createHref({pathname:h,search:d,hash:s})}function ji(){return I.useContext(Bi)!=null}function tr(){return Le(ji(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(Bi).location}var U1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function W1(n){I.useContext(Zt).static||I.useLayoutEffect(n)}function Fm(){let{isDataRoute:n}=I.useContext(qt);return n?Zm():zm()}function zm(){Le(ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=I.useContext(Fr),{basename:i,navigator:l}=I.useContext(Zt),{matches:a}=I.useContext(qt),{pathname:s}=tr(),f=JSON.stringify(D1(a)),d=I.useRef(!1);return W1(()=>{d.current=!0}),I.useCallback((m,g={})=>{if(pn(d.current,U1),!d.current)return;if(typeof m=="number"){l.go(m);return}let w=b1(m,JSON.parse(f),s,g.relative==="path");n==null&&i!=="/"&&(w.pathname=w.pathname==="/"?i:cn([i,w.pathname])),(g.replace?l.replace:l.push)(w,g.state,g)},[i,l,f,s,n])}I.createContext(null);function Dm(){let{matches:n}=I.useContext(qt),i=n[n.length-1];return i?i.params:{}}function Ui(n,{relative:i}={}){let{matches:l}=I.useContext(qt),{pathname:a}=tr(),s=JSON.stringify(D1(l));return I.useMemo(()=>b1(n,JSON.parse(s),a,i==="path"),[n,s,a,i])}function bm(n,i){return V1(n,i)}function V1(n,i,l,a){var R;Le(ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=I.useContext(Zt),{matches:f}=I.useContext(qt),d=f[f.length-1],h=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let g=tr(),w;if(i){let _=typeof i=="string"?er(i):i;Le(m==="/"||((R=_.pathname)==null?void 0:R.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${_.pathname}" was given in the \`location\` prop.`),w=_}else w=g;let S=w.pathname||"/",C=S;if(m!=="/"){let _=m.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(_.length).join("/")}let T=M1(n,{pathname:C}),E=Vm(T&&T.map(_=>Object.assign({},_,{params:Object.assign({},h,_.params),pathname:cn([m,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:cn([m,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),f,l,a);return i&&E?I.createElement(Bi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},E):E}function Bm(){let n=Xm(),i=Am(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},i),l?I.createElement("pre",{style:s},l):null,null)}var jm=I.createElement(Bm,null),Um=class extends I.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?I.createElement(qt.Provider,{value:this.props.routeContext},I.createElement(gs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Wm({routeContext:n,match:i,children:l}){let a=I.useContext(Fr);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),I.createElement(qt.Provider,{value:n},l)}function Vm(n,i=[],l=null,a=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let s=n,f=l==null?void 0:l.errors;if(f!=null){let m=s.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);Le(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let d=!1,h=-1;if(l)for(let m=0;m<s.length;m++){let g=s[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:w,errors:S}=l,C=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||C){d=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((m,g,w)=>{let S,C=!1,T=null,E=null;l&&(S=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||jm,d&&(h<0&&w===0?(qm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,E=null):h===w&&(C=!0,E=g.route.hydrateFallbackElement||null)));let R=i.concat(s.slice(0,w+1)),_=()=>{let A;return S?A=T:C?A=E:g.route.Component?A=I.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=m,I.createElement(Wm,{match:g,routeContext:{outlet:m,matches:R,isDataRoute:l!=null},children:A})};return l&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?I.createElement(Um,{location:l.location,revalidation:l.revalidation,component:T,error:S,children:_(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):_()},null)}function ys(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Km(n){let i=I.useContext(Fr);return Le(i,ys(n)),i}function Qm(n){let i=I.useContext(Rl);return Le(i,ys(n)),i}function Gm(n){let i=I.useContext(qt);return Le(i,ys(n)),i}function vs(n){let i=Gm(n),l=i.matches[i.matches.length-1];return Le(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function Ym(){return vs("useRouteId")}function Xm(){var a;let n=I.useContext(gs),i=Qm("useRouteError"),l=vs("useRouteError");return n!==void 0?n:(a=i.errors)==null?void 0:a[l]}function Zm(){let{router:n}=Km("useNavigate"),i=vs("useNavigate"),l=I.useRef(!1);return W1(()=>{l.current=!0}),I.useCallback(async(s,f={})=>{pn(l.current,U1),l.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:i,...f}))},[n,i])}var e1={};function qm(n,i,l){e1[n]||(e1[n]=!0,pn(!1,l))}I.memo(Jm);function Jm({routes:n,future:i,state:l}){return V1(n,void 0,l,i)}function es(n){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eg({basename:n="/",children:i=null,location:l,navigationType:a="POP",navigator:s,static:f=!1}){Le(!ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=I.useMemo(()=>({basename:d,navigator:s,static:f,future:{}}),[d,s,f]);typeof l=="string"&&(l=er(l));let{pathname:m="/",search:g="",hash:w="",state:S=null,key:C="default"}=l,T=I.useMemo(()=>{let E=Ln(m,d);return E==null?null:{location:{pathname:E,search:g,hash:w,state:S,key:C},navigationType:a}},[d,m,g,w,S,C,a]);return pn(T!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:I.createElement(Zt.Provider,{value:h},I.createElement(Bi.Provider,{children:i,value:T}))}function tg({children:n,location:i}){return bm(ts(n),i)}function ts(n,i=[]){let l=[];return I.Children.forEach(n,(a,s)=>{if(!I.isValidElement(a))return;let f=[...i,s];if(a.type===I.Fragment){l.push.apply(l,ts(a.props.children,f));return}Le(a.type===es,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||f.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=ts(a.props.children,f)),l.push(d)}),l}var fl="get",dl="application/x-www-form-urlencoded";function Nl(n){return n!=null&&typeof n.tagName=="string"}function ng(n){return Nl(n)&&n.tagName.toLowerCase()==="button"}function rg(n){return Nl(n)&&n.tagName.toLowerCase()==="form"}function ig(n){return Nl(n)&&n.tagName.toLowerCase()==="input"}function og(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lg(n,i){return n.button===0&&(!i||i==="_self")&&!og(n)}var ll=null;function ag(){if(ll===null)try{new FormData(document.createElement("form"),0),ll=!1}catch{ll=!0}return ll}var ug=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vu(n){return n!=null&&!ug.has(n)?(pn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dl}"`),null):n}function sg(n,i){let l,a,s,f,d;if(rg(n)){let h=n.getAttribute("action");a=h?Ln(h,i):null,l=n.getAttribute("method")||fl,s=Vu(n.getAttribute("enctype"))||dl,f=new FormData(n)}else if(ng(n)||ig(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||h.getAttribute("action");if(a=m?Ln(m,i):null,l=n.getAttribute("formmethod")||h.getAttribute("method")||fl,s=Vu(n.getAttribute("formenctype"))||Vu(h.getAttribute("enctype"))||dl,f=new FormData(h,n),!ag()){let{name:g,type:w,value:S}=n;if(w==="image"){let C=g?`${g}.`:"";f.append(`${C}x`,"0"),f.append(`${C}y`,"0")}else g&&f.append(g,S)}}else{if(Nl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=fl,a=null,s=dl,d=n}return f&&s==="text/plain"&&(d=f,f=void 0),{action:a,method:l.toLowerCase(),encType:s,formData:f,body:d}}function ws(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function cg(n,i){if(n.id in i)return i[n.id];try{let l=await import(n.module);return i[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fg(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function dg(n,i,l){let a=await Promise.all(n.map(async s=>{let f=i.routes[s.route.id];if(f){let d=await cg(f,l);return d.links?d.links():[]}return[]}));return gg(a.flat(1).filter(fg).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function t1(n,i,l,a,s,f){let d=(m,g)=>l[g]?m.route.id!==l[g].route.id:!0,h=(m,g)=>{var w;return l[g].pathname!==m.pathname||((w=l[g].route.path)==null?void 0:w.endsWith("*"))&&l[g].params["*"]!==m.params["*"]};return f==="assets"?i.filter((m,g)=>d(m,g)||h(m,g)):f==="data"?i.filter((m,g)=>{var S;let w=a.routes[m.route.id];if(!w||!w.hasLoader)return!1;if(d(m,g)||h(m,g))return!0;if(m.route.shouldRevalidate){let C=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((S=l[0])==null?void 0:S.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function pg(n,i){return hg(n.map(l=>{let a=i.routes[l.route.id];if(!a)return[];let s=[a.module];return a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function hg(n){return[...new Set(n)]}function mg(n){let i={},l=Object.keys(n).sort();for(let a of l)i[a]=n[a];return i}function gg(n,i){let l=new Set;return new Set(i),n.reduce((a,s)=>{let f=JSON.stringify(mg(s));return l.has(f)||(l.add(f),a.push({key:f,link:s})),a},[])}function yg(n){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function vg(){let n=I.useContext(Fr);return ws(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function wg(){let n=I.useContext(Rl);return ws(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ss=I.createContext(void 0);Ss.displayName="FrameworkContext";function K1(){let n=I.useContext(Ss);return ws(n,"You must render this element inside a <HydratedRouter> element"),n}function Sg(n,i){let l=I.useContext(Ss),[a,s]=I.useState(!1),[f,d]=I.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:g,onMouseLeave:w,onTouchStart:S}=i,C=I.useRef(null);I.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let R=A=>{A.forEach(z=>{d(z.isIntersecting)})},_=new IntersectionObserver(R,{threshold:.5});return C.current&&_.observe(C.current),()=>{_.disconnect()}}},[n]),I.useEffect(()=>{if(a){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[a]);let T=()=>{s(!0)},E=()=>{s(!1),d(!1)};return l?n!=="intent"?[f,C,{}]:[f,C,{onFocus:Pi(h,T),onBlur:Pi(m,E),onMouseEnter:Pi(g,T),onMouseLeave:Pi(w,E),onTouchStart:Pi(S,T)}]:[!1,C,{}]}function Pi(n,i){return l=>{n&&n(l),l.defaultPrevented||i(l)}}function Cg({page:n,...i}){let{router:l}=vg(),a=I.useMemo(()=>M1(l.routes,n,l.basename),[l.routes,n,l.basename]);return a?I.createElement(kg,{page:n,matches:a,...i}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function xg(n){let{manifest:i,routeModules:l}=K1(),[a,s]=I.useState([]);return I.useEffect(()=>{let f=!1;return dg(n,i,l).then(d=>{f||s(d)}),()=>{f=!0}},[n,i,l]),a}function kg({page:n,matches:i,...l}){let a=tr(),{manifest:s,routeModules:f}=K1(),{loaderData:d,matches:h}=wg(),m=I.useMemo(()=>t1(n,i,h,s,a,"data"),[n,i,h,s,a]),g=I.useMemo(()=>t1(n,i,h,s,a,"assets"),[n,i,h,s,a]),w=I.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let T=new Set,E=!1;if(i.forEach(_=>{var z;let A=s.routes[_.route.id];!A||!A.hasLoader||(!m.some($=>$.route.id===_.route.id)&&_.route.id in d&&((z=f[_.route.id])!=null&&z.shouldRevalidate)||A.hasClientLoader?E=!0:T.add(_.route.id))}),T.size===0)return[];let R=yg(n);return E&&T.size>0&&R.searchParams.set("_routes",i.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[R.pathname+R.search]},[d,a,s,m,i,n,f]),S=I.useMemo(()=>pg(g,s),[g,s]),C=xg(g);return I.createElement(I.Fragment,null,w.map(T=>I.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...l})),S.map(T=>I.createElement("link",{key:T,rel:"modulepreload",href:T,...l})),C.map(({key:T,link:E})=>I.createElement("link",{key:T,...E})))}function Eg(...n){return i=>{n.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q1&&(window.__reactRouterVersion="7.0.1")}catch{}function Og({basename:n,children:i,window:l}){let a=I.useRef();a.current==null&&(a.current=cm({window:l,v5Compat:!0}));let s=a.current,[f,d]=I.useState({action:s.action,location:s.location}),h=I.useCallback(m=>{I.startTransition(()=>d(m))},[d]);return I.useLayoutEffect(()=>s.listen(h),[s,h]),I.createElement(eg,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:s})}var G1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cs=I.forwardRef(function({onClick:i,discover:l="render",prefetch:a="none",relative:s,reloadDocument:f,replace:d,state:h,target:m,to:g,preventScrollReset:w,viewTransition:S,...C},T){let{basename:E}=I.useContext(Zt),R=typeof g=="string"&&G1.test(g),_,A=!1;if(typeof g=="string"&&R&&(_=g,Q1))try{let le=new URL(window.location.href),y=g.startsWith("//")?new URL(le.protocol+g):new URL(g),G=Ln(y.pathname,E);y.origin===le.origin&&G!=null?g=G+y.search+y.hash:A=!0}catch{pn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=Mm(g,{relative:s}),[$,M,B]=Sg(a,C),K=Ng(g,{replace:d,state:h,target:m,preventScrollReset:w,relative:s,viewTransition:S});function W(le){i&&i(le),le.defaultPrevented||K(le)}let ne=I.createElement("a",{...C,...B,href:_||z,onClick:A||f?i:W,ref:Eg(T,M),target:m,"data-discover":!R&&l==="render"?"true":void 0});return $&&!R?I.createElement(I.Fragment,null,ne,I.createElement(Cg,{page:z})):ne});Cs.displayName="Link";var Pg=I.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:a="",end:s=!1,style:f,to:d,viewTransition:h,children:m,...g},w){let S=Ui(d,{relative:g.relative}),C=tr(),T=I.useContext(Rl),{navigator:E,basename:R}=I.useContext(Zt),_=T!=null&&Ig(S)&&h===!0,A=E.encodeLocation?E.encodeLocation(S).pathname:S.pathname,z=C.pathname,$=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;l||(z=z.toLowerCase(),$=$?$.toLowerCase():null,A=A.toLowerCase()),$&&R&&($=Ln($,R)||$);const M=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let B=z===A||!s&&z.startsWith(A)&&z.charAt(M)==="/",K=$!=null&&($===A||!s&&$.startsWith(A)&&$.charAt(A.length)==="/"),W={isActive:B,isPending:K,isTransitioning:_},ne=B?i:void 0,le;typeof a=="function"?le=a(W):le=[a,B?"active":null,K?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let y=typeof f=="function"?f(W):f;return I.createElement(Cs,{...g,"aria-current":ne,className:le,ref:w,style:y,to:d,viewTransition:h},typeof m=="function"?m(W):m)});Pg.displayName="NavLink";var _g=I.forwardRef(({discover:n="render",fetcherKey:i,navigate:l,reloadDocument:a,replace:s,state:f,method:d=fl,action:h,onSubmit:m,relative:g,preventScrollReset:w,viewTransition:S,...C},T)=>{let E=Ag(),R=Lg(h,{relative:g}),_=d.toLowerCase()==="get"?"get":"post",A=typeof h=="string"&&G1.test(h),z=$=>{if(m&&m($),$.defaultPrevented)return;$.preventDefault();let M=$.nativeEvent.submitter,B=(M==null?void 0:M.getAttribute("formmethod"))||d;E(M||$.currentTarget,{fetcherKey:i,method:B,navigate:l,replace:s,state:f,relative:g,preventScrollReset:w,viewTransition:S})};return I.createElement("form",{ref:T,method:_,action:R,onSubmit:a?m:z,...C,"data-discover":!A&&n==="render"?"true":void 0})});_g.displayName="Form";function Rg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y1(n){let i=I.useContext(Fr);return Le(i,Rg(n)),i}function Ng(n,{target:i,replace:l,state:a,preventScrollReset:s,relative:f,viewTransition:d}={}){let h=Fm(),m=tr(),g=Ui(n,{relative:f});return I.useCallback(w=>{if(lg(w,i)){w.preventDefault();let S=l!==void 0?l:Ii(m)===Ii(g);h(n,{replace:S,state:a,preventScrollReset:s,relative:f,viewTransition:d})}},[m,h,g,l,a,i,n,s,f,d])}var Tg=0,Hg=()=>`__${String(++Tg)}__`;function Ag(){let{router:n}=Y1("useSubmit"),{basename:i}=I.useContext(Zt),l=Ym();return I.useCallback(async(a,s={})=>{let{action:f,method:d,encType:h,formData:m,body:g}=sg(a,i);if(s.navigate===!1){let w=s.fetcherKey||Hg();await n.fetch(w,l,s.action||f,{preventScrollReset:s.preventScrollReset,formData:m,body:g,formMethod:s.method||d,formEncType:s.encType||h,flushSync:s.flushSync})}else await n.navigate(s.action||f,{preventScrollReset:s.preventScrollReset,formData:m,body:g,formMethod:s.method||d,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:l,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,i,l])}function Lg(n,{relative:i}={}){let{basename:l}=I.useContext(Zt),a=I.useContext(qt);Le(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),f={...Ui(n||".",{relative:i})},d=tr();if(n==null){f.search=d.search;let h=new URLSearchParams(f.search),m=h.getAll("index");if(m.some(w=>w==="")){h.delete("index"),m.filter(S=>S).forEach(S=>h.append("index",S));let w=h.toString();f.search=w?`?${w}`:""}}return(!n||n===".")&&s.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:cn([l,f.pathname])),Ii(f)}function Ig(n,i={}){let l=I.useContext(j1);Le(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Y1("useViewTransitionState"),s=Ui(n,{relative:i.relative});if(!l.isTransitioning)return!1;let f=Ln(l.currentLocation.pathname,a)||l.currentLocation.pathname,d=Ln(l.nextLocation.pathname,a)||l.nextLocation.pathname;return wl(s.pathname,d)!=null||wl(s.pathname,f)!=null}new TextEncoder;const $i={black:"#000",white:"#fff"},_r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Rr={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Nr={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Tr={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Hr={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},_i={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},$g={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Yn(n,...i){const l=new URL(`https://mui.com/production-error/?code=${n}`);return i.forEach(a=>l.searchParams.append("args[]",a)),`Minified MUI error #${n}; visit ${l} for the full message.`}const xs="$$material";function ns(){return ns=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var a in l)({}).hasOwnProperty.call(l,a)&&(n[a]=l[a])}return n},ns.apply(null,arguments)}function X1(n){var i=Object.create(null);return function(l){return i[l]===void 0&&(i[l]=n(l)),i[l]}}var Mg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fg=X1(function(n){return Mg.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),zg=!1;function Dg(n){if(n.sheet)return n.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===n)return document.styleSheets[i]}function bg(n){var i=document.createElement("style");return i.setAttribute("data-emotion",n.key),n.nonce!==void 0&&i.setAttribute("nonce",n.nonce),i.appendChild(document.createTextNode("")),i.setAttribute("data-s",""),i}var Bg=function(){function n(l){var a=this;this._insertTag=function(s){var f;a.tags.length===0?a.insertionPoint?f=a.insertionPoint.nextSibling:a.prepend?f=a.container.firstChild:f=a.before:f=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(s,f),a.tags.push(s)},this.isSpeedy=l.speedy===void 0?!zg:l.speedy,this.tags=[],this.ctr=0,this.nonce=l.nonce,this.key=l.key,this.container=l.container,this.prepend=l.prepend,this.insertionPoint=l.insertionPoint,this.before=null}var i=n.prototype;return i.hydrate=function(a){a.forEach(this._insertTag)},i.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bg(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var f=Dg(s);try{f.insertRule(a,f.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(a));this.ctr++},i.flush=function(){this.tags.forEach(function(a){var s;return(s=a.parentNode)==null?void 0:s.removeChild(a)}),this.tags=[],this.ctr=0},n}(),rt="-ms-",Sl="-moz-",me="-webkit-",Z1="comm",ks="rule",Es="decl",jg="@import",q1="@keyframes",Ug="@layer",Wg=Math.abs,Tl=String.fromCharCode,Vg=Object.assign;function Kg(n,i){return qe(n,0)^45?(((i<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function J1(n){return n.trim()}function Qg(n,i){return(n=i.exec(n))?n[0]:n}function ge(n,i,l){return n.replace(i,l)}function rs(n,i){return n.indexOf(i)}function qe(n,i){return n.charCodeAt(i)|0}function Mi(n,i,l){return n.slice(i,l)}function Kt(n){return n.length}function Os(n){return n.length}function al(n,i){return i.push(n),n}function Gg(n,i){return n.map(i).join("")}var Hl=1,Ir=1,ep=0,dt=0,Ue=0,zr="";function Al(n,i,l,a,s,f,d){return{value:n,root:i,parent:l,type:a,props:s,children:f,line:Hl,column:Ir,length:d,return:""}}function Ri(n,i){return Vg(Al("",null,null,"",null,null,0),n,{length:-n.length},i)}function Yg(){return Ue}function Xg(){return Ue=dt>0?qe(zr,--dt):0,Ir--,Ue===10&&(Ir=1,Hl--),Ue}function wt(){return Ue=dt<ep?qe(zr,dt++):0,Ir++,Ue===10&&(Ir=1,Hl++),Ue}function Yt(){return qe(zr,dt)}function pl(){return dt}function Wi(n,i){return Mi(zr,n,i)}function Fi(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tp(n){return Hl=Ir=1,ep=Kt(zr=n),dt=0,[]}function np(n){return zr="",n}function hl(n){return J1(Wi(dt-1,is(n===91?n+2:n===40?n+1:n)))}function Zg(n){for(;(Ue=Yt())&&Ue<33;)wt();return Fi(n)>2||Fi(Ue)>3?"":" "}function qg(n,i){for(;--i&&wt()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Wi(n,pl()+(i<6&&Yt()==32&&wt()==32))}function is(n){for(;wt();)switch(Ue){case n:return dt;case 34:case 39:n!==34&&n!==39&&is(Ue);break;case 40:n===41&&is(n);break;case 92:wt();break}return dt}function Jg(n,i){for(;wt()&&n+Ue!==57;)if(n+Ue===84&&Yt()===47)break;return"/*"+Wi(i,dt-1)+"*"+Tl(n===47?n:wt())}function ey(n){for(;!Fi(Yt());)wt();return Wi(n,dt)}function ty(n){return np(ml("",null,null,null,[""],n=tp(n),0,[0],n))}function ml(n,i,l,a,s,f,d,h,m){for(var g=0,w=0,S=d,C=0,T=0,E=0,R=1,_=1,A=1,z=0,$="",M=s,B=f,K=a,W=$;_;)switch(E=z,z=wt()){case 40:if(E!=108&&qe(W,S-1)==58){rs(W+=ge(hl(z),"&","&\f"),"&\f")!=-1&&(A=-1);break}case 34:case 39:case 91:W+=hl(z);break;case 9:case 10:case 13:case 32:W+=Zg(E);break;case 92:W+=qg(pl()-1,7);continue;case 47:switch(Yt()){case 42:case 47:al(ny(Jg(wt(),pl()),i,l),m);break;default:W+="/"}break;case 123*R:h[g++]=Kt(W)*A;case 125*R:case 59:case 0:switch(z){case 0:case 125:_=0;case 59+w:A==-1&&(W=ge(W,/\f/g,"")),T>0&&Kt(W)-S&&al(T>32?r1(W+";",a,l,S-1):r1(ge(W," ","")+";",a,l,S-2),m);break;case 59:W+=";";default:if(al(K=n1(W,i,l,g,w,s,h,$,M=[],B=[],S),f),z===123)if(w===0)ml(W,i,K,K,M,f,S,h,B);else switch(C===99&&qe(W,3)===110?100:C){case 100:case 108:case 109:case 115:ml(n,K,K,a&&al(n1(n,K,K,0,0,s,h,$,s,M=[],S),B),s,B,S,h,a?M:B);break;default:ml(W,K,K,K,[""],B,0,h,B)}}g=w=T=0,R=A=1,$=W="",S=d;break;case 58:S=1+Kt(W),T=E;default:if(R<1){if(z==123)--R;else if(z==125&&R++==0&&Xg()==125)continue}switch(W+=Tl(z),z*R){case 38:A=w>0?1:(W+="\f",-1);break;case 44:h[g++]=(Kt(W)-1)*A,A=1;break;case 64:Yt()===45&&(W+=hl(wt())),C=Yt(),w=S=Kt($=W+=ey(pl())),z++;break;case 45:E===45&&Kt(W)==2&&(R=0)}}return f}function n1(n,i,l,a,s,f,d,h,m,g,w){for(var S=s-1,C=s===0?f:[""],T=Os(C),E=0,R=0,_=0;E<a;++E)for(var A=0,z=Mi(n,S+1,S=Wg(R=d[E])),$=n;A<T;++A)($=J1(R>0?C[A]+" "+z:ge(z,/&\f/g,C[A])))&&(m[_++]=$);return Al(n,i,l,s===0?ks:h,m,g,w)}function ny(n,i,l){return Al(n,i,l,Z1,Tl(Yg()),Mi(n,2,-2),0)}function r1(n,i,l,a){return Al(n,i,l,Es,Mi(n,0,a),Mi(n,a+1,-1),a)}function Ar(n,i){for(var l="",a=Os(n),s=0;s<a;s++)l+=i(n[s],s,n,i)||"";return l}function ry(n,i,l,a){switch(n.type){case Ug:if(n.children.length)break;case jg:case Es:return n.return=n.return||n.value;case Z1:return"";case q1:return n.return=n.value+"{"+Ar(n.children,a)+"}";case ks:n.value=n.props.join(",")}return Kt(l=Ar(n.children,a))?n.return=n.value+"{"+l+"}":""}function iy(n){var i=Os(n);return function(l,a,s,f){for(var d="",h=0;h<i;h++)d+=n[h](l,a,s,f)||"";return d}}function oy(n){return function(i){i.root||(i=i.return)&&n(i)}}var ly=function(i,l,a){for(var s=0,f=0;s=f,f=Yt(),s===38&&f===12&&(l[a]=1),!Fi(f);)wt();return Wi(i,dt)},ay=function(i,l){var a=-1,s=44;do switch(Fi(s)){case 0:s===38&&Yt()===12&&(l[a]=1),i[a]+=ly(dt-1,l,a);break;case 2:i[a]+=hl(s);break;case 4:if(s===44){i[++a]=Yt()===58?"&\f":"",l[a]=i[a].length;break}default:i[a]+=Tl(s)}while(s=wt());return i},uy=function(i,l){return np(ay(tp(i),l))},i1=new WeakMap,sy=function(i){if(!(i.type!=="rule"||!i.parent||i.length<1)){for(var l=i.value,a=i.parent,s=i.column===a.column&&i.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(i.props.length===1&&l.charCodeAt(0)!==58&&!i1.get(a))&&!s){i1.set(i,!0);for(var f=[],d=uy(l,f),h=a.props,m=0,g=0;m<d.length;m++)for(var w=0;w<h.length;w++,g++)i.props[g]=f[m]?d[m].replace(/&\f/g,h[w]):h[w]+" "+d[m]}}},cy=function(i){if(i.type==="decl"){var l=i.value;l.charCodeAt(0)===108&&l.charCodeAt(2)===98&&(i.return="",i.value="")}};function rp(n,i){switch(Kg(n,i)){case 5103:return me+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return me+n+Sl+n+rt+n+n;case 6828:case 4268:return me+n+rt+n+n;case 6165:return me+n+rt+"flex-"+n+n;case 5187:return me+n+ge(n,/(\w+).+(:[^]+)/,me+"box-$1$2"+rt+"flex-$1$2")+n;case 5443:return me+n+rt+"flex-item-"+ge(n,/flex-|-self/,"")+n;case 4675:return me+n+rt+"flex-line-pack"+ge(n,/align-content|flex-|-self/,"")+n;case 5548:return me+n+rt+ge(n,"shrink","negative")+n;case 5292:return me+n+rt+ge(n,"basis","preferred-size")+n;case 6060:return me+"box-"+ge(n,"-grow","")+me+n+rt+ge(n,"grow","positive")+n;case 4554:return me+ge(n,/([^-])(transform)/g,"$1"+me+"$2")+n;case 6187:return ge(ge(ge(n,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),n,"")+n;case 5495:case 3959:return ge(n,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(n,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+n+n;case 4095:case 3583:case 4068:case 2532:return ge(n,/(.+)-inline(.+)/,me+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(n)-1-i>6)switch(qe(n,i+1)){case 109:if(qe(n,i+4)!==45)break;case 102:return ge(n,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Sl+(qe(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~rs(n,"stretch")?rp(ge(n,"stretch","fill-available"),i)+n:n}break;case 4949:if(qe(n,i+1)!==115)break;case 6444:switch(qe(n,Kt(n)-3-(~rs(n,"!important")&&10))){case 107:return ge(n,":",":"+me)+n;case 101:return ge(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(qe(n,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+rt+"$2box$3")+n}break;case 5936:switch(qe(n,i+11)){case 114:return me+n+rt+ge(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return me+n+rt+ge(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return me+n+rt+ge(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return me+n+rt+n+n}return n}var fy=function(i,l,a,s){if(i.length>-1&&!i.return)switch(i.type){case Es:i.return=rp(i.value,i.length);break;case q1:return Ar([Ri(i,{value:ge(i.value,"@","@"+me)})],s);case ks:if(i.length)return Gg(i.props,function(f){switch(Qg(f,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ar([Ri(i,{props:[ge(f,/:(read-\w+)/,":"+Sl+"$1")]})],s);case"::placeholder":return Ar([Ri(i,{props:[ge(f,/:(plac\w+)/,":"+me+"input-$1")]}),Ri(i,{props:[ge(f,/:(plac\w+)/,":"+Sl+"$1")]}),Ri(i,{props:[ge(f,/:(plac\w+)/,rt+"input-$1")]})],s)}return""})}},dy=[fy],py=function(i){var l=i.key;if(l==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(R){var _=R.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(R),R.setAttribute("data-s",""))})}var s=i.stylisPlugins||dy,f={},d,h=[];d=i.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+l+' "]'),function(R){for(var _=R.getAttribute("data-emotion").split(" "),A=1;A<_.length;A++)f[_[A]]=!0;h.push(R)});var m,g=[sy,cy];{var w,S=[ry,oy(function(R){w.insert(R)})],C=iy(g.concat(s,S)),T=function(_){return Ar(ty(_),C)};m=function(_,A,z,$){w=z,T(_?_+"{"+A.styles+"}":A.styles),$&&(E.inserted[A.name]=!0)}}var E={key:l,sheet:new Bg({key:l,container:d,nonce:i.nonce,speedy:i.speedy,prepend:i.prepend,insertionPoint:i.insertionPoint}),nonce:i.nonce,inserted:f,registered:{},insert:m};return E.sheet.hydrate(h),E},hy=!0;function my(n,i,l){var a="";return l.split(" ").forEach(function(s){n[s]!==void 0?i.push(n[s]+";"):s&&(a+=s+" ")}),a}var ip=function(i,l,a){var s=i.key+"-"+l.name;(a===!1||hy===!1)&&i.registered[s]===void 0&&(i.registered[s]=l.styles)},gy=function(i,l,a){ip(i,l,a);var s=i.key+"-"+l.name;if(i.inserted[l.name]===void 0){var f=l;do i.insert(l===f?"."+s:"",f,i.sheet,!0),f=f.next;while(f!==void 0)}};function yy(n){for(var i=0,l,a=0,s=n.length;s>=4;++a,s-=4)l=n.charCodeAt(a)&255|(n.charCodeAt(++a)&255)<<8|(n.charCodeAt(++a)&255)<<16|(n.charCodeAt(++a)&255)<<24,l=(l&65535)*1540483477+((l>>>16)*59797<<16),l^=l>>>24,i=(l&65535)*1540483477+((l>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(s){case 3:i^=(n.charCodeAt(a+2)&255)<<16;case 2:i^=(n.charCodeAt(a+1)&255)<<8;case 1:i^=n.charCodeAt(a)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var vy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wy=!1,Sy=/[A-Z]|^ms/g,Cy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,op=function(i){return i.charCodeAt(1)===45},o1=function(i){return i!=null&&typeof i!="boolean"},Ku=X1(function(n){return op(n)?n:n.replace(Sy,"-$&").toLowerCase()}),l1=function(i,l){switch(i){case"animation":case"animationName":if(typeof l=="string")return l.replace(Cy,function(a,s,f){return Qt={name:s,styles:f,next:Qt},s})}return vy[i]!==1&&!op(i)&&typeof l=="number"&&l!==0?l+"px":l},xy="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function zi(n,i,l){if(l==null)return"";var a=l;if(a.__emotion_styles!==void 0)return a;switch(typeof l){case"boolean":return"";case"object":{var s=l;if(s.anim===1)return Qt={name:s.name,styles:s.styles,next:Qt},s.name;var f=l;if(f.styles!==void 0){var d=f.next;if(d!==void 0)for(;d!==void 0;)Qt={name:d.name,styles:d.styles,next:Qt},d=d.next;var h=f.styles+";";return h}return ky(n,i,l)}case"function":{if(n!==void 0){var m=Qt,g=l(n);return Qt=m,zi(n,i,g)}break}}var w=l;if(i==null)return w;var S=i[w];return S!==void 0?S:w}function ky(n,i,l){var a="";if(Array.isArray(l))for(var s=0;s<l.length;s++)a+=zi(n,i,l[s])+";";else for(var f in l){var d=l[f];if(typeof d!="object"){var h=d;i!=null&&i[h]!==void 0?a+=f+"{"+i[h]+"}":o1(h)&&(a+=Ku(f)+":"+l1(f,h)+";")}else{if(f==="NO_COMPONENT_SELECTOR"&&wy)throw new Error(xy);if(Array.isArray(d)&&typeof d[0]=="string"&&(i==null||i[d[0]]===void 0))for(var m=0;m<d.length;m++)o1(d[m])&&(a+=Ku(f)+":"+l1(f,d[m])+";");else{var g=zi(n,i,d);switch(f){case"animation":case"animationName":{a+=Ku(f)+":"+g+";";break}default:a+=f+"{"+g+"}"}}}}return a}var a1=/label:\s*([^\s;{]+)\s*(;|$)/g,Qt;function lp(n,i,l){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var a=!0,s="";Qt=void 0;var f=n[0];if(f==null||f.raw===void 0)a=!1,s+=zi(l,i,f);else{var d=f;s+=d[0]}for(var h=1;h<n.length;h++)if(s+=zi(l,i,n[h]),a){var m=f;s+=m[h]}a1.lastIndex=0;for(var g="",w;(w=a1.exec(s))!==null;)g+="-"+w[1];var S=yy(s)+g;return{name:S,styles:s,next:Qt}}var Ey=function(i){return i()},Oy=vl.useInsertionEffect?vl.useInsertionEffect:!1,Py=Oy||Ey,ap=I.createContext(typeof HTMLElement<"u"?py({key:"css"}):null);ap.Provider;var _y=function(i){return I.forwardRef(function(l,a){var s=I.useContext(ap);return i(l,s,a)})},up=I.createContext({}),Ry=Fg,Ny=function(i){return i!=="theme"},u1=function(i){return typeof i=="string"&&i.charCodeAt(0)>96?Ry:Ny},s1=function(i,l,a){var s;if(l){var f=l.shouldForwardProp;s=i.__emotion_forwardProp&&f?function(d){return i.__emotion_forwardProp(d)&&f(d)}:f}return typeof s!="function"&&a&&(s=i.__emotion_forwardProp),s},Ty=!1,Hy=function(i){var l=i.cache,a=i.serialized,s=i.isStringTag;return ip(l,a,s),Py(function(){return gy(l,a,s)}),null},Ay=function n(i,l){var a=i.__emotion_real===i,s=a&&i.__emotion_base||i,f,d;l!==void 0&&(f=l.label,d=l.target);var h=s1(i,l,a),m=h||u1(s),g=!m("as");return function(){var w=arguments,S=a&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(f!==void 0&&S.push("label:"+f+";"),w[0]==null||w[0].raw===void 0)S.push.apply(S,w);else{S.push(w[0][0]);for(var C=w.length,T=1;T<C;T++)S.push(w[T],w[0][T])}var E=_y(function(R,_,A){var z=g&&R.as||s,$="",M=[],B=R;if(R.theme==null){B={};for(var K in R)B[K]=R[K];B.theme=I.useContext(up)}typeof R.className=="string"?$=my(_.registered,M,R.className):R.className!=null&&($=R.className+" ");var W=lp(S.concat(M),_.registered,B);$+=_.key+"-"+W.name,d!==void 0&&($+=" "+d);var ne=g&&h===void 0?u1(z):m,le={};for(var y in R)g&&y==="as"||ne(y)&&(le[y]=R[y]);return le.className=$,A&&(le.ref=A),I.createElement(I.Fragment,null,I.createElement(Hy,{cache:_,serialized:W,isStringTag:typeof z=="string"}),I.createElement(z,le))});return E.displayName=f!==void 0?f:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",E.defaultProps=i.defaultProps,E.__emotion_real=E,E.__emotion_base=s,E.__emotion_styles=S,E.__emotion_forwardProp=h,Object.defineProperty(E,"toString",{value:function(){return d===void 0&&Ty?"NO_COMPONENT_SELECTOR":"."+d}}),E.withComponent=function(R,_){return n(R,ns({},l,_,{shouldForwardProp:s1(E,_,!0)})).apply(void 0,S)},E}},Ly=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],os=Ay.bind();Ly.forEach(function(n){os[n]=os(n)});/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function sp(n,i){return os(n,i)}function Iy(n,i){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=i(n.__emotion_styles))}const c1=[];function f1(n){return c1[0]=n,lp(c1)}function Gt(n){if(typeof n!="object"||n===null)return!1;const i=Object.getPrototypeOf(n);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function cp(n){if(I.isValidElement(n)||!Gt(n))return n;const i={};return Object.keys(n).forEach(l=>{i[l]=cp(n[l])}),i}function St(n,i,l={clone:!0}){const a=l.clone?{...n}:n;return Gt(n)&&Gt(i)&&Object.keys(i).forEach(s=>{I.isValidElement(i[s])?a[s]=i[s]:Gt(i[s])&&Object.prototype.hasOwnProperty.call(n,s)&&Gt(n[s])?a[s]=St(n[s],i[s],l):l.clone?a[s]=Gt(i[s])?cp(i[s]):i[s]:a[s]=i[s]}),a}const $y=n=>{const i=Object.keys(n).map(l=>({key:l,val:n[l]}))||[];return i.sort((l,a)=>l.val-a.val),i.reduce((l,a)=>({...l,[a.key]:a.val}),{})};function My(n){const{values:i={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:l="px",step:a=5,...s}=n,f=$y(i),d=Object.keys(f);function h(C){return`@media (min-width:${typeof i[C]=="number"?i[C]:C}${l})`}function m(C){return`@media (max-width:${(typeof i[C]=="number"?i[C]:C)-a/100}${l})`}function g(C,T){const E=d.indexOf(T);return`@media (min-width:${typeof i[C]=="number"?i[C]:C}${l}) and (max-width:${(E!==-1&&typeof i[d[E]]=="number"?i[d[E]]:T)-a/100}${l})`}function w(C){return d.indexOf(C)+1<d.length?g(C,d[d.indexOf(C)+1]):h(C)}function S(C){const T=d.indexOf(C);return T===0?h(d[1]):T===d.length-1?m(d[T]):g(C,d[d.indexOf(C)+1]).replace("@media","@media not all and")}return{keys:d,values:f,up:h,down:m,between:g,only:w,not:S,unit:l,...s}}function Fy(n,i){if(!n.containerQueries)return i;const l=Object.keys(i).filter(a=>a.startsWith("@container")).sort((a,s)=>{var d,h;const f=/min-width:\s*([0-9.]+)/;return+(((d=a.match(f))==null?void 0:d[1])||0)-+(((h=s.match(f))==null?void 0:h[1])||0)});return l.length?l.reduce((a,s)=>{const f=i[s];return delete a[s],a[s]=f,a},{...i}):i}function zy(n,i){return i==="@"||i.startsWith("@")&&(n.some(l=>i.startsWith(`@${l}`))||!!i.match(/^@\d/))}function Dy(n,i){const l=i.match(/^@([^/]+)?\/?(.+)?$/);if(!l)return null;const[,a,s]=l,f=Number.isNaN(+a)?a||0:+a;return n.containerQueries(s).up(f)}function by(n){const i=(f,d)=>f.replace("@media",d?`@container ${d}`:"@container");function l(f,d){f.up=(...h)=>i(n.breakpoints.up(...h),d),f.down=(...h)=>i(n.breakpoints.down(...h),d),f.between=(...h)=>i(n.breakpoints.between(...h),d),f.only=(...h)=>i(n.breakpoints.only(...h),d),f.not=(...h)=>{const m=i(n.breakpoints.not(...h),d);return m.includes("not all and")?m.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):m}}const a={},s=f=>(l(a,f),a);return l(s),{...n,containerQueries:s}}const By={borderRadius:4};function Ai(n,i){return i?St(n,i,{clone:!1}):n}const Ll={xs:0,sm:600,md:900,lg:1200,xl:1536},d1={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${Ll[n]}px)`},jy={containerQueries:n=>({up:i=>{let l=typeof i=="number"?i:Ll[i]||i;return typeof l=="number"&&(l=`${l}px`),n?`@container ${n} (min-width:${l})`:`@container (min-width:${l})`}})};function fn(n,i,l){const a=n.theme||{};if(Array.isArray(i)){const f=a.breakpoints||d1;return i.reduce((d,h,m)=>(d[f.up(f.keys[m])]=l(i[m]),d),{})}if(typeof i=="object"){const f=a.breakpoints||d1;return Object.keys(i).reduce((d,h)=>{if(zy(f.keys,h)){const m=Dy(a.containerQueries?a:jy,h);m&&(d[m]=l(i[h],h))}else if(Object.keys(f.values||Ll).includes(h)){const m=f.up(h);d[m]=l(i[h],h)}else{const m=h;d[m]=i[m]}return d},{})}return l(i)}function Uy(n={}){var l;return((l=n.keys)==null?void 0:l.reduce((a,s)=>{const f=n.up(s);return a[f]={},a},{}))||{}}function Wy(n,i){return n.reduce((l,a)=>{const s=l[a];return(!s||Object.keys(s).length===0)&&delete l[a],l},i)}function Xn(n){if(typeof n!="string")throw new Error(Yn(7));return n.charAt(0).toUpperCase()+n.slice(1)}function $r(n,i,l=!0){if(!i||typeof i!="string")return null;if(n&&n.vars&&l){const a=`vars.${i}`.split(".").reduce((s,f)=>s&&s[f]?s[f]:null,n);if(a!=null)return a}return i.split(".").reduce((a,s)=>a&&a[s]!=null?a[s]:null,n)}function Cl(n,i,l,a=l){let s;return typeof n=="function"?s=n(l):Array.isArray(n)?s=n[l]||a:s=$r(n,l)||a,i&&(s=i(s,a,n)),s}function be(n){const{prop:i,cssProperty:l=n.prop,themeKey:a,transform:s}=n,f=d=>{if(d[i]==null)return null;const h=d[i],m=d.theme,g=$r(m,a)||{};return fn(d,h,S=>{let C=Cl(g,s,S);return S===C&&typeof S=="string"&&(C=Cl(g,s,`${i}${S==="default"?"":Xn(S)}`,S)),l===!1?C:{[l]:C}})};return f.propTypes={},f.filterProps=[i],f}function Vy(n){const i={};return l=>(i[l]===void 0&&(i[l]=n(l)),i[l])}const Ky={m:"margin",p:"padding"},Qy={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},p1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Gy=Vy(n=>{if(n.length>2)if(p1[n])n=p1[n];else return[n];const[i,l]=n.split(""),a=Ky[i],s=Qy[l]||"";return Array.isArray(s)?s.map(f=>a+f):[a+s]}),Ps=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],_s=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ps,..._s];function Vi(n,i,l,a){const s=$r(n,i,!0)??l;return typeof s=="number"||typeof s=="string"?f=>typeof f=="string"?f:typeof s=="string"?`calc(${f} * ${s})`:s*f:Array.isArray(s)?f=>{if(typeof f=="string")return f;const d=Math.abs(f),h=s[d];return f>=0?h:typeof h=="number"?-h:`-${h}`}:typeof s=="function"?s:()=>{}}function Rs(n){return Vi(n,"spacing",8)}function Ki(n,i){return typeof i=="string"||i==null?i:n(i)}function Yy(n,i){return l=>n.reduce((a,s)=>(a[s]=Ki(i,l),a),{})}function Xy(n,i,l,a){if(!i.includes(l))return null;const s=Gy(l),f=Yy(s,a),d=n[l];return fn(n,d,f)}function fp(n,i){const l=Rs(n.theme);return Object.keys(n).map(a=>Xy(n,i,a,l)).reduce(Ai,{})}function $e(n){return fp(n,Ps)}$e.propTypes={};$e.filterProps=Ps;function Me(n){return fp(n,_s)}Me.propTypes={};Me.filterProps=_s;function dp(n=8,i=Rs({spacing:n})){if(n.mui)return n;const l=(...a)=>(a.length===0?[1]:a).map(f=>{const d=i(f);return typeof d=="number"?`${d}px`:d}).join(" ");return l.mui=!0,l}function Il(...n){const i=n.reduce((a,s)=>(s.filterProps.forEach(f=>{a[f]=s}),a),{}),l=a=>Object.keys(a).reduce((s,f)=>i[f]?Ai(s,i[f](a)):s,{});return l.propTypes={},l.filterProps=n.reduce((a,s)=>a.concat(s.filterProps),[]),l}function Nt(n){return typeof n!="number"?n:`${n}px solid`}function Tt(n,i){return be({prop:n,themeKey:"borders",transform:i})}const Zy=Tt("border",Nt),qy=Tt("borderTop",Nt),Jy=Tt("borderRight",Nt),e2=Tt("borderBottom",Nt),t2=Tt("borderLeft",Nt),n2=Tt("borderColor"),r2=Tt("borderTopColor"),i2=Tt("borderRightColor"),o2=Tt("borderBottomColor"),l2=Tt("borderLeftColor"),a2=Tt("outline",Nt),u2=Tt("outlineColor"),$l=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const i=Vi(n.theme,"shape.borderRadius",4),l=a=>({borderRadius:Ki(i,a)});return fn(n,n.borderRadius,l)}return null};$l.propTypes={};$l.filterProps=["borderRadius"];Il(Zy,qy,Jy,e2,t2,n2,r2,i2,o2,l2,$l,a2,u2);const Ml=n=>{if(n.gap!==void 0&&n.gap!==null){const i=Vi(n.theme,"spacing",8),l=a=>({gap:Ki(i,a)});return fn(n,n.gap,l)}return null};Ml.propTypes={};Ml.filterProps=["gap"];const Fl=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const i=Vi(n.theme,"spacing",8),l=a=>({columnGap:Ki(i,a)});return fn(n,n.columnGap,l)}return null};Fl.propTypes={};Fl.filterProps=["columnGap"];const zl=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const i=Vi(n.theme,"spacing",8),l=a=>({rowGap:Ki(i,a)});return fn(n,n.rowGap,l)}return null};zl.propTypes={};zl.filterProps=["rowGap"];const s2=be({prop:"gridColumn"}),c2=be({prop:"gridRow"}),f2=be({prop:"gridAutoFlow"}),d2=be({prop:"gridAutoColumns"}),p2=be({prop:"gridAutoRows"}),h2=be({prop:"gridTemplateColumns"}),m2=be({prop:"gridTemplateRows"}),g2=be({prop:"gridTemplateAreas"}),y2=be({prop:"gridArea"});Il(Ml,Fl,zl,s2,c2,f2,d2,p2,h2,m2,g2,y2);function Lr(n,i){return i==="grey"?i:n}const v2=be({prop:"color",themeKey:"palette",transform:Lr}),w2=be({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Lr}),S2=be({prop:"backgroundColor",themeKey:"palette",transform:Lr});Il(v2,w2,S2);function vt(n){return n<=1&&n!==0?`${n*100}%`:n}const C2=be({prop:"width",transform:vt}),Ns=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const i=l=>{var s,f,d,h,m;const a=((d=(f=(s=n.theme)==null?void 0:s.breakpoints)==null?void 0:f.values)==null?void 0:d[l])||Ll[l];return a?((m=(h=n.theme)==null?void 0:h.breakpoints)==null?void 0:m.unit)!=="px"?{maxWidth:`${a}${n.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:vt(l)}};return fn(n,n.maxWidth,i)}return null};Ns.filterProps=["maxWidth"];const x2=be({prop:"minWidth",transform:vt}),k2=be({prop:"height",transform:vt}),E2=be({prop:"maxHeight",transform:vt}),O2=be({prop:"minHeight",transform:vt});be({prop:"size",cssProperty:"width",transform:vt});be({prop:"size",cssProperty:"height",transform:vt});const P2=be({prop:"boxSizing"});Il(C2,Ns,x2,k2,E2,O2,P2);const Qi={border:{themeKey:"borders",transform:Nt},borderTop:{themeKey:"borders",transform:Nt},borderRight:{themeKey:"borders",transform:Nt},borderBottom:{themeKey:"borders",transform:Nt},borderLeft:{themeKey:"borders",transform:Nt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Nt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:$l},color:{themeKey:"palette",transform:Lr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Lr},backgroundColor:{themeKey:"palette",transform:Lr},p:{style:Me},pt:{style:Me},pr:{style:Me},pb:{style:Me},pl:{style:Me},px:{style:Me},py:{style:Me},padding:{style:Me},paddingTop:{style:Me},paddingRight:{style:Me},paddingBottom:{style:Me},paddingLeft:{style:Me},paddingX:{style:Me},paddingY:{style:Me},paddingInline:{style:Me},paddingInlineStart:{style:Me},paddingInlineEnd:{style:Me},paddingBlock:{style:Me},paddingBlockStart:{style:Me},paddingBlockEnd:{style:Me},m:{style:$e},mt:{style:$e},mr:{style:$e},mb:{style:$e},ml:{style:$e},mx:{style:$e},my:{style:$e},margin:{style:$e},marginTop:{style:$e},marginRight:{style:$e},marginBottom:{style:$e},marginLeft:{style:$e},marginX:{style:$e},marginY:{style:$e},marginInline:{style:$e},marginInlineStart:{style:$e},marginInlineEnd:{style:$e},marginBlock:{style:$e},marginBlockStart:{style:$e},marginBlockEnd:{style:$e},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ml},rowGap:{style:zl},columnGap:{style:Fl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:vt},maxWidth:{style:Ns},minWidth:{transform:vt},height:{transform:vt},maxHeight:{transform:vt},minHeight:{transform:vt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function _2(...n){const i=n.reduce((a,s)=>a.concat(Object.keys(s)),[]),l=new Set(i);return n.every(a=>l.size===Object.keys(a).length)}function R2(n,i){return typeof n=="function"?n(i):n}function N2(){function n(l,a,s,f){const d={[l]:a,theme:s},h=f[l];if(!h)return{[l]:a};const{cssProperty:m=l,themeKey:g,transform:w,style:S}=h;if(a==null)return null;if(g==="typography"&&a==="inherit")return{[l]:a};const C=$r(s,g)||{};return S?S(d):fn(d,a,E=>{let R=Cl(C,w,E);return E===R&&typeof E=="string"&&(R=Cl(C,w,`${l}${E==="default"?"":Xn(E)}`,E)),m===!1?R:{[m]:R}})}function i(l){const{sx:a,theme:s={}}=l||{};if(!a)return null;const f=s.unstable_sxConfig??Qi;function d(h){let m=h;if(typeof h=="function")m=h(s);else if(typeof h!="object")return h;if(!m)return null;const g=Uy(s.breakpoints),w=Object.keys(g);let S=g;return Object.keys(m).forEach(C=>{const T=R2(m[C],s);if(T!=null)if(typeof T=="object")if(f[C])S=Ai(S,n(C,T,s,f));else{const E=fn({theme:s},T,R=>({[C]:R}));_2(E,T)?S[C]=i({sx:T,theme:s}):S=Ai(S,E)}else S=Ai(S,n(C,T,s,f))}),Fy(s,Wy(w,S))}return Array.isArray(a)?a.map(d):d(a)}return i}const Zn=N2();Zn.filterProps=["sx"];function T2(n,i){var a;const l=this;if(l.vars){if(!((a=l.colorSchemes)!=null&&a[n])||typeof l.getColorSchemeSelector!="function")return{};let s=l.getColorSchemeSelector(n);return s==="&"?i:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:i})}return l.palette.mode===n?i:{}}function Ts(n={},...i){const{breakpoints:l={},palette:a={},spacing:s,shape:f={},...d}=n,h=My(l),m=dp(s);let g=St({breakpoints:h,direction:"ltr",components:{},palette:{mode:"light",...a},spacing:m,shape:{...By,...f}},d);return g=by(g),g.applyStyles=T2,g=i.reduce((w,S)=>St(w,S),g),g.unstable_sxConfig={...Qi,...d==null?void 0:d.unstable_sxConfig},g.unstable_sx=function(S){return Zn({sx:S,theme:this})},g}function H2(n){return Object.keys(n).length===0}function A2(n=null){const i=I.useContext(up);return!i||H2(i)?n:i}const L2=Ts();function pp(n=L2){return A2(n)}const I2=n=>{var a;const i={systemProps:{},otherProps:{}},l=((a=n==null?void 0:n.theme)==null?void 0:a.unstable_sxConfig)??Qi;return Object.keys(n).forEach(s=>{l[s]?i.systemProps[s]=n[s]:i.otherProps[s]=n[s]}),i};function hp(n){const{sx:i,...l}=n,{systemProps:a,otherProps:s}=I2(l);let f;return Array.isArray(i)?f=[a,...i]:typeof i=="function"?f=(...d)=>{const h=i(...d);return Gt(h)?{...a,...h}:a}:f={...a,...i},{...s,sx:f}}const h1=n=>n,$2=()=>{let n=h1;return{configure(i){n=i},generate(i){return n(i)},reset(){n=h1}}},mp=$2();function gp(n){var i,l,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(i=0;i<s;i++)n[i]&&(l=gp(n[i]))&&(a&&(a+=" "),a+=l)}else for(l in n)n[l]&&(a&&(a+=" "),a+=l);return a}function Hs(){for(var n,i,l=0,a="",s=arguments.length;l<s;l++)(n=arguments[l])&&(i=gp(n))&&(a&&(a+=" "),a+=i);return a}function M2(n={}){const{themeId:i,defaultTheme:l,defaultClassName:a="MuiBox-root",generateClassName:s}=n,f=sp("div",{shouldForwardProp:h=>h!=="theme"&&h!=="sx"&&h!=="as"})(Zn);return I.forwardRef(function(m,g){const w=pp(l),{className:S,component:C="div",...T}=hp(m);return we.jsx(f,{as:C,ref:g,className:Hs(S,s?s(a):a),theme:i&&w[i]||w,...T})})}const F2={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function As(n,i,l="Mui"){const a=F2[i];return a?`${l}-${a}`:`${mp.generate(n)}-${i}`}function Ls(n,i,l="Mui"){const a={};return i.forEach(s=>{a[s]=As(n,s,l)}),a}function yp(n){const{variants:i,...l}=n,a={variants:i,style:f1(l),isProcessed:!0};return a.style===l||i&&i.forEach(s=>{typeof s.style!="function"&&(s.style=f1(s.style))}),a}const z2=Ts();function Qu(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function D2(n){return n?(i,l)=>l[n]:null}function b2(n,i,l){n.theme=U2(n.theme)?l:n.theme[i]||n.theme}function gl(n,i){const l=typeof i=="function"?i(n):i;if(Array.isArray(l))return l.flatMap(a=>gl(n,a));if(Array.isArray(l==null?void 0:l.variants)){let a;if(l.isProcessed)a=l.style;else{const{variants:s,...f}=l;a=f}return vp(n,l.variants,[a])}return l!=null&&l.isProcessed?l.style:l}function vp(n,i,l=[]){var s;let a;e:for(let f=0;f<i.length;f+=1){const d=i[f];if(typeof d.props=="function"){if(a??(a={...n,...n.ownerState,ownerState:n.ownerState}),!d.props(a))continue}else for(const h in d.props)if(n[h]!==d.props[h]&&((s=n.ownerState)==null?void 0:s[h])!==d.props[h])continue e;typeof d.style=="function"?(a??(a={...n,...n.ownerState,ownerState:n.ownerState}),l.push(d.style(a))):l.push(d.style)}return l}function B2(n={}){const{themeId:i,defaultTheme:l=z2,rootShouldForwardProp:a=Qu,slotShouldForwardProp:s=Qu}=n;function f(h){b2(h,i,l)}return(h,m={})=>{Iy(h,B=>B.filter(K=>K!==Zn));const{name:g,slot:w,skipVariantsResolver:S,skipSx:C,overridesResolver:T=D2(V2(w)),...E}=m,R=S!==void 0?S:w&&w!=="Root"&&w!=="root"||!1,_=C||!1;let A=Qu;w==="Root"||w==="root"?A=a:w?A=s:W2(h)&&(A=void 0);const z=sp(h,{shouldForwardProp:A,label:j2(),...E}),$=B=>{if(typeof B=="function"&&B.__emotion_real!==B)return function(W){return gl(W,B)};if(Gt(B)){const K=yp(B);return K.variants?function(ne){return gl(ne,K)}:K.style}return B},M=(...B)=>{const K=[],W=B.map($),ne=[];if(K.push(f),g&&T&&ne.push(function(ie){var Be,Oe;const Se=(Oe=(Be=ie.theme.components)==null?void 0:Be[g])==null?void 0:Oe.styleOverrides;if(!Se)return null;const Fe={};for(const V in Se)Fe[V]=gl(ie,Se[V]);return T(ie,Fe)}),g&&!R&&ne.push(function(ie){var Fe,Be;const ae=ie.theme,Se=(Be=(Fe=ae==null?void 0:ae.components)==null?void 0:Fe[g])==null?void 0:Be.variants;return Se?vp(ie,Se):null}),_||ne.push(Zn),Array.isArray(W[0])){const G=W.shift(),ie=new Array(K.length).fill(""),ae=new Array(ne.length).fill("");let Se;Se=[...ie,...G,...ae],Se.raw=[...ie,...G.raw,...ae],K.unshift(Se)}const le=[...K,...W,...ne],y=z(...le);return h.muiName&&(y.muiName=h.muiName),y};return z.withConfig&&(M.withConfig=z.withConfig),M}}function j2(n,i){return void 0}function U2(n){for(const i in n)return!1;return!0}function W2(n){return typeof n=="string"&&n.charCodeAt(0)>96}function V2(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}function ls(n,i){const l={...i};for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)){const s=a;if(s==="components"||s==="slots")l[s]={...n[s],...l[s]};else if(s==="componentsProps"||s==="slotProps"){const f=n[s],d=i[s];if(!d)l[s]=f||{};else if(!f)l[s]=d;else{l[s]={...d};for(const h in f)if(Object.prototype.hasOwnProperty.call(f,h)){const m=h;l[s][m]=ls(f[m],d[m])}}}else l[s]===void 0&&(l[s]=n[s])}return l}function K2(n,i=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER){return Math.max(i,Math.min(n,l))}function Is(n,i=0,l=1){return K2(n,i,l)}function Q2(n){n=n.slice(1);const i=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let l=n.match(i);return l&&l[0].length===1&&(l=l.map(a=>a+a)),l?`rgb${l.length===4?"a":""}(${l.map((a,s)=>s<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function In(n){if(n.type)return n;if(n.charAt(0)==="#")return In(Q2(n));const i=n.indexOf("("),l=n.substring(0,i);if(!["rgb","rgba","hsl","hsla","color"].includes(l))throw new Error(Yn(9,n));let a=n.substring(i+1,n.length-1),s;if(l==="color"){if(a=a.split(" "),s=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(Yn(10,s))}else a=a.split(",");return a=a.map(f=>parseFloat(f)),{type:l,values:a,colorSpace:s}}const G2=n=>{const i=In(n);return i.values.slice(0,3).map((l,a)=>i.type.includes("hsl")&&a!==0?`${l}%`:l).join(" ")},Ni=(n,i)=>{try{return G2(n)}catch{return n}};function Dl(n){const{type:i,colorSpace:l}=n;let{values:a}=n;return i.includes("rgb")?a=a.map((s,f)=>f<3?parseInt(s,10):s):i.includes("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),i.includes("color")?a=`${l} ${a.join(" ")}`:a=`${a.join(", ")}`,`${i}(${a})`}function wp(n){n=In(n);const{values:i}=n,l=i[0],a=i[1]/100,s=i[2]/100,f=a*Math.min(s,1-s),d=(g,w=(g+l/30)%12)=>s-f*Math.max(Math.min(w-3,9-w,1),-1);let h="rgb";const m=[Math.round(d(0)*255),Math.round(d(8)*255),Math.round(d(4)*255)];return n.type==="hsla"&&(h+="a",m.push(i[3])),Dl({type:h,values:m})}function as(n){n=In(n);let i=n.type==="hsl"||n.type==="hsla"?In(wp(n)).values:n.values;return i=i.map(l=>(n.type!=="color"&&(l/=255),l<=.03928?l/12.92:((l+.055)/1.055)**2.4)),Number((.2126*i[0]+.7152*i[1]+.0722*i[2]).toFixed(3))}function Y2(n,i){const l=as(n),a=as(i);return(Math.max(l,a)+.05)/(Math.min(l,a)+.05)}function Li(n,i){return n=In(n),i=Is(i),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${i}`:n.values[3]=i,Dl(n)}function ul(n,i,l){try{return Li(n,i)}catch{return n}}function $s(n,i){if(n=In(n),i=Is(i),n.type.includes("hsl"))n.values[2]*=1-i;else if(n.type.includes("rgb")||n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]*=1-i;return Dl(n)}function Ce(n,i,l){try{return $s(n,i)}catch{return n}}function Ms(n,i){if(n=In(n),i=Is(i),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*i;else if(n.type.includes("rgb"))for(let l=0;l<3;l+=1)n.values[l]+=(255-n.values[l])*i;else if(n.type.includes("color"))for(let l=0;l<3;l+=1)n.values[l]+=(1-n.values[l])*i;return Dl(n)}function xe(n,i,l){try{return Ms(n,i)}catch{return n}}function X2(n,i=.15){return as(n)>.5?$s(n,i):Ms(n,i)}function sl(n,i,l){try{return X2(n,i)}catch{return n}}function m1(n){try{return n.matches(":focus-visible")}catch{}return!1}function Sp(n,i,l=void 0){const a={};for(const s in n){const f=n[s];let d="",h=!0;for(let m=0;m<f.length;m+=1){const g=f[m];g&&(d+=(h===!0?"":" ")+i(g),h=!1,l&&l[g]&&(d+=" "+l[g]))}a[s]=d}return a}const Z2=I.createContext(void 0);function q2(n){const{theme:i,name:l,props:a}=n;if(!i||!i.components||!i.components[l])return a;const s=i.components[l];return s.defaultProps?ls(s.defaultProps,a):!s.styleOverrides&&!s.variants?ls(s,a):a}function J2({props:n,name:i}){const l=I.useContext(Z2);return q2({props:n,name:i,theme:{components:l}})}const g1={theme:void 0};function ev(n){let i,l;return function(s){let f=i;return(f===void 0||s.theme!==l)&&(g1.theme=s.theme,f=yp(n(g1)),i=f,l=s.theme),f}}function tv(n=""){function i(...a){if(!a.length)return"";const s=a[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${s}${i(...a.slice(1))})`:`, ${s}`}return(a,...s)=>`var(--${n?`${n}-`:""}${a}${i(...s)})`}const y1=(n,i,l,a=[])=>{let s=n;i.forEach((f,d)=>{d===i.length-1?Array.isArray(s)?s[Number(f)]=l:s&&typeof s=="object"&&(s[f]=l):s&&typeof s=="object"&&(s[f]||(s[f]=a.includes(f)?[]:{}),s=s[f])})},nv=(n,i,l)=>{function a(s,f=[],d=[]){Object.entries(s).forEach(([h,m])=>{(!l||l&&!l([...f,h]))&&m!=null&&(typeof m=="object"&&Object.keys(m).length>0?a(m,[...f,h],Array.isArray(m)?[...d,h]:d):i([...f,h],m,d))})}a(n)},rv=(n,i)=>typeof i=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(a=>n.includes(a))||n[n.length-1].toLowerCase().includes("opacity")?i:`${i}px`:i;function Gu(n,i){const{prefix:l,shouldSkipGeneratingVar:a}=i||{},s={},f={},d={};return nv(n,(h,m,g)=>{if((typeof m=="string"||typeof m=="number")&&(!a||!a(h,m))){const w=`--${l?`${l}-`:""}${h.join("-")}`,S=rv(h,m);Object.assign(s,{[w]:S}),y1(f,h,`var(${w})`,g),y1(d,h,`var(${w}, ${S})`,g)}},h=>h[0]==="vars"),{css:s,vars:f,varsWithDefaults:d}}function iv(n,i={}){const{getSelector:l=_,disableCssColorScheme:a,colorSchemeSelector:s}=i,{colorSchemes:f={},components:d,defaultColorScheme:h="light",...m}=n,{vars:g,css:w,varsWithDefaults:S}=Gu(m,i);let C=S;const T={},{[h]:E,...R}=f;if(Object.entries(R||{}).forEach(([$,M])=>{const{vars:B,css:K,varsWithDefaults:W}=Gu(M,i);C=St(C,W),T[$]={css:K,vars:B}}),E){const{css:$,vars:M,varsWithDefaults:B}=Gu(E,i);C=St(C,B),T[h]={css:$,vars:M}}function _($,M){var K,W;let B=s;if(s==="class"&&(B=".%s"),s==="data"&&(B="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(B=`[${s}="%s"]`),$){if(B==="media")return n.defaultColorScheme===$?":root":{[`@media (prefers-color-scheme: ${((W=(K=f[$])==null?void 0:K.palette)==null?void 0:W.mode)||$})`]:{":root":M}};if(B)return n.defaultColorScheme===$?`:root, ${B.replace("%s",String($))}`:B.replace("%s",String($))}return":root"}return{vars:C,generateThemeVars:()=>{let $={...g};return Object.entries(T).forEach(([,{vars:M}])=>{$=St($,M)}),$},generateStyleSheets:()=>{var ne,le;const $=[],M=n.defaultColorScheme||"light";function B(y,G){Object.keys(G).length&&$.push(typeof y=="string"?{[y]:{...G}}:y)}B(l(void 0,{...w}),w);const{[M]:K,...W}=T;if(K){const{css:y}=K,G=(le=(ne=f[M])==null?void 0:ne.palette)==null?void 0:le.mode,ie=!a&&G?{colorScheme:G,...y}:{...y};B(l(M,{...ie}),ie)}return Object.entries(W).forEach(([y,{css:G}])=>{var Se,Fe;const ie=(Fe=(Se=f[y])==null?void 0:Se.palette)==null?void 0:Fe.mode,ae=!a&&ie?{colorScheme:ie,...G}:{...G};B(l(y,{...ae}),ae)}),$}}}function ov(n){return function(l){return n==="media"?`@media (prefers-color-scheme: ${l})`:n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${l}"] &`:n==="class"?`.${l} &`:n==="data"?`[data-${l}] &`:`${n.replace("%s",l)} &`:"&"}}function Cp(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:$i.white,default:$i.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const lv=Cp();function xp(){return{text:{primary:$i.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:$i.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const v1=xp();function w1(n,i,l,a){const s=a.light||a,f=a.dark||a*1.5;n[i]||(n.hasOwnProperty(l)?n[i]=n[l]:i==="light"?n.light=Ms(n.main,s):i==="dark"&&(n.dark=$s(n.main,f)))}function av(n="light"){return n==="dark"?{main:Nr[200],light:Nr[50],dark:Nr[400]}:{main:Nr[700],light:Nr[400],dark:Nr[800]}}function uv(n="light"){return n==="dark"?{main:Rr[200],light:Rr[50],dark:Rr[400]}:{main:Rr[500],light:Rr[300],dark:Rr[700]}}function sv(n="light"){return n==="dark"?{main:_r[500],light:_r[300],dark:_r[700]}:{main:_r[700],light:_r[400],dark:_r[800]}}function cv(n="light"){return n==="dark"?{main:Tr[400],light:Tr[300],dark:Tr[700]}:{main:Tr[700],light:Tr[500],dark:Tr[900]}}function fv(n="light"){return n==="dark"?{main:Hr[400],light:Hr[300],dark:Hr[700]}:{main:Hr[800],light:Hr[500],dark:Hr[900]}}function dv(n="light"){return n==="dark"?{main:_i[400],light:_i[300],dark:_i[700]}:{main:"#ed6c02",light:_i[500],dark:_i[900]}}function Fs(n){const{mode:i="light",contrastThreshold:l=3,tonalOffset:a=.2,...s}=n,f=n.primary||av(i),d=n.secondary||uv(i),h=n.error||sv(i),m=n.info||cv(i),g=n.success||fv(i),w=n.warning||dv(i);function S(R){return Y2(R,v1.text.primary)>=l?v1.text.primary:lv.text.primary}const C=({color:R,name:_,mainShade:A=500,lightShade:z=300,darkShade:$=700})=>{if(R={...R},!R.main&&R[A]&&(R.main=R[A]),!R.hasOwnProperty("main"))throw new Error(Yn(11,_?` (${_})`:"",A));if(typeof R.main!="string")throw new Error(Yn(12,_?` (${_})`:"",JSON.stringify(R.main)));return w1(R,"light",z,a),w1(R,"dark",$,a),R.contrastText||(R.contrastText=S(R.main)),R};let T;return i==="light"?T=Cp():i==="dark"&&(T=xp()),St({common:{...$i},mode:i,primary:C({color:f,name:"primary"}),secondary:C({color:d,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:h,name:"error"}),warning:C({color:w,name:"warning"}),info:C({color:m,name:"info"}),success:C({color:g,name:"success"}),grey:$g,contrastThreshold:l,getContrastText:S,augmentColor:C,tonalOffset:a,...T},s)}function pv(n){const i={};return Object.entries(n).forEach(a=>{const[s,f]=a;typeof f=="object"&&(i[s]=`${f.fontStyle?`${f.fontStyle} `:""}${f.fontVariant?`${f.fontVariant} `:""}${f.fontWeight?`${f.fontWeight} `:""}${f.fontStretch?`${f.fontStretch} `:""}${f.fontSize||""}${f.lineHeight?`/${f.lineHeight} `:""}${f.fontFamily||""}`)}),i}function hv(n,i){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...i}}function mv(n){return Math.round(n*1e5)/1e5}const S1={textTransform:"uppercase"},C1='"Roboto", "Helvetica", "Arial", sans-serif';function gv(n,i){const{fontFamily:l=C1,fontSize:a=14,fontWeightLight:s=300,fontWeightRegular:f=400,fontWeightMedium:d=500,fontWeightBold:h=700,htmlFontSize:m=16,allVariants:g,pxToRem:w,...S}=typeof i=="function"?i(n):i,C=a/14,T=w||(_=>`${_/m*C}rem`),E=(_,A,z,$,M)=>({fontFamily:l,fontWeight:_,fontSize:T(A),lineHeight:z,...l===C1?{letterSpacing:`${mv($/A)}em`}:{},...M,...g}),R={h1:E(s,96,1.167,-1.5),h2:E(s,60,1.2,-.5),h3:E(f,48,1.167,0),h4:E(f,34,1.235,.25),h5:E(f,24,1.334,0),h6:E(d,20,1.6,.15),subtitle1:E(f,16,1.75,.15),subtitle2:E(d,14,1.57,.1),body1:E(f,16,1.5,.15),body2:E(f,14,1.43,.15),button:E(d,14,1.75,.4,S1),caption:E(f,12,1.66,.4),overline:E(f,12,2.66,1,S1),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return St({htmlFontSize:m,pxToRem:T,fontFamily:l,fontSize:a,fontWeightLight:s,fontWeightRegular:f,fontWeightMedium:d,fontWeightBold:h,...R},S,{clone:!1})}const yv=.2,vv=.14,wv=.12;function Te(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${yv})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${vv})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${wv})`].join(",")}const Sv=["none",Te(0,2,1,-1,0,1,1,0,0,1,3,0),Te(0,3,1,-2,0,2,2,0,0,1,5,0),Te(0,3,3,-2,0,3,4,0,0,1,8,0),Te(0,2,4,-1,0,4,5,0,0,1,10,0),Te(0,3,5,-1,0,5,8,0,0,1,14,0),Te(0,3,5,-1,0,6,10,0,0,1,18,0),Te(0,4,5,-2,0,7,10,1,0,2,16,1),Te(0,5,5,-3,0,8,10,1,0,3,14,2),Te(0,5,6,-3,0,9,12,1,0,3,16,2),Te(0,6,6,-3,0,10,14,1,0,4,18,3),Te(0,6,7,-4,0,11,15,1,0,4,20,3),Te(0,7,8,-4,0,12,17,2,0,5,22,4),Te(0,7,8,-4,0,13,19,2,0,5,24,4),Te(0,7,9,-4,0,14,21,2,0,5,26,4),Te(0,8,9,-5,0,15,22,2,0,6,28,5),Te(0,8,10,-5,0,16,24,2,0,6,30,5),Te(0,8,11,-5,0,17,26,2,0,6,32,5),Te(0,9,11,-5,0,18,28,2,0,7,34,6),Te(0,9,12,-6,0,19,29,2,0,7,36,6),Te(0,10,13,-6,0,20,31,3,0,8,38,7),Te(0,10,13,-6,0,21,33,3,0,8,40,7),Te(0,10,14,-6,0,22,35,3,0,8,42,7),Te(0,11,14,-7,0,23,36,3,0,9,44,8),Te(0,11,15,-7,0,24,38,3,0,9,46,8)],Cv={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},xv={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function x1(n){return`${Math.round(n)}ms`}function kv(n){if(!n)return 0;const i=n/36;return Math.min(Math.round((4+15*i**.25+i/5)*10),3e3)}function Ev(n){const i={...Cv,...n.easing},l={...xv,...n.duration};return{getAutoHeightDuration:kv,create:(s=["all"],f={})=>{const{duration:d=l.standard,easing:h=i.easeInOut,delay:m=0,...g}=f;return(Array.isArray(s)?s:[s]).map(w=>`${w} ${typeof d=="string"?d:x1(d)} ${h} ${typeof m=="string"?m:x1(m)}`).join(",")},...n,easing:i,duration:l}}const Ov={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Pv(n){return Gt(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function kp(n={}){const i={...n};function l(a){const s=Object.entries(a);for(let f=0;f<s.length;f++){const[d,h]=s[f];!Pv(h)||d.startsWith("unstable_")?delete a[d]:Gt(h)&&(a[d]={...h},l(a[d]))}}return l(i),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function us(n={},...i){const{breakpoints:l,mixins:a={},spacing:s,palette:f={},transitions:d={},typography:h={},shape:m,...g}=n;if(n.vars)throw new Error(Yn(20));const w=Fs(f),S=Ts(n);let C=St(S,{mixins:hv(S.breakpoints,a),palette:w,shadows:Sv.slice(),typography:gv(w,h),transitions:Ev(d),zIndex:{...Ov}});return C=St(C,g),C=i.reduce((T,E)=>St(T,E),C),C.unstable_sxConfig={...Qi,...g==null?void 0:g.unstable_sxConfig},C.unstable_sx=function(E){return Zn({sx:E,theme:this})},C.toRuntimeSource=kp,C}function _v(n){let i;return n<1?i=5.11916*n**2:i=4.5*Math.log(n+1)+2,Math.round(i*10)/1e3}const Rv=[...Array(25)].map((n,i)=>{if(i===0)return"none";const l=_v(i);return`linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`});function Ep(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function Op(n){return n==="dark"?Rv:[]}function Nv(n){const{palette:i={mode:"light"},opacity:l,overlays:a,...s}=n,f=Fs(i);return{palette:f,opacity:{...Ep(f.mode),...l},overlays:a||Op(f.mode),...s}}function Tv(n){var i;return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!((i=n[1])!=null&&i.match(/(mode|contrastThreshold|tonalOffset)/))}const Hv=n=>[...[...Array(25)].map((i,l)=>`--${n?`${n}-`:""}overlays-${l}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],Av=n=>(i,l)=>{const a=n.rootSelector||":root",s=n.colorSchemeSelector;let f=s;if(s==="class"&&(f=".%s"),s==="data"&&(f="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(f=`[${s}="%s"]`),n.defaultColorScheme===i){if(i==="dark"){const d={};return Hv(n.cssVarPrefix).forEach(h=>{d[h]=l[h],delete l[h]}),f==="media"?{[a]:l,"@media (prefers-color-scheme: dark)":{[a]:d}}:f?{[f.replace("%s",i)]:d,[`${a}, ${f.replace("%s",i)}`]:l}:{[a]:{...l,...d}}}if(f&&f!=="media")return`${a}, ${f.replace("%s",String(i))}`}else if(i){if(f==="media")return{[`@media (prefers-color-scheme: ${String(i)})`]:{[a]:l}};if(f)return f.replace("%s",String(i))}return a};function Lv(n,i){i.forEach(l=>{n[l]||(n[l]={})})}function L(n,i,l){!n[i]&&l&&(n[i]=l)}function Ti(n){return!n||!n.startsWith("hsl")?n:wp(n)}function un(n,i){`${i}Channel`in n||(n[`${i}Channel`]=Ni(Ti(n[i]),`MUI: Can't create \`palette.${i}Channel\` because \`palette.${i}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${i}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function Iv(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const Vt=n=>{try{return n()}catch{}},$v=(n="mui")=>tv(n);function Yu(n,i,l,a){if(!i)return;i=i===!0?{}:i;const s=a==="dark"?"dark":"light";if(!l){n[a]=Nv({...i,palette:{mode:s,...i==null?void 0:i.palette}});return}const{palette:f,...d}=us({...l,palette:{mode:s,...i==null?void 0:i.palette}});return n[a]={...i,palette:f,opacity:{...Ep(s),...i==null?void 0:i.opacity},overlays:(i==null?void 0:i.overlays)||Op(s)},d}function Mv(n={},...i){const{colorSchemes:l={light:!0},defaultColorScheme:a,disableCssColorScheme:s=!1,cssVarPrefix:f="mui",shouldSkipGeneratingVar:d=Tv,colorSchemeSelector:h=l.light&&l.dark?"media":void 0,rootSelector:m=":root",...g}=n,w=Object.keys(l)[0],S=a||(l.light&&w!=="light"?"light":w),C=$v(f),{[S]:T,light:E,dark:R,..._}=l,A={..._};let z=T;if((S==="dark"&&!("dark"in l)||S==="light"&&!("light"in l))&&(z=!0),!z)throw new Error(Yn(21,S));const $=Yu(A,z,g,S);E&&!A.light&&Yu(A,E,void 0,"light"),R&&!A.dark&&Yu(A,R,void 0,"dark");let M={defaultColorScheme:S,...$,cssVarPrefix:f,colorSchemeSelector:h,rootSelector:m,getCssVar:C,colorSchemes:A,font:{...pv($.typography),...$.font},spacing:Iv(g.spacing)};Object.keys(M.colorSchemes).forEach(le=>{const y=M.colorSchemes[le].palette,G=ie=>{const ae=ie.split("-"),Se=ae[1],Fe=ae[2];return C(ie,y[Se][Fe])};if(y.mode==="light"&&(L(y.common,"background","#fff"),L(y.common,"onBackground","#000")),y.mode==="dark"&&(L(y.common,"background","#000"),L(y.common,"onBackground","#fff")),Lv(y,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),y.mode==="light"){L(y.Alert,"errorColor",Ce(y.error.light,.6)),L(y.Alert,"infoColor",Ce(y.info.light,.6)),L(y.Alert,"successColor",Ce(y.success.light,.6)),L(y.Alert,"warningColor",Ce(y.warning.light,.6)),L(y.Alert,"errorFilledBg",G("palette-error-main")),L(y.Alert,"infoFilledBg",G("palette-info-main")),L(y.Alert,"successFilledBg",G("palette-success-main")),L(y.Alert,"warningFilledBg",G("palette-warning-main")),L(y.Alert,"errorFilledColor",Vt(()=>y.getContrastText(y.error.main))),L(y.Alert,"infoFilledColor",Vt(()=>y.getContrastText(y.info.main))),L(y.Alert,"successFilledColor",Vt(()=>y.getContrastText(y.success.main))),L(y.Alert,"warningFilledColor",Vt(()=>y.getContrastText(y.warning.main))),L(y.Alert,"errorStandardBg",xe(y.error.light,.9)),L(y.Alert,"infoStandardBg",xe(y.info.light,.9)),L(y.Alert,"successStandardBg",xe(y.success.light,.9)),L(y.Alert,"warningStandardBg",xe(y.warning.light,.9)),L(y.Alert,"errorIconColor",G("palette-error-main")),L(y.Alert,"infoIconColor",G("palette-info-main")),L(y.Alert,"successIconColor",G("palette-success-main")),L(y.Alert,"warningIconColor",G("palette-warning-main")),L(y.AppBar,"defaultBg",G("palette-grey-100")),L(y.Avatar,"defaultBg",G("palette-grey-400")),L(y.Button,"inheritContainedBg",G("palette-grey-300")),L(y.Button,"inheritContainedHoverBg",G("palette-grey-A100")),L(y.Chip,"defaultBorder",G("palette-grey-400")),L(y.Chip,"defaultAvatarColor",G("palette-grey-700")),L(y.Chip,"defaultIconColor",G("palette-grey-700")),L(y.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),L(y.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),L(y.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),L(y.LinearProgress,"primaryBg",xe(y.primary.main,.62)),L(y.LinearProgress,"secondaryBg",xe(y.secondary.main,.62)),L(y.LinearProgress,"errorBg",xe(y.error.main,.62)),L(y.LinearProgress,"infoBg",xe(y.info.main,.62)),L(y.LinearProgress,"successBg",xe(y.success.main,.62)),L(y.LinearProgress,"warningBg",xe(y.warning.main,.62)),L(y.Skeleton,"bg",`rgba(${G("palette-text-primaryChannel")} / 0.11)`),L(y.Slider,"primaryTrack",xe(y.primary.main,.62)),L(y.Slider,"secondaryTrack",xe(y.secondary.main,.62)),L(y.Slider,"errorTrack",xe(y.error.main,.62)),L(y.Slider,"infoTrack",xe(y.info.main,.62)),L(y.Slider,"successTrack",xe(y.success.main,.62)),L(y.Slider,"warningTrack",xe(y.warning.main,.62));const ie=sl(y.background.default,.8);L(y.SnackbarContent,"bg",ie),L(y.SnackbarContent,"color",Vt(()=>y.getContrastText(ie))),L(y.SpeedDialAction,"fabHoverBg",sl(y.background.paper,.15)),L(y.StepConnector,"border",G("palette-grey-400")),L(y.StepContent,"border",G("palette-grey-400")),L(y.Switch,"defaultColor",G("palette-common-white")),L(y.Switch,"defaultDisabledColor",G("palette-grey-100")),L(y.Switch,"primaryDisabledColor",xe(y.primary.main,.62)),L(y.Switch,"secondaryDisabledColor",xe(y.secondary.main,.62)),L(y.Switch,"errorDisabledColor",xe(y.error.main,.62)),L(y.Switch,"infoDisabledColor",xe(y.info.main,.62)),L(y.Switch,"successDisabledColor",xe(y.success.main,.62)),L(y.Switch,"warningDisabledColor",xe(y.warning.main,.62)),L(y.TableCell,"border",xe(ul(y.divider,1),.88)),L(y.Tooltip,"bg",ul(y.grey[700],.92))}if(y.mode==="dark"){L(y.Alert,"errorColor",xe(y.error.light,.6)),L(y.Alert,"infoColor",xe(y.info.light,.6)),L(y.Alert,"successColor",xe(y.success.light,.6)),L(y.Alert,"warningColor",xe(y.warning.light,.6)),L(y.Alert,"errorFilledBg",G("palette-error-dark")),L(y.Alert,"infoFilledBg",G("palette-info-dark")),L(y.Alert,"successFilledBg",G("palette-success-dark")),L(y.Alert,"warningFilledBg",G("palette-warning-dark")),L(y.Alert,"errorFilledColor",Vt(()=>y.getContrastText(y.error.dark))),L(y.Alert,"infoFilledColor",Vt(()=>y.getContrastText(y.info.dark))),L(y.Alert,"successFilledColor",Vt(()=>y.getContrastText(y.success.dark))),L(y.Alert,"warningFilledColor",Vt(()=>y.getContrastText(y.warning.dark))),L(y.Alert,"errorStandardBg",Ce(y.error.light,.9)),L(y.Alert,"infoStandardBg",Ce(y.info.light,.9)),L(y.Alert,"successStandardBg",Ce(y.success.light,.9)),L(y.Alert,"warningStandardBg",Ce(y.warning.light,.9)),L(y.Alert,"errorIconColor",G("palette-error-main")),L(y.Alert,"infoIconColor",G("palette-info-main")),L(y.Alert,"successIconColor",G("palette-success-main")),L(y.Alert,"warningIconColor",G("palette-warning-main")),L(y.AppBar,"defaultBg",G("palette-grey-900")),L(y.AppBar,"darkBg",G("palette-background-paper")),L(y.AppBar,"darkColor",G("palette-text-primary")),L(y.Avatar,"defaultBg",G("palette-grey-600")),L(y.Button,"inheritContainedBg",G("palette-grey-800")),L(y.Button,"inheritContainedHoverBg",G("palette-grey-700")),L(y.Chip,"defaultBorder",G("palette-grey-700")),L(y.Chip,"defaultAvatarColor",G("palette-grey-300")),L(y.Chip,"defaultIconColor",G("palette-grey-300")),L(y.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),L(y.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),L(y.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),L(y.LinearProgress,"primaryBg",Ce(y.primary.main,.5)),L(y.LinearProgress,"secondaryBg",Ce(y.secondary.main,.5)),L(y.LinearProgress,"errorBg",Ce(y.error.main,.5)),L(y.LinearProgress,"infoBg",Ce(y.info.main,.5)),L(y.LinearProgress,"successBg",Ce(y.success.main,.5)),L(y.LinearProgress,"warningBg",Ce(y.warning.main,.5)),L(y.Skeleton,"bg",`rgba(${G("palette-text-primaryChannel")} / 0.13)`),L(y.Slider,"primaryTrack",Ce(y.primary.main,.5)),L(y.Slider,"secondaryTrack",Ce(y.secondary.main,.5)),L(y.Slider,"errorTrack",Ce(y.error.main,.5)),L(y.Slider,"infoTrack",Ce(y.info.main,.5)),L(y.Slider,"successTrack",Ce(y.success.main,.5)),L(y.Slider,"warningTrack",Ce(y.warning.main,.5));const ie=sl(y.background.default,.98);L(y.SnackbarContent,"bg",ie),L(y.SnackbarContent,"color",Vt(()=>y.getContrastText(ie))),L(y.SpeedDialAction,"fabHoverBg",sl(y.background.paper,.15)),L(y.StepConnector,"border",G("palette-grey-600")),L(y.StepContent,"border",G("palette-grey-600")),L(y.Switch,"defaultColor",G("palette-grey-300")),L(y.Switch,"defaultDisabledColor",G("palette-grey-600")),L(y.Switch,"primaryDisabledColor",Ce(y.primary.main,.55)),L(y.Switch,"secondaryDisabledColor",Ce(y.secondary.main,.55)),L(y.Switch,"errorDisabledColor",Ce(y.error.main,.55)),L(y.Switch,"infoDisabledColor",Ce(y.info.main,.55)),L(y.Switch,"successDisabledColor",Ce(y.success.main,.55)),L(y.Switch,"warningDisabledColor",Ce(y.warning.main,.55)),L(y.TableCell,"border",Ce(ul(y.divider,1),.68)),L(y.Tooltip,"bg",ul(y.grey[700],.92))}un(y.background,"default"),un(y.background,"paper"),un(y.common,"background"),un(y.common,"onBackground"),un(y,"divider"),Object.keys(y).forEach(ie=>{const ae=y[ie];ae&&typeof ae=="object"&&(ae.main&&L(y[ie],"mainChannel",Ni(Ti(ae.main))),ae.light&&L(y[ie],"lightChannel",Ni(Ti(ae.light))),ae.dark&&L(y[ie],"darkChannel",Ni(Ti(ae.dark))),ae.contrastText&&L(y[ie],"contrastTextChannel",Ni(Ti(ae.contrastText))),ie==="text"&&(un(y[ie],"primary"),un(y[ie],"secondary")),ie==="action"&&(ae.active&&un(y[ie],"active"),ae.selected&&un(y[ie],"selected")))})}),M=i.reduce((le,y)=>St(le,y),M);const B={prefix:f,disableCssColorScheme:s,shouldSkipGeneratingVar:d,getSelector:Av(M)},{vars:K,generateThemeVars:W,generateStyleSheets:ne}=iv(M,B);return M.vars=K,Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([le,y])=>{M[le]=y}),M.generateThemeVars=W,M.generateStyleSheets=ne,M.generateSpacing=function(){return dp(g.spacing,Rs(this))},M.getColorSchemeSelector=ov(h),M.spacing=M.generateSpacing(),M.shouldSkipGeneratingVar=d,M.unstable_sxConfig={...Qi,...g==null?void 0:g.unstable_sxConfig},M.unstable_sx=function(y){return Zn({sx:y,theme:this})},M.toRuntimeSource=kp,M}function k1(n,i,l){n.colorSchemes&&l&&(n.colorSchemes[i]={...l!==!0&&l,palette:Fs({...l===!0?{}:l.palette,mode:i})})}function Pp(n={},...i){const{palette:l,cssVariables:a=!1,colorSchemes:s=l?void 0:{light:!0},defaultColorScheme:f=l==null?void 0:l.mode,...d}=n,h=f||"light",m=s==null?void 0:s[h],g={...s,...l?{[h]:{...typeof m!="boolean"&&m,palette:l}}:void 0};if(a===!1){if(!("colorSchemes"in n))return us(n,...i);let w=l;"palette"in n||g[h]&&(g[h]!==!0?w=g[h].palette:h==="dark"&&(w={mode:"dark"}));const S=us({...n,palette:w},...i);return S.defaultColorScheme=h,S.colorSchemes=g,S.palette.mode==="light"&&(S.colorSchemes.light={...g.light!==!0&&g.light,palette:S.palette},k1(S,"dark",g.dark)),S.palette.mode==="dark"&&(S.colorSchemes.dark={...g.dark!==!0&&g.dark,palette:S.palette},k1(S,"light",g.light)),S}return!l&&!("light"in g)&&h==="light"&&(g.light=!0),Mv({...d,colorSchemes:g,defaultColorScheme:h,...typeof a!="boolean"&&a},...i)}const _p=Pp();function Fv(){const n=pp(_p);return n[xs]||n}function zv(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const Dv=n=>zv(n)&&n!=="classes",Rp=B2({themeId:xs,defaultTheme:_p,rootShouldForwardProp:Dv});function bv(){return hp}const Np=ev;function Tp(n){return J2(n)}function Bv(n){return typeof n.main=="string"}function jv(n,i=[]){if(!Bv(n))return!1;for(const l of i)if(!n.hasOwnProperty(l)||typeof n[l]!="string")return!1;return!0}function Hp(n=[]){return([,i])=>i&&jv(i,n)}function Uv(n){return As("MuiTypography",n)}Ls("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Wv={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Vv=bv(),Kv=n=>{const{align:i,gutterBottom:l,noWrap:a,paragraph:s,variant:f,classes:d}=n,h={root:["root",f,n.align!=="inherit"&&`align${Xn(i)}`,l&&"gutterBottom",a&&"noWrap",s&&"paragraph"]};return Sp(h,Uv,d)},Qv=Rp("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,l.variant&&i[l.variant],l.align!=="inherit"&&i[`align${Xn(l.align)}`],l.noWrap&&i.noWrap,l.gutterBottom&&i.gutterBottom,l.paragraph&&i.paragraph]}})(Np(({theme:n})=>{var i;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(n.typography).filter(([l,a])=>l!=="inherit"&&a&&typeof a=="object").map(([l,a])=>({props:{variant:l},style:a})),...Object.entries(n.palette).filter(Hp()).map(([l])=>({props:{color:l},style:{color:(n.vars||n).palette[l].main}})),...Object.entries(((i=n.palette)==null?void 0:i.text)||{}).filter(([,l])=>typeof l=="string").map(([l])=>({props:{color:`text${Xn(l)}`},style:{color:(n.vars||n).palette.text[l]}})),{props:({ownerState:l})=>l.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:l})=>l.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:l})=>l.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:l})=>l.paragraph,style:{marginBottom:16}}]}})),E1={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},zt=I.forwardRef(function(i,l){const{color:a,...s}=Tp({props:i,name:"MuiTypography"}),f=!Wv[a],d=Vv({...s,...f&&{color:a}}),{align:h="inherit",className:m,component:g,gutterBottom:w=!1,noWrap:S=!1,paragraph:C=!1,variant:T="body1",variantMapping:E=E1,...R}=d,_={...d,align:h,color:a,className:m,component:g,gutterBottom:w,noWrap:S,paragraph:C,variant:T,variantMapping:E},A=g||(C?"p":E[T]||E1[T])||"span",z=Kv(_);return we.jsx(Qv,{as:A,ref:l,className:Hs(z.root,m),...R,ownerState:_,style:{...h!=="inherit"&&{"--Typography-textAlign":h},...R.style}})}),Gv=Ls("MuiBox",["root"]),Yv=Pp(),yl=M2({themeId:xs,defaultTheme:Yv,defaultClassName:Gv.root,generateClassName:mp.generate});function Xv(n){return As("MuiLink",n)}const Zv=Ls("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),qv=({theme:n,ownerState:i})=>{const l=i.color,a=$r(n,`palette.${l}`,!1)||i.color,s=$r(n,`palette.${l}Channel`);return"vars"in n&&s?`rgba(${s} / 0.4)`:Li(a,.4)},O1={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Jv=n=>{const{classes:i,component:l,focusVisible:a,underline:s}=n,f={root:["root",`underline${Xn(s)}`,l==="button"&&"button",a&&"focusVisible"]};return Sp(f,Xv,i)},e3=Rp(zt,{name:"MuiLink",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,i[`underline${Xn(l.underline)}`],l.component==="button"&&i.button]}})(Np(({theme:n})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:i,ownerState:l})=>i==="always"&&l.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(n.palette).filter(Hp()).map(([i])=>({props:{underline:"always",color:i},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette[i].mainChannel} / 0.4)`:Li(n.palette[i].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / 0.4)`:Li(n.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.secondaryChannel} / 0.4)`:Li(n.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(n.vars||n).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Zv.focusVisible}`]:{outline:"auto"}}}]}))),t3=I.forwardRef(function(i,l){const a=Tp({props:i,name:"MuiLink"}),s=Fv(),{className:f,color:d="primary",component:h="a",onBlur:m,onFocus:g,TypographyClasses:w,underline:S="always",variant:C="inherit",sx:T,...E}=a,[R,_]=I.useState(!1),A=B=>{m1(B.target)||_(!1),m&&m(B)},z=B=>{m1(B.target)&&_(!0),g&&g(B)},$={...a,color:d,component:h,focusVisible:R,underline:S,variant:C},M=Jv($);return we.jsx(e3,{color:d,className:Hs(M.root,f),classes:w,component:h,onBlur:A,onFocus:z,ref:l,ownerState:$,variant:C,...E,sx:[...O1[d]===void 0?[{color:d}]:[],...Array.isArray(T)?T:[T]],style:{...E.style,...S==="always"&&d!=="inherit"&&!O1[d]&&{"--Link-underlineColor":qv({theme:s,ownerState:$})}}})}),n3=[{id:1,title:"Конспект лекции № 7",description:"Часть 1. Физико-химические основы поверхностных явлений.",url:"https://biochemistry74.ru/lectures/07/lect07-1.pdf"},{id:2,title:"Конспект лекции № 7",description:"Часть 2. Физико-химические свойства дисперсных систем. Физико-химические свойства растворов высокомолекулярных соединений.",url:"https://biochemistry74.ru/lectures/07/lect07-2.pdf"},{id:3,title:"Конспект лекции № 8",description:"Части 1 и 2. Классификация и номенклатура органических соединений. Пространственное строение органических соединений.",url:"https://exp.biochemistry74.ru/lessons/lect08-1.pdf"},{id:4,title:"Конспект лекции № 8",description:"Часть 3. Реакционная способность органических соединений.",url:"https://exp.biochemistry74.ru/lessons/lect08-2.pdf"},{id:5,title:"Конспект лекции № 9",description:"Часть 1. Биологически важные поли- и гетерофункциональные соединения.",url:"https://biochemistry74.ru/lectures/09/lect09-1.pdf"},{id:6,title:"Конспект лекции № 9",description:"Часть 2. Биологически важные гетероциклические соединения.",url:"https://biochemistry74.ru/lectures/09/lect09-2.pdf"}],r3=[{id:"1",title:"Занятие № 1",description:"Способы выражения концентрации растворов. Титриметрический метод анализа (лабораторная работа)."},{id:"2",title:"Занятие № 2",description:"Химическая термодинамика."},{id:"3",title:"Занятие № 3",description:"Химическая кинетика. Химическое равновесие."},{id:"4",title:"Занятие № 4",description:"Коллигативные свойства растворов."},{id:"5",title:"Занятие № 5",description:"Теория растворов электролитов. Протолитические равновесия и процессы в растворах электролитов. Электрохимия."},{id:"6",title:"Занятие № 6",description:"Протолитические равновесия в растворах солей. Протолитические буферные системы."},{id:"7",title:"Занятие № 7",description:"Гетерогенные равновесия и процессы."},{id:"8",title:"Занятие № 8",description:"Лигандно-обменные равновесия. Биогенные элементы."},{id:"9",title:"Занятие № 9",description:"Редокс-равновесия и процессы."},{id:"10",title:"Занятие № 10",description:"Физико-химия поверхностных явлений."},{id:"11",title:"Занятие № 11",description:"Физико-химия дисперсных систем. Свойства растворов высокомолекулярных соединений."},{id:"12",title:"Занятие № 12",description:"Классификация, строение и номенклатура органических соединений."},{id:"13",title:"Занятие № 13",description:"Реакционная способность органических соединений."},{id:"14",title:"Занятие № 14",description:"Поли- и гетерофункциональные органические соединения."},{id:"15",title:"Занятие № 15",description:"Гетероциклические органические соединения."},{id:"16",title:"Занятие № 16",description:`(только для студентов стоматологического факультета)
 Прикладные аспекты химии в стоматологии.`}],i3=()=>we.jsxs(yl,{sx:{backgroundColor:"#AFC8AF",padding:"20px",border:"2px solid #ccc",maxWidth:"90%",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto",boxSizing:"border-box"},children:[we.jsx(zt,{variant:"h1",sx:{textAlign:"left",fontSize:"18pt",fontWeight:"bold",marginBottom:"10px",fontFamily:"serif",width:"100%"},children:"Химия"}),we.jsx(zt,{variant:"h2",sx:{textAlign:"left",fontSize:"18pt",fontWeight:"bold",marginBottom:"20px",fontFamily:"serif",width:"100%"},children:"Лекции"}),n3.map(n=>we.jsx(yl,{sx:{marginBottom:"40px",backgroundColor:"#B0E0E6",border:"1px solid #000",borderRadius:"5px",padding:"15px",fontFamily:"serif",width:"100%"},children:we.jsxs(t3,{href:n.url,target:"_blank",sx:{textDecoration:"none",color:"#000"},children:[we.jsx(zt,{variant:"h6",sx:{fontWeight:"bold",fontSize:"14pt",marginBottom:"5px"},children:n.title}),we.jsx(zt,{variant:"body1",sx:{fontSize:"12pt",fontWeight:"normal",textAlign:"left"},children:n.description})]})},n.id)),we.jsx(zt,{variant:"h2",sx:{textAlign:"left",fontSize:"18pt",fontWeight:"bold",margin:"20px 0",fontFamily:"serif",width:"100%"},children:"План занятий"}),r3.map(n=>we.jsx(yl,{sx:{marginBottom:"40px",backgroundColor:"#B0E0E6",border:"1px solid #000",borderRadius:"5px",padding:"15px",fontFamily:"serif",width:"100%"},children:we.jsxs(Cs,{to:`/lessons/${n.id}`,style:{textDecoration:"none",color:"#000"},children:[we.jsx(zt,{variant:"h6",sx:{fontWeight:"bold",fontSize:"14pt",marginBottom:"5px"},children:n.title}),we.jsx(zt,{variant:"body1",sx:{fontSize:"12pt",fontWeight:"normal"},children:n.description})]})},n.id))]}),o3={title:"Способы выражения концентрации растворов. Титриметрический метод анализа.",content:`
      Вопросы для подготовки
1.1. Техника безопасности при работе в химической лаборатории.


1.1.1. Источники опасности в химической лаборатории. Общие меры предосторожности при работе в лаборатории. Меры предосторожности при работе с оборудованием, химической посудой, реактивами.

1.1.2. Техника безопасности при проведении лабораторных работ.

1.1.3. Действия в аварийных ситуациях. Меры оказания первой помощи.


1.2. Способы выражения концентрации растворов.


1.2.1. Массовая и объёмная доля растворённого вещества.

1.2.2. Молярная и моляльная концентрация.

1.2.3. Взаимосвязь разных способов выражения концентрации растворов.


1.3. Мерная посуда.


1.3.1. Мерная посуда. Виды мерной посуды по точности (1‑й и 2‑й классы точности).

1.3.2. Основные характеристики различных видов мерной посуды (мензурки, мерные пробирки, мерные цилиндры, мерные колбы, мерные пипетки, бюретки) и правила работы с ними.


1.4. Основы титриметрического метода анализа.


1.4.1. Сущность метода, классификация по типу протекающих при титровании химических реакций и способу титрования. Титрант, аликвота, точка эквивалентности.

1.4.2. Реакции, используемые в титриметрии. Требования к реакциям.

1.4.3. Расчеты в титриметрии, понятие о химическом эквиваленте, закон эквивалентов, молярная концентрация эквивалента.

1.4.4. Ошибки титриметрического метода анализа.

1.4.5. Титр, как способ выражения концентрации.





Контрольные вопросы
1.1. Назовите основные источники опасности в химической лаборатории?


1.2. Вам необходимо нагреть жидкость в пробирке. Какой будет последовательность ваших действий, при условии соблюдения всех требований техники безопасности?


1.3. Чем нужно обработать поверхность кожи при попадании на ее поверхность едких веществ?


1.4. Вам необходимо отобрать пробу раствора объёмом 10 мл с помощью мерной пипетки. Опишите порядок ваших действий, начиная с выбора объёма пипетки.


1.5. Имеют ли что-то общее такие способы выражения концентрации как массовая доля, промилле, миллионная доля, миллиграмм-процент, микрограмм-процент и титр?


1.6. В каком случае для выражения концентрации растворённого вещества удобнее использовать массовую долю, а в каком – объёмную?


1.7. Какое количество вещества эквивалента может содержаться в одном моле двухосновной кислоты? Зависит ли это количество от каких-либо условий?


1.8. Какими данными о растворе необходимо располагать для пересчёта концентрации растворённого вещества, выраженной в виде массовой доли, в молярную концентрацию?


1.9. Может ли молярная масса эквивалента вещества быть меньше, больше или равной молярной массе этого же вещества? Как соотносятся количество вещества эквивалента с количеством моль самого вещества? Каким может быть соотношение молярной концентрации эквивалента с молярной концентрацией вещества?


1.10. Какими данными о растворе необходимо располагать для пересчёта молярной концентрации эквивалента растворённого вещества в молярную концентрацию? Что необходимо знать, чтобы рассчитать титр раствора при известной молярной концентрации эквивалента?


1.11. Что является целью титриметрического метода анализа? В чем заключается сущность титрования? Что такое титрант и аликвота?


1.12. Что такое точка эквивалентности, как ее можно выразить? Как определить точку окончания титрования при кислотно-основном титровании в присутствии индикатора?


1.13. Реакции каких типов используются в титриметрии. Какие требования предъявляются к реакциям, используемым в титриметрии?


1.14. Чем различаются основные способы титрования: прямое, косвенное и обратное?


1.15. Какие виды ошибок могут быть при титриметрическом анализе? Какие ошибки можно минимизировать?

Задачи
⧆ 1.1. В воде массой 200,0 г растворили 20,0 г хлорида натрия. Выразите концентрацию данного раствора следующими способами: массовая доля, промилле, миллионная доля, миллиграмм-процент, микрограмм-процент, титр. Плотность раствора составляет 1,018 г‍/‍мл.
Ответ ↴
9,1 %; 91 ‰; 9,1‍·‍10‍⁴ ppm; 9,1‍·‍10‍³ мг%; 9,1‍·‍10‍⁶ мкг%; 0,093 г‍/‍мл

⧆ 1.2. Водный раствор этилового спирта, с объёмной долей 70,0 % используется в медицине для приготовления лекарственных настоек, а также в качестве антисептика. Каким образом можно получить такой раствор, имея в распоряжении раствор с объёмной долей 96,0 %? Какой объём 96,0 %‑го раствора будет необходим для получения 1 л 70,0 %‑го?
Ответ ↴
729 мл

1.3. Спустя несколько часов после приёма алкоголя водитель решил на всякий случай проверить содержание этилового спирта в выдыхаемом воздухе с помощью карманного алкотестера. Полученный результат составил 0,125 промилле. Стоит ли водителю садиться за руль, если по действующим нормам предельно допустимое содержание алкоголя составляет 0,16 мг на 1 литр выдыхаемого воздуха, а плотность воздуха при н.у. составляет 1,29 кг‍/‍м‍³
Ответ ↴
Водителю не стоит садиться за руль, т.к. содержание алкоголя в выдыхаемом воздухе составляет 0,161 мг‍/‍л.

⧆ 1.4. Диметилсульфоксид (ДМСО) входит в состав различных противовоспалительных мазей. Водный раствор ДМСО, известный как препарат «Димексид», используется как наружное средство при ушибах, болях в мышцах и суставах. Для применения в составе компресса взяли димексид – концентрат с объёмной долей 99 %. Какой объём воды и концентрата потребуется для приготовления 20 мл рабочего раствора с объёмной долей концентрата в нём 25 %? Сколько граммов ДМСО будет содержать данный объём рабочего раствора, если плотность концентрата принять равной 1,1 г‍/‍мл, а плотность рабочего раствора – 1,03 г‍/‍мл?
Ответ ↴
5,1 мл; 5,5 г

⧆ 1.5. Вычислите молярную, эквивалентную молярную концентрацию и моляльность раствора серной кислоты с массовой долей 10 % и плотностью 1,066 г‍/‍мл. Фактор эквивалентности серной кислоты f(H₂SO₄) = ¹‍/‍₂.
Ответ ↴
1,09 моль‍/‍л; 2,18 моль‍/‍л; 1,13 моль‍/‍кг

1.6. К 200 мл раствора HCl с концентрацией 0,35 моль‍/‍л и плотностью 1,004 г‍/‍мл прибавили 600 мл раствора HCl с концентрацией 0,85 моль‍/‍л и плотностью 1,01 г‍/‍мл. Рассчитайте молярную концентрацию НСl в получившемся растворе. Плотность получившегося раствора составляет 1,008 г‍/‍мл.
Ответ ↴
0,72 моль‍/‍л

⧆ 1.7. Имеются растворы глюкозы с массовыми долями, равными 10 % и 40 %. Как можно из этих растворов приготовить 500 г раствора с концентрацией 20 %?
Образец решения ↴
Массу растворенного вещества в растворе можно рассчитать по формуле: m(глюкозы) = ω · m(раствора) Таким образом, в растворе массой 500 г с концентрацией 20% содержится 100 г глюкозы. Пусть масса раствора с концентрацией 10% равняется x г, а масса раствора с концентрацией 30% равняется y г. Тогда масса глюкозы, содержащейся в растворе с концентрацией 10%, составляет 0,1·x г, а глюкозы, содержащийся в растворе с концентрацией 30%, – 0,3·y г. Общая масса раствора, полученного при смешивании исходных, будет x + y г, что по условию задачи составляет 500 г. Масса глюкозы, содержащейся в новом растворе, будет 0,1·x + 0,3·y, что, как было найдено ранее, составляет 100 г. Тогда можно составить систему уравнений: x + y = 500 0,1·x + 0,3·y = 100 После решения которой получается, что x = 250 и y = 250. То есть, для приготовления 500 г раствора с концентрацией 20% нужно смешать 250 г раствора с концентрацией 10% и 250 г с концентрацией 30%.
Ответ ↴
Нужно смешать 330 г раствора с концентрацией 10 % и 170 г с концентрацией 40 %

⧆ 1.8. Рассчитайте массу ацетата натрия, необходимую для приготовления 400 мл раствора, в котором молярная концентрация ацетата натрия составляет 0,525 моль‍/‍л. Определите массовую долю полученного раствора. Плотность раствора составляет 1,018 г‍/‍мл.
Ответ ↴
Масса – 17,2 г; массовая доля – 4,23 %

⧆ 1.9. Концентрат, содержащий 36 г поваренной соли в 1 литре, использовали для приготовления рабочего раствора с молярной концентрацией 0,15 моль‍/‍л. Какой объём воды потребовалось добавить к 100 мл концентрата для получения рабочего раствора? Ответ выразить в миллилитрах.
Ответ ↴
310 мл

1.10. Растворы перекиси водорода с массовой долей 1 – 3 % используются для обработки ран, растворы большей концентрации можно применять только для дезинфекции медицинских инструментов и обработки помещений. В вашем распоряжении имеется раствор концентрацией 3,50 моль‍/‍л, на этикетке также указано, что плотность раствора составляет 1,04 г‍/‍мл. Допустимо ли использовать данный раствор для обработки ссадины? Следует ли его разбавить? Если да, то в какой пропорции следует взять раствор и воду?
Ответ ↴
Массовая доля перекиси в таком растворе 11,4 %, его использование для обработки ссадины чревато ожогом. Перед использованием к одной части имеющегося раствора следует добавить 3 части воды.

⧆ 1.11. Ортофосфорная кислота, вступила в реакцию в соответствии с уравнением:
H₃PO₄ + 2KOH = K₂HPO₄ + 2H₂O
Какова молярная концентрация эквивалента ортофосфорной кислоты в данном растворе, если с(H₃PO₄) = 0,1 моль‍/‍л?
Ответ ↴
0,2 моль‍/‍л

⧆ 1.12. На титрование (10,0) мл раствора NaOH было израсходовано 12,7 мл раствора HCl, в котором молярная концентрация эквивалента составляет 0,075 моль‍/‍л. Рассчитайте молярную концентрацию эквивалента NaOH в исследуемом растворе.
Ответ ↴
0,095 моль‍/‍л

1.13. Раствор аммиака с массовой долей 10,0 % известен как нашатырный спирт. Определите титр аммиака в данном растворе, если плотность его составляет 0,958 г‍/‍мл.
Определите титр серной кислоты в растворе, молярная концентрация эквивалента кислоты в котором составляет 0,1 моль‍/‍л, если фактор эквивалентности кислоты f(H₂SO₄) = ¹‍/‍₂.
Ответ ↴
0,0958 г‍/‍мл

1.14.
Ответ ↴
0,0049 г‍/‍мл



Справочные материалы
    `},l3={title:"Химическая термодинамика",content:`
        Вопросы для подготовки
2.1. Основные понятия химической термодинамики.


2.1.1. Термодинамическая система. Классификация систем. Живой организм как открытая система.

2.1.2. Состояния систем (равновесное, стационарное, переходное). Термодинамический процесс. Параметры состояния. Связь между параметрами состояния: уравнение состояния идеального газа.

2.1.3. Функции состояния: понятие о внутренней энергии, работе и теплоте.


2.2. Первый закон термодинамики и его биологическое значение.


2.2.1. Первое начало термодинамики. Связь теплоты и работы. Виды полезной работы в живом организме.

2.2.2. Понятие об энтальпии. Связь энтальпии и теплоты. Тепловой эффект химической реакции. Экзотермические и эндотермические реакции.


2.3. Законы термохимии.


2.3.1. Закон Гесса и следствия из него: закон Лавуазье – Лапласа; расчёт изменения энтальпии реакции.

2.3.2. Калориметрия. Единая природа процессов кислородзависимого дыхания и горения. Калорийность питательных веществ.


2.4. Энтропия.


2.4.1. Энтропи́я, ее связь со степенью упорядоченности частиц в системе.

2.4.2. Факторы, влияющие на величину энтропии. Изменение энтропии при изменении температуры.

2.4.3. Стандартная энтропия вещества. Вычисление стандартной энтропии реакции.


2.5. Второй закон термодинамики.


2.5.1. Самопроизвольные процессы.

2.5.2. Взаимосвязь энергетического (энтальпийного) и энтропийного факторов самопроизвольности протекания процессов в изолированных и неизолированных системах. Энергия Гиббса.

2.5.3. Вычисление энергии Гиббса реакции. Экзергонические и эндергонические реакции.

2.5.4. Формулировки второго закона термодинамики для изолированных и неизолированных систем. Постулаты и формулировки Клаузиуса, Больцмана, Оствальда, Планка.


2.6. Живой организм как термодинамическая система.


2.6.1. Термодинамические особенности биохимических процессов. Принцип энергетического сопряжения.

2.6.2. Формальные термодинамические функции.

2.6.3. Стационарное состояние живого организма. Принцип И.Р. Пригожина. Гомеостаз.





Контрольные вопросы
2.1. Что можно считать термодинамической системой? Какие виды термодинамических систем в зависимости от фазового состава и характера взаимодействия с окружающей средой вам известны?


2.2. Какие выделяют состояния термодинамических систем? В чём сходство и различие тех или иных состояний?


2.3. Что такое параметры состояния системы? Какие параметры системы называют экстенсивными и интенсивными?


2.4. Как изменяются экстенсивные и интенсивные параметры термодинамических систем в случае объединения двух систем с различными параметрами?


2.5. Как связаны между собой давление объём и температура идеального газа?


2.6. Что называют функцией состояния системы? В чём отличие между функциями и параметрами состояния? Относятся ли функции состояния системы к экстенсивным или интенсивным величинам?


2.7. Что такое термодинамический процесс?


2.8. Какие виды энергии включает и какие не включает в себя внутренняя энергия?


2.9. Чем отличаются друг от друга такие формы обмена энергией как работа и теплота?


2.10. Почему первое начало термодинамики называют законом сохранения энергии?


2.11. Как связана энтальпия реакции с количеством теплоты, которое выделяется или поглощается при протекании этой реакции?


2.12. Известно, что оттенок крови свидетельствует о степени насыщенности её кислородом (чем светлее оттенок, тем выше содержание кислорода). Как объяснить, что у одного и того же путешественника оттенок венозной крови в тропических широтах светлее, чем в северных?


2.13. Что такое стандартная энтальпия образования вещества? Какие условия в термодинамике называются стандартными?


2.14. Как связаны между собой теплота, выделяемая телом человека, и различные виды полезной работы в организме? Какие виды полезной работы могут осуществляться в живой системе?


2.15. Для всех ли простых веществ стандартная энтальпия образования равна нулю?


2.16. Как можно рассчитать стандартную энтальпию реакции по стандартным энтальпиям образования веществ, участвующих в этой реакции?


2.17. Что такое калориметрия? Как устроен калориметр? Какие термодинамические законы лежат в основе экспериментального определения калорийности пищи?


2.18. Чем характеризуется энергетическая ценность продуктов питания?


2.19. Калорийность древесины составляет около 3000 – 4000 ккал‍/‍кг, как и калорийность картофельного крахмала. Означает ли этот факт, что килограмм древесины, как и килограмм картофеля, покроет суточную потребность организма лесоруба в энергии? Поясните свой ответ.


2.20. Какой процесс в термодинамике называется самопроизвольным?


2.21. В основе действия гипотермического пакета, применяемого для охлаждения при травмах или при транспортировке некоторых лекарственных препаратов, лежит процесс растворения нитрата аммония. Почему, несмотря на эндотермический характер данного процесса, возможно его самопроизвольное протекание?


2.22. В каких случаях в изолированных системах могут самопроизвольно протекать необратимые процессы?


2.23. Что характеризует энтропия как функция состояния термодинамической системы?


2.24. Как изменяется энтропия системы при изменении ее агрегатного состояния, температуры, давления и сложности системы?


2.25. По изменению какой величины можно судить о возможности самопроизвольного протекания процесса в данном направлении как в изолированных, так и в неизолированных системах? Почему для определения возможности протекания процесса в неизолированной системе применима только эта функция состояния?


2.26. Каким образом формулируется второй закон термодинамики для изолированных и неизолированных систем?


2.27. Какие формулировки второго закона термодинамики предложили Клаузиус, Больцман, Оствальд, Планк?


2.28. Что такое экзергонические и эндергонические реакции? Какие из них могут протекать самопроизвольно в неживой природе и в биологических системах?


2.29. Возможно ли протекание в живых системах эндергонических реакций? В чем заключается принцип энергетического сопряжения?


2.30. Какие особенности биохимических процессов можно отметить применительно к количеству стадий процесса и возможности его обратимости?


2.31. При каких условиях определяются термодинамические функции для реакций, протекающих в биологических системах? Как называется такое состояние и каковы соответствующие ему значения pH и температуры?


2.32. Какое термодинамическое состояние системы характерно для живого организма?


2.33. Как изменяется энтропия в единицу времени в стационарном состоянии открытой термодинамической системы согласно принципу Пригожина?


2.34. Какое отношение принцип Пригожина имеет к биологическим системам?


2.35. Какие особенности биохимических процессов способствует поддержанию гомеостаза в живом организме?


2.36. Какие основные положения, касающиеся биологических систем, вытекают из законов термодинамики?






Тестирование


Задачи
⧆ 2.1. Вычислите стандартную энтальпию реакций, протекающих при стандартных условиях:
а) C₂H₅OH(ж) + 3O₂(г) → 2CO₂(г) + 3H₂O(ж);
б) 4NH₃(г) + 5O₂(г) → 4NO(г) + 6H₂O(ж);
в) CH₄(г) + 2O₂(г) → CO₂(г) + 2H₂O(ж).
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 77. Задача 2.
Ответ ↴
а) −1367 кДж; б) −1169,6 кДж; в) −890,5 кДж.

2.2. Получение энергии живыми организмами возможно за счёт брожения. Ниже приведены обобщённые уравнения, описывающие некоторые виды брожения: а) молочнокислое; б) пропионовокислое; в) спиртовое.
а) С₆Н₁₂О₆ + 2Н₃РО₄ + 2АДФ → 2СН₃СН(ОН)СООН + 2АТФ + 2H₂O
б) 3С₆Н₁₂О₆ + 8Н₃РО₄ + 8АДФ → 4СН₃СН₂СООН + 2СН₃СООН + 2СО₂+ 10Н₂О + 8АТФ
в) С₆Н₁₂О₆ + 2Н₃РО₄ + 2АДФ → 2СН₃СН₂ОН + 2СО₂ + 2АТФ + 2Н₂О
Определите, тепловой эффект каждой из реакций. Вычислите КПД каждого из указанных процессов, считая полезной работой синтез АТФ. Какой из приведённых видов брожения является наиболее эффективным способом использования тепловой энергии, высвобождающейся при окислении глюкозы? Сопоставимы ли полученные значения с КПД бензинового (25 %), дизельного (40 %) и электрического (90 %) двигателей? Считать стандартную энтальпию процесса Н₃РО₄ + АДФ → АТФ + Н₂O равной 19,7 кДж‍/‍моль.
Образец решения ↴
(А) 2*(-686) кДж‍/‍моль -(-1263,8 кДж‍/‍моль)= -108,2 кДж; КПД = (Аполезн./Aобщ.)*100%= (Qполезн./Qобщ.)*100% = (2*19,7/108,2)*100%=36,4% (Б) 4*(-510,7)-2*487-2*413 — 2*286 — 3*(-1263,8)= -623,4 кДж; КПД = (Qполезн./Qобщ.)*100% = (8*19,7/623,4)*100%=25,3% (В) 2*(-278) — 2*413 + 1263,8 = -118,2 кДж; КПД=(2*19,7/118,2)*100%=33,3%
Ответ ↴
(а) −108,2 кДж, 36,4 % ; (б)−623,4 кДж, 25,3 % ; (в) −118,2 кДж, 33,3 %.

2.3. В организме человека и млекопитающих конечными продуктами распада белка являются вода, углекислый газ и мочевина. Отличается ли теплота сгорания белка в калориметре от теплоты окисления в организме? Ответ подтвердите расчётами.
Образец решения ↴
окисление белка в организме можно описать схемой: белок + O₂ = CO₂ + H₂O + (NH₂)₂CO + Q₁; процесс сгорания белка - схемой: белок + O₂ = CO₂ + H₂O + N₂ + Q₂; Тогда, по закону Гесса Q in vivo = -ΔH in vivo = ΔH₁(CO₂) + ΔH₁(H₂O) + ΔH((NH₂)₂CO) — ΔH(белка) - ΔH(O₂), Учитывая что ΔH(O₂) = 0 (как и для любого простого вещества) можем записать кратко Q in vivo= -ΔH in vivo = ΔH(продуктов распада in vivo) - ΔH(белка) Аналогично для окисления в калориметре Q in vitro = -ΔH in vitro = ΔH₂(CO₂) + ΔH₂(H₂O) + ΔH(N₂) — ΔH (белка), т.е. Q in vitro = -ΔH in vitro = ΔH(продуктов распада in vitro) - ΔH(белка) При окислении в организме часть углерода и водорода, оказалась в составе (NH₂)₂CO и не вошла в состав СO₂ и H₂O. Окисление мочевины по схеме 2(NH₂)₂CO + 3О₂ = 2СO₂ + 4H₂O + 2N₂ будет сопровождаться тепловым эффектом, величину которого можно рассчитать используя закон Гесса и справочные данные ΔH = ∆‍H‍° 2(CO₂) + ∆‍H‍° 2(H₂O) + ∆‍H‍° (N₂) - ∆‍H‍°((NH₂)₂CO) - ∆‍H‍°(O₂) = 2(-413) + 2(-286) – 2(-333,3) = -731,4 кДж. Но поскольку окисления мочевины в организме не происходит, эта часть тепловой энергии не выделится. Т.е. окисление in vivo идёт не полно, и значит ΔH(продуктов распада in vivo) > ΔH(продуктов распада in vitro) и ΔH(продуктов распада in vivo) − ΔH(белка) > ΔH(продуктов распада in vitro) − ΔH(белка) или −ΔH in vivo < −ΔH in vitro, т.е Q1 < Q2
Ответ ↴
окисление белка в организме неполное, поэтому понижение энтальпии будет меньшим, т.е. выделится меньшее количество теплоты, чем при полном сгорании того же белка в калориметре.

2.4. Уксуснокислое брожение является кислородзависимым процессом, общую схему которого можно представить следующим образом:
C₂H₅OH + O₂ → CH₃COOH + H₂O + 495 кДж
При этом ΔH этапа окисления уксусного альдегида до уксусной кислоты составляет −240 кДж. Исходя из приведённых данных, определите тепловой эффект реакции окисления этилового спирта до уксусного альдегида. К какому типу реакций по тепловому эффекту можно отнести этот этап уксуснокислого брожения?
Ответ ↴
выделяется 275 кДж тепла, это экзотермический процесс

⧆ 2.5. Определите на основании изменения энергии Гиббса реакций, возможно ли самопроизвольное окисление глюкозы: а) до молочной кислоты согласно уравнению реакции С₆Н₁₂О₆(к) → 2С₃Н₆О₃(к); б) до углекислого газа и воды согласно уравнению реакции С₆Н₁₂О₆(к) + 6O₂(г) → 6CO₂(г) + 6H₂O(ж). В каком случае процесс энергетически более выгоден?
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 84. Задача 13.
Ответ ↴
а) −161 кДж; б) −2871,4 кДж

2.6. Определите на основании изменения энергии Гиббса реакций, возможно ли самопроизвольное окисление сахарозы: а) до молочной кислоты согласно уравнению реакции C₁₂H₂₂O₁₁(к) + H₂O → 4C₃H₆O₃(р‑р); б) до углекислого газа и воды согласно уравнению реакции C₁₂H₂₂O₁₁(к) + 12O₂(г) → 12CO₂(г) + 11H₂O(ж). В каком случае процесс энергетически более выгоден?
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 84. Задача 13.
Ответ ↴
а) −376 кДж; б) −5796,8 кДж

2.7. Человек выпил стакан чая, содержащий 10 г сахара. Сколько моль АТФ могло бы в результате образоваться в организме человека, если условно допустить, что для её синтеза будет использована вся энергия, высвобождающаяся при полном окислении сахара указанной массы? Справедливо ли сделанное допущение?
Считать, что ∆‍G‍°обр.(сахарозы) = 1545 кДж‍/‍моль, а ∆‍G‍° образования АТФ из АДФ составляет 30,6 кДж‍/‍моль
Образец решения ↴
пусть окисление сахарозы идёт по уравнению C₁₂H₂₂O₁₁ + 12O₂ = 12CO₂ +11H₂O Тогда ∆‍G‍°реакц. = 12ΔG(CO₂) + 11ΔG(H₂O) - ΔG(C₁₂H₂₂O₁₁) — 12ΔG(О₂) ∆‍G‍°реакц.= 12*(-386) + 11*(237) + 1545 = -5694 кДж n(сахарозы) = 10г/342г‍/‍моль = 0,03 моль ΔG = n*∆‍G‍° = 0,03*5694 = 166,5 кДж N(ATФ)=ΔG/∆‍G‍° (АТФ) = 166,5/30,6= 5,44 (моль АТФ)
Ответ ↴
5,44 (моль АТФ)

2.8. Опишите, как можно определить возможность самопроизвольного протекания химической реакции, если имеются данные о стандартных теплотах образования и стандартных энтропиях исходных веществ и продуктов. Покажите в качестве примера, как, пользуясь справочными данными, можно оценить возможность образования из средства для ингаляционного наркоза – оксида азота (I), при его контакте с кислородом воздуха, токсичных продуктов – оксида азота (II) и оксида азота (IV) при температуре 37 ºC.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 84. Задача 14.
Ответ ↴
137,41 кДж, 1,03 кДж

2.9. Опишите, как можно определить возможность самопроизвольного протекания химической реакции, если имеются данные о стандартных теплотах образования и стандартных энтропиях исходных веществ и продуктов. Покажите в качестве примера, как, пользуясь справочными данными, можно оценить возможность образования при контакте с кислородом воздуха при температуре 30 ºC: а) из сероводорода оксида серы (IV); б) из оксида серы (IV) оксида серы (VI).
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 84. Задача 14.
Ответ ↴
−1008,13 кДж; −138,13 кДж

2.10. При добавлении некоторого количества KCl в колбу, содержащую 1 л дистиллированной воды температура раствора понизилась на 6,1 °‍C. Определите массу добавленного хлорида калия, учитывая что плотность раствора равна 1,004 г‍/‍мл, а удельная теплоёмкость раствора С = 4,19 Дж‍/‍г‍·‍K. Действием каких факторов обусловлено самопроизвольное протекание процесса растворения хлорида калия? а) энтальпийного; б) энтропийного; в) энтальпийного и энтропийного.
Образец решения ↴
m(р-ра)= 1000мл*1,004 г‍/‍мл=1004 г ΔH(растворения) = - Q(растворения)= -(m(р-ра)*С*t°)= -(1004 г * 4,19 Дж/г*K*(-6,1 °‍C))=25661,24 Дж = 25,66 кДж; n(KCl) = ΔH(растворения)/∆‍H‍°(растворения); ∆‍H‍°(растворения)=∆‍H‍°(К⁺гидр.) +∆‍H‍°(Cl⁻гидр.) - ∆‍H‍°(КCl кр.) = (-252,25)+(-167,1)-(-436,56)= 17,1 кДж; n(KCl) = 25,66/17,1= 1,5 моль m(KCl)= 1,5 моль * 74,5 г‍/‍моль = 111,8 г
Ответ ↴
111,8 г; б

⧆ 2.11. Оксид азота (I), известный также как закись азота или «веселящий газ», применяется в медицине как средство для наркоза. Возможен ли самопроизвольный распад закиси азота с образованием азота и кислорода? Ответ подтвердите расчётами.
Ответ ↴
да, поскольку ∆‍G‍° распада составит −208 кДж‍/‍моль

2.12. Одним из способов обеззараживания питьевой воды является озонирование, т.е. обработка озоном. Озон (О₃) является аллотропной модификацией кислорода и может быть получен из молекулярного кислорода (O₂) по схеме:
3О₂ → 2О₃.
Возможно ли самопроизвольное протекание этой реакции? Каков её тепловой эффект? Способствует ли энтропийный фактор самопроизвольному протеканию процесса? Ответ подтвердите расчётами.

2.13. Медицинский гипотермический пакет содержит 30 г аммиачной селитры, во внутренней капсуле пакета содержится также 25 г дистиллированной воды. До какой минимальной температуры сможет охладиться гипотермический пакет, хранившийся при температуре +25 °‍C, после раздавливания внутренней капсулы? Почему? Ответ подтвердите вычислениями.
Считать, что растворение аммиачной селитры происходит по схеме:
NH₄NO₃(кр.) → NH₄⁺(р‑р) + NO₃⁻(р‑р)
Учитывать также, что 1 г воды, охлаждаясь на 1 градус, теряет 1 калорию или 4,19 Дж тепловой энергии. Удельную теплоту кристаллизации воды считать равной +334 Дж/г.
Ответ ↴
до 0 °‍C.

2.14. Определите калорийность продуктов питания:
а) творог массой 130 г, содержащий на 100 г продукта 7,9 г белка, 0,3 г жиров и 7,6 г углеводов;
б) мороженое массой 70 г, содержащее на 100 г продукта 3,5 г белка, 11,5 г жиров и 23 г углеводов.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 82. Задача 10.
Ответ ↴
а) 359,39 кДж, 85,98 ккал; б) 623,11 кДж, 149,07 ккал.

⧆ 2.15. Студент съел на завтрак порцию салата с крабовыми палочками массой 150 г. Известно, что данный продукт содержит 9,2 % белка, 7,4 % жиров и 5,9 % углеводов. Какую долю составляет это количество калорий от суточной потребности организма студента в энергии (2200 ккал)?
Ответ ↴
212,13 ккал, т.е. 9,64 %



Справочные материалы
      `},a3={title:"Химическая кинетика. Химическое равновесие",content:`
        
Вопросы для подготовки
3.1. Основные понятия химической кинетики.


3.1.1. Предмет изучения химической кинетики. Понятие о механизме реакции. Простые и сложные реакции. Гомогенные и гетерогенные реакции. Скорость сложных реакций. Скорость гетерогенных реакций. Понятие о лимитирующей стадии.

3.1.2. Скорость гомогенных реакций. Истинная и средняя скорость химической реакции. Период полупревращения.

3.1.3. Факторы, определяющие скорость химической реакции.


3.2. Зависимость скорости реакции от концентрации реагирующих веществ.


3.2.1. Основной закон химической кинетики (закон действующих масс). Кинетические уравнения.

3.2.2. Константа скорости реакции: физический и математический смысл константы скорости.

3.2.3. Молекулярность реакции, порядок реакции по реагентам, общий порядок реакции.


3.3. Химическое равновесие.


3.3.1. Обратимые и необратимые реакции.

3.3.2. Константа химического равновесия.

3.3.3. Смещение химического равновесия.


3.4. Зависимость скорости реакции от температуры.


3.4.1. Правило Вант-Гоффа. Температурный коэффициент константы скорости реакции.

3.4.2. Теория активных (эффективных) столкновений. Уравнение Аррениуса. Энергия активации реакции.

3.4.3. Энергетический профиль реакции. Понятие о теории переходного состояния.


3.5. Катализ. Ферментативные реакции.


3.5.1. Катализ. Гомогенный и гетерогенный катализ. Энергетический профиль каталитической реакции.

3.5.2. Ферментативный катализ.

3.5.3. Зависимость скорости ферментативной реакции от концентрации субстрата. Уравнение Михаэлиса – Ментен, смысл его параметров.





Контрольные вопросы
3.1. Значения каких величин необходимо знать для расчета скорости химической реакции? Сколько вариантов расчета возможно для реакции, в которой участвуют два реагента и получаются два продукта?


3.2. Какие характеристики химической реакции, не являющиеся предметом изучения термодинамики, позволяет установить химическая кинетика?


3.3. Является ли скорость химической реакции постоянной величиной или может изменяться со временем?


3.4. Какая скорость (истинная или средняя) лучше характеризует реакцию?


3.5. В фармакологии существует понятие «период полувыведения», необходимое для определения оптимальной терапевтической дозы лекарственного препарата. Какая характеристика, применяемая в химической кинетике, лежит в основе данного понятия?


3.6. Что такое механизм реакции? Какие типы реакций можно выделить в зависимости от механизма?


3.7. Какие варианты сложных реакций возможны? Какая стадия сложной реакции определяет скорость всей сложной реакции?


3.8. Практически все биохимические процессы являются ферментативными. Исходя из этого, к какому типу (по классификации химических реакций) относится подавляющее большинство реакций, составляющих биохимические процессы? Означает ли этот факт, что без участия ферментов ни один биохимический процесс был бы абсолютно невозможен?


3.9. Чем отличаются гомогенные и гетерогенные реакции? Можно ли утверждать, что все биохимические процессы, идущие в организме человека, являются гомогенными?


3.10. Какой закон описывает зависимость скорости простой гомогенной реакции от концентрации? Применим ли он для описания гетерогенных процессов? Какие переменные величины и какие константы входят в кинетическое уравнение? Чем отличается константа скорости химической реакции от скорости химической реакции?


3.11. Существует ли какое-либо соответствие между порядком реакции по реагенту и стехиометрическим коэффициентом перед этим реагентом? В каком случае порядок реакции может совпадать с её молекулярностью? Можно ли использовать кажущийся порядок реакции для определения её механизма?


3.12. Какие возможны значения для общего порядка реакции и для молекулярности реакции?


3.13. Какой пропорциональностью (прямой или обратной) связаны между собой для уравнений разных порядков константа скорости химической реакции и период полупревращения?


3.14. Какой пропорциональностью (прямой или обратной) связаны между собой для уравнений разных порядков начальная концентрация реагента и период полупревращения?


3.15. Если для некоторой реакции температурный коэффициент константы скорости реакции равен 3,4, то во сколько раз повысится скорость реакции, если температура поднимется от 25 °‍C до 35 °‍C?


3.16. Каков смысл величин R, T, k₀, Ea, входящих в уравнение Аррениуса?


3.17. Какая из двух реакций протекает быстрее, если энергия активации первой реакции больше, чем второй? Какой была бы скорость реакции, если бы энергия активации была равна нулю?


3.18. Какие величины можно найти, пользуясь энергетическим (энтальпийным) профилем реакции?


3.19. Какие величины энергий активации характерны для реакций, протекающих очень быстро и реакций, протекающих очень медленно?


3.20. Какое состояние называется переходным? Что определяет энтальпия образования переходного состояния?


3.21. Как влияют катализаторы на прямую и обратную реакции и на достижение состояния химического равновесия в системе? Смещают ли катализаторы положение химического равновесия?


3.22. Как можно объяснить действие катализатора с помощью энергетического профиля реакции?


3.23. Какими особенностями отличаются ферменты от обычных катализаторов?


3.24. Что такое субстратная и групповая специфичность?


3.25. Какой графический вид имеет зависимость скорости ферментативной реакции от концентрации субстрата? Какие закономерности приводят к этому?


3.26. Каков смысл параметров уравнения Михаэлиса – Ментен Vmax и kM?


3.27. Как по графику зависимость скорости ферментативной реакции от концентрации субстрата определить параметры уравнения Михаэлиса – Ментен?


3.28. Какие реакции являются обратимыми? Какое состояние называется химическим равновесием? К обратимым или необратимым реакциям относится состояние химического равновесия?


3.29. Протекают ли прямая и обратная реакции в состоянии химического равновесия? Как соотносятся скорости прямой и обратной реакций в состоянии химического равновесия?


3.30. Меняется ли состав системы в состоянии химического равновесия при неизменных внешних условиях?


3.31. Можно ли каким-либо способом добиться изменения состава системы в состоянии химического равновесия?


3.32. Как по величине константы химического равновесия определить возможность протекания химической реакции в прямом или обратном направлении?


3.33. Как по величине константы химического равновесия сделать вывод о практической обратимости реакции?




Тестирование


Задачи
3.1. Рассчитайте, во сколько раз увеличится скорость химической реакции в системе, где протекает химическая реакция 2СО(г) + О₂(г) ⇄ 2СО₂(г), если изменить условия следующим образом:
а) концентрацию СО увеличить в 5 раз;
б) концентрацию СО увеличить в 4 раза, а концентрацию O₂ – в 3 раза;
в) объем реакционной смеси уменьшить в 3 раза.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 89. Задача 22.
Ответ ↴
а) в 25 раз; б) в 48 раз; в) в 27 раз

3.2. Даны реакции:
а) 2CO(г) + О₂(г) = 2CО₂(г);
б) CaCO₃(тв) = CaO(тв) + СО₂(г)
в) H₂SO₃(р‑р) = SО₂(г) + H₂O(ж)
г) CuO(тв) + H₂(г) = Cu(тв) + H₂O(г)
Запишите кинетическое уравнение и определите порядок каждой из этих реакций.
Ответ ↴
а) 3; б) 0; в) 1; г) 1

3.3. Какую размерность будет иметь константа скорости для прямой реакции:
а) CH₃COOH(р‑р) = CH₃COO⁻(р‑р) + H⁺(р‑р)
б) H⁺(р‑р) + OH⁻(р‑р) = H₂О
в) С(тв) + О₂(г) = СО₂(г)
г) 2СО(г) + О₂(г) = 2СО₂(г)
д) СuSO₄‍·‍5H₂O(кр) = СuSO₄(тв) + 5H₂O(г)
Ответ ↴
а) 1‍/‍с; б) л‍/‍(‍моль‍·‍с‍); в) 1‍/‍с; г) л‍²‍/‍(‍моль‍²‍·‍с‍); д) моль‍/‍л‍·‍с

⧆ 3.4. Как и во сколько раз изменится скорость процесса окисления оксида азота (II), протекающего по уравнению: 2NO + О₂ = 2NО₂, если объём реакционного сосуда уменьшится в 2 раза?
Ответ ↴
увеличится в 8 раз

3.5. В растворе идёт реакция разложения вещества А по схеме: А = В + C. Данная реакция характеризуется константой скорости 0,05 мин‍⁻‍¹. За какое время распадётся половина всего вещества А, содержащегося в растворе, если считать, что процесс протекает как необратимая реакция?
Ответ ↴
за 10 мин

3.6. Константа скорости разложения лекарственного вещества при температуре 25 °‍C составляет 3,46‍·‍10‍⁻‍⁸ сут‍⁻‍¹. Рассчитайте, какая часть (в процентах) лекарственного вещества разлагается за 2 года, если лекарственное вещество будет храниться при температуре 25 °‍C.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 93. Задача 28.
Ответ ↴
2,53‍·‍10‍⁻‍³ %

⧆ 3.7. Лекарственное вещество при температуре 25 °‍C характеризуется константой скорости разложения, равной 5‍·‍10‍⁻‍⁷ с‍⁻‍¹, а при 45 °‍C – 4,5‍·‍10‍⁻‍⁶ с‍⁻‍¹. Рассчитайте температурный коэффициент реакции разложения лекарственного вещества.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 90. Задача 23.
Ответ ↴
3

3.8. Лекарственное вещество при температуре 62 °‍C разлагается в 12 раз быстрее, чем при 28 °‍C. Рассчитайте температурный коэффициент реакции разложения лекарственного вещества.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 90. Задача 23.
Ответ ↴
2,08

3.9. Химическая реакция имеет температурный коэффициент γ = 4, и при 40 °‍C полностью протекает за 1 час. Сколько времени потребуется для завершения этой реакции при температуре 25 °‍C?
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 90. Задача 23.
Ответ ↴
8 часов

⧆ 3.10. Температурный коэффициент реакции АТФ + H₂O = АДФ + Фн равен 1,7. Во сколько раз скорость гидролиза АТФ при 28 °‍C меньше скорости той же реакции при 37 °‍C?
Ответ ↴
в 1,6 раза

3.11. Скорость процесса укорочения мышечного волокна при температуре 15 °‍C составляет 2000 нм‍/‍сек, а при температуре 35 °‍C – 4200 нм‍/‍сек, Рассчитайте температурный коэффициент данного процесса.
Ответ ↴
1,45

3.12. В водном растворе пенициллина, температура которого 36 °‍C, за 12 часов распалось 26 % от первоначального количества антибиотика, в растворе с температурой 41 °‍C такая же степень распада была достигнута за 6 часов. Как следует учитывать эти данные при гипертермии у пациента? Определите температурный коэффициент реакции и энергию активации распада пенициллина.
Ответ ↴
температурный коэффициент – 4; Еа = 111,27 кДж

3.13. Во сколько раз скорость ферментативного гидролиза сахарозы в тонком кишечнике, превышает скорость аналогичного процесса in vitro, без участия фермента, при 37 °‍C, если под действием пищеварительного фермента сахаразы энергия активации этой реакции уменьшается на 67 кДж?
Ответ ↴
в 6,5‍·‍10‍⁵⁹ раза

3.14. Окисление углеводов в организме человека происходит при температуре около 37 °‍C, а вне организма та же скорость окислительного процесса достигается при 450 °‍C. Почему так происходит? Во сколько раз уменьшается энергия активации реакции, идущей в организме, по сравнению с энергией активации того же процесса вне организма?
Ответ ↴
благодаря ферментативному катализу; Еа уменьшается в 12,16 раза

⧆ 3.15. В системе, где протекает обратимая химическая реакция
N₂(г) + 3H₂(г) ⇄ 2NH₃(г),
равновесные концентрации веществ составляют: [N₂] = 0,04 моль‍/‍л, [H₂] = 0,15 моль‍/‍л, [NH₃] = 0,8 моль‍/‍л. Рассчитайте величину константы равновесия и сделайте вывод о смещении положения равновесия.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 90. Задача 30.
Ответ ↴
4741

3.16. В системе, где протекает обратимая химическая реакция
2СО(г) + О₂(г) ⇄ 2CО₂(г),
равновесные концентрации веществ составляют: [CO] = 0,06 моль‍/‍л, [О₂] = 0,18 моль‍/‍л, [CО₂] = 1,4 моль‍/‍л. Определите первоначальные концентрации СО и О₂.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 90. Задача 30.
Ответ ↴
1,46 моль‍/‍л, 0,88 моль‍/‍л

3.17. Рассчитайте константу равновесия реакции окисления глюкозы до молочной кислоты и сделайте вывод о ее практической обратимости.
С₆Н₁₂О₆(р‑р) → 2С₃Н₆О₃(р‑р)
Изменение энергии Гиббса реакции окисления глюкозы до молочной кислоты при 310 К составляет ∆‍G‍°(р‑ции) = −161 кДж‍/‍моль.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 96. Задача 33.
Ответ ↴
1,44‍·‍10‍²⁷

3.18. В лаборатории был приготовлен раствор α‑D‑глюкопиранозы. Через некоторое время в результате протекания обратимого процесса изомеризации в растворе появилась другая аномерная форма того же моносахарида – β‑D‑глюкопираноза. К моменту установления равновесия в растворе содержалось 0,36 моль‍/‍л α‑D‑глюкопиранозы и 0,76 моль‍/‍л β‑D‑глюкопиранозы. Вычислите константу равновесия процесса изомеризации и концентрацию α‑D‑глюкопиранозы в свежеприготовленном растворе.
Ответ ↴
Кр = 2,1; 1,12 моль‍/‍л.

⧆ 3.19. Одна из стадий гликолиза представляет собой изомеризацию 3‑фосфоглицерата в 2‑фосфоглицерат. Константа равновесия процесса составляет 0,16. Какова равновесная концентрация 2‑фосфоглицерата, если равновесная концентрация 3‑фосфоглицерата составляет 3 ммоль‍/‍л.
Ответ ↴
0,48 ммоль‍/‍л

⧆ 3.20. Распад АТФ происходит по схеме: АТФ + H₂O = АДФ + Фн. Для данной реакции ∆‍G‍° = −30,6 кДж‍/‍моль. Какова константа равновесия гидролиза АТФ? Охарактеризуйте данное равновесие.
Ответ ↴
Кр = 2,35‍·‍10‍⁵, реакция идёт практически необратимо в прямом направлении



Справочные материалы
      `},u3={title:"Коллигативные свойства растворов",content:`
        Вопросы для подготовки
4.1. Коллигативные свойства растворов.


4.1.1. Понятие о коллигативных свойствах растворов.

4.1.2. Различия идеальных и реальных растворов.


4.2. Диффузия и осмос.


4.2.1. Диффузия.

4.2.2. Понятие о полупроницаемых мембранах. Явление осмоса.

4.2.3. Осмотическое давление, закон Вант-Гоффа. Изотонический коэффициент. Осмолярность и осмоляльность раствора.

4.2.4. Осмотическая ячейка. Виды осмоса. Изотонические, гипертонические, гипотонические растворы. Живая клетка как осмотическая ячейка. «Осмотический шок» и «осмотический конфликт». Гемолиз и плазмолиз.


4.3. Осмос в биологических системах.


4.3.1. Биологическая роль осмоса.

4.3.2. Осмотическое давление крови.

4.3.3. Применение в медицине изотонических, гипертонических, гипотонических растворов.


4.4. Первый закон Рауля.


4.4.1. Равновесие в системе «жидкость – пар».

4.4.2. Понижение давления насыщенного пара над раствором по сравнению с растворителем (первый закон Рауля).


4.5. Второй закон Рауля.


4.5.1. Понятие о температурах кипения и кристаллизации. Повышение температуры кипения и понижение температуры кристаллизации растворов по сравнению с растворителем (второй закон Рауля).

4.5.2. Физический смысл криоскопической и эбулиоскопической констант.

4.5.3. Применение криоскопии и эбулиоскопии в медико-биологических исследованиях.





Контрольные вопросы
4.1. Какие свойства называют коллигативными? Что такое кинетически активные частицы?


4.2. Опишите, равновесие между какими двумя процессами установится на границе раздела между жидкой и газообразной фазами одного и того же вещества. Что такое насыщенный пар? Как будут влиять на равновесие в системе «жидкость – пар» и давление насыщенного пара изменение температуры и присутствие в составе раствора частиц нелетучего вещества?


4.3. Как фазовые переходы вещества связаны с давлением его насыщенных паров и температурой? Как температуры кипения и кристаллизации зависят от давления насыщенного пара?


4.4. На плите стоят две металлические ёмкости, содержимое которых кипит. В одной из них варенье, в другой чистая вода. Отличается ли температура содержимого кастрюль? Если да, то как объяснить это различие, исходя из влияния давления насыщенных паров на температуру кипения жидкости и первого закона Рауля?


4.5. Отличается ли температура воды в проруби на реке от температуры воды в полынье среди арктических льдов? Поясните свой ответ, используя второй закон Рауля?


4.6. Какой способ выражения концентрации раствора необходимо использовать при расчёте повышения температуры кипения или понижения температуры замерзания растворов нелетучих веществ? Какие коэффициенты пропорциональности используются в таком расчёте? Характеристикой какого из компонентов раствора являются эти коэффициенты?


4.7. Опишите суть метода криоскопического анализа? Какую характеристику растворённого вещества позволяет установить данный метод?


4.8. Как будут вести себя частицы растворенного вещества при наличии в растворе областей с различающимися концентрациями при условии, что перемещению частиц в объёме раствора ничто не препятствует? Суть какого явления составляет такое поведение частиц?


4.9. Что такое градиент концентрации растворенного вещества? Почему движение частиц растворённого вещества по градиенту концентрации является самопроизвольным процессом? Как зависит скорость такого движения от величины градиента концентрации?


4.10. Какими свойствами обладает полупроницаемая мембрана?


4.11. Как будут вести себя частицы растворенного вещества и частицы растворителя при наличии в растворе областей с различающимися концентрациями по разные стороны мембраны, через которую могут пройти только частицы растворителя?


4.12. Что объединяет диффузию и осмос? В чём различие между этими процессами?


4.13. Останутся ли в результате протекания осмоса одинаковыми уровни жидкости в половинах сосуда, разделенных полупроницаемой мембранной, если первоначально они были одинаковыми? Возможно ли, что вся жидкость соберётся в одной половине такого сосуда? Равновесие между какими процессами установится в такой системе?


4.14. Как можно экспериментально измерить величину осмотического давления? Можно ли для этой цели использовать высоту уровней жидкости в половинах сосуда, разделенных полупроницаемой мембранной? Как можно рассчитать величину осмотического давления раствора? Почему для одних веществ теоретическое значение осмотического давления, рассчитанное на основе молярной концентрации, совпадает с экспериментальным результатом, а для других нет? Что такое осмолярность раствора и как она связана с молярностью?


4.15. Что такое осмотическая ячейка? Является ли живая клетка осмотической ячейкой? Какие растворы называются изотоническими, гипертоническими и гипотоническими по отношению к содержимому ячейки? Можно ли утверждать, что раствор изотоничный по отношению к цитоплазме клеток человека будет изотоничен и к содержимому клетки патогенной бактерии?


4.16. Каким будет направление осмоса, если осмотическая ячейка находится в гипотоническом растворе? Каким оно будет в гипертоническом растворе? Как будет называться вид осмоса в каждом из этих случаев? Что станет результатом осмоса в каждом из этих случаев?


4.17. Что показывает изотонический коэффициент? Как можно экспериментально определить эту величину? Как эта величина связана с количеством ионов в формульной единице электролита (на примере NaCl и AlCl₃)?


4.18. Что такое онкотическое давление? Какую роль играет онкотическое давление применительно к капиллярам кровеносных сосудов и межклеточной жидкости тканей? К каким последствиям приведёт уменьшение концентрации белка в плазме крови, вызванное недостатком белковой пищи в рационе? Почему? Объясните, используя представление о коллигативных свойствах крови, почему эволюционно более удачным «решением» было «спрятать» содержащийся в крови гемоглобин в оболочках эритроцитов, а не «разместить» молекулы этого белка непосредственно в плазме крови?


4.19. Как соотносятся термины: экзоосмос, эндоосмос, плазмолиз, цитолиз, гемолиз, «осмотический шок», «осмотический конфликт»?


4.20. Какие растворы (гипертонические, гипотонические, изотонические) применяются в медицинской практике?


4.21. Какие растворы (гипертонические, гипотонические, изотонические) следует применять для инъекционного введения лекарственных средств?




Тестирование


Задачи
4.1. Давление пара воды при 25 °‍C составляет 3167 Па. Вычислите для той же температуры давление пара раствора, в 450 г которого содержится 90 г глюкозы.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 126. Задача 1.
Ответ ↴
3,09 кПа

4.2. Имеется водный раствор глицерина с массовой долей ω = (18) % и плотностью ρ = 1,15 г‍/‍мл. Рассчитайте осмотическое давление этого раствора при температуре 20 °‍C.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 130. Задача 7.
Ответ ↴
5478,37 кПа

⧆ 4.3. В каком из растворов хлорида натрия: 2 %, 0,86 %, 0,2 % жизнедеятельность эритроцитов не будет нарушена и почему? Осмотическое давление крови составляет 7,7 атм, температура – 37 °‍C. Плотность растворов и степень диссоциации NaCl считать равными единице.

⧆ 4.4. Что произойдет с эритроцитами крови, если их поместить в 3 моль‍/‍л раствор глюкозы? Осмотическое давление крови составляет 7,7 атм, температура – 37 °‍C.

⧆ 4.5. Имеется водный раствор хлорида натрия с молярной концентрацией c(NaCl) = 0,15 моль‍/‍л. Изотонический коэффициент в данном растворе составляет i = 1,86. Рассчитайте осмотическое давление этого раствора при температуре 37 °‍C.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 132. Задача 9.
Ответ ↴
718,73 кПа

4.6. Определить концентрацию раствора глюкозы, если раствор этого вещества при 18 °‍C изотоничен с раствором, содержащим 0,5 моль‍/‍л хлорида кальция. Кажущаяся степень диссоциации CaCl₂ в растворе при указанной температуре составляет 65,4 %.

⧆ 4.7. Имеется водный раствор сульфата натрия с молярной концентрацией c(Na₂SO₄) = 0,15 моль‍/‍л. Осмотическое давление этого раствора при температуре 37 °‍C составляет pосм = 985 кПа. Рассчитайте величину изотонического коэффициента в данном растворе.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 281. Пример 9.18.
Ответ ↴
2,55

4.8. Имеется водный раствор этанола с массовой долей ω = 12 %. Рассчитайте температуру кипения и замерзания этого раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 127. Задача 2.
Ответ ↴
температура кипения: 101,54 °‍C; температура замерзания: −5,51 °‍C

⧆ 4.9. Благодаря высокому содержанию глицерина в тканях рыба корюшка сохраняет активность в морской воде, имеющей температуру −0,2 °‍C. Можно ли предположить, что содержание глицерина в плазме крови корюшки составляет 0,2 моль‍/‍кг? Ответ подтвердите расчётами.
Ответ ↴
Такое утверждение справедливо, т.к. температура замерзания водного раствора глицерина указанной моляльности составляет −0,372 °‍C.

4.10. Какова температура кипения вишнёвого варенья, если в 1 литре варенья содержится 800 г сахара, а плотность вишнёвого варенья составляет 1,4 г‍/‍мл? Считать весь сахар в составе варенья исключительно сахарозой. Влиянием компонентов вишнёвого сока на коллигативные свойства пренебречь.
Ответ ↴
100,87 °‍C

⧆ 4.11. Имеется водный раствор неэлектролита с массовой долей ω = 10 %. Температура замерзания этого раствора составляет tзам = −1,15 °‍C. Определите молярную массу этого неэлектролита.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 128. Задача 3.
Ответ ↴
180 г‍/‍моль

4.12. Имеется 400 г воды. Необходимо приготовить раствор, температура замерзания которого составляла бы tзам = −2,0 °‍C. Какую массу карбамида ((NH₂)₂CO) нужно взять для этой цели?
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 129. Задача 5.
Ответ ↴
25,81 г

4.13. Йодосодержащие водорастворимые органические вещества применяются для контрастирования кровеносных сосудов, полостей сердца и органов мочеполовой системы при рентгенологических исследованиях. Для проведения кардиоангиографии пациенту был введён изотонический раствор неионогенного рентгеноконтрастного вещества, содержащий 302 мг этого вещества в 1 мл. Какова осмолярность введённого раствора? Рассчитайте молярную массу данного рентгеноконтрастного вещества.
Ответ ↴
cосм = 300 мосмоль‍/‍л; 1006,6 г‍/‍моль



Справочные материалы
      `},s3={title:"Теория растворов электролитов. Протолитические равновесия и процессы в растворах электролитов. Электрохимия",content:`
        Вопросы для подготовки
5.1. Основы теории растворов.


5.1.1. Строение и свойства молекулы воды. Механизм процесса растворения.

5.1.2. Теория электролитической диссоциации. Сильные и слабые электролиты. Степень диссоциации.


5.2. Свойства растворов сильных электролитов.


5.2.1. Активность и коэффициент активности.

5.2.2. Ионная сила раствора.


5.3. Свойства растворов слабых электролитов.


5.3.1. Константа диссоциации.

5.3.2. Закон разбавления Оствальда.


5.4. Кислотно-основные свойства веществ.


5.4.1. Протолитическая теория кислот и оснований.

5.4.2. Сопряженные протолитические пары.

5.4.3. Амфолиты.


5.5. Характеристики кислотности и основности.


5.5.1. Автопротолиз воды. Ионное произведение воды.

5.5.2. Водородный показатель (pH).

5.5.3. Константы кислотности и основности.

5.5.4. Кислотно-основные индикаторы.

5.5.5. pH биологических жидкостей.


5.6. Электролитическая подвижность ионов.


5.6.1. Типы проводников. Биологические среды как проводники электрического тока. Медико-биологическое значение электропроводности биологических сред.

5.6.2. Электролитическая подвижность ионов, факторы, влияющие на ее величину. Предельная подвижность ионов.

5.6.3. Аномально высокая подвижность ионов H⁺ и OH⁻.


5.7. Электрическая проводимость.


5.7.1. Сопротивление и электропроводность: удельная электрическая проводимость, факторы, влияющие на ее величину.

5.7.2. Молярная электрическая проводимость, влияние разбавления на ее величину.

5.7.3. Предельная молярная электрическая проводимость. Закон Кольрауша.

5.7.4. Кондуктометрия, методы кондуктометрического анализа, применение в медико-биологических исследованиях.





Контрольные вопросы
5.1. Что такое активность иона? Является ли активность иона разновидностью концентрации? В каких единицах измеряется активность иона? Чем активность иона отличается от концентрации?


5.2. Почему для характеристики растворов электролитов наряду с концентрацией используется активность иона? Какая из этих двух величин при концентрациях до 1 моль‍/‍л будет больше для одного и того же раствора электролита?


5.3. Как рассчитать активность иона если известна его концентрация?


5.4. Какое влияние на коэффициент активности оказывает концентрация ионов, температура и ионная сила раствора?


5.5. Как рассчитать ионную силу раствора? Какое медико-биологическое значение имеет эта величина? Как изменение качественного и количественного содержания ионов во внутренней среде клетки может повлиять на состояние молекул белка в ней? Что такое высаливание? Следует ли учитывать ионную силу раствора лекарственного препарата при использовании инъекционного способа введения его в организм пациента?


5.6. Что такое степень электролитической диссоциации? Как по величине степени диссоциации отличаются сильные и слабые электролиты?


5.7. Что такое константа диссоциации? Почему константу диссоциации не используют для характеристики свойств сильных электролитов? Чем по своей сути являются константы кислотности и основности? Чем удобна величина pKa?


5.8. Как, согласно теории Брёнстеда, диссоциируют кислоты? Чем, с точки зрения теории Брёнстеда, являются основания? Что такое амфолиты?


5.9. Как, зная pKa, рассчитать pKb сопряжённого основания?


5.10. Как связаны между собой степень диссоциации и константа диссоциации (закон разбавления Оствальда)? Какая из характеристик, степень диссоциации или константа диссоциации, отражает свойства самого вещества, вне зависимости от концентрации?


5.11. Что такое сопряженные протолитические пары? Чем отличаются по составу (по структуре) компоненты протолитической пары? Какое сопряженное основание (сильное или слабое) соответствует сильной кислоте и слабой кислоте?


5.12. Что такое автопротолиз воды? Чему равна константа автопротолиза воды (ионное произведение воды)?


5.13. Какова концентрация ионов H⁺ в нейтральной, кислой и основной средах? Каким образом получаются эти значения из выражения для константы автопротолиза воды? Может ли концентрация ионов H⁺ в какой-либо среде быть равной 0?


5.14. Что такое водородный показатель (pH)?


5.15. Можно ли по величине pH сравнить силу двух кислот или оснований в растворах с разной концентрацией? Какая величина используется для сравнения силы кислот и оснований независимо от концентрации растворов?


5.16. Как рассчитывается величина pH для растворов сильных кислот, сильных оснований, слабых кислот и слабых оснований?


5.17. Какие минимальные и максимальные значения может принимать величина pH? Может ли величина pH принимать значения, равные 0, −1, −2, 15, 16? Какие концентрации кислот и оснований были бы нужны для этого?


5.18. Какие бывают значения pH в биологических жидкостях?


5.19. Что такое кислотно-основные индикаторы? Какие изменения в структуре молекул приводят к тому, что они меняют окраску в зависимости от кислотности среды?


5.20. Чем обусловлена способность биологических сред проводить электрический ток? Проводниками какого типа являются биологические среды? Какие методы лечения и диагностики, основанные на электропроводности биологических сред, вам известны?


5.21. Чем отличается подвижность иона от скорости движения иона? От каких факторов зависит подвижность иона?


5.22. Что такое предельная подвижность иона?


5.23. Какие два иона обладают аномальной предельной подвижностью? Чем объясняются аномальная предельная подвижность этих ионов?


5.24. Чем отличается удельная электрическая проводимость от обычной электрической проводимости (измеряемой в См)?


5.25. Как зависит удельная электрическая проводимость от концентрации? Чем объясняется такой характер зависимости?


5.26. Чем отличается молярная проводимость от удельной проводимости?


5.27. Зависит ли молярная проводимость от концентрации раствора? Чем это объясняется?


5.28. Что такое предельная молярная электрическая проводимость электролита?


5.29. Как связана предельная молярная электрическая проводимость электролита с предельной молярной проводимостью ионов, входящих в его состав?


5.30. Что такое кондуктометрия? Какое значение кондуктометрия имеет для клинико-лабораторной диагностики?






Тестирование


Задачи
5.1. Имеется раствор уксусной кислоты с молярной концентрацией c(CH₃COOH) = 0,03 моль‍/‍л. Вычислите степень ионизации уксусной кислоты в этом растворе.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 135. Задача 15.
Ответ ↴
2,41‍·‍10‍⁻‍²

⧆ 5.2. Раствор уксусной кислоты разбавили водой в четыре раза. Как и во сколько раз изменится степень диссоциации уксусной кислоты и концентрация протонов в растворе?
Ответ ↴
Степень диссоциации возрастает в 2 раза, концентрация протонов уменьшается в 2 раза

5.3. Имеется водный раствор, в котором молярные концентрации веществ составляют: C(NaCl) = 0,012 моль‍/‍л, C(KCl) = 0,015 моль‍/‍л, C(NaHCO₃) = 0,06 моль‍/‍л. Рассчитайте ионную силу такого раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 135. Задача 16.
Ответ ↴
0,087 моль‍/‍л

5.4. Рассчитайте ионную силу раствора, содержащего в 100 мл 0,6 г хлорида натрия, 0,1 г хлорида калия, 0,3 г гидрокарбоната натрия.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 135. Задача 16.
Ответ ↴
0,152 моль‍/‍л

⧆ 5.5. Вычислите ионную силу раствора, содержащего в 1 л 0,005 моль нитрата меди Cu(NO₃)₂ и 0,001 моль сульфата алюминия Al₂(SO₄)₃.

5.6. Ионная сила плазмы крови составляет 0,15 моль‍/‍л, слюны – 0,036 моль‍/‍л. Как соотносятся активность ионов Са²⁺ в крови и в слюне, если концентрация свободного кальция в крови – 1,2 ммоль‍/‍л, а в слюне – 0,72 ммоль‍/‍л.
Ответ ↴
Соотношение активностей Са²⁺ в крови и в плазме при указанных концентрациях приблизительно 1:1

5.7. Имеется раствор соляной кислоты с молярной концентрацией C(HCl) = 0,08 моль‍/‍л. Коэффициент активности в данном растворе составляет γ = 0,82. Вычислите pH такого раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 139. Задача 21.
Ответ ↴
1,18

⧆ 5.8. Имеется раствор муравьиной кислоты с молярной концентрацией C(HCOOH) = 0,03 моль‍/‍л. Вычислите pH такого раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 141. Задача 26.
Ответ ↴
2,64

⧆ 5.9. Формалин – 40 %‑ный водный раствор формальдегида (плотностью 1,11 г‍/‍мл), применяемый для консервации анатомических препаратов. Вследствие реакции диспропорционирования, протекающей в растворе, часть формальдегида окисляется до муравьиной кислоты, содержание которой, согласно ГОСТу, не может превышать 0,2 %. Рассчитайте степень диссоциации муравьиной кислоты в этом растворе и минимально возможное значение рН формалина.
Ответ ↴
0,06; рН = 2,54

⧆ 5.10. Кислотность слюны взрослого человека колеблется в диапазоне от 6,8 до 7,8. Какова минимальная молярная концентрация протонов в слюне?
Ответ ↴
1,6‍·‍10‍⁻‍⁸ моль‍/‍л

5.11. Определите какое из патологических состояний, ацидоз или алкалоз, имеет место быть у пациента, если концентрация протонов в плазме крови этого пациента составляет 5,6‍·‍10‍⁻‍⁸ моль‍/‍л.
Ответ ↴
ацидоз

⧆ 5.12. Опишите, как по величине концентрации одноосновной кислоты в растворе и величине pH в этом растворе определить, является кислота сильной или нет. В качестве примера определите, какая из двух одноосновных кислот является сильной, если в растворе первой кислоты с молярной концентрацией 0,1 моль‍/‍л величина pH = 2, а в растворе второй кислоты с молярной концентрацией 0,001 моль‍/‍л величина pH = 3.

5.13. Раствор хлорида калия с удельной электрической проводимостью ϰ = 1,167 См/м поместили в кондуктометрическую ячейку. Сопротивление этого раствора составило 24,78 Ом. В этой же кондуктометрической ячейке измерили сопротивление раствора HCl, которое составило 20,46 Ом. Вычислите удельную электрическую проводимость раствора HCl.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 145. Задача 31.
Ответ ↴
1,413 См‍/‍м

5.14. Раствор хлорида калия с удельной электрической проводимостью ϰ = 1,119 См/м поместили в кондуктометрическую ячейку. Сопротивление этого раствора составило 32,26 Ом. В этой же кондуктометрической ячейке измерили сопротивление раствора HCl с молярной концентрацией c(HCl) = 0,124 моль‍/‍л, которое составило 26,81 Ом. Вычислите удельную электрическую проводимость и молярную электрическую проводимость раствора HCl.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 145. Задачи 31, 32.
Ответ ↴
???? См‍/‍м, 0,011 (‍См‍·‍м‍²‍)‍/‍моль



Справочные материалы
      `},c3={title:"Протолитические равновесия в растворах солей. Протолитические буферные системы",content:`
        Вопросы для подготовки
6.1. Гидролиз солей.


6.1.1. Сущность гидролиза, основные типы гидролиза.

6.1.2. Константа гидролиза. Степень гидролиза.


6.2. Буферные системы и механизм их действия.


6.2.1. Состав и классификация буферных систем.

6.2.2. Важнейшие буферные системы организма человека: гидрокарбонатная, гидрофосфатная, гемоглобиновая, белковая.

6.2.3. Механизм действия буферных систем по отношению к кислотам и щелочам.


6.3. рН буферных растворов.


6.3.1. Расчет значений рН буферных растворов.

6.3.2. Факторы, влияющие на значение рН буферных систем. Диапазон оптимального буферного действия.


6.4. Буферная емкость.


6.4.1. Понятие буферной емкости.

6.4.2. Факторы, определяющие буферную емкость.


6.5. Взаимодействие буферных систем организма.


6.5.1. Сравнительная величина емкости буферных систем организма.

6.5.2. Понятие о кислотно-щелочном балансе, ацидозе и алкалозе.

6.5.3. Совместное действие буферных систем организма.

6.5.4. Особенности действия гемоглобиновой буферной системы. Связь с процессом оксигенации.





Контрольные вопросы
6.1. Что такое гидролиз? Какие вещества могут подвергаться гидролизу? Взаимодействие каких частиц происходит в процессе гидролиза солей?


6.2. Происходят ли реакции гидролиза в живых организмах? Если да, то какие примеры процессов гидролиза в организме человека вам известны?


6.3. Какие существуют основные типы гидролиза? По какой причине соли, образованные сильной кислотой и сильным основанием не гидролизуются?


6.4. Какой из ионов, образующихся при диссоциации соли, определяет тип гидролиза? Какой будет среда (кислая или основная) в зависимости от типа гидролиза (по аниону, по катиону, по катиону и аниону одновременно)? Почему?


6.5. Что такое константа гидролиза? Является ли константа гидролиза константой равновесия?


6.6. Как определить численное значение константы гидролиза? Существуют ли таблицы констант гидролиза, либо константа гидролиза рассчитывается? Как можно рассчитать константу гидролиза?


6.7. Что такое степень гидролиза? Как влияет на степень гидролиза разбавление раствора? Как это следует из выражения, связывающего степень гидролиза и константу гидролиза? Как влияет на степень гидролиза температура?


6.8. Как связаны между собой степень гидролиза и константа гидролиза? С каким выражением имеет сходство выражение для степени гидролиза? Какая из этих характеристик лучше отражает свойства самого вещества, вне зависимости от концентрации?


6.9. Как рассчитать константу гидролиза, степень гидролиза и pH в случае, если гидролиз протекает по катиону, по аниону и по двум ионам одновременно?


6.10. В чём заключается суть понятия «буферная система» в целом и «протолитическая буферная система» в частности? Каково биологическое значение протолитических буферных систем?


6.11. Какие компоненты включают буферные системы, и какая из этого вытекает классификация буферных систем? Какую роль играет каждый из этих компонентов в механизме буферного действия?


6.12. Какие буферные системы функционируют в организме человека? Из каких компонентов они состоят? К какому типу относится каждая из буферных систем плазмы крови?


6.13. Каков механизм действия буферных растворов (на примере гидрокарбонатного буфера) при добавлении основания?


6.14. Каков механизм действия буферных растворов (на примере гидрокарбонатного буфера) при добавлении кислоты?


6.15. Как определить значение рН буферного раствора? Является ли способность буферных систем к поддержанию pH неограниченной или имеет предел? Как определить какие значения рН способна поддерживать та или иная буферная система? Какая из буферных систем фосфатная или гидрокарбонатная лучше подходит для поддержания физиологического значения рН плазмы крови?


6.16. Как формулируется определение буферной емкости?


6.17. Как экспериментально определить величину буферной емкости?


6.18. Как влияет на величину буферной емкости концентрация компонентов?


6.19. Как влияет на величину буферной емкости соотношение концентраций компонентов? На какую из буферных систем фосфатную или гидрокарбонатную приходится бо́льшая доля от общей буферной ёмкости плазмы крови? Предположите с чем это может быть связано.


6.20. Какая буферная емкость, по кислоте или по основанию, больше в гидрокарбонатной буферной системе? С чем это связано?


6.21. Какая буферная емкость, по кислоте или по основанию, больше в фосфатной буферной системе? С чем это связано?


6.22. С изменением какой характеристики связаны понятия ацидоз и алкалоз?


6.23. С изменением какой характеристики связаны понятия ацидемия и алкалемия?


6.24. Как повлияют гиповентиляция и гипервентиляция легких на величину pH крови?






Тестирование


Задачи
⧆ 6.1. Ацетат калия применяется в составе препаратов для коррекции водно-электролитного баланса, а также для восполнения недостатка катионов калия в крови. Запишите уравнение гидролиза этой соли в молекулярном и ионном виде. Укажите тип гидролиза. Вычислите константу гидролиза, степень гидролиза, рН и рОН раствора ацетата калия с концентрацией 0,1 моль‍/‍л.
Ответ ↴
Кг = 5,56‍·‍10‍⁻‍¹⁰; h = 7,5‍·‍10‍⁻‍⁵; рН = 8,87; рОН = 5,13

6.2. Цитрат натрия входит в состав препаратов для регидратации (восполнения потерь воды и электролитов), а также для коррекции кислотно-щелочной среды. Трёхзамещённая соль применяется для консервации донорской крови. Укажите тип гидролиза цитрата натрия. В какой области значений находится рН раствора этой соли? Вычислите константы гидролиза трёхзамещённого цитрата натрия.
Ответ ↴
Кг1 = 2,5‍·‍10‍⁻‍⁸; Кг2 = 5,9‍·‍10‍⁻‍¹⁰; Кг3 = 1,4‍·‍10‍⁻‍¹¹.

6.3. Благодаря выраженному антимикробному эффекту и прижигающему действию нитрат серебра применяется в составе наружных средств для обработки кожи и слизистых, а также для обработки кариозных поражений твёрдых тканей зуба. В стоматологии 30 %‑ный раствор нитрата серебра (ρ = 1,34 г‍/‍мл) нередко используют в сочетании с фторидным лаком. Фторид натрия (5 %‑ный раствор, ρ = 1,04 г‍/‍мл), входящий в его состав, способствует реминерализации тканей зуба. Запишите уравнения гидролиза упомянутых солей в молекулярном, а также полном и кратком ионном виде. Для каждой соли укажите тип гидролиза, вычислите константу гидролиза, степень гидролиза и рН растворов.
Ответ ↴
Кг(AgNO₃) = 9,1‍·‍10‍⁻‍¹¹; h(AgNO₃) = 6,19‍·‍10‍⁻‍⁶; рН(AgNO₃) = 4,83; Кг(NaF) = 1,5‍·‍10‍⁻‍¹¹; h(NaF) = 3,5‍·‍10‍⁻‍⁶; рН(NaF) = 8,64

⧆ 6.4. Ацетат аммония используется в составе мочегонных препаратов, применяется в биохимических исследованиях как компонент буферных растворов. Запишите уравнение гидролиза и назовите его тип. Рассчитайте константу гидролиза, степень гидролиза и рН для раствора данной соли с концентрацией 0,1 моль‍/‍л.
Ответ ↴
Кг = 3,14‍·‍10‍⁻‍⁵; h = 5,6‍·‍10‍⁻‍³; pH = 7

6.5. Фермент каталаза расщепляет перекись водорода на воду и кислород. Оптимум рН для данного фермента лежит в диапазоне от 6,8 до 7,2. Имеется три буферных раствора: (a) с(H₂PO₄⁻) = 0,3 моль‍/‍л, с(HPO₄²⁻) = 0,2 моль‍/‍л; (б) с(H₂PO₄⁻) = 0,3 моль‍/‍л, с(HPO₄²⁻) = 0,6 моль‍/‍л; (в) с(H₂PO₄⁻) = 0,3 моль‍/‍л, с(HPO₄²⁻) = 0,06 моль‍/‍л. В каком из указанных буферных растворов скорость ферментативного расщепления перекиси водорода будет максимальна?
Ответ ↴
в буферном растворе (а)

⧆ 6.6. В буферном растворе молярная концентрация уксусной кислоты составляет 0,1 моль‍/‍л, а молярная концентрация ацетата натрия – 0,2 моль‍/‍л. Рассчитайте рН данного буферного раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 155. Задача 45.
Ответ ↴
5,06

⧆ 6.7. Буферный раствор приготовлен смешиванием 60 мл раствора СН₃СООН с молярной концентрацией 0,1 моль‍/‍л и 40 мл раствора СН₃СООNa с молярной концентрацией 0,2 моль‍/‍л. Рассчитайте рН данного буферного раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 155. Задача 45.
Ответ ↴
4,88

6.8. Буферный раствор приготовлен смешиванием 120 мл раствора СН₃СООН с молярной концентрацией 0,1 моль‍/‍л и 80 мл раствора СН₃СООNa с молярной концентрацией 0,2 моль‍/‍л. К данному буферному раствору прибавили 15 мл раствора с молярной концентрацией гидроксида натрия c(NaOH) = 0,06 моль‍/‍л. Рассчитайте, как изменится pH буферного раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 154. Задача 44.
Ответ ↴
pH₀ = 4,88; pH₁ = 4,94; ΔpH = 0,06

⧆ 6.9. В буферном растворе, объем которого 300 мл, молярная концентрация уксусной кислоты c(СН₃СООН) = 0,1 моль‍/‍л и молярная концентрация ацетата натрия c(СН₃СООNa) = 0,2 моль‍/‍л. К данному буферному раствору прибавили 5 мл раствора с молярной концентрацией соляной кислоты c(HCl) = 1 моль‍/‍л. Рассчитайте, как изменится pH буферного раствора. Рассчитайте, какое значение будет иметь pH, если указанное количество соляной кислоты прибавить к 300 мл дистиллированной воды.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 154. Задача 44.
Ответ ↴
pH₀ = 5,06; pH₁ = 4,96; ΔpH = 0,10; pHw = 1,79.

6.10. К буферному раствору, объем которого 200 мл, прибавили 5 мл раствора с молярной концентрацией соляной кислоты c(HCl) = 0,2 моль‍/‍л. При этом pH буферного раствора уменьшился от 7,65 до 5,5. Рассчитайте буферную емкость буферного раствора по кислоте.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 157. Задача 49.
Ответ ↴
2,33‍·‍10‍⁻‍³ моль‍/‍л

⧆ 6.11. Имеется 200 мл буферного раствора, pH которого составляет 4,35. К данному буферному раствору прибавили 5 мл раствора с молярной концентрацией гидроксида натрия c(NaOH) = 0,2 моль‍/‍л. При этом pH буферного раствора увеличился до 5,5. Рассчитайте буферную емкость буферного раствора по основанию.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 157. Задача 49.
Ответ ↴
4,35‍·‍10‍⁻‍³ моль‍/‍л

⧆ 6.12. В биохимических исследованиях нередко используется фосфатносолевой буферный раствор с рН = 7,36. Какова концентрация дигидрофосфата калия в этом растворе, если в его составе содержится 10 ммоль‍/‍л динатрийфосфата?
Ответ ↴
с(КН₂РО₄) = 6,9 ммоль‍/‍л

⧆ 6.13. Рассчитайте содержание угольной кислоты в плазме крови в физиологических условиях, если концентрация бикарбоната в плазме составляет 24 ммоль‍/‍л.
Ответ ↴
с(Н₂СО₃) = 1,2 ммоль‍/‍л

⧆ 6.14. Сахараза кишечника имеет оптимум рН в области 5,8 – 6,2. В лаборатории имеется возможность использовать ацетатный, гидрокарбонатный, фосфатный и аммиачный буфер, как среду для проведения ферментативной реакции in vitro. Какие из указанных буферных систем и при каком соотношении компонентов (кислота:основание) способны обеспечить максимальную скорость протекания реакции с участием сахаразы?
Ответ ↴
ацетатный буфер (кислота:основание = 1:10), гидрокарбонатный буфер (1:1), фосфатный буфер (кислота:основание = 10:1)

6.15. К 100 мл фосфатного буферного раствора с рН = 7,4 добавили 20 мл раствора HСl с концентрацией 0,1 моль‍/‍л. рН раствора при этом понизился до 7,3. Какими должны быть исходные концентрации компонентов фосфатного буфера в таком растворе?
Ответ ↴
с(H₂PO₄⁻) = 0,011 моль‍/‍л; c(HPO₄²⁻) = 0,018 моль‍/‍л



Справочные материалы
      `},f3={title:"Гетерогенные равновесия и процессы",content:`
        Вопросы для подготовки
7.1. Гетерогенное равновесие.


7.1.1. Растворы насыщенные, ненасыщенные, пересыщенные.

7.1.2. Гетерогенное равновесие.

7.1.3. Константа растворимости малорастворимого электролита, её связь с растворимостью вещества.


7.2. Образование и растворение осадков.


7.2.1. Условия образования и растворения осадков.

7.2.2. Конкуренция за общий ион.

7.2.3. Влияние солей на растворимость малорастворимого вещества.


7.3. Влияние pH среды на гетерогенные равновесия.


7.3.1. Совмещение протолитических и гетерогенных равновесий. Константа совмещенного равновесия.

7.3.2. Условия растворения малорастворимых соединений в кислотах.


7.4. Гетерогенные равновесия в живом организме.


7.4.1. Гетерогенные равновесия в живом организме: химизм образования костной, зубной ткани.

7.4.2. Кальциевый буфер. Изоморфизм.

7.4.3. Патологические гетерогенные процессы. Подходы к коррекции нарушений гетерогенных равновесий и процессов.





Контрольные вопросы
7.1. Чем отличаются насыщенные, ненасыщенные и пересыщенные растворы? Как в этих растворах соотносятся константа растворимости и произведение концентраций?


7.2. Какие процессы протекают в системе «раствор – осадок»? Что является результатом этих процессов?


7.3. Какая величина является количественной характеристикой для описания гетерогенного равновесия?


7.4. Является ли константа растворимости константой равновесия?


7.5. Как связана константа растворимости с растворимостью вещества?


7.6. Как можно вывести выражение, связывающее растворимость вещества с его константой растворимости?


7.7. Как по величине константы растворимости определить, будет ли образовываться осадок в растворе, содержащем ионы малорастворимого электролита?


7.8. Как определить, будет ли растворяться осадок малорастворимого электролита?


7.9. В каком порядке будут образовываться осадки малорастворимых соединений, имеющие общий ион? Как можно определить последовательность выпадения осадков по величинам констант растворимости? В каких случаях допустимо сравнивать растворимость солей по величинам их констант растворимости?


7.10. Как влияет на растворимость малорастворимого вещества присутствии солей, содержащих одноимённый ион?


7.11. Как влияет на растворимость малорастворимого вещества присутствие солей, не содержащих одноимённый ион?


7.12. Как можно влиять на концентрацию одного из ионов малорастворимого вещества?


7.13. Что такое совмещённое равновесие?


7.14. Какие частицы конкурируют между собой в случае совмещения протолитических и гетерогенных равновесий? Какая частица является объектом конкуренции?


7.15. Как можно определить результат конкуренции при совмещённом равновесии?


7.16. Какому принципу записывается константа совмещённого равновесия?


7.17. Как по величине константы совмещённого равновесия сделать вывод о возможности протекания реакции?


7.18. Как по величине константы совмещённого равновесия сделать вывод о практической обратимости реакции?


7.19. Какова последовательность образования соединений катионов кальция и фосфат-анионов процессе образования костной ткани?


7.20. Какое ещё соединение входит в состав костное ткани вместе с гидроксифосфатом кальция? Какую роль играет это вещество в организме?


7.21. В чём заключается явление изоморфизма?


7.22. Какие патологические процессы в организме связаны с образованием и растворением малорастворимых соединений?


7.23. Почему пациентам с почечнокаменной болезнью рекомендуют ограничить употребление кислых соусов, продуктов и БАД (биологически активных добавок), содержащих большое количество аскорбиновой кислоты, зелёного чая и других продуктов богатых оксалатами?






Тестирование


Задачи
7.1. Молярная растворимость фторида кальция составляет 3,26‍·‍10‍⁻‍⁴ моль‍/‍л. Рассчитайте константу растворимости этой соли.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 159. Задача 53.
Ответ ↴
3,45‍·‍10‍⁻‍¹¹

7.2. Свинец относится к протоплазматическим ядам, и разница в токсичности проявляется за счет неодинаковой растворимости в жидкостях организма (особенно в желудочном соке). Вычислите константу растворимости (Ks) сульфата свинца, если известно, что 1 л его насыщенного при 25 °‍C раствора содержит в виде ионов 0,186 г свинца.

7.3. Концентрация свободных катионов кальция в плазме крови в норме составляет около 1,25 ммоль‍/‍л. Рассчитайте общую концентрацию фосфатов в крови, если плазму крови можно приближённо считать насыщенным раствором CaHPO₄, а на HPO₄⁻ в физиологических условиях приходится 30 % всех содержащихся в плазме фосфатов.
Ответ ↴
0,72 ммоль‍/‍л

7.4. Пользуясь справочными данными, рассчитайте растворимость карбоната кальция в моль‍/‍л.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 158. Задача 50.
Ответ ↴
6,16‍·‍10‍⁻‍⁵ моль‍/‍л

⧆ 7.5. Пользуясь справочными данными, рассчитайте содержание ионов в мг/л в насыщенном растворе фторида кальция.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 158. Задача 50.
Ответ ↴
содержание кальция – 8,62 мг/л; содержание фтора – 8,19 мг/л

⧆ 7.6. Вода озера Медвежье (Курганская область) относится к хлоридно-натриевому типу, минерализация воды достигает 360 г/л, что в 10 раз выше, чем минерализация морской воды. Если сделать допущение, что данный уровень минерализации обусловлен исключительно присутствием хлорида натрия, можно ли считать воду этого озера насыщенным раствором данной соли? Ответ подтвердите расчётами. Ks(NaCl) = 37,87.
Ответ ↴
можно, т.к. s(NaCl) = 360 г/л

7.7. Смертельная доза растворимых соединений серебра – около 2 г. Вычислите растворимость хлорида серебра в воде и в растворе хлорида калия с концентрацией 0,01 моль‍/‍л без учета и с учетом коэффициентов активности.

⧆ 7.8. Катионы бария обладают высокой токсичностью по причине конкуренции с катионами кальция. Летальная доза бария в растворимой форме не превышает 1 г. В то же время сульфат бария используется как рентгеноконтрастное вещество при проведении радиологических исследований ЖКТ. Для исследования верхних отделов ЖКТ используется смесь из 80 г порошка сульфата бария и 100 мл воды. Может ли количество бария, находящегося в этой смеси в растворимой форме, быть опасным для организма человека?

7.9. Раствор Ca(NO₃)₂ с молярной концентрацией 1,5‍·‍10‍⁻‍⁴ моль‍/‍л и объемом, равным 1 л, смешали с раствором Na₂SO₄ с такой же молярной концентрацией и таким же объемом. Рассчитайте, образуется ли осадок в данных условиях.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 158. Задача 51.
Ответ ↴
Πc (5,63‍·‍10‍⁻‍⁹) < Ks (4,93‍·‍10‍⁻‍⁵), осадок не образуется

⧆ 7.10. Раствор Ca(NO₃)₂ с концентрацией 0,4 % и объемом, равным 600 мл, смешали с раствором Na₂SO₄ с концентрацией 0,3 % и объемом, равным 800 мл. Плотности всех растворов ρ = 1,0 г‍/‍мл. Рассчитайте, образуется ли осадок в данных условиях.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 158. Задача 51.
Ответ ↴
Πc (1,26‍·‍10‍⁻‍⁴) > Ks (4,93‍·‍10‍⁻‍⁵), осадок образуется

7.11. Гидроксиапатит – минерал с количественной формулой Ca₃(PO₄)₅OH, является основным компонентом зубной эмали. Растворение гидроксиапатита происходит по схеме:
Ca₁₀(PO₄)₆(OH)₂ = 10Ca²⁺ + 6PO₄³⁻ + 2ОН⁻.
Формирование (либо разрушение) зубной эмали определяется составом слюны. Будет ли благоприятствовать минерализации тканей зуба слюна, для которой рН = 7, концентрация ионизированного кальция составляет 1 ммоль‍/‍л, содержание фосфата – 6 ммоль‍/‍л?
Ответ ↴
при указанных условиях Πc(Ca₁₀(PO₄)₆(OH)₂) = 4,7‍·‍10‍⁻‍⁵⁸, что больше Ks гидроксиапатита, следовательно состав слюны благоприятствует процессу минерализации

⧆ 7.12. Кальций плазмы крови (в норме 2,12 – 2,6 ммоль‍/‍л, или 9 – 11 мг‍/‍дл) представлен в виде:
* несвязанного, ионизированного кальция (около 50 %), 1,1 – 1,3 ммоль‍/‍л (биологически активная форма);
* ионов кальция, соединённых с белками, главным образом, с альбумином (≈ 45 %);
* недиссоциирующих комплексов с цитратом, сульфатом, фосфатом и карбонатом (≈ 5 %).
Концентрация ионов HPO₄²⁻ (pH = 7,4) в плазме крови составляет ≈ 0,29 ммоль‍/‍л. Оцените возможность образования осадка малорастворимого гидрофосфата кальция в плазме крови. Может ли повлиять на этот процесс внутривенное введение 10 % кальция хлорида?

⧆ 7.13. Карбонат натрия и другие растворимые соли угольной кислоты дают с катионами Ba²⁺, Sr²⁺ и Ca²⁺ белые осадки, растворимые в кислотах (HCl, HNO₃, CH₃COOH). Вычислите, в какой последовательности и при какой концентрации карбонат-ионов будет происходить осаждение карбонатов при постепенном приливании соды к смеси ионов Ba²⁺, Sr²⁺ и Ca²⁺, взятыми с одинаковыми концентрациями, равными 0,5 моль‍/‍л.

7.14. Оксалаты кальция и магния – основной компонент патологических конкрементов, формирующихся в почках при мочекаменной болезни (т.н. «оксалатных камней»). Обе соли относятся к практически нерастворимым. Рассчитайте молярную концентрацию насыщенного раствора для той из двух упомянутых солей, которая является наименее растворимой.
Ответ ↴
4,8‍·‍10‍⁻‍⁵ моль‍/‍л

7.15. Рассчитайте растворимость хлорида серебра в его насыщенном растворе: а) при отсутствии других веществ; б) в присутствии хлорида кальция, молярная концентрация которого составляет 0,01 моль‍/‍л.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 162. Задача 58.
Ответ ↴
а) 1,33‍·‍10‍⁻‍⁵ моль‍/‍л; б) 8,90‍·‍10‍⁻‍⁹ моль‍/‍л

7.16. Определите возможность растворения осадков сульфидов металлов в следующих случаях:
MnS + 2HCl ⇄ MnCl₂ + H₂S (1)
ZnS + 2HCl ⇄ ZnCl₂ + H₂S (2)
В каких случаях процессы практически обратимы?
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 726–727. Пример 18.1.
Ответ ↴
K₁ = 2,38‍·‍10‍¹⁰, K₂ = 1,52‍·‍10‍⁻‍⁴

⧆ 7.17. При авариях на объектах атомной промышленности в окружающую среду попадает радиоактивный изотоп стронций 90. Будучи химическим аналогом кальция, стронций накапливается в костной ткани. Вычислите растворимость фосфатов кальция и стронция и объясните, почему введение в рацион продуктов, богатых солями кальция, не вызывает быстрого понижения содержания стронция в костной ткани.
Ответ ↴
s(Ca₃(PO₄)₂) > s(Sr₃(PO₄)₂), поэтому Sr²⁺ выигрывает конкуренцию за общий анион и не может быть вытеснен кальцием



Справочные материалы
      `},d3={title:"Лиганднообменные равновесия. Биогенные элементы",content:`
       
Вопросы для подготовки
8.1. Комплексные соединения, их строение, классификация и номенклатура.


8.1.1. Координационная теория Вернера. Понятие о комплексных соединениях.

8.1.2. Природа химической связи в комплексных соединениях.

8.1.3. Взаимодействие между комплексообразователем и лигандом с позиции теории кислот и оснований Льюиса.

8.1.4. Способность атомов различных элементов к комплексообразованию.

8.1.5. Строение комплекса. Дентатность лигандов, координационное число.

8.1.6. Классификация комплексных соединений.

8.1.7. Хелаты и хелатирующие агенты. Многоядерные комплексы. Комплексы с макроциклическими соединениями.

8.1.8. Номенклатура комплексных соединений.


8.2. Равновесие в растворах комплексных соединений.


8.2.1. Диссоциация комплексных соединений, константы нестойкости.

8.2.2. Конкуренция за лиганд или за ион-комплексообразователь. Правило Пирсона.


8.3. Биологическая роль комплексных соединений.


8.3.1. Строение биокомплексных соединений (гемоглобин, миоглобин, хлорофилл, цитохромы, кобаламины и др.) и металлоферментов (каталаза, супероксиддисмутаза, уреаза и др.).


8.4. Классификация биогенных элементов.


8.4.1. Классификация биогенных элементов по функциональной роли и содержанию в организме: макроэлементы, микроэлементы, органогены, элементы электролитного фона.

8.4.2. Химическое сходство и биологический антагонизм.


8.5. Биогеохимические провинции.


8.5.1. Биогеохимические провинции. Эндемические заболевания.

8.5.2. Гипо‑ и гипермикроэлементозы.


8.6. Металло-лигандный гомеостаз.


8.6.1. Металло-лигандный гомеостаз и причины его нарушения.

8.6.2. Понятие о химизме патологических лигандно-обменных процессов, их возможной коррекции.

8.6.3. Дезинтоксикационная терапия, физикохимические основы хелатотерапии. Комплексоны и комплексонаты.

8.6.4. Биогенные металлы и их соединения как лекарственные препараты.





Контрольные вопросы
8.1. Объясните суть понятия «комплексное соединение»? Является ли термин «комплекс» синонимом этого понятия?


8.2. Какие составные части включают в себя комплексные соединения?


8.3. Какой вид связи осуществляется между центральным атомом и лигандами?


8.4. Как различаются лиганды по способности образовывать определённое количество связей с центральным атомом?


8.5. Как называется характеристика, показывающая число возможных связей центрального атома с лигандами?


8.6. Как различаются атомы по способности являться комплексообразователем? Какие элементы (s, p или d) обладают лучшей способностью к образованию комплексных соединений?


8.7. Возможно ли существование комплексных соединений с несколькими центральными атомами?


8.8. Что представляют собой макроциклические лиганды?


8.9. Что представляют собой хелатные комплексы?


8.10. Какие выделяются виды диссоциации комплексных соединений? Насколько хорошо протекает диссоциация для каждого вида?


8.11. Какая количественная характеристика используется для описания диссоциации комплексного иона? Какой вид диссоциации комплексной соли она характеризует?


8.12. Как можно использовать константы нестойкости для определения возможности образования того или иного комплексного соединения в растворе, где присутствует несколько потенциальных комплексообразователей или лигандов?


8.13. Как по величине константы нестойкости прогнозировать возможность протекания реакции обмена лигандами?


8.14. Как классифицируются биогенные элементы в зависимости от их содержания в организме?


8.15. Какие две группы включают в себя макроэлементы?


8.16. Какие элементы включает в себя группа органогенов?


8.17. Какие элементы включает в себя группа элементов электролитного фона?


8.18. Как называются состояния организма, связанные с дефицитом или избытком микроэлементов?


8.19. Какое название имеют территории, характеризующееся дефицитом или избытком микроэлементов?


8.20. Как называется заболевание встречающиеся на у людей, проживающих на этих территориях?


8.21. Поддерживается ли в организме соотношение металлов и лигандов на некотором определённом уровне? Как называется это явление?


8.22. Каковы возможные причины нарушения металло-лигандного гомеостаза?


8.23. Какие методы могут применяться для выведения из организма ионов токсичных металлов? Какие соединения используются для этих целей?


8.24. Какие требования предъявляются к веществу, используемому в качестве детоксиканта?


8.25. Какие численные характеристики следует использовать, чтобы выбрать подходящий детоксикант?






Тестирование


Задачи
⧆ 8.1. Даны комплексные соединения: 1) гексацианоферрат (III) калия; 2) гексахлорохромат (III) натрия; 3) тетрацианоцинкат (II) калия; 4) тетрафтороаргентат (III) калия; 5) тетрайодоплюмбат (II) натрия; 6) нитрат гексаамминкобальта (III).
Для каждого соединения приведите формулу и определите: а) заряд внутренней сферы; б) заряд и дентатность лигандов; в) степень окисления и координационное число центрального атома.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 310–311.

8.2. Даны комплексные соединения: 1) K₃[Fe(CN)₆]; 2) K[Co(SCN)₃]; 3) [Zn(NH₃)₄]Cl₂; 4) Na₂[PbI₄]. Для каждого соединения приведите название и определите: а) заряд внутренней сферы; б) заряд и дентатность лигандов; в) степень окисления и координационное число центрального атома. Пользуясь справочными данными, расположите комплексные ионы в порядке возрастания их устойчивости.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 163. Задача 60. с. 164. Задача 62.

⧆ 8.3. Препарат «цисплатин» обладает цитостатическим эффектом благодаря способности блокировать репликацию ДНК. Формулу действующего вещества можно записать следующим образом: [Pt(NH₃)₂Cl₂]. Назовите данный комплекс в соответствии с правилами номенклатуры комплексных соединений. Укажите к какому классу можно отнести данный комплекс (используйте при этом не менее двух различных подходов к классификации комплексов). Определите следующие характеристики указанного комплекса: (а) степень окисления комплексообразователя; (б) координационное число комплексообразователя; (в) заряды лигандов.

8.4. Хризолан – препарат, обладающий противовоспалительной активностью и применяемый в терапии ревматоидного артрита, представляет собой комплексное соединение с формулой Na₃[Au(S₂О₃)₂]. Назовите данную комплексную соль. К какому классу можно отнести комплекс, входящий в её состав (используйте не менее двух способов классификации). Для приведённого комплекса укажите следующее: (а) степень окисления комплексообразователя; (б) координационное число комплексообразователя; (в) заряды лигандов.

⧆ 8.5. В составе различных средств для наружного применения (аэрозоли, кремы, шампуни), используемых для лечения себореи, а также псориаза, экземы и ряда других воспалительных заболеваний кожи содержится пиритион цинка. Структурная формула данного комплексного соединения показана на рисунке.

К какому типу комплексных соединений относится данное вещество? Исходя из приведённой формулы, определите (а) координационное число комплексообразователя; (б) число лигандов и их дентатность.

8.6. Связывание цианид-иона с катионами железа – процесс, лежащий в основе токсического действия цианидов. Прочность связывания цианидного лиганда с ионом металла определяет необратимость инактивации жизненно важных железосодержащих белков, таких как гемоглобин (содержащий Fe²⁺) или цитохромы митохондрий (Fe³⁺). Сравните устойчивость цианидных комплексов железа (II) и железа (III), запишите схемы диссоциации этих комплексов и выражения для их констант нестойкости. На основании значений констант нестойкости сделайте вывод, какой из железосодержащих белков, гемоглобин или цитохромы митохондрий, в большей степени подвержен инактивации под действием цианидов.

⧆ 8.7. Хелатные соединения железа входят в состав некоторых препаратов, применяемых при лечении железодефицитной анемии. Одним из таких хелатных соединений является цитрат железа (II). Рассчитайте концентрацию ионов Fe²⁺ в растворе цитрата железа концентрацией 0,1 моль‍/‍л, если в растворе присутствует так же цитрат натрия концентрацией 0,05 моль‍/‍л. Считать, что диссоциация хелатного соединения происходит по схеме FeCit⁻ = Fe²⁺ + Cit³⁻
Ответ ↴
1,52‍·‍10‍⁻‍² моль‍/‍л

⧆ 8.8. Какое из соединений будет более эффективным противоядием при отравлении свинцом тетацин (кальция натрия ЭДТАт) или цитрат натрия?

8.9. Имеется водный раствор K₃[Fe(CN)₆] с молярной концентрацией 0,02 моль‍/‍л. Рассчитайте концентрацию ионов Fe³⁺ и CN⁻ в этом растворе.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 166. Задача 65.
Ответ ↴
концентрация ионов Fe³⁺ – 6,62‍·‍10‍⁻‍⁸ моль‍/‍л, ионов CN⁻ – 3,97‍·‍10‍⁻‍⁷ моль‍/‍л

⧆ 8.10. Имеется водный раствор K₅[Ag(S₂O₃)₃] с молярной концентрацией 0,02 моль‍/‍л. Рассчитайте концентрацию ионов Ag⁺ в этом растворе. Достигается ли бактерицидное действие иона серебра Ag⁺ ([Ag⁺] = 10‍⁻‍⁹ г/л) в этом растворе?
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 166. Задача 65.
Ответ ↴
5,17‍·‍10‍⁻‍³ г/л

8.11. Имеется водный раствор K₂[PtBr₄] с молярной концентрацией 0,04 моль‍/‍л. В растворе также содержится KBr с молярной концентрацией 0,01 моль‍/‍л. Рассчитайте концентрацию ионов Pt²⁺ в этом растворе.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 164. Задача 63.
Ответ ↴
1,28‍·‍10‍⁻‍¹⁴ моль‍/‍л

8.12. Определите возможность разрушения комплексного соединения согласно реакции
[Zn(CN)₄]²⁻ + 4H⁺ + 4H₂O ⇄ [Zn(H₂O)₄]²⁺ + 4HCN.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 730–731. Пример 18.2.
Ответ ↴
K = 1,74‍·‍10‍¹⁹

8.13. Определите возможность растворения осадка сульфида цинка в растворе аммиака согласно уравнению
ZnS + 4NH₃ ⇄ [Zn(NH₃)₄]²⁺ + S²⁻.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 738. Пример 18.5.
Ответ ↴
K = 1,93‍·‍10‍⁻‍¹³



Справочные материалы
      `},p3={title:"Редокс-равновесия и процессы",content:`
       Вопросы для подготовки
9.1. Окислительно-восстановительные процессы.


9.1.1. Сущность окислительно-восстановительных реакций.

9.1.2. Сопряженная окислительно-восстановительная пара.


9.2. Направление окислительно-восстановительных реакций.


9.2.1. Редокс-потенциал. Прогнозирование направления окислительно-восстановительных реакций.

9.2.2. Уравнение Нернста – Петерса. Влияние pH на потенциалы.

9.2.3. Электродвижущая сила.

9.2.4. Константа равновесия окислительно-восстановительного процесса.


9.3. Гальванический элемент.


9.3.1. Устройство гальванического элемента. Схема химической цепи гальванического элемента.

9.3.2. Электродный потенциал. Стандартный электродный потенциал.

9.3.3. Классификация электродов: электроды первого рода; второго рода; газовые электроды; редокс-электроды.

9.3.4. Измерение электродных потенциалов, стандартный водородный электрод.


9.4. Биологическая роль редокс-процессов.


9.4.1. Электронотранспортные цепи.

9.4.2. Редокс-процессы в биологических системах.

9.4.3. Редокс-буферные системы организма.


9.5. Диффузионный и мембранный потенциалы.


9.5.1. Диффузионный потенциал. Механизм возникновения. Роль в возникновении биопотенциалов.

9.5.2. Мембранный потенциал. Механизм возникновения. Биоэлектрические потенциалы.


9.6. Потенциометрический метод анализа.


9.6.1. Сущность потенциометрического метода анализа.

9.6.2. Электроды сравнения, индикаторные электроды, ионоселективные электроды.

9.6.3. Применение потенциометрии в медико-биологических исследованиях.



Конспект темы




Контрольные вопросы
9.1. Что такое окислительно-восстановительная пара? Какое название имеют компоненты окислительно-восстановительные пары?


9.2. Чем отличаются понятия окислитель и окисленная форма?


9.3. Какая величина характеризует способность окислительно-восстановительной пары принимать электроны?


9.4. Что означает выражение «стандартный окислительно-восстановительный потенциал»?


9.5. Как можно рассчитать окислительно-восстановительный потенциал при условиях, отличающихся от стандартных?


9.6. Что такое электродвижущая сила? Как можно использовать электродвижущую силу для прогнозирования направления протекания реакции?


9.7. Какими формулами связаны между собой электродвижущая сила, изменение стандартной энергии Гиббса и константа равновесия?


9.8. Как устроен гальванический элемент? Каковы его составные части?


9.9. Что такое схема химической цепи гальванического элемента? По каким правилам она составляется?


9.10. Что происходит при работе гальванического элемента на катоде и на аноде? Как меняются массы металлических пластинок и концентрации растворов?


9.11. Как можно использовать гальванический элемент для измерения электродного потенциала какого-либо электрода?


9.12. Как устроен стандартный водородный электрод? Для каких целей он применяется?


9.13. Что такое электронотранспортная цепь? Какова ее роль в организме?


9.14. Каким типам окислительных процессов подвергаются органические вещества в организме?


9.15. С чем связано патологическое воздействие сильных окислителей на живой организм?


9.16. Какова роль пероксидного окисления липидов?


9.17. Какие системы организма противодействуют незапланированному окислению?


9.18. Что такое диффузионный потенциал?


9.19. Что такое мембранный потенциал?


9.20. Что является целью потенциометрического метода анализа?


9.21. Что такое электрод сравнения? Как устроен электрод сравнения на примере хлорсеребряного электрода?


9.22. Чем отличается индикаторный электрод от электрода сравнения?


9.23. Как можно добиться, чтобы потенциал индикаторного электрода зависел только от величины концентрации исследуемого вещества?


9.24. Какой электрод используется в качестве индикаторного для определения величины pH?


9.25. Что такое ферментные электроды? Концентрация каких веществ они позволяют определять?






Тестирование


Задачи
⧆ 9.1. Для предложенных уравнений реакций определите окислитель и восстановитель (исходя из того, как записано уравнение, без учета величин редокс-потенциалов). Выберите из таблицы окислительно-восстановительных потенциалов полуреакции восстановления для каждой из сопряженных окислительно-восстановительных пар. На основании сравнения редокс-потенциалов соответствующих полуреакций определите, в какой окислительно-восстановительной паре содержится более сильный окислитель. Рассчитайте ЭДС реакции и сделайте вывод о возможности для записанного уравнения самопроизвольного протекания реакций при стандартных условиях.
а) SnCl₂ + 2FeCl₃ ⇄ SnCl₄ + 2FeCl₂;
б) 2FeCl₃ + 2KI ⇄ 2FeCl₂ + 2KCl + I₂;
в) 2KF + 2FeCl₃ ⇄ F₂ + 2FeCl₂ + 2KCl;
г) 2MnSO₄ + 5Br₂ + 6K₂SO₄ + 8H₂O ⇄ 2KMnO₄ + 10KBr + 8H₂SO₄.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 172. Задача 74.
Ответ ↴
а) 0,62 В, реакция протекает; б) 0,23 В, реакция протекает; в) −2,00 В, реакция не протекает; г) −0,42 В, реакция не протекает.

9.2. В окислительно-восстановительной системе Fe³⁺/Fe²⁺ активности компонентов составляют a(Fe³⁺) = 0,05 моль‍/‍л и a(Fe²⁺) = 0,03 моль‍/‍л. Система находится при температуре 25 °‍C. Рассчитайте окислительно-восстановительный потенциал такой системы.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 176. Задача 79.
Ответ ↴
0,78 В

⧆ 9.3. В окислительно-восстановительной системе MnO₄⁻+8H⁺/Mn²⁺+4H₂O активности компонентов составляют a(MnO₄⁻) = 0,02 моль‍/‍л, a(Mn²⁺) = 0,01 моль‍/‍л и a(H⁺) = 0,03 моль‍/‍л. Система находится при температуре 30 °‍C. Рассчитайте окислительно-восстановительный потенциал такой системы.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 176. Задача 80.
Ответ ↴
1,37 В

⧆ 9.4. Определите потенциал редокс-системы MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, если дано, что [H⁺] = 0,1 моль‍/‍л, [MnO₄⁻] = [Mn²⁺] = 0,2 моль‍/‍л.

⧆ 9.5. Утверждается, что токсическое действие нитритов на организм человека, обусловлено окислением гемоглобина (Fe²⁺) в метгемоглобин (Fe³⁺). Справедливо ли такое утверждение, если стандартный окислительно-восстановительный потенциал пары метгемоглобин/гемоглобин составляет 0,055 В? В какой форме, свободной или в составе комплекса с гемом, железо (II) более уcтойчиво к окислению? Сделанные выводы подтвердите расчётом ЭДС. φ‍°‍(NO₂⁻/NO) = 1,2 В
Ответ ↴
более устойчива свободная форма железа в виду меньшего значения ЭДС реакции окисления

9.6. Методом ионно-электронного баланса составьте уравнение окислительно-восстановительной реакции: FeSO₄ + K₂Cr₂O₇ + H₂SO₄ и определите, насколько полно пойдет процесс.

9.7. Нитрит натрия используется в производстве колбасных изделий как консервант и стабилизатор окраски. Согласно ГОСТ, содержание нитритов в колбасах не превышает 2,5‍·‍10‍⁻‍⁵ г на 1 кг. Известно, что нитрит-ион обладает токсическим действием на организм, т.к. способен окислять гемоглобин в метгемоглобин. Составьте уравнение реакции (в ионном виде) между гемоглобином (Fe²⁺) и нитритом натрия. Рассчитайте какую массу колбасы потребовалось бы съесть, чтобы добиться окисления 5 % гемоглобина, содержащегося в крови. При расчётах принять допущение, что весь поступивший нитрит всосётся в кровь, считать, что содержание гемоглобина в крови составляет 130 г/л, а объём крови составляет 3 л. Молярная масса гемоглобина – 64458 г‍/‍моль и на 1 моль гемоглобина приходится 4 моль Fe²⁺.
Ответ ↴
33 кг

9.8. Гальванический элемент состоит из серебряного и кадмиевого электродов, погруженных в растворы солей этих металлов с молярной концентрацией 1 моль‍/‍л. Запишите уравнения полуреакций окисления и восстановления. Составьте схему химической цепи гальванического элемента. Рассчитайте ЭДС гальванического элемента.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 183. Задача 90.
Ответ ↴
1,20 В

9.9. Гальванический элемент состоит из платинового электрода, погруженного в раствор, содержащий Fe₂(SO₄)₃ и FeSO₄, и цинкового электрода, погруженного в раствор ZnSO₄. Активности катионов в растворах составляют a(Fe³⁺) = 1,3 моль‍/‍л, a(Fe²⁺) = 0,4 моль‍/‍л, a(Zn²⁺) = 0,2 моль‍/‍л. Запишите уравнения полуреакций окисления и восстановления и суммарное уравнение реакции. Составьте схему химической цепи гальванического элемента. Рассчитайте ЭДС гальванического элемента.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 183. Задача 90.
Ответ ↴
Fe₂(SO₄)₃ + Zn = 2FeSO₄ + ZnSO₄, 0,75 В, −0,78 В, 1,53 В

9.10. Одним из значимых диагностических показателей, определяемых в ходе общего анализа мочи, является её реакция (рН). Определение рН мочи производится с помощью рН‑метра. Как будет выглядеть схема электрической цепи рН‑метра, если допустить, что прибор представляет собой гальванический элемент, состоящий из водородного электрода сравнения и погружённого в исследуемую жидкость водородного электрода определения? Каково значение рН мочи, если при 298 К значение ЭДС описанного гальванического элемента составляет −0,354 В?
Ответ ↴
рН = 6

9.11. Электрод, изготовленный из меди, опущен в раствор сульфата меди с молярной концентрацией c(CuSO₄) = 6,5‍·‍10‍⁻‍⁴ моль‍/‍л. Температура составляет 25 °‍C. Рассчитайте потенциал электрода при данных условиях.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 184. Задача 91.
Ответ ↴
0,26 В

9.12. Содержание ионов меди в плазме крови пациента составило 1270 мкг‍/‍л. Каким в этом случае могло бы быть значение потенциала электрода, представляющего собой погружённую в образец плазмы крови пластинку из металлической меди? Считать, что измерение происходит при 298 К.
Ответ ↴
2,9‍·‍10‍⁻‍⁵ В

⧆ 9.13. Для измерения pH исследуемого раствора составлена гальваническая цепь (−) Pt, H₂ | H⁺ || KCl, AgCl | Ag (+). Величина ЭДС составила 0,534 В. Система находится при температуре 30 °‍C. Потенциал хлорсеребряного электрода при данной температуре φ(AgCl, KCl(насыщ)/Ag) = 0,202 В. Вычислите величину pH.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 187. Задача 95.
Ответ ↴
5,53

9.14. Электрод, изготовленный из марганца, опущен в раствор сульфата марганца. Система находится при температуре 25 °‍C. Потенциал электрода при данных условиях составляет φ(Mn²⁺/Mn) = −1,24 В. Вычислите активность сульфата марганца.
Образец решения ↴
Mn²⁺ + 2e⁻ = Mn φ = φ°−(RT/2F)·ln(a(Mn²⁺)), отсюда a(Mn²⁺) = exp(((φ-φ°)·z·F)/(R·T)) a(Mn²⁺) = exp(((-1,24-(-1,185))·2·96500)/(8,31·298)) = 1,38‍·‍10‍⁻‍²
Ответ ↴
1,38‍·‍10‍⁻‍² моль‍/‍л

9.15. На границе растворов хлорида натрия с молярными концентрациями 0,3 моль‍/‍л и 0,02 моль‍/‍л возникает диффузионный потенциал. Система находится при температуре 25 °‍C. Подвижности ионов составляют u‍°‍(Na⁺) = 5,2‍·‍10‍⁻‍⁸ м‍²‍/‍(‍В‍·‍с‍) и u‍°‍(Cl⁻) = 7,9‍·‍10‍⁻‍⁸ м‍²‍/‍(‍В‍·‍с‍). Коэффициент активности ионов в растворе хлорида натрия с молярной концентрацией 0,3 моль‍/‍л составляет γ = 0,81, а с молярной концентрацией 0,02 моль‍/‍л – γ = 0,87. Вычислите величину диффузионного потенциала.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 180. Задача 86.
Ответ ↴
−0,013 В

9.16. Два раствора хлорида калия разной концентрации разделены мембраной. Активность ионов K⁺ в первом растворе составляет a(K⁺) = 4,3‍·‍10‍⁻‍⁵ моль‍/‍л, во втором – a(K⁺) = 1,6‍·‍10‍⁻‍³ моль‍/‍л. Система находится при температуре 25 °‍C. Вычислите величину мембранного потенциала.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 181. Задача 87.
Ответ ↴
−0,093 В



Справочные материалы
      `},h3={title:"Физикохимия поверхностных явлений",content:`
       
Вопросы для подготовки
10.1. Поверхностные явления. Сорбция.


10.1.1. Свойства молекул в поверхностном слое и объеме жидкости.

10.1.2. Поверхностная энергия Гиббса, поверхностное натяжение.

10.1.3. Примеры поверхностных явлений, их медико-биологическое значение.

10.1.4. Сорбция и ее виды. Основные понятия: сорбент, сорбат, сорбтив, сорбционный комплекс, сорбционное равновесие.


10.2. Абсорбция.


10.2.1. Абсорбция в системах «жидкость – газ», «жидкость – жидкость», «твердое тело – жидкость».

10.2.2. Законы Генри и Сеченова.

10.2.3. Роль абсорбции в жизнедеятельности организма.


10.3. Адсорбция на поверхности жидкости.


10.3.1. Уравнение Гиббса. Положительная и отрицательная адсорбция.

10.3.2. Поверхностная активность, поверхностноактивные (ПАВ) и поверхностноинактивные (ПИВ) вещества.

10.3.3. Изотермы поверхностного натяжения для ПАВ и ПИВ.

10.3.4. Особенности строения молекул ПАВ и ПИВ, их расположение относительно границы раздела фаз.

10.3.5. Правило Дюкло – Траубе.

10.3.6. Биологическая роль ПАВ.


10.4. Адсорбция на твёрдых адсорбентах.


10.4.1. Факторы, влияющие на адсорбцию. Удельная адсорбция.

10.4.2. Изотерма адсорбции. Уравнения Лэнгмюра и Фрейндлиха.


10.5. Адсорбция электролитов.


10.5.1. Избирательная адсорбция ионов. Правило Панета – Фаянса, лиотропные ряды электролитов.

10.5.2. Ионообменная адсорбция.

10.5.3. Иониты, их классификация.


10.6. Хроматография.


10.6.1. Принципы хроматографии.

10.6.2. Классификация хроматографических методов.


10.7. Адсорбция и хроматография в медицине.


10.7.1. Применение адсорбции в медицине, санитарно-гигиенической практике.

10.7.2. Применение хроматографии в медицине, медико-биологических исследованиях.





Контрольные вопросы
10.1. Чем отличаются свойства молекул, находящихся в поверхностном слое, от свойств молекул, находящихся в объёме жидкости?


10.2. Какими двумя способами можно дать определение понятию «поверхностное натяжение»?


10.3. Что такое абсорбция?


10.4. Как зависит абсорбция от давления газа над жидкостью?


10.5. Как закон Генри позволяет объяснить возникновение кессонной болезни?


10.6. Как влияет на растворимость газов присутствие электролитов?


10.7. Каковы причины высаливания газов?


10.8. В чем проявляется поверхностная активность?


10.9. Какие вещества называют поверхностно-активными, поверхностно-инактивными и поверхностно-неактивными?


10.10. Каковы особенности строения поверхностно-активных веществ?


10.11. Как располагаются молекулы ПАВ и ПИВ относительно границы раздела фаз?


10.12. Как изменяется поверхностная активность при удлинении углеводородной цепи молекулы ПАВ на одну метиленовую группу?


10.13. Какое существует уравнение для вычисления адсорбции на границе «жидкость – газ»?


10.14. Что такое удельная адсорбция?


10.15. Как называется графическая зависимость удельной адсорбции от концентрации в растворе адсорбируемого вещества?


10.16. Какие существуют уравнениях для описания изотермы адсорбции?


10.17. В каких случаях целесообразно применять уравнение Лэнгмюра и в каких уравнение Фрейндлиха?


10.18. Как зависит величина адсорбции от площади поверхности адсорбента?


10.19. Как зависит величина адсорбции от пористости адсорбента?


10.20. Какие вещества, полярные или неполярные, лучше адсорбируют полярные и неполярные адсорбенты?


10.21. Как изменяется величина адсорбции при увеличении концентрации в растворе адсорбируемого вещества?


10.22. Как зависит адсорбция от температуры?


10.23. Какие существуют два основных вида адсорбции ионов?


10.24. Какие ионы первыми адсорбируются на поверхности кристаллов согласно правилу Панета – Фаянса?


10.25. Как влияют на способность к адсорбции заряд и радиус иона?


10.26. Какие вещества называют катионитами и анионитами?


10.27. Можно ли катиониты и аниониты после их применения восстанавливать для повторного использования? Если можно, то что используется для этого?


10.28. На каком явлении основан метод хроматографии?


10.29. Что в хроматографии выполняет роль неподвижной фазы?


10.30. Что такое элюент? Что используется в хроматографии в качестве элюента?


10.31. По какой причине различаются скорости движения веществ через неподвижную фазу?


10.32. Как влияют способности веществ к адсорбции на скорость их движения в процессе хроматографии?


10.33. Какие выделяют виды хроматографии по механизму процесса разделения?


10.34. Для каких целей применяются адсорбенты в медицине в санитарно-гигиенической практике?


10.35. Для каких целей применяется хроматография в медицине?






Тестирование


Задачи
⧆ 10.1. При пропускании воды через сталагмометр было собрано 25 капель, при этом масса всех капель составила 3,672 г. При пропускании исследуемой жидкости через тот же сталагмометр было также собрано 25 капель, при этом масса всех капель составила 1,832 г. Поверхностное натяжение воды при температуре эксперимента равно 71,97‍·‍10‍⁻‍³ Н/м. Вычислите поверхностное натяжение исследуемой жидкости.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 243. Задача 1.
Ответ ↴
35,91‍·‍10‍⁻‍³ Н/м

⧆ 10.2. Для водного раствора некоторого вещества получены следующие данные по зависимости поверхностного натяжения (σ) от молярной концентрации (c):
c, моль‍/‍л	0,05	0,1	0,2
σ, 10⁻³ Н‍/‍м	72,3	65,8	58,3
Определите по имеющимся данным, как изменяется поверхностная активность с увеличением концентрации.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 768. Пример 19.1.
Ответ ↴
g₁ = 0,13 (Н‍·‍л‍)‍/‍(‍моль‍·‍м‍); g₂ = 0,075 (Н‍·‍л‍)‍/‍(‍моль‍·‍м‍)

⧆ 10.3. В раствор уксусной кислоты объемом 200 мл поместили адсорбент массой 5 г. При этом молярная концентрация уксусной кислоты снизилась с 0,5 моль‍/‍л до 0,238 моль‍/‍л. Рассчитайте величину адсорбции (в моль‍/‍г) и степень адсорбции (в %).
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 252. Задача 12.
Ответ ↴
1,048‍·‍10‍⁻‍² моль‍/‍г, 52,4 %

⧆ 10.4. В раствор уксусной кислоты поместили адсорбент массой 5 г. После установления адсорбционного равновесия молярная концентрация уксусной кислоты составила 0,132 моль‍/‍л. Экспериментально установленные параметры уравнения Лэнгмюра составляют Γ∞ = 4,3‍·‍10‍⁻‍³ моль‍/‍г и α = 3,8‍·‍10‍⁻‍² моль‍/‍л. Определите массу уксусной кислоты, которая адсорбировалась из раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 248. Задача 7.
Ответ ↴
1,00 г

10.5. В ёмкость, содержащую водный раствор уксусной кислоты, поместили 2 г активированного угля. После установления адсорбционного равновесия концентрация кислоты в растворе составила 0,1 моль‍/‍л. Рассчитайте массу вещества, поглощённого адсорбентом, если известно, что предел адсорбции составляет 5‍·‍10‍⁻‍³ моль/г, а величина α = 0,06 моль‍/‍л.
Ответ ↴
0,375 г

10.6. Катионит КУ‑2‑8, применяемый для очистки и умягчения питьевой воды, имеет статическую обменную ёмкость 1,8 г‑экв.‍/‍л (объёмная плотность данного ионита 730 г‍/‍л). Предельно допустимая жёсткость водопроводной воды – 7 мг‑экв.‍/‍л. Какой станет жёсткость водопроводной воды через сутки после того, как 500 мл её поместили в ёмкость, содержащую 1 г катионита КУ‑2‑8, если исходная величина данного показателя соответствовала предельно допустимому значению? Достигнет ли допустимого значения показатель жёсткости воды из скважины если в аналогичных условиях масса катионита составит 2 г, а исходная жёсткость воды 18 мг‑экв.‍/‍л?
Ответ ↴
2 мг‑экв.‍/‍л; итоговое значение жёсткости составит 8 мг‑экв.‍/‍л, а значит не достигнет допустимого для питьевой воды уровня.

⧆ 10.7. Имеется водный раствор некоторого вещества с молярной концентрацией 0,6 моль‍/‍л. Раствор находится при температуре 18 °‍C. Поверхностное натяжение раствора составляет 68,25‍·‍10‍⁻‍³ Н/м, поверхностное натяжение воды при той же температуре – 73,05‍·‍10‍⁻‍³ Н/м. Определите тип адсорбции на поверхности раствора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 247. Задача 6.
Ответ ↴
адсорбция положительная, 9,92‍·‍10‍⁻‍⁷ моль‍/‍м²

⧆ 10.8. Поверхностная активность масляной (бутановой) кислоты в водном растворе при 25 °‍C составляет 0,38 Н‍·‍л‍/‍(‍моль‍·‍м‍). Определите поверхностную активность валериановой (пентановой) кислоты в водном растворе при этой же температуре и рассчитайте величину ее адсорбции на поверхности водного раствора с молярной концентрацией 0,02 моль‍/‍л.
Образец решения ↴
Попков В.А., Пузаков С.А. Общая химия: учебник. – М.: ГЭОТАР-Медиа, 2010, с. 770. Пример 19.2.
Ответ ↴
1,22 Н‍·‍л‍/‍(‍моль‍·‍м‍); 9,82‍·‍10‍⁻‍⁶ моль‍/‍м²

⧆ 10.9. В составе картриджа к бытовому фильтру для питьевой воды содержится катионит. Пропускаемая через картридж водопроводная вода содержит катионы Fe³⁺, Ca²⁺, Mg²⁺, Al³⁺, Sr²⁺, Mn²⁺ и ряд других (в количествах, не превышающих предусмотренные СанПиН ПДК). В ходе эксплуатации фильтра возможна регенерация катионита раствором NaCl. В какой последовательности будут выходить из картриджа перечисленные катионы при промывании его раствором хлорида натрия? Какой из перечисленных катионов практически не вымывается из картриджа и, при высоком содержании в воде, способен существенно сократить срок его эксплуатации?
Ответ ↴
Mg²⁺, Ca²⁺, Sr²⁺, Al³⁺, Fe³⁺ (последний практически не вымывается)

⧆ 10.10. В растворе присутствуют радиоактивные изотопы стронция. Возможно ли использование порошка сульфата бария для связывания указанных изотопов из раствора? Будут ли на поверхности частиц сульфата бария адсорбироваться катионы Mg²⁺, Zn²⁺, Cu²⁺, Fe³⁺? Поясните свой ответ.
Ответ ↴
Возможно, т.к. ионы стронция изоморфны кристаллической решётке сульфата бария. Прочие указанные катионы не будут адсорбироваться на поверхности частиц сульфата бария.

10.11. При определении адсорбции уксусной кислоты активированным углем были получены следующие данные:
c, моль‍/‍л	0,015	0,028	0,044	0,062
Γ, ммоль‍/‍г	2,49	3,69	4,62	5,31
Определите значение постоянных величин α и Γ∞, входящих в уравнение Лэнгмюра.
Образец решения ↴
Методическое пособие по общей химии, – Челябинск: 1993, с. 153-155. Задача 2.



Справочные материалы
      `},m3={title:"Физикохимия дисперсных систем. Свойства растворов высокомолекулярных соединений",content:`
       Вопросы для подготовки
11.1. Предмет коллоидной химии.

11.1.1. Дисперсные системы, их компоненты.

11.1.2. Классификации дисперсных систем по степени дисперсности, по агрегатному состоянию дисперсной фазы и дисперсионной среды, по характеру взаимодействия дисперсной фазы с дисперсионной средой, по подвижности дисперсной фазы, по термодинамической устойчивости.


11.2. Методы получения и очистки дисперсных систем.

11.2.1. Диспергационные и конденсационные способы получения дисперсных систем.

11.2.2. Методы очистки дисперсных систем от низкомолекулярных веществ и грубодисперсных частиц: диализ, электродиализ, ультрафильтрация.

11.2.3. Гемодиализ, аппарат «искусственная почка».


11.3. Молекулярнокинетические и оптические свойства коллоидных растворов.

11.3.1. Молекулярнокинетические свойства: броуновское движение, диффузия, осмос, седиментация. Ультрацентрифугирование.

11.3.2. Оптические свойства: рассеивание, поглощение.

11.3.3. Опалесценция, эффект Тиндаля.

11.3.4. Принцип действия нефелометра и проточного цитометра.


11.4. Строение мицелл лиофобных золей.

11.4.1. Строение мицелл лиофобных золей: агрегат, потенциалопределяющие ионы, ядро, противоионы, адсорбционный слой, гранула, диффузионный слой.

11.4.2. Межфазный (электротермодинамический) и электрокинетический потенциалы. Факторы, влияющие на электрокинетический потенциал.


11.5. Электрокинетические явления.

11.5.1. Электрокинетические явления: электрофорез, электроосмос, потенциал протекания, потенциал оседания.

11.5.2. Медико-биологическое значение электрокинетических явлений.


11.6. Устойчивость дисперсных систем.

11.6.1. Устойчивость дисперсных систем: агрегативная и седиментационная.

11.6.2. Факторы устойчивости дисперсных систем.


11.7. Коагуляция. Пептизация.

11.7.1. Коагуляция. Факторы, вызывающие коагуляцию. Порог коагуляции золя.

11.7.2. Правило Шульце – Гарди.

11.7.3. Механизм пептизации, биологическое значение пептизации.


11.8. Теория и механизм коагуляции.

11.8.1. Скрытая и явная коагуляция.

11.8.2. Нейтрализационная и концентрационная коагуляция.

11.8.3. Коагуляция смесью электролитов: аддитивность, антагонизм, синергизм.

11.8.4. Гетерокоагуляция (взаимная коагуляция).


11.9. Образование растворов ВМС.

11.9.1. Взаимодействие ВМС с растворителем: набухание и растворение. Ограниченное и неограниченное набухание.

11.9.2. Факторы, влияющие на набухание: температура, присутствие электролитов, pH.


11.10. Полиэлектролиты.

11.10.1. Диссоциация белков, кислотно-основные свойства белков.

11.10.2. Биполярноионная структура белков.

11.10.3. Изоэлектрическое состояние белков.

11.10.4. Электрофоретическая подвижность белков.


11.11. Осмотическое давление растворов ВМС.

11.11.1. Зависимость осмотического давления растворов ВМС от концентрации, уравнение Галлера.

11.11.2. Сравнение осмотического давления растворов ВМС, истинных растворов и золей.

11.11.3. Онкотическое давление, его значение для организма.

11.11.4. Мембранное равновесие Доннана.


11.12. Устойчивость растворов ВМС.

11.12.1. Высаливание, коацервация, образование гелей, синерезис.


11.13. Коллоидная защита.

11.13.1. Коллоидная защита, золотое число.

11.13.2. Флокуляция.





Контрольные вопросы
11.1. Чем отличаются коллоидные растворы от обычных растворов? Как можно отличить друг от друга эти растворы? В чем проявляются различия на уровне частиц, из которых состоят эти растворы?

11.2. Как классифицируются дисперсные системы по размеру частиц, по агрегатным состояниям фаз, по характеру взаимодействия частиц и их подвижности?

11.3. Какие выделяют группы методов получения дисперсных систем? Чем отличаются эти группы методов? Какие методы относятся к группе каждого типа?

11.4. Какие виды очистки коллоидных растворов используются в зависимости от размера частиц примесей?

11.5. Как устроен диализатор? Каков его принцип действия?

11.6. Чем отличается электродиализатор от диализатора? Какова роль электродов? На какие частицы будет воздействовать электрическое поле? За счет чего ускоряется очищение при электродиализе?

11.7. Что такое ультрафильтрация?

11.8. Каков принцип действия аппарата «искусственная почка»?

11.9. В чём заключаются такие явления, как броуновское движение, диффузия, седиментация?

11.10. Чем отличается броуновское движение от диффузии?

11.11. Как зависит скорость диффузии и седиментации от размеров частиц?

11.12. Какие выделяют виды оптических явлений для дисперсных систем в зависимости от размера их частиц?

11.13. В чем заключается явление дифракции?

11.14. Какие частицы сильнее рассеивают свет, крупные или мелкие?

11.15. Излучение с какой длиной волны (большей или меньшей) рассеивается сильнее? То есть, световые волны какого цвета рассеиваются сильнее?

11.16. В чём заключается явление опалесценции?

11.17. Что такое эффект Тиндаля?

11.18. Какие цвета будут преобладать, если смотреть на источник белого света через коллоидный раствор?

11.19. Какие цвета будут преобладать, если наблюдать коллоидный раствор, подсвеченный белым светом сбоку?

11.20. Чем объясняется голубой цвет неба в дневное время и красный цвет солнца на восходе или на закате?

11.21. Как устроен ультрамикроскоп? Как при помощи ультрамикроскопа определить форму коллоидных частиц?

11.22. В чём заключаются явления электрофореза и электроосмоса? Какая составная часть дисперсной системы перемещается, а какая остаётся на месте для каждого из этих явлений?

11.23. Какое электрокинетическое явление возникает, если продавливать жидкую дисперсную систему через пористую перегородку?

11.24. Какое электрокинетическое явление возникает в жидкости при оседании частиц дисперсной фазы?

11.25. Каково строение частиц золя? Что означают понятия: агрегат, потенциалобразующие ионы, ядро, противоионы, адсорбционный слой, диффузионный слой, гранула, мицелла?

11.26. Если золь получается при сливании растворов двух солей, то какие ионы становятся потенциалобразующими?

11.27. Имеют ли поверхностный заряд мицелла, ядро и гранула?

11.28. На какой границе мицеллы возникает электротермодинамический потенциал? От чего он зависит?

11.29. Что такое поверхность скольжения? Какой потенциал возникает на поверхности скольжения?

11.30. От каких факторов зависит величина электрокинетического потенциала? Может ли электрокинетический потенциал изменить свой знак?

11.31. Что представляют собой мицеллы лиофильных коллоидных растворов?

11.32. Какие существуют виды устойчивости дисперсных систем? Как соотносятся между собой понятия: седиментационная, агрегативная, термодинамическая и кинетическая устойчивости?

11.33. Какие факторы устойчивости относятся к термодинамическим и кинетическим факторам?

11.34. В чём заключаются электростатический, адсорбционно-сольватный, энтропийный, структурно-механический и гидродинамический факторы устойчивости?

11.35. Какие факторы являются основными для обеспечения агрегативной устойчивости?

11.36. В чём заключается явление коагуляции? Можно ли заметить коагуляцию по внешним признакам?

11.37. Какой из двух ионов электролита вызывает коагуляцию?

11.38. Как зависит коагулирующее действие от заряда иона? Во сколько примерно раз различаются коагулирующие действия однозарядных, двухзарядных и трехзарядных ионов?

11.39. В чём заключается явление пептизации?

11.40. Имеет ли значение для эффективной пептизации время выпадения осадка и количество пептизатора? Должно ли количество пептизатора быть максимально?

11.41. Что такое скрытая и явная коагуляция?

11.42. Что такое быстрая и медленная коагуляция? При каких значениях электрокинетического потенциала обычно начинаются медленная коагуляция и быстрая коагуляция?

11.43. В чём заключаются нейтрализационная коагуляция и концентрационная коагуляция?

11.44. Какие явления при коагуляции могут возникать при использовании смеси электролитов?

11.45. Что происходит при смешивании коллоидных растворов, различающихся по знаку заряда коллоидных частиц?

11.46. Чем отличается ограниченное набухание от неограниченного? В каком случае получается гель? В каком случае полимер растворяется полностью?

11.47. Каков характер набухания ВМС в зависимости от pH среды? Имеет ли место постоянное возрастание, постоянное убывание или немонотонная зависимость (кривая с экстремумом)?

11.48. Какой точке на графике зависимости набухания ВМС от pH среды соответствует изоэлектрическая точка белка? Чем это объясняется?

11.49. Какой вид имеют катионная, анионная и нейтральная формы белка. Как эти формы связаны с изоэлектрической точкой?

11.50. Как можно разделить смесь белков с разными значениями изоэлектрической точки?

11.51. Имеются два раствора: коллоидный раствор и раствор ВМС. Массовая доля растворов одинакова. В каком из растворов будет больше осмотическое давление? По какой причине?

11.52. Имеются два раствора: раствор низкомолекулярного вещества и раствор ВМС. Массовая доля растворов одинакова. В каком из растворов будет больше осмотическое давление? По какой причине? По какой причине наблюдаются отклонения от закона Вант-Гоффа осмотического давления для растворов ВМС?

11.53. Имеется система, состоящая из двух растворов электролита, разделенных полупроницаемой мембранной. В одном из растворов содержится белок. Как распределится электролит по разные стороны мембраны, для случаев, когда первоначальная концентрация электролита в растворе, содержащем белок, была: а) меньше; б) больше; в) равна концентрации по другую сторону мембраны?

11.54. Что такое высаливание растворов ВМС?

11.55. Что такое коацервация?

11.56. Как происходит превращение раствора ВМС в гель?

11.57. Что такое синерезис?

11.58. В чём заключается явление коллоидной защиты?

11.59. Меньшее или большее значения золотого числа соответствует бо́льшему стабилизирующему действию?

11.60. Как изменится устойчивость коллоидной системы, если количество стабилизатора на основе ВМС будет меньше необходимого для коллоидной защиты? Почему?





Тестирование


Задачи
⧆ 11.1. Золь йодида серебра получен при смешивании 60 мл раствора йодида калия с молярной концентрацией c(KI) = 0,001 моль‍/‍л и 40 мл раствора нитрата серебра с молярной концентрацией c(AgNO₃) = 0,002 моль‍/‍л. Напишите формулу мицеллы золя.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 253. Задача 15.
Ответ ↴
{m[AgI]nAg⁺(n−x)NO₃⁻}x+xNO₃⁻

11.2. Препарат «алмагель» применяется в качестве антацидного средства. Оказывает обволакивающее и адсорбирующее действие. Активными веществами препарата являются гидроксид алюминия и гидроксид магния. Под действием соляной кислоты желудочного сока гидроксид алюминия частично растворяется. Растворение происходит в соответствии со схемой:
Al(OH)₃ + HCl = AlOCl + 2H₂O;
AlOCl = AlO⁺ + Cl⁻
Как будет выглядеть коллоидно-химическая формула мицеллы образовавшегося в желудке золя гидроксида алюминия? Если бы такой золь подвергли электрофорезу, к какому электроду могли бы двигаться гранулы?
Ответ ↴
к катоду

11.3. К 2 л золя для наступления коагуляции необходимо добавить 41,2 мл раствора хлорида натрия с массовой долей ω(NaCl) = 10 % и плотностью ρ = 1,08 г‍/‍мл. Вычислите порог коагуляции золя анионами хлора.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 256. Задача 18.
Ответ ↴
3,73‍·‍10‍⁻‍² моль‍/‍л

⧆ 11.4. Явная коагуляция положительного золя гидроксида железа (III) была вызвана добавлением в емкость, содержавшую 100 мл золя, раствора сульфата натрия концентрацией 0,01 моль‍/‍л. Известно, что порог коагуляции золя раствором Na₂SO₄ составляет 3,9 ммоль‍/‍л. Вычислите, какой объём раствора сульфата натрия был добавлен в ёмкость.
Ответ ↴
64 мл

⧆ 11.5. Для некоторого золя пороги коагуляции электролитами составили: cпк(KCl) = 48,3 ммоль‍/‍л; cпк(NaCl) = 47,1 ммоль‍/‍л; cпк(Na₂SO₄) = 0,76 ммоль‍/‍л; cпк(MgSO₄) = 0,83 ммоль‍/‍л; cпк(Na₃PO₄) = 0,09 ммоль‍/‍л. Определите знак заряда гранулы частиц золя.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 255. Задача 17.
Ответ ↴
положительный

⧆ 11.6. Золь берлинской лазури был получен по реакции между хлоридом железа (III) и жёлтой кровяной солью:
4FeCl₃ + 3K₄[Fe(CN)₆] = Fe₄[Fe(CN)₆]₃ + 12KCl.
При определении порогов коагуляции полученного золя под действием различных электролитов были получены следующие значения: алюминий сульфат – 0,08 ммоль‍/‍л, калий фосфат – 50 ммоль‍/‍л, магний хлорид – 0,95 ммоль‍/‍л. Запишите формулу мицеллы золя берлинской лазури. Какой из двух реагентов был взят в избытке при получении золя?
Ответ ↴
K₄[Fe(CN)₆]

11.7. Образец полимера массой 3 г выдерживали в растворителе. После выдерживания масса образца возросла до 3,6 г. Определите степень набухания полимера.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 262. Задача 27.
Ответ ↴
0,2

11.8. Имеется водный раствор белка с массовой концентрацией 1,35 кг‍/‍м³, молекула которого изодиаметрична (β = 1). Относительная молекулярная масса белка составляет 18600. Рассчитайте осмотическое давление этого раствора при температуре 25 °‍C.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 261. Задача 25.
Ответ ↴
181,6 Па

11.9. Имеется водный раствор хлорида натрия с молярной концентрацией c(NaCl) = 0,35 моль‍/‍л. В растворе находится клетка, содержащая белок в форме натриевой соли (NaPr) с молярной концентрацией c(NaPr) = 0,15 моль‍/‍л. Мембрана клетки проницаема только для низкомолекулярных веществ. Вычислите концентрации ионов Na⁺ и Cl⁻ внутри и снаружи клетки в состоянии равновесия.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 264. Задача 29.
Ответ ↴
конечная концентрация ионов Na⁺ вне клетки – 0,21 моль‍/‍л, конечная концентрация ионов Na⁺ внутри клетки – 0,29 моль‍/‍л, конечная концентрация ионов Cl⁻ вне клетки – 0,21 моль‍/‍л, конечная концентрация ионов Cl⁻ внутри клетки – 0,14 моль‍/‍л

11.10. Для гемоглобина значение изоэлектрической точки составляет 6,68. Белок помещён в буферный раствор, концентрация протонов в котором в 100 раз меньше, чем в дегазированной бидистиллированной воде. К какому электроду будет двигаться частица гемоглобина при электрофорезе?
Ответ ↴
К аноду

11.11. Имеется раствор некоторого ВМС с массовой долей ω(ВМС) = 0,005 % и плотностью ρ = 1 г‍/‍мл. Золотое число данного ВМС составляет 0,023 мг. Рассчитайте объем раствора ВМС, который нужно добавить к 10 мл золя золота, чтобы предотвратить его коагуляцию под действием 1 мл раствора хлорида натрия с массовой долей ω(NaCl) = 10 %.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 257. Задача 20.
Ответ ↴
0,46 мл



Справочные материалы
      `},g3={title:"Классификация, строение и номенклатура органических соединений",content:`
        Вопросы для подготовки
12.1. Классификация органических соединений.


12.1.1. Классификация органических соединений по строению углеродного скелета и по природе функциональных групп. Понятие о первичных, вторичных, третичных, четвертичных атомах.

12.1.2. Моно‑, поли‑ и гетерофункциональные соединения.


12.2. Номенклатура органических соединений.


12.2.1. Номенклатурные термины: органический радикал; родоначальная структура; характеристическая группа; заместитель.

12.2.2. Названия углеводородных радикалов.

12.2.3. Старшинство характеристических групп.


12.3. Алгоритм составления названия по заместительной номенклатуре ИЮПАК.


12.3.1. Выбор старшей характеристической группы. Выбор родоначальной структуры.

12.3.2. Использование суффиксов насыщенности, префиксов заместителей, умножающих префиксов, локантов.

12.3.3. Название составного заместителя.


12.4. Радикально-функциональная номенклатура.


12.4.1. Составление названия по радикально-функциональной номенклатуре.


12.5. Конформации ациклических соединений.


12.5.1. Конфигурации и конформации. Проекционные формулы Ньюмена.

12.5.2. Энергетическая характеристика конформаций открытых цепей.


12.6. Конформации циклических соединений.


12.6.1. Конформации пяти‑ и шестичленных циклов.

12.6.2. Энергетическая характеристика конформаций циклических соединений.

12.6.3. Аксиальные и экваториальные заместители.





Контрольные вопросы
12.1. Относятся ли анилин и пиридин к гетероциклическим соединениям?
Анилин:  Пиридин: 


12.2. Какие классы соединений содержат гидроксильную группу, тиольную группу, сульфоновую группу, цианогруппу, карбонильную группу, карбоксильную группу?


12.3. К какому классу соединений, монофункциональным, полифункциональным или гетерофункциональным, относятся глицерин, уксусная кислота, аминоуксусная кислота?


12.4. Чем отличаются понятия: заместитель, углеводородный радикал, функциональная группа, характеристическая группа? Можно ли считать заместителями углеводородный радикал и характеристическую группу?


12.5. Какие заместители по номенклатурным правилам обозначаются только префиксами, а какие префиксами и суффиксами?


12.6. Какие названия префиксов и суффиксов имеют карбоновые кислоты, альдегиды, кетоны, спирты и амины?


12.7. Какими соединениями ограничено применение номенклатуры органических соединений, изучаемой в школьном курсе химии?


12.8. Как выбирается старшая характеристическая группа при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.9. Какие существуют критерии для выбора родоначальной структуры при составлении названия соединения по заместительной номенклатуре ИЮПАК? Как они применяются?


12.10. Какое изменение сделано в заместительной номенклатуре органических соединений применительно к выбору родоначальной структуры в рекомендациях ИЮПАК 2013 года?


12.11. Каким образом (с какой стороны) нумеруется родоначальная структура при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.12. Какая характеристическая группа указывается в суффиксе при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.13. Какие группы указываются в префиксах при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.14. В какой части названия органического соединения указывается старшая характеристическая группа при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.15. В каком порядке перечисляются все заместители кроме старшей характеристической группы при составлении названия соединения по заместительной номенклатуре ИЮПАК?


12.16. Каким образом обозначается количество и положение нескольких характеристических групп? Каким образом указывается количество и положение кратных связей?


12.17. Каким образом указывается в названии старшая характеристическая группа согласно радикально-функциональный номенклатуре ИЮПАК?


12.18. В чём разница между понятиями структура органического соединения конфигурация молекулы и конформация молекулы?


12.19. Какой атом, ближний или дальний от наблюдателя, обозначаются в проекционной формуле Ньюмана окружностью?


12.20. В какой конформации заслоненной или заторможенной заместители находятся ближе всего друг к другу?


12.21. Какой вид конформационного напряжения создают больши́е по объёму заместители?


12.22. Какими символами в клиновидной проекции обозначают связи, лежащие в плоскости рисунка, направленные к наблюдателю и направленные от наблюдателя?


12.23. Сколько конформаций, характеризующихся минимумом или максимумом энергии, существует для этана для бутана?


12.24. В какой конформации преимущественно находятся длинные цепи насыщенных углеводородов?


12.25. В каком циклоалкане угловое напряжение максимально?


12.26. Для какого из циклоалканов характерна конформация «конверт»?


12.27. Как связана энергия той или иной конформации циклической молекулы со взаимным расположением заместителей в этой молекуле? В качестве примера покажите, каковы наиболее выгодные конформации для молекул гексана и циклогексана.


12.28. Какое название имеют связи в конформации кресла циклогексана, направленные параллельно оси симметрии, и под углом к этой оси?






Тестирование


Задачи
12.1. Проиллюстрируйте порядок использования префиксов и суффиксов, обозначающих функциональные группы, если в соединении присутствует несколько функциональных групп, различающихся по старшинству. Приведите 3 примера из числа соединений, содержащих гидроксильную, карбонильную и карбоксильную группы, когда одна и та же функциональная группа обозначается префиксом или суффиксом.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 20–22.

12.2. Проиллюстрируйте порядок применения критериев для выбора родоначальной структуры в ациклических соединениях. Приведите 2 примера, когда на выбор родоначальной структуры влияют наличие в соединении кратных связей и длина цепи атомов углерода.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 20.

⧆ 12.3. Для каждого из приведённых соединений назовите суффикс, который будет использован при составлении названия вещества по заместительной номенклатуре, при наличии функциональной группы, обозначаемой этим суффиксом, назовите также эту группу.
а)  б) 
в)  г) 
Ответ ↴
а) ‑ан; б) ‑ол, гидроксогруппа; в) ‑он, кетоновая группа; г) нет суффикса

12.4. Определите и назовите родоначальную структуру в каждом из следующих соединений:
1)  2) 
Поясните свой ответ.
Ответ ↴
1) пропан; 2) бензол

12.5. Назовите углеводород, являющийся структурной основой (родоначальной структурой) следующего соединения:

Ответ ↴
октен‑1

12.6. Приведите примеры 4 структур органических соединений, иллюстрирующих последовательное применение критериев выбора родоначальной структуры при составлении названия по заместительной номенклатуре ИЮПАК. Каждый пример должен иллюстрировать применение одного критерия.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 20.

⧆ 12.7. Приведите названия по заместительной номенклатуре ИЮПАК для следующих веществ:
1)  2) 
3)  4) 
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 20–22.
Ответ ↴
1) 2,5‑диэтилгексантетраол‑1,3,4,6; 2) 3‑метилиденгептан; 3) 5‑метил‑2‑этилгептантриол‑1,3,4; 4) 7‑бром‑2,5‑диэтилгептандиол‑1,3

⧆ 12.8. Составьте структурные формулы по названиям следующих веществ:
1) 2‑метил‑4‑хлорпентаналь;
2) 3,4‑дигидроксипентановая кислота;
3) 2‑амино‑3,4‑диметилгептанол‑1;
4) гептандион‑2,6;
5) 2,3‑диамино‑5‑метилгептанол‑1;
6) 3‑амино‑4‑метил‑2‑хлоргептандиол‑1,7.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 43. Задача 5.

⧆ 12.9. Изобразите в виде проекций Ньюмена все возможные конформации бутана, отличающиеся друг от друга поворотом на 60° вокруг связи C₂ – C₃.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 45. Задача 1.



Справочные материалы
      `},y3={title:"Реакционная способность органических соединений",content:`
        
Вопросы для подготовки
13.1. Основы строения органических соединений. Сопряженные системы.

13.1.1. Гибридизация орбиталей атома углерода, σ‑ и π‑связи.

13.1.2. Характеристики химической связи: энергия, длина, полярность, поляризуемость.

13.1.3. Сопряжение, системы с открытой цепью сопряжения. Виды сопряжения. Энергия сопряжения.


13.2. Ароматичность.

13.2.1. Системы с замкнутой цепью сопряжения, ароматичность.

13.2.2. Критерии ароматичности, правило Хюккеля.

13.2.3. Небензоидные ароматические соединения.

13.2.4. Ароматические гетероциклические соединения.

13.2.5. Атом азота пиррольного и пиридинового типа. π‑Избыточные и π‑недостаточные системы.


13.3. Электронные эффекты.

13.3.1. Электронные эффекты заместителей в органических соединениях.

13.3.2. Электронодонорные и электроноакцепторные заместители.


13.4. Кислотность органических соединений.

13.4.1. Кислоты Брёнстеда. Типы органических кислот: OH‑, SH‑, NH‑ и CH‑кислоты.

13.4.2. Факторы, определяющие кислотность: природа атомов кислотного центра, электронные эффекты заместителей, сольватационный эффект.


13.5. Основность органических соединений.

13.5.1. Основания Брёнстеда. Типы органических оснований: n‑основания (аммониевые, оксониевые, сульфониевые) и π‑основания.

13.5.2. Факторы, определяющие основность: природа атомов основного центра, электронные эффекты заместителей, сольватационный эффект.


13.6. Типы органических реакций. Механизмы реакций.

13.6.1. Типы органических реагентов, классификация органических реакций по характеру разрыва ковалентных связей.

13.6.2. Классификация органических реакций по результату (присоединение, замещение, отщепление, перегруппировки).

13.6.3. Классификация органических реакций по числу участвующих частиц.

13.6.4. Механизмы реакций (SR, SN1, SN2, E1, E2, SE, AR, AN, AE).


13.7. Окислительно-восстановительные реакции в органической химии.

13.7.1. Общие принципы протекания окислительно-восстановительных реакций в органической химии.

13.7.2. Взаимные превращения окисленных и восстановленных форм важнейших коферментов (НАД, НАДФ, ФАД, ФМН).





Контрольные вопросы
13.1. Какие виды гибридизации возможны для атома углерода в органических соединениях? Чем эти виды гибридизации отличаются один от другого? Какая геометрия молекул соответствует каждому виду гибридизации? Какие типы связи образуются при перекрывании разных видов орбиталей?

13.2. Что означают понятия: длина связи, энергия связи, полярность связи, поляризуемость связи?

13.3. Какая связь прочнее, σ‑связь или π‑связь? Почему? Какая связь прочнее, одинарная или двойная?

13.4. Какие условия должны выполняться, для того чтобы в молекуле возникла сопряженная система?

13.5. Может ли в молекуле быть одновременно π,π‑сопряжение и p,π‑сопряжение?

13.6. Как изменяется внутренняя энергия молекул в результате сопряжения? Как называется энергия, соответствующая этому изменению?

13.7. Как меняется энергия сопряжения и термодинамическая устойчивость соединений с увеличением длины цепи сопряжения?

13.8. Что показывает величина 4·n + 2 в правиле Хюккеля?

13.9. Какой смысл имеет число n в правиле Хюккеля? Может ли эта величина быть равной 0?

13.10. Может ли ион органической молекулы быть ароматическим?

13.11. Как подсчитывается количество электронов, участвующих в сопряженной системы в случае гетероциклических соединений?

13.12. Как отличаются конфигурации пиррольного и пиридинового атомов азота?

13.13. По какому признаку среди гетероциклических соединений выделяют π‑избыточные и π‑недостаточные циклы?

13.14. Что является причиной возникновения индуктивного эффекта?

13.15. Какие заместители обладают положительным индуктивным эффектом?

13.16. Что необходимо для возникновения мезомерного эффекта? Может ли мезомерный эффект возникнуть у алканов?

13.17. На какое количество связей распространяется в молекуле индуктивный и мезомерный эффекты?

13.18. Какой эффект, индуктивный или мезомерный, в большинстве случаев определяет, будет ли заместитель электронодонором или электроноакцептором? Для каких заместителей имеет место исключение?

13.19. По какой причине на атомах возникают частичные заряды?

13.20. Приведите примеры функциональных групп, в которых имеются частичные заряды на атомах.

13.21. Как влияет на распределение электронной плотности в ароматическом кольце наличие электронодонорных или электроноакцепторных заместителей.

13.22. Как влияет на кислотность органического соединения электроотрицательность атома кислотного центра, связанного с отщепляющимся атомом водорода?

13.23. Как влияет на кислотность органического соединения размер атома кислотного центра и его поляризуемость?

13.24. Как влияет на кислотность органического соединения наличие в молекуле электронодонорных и электроноакцепторных заместителей?

13.25. За счёт какого фактора резко повышается кислотность фенолов и карбоновых кислот?

13.26. Чем отличаются n‑основания от π‑оснований? Какие соединения относятся к n‑основаниям и π‑основаниям?

13.27. Какие знаки полных (+ или −) или частичных (δ⁺ или δ⁻) зарядов имеют нуклеофилы, электрофилы, нуклеофуги и электрофуги?

13.28. Могут ли органические реакции протекать без образования промежуточных частиц?

13.29. Какие бывают реакции замещения по типу и количеству реагирующих частиц?

13.30. Какие бывают реакции присоединения по типу реагирующих частиц?

13.31. Какие бывают реакции отщепления по количеству реагирующих частиц?

13.32. Каким образом в органической химии можно определять наличие процессов окисления или восстановления без подсчёта степеней окисления атомов?

13.33. Как по схеме биохимического процесса понять, что в ходе этого процесса происходит окисление или восстановление?

13.34. Как отличаются по структуре окисленные и восстановленные формы известных коферментов НАД, НАДФ, ФАД, ФМН?





Тестирование


Задачи
⧆ 13.1. Какое из перечисленных ниже соединений устойчиво к окислению перманганатом калия при комнатной температуре?
1) пентадиен‑1,4;
2) пентадиен‑1,3;
3) пентадиен‑1,2;
4) пентадиен‑2,3.
Поясните свой ответ.
Ответ ↴
пентадиен‑1,3

⧆ 13.2. Протеиногенная аминокислота тирозин (структурная формула приведена ниже) относится к числу ароматических аминокислот. Укажите какие типы сопряжения присутствуют в составе радикала этой аминокислоты. Схематически изобразите конфигурацию радикала, для атомов, имеющих негибридную р‑орбиталь, обозначьте наличие этой орбитали. Используя полученную схему, объясните, как образуется каждый из типов сопряжения в этой системе.


Ответ ↴
π‑π (в бензольном кольце), p‑π (между кольцом и атомом кислорода)

⧆ 13.3. Изобразите структуру каждого из перечисленных ниже соединений:
1) циклогексен;
2) циклогексадиен‑1,3;
3) гексатриен‑1,3,5;
4) циклогексатриен‑1,3,5.
В каждой из приведённых структур обозначьте атомы, имеющие sp²‑гибридизацию. Какая из перечисленных молекул имеет циклическую структуру и плоскую конфигурацию? В каких из перечисленных молекул имеется сопряжение, охватывающее все атомы цикла? В каких из перечисленных молекул количество электронов в сопряжении соответствует правилу Хюккеля? Какая из перечисленных структур и по какой причине является наиболее устойчивой к окислению?
Ответ ↴
циклогексатриен‑1,3,5

⧆ 13.4. Среди указанных ниже структур протеиногенных аминокислот укажите те, которые имеют ароматическую структуру в составе радикала? Поясните свой ответ, используя критерии ароматичности.
  
Ответ ↴
гистидин, триптофан

⧆ 13.5. Исходя из приведённой ниже формулы витамина В₆ (пиридоксаля) докажите, что его структурная основа (пиридин) является ароматической системой.


⧆ 13.6. Имеется ряд соединений:
1)  2)  3)  4)  5) 
Определите наличие или отсутствие ароматичности для каждого соединения.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 78. Задача 5.
Ответ ↴
1) есть; 2) нет; 3) есть; 4) есть; 5) есть

⧆ 13.7. Имеется ряд соединений:
1)  2)  3) 
Для каждого соединения определите вид и знак электронных эффектов заместителей.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 66. Задача 1, с. 68. Задача 2.

⧆ 13.8. В качестве препаратов для проведения химического пилинга в косметологии используются растворы таких соединений как трихлоруксусная (2,2,2‑трихлорэтановая), гликолевая (2‑гидроксиэтановая), пировиноградная (2‑оксопропановая) и салициловая (2‑гидроксибензойная) кислоты. Изобразите структурные формулы названных кислот и покажите для каждого случая вид и знак электронных эффектов заместителей в составе их радикалов.

13.9. Ментол (структурная формула приведена ниже) используется в составе косметических средств для ухода за полостью рта, препаратов для лечения простуды и ряда других лекарственных средств. В приведённой структуре ментола укажите тип и знак электронных эффектов заместителей, связанных с циклом.


⧆ 13.10. Имеются наборы веществ:
1) пропанамин‑1 и пропанол‑1;
2) пропанол‑1 и пропантиол‑1;
3) хлоруксусная кислота, дихлоруксусная кислота и трихлоруксусная кислота;
4) трибромуксусная кислота, трихлоруксусная кислота и трифторуксусная кислота;
5) 2‑хлорбутанол‑1, 3‑хлорбутанол‑1 и 4‑хлорбутанол‑1;
6) пропанол‑1, фенол и 4‑хлорфенол.
Расположите вещества в каждом наборе в порядке возрастания кислотности. Объясните, какие причины вызывают повышение или понижение кислотности в каждом случае.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 81. Задача 1.

⧆ 13.11. Имеются наборы веществ:
1) диэтиламин и диэтиловый эфир;
2) этиламин, 2‑хлорэтиламин и 2,2‑дихлорэтиламин;
3) метиламин, анилин и 4‑хлоранилин.
Расположите вещества в каждом наборе в порядке возрастания основности. Объясните, какие причины вызывают повышение или понижение основности в каждом случае.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 108–111.

13.12. В качестве антидота при отравлениях соединениями тяжёлых металлов используется унитиол. Это соединение представляет собой натриевую соль 2,3‑дисульфанилпропансульфоновой кислоты. Изобразите структуру этого соединения, укажите присутствующие в структуре кислотные центры. Выделите среди них тот, который в первую очередь участвует в образовании солей.
Ответ ↴
сульфанильные группы, сульфогруппа; в образовании солей задействована сульфогруппа

13.13. В ходе первой мировой войны было впервые применено боевое отравляющее вещество люизит, являющееся соединением мышьяка. Тогда же было разработано противоядие, применяемое при отравлении этим веществом. Какое из соединений: 2‑аминоэтанол‑1, 2,3‑дисульфанилпропанол или 2,2,2‑трибромэтанол стало этим противоядием? Обоснуйте свой выбор, посредством сравнения кислотных свойств указанных соединений.
Ответ ↴
2,3‑дисульфанилпропанол (британский антилюизит)

13.14. Определите механизмы реакций, протекающих при взаимодействии следующих веществ:
1) метан и хлор при освещении;
2) пропен и бромоводород;
3) фенол и бром в водном растворе.
Напишите схемы реакций.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 91–93.

13.15. Приведите примеры органических реакций с механизмами SR, SN, SE, AE (без учета молекулярности) с участием органических реагентов радикального, электрофильного и нуклеофильного типов. Для всех случаев укажите в реагирующих молекулах реакционные центры и определите их тип.
Образец решения ↴
Тюкавкина Н.А. Биоорганическая химия, с. 91-99. Романовский И.В. Биоорганическая химия, с. 136-146.

13.16. В ходе реакции алкенов с электрофильными реагентами образуются промежуточные частицы, структура частиц приведена на рисунке ниже.
 
Используя понятие об электронных эффектах заместителей сделайте вывод, какая из приведённых промежуточных частиц более устойчива. Объясните, почему присоединение идёт по правилу Марковникова.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 129–131.



Справочные материалы
      `},v3={title:"Поли- и гетерофункциональные органические соединения",content:`
        
Вопросы для подготовки
14.1. Энантиомерия.

14.1.1. Хиральность.

14.1.2. Асимметрический атом углерода как центр хиральности.

14.1.3. Проекционные формулы Фишера.

14.1.4. Оптическая активность энантиомеров. Рацематы. Мезо-соединения.


14.2. Конфигурации энантиомеров.

14.2.1. Относительная конфигурация.

14.2.2. D,L‑система стереохимической номенклатуры.

14.2.3. Абсолютная конфигурация.

14.2.4. R,S‑система стереохимической номенклатуры.


14.3. Диастереомерия.

14.3.1. σ‑ и π‑Диастереомеры.

14.3.2. цис,транс‑ и E,Z‑системы номенклатуры.


14.4. Свойства энантиомеров и диастереомеров.

14.4.1. Различие свойств энантиомеров и диастереомеров.

14.4.2. Способы разделения рацематов.

14.4.3. Влияние стереоизомерии на биологическую активность.


14.5. Биологически важные поли‑ и гетерофункциональные органические соединения.

14.5.1. Гидроксикислоты: стереоизомерия, биологическая роль отдельных представителей (молочной, яблочной, β‑гидроксимасляной, γ‑гидроксимасляной).

14.5.2. Оксокислоты: кето-енольная таутомерия, биологическая роль отдельных представителей (пировиноградной, ацетоуксусной, щавелевоуксусной, α‑кетоглутаровой).

14.5.3. Ненасыщенные карбоновые кислоты: стереоизомерия, биологическая роль отдельных представителей (акриловая, малеиновая, фумаровая).

14.5.4. Поликарбоновые кислоты: биологическая роль отдельных представителей (малоновая, янтарная, глутаровая, лимонная, изолимонная).

14.5.5. Аминокислоты: классификация, стереоизомерия, кислотно-основные свойства, диполярная структура, образование пептидов.

14.5.6. Гетерофункциональные производные бензола (п‑аминобензойная кислота, п‑аминофенол, салициловая кислота, сульфаниловая кислота): биологическая роль и применение в медицинской практике.

14.5.7. Аминоспирты и аминофенолы: биологическая роль отдельных представителей (коламин, холин, ацетилхолин, дофамин, норадреналин, адреналин).





Контрольные вопросы
14.1. Как можно установить хиральность или ахиральность молекулы при помощи ее модели и модели ее зеркального отражения?

14.2. Можно ли установить наличие хиральности молекулы по структурной формуле?

14.3. Каковы особенности строения отдельных атомов молекулы, обладающей свойством хиральности?

14.4. Каковы правила написания проекционных формул Фишера?

14.5. Чем поляризованный свет отличается от обычного света?

14.6. Что происходит с поляризованным светом при пропускании его через раствор оптически активного вещества?

14.7. Как различаются энантиомеры одного соединения по их способности воздействовать на поляризованный свет?

14.8. Что такое рацематы? Какой оптической активностью обладают рацематы?

14.9. Может ли молекула иметь в своём составе центры хиральности и при этом не обладать оптической активностью?

14.10. Как определяется относительная конфигурация энантиомеров?

14.11. Как определяется старшинство групп по R,S‑системе стереохимической номенклатуры?

14.12. Как определить абсолютную конфигурацию молекулы пользуясь R,S‑системой стереохимической номенклатуры?

14.13. Как связан знак угла вращения плоскости поляризации с относительной и абсолютной конфигурациями для различных молекул?

14.14. Как связано количество стереоизомеров с количеством центров хиральности?

14.15. Как называются стереоизомеры, не являющиеся зеркальным отражением друг друга?

14.16. В каких случаях для обозначения конфигурации π‑диастереоизомеров необходимо вместо цис,транс‑системы пользоваться E,Z‑системой?

14.17. По каким свойствам совпадают и различаются энантиомеры и диастереомеры?

14.18. В чём заключаются механические, биохимические, химические, хроматографические методы разделения энантиомеров?

14.19. По какой причине энантиомеры могут различаться по своей биологической активности?

14.20. Что такое «кетоновые тела»? Какие вещества к ним относятся?

14.21. В чем состоит явление кето-енольной таутомерии? Какая форма молекул называется кетонной, а какая енольной?

14.22. Какие природные соединения существуют в растворе в таутомерных формах?

14.23. Какие из оксокислот имеют биологическое значение? В чем оно заключается?

14.24. Какие реакции приводят к превращению коламина в холин, холина в ацетилхолин, норадреналина в адреналин? Декарбоксилированием какой исходной аминокислоты получается коламин? Какое значение имеет гидролиз ацетилхолина?

14.25. Какова биологическая роль щавелевой, малоновой, янтарной, глутаровой, лимонной, изолимонной, фумаровой, малеиновой кислот?

14.26. Какое применение в медицинской практике находят производные акриловой и метакриловой кислот?

14.27. Какова биологическая роль и применение в медицинской практике п‑аминобензойной кислоты и ее производных?

14.28. Какова биологическая роль и применение в медицинской практике п‑аминофенола и его производных?

14.29. Чем объясняются более сильные кислотные свойства салициловой кислоты по сравнению с фенолом и бензойной кислотой?

14.30. Какова биологическая роль и применение в медицинской практике салициловой кислоты и ее производных?

14.31. Какова биологическая роль и применение в медицинской практике сульфаниловой кислоты и ее производных?

14.32. На чем основано антибактериальное действие производных п‑аминобензолсульфоновой (сульфаниловой) кислоты? Какую роль при этом играет структурное и химическое сходство сульфаниламидных препаратов и п‑аминобензойной кислоты?

14.33. Какова биологическая роль катехоламинов, какие соединения относятся к этой группе? Какова последовательность превращения этих соединений в организме?

14.34. Как классифицируются α‑аминокислоты по природе радикала, по полярности, по заменимости?

14.35. Какое количество хиральных центров могут иметь протеиногенные аминокислоты? Какова относительная конфигурация каждой из этих аминокислот?

14.36. Какая структура α‑аминокислот называется биполярным ионом (цвиттер-ионом)?

14.37. Чем определяется величина изоэлектрической точки аминокислот?

14.38. Фрагменты каких функциональных групп молекул α‑аминокислот участвуют в образовании пептидных связей?

14.39. Как объяснить свойства пептидных связей исходя из их строения?

14.40. Какие процессы происходят в растворах α‑, β‑ и γ‑гидроксикислот при нагревании?

14.41. Какие процессы происходят в растворах α‑, β‑ и γ‑аминокислот при нагревании?

14.42. Аскорбиновая кислота (см. ниже) представляет собой производное лактона. Нагревание (и даже длительное стояние) растворов кислот какого типа приводит к образованию подобных продуктов?






Тестирование


Задачи
⧆ 14.1. Открытоцепная форма глюкозы по правилам заместительной номенклатуры могла бы быть названа 2,3,4,5,6‑пентагидроксигексаналь. Изобразите структурную формулу данного соединения и укажите номера асимметрических атомов. Какое количество оптических изомеров имеет соединение с такой структурой?
Ответ ↴
4 асимметрических атома (2‑й, 3‑й, 4‑й и 5‑й), 16 оптических изомеров

⧆ 14.2. Из имеющегося списка выберите соединения, существующие в виде энантиомеров. Отметьте в структурных формулах таких веществ центры хиральности.
β‑Аланин (3‑аминопропановая кислота); бутанол‑2; молочная (2‑гидроксипропановая) кислота.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 53. Задача 3.

14.3. Определите возможность существования стереоизомеров гидроксикарбоновых кислот: молочной, яблочной, винной, лимонной, изолимонной. Изобразите энантиомеры этих кислот в виде проекционных формул Фишера. Отметьте звездочкой хиральный центр.

⧆ 14.4. Из имеющегося списка выберите хиральные соединения, изобразите пары их энантиомеров в виде проекционных формул Фишера, определите для каждого энантиомера принадлежность к D‑ или L‑ряду.
3‑Гидроксипропаналь; ацетоуксусная кислота (3‑оксобутановая кислота); метионин (2‑амино‑4‑метилтиобутановая кислота); треонин (2‑амино‑3‑гидроксибутановая кислота).
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 56. Задача 4.

⧆ 14.5. Для того из перечисленных ниже соединений, которое обладает оптической активностью, изобразите конфигурации всех возможных оптических изомеров в виде проекционных формул Фишера. Для каждого из изомеров укажите принадлежность к D‑, либо L‑ряду.
1) глицин (2‑аминоэтановая кислота);
2) α‑аланин (2‑аминопропановая кислота);
3) β‑аланин (3‑аминопропановая кислота);
4) пировиноградная кислота (2‑оксопропановая кислота).
Ответ ↴
необходимо изобразить в виде проекционных формул Фишера конфигурации асимметрического атома в D‑ и L‑ изомерах α‑аланина

14.6. Изобразите в виде проекционных формул Фишера все возможные стереоизомеры 2‑амино‑3‑гидроксибутановой кислоты. Выберите среди получившихся стереоизомеров пары энантиомеров и диастереомеров.
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 60. Задача 5.

14.7. Определите, какую конфигурацию согласно R,S‑системы стереохимической номенклатуры имеют L‑серин (L‑2‑амино‑3‑гидроксипропановая кислота) и D‑яблочная кислота (D‑2‑гидроксибутандиовая кислота).
Образец решения ↴
Руководство к лабораторным занятиям по биоорганической химии: Учеб. пособие / Под ред. Н.А. Тюкавкиной. – М.: Медицина, 1999, с. 63. Задача 6.

⧆ 14.8. Фумаровая и малеиновая кислоты, формулы которых приведены ниже, являются конфигурационными изомерами друг друга. При этом фумаровая кислота является одним из важнейших участников обмена веществ, а малеиновая – токсичное соединение. Как называется данный тип изомерии? Назовите каждый из двух изомеров.
Фумаровая кислота:  Малеиновая кислота: 
Ответ ↴
фумаровая кислота является транс‑изомером, а малеиновая – цис‑изомером

14.9. Из имеющегося списка выберите соединения, существующие в виде π‑диастереомеров. Изобразите пары этих π‑диастереомеров, определите для каждого диастереомера принадлежность к E‑ или Z‑ряду.
Бутен‑2‑овая кислота; бутен‑3‑овая кислота; гексен‑3‑овая кислота.
Образец решения ↴
Тюкавкина Н.А., Бауков Ю.И. Биоорганическая химия: Учебник для вузов. – М.: Дрофа, 2004, с. 76–77.

14.10. Определите возможность существования таутомеров оксокарбоновых кислот: пировиноградной, ацетоуксусной, щавелевоуксусной, α‑кетоглутаровой. Изобразите таутомерные формы этих кислот.

⧆ 14.11. Щавелевоуксусная кислота является одним из метаболитов цикла Кребса. Данное соединение может существовать в виде двух таутомерных форм. Запишите структуры этих таутомеров. Укажите название данного вида таутомерии. Какая из таутомерных форм более устойчива? Поясните свой ответ.
Ответ ↴
кето-енольная таутомерия; енольная форма

14.12. Напишите специфические реакции, протекающие при нагревании аминокислот на примере α‑аминобутановой, β‑аминобутановой и γ‑аминобутановой кислот.

14.13. Напишите структуры биогенных аминов: коламина, холина, норадреналина, адреналина. Предположите, декарбоксилированием какой исходной аминокислоты получается коламин. Напишите реакции метилирования коламина и норадреналина; ацетилирования холина; кислотного гидролиза ацетилхолина; образования солянокислых солей адреналина и норадреналина.

14.14. Четырёхчленное β‑лактамное кольцо является важнейшим структурным элементом молекул антибиотиков пенициллинового ряда. Однако структура эта крайне неустойчива, её существование в природе – редкое исключение. Кислоты какого типа способны сформировать β‑лактамное кольцо? Чем объясняется его нестойкость? Какие соединения чаще всего образуются при нагревании растворов кислот данного типа?
Ответ ↴
β‑аминокислоты; большое угловое напряжение; непредельные соединения

14.15. Салициловая и бензойная кислоты находят широкое применение в медицине. При сравнении кислотных свойств этих соединений, можно заметить, что салициловая кислота сильнее бензойной. Можно ли объяснить отличие указанных кислот по силе опираясь только на электронные эффекты заместителей? Какой фактор и каким образом способствует усилению кислотных свойств салициловой кислоты? Запишите структурные формулы указанных кислот, схематически покажите все факторы, влияющие на кислотные свойства указанных соединений.
Ответ ↴
пространственный фактор (взаимное расположение карбоксильной и фенольной групп стабилизирует анион)

14.16. Декарбоксилирование каких аминокислот является частью процесса биосинтеза «гормонов счастья» дофамина и серотонина (см. структурные формулы ниже)? Запишите схемы данных реакций декарбоксилирования.
Дофамин: Серотонин: 
Ответ ↴
тирозин и триптофан

14.17. Дезаминирование какой протеиногенной аминокислоты является частью процесса биосинтеза нейромедиатора γ‑аминомасляной кислоты (ГАМК), структурная формула которой приведена ниже? Запишите схему данной реакции дезаминирования.
γ‑Аминомасляная кислота: 
Ответ ↴
глутаминовая кислота

14.18. Какая аминокислота является предшественницей коламина (2‑аминоэтанола‑1)? Запишите схему реакции декарбоксилирования этой аминокислоты. Запишите также схемы реакций метилирования коламина и ацетилирования холина. Какой нейромедиатор является продуктом последней реакции в получившейся схеме?
Ответ ↴
серин; ацетилхолин



Справочные материалы
      `},w3={title:"Гетероциклические органические соединения",content:`
        Вопросы для подготовки
15.1. Классификация и номенклатура гетероциклических соединений.

15.1.1. Классификация гетероциклических соединений по природе и числу гетероатомов, по размеру цикла, по степени ненасыщенности.

15.1.2. Основы номенклатуры гетероциклических соединений.


15.2. Пятичленные гетероциклические соединения с одним гетероатомом.

15.2.1. Пиррол: строение, ароматичность, кислотные и основные свойства.

15.2.2. Линейные тетрапирролы – билирубин, уробилиноген, уробилин, биливердин, стеркобилиноген, стеркобилин.

15.2.3. Циклические тетрапирролы – порфин и коррин, порфирины, протопорфирины, гем A, гем B, гем C, гем O.

15.2.4. Индол: строение, ароматичность, кислотные и основные свойства. Медико-биологическое значение производных индола (триптофан, серотонин, триптамин, 3‑индолилуксусная кислота).

15.2.5. Фуран и тиофен: строение, ароматичность, медико-биологическое значение производных.


15.3. Пятичленные гетероциклические соединения с двумя гетероатомами.

15.3.1. Имидазол и пиразол: строение, ароматичность, пиррольный и пиридиновый атомы азота, кислотные и основные свойства, амфотерность. Таутомерия.

15.3.2. Медико-биологическое значение производных имидазола (гистидин, гистамин) и пиразола (анальгин, бутадион, антипирин).

15.3.3. Оксазол и тиазол: строение, ароматичность, медико-биологическое значение производных (тиамин).


15.4. Шестичленные азотсодержащие гетероциклические соединения.

15.4.1. Пиридин: строение, ароматичность, основность.

15.4.2. Медико-биологическое значение производных пиридина: N‑метилпиридиний-катион, пиперидин, пиридоксаль, пиридоксин, пиридоксамин, пиридоксальфосфат, пиридоксаминфосфат, никотиновая кислота, изоникотиновая кислота, никотинамид, кордиамин, тубазид, фтивазид, никотин, кониин, анабазин.

15.4.3. Хинолин и изохинолин: строение, ароматичность, основность.

15.4.4. Медико-биологическое значение производных хинолина и изохинолина: 8‑гидроксихинолин, 5‑НОК, энтеросептол, хинин, морфин, папаверин, но-шпа.

15.4.5. Пиридазин, пиримидин, пиразин: строение, ароматичность, основные свойства.

15.4.6. Медико-биологическое значение производных пиримидина: урацил, тимин, цитозин, оротовая кислота, метилтиоурацил, барбитуровая кислота. Кето-енольная, лактим-лактамная и енамино-иминная таутомерия.

15.4.7. Фенотиазин, производные фенотиазина: аминазин.


15.5. Конденсированные гетероциклические соединения.

15.5.1. Пурин и птеридин: строение, ароматичность, кислотные и основные свойства.

15.5.2. Медико-биологическое значение производных пурина: гидроксипуринов (гипоксантин, ксантин, мочевая кислота), аминопуринов (аденин, гуанин), пуриновых алкалоидов (кофеин, теобромин, теофиллин).


15.6. Семичленные азотсодержащие гетероциклические соединения.

15.6.1. Азепины и диазепины: строение, таутомерия, медико-биологическое значение производных.





Контрольные вопросы
15.1. Как нумеруются атомы гетероциклов в зависимости от наличия одного или нескольких гетероатомов?

15.2. В чем заключается метод Ганча – Видмана в систематической номенклатуре моноциклических соединений?

15.3. Что обозначается в номенклатуре конденсированных гетероциклических систем курсивными латинскими буквами?

15.4. Какие отступления от правил использования префиксов и суффиксов используются для производных гетероциклических соединений?

15.5. Какое количество электронов располагается на орбиталях разного типа атома азота в молекуле пиррола?

15.6. В чем заключается свойство соединений, называемое ацидофобностью?

15.7. Какое количество пиррольных и пиридиновых атомов азота имеется в молекуле порфина?

15.8. В чем состоит различие в структуре порфинов, порфиринов и протопорфиринов?

15.9. Какие биологически активные вещества являются производными индола?

15.10. Почему для некоторых производных имидазола и пиразола используется двойная нумерация, когда один и тот же атом обозначается разными локантами, один из которых записывается в скобках?

15.11. Какое количество электронов располагается на орбиталях разного типа атома азота в молекуле пиридина?

15.12. Какие таутомерные формы преобладают у пиримидиновых нуклеиновых оснований?

15.13. Какое применение в медицине имеют структурные аналоги пиримидиновых нуклеиновых оснований?

15.14. Какое производное соединение фенотиазина используется в качестве окислительно-восстановительного индикатора?

15.15. Какие атомы в пурине являются кислотными и основными центрами?

15.16. Возможно ли существование таутомерных форм у гипоксантина? Каково общее количество таутомерных форм для этого соединения?

15.17. Возможно ли существование таутомерных форм у ксантина? Каково общее количество таутомерных форм для этого соединения?

15.18. Возможно ли существование таутомерных форм у мочевой кислоты? Каково общее количество таутомерных форм для этого соединения?

15.19. Возможно ли существование таутомерных форм у аденина? Каково общее количество таутомерных форм для этого соединения?

15.20. Возможно ли существование таутомерных форм у гуанина? Каково общее количество таутомерных форм для этого соединения?

15.21. Возможно ли существование таутомерных форм у кофеина? Каково общее количество таутомерных форм для этого соединения?

15.22. Возможно ли существование таутомерных форм у теобромина? Каково общее количество таутомерных форм для этого соединения?

15.23. Возможно ли существование таутомерных форм у теофиллина? Каково общее количество таутомерных форм для этого соединения?

15.24. Какое применение в медицине имеют структурные аналоги пуриновых нуклеиновых оснований?

15.25. Какие виды изомерии возможны у азепинов и диазепинов?

15.26. Относятся ли азепины и диазепины к ароматическим соединениям? Какие критерии ароматичности определяют это?





Тестирование
Задачи
⧆ 15.1. Объясните, почему пурин является ароматическим соединением. Укажите, атомы азота какого типа (пиррольного или пиридинового) присутствуют в молекуле пурина. Укажите, сколько электронов расположено на каждой орбитали внешнего уровня атома азота каждого типа.
Образец решения ↴
Тюкавкина Н.А. Биоорганическая химия, 2004, с. 309.

⧆ 15.2. В основе структуры гема и хлорофиллов лежит тетрапиррольная структура – порфин. Укажите пиррольные и пиридиновые атомы азота в молекуле порфина. Является ли это соединение ароматическим? Почему?

15.3. Запишите все возможные таутомерные формы цитозина. Обозначьте, какие из таутомерных переходов возможны, если остаток цитозина находится в составе нуклеиновой кислоты (или отдельного нуклеотида). Какая из этих форм содержит иминогруппу? Учитывая, что при гидролизе имина образуется соответствующий кетон, предположите, в какое азотистое основание превращается этот таутомер в случае гидролиза? Смогут ли системы репарации ДНК распознать такую «подмену»?
Ответ ↴
Продуктом гидролиза иминоформы цитозина является урацил; системы репарации ДНК легко распознают такую замену, т.к. «в норме» урацила в ДНК нет, его роль играет тимин

⧆ 15.4. Анальгин, применяемый в медицине в качестве жаропонижающего и болеутоляющего средства, является производным пиразолона‑5 (см. рисунок). Какой гетероцикл является структурной основой молекулы анальгина? Изобразите возможные таутомеры пиразолона‑5.
Пиразолон‑5: 
Ответ ↴
пиразол

15.5. Серотонин является нейромедиатором, играющим важную роль в функционировании головного мозга. Псилоцибин – алкалоид, вырабатываемый некоторыми видами грибов. Продукт гидролиза псилоцибина – псилоцин, способен связываться с серотониновыми рецепторами. Проанализируйте изображённые ниже структуры серотонина и псилоцина. Верно ли утверждение, что сходство структуры определяет сходство биологического действия веществ? В качестве производных какого гетероцикла можно рассматривать оба соединения? Пронумеруйте атомы этого гетероцикла и, используя полученную нумерацию, опишите структурные отличия молекул серотонина и псилоцина.
Серотонин:  Псилоцин: 
Ответ ↴
обе молекулы – производные индола; гидроксогруппа в положении 5 у серотонина и в положении 4 у псилоцина, в молекуле псилоцина аминогруппа полностью метилирована.

15.6. Приведите все таутомерные формы гипоксантина, ксантина, мочевой кислоты, аденина и гуанина для всех видов таутомерии в тех случаях, где таутомерия возможна.
Образец решения ↴
Тюкавкина Н.А. Биоорганическая химия, 2004, с. 310–311.

15.7. Приведите все таутомерные формы кофеина, теобромина и теофиллина для всех видов таутомерии в тех случаях, где таутомерия возможна.
Образец решения ↴
Тюкавкина Н.А. Биоорганическая химия, 2004, с. 487.

⧆ 15.8. Пиперидин – гетероцикл, являющийся элементом структуры алкалоида чёрного перца (пиперина) и ряда других алкалоидов (например, морфина, анабазина, лобелина). Все алкалоиды обладают выраженными основными свойствами. Чем обусловлены основные свойства пиперидина? Как отличается конфигурация цикла у пиперидина от таковой у пиридина? Сравните конфигурации электронных оболочек гетероатомов в этих гетероциклах? Какой из этих гетероциклов пиридин или пиперидин является более сильным основанием?
Ответ ↴
Пиперидин – вторичный амин, аминный азот придаёт молекуле основные свойства; пиперидин является насыщенным неплоским гетероциклом, тогда как пиридин – ароматическим; пиперидин – sp³, пиридин – sp²; пиперидин – более сильное основание, чем пиридин.

⧆ 15.9. Расположите в ряд по нарастанию основных свойств следующие гетероциклы: пиррол, пирролидин, фуран, тиофен. Ориентируясь на имеющиеся структурные формулы, укажите на схемах вид и знак электронных эффектов гетероатомов.
Ответ ↴
тиофен, фуран, пиррол, пирролидин

⧆ 15.10. Расположите в ряд по убыванию кислотных свойств следующие азотсодержащие соединения: пиридин, пиррол, пиримидин. Ответ поясните, используя схемы с указанием вида и знака электронных эффектов гетероатомов.
Ответ ↴
пиррол, пиримидин, пиридин

⧆ 15.11. Гем в составе гемоглобина связан с белковой частью молекулы, посредством гидрофобных взаимодействий его боковых радикалов с белком, а также за счёт донорно-акцепторной связи между ионом железа Fe²⁺ и остатком аминокислоты гистидина. Благодаря каким особенностям строения радикала этой аминокислоты возможно формирование такой связи? Для ответа на вопрос: изобразите структуру радикала, схематически покажите конфигурации атомов, входящих в его состав. Поясните: является ли цикл в составе радикала ароматическим? Какова конфигурация электронной оболочки каждого из гетероатомов, входящих в состав этого цикла?
Ответ ↴
Ароматический гетероцикл содержит пиррольный и пиридиновый атомы азота, на внешней оболочке пиридинового азота содержится неподелённая электронная пара, которая не участвует в формировании сопряжённой системы. Поэтому пиридиновый азот способен выступать в качестве донора электронной пары.

⧆ 15.12. Тиамин (витамин В₁), изображённый на рисунке ниже, содержит в своей структуре две гетероциклических структуры: пиримидин и тиазол. Для каждого из этих циклов укажите нумерацию атомов. Являются ли циклы в составе молекулы ароматическими? Благодаря какой особенности конфигурации атом азота тиазола может участвовать в формировании «мостика», соединяющего два гетероцикла в структуре тиамина? Как влияет наличие упомянутого атома азота на физикохимические свойства молекулы витамина?
Тиамин: 
Ответ ↴
Атом азота, участвующий в формировании «мостика», имеет пиридиновую конфигурацию. Неподелённая электронная пара в его оболочке не участвует в сопряжении. Благодаря этому азот тиазольного кольца может сформировать дополнительную ковалентную связь. В результате молекула тиамина всегда имеет положительно заряженный полюс.

15.13. Витамин В₆ в виде различных форм выполняет ряд важнейших функций в организме. Производными какого гетероциклического соединения является витамин В₆? Изучив представленные структурные формулы, укажите названия различных форм витамина В₆ (пиридоксаминфосфат, пиридоксол, пиридоксаль, пиридоксамин, пиридоксальфосфат) для каждой из формул.
1)  2)  3)  4)  5) 

15.14. Приведите структурные формулы пиридина, пиримидина, пурина. Укажите нумерацию атомов. Являются ли эти соединения ароматическими? Почему? Чем объясняется способность пиридина и пиримидина к реакциям нуклеофильного замещения (SN) и какое из соединений легче вступает в эти реакции? Какие вам известны биологически значимые производные пиридина, пиримидина, пурина?

15.15. Приведите структурные формулы ксантина (2,6‑дигидроксипурина), теофиллина (1,3‑диметилксантина), кофеина (1,3,7‑триметилксантина), мочевой кислоты (2,6,8‑тригидроксипурина) и ее соли – кислого урата аммония. Что вам известно о биологическом значении этих веществ?

15.16. Пиридин реагирует с хлористым водородом с образованием иона пиридиния. Какое из соединений, пиридин или пиридиний хлорид является более реакционноспособным в реакциях нуклеофильного замещения? Почему?

15.17. Имидазол, составляя радикал α‑аминокислоты гистидина, выполняет каталитическую функцию в ферментативных реакциях (остаток гистидина является ключевым в каталитическом центре фермента), выступая донором-акцептором протонов. Какие особенности строения имидазола обуславливают его кислотно-основные свойства?



Справочные материалы
      `},S3={title:"Прикладные аспекты химии в стоматологии",content:`

Вопросы для подготовки
16.1. Гетерогенные системы и гетерогенные процессы в полости рта.


16.1.1. Особенности химического состава костной и зубной тканей, механизмы их минерализации.

16.1.2. Слюна как дисперсная система. Мицеллы слюны и факторы, влияющие на их состав.

16.1.3. Патологические гетерогенные процессы на поверхности зубной эмали.

16.1.4. Важнейшие свойства стоматологических материалов: адгезия, смачивание, адсорбция, когезия.


16.2. Металлы, применяемые в стоматологии.


16.2.1. Общая характеристика металлов. Сплавы, их виды.

16.2.2. Коррозия металлов, ее виды.

16.2.3. Процессы, протекающие на поверхности металла в полости рта при металлопротезировании. Гальваноз.


16.3. Полимерные материалы в стоматологии.


16.3.1. Общая характеристика и классификация полимеров.

16.3.2. Получение полимеров: полимеризация (акриловая кислота и метакриловая кислоты), сополимеризация (винилхлорид и 1,3‑бутадиен, метакрилат и 2‑ацетокси‑1,3‑бутадиен), поликонденсация (фенолформальдегидная смола, бисфенолы). Ингибирование процесса сополимеризации в стоматологии (гидрохинон).

16.3.3. Компоненты полимерных материалов: наполнители, пластификаторы, стабилизаторы, красители, сшивающие агенты.





Контрольные вопросы
16.1. Каковы особенности химического состава костной и зубной тканей?


16.2. Каковы механизмы минерализации костной и зубной тканей?


16.3. Происходит ли минерализация костной зубной тканей в соответствии с правилом Панета – Фаянса?


16.4. Каково строение мицелл слюны, какие факторы влияют на их состав?


16.5. Какие возможны патологические химические процессы на поверхности зубной эмали?


16.6. Каковы уравнения химических реакций (можно ограничиться 1 – 2 уравнениями в ионном виде), происходящих на поверхности зубной эмали при протекании деминерализации?


16.7. Какое значение имеет такой процесс как адгезия в патогенезе и лечении стоматологических заболеваний?


16.8. Какое значение имеет такой процесс как смачивание в патогенезе и лечении стоматологических заболеваний? Приведите примеры процессов смачивания.


16.9. Какое значение имеет такой процесс как адсорбция в патогенезе и лечении стоматологических заболеваний?


16.10. Какое значение имеет такой процесс как когезия в патогенезе и лечении стоматологических заболеваний?


16.11. Какова общая характеристика металлов?


16.12. Что такое сплавы, каковы их виды?


16.13. Какие преимущества имеют сплавы по сравнению с чистыми металлами входящими в их состав?


16.14. Какие металлы и сплавы применяются в стоматологии?


16.15. Что такое коррозия металлов, каковы ее виды?


16.16. Какие процессы, протекают на поверхности металла в полости рта при металлопротезировании?


16.17. Какие факторы следует учитывать при оценке коррозионной устойчивости металлических протезов, находящихся в полости рта?


16.18. Что такое гальваноз?


16.19. Какова общая характеристика полимеров? В чём их отличие от других материалов, применяемых в стоматологии?


16.20. Какова классификация полимеров по способам получения, по структуре макромолекул, по применению в стоматологии?


16.21. Чем отличаются друг от друга такие методы получения полимеров, как полимеризация, сополимеризация и поликонденсация?


16.22. С какой целью в стоматологии применяется гидрохинон в процессе получения полимеров методом сополимеризации?


16.23. Какие химические свойства гидрохинона определяют возможность его применения в качестве ингибитора процесса сополимеризации?


16.24. Какую роль выполняют такие компоненты полимерных стоматологических материалов, как наполнители?


16.25. Какую роль выполняют такие компоненты полимерных стоматологических материалов, как пластификаторы?


16.26. Какие химические свойства веществ определяют возможность их применения в качестве пластификаторов полимерных стоматологических материалов?


16.27. Какую роль выполняют такие компоненты полимерных стоматологических материалов, как стабилизаторы?


16.28. Какие химические свойства веществ определяют возможность их применения в качестве стабилизаторов полимерных стоматологических материалов?


16.29. Какую роль выполняют такие компоненты полимерных стоматологических материалов, как красители?


16.30. Какие химические свойства веществ определяют возможность их применения в качестве красителей полимерных стоматологических материалов?






Тестирование
Задачи
⧆ 16.1. Современные адгезивные системы обеспечивают адгезию к тканям зуба пломбировочных материалов, цементов для фиксации ортопедических конструкций, керамики, благородных и неблагородных сплавов. Вне зависимости от используемой адгезивной системы, первым этапом подготовки эмали является непродолжительная обработка (15 – 40 секунд) её поверхностного слоя кислотой (часто ортофосфорной) с pH = 0,5 – 0,8. Исходя из известных вам фактов о химическом составе эмали зуба и свойствах компонентов адгезивных материалов, объясните необходимость такого алгоритма подготовки эмали. Как ортофосфорная кислота влияет на эмаль зуба? Почему такая обработка существенно улучшает сцепление с пломбировочным материалом?

⧆ 16.2. Какова структура мицеллы золя гидроксиапатита кальция в слюне? Как будет влиять на строение мицеллы изменение pH среды?

⧆ 16.3. Имеются следующие металлы: алюминий, железо, титан, олово, золото, платина. Какие из них могут быть использованы в качестве конструкционных материалов в стоматологии? Рассмотрите возможность протекания электрохимических процессов в нейтральной и кислой средах. Для решения задачи воспользуйтесь необходимыми справочными материалами.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 189. Задача 97.

⧆ 16.4. Возможно ли протекание электрохимической коррозии, если в полости рта на соседних зубах имеются коронки из сплава, содержащего железо, и из сплава, содержащего медь? Рассмотрите варианты протекания возможных электрохимических процессов в нейтральной и кислой средах. Для решения задачи воспользуйтесь необходимыми справочными материалами.
Образец решения ↴
Литвинова Т.Н. Общая химия: задачи с медико-биологической направленностью. – Ростов н/Д: Феникс, 2014, с. 189. Задача 97.

⧆ 16.5. Напишите схемы реакций, приводящих к образованию полимеров, используя для этого следующие вещества: пропен, бутен‑2, бутадиен, хлорэтен. Какие из получившихся полимеров можно использовать для стоматологических целей?

⧆ 16.6. Напишите схемы реакций, приводящих к образованию сополимеров, используя для этого попарно следующие вещества: 2‑метилбутадиен‑1,3, пропен‑2‑нитрил‑1, пропен. Какие из получившихся полимеров можно использовать для стоматологических целей?

⧆ 16.7. Из каких веществ можно получить следующие полимеры: поливинилхлорид, полиэтилентерефталат, полипропилен, полиамид, полиоксиметилен, этиленвинилацетат? Напишите соответствующие схемы химических реакций. Какие из перечисленных полимеров можно использовать для стоматологических целей?



Справочные материалы


1. Способы выражения состава раствора. Массовая доля растворенного вещества в растворе. Молярная концентрация. Молярная концентрация эквивалента. Титр раствора, содержание вещества в мг%, г%. Способы приготовления растворов с точно известной концентрацией. 
Состав раствора может быть выражен как качественно, так и количественно. При качественной оценке применяют такие понятия, как:
Насыщенный - раствор, в котором содержится максимально возможное при данных условиях (t, р) кол-во растворённого в-ва. 
Ненасыщенный - раствор, который содержит в-ва меньше, чем его может раствориться при данных условиях.
Перенасыщенный - раствор содержит по массе больше растворённого в-ва, чем его может раствориться в данных условиях. 
Для приблизительного количественного выражения состава раствора используют:
Концентрированный - раствор, в котором масса растворённого в-ва соизмерима с массой растворителя.
 Разбавленный - масса растворённого в-ва более чем в 10 раз меньше массы растворителя.
Массовая доля растворённого в-ва (w) –безразмерная физич. величина, равная отношению массы растворённого вещества к общей массе раствора. 
Массовая доля:               Молярная:  
Молярная концентрация (См) (молярност) – кол-во в-ва в 1 л. раствора [моль/л]
         
Промилле (мг%) – масса в-ва в мг, приходящаяся на 100 мл раствора.
Грамм-процент (г%)
 
Молярная концентрация эквивалента (С( 1/zx)) (нормальность) – величина, равная отношению кол-ва эквивалента растворённого в-ва к объему раствора (в литрах). [моль/л]
 
Титр (Т) показывает массу в-ва в граммах или миллиграммах 1 мл раствора [г/мл]
 
Способы приготовления растворов с точно известной концентрацией:
1) по точной навеске (р-ры с титром приготовленным), таким способом готовят не все р-ры, только те, у которых соблюдаться требования к исходным свойствам:
	лёгкость получения в чистом виде 
	постоянства состава 
	большая молекулярная масса 
	хорошая растворимость в воде 
	реагируют согласно требованиям к реакциям 
Если требования соблюдаются, навеску берут на аналитических весах (4 знака после запятой)
2) по грубой навеске (р-ры с установленным титром, вторичные стандарты). Навеску берут с точностью два знака. Готовиться р-р, точная конц. устанавливается с помощью другого титранта.
3) с помощью стандарт-титров (фиксаналов). Фиксаналы - запаянные стеклянные ампулы, содержащие определенную массу в-ва. Для приготовления титранта ампулу разбивают над специальной воронкой, содержимое смывают растворителем (водой) в мерную колбу объемом 1 литр. Полученный раствор разбавляют растворителем до метки. 
В-во, которое может рассматриваться как первичный стандарт, должно удовлетворять требованиям:
1) быть химически чистым (содержание примесей не должно превышать 0,05 %);
2) быть устойчивым и сохраняться без изменений как на воздухе, так и в растворе;
3) быть легкодоступным;
4) иметь достаточно высокую эквивалентную массу.
2. Закон эквивалентов. Титрант. Процесс титрования. Точка эквивалентности. Кривые титрования. Виды титрования. Реакции, используемые в титриметрии. Кислотно-основное титрование. Ошибки титриметрического метода анализа.

Закон эквивалентов: в-ва реагируют в количествах, пропорциональных их эквивалентам. n(экв1) = n(экв2)                
Титрант (рабочий, стандартный р-р) – раствор с точно известной концентрацией. 
Титрование – процесс постепенного прибавления титранта к анализируемой пробе до того момента, пока всё определяемое в-во не вступит в реакцию.
Точка эквивалентности - момент титрования, при котором кол-во прибавленного титранта становится химически эквивалентным количеству определяемого вещества.
Кривые титрования — графическое изображение зависимости определяемой в ходе титрования величины от объёма добавленного титранта.  Различают теоретические и экспериментальные кривые титрования. Теоретический расчёт проводится по уравнению реакции и исходным концентрациям реагирующих в-в. Экспериментальные кривые титрования получают при измерении какого-либо свойства системы в ходе титрования в зависимости от объёма титранта. 
Виды титрования:
	прямое – титрант добавляют к анализирующему р-ру до достижения точки эквив. или наоборот
	обратное – к анализируемому р-ру добавляют точно известный избыток титранта с последующим определением его остатка, не вступившего в р-цию, с помощью 2-го титранта
	косвенное – к анализирующему р-ру добавляют избыток реагента, вступающего с ним в р-цию, а затем оттитровывают продукт р-ции.
Реакции, используемые в титриметрии:
1. Кислотно-основные – реакции с переносом протонов Н+ . 
2. ОВР – реакции с переносом электронов. 
3. Комплексообразования – реакции с переносом электронных пар и образованием связей по донорно-акцепторному механизму. 
4. Осаждения – реакции с образованием малорастворимых соединений. 
Кислотно-основное титрование (метод нейтрализации). Метод основан на использовании реакций кислотно-основного взаимодействия. В процессе титрования изменяется pH раствора. Проводят определение кислот, оснований и некоторых солей слабых кислот и слабых оснований. В качестве титрантов используют сильные кислоты и основания.
Ошибки титриметрического метода анализа:
	систематические (неправильное определение конц., неточная мерная посуда, неправильный выбор индикатора, субъективность окраски; неправильная работа с мерной посудой)
	случайные

3. Основные понятия химической термодинамики: система, параметры системы, функции состояния системы, процессы, теплота, работа, внутренняя энергия, энтальпия. 
Система –тело, группа взаимодействующих тел, фактически или мысленно выделяемых из окр. среды.
По однородности	Гомогенная - однородная система, в которой нет частей, различающихся по свойствам и разделенных поверхностями раздела.	Гетерогенная - разнородная сист., состоящая из 2-х или более частей, отличающихся по св-вам, между которыми есть поверхность раздела.
Взаимод. с окр. средой	Изолированная:отсутствие обмена энергией и в-вом с окр. средой.	Закрытая: обмен с окр. средой энергией, обмен в-вом исключен.	Открытая: обмен с окр. средой энергией и в-вом.
Параметры системы – совокуп. фаз и хим. величин характеризующих состояние системы: масса, кол-во в-ва, объем, температура, давление, концентрация (с). 
Экстенсивные - параметры, значения которых пропорциональны числу частиц в системе (масса, объем, кол-во в-ва).  Интенсивные - параметры, значения которых не зависят от числа частиц в системе (температура, давление, конц.).
Функции состояния системы – величина, определяемая параметрами состояния, характеризующая систему и не зависящая от пути достижения данного состояния системой. 
Процесс - переход системы из одного состояния в другое, сопровождающийся необратимым или обратимым изменением хотя бы одного параметра.
	изотермический процесс Т = const, Δ Т = 0 
	изобарический процесс р = const, Δ р = 0
	изохорический процесс ' V = const, Δ V = 0
Работа – форма передачи энергии в виде упорядоченного движения частиц. U-уменьш.
Теплота – форма передачи энергии в виде хаотического движения частиц. U- увелич.
Внутренняя энергия (U) - полная энергия системы, которая равна сумме потенциальной и кинетической энергии всех частиц системы. U=Екин + Епот [кДж/моль]
Энтальпия (Н) – энергия, которой обладает система, находящаяся при постоянном давлении. Равна сумме внутренней и потенциальной энергии системы.             
4. Первый закон термодинамики, его биологическое значение. 
Первый закон термодинамики: Энергия не исчезает и не возникает из ничего, а только превращается из одного вида в другой в строго эквивалентных соотношениях". 
В зависимости от вида системы первый закон термодинамики имеет различные формулировки. 
	В изолированной системе внутренняя энергия постоянна, т. е. Δ U=0 . 
	Если к закрытой системе подвести теплоту Q, то эта энергия расходуется на увеличение внутренней энергии системы Δ U и на совершение системой работы против внешних сил окр. среды: Q = Δ U + А
	В изобарно-изотермических условиях, в которых функционируют живые организмы, совершаемая работа А = p Δ V.
Биологическое значение 1-го закона: в организме человека превращение одного вида энергии в другой сопровождается совершением работы. Например, химическая энергия пищи превращается в механическую энергию, что сопровождается механической работой мышц. Кроме того, химическая энергия превращается в электрическую энергию; при этом выполняется работа нервной ткани. Звуковая энергия трансформируется в электрическую (совершается работа внутреннего уха), световая энергия превращается в электрическую (выполняется работа сетчатки глаза).

 5. Термохимия. Тепловой эффект химической реакции. Закон Гесса и следствия из него. 
Термохимия – раздел химии, изучающий тепловые эффекты хим. процессов. 
	изотермический процесс Т = const, Δ Т = 0 
	изобарический процесс р = const, Δ р = 0
	изохорический процесс ' V = const, Δ V = 0 
Тепловой эффект химической реакции – количество теплоты, выделившееся (или поглотившееся) в ходе реакции и относимое к 1 моль прореагировавшего (или образовавшегося) вещества. Экзотермические реакции идут с выделением теплоты (+Q).  Эндотермические – с поглощением (-Q). 
Закон Гесса: энтальпия реакции, т. е. тепловой эффект реакции, зависит только от природы и состояния исходных в-в и конечных продуктов и НЕ зависит от пути, по которому протекает реакция.
Следствия из закона Гесса: 1) Энтальпия реакции равна разности суммы энтальпий образования всех продуктов реакции и суммы энтальпий образования всех исходных веществ:
  
2) Энтальпия прямой реакции численно равна энтальпии обратной реакции, но с противоположным знаком.  
6. Второй закон термодинамики, его биологическое значение. 
Второй закон термодинамики: "В изолированных системах самопроизвольно могут coвершаться только такие необратимые процессы, при которых энтропия системы возрастает, т. е. Δ S > 0".
Для неизолированных систем нужно учитывать не только изменение энтропии, но и изменение энергии. Поэтому необходимо рассматривать две тенденции, определяющие направление самопроизвольно протекающих процессов: 1) стремление системы к достижению минимума энергии; 2) стремление системы к максимуму энтропии, т. е. к неупорядоченности.
Все процессы, при которых энергия в системе уменьш., а энтропия возраст., идут самопроизвольно.
Биологическое значение: определяет, как живыми системами обеспечивается устойчивость неравновесного термодинамического состояния(ТС). Биологические системы обеспечивают устойчивость неравновесного ТС путем непрерывных энергетических колебаний в виде циклов синтеза и расщепления АТФ, совокупность которых на уровнях клеток, органов, систем и целостных организмов формируется в виде биоритмов.

7. Энтропия, факторы, влияющие на ее величину. Роль энтропийного фактора для характеристики системы и процессов. 
Энтропия (S) - термодинамическая ф-ция, характеризующая меру неупорядоченности системы, т. е. неоднородность расположения и движения ее частиц.  [Дж/(моль·К)]
Факторы, влияющие на ее величину: агрегатное состояния, аллотропная форма, температуры, давление, сложность системы. Роль энтропийного фактора для харак-ки системы и процессов:
	с повышением температуры энтропия возрастает из-за усиления хаотичности частиц в системе если T1 > Т2, то S1 > S2
	повышение давления над веществом приводит к уменьшению энтропии
	процесс растворения твердых веществ всегда связан с увеличением энтропии
	 энтропия в-ва в газообразном состоянии больше, чем в жидком, а в жидком больше, чем в твердом
	энтропия сист. при повыш. давления уменьш., т. к. снижается неупорядоченность движения частиц.
	С увеличением сложности системы энтропия повышается, т.к. возрастает число видов частиц и вариантов их расположения.

8. Энергия Гиббса, значение для термодинамических расчетов. Влияние энтропийного и энтальпийного факторов на возможность самопроизвольного протекания процесса. Критерии самопроизвольности процессов. 
Энергия Гиббса обобщенная термодинамическая функция состояния системы, учитывающая энергетику и неупорядоченность системы при изобарно-изотермических условиях.  
 
  
Влияние энтропийного и энтальпийного факторов на возможность самопроизвольного протекания процесса.
Энтальпийный фактор (ΔН) - характеризует стремление системы к упорядоченности, поскольку процесс сопровождается уменьшением внутренней энергии.
Энтропийный фактор (∆S) - отражает тенденцию к разупорядоченности, т.к. состояние наиболее вероятно.
Критерии самопроизвольности процессов 
1) Энтальпийный фактор ΔH°<0
2) Энтропийный фактор ΔS>0
3) Энергия Гиббса: ΔG°<0
Состояния для самопроизвольного протекания:
ΔH<0, ΔS>0 – р-ция идёт при любой температуре ΔG<0
ΔH>0, ΔS<0 - невозможна ΔG>0
ΔH>0, ΔS>0 – при высокой температуре
ΔH<0, ΔS<0 – при низкой температуре

9. Живой организм как термодинамическая система. Эндергонические и экзергонические реакции. Принцип энергетического сопряжения в живых организмах.
Живой организм как термодинамическая система. Живой организм: открытая гетерогенная  термодинамическая система, находящейся в стационарном состоянии. Для живого организма характерно: постоянство параметров системы; неизменность во времени скоростей притока и удаления в-в и энергии. 
Организм человека является открытой термодинамической системой, т.к. он обменивается с окр. средой в-вами и энергией. Энергия, поступающая в организм с пищей, аккумулирована органических в-вах (белки, жиры и углеводы). Процесс извлечения энергии из этих веществ - энергетический обмен.
Эндергонические р-ции (анаболические) - биохимические реакции, сопровождающиеся увеличением энергии Гиббса (ΔGр>0), и они невозможны без внешнего подвода энергии.
Экзергонические р-ции (катаболические) - биохимические реакции, сопровождающиеся уменьшением энергии Гиббса (ΔGр<0). Могут совершаться самопроизвольно.
 
Принцип энергетического сопряжения в живых организмах заключается в том, что энергия, необходимая для протекания эндергонической реакции, поступает за счет осуществления экзергонической реакции. 

10. Основные понятия химической кинетики. Истинная и средняя скорость химической реакции. Простые и сложные реакции. Гомогенные и гетерогенные реакции. Факторы, определяющие скорость химической реакции. Период полупревращения.
Химическая кинетика – раздел физ. химии, изучающая закономерности протекания хим. р-ций во времени, зависимости этих закономерностей от внешних условий, механизмы хим. превращений.
Истинная скорость хим. р-ции - скорость в данный момент времени (Δt —»0)
Средняя скорость - усредненная скорость за данный промежуток времени.
Каждая хим. р-ция протекает по определенному механизму. Механизм описывает последовательность элементарных актов взаимодействия реагентов, через которые она протекает. Реакции, по их механизму, подразделяются на простые и сложные.
Простые (элементарные) р-ции - реакции, протекающие в одну стадию. Хим. ур-ние полностью отражает, какие частицы и в каких соотношениях непосредственно участвуют в акте р-ции.
Сложные - р-ции, протекающие в несколько стадий, каждая из которых является простой реакцией.
Гомогенные реакции характеризуются отсутствием поверхности раздела между реагентами, поэтому их взаимодействие протекает по всему объему системы.
Гетерогенные реакции хар-ся наличием поверхности раздела между реагентами, где и протекает их взаимодействие. 
Факторы, определяющие скорость химической реакции:
- природы реагирующих веществ – р-ции между молекулами протекают обычно медленно, а между ионами и радикалами - быстро.  С уменьш. энергии активации скорость р-ции увелич.
  - концентрации реагентов скорость р-ции пропорциональна произведению концентраций реагирующих в-в, взятых в степенях, равных их стехиометрическим коэффициентам
- температуры - с увеличением температуры на каждые 10 К скорость хим. р-ции возрастает в 2-4 раза. 
- катализатора – ускоряет р-цию.
Период полупревращения – время, которое необходимо для превращения 1/2 исходного кол-ва в-ва.

11. Зависимость скорости реакции от концентрации реагирующих веществ. Основной закон химической кинетики. Порядок и молекулярность реакции.
Зависимость скорости реакции от концентрации реагирующих в-в. Элементарный акт хим. р-ции осуществляется в момент столкновения реагирующих частиц. Увеличение концентрации реагентов соответствует увеличению числа частиц в объеме, что приводит к более частым их столкновениям и увеличению скорости реакции. Количественная зависимость скорости реакции от концентрации выражается основным постулатом химической кинетики: 
Закон действующих масс (кинетическое ур-ние): "скорость простой гомогенной р-ции при постоянной температуре пропорциональна произведению концентраций реагирующих в-в, возведенных в степени, численно равные их стехиометрическим коэффициентам".
 (для простой р-ции)  
Порядок реакции
  nА , nВ – порядок р-ции по реагентам А и В.
Порядок реакции по реагенту равен показателю степени, в которую надо возвести концентрацию данного реагента в кинетическом ур-нии сложной р-ции, чтобы вычисленная по этому ур-нию скорость была равна скорости, найденной экспериментально.
Р-ции нулевого порядка – скорость не зависит от концентрации реагента и является постоянной; фотохимические, каталитические, размножение в-в на твёрдой поверхности. 
Р-ции первого порядка - скорость пропорциональна концентрации одного реагента. А → продукты. 
Р-ции второго порядка – скорость пропорциональна концентрации в-ва в степени 2. А+В=продукты.
Молекулярность реакции - число молекул, участвующих в одном элементарном акте реакции. (Мономолекулярные, би-, три-).

12. Зависимость скорости реакции от температуры. Правило Вант-Гоффа. Суть теории активных столкновений. Уравнение Аррениуса. Энергия активации реакции. Температурный коэффициент скорости реакции. Энергетический профиль реакции. Понятие о теории переходного состояния.
Влияние температуры на реакцию: Хим. р-ции ускоряются при повышении температуры и замедляются при ее понижении. При повышении температуры скорость реакций увелич. в основном благодаря увеличению числа эффективных соударений, которые могут преодолеть энергетический барьер реакции. Если понижаем температуру – частицы начинают двигаться медленнее, уменьшается число активных частиц и количество эффективных соударений. 
Правило Вант-Гоффа: "с увеличением температуры на каждые 10 К скорость химической реакции возрастает в 2 -4 раза"
   γ – температурный коэф. скорости р-ции     
Для многих р-ций γ = 2-4.
Суть теории активных столкновений (в основе температура, концентрация, катализатор): 
- не каждое столкновение приводит к акту химического взаимодействия; 
-к хим. взаимодействию приводят только те столкновения, в которых участвуют частицы, обладающие энергией, необходимой для взаимодействия (энергией активации); 
- при соударении частицы должны быть определен. образом сориентированы относительно друг друга. 
Энергия активации реакции (Еа) – min энергия взаимодействия частиц, достаточная чтобы все частицы прореагировали. [кДж/моль] Чем больше Еа, тем меньше активных молекул, тем медленнее протекает реакция.
Уравнение Аррениуса   k - константа скорости реакции при температуре Т; А - коэффициент Аррениуса, учитывающий частоту столкновения частиц; е - основание нат. логарифма; Еа - энергия активации реакции, Дж/моль; R = 8,31 Дж/(моль•К) - универсальная газовая постоянная
Энергетический профиль р-ции - представление хим. р-ции или процесса как единого энергетического пути, по мере превращения реагентов в продукты. 
                               теория переходного сост. рис.:   
Понятие о теории переходного состояния: при переходе от реагентов (Re) к продуктам (Pr) реагирующая система преодолевает некоторое состояние, отвечающее максимальной энергии (TS).

13. Катализ. Гомогенный и гетерогенный катализ. Энергетический профиль каталитической реакции. Ферменты как биокатализаторы.
Катализ – изменение скорости хим. р-ции с помощью катализатора.
Гомогенный катализ (катализатор и реакционная смесь находятся в одной фазе). Скорость пропорциональна кол-ву катализатора, хотя его кол-во в системе невелико.
Гетерогенный катализ (катализатор обычно твердый, а реакция протекает на его поверхности). Скорость реакции зависит от площади и состояния поверхности катализатора, т.к. р-ция происходит не на всей поверхности, а только на ее активных центрах. 
Энергетический профиль каталитической реакции - кривая показывает зависимость координаты реакции (насколько прошла реакция) от времени (при постоянном количестве катализатора).
 
Ферменты как биокатализаторы
Реакции в живом организме протекают с участием природных биокатализаторов, называемых ферментами. Среди множества энергетически возможных реакций ферменты избирательно преобразуют реагенты, называемые субстратами, по физиологически полезному пути. Ферменты –белки, они увеличивают скорость протекания химической реакции, однако при этом не расходуются.

14. Химическое равновесие. Константа химического равновесия. Смещение химического равновесия.
Хим. равновесие - состояние обратимого процесса, при котором скорости прямой и обратной реакций равны. Наблюдается не только равенство скоростей взаимно противоположных реакций, но и постоянство равновесных концентраций исходных и конечных веществ.
Константа химического равновесия обратимого процесса - отношение произведения равновесных концентраций конечных продуктов к произведению равновесных концентраций исходных веществу возведенных в степени, равные стехиометрическим коэффициентам при формулах соответств. в-в в ур-нии р-ции.  k - не зависит от концентрации в-в, зависит от природы реагирующих в-в и температуры.
 
Если kравн > 1, то в системе выше содержание конечных продуктов, равновесие смещено вправо. 
Если kравн < 1, то в системе выше содержание исходных веществ, равновесие смещено влево.
Смещение химического равновесия. Влияние изменения условий на хим. равновесие определяется принципом Ле Шателье: "если на систему, находящуюся в состоянии хим. равновесия, оказывать воздействие путем изменения концентрации реагентов, давления или температуры в системе, то равновесие всегда смещается в направлении той реакции, протекание которой ослабляет это воздействие".
Увеличение концентрации исходных в-в вызывает смещение равновесия в сторону образования конечных продуктов. Повышение давления в системе смещает хим. равновесие в направлении реакции, идущей с образованием меньшего числа молей газообразных в-в, т. е. в сторону уменьшения объема. Повышение температуры вызывает смещение равновесия в сторону эндотермической реакции (-Q).

15. Вода как универсальный биологический растворитель. Идеальный раствор. Термодинамика растворения.
- высокая диэлектрическая проницаемость (ε = 78,5); 
- способность проявлять протонодонорные и протоноакцепторные свойства, т. к. вода – амфолит (диссоциирует и как кислота, и как основание);
- способность проявлять электронодонорные и электроноакцепторные свойства; 
- наличие внутренних пустот в жидкой воде из-за ажурности ее структуры.
Геометрически молекула воды - угловая система, в центре которой находится атом кислорода с «sp3-гибридизацией валентных атомных орбиталей. В двух вершинах тетраэдра находятся атомы водорода, а к двум другим направлены атомные орбитали атома кислорода с неподеленными электронными парами. За счет двух атомов водорода, несущих частично "+" заряд, и двух неподелённых электронных пар атома кислорода каждая молекула воды может образовывать 4 водородные связи с соседними молекулами воды.
 
Идеальный раствор – р-р, в котором не происходят хим. р-ции между компонентами, а силы межмолек. взаимод. между компонентами одинаковы. Образование таких р-ров не сопровождается тепловым эффектом. Каждый компонент ведёт себя независимо от других компонентов.
Термодинамика растворения:
С позиции термодинамики в-во может растворяться в жидкости самопроизвольно при р, Т=const, если в результате этого процесса энергия Гиббса системы уменьшается, т. е. ΔGраств <0. 
Изменение энергии Гиббса в процессе растворения в-ва:  
Процесс сольватации молекул или ионов всегда экзотермический (ΔНсольв < 0 ), т.к. сопровождается образованием связей. Процесс разрушения структуры вещества - эндотермический (ΔНструкт > 0).
 
При растворении твердых веществ с молекулярной кристаллической решеткой или жидкостей, где межмолекулярные связи не очень прочные, обычно |ΔНструкт| < |ΔНсольв|
При растворении газов ΔНструкт=0, поэтому процесс растворения почти всегда экзотермический.
При растворении жидких и твердых веществ обычно происходит их переход из более упорядоченного в менее упорядоченное состояние, т. е. энтропия системы возрастает (ΔSраств > 0). Энтропийный фактор, особенно при повышенных температурах, будет способствовать растворению.
При растворении газов в жидкости происходит переход в более упорядоченное состояние, т. е. энтропия системы уменьшается (ΔSраств < 0).
16. Коллигативные свойства растворов (определение, примеры). 
Коллигативные свойства растворов – это свойства растворов, которые не зависят от природы частиц растворённого вещества, а зависят только от концентрации частиц в растворе:
- скорость диффузии
-осмотическое давление
-давление насыщенного пара растворителя над раствором
-температура кристаллизации раствора
-температура кипения раствора

17. Понижение давления насыщенного пара над раствором в сравнении с растворителем (I закон Рауля). 
При постоянной температуре относительное понижение давления насыщенного пара растворителя над идеальным раствором нелетучего вещества равно молярной доле растворённого вещества:
 

18. Повышение температуры кипения и понижение температуры кристаллизации растворов по сравнению с растворителем (II закон Рауля). Физический смысл криоскопической и эбулиоскопической констант. Применение криоскопии и эбулиоскопии в медико-биологических исследованиях. 
Повышение температуры кипения или понижение температуры замерзания идеальных растворов нелетучих веществ прямо пропорционально молярной концентрации раствора
 
Физический смысл криоскопической и эбулиоскопической константы, заключается в понижении температуры кристаллизации и повышения температуры кипения раствора с концентрацией 1 моль/кг.
Определение понижения температуры замерзания или кипения раствора позволяет решать целый ряд вопросов, касающихся свойств данного раствора и растворенного вещества. Метод исследования, основанный на измерении температуры замерзания растворов, называется криоскопическим методом или криоскопией, а метод, основанный на измерении температуры кипения растворов получил название эбуллископического метода или эбуллиоскопии.
Криоскопический и эбуллиоскопические методы часто используется для определения молекулярной массы вещества, концентраций.
19. Диффузия и осмос. Понятие о полупроницаемых мембранах. Эндо- и экзоосмос.
Диффузия – это процесс взаимного проникновения молекул или атомов одного вещества между молекулами или атомами другого вещества, приводящий к самопроизвольному выравниванию их концентраций по всему занимаемому объёму. Перенос вещества из области высокой концентрации в область с низкой концентрацией.
Осмос – это самопроизвольная диффузия молекул растворителя сквозь мембрану с избирательной проницаемостью.
Полупроницаемая мембрана — мембрана, разделяющая две жидкие или газообразные фазы, обеспечивающая под действием движущей силы выборочный перенос компонентов этих фаз.
Эндоосмос- это движение растворителя в осмотическую ячейку из окружающей среды. Вода переходит из раствора внутрь клетки, процесс сопровождается увеличением клетки в объеме, что может завершиться разрывом ее оболочки — цитолизом.
 
Экзоосмос-это движение растворителя в окружающую среду из осмотической ячейки. 
 
20. Осмотическое давление, закон Вант-Гоффа. Биологическая роль осмоса. Осмотическое давление крови. Осмолярность и осмоляльность крови. Осмотический «шок» и осмотический «конфликт». 
Осмотическое давление (π) – это избыточное гидростатическое давление, возникающее в результате осмоса, и приводящее к выравниванию скоростей взаимного проникновения молекул растворителя сквозь мембрану с избирательной проницаемостью. 
Подчиняется объединённому газовому закону Менделеева-Клайперона: π=CRT
Закон Вант-Гоффа:
Осмотическое давление раствора численно равно тому газовому давлению, которое имело бы растворённое вещество, будучи переведённое в газообразное состояние в том же объёме и при той же температуре.
 
Биологическая роль осмоса:
Осмос является одной из причин, поступления воды и растворённых в ней питательных веществ из почвы по стеблю или стволу растения к листьям, т.к. π (почвы) < π (корней) < π (листьев).
Постоянство осмотического давления во многих физиологических системах у животных и человека. Прежде всего это система кровообращения. Постоянство осмотического давления – изоосмия.
Осмотическое давление человека постоянно и составляет 740-780кПа. Постоянство осмотического давления в крови ригулируется выделением паров воды путём дыхания, работой почек, выделения пота и т.д.
Осмотическое давление крови, создаваемое за счёт белков плазмы крови называется онкотическим давлением. Онкотическое давление крови составляет 0,5% от всего осмотического давления плазмы крови. Его величина соизмерима с гидростатическим давлением в кровеносной системе.
Осмолярность крови – это показатель соотношения всех активных микроэлементов, которые определяются на один литр крови. (осм/л).
Осмоляльность – концентрация тех же частиц, растворенных в килограмме воды, выражающаяся в осмолях на килограмм (осм/кг).
Осмотический «шок» и осмотический «конфликт»:
Осмотический шок неповрежденных клеток возникает при переносе их в гипертонический (>0,9% NaCl) или гипотонический (<0,9% NaCl) раствор, он вызывает разрушение клеток.
Осмотический конфликт – пребывание клеток в воде, которая либо неестественно богата минеральными веществами, либо, наоборот, неестественно бедна ими.
21. Особенности коллигативных свойств растворов электролитов. Изотонический коэффициент. 
Коллигативные свойства растворов электролитов:
	Относительное понижение давления насыщенного пара растворителя над раствором:

 
	Понижение температуры кристаллизации раствора

 
	Повышение температуры кипения раствора

 
	Осмотическое давление раствора

 
 Изотонический коэффициент-(i) — безразмерный параметр, характеризующий поведение вещества в растворе. Он         численно равен отношению значения некоторого коллигативного свойства раствора данного   вещества и значения того же коллигативного свойства неэлектролита той же       концентрации при неизменных прочих параметрах системы.
 

22. Изотонические, гипертонические, гипотонические растворы, применение этих растворов в медицине.
Изотонический раствор — раствор, имеющий осмотическое давление, равное внутриклеточному. Клетка, погружённая в изотонический раствор, находится в равновесном состоянии — молекулы воды диффундируют через клеточную мембрану в равном количестве внутрь и наружу, не накапливаясь и не теряясь клеткой.
Гипертонический раствор – это раствор с высокой концентрацией растворенных веществ и высоким осмотическим давлением. Клетка, погружённая в гипертонический раствор, находится в «сморщенном» состоянии, молекулы воды диффундируют из клеточной мембраны.
Гипотонический раствор – это раствор с низкой концентрацией растворенных в воде соединений и низким осмотическим давлением. В растворах с очень низким осмотическим давлением вода поступает внутрь клетки, из-за чего последняя разбухает, оболочка лопается и клетка гибнет.
Применение растворов в медицине:
 Изотонические растворы применяются в качестве дезинтоксикационного средства, для коррекции состояния при обезвоживании, для растворения других лекарственных препаратов, реже как заменитель крови или для промывания контактных линз.
Гипертонический раствор применяется при легочном, желудочном и кишечном кровотечении, в качестве вспомогательного осмотического диуретика при проведении форсированного диуреза, обезвоживании, отравлении нитратом серебра, для обработки гнойных ран (местно), запоре (ректально).
Для ликвидации обезвоживания применяют только гипотонические растворы хлорида натрия, иногда в течение нескольких дней до восстановления сознания.
23. Электролиты и неэлектролиты. Теория электролитической диссоциации. Сильные и слабые электролиты.
Электролиты- это вещества растворы и расплавы которых содержат подвижные ионы и проводят электрический ток. Ионы в составе растворов возникают вследствие диссоциации.
Неэлектролиты -  вещества, растворы или расплавы которых не проводят электрический ток. К ним относятся: кислород, водород, многие органические вещества (сахара, эфиры, бензол и др.).
Теория электролитической диссоциации (основные положения):
	Электролиты при растворении в воде распадаются (диссоциируют) на ионы. Ион – одноатомная или многоатомная электрически заряженная частица.
	Под действием электрического тока ионы приобретают направленное движение: положительно заряженные ионы движутся к катоду и называются катионами, отрицательно заряженные движутся к аноду и называются анионами.
	Диссоциация – это обратимый процесс: параллельно с распадом молекул на ионы (диссоциация) протекает процесс соединения ионов в молекулы (ассоциация).
	Степень диссоциации зависит от природы электролита и растворителя.
Сильные электролиты – это электролиты, которые диссоциируют практически полностью и необратимо.  

Слабые электролиты – это электролиты, которые диссоциируют обратимо, доля диссоциированных молекул исчезающе мала. 
24. Свойства растворов сильных электролитов. Активность и коэффициент активности. Ионная сила раствора.
Свойства растворов сильных электролитов:
1.В водных растворах сильные электролиты полностью диссоциированы, причём гидратированные ионы, образующиеся при их диссоциации, обычно не ассоциированы в молекулы. Поэтому в уравнении диссоциации сильных электролитов ставится знак обратимости.
2.В концентрированных растворах сильных электролитов ионы расположены близко друг к другу и поэтому сильно взаимодействуют между собой. Количественно влияние межионного взаимодействия характеризуется активностью. 
3.При увеличении концентрации число ионов в растворе увеличивается, сила взаимодействия их между собой и с растворителем возрастает, что приводит к снижению подвижности ионов и создаёт эффект уменьшения их концентрации.
Активность(а) – эффективная концентрация с учётом электростатического взаимодействия между ионами в растворе. Активность отличается от концентрации на некоторую величину.
 
Коэффициент активности – отношение активности к концентрации вещества в растворе.
  измеряется в г-ион/л
Ионная сила раствора(I) – мера интенсивности электрического поля, создаваемого ионами в растворе. Полусумма произведений из концентрации всех ионов в растворе на квадрат их заряда.
 
25. Свойства растворов слабых электролитов. Степень диссоциации. Константа диссоциации. Закон разбавления Оствальда.
Свойства растворов слабых электролитов:
Слабые электролиты характеризуются степенью ионизации. Электролитическая диссоциация — обратимый процесс, который количественно можно описать с помощью константы равновесия.
Рассмотрим ионизацию слабой кислоты НА в упрощенном виде, не принимая во внимание участие в этом процессе воды: 
 
Константа равновесия этого процесса, выраженная через концентрации, имеет следующий вид:
 
Степень диссоциации ( α ) – это величина, представляющая собой отношение количества вещества электролита, распавшегося на ионы(n), к общему количеству растворённого электролита(N).
 
Константа диссоциации- вид константы равновесия, которая характеризует склонность объекта диссоциировать обратимым образом на частицы.
 
Закон разбавления Оствальда:
Степень диссоциации слабого электролита при разбавлении раствора увеличивается обратно пропорционально корню квадратному из его молярной концентрации.
  
26. Вода как слабый электролит. Автопротолиз воды. Ионное произведение воды.
Вода очень слабый электролит, диссоциирующий по схеме:
 
Константа (при постоянной температуре), характеризующая свойства воды и любых водных растворов и равная произведению концентраций ионов водорода и гидроксид-ионов называется ионным произведением воды.
Автопротолиз – обратимый процесс образования равного числа катионов и анионов из незаряженных молекул жидкого индивидуального вещества за счет передачи протона от одной молекулы к другой.
H2O + H2O= H3O+ + OH–
Это равновесие называется равновесием автопротолиза воды.
27. Протолитическая теория кислот и оснований. Сила кислот и оснований, водородный показатель (pH). Кислотно-основные индикаторы. pH биологических жидкостей.
Кислоты – это молекулы или ионы, способные быть в данной реакции донорами протонов.Основания- это молекулы или ионы, присоединяющие протоны (акцепторы).
Сила кислоты – характеристика кислоты, показывающая, насколько легко кислота отдает протоны молекулам данного растворителя.
 Сила основания – характеристика основания, показывающая, насколько прочно основание связывает протоны, оторванные от молекул данного растворителя.
pH - это водородный показатель, характеризующий концентрацию свободных ионов водорода в воде. На практике реакцию водной среды принято характеризовать не концентрациями ионов водорода и годроксид-ионов, а водородным pH и гидроксильным pOH показателями.
 
Из ионного произведения воды: pH+pOH=14.
pH биологических жидкостей
 
Кислотно-осно́вные индикаторы (pH-индикаторы) — органические соединения, способные изменять цвет в растворе при изменении кислотности (pH).
 
Поведение индикатора как слабого электролита подчиняется закономерности влияния общего иона водорода. Чем больше концентрация водородных ионов, тем равновесие больше смещено в направлении образования молекул Hind, и раствор имеет окраску, соответствующую нейтральной форме индикатора. С уменьшением концентрации ионов водорода увеличивается концентрация ионизированной формы, и раствор приобретает окраску ионизированной формы ind-.
28. Гидролиз солей, основные типы гидролиза. Степень гидролиза. Константа гидролиза.
Гидролиз солей – это химическое взаимодействие ионов соли с молекулами воды, приводящее к образованию слабого электролита.
Если рассматривать соль как продукт нейтрализации основания кислотой, то можно разделить соли на 4 группы, для каждой из которых гидролиз будет протекать по-своему.
	Сильная кислота + сильное основание
Гидролиз невозможен
	Сильная кислота + слабое основание 
Гидролиз по катиону (в реакцию с водой вступает только катион)
	Слабая кислота + сильное основание 
Гидролиз по аниону (в реакцию с водой вступает только анион)
	Слабая кислота + слабое основание 
Совместный гидролиз (в реакцию с водой вступает и катион, и анион)
Степень гидролиза(h) – это отношение части соли, подвергающейся гидролизу, к общей концентрации её ионов в растворе.
Расчёт степеней гидролиза при различных типах гидролиза:
	Сильная кислота + слабое основание (по катиону)
 
	Слабая кислота + сильное основание (по аниону)
 
	Слабая кислота + слабое основание (по катиону и аниону)
 
Константа гидролиза(Кr) – это отношение стехиометрического произведения концентраций продуктов гидролиза, к концентрации непрогидролизовавшихся ионов соли.
Расчёты константы гидролиза при различных типах гидролиза:
	Сильная кислота + слабое основание (по катиону)

 
	Слабая кислота + сильное основание (по аниону)
 
	Слабая кислота + слабое основание (по катиону и аниону)
 
29. Состав и классификация буферных систем. Механизм действия буферных систем.
Буферные системы – совокупность нескольких веществ в растворе, сообщающих ему буферные свойства, т. е. способность противостоять изменению активной реакции среды (pH) при разбавлении, концентрировании раствора или при добавлении к нему небольших количеств сильной кислоты или щёлочи.
Классификация буферных систем
1. Кислотные. Состоят из слабой кислоты и соли этой кислоты. Например, ацетатная буферная система (CH3COOH+ СН3СООNa ), гидрокарбонатная буферная система (H2CO3 +NaHCO3 ).
2. Основные. Состоят из слабого основания и его соли. Например, аммиачная буферная система (NH3H2O + NH4Cl).
3. Солевые. Состоят из кислой и средней соли или двух кислых солей. Например, карбонатная буферная система (NaHCO3+Na2CO3 ), фосфатная буферная система (КН2PO4 + К2НPO4).
4. Аминокислотные и белковые. Если суммарный заряд молекулы аминокислоты или белка равен нулю (изоэлектрическое состояние), то растворы этих соединений не являются буферными. Их буферное действие начинает проявляться тогда, когда к ним добавляют некоторое количество кислоты или щелочи.
Механизм действия буферных систем:
1. Разбавление. При разбавлении водой происходит уменьшение концентрации обоих компонентов в буферной системе в одинаковой степени, поэтому величина их соотношения не изменится. рК(кислоты) и рК(основания) являются постоянными при данной температуре и не зависят от разбавления.
2.Добавление кислот и оснований. При добавлении небольших количеств сильных кислот или оснований рН буферных систем изменяется незначительно. 
30. Вывод уравнения Гендерсона–Гассельбаха для расчета значений рН буферных растворов. 
Уравнение показывает как зависит кислотно-основное равновесие буферного раствора от свойств компонентов кислотно-основной буферной системы и от количественного соотношения этих компонентов в растворе. Показателем кислотно-основного равновесия в растворе является водородный показатель,  pH.  Свойство кислоты (её способность распадаться на ионы), как составляющей буферной системы, характеризуется значением константы диссоциации кислоты,  Ka.  (или в логарифмической форме  pKa = – lgK). Количественая структура (состав) буферной системы может быть оценена в виде отношения соль/кислота (эквиваленты, эквивалентная масса).       Уравнение Гендерсона-Гассельбаха выглядит следующим образом:
 pH = pKa + lg (соль/кислота). 
С помощью этого уравнения можно оценить любую из его переменных, если известны две другие.
31. Буферное действие. Зона буферного действия. Буферная ёмкость. Факторы, определяющие буферную ёмкость. 
Способность некоторых растворов сохранять неизменной концентрацию ионов водорода получила название буферного действия 
Зона буферного действия – интервал pH, в котором буферная система проявляет свои буферные свойства. Определяется силовым показателем ионизации кислоты (основания) ±1 ед.
Буферная емкость (В) - это число молей эквивалента сильной кислоты или щелочи, которое необходимо добавить к 1 л буферного раствора, чтобы сместить его рН на единицу.
Факторы, влияющие на В:
1. Концентрация компонентов БС: чем она больше, тем больше кол-ва сильной кислоты или щелочи может быть нейтрализовано, тем больше В.
2. Отношение концентраций компонентов: чем оно меньше (близко к 1), тем выше будет буферная ёмкость
3. рН БР, которое, как следует из уравнения Г-Г, зависит от этого показателя.
Если концентрации компонентов одинаковы, то их отношение равно 1, тк. Lg=0, то уравнение Г-Г примет следующий вид:
для КБС: рН=рКк,
для ОБС: рН=14-рКо.
Именно при этих значениях рН, В будет максимальной.
32. Буферные системы организма: гидрокарбонатная, гидрофосфатная, гемоглобиновая, белковая. Механизм их действия. Сравнительная величина емкости буферных систем организма. 
Буферные системы крови представлены буферными системами плазмы крови и буферными системами эритроцитов. Буферные системы плазмы – гидрокарбонатная, белковая и фосфатная. На их долю приходится  44% буферной емкости крови. Буферные системы эритроцитов – гемоглобиновая, гидрокарбонатная, система органических фосфатов (фосфатная). На их долю приходится  56% буферной емкости крови.
Гидрокарбонатная буферная система -активная реакция плазмы артериальной крови у здоровых людей соответствует рН= 7,40.
Снижение соотношения [НС] / [СО2] < 20 является причиной ацидоза. 
Повышение соотношения [НС] / [СО2]> 20 приводит к алкалозу.
Так как в плазме крови основную роль в связывании ионов Н+ играет гидрокарбонат – анион, его концентрация в плазме обусловливает резервную щелочность крови.
Фосфатная буферная система содержится как в крови, так и в клеточной жидкости других тканей, особенно в почках.
В клетках она представлена КН2РО4 и К2НРО4. В плазме крови и межклеточном пространстве NaH2PO4 и Na2HPO4. Основную роль в механизме действия этой системы играет ион  :
 ⇄Н+ +  
кислота сопр.основание
Увеличение концентрации Н+ приводит к сдвигу реакции влево, т.е. к образованию кислоты:  + Н+ ⇄  
основание сопр. кислота
Белковые буферные системы являются амфолитными, т.к. в их состав входят  – аминокислоты, содержащие группы с кислотными свойствами (–СООН и –  ) и основными свойствами (–СОО– и –NH2). Механизм действия такой буферной системы можно представить следующим образом:
кислотная буферная система
а) H3N+ – R – COOH + OH– ⇄H3N+ – R – COO– + H2O
белок–кислота
б) H3N+ – R – COO– + H+ ⇄H3N+ – R – COOН
соль белка–кислоты
(сопряженное основание)
основная буферная система
а) H2N – R – COO– + Н+ ⇄H3N+ – R – COO–
белок–основание
б) H3N+ – R – COO– + ОН– ⇄H2N – R – COO– + Н2О
соль белка–основания
(сопряженная кислота)
33. Совместное действие буферных систем организма. Особенности действия гемоглобиновой буферной системы. Понятие о кислотно-щелочном балансе, ацидозе и алкалозе.
Механизм регуляции кислотно-основного равновесия крови в целостном организме заключается в совместном действии внешнего дыхания, кровообращения, выделения и буферных систем.
Гемоглобиновая буферная система в организме эффективно функционирует только в сочетании с гидрокарбонатной системой. Поскольку аэробные процессы обмена веществ в эритроцитах почти не происходят, они вырабатывают относительно мало СО2. Из плазмы крови в соответствии с концентрационным градиентом СО2 диффундирует в эритроциты, где ферменты катализируют ее взаимодействие с водой, приводящее к образованию угольной кислоты. По мере диссоциации Н2СО3 освобождающиеся ионы Н+ в основном взаимодействуют с гемоглобином как буферной системой. В эритроцитах увеличивается концентрация гидрокарбонат-ионов, которые диффундируют во внеклеточную жидкость в соответствии с концентрационным градиентом.
Кислотно-щелочное равновесие в крови является жизненно важным параметром, нормальные значения которого составляют 7,35 – 7,45 по шкале рН. Отклонение рН ниже 7,35 свидетельствует об ацидозе. При смещении рН выше 7,45 возникает алкалоз. 
Ацидоз: слишком высокое содержание кислоты в крови (или слишком низкое содержание щелочи), которое приводит к снижению уровня рН крови.
Алкалоз: слишком высокое содержание щелочи в крови (или слишком низкое содержание кислоты), которое приводит к повышению уровня рН крови.
34. Растворы насыщенные, ненасыщенные, пересыщенные. Гетерогенное равновесие. Константа растворимости малорастворимого электролита, её связь с растворимостью вещества.
Гетерогенные равновесия – это равновесия, которые устанавливаются в гетерогенных системах, т.е. в системах, которые состоят из нескольких фаз. Примеры: газ-жидкость, твердое тело жидкость твердое тело-газ.
Раствор, находящийся в равновесии с твердой фазой, называют насыщенным. Растворы с меньшей концентрацией, чем в насыщенном, называются ненасыщенными, с большей-пересыщенными. 
Константа растворимости KS (или произведение растворимости ПР) - произведение концентраций ионов в насыщенном растворе малорастворимого электролита - есть величина постоянная и зависит лишь от температуры. 
По величине Ks ряда соединений можно судить об их относительной растворимости: чем меньше Ks, тем меньше растворимость, и чем больше константа растворимости, тем больше растворимость вещества.
35. Условия образования и растворения осадков. Конкуренция за общий ион. Влияние солей на растворимость малорастворимого вещества. Влияние pH среды на гетерогенные равновесия.
Осадок выпадает в том случае, если произведение концентраций ионов, образующих электролит, в степенях, равных стехиометрическим коэффициентам, будет больше константы растворимости. 
 Пс – произведение растворимости Кs-константа растворимости
Увеличение растворимости малорастворимого электролита в присутствии солей, а именно они создают ионную силу, называется солевым эффектом. Солевой эффект может наблюдаться только в том случае, если соли не содержат одноименных с данным электролитом ионов. Следовательно, присутствие одноименного иона понижает растворимость малорастворимого электролита.
Если соединения различаются константами растворимости As(MA) > А^(МВ), то при равных концентрациях А' и В“ преимущественно будет образовываться менее растворимое соединение (МВ). Таким образом, конкуренцию за общий катион выигрывает тот анион, который с этим катионом образует менее растворимое соединение. Аналогично протекают конкурирующие процессы за общий анион.
36. Гетерогенные равновесия в живом организме. Кальциевый буфер. Изоморфизм.
В организме человека образование костной ткани это наиболее важный гетерогенный процесс с участием неорганических соединений. Основным минеральным компонентом костной ткани является гидроксифосфат кальция Ca5(PO4)3OH. Часть ионов Ca2+ замещена ионами Mg2+, а очень незначительная часть ионов OH– замещена ионами фтора, которые повышают прочность кости. Изоморфизм- замещение ионов ее компонентов в узлах кристаллической решетки на другие компоненты.
при ↑ Са2+ в плазме крови - сдвиг равновесия, приводящий к отложению кальция в костной ткани. при ↓ Са2+ также сдвиг равновесия, но с растворением минеральных компонентов костной ткани (при рахите). 
37. Патологические гетерогенные процессы. Процессы, лежащие в основе образования конкрементов. Подходы к коррекции нарушений гетерогенных равновесий и процессов. 
Паталогические гетерогенные процессы: Образование карбоната кальция СаСО3 является причиной атеросклеротического кальциноза. Бериллиевый рахит (бериллиоз) -вытеснение ионов Са2+ ионами Ве2+ из костей и их размягчение вследствие меньшего радиуса иона Ве2+. Стронциевый рахит - замещение ионов Са2+ ионами стронция в костях. Вследствие большего радиуса иона Sr2+ происходит ломкость костей. 
Развитию мочекаменной болезни способствует образование оксалата кальция СаС2О4 моно – или дигидрата, фосфата аммония – магния NH4MgPO4, карбонатфосфата кальция моногидрата Са10(РО4)6СО3Н2О, мочевой кислоты и ее солей. 
В основе образования конкрементов лежит:
При длительном застое желчи в почечных канальцах холестериновые пигменты выпадают в осадок, что приводит к образованию песка, частицы которого со временем увеличиваются в размерах и объединяются в конкременты.
Реакции осаждения используют при отравлении щавелевой кислотой или ее солями, вводя в качестве антидота раствор СаС12, при отравлении солями бария промывают желудок раствором MgSO4. Реакции растворения осадков применяют реже. Например, лечение подагры и мочекаменной болезни проводят солями лимонной кислоты, виннокаменной кислоты и ее солями, солями лития. 
38. Комплексные соединения, их строение, классификация и номенклатура. Координационная теория Вернера. Дентатность лигандов. Природа химической связи в комплексных соединениях. Способность атомов различных элементов к комплексообразованию. 
Комплексными соединениями называются соединения, существующие как в кристаллическом состоянии, так и в растворе, особенностью которых является наличие центрального атома, окруженного лигандами.
Классификация комплексных соединений проводится по различным признакам.
По заряду комплексного иона различают:
катионные [Cu(NH3)4]2
анионные [Co(NO3)6]3-
нейтральные [Pt(NH3)Cl2]0
По характеру лигандов различают:
акво- [Сu(H2O)4]SO4
аммино-[Cu(NH3)4]SO4
ацидо- К2[Cu(Cl)4]
гидроксо-K2[Cu(OH)4]
Строение: Внутренняя сфера состоит из центрального атома или иона (комплексообразователь) и частиц, окружающих комплексообразователь (лиганды). В формуле вещества комплекс выделяется квадратными скобками. Во внешнюю сферу входят обычные ионы, которые компенсируют общий заряд комплекса. Если комплекс имеет нулевой заряд, то внешняя сфера в соединении отсутствует.
При составлении названия комплексных соединений руководствуются следующими правилами число лигандов, названия лигандов, центральный атом. Сначала называют внутреннюю сферу. Составные части её называют в последовательности: лиганды анионы, лиганды – молекулы, комплексообразователь. К названиям лигандов – ионов добавляют окончание «о». Нейтральные молекулы сохраняют свои названия, за исключением Н2О – акво, NН3 – амин. Число лигандов указывают греческими числительными: ди, три-, тетра-, пента-, гекса- и т.д. В последнюю очередь называют ионы внешней сферы.
Теория А.Вернера. Согласно этой теории центральный атом, в форме катиона, координирует вокруг себя некоторое число анионов или молекул, которые называются лигандами. Центральный атом вместе с координированными лигандами образует внутреннюю координационную сферу, которую при записи формулы заключают в квадратные скобки.
Лиганды характеризуются дентатностью, т. е. способностью занимать определенное число коор-динационных мест около центрального иона. 
У типичных металлов комплексообразующая способность выражена слабо. Щелочные металлы образуют практически только катионные комплексы Наибольшая способность к образованию комплексов выражена у d-металлов. Они в большинстве своем способны образовывать катионные, молекулярные и анионные комплексы.
39. Равновесие в растворах комплексных соединений, константы нестойкости. Конкуренция за лиганд или за ион-комплексообразователь. Правило Пирсона.
В растворах комплексных соединений существует система динамических равновесий, зависящая от характера растворенного вещества и природы растворителя. Равновесия в растворах комплексных соединений можно охарактеризовать с помощью констант образования (устойчивости) и констант диссоциации (нестойкости).
Общая константа нестойкости суммарного процесса диссоциации комплекса равна произведению констант всех ступеней диссоциации.
Правило Пирсона: Из приведенного выше вытекает: чем меньше константа нестойкости комплекса, тем прочнее комплекс, и наоборот, чем меньше константа устойчивости, тем менее прочным является комплекс. 
Процессы образования комплексного соединения иона металла с каждым из лигандов являются конкурирующими: преобладающим будет процесс, который приводит к образованию наиболее прочного (т.е. с наименьшей константой нестойкости) комплексного соединения. 
40. Многоядерные комплексы. Комплексы с макроциклическими соединениями. Строение металлоферментов (каталаза, супероксиддисмутаза, уреаза и др.) и биокомплексных соединений (гемоглобин, миоглобин, хлорофилл, цитохромы, кобаламины и др.).
Многоядерные комплексы – комплексные соединения, во внутренней сфере которых два или большее число комплексообразователей.
МАКРОЦИКЛИ́ЧЕСКИЕ КО́М¬ПЛЕКС¬НЫЕ СОЕДИНЕ́НИЯ- ко¬ор¬ди¬на¬ци¬он¬ные со¬еди¬не¬ния, об¬ра-зо¬ван¬ные за счёт вклю¬че¬ния ком¬плек¬со¬об¬ра¬зо¬ва¬те¬ля во внут¬ри¬цик¬лич. про¬стран¬ст¬во (внут¬ри¬мо¬ле¬ку¬ляр-ную по¬лость) мак¬ро¬цик¬лич. ли¬ган¬дов. Макроциклические лиганды образуют более прочные комплексы.
Металлоферменты— общее собирательное название класса ферментов, для функционирования которых необходимо присутствие катионов тех или иных металлов. В подобном ферменте могут присутствовать несколько различных ионов металла. Катион металла при этом обеспечивает правильную пространственную конфигурацию активного центра металлофермента.
Биокомплексные соединения (на примере гемоглобина):
 
41. Классификация биогенных элементов по функциональной роли и содержанию в организме: макроэлементы, микроэлементы, органогены, элементы электролитного фона. Химическое сходство и биологический антагонизм.
Макроэлементы – это биогенные элементы, содержание которых превышает 0,01% массы тела: к ним отнесены шесть органогенов (C, H, O, N, P, S), ионы электролитного фона (Na+ , K+ , Mg2+ , Ca2+, Cl- ) и железо. На долю макроэлементов приходится 99,99% массы тела.
Микроэлементы – это биогенные элементы, содержание которых в организме находится в содержании менее 0,01%. К ним относятся: Zn, Mn, Mo, Cu, I, F, Br и др.
Органогены – элементы, входящие в состав органических веществ: C, H, O, N, P, S. На их долю приходится 97-98% массы тела.
Элементы электролитного фона: Na+ , K+ , Mg2+ , Ca2+ , Cl- . Ионы Na+ , K+ , Mg2+ и Ca2+ составляют 99% общего содержания металлов в организме. Обеспечивают электрохимические процессы в организме.
Сходство и различие биологического действия связано с электронным строением атомов и ионов. Близкие значения атомных и ионных радиусов, энергий ионизации, координационных чисел, склонность к образованию связей с одними и теми же элементами в молекулах биолигандов обусловливает эффекты замещения элементов в биологических системах. Такое замещение ионов может происходить как с усилением (синергизм), так и с угнетением активности (антагонизм) замещаемого элемента.
42. Биогеохимические провинции. Эндемические заболевания. Гипо- и гипермикроэлементозы.
Биогеохимическая провинция – это территория, характеризующаяся повышенным или пониженным содержанием одного или нескольких химических элементов.
Эндемическое заболевание — заболевание, характерное для определённой местности. 
Гипермикроэлементоз-повышенное содержание элемента (Флюороз)
Гипомикроэлементозы-пониженное содержание элемента(кариес,заболев.щит.железы)
43. Металло-лигандный гомеостаз и причины его нарушения. Понятие о химизме патологических лигандно-обменных процессов, их возможной коррекции. Дезинтоксикационная терапия, физико-химические основы хелатотерапии. Биогенные металлы и их соединения как лекарственные препараты.
В организме непрерывно происходит образование и разрушение биокомплексов из ка¬тионов биометаллов и биолигандов. Об¬мен веществ с окружающей средой поддерживает концентрации веществ, участвующих в этом равновесии, на определенном уровне, обеспечивая состояние металло-лигандного гомеостаза.
Распределение катиона металла между биолигандами определя¬ется как величинами констант нестойкости для комплексов этих лигандов, так и концентрациями этих лигандов.
Нарушение металло-лигандного гомеостаза возможно по разным причинам: из-за дефи¬цита или избытка катионов биометаллов, из-за поступления катионов токсичных металлов, из-за поступления или образования посторонних лигандов.
 В организм поступают ионы токсиканта (Мт) из окружающей среды (Be, Hg, Со, Те, Pb, Sr и др.). Они образуют более прочные комплексные соединения с биолигандами, чем биометаллы. Присутствие небольших концентраций тяжелых металлов в окружающей среде вызывает патологические изменения в организме.
В организм поступает микроэлемент, необходимый для жизнедеятельности организма, но в значительно больших концентрациях, что может быть связано с особенностями биогеохимических провинций либо с результатом неразумной деятельности человека. 
Дезинтоксикационная терапия - это комплекс лечебных мер, имеющих целью выведение яда из организма или обезвреживание яда с помощью антидотов. Важнейшие принципы хелатотерапии:
1. Вводимый хелатирующий агент не должен быть токсичным;
2. Он должен образовывать с токсичными Ме более прочное КС, чем биолиганды.
44. Окислительно-восстановительные процессы. Сопряженная окислительно-восстановительная пара. Редокс-потенциал. Электродвижущая сила. Константа равновесия окислительно-восстановительного процесса. Прогнозирование направления окислительно-восстановительных реакций. Уравнение Нернста-Петерса.
ОВ процессы-процессы, протекающие с изменением степеней окисления атомов, реализующиеся путём перераспределения электронов между атомом-окислителем (акцептором) и атомом-восстановителем(донором).
Окислитель и его восстановленная форма, либо восстановитель и его окисленная форма составляет сопряжённую окислительно-восстановительную пару, а их взаимопревращения являются окислительно-восстановительными полуреакциями.
Взаимодействующие вещества образуют сопряженные пары, которые принято называть редокс-парой
Электродвижущая сила - скалярная физическая величина, характеризующая работу сторонних сил (сил неэлектрического происхождения), действующих в электрических цепях переменного и постоянного тока.
  
lgK = (E0окис-E0восст)*z/0,059 K - константа равновесия z - число электронов, равное наименьшему кратному из числа электронов, отданных восстановителем и принятых окислителем.
 
45. Гальванический элемент. Электродный потенциал. Измерение электродных потенциалов, стандартный водородный электрод. Редокс-электрод. Схема химической цепи гальванического элемента.
   
Электро́дный потенциа́л — ЭДС элемента, составленного из данного электрода и стандартного водородного электрода, электродный потенциал которого принят равным нулю.
 
Редокс-электроды состоят из электрохимически инертного проводника, погруженного в раствор, в котором находятся окисленная и восстановленная формы потенциалопределяющего вещества.
Стандартным водородным электродом- называют водородный электрод, в котором давление газообразного водорода поддерживается равным 101 ква, а активность ионов водорода = 1.
46. Биологическая роль редокс-процессов. Биологические редокс-системы.
	В организме человека много редокс - систем, участвующих в биологическом окислении: НАД/НАДН+, ФАД/ФАД Н+, цитохромы и др. Системы с более низким окислительно - восстановительным потенциалом отдают электроны, с высоким – принимают. К числу редокс-систем животных относят такие системы в крови и тканях как гем-гематин и цитохромы, в которых содержится двух- и трехвалентное железо; аскорбиновая кислота (витамин С), находящаяся в окисленной и восстановленной формах; система глютатиона, цистин-цистеин и др. Процесс биологического окисления, а именно, перенос электронов и протонов с окисляемого субстрата на кислород, осуществляемый в тканях при помощи строго определенного ряда промежуточных ферментов-переносчиков, также представляет собой цепь окислительно-восстановительных процессов,
	Окислительно-восстановительные реакции лежат в основе методов оксидиметрии, которые применяют в клиническом анализе для определения мочевой кислоты в моче, сахара в крови, в санитарно-гигиенической практике - для определения окисляемости воды, содержание хлора в питьевой воде.
47. Классификация электродов: электроды первого рода; второго рода; газовые электроды; окислительно-восстановительные электроды.
К электродам первого рода относят электроды, на которых протекают реакции типа:
МZ++Ze-⇆M;  Me+Ze-⇆Mez-
По устройству электроды 1 рода представляют собой металл, опущенный в р-р собственной хорошо растворимой соли.
На электроде 2 рода протекает электродная реакция, которой сопутствует реакция, приводящая к растворению или осаждению труднорастворимой соли металла.
Суммарная реакция имеет вид:

В газовых электродах потенциал - определяющий материал (водород, кислород, хлор) не являются проводником. Поэтому для осуществления электрического контакта используют инертные металлы (платина, палладий), насыщенные соответствующим газом. Растворенный в инертном металле газ частично диссоциирует на ионы и электроны. В результате металлический проводник приобретает способность обмениваться с раствором соответствующими ионами. 
Электроды 2 рода по своему устройству представляют собой малоактивный металл, который покрыт слоем собственного труднорастворимого электролита, опущенный в р-р хорошо растворимого электролита с одноименными анионами.
Окислительно-восстановительные электроды в зависимости от механизма ОВ-реакции делятся на ОВ-электроды 1 типа и ОВ-электроды 2 типа. 
 
По устройству окислительно-восстановительные электроды представляют собой инертный металл (Pt, Pd и др.), опущенный в р-р, который содержит окисленную или восстановленную форму одного или нескольких веществ.
48. Диффузионный потенциал. Роль в возникновении биопотенциалов. Мембранный потенциал. Биоэлектрические потенциалы. 
Диффузионный потенциал – разность потенциалов, возникающая на границе раздела между двумя неодинаковыми по составу или по концентрации растворами. Возникает в результате различия скоростей диффузии катионов и анионов.
В основе возникновения биопотенциалов лежит несимметричное относительно мембраны распределение ионов, т. е. различные концентрации ионов по разные стороны мембраны.
Мембранный потенциал - разность электрических потенциалов между растворами электролитов, разделенных проницаемой мембраной.
Биоэлектрические потенциалы - электрические потенциалы, возникающие в тканях и отдельных клетках человека, животных и растений, важнейшие компоненты процессов возбуждения и торможения.
49. Сущность потенциометрического метода анализа. Индикаторные электроды потенциометрического метода. Понятие об ионоселективных электродах. Электроды сравнения (хлорсеребряный). Измерение рН биологических жидкостей потенциометрическим методом.
Потенциометрией называют совокупность физико - химических методов исследования, в основе которых лежит измерение электродвижущей силы цепей, составленных из индикаторного электрода и электрода сравнения.
В качестве индикаторного электрода для потенциометрического определения pH можно использовать любой электрод, потенциал которого зависит от активности ионов водорода. Ионоселективные электроды – это специальные электрохимические электроды, равновесный потенциал (когда окислительная и восстановительная реакции уравновешены) которых в растворе электролита, содержащего определенные ионы, зависит от концентрации этих ионов.
Электроды сравнения — электрохимические системы, предназначенные для измерения электродных потенциалов. 
Хлорсеребряный электрод является одним из электродов сравнения. Представляет собой серебряную пластинку, покрытую слоем малорастворимой соли серебра и опущенной в раствор хлорида калия. Потенциалоопределяющим для такого электрода является анион.
Значение рН испытуемого раствора связано со значением рН раствора сравнения (рНs) следующим уравнением:






50. Электролитическая подвижность ионов, факторы, влияющие на ее величину. Удельная электрическая проводимость, факторы, влияющие на ее величину. Молярная электрическая проводимость, влияние разбавления на ее величину. Предельная молярная электрическая проводимость. Закон Кольрауша.
Подвижность иона характеризует его способность преодолевать сопротивление среды при направленном движении в электрическом поле. 
Основные факторы, влияющие на подвижность иона в водных растворах при наличии электрического поля:
Заряд и радиус иона (чем больше заряд и чем меньше радиус иона, тем ниже подвижность иона в растворе)
Природа растворителя, его диэлектрическая проницаемость и вязкость (Чем полярнее растворитель, тем меньше его подвижность. чем больше вязкость, тем меньше подвижность иона)
Температура раствора (повышение температуры увеличению подвижности ионов.)
Ионная сила раствора (Чем больше ионная сила раствора, тем меньше подвижность иона)
Концентрация ионов (Чем больше концентрация ионов в растворе, тем меньше их подвижность)
Удельная электрическая проводимость характеризует свойства проводящей среды — раствора электролита.
Удельная электрическая проводимость зависит от многих факторов, и прежде всего от природы электролита(Наименьшие значения у растворов слабых электролитов, у сильных - наибольшие), его концентрации(растет с концентрацией до некоторых максимальных значений, Достигнув максимума, удельная электрическая проводимость начинает снижаться несмотря на рост концентрации электролита) и температуры (Увеличение температуры повышает удельную электрическую проводимость).
 
С разбавлением раствора молярная электропроводность увеличивается и при достаточно большом разбавлении достигает максимума.
 
51. Кондуктометрические методы анализа, их применение в медико-биологических исследованиях. Электрическая проводимость биологических объектов и ее использование в медицинской практике.
Кондуктометрией называется физико - химический метод исследования различных систем , основаный на измерении их электрической проводимости.
Этот метод используют для определения общего содержания и состояния электролитов в биологических объектах: плазме, сыворотке крови, желудочном соке, моче, тканевой жидкости.
Кондуктометрию применяют при изучении проницаемости биологических мембран, для определения суммарного объёма клеток в клеточных взвесях, для количественного измерения потоотделения.
Изменения электрической проводимости тканей и клеток используется для диагностических целей. Патологические процессы приводят к изменению проницаемости клеточных мембран. по электрической проводимости судят о проницаемости клеточных мембран. Повышение электрической проводимости указывает на увеличение содержания свободных ионов, а уменьшение - на то, что концентрация падает. Сравнение электрических проводимостей цитоплазмы и водного раствора позволяет определить долю свободных и связанных электронов.
52. Поверхностные явления. Основные определения: фаза, межфазная граница, свободная поверхностная энергия, поверхностное натяжение. Особенности энергетического состояния молекул в поверхностном слое и объеме жидкости. Примеры поверхностных явлений, их медико-биологическое значение. 
Поверхностные явления - процессы, происходящие на границе раздела фаз и обусловленные особенностями состава и строения поверхностного слоя.
Фаза - однородная часть гетерогенной системы, которая имеет одинаковый химический состав и одинаковые значения термодинамических параметров.
Межфазная граница - переходный слой между двумя фазами.
Свободная поверхностная энергия - термодинамическая функция, характеризующая энергию межмолекулярного взаимодействия частиц на поверхности раздела фаз с частицами каждой из контактирующих фаз.
Поверхностное натяжение (σ) -  величина, измеряемая энергией Гиббса, приходящейся на единицу площади поверхностного слоя. 

Молекулы поверхностного слоя обладают большей энергией, чем молекулы, находящиеся в объёме жидкости, т.е. они обладают поверхностной энергией. 
Поверхностные явления: сорбция, адгезия, смачивание, адсорбция и т.д. Значение: обмен веществ через клетку и кровеносные капилляры, всасывание питательных веществ

53. Сорбция и ее виды. Основные понятия: сорбент, сорбат, сорбционный комплекс, сорбционное равновесие. Использование сорбции для детоксикации организма. 
Сорбция - процесс поглощения одного вещества поверхностью или объемом другого.
виды:
адсорбция — поглощаемое вещество концентрируется только на поверхности сорбента, называемый в таком случае адсорбент.
абсорбция — сорбтив поглощается всем объемом сорбента (абсорбента).
капиллярная конденсация — в этом случае в процессе сорбции газов и паров твердым сорбентом происходит не только поглощение, но и конденсация — переход сорбируемого вещества из газообразного состояния в жидкое.
Поглотитель принято называть сорбентом, а поглощаемое вещество - сорбтивом или сорбатом.
Сорбент + сорбат = сорбционный комплекс.
Сорбционное равновесие определяется равенством температуры и химического потенциала компонентов в объемной  и сорбированной фазах.
В основе метода детоксикационной сорбции лежит фиксация химических веществ - токсикантов на углевых сорбентах природного или синтетического происхождения, которая определяется силами молекулярного сцепления на большой площади поверхности сорбента, образованной различными по объему порами.
54. Адсорбция на подвижной поверхности раздела фаз. Уравнение Гиббса. Положительная и отрицательная адсорбция. 
Адсорбция - самопроизвольное изменение концентрации растворенного вещества на границе раздела двух фаз.
 
При внесении в какой-либо раствор адсорбента будут поглощаться растворитель и растворенное вещество. Если поглотится больше растворителя, чем растворенного вещества, т. е. если повысится концентрация раствора, то адсорбция будет отрицательной. Если, наоборот, поглотится больше растворенного вещества, то адсорбция будет положительной.
55. Поверхностноактивные (ПАВ) и поверхностноинактивные (ПИВ) вещества, их строение и ориентация на границе раздела фаз. Изотермы поверхностного натяжения для ПАВ и ПИВ. Биологическая роль ПАВ.
ПАВ - химическое соединение, которое, концентрируясь на поверхности раздела термодинамических фаз, вызывает снижение поверхностного натяжения.





Молекулы ПАВ, на границе раздела образуют адсорбционный слой, толщиной в одну или несколько молекул. расположение в нем молекул зависит от их концентрации. При низких концентрациях ПАВ в растворе, полярная группа молекулы погружена в воду, а ее углеводородный радикал лежит на поверхности воды. При увеличении концентрации, молекулы ПАВ сначала объединяются в агрегаты, в которых углеводородные радикалы ориентируются параллельно друг другу и перпендикулярно поверхности воды и вся поверхность жидкости покрывается мономолекулярным слоем вертикально ориентированных молекул. 
ПИВ - вещества, повышающие поверхностное натяжение водных растворов. Они представляют собой электролиты, которые диссоциируют на ионы, имеющие высокое сродство к воде. Такие ионы стремятся уйти с поверхности раствора в объем. 
 
ПАВ в организме выполняют функции стабилизаторов, эмульгаторов, и являются основными компонентами биологических мембран. ПАВ совмещают в живых организмах по существу несовместимые гидрофильные и гидрофобные системы. Именно с помощью ПАВ в живых организмах обеспечивается гидрофильно-липофильный баланс. 
56. Абсорбция в системах газ/жидкость, жидкость/жидкость, твердое/жидкость. Законы Генри и Сеченова. Роль абсорбции в жизнедеятельности организма.
 Абсорбция – самопроизвольный процесс поглощения веществ, при котором поглощаемые вещества (абсорбтивы) за счет диффузии распространяются по всему объему вещества – поглотителя (абсорбента).
  
В медицине под абсорбцией понимается всасывание питательных веществ в кровь или лимфу одним или несколькими слоями клеток различных полостей, органов и поверхностей тела.
57. Адсорбция на неподвижной поверхности раздела фаз. Удельная адсорбция. Уравнения Фрейндлиха и Ленгмюра для расчета величины адсорбции. Изотерма адсорбции. 
Под адсорбцией на неподвижной границе раздела фаз понимается накопление одного вещества на поверхности другого. Твердое вещество, на поверхности которого накапливается другое вещество.
удельная адсорбция — это количество поглощенного вещества на одном квадратном сантиметре поверхности адсорбента:   где А — удельная адсорбция, моль/г; Г —  адсорбция, моль/ см2; S0 — площадь поверхности адсорбента, см2.
Изотермой адсорбции называется количественная зависимость между величиной адсорбции и равновесной концентрацией адсорбируемого вещества.  
   

58. Адсорбция из растворов, ее особенности. Молекулярная и ионная адсорбция. Правило Панета–Фаянса, лиотропные ряды электролитов. 
 
Молекулярная адсорбция – адсорбция на поверхности адсорбента молекул неэлектролитов и слабых электролитов. 
Ионная адсорбция – адсорбция сильных электролитов из водных растворов, обусловленная химическими и электростатическими силами.
Правило Панета-Фаянса: на поверхности кристалла преимущественно адсорбируются те ионы, которые входят в состав кристаллической решетки адсорбента и могут ее достроить.
Ионы, расположенные в порядке возрастания адсорбционной способности образуют лиотропные ряды. С увеличением радиуса и заряда иона его адсорбционная способность увеличивается.
59. Ионообменная адсорбция, иониты, их классификация. Применение ионитов в медицине, санитарно-гигиенической практике. 
Процесс эквивалентного обмена собственных ионов адсорбента, образующих в растворе двойной электрический слой, на другие ионы того же знака, находящиеся в растворе, называется ионообменной адсорбцией.
Иониты — твердые нерастворимые вещества, способные обменивать свои ионы на ионы из окружающего их раствора. 
 
Катиониты - представляют собой нерастворимые многоосновные кислоты, способные к обмену катионов.
Аниониты - представляют собой нерастворимые многоатомные основания, способные к обмену анионов 
Амфолиты - иониты, у которых активная группа в зависимости от рН раствора может вести себя как кислотная или как основная. 
В санитарно- гигиенической практике иониты используются для очистки воды, выделения и очистки радиоактивных изотопов, являются составной частью безотходных экологически чистых методов производства.
60. Понятие о хроматографии и ее видах. Применение хроматографии в медицине, медико-биологических исследованиях. 
Хроматография — метод разделения смесей веществ или частиц, основанный на различиях в скоростях их перемещения в системе несмешивающихся и движущихся относительно друг друга фаз. 
Классификация видов хроматографии
По физической природе неподвижной и подвижной фаз
Жидкостная хроматография (если подвижная фаза жидкая).
Газовая хроматография (если подвижная фаза газообразная).
В зависимости от природы процесса
Адсорбционная хроматография — разделение основано на различии адсорбируемости компонентов смеси на данном адсорбенте.
Распределительная хроматография — разделение основано на различии в растворимости сорбатов в подвижной и неподвижной фазах.
Ионообменная хроматография — разделение основано на различии констант ионообменного равновесия.
Аффинная хроматография — основана на биоспецифическом взаимодействии компонентов с аффинным лигандом;
Эксклюзионная хроматография — разделение основано на различии размера молекул.
В медицине методы хроматографии используют в медико-биологических исследованиях, для диагностики различных заболеваний, при анализе сложных лекарственных препаратов, для определения чистоты лекарств и изучения их метаболизма в организме.
61. Применение адсорбции в медицине, санитарно-гигиенической практике.
Лечение и профилактика экологиче-	Связывают радионуклиды, тяжелые
ски зависимых заболеваний и от-	металлы и др. ксенобиотики, пре-
равлений	дотвращают их всасывание и пре-
 	рывают пути циркуляции
Болезни ЖКТ	Блокируют всасывание токсических
 	компонентов, защищают
 	слизистые ЖКТ
Нарушения обмена: дисфункции ор-	Ускоряют выведение метаболитов,
ганов детоксикации и выведения	облегчают работу органов детокси-
(печень, почки, легкие)	кации и выведения
Кишечные инфекции, дисбактерио-	Связывают и выводят из организма
зы	микроорганизмы и их токсины

 	 	 
Иммунные и аллергические заболе-	 	Связывают и выводят из организма
вания	 	аллергены, антигены, медиаторы
 	 	аллергии
Эндогенные интоксикации, напри-	 	Связывают и выводят из организма
мер, лучевая, противоопухолевая	 	эндотоксины
терапия.	 	 
Физические, химические, механиче-	 	Связывают и выводят из организма
ские поражения (лучевая болезнь,	 	продукты катаболизма и вторичные
ожоги, травмы, синдром длитель-	 	токсины
ного раздавливания)	 	 

62. Коллоидная химия как наука; предмет коллоидной химии. Дисперсная система – определение; компоненты дисперсной системы: дисперсная фаза, дисперсионная среда, стабилизатор.
Колло́идная хи́мия— наука о дисперсных системах и поверхностных явлениях, возникающих на границе раздела фаз.
Объектами изучения современной коллоидной химии являются дисперсные системы и высокомолекулярные соединения.
Диспе́рсная систе́ма — образования из фаз (тел), которые практически не смешиваются и не реагируют друг с другом химически.
Дисперсная фаза — это фаза вещества, которая распределена в дисперсионной среде и не вступает в реакцию с ней в дисперсной системе. 
Дисперсионная среда, непрерывная фаза (тело), в объёме которой распределена другая (дисперсная) фаза в виде мелких твёрдых частиц, капелек жидкости или пузырьков газа. 
Стабилизаторами коллоидных систем могут быть электролиты или некоторые другие вещества, не имеющие электролитной природы, например высокомолекулярные соединения (ВМС) или поверхностно-активные вещества (ПАВ).
63. Классификация дисперсных систем: по степени дисперсности (по размеру частиц дисперсной фазы); по агрегатному состоянию дисперсной фазы и дисперсионной среды; по степени взаимодействия дисперсной фазы и дисперсионной среды (собственно коллоиды, растворы ВМС, полуколлоиды); по термодинамической устойчивости.
   
Собственно коллоиды –дисперсные системы, промежуточные между истинными растворами и грубодисперсными системами
Истинный раствор ВМС - гомогенная, термодинамически устойчивая система, образованная путем ассоциации молекул полимера и растворителя в сольватированные группы. 
Вещества, достаточно хорошо растворимые в воде и образующие наряду с истинными растворами еще и коллоидные растворы называются полуколлоидами
64. Золи - определение. Способы получения золей – дисперсионные, конденсационные.
Золь - высокодисперсная коллоидная система с жидкой или газообразной дисперсионной средой, в объеме которой распределена другая (дисперсная) фаза в виде капелек жидкости, пузырьков газа или мелких твердых частиц, размер которых лежит в пределе от 10−9—10−7м. 
Методы диспергирования осуществляются путем механического, электрического или ультразвукового дробления веществ до размеров коллоидных частиц.
Конденсационные методы основаны на переходе молекулярных и ионных растворов в коллоидные путем образования труднорастворимых веществ в результате химических реакций или изменения физических условий среды. 
К методам конденсации относятся: 
1) химические методы (гидролиз, реакция двойного обмена, окисление-восстановление); 
2) методы замены растворителя, когда дисперсионная среда, в которой вещество дисперсной фазы образует молекулярный раствор, заменяется средой, в которой вещество нерастворимо. 
65. Методы очистки золей – диализ, электродиализ, ультрафильтрация.
Диализ – метод очистки дисперсных систем и растворов высокомолекулярных веществ от примесей, основанный на способности полупроницаемых мембран пропускать все растворимые молекулярные вещества и ионы электролита, но задерживать коллоидные частицы.
 Диализ протекает медленно, но он может быть ускорен путем пропускания электрического тока через золь, подлежащий очистке – электродиализ.
 Ультрафильтрация – отделение дисперсной фазы от дисперсионной среды путем продавливания золя через плотные фильтры, непроницаемые для частиц дисперсной фазы.
66. Свойства золей: молекулярно-кинетические свойства (броуновское движение, диффузия, осмос, седиментация, ультрацентрифугирование); оптические свойства (светорассеяние, светопоглощение; принцип действия нефелометра и ультрамикроскопа).
Молекулярно-кинетическими называются свойства, которые связаны с хаотическим тепловых движением частиц. К ним относятся - броуновское движение, диффузия, осмотическое давление, седиментация.
Броуновское движение - хаотическое движение частиц дисперсной фазы под действием ударов частиц дисперсионной среды.
Диффузия - процесс самопроизвольного переноса вещества за счет теплового движения, который приводит к выравниванию концентраций или к установлению равновесных концентраций.
О́смос — самопроизвольный перенос растворителя через полупроницаемую мембрану, не пропускающую растворённое вещество, и разделяющую два раствора одного и того же вещества с различными концентрациями.
Ультрацентрифугирование — метод разделения и исследования высокомолекулярных соединений.
Процесс оседания либо всплытия коллоидных частиц в золе называется седиментацией. 
В зависимости от соотношения между диаметром частиц дисперсной фазы и длиной волны, проходящей через дисперсную систему, оптические свойства системы меняются.
светорассеяние Если коллоидные системы наблюдать в проходящем и боковом свете, то можно увидеть: бесцветный золь в проходящем свете кажется прозрачным, а в боковом свете - мутным; луч света, проходя через золь, оставляет в нем светлую полосу.
Светопоглощение Свет, проходя через дисперсную систему, в той или иной степени поглощается ею.
Принцип, на котором основан ультрамикроскоп, заключается в том, что на коллоидную систему сбоку направляют сильный луч света и с помощью обычного микроскопа наблюдают рассеянный отдельными частицами свет. 
Нефелометрия — метод, основанный на измерении интенсивности рассеянного света, позволяет определять концентрацию, размер и форму частиц в дисперсных системах и растворах ВМС. Нефелометрический анализ основан на теории рассеяния света. 
67. Двойной электрический слой и строение мицеллы. Потенциалопределяющие ионы, противоионы;
Двойно́й электри́ческий слой— слой ионов, образующийся на поверхности твёрдого тела в результате адсорбции ионов из раствора, диссоциации поверхностного соединения на границе раздела фаз.
Ионы связанные с поверхностью, называются потенциалоопределяющими. Заряд этого слоя компенсируется зарядом второго слоя ионов, называемых противоионами.
Мицелла –сложное структурное образование, состоящее из агрегата, потенциалопределяющих ионов и противоионов.
Часть противоионов прочно связана с ядром и образует плотную часть двойного электрического слоя (адсорбционный слой).
Ядро с противоионами плотной части образуют гранулу или коллоидную частицу. Знак заряда коллоидной частицы определяется знаком заряда потенциалопределяющих ионов.
Коллоидную частицу (гранулу) окружают противоионы диффузного слоя – остальная часть противоионов, менее прочно связанная с ядром.	
 Поверхность частицы приобретает слой ионов определенного знака, равномерно распределенный по поверхности и создающий на ней поверхностный заряд. Эти ионы называют потенциалопределяющими. К поверхности частицы из жидкой среды притягиваются ионы противоположного знака, их называют противоионами. 
68. Возникновение потенциалов: общий, термодинамический, электростатический потенциал, электрокинетический дзета-потенциал. Зависимость дзета-потенциала от природы противоионов, концентрации электролита-стабилизатора, от температуры, вязкости раствора, от рН раствора. Расчет дзета-потенциала.
Химический потенциал μ —энергия добавления одной частицы в систему без совершения работы.
Между ядром и раствором возникает полный электрический потенциал, или термодинамический потенциал, представляющий собой разность потенциалов между всеми положительными и отрицательными зарядами мицеллы.
Электростатический потенциал - скалярная энергетическая характеристика электростатического поля, характеризующая потенциальную энергию, которой обладает единичный положительный пробный заряд, помещённый в данную точку поля.
Электрокинетический (дзета) потенциал – потенциал, возникающий на границе скольжения фаз при их относительном перемещении в электрическом поле.
Дзета-потенциал тем больше, чем больше противоионов находится в диффузном слое (при одном и том же термодинамический потенциал). Добавление в дисперсную фазу одновалентных противоионов приводит к снижению дзета-потенциала.
Если в лиофобный золь вводится электролит, один ион которого одинаков с противоионом ДЭС, Это приводит к уменьшению дзета-потенциала 
Если в лиофобный золь вводится электролит, который не имеет ионов, входящих в ДЭС, уменьшение дзета-потен-циала вплоть до нуля. 
Введение в золь ионов H+ и OH– может сильно сказываться на величине дзета-потенциала, так как эти ионы обладают высокой сорбционной способностью.
С ростом температуры, с одной стороны, ДЭС расширяется, дзета-потенциал возрастает; с другой стороны – усиливается десорбция потенциалопределяющих ионов, тем самым уменьшая величину дзета-потенциала.
Чем больше вязкость среды, тем меньше дзета потенциал, и наоборот.
  ζ – величина электрокинетического потенциала, В; η – вязкость дисперсионной среды, Н·с/м2; ε – диэлектрическая проницаемость среды;  – электрическая константа (диэлектрическая проницаемость вакуума), Ф/м; U – линейная скорость движения границы, м/с; H – напряженность электрического поля, В/м.

69. Электрокинетические явления: прямые - электрофорез и электроосмос; обратные - потенциал протекания и потенциал оседания. Медико-биологическое значение электрокинетических явлений.
Явление перемещения частиц дисперсной фазы в постоянном электрическом поле было названо электрофорезом 
явление перемещения дисперсионной среды относительно неподвижной дисперсной фазы в постоянном электрическом поле названо электроосмосом. 
	Потенциал протекания - явление возникновения разности потенциалов при движении дисперсионной среды относительно неподвижной дисперсной фазы.
	Потенциал оседания (седиментации) ‒ возникновение разности потенциалов при движении дисперсной фазы относительно дисперсионной среды. 
Электрофорез применяют для: очистки, разделения и обезвоживания медицинских препаратов, пищевых продуктов, химических реактивов; Явление электроосмоса используется в физиотерапии для введения в организм лекарственных веществ через кожу; Потенциал оседания является причиной грозовых разрядов в атмосфере. Потенциал течения – основа многих биологических процессов (течение крови через капилляры кровеносной системы). 
70. Кинетическая и агрегативная устойчивость золей. Факторы устойчивости. Коагуляция: скрытая, явная, медленная и быстрая. Способы наблюдения. Порог коагуляции. Правило Шульца и Гарди. Лиотропные ряды. Коллоидная защита. Пептизация. Значение в медицине.
Кинетическая устойчивость связана с тем, что в коллоидных системах явлению седиментации противодействует тепловое движение частиц дисперсной фазы (броуновское движение) обусловленное ударами молекул дисперсионной среды и малым размером самих частиц.
Агрегативная устойчивость обусловлена наличием у частиц дисперсной фазы электрического заряда и сольватной оболочки.	
Факторы устойчивости:
1. электростатический (наличие дзета-потенциала на поверхности частиц)
2. адсорбционно-сольватный (снижение поверхностного натяжения в результате взаимодействия частиц дисп. фазы и среды)
3. структурно-механический (на пов-ти частиц имеются плёнки, придающие механическую прочность)
4. энтропийный (коагуляци снижает число частиц в системе, энтропия увеличивается, самопроизвольность системы)
5. гидродинамический (увеличение плотности и вязкости среды).
Коагуляция — это процесс укрупнения дисперсных частиц за счет их взаимодействия и объединения в агрегаты.
  На скрытой стадии частички укрупняются, но осадок еще не образуется. Вторая стадия (явная коагуляция) наступает в результате дальнейшей агрегации частичек, которая завершается полным разделением системы на две фазы и выпадением коллоидного вещества в осадок. 
Различают быструю и медленную коагуляцию. При быстрой коагуляции почти каждое соударение частиц эффективно, т. е. приводит к их соединению; при медленной коагуляции соединяется часть сталкивающихся частиц.
	 Способы наблюдения: Внешние проявления коагуляции: помутнение раствора, изменение цвета, выпадение осадка, повышенное светорассеяние — опалесценция. 
Порог коагуляции – это наименьшая концентрация электролита, при которой начинается коагуляция.
правило Шульце и Гарди: коагулирующим действием обладает тот ион электролита, который имеет заряд, противоположный заряду гранулы: коагулирующее действие тем сильнее, чем выше заряд иона-коагулятора.	
Лиотропные ряды: коагулирующая способность ионов с одинаковым зарядом возрастает с уменьшением степени их гидратации.
Коллоидная защита — предохранение коллоидных растворов от коагуляции и, следовательно, повышение их устойчивости добавлением небольших количеств высокомолекулярных веществ.
Пептизация — один из способов получения коллоидных растворов, Расщепление агрегатов, возникших при коагуляции , на первичные частицы под действием жидкой среды или специальных веществ — пептизаторов.
Коагуляция в медицине:  протезирование кровеносных сосудов, клапанов сердца и т.д. – зависит от процессов свертывания крови. Их можно рассматривать как коагуляцию эритроцитов. 
71. Понятие о ВМС. Классификация. Значение ВМС в биологии и медицине.
Высокомолекулярные соединения (ВМС) – это вещества, молекулы которых состоят из большого числа химически связанных атомов. Такие молекулы называют макромолекулами. ВМС могут быть природного происхождения (белки, высшие полисахариды, пектины, натуральный каучук) или синтетические (пластмассы, синтетические волокна). Природные ВМС являются структурной основой всех живых организмов. 
Линейные полимеры построены из длинных одномерных элементов структуры – отдельных макромолекул или молекулярных блоков. К ним относятся натуральный каучук, желатин, целлюлоза.
Разветвленные полимеры состоят из цепей с боковыми ответвлениями. Это крахмал (гликоген), амилопектин, дивиниловый каучук и другие.
Пространственные полимеры представляют собой трехмерную сетку, которая образуется при соединении отрезков цепей химическими связями (например, фенолформальдегидные смолы). 
К полимерам медико-биологического назначения относят полимеры, которые находятся в контакте с биологическими средами организмов. В современной медицине такие полимеры нашли широкое применение в реконструктивно – восстановительной хирургии, травматологии, ортопедии, урологии, стоматологии, офтальмологии и др.
72. Получение растворов ВМС. Взаимодействие ВМС с растворителем. Характеристика растворов ВМС как истинных растворов. Сравнение растворов ВМС и золей.
на первой стадии образец ВМС набухает. Набухание - эго самопроизвольный процесс поглощения образцом ВМС дисперсионной среды, приводящий к увеличению объема и массы образца. Различают ограниченное и неограниченное набухание.
1 стадия: Ограниченное набухание наблюдается при наличии химических связей между отдельными макромолекулами. При этом достигается равновесная степень набухания. При неограниченном набухании во второй стадии происходит растворение набухшего образца ВМС. Таким образом происходит образование растворов ВМС.
В растворителях, полярность которых совпадает с полярностью ВМС, происходит истинное
растворение с образованием молекулярных растворов. При несоответствии полярности растворителя и ВМС образуются золи (или дисперсии).
Свойства растворов ВМС как истинных растворов.
-образуются самопроизвольно при простом смешивании компонентов и сопровождаются уменьшением свободной энергии Гиббса.
-термодинамически устойчивые, могут существовать достаточное время без стабилизаторов
- гомогенные системы, где нет четкой границы раздела с растворителем.
-растворы ВМС могут быть как молекулярными так и ионными.
- для растворов ВМС свойственна обратимость.
Сходство растворов высокомолекулярных соединений и коллоидных растворов:
1. Величина частиц (от 1 до 100 нм);
2. Наличие двух факторов устойчивости: заряда и водной оболочки;
3. Явление опалесценции;
4. Способность к коагуляции;
5. Способность к диализу;
6. Медленная диффузия;
7. Способность к седиментации;
8. Низкое осмотическое давление.
Отличие растворов высокомолекулярных соединений от коллоидных растворов:
1. В растворах высокомолекулярных соединений молекулы высокомолекулярных соединений, а не мицеллы;
2. У частиц высокомолекулярных соединений в растворах иной механизм возникновения заряда: диссоциация собственных ионогенных групп
3. У частиц гидрофильных высокомолекулярных соединений иной механизм образования водной оболочки: наряду с зарядом частицы водная оболочка образуется за счет гидрофильных групп, расположенных на поверхности частицы.
4. Растворы высокомолекулярных соединений более устойчивы (G< 0).
5. Растворы высокомолекулярных соединений образуются самостоятельно (не нужен «стабилизатор»).
6. Растворы высокомолекулярных соединений обратимы.
73. Агрегативная устойчивость растворов ВМС. Высаливание, коацервация.
1. Устойчивость растворов ВМС
Растворы ВМС в равновесном состоянии обладают абсолютной агрегативной устойчивостью, которая определяется двумя факторами: наличием на поверхности частиц двух оболочек: электрической и сольватной (гидратной). 
2. Высаливание – это выделение в осадок растворенного вещества, вызываемое добавлением к раствору ВМС больших количеств электролитов.
3. Коацервация — расслоение коллоидной системы с образованием коллоидных скоплений коацерватов в виде двух жидких слоев или капель. 
Процессу коацервации способствует высокая концентрация вещества в растворе, низкая температура, изменение рН среды, введение низкомолекулярных электролитов.
Различают:
1) простую коацервацию, протекающую при добавлении какого-либо низкомолекулярного электролита к раствору полимера 2) сложную (комплексную) коацервацию – происходит при взаимодействии двух растворов полиэлектролитов.
74. Полиэлектролиты. Диссоциация белков. Изоэлектрическое состояние белков.
Полиэлектролиты – это полимеры, макромолекулы которых содержат функциональные группы, способные к электролитической диссоциации. 
Диссоциация белков в растворах (выделение гидроксильных и водородных ионов) весьма незначительна.
• В кислой среде белок диссоциирует как основание, молекулы белка приобретают положительный заряд.
• В щелочной среде белок диссоциирует как кислота, молекула приобретает отрицательный заряд.
Изоэлектрическим состоянием белка называется состояние белковой молекулы, при котором её положительные и отрицательные заряды взаимно скомпенсированы.
Молекулу белка в изоэлектрическом состоянии можно считать нейтральной, хотя в ней имеются ионизированные группы.
Условно молекулу белка в изоэлектрическом состоянии можно изобразить так:
+NH3 –R – COO ‾
75. Влияние рН среды на свойства растворов белков (вязкость, осмотическое давление).
РН среды влияет на заряд белка, а следовательно, на его растворимость. Растворимость и устойчивость белка будут минимальны при рН, соответствующем изоэлектрической точке белка.
С увеличением концентрации белка вязкость раствора повышается, поскольку повышаются силы сцепления между поверхностями белковых молекул.
Добавление некоторых солей кальция приводит к повышению вязкости. Иногда вязкость белкового раствора в присутствии Са2+ настолько увеличивается, что он теряет текучесть и превращается в гель.
Белки в клетке, межклеточной жидкости, в крови повышают осмотическое давление и вызывают явление осмоса, т.е. перемещение ионов Nа+ и воды через мембраны в раствор белка.
76. Методы определения молекулярной массы полимеров и размера частиц.
Методы определения ММ объединяют в 2 группы – среднечисловые и среднемассовые.
К среднечисловым относятся методы, основанные на определении числа молекул в разбавленных растворах полимеров: понижении температуры замерзания раствора (криоскопия), повышении температуры кипения раствора (эбуллиоскопия), определении числа концевых групп в макромолекулах, измерение осмотического давления раствора (осмометрия).
К среднемассовым относятся такие методы определения ММ, которые основаны на установлении массы отдельных макромолекул: измерение скорости диффузии, светорассеяния в растворах полимеров.
77. Классификация органических соединений: а) по углеродному скелету; б) по функциональным группам. Моно-, поли- и гетерофункциональные соединения. 
В зависимости от природы углеродного скелета органические соединения можно разделить на ациклические и циклические. Среди ациклических соединений различают предельные и непредельные. Циклические соединения разделяются на карбоциклические (алициклические и ароматические) и гетероциклические.
Ациклические соединения - соединения с открытой (незамкнутой) углеродной цепью. Эти соединения называются также алифатическими.
Среди ациклических соединений различают предельные (насыщенные), содержащие в скелете только одинарные связи C-C и непредельные (ненасыщенные),включающие кратные связи C = C и C  C.
Циклические соединения - соединения с замкнутой углеродной цепью.
В зависимости от природы атомов, составляющих цикл, различают карбоциклические и гетероциклические соединения.
Карбоциклические соединения содержат в цикле только атомы углерода. Они делятся на две группы: алифатические циклические и ароматические соединения.
Гетероциклические соединения содержат в цикле, кроме атомов углерода, один или несколько атомов других элементов - гетероатомов - кислород, азот, серу и др. 
В зависимости от природы функциональной группы производные углеводородов делят на классы органических соединений. 
Название функциональной группы	Название класса соединений	Общая формула класса
Карбоксильная -COOH	Карбоновые кислоты	 
Сульфоновая -SO3H	Сульфокислоты	 
Циано -CN	Нитрилы	R-CN
Оксогруппа (карбонильная)
 	Альдегиды	 
Оксогруппа (карбонильная)
 	Кетоны	 
Гидроксильная -OH	Спирты	R-O-H
Тиольная (меркапто) -SH	Тиолы (меркаптаны)	R-S-H
-F, -Cl, -Br, -I	Галогенпроизводные	R-Hal
Алкоксильная - OR	Простые эфиры	R-O-R
Алкилтиольная -SR	Тиоэфиры	R-S-R
-NO2	Нитросоединения	R-NO2
Алкосикарбонильная
 	Сложные эфиры	 
Амино -NH2	Амины	RNH2,R1NHR2, R1R2R3N
Карбоксамидная
 	Амиды	 

Соединения с одной функциональной группой называют монофункциональными, с несколькими одинаковыми функциональными группами - полифункциональными, с несколькими разными функциональными группами – гетерофункциональными.
78. Пространственное строение и стереоизомерия. Тетраэдрическая конфигурация атома углерода. Хиральные и ахиральные молекулы. Асимметрический атом углерода как центр хиральности. Проекционные формулы. Стереоизомерия молекул с одним центром хиральности (энантиометрия). Проекционные формулы Фишера. Оптическая активность энантиомеров. Относительная и абсолютная конфигурация. D,L- и R,S-системы стереохимической номенклатуры. Рацематы. Диастереомеры. π диастереомеры алкенов. Стереоизомерия молекул с двумя и более центрами хиральности. Различие свойств энантиомеров и диастереомеров. Способы разделения рацематов.
Пространственное строение молекулы —это взаимное расположение атомов и атомных групп в трехмерном пространстве.                      
Стереоизомеры - это соединения, в молекулах которых имеется одинаковая последовательность химических связей атомов, но различное расположение этих атомов относительно друг друга в пространстве.
Тетраэдрическая модель атома углерода:
четыре валентности атома углерода в метане направлены к четырем углам тетраэдра, в центре которого находится углеродный атом, а в вершинах – атомы водорода. 
молекулы делятся на хиральные и ахиральные. У ахиральных молекул есть плоскости симметрии, у хиральных их нет.
В хиральных молекулах имеется один или несколько центров хиральности. В органических соединениях в качестве центра хиральности чаще всего выступает асимметрический атом углерода.
Асимметрическим является атом углерода, связанный с четырьмя различными атомами или группами.
Энантиомерия – явление существования энантиомеров (оптических антиподов), соединений, относящихся друг к другу как предмет и его зеркальное отражение. Энантиомерия возможна только у хиральных молекул.
Энантиомеры способны вращать плоскость поляризации света, т. е. обладают оптической активностью.
Для изображения энантномеров на плоскости используют проекционные формулы На плоскость бумаги проецируется тетраэдр. Углеродную цепь располагают вертикально таким образом, чтобы вверху оказывалась старшая группа. Хиральный атом углерода, находящийся в центре тетраэдра, переносится на плоскость в точку пересечения горизонтальной и вертикальной линий и не обозначается символом. Расположенные по горизонтали заместители направлены к наблюдателю, а по вертикали - «уходят» от наблюдателя, т. е. находятся за плоскостью бумаги. 
Энантиомерия – явление существования энантиомеров (оптических антиподов), соединений, относящихся друг к другу как предмет и его зеркальное отражение. Энантиомерия возможна только у хиральных молекул.
Энантиомеры способны вращать плоскость поляризации света, т. е. обладают оптической активностью.
Оптическая активность — это способность вещества поворачивать плоскость поляризации плоскополяризованного света на определенную величину угла влево или вправо. Характерна для энантиомеров. 
  Относительная конфигурация— это взаимное расположение заместителей при разных асимметр. атомах по отношению друг к другу; обычно ее обозначают приставками (цис- и транс-, трео- и эритро- др.). Абсолютная конфигурация— это истинное расположение в пространстве заместителей при каждом асимметрическом атоме молекулы; чаще всего ее обозначают буквами D или L.                        
Сущность R,S-системы заключается в следующем. Четырем группам, связанным с асимметрическим атомом углерода, приписывается различное старшинство. тетраэдрическую модель молекулы располагают таким образом, чтобы младший заместитель (d) был максимально удален от наблюдателя, а остальные три были приближены к нему. Если при этом старшинство заместителей убывает в направлении движения часовой стрелки, такую конфигурацию обозначают буквой R, если против часовой стрелки — буквой S.
D,L-Система обозначения конфигурации.  
Согласно этой концепции, конфигурацию других хиральных молекул срав¬нивают с конфигурацией одного из энантиомеров глицеринового альдегида. Соединения, имеющие конфигурационное сходство левовращающим глицериновым альдегидом, относят к L-стереохимическому ряду, соединения, в которых расположение атомов и атом¬ных групп похоже на конфигурацию правовращающего глицеринового альде¬гида, относят к D-ряду.
Смесь равных количеств энантиомеров называется рацематом. Рацематы не обладают оптической активностью.
 Диастереомеры — стереоизомеры, не являющиеся зеркальными отражениями друг друга. Диастереомерия возникает, когда соединение имеет несколько стереоцентров.
π-Диастереомеры – стереомеры, содержащие пи-связь. характерен для алкенов. Относительно плоскости пи-связи одинаковые заместители у двух атомов углерода могут располагаться по одну (цис-) или по разные (транс-) стороны. 
Основное различие между диастереомерами и энантиомерами заключается в том, что энантиомеры являются зеркальными изображениями друг друга, тогда как диастереомеры не являются зеркальными изображениями друг друга.
Существует несколько способов расщепления рацементов:
Механический способ может быть использован в тех случаях, когда при кристаллизации рацемата из раствора каждый энантиомер кристаллизуется самостоятельно, и тогда возможно разделение путем отбора кристаллов по их форме.
Биохимический способ основан на использовании микроорганизмов, способных потреблять одну из энантиомерных форм.
Химический способ состоит в переводе обоих энантиомеров в диастереомеры с последующим их разделением.
79. Конформации. Возникновение конформаций в результате вращения вокруг s-связей; факторы, затрудняющие вращение. Проекционные формулы Нюмена. Виды напряжений. Энергетическая характеристика заслоненных, скошенных, заторможенных конформаций открытых цепей. Связь пространственного строения с биологической активностью. Конформационные изомеры (конформеры) ациклических и циклических углеводородов.
Конформации - это формы молекул, образующиеся в результате вращения одной части молекулы относительно другой вокруг б-связей. 
не меняя ни валентных углов, ни длин связей, можно представить себе множество геометрических форм молекулы, отличающихся друг от друга взаимным поворотом углеродных тетраэдров вокруг соединяющей их связи С-С. В результате такого вращения возникают поворотные изомеры (конформеры). 
Разность энергий различных конформаций составляет энергетический барьер вращения, его существование связано с взаимодействием противолежащих a-связей С-Н при их сближении в заслоненной конформации. У более сложных соединений наряду с торсионным напряжением действует еще один фактор, затрудняющий свободное вращение, обусловленное силами отталкивания между валентно не связанными, но большими по объему заместителями, находящимися на расстоянии, меньшем суммы их ван-дер-ваальсовых радиусов. 
Для графического изображения конформаций используют проекционные формулы Ньюмена, которые получают при проецировании на плоскость молекулы вдоль σ-связи.
Конформеры ациклических соединений.










Различают 3 вида напряжений, обусловленных особенностью циклического строения молекул:
1. Торсионное напряжение вызвано электростатическим взаимодействием противостоящих связей.
2. Напряжение Ван-дер-Ваальса возникающее при расположении заместителей на расстоянии, приблизительно равном сумме их ван-дер-ваальсовых радиусов.
3. Угловое напряжение ,вызванное отклонением валентного угла в цикле от нормального угла для данного валентного состояния.
6. Заторможенная конформация — заместители одного атома на проекции размещены между заместителями другого атома, деля валентные углы, то есть заместители расположены наиболее далеко друг от друга в пространстве. 
Заслоненная конформация — конформация, в которой заместители как бы налагаются друг на друга или находятся друг относительно друга в наиболее близком положении.
Заторможенная конформация – энергетически наиболее выгодная конформация (конформер), в которой атомы или группы у соседнего атома углерода смещены друг относительно друга на 60градусов.
 Конформеры циклических соединений.
80. Сопряжение. Сопряженные системы. Виды сопряжения. Энергия сопряжения. Теория резонанса.
Сопряжением называют образование в молекуле единого электронного облака в результате перекрывания негибридных p-орбиталей, разделенных одной σ-связью. Сопряжение возможно только в том случае, если соседние атомы отделены друг от друга только одной связью. 
Сопряжённые системы Сопряжёнными называются системы с чередующимися простыми и двойными связями или системы, в которых у атома соседнего с двойной связью есть p-орбиталь с неподелённой парой электронов.
 Существуют открытые сопряженные системы и замкнутые (циклические).
Открытые с.с:
В π,π– сопряженной системе в сопряжении участвует две или более π – связи. π,π– сопряженная система может включать гетероатом (О, N). (Бутадиен – 1,3, пропеналь)
В р,π– сопряженной системе π – связь должна быть отделена одной одинарной от р-негибридной орбитали гетероатомом (О,N). (Виниловый эфир)
К замкнутым сопряженным системам относится бензол, его производные, гетероциклические и конденсированные соединения. Наблюдается сопряжение, возникает единое замкнутое π – электронное облако, которое охватывает все шесть атомов С.
Энергия сопряжения – уменьшение энергии молекулы вследствие сопряжения (энергия, которую теряет молекула в результате делокализации). 
Теория резонанса. Согласно этой теории, реальная молекула или частица описывается набором определенных, так называемых резонансных структур, которые отличаются друг от друга только распределением электронов.
81. Электронные эффекты в органических соединениях: мезомерный и индуктивный, виды, знаки эффектов.
Индуктивный эффект- Это передача электронного влияния заместителей за счет смещения электронов σ-связей. 
Заместители, к которым смещается электронная плотность по цепи σ связей, проявляют отрицательный индуктивный эффект (–I). Такие заместители в целом снижают электронную плотность системы, и их называют электроноакцепторными. К ним относят большинство функциональных групп (галогены, OH, NO2, COOH и др.)
Заместители, от которых смещается электронная плотность, проявляют положительный индуктивный эффект (+I). Так, все алкильные радикалы обладают +I-эффектом.
Мезомерный эффект – это передача электронного влияния заместителей по сопряженной системе. 
Заместители, повышающие электронную плотность в сопряженной системе, проявляют положительный мезомерный эффект (+М).
+ M-эффектом обладают заместители, содержащие атомы с неподеленной парой электронов или целым отрицательным зарядом. Эти заместители являются электронодонорными.
Заместители, понижающие электронную плотность в сопряженной системе, проявляют отрицательный мезомерный эффект (М).
- M-эффектом обладают ненасыщенные группировки и положительно заряженные атомы, т. е. электроноакцепторные заместители. 
82. Ароматичность, ее критерии. Правило Хюккеля. Электронодонорные и электроноакцепторные заместители в ароматическом кольце.
Ароматичность — общий признак некоторых циклических органических соединений, обладающих совокупностью особых свойств.
Критерии ароматичности 
1. Молекула имеет циклическое строение, все атомы цикла находятся в состоянии sp2-гибридизации, образуя плоский о-скелет молекулы, перпендикулярно к которому располагаются р-орбитали атомов.
2. Существует единая п-электронная система, охватывающая все атомы цикла
3. Соблюдается правило Хюккеля: в единой сопряженной системе содержится (4n+2) - п электронов, где п-натуральный ряд чисел (0, 1, 2 и т.д.) 
Правило Хюккеля: - молекула имеет циклическое строение; - существует единая замкнутая сопряженная π-электронная система, охватывающая все атомы цикла; - если число π-электронов, образующих сопряженную систему соответствует формуле 4n+2, где n – натуральное число, то эта молекула ароматична; - если число π-электронов, образующих сопряженную систему соответствует формуле 4n, где n – натуральное число, то эта молекула антиароматична.
• Электронодонорные заместители - атомы, повышающие электронную плотность на остальной части молекулы. 
• Электроноакцепторные заместители - атомы и группы атомов, понижающие электронную плотность на связанном с ним углеводородном фрагменте.  
83. Основность и кислотность органических соединений. Теории Бренстеда и Льюиса. Типы органических кислот (OH, SH, NH и CH кислоты) и оснований (p-основания, n-основания). Факторы, определяющие кислотность и основность: электроотрицательность и поляризуемость атома, кислотного и основного центров, электронные эффекты заместителей, сольватационный эффект.
кислотность и основность соединений связывается с переносом протона Н.
Кислотность и основность являются не абсолютными, а относительными свойствами соединений: кислотные свойства обнаруживаются лишь в присутствии основания; основные свойства - только в присутствии кислоты. В качестве растворителя при изучении кислотно-основных равновесий обычно используется вода
Кислоты Брёнстеда нейтральные молекулы или ионы, способные отдавать протон (доноры протонов). 
Основания Брёнстеда - нейтральные молекулы или ионы, способные присоединять протон (акцепторы протонов).
По теории Льюиса кислоты – это нейтральные молекулы или ионы, способные присоединять электронную пару (акцепторы электронной пары), а основания – это нейтральные молекулы или ионы, способные отдавать электронную пару (доноры электронной пары).

По природе атома кислотного центра, органические кислоты классифицируют на: CH-кислоты (алканы, алкены, алкины, диены, арены); NH-кислоты (амины, имины, амиды); OH-кислоты (спирты, фенолы, карбоновые кислоты); SH-кислоты (тиолы).

1.Зависимость кислотности от природы гетероатома.
Под природой гетероатома понимают его электроотрицательность (Э.О.) и поляризуемость. В периодах слева направо с ростом заряда ядра растет (Э.О), В результате смещения электронной плотности связь между атомами поляризуется. Чем больше электронов и чем больше радиус атома, тем дальше электроны внешнего энергетического уровня расположены от ядра, тем выше поляризуемость и кислотность.
2.Влияние углеводородного радикала и присутствующих в нем заместителей (элкутронные эффекты)
Электроноакцепторные (Э.А.) заместители способствуют увеличению кислотности. Электронодонорные (Э.Д.) заместители наоборот способствуют к понижению кислотности и увеличению основности.
3. Влияние растворителя.
Взаимодействие молекул или ионов растворенного вещества с растворителем называется процессом сольватации.  чем больше ион сольватирован, тем он устойчивее, а сольватация тем больше, чем меньше размер иона и чем меньше делокализация в нем отрицательного заряда.

Органические основания 
n-основания (ион Н⁺присоединяется к атомам с неподеленной парой электронов на внешнем слое);
π-основания (местом присоединения иона Н⁺ является пара электронов π-связи).

84. Реакции окисления и восстановления органических соединений.
Окислительно-восстановительные реакции — реакции, в результате которых изменяется степень окисления атома углерода, являющегося реакционным центром.                            
Процесс окисления включает переход электронов от органического субстрата к реагенту-окислителю, а процесс восстановления - передачу электронов от реагента к органическому субстрату.
В то же время многие процессы, протекающие с изменением степени
окисления атома углерода, такие, как дегидрирование или галогенирование, классифицируются не
как реакции окисления.
В окислительно-восстановительном процессе всегда участвует окислитель (соединение, принимающее электроны) и восстановитель (соединение, отдающее электроны окислителю).
85. Классификация органических реакций по результату (присоединение, замещение, отщепление, перегруппировки). 
Реакции замещения— это реакции, протекающие по σ-связям, в ходе которых происходит замещение атомов или функциональных групп в молекуле субстрата на другие атомы (группы). 
характерны для углеводородов и их галогенопроизводных, спиртов, ароматических и
гетероциклических соединений (в обычных условиях), карбоновых и оксикислот.
                                    
                                                              
Реакции присоединения— это реакции, идущие преимущественно с разрывом π-связей и образованием σ-связей. Характерны для алкенов, алкадиенов, алкинов, ароматических и гетероциклических соединений, альдегидов, кетонов, непредельных кислот:
                                                          
Присоединение идет согласно правилу Марковникова:
В реакциях присоединения водород присоединяется к более гидрированному атому углерода, т.е.
атому, при котором находится больше атомов водорода.
Реакции отщепления—реакции, в которых одновременно участвуют два соседних атома одной молекулы, что приводит к отщеплению термодинамически устойчивых небольших молекул (Н2О, NH3 , НСl ) и образованию непредельных соединений. Характерны для спиртов, галогенопроизводных, β-гидроксикислот.
                           
Идут согласно правилу Зайцева:
Отщепление атома водорода в реакциях дегидрогалогенирования и дегидратации происходит преимущественно от гидрогенизированного атома углерода.
Реакции внутримолекулярной — это реакции, при которых происходит перераспределение электронной плотности и изменение порядка связей в молекуле. Характерны для углеводородов, непредельных спиртов, кетокислот и их производных, моносахаридов.
в результате перегруппировки может изменяться углеродный скелет молекулы:
 
86. Понятие о механизмах реакций - ионные (электрофильные, нуклеофильные), свободнорадиклаьные, согласованные. Реакции электрофильного присоединения (АЕ). Реакции электрофильного замещения (SE). Реакции нуклеофильного замещения у sp3-гибридизованного атома углерода (SN). Реакции нуклеофильного присоединения (АN). Реакции элиминирования (дегидрогалогенирование, дегидратация).
Ионный механизм реакции — это механизм, приводящий к образованию ионов. Соответственно, образуются органические катионы и анионы — карбокатионы или карбоанионы.
Электрофильные реакции – реакции органических соединений с электрофильными реагентами, т.е. катионами или молекулами, которые имеют свободную орбиталь, готовые принять электронную пару для образования новой связи. 
Нуклеофильные реакции – это реакции органических веществ с нуклеофилами, т.е. анионами или молекулами, которые предоставляют электронную пару для образования новой связи. 
 
Свободнорадикальные реакции — это реакции, которые протекают под действием и при участии свободных радикалов.
 
Согласованные (синхронные) реакции - реакции, в которых разрыв старых и образование новых связей происходит одновременно без участия радикальных или ионных частиц.
 
Реакции электрофильного присоединения — реакции присоединения, в которых атаку кратной связи на начальной стадии осуществляет электрофил — частица, заряженная положительно или имеющая дефицит электронов.
 
Реакции электрофильного замещения— реакции замещения, в которых атаку осуществляет электрофил — частица, заряженная положительно или имеющая дефицит электронов.  
Реакции нуклеофильного замещения у sp3- гибридизованного атома углерода: гетеролитические реакции, обусловленные поляризацией s- связи углерод - гетероатом 
 
Реакции нуклеофильного присоединения— реакции присоединения, в которых атаку на начальной стадии осуществляет нуклеофил — частица, заряженная отрицательно или имеющая свободную электронную пару.
 
Реакции элиминирования (отщепления) – реакции, при которых происходит расщепление тех или иных связей в молекуле с образованием новых устойчивых молекул, стабильных или нестабильных частиц.
Дегидри́рование — реакция отщепления водорода от молекулы органического соединения.
Дегалогенирование– отщепление атомов галогена или совместно галогена и водорода от молекулы органического соединения с образованием кратной связи между атомами C или цикла.

  
87. Поли- и гетерофункциональные соединения. Примеры поли- и гетерофункциональных соединений, имеющих медико-биологическое значение и применение.
Гетерофункциональными называют соединения, в молекулах которых имеются различные функциональные группы.
В ароматическом ряду основу важных природных биологически активных соединений и синтетических лекарственных средств составляют и-аминофенол, и-аминобензойная, салициловая и сульфаниловая кислоты.
 
Полифункциональными называют соединения, в молекулах которых имеется несколько одинаковых функциональных групп.
В состав многих природных соединений входят в виде фрагментов двухатомные фенолы - пирокатехин, резорцин, гидрохинон.
Этиленгликоль - используется в технике для приготовления антифризов - жидкостей с низкой температурой замерзания.
Глицерин - Применяется как компонент мазей для смягчения кожи.
 
88. Карбоновые кислоты. Классификация карбоновых кислот. Строение карбоксильной группы, распределение электронной плотности в карбоксильной группе и карбоксилат-ионе. Влияние строения радикала и заместителей на кислотные свойства. Биологическое значение моно-, ди-, трикарбоновых кислот.
Карбо́новые кисло́ты — класс органических соединений, молекулы которых содержат одну или несколько функциональных карбоксильных групп 
В зависимости от природы органического радикала карбоновые кислоты могут быть алифатическими (насыщенными или ненасыщенными) RCOOH и ароматическими. По числу карбоксильных групп они подразделяются на монокарбоновые, дикарбоновые и трикарбоновые.
  .
   
На кислотность карбоновых кислот значительно влияют заместители, введенные в углеводородный радикал. электроноакцепторные заместители способствуют делокализации отрицательного заряда, стабилизируют анионы и тем самым увеличивают кислотность. Электронодонорные заместители, напротив, ее понижают. 
Карбоновые кислоты играют важную роль в обмене веществ, являясь продук¬тами превращения углеводов, белков, жиров.
 
89. Строение и изомерия оксикислот (гидроксикислот). Хиральный центр. Энантиомерия (оптическая, зеркальная изомерия). Энантиомеры глицеринового альдегида, молочной и винной кислот. Диастереомерия. σ -диастереомеры винной кислоты. Химические свойства оксикислот. Отдельные представители оксикислот: молочная, яблочная, β -оксимасляная, γ-оксимасляная (ГОМК), лимонная, винные кислоты.
Оксикислоты – это производные карбоновых кислот, содержащие в радикале, соединенном с карбоксилом, одну, две или несколько гидроксильных групп.
В оксикислотах встречаются следующие виды изомерии: структурная (изомерия цепи радикала, изомерия взаимного положения карбоксила и гидроксила); оптическая (зеркальная), обусловленная наличием асимметричных атомов углерода. 
хиральный центр — обычно это атом, соединённый с несколькими заместителями, которые могут по-разному располагаться в пространстве. 
Энантиомерия – явление существования энантиомеров (оптических антиподов), соединений, относящихся друг к другу как предмет и его зеркальное отражение. Энантиомерия возможна только у хиральных молекул.
    
Диастереомеры — стереоизомеры, не являющиеся зеркальными отражениями друг друга.
Химические свойства оксикислот. Оксикислоты проявляют и свойства кислот и свойства спиртов.
         
 


90. Строение и изомерия кетокислот (оксокислот). Кето-енольная таутомерия (на примере этилового эфира ацетоуксусной кислоты или щавелевоуксусной кислоты - ЩУК). Химические свойства кетокислот. Важнейшие природные кетокислоты: ацетоуксусная, щавелевоуксусная, α-кетоглутаровая.
Оксокислоты– это гетерофункциональные соединения, в молекуле которых содержатся одновременно две функциональные группы – карбонильная и карбоксильная.
В зависимости от положения этих двух функциональных групп они разделяются на α-, β-, g- и т.д. 
Кето-енольная таутомерия– это динамическая равновесная изомерия, которая заключается во взаимном превращении изомеров друг в друга за счет переноса протона Н+. 
   
91. Строение, изомерия, химические свойства фенолокислот. Салициловая кислота, ее важнейшие производные: салицилат натрия, метилсалицилат, фенилсалицилат, ацетилсалициловая кислота (аспирин), пара-аминосалициловая кислота (ПАСК); их применение.
Фенолокислотами – называют производные ароматических углеводородов, которые можно получить из них в результате замены атомов H карбоксильной и гидроксильной группами, причем OH группы замещают атомы H в бензольном кольце.
Изомерия фенолокислот обусловлена взаимным расположением OH и COOH групп в бензольном кольце.
Химические свойства фенолокислот являются сочетанием свойств ароматических кислот, фенолов и углеводородных R. Фенолокислоты обладают кислотными свойствами, обусловленными наличием как COOH, так и OH.
          Салициловая кислота-антисептик, входит в состав мазей, паст, присыпок и р-ров для лечения кожных заболеваний . 
Салицилат натрия — анальгезирующее, жаропонижающее, противовоспалительное. 
Метилсалицилат применяют наружно в качестве обезболивающего и противовоспалительного средства .
Фенилсалицилат применяется внутрь при заболеваниях кишечника.
Аспирин анальгезирующее, жаропонижающее и противовоспалительное действие.


92. Окси-, оксо-, фенолокислоты и их производные в медицине. Аминобензойная кислота и ее производные. Биологическая роль. Фармпрепараты - антиметаболиты пара-аминобензойной кислоты.
Это соединения, содержащие разные функциональные группы. Они имеют большое значение, т.к. многие из низ являются биологически активными и лекарственными веществами.
Аминобензойные кислоты - производные бензола, содержащие в качестве заместителей карбоксильную группу (-СООН) и аминогруппу (-NН2).
Данную группу составляют вещества, являющиеся сложными эфирами ПАБК и обладающие местноанестезирующим действием. Общая формула:
 
Сульфаниламиды – антиметаболиты, структурные аналоги пара–аминобензойной кислоты. n–аминобензойная кислота, фактор роста бактерий, участвует в синтезе фолиевой кислоты (витамин В6), которая участвует в метаболизме белков и нуклеиновых кислот.
93. Аминоспирты: коламин, холин, ацетилхолин. Аминофенолы: дофамин, норадреналин, адреналин. 
  
94. Амиды кислот. Мочевина (карбамид). Медико-биологическое значение мочевины и ее производных (уретаны, уреиды кислот, биурет). 
Амиды - соединения, в которых гидроксильная группа карбоновых кислот замещена на аминогруппу.
Мочевина
 
Большая часть ее используется в качестве азотного удобрения. на получение мочевиноформальдегидных смол, имеющих большую роль в технике. организм никак её не использует, а только избавляется от неё. Так как этот процесс выделения непрерывный, определенное количество мочевины всегда находится в крови. 
  Биурет с Сu(ОН)2 в щелочной среде образует комплексное соединение красно-фиолтового цвета. Эта качественная реакция называется биуретовой, она служит для обнаружения пептидов и белков
Производными карбоновых кислот, содержащими остаток мочевины в качестве заместителя, являются уреиды. Они применяются в медицине, как мягкое снотворное средство. Его эффект обусловлен сочетанием известных своим угнетающим действием на ЦНС.
 
Эфиры карбаминовой кислоты имеют общее название – уретаны.  
Уретаны нашли применение в медицине как лекарственные средства, в частности мепротан и этацизин.
95. Аминокислоты. Химические свойства как гетерофункциональных соединений. Специфические реакции альфа-, бетта- и гамма-аминокислот. Стереоизомерия. Биполярная структура, образование хелатных соединений.
Аминокислоты - гетерофункциональные соединения, молекулы которых содержат одновременно аминогруппу и карбоксильную группу у одного и того же атома углерода.
Реакции с одновременным участием амино- и карбоксильной групп.
При нагревании до температуры -200 °С α-аминокислоты подвергаются межмолекулярному ацилированию с образованием циклических шестичленных диамидов
 
β-Аминокислоты. Эти соединения при нагревании до 200 °С отщепляют молекулу аммиака, превращаясь в α,β-ненасыщенные кислоты. 
 
γ- и δ-Аминокислоты. Специфической реакцией является внутримолекулярное взаимодействие функциональных групп с образованием циклических амидов — лактамов. 
 
Большинство α-аминокислот содержит в молекуле один асимметрический атом углерода и существует в виде двух оптически активных энантиомеров и оптически неактивного рацемата.
   
96. Гетероциклические соединения. Определение. Биологическая роль. Распространение в природе. Номенклатура гетероциклов. Классификация: по размеру цикла; по типу элемента, входящего в состав цикла; по числу гетероатомов, входящих в цикл; по природе и взаимному расположению нескольких гетероатомов; по степени насыщенности; по числу циклов.
Гетероциклическими называют циклические органические соединения, в состав цикла которых, помимо атомов углерода, входят один или несколько атомов других элементов (гетероатомов).
Гетероциклические соединения чрезвычайно распространены в природе в виде алкалоидов, витаминов, пигментов играют очень важную роль в биологических процессах. К гетероциклам принадлежит примерно половина известных природных веществ: это хлорофилл растений, гемин крови, пигменты желчи, нуклеиновые кислоты, почти все алкалоиды, пенициллин, витамины РР, В1, В6, В12, индиго и др., а также примерно половина веществ, применяемых в медицине.
В зависимости от природы гетероатома различаю, азот-, кислород-, серосодержащие гетероциклические соединения. 
По числу гетероатомов гетероциклические соединения подразделяют на гетероциклы с одним, двумя и т. д. гетероатомами. При этом гетероатомы могут быть как одинаковыми, так и разными.
Размер цикла может быть различным, начиная с трехчленного. Наибольшее распространение в природе имеют пяти- и шестичленные циклы.
Гетероциклы могут быть ароматическими, насыщенными и ненасыщенными.
В моноциклических соединениях нумерация атомов всегда начинается от гетероатома. В гетероциклах с несколькими одинаковыми гетероатомами эти атомы получают наименьшие номера. Если имеются два атома азота с различным электронным строением (-N= и -NH-), то нумерацию ведут от фрагмента –NH-.В гетероциклах с разными гетероатомами старшим считается кислород, далее сера и затем азот.
Производные гетероциклов называют по общим правилам заместительной номенклатуры, где в качестве названий родоначальных структур приняты тривиальные названия гетероциклов.
97. Пятичленные гетероциклы с одним гетероатомом. Пиррол. Пиррольные соединения. Индол. Пирролидин. Фуран. Соединения фуранового ряда. Пятичленные гетероциклы с двумя гетероатомами. Азолы: имидазол, пиразол и тиазол. 
Важнейшим представителем пятичленных гетероциклов с одним гетероатомом является пиррол
 
К пиррольным соединениям относят конденсированную систему индола и полностью насыщенный аналог пиррола - пирролидин, которые входят в состав сложных по структуре молекул хлорофиллов, гема крови и алкалоидов. Так, в основе структуры гема и хлорофиллов лежит  тетрапиррольная система порфина.
 
   фурран
Соединения фуранового ряда встречаются в растительном мире. Известны многие лекарственные средства, содержащие фурановое ядро, часто в комбинации с другими гетероциклами. Примерами служат противомикробные препараты фурацилин и фуразолидон.
 
Пятичленные гетероциклы с двумя гетероатомами, один из которых азот, имеют общее название азолы. Важнейшими из них являются имидазол, пиразол и тиазол. Эти соединения, в отличие от пятичленных гетероциклов с одним гетероатомом, не разрушаются при действии кислот, а образуют с ними соли.
 имиадзол  пиразол
98. Шестичленные гетероциклы с одним гетероатомом. Пиридин. Хинолин и изохинолин. Шестичленные гетероциклы с двумя гетероатомами. Пиримидин и его производные. Пиримидиновые основания. Барбитуровая кислота и барбитураты.
Пиридин. Этот типичный представитель ароматических гетероциклов проявляет большинство химических свойств ароматических соединений: легче вступает в реакции замещения, чем присоединения; его атомы углерода устойчивы к действию окислителей. Он термодинамически устойчив.
 пиридин проявляет основные свойства; его основность несколько выше, чем ароматических аминов (например, анилина), но значительно ниже, чем алифатических аминов. 
Хинолин и изохинолин. Эти конденсированные системы по свойствам подобны пиридину: проявляют основные свойства, способны образовывать четвертичные соли.
 
Гетероциклы с двумя гетероатомами
Производные пиримидина урацил, тимин, цитозин. Производные пурина: аденин, гуанин (урацил, тимин, цитозин) пиримидин. Пиримидин– гетероароматическое соединение. слабое основание (оба атома азота сохраняют основные свойства).
 
Пиримидиновые основания — производные пиримидина, входящие в состав нуклеиновых кислот: урацил, тимин, цитозин.  Различаются характером и положением заместителей в пиримидиновом ядре. 
 
Барбитуровая кислота-это органическое соединение на основе пиримидинового гетероциклического скелета. 
Барбитураты - группа лекарственных веществ, производных барбитуровой кислоты.  

99. Конденсированные гетероциклы. Соединения пуринового ряда. Гидроксипурины и аминопурины.
Гетероциклические системы, состоящие из двух гетероциклов и имеющие 2 общих атома углерода, называются конденсированными. 
Пуриновые основания — органические природные соединения, производные пурина. К пуриновым основаниям относятся аденин, гуанин, которые входят в состав нуклеиновых кислот; Пуриновые основания играют важную роль в жизнедеятельности организмов.  
Гидроксипурины – гипоксантин, ксантин, мочевая кислота – продукты метаболизма пуриновых оснований. Для них, как и для гуанина, характерны таутомерные превращения между гидрокси - и оксо-формами.
 
Аминопурины — производные пурина, содержащие в молекуле аминогруппу; входят в состав нуклеозидов, нуклеотидов и нуклеиновых кислот.
  `},C3={1:o3,2:l3,3:a3,4:u3,5:s3,6:c3,7:f3,8:d3,9:p3,10:h3,11:m3,12:g3,13:y3,14:v3,15:w3,16:S3},x3=()=>{const{id:n}=Dm(),i=C3[n||"1"];return I.useEffect(()=>{window.scrollTo(0,0)},[n]),we.jsxs(yl,{sx:{backgroundColor:"#AFC8AF",padding:"20px",border:"2px solid #ccc",maxWidth:"90%",minHeight:"100vh",margin:"0 auto",boxSizing:"border-box",fontFamily:"serif"},children:[we.jsxs(zt,{variant:"h1",sx:{textAlign:"center",fontSize:"18pt",fontWeight:"bold",marginBottom:"10px"},children:["Занятие № ",n]}),we.jsx(zt,{variant:"h2",sx:{textAlign:"left",fontSize:"18pt",fontWeight:"bold",marginBottom:"20px"},children:(i==null?void 0:i.title)||"Информация о занятии недоступна"}),we.jsx(zt,{variant:"body1",sx:{fontSize:"14pt",textAlign:"left",whiteSpace:"pre-line"},children:(i==null?void 0:i.content)||"Контент для этого занятия отсутствует."})]})};function k3(){return we.jsxs(tg,{children:[we.jsx(es,{path:"/",element:we.jsx(i3,{})}),we.jsx(es,{path:"/lessons/:id",element:we.jsx(x3,{})})]})}function Ze(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var E3=typeof Symbol=="function"&&Symbol.observable||"@@observable",P1=E3,Xu=()=>Math.random().toString(36).substring(7).split("").join("."),O3={INIT:`@@redux/INIT${Xu()}`,REPLACE:`@@redux/REPLACE${Xu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Xu()}`},xl=O3;function zs(n){if(typeof n!="object"||n===null)return!1;let i=n;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(n)===i||Object.getPrototypeOf(n)===null}function Ap(n,i,l){if(typeof n!="function")throw new Error(Ze(2));if(typeof i=="function"&&typeof l=="function"||typeof l=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof i=="function"&&typeof l>"u"&&(l=i,i=void 0),typeof l<"u"){if(typeof l!="function")throw new Error(Ze(1));return l(Ap)(n,i)}let a=n,s=i,f=new Map,d=f,h=0,m=!1;function g(){d===f&&(d=new Map,f.forEach((_,A)=>{d.set(A,_)}))}function w(){if(m)throw new Error(Ze(3));return s}function S(_){if(typeof _!="function")throw new Error(Ze(4));if(m)throw new Error(Ze(5));let A=!0;g();const z=h++;return d.set(z,_),function(){if(A){if(m)throw new Error(Ze(6));A=!1,g(),d.delete(z),f=null}}}function C(_){if(!zs(_))throw new Error(Ze(7));if(typeof _.type>"u")throw new Error(Ze(8));if(typeof _.type!="string")throw new Error(Ze(17));if(m)throw new Error(Ze(9));try{m=!0,s=a(s,_)}finally{m=!1}return(f=d).forEach(z=>{z()}),_}function T(_){if(typeof _!="function")throw new Error(Ze(10));a=_,C({type:xl.REPLACE})}function E(){const _=S;return{subscribe(A){if(typeof A!="object"||A===null)throw new Error(Ze(11));function z(){const M=A;M.next&&M.next(w())}return z(),{unsubscribe:_(z)}},[P1](){return this}}}return C({type:xl.INIT}),{dispatch:C,subscribe:S,getState:w,replaceReducer:T,[P1]:E}}function P3(n){Object.keys(n).forEach(i=>{const l=n[i];if(typeof l(void 0,{type:xl.INIT})>"u")throw new Error(Ze(12));if(typeof l(void 0,{type:xl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function _3(n){const i=Object.keys(n),l={};for(let f=0;f<i.length;f++){const d=i[f];typeof n[d]=="function"&&(l[d]=n[d])}const a=Object.keys(l);let s;try{P3(l)}catch(f){s=f}return function(d={},h){if(s)throw s;let m=!1;const g={};for(let w=0;w<a.length;w++){const S=a[w],C=l[S],T=d[S],E=C(T,h);if(typeof E>"u")throw h&&h.type,new Error(Ze(14));g[S]=E,m=m||E!==T}return m=m||a.length!==Object.keys(d).length,m?g:d}}function kl(...n){return n.length===0?i=>i:n.length===1?n[0]:n.reduce((i,l)=>(...a)=>i(l(...a)))}function R3(...n){return i=>(l,a)=>{const s=i(l,a);let f=()=>{throw new Error(Ze(15))};const d={getState:s.getState,dispatch:(m,...g)=>f(m,...g)},h=n.map(m=>m(d));return f=kl(...h)(s.dispatch),{...s,dispatch:f}}}function N3(n){return zs(n)&&"type"in n&&typeof n.type=="string"}var Lp=Symbol.for("immer-nothing"),_1=Symbol.for("immer-draftable"),Ct=Symbol.for("immer-state");function Dt(n,...i){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Mr=Object.getPrototypeOf;function qn(n){return!!n&&!!n[Ct]}function dn(n){var i;return n?Ip(n)||Array.isArray(n)||!!n[_1]||!!((i=n.constructor)!=null&&i[_1])||Bl(n)||jl(n):!1}var T3=Object.prototype.constructor.toString();function Ip(n){if(!n||typeof n!="object")return!1;const i=Mr(n);if(i===null)return!0;const l=Object.hasOwnProperty.call(i,"constructor")&&i.constructor;return l===Object?!0:typeof l=="function"&&Function.toString.call(l)===T3}function El(n,i){bl(n)===0?Reflect.ownKeys(n).forEach(l=>{i(l,n[l],n)}):n.forEach((l,a)=>i(a,l,n))}function bl(n){const i=n[Ct];return i?i.type_:Array.isArray(n)?1:Bl(n)?2:jl(n)?3:0}function ss(n,i){return bl(n)===2?n.has(i):Object.prototype.hasOwnProperty.call(n,i)}function $p(n,i,l){const a=bl(n);a===2?n.set(i,l):a===3?n.add(l):n[i]=l}function H3(n,i){return n===i?n!==0||1/n===1/i:n!==n&&i!==i}function Bl(n){return n instanceof Map}function jl(n){return n instanceof Set}function Gn(n){return n.copy_||n.base_}function cs(n,i){if(Bl(n))return new Map(n);if(jl(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const l=Ip(n);if(i===!0||i==="class_only"&&!l){const a=Object.getOwnPropertyDescriptors(n);delete a[Ct];let s=Reflect.ownKeys(a);for(let f=0;f<s.length;f++){const d=s[f],h=a[d];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(a[d]={configurable:!0,writable:!0,enumerable:h.enumerable,value:n[d]})}return Object.create(Mr(n),a)}else{const a=Mr(n);if(a!==null&&l)return{...n};const s=Object.create(a);return Object.assign(s,n)}}function Ds(n,i=!1){return Ul(n)||qn(n)||!dn(n)||(bl(n)>1&&(n.set=n.add=n.clear=n.delete=A3),Object.freeze(n),i&&Object.entries(n).forEach(([l,a])=>Ds(a,!0))),n}function A3(){Dt(2)}function Ul(n){return Object.isFrozen(n)}var L3={};function Jn(n){const i=L3[n];return i||Dt(0,n),i}var Di;function Mp(){return Di}function I3(n,i){return{drafts_:[],parent_:n,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function R1(n,i){i&&(Jn("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=i)}function fs(n){ds(n),n.drafts_.forEach($3),n.drafts_=null}function ds(n){n===Di&&(Di=n.parent_)}function N1(n){return Di=I3(Di,n)}function $3(n){const i=n[Ct];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function T1(n,i){i.unfinalizedDrafts_=i.drafts_.length;const l=i.drafts_[0];return n!==void 0&&n!==l?(l[Ct].modified_&&(fs(i),Dt(4)),dn(n)&&(n=Ol(i,n),i.parent_||Pl(i,n)),i.patches_&&Jn("Patches").generateReplacementPatches_(l[Ct].base_,n,i.patches_,i.inversePatches_)):n=Ol(i,l,[]),fs(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),n!==Lp?n:void 0}function Ol(n,i,l){if(Ul(i))return i;const a=i[Ct];if(!a)return El(i,(s,f)=>H1(n,a,i,s,f,l)),i;if(a.scope_!==n)return i;if(!a.modified_)return Pl(n,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const s=a.copy_;let f=s,d=!1;a.type_===3&&(f=new Set(s),s.clear(),d=!0),El(f,(h,m)=>H1(n,a,s,h,m,l,d)),Pl(n,s,!1),l&&n.patches_&&Jn("Patches").generatePatches_(a,l,n.patches_,n.inversePatches_)}return a.copy_}function H1(n,i,l,a,s,f,d){if(qn(s)){const h=f&&i&&i.type_!==3&&!ss(i.assigned_,a)?f.concat(a):void 0,m=Ol(n,s,h);if($p(l,a,m),qn(m))n.canAutoFreeze_=!1;else return}else d&&l.add(s);if(dn(s)&&!Ul(s)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Ol(n,s),(!i||!i.scope_.parent_)&&typeof a!="symbol"&&Object.prototype.propertyIsEnumerable.call(l,a)&&Pl(n,s)}}function Pl(n,i,l=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Ds(i,l)}function M3(n,i){const l=Array.isArray(n),a={type_:l?1:0,scope_:i?i.scope_:Mp(),modified_:!1,finalized_:!1,assigned_:{},parent_:i,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=a,f=bs;l&&(s=[a],f=bi);const{revoke:d,proxy:h}=Proxy.revocable(s,f);return a.draft_=h,a.revoke_=d,h}var bs={get(n,i){if(i===Ct)return n;const l=Gn(n);if(!ss(l,i))return F3(n,l,i);const a=l[i];return n.finalized_||!dn(a)?a:a===Zu(n.base_,i)?(qu(n),n.copy_[i]=hs(a,n)):a},has(n,i){return i in Gn(n)},ownKeys(n){return Reflect.ownKeys(Gn(n))},set(n,i,l){const a=Fp(Gn(n),i);if(a!=null&&a.set)return a.set.call(n.draft_,l),!0;if(!n.modified_){const s=Zu(Gn(n),i),f=s==null?void 0:s[Ct];if(f&&f.base_===l)return n.copy_[i]=l,n.assigned_[i]=!1,!0;if(H3(l,s)&&(l!==void 0||ss(n.base_,i)))return!0;qu(n),ps(n)}return n.copy_[i]===l&&(l!==void 0||i in n.copy_)||Number.isNaN(l)&&Number.isNaN(n.copy_[i])||(n.copy_[i]=l,n.assigned_[i]=!0),!0},deleteProperty(n,i){return Zu(n.base_,i)!==void 0||i in n.base_?(n.assigned_[i]=!1,qu(n),ps(n)):delete n.assigned_[i],n.copy_&&delete n.copy_[i],!0},getOwnPropertyDescriptor(n,i){const l=Gn(n),a=Reflect.getOwnPropertyDescriptor(l,i);return a&&{writable:!0,configurable:n.type_!==1||i!=="length",enumerable:a.enumerable,value:l[i]}},defineProperty(){Dt(11)},getPrototypeOf(n){return Mr(n.base_)},setPrototypeOf(){Dt(12)}},bi={};El(bs,(n,i)=>{bi[n]=function(){return arguments[0]=arguments[0][0],i.apply(this,arguments)}});bi.deleteProperty=function(n,i){return bi.set.call(this,n,i,void 0)};bi.set=function(n,i,l){return bs.set.call(this,n[0],i,l,n[0])};function Zu(n,i){const l=n[Ct];return(l?Gn(l):n)[i]}function F3(n,i,l){var s;const a=Fp(i,l);return a?"value"in a?a.value:(s=a.get)==null?void 0:s.call(n.draft_):void 0}function Fp(n,i){if(!(i in n))return;let l=Mr(n);for(;l;){const a=Object.getOwnPropertyDescriptor(l,i);if(a)return a;l=Mr(l)}}function ps(n){n.modified_||(n.modified_=!0,n.parent_&&ps(n.parent_))}function qu(n){n.copy_||(n.copy_=cs(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var z3=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(i,l,a)=>{if(typeof i=="function"&&typeof l!="function"){const f=l;l=i;const d=this;return function(m=f,...g){return d.produce(m,w=>l.call(this,w,...g))}}typeof l!="function"&&Dt(6),a!==void 0&&typeof a!="function"&&Dt(7);let s;if(dn(i)){const f=N1(this),d=hs(i,void 0);let h=!0;try{s=l(d),h=!1}finally{h?fs(f):ds(f)}return R1(f,a),T1(s,f)}else if(!i||typeof i!="object"){if(s=l(i),s===void 0&&(s=i),s===Lp&&(s=void 0),this.autoFreeze_&&Ds(s,!0),a){const f=[],d=[];Jn("Patches").generateReplacementPatches_(i,s,f,d),a(f,d)}return s}else Dt(1,i)},this.produceWithPatches=(i,l)=>{if(typeof i=="function")return(d,...h)=>this.produceWithPatches(d,m=>i(m,...h));let a,s;return[this.produce(i,l,(d,h)=>{a=d,s=h}),a,s]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){dn(n)||Dt(8),qn(n)&&(n=D3(n));const i=N1(this),l=hs(n,void 0);return l[Ct].isManual_=!0,ds(i),l}finishDraft(n,i){const l=n&&n[Ct];(!l||!l.isManual_)&&Dt(9);const{scope_:a}=l;return R1(a,i),T1(void 0,a)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,i){let l;for(l=i.length-1;l>=0;l--){const s=i[l];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}l>-1&&(i=i.slice(l+1));const a=Jn("Patches").applyPatches_;return qn(n)?a(n,i):this.produce(n,s=>a(s,i))}};function hs(n,i){const l=Bl(n)?Jn("MapSet").proxyMap_(n,i):jl(n)?Jn("MapSet").proxySet_(n,i):M3(n,i);return(i?i.scope_:Mp()).drafts_.push(l),l}function D3(n){return qn(n)||Dt(10,n),zp(n)}function zp(n){if(!dn(n)||Ul(n))return n;const i=n[Ct];let l;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,l=cs(n,i.scope_.immer_.useStrictShallowCopy_)}else l=cs(n,!0);return El(l,(a,s)=>{$p(l,a,zp(s))}),i&&(i.finalized_=!1),l}var xt=new z3,Dp=xt.produce;xt.produceWithPatches.bind(xt);xt.setAutoFreeze.bind(xt);xt.setUseStrictShallowCopy.bind(xt);xt.applyPatches.bind(xt);xt.createDraft.bind(xt);xt.finishDraft.bind(xt);function bp(n){return({dispatch:l,getState:a})=>s=>f=>typeof f=="function"?f(l,a,n):s(f)}var b3=bp(),B3=bp,j3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?kl:kl.apply(null,arguments)};function A1(n,i){function l(...a){if(i){let s=i(...a);if(!s)throw new Error(Xt(0));return{type:n,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:n,payload:a[0]}}return l.toString=()=>`${n}`,l.type=n,l.match=a=>N3(a)&&a.type===n,l}var Bp=class Hi extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,Hi.prototype)}static get[Symbol.species](){return Hi}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new Hi(...i[0].concat(this)):new Hi(...i.concat(this))}};function L1(n){return dn(n)?Dp(n,()=>{}):n}function I1(n,i,l){if(n.has(i)){let s=n.get(i);return l.update&&(s=l.update(s,i,n),n.set(i,s)),s}if(!l.insert)throw new Error(Xt(10));const a=l.insert(i,n);return n.set(i,a),a}function U3(n){return typeof n=="boolean"}var W3=()=>function(i){const{thunk:l=!0,immutableCheck:a=!0,serializableCheck:s=!0,actionCreatorCheck:f=!0}=i??{};let d=new Bp;return l&&(U3(l)?d.push(b3):d.push(B3(l.extraArgument))),d},V3="RTK_autoBatch",jp=n=>i=>{setTimeout(i,n)},K3=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:jp(10),Q3=(n={type:"raf"})=>i=>(...l)=>{const a=i(...l);let s=!0,f=!1,d=!1;const h=new Set,m=n.type==="tick"?queueMicrotask:n.type==="raf"?K3:n.type==="callback"?n.queueNotification:jp(n.timeout),g=()=>{d=!1,f&&(f=!1,h.forEach(w=>w()))};return Object.assign({},a,{subscribe(w){const S=()=>s&&w(),C=a.subscribe(S);return h.add(w),()=>{C(),h.delete(w)}},dispatch(w){var S;try{return s=!((S=w==null?void 0:w.meta)!=null&&S[V3]),f=!s,f&&(d||(d=!0,m(g))),a.dispatch(w)}finally{s=!0}}})},G3=n=>function(l){const{autoBatch:a=!0}=l??{};let s=new Bp(n);return a&&s.push(Q3(typeof a=="object"?a:void 0)),s};function Y3(n){const i=W3(),{reducer:l=void 0,middleware:a,devTools:s=!0,preloadedState:f=void 0,enhancers:d=void 0}=n||{};let h;if(typeof l=="function")h=l;else if(zs(l))h=_3(l);else throw new Error(Xt(1));let m;typeof a=="function"?m=a(i):m=i();let g=kl;s&&(g=j3({trace:!1,...typeof s=="object"&&s}));const w=R3(...m),S=G3(w);let C=typeof d=="function"?d(S):S();const T=g(...C);return Ap(h,f,T)}function Up(n){const i={},l=[];let a;const s={addCase(f,d){const h=typeof f=="string"?f:f.type;if(!h)throw new Error(Xt(28));if(h in i)throw new Error(Xt(29));return i[h]=d,s},addMatcher(f,d){return l.push({matcher:f,reducer:d}),s},addDefaultCase(f){return a=f,s}};return n(s),[i,l,a]}function X3(n){return typeof n=="function"}function Z3(n,i){let[l,a,s]=Up(i),f;if(X3(n))f=()=>L1(n());else{const h=L1(n);f=()=>h}function d(h=f(),m){let g=[l[m.type],...a.filter(({matcher:w})=>w(m)).map(({reducer:w})=>w)];return g.filter(w=>!!w).length===0&&(g=[s]),g.reduce((w,S)=>{if(S)if(qn(w)){const T=S(w,m);return T===void 0?w:T}else{if(dn(w))return Dp(w,C=>S(C,m));{const C=S(w,m);if(C===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return C}}return w},h)}return d.getInitialState=f,d}var q3=Symbol.for("rtk-slice-createasyncthunk");function J3(n,i){return`${n}/${i}`}function e4({creators:n}={}){var l;const i=(l=n==null?void 0:n.asyncThunk)==null?void 0:l[q3];return function(s){const{name:f,reducerPath:d=f}=s;if(!f)throw new Error(Xt(11));typeof process<"u";const h=(typeof s.reducers=="function"?s.reducers(r4()):s.reducers)||{},m=Object.keys(h),g={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},w={addCase($,M){const B=typeof $=="string"?$:$.type;if(!B)throw new Error(Xt(12));if(B in g.sliceCaseReducersByType)throw new Error(Xt(13));return g.sliceCaseReducersByType[B]=M,w},addMatcher($,M){return g.sliceMatchers.push({matcher:$,reducer:M}),w},exposeAction($,M){return g.actionCreators[$]=M,w},exposeCaseReducer($,M){return g.sliceCaseReducersByName[$]=M,w}};m.forEach($=>{const M=h[$],B={reducerName:$,type:J3(f,$),createNotation:typeof s.reducers=="function"};o4(M)?a4(B,M,w,i):i4(B,M,w)});function S(){const[$={},M=[],B=void 0]=typeof s.extraReducers=="function"?Up(s.extraReducers):[s.extraReducers],K={...$,...g.sliceCaseReducersByType};return Z3(s.initialState,W=>{for(let ne in K)W.addCase(ne,K[ne]);for(let ne of g.sliceMatchers)W.addMatcher(ne.matcher,ne.reducer);for(let ne of M)W.addMatcher(ne.matcher,ne.reducer);B&&W.addDefaultCase(B)})}const C=$=>$,T=new Map;let E;function R($,M){return E||(E=S()),E($,M)}function _(){return E||(E=S()),E.getInitialState()}function A($,M=!1){function B(W){let ne=W[$];return typeof ne>"u"&&M&&(ne=_()),ne}function K(W=C){const ne=I1(T,M,{insert:()=>new WeakMap});return I1(ne,W,{insert:()=>{const le={};for(const[y,G]of Object.entries(s.selectors??{}))le[y]=t4(G,W,_,M);return le}})}return{reducerPath:$,getSelectors:K,get selectors(){return K(B)},selectSlice:B}}const z={name:f,reducer:R,actions:g.actionCreators,caseReducers:g.sliceCaseReducersByName,getInitialState:_,...A(d),injectInto($,{reducerPath:M,...B}={}){const K=M??d;return $.inject({reducerPath:K,reducer:R},B),{...z,...A(K,!0)}}};return z}}function t4(n,i,l,a){function s(f,...d){let h=i(f);return typeof h>"u"&&a&&(h=l()),n(h,...d)}return s.unwrapped=n,s}var n4=e4();function r4(){function n(i,l){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...l}}return n.withTypes=()=>n,{reducer(i){return Object.assign({[i.name](...l){return i(...l)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,l){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:l}},asyncThunk:n}}function i4({type:n,reducerName:i,createNotation:l},a,s){let f,d;if("reducer"in a){if(l&&!l4(a))throw new Error(Xt(17));f=a.reducer,d=a.prepare}else f=a;s.addCase(n,f).exposeCaseReducer(i,f).exposeAction(i,d?A1(n,d):A1(n))}function o4(n){return n._reducerDefinitionType==="asyncThunk"}function l4(n){return n._reducerDefinitionType==="reducerWithPrepare"}function a4({type:n,reducerName:i},l,a,s){if(!s)throw new Error(Xt(18));const{payloadCreator:f,fulfilled:d,pending:h,rejected:m,settled:g,options:w}=l,S=s(n,f,w);a.exposeAction(i,S),d&&a.addCase(S.fulfilled,d),h&&a.addCase(S.pending,h),m&&a.addCase(S.rejected,m),g&&a.addMatcher(S.settled,g),a.exposeCaseReducer(i,{fulfilled:d||cl,pending:h||cl,rejected:m||cl,settled:g||cl})}function cl(){}function Xt(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const u4={value:0},s4=n4({name:"example",initialState:u4,reducers:{increment:n=>{n.value+=1},decrement:n=>{n.value-=1}}}),c4=s4.reducer,f4=Y3({reducer:{example:c4}});Xh.createRoot(document.getElementById("root")).render(we.jsx(ms.StrictMode,{children:we.jsx(um,{store:f4,children:we.jsx(Og,{children:we.jsx(k3,{})})})}));
