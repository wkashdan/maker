(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[8196],{71432:(n,a,e)=>{var t=e(19751),o=/^\s+/;n.exports=function(n){return n?n.slice(0,t(n)+1).replace(o,""):n}},19751:n=>{var a=/\s/;n.exports=function(n){for(var e=n.length;e--&&a.test(n.charAt(e)););return e}},50569:(n,a,e)=>{var t=e(70071),o=e(55989),d=e(56705),r=Math.max,i=Math.min;n.exports=function(n,a,e){var l,m,s,f,p,c,v=0,b=!1,h=!1,y=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function k(a){var e=l,t=m;return l=m=void 0,v=a,f=n.apply(t,e)}function w(n){return v=n,p=setTimeout(g,a),b?k(n):f}function u(n){var e=n-c;return void 0===c||e>=a||e<0||h&&n-v>=s}function g(){var n=o();if(u(n))return x(n);p=setTimeout(g,function(n){var e=a-(n-c);return h?i(e,s-(n-v)):e}(n))}function x(n){return p=void 0,y&&l?k(n):(l=m=void 0,f)}function _(){var n=o(),e=u(n);if(l=arguments,m=this,c=n,e){if(void 0===p)return w(c);if(h)return clearTimeout(p),p=setTimeout(g,a),k(c)}return void 0===p&&(p=setTimeout(g,a)),f}return a=d(a)||0,t(e)&&(b=!!e.leading,s=(h="maxWait"in e)?r(d(e.maxWait)||0,a):s,y="trailing"in e?!!e.trailing:y),_.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=c=m=p=void 0},_.flush=function(){return void 0===p?f:x(o())},_}},55989:(n,a,e)=>{var t=e(44362);n.exports=function(){return t.Date.now()}},69792:(n,a,e)=>{var t=e(50569),o=e(70071);n.exports=function(n,a,e){var d=!0,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return o(e)&&(d="leading"in e?!!e.leading:d,r="trailing"in e?!!e.trailing:r),t(n,a,{leading:d,maxWait:a,trailing:r})}},56705:(n,a,e)=>{var t=e(71432),o=e(70071),d=e(34655),r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(d(n))return NaN;if(o(n)){var a="function"==typeof n.valueOf?n.valueOf():n;n=o(a)?a+"":a}if("string"!=typeof n)return 0===n?n:+n;n=t(n);var e=i.test(n);return e||l.test(n)?m(n.slice(2),e?2:8):r.test(n)?NaN:+n}},13555:function(n){n.exports=function(){"use strict";var n=function(n){var a=n.props,e=n.data,t=n.parent,o=function n(a){return Array.isArray(a)?(e=a=>n(a),a.reduce(((n,a)=>n.concat(e(a))),[])):null!==(t=a)&&"object"==typeof t?function(n){let a=[];for(const e in n)n[e]&&a.push(e);return a}(a):"string"==typeof a&&a?[a]:[];var e,t}([e.staticClass,e.class]);if(o){var d,r,i,l=(r=(d=a).body,i=d.document,r?window.document.body:!!i&&window.document.documentElement);if(l){var m=function(n,a){if(!a.length)return;const{classList:e}=n;return a.filter((n=>{if(!e.contains(n))return e.add(n),!0}))}(l,o),s=function(){!function(n,a){if(!a||!a.length)return;let e;for(;e=a.shift();)n.classList.remove(e);n.classList.length||n.removeAttribute("class")}(l,m)};t.$once("hook:beforeUpdate",s),t.$once("hook:destroyed",s)}}},a=Object.prototype.hasOwnProperty,e=function(n,a,e){var t="&"===a[0],o="~"===(a=t?a.slice(1):a)[0],d="!"===(a=o?a.slice(1):a)[0];return{o:n,t:a=d?a.slice(1):a,i:e,u:{once:o,capture:d,passive:t}}},t=function(n){var t,o,d,r=n.props,i=n.listeners,l=n.parent,m=function(n,t){var o,d,r=[];for(var i in t)if(o=t,d=i,a.call(o,d)){var l=t[i],m=e(n,i,l);m.o.addEventListener(m.t,m.i,m.u),r.push(m)}return r}((o=(t=r).body,d=t.document,o?window.document.body:d?window.document:window),i),s=function(){!function(n){for(var a;a=n.shift();)a.o.removeEventListener(a.t,a.i,a.u)}(m)};l.$once("hook:beforeUpdate",s),l.$once("hook:destroyed",s)},o=function(a){t(a),n(a)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,a){return a.parent._isMounted?o(a):a.parent.$once("hook:mounted",(function(){o(a)})),a.slots().default}}}()},9744:(n,a,e)=>{"use strict";e.d(a,{o:()=>s});var t=e(86812),o=e(46475),d=e(55412),r=e(9152);const i={components:{MTheme:t.qo},inject:{theme:{default:(0,t.uH)(),from:t.YH}},inheritAttrs:!1,props:{shape:{type:String,default:void 0,validator:n=>["squared","rounded","pill"].includes(n)},variant:{type:String,default:void 0,validator:n=>["outline","glass"].includes(n)}},computed:{...(0,t.C9)("card",["shape","variant"]),style(){if("glass"!==this.variant)return{};return{"--bg-color-glass":(0,r.Vi)(this.theme.colors["neutral-100"]).alpha(.8).toRgbString()}},cardTheme(){if("glass"!==this.variant)return{};const n=this.theme.colors["neutral-100"];return{colors:{...(0,d.Z)(n,this.theme.colors.primary),heading:(0,o.mj)(n,this.theme.colors.heading),body:(0,o.mj)(n,this.theme.colors.body)}}}}};var l=e(38321),m=e.n(l);const s=(0,e(51900).Z)(i,(function(){var n=this,a=n.$createElement;return(n._self._c||a)("m-theme",n._g(n._b({class:[n.$s.Card,n.$s["shape_"+n.resolvedShape],n.$s["variant_"+n.resolvedVariant]],style:n.style,attrs:{theme:n.cardTheme}},"m-theme",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,(function(n){this.$s=m().locals||m()}),null,null).exports},94569:(n,a,e)=>{"use strict";e.d(a,{T:()=>r});var t=e(77386),o=e(45832);const d={components:{MTransitionResponsive:t.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:o.iu,enter:this.enter,leave:this.leave}]}}};const r=(0,e(51900).Z)(d,(function(){var n=this,a=n.$createElement;return(n._self._c||a)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},77386:(n,a,e)=>{"use strict";e.d(a,{w:()=>o});const t={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,a){this.getResponsiveTransition().enter({element:n,onComplete:a})},handleLeave(n,a){this.getResponsiveTransition().leave({element:n,onComplete:a})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let a;return this.transitions.forEach((e=>{n>=e.minWidth&&(a=e)})),a}}};const o=(0,e(51900).Z)(t,(function(){var n=this,a=n.$createElement;return(n._self._c||a)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:(n,a,e)=>{"use strict";e.d(a,{iu:()=>d,OE:()=>r,AT:()=>l,ST:()=>m,hJ:()=>p,Y7:()=>v,dx:()=>g,s4:()=>x,vq:()=>_,vn:()=>C,w0:()=>z,I0:()=>M,$y:()=>E,rG:()=>T,iM:()=>$,tq:()=>S,cT:()=>U,uL:()=>q,C9:()=>j});var t=e(19546),o=e(47069);const d=0,r=840,i="spring",l=200,m={type:i,stiffness:600,damping:60,mass:1},s={type:i,stiffness:400,damping:40,mass:1},f={type:i,stiffness:400,damping:30,mass:1.5},p={from:0,to:100},c={from:100,to:0};function v(n,a,e,t){return o=>function(n,a,e,t,o){return{[t]:"".concat(n/100*(e-a)+a).concat(o)}}(o,n,a,e,t)}const b=v(0,100,"opacity","%"),h=v(0,100,"y","%"),y=v(0,100,"x","%"),k=v(40,0,"y","px"),w=n=>({...b(n),...k(n)}),u=(n,a)=>{const e=v(a,0,"y","px");return{...b(n),...e(n)}};function g({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=b,r=p;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function x({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=b,r=p;e.set(d(r.from)),e.render(),setTimeout((()=>{(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}),l)}function _({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=b,r=c;e.set(d(r.from)),e.render(),(0,o.j)({...c,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function C({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=h,r=c;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function z({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=h,r=p;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function M({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=y,r=c;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function E({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=y,r=p;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function T({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=w,r=p;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function $({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=w,r=p;e.set(d(r.from)),e.render(),setTimeout((()=>{(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}),l)}function S({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=u,r=p,i=20+5*n.dataset.loadIndex;e.set(d(r.from)),e.render(),(0,o.j)({...r,...s,onUpdate(n){e.set(d(n,i))},onComplete:a})}function U({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=w,r=c;e.set(d(r.from)),e.render(),(0,o.j)({...r,...m,onUpdate(n){e.set(d(n))},onComplete:a})}function q({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=h,r=c;e.set(d(r.from)),e.render(),(0,o.j)({...r,...f,onUpdate(n){e.set(d(n))},onComplete:a})}function j({element:n,onComplete:a}){const e=(0,t.ZP)(n),d=h,r=p;e.set(d(r.from)),e.render(),(0,o.j)({...r,...f,onUpdate(n){e.set(d(n))},onComplete:a})}},88692:(n,a,e)=>{var t=e(77705)((function(n){return n[1]}));t.push([n.id,"\n.Card_d7UkO {\n\t--radius-rounded-default: 4px;\n\t--radius-pill-default: 4px;\n\n\tpadding: 16px 24px;\n\tborder-radius: var(--maker-shape-card-border-radius, 4px)\n}\n.Card_d7UkO.variant_outline_rDA6l {\n\t\tbackground-color: var(--maker-color-background, #ffffff);\n\t\tborder: 1px solid var(--maker-color-neutral-20, #d3d3d3);\n}\n.Card_d7UkO.variant_glass_Ea1sd {\n\t\tbackground-color: var(--bg-color-glass);\n\t\t-webkit-backdrop-filter: blur(2px);\n\t\t        backdrop-filter: blur(2px);\n}\n.Card_d7UkO.shape_squared_qTEdr {\n\t\tborder-radius: 0;\n}\n.Card_d7UkO.shape_rounded_OfLgX {\n\t\tborder-radius: var(--radius-rounded-default);\n}\n.Card_d7UkO.shape_pill_eULis {\n\t\tborder-radius: var(--radius-pill-default);\n}\n",""]),t.locals={Card:"Card_d7UkO",variant_outline:"variant_outline_rDA6l",variant_glass:"variant_glass_Ea1sd",shape_squared:"shape_squared_qTEdr",shape_rounded:"shape_rounded_OfLgX",shape_pill:"shape_pill_eULis"},n.exports=t},94821:(n,a,e)=>{var t=e(77705)((function(n){return n[1]}));t.push([n.id,'\n.markdown-body .octicon[data-v-03e4fe4a] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-03e4fe4a] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-03e4fe4a]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-03e4fe4a],\n.markdown-body h2 .octicon-link[data-v-03e4fe4a],\n.markdown-body h3 .octicon-link[data-v-03e4fe4a],\n.markdown-body h4 .octicon-link[data-v-03e4fe4a],\n.markdown-body h5 .octicon-link[data-v-03e4fe4a],\n.markdown-body h6 .octicon-link[data-v-03e4fe4a] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-03e4fe4a],\n.markdown-body h2:hover .anchor[data-v-03e4fe4a],\n.markdown-body h3:hover .anchor[data-v-03e4fe4a],\n.markdown-body h4:hover .anchor[data-v-03e4fe4a],\n.markdown-body h5:hover .anchor[data-v-03e4fe4a],\n.markdown-body h6:hover .anchor[data-v-03e4fe4a] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-03e4fe4a],\n.markdown-body h2:hover .anchor .octicon-link[data-v-03e4fe4a],\n.markdown-body h3:hover .anchor .octicon-link[data-v-03e4fe4a],\n.markdown-body h4:hover .anchor .octicon-link[data-v-03e4fe4a],\n.markdown-body h5:hover .anchor .octicon-link[data-v-03e4fe4a],\n.markdown-body h6:hover .anchor .octicon-link[data-v-03e4fe4a] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-03e4fe4a]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-03e4fe4a]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-03e4fe4a]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-03e4fe4a]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-03e4fe4a]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-03e4fe4a]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-03e4fe4a] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-03e4fe4a] {\n  display: block;\n}\n.markdown-body summary[data-v-03e4fe4a] {\n  display: list-item;\n}\n.markdown-body a[data-v-03e4fe4a] {\n  background-color: initial;\n}\n.markdown-body a[data-v-03e4fe4a]:active,\n.markdown-body a[data-v-03e4fe4a]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-03e4fe4a] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-03e4fe4a] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-03e4fe4a] {\n  border-style: none;\n}\n.markdown-body code[data-v-03e4fe4a],\n.markdown-body kbd[data-v-03e4fe4a],\n.markdown-body pre[data-v-03e4fe4a] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-03e4fe4a] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-03e4fe4a] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-03e4fe4a] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-03e4fe4a] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-03e4fe4a] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-03e4fe4a] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-03e4fe4a] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-03e4fe4a]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-03e4fe4a] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-03e4fe4a] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-03e4fe4a]:after,\n.markdown-body hr[data-v-03e4fe4a]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-03e4fe4a]:after {\n  clear: both;\n}\n.markdown-body table[data-v-03e4fe4a] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-03e4fe4a],\n.markdown-body th[data-v-03e4fe4a] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-03e4fe4a] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-03e4fe4a] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-03e4fe4a],\n.markdown-body h2[data-v-03e4fe4a],\n.markdown-body h3[data-v-03e4fe4a],\n.markdown-body h4[data-v-03e4fe4a],\n.markdown-body h5[data-v-03e4fe4a],\n.markdown-body h6[data-v-03e4fe4a] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-03e4fe4a] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-03e4fe4a],\n.markdown-body h2[data-v-03e4fe4a] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-03e4fe4a] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-03e4fe4a] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-03e4fe4a],\n.markdown-body h4[data-v-03e4fe4a] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-03e4fe4a] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-03e4fe4a] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-03e4fe4a],\n.markdown-body h6[data-v-03e4fe4a] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-03e4fe4a] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-03e4fe4a] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-03e4fe4a] {\n  margin: 0;\n}\n.markdown-body ol[data-v-03e4fe4a],\n.markdown-body ul[data-v-03e4fe4a] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-03e4fe4a],\n.markdown-body ul ol[data-v-03e4fe4a] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-03e4fe4a],\n.markdown-body ol ul ol[data-v-03e4fe4a],\n.markdown-body ul ol ol[data-v-03e4fe4a],\n.markdown-body ul ul ol[data-v-03e4fe4a] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-03e4fe4a] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-03e4fe4a],\n.markdown-body pre[data-v-03e4fe4a] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-03e4fe4a] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-03e4fe4a]::-webkit-inner-spin-button,\n.markdown-body input[data-v-03e4fe4a]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-03e4fe4a] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-03e4fe4a] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-03e4fe4a] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-03e4fe4a] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-03e4fe4a] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-03e4fe4a] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-03e4fe4a] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-03e4fe4a] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-03e4fe4a] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-03e4fe4a] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-03e4fe4a] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-03e4fe4a] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-03e4fe4a] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-03e4fe4a] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-03e4fe4a] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-03e4fe4a],\n.markdown-body .px-3[data-v-03e4fe4a] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-03e4fe4a] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-03e4fe4a] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-03e4fe4a] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-03e4fe4a] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-03e4fe4a] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-03e4fe4a] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-03e4fe4a] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-03e4fe4a] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-03e4fe4a],\n.markdown-body .pl-s .pl-v[data-v-03e4fe4a] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-03e4fe4a],\n.markdown-body .pl-en[data-v-03e4fe4a] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-03e4fe4a],\n.markdown-body .pl-smi[data-v-03e4fe4a] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-03e4fe4a] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-03e4fe4a] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-03e4fe4a],\n.markdown-body .pl-s[data-v-03e4fe4a],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-03e4fe4a],\n.markdown-body .pl-sr[data-v-03e4fe4a],\n.markdown-body .pl-sr .pl-cce[data-v-03e4fe4a],\n.markdown-body .pl-sr .pl-sra[data-v-03e4fe4a],\n.markdown-body .pl-sr .pl-sre[data-v-03e4fe4a] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-03e4fe4a],\n.markdown-body .pl-v[data-v-03e4fe4a] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-03e4fe4a] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-03e4fe4a] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-03e4fe4a] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-03e4fe4a]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-03e4fe4a] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-03e4fe4a] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-03e4fe4a],\n.markdown-body .pl-mh .pl-en[data-v-03e4fe4a],\n.markdown-body .pl-ms[data-v-03e4fe4a] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-03e4fe4a] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-03e4fe4a] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-03e4fe4a] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-03e4fe4a] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-03e4fe4a] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-03e4fe4a] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-03e4fe4a] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-03e4fe4a] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-03e4fe4a] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-03e4fe4a] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-03e4fe4a] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-03e4fe4a] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-03e4fe4a] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-03e4fe4a] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-03e4fe4a] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-03e4fe4a] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-03e4fe4a] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-03e4fe4a] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-03e4fe4a] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-03e4fe4a] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-03e4fe4a] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-03e4fe4a] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-03e4fe4a] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-03e4fe4a] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-03e4fe4a] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-03e4fe4a] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-03e4fe4a] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-03e4fe4a] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-03e4fe4a] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-03e4fe4a] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-03e4fe4a]:after,\n.markdown-body[data-v-03e4fe4a]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-03e4fe4a]:after {\n  clear: both;\n}\n.markdown-body[data-v-03e4fe4a]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-03e4fe4a]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-03e4fe4a]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-03e4fe4a],\n.markdown-body details[data-v-03e4fe4a],\n.markdown-body dl[data-v-03e4fe4a],\n.markdown-body ol[data-v-03e4fe4a],\n.markdown-body p[data-v-03e4fe4a],\n.markdown-body pre[data-v-03e4fe4a],\n.markdown-body table[data-v-03e4fe4a],\n.markdown-body ul[data-v-03e4fe4a] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-03e4fe4a] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-03e4fe4a] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-03e4fe4a]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-03e4fe4a]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-03e4fe4a],\n.markdown-body h2[data-v-03e4fe4a],\n.markdown-body h3[data-v-03e4fe4a],\n.markdown-body h4[data-v-03e4fe4a],\n.markdown-body h5[data-v-03e4fe4a],\n.markdown-body h6[data-v-03e4fe4a] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-03e4fe4a] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-03e4fe4a],\n.markdown-body h2[data-v-03e4fe4a] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-03e4fe4a] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-03e4fe4a] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-03e4fe4a] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-03e4fe4a] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-03e4fe4a] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-03e4fe4a],\n.markdown-body ul[data-v-03e4fe4a] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-03e4fe4a],\n.markdown-body ol ul[data-v-03e4fe4a],\n.markdown-body ul ol[data-v-03e4fe4a],\n.markdown-body ul ul[data-v-03e4fe4a] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-03e4fe4a] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-03e4fe4a] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-03e4fe4a] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-03e4fe4a] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-03e4fe4a] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-03e4fe4a] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-03e4fe4a] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-03e4fe4a] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-03e4fe4a],\n.markdown-body table th[data-v-03e4fe4a] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-03e4fe4a] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-03e4fe4a]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-03e4fe4a] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-03e4fe4a] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-03e4fe4a] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-03e4fe4a] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-03e4fe4a] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-03e4fe4a] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-03e4fe4a] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-03e4fe4a] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-03e4fe4a],\n.markdown-body pre[data-v-03e4fe4a] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-03e4fe4a] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-03e4fe4a] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-03e4fe4a]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-03e4fe4a] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-03e4fe4a] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-03e4fe4a] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-03e4fe4a]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-03e4fe4a]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-03e4fe4a] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-03e4fe4a] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-03e4fe4a],\n.markdown-body .pl-token[data-v-03e4fe4a]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-03e4fe4a] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-03e4fe4a] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-03e4fe4a] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-03e4fe4a] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-03e4fe4a] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-03e4fe4a] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-03e4fe4a] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-03e4fe4a] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-03e4fe4a] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-03e4fe4a] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-03e4fe4a] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-03e4fe4a] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-03e4fe4a] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-03e4fe4a] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-03e4fe4a] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},39072:(n,a,e)=>{var t=e(77705)((function(n){return n[1]}));t.push([n.id,"\n.spaceout > *[data-v-12a28c8d] {\n\tmargin-bottom: 16px;\n}\n.spaceout > *[data-v-12a28c8d]:last-child {\n\tmargin-bottom: 0;\n}\n.container[data-v-12a28c8d] {\n\twidth: 300px;\n}\n.glass-demo[data-v-12a28c8d] {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 600px;\n\theight: 400px;\n}\n.image[data-v-12a28c8d] {\n\tposition: absolute;\n}\n",""]),n.exports=t},808:(n,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>p});var t=e(9744),o=e(2321),d=e(86812),r=e(55412);const i={components:{MCard:t.o,MImage:o.F,MTheme:d.qo},data:()=>({themeLight:{colors:(0,r.Z)("#ffffff","#000000")},themeDark:{colors:(0,r.Z)("#000000","#ffffff")}})};e(84335);var l=e(51900);const m=(0,l.Z)(i,(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"spaceout"},[e("m-card",[n._v("\n\t\there is my card content\n\t")]),n._v(" "),e("div",{staticClass:"container"},[e("m-card",[n._v("\n\t\t\tthis is my card inside of a 300px wide container.\n\t\t\tthe card fits the width of the container, but there is no padding on the outside.\n\t\t")])],1),n._v(" "),e("div",{staticStyle:{width:"400px"}},[e("m-card",[n._v("\n\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t")])],1),n._v(" "),e("m-theme",{staticClass:"glass-demo",attrs:{theme:n.themeDark}},[e("m-image",{staticClass:"image",attrs:{src:"https://source.unsplash.com/600x400/?night+sky"}}),n._v(" "),e("m-card",{staticStyle:{width:"400px"},attrs:{variant:"glass"}},[n._v("\n\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t")])],1),n._v(" "),e("m-theme",{staticClass:"glass-demo",attrs:{theme:n.themeLight}},[e("m-image",{staticClass:"image",attrs:{src:"https://source.unsplash.com/600x400/?snow+blind"}}),n._v(" "),e("m-card",{staticStyle:{width:"400px"},attrs:{variant:"glass"}},[n._v("\n\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t")])],1)],1)}),[],!1,null,"12a28c8d",null).exports;var s=e(415);const f={components:{Demo0:m,DemoCollapse:s.DemoCollapse,SrcFile:s.SrcFile}};e(23808);const p=(0,l.Z)(f,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("p",[n._v("Supports attributes from "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[e("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("p",[n._v("Themable props* can be configured via the "),e("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component using the key "),e("code",[n._v("card")]),n._v(".")])},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[n._v("Prop")]),n._v(" "),e("th",[n._v("Type")]),n._v(" "),e("th",[n._v("Default")]),n._v(" "),e("th",[n._v("Possible values")]),n._v(" "),e("th",[n._v("Description")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("shape*")]),n._v(" "),e("td",[e("code",[n._v("string")])]),n._v(" "),e("td",[n._v("—")]),n._v(" "),e("td",[e("code",[n._v("'squared'")]),n._v(", "),e("code",[n._v("'rounded'")]),n._v(", "),e("code",[n._v("'pill'")])]),n._v(" "),e("td",[n._v("card shape")])]),n._v(" "),e("tr",[e("td",[n._v("variant*")]),n._v(" "),e("td",[e("code",[n._v("string")])]),n._v(" "),e("td",[e("code",[n._v("'outline'")])]),n._v(" "),e("td",[e("code",[n._v("'outline'")]),n._v(", "),e("code",[n._v("'glass'")])]),n._v(" "),e("td",[n._v("card variant")])])])])},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[n._v("Slot")]),n._v(" "),e("th",[n._v("Description")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("default")]),n._v(" "),e("td",[n._v("card content")])])])])},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("p",[n._v("Supports events from "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[e("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"markdown-body"},[e("h1",[n._v("Card")]),n._v(" "),e("p",[n._v("Use Card to provide a stylized container of information.")]),n._v(" "),e("h2",[n._v("Examples")]),n._v(" "),e("demo-collapse",[e("Demo0"),n._v(" "),e("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div class="spaceout">\n\t\t<m-card>\n\t\t\there is my card content\n\t\t</m-card>\n\t\t<div class="container">\n\t\t\t<m-card>\n\t\t\t\tthis is my card inside of a 300px wide container.\n\t\t\t\tthe card fits the width of the container, but there is no padding on the outside.\n\t\t\t</m-card>\n\t\t</div>\n\t\t<div style="width:400px;">\n\t\t\t<m-card>\n\t\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t\t</m-card>\n\t\t</div>\n\t\t<m-theme\n\t\t\tclass="glass-demo"\n\t\t\t:theme="themeDark"\n\t\t>\n\t\t\t<m-image\n\t\t\t\tclass="image"\n\t\t\t\tsrc="https://source.unsplash.com/600x400/?night+sky"\n\t\t\t/>\n\t\t\t<m-card\n\t\t\t\tvariant="glass"\n\t\t\t\tstyle="width:400px;"\n\t\t\t>\n\t\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t\t</m-card>\n\t\t</m-theme>\n\t\t<m-theme\n\t\t\tclass="glass-demo"\n\t\t\t:theme="themeLight"\n\t\t>\n\t\t\t<m-image\n\t\t\t\tclass="image"\n\t\t\t\tsrc="https://source.unsplash.com/600x400/?snow+blind"\n\t\t\t/>\n\t\t\t<m-card\n\t\t\t\tvariant="glass"\n\t\t\t\tstyle="width:400px;"\n\t\t\t>\n\t\t\t\there is my card content. there is a fixed width of 400px applied directly to the card.\n\t\t\t</m-card>\n\t\t</m-theme>\n\t</div>\n</template>\n\n<script>\nimport { MCard } from \'@square/maker/components/Card\';\nimport { MImage } from \'@square/maker/components/Image\';\nimport { MTheme } from \'@square/maker/components/Theme\';\nimport makerColors from \'@square/maker/utils/maker-colors\';\n\nexport default {\n\tcomponents: {\n\t\tMCard,\n\t\tMImage,\n\t\tMTheme,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tthemeLight: {\n\t\t\t\tcolors: makerColors(\'#ffffff\', \'#000000\'),\n\t\t\t},\n\t\t\tthemeDark: {\n\t\t\t\tcolors: makerColors(\'#000000\', \'#ffffff\'),\n\t\t\t},\n\t\t};\n\t},\n};\n<\/script>\n<style scoped>\n.spaceout > * {\n\tmargin-bottom: 16px;\n}\n.spaceout > *:last-child {\n\tmargin-bottom: 0;\n}\n.container {\n\twidth: 300px;\n}\n\n.glass-demo {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 600px;\n\theight: 400px;\n}\n\n.image {\n\tposition: absolute;\n}\n</style>\n')]],2)],1),n._v(" "),e("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),e("h2",[n._v("Slots")]),n._v(" "),n._m(3),n._v(" "),e("h2",[n._v("Events")]),n._v(" "),n._m(4)],1)}],!1,null,"03e4fe4a",null).exports},38321:(n,a,e)=>{var t=e(88692);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,e(54023).Z)("1fddcba8",t,!0,{})},23808:(n,a,e)=>{var t=e(94821);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,e(54023).Z)("5450a488",t,!0,{})},84335:(n,a,e)=>{var t=e(39072);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,e(54023).Z)("0cc43c07",t,!0,{})}}]);