(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7414],{9893:t=>{t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,s,i,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},281:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var o=n(0),s=Object(o.a)({},r,[],!1,null,null,null);s.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=s.exports}})},8486:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=Symbol();function o(t,e){t[r]||(t[r]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[r]||this.parentElement}}))}var s=function(t,e){var n=t.splice(0);e.append.apply(e,n),n.forEach((function(t){t[r]=void 0}))};function i(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[l]){var r=this[l].get(e);r&&(e=r[0])}e.before(t),o(t,this)}function a(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var n=this[l];if(n){var o=n.get(t);if(o)return s(o,t),n.delete(t),void(t[r]=void 0)}t.remove()}var l=Symbol(),c={insertBefore:i,removeChild:a},u=Symbol(),p={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[u],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[u]),n.forEach((function(t){return t.remove()}))},removeChild:a,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[u];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),o(t,this),this.frag.push(t)}};const d={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,r=document.createComment("");t[u]=r,0===e.length&&e.push(r);var s=document.createDocumentFragment();s.append.apply(s,e),t.replaceWith(s),t.frag=e,function(t,e,n){t[l]||(t[l]=new Map,Object.assign(t,c)),t[l].set(e,n)}(n,t,e),o(t,n),e.forEach((function(e){return o(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var r=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,r))},get:function(){return""}}),Object.assign(t,p)},unbind:function(t){s(t.frag,t),t[u].remove()}}},9082:(t,e,n)=>{"use strict";n.d(e,{j:()=>i});var r=n(9211),o=n(5832);const s={components:{MTransition:r.T},inheritAttrs:!1,data:()=>({fadeInFn:o.dx,fadeOutFn:o.vq})};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},9211:(t,e,n)=>{"use strict";n.d(e,{T:()=>i});var r=n(1838),o=n(5832);const s={components:{MTransitionResponsive:r.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:o.iu,enter:this.enter,leave:this.leave}]}}};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition-responsive",t._g(t._b({attrs:{transitions:t.transitions}},"m-transition-responsive",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},1838:(t,e,n)=>{"use strict";n.d(e,{w:()=>o});const r={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:t=>{if(0===t.length)return!1;return 0===t[0].minWidth&&t.every((t=>(t.minWidth||0===t.minWidth)&&t.enter&&t.leave))}}},methods:{handleEnter(t,e){this.getResponsiveTransition().enter({element:t,onComplete:e})},handleLeave(t,e){this.getResponsiveTransition().leave({element:t,onComplete:e})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const t=window.innerWidth;let e;return this.transitions.forEach((n=>{t>=n.minWidth&&(e=n)})),e}}};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",t._g(t._b({attrs:{css:!1},on:{enter:t.handleEnter,leave:t.handleLeave}},"transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5832:(t,e,n)=>{"use strict";n.d(e,{iu:()=>s,OE:()=>i,AT:()=>l,hJ:()=>d,vP:()=>v,Y7:()=>m,dx:()=>x,s4:()=>y,vq:()=>C,vn:()=>k,w0:()=>O,rG:()=>S,iM:()=>M,tq:()=>T,cT:()=>j,uL:()=>w,C9:()=>z});var r=n(9546),o=n(7069);const s=0,i=840,a="spring",l=200,c={type:a,stiffness:600,damping:60,mass:1},u={type:a,stiffness:400,damping:40,mass:1},p={type:a,stiffness:400,damping:30,mass:1.5},d={from:0,to:100},v={from:100,to:0};function m(t,e,n,r){return o=>function(t,e,n,r,o){return{[r]:"".concat(t/100*(n-e)+e).concat(o)}}(o,t,e,n,r)}const f=m(0,100,"opacity","%"),_=m(0,100,"y","%"),h=(m(0,100,"x","%"),m(40,0,"y","px")),b=t=>({...f(t),...h(t)}),g=(t,e)=>{const n=m(e,0,"y","px");return{...f(t),...n(t)}};function x({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=f,i=d;n.set(s(i.from)),n.render(),(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function y({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=f,i=d;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}),l)}function C({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=f,i=v;n.set(s(i.from)),n.render(),(0,o.j)({...v,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function k({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=_,i=v;n.set(s(i.from)),n.render(),(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function O({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=_,i=d;n.set(s(i.from)),n.render(),(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function S({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=b,i=d;n.set(s(i.from)),n.render(),(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function M({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=b,i=d;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}),l)}function T({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=g,i=d,a=20+5*t.dataset.loadIndex;n.set(s(i.from)),n.render(),(0,o.j)({...i,...u,onUpdate(t){n.set(s(t,a))},onComplete:e})}function j({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=b,i=v;n.set(s(i.from)),n.render(),(0,o.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function w({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=_,i=v;n.set(s(i.from)),n.render(),(0,o.j)({...i,...p,onUpdate(t){n.set(s(t))},onComplete:e})}function z({element:t,onComplete:e}){const n=(0,r.ZP)(t),s=_,i=d;n.set(s(i.from)),n.render(),(0,o.j)({...i,...p,onUpdate(t){n.set(s(t))},onComplete:e})}},83:(t,e,n)=>{var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.page[data-v-129df388] {\n\tpadding: 16px;\n}\n.section[data-v-129df388] {\n\tmargin-top: 64px;\n}\n.square[data-v-129df388] {\n\twidth: 200px;\n\theight: 200px;\n}\n.icon[data-v-129df388] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=r},5845:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});var r=n(5539),o=n(5019),s=n(900),i=n(7842),a=n(4949),l=n(9901),c=n(3129),u=n(8457),p=n(840),d=n(7627),v=n(9795),m=n(990),f=n(822),_=n(6517),h=n(9893),b=n.n(h),g=n(7858);const x={components:{Plus:n.n(g)(),X:b(),MButton:r.G,MCheckbox:o._,MDivider:s.j,MImage:i.F,MInput:a.z,MLoading:l.g,MNotice:c.w,MRadio:u.H,MSelect:p.W,MSkeletonBlock:d.s,MSkeletonText:d.p,MStepper:v.f,MText:m.H,MTextarea:f.p,MToggle:_.A},data:()=>({number:1,currentOption:"1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})};n(6951);const y=(0,n(1900).Z)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("m-text",{attrs:{pattern:"title",size:4}},[t._v("\n\t\tKitchen Sink\n\t")]),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"secondary"}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"secondary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"secondary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[n("plus",{staticClass:"icon"}),t._v("\n\t\t\tButton\n\t\t")],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[t._v("\n\t\t\tButton\n\t\t\t"),n("plus",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary"}},[n("x",{staticClass:"icon"})],1),t._v(" "),n("m-button",{attrs:{variant:"tertiary",disabled:""}},[t._v("\n\t\t\tDisabled button\n\t\t")]),t._v(" "),n("m-button",{attrs:{variant:"tertiary",loading:""}},[t._v("\n\t\t\tLoading\n\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tCheckbox\n\t\t")]),t._v(" "),n("m-checkbox",[t._v("\n\t\t\tcheckbox\n\t\t")]),t._v(" "),n("m-checkbox",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled checkbox\n\t\t")]),t._v(" "),n("m-checkbox",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid checkbox\n\t\t")]),t._v(" "),n("m-checkbox",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tcheckbox with a label\n\t\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tDivider\n\t\t")]),t._v(" "),n("m-divider")],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-2,-1,0,1,2,3,4,5,6,7],(function(e){return n("m-text",{key:e,attrs:{size:e}},[t._v("\n\t\t\tText Size "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tImage\n\t\t")]),t._v(" "),n("m-image",{staticClass:"square",attrs:{src:"https://source.unsplash.com/random/200x200"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tInput\n\t\t")]),t._v(" "),n("m-input",{attrs:{placeholder:"placeholder"}}),t._v(" "),n("m-input",{attrs:{placeholder:"disabled",disabled:""}}),t._v(" "),n("m-input",{attrs:{placeholder:"invalid",invalid:""}}),t._v(" "),n("m-input",{attrs:{placeholder:"align right",align:"right"}}),t._v(" "),n("m-input",{attrs:{placeholder:"prefix text"},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("\n\t\t\t\t$\n\t\t\t")]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"suffix text",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("\n\t\t\t\tpounds\n\t\t\t")]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"prefix icon"},scopedSlots:t._u([{key:"prefix",fn:function(){return[n("plus",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"suffix icon",align:"right"},scopedSlots:t._u([{key:"suffix",fn:function(){return[n("x",{staticClass:"icon"})]},proxy:!0}])}),t._v(" "),n("m-input",{attrs:{placeholder:"with error message"},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tLoading\n\t\t")]),t._v(" "),n("m-loading")],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tNotice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\tI am an error notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"error",variant:"block"}},[t._v("\n\t\t\tI am a block error notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"success"}},[t._v("\n\t\t\tI am an success notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"success",variant:"block"}},[t._v("\n\t\t\tI am a block success notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"warning"}},[t._v("\n\t\t\tI am an warning notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"warning",variant:"block"}},[t._v("\n\t\t\tI am a block warning notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"info"}},[t._v("\n\t\t\tI am an info notice\n\t\t")]),t._v(" "),n("m-notice",{attrs:{type:"info",variant:"block"}},[t._v("\n\t\t\tI am a block info notice\n\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tRadio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1"}},[t._v("\n\t\t\tradio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1",disabled:""}},[t._v("\n\t\t\tdisabled radio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1",invalid:""}},[t._v("\n\t\t\tinvalid radio\n\t\t")]),t._v(" "),n("m-radio",{attrs:{value:"1"},scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\tand also a sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tradio with label\n\t\t\t")])],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tSelect\n\t\t")]),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options,disabled:""},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options,invalid:""},model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}}),t._v(" "),n("m-select",{attrs:{placeholder:"placeholder",options:t.options},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}]),model:{value:t.currentOption,callback:function(e){t.currentOption=e},expression:"currentOption"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tSkeleton\n\t\t")]),t._v(" "),n("m-skeleton-block",{staticClass:"square"}),t._v(" "),n("m-skeleton-text",{attrs:{lines:3}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tStepper\n\t\t")]),t._v(" "),n("m-stepper",{model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tText\n\t\t")]),t._v(" "),t._l([-1,0,1],(function(e){return n("m-text",{key:"text-"+e,attrs:{size:e}},[t._v("\n\t\t\tSize "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tTextarea\n\t\t")]),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder"}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",disabled:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",invalid:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder",resizable:""}}),t._v(" "),n("m-textarea",{attrs:{placeholder:"placeholder"},scopedSlots:t._u([{key:"error",fn:function(){return[n("m-notice",{attrs:{type:"error"}},[t._v("\n\t\t\t\t\terror message here\n\t\t\t\t")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"section"},[n("m-text",{attrs:{pattern:"title",size:2}},[t._v("\n\t\t\tToggle\n\t\t")]),t._v(" "),n("m-toggle",[t._v("\n\t\t\ttoggle\n\t\t")]),t._v(" "),n("m-toggle",{attrs:{disabled:""}},[t._v("\n\t\t\tdisabled toggle\n\t\t")]),t._v(" "),n("m-toggle",{attrs:{invalid:""}},[t._v("\n\t\t\tinvalid toggle\n\t\t")]),t._v(" "),n("m-toggle",{scopedSlots:t._u([{key:"sublabel",fn:function(){return[t._v("\n\t\t\t\ttoggle sublabel\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\ttoggle label\n\t\t\t")])],1)],1)}),[],!1,null,"129df388",null).exports},6951:(t,e,n)=>{var r=n(83);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("01da21f3",r,!0,{})}}]);