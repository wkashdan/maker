!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("vue"));else if("function"==typeof define&&define.amd)define(["../../components/TransitionFadeIn","../../utils/TransitionResponsive","../../utils/transitions","vue"],t);else{var n="object"==typeof exports?t(require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("vue")):t(e["../../components/TransitionFadeIn"],e["../../utils/TransitionResponsive"],e["../../utils/transitions"],e.vue);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(e,t,n,o){return function(){var i={89:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,n=e.data,o=e.parent,i=function e(t){return Array.isArray(t)?(n=t=>e(t),t.reduce(((e,t)=>e.concat(n(t))),[])):null!==(o=t)&&"object"==typeof o?function(e){let t=[];for(const n in e)e[n]&&t.push(n);return t}(t):"string"==typeof t&&t?[t]:[];var n,o}([n.staticClass,n.class]);if(i){var r,s,a,u=(s=(r=t).body,a=r.document,s?window.document.body:!!a&&window.document.documentElement);if(u){var c=function(e,t){if(!t.length)return;const{classList:n}=e;return t.filter((e=>{if(!n.contains(e))return n.add(e),!0}))}(u,i),l=function(){!function(e,t){if(!t||!t.length)return;let n;for(;n=t.shift();)e.classList.remove(n);e.classList.length||e.removeAttribute("class")}(u,c)};o.$once("hook:beforeUpdate",l),o.$once("hook:destroyed",l)}}},t=Object.prototype.hasOwnProperty,n=function(e,t,n){var o="&"===t[0],i="~"===(t=o?t.slice(1):t)[0],r="!"===(t=i?t.slice(1):t)[0];return{o:e,t:t=r?t.slice(1):t,i:n,u:{once:i,capture:r,passive:o}}},o=function(e){var o,i,r,s=e.props,a=e.listeners,u=e.parent,c=function(e,o){var i,r,s=[];for(var a in o)if(i=o,r=a,t.call(i,r)){var u=o[a],c=n(e,a,u);c.o.addEventListener(c.t,c.i,c.u),s.push(c)}return s}((i=(o=s).body,r=o.document,i?window.document.body:r?window.document:window),a),l=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(c)};u.$once("hook:beforeUpdate",l),u.$once("hook:destroyed",l)},i=function(t){o(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?i(t):t.parent.$once("hook:mounted",(function(){i(t)})),t.slots().default}}}()},403:function(t){"use strict";t.exports=e},515:function(e){"use strict";e.exports=t},387:function(e){"use strict";e.exports=n},103:function(e){"use strict";e.exports=o}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return i[e].call(n.exports,n,n.exports,s),n.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";s.r(a),s.d(a,{MDialog:function(){return o},MDialogContent:function(){return r},MDialogLayer:function(){return g},dialogApi:function(){return e}});var e=Symbol("dialogApiKey"),t={Container:"📚0-0-0-semantic-releasejI0fL",Dialog:"📚0-0-0-semantic-releaseejzGH"};function n(e,t,n,o,i,r,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}var o=n({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Container},[n("div",{class:e.$s.Dialog},[e._t("default")],2)])}),[],!1,(function(e){this.$s=t.locals||t}),null,null).exports,i={DialogContent:"📚0-0-0-semantic-releaseaHCsK"};var r=n({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.DialogContent},[e._t("default")],2)}),[],!1,(function(e){this.$s=i.locals||i}),null,null).exports,u=s(103),c=s.n(u),l=function(e){return e&&e.data&&(e.data.slot=void 0),e},d={functional:!0,render:function(e,t){var n=t.props;return Array.isArray(n.nodes)?n.nodes.map(l):l(n.nodes)}},f=s(89),p=s.n(f),v=s(403),m=s(515),y=s(387);const h={provide(){const t=this,n={state:c().observable({vnode:void 0}),open(e){const n=e(t.$createElement);return this.state.vnode=n,()=>{this.state.vnode===n&&this.close()}},close(){var e;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{this.state.vnode=void 0}))}};return this.dialogApi||(this.dialogApi=n),{[e]:n}}};var _={name:"DialogLayer",components:{V:d,PseudoWindow:p(),MTransitionFadeIn:v.MTransitionFadeIn,MTransitionResponsive:m.MTransitionResponsive},inject:{dialogApi:e},inheritAttrs:!1,apiMixin:h,props:{styles:{type:Object,default:()=>({})}},data:()=>({transitions:[{minWidth:y.mobileMinWidth,enter:y.springUpFn,leave:y.springDownFn},{minWidth:y.tabletMinWidth,enter:y.floatUpFn,leave:y.floatDownFn}]})},b={Layer:"📚0-0-0-semantic-release_4EhS",DialogLayer:"📚0-0-0-semantic-release_5MSu",Translucent:"📚0-0-0-semantic-releaseFHIJw",disableScroll:"📚0-0-0-semantic-releasen_iBq"};var g=n(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Layer},[n("m-transition-fade-in",[e.dialogApi.state.vnode?n("div",{class:e.$s.Translucent}):e._e()]),e._v(" "),n("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.dialogApi.state.vnode?n("div",{class:e.$s.DialogLayer,style:e.styles},[n("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),n("v",{attrs:{nodes:e.dialogApi.state.vnode}})],1):e._e()])],1)}),[],!1,(function(e){this.$s=b.locals||b}),null,null).exports}(),a}()}));
//# sourceMappingURL=script.js.map