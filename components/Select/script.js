!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/BlockFormControlLayout"),require("../../components/Icon"));else if("function"==typeof define&&define.amd)define(["../../components/BlockFormControlLayout","../../components/Icon"],t);else{var o="object"==typeof exports?t(require("../../components/BlockFormControlLayout"),require("../../components/Icon")):t(e["../../components/BlockFormControlLayout"],e["../../components/Icon"]);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,(function(e,t){return(()=>{"use strict";var o={662:t=>{t.exports=e},20:e=>{e.exports=t}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{MSelect:()=>i});var e=r(662);const t={components:{MIcon:r(20).MIcon},inheritAttrs:!1,model:{prop:"value",event:"select:update"},props:{variant:{type:String,default:"fill",validator:e=>["fill","outline"].includes(e)},value:{type:String,default:void 0},placeholder:{type:String,default:""},options:{type:Array,default:()=>[]},invalid:{type:Boolean,default:!1}},computed:{selected:{get(){return this.value},set(e){return this.$emit("select:update",e),e}},optionSelected(){return this.options.find((e=>e.value===this.value))},placeholderValue(){return this.optionSelected?void 0:this.value}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{setCustomValidity(){var e,t;const o=this.invalid?"invalid":"";null===(e=this.$refs)||void 0===e||null===(t=e.select)||void 0===t||t.setCustomValidity(o)}}},o={variant_fill:"📚0-0-0-semantic-releaseMNP6k",variant_outline:"📚0-0-0-semantic-releaseK9CIe",SelectContainer:"📚0-0-0-semantic-releasei5cEi",Prefix:"📚0-0-0-semantic-releasepnDG1",Icon:"📚0-0-0-semantic-releasevqrGe",Select:"📚0-0-0-semantic-releaseQHt8E",SelectButton:"📚0-0-0-semantic-releaseabtNx",hasPrefix:"📚0-0-0-semantic-releasewDbAV",selected:"📚0-0-0-semantic-releaseYEaIi",invalid:"📚0-0-0-semantic-releaseHbnlJ"};function n(e,t,o,n,r,s,l,i){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),l?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=a):r&&(a=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:c}}const l=n(t,(function(){var e,t,o=this,n=o.$createElement,r=o._self._c||n;return r("div",{class:[o.$s.SelectContainer,o.$s["variant_"+o.variant]]},[o.$slots["private-menu"]?r("button",o._g(o._b({class:[o.$s.SelectButton,(e={},e[o.$s.hasPrefix]=o.$slots.prefix,e)]},"button",o.$attrs,!1),o.$listeners),[r("span",[o._t("private-menu")],2)]):r("select",o._g(o._b({directives:[{name:"model",rawName:"v-model",value:o.selected,expression:"selected"}],ref:"select",class:[o.$s.Select,(t={},t[o.$s.selected]=o.optionSelected,t[o.$s.invalid]=o.invalid,t[o.$s.hasPrefix]=o.$slots.prefix,t)],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));o.selected=e.target.multiple?t:t[0]}}},"select",o.$attrs,!1),o.$listeners),[o.placeholder?r("option",{attrs:{disabled:""},domProps:{value:o.placeholderValue}},[o._v("\n\t\t\t"+o._s(o.placeholder)+"\n\t\t")]):o._e(),o._v(" "),o._l(o.options,(function(e){return r("option",{key:e.value,attrs:{disabled:e.disabled},domProps:{value:e.value,selected:e.value===o.value}},[o._v("\n\t\t\t"+o._s(e.label)+"\n\t\t")])}))],2),o._v(" "),r("m-icon",{class:o.$s.Icon,attrs:{name:"chevronDown"}}),o._v(" "),o.$slots.prefix?r("span",{class:o.$s.Prefix},[o._t("prefix")],2):o._e()],1)}),[],!1,(function(e){this.$s=o.locals||o}),null,null).exports;const i=n({components:{MBlockFormControlLayout:e.MBlockFormControlLayout,SelectControl:l},inheritAttrs:!1,model:{prop:"value",event:"select:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}}},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("m-block-form-control-layout",{scopedSlots:e._u([{key:"control",fn:function(){return[o("select-control",e._g(e._b({attrs:{invalid:e.isInvalid},scopedSlots:e._u([e._l(e.$slots,(function(t,o){return{key:o,fn:function(){return[e._t(o)]},proxy:!0}}))],null,!0)},"select-control",e.$attrs,!1),e.$listeners))]},proxy:!0},{key:"error",fn:function(){return[e._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports})(),s})()}));
//# sourceMappingURL=script.js.map