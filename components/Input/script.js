!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("../../components/BlockFormControlLayout"));else if("function"==typeof define&&define.amd)define(["../../components/BlockFormControlLayout"],e);else{var n="object"==typeof exports?e(require("../../components/BlockFormControlLayout")):e(t["../../components/BlockFormControlLayout"]);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,(function(t){return(()=>{"use strict";var e={662:e=>{e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{MInput:()=>l});var t=o(662);const e={inheritAttrs:!1,model:{event:"input:update"},props:{variant:{type:String,default:"fill",validator:t=>["fill","outline"].includes(t)},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},align:{type:String,default:"left",validator:t=>["left","right"].includes(t)}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()},setCustomValidity(){const t=this.invalid?"invalid":"";this.$refs.input.setCustomValidity(t)}}},n={variant_fill:"📚0-0-0-semantic-releaseCNuZQ",variant_outline:"📚0-0-0-semantic-release_2TXJ",Affix:"📚0-0-0-semantic-releaseswXoB",Prefix:"📚0-0-0-semantic-releaseqI9Qu",Suffix:"📚0-0-0-semantic-releaseDu2TA",InputContainer:"📚0-0-0-semantic-release_FrL8",disabled:"📚0-0-0-semantic-releaseZTPmq",invalid:"📚0-0-0-semantic-release_8xt2",Input:"📚0-0-0-semantic-releaseU4Dfn",align_left:"📚0-0-0-semantic-releasejZ_Vi",align_right:"📚0-0-0-semantic-releaseL_V3_"};function i(t,e,n,o,r,i,s,l){var a,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=a):r&&(a=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(u.functional){u._injectStyles=a;var f=u.render;u.render=function(t,e){return a.call(e),f(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,a):[a]}return{exports:t,options:u}}var s=i(e,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:[e.$s.InputContainer,e.$s["variant_"+e.variant],(t={},t[e.$s.disabled]=e.disabled,t[e.$s.invalid]=e.invalid,t)],on:{click:e.focus}},[o("input",e._g(e._b({ref:"input",class:[e.$s.Input,e.$s["align_"+e.align]],attrs:{disabled:e.disabled},on:{input:function(t){return e.$emit("input:update",t.target.value)}}},"input",e.$attrs,!1),e.$listeners)),e._v(" "),e.$slots.prefix?o("span",{class:[e.$s.Affix,e.$s.Prefix]},[e._t("prefix")],2):e._e(),e._v(" "),e.$slots.suffix?o("span",{class:[e.$s.Affix,e.$s.Suffix]},[e._t("suffix")],2):e._e()])}),[],!1,(function(t){this.$s=n.locals||n}),null,null);const l=i({components:{InputControl:s.exports,MBlockFormControlLayout:t.MBlockFormControlLayout},inheritAttrs:!1,model:{event:"input:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}},methods:{focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-block-form-control-layout",{scopedSlots:t._u([{key:"control",fn:function(){return[n("input-control",t._g(t._b({ref:"input",attrs:{invalid:t.isInvalid},scopedSlots:t._u([t._l(t.$slots,(function(e,n){return{key:n,fn:function(){return[t._t(n)]},proxy:!0}}))],null,!0)},"input-control",t.$attrs,!1),t.$listeners))]},proxy:!0},{key:"error",fn:function(){return[t._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports})(),r})()}));
//# sourceMappingURL=script.js.map