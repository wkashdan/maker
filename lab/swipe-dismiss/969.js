(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[969],{5969:function(t,e,n){"use strict";n.d(e,{x6:function(){return u},Pj:function(){return x},UJ:function(){return i}});var i=Symbol("modalApiKey"),s=n(9792),a=n.n(s);var o={name:"TouchCapture",props:{minDragDistance:{type:Number,default:10},minDragDuration:{type:Number,default:100},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:400}},data(){return{touchStarted:!1,touchEnded:!1,clientXStart:void 0,clientYStart:void 0,clientXCurrent:void 0,clientYCurrent:void 0,timeStart:void 0,timeCurrent:void 0,touchEvent:a()(this.handleTouchEvent,25)}},computed:{timeElapsed(){const{timeStart:t,timeCurrent:e}=this;return t&&e?e-t:0},changeY(){const{clientYStart:t,clientYCurrent:e}=this;return t&&e?Math.round(t-e):0},changeX(){const{clientXStart:t,clientXCurrent:e}=this;return t&&e?Math.round(t-e):0},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t>0?"up":"down":e>0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isDragGesture(){const{timeElapsed:t,changeY:e,changeX:n,minDragDuration:i,minDragDistance:s}=this;return t>i&&(Math.abs(e)>s||Math.abs(n)>s)},isSwipeGesture(){const{timeElapsed:t,changeY:e,changeX:n,maxSwipeDuration:i,minSwipeDistance:s}=this;return t<i&&(Math.abs(e)>s||Math.abs(n)>s)}},watch:{touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())},timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)}},methods:{handleTouchEvent(t){switch(t.type){case"touchstart":this.touchStarted=!0,this.clientYStart=t.changedTouches[0].clientY,this.clientXStart=t.changedTouches[0].clientX,this.timeStart=t.timeStamp;break;case"touchmove":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp;break;case"touchend":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp,this.touchEnded=!0}},resetGesture(){this.touchStarted=!1,this.touchEnded=!1,this.clientYStart=void 0,this.clientYCurrent=void 0,this.clientXStart=void 0,this.clientXCurrent=void 0,this.timeStart=void 0,this.timeCurrent=void 0}}},r=n(1900),c={name:"Modal",components:{MTouchCapture:(0,r.Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.touchEvent,touchmove:t.touchEvent,touchend:t.touchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:i},props:{beforeClose:{type:Function,required:!1,default:void 0},touchAreaHeight:{type:Number,default:200}},data:()=>({touchStyles:{}}),computed:{modalStyles(){return{"--touch-area-height":`${this.touchAreaHeight}px`,...this.touchStyles}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{onSwipeDown(){this.modalApi.close()},onDragDown(t){const e=`translateY(${-t.changeY}px)`;this.touchStyles={transform:e,"backface-visibility":"hidden"}},onDragEnd(t){t.changeY<-100?this.modalApi.close():this.touchStyles={}}}},l=n(5027),d=n.n(l);var u=(0,r.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Modal,style:t.modalStyles},[t.$slots.dismiss?[n("m-touch-capture",{class:t.$s.DismissMobile,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown}},[t._t("dismiss")],2),t._v(" "),n("div",{class:t.$s.DismissDesktop},[t._t("dismiss")],2)]:t._e(),t._v(" "),t._t("default"),t._v(" "),t.$slots.dismiss?t._e():n("m-touch-capture",{class:t.$s.Dismiss,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown}})],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports,h=n(7818),m=n.n(h);(0,r.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var p=n(1931),f=n(7062),v=n(3555),g=n.n(v),_=n(9082),y=n(1838),b=n(5832);const w={inject:{currentLayer:{default:void 0,from:i}},provide(){const t=this,e={state:p.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const i=e(t.$createElement);return this.state.vnode=i,this.state.options=n,()=>{this.state.vnode===i&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[i]:e}}};var M={name:"ModalLayer",components:{V:f.Z,PseudoWindow:g(),MTransitionFadeIn:_.j,MTransitionResponsive:y.w},mixins:[w],inheritAttrs:!1,apiMixin:w,data(){let t=b.rG,e=b.cT;return this.currentLayer.state.isStacked&&(t=b.iM,e=b.cT),{transitions:[{minWidth:b.iu,enter:b.vn,leave:b.w0},{minWidth:b.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=b.OE,n=!e,i=!!t.modalApi.state.vnode,s=!i,a=this.$refs.baseModalLayer;a&&(e&&i?(0,b.vq)({element:a}):e&&s?(0,b.s4)({element:a}):n&&i?setTimeout((()=>{a.style.opacity="0%"}),b.AT):n&&s&&a.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},S=n(5189),D=n.n(S);var x=(0,r.Z)(M,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.$s.Layer},[i("m-transition-fade-in",[e.currentLayer.state.vnode?i("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),i("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?i("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[i("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),i("div",{ref:"modal",class:e.$s.Container},[i("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?i("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=D().locals||D()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var i=n(9211),s=n(5832),a={components:{MTransition:i.T},inheritAttrs:!1,data:()=>({fadeInFn:s.dx,fadeOutFn:s.vq})},o=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: hidden;\n\tbackground: #f5f6f7;\n\ttransition: transform 0.2s linear;\n}\n@media screen and (max-width: 839px) {\n.Dismiss__Nhj2 {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100px;\n}\n.DismissDesktop_ug89b {\n\t\tdisplay: none;\n}\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n.DismissMobile_CayXV {\n\t\tdisplay: none;\n}\n}\n",""]),i.locals={Modal:"Modal_lWZo9",Dismiss:"Dismiss__Nhj2",DismissDesktop:"DismissDesktop_ug89b",DismissMobile:"DismissMobile_CayXV"},t.exports=i},619:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),i.locals={ModalContent:"ModalContent_EYuNB"},t.exports=i},6851:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),i.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=i},5027:function(t,e,n){var i=n(8856);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("092310f5",i,!0,{})},7818:function(t,e,n){var i=n(619);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("179c170a",i,!0,{})},5189:function(t,e,n){var i=n(6851);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("7fc46ffb",i,!0,{})}}]);