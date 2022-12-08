(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[212],{6212:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var r=e(4058);const s={inject:{parentToastApi:{default:void 0,from:r.rf}},provide(){const n={...this.parentToastApi};return n.closeSelf=()=>{this.parentToastApi.close(this.renderFn)},{[r.rf]:n}},props:{renderFn:{type:Function,required:!0}},render(n){return this.renderFn(n)}}},2265:(n,t,e)=>{"use strict";e.d(t,{O:()=>c});var r=e(7060),s=e(2416),o=e(2606);const a={medium:"16px",large:"24px"},i={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)},color:{type:String,default:void 0,validator:(0,r.Z)("color")}},computed:{...(0,o.C9)("icon",["pattern","name","color"]),iconComponent(){const n=this.theme.icons[this.resolvedName];return s.Z.error(n,"'".concat(this.resolvedName,"' icon not defined in theme"),"Icon"),n},inlineStyles(){return{"--color":this.resolvedColor,"--icon-size":a[this.size]}}}};var l=e(3468),d=e.n(l);const c=(0,e(1900).Z)(i,(function(){var n=this,t=n.$createElement;return(n._self._c||t)(n.iconComponent,n._g(n._b({tag:"component",class:n.$s.Icon,style:n.inlineStyles},"component",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=d().locals||d()}),null,null).exports},9782:(n,t,e)=>{"use strict";e.d(t,{v:()=>l});var r=e(2606),s=e(7060);const o={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},size:{type:String,default:void 0,validator:n=>["xsmall","small","medium","large"].includes(n)},shape:{type:String,default:void 0,validator:n=>["squared","rounded","pill"].includes(n)},color:{type:String,default:void 0,validator:(0,s.Z)("color")},progress:{type:Number,default:0,validator:n=>n>=0&&n<=100}},computed:{...(0,r.C9)("progressbar",["pattern","color","size","shape"]),barStyles(){return{"--bar-color":this.resolvedColor,"--fill-percent":"".concat(this.progress,"%")}}}};var a=e(3619),i=e.n(a);const l=(0,e(1900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",n._g(n._b({class:[n.$s.ProgressBarContainer,n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape]],attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n.progress}},"div",n.$attrs,!1),n.$listeners),[e("div",{class:[n.$s.ProgressBar,n.$s["shape_"+n.resolvedShape]],style:n.barStyles})])}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports},4058:(n,t,e)=>{"use strict";e.d(t,{HN:()=>l,cA:()=>P,rf:()=>r});const r=Symbol("toastApiKey");const s={inject:{toastApi:r},inheritAttrs:!1,props:{persistent:{type:Boolean,default:!1},dismissAfter:{type:Number,default:5e3}},data:()=>({mouseEnterAt:0,mouseLeaveAt:0,closeQueued:!1}),computed:{listeners(){const n={...this.$listeners};return this.persistent||(n["&mouseenter"]=this.onMouseEnter,n["&mouseleave"]=this.onMouseLeave),n}},mounted(){this.persistent||this.closeSelfIn(this.dismissAfter)},methods:{onMouseEnter(){this.mouseEnterAt=Date.now()},onMouseLeave(){if(this.mouseLeaveAt=Date.now(),!this.closeQueued)return;this.closeSelfIn(1e3)},closeSelfIn(n){this.closeQueued=!1,setTimeout((()=>{this.mouseLeaveAt>=this.mouseEnterAt?this.toastApi.closeSelf():this.closeQueued=!0}),n)}}};var o=e(3656),a=e.n(o),i=e(1900);const l=(0,i.Z)(s,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",n._g(n._b({class:n.$s.Bread},"div",n.$attrs,!1),n.listeners),[n._t("default")],2)}),[],!1,(function(n){this.$s=a().locals||a()}),null,null).exports;var d=e(1931),c=e(9582);const p={inject:{parentToastApi:{default:void 0,from:r}},provide(){const n={...this.parentToastApi};return n.closeSelf=()=>{this.parentToastApi.close(this.renderFn)},{[r]:n}},props:{renderFn:{type:Function,required:!0}},render(n){return this.renderFn(n)}};function u(n,t){return{...t,key:Math.random().toString(36).slice(2,12),renderFn:n}}const f={provide(){const n={state:d.Z.observable({toasts:[]}),open(n,t={}){const e=u(n,t);return this.state.toasts.push(e),()=>{const n=this.state.toasts.indexOf(e);if(-1!==n){const t=1;this.state.toasts.splice(n,t)}}},close(n){const t=this.state.toasts.find((t=>t.renderFn===n));if(!t)return;const e=this.state.toasts.indexOf(t);if(-1===e)return;this.state.toasts.splice(e,1)},closeAll(){for(;this.state.toasts.length;)this.state.toasts.pop()}};return this.toastApi||(this.toastApi=n),{[r]:n}}},h={components:{MTransitionStack:c.w,ToastRenderFn:p},inject:{toastApi:r},inheritAttrs:!1,apiMixin:f,computed:{addActionbarOffset(){return!!this.toastApi.state.toasts.find((n=>n.actionbarOffset))}}};var _=e(3795),v=e.n(_);(0,i.Z)(h,(function(){var n,t=this,e=t.$createElement,r=t._self._c||e;return r("m-transition-stack",{class:[t.$s.FullScreenFixed,(n={},n[t.$s.ActionbarOffset]=t.addActionbarOffset,n)],attrs:{"before-enter-class":t.$s.fade_bottom}},t._l(t.toastApi.state.toasts,(function(n){return r("toast-render-fn",{key:n.key,attrs:{"render-fn":n.renderFn}})})),1)}),[],!1,(function(n){this.$s=v().locals||v()}),null,null).exports;var m=e(2606);const g={inheritAttrs:!1};var x=e(9799),b=e.n(x);const C=(0,i.Z)(g,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",n._g(n._b({class:n.$s.VerticalDivider},"div",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=b().locals||b()}),null,null).exports;var y=e(9782),A=e(2014),B=e(2265),S=e(990),T=e(7060);const $={components:{MBread:l,MIcon:B.O,MProgressBar:y.v,MTextButton:A.j,MText:S.H,MVerticalDivider:C},inject:{toastApi:r,theme:{default:(0,m.uH)(),from:m.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},persistent:{type:Boolean,default:void 0},dismissAfter:{type:Number,default:void 0},iconName:{type:String,default:void 0},showIcon:{type:Boolean,default:void 0},text:{type:String,default:""},progress:{type:Number,default:void 0,validator:n=>n>=0&&n<=100},color:{type:String,default:void 0,validator:(0,T.Z)("color")},accentColor:{type:String,default:void 0,validator:(0,T.Z)("color")},bgColor:{type:String,default:void 0,validator:(0,T.Z)("color")},actions:{type:Array,default:()=>[],validator(n){for(const t of n)if(!t.text||!t.click)return!1;return!0}}},computed:{...(0,m.C9)("toast",["pattern","persistent","dismissAfter","color","bgColor","accentColor","iconName","showIcon"]),enhanceContrast(){return this.resolvedBgColor===this.theme.colors.background},hasProgress(){return this.progress||0===this.progress},style(){const n={};return this.resolvedAccentColor&&(n["--toast-accent-color"]=this.resolvedAccentColor),this.resolvedBgColor&&(n["--toast-bg-color"]=this.resolvedBgColor),this.resolvedColor&&(n["--toast-color"]=this.resolvedColor),n},dividerStyle(){const n={};return this.resolvedColor&&(n.backgroundColor=this.resolvedColor,n.opacity="0.4"),n}}};var k=e(1107),w=e.n(k);const P=(0,i.Z)($,(function(){var n,t=this,e=t.$createElement,r=t._self._c||e;return r("m-bread",t._g(t._b({class:[t.$s.Toast,(n={},n[t.$s.EnhanceContrast]=t.enhanceContrast,n)],style:t.style,attrs:{persistent:t.resolvedPersistent,"dismiss-after":t.resolvedDismissAfter}},"m-bread",t.$attrs,!1),t.$listeners),[r("div",{class:t.$s.ToastContent},[t.resolvedShowIcon?r("div",{class:t.$s.IconContainer},[t._t("icon",(function(){return[r("m-icon",{attrs:{name:t.resolvedIconName}})]}))],2):t._e(),t._v(" "),r("div",{class:t.$s.TextAndActions},[r("m-text",{class:t.$s.Text,attrs:{element:"span",color:t.resolvedColor}},[t._v("\n\t\t\t\t"+t._s(t.text)+"\n\t\t\t")]),t._v(" "),r("div",{class:t.$s.Actions},[t._l(t.actions,(function(n,e){return[r("m-text-button",{key:n.text+"button",attrs:{size:"large",color:t.resolvedColor},on:{click:n.click}},[t._v("\n\t\t\t\t\t\t"+t._s(n.text)+"\n\t\t\t\t\t")]),t._v(" "),e!==t.actions.length-1?r("m-vertical-divider",{key:n.text+"divider",class:t.$s.ActionDivider,style:t.dividerStyle}):t._e()]}))],2)],1),t._v(" "),r("div",{class:t.$s.ToastClose,on:{click:t.toastApi.closeSelf}},[r("m-icon",{class:t.$s.CloseIcon,attrs:{name:"close"}})],1)]),t._v(" "),t.hasProgress?r("m-progress-bar",{class:t.$s.ToastProgressBar,attrs:{shape:"squared",size:"xsmall",color:t.resolvedAccentColor,progress:t.progress}}):t._e()],1)}),[],!1,(function(n){this.$s=w().locals||w()}),null,null).exports},9582:(n,t,e)=>{"use strict";e.d(t,{w:()=>s});const r={inheritAttrs:!1,props:{beforeEnterClass:{type:String,default:void 0}},methods:{beforeEnter(n){this.beforeEnterClass?n.classList.add(this.beforeEnterClass):Object.assign(n.style,{opacity:"0"})},enter(n){setTimeout((()=>{this.beforeEnterClass?n.classList.remove(this.beforeEnterClass):Object.assign(n.style,{opacity:null})}),50)},beforeLeave(n){n.style.maxHeight="".concat(n.offsetHeight,"px"),n.style.overflow="hidden"},leave(n){setTimeout((()=>{Object.assign(n.style,{maxHeight:"0",opacity:"0",marginTop:"0",marginBottom:"0",paddingTop:"0",paddingBottom:"0"})}),50)}}};const s=(0,e(1900).Z)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("transition-group",n._g(n._b({attrs:{tag:"div"},on:{"before-enter":n.beforeEnter,enter:n.enter,"before-leave":n.beforeLeave,leave:n.leave}},"transition-group",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},5745:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\t--color: inherit;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tcolor: var(--color);\n\tfill: currentColor;\n}\n",""]),r.locals={Icon:"Icon_vCfSe"},n.exports=r},9802:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px)\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n\t.ProgressBarContainer__cJD1.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tcolor: var(--bar-color);\n\tbackground-color: currentColor;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\ttransition: width 100ms linear\n}\n.ProgressBar_aeQRL.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBar_aeQRL.shape_rounded_NBloK,\n\t.ProgressBar_aeQRL.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n",""]),r.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B"},n.exports=r},8488:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n.Bread_BxUl0 {\n\tmargin: 8px 0;\n\toverflow: hidden;\n\tbackground-color: var(--maker-color-background, #ffffff);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\tbox-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 32px rgba(0, 0, 0, 0.1);\n\ttransition:\n\t\ttransform 0.5s,\n\t\topacity 0.5s,\n\t\tmax-height 0.5s,\n\t\tmargin 0.5s,\n\t\tpadding 0.5s;\n\tpointer-events: auto;\n}\n",""]),r.locals={Bread:"Bread_BxUl0"},n.exports=r},8145:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* toasts are full-width on mobile */\n.Toast__06ri {\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tbackground-color: var(--toast-bg-color);\n}\n\n/* toasts are 600px width on desktop */\n@media screen and (min-width: 840px) {\n.Toast__06ri {\n\t\tmax-width: 600px;\n}\n}\n.EnhanceContrast_Pigc8 {\n\tborder: 1px solid var(--maker-color-neutral-10, #f1f1f1);\n}\n.ToastContent_jcnd9 {\n\tdisplay: flex;\n\tgrid-gap: 16px;\n\talign-items: flex-start;\n\tpadding: 16px;\n}\n.IconContainer_Fq56P,\n.CloseIcon_PN4F1 {\n\tflex-shrink: 0;\n\theight: 24px;\n}\n.IconContainer_Fq56P {\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: var(--toast-accent-color);\n}\n.ToastClose_ziElt {\n\tflex-shrink: 0;\n\theight: 24px;\n\tcolor: var(--toast-color);\n\tcursor: pointer;\n}\n.TextAndActions__laKu {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tflex-wrap: wrap;\n\tgrid-gap: 8px;\n}\n.Text_omeiS {\n\tflex-grow: 1;\n}\n.Actions_DKCbj {\n\tdisplay: flex;\n\tgrid-gap: 4px;\n}\n.ActionDivider__wKQv {\n\tmargin: 0 4px;\n}\n.ToastProgressBar_q7C6x {\n\tbackground-color: var(--toast-bg-color);\n}\n",""]),r.locals={Toast:"Toast__06ri",EnhanceContrast:"EnhanceContrast_Pigc8",ToastContent:"ToastContent_jcnd9",IconContainer:"IconContainer_Fq56P",CloseIcon:"CloseIcon_PN4F1",ToastClose:"ToastClose_ziElt",TextAndActions:"TextAndActions__laKu",Text:"Text_omeiS",Actions:"Actions_DKCbj",ActionDivider:"ActionDivider__wKQv",ToastProgressBar:"ToastProgressBar_q7C6x"},n.exports=r},2025:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable length-zero-no-unit */\n.FullScreenFixed_fcqNB {\n\t--initial-bottom-padding: 16px;\n\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tpadding: 0 24px;\n\tpadding-bottom: var(--initial-bottom-padding);\n\ttransition: padding-bottom 0.5s;\n\tpointer-events: none;\n}\n.fade_bottom_bRwdS {\n\ttransform: translateY(50%);\n\topacity: 0;\n}\n\n/* calculations imported from ActionBarLayer */\n.ActionbarOffset_y0RVm {\n\t--actionbar-top-padding: 24px;\n\t--actionbar-size: 48px;\n\t--actionbar-bottom-padding:\n\t\tcalc(\n\t\t\t24px\n\t\t\t+ env(safe-area-inset-bottom, 24px)\n\t\t\t+ var(--chrome-bottom-offset, 0px)\n\t\t);\n\n\tpadding-bottom:\n\t\tcalc(\n\t\t\tvar(--actionbar-top-padding)\n\t\t\t+ var(--actionbar-size)\n\t\t\t+ var(--actionbar-bottom-padding)\n\t\t);\n}\n\n/*\n * 1) global actionbar is hidden on desktop resolutions\n * 2) inline actionbars aren't fixed to the bottom of\n *    the screen on desktop resolutions\n */\n@media screen and (min-width: 840px) {\n.ActionbarOffset_y0RVm {\n\t\tpadding-bottom: var(--initial-bottom-padding);\n}\n}\n",""]),r.locals={FullScreenFixed:"FullScreenFixed_fcqNB",fade_bottom:"fade_bottom_bRwdS",ActionbarOffset:"ActionbarOffset_y0RVm"},n.exports=r},2224:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n.VerticalDivider_K__PF {\n\tdisplay: inline-flex;\n\talign-self: center;\n\twidth: 1px;\n\theight: 0.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tvertical-align: middle;\n\tbackground-color: var(--maker-color-neutral-20, #d3d3d3);\n\tborder: none;\n}\n",""]),r.locals={VerticalDivider:"VerticalDivider_K__PF"},n.exports=r},3468:(n,t,e)=>{var r=e(5745);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("2a811eb5",r,!0,{})},3619:(n,t,e)=>{var r=e(9802);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("2b496f20",r,!0,{})},3656:(n,t,e)=>{var r=e(8488);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("50b38376",r,!0,{})},1107:(n,t,e)=>{var r=e(8145);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("7b336463",r,!0,{})},3795:(n,t,e)=>{var r=e(2025);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("4de4e281",r,!0,{})},9799:(n,t,e)=>{var r=e(2224);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("12bca5b7",r,!0,{})}}]);