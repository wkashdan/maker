(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[8946],{75483:(e,t,n)=>{"use strict";n.d(t,{vj:()=>E,bf:()=>B,M3:()=>h});var o=n(45832),r=n(13555),i=n.n(r),s=n(21931),l=n(16825);let a=0;const p=()=>(a+=1,a),c={provide(){const e=p(),t="popover-portal-".concat(e),n=s.Z.observable({currentInstance:void 0,actionEl:void 0,ignoreEls:[],clickSrc:void 0,layerId:e,target:t,targetSelector:"#".concat(t),setPopover(e){this.currentInstance&&this.closePopover(),e&&e.actionEl&&(this.actionEl=e.actionEl,this.ignoreEls=e.ignoreEls,this.currentInstance=e.id)},closePopover(){this.currentInstance=void 0}});return this.popoverApi||(this.popoverApi=n),{[l.y]:n}}},d={components:{PseudoWindow:i()},inject:{popoverApi:l.y},data:()=>({fadeInFn:o.dx,fadeOutFn:o.vq}),popoverMixin:c,beforeDestroy(){this.popoverApi.closePopover()},methods:{handleBlur(){document.activeElement!==document.body&&this.popoverApi.closePopover()},trackClickSrc({target:e}){this.popoverApi.clickSrc=e},handleClick(){var e,t;const n=this.$refs.portal;if(!n||!this.popoverApi.clickSrc||!this.popoverApi.currentInstance)return;const o=n.contains(this.popoverApi.clickSrc),r=null===(e=this.popoverApi.actionEl)||void 0===e?void 0:e.contains(this.popoverApi.clickSrc),i=null===(t=this.popoverApi.ignoreEls)||void 0===t?void 0:t.some((e=>{var t;return null===(t=e.contains)||void 0===t?void 0:t.call(e,this.popoverApi.clickSrc)}));o||r||i||this.popoverApi.closePopover(),this.popoverApi.clickSrc=void 0}}};var u=n(42900),v=n.n(u),f=n(51900);const h=(0,f.Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pseudo-window",{on:{"&blur":function(t){return e.handleBlur.apply(null,arguments)}}},[n("pseudo-window",{on:{mousedown:e.trackClickSrc,touchstart:e.trackClickSrc,"!click":function(t){return e.handleClick.apply(null,arguments)},touchend:e.handleClick}},[n("div",{ref:"portal",class:e.$s.PopoverLayer,attrs:{id:e.popoverApi.target}})])],1)],1)}),[],!1,(function(e){this.$s=v().locals||v()}),null,null).exports;var m=n(14219),_=n(79082),b=n(8651),g=n(13077);const x={props:{actionEl:{type:void 0,required:!0},popperConfig:{type:Object,default:void 0}},mounted(){this.popper=(0,g.fi)(this.actionEl,this.$el,this.popperConfig),this.resizeObserver=this.followPopoverAction(),this.$emit("popover-instance:new-popper",this.popper)},beforeDestroy(){this.resizeObserver.disconnect()},updated(){this.popper.update()},methods:{followPopoverAction(){const e=new ResizeObserver((()=>{this.popper.update(),this.$emit("resize")}));return e.observe(this.actionEl),e.observe(document.body),e}}};var y=n(33440),P=n.n(y);const C=(0,f.Z)(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.PopoverInstance},[e._t("default")],2)}),[],!1,(function(e){this.$s=P().locals||P()}),null,null).exports,S=[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:0,altBoundary:!0}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn({state:{styles:e,rects:t}}){e.popper.minWidth="".concat(t.reference.offsetWidth,"px")},effect({state:{elements:e}}){e.popper.style.minWidth="".concat(e.reference.offsetWidth,"px")}}],$={components:{Portal:b.h_,PopoverInstance:C,MTransitionFadeIn:_.j},inject:{popoverApi:{from:l.y,default:()=>(0,m._)("No popover layer detected","Popover")},popoverConfig:{from:l.f,default:{config:void 0}}},props:{placement:{type:String,default:"bottom-start",validator:e=>["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].includes(e)},modifiers:{type:Array,default:()=>S}},data(){const e=this;return{id:p(),currentPopper:void 0,popperToDestroy:void 0,actionAPI:{open(...t){e.isOpen||e.popoverApi.setPopover({actionEl:e.actionEl,ignoreEls:t,id:e.id})},close(){this.popperToDestroy=this.currentPopper,this.currentPopper=void 0,e.popoverApi.closePopover()},toggle(...t){e.isOpen?e.actionAPI.close():e.actionAPI.open(...t)}}}},computed:{actionEl(){if(1===this.$el.children.length)return this.$el.children[0]},popperConfig(){return{placement:this.placement,modifiers:this.modifiers}},isOpen(){return this.popoverApi.currentInstance===this.id}},watch:{isOpen(e){e?this.$emit("open"):this.$emit("close")}},methods:{open(...e){this.actionAPI.open(...e)},close(){this.actionAPI.close()},toggle(...e){this.actionAPI.toggle(...e)},setPopper(e){this.currentPopper=e},destroyPopper(){var e;null===(e=this.popperToDestroy)||void 0===e||e.destroy(),this.popperToDestroy=void 0}}};const E=(0,f.Z)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"contents"}},[e._t("action",null,null,e.actionAPI),e._v(" "),n("portal",{attrs:{selector:e.popoverApi.targetSelector}},[n("div",[n("m-transition-fade-in",{on:{"after-leave":e.destroyPopper}},[e.isOpen?n("popover-instance",{attrs:{"action-el":e.actionEl,"popper-config":e.popperConfig},on:{"popover-instance:new-popper":e.setPopper}},[e._t("content")],2):e._e()],1)],1)])],2)}),[],!1,null,null,null).exports;var k=n(60771),w=n.n(k),A=n(29159);const I={inject:{theme:{default:(0,A.uH)(),from:A.YH}},props:{color:{type:String,default:void 0,validator:e=>w().valid(e)},bgColor:{type:String,default:void 0,validator:e=>w().valid(e)},padding:{type:String,default:"24px",validator:e=>!n.g.CSS||n.g.CSS.supports("padding",e)}},computed:{computedStyles(){const e={};return Object.entries(this.theme.colors).forEach((([t,n])=>{const o=t.includes("neutral")?"--".concat(t):"--color-".concat(t);e[o]=n})),{"--popover-color":this.color,"--popover-bg-color":this.bgColor,"--padding":this.padding,...e}}}};var Z=n(74992),j=n.n(Z);const B=(0,f.Z)(I,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.PopoverContent,style:e.computedStyles},[e._t("default")],2)}),[],!1,(function(e){this.$s=j().locals||j()}),null,null).exports},39211:(e,t,n)=>{"use strict";n.d(t,{T:()=>s});var o=n(31838),r=n(45832);const i={components:{MTransitionResponsive:o.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const s=(0,n(51900).Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition-responsive",e._g(e._b({attrs:{transitions:e.transitions}},"m-transition-responsive",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},31838:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});const o={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:e=>{if(0===e.length)return!1;return 0===e[0].minWidth&&e.every((e=>(e.minWidth||0===e.minWidth)&&e.enter&&e.leave))}}},methods:{handleEnter(e,t){this.getResponsiveTransition().enter({element:e,onComplete:t})},handleLeave(e,t){this.getResponsiveTransition().leave({element:e,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const e=window.innerWidth;let t;return this.transitions.forEach((n=>{e>=n.minWidth&&(t=n)})),t}}};const r=(0,n(51900).Z)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._g(e._b({attrs:{css:!1},on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},45832:(e,t,n)=>{"use strict";n.d(t,{iu:()=>i,OE:()=>s,AT:()=>a,ST:()=>p,hJ:()=>u,Y7:()=>f,dx:()=>y,s4:()=>P,vq:()=>C,vn:()=>S,w0:()=>$,I0:()=>E,$y:()=>k,rG:()=>w,iM:()=>A,tq:()=>I,cT:()=>Z,uL:()=>j,C9:()=>B});var o=n(19546),r=n(47069);const i=0,s=840,l="spring",a=200,p={type:l,stiffness:600,damping:60,mass:1},c={type:l,stiffness:400,damping:40,mass:1},d={type:l,stiffness:400,damping:30,mass:1.5},u={from:0,to:100},v={from:100,to:0};function f(e,t,n,o){return r=>function(e,t,n,o,r){return{[o]:"".concat(e/100*(n-t)+t).concat(r)}}(r,e,t,n,o)}const h=f(0,100,"opacity","%"),m=f(0,100,"y","%"),_=f(0,100,"x","%"),b=f(40,0,"y","px"),g=e=>({...h(e),...b(e)}),x=(e,t)=>{const n=f(t,0,"y","px");return{...h(e),...n(e)}};function y({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function P({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}),a)}function C({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=v;n.set(i(s.from)),n.render(),(0,r.j)({...v,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function S({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=v;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function $({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function E({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=v;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function k({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function w({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=g,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function A({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=g,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}),a)}function I({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=x,s=u,l=20+5*e.dataset.loadIndex;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e,l))},onComplete:t})}function Z({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=g,s=v;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function j({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=v;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e))},onComplete:t})}function B({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e))},onComplete:t})}},36908:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverContent_X9Gka {\n\tpadding: var(--padding);\n\tcolor: var(--popover-color, var(--color-text, black));\n\tbackground-color: var(--popover-bg-color, var(--maker-color-background, white));\n\tborder: 1px solid var(--maker-color-neutral-10);\n\tborder-radius: 8px;\n\tbox-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);\n}\n",""]),o.locals={PopoverContent:"PopoverContent_X9Gka"},e.exports=o},90239:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverInstance__G_vp {\n\tz-index: 1;\n}\n.PopoverInstance__G_vp[data-popper-reference-hidden] {\n\tvisibility: hidden;\n\tpointer-events: none;\n}\n",""]),o.locals={PopoverInstance:"PopoverInstance__G_vp"},e.exports=o},29096:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverLayer_MBxkh {\n\toverflow: hidden;\n}\n",""]),o.locals={PopoverLayer:"PopoverLayer_MBxkh"},e.exports=o},38670:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tMost (if not all) of these should be provided\n\tby the Theme Context, but this is a placeholder\n\tuntil we get a Theme Context component\n*/\n.variant_fill_MNP6k {\n\t--color-background: var(--maker-color-neutral-10, #f6f7f9);\n\t--color-border: transparent;\n}\n.variant_outline_K9CIe {\n\t--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));\n}\n.SelectContainer_i5cEi {\n\t--color-placeholder: var(--maker-color-neutral-80, rgba(0, 0, 0, 0.55));\n\t--color-foreground: var(--maker-color-neutral-90, rgba(2, 1, 1, 0.9));\n\t--color-border-active: var(--maker-color-neutral-80, #222);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--border-radius: 8px;\n\n\tposition: relative;\n\tbox-sizing: border-box;\n\tmin-width: 80px;\n\tfont-size: 16px;\n\tborder-radius: var(--border-radius);\n}\n.Prefix_pnDG1 {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 16px;\n\tline-height: 0;\n\ttransform: translateY(-50%);\n\tpointer-events: none;\n}\n.Select_QHt8E,\n.SelectButton_abtNx {\n\tdisplay: flex;\n\talign-items: center;\n\tbox-sizing: inherit;\n\twidth: 100%;\n\theight: 48px;\n\tpadding: 0 32px 0 16px;\n\toverflow: hidden;\n\tcolor: var(--color-foreground);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: inherit;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: border-color 0.2s ease;\n\t-webkit-appearance: none;\n\t        appearance: none\n}\n.Select_QHt8E.hasPrefix_wDbAV, .SelectButton_abtNx.hasPrefix_wDbAV {\n\t\t/* select left padding + icon width + icon right padding */\n\t\tpadding-left: calc(16px + 16px + 8px);\n}\n.Select_QHt8E.selected_YEaIi, .SelectButton_abtNx.selected_YEaIi {\n\t\tcolor: var(--color-foreground);\n}\n.Select_QHt8E:not(:disabled, :invalid):hover, .SelectButton_abtNx:not(:disabled, :invalid):hover {\n\t\tborder-color: var(--color-border-active);\n}\n.Select_QHt8E:not(:disabled, :invalid):focus, .Select_QHt8E:not(:disabled, :invalid):active, .SelectButton_abtNx:not(:disabled, :invalid):focus, .SelectButton_abtNx:not(:disabled, :invalid):active {\n\t\tborder-color: var(--color-border-active);\n}\n.Select_QHt8E:disabled, .SelectButton_abtNx:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Select_QHt8E:invalid, .SelectButton_abtNx:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Select_QHt8E::-ms-expand, .SelectButton_abtNx::-ms-expand {\n\t\tdisplay: none;\n}\n.Icon_vqrGe {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 16px;\n\twidth: 16px;\n\theight: 16px;\n\tcolor: var(--color-foreground);\n\ttransform: translateY(-50%);\n\tpointer-events: none;\n}\n",""]),o.locals={variant_fill:"variant_fill_MNP6k",variant_outline:"variant_outline_K9CIe",SelectContainer:"SelectContainer_i5cEi",Prefix:"Prefix_pnDG1",Select:"Select_QHt8E",SelectButton:"SelectButton_abtNx",hasPrefix:"hasPrefix_wDbAV",selected:"selected_YEaIi",Icon:"Icon_vqrGe"},e.exports=o},93966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(58300);const r={components:{ChevronDownIcon:n.n(o)()},inheritAttrs:!1,model:{prop:"value",event:"select:update"},props:{variant:{type:String,default:"fill",validator:e=>["fill","outline"].includes(e)},value:{type:String,default:void 0},placeholder:{type:String,default:""},options:{type:Array,default:()=>[]},invalid:{type:Boolean,default:!1}},computed:{selected:{get(){return this.value},set(e){return this.$emit("select:update",e),e}},optionSelected(){return this.options.find((e=>e.value===this.value))},placeholderValue(){return this.optionSelected?void 0:this.value}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{setCustomValidity(){var e,t;const n=this.invalid?"invalid":"";null===(e=this.$refs)||void 0===e||null===(t=e.select)||void 0===t||t.setCustomValidity(n)}}};var i=n(40182),s=n.n(i);const l=(0,n(51900).Z)(r,(function(){var e,t,n=this,o=n.$createElement,r=n._self._c||o;return r("div",{class:[n.$s.SelectContainer,n.$s["variant_"+n.variant]]},[n.$slots.prefix?r("span",{class:n.$s.Prefix},[n._t("prefix")],2):n._e(),n._v(" "),n.$slots.default?r("button",n._g(n._b({class:[n.$s.SelectButton,(e={},e[n.$s.hasPrefix]=n.$slots.prefix,e)]},"button",n.$attrs,!1),n.$listeners),[r("span",[n._t("default")],2)]):r("select",n._g(n._b({directives:[{name:"model",rawName:"v-model",value:n.selected,expression:"selected"}],ref:"select",class:[n.$s.Select,(t={},t[n.$s.selected]=n.optionSelected,t[n.$s.invalid]=n.invalid,t[n.$s.hasPrefix]=n.$slots.prefix,t)],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));n.selected=e.target.multiple?t:t[0]}}},"select",n.$attrs,!1),n.$listeners),[n.placeholder?r("option",{attrs:{disabled:""},domProps:{value:n.placeholderValue}},[n._v("\n\t\t\t"+n._s(n.placeholder)+"\n\t\t")]):n._e(),n._v(" "),n._l(n.options,(function(e){return r("option",{key:e.value,attrs:{disabled:e.disabled},domProps:{value:e.value,selected:e.value===n.value}},[n._v("\n\t\t\t"+n._s(e.label)+"\n\t\t")])}))],2),n._v(" "),r("chevron-down-icon",{class:n.$s.Icon})],1)}),[],!1,(function(e){this.$s=s().locals||s()}),null,null).exports},74992:(e,t,n)=>{var o=n(36908);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("50e8b4fa",o,!0,{})},33440:(e,t,n)=>{var o=n(90239);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("28cbe907",o,!0,{})},42900:(e,t,n)=>{var o=n(29096);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("78825d03",o,!0,{})},40182:(e,t,n)=>{var o=n(38670);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("f916da2c",o,!0,{})}}]);