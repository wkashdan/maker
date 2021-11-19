(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[923],{2492:function(t,e,n){"use strict";n.d(e,{x6:function(){return u},Pj:function(){return k},UJ:function(){return o}});var o=Symbol("modalApiKey"),a=n(771),i=n.n(a),r=n(1098),s={name:"Modal",inject:{modalApi:o,theme:{default:(0,r.uH)(),from:r.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>i().valid(t)},color:{type:String,default:void 0,validator:t=>i().valid(t)}},computed:{...(0,r.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},l=n(5027),c=n.n(l),d=n(1900);var u=(0,d.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Modal,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,p=n(7818),m=n.n(p);(0,d.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var f=n(1931),h=n(7062),v=n(3555),b=n.n(v),_=n(9082),y=n(1838),x=n(5832);const g={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:f.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[o]:e}}};var C={name:"ModalLayer",components:{V:h.Z,PseudoWindow:b(),MTransitionFadeIn:_.j,MTransitionResponsive:y.w},mixins:[g],inheritAttrs:!1,apiMixin:g,data(){let t=x.rG,e=x.cT;return this.currentLayer.state.isStacked&&(t=x.iM,e=x.cT),{transitions:[{minWidth:x.iu,enter:x.vn,leave:x.w0},{minWidth:x.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=x.OE,n=!e,o=!!t.modalApi.state.vnode,a=!o,i=this.$refs.baseModalLayer;i&&(e&&o?(0,x.vq)({element:i}):e&&a?(0,x.s4)({element:i}):n&&o?setTimeout((()=>{i.style.opacity="0%"}),x.AT):n&&a&&i.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},L=n(5189),M=n.n(L);var k=(0,d.Z)(C,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.vnode?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=M().locals||M()}),null,null).exports},2971:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Container_qgBQ0 {\n\tpadding: 16px 24px;\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-family: inherit;\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--neutral-90, inherit));\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tfont-size: 14px;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),o.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},t.exports=o},8856:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},4483:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.modal[data-v-70035052] {\n\tbackground-color: inherit;\n}\n.section[data-v-70035052] {\n\tmargin-bottom: 16px;\n}\n.option-cost[data-v-70035052] {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 16px;\n}\n.option-control[data-v-70035052] {\n\tflex: 1 0 auto;\n}\n.option-cost-label[data-v-70035052] {\n\tflex: 0 0 auto;\n\tmargin: 0;\n}\n.has-options[data-v-70035052] {\n\tpadding-bottom: 16px;\n}\n.icon[data-v-70035052] {\n\twidth: 24px;\n\theight: 24px;\n}\n.cover-photo[data-v-70035052] {\n\twidth: 100%;\n\theight: 280px;\n}\n",""]),t.exports=o},2923:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return M}});var o=n(771),a=n.n(o),i=n(2416),r=n(1098),s={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},bgColor:{type:String,default:void 0,validator:t=>a().valid(t)||"transparent"===t},color:{type:String,default:void 0,validator:t=>a().valid(t)}},computed:{...(0,r.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){i.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),i.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),i.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}},l=n(8187),c=n.n(l),d=n(1900);var u=(0,d.Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g(t._b({class:[t.$s.Container,t.$s["size_"+t.size]],style:t.style},"section",t.$attrs,!1),t.$listeners),[n("header",{class:t.$s.Header},[t.hasLabel?n("div",{class:t.$s.Label},[t._t("label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]})),t._v(" "),t.hasSublabel?n("div",{class:t.$s.Sublabel},[t._t("sublabel",(function(){return[t._v("\n\t\t\t\t\t"+t._s(t.sublabel)+"\n\t\t\t\t")]}))],2):t._e()],2):t._e(),t._v(" "),t.hasRequirementLabel?n("div",{class:t.$s.RequirementLabel},[t._t("requirement-label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.requirementLabel)+"\n\t\t\t")]}))],2):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,p=n(2492),m=n(193),f=n(990),h=n(7607),v=n(8832),b=n(7819),_=n(1167),y=n(1781),x=n(7988),g=n(9893),C=n.n(g),L={components:{MModal:p.x6,MImage:m.F,MContainer:u,MText:f.H,MRadio:h.H,MDivider:v.j,MInput:b.z,MStepper:_.f,MInlineActionBar:y.pE,MActionBarButton:y.n5,MCheckbox:x._,XIcon:C()},inject:{modalApi:p.UJ},props:{item:{type:Object,required:!0}},computed:{addAmount(){let t=Number.NaN;if(this.item.cost&&(t=this.item.cost),!t&&this.item.oneOf){const e=this.item.oneOf[0],{selected:n}=e;n&&(t=e.options.find((t=>t.name===n)).cost)}if(!this.item.anyOf)return this.item.quantity*t;let e=0;for(let t=0;t<this.item.anyOf.length;t+=1){const n=this.item.anyOf[t],{selected:o}=n;e+=n.options.map((t=>{if(o.includes(t.name))return t.cost;return 0})).reduce(((t,e)=>t+e),0)}return this.item.quantity*(t+e)},canPlaceOrder(){return!this.item.oneOf||!!this.item.oneOf.every((t=>!!t.selected))}},methods:{formatCost(t){if(Number.isNaN(t)||!t&&0!==t)return"";return`$${(t/100).toFixed(2)}`}}},M=(n(5238),(0,d.Z)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:t.item.photo}})],1),t._v(" "),n("m-container",{staticClass:"section",attrs:{label:t.item.name,size:"large"}},[n("m-text",{staticStyle:{margin:"0 0 16px 0"},attrs:{size:-1}},[t._v("\n\t\t\t"+t._s(t.item.description)+"\n\t\t")])],1),t._v(" "),t._l(t.item.oneOf,(function(e){return n("m-container",{key:e.name,staticClass:"section has-options",attrs:{label:e.name},scopedSlots:t._u([{key:"requirement-label",fn:function(){return[t._v("\n\t\t\tPick one\n\t\t")]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.options,(function(o,a){return n("div",{key:o.name,staticStyle:{"padding-top":"16px"}},[n("div",{staticClass:"option-cost"},[n("m-radio",{staticClass:"option-control",attrs:{value:o.name},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"oneOf.selected"}},[t._v("\n\t\t\t\t\t"+t._s(o.name)+"\n\t\t\t\t")]),t._v(" "),o.cost?n("m-text",{staticClass:"option-cost-label",attrs:{size:-1}},[t._v("\n\t\t\t\t\t"+t._s(t.formatCost(o.cost))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),a+1!==e.options.length?n("m-divider"):t._e()],1)}))],2)})),t._v(" "),t._l(t.item.anyOf,(function(e){return n("m-container",{key:e.name,staticClass:"section has-options",attrs:{label:e.name},scopedSlots:t._u([{key:"requirement-label",fn:function(){return[t._v("\n\t\t\tPick any\n\t\t")]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.options,(function(o,a){return n("div",{key:o.name,staticStyle:{"padding-top":"16px"}},[n("div",{staticClass:"option-cost"},[n("m-checkbox",{staticClass:"option-control",attrs:{value:o.name},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"anyOf.selected"}},[t._v("\n\t\t\t\t\t"+t._s(o.name)+"\n\t\t\t\t")]),t._v(" "),o.cost?n("m-text",{staticClass:"option-cost-label",attrs:{size:-1}},[t._v("\n\t\t\t\t\t"+t._s(t.formatCost(o.cost))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),a+1!==e.options.length?n("m-divider"):t._e()],1)}))],2)})),t._v(" "),n("m-container",{staticClass:"section",staticStyle:{"margin-bottom":"120px"},attrs:{label:"Special requests"}},[n("m-input",{attrs:{placeholder:"allergies, extra sauce, no onions, etc"}}),t._v(" "),n("m-stepper",{staticStyle:{"margin-top":"16px"},attrs:{min:1},model:{value:t.item.quantity,callback:function(e){t.$set(t.item,"quantity",e)},expression:"item.quantity"}})],1),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"close",on:{click:function(e){return t.modalApi.close()}}},[n("x-icon",{staticClass:"icon"})],1),t._v(" "),n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.formatCost(t.addAmount))+"\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAdd to order\n\t\t\t")])],1)],2)}),[],!1,null,"70035052",null).exports)},8187:function(t,e,n){var o=n(2971);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("a829cb1e",o,!0,{})},5027:function(t,e,n){var o=n(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("092310f5",o,!0,{})},7818:function(t,e,n){var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("179c170a",o,!0,{})},5189:function(t,e,n){var o=n(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7fc46ffb",o,!0,{})},5238:function(t,e,n){var o=n(4483);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("62bd05db",o,!0,{})}}]);