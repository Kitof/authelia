import{x as $,ai as W,bs as A,bt as B,j as b,m as H,u as K,T as q}from"./index.2cf54ca8.js";import{b as N}from"./mui.Toolbar.c29f3336.js";var E={exports:{}},V="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",X=V,Y=X;function F(){}function D(){}D.resetWarningCache=F;var G=function(){function e(a,o,s,p,y,l){if(l!==Y){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:D,resetWarningCache:F};return r.PropTypes=r,r};E.exports=G();var J=E.exports;const n=$(J);var Q={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},Z=Q,ee={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},ve=ee;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?R(Object(r),!0).forEach(function(a){m(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function re(e,t){if(e==null)return{};var r=te(e,t),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function S(e){return ne(e)||ae(e)||oe(e)||se()}function ne(e){if(Array.isArray(e))return _(e)}function ae(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oe(e,t){if(e){if(typeof e=="string")return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(e){var t,r=e.beat,a=e.fade,o=e.beatFade,s=e.bounce,p=e.shake,y=e.flash,l=e.spin,i=e.spinPulse,c=e.spinReverse,P=e.pulse,T=e.fixedWidth,h=e.inverse,j=e.border,v=e.listItem,f=e.flip,I=e.size,O=e.rotation,k=e.pull,C=(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":s,"fa-shake":p,"fa-flash":y,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":i,"fa-pulse":P,"fa-fw":T,"fa-inverse":h,"fa-border":j,"fa-li":v,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},m(t,"fa-".concat(I),typeof I<"u"&&I!==null),m(t,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),m(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(g){return C[g]?g:null}).filter(function(g){return g})}function le(e){return e=e-0,e===e}function L(e){return le(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var fe=["style"];function ce(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ue(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var a=r.indexOf(":"),o=L(r.slice(0,a)),s=r.slice(a+1).trim();return o.startsWith("webkit")?t[ce(o)]=s:t[o]=s,t},{})}function U(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return U(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,i){var c=t.attributes[i];switch(i){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=ue(c);break;default:i.indexOf("aria-")===0||i.indexOf("data-")===0?l.attrs[i.toLowerCase()]=c:l.attrs[L(i)]=c}return l},{attrs:{}}),s=r.style,p=s===void 0?{}:s,y=re(r,fe);return o.attrs.style=u(u({},o.attrs.style),p),e.apply(void 0,[t.tag,u(u({},o.attrs),y)].concat(S(a)))}var M=!1;try{M=!0}catch{}function pe(){if(!M&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function z(e){if(e&&x(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(A.icon)return A.icon(e);if(e===null)return null;if(e&&x(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var d=W.forwardRef(function(e,t){var r=e.icon,a=e.mask,o=e.symbol,s=e.className,p=e.title,y=e.titleId,l=e.maskId,i=z(r),c=w("classes",[].concat(S(ie(e)),S(s.split(" ")))),P=w("transform",typeof e.transform=="string"?A.transform(e.transform):e.transform),T=w("mask",z(a)),h=B(i,u(u(u(u({},c),P),T),{},{symbol:o,title:p,titleId:y,maskId:l}));if(!h)return pe("Could not find icon",i),null;var j=h.abstract,v={ref:t};return Object.keys(e).forEach(function(f){d.defaultProps.hasOwnProperty(f)||(v[f]=e[f])}),ye(j[0],v)});d.displayName="FontAwesomeIcon";d.propTypes={beat:n.bool,border:n.bool,beatFade:n.bool,bounce:n.bool,className:n.string,fade:n.bool,flash:n.bool,mask:n.oneOfType([n.object,n.array,n.string]),maskId:n.string,fixedWidth:n.bool,inverse:n.bool,flip:n.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.oneOfType([n.object,n.array,n.string]),listItem:n.bool,pull:n.oneOf(["right","left"]),pulse:n.bool,rotation:n.oneOf([0,90,180,270]),shake:n.bool,size:n.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.bool,spinPulse:n.bool,spinReverse:n.bool,symbol:n.oneOfType([n.bool,n.string]),title:n.string,titleId:n.string,transform:n.oneOfType([n.string,n.object]),swapOpacity:n.bool};d.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ye=U.bind(null,W.createElement);const me=function(){return b.jsx(d,{icon:Z,size:"4x",color:"green",className:"success-icon"})},Oe=function(){const{t:e}=K(),t=be();return b.jsxs(N,{id:"authenticated-stage",children:[b.jsx(N,{className:t.iconContainer,children:b.jsx(me,{})}),b.jsx(q,{children:e("Authenticated")})]})},be=H(e=>({iconContainer:{marginBottom:e.spacing(2),flex:"0 0 100%"}}));export{Oe as A,d as F,me as S,ve as f};
