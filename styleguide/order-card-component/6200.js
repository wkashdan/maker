(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6200],{31838:(n,a,o)=>{"use strict";o.d(a,{w:()=>t});const d={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,a){this.getResponsiveTransition().enter({element:n,onComplete:a})},handleLeave(n,a){this.getResponsiveTransition().leave({element:n,onComplete:a})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let a;return this.transitions.forEach((o=>{n>=o.minWidth&&(a=o)})),a}}};const t=(0,o(51900).Z)(d,(function(){var n=this,a=n.$createElement;return(n._self._c||a)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:(n,a,o)=>{"use strict";o.d(a,{iu:()=>e,OE:()=>r,AT:()=>c,ST:()=>l,hJ:()=>p,Y7:()=>v,dx:()=>u,s4:()=>x,vq:()=>_,vn:()=>z,w0:()=>C,I0:()=>M,$y:()=>E,rG:()=>F,iM:()=>S,tq:()=>Z,cT:()=>j,uL:()=>U,C9:()=>P});var d=o(19546),t=o(47069);const e=0,r=840,i="spring",c=200,l={type:i,stiffness:600,damping:60,mass:1},m={type:i,stiffness:400,damping:40,mass:1},b={type:i,stiffness:400,damping:30,mass:1.5},p={from:0,to:100},s={from:100,to:0};function v(n,a,o,d){return t=>function(n,a,o,d,t){return{[d]:"".concat(n/100*(o-a)+a).concat(t)}}(t,n,a,o,d)}const w=v(0,100,"opacity","%"),k=v(0,100,"y","%"),y=v(0,100,"x","%"),h=v(40,0,"y","px"),f=n=>({...w(n),...h(n)}),g=(n,a)=>{const o=v(a,0,"y","px");return{...w(n),...o(n)}};function u({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=w,r=p;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function x({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=w,r=p;o.set(e(r.from)),o.render(),setTimeout((()=>{(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}),c)}function _({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=w,r=s;o.set(e(r.from)),o.render(),(0,t.j)({...s,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function z({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=k,r=s;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function C({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=k,r=p;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function M({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=y,r=s;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function E({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=y,r=p;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function F({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=f,r=p;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function S({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=f,r=p;o.set(e(r.from)),o.render(),setTimeout((()=>{(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}),c)}function Z({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=g,r=p,i=20+5*n.dataset.loadIndex;o.set(e(r.from)),o.render(),(0,t.j)({...r,...m,onUpdate(n){o.set(e(n,i))},onComplete:a})}function j({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=f,r=s;o.set(e(r.from)),o.render(),(0,t.j)({...r,...l,onUpdate(n){o.set(e(n))},onComplete:a})}function U({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=k,r=s;o.set(e(r.from)),o.render(),(0,t.j)({...r,...b,onUpdate(n){o.set(e(n))},onComplete:a})}function P({element:n,onComplete:a}){const o=(0,d.ZP)(n),e=k,r=p;o.set(e(r.from)),o.render(),(0,t.j)({...r,...b,onUpdate(n){o.set(e(n))},onComplete:a})}},51:(n,a,o)=>{var d=o(77705)((function(n){return n[1]}));d.push([n.id,"\n.container[data-v-5df7fff4] {\n\twidth: 200px;\n\theight: 300px;\n\toverflow: hidden;\n}\n.box[data-v-5df7fff4] {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--maker-color-neutral-10);\n\tborder-radius: 16px;\n}\n",""]),n.exports=d},83736:(n,a,o)=>{var d=o(77705)((function(n){return n[1]}));d.push([n.id,'\n.markdown-body .octicon[data-v-da5809c8] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-da5809c8] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-da5809c8]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-da5809c8],\n.markdown-body h2 .octicon-link[data-v-da5809c8],\n.markdown-body h3 .octicon-link[data-v-da5809c8],\n.markdown-body h4 .octicon-link[data-v-da5809c8],\n.markdown-body h5 .octicon-link[data-v-da5809c8],\n.markdown-body h6 .octicon-link[data-v-da5809c8] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-da5809c8],\n.markdown-body h2:hover .anchor[data-v-da5809c8],\n.markdown-body h3:hover .anchor[data-v-da5809c8],\n.markdown-body h4:hover .anchor[data-v-da5809c8],\n.markdown-body h5:hover .anchor[data-v-da5809c8],\n.markdown-body h6:hover .anchor[data-v-da5809c8] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-da5809c8],\n.markdown-body h2:hover .anchor .octicon-link[data-v-da5809c8],\n.markdown-body h3:hover .anchor .octicon-link[data-v-da5809c8],\n.markdown-body h4:hover .anchor .octicon-link[data-v-da5809c8],\n.markdown-body h5:hover .anchor .octicon-link[data-v-da5809c8],\n.markdown-body h6:hover .anchor .octicon-link[data-v-da5809c8] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-da5809c8]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-da5809c8]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-da5809c8]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-da5809c8]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-da5809c8]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-da5809c8]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-da5809c8] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-da5809c8] {\n  display: block;\n}\n.markdown-body summary[data-v-da5809c8] {\n  display: list-item;\n}\n.markdown-body a[data-v-da5809c8] {\n  background-color: initial;\n}\n.markdown-body a[data-v-da5809c8]:active,\n.markdown-body a[data-v-da5809c8]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-da5809c8] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-da5809c8] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-da5809c8] {\n  border-style: none;\n}\n.markdown-body code[data-v-da5809c8],\n.markdown-body kbd[data-v-da5809c8],\n.markdown-body pre[data-v-da5809c8] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-da5809c8] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-da5809c8] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-da5809c8] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-da5809c8] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-da5809c8] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-da5809c8] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-da5809c8] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-da5809c8]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-da5809c8] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-da5809c8] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-da5809c8]:after,\n.markdown-body hr[data-v-da5809c8]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-da5809c8]:after {\n  clear: both;\n}\n.markdown-body table[data-v-da5809c8] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-da5809c8],\n.markdown-body th[data-v-da5809c8] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-da5809c8] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-da5809c8] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-da5809c8],\n.markdown-body h2[data-v-da5809c8],\n.markdown-body h3[data-v-da5809c8],\n.markdown-body h4[data-v-da5809c8],\n.markdown-body h5[data-v-da5809c8],\n.markdown-body h6[data-v-da5809c8] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-da5809c8] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-da5809c8],\n.markdown-body h2[data-v-da5809c8] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-da5809c8] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-da5809c8] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-da5809c8],\n.markdown-body h4[data-v-da5809c8] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-da5809c8] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-da5809c8] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-da5809c8],\n.markdown-body h6[data-v-da5809c8] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-da5809c8] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-da5809c8] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-da5809c8] {\n  margin: 0;\n}\n.markdown-body ol[data-v-da5809c8],\n.markdown-body ul[data-v-da5809c8] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-da5809c8],\n.markdown-body ul ol[data-v-da5809c8] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-da5809c8],\n.markdown-body ol ul ol[data-v-da5809c8],\n.markdown-body ul ol ol[data-v-da5809c8],\n.markdown-body ul ul ol[data-v-da5809c8] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-da5809c8] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-da5809c8],\n.markdown-body pre[data-v-da5809c8] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-da5809c8] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-da5809c8]::-webkit-inner-spin-button,\n.markdown-body input[data-v-da5809c8]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-da5809c8] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-da5809c8] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-da5809c8] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-da5809c8] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-da5809c8] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-da5809c8] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-da5809c8] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-da5809c8] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-da5809c8] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-da5809c8] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-da5809c8] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-da5809c8] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-da5809c8] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-da5809c8] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-da5809c8] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-da5809c8],\n.markdown-body .px-3[data-v-da5809c8] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-da5809c8] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-da5809c8] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-da5809c8] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-da5809c8] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-da5809c8] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-da5809c8] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-da5809c8] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-da5809c8] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-da5809c8],\n.markdown-body .pl-s .pl-v[data-v-da5809c8] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-da5809c8],\n.markdown-body .pl-en[data-v-da5809c8] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-da5809c8],\n.markdown-body .pl-smi[data-v-da5809c8] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-da5809c8] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-da5809c8] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-da5809c8],\n.markdown-body .pl-s[data-v-da5809c8],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-da5809c8],\n.markdown-body .pl-sr[data-v-da5809c8],\n.markdown-body .pl-sr .pl-cce[data-v-da5809c8],\n.markdown-body .pl-sr .pl-sra[data-v-da5809c8],\n.markdown-body .pl-sr .pl-sre[data-v-da5809c8] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-da5809c8],\n.markdown-body .pl-v[data-v-da5809c8] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-da5809c8] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-da5809c8] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-da5809c8] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-da5809c8]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-da5809c8] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-da5809c8] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-da5809c8],\n.markdown-body .pl-mh .pl-en[data-v-da5809c8],\n.markdown-body .pl-ms[data-v-da5809c8] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-da5809c8] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-da5809c8] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-da5809c8] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-da5809c8] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-da5809c8] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-da5809c8] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-da5809c8] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-da5809c8] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-da5809c8] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-da5809c8] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-da5809c8] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-da5809c8] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-da5809c8] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-da5809c8] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-da5809c8] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-da5809c8] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-da5809c8] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-da5809c8] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-da5809c8] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-da5809c8] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-da5809c8] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-da5809c8] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-da5809c8] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-da5809c8] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-da5809c8] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-da5809c8] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-da5809c8] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-da5809c8] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-da5809c8] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-da5809c8] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-da5809c8]:after,\n.markdown-body[data-v-da5809c8]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-da5809c8]:after {\n  clear: both;\n}\n.markdown-body[data-v-da5809c8]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-da5809c8]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-da5809c8]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-da5809c8],\n.markdown-body details[data-v-da5809c8],\n.markdown-body dl[data-v-da5809c8],\n.markdown-body ol[data-v-da5809c8],\n.markdown-body p[data-v-da5809c8],\n.markdown-body pre[data-v-da5809c8],\n.markdown-body table[data-v-da5809c8],\n.markdown-body ul[data-v-da5809c8] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-da5809c8] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-da5809c8] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-da5809c8]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-da5809c8]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-da5809c8],\n.markdown-body h2[data-v-da5809c8],\n.markdown-body h3[data-v-da5809c8],\n.markdown-body h4[data-v-da5809c8],\n.markdown-body h5[data-v-da5809c8],\n.markdown-body h6[data-v-da5809c8] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-da5809c8] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-da5809c8],\n.markdown-body h2[data-v-da5809c8] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-da5809c8] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-da5809c8] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-da5809c8] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-da5809c8] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-da5809c8] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-da5809c8],\n.markdown-body ul[data-v-da5809c8] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-da5809c8],\n.markdown-body ol ul[data-v-da5809c8],\n.markdown-body ul ol[data-v-da5809c8],\n.markdown-body ul ul[data-v-da5809c8] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-da5809c8] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-da5809c8] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-da5809c8] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-da5809c8] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-da5809c8] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-da5809c8] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-da5809c8] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-da5809c8] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-da5809c8],\n.markdown-body table th[data-v-da5809c8] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-da5809c8] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-da5809c8]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-da5809c8] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-da5809c8] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-da5809c8] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-da5809c8] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-da5809c8] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-da5809c8] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-da5809c8] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-da5809c8] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-da5809c8],\n.markdown-body pre[data-v-da5809c8] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-da5809c8] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-da5809c8] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-da5809c8]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-da5809c8] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-da5809c8] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-da5809c8] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-da5809c8]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-da5809c8]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-da5809c8] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-da5809c8] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-da5809c8],\n.markdown-body .pl-token[data-v-da5809c8]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-da5809c8] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-da5809c8] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-da5809c8] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-da5809c8] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-da5809c8] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-da5809c8] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-da5809c8] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-da5809c8] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-da5809c8] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-da5809c8] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-da5809c8] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-da5809c8] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-da5809c8] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-da5809c8] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-da5809c8] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=d},6200:(n,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>m});var d=o(31838),t=o(45832);const e={components:{MTransitionResponsive:d.w},inheritAttrs:!1,data:()=>({transitions:[{minWidth:t.iu,enter:t.vn,leave:t.w0},{minWidth:t.OE,enter:t.dx,leave:t.vq}],visible:!1}),mounted(){setInterval((()=>{this.visible=!this.visible}),2e3)}};o(19488);var r=o(51900);const i=(0,r.Z)(e,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"container"},[o("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.visible?o("div",{staticClass:"box"}):n._e()])],1)}),[],!1,null,"5df7fff4",null).exports;var c=o(415);const l={components:{Demo0:i,DemoCollapse:c.DemoCollapse,SrcFile:c.SrcFile}};o(65975);const m=(0,r.Z)(l,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(3)}),[function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("p",[n._v("This is used internally by the Modal component. Resize your viewport below and above the tablet breakpoint of "),o("code",[n._v("840px")]),n._v(" to see the transitions change.")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("transitions*")]),n._v(" "),o("td",[o("code",[n._v("array")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("content to animate")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Transition Responsive")]),n._v(" "),o("p",[n._v("Foundational transition component that the rest are built on top of. Has the ability to customize enter and leave transition based on viewport width.")]),n._v(" "),o("h2",[n._v("Examples")]),n._v(" "),o("h3",[n._v("Spring up & down on Mobile but Fade in & out on Tablet")]),n._v(" "),n._m(0),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div class="container">\n\t\t<m-transition-responsive\n\t\t\t:transitions="transitions"\n\t\t>\n\t\t\t<div\n\t\t\t\tv-if="visible"\n\t\t\t\tclass="box"\n\t\t\t/>\n\t\t</m-transition-responsive>\n\t</div>\n</template>\n\n<script>\nimport { MTransitionResponsive } from \'@square/maker/utils/TransitionResponsive\';\nimport {\n\tfadeInFn,\n\tfadeOutFn,\n\tspringUpFn,\n\tspringDownFn,\n\tmobileMinWidth,\n\ttabletMinWidth,\n} from \'@square/maker/utils/transitions\';\n\nexport default {\n\tcomponents: {\n\t\tMTransitionResponsive,\n\t},\n\n\tinheritAttrs: false,\n\n\tdata() {\n\t\treturn {\n\t\t\ttransitions: [{\n\t\t\t\tminWidth: mobileMinWidth,\n\t\t\t\tenter: springUpFn,\n\t\t\t\tleave: springDownFn,\n\t\t\t}, {\n\t\t\t\tminWidth: tabletMinWidth,\n\t\t\t\tenter: fadeInFn,\n\t\t\t\tleave: fadeOutFn,\n\t\t\t}],\n\t\t\tvisible: false,\n\t\t};\n\t},\n\n\tmounted() {\n\t\tconst transitionIntervalMs = 2000;\n\t\tsetInterval(() => {\n\t\t\tthis.visible = !this.visible;\n\t\t}, transitionIntervalMs);\n\t},\n};\n<\/script>\n\n<style scoped>\n.container {\n\twidth: 200px;\n\theight: 300px;\n\toverflow: hidden;\n}\n.box {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--maker-color-neutral-10);\n\tborder-radius: 16px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(2)],1)}],!1,null,"da5809c8",null).exports},19488:(n,a,o)=>{var d=o(51);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[n.id,d,""]]),d.locals&&(n.exports=d.locals);(0,o(54023).Z)("720a7394",d,!0,{})},65975:(n,a,o)=>{var d=o(83736);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[n.id,d,""]]),d.locals&&(n.exports=d.locals);(0,o(54023).Z)("b108f250",d,!0,{})}}]);