(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[660],{193:function(t,n,e){"use strict";e.d(n,{F:function(){return u}});var s=e(9082),o=e(1688);function i(){const t=new WeakMap,n=new IntersectionObserver((n=>{n.forEach((n=>t.get(n.target)(n)))}));return{watch(e,s){t.set(e,s),n.observe(e)},unwatch(e){n.unobserve(e),t.delete(e)}}}const r=new Set;let a;var l={components:{MTransitionFadeIn:s.j,MSkeletonBlock:o.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:r.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new i),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{r.add(this.src+this.srcset),this.loaded=!0}))}}},c=e(7548),d=e.n(c);var u=(0,e(1900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[e("m-transition-fade-in",[t.loaded?e("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):e("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},3185:function(t,n,e){"use strict";e.d(n,{x6:function(){return l},Pj:function(){return y},UJ:function(){return s}});var s=Symbol("modalApiKey"),o={name:"Modal",inject:{modalApi:s},props:{beforeClose:{type:Function,required:!1,default:void 0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},i=e(5027),r=e.n(i),a=e(1900);var l=(0,a.Z)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Modal},[t._t("default")],2)}),[],!1,(function(t){this.$s=r().locals||r()}),null,null).exports,c=e(7818),d=e.n(c);(0,a.Z)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports;var u=e(1931),f=e(7062),p=e(3555),h=e.n(p),v=e(9082),_=e(1838),m=e(5832);const g={inject:{currentLayer:{default:void 0,from:s}},provide(){const t=this,n={state:u.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(n,e={}){const s=n(t.$createElement);return this.state.vnode=s,this.state.options=e,()=>{this.state.vnode===s&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=n),{[s]:n}}};var k={name:"ModalLayer",components:{V:f.Z,PseudoWindow:h(),MTransitionFadeIn:v.j,MTransitionResponsive:_.w},mixins:[g],inheritAttrs:!1,apiMixin:g,data(){let t=m.rG,n=m.cT;return this.currentLayer.state.isStacked&&(t=m.iM,n=m.cT),{transitions:[{minWidth:m.iu,enter:m.vn,leave:m.w0},{minWidth:m.OE,enter:t,leave:n}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const n=window.innerWidth>=m.OE,e=!n,s=!!t.modalApi.state.vnode,o=!s,i=this.$refs.baseModalLayer;i&&(n&&s?(0,m.vq)({element:i}):n&&o?(0,m.s4)({element:i}):e&&s?setTimeout((()=>{i.style.opacity="0%"}),m.AT):e&&o&&i.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:n}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&n&&!e.contains(t.target)&&this.modalApi.close()}}},x=e(5189),b=e.n(x);var y=(0,a.Z)(k,(function(){var t,n=this,e=n.$createElement,s=n._self._c||e;return s("div",{class:n.$s.Layer},[s("m-transition-fade-in",[n.currentLayer.state.vnode?s("div",{class:[n.$s.Translucent,(t={},t[n.$s.Transparent]=n.currentLayer.state.isStacked,t)]}):n._e()]),n._v(" "),s("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.currentLayer.state.vnode?s("div",{ref:"baseModalLayer",class:n.$s.ModalLayer,on:{"!click":function(t){return n.closeOnClickOutside.apply(null,arguments)}}},[s("pseudo-window",{class:n.$s.disableScroll,attrs:{body:""}}),n._v(" "),s("div",{ref:"modal",class:n.$s.Container},[s("v",{attrs:{nodes:n.currentLayer.state.vnode}})],1)],1):n._e()]),n._v(" "),n.currentLayer.state.vnode?s("modal-layer"):n._e()],1)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},1688:function(t,n,e){"use strict";e.d(n,{s:function(){return a},p:function(){return u}});var s={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},o=e(2986),i=e.n(o),r=e(1900);var a=(0,r.Z)(s,undefined,undefined,!1,(function(t){this.$s=i().locals||i()}),null,null).exports,l={directives:{frag:e(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=e(2794),d=e.n(c);var u=(0,r.Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(n){return e("div",t._g(t._b({key:"skeleton-text-"+n,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},9082:function(t,n,e){"use strict";e.d(n,{j:function(){return r}});var s=e(9211),o=e(5832),i={components:{MTransition:s.T},inheritAttrs:!1,data:()=>({fadeInFn:o.dx,fadeOutFn:o.vq})},r=(0,e(1900).Z)(i,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5227:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),s.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=s},8856:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),s.locals={Modal:"Modal_lWZo9"},t.exports=s},619:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),s.locals={ModalContent:"ModalContent_EYuNB"},t.exports=s},6851:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),s.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=s},8647:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),s.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=s},3418:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),s.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=s},2850:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.cover-photo[data-v-a8093446] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-a8093446] {\n\twidth: 100%;\n}\n.icon[data-v-a8093446] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=s},3660:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var s=e(3185),o=e(7158),i=e(2220),r=e(193),a=e(9893),l=e.n(a),c={components:{MModal:s.x6,MActionBar:o.MS,MButton:i.G,MImage:r.F,X:l()}},d=(e(299),(0,e(1900).Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"}})],1),t._v(" "),e("div",[t._v("\n\t\tSecond modal\n\t\t"),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("m-action-bar",[e("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index-first-modal"}}},[e("m-button",{attrs:{size:"large",shape:"pill"}},[e("x",{staticClass:"icon"})],1)],1),t._v(" "),e("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""}},[t._v("\n\t\t\tAction B\n\t\t")])],1)],1)}),[],!1,null,"a8093446",null).exports)},7548:function(t,n,e){var s=e(5227);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("14393fff",s,!0,{})},5027:function(t,n,e){var s=e(8856);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("092310f5",s,!0,{})},7818:function(t,n,e){var s=e(619);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("179c170a",s,!0,{})},5189:function(t,n,e){var s=e(6851);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("7fc46ffb",s,!0,{})},2986:function(t,n,e){var s=e(8647);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("e53630ca",s,!0,{})},2794:function(t,n,e){var s=e(3418);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("54e85523",s,!0,{})},299:function(t,n,e){var s=e(2850);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("727141e0",s,!0,{})}}]);