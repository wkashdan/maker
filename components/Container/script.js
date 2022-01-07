!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../utils/assert"),require("chroma-js"));else if("function"==typeof define&&define.amd)define(["../../utils/assert","chroma-js"],t);else{var r="object"==typeof exports?t(require("../../utils/assert"),require("chroma-js")):t(e["../../utils/assert"],e["chroma-js"]);for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(this,(function(e,t){return function(){"use strict";var r={455:function(t){t.exports=e},446:function(e){e.exports=t}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var l=s[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return function(){n.r(l),n.d(l,{MContainer:function(){return o}});var e=n(446),t=n.n(e),r=n(455),s=n.n(r),i={Container:"📚0-0-0-semantic-releaseqgBQ0",Label:"📚0-0-0-semantic-releaseZ2G32",size_small:"📚0-0-0-semantic-releaserA2CG",size_medium:"📚0-0-0-semantic-releaseHmOW3",size_large:"📚0-0-0-semantic-releaseXJvD5",Sublabel:"📚0-0-0-semantic-releasezfbi9",RequirementLabel:"📚0-0-0-semantic-releaseB6FKi",Header:"📚0-0-0-semantic-release_pri2"};var o=function(e,t,r,s,n,l,i,o){var a,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),s&&(u.functional=!0),l&&(u._scopeId="data-v-"+l),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=a):n&&(a=o?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),a)if(u.functional){u._injectStyles=a;var c=u.render;u.render=function(e,t){return a.call(t),c(e,t)}}else{var b=u.beforeCreate;u.beforeCreate=b?[].concat(b,a):[a]}return{exports:e,options:u}}({inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},bgColor:{type:String,default:void 0,validator:e=>t().valid(e)||"transparent"===e},color:{type:String,default:void 0,validator:e=>t().valid(e)}},computed:{style(){return{"--bg-color":this.bgColor,"--color":this.color}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){s().warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),s().warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),s().warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",e._g(e._b({class:[e.$s.Container,e.$s["size_"+e.size]],style:e.style},"section",e.$attrs,!1),e.$listeners),[r("header",{class:e.$s.Header},[e.hasLabel?r("div",{class:e.$s.Label},[e._t("label",(function(){return[e._v("\n\t\t\t\t"+e._s(e.label)+"\n\t\t\t")]})),e._v(" "),e.hasSublabel?r("div",{class:e.$s.Sublabel},[e._t("sublabel",(function(){return[e._v("\n\t\t\t\t\t"+e._s(e.sublabel)+"\n\t\t\t\t")]}))],2):e._e()],2):e._e(),e._v(" "),e.hasRequirementLabel?r("div",{class:e.$s.RequirementLabel},[e._t("requirement-label",(function(){return[e._v("\n\t\t\t\t"+e._s(e.requirementLabel)+"\n\t\t\t")]}))],2):e._e()]),e._v(" "),e._t("default")],2)}),[],!1,(function(e){this.$s=i.locals||i}),null,null).exports}(),l}()}));
//# sourceMappingURL=script.js.map