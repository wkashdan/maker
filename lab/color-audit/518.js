(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[518],{569:function(t,n,e){var o=e(71),r=e(5989),i=e(6705),a=Math.max,s=Math.min;t.exports=function(t,n,e){var l,c,u,d,f,p,v=0,m=!1,h=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=l,o=c;return l=c=void 0,v=n,d=t.apply(o,e)}function _(t){return v=t,f=setTimeout(w,n),m?b(t):d}function g(t){var e=t-p;return void 0===p||e>=n||e<0||h&&t-v>=u}function w(){var t=r();if(g(t))return x(t);f=setTimeout(w,function(t){var e=n-(t-p);return h?s(e,u-(t-v)):e}(t))}function x(t){return f=void 0,y&&l?b(t):(l=c=void 0,d)}function M(){var t=r(),e=g(t);if(l=arguments,c=this,p=t,e){if(void 0===f)return _(p);if(h)return clearTimeout(f),f=setTimeout(w,n),b(p)}return void 0===f&&(f=setTimeout(w,n)),d}return n=i(n)||0,o(e)&&(m=!!e.leading,u=(h="maxWait"in e)?a(i(e.maxWait)||0,n):u,y="trailing"in e?!!e.trailing:y),M.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=p=c=f=void 0},M.flush=function(){return void 0===f?d:x(r())},M}},5989:function(t,n,e){var o=e(4362);t.exports=function(){return o.Date.now()}},9792:function(t,n,e){var o=e(569),r=e(71);t.exports=function(t,n,e){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return r(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),o(t,n,{leading:i,maxWait:n,trailing:a})}},3555:function(t){t.exports=function(){"use strict";var t=function(t){var n=t.props,e=t.data,o=t.parent,r=function t(n){return Array.isArray(n)?(e=n=>t(n),n.reduce(((t,n)=>t.concat(e(n))),[])):null!==(o=n)&&"object"==typeof o?function(t){let n=[];for(const e in t)t[e]&&n.push(e);return n}(n):"string"==typeof n&&n?[n]:[];var e,o}([e.staticClass,e.class]);if(r){var i,a,s,l=(a=(i=n).body,s=i.document,a?window.document.body:!!s&&window.document.documentElement);if(l){var c=function(t,n){if(!n.length)return;const{classList:e}=t;return n.filter((t=>{if(!e.contains(t))return e.add(t),!0}))}(l,r),u=function(){!function(t,n){if(!n||!n.length)return;let e;for(;e=n.shift();)t.classList.remove(e);t.classList.length||t.removeAttribute("class")}(l,c)};o.$once("hook:beforeUpdate",u),o.$once("hook:destroyed",u)}}},n=Object.prototype.hasOwnProperty,e=function(t,n,e){var o="&"===n[0],r="~"===(n=o?n.slice(1):n)[0],i="!"===(n=r?n.slice(1):n)[0];return{o:t,t:n=i?n.slice(1):n,i:e,u:{once:r,capture:i,passive:o}}},o=function(t){var o,r,i,a=t.props,s=t.listeners,l=t.parent,c=function(t,o){var r,i,a=[];for(var s in o)if(r=o,i=s,n.call(r,i)){var l=o[s],c=e(t,s,l);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((r=(o=a).body,i=o.document,r?window.document.body:i?window.document:window),s),u=function(){!function(t){for(var n;n=t.shift();)n.o.removeEventListener(n.t,n.i,n.u)}(c)};l.$once("hook:beforeUpdate",u),l.$once("hook:destroyed",u)},r=function(n){o(n),t(n)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,n){return n.parent._isMounted?r(n):n.parent.$once("hook:mounted",(function(){r(n)})),n.slots().default}}}()},7062:function(t,n){"use strict";var e=function(t){return t&&t.data&&(t.data.slot=void 0),t},o={functional:!0,render:function(t,n){var o=n.props;return Array.isArray(o.nodes)?o.nodes.map(e):e(o.nodes)}};n.Z=o},3883:function(t,n){"use strict";var e,o={"!":1,"&":2},r=/\B([A-Z])/g,i=/-(\w)/g;function a(t){return t.replace(i,(function(t,n){return n?n.toUpperCase():""}))}function s(t,n,e){if(e){var o=e.value,r=e.modifier,i=t[n];null==i||1===r?t[n]=o:2===r&&(Array.isArray(i)?Array.isArray(o)?i.push.apply(i,o):i.push(o):"object"==typeof i&&"object"==typeof o?Object.assign(i,o):"function"==typeof i&&"function"==typeof o?t[n]=function(){Reflect.apply(i,this,arguments),Reflect.apply(o,this,arguments)}:t[n]+=o)}}function l(t,n,e){t[n]||(t[n]={});var o=t[n];for(var r in e)s(o,r,e[r])}function c(t,n){if(n in t)return n;var e=n.replace(r,"-$1").toLowerCase();return e in t&&e}function u(t){var n={};for(var e in t){var r=t[e],i=o[e.slice(-1)];i?e=e.slice(0,-1):i=0,n[e]={value:r,modifier:i}}return n}function d(t,n){var e=a("static-"+n),o=[t[e],t[n]].filter(Boolean).flat(1/0);if(0!==o.length)return delete t[e],o}function f(t,n){var e=t[n];if(e)return delete t[n],e}function p(t){return t&&{value:t,modifier:0}}var v={functional:!0,render:function(t,n){var o=n.children,r=n.data;if(!o||function(t){for(var n in t)return!1;return!0}(r))return o;var i,v=u(r.attrs),m=u(r.on),h=u(r.nativeOn),y=f(v,"class")||p(d(r,"class")),b=f(v,"style")||p(d(r,"style")),_=f(v,"key")||p(r.key);return b&&"string"==typeof b.value&&(b.value=(i=b.value,Object.fromEntries(i.split(";").map((function(t){var n=t.split(":"),e=n[0],o=n[1];return e&&o&&[a(e.trim()),o.trim()]})).filter(Boolean)))),o.map((function(t){if((t=function(t){e||(e=Object.getPrototypeOf(t).constructor);var n=new e;return Object.assign(n,t),n.componentOptions&&(n.componentOptions=Object.assign({},n.componentOptions),n.componentOptions.propsData=Object.assign({},n.componentOptions.propsData)),n}(t)).tag){t.data||(t.data={});var n=Object.assign({},v),o=t,r=o.data,i=o.componentOptions;i?(l(i,"propsData",function(t,n){var e=t.Ctor.options.props,o={};if(e)for(var r in e){var i=c(n,r);i&&(o[r]=n[i],delete n[i])}return o}(i,n)),l(i,"listeners",m),l(r,"nativeOn",h),r.on=r.nativeOn):l(r,"on",m),l(r,"attrs",n),r.class=d(r,"class"),r.style=d(r,"style"),s(r,"class",y),s(r,"style",b),s(t,"key",_)}return t}))}};n.Z=v},2492:function(t,n,e){"use strict";e.d(n,{x6:function(){return d},Pj:function(){return k},UJ:function(){return o}});var o=Symbol("modalApiKey"),r=e(771),i=e.n(r),a=e(1098),s={name:"Modal",inject:{modalApi:o,theme:{default:(0,a.uH)(),from:a.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>i().valid(t)},color:{type:String,default:void 0,validator:t=>i().valid(t)}},computed:{...(0,a.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},l=e(5027),c=e.n(l),u=e(1900);var d=(0,u.Z)(s,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Modal,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,f=e(7818),p=e.n(f);(0,u.Z)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var v=e(1931),m=e(7062),h=e(3555),y=e.n(h),b=e(9082),_=e(1838),g=e(5832);const w={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,n={state:v.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(n,e={}){const o=n(t.$createElement);return this.state.vnode=o,this.state.options=e,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=n),{[o]:n}}};var x={name:"ModalLayer",components:{V:m.Z,PseudoWindow:y(),MTransitionFadeIn:b.j,MTransitionResponsive:_.w},mixins:[w],inheritAttrs:!1,apiMixin:w,data(){let t=g.rG,n=g.cT;return this.currentLayer.state.isStacked&&(t=g.iM,n=g.cT),{transitions:[{minWidth:g.iu,enter:g.vn,leave:g.w0},{minWidth:g.OE,enter:t,leave:n}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const n=window.innerWidth>=g.OE,e=!n,o=!!t.modalApi.state.vnode,r=!o,i=this.$refs.baseModalLayer;i&&(n&&o?(0,g.vq)({element:i}):n&&r?(0,g.s4)({element:i}):e&&o?setTimeout((()=>{i.style.opacity="0%"}),g.AT):e&&r&&i.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:n}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&n&&!e.contains(t.target)&&this.modalApi.close()}}},M=e(5189),L=e.n(M);var k=(0,u.Z)(x,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("div",{class:n.$s.Layer},[o("m-transition-fade-in",[n.currentLayer.state.vnode?o("div",{class:[n.$s.Translucent,(t={},t[n.$s.Transparent]=n.currentLayer.state.isStacked,t)]}):n._e()]),n._v(" "),o("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:n.$s.ModalLayer,on:{"!click":function(t){return n.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:n.$s.disableScroll,attrs:{body:""}}),n._v(" "),o("div",{ref:"modal",class:n.$s.Container},[o("v",{attrs:{nodes:n.currentLayer.state.vnode}})],1)],1):n._e()]),n._v(" "),n.currentLayer.state.vnode?o("modal-layer"):n._e()],1)}),[],!1,(function(t){this.$s=L().locals||L()}),null,null).exports},9082:function(t,n,e){"use strict";e.d(n,{j:function(){return a}});var o=e(9211),r=e(5832),i={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})},a=(0,e(1900).Z)(i,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},8242:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}});var o=e(1781),r=e(2492),i={components:{MActionBarLayer:o.$n,MModalLayer:r.Pj},mixins:[r.Pj.apiMixin]},a=(0,e(1900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-action-bar-layer",[e("router-view"),t._v(" "),e("m-modal-layer")],1)}),[],!1,null,null,null).exports},5027:function(t,n,e){var o=e(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("092310f5",o,!0,{})},7818:function(t,n,e){var o=e(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("179c170a",o,!0,{})},5189:function(t,n,e){var o=e(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("7fc46ffb",o,!0,{})}}]);