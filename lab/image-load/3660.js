(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3660],{5539:(t,n,e)=>{"use strict";e.d(n,{G:()=>v});var o=e(771),a=e.n(o),r=e(9901),i=e(648),s=e(6475);function l(t){return t.alpha(.3)}function d(t){return a().mix(t,"#000",.05)}function c(t){return a().mix(t,"#000",.1)}const u={primary:function(t){const n=a()(t.color),e=d(n),o=c(n),r=t.textColor?a()(t.textColor):void 0,i=(0,s.Z)(n,r),u=d(i),p=c(i),_=l(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":n.hex(),"--color-main-hover":e.hex(),"--color-main-active":o.hex(),"--color-contrast":i.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":p.hex(),"--color-focus":_.hex()}},secondary:function(t){const n=a()(t.color),e=d(n),o=c(n),r=l(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const n=a()(t.color),e=d(n),o=c(n),r=l(n);return{"--small-padding":"0 8px","--medium-padding":"0 12px","--large-padding":"0 20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex()}}},p={components:{MLoading:r.g},inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>a().valid(t)},textColor:{type:String,default:void 0,validator:t=>a().valid(t)},variant:{type:String,default:void 0,validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,i.C9)("button",["color","size","textColor","variant","shape","align","fullWidth","pattern"]),style(){return u[this.resolvedVariant]({color:this.resolvedColor,textColor:this.resolvedTextColor})},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var _=e(3441),h=e.n(_);const v=(0,e(1900).Z)(p,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild()&&!n.resolvedFullWidth,t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?o("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports},1955:(t,n,e)=>{"use strict";e.d(n,{F:()=>p});var o=e(9082),a=e(7627),r=e(648);function i(){const t=new WeakMap,n=new IntersectionObserver((n=>{n.forEach((n=>t.get(n.target)(n)))}));return{watch(e,o){t.set(e,o),n.observe(e)},unwatch(e){n.unobserve(e),t.delete(e)}}}const s=new Set;let l;const d={components:{MTransitionFadeIn:o.j,MSkeletonBlock:a.s},inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},lazyload:{type:Boolean,default:!1}},data(){return{loaded:s.has(this.src+this.srcset)}},computed:{...(0,r.C9)("image",["shape"])},watch:{src:"load",srcset:"load"},mounted(){this.lazyload?(l||(l=new i),l.watch(this.$el,(({isIntersecting:t})=>{t&&this.load()}))):this.load()},beforeDestroy(){l.unwatch(this.$el)},methods:{load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{s.add(this.src+this.srcset),this.loaded=!0}))}}};var c=e(7548),u=e.n(c);const p=(0,e(1900).Z)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ImageWrapper},[t.loaded?t._e():e("m-skeleton-block"),t._v(" "),e("m-transition-fade-in",[t.loaded?e("img",t._g(t._b({class:[t.$s.Image,t.$s["shape_"+t.resolvedShape]],attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):t._e()])],1)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},7627:(t,n,e)=>{"use strict";e.d(n,{s:()=>s,p:()=>u});const o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var a=e(2986),r=e.n(a),i=e(1900);const s=(0,i.Z)(o,undefined,undefined,!1,(function(t){this.$s=r().locals||r()}),null,null).exports;const l={directives:{frag:e(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var d=e(2794),c=e.n(d);const u=(0,i.Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(n){return e("div",t._g(t._b({key:"skeleton-text-"+n,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},758:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),o.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=o},5227:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ImageWrapper_emJCV {\n\t--radius-rounded-image: 16px;\n\t--radius-pill-image: 16px;\n\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n\tborder-radius: var(--maker-shape-image-border-radius, 0)\n}\n.Image_j_xX0.shape_squared_YFdvt {\n\t\tborder-radius: 0;\n}\n.Image_j_xX0.shape_rounded_u7KDB {\n\t\tborder-radius: var(--radius-rounded-image);\n}\n.Image_j_xX0.shape_pill_bERoX {\n\t\tborder-radius: var(--radius-pill-image);\n}\n",""]),o.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0",shape_squared:"shape_squared_YFdvt",shape_rounded:"shape_rounded_u7KDB",shape_pill:"shape_pill_bERoX"},t.exports=o},8647:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},2850:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.cover-photo[data-v-a8093446] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-a8093446] {\n\twidth: 100%;\n}\n.icon[data-v-a8093446] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},3660:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(9648),a=e(8415),r=e(5539),i=e(1955),s=e(9893),l=e.n(s);const d={components:{MModal:o.x6,MActionBar:a.MS,MButton:r.G,MImage:i.F,X:l()}};e(299);const c=(0,e(1900).Z)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"}})],1),t._v(" "),e("div",[t._v("\n\t\tSecond modal\n\t\t"),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("m-action-bar",[e("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index-first-modal"}}},[e("m-button",{attrs:{size:"large",shape:"pill"}},[e("x",{staticClass:"icon"})],1)],1),t._v(" "),e("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""}},[t._v("\n\t\t\tAction B\n\t\t")])],1)],1)}),[],!1,null,"a8093446",null).exports},3441:(t,n,e)=>{var o=e(758);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("180e274e",o,!0,{})},7548:(t,n,e)=>{var o=e(5227);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("14393fff",o,!0,{})},2986:(t,n,e)=>{var o=e(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("e53630ca",o,!0,{})},2794:(t,n,e)=>{var o=e(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("54e85523",o,!0,{})},299:(t,n,e)=>{var o=e(2850);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("727141e0",o,!0,{})}}]);