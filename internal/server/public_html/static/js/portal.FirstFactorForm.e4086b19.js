import{i as se,az as ie,u as ae,d as ue,l as $,b as ce,r as m,j as f,h as w,m as de,R as fe,aA as le,aB as me}from"./index.2cf54ca8.js";import{c as j}from"./index.8057fcfb.js";import{u as ve}from"./hooks.Workflow.6e7bd503.js";import{L as ge}from"./layouts.Login.3ab4a287.js";import{T as F}from"./mui.TextField.b6a2e759.js";import{F as pe}from"./mui.FormControlLabel.9192796d.js";import{C as he}from"./mui.Checkbox.b9e18f09.js";import{B as we,j as be}from"./mui.Toolbar.c29f3336.js";import"./mui.useFormControl.1ba1cccc.js";function ye(e){return e&&typeof e.then=="function"}Promise.resolve(!1);Promise.resolve(!0);var h=Promise.resolve();function q(e,t){return e||(e=0),new Promise(function(r){return setTimeout(function(){return r(t)},e)})}function Me(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function x(){return Math.random().toString(36).substring(2)}var O=0,L=0;function E(){var e=new Date().getTime();return e===O?(L++,e*1e3+L):(O=e,L=0,e*1e3)}var _e=E,ke="native";function Ce(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(r){t.messagesCallback&&t.messagesCallback(r.data)},t}function Pe(e){e.bc.close(),e.subFns=[]}function Ee(e,t){try{return e.bc.postMessage(t,!1),h}catch(r){return Promise.reject(r)}}function Se(e,t){e.messagesCallback=t}function Le(){if((typeof window<"u"||typeof self<"u")&&typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function xe(){return 150}var Te={create:Ce,close:Pe,onMessage:Se,postMessage:Ee,canBeUsed:Le,type:ke,averageResponseTime:xe,microSeconds:_e},V=function(){function e(t){this.ttl=t,this.map=new Map,this._to=!1}return e.prototype.has=function(t){return this.map.has(t)},e.prototype.add=function(t){var r=this;this.map.set(t,z()),this._to||(this._to=!0,setTimeout(function(){r._to=!1,Be(r)},0))},e.prototype.clear=function(){this.map.clear()},e}();function Be(e){for(var t=z()-e.ttl,r=e.map[Symbol.iterator]();;){var n=r.next().value;if(!n)return;var o=n[0],s=n[1];if(s<t)e.map.delete(o);else return}}function z(){return new Date().getTime()}function T(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return typeof t.webWorkerSupport>"u"&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=1e3*45),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=1e3*60),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=1e3*60*2),t.node.maxParallelWrites||(t.node.maxParallelWrites=2048),typeof t.node.useFastPath>"u"&&(t.node.useFastPath=!0),t}var Ie=E,Re="pubkey.broadcast-channel-0-",v="messages",S={durability:"relaxed"},De="idb";function H(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function B(e){e.commit&&e.commit()}function Ne(e){var t=H(),r=Re+e,n=t.open(r);return n.onupgradeneeded=function(o){var s=o.target.result;s.createObjectStore(v,{keyPath:"id",autoIncrement:!0})},new Promise(function(o,s){n.onerror=function(i){return s(i)},n.onsuccess=function(){o(n.result)}})}function $e(e,t,r){var n=new Date().getTime(),o={uuid:t,time:n,data:r},s=e.transaction([v],"readwrite",S);return new Promise(function(i,c){s.oncomplete=function(){return i()},s.onerror=function(l){return c(l)};var d=s.objectStore(v);d.add(o),B(s)})}function je(e,t){var r=e.transaction(v,"readonly",S),n=r.objectStore(v),o=[],s=IDBKeyRange.bound(t+1,1/0);if(n.getAll){var i=n.getAll(s);return new Promise(function(d,l){i.onerror=function(u){return l(u)},i.onsuccess=function(u){d(u.target.result)}})}function c(){try{return s=IDBKeyRange.bound(t+1,1/0),n.openCursor(s)}catch{return n.openCursor()}}return new Promise(function(d,l){var u=c();u.onerror=function(b){return l(b)},u.onsuccess=function(b){var g=b.target.result;g?g.value.id<t+1?g.continue(t+1):(o.push(g.value),g.continue()):(B(r),d(o))}})}function Fe(e,t){if(e.closed)return Promise.resolve([]);var r=e.db.transaction(v,"readwrite",S),n=r.objectStore(v);return Promise.all(t.map(function(o){var s=n.delete(o);return new Promise(function(i){s.onsuccess=function(){return i()}})}))}function Oe(e,t){var r=new Date().getTime()-t,n=e.transaction(v,"readonly",S),o=n.objectStore(v),s=[];return new Promise(function(i){o.openCursor().onsuccess=function(c){var d=c.target.result;if(d){var l=d.value;l.time<r?(s.push(l),d.continue()):(B(n),i(s))}else i(s)}})}function Ae(e){return Oe(e.db,e.options.idb.ttl).then(function(t){return Fe(e,t.map(function(r){return r.id}))})}function Ue(e,t){return t=T(t),Ne(e).then(function(r){var n={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:x(),eMIs:new V(t.idb.ttl*2),writeBlockPromise:h,messagesCallback:null,readQueuePromises:[],db:r};return r.onclose=function(){n.closed=!0,t.idb.onclose&&t.idb.onclose()},G(n),n})}function G(e){e.closed||Q(e).then(function(){return q(e.options.idb.fallbackInterval)}).then(function(){return G(e)})}function We(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}function Q(e){return e.closed||!e.messagesCallback?h:je(e.db,e.lastCursorId).then(function(t){var r=t.filter(function(n){return!!n}).map(function(n){return n.id>e.lastCursorId&&(e.lastCursorId=n.id),n}).filter(function(n){return We(n,e)}).sort(function(n,o){return n.time-o.time});return r.forEach(function(n){e.messagesCallback&&(e.eMIs.add(n.id),e.messagesCallback(n.data))}),h})}function Je(e){e.closed=!0,e.db.close()}function Ke(e,t){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return $e(e.db,e.uuid,t)}).then(function(){Me(0,10)===0&&Ae(e)}),e.writeBlockPromise}function qe(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t,Q(e)}function Ve(){return!!H()}function ze(e){return e.idb.fallbackInterval*2}var He={create:Ue,close:Je,onMessage:qe,postMessage:Ke,canBeUsed:Ve,type:De,averageResponseTime:ze,microSeconds:Ie},Ge=E,Qe="pubkey.broadcastChannel-",Xe="localstorage";function X(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function Y(e){return Qe+e}function Ye(e,t){return new Promise(function(r){q().then(function(){var n=Y(e.channelName),o={token:x(),time:new Date().getTime(),data:t,uuid:e.uuid},s=JSON.stringify(o);X().setItem(n,s);var i=document.createEvent("Event");i.initEvent("storage",!0,!0),i.key=n,i.newValue=s,window.dispatchEvent(i),r()})})}function Ze(e,t){var r=Y(e),n=function(s){s.key===r&&t(JSON.parse(s.newValue))};return window.addEventListener("storage",n),n}function et(e){window.removeEventListener("storage",e)}function tt(e,t){if(t=T(t),!Z())throw new Error("BroadcastChannel: localstorage cannot be used");var r=x(),n=new V(t.localstorage.removeTimeout),o={channelName:e,uuid:r,eMIs:n};return o.listener=Ze(e,function(s){o.messagesCallback&&s.uuid!==r&&(!s.token||n.has(s.token)||s.data.time&&s.data.time<o.messagesCallbackTime||(n.add(s.token),o.messagesCallback(s.data)))}),o}function rt(e){et(e.listener)}function nt(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t}function Z(){var e=X();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch{return!1}return!0}function ot(){var e=120,t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")?e*2:e}var st={create:tt,close:rt,onMessage:nt,postMessage:Ye,canBeUsed:Z,type:Xe,averageResponseTime:ot,microSeconds:Ge},it=E,at="simulate",I=new Set;function ut(e){var t={name:e,messagesCallback:null};return I.add(t),t}function ct(e){I.delete(e)}function dt(e,t){return new Promise(function(r){return setTimeout(function(){var n=Array.from(I);n.filter(function(o){return o.name===e.name}).filter(function(o){return o!==e}).filter(function(o){return!!o.messagesCallback}).forEach(function(o){return o.messagesCallback(t)}),r()},5)})}function ft(e,t){e.messagesCallback=t}function lt(){return!0}function mt(){return 5}var vt={create:ut,close:ct,onMessage:ft,postMessage:dt,canBeUsed:lt,type:at,averageResponseTime:mt,microSeconds:it},A=[Te,He,st];function gt(e){var t=[].concat(e.methods,A).filter(Boolean);if(e.type){if(e.type==="simulate")return vt;var r=t.find(function(o){return o.type===e.type});if(r)return r;throw new Error("method-type "+e.type+" not found")}e.webWorkerSupport||(t=t.filter(function(o){return o.type!=="idb"}));var n=t.find(function(o){return o.canBeUsed()});if(n)return n;throw new Error("No usable method found in "+JSON.stringify(A.map(function(o){return o.type})))}var ee=new Set,pt=0,R=function(t,r){this.id=pt++,ee.add(this),this.name=t,U&&(r=U),this.options=T(r),this.method=gt(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,ht(this)};R._pubkey=!0;var U;R.prototype={postMessage:function(t){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed "+JSON.stringify(t));return W(this,"message",t)},postInternal:function(t){return W(this,"internal",t)},set onmessage(e){var t=this.method.microSeconds(),r={time:t,fn:e};K(this,"message",this._onML),e&&typeof e=="function"?(this._onML=r,J(this,"message",r)):this._onML=null},addEventListener:function(t,r){var n=this.method.microSeconds(),o={time:n,fn:r};J(this,t,o)},removeEventListener:function(t,r){var n=this._addEL[t].find(function(o){return o.fn===r});K(this,t,n)},close:function(){var t=this;if(!this.closed){ee.delete(this),this.closed=!0;var r=this._prepP?this._prepP:h;return this._onML=null,this._addEL.message=[],r.then(function(){return Promise.all(Array.from(t._uMP))}).then(function(){return Promise.all(t._befC.map(function(n){return n()}))}).then(function(){return t.method.close(t._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function W(e,t,r){var n=e.method.microSeconds(),o={time:n,type:t,data:r},s=e._prepP?e._prepP:h;return s.then(function(){var i=e.method.postMessage(e._state,o);return e._uMP.add(i),i.catch().then(function(){return e._uMP.delete(i)}),i})}function ht(e){var t=e.method.create(e.name,e.options);ye(t)?(e._prepP=t,t.then(function(r){e._state=r})):e._state=t}function te(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function J(e,t,r){e._addEL[t].push(r),wt(e)}function K(e,t,r){e._addEL[t]=e._addEL[t].filter(function(n){return n!==r}),bt(e)}function wt(e){if(!e._iL&&te(e)){var t=function(o){e._addEL[o.type].forEach(function(s){var i=1e5,c=s.time-i;o.time>=c&&s.fn(o.data)})},r=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,t,r)}):(e._iL=!0,e.method.onMessage(e._state,t,r))}}function bt(e){if(e._iL&&!te(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}async function yt(e,t,r,n,o,s){const i={username:e,password:t,keepMeLoggedIn:r};n&&(i.targetURL=n),o&&(i.requestMethod=o),s&&(i.workflow=s);const c=await se(ie,i);return c||{}}const Bt=function(e){const{t}=ae(),r=ue(),n=$(fe),o=$(le),[s]=ve(),{createErrorNotification:i}=ce(),c=m.useMemo(()=>new R("login"),[]),[d,l]=m.useState(!1),[u,b]=m.useState(""),[g,k]=m.useState(!1),[p,D]=m.useState(""),[re,N]=m.useState(!1),y=m.useRef(),M=m.useRef(),_=Mt();m.useEffect(()=>{const a=setTimeout(()=>y.current.focus(),10);return()=>clearTimeout(a)},[y]),m.useEffect(()=>{c.addEventListener("message",a=>{a&&e.onChannelStateChange()})},[c,n,e]);const C=e.disabled,ne=()=>{l(!d)},P=async()=>{if(u===""||p===""){u===""&&k(!0),p===""&&N(!0);return}e.onAuthenticationStart();try{const a=await yt(u,p,d,n,o,s);await c.postMessage(!0),e.onAuthenticationSuccess(a?a.redirect:void 0)}catch(a){console.error(a),i(t("Incorrect username or password")),e.onAuthenticationFailure(),D(""),M.current.focus()}},oe=()=>{e.resetPassword&&(e.resetPasswordCustomURL!==""?window.open(e.resetPasswordCustomURL):r(me))};return f.jsx(ge,{id:"first-factor-stage",title:t("Sign in"),showBrand:!0,children:f.jsxs(w,{container:!0,spacing:2,children:[f.jsx(w,{item:!0,xs:12,children:f.jsx(F,{inputRef:y,id:"username-textfield",label:t("Username"),variant:"outlined",required:!0,value:u,error:g,disabled:C,fullWidth:!0,onChange:a=>b(a.target.value),onFocus:()=>k(!1),autoCapitalize:"none",autoComplete:"username",onKeyDown:a=>{a.key==="Enter"&&(u.length?u.length&&p.length?P():(k(!1),M.current.focus()):k(!0))}})}),f.jsx(w,{item:!0,xs:12,children:f.jsx(F,{inputRef:M,id:"password-textfield",label:t("Password"),variant:"outlined",required:!0,fullWidth:!0,disabled:C,value:p,error:re,onChange:a=>D(a.target.value),onFocus:()=>N(!1),type:"password",autoComplete:"current-password",onKeyDown:a=>{a.key==="Enter"&&(u.length?p.length||M.current.focus():y.current.focus(),P(),a.preventDefault())}})}),e.rememberMe?f.jsx(w,{item:!0,xs:12,className:j(_.actionRow),children:f.jsx(pe,{control:f.jsx(he,{id:"remember-checkbox",disabled:C,checked:d,onChange:ne,onKeyDown:a=>{a.key==="Enter"&&(u.length?p.length||M.current.focus():y.current.focus(),P())},value:"rememberMe",color:"primary"}),className:_.rememberMe,label:t("Remember me")})}):null,f.jsx(w,{item:!0,xs:12,children:f.jsx(we,{id:"sign-in-button",variant:"contained",color:"primary",fullWidth:!0,disabled:C,onClick:P,children:t("Sign in")})}),e.resetPassword?f.jsx(w,{item:!0,xs:12,className:j(_.actionRow,_.flexEnd),children:f.jsx(be,{id:"reset-password-button",component:"button",onClick:oe,className:_.resetLink,underline:"hover",children:t("Reset password?")})}):null]})})},Mt=de(e=>({actionRow:{display:"flex",flexDirection:"row",marginTop:e.spacing(-1),marginBottom:e.spacing(-1)},resetLink:{cursor:"pointer",paddingTop:13.5,paddingBottom:13.5},rememberMe:{flexGrow:1},flexEnd:{justifyContent:"flex-end"}}));export{Bt as default};
