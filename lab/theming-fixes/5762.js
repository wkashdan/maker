(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[5762,5686],{7842:(t,e,n)=>{"use strict";n.d(e,{F:()=>p});var r=n(9082),s=n(7627),a=n(648);function o(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,r){t.set(n,r),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const i=new Set;let l;const d={components:{MTransitionFadeIn:r.j,MSkeletonBlock:s.s},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)}},data(){return{isIntersecting:!0,loaded:i.has(this.src+this.srcset)}},computed:{...(0,a.C9)("image",["shape"])},watch:{src:"load",srcset:"load"},mounted(){l||(l=new o),l.watch(this.$el,this.onIntersection)},beforeDestroy(){l.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{i.add(this.src+this.srcset),this.loaded=!0}))}}};var u=n(7548),c=n.n(u);const p=(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:[t.$s.Image,t.$s["shape_"+t.resolvedShape]],attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},4095:(t,e,n)=>{"use strict";n.d(e,{i:()=>l,X:()=>p});const r=Symbol("SegmentedControlKey"),s={inject:{controlState:r},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.currentValue===this.value}},methods:{selectSelf(){this.controlState.currentValue=this.value}}};var a=n(5891),o=n.n(a),i=n(1900);const l=(0,i.Z)(s,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("button",{class:[e.$s.Segment,e.$s["shape_"+e.controlState.shapeInner],e.$s["size_"+e.controlState.sizeInner],(t={},t[e.$s.selected]=e.isSelected,t)],on:{click:e.selectSelf}},[e._t("default")],2)}),[],!1,(function(t){this.$s=o().locals||o()}),null,null).exports;const d={provide(){return{[r]:this.$data}},model:{prop:"selected",event:"segmented-control:update"},props:{selected:{type:void 0,required:!0},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},size:{type:String,default:"medium",validator:t=>["small","medium"].includes(t)}},data(){return{currentValue:this.selected,sizeInner:this.size,shapeInner:this.shape}},watch:{currentValue(t){this.$emit("segmented-control:update",t)}}};var u=n(5154),c=n.n(u);const p=(0,i.Z)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.$s.SegmentedControl,t.$s["shape_"+t.shapeInner],t.$s["size_"+t.sizeInner]]},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},7627:(t,e,n)=>{"use strict";n.d(e,{s:()=>i,p:()=>c});const r={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var s=n(2986),a=n.n(s),o=n(1900);const i=(0,o.Z)(r,undefined,undefined,!1,(function(t){this.$s=a().locals||a()}),null,null).exports;const l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var d=n(2794),u=n.n(d);const c=(0,o.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},5227:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.ImageWrapper_emJCV {\n\t--radius-rounded-image: 16px;\n\t--radius-pill-image: 16px;\n\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: center;\n\tborder-radius: var(--maker-shape-image-border-radius, 0)\n}\n.Image_j_xX0.shape_squared_YFdvt {\n\t\tborder-radius: 0;\n}\n.Image_j_xX0.shape_rounded_u7KDB {\n\t\tborder-radius: var(--radius-rounded-image);\n}\n.Image_j_xX0.shape_pill_bERoX {\n\t\tborder-radius: var(--radius-pill-image);\n}\n",""]),r.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0",shape_squared:"shape_squared_YFdvt",shape_rounded:"shape_rounded_u7KDB",shape_pill:"shape_pill_bERoX"},t.exports=r},7889:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.Segment_nE6h6 {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tflex: 1 0 0;\n\tcolor: var(--maker-color-neutral-90, black);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n\toutline: none;\n\tcursor: pointer;\n}\n.shape_pill_xOf5O {\n\tborder-radius: var(--radius-pill-button);\n}\n.shape_rounded_JaraF {\n\tborder-radius: var(--radius-rounded-button);\n}\n.shape_squared_wGub5 {\n\tborder-radius: 0;\n}\n.selected_JxSKs {\n\tcolor: var(--maker-color-neutral-90, black);\n\tbackground-color: var(--maker-color-elevation, white);\n\tbox-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\n}\n",""]),r.locals={Segment:"Segment_nE6h6",shape_pill:"shape_pill_xOf5O",shape_rounded:"shape_rounded_JaraF",shape_squared:"shape_squared_wGub5",selected:"selected_JxSKs"},t.exports=r},124:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.SegmentedControl__fD8_ {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\theight: 56px;\n\tpadding: 4px;\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-size: 14px;\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tline-height: 24px;\n\tbackground-color: var(--maker-color-neutral-10, #f6f7f9);\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n}\n.shape_pill_ssIJF {\n\tborder-radius: var(--radius-pill-button);\n}\n.shape_rounded_f29hR {\n\tborder-radius: var(--radius-rounded-button);\n}\n.shape_squared_FwAaH {\n\tborder-radius: 0;\n}\n.size_small_QLXE_ {\n\theight: 40px;\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n",""]),r.locals={SegmentedControl:"SegmentedControl__fD8_",shape_pill:"shape_pill_ssIJF",shape_rounded:"shape_rounded_f29hR",shape_squared:"shape_squared_FwAaH",size_small:"size_small_QLXE_"},t.exports=r},8647:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),r.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=r},3418:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--maker-color-neutral-10, #ebedef);\n}\n100% { background-color: var(--maker-color-neutral-20, #f5f6f7);\n}\n}\n",""]),r.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=r},7152:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.cover-photo[data-v-31c45108] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-31c45108] {\n\twidth: 100%;\n}\n.icon[data-v-31c45108] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=r},5686:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(2335),s=n(8415),a=n(7842),o=n(4095),i=n(9893),l=n.n(i);const d={components:{MModal:r.x6,MInlineActionBar:s.pE,MActionBarButton:s.n5,MSegmentedControl:o.X,MSegment:o.i,MImage:a.F,X:l()},inject:{modalApi:r.UJ},props:{showImage:{type:Boolean,default:!0}},data:()=>({selected:"short"})};n(2069);const u=(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[t.showImage?n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1):n("m-segmented-control",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("m-segment",{attrs:{value:"short"}},[t._v("\n\t\t\tLocal Delivery\n\t\t")]),t._v(" "),n("m-segment",{attrs:{value:"medium"}},[t._v("\n\t\t\tPickup\n\t\t")]),t._v(" "),n("m-segment",{attrs:{value:"long"}},[t._v("\n\t\t\tShip\n\t\t")])],1),t._v(" "),n("h1",[t._v("Cart modal content")]),t._v(" "),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\tLong text "+t._s(e)+"\n\t")])})),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(e){return t.modalApi.close()}}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t$10.00\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAdd to Cart\n\t\t\t")])],1)],2)}),[],!1,null,"31c45108",null).exports},5762:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(2335),s=n(8415),a=n(5686);const o={components:{MActionBar:s.MS,MActionBarButton:s.n5},inject:{modalApi:r.UJ},methods:{openCart(t){this.modalApi.open((e=>e(a.default,{props:{showImage:t}})))}}};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("root index")]),t._v(" "),n("button",{on:{click:function(e){return t.openCart(!1)}}},[t._v("\n\t\tOpen modal without image\n\t")]),t._v(" "),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\tLong text "+t._s(e)+"\n\t")])})),t._v(" "),n("m-action-bar",[n("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(e){return t.openCart(!0)}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t3 items\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView Cart\n\t\t\t")])],1)],2)}),[],!1,null,null,null).exports},7548:(t,e,n)=>{var r=n(5227);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("14393fff",r,!0,{})},5891:(t,e,n)=>{var r=n(7889);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("2714874e",r,!0,{})},5154:(t,e,n)=>{var r=n(124);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("b3262532",r,!0,{})},2986:(t,e,n)=>{var r=n(8647);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("e53630ca",r,!0,{})},2794:(t,e,n)=>{var r=n(3418);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("54e85523",r,!0,{})},2069:(t,e,n)=>{var r=n(7152);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("fd7be2a2",r,!0,{})}}]);