(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[485],{1855:(t,n,e)=>{"use strict";e.d(n,{U:()=>c});var r=e(771),a=e.n(r),s=e(2416),i=e(648);const o={inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},bgColor:{type:String,default:void 0,validator:t=>a().valid(t)||"transparent"===t},color:{type:String,default:void 0,validator:t=>a().valid(t)}},computed:{...(0,i.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){s.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),s.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),s.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}};var l=e(8187),d=e.n(l);const c=(0,e(1900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",t._g(t._b({class:[t.$s.Container,t.$s["size_"+t.size]],style:t.style},"section",t.$attrs,!1),t.$listeners),[e("header",{class:t.$s.Header},[t.hasLabel?e("div",{class:t.$s.Label},[t._t("label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]})),t._v(" "),t.hasSublabel?e("div",{class:t.$s.Sublabel},[t._t("sublabel",(function(){return[t._v("\n\t\t\t\t\t"+t._s(t.sublabel)+"\n\t\t\t\t")]}))],2):t._e()],2):t._e(),t._v(" "),t.hasRequirementLabel?e("div",{class:t.$s.RequirementLabel},[t._t("requirement-label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.requirementLabel)+"\n\t\t\t")]}))],2):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},7842:(t,n,e)=>{"use strict";e.d(n,{F:()=>p});var r=e(9082),a=e(7627),s=e(648);function i(){const t=new WeakMap,n=new IntersectionObserver((n=>{n.forEach((n=>t.get(n.target)(n)))}));return{watch(e,r){t.set(e,r),n.observe(e)},unwatch(e){n.unobserve(e),t.delete(e)}}}const o=new Set;let l;const d={components:{MTransitionFadeIn:r.j,MSkeletonBlock:a.s},inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)}},data(){return{isIntersecting:!0,loaded:o.has(this.src+this.srcset)}},computed:{...(0,s.C9)("image",["shape"])},watch:{src:"load",srcset:"load"},mounted(){l||(l=new i),l.watch(this.$el,this.onIntersection)},beforeDestroy(){l.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{o.add(this.src+this.srcset),this.loaded=!0}))}}};var c=e(7548),u=e.n(c);const p=(0,e(1900).Z)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[e("m-transition-fade-in",[t.loaded?e("img",t._g(t._b({class:[t.$s.Image,t.$s["shape_"+t.resolvedShape]],attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):e("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},7627:(t,n,e)=>{"use strict";e.d(n,{s:()=>o,p:()=>u});const r={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var a=e(2986),s=e.n(a),i=e(1900);const o=(0,i.Z)(r,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports;const l={directives:{frag:e(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var d=e(2794),c=e.n(d);const u=(0,i.Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(n){return e("div",t._g(t._b({key:"skeleton-text-"+n,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},700:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* tempfix: chrome-bottom-offset - value set outside of maker */\n/* stylelint-disable length-zero-no-unit */\n.ActionBarWrapper_YYIEK {\n\t--regular-bottom-padding: 32px;\n\t--extra-bottom-padding-for-deadclick: 32px;\n\t--safe-area-inset-padding: env(safe-area-inset-bottom, 0);\n\t--actionbar-bottom-padding:\n\t\tcalc(\n\t\t\tvar(--regular-bottom-padding)\n\t\t\t+ var(--extra-bottom-padding-for-deadclick)\n\t\t\t+ var(--safe-area-inset-padding)\n\t\t\t+ var(--chrome-bottom-offset, 0px)\n\t\t);\n\t--actionbar-size: 64px;\n\t--actionbar-top-padding: 32px;\n\n\tpadding-bottom:\n\t\tcalc(\n\t\t\tvar(--actionbar-top-padding)\n\t\t\t+ var(--actionbar-size)\n\t\t\t+ var(--actionbar-bottom-padding)\n\t\t);\n}\n@media screen and (min-width: 840px) {\n.ActionBarWrapper_YYIEK {\n\t\t--actionbar-size: 48px;\n\t\t--actionbar-top-padding: 24px;\n\n\t\t/* no safe-area or deadclick issues on non-mobile resolutions */\n\t\t--actionbar-bottom-padding: var(--regular-bottom-padding);\n}\n}\n",""]),r.locals={ActionBarWrapper:"ActionBarWrapper_YYIEK"},t.exports=r},2971:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n.Container_qgBQ0 {\n\tpadding: 16px 24px;\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--maker-color-heading, inherit));\n\tfont-weight: var(--maker-font-heading-font-weight, 500);\n\tfont-size: 14px;\n\tfont-family: var(--maker-font-heading-font-family, inherit);\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--maker-color-body, inherit));\n\tfont-weight: var(--maker-font-body-font-weight, inherit);\n\tfont-size: 14px;\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tcolor: var(--color, inherit);\n\tfont-size: 14px;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),r.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},t.exports=r},5227:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n.ImageWrapper_emJCV {\n\t--radius-rounded-image: 16px;\n\t--radius-pill-image: 16px;\n\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n\tborder-radius: var(--maker-shape-image-border-radius, 0)\n}\n.Image_j_xX0.shape_squared_YFdvt {\n\t\tborder-radius: 0;\n}\n.Image_j_xX0.shape_rounded_u7KDB {\n\t\tborder-radius: var(--radius-rounded-image);\n}\n.Image_j_xX0.shape_pill_bERoX {\n\t\tborder-radius: var(--radius-pill-image);\n}\n",""]),r.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0",shape_squared:"shape_squared_YFdvt",shape_rounded:"shape_rounded_u7KDB",shape_pill:"shape_pill_bERoX"},t.exports=r},8647:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),r.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=r},3418:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),r.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=r},2094:(t,n,e)=>{var r=e(7705)((function(t){return t[1]}));r.push([t.id,"\n.cover-photo[data-v-fa3fa554] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-fa3fa554] {\n\twidth: 100%;\n}\n.icon[data-v-fa3fa554] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=r},485:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>g});var r=e(9648),a=e(8415),s=e(1855),i=e(7842),o=e(9211),l=e(9893),d=e.n(l),c=e(9546),u=e(7069),p=e(5832),h=e(8226);const f={components:{MModal:r.x6,MActionBarButton:a.n5,MImage:i.F,MContainer:s.U,X:d(),MTransition:o.T,AtomicActionBar:h.Z},inject:{modalApi:r.UJ},inheritAttrs:!1,props:{enterDelay:{type:Number,default:void 0},springStiffness:{type:Number,default:void 0},springDamping:{type:Number,default:void 0},springMass:{type:Number,default:void 0}},data(){const t=(0,p.Y7)(0,100,"y","%");return{springUpFn:({element:n,onComplete:e})=>{const r=(0,c.ZP)(n),a=t,s=p.vP;r.set(a(s.from)),r.render(),(0,u.j)({...s,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){r.set(a(t))},onComplete:e})},springDownFn:({element:n,onComplete:e})=>{const r=(0,c.ZP)(n),a=t,s=p.hJ;r.set(a(s.from)),r.render(),(0,u.j)({...s,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){r.set(a(t))},onComplete:e})},loaded:!1}},mounted(){setTimeout((()=>{this.loaded=!0}),this.enterDelay)}};e(8710);var m=e(1805),b=e.n(m);const g=(0,e(1900).Z)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("h1",[t._v("Modal with Inline Action Bar")])]},proxy:!0}])},[t._v(" "),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{class:t.$s.ActionBarWrapper},[e("m-transition",{attrs:{enter:t.springUpFn,leave:t.springDownFn}},[t.loaded?e("atomic-action-bar",t._g(t._b({},"atomic-action-bar",t.$attrs,!1),t.$listeners),[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(n){return t.modalApi.close()}}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(n){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t$10.00\n\t\t\t\t\t")]},proxy:!0}],null,!1,627294226)},[t._v("\n\t\t\t\t\tAdd to Cart\n\t\t\t\t\t")])],1):t._e()],1)],1)],1)}),[],!1,(function(t){this.$s=b().locals||b()}),"fa3fa554",null).exports},1805:(t,n,e)=>{var r=e(700);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("077e2eb2",r,!0,{})},8187:(t,n,e)=>{var r=e(2971);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("a829cb1e",r,!0,{})},7548:(t,n,e)=>{var r=e(5227);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("14393fff",r,!0,{})},2986:(t,n,e)=>{var r=e(8647);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("e53630ca",r,!0,{})},2794:(t,n,e)=>{var r=e(3418);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("54e85523",r,!0,{})},8710:(t,n,e)=>{var r=e(2094);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4023).Z)("39749400",r,!0,{})}}]);
