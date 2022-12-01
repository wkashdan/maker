(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[8233],{19418:(e,t,o)=>{"use strict";o.d(t,{vj:()=>S,bf:()=>W,M3:()=>h});var n=o(45832),r=o(13555),s=o.n(r),i=o(21931);const p=Symbol("PopoverConfig"),l=Symbol("PopoverLayer");let a=0;const c=()=>(a+=1,a),d={provide(){const e=c(),t="popover-portal-".concat(e),o=i.Z.observable({currentInstance:void 0,actionEl:void 0,ignoreEls:[],clickSrc:void 0,layerId:e,target:t,targetSelector:"#".concat(t),setPopover(e){this.currentInstance&&this.closePopover(),e&&e.actionEl&&(this.actionEl=e.actionEl,this.ignoreEls=e.ignoreEls,this.currentInstance=e.id)},closePopover(){this.currentInstance=void 0}});return this.popoverApi||(this.popoverApi=o),{[l]:o}}},u={components:{PseudoWindow:s()},inject:{popoverApi:l},data:()=>({fadeInFn:n.dx,fadeOutFn:n.vq}),popoverMixin:d,beforeDestroy(){this.popoverApi.closePopover()},methods:{handleBlur(){document.activeElement!==document.body&&this.popoverApi.closePopover()},trackClickSrc({target:e}){this.popoverApi.clickSrc=e},handleClick(){var e,t;const o=this.$refs.portal;if(!o||!this.popoverApi.clickSrc||!this.popoverApi.currentInstance)return;const n=o.contains(this.popoverApi.clickSrc),r=null===(e=this.popoverApi.actionEl)||void 0===e?void 0:e.contains(this.popoverApi.clickSrc),s=null===(t=this.popoverApi.ignoreEls)||void 0===t?void 0:t.some((e=>{var t;return null===(t=e.contains)||void 0===t?void 0:t.call(e,this.popoverApi.clickSrc)}));n||r||s||this.popoverApi.closePopover(),this.popoverApi.clickSrc=void 0}}};var v=o(42900),f=o.n(v),m=o(51900);const h=(0,m.Z)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("pseudo-window",{on:{"&blur":function(t){return e.handleBlur.apply(null,arguments)}}},[o("pseudo-window",{on:{mousedown:e.trackClickSrc,touchstart:e.trackClickSrc,"!click":function(t){return e.handleClick.apply(null,arguments)},touchend:e.handleClick}},[o("div",{ref:"portal",class:e.$s.PopoverLayer,attrs:{id:e.popoverApi.target}})])],1)],1)}),[],!1,(function(e){this.$s=f().locals||f()}),null,null).exports;var g=o(14219),y=o(62355),P=o(8651),C=o(13077);const _={props:{actionEl:{type:void 0,required:!0},popperConfig:{type:Object,default:void 0}},mounted(){this.popper=(0,C.fi)(this.actionEl,this.$el,this.popperConfig),this.resizeObserver=this.followPopoverAction(),this.$emit("popover-instance:new-popper",this.popper)},beforeDestroy(){this.resizeObserver.disconnect()},updated(){this.popper.update()},methods:{followPopoverAction(){const e=new ResizeObserver((()=>{this.popper.update(),this.$emit("resize")}));return e.observe(this.actionEl),e.observe(document.body),e}}};var b=o(33440),A=o.n(b);const k=(0,m.Z)(_,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.PopoverInstance},[e._t("default")],2)}),[],!1,(function(e){this.$s=A().locals||A()}),null,null).exports,x=[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:0,altBoundary:!0}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn({state:{styles:e,rects:t}}){e.popper.minWidth="".concat(t.reference.offsetWidth,"px")},effect({state:{elements:e}}){e.popper.style.minWidth="".concat(e.reference.offsetWidth,"px")}}],E={components:{Portal:P.h_,PopoverInstance:k,MTransitionFadeIn:y.j},inject:{popoverApi:{from:l,default:()=>(0,g._)("No popover layer detected","Popover")},popoverConfig:{from:p,default:{config:void 0}}},props:{placement:{type:String,default:"bottom-start",validator:e=>["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].includes(e)},modifiers:{type:Array,default:()=>x}},data(){const e=this;return{id:c(),currentPopper:void 0,popperToDestroy:void 0,actionAPI:{open(...t){e.isOpen||e.popoverApi.setPopover({actionEl:e.actionEl,ignoreEls:t,id:e.id})},close(){this.popperToDestroy=this.currentPopper,this.currentPopper=void 0,e.popoverApi.closePopover()},toggle(...t){e.isOpen?e.actionAPI.close():e.actionAPI.open(...t)}}}},computed:{actionEl(){if(1===this.$el.children.length)return this.$el.children[0]},popperConfig(){return{placement:this.placement,modifiers:this.modifiers}},isOpen(){return this.popoverApi.currentInstance===this.id}},watch:{isOpen(e){e?this.$emit("open"):this.$emit("close")}},methods:{open(...e){this.actionAPI.open(...e)},close(){this.actionAPI.close()},toggle(...e){this.actionAPI.toggle(...e)},setPopper(e){this.currentPopper=e},destroyPopper(){var e;null===(e=this.popperToDestroy)||void 0===e||e.destroy(),this.popperToDestroy=void 0}}};const S=(0,m.Z)(E,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"contents"}},[e._t("action",null,null,e.actionAPI),e._v(" "),o("portal",{attrs:{selector:e.popoverApi.targetSelector}},[o("div",[o("m-transition-fade-in",{on:{"after-leave":e.destroyPopper}},[e.isOpen?o("popover-instance",{attrs:{"action-el":e.actionEl,"popper-config":e.popperConfig},on:{"popover-instance:new-popper":e.setPopper}},[e._t("content")],2):e._e()],1)],1)])],2)}),[],!1,null,null,null).exports;var $=o(9152),I=o(2606),Z=o(46475),w=o(55412);const j={components:{MTheme:I.qo},props:{color:{type:String,default:void 0,validator:e=>(0,$.Vi)(e).isValid()},bgColor:{type:String,default:void 0,validator:e=>(0,$.Vi)(e).isValid()},padding:{type:String,default:"24px",validator:e=>!o.g.CSS||o.g.CSS.supports("padding",e)}},computed:{styles(){return{"--padding":this.padding}},theme(){let e={};return this.bgColor&&(e=(0,w.Z)(this.bgColor)),this.color&&(e.body=(0,Z.mj)(e.background,this.color,Z.dL)),{colors:e}}}};var T=o(74992),U=o.n(T);const W=(0,m.Z)(j,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-theme",{class:e.$s.PopoverContent,style:e.styles,attrs:{theme:e.theme}},[e._t("default")],2)}),[],!1,(function(e){this.$s=U().locals||U()}),null,null).exports},94569:(e,t,o)=>{"use strict";o.d(t,{T:()=>i});var n=o(77386),r=o(45832);const s={components:{MTransitionResponsive:n.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const i=(0,o(51900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition-responsive",e._g(e._b({attrs:{transitions:e.transitions}},"m-transition-responsive",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},77386:(e,t,o)=>{"use strict";o.d(t,{w:()=>r});const n={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:e=>{if(0===e.length)return!1;return 0===e[0].minWidth&&e.every((e=>(e.minWidth||0===e.minWidth)&&e.enter&&e.leave))}}},methods:{handleEnter(e,t){this.getResponsiveTransition().enter({element:e,onComplete:t})},handleLeave(e,t){this.getResponsiveTransition().leave({element:e,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const e=window.innerWidth;let t;return this.transitions.forEach((o=>{e>=o.minWidth&&(t=o)})),t}}};const r=(0,o(51900).Z)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._g(e._b({attrs:{css:!1},on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},45832:(e,t,o)=>{"use strict";o.d(t,{iu:()=>s,OE:()=>i,AT:()=>l,ST:()=>a,hJ:()=>u,Y7:()=>f,dx:()=>_,s4:()=>b,vq:()=>A,vn:()=>k,w0:()=>x,I0:()=>E,$y:()=>S,rG:()=>$,iM:()=>I,tq:()=>Z,cT:()=>w,uL:()=>j,C9:()=>T});var n=o(19546),r=o(47069);const s=0,i=840,p="spring",l=200,a={type:p,stiffness:600,damping:60,mass:1},c={type:p,stiffness:400,damping:40,mass:1},d={type:p,stiffness:400,damping:30,mass:1.5},u={from:0,to:100},v={from:100,to:0};function f(e,t,o,n){return r=>function(e,t,o,n,r){return{[n]:"".concat(e/100*(o-t)+t).concat(r)}}(r,e,t,o,n)}const m=f(0,100,"opacity","%"),h=f(0,100,"y","%"),g=f(0,100,"x","%"),y=f(40,0,"y","px"),P=e=>({...m(e),...y(e)}),C=(e,t)=>{const o=f(t,0,"y","px");return{...m(e),...o(e)}};function _({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=m,i=u;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function b({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=m,i=u;o.set(s(i.from)),o.render(),setTimeout((()=>{(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}),l)}function A({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=m,i=v;o.set(s(i.from)),o.render(),(0,r.j)({...v,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function k({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=h,i=v;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function x({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=h,i=u;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function E({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=g,i=v;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function S({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=g,i=u;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function $({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=P,i=u;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function I({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=P,i=u;o.set(s(i.from)),o.render(),setTimeout((()=>{(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}),l)}function Z({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=C,i=u,p=20+5*e.dataset.loadIndex;o.set(s(i.from)),o.render(),(0,r.j)({...i,...c,onUpdate(e){o.set(s(e,p))},onComplete:t})}function w({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=P,i=v;o.set(s(i.from)),o.render(),(0,r.j)({...i,...a,onUpdate(e){o.set(s(e))},onComplete:t})}function j({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=h,i=v;o.set(s(i.from)),o.render(),(0,r.j)({...i,...d,onUpdate(e){o.set(s(e))},onComplete:t})}function T({element:e,onComplete:t}){const o=(0,n.ZP)(e),s=h,i=u;o.set(s(i.from)),o.render(),(0,r.j)({...i,...d,onUpdate(e){o.set(s(e))},onComplete:t})}},36908:(e,t,o)=>{var n=o(77705)((function(e){return e[1]}));n.push([e.id,"\n.PopoverContent_X9Gka {\n\tpadding: var(--padding);\n\tcolor: var(--maker-color-body, #000000);\n\tbackground-color: var(--maker-color-background, #ffffff);\n\tborder: 1px solid var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\tbox-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);\n}\n",""]),n.locals={PopoverContent:"PopoverContent_X9Gka"},e.exports=n},90239:(e,t,o)=>{var n=o(77705)((function(e){return e[1]}));n.push([e.id,"\n.PopoverInstance__G_vp {\n\tz-index: 1;\n}\n.PopoverInstance__G_vp[data-popper-reference-hidden] {\n\tvisibility: hidden;\n\tpointer-events: none;\n}\n",""]),n.locals={PopoverInstance:"PopoverInstance__G_vp"},e.exports=n},29096:(e,t,o)=>{var n=o(77705)((function(e){return e[1]}));n.push([e.id,"\n.PopoverLayer_MBxkh {\n\toverflow: hidden;\n}\n",""]),n.locals={PopoverLayer:"PopoverLayer_MBxkh"},e.exports=n},74992:(e,t,o)=>{var n=o(36908);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(54023).Z)("50e8b4fa",n,!0,{})},33440:(e,t,o)=>{var n=o(90239);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(54023).Z)("28cbe907",n,!0,{})},42900:(e,t,o)=>{var n=o(29096);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(54023).Z)("78825d03",n,!0,{})}}]);