(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[803],{3216:function(n,a,t){"use strict";t.d(a,{b:function(){return r}});var o={inheritAttrs:!1,props:{size:{type:Number,default:0,validator:n=>n>=-2&&n<=7},element:{type:String,default:void 0,validator:n=>["h1","h2","h3","h4","h5","h6","div"].includes(n)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},stringSize(){return this.size>=0?this.size.toString():`minus-${Math.abs(this.size)}`}},render(n){const{$s:a,stringSize:t,tag:o}=this;return n(o,{class:[a.Heading,a[`size_${t}`]],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}},d=t(1491),e=t.n(d);var r=(0,t(1900).Z)(o,undefined,undefined,!1,(function(n){this.$s=e().locals||e()}),null,null).exports},487:function(n,a,t){"use strict";t.d(a,{v:function(){return f}});var o=t(771),d=t.n(o);var e={name:"ProgressBar",props:{size:{type:String,default:"medium",validator:n=>["xsmall","small","medium","large"].includes(n)},shape:{type:String,default:"rounded",validator:n=>["squared","rounded","pill"].includes(n)},color:{type:String,default:"#000",validator:n=>d().valid(n)},progress:{type:Number,default:0,validator:n=>n>=0&&n<=100}},computed:{barStyles(){return{"--bar-color":this.color,"--fill-percent":`${this.progress}%`}}}},r=t(3619),i=t.n(r);var f=(0,t(1900).Z)(e,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{class:[n.$s.ProgressBarContainer,n.$s["size_"+n.size],n.$s["shape_"+n.shape]]},[t("div",{class:n.$s.ProgressBar,style:n.barStyles})])}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports},3655:function(n,a,t){var o=t(7705)((function(n){return n[1]}));o.push([n.id,"\n.Container_zecXa {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 32px;\n\tmax-width: 500px;\n}\n.Sizes_Na1RZ {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 12px;\n}\n\n",""]),o.locals={Container:"Container_zecXa",Sizes:"Sizes_Na1RZ"},n.exports=o},2630:function(n,a,t){var o=t(7705)((function(n){return n[1]}));o.push([n.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--color-900);\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),o.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},n.exports=o},9802:function(n,a,t){var o=t(7705)((function(n){return n[1]}));o.push([n.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: #f5f4f4;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tbackground-color: var(--bar-color);\n\ttransition: width 100ms linear;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x,\n.ProgressBarContainer__cJD1.shape_squared_gzT9x .ProgressBar_aeQRL {\n\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n.ProgressBarContainer__cJD1.shape_rounded_NBloK .ProgressBar_aeQRL,\n.ProgressBarContainer__cJD1.shape_pill_wddxw,\n.ProgressBarContainer__cJD1.shape_pill_wddxw .ProgressBar_aeQRL {\n\tborder-radius: 16px;\n}\n",""]),o.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw"},n.exports=o},3025:function(n,a,t){var o=t(7705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-0f95dc8f] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-0f95dc8f] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-0f95dc8f]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-0f95dc8f],\n.markdown-body h2 .octicon-link[data-v-0f95dc8f],\n.markdown-body h3 .octicon-link[data-v-0f95dc8f],\n.markdown-body h4 .octicon-link[data-v-0f95dc8f],\n.markdown-body h5 .octicon-link[data-v-0f95dc8f],\n.markdown-body h6 .octicon-link[data-v-0f95dc8f] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-0f95dc8f],\n.markdown-body h2:hover .anchor[data-v-0f95dc8f],\n.markdown-body h3:hover .anchor[data-v-0f95dc8f],\n.markdown-body h4:hover .anchor[data-v-0f95dc8f],\n.markdown-body h5:hover .anchor[data-v-0f95dc8f],\n.markdown-body h6:hover .anchor[data-v-0f95dc8f] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-0f95dc8f],\n.markdown-body h2:hover .anchor .octicon-link[data-v-0f95dc8f],\n.markdown-body h3:hover .anchor .octicon-link[data-v-0f95dc8f],\n.markdown-body h4:hover .anchor .octicon-link[data-v-0f95dc8f],\n.markdown-body h5:hover .anchor .octicon-link[data-v-0f95dc8f],\n.markdown-body h6:hover .anchor .octicon-link[data-v-0f95dc8f] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-0f95dc8f]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-0f95dc8f]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-0f95dc8f]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-0f95dc8f]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-0f95dc8f]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-0f95dc8f]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-0f95dc8f] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-0f95dc8f] {\n  display: block;\n}\n.markdown-body summary[data-v-0f95dc8f] {\n  display: list-item;\n}\n.markdown-body a[data-v-0f95dc8f] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-0f95dc8f]:active,\n.markdown-body a[data-v-0f95dc8f]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-0f95dc8f] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-0f95dc8f] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-0f95dc8f] {\n  border-style: none;\n}\n.markdown-body code[data-v-0f95dc8f],\n.markdown-body kbd[data-v-0f95dc8f],\n.markdown-body pre[data-v-0f95dc8f] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-0f95dc8f] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-0f95dc8f] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-0f95dc8f] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-0f95dc8f] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-0f95dc8f] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-0f95dc8f] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-0f95dc8f] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-0f95dc8f]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-0f95dc8f] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-0f95dc8f] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-0f95dc8f]:after,\n.markdown-body hr[data-v-0f95dc8f]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-0f95dc8f]:after {\n  clear: both;\n}\n.markdown-body table[data-v-0f95dc8f] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-0f95dc8f],\n.markdown-body th[data-v-0f95dc8f] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-0f95dc8f] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-0f95dc8f] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-0f95dc8f],\n.markdown-body h2[data-v-0f95dc8f],\n.markdown-body h3[data-v-0f95dc8f],\n.markdown-body h4[data-v-0f95dc8f],\n.markdown-body h5[data-v-0f95dc8f],\n.markdown-body h6[data-v-0f95dc8f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-0f95dc8f] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-0f95dc8f],\n.markdown-body h2[data-v-0f95dc8f] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-0f95dc8f] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-0f95dc8f] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-0f95dc8f],\n.markdown-body h4[data-v-0f95dc8f] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-0f95dc8f] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-0f95dc8f] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-0f95dc8f],\n.markdown-body h6[data-v-0f95dc8f] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-0f95dc8f] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-0f95dc8f] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-0f95dc8f] {\n  margin: 0;\n}\n.markdown-body ol[data-v-0f95dc8f],\n.markdown-body ul[data-v-0f95dc8f] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-0f95dc8f],\n.markdown-body ul ol[data-v-0f95dc8f] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-0f95dc8f],\n.markdown-body ol ul ol[data-v-0f95dc8f],\n.markdown-body ul ol ol[data-v-0f95dc8f],\n.markdown-body ul ul ol[data-v-0f95dc8f] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-0f95dc8f] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-0f95dc8f],\n.markdown-body pre[data-v-0f95dc8f] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-0f95dc8f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-0f95dc8f]::-webkit-inner-spin-button,\n.markdown-body input[data-v-0f95dc8f]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-0f95dc8f] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-0f95dc8f] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-0f95dc8f] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-0f95dc8f] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-0f95dc8f] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-0f95dc8f] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-0f95dc8f] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-0f95dc8f] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-0f95dc8f] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-0f95dc8f] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-0f95dc8f] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-0f95dc8f] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-0f95dc8f] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-0f95dc8f] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-0f95dc8f] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-0f95dc8f],\n.markdown-body .px-3[data-v-0f95dc8f] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-0f95dc8f] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-0f95dc8f] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-0f95dc8f] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-0f95dc8f] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-0f95dc8f] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-0f95dc8f] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-0f95dc8f] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-0f95dc8f] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-0f95dc8f],\n.markdown-body .pl-s .pl-v[data-v-0f95dc8f] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-0f95dc8f],\n.markdown-body .pl-en[data-v-0f95dc8f] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-0f95dc8f],\n.markdown-body .pl-smi[data-v-0f95dc8f] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-0f95dc8f] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-0f95dc8f] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-0f95dc8f],\n.markdown-body .pl-s[data-v-0f95dc8f],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-0f95dc8f],\n.markdown-body .pl-sr[data-v-0f95dc8f],\n.markdown-body .pl-sr .pl-cce[data-v-0f95dc8f],\n.markdown-body .pl-sr .pl-sra[data-v-0f95dc8f],\n.markdown-body .pl-sr .pl-sre[data-v-0f95dc8f] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-0f95dc8f],\n.markdown-body .pl-v[data-v-0f95dc8f] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-0f95dc8f] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-0f95dc8f] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-0f95dc8f] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-0f95dc8f]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-0f95dc8f] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-0f95dc8f] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-0f95dc8f],\n.markdown-body .pl-mh .pl-en[data-v-0f95dc8f],\n.markdown-body .pl-ms[data-v-0f95dc8f] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-0f95dc8f] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-0f95dc8f] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-0f95dc8f] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-0f95dc8f] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-0f95dc8f] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-0f95dc8f] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-0f95dc8f] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-0f95dc8f] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-0f95dc8f] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-0f95dc8f] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-0f95dc8f] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-0f95dc8f] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-0f95dc8f] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-0f95dc8f] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-0f95dc8f] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-0f95dc8f] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-0f95dc8f] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-0f95dc8f] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-0f95dc8f] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-0f95dc8f] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-0f95dc8f] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-0f95dc8f] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-0f95dc8f] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-0f95dc8f] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-0f95dc8f] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-0f95dc8f] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-0f95dc8f] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-0f95dc8f] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-0f95dc8f] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-0f95dc8f] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-0f95dc8f]:after,\n.markdown-body[data-v-0f95dc8f]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-0f95dc8f]:after {\n  clear: both;\n}\n.markdown-body[data-v-0f95dc8f]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-0f95dc8f]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-0f95dc8f]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-0f95dc8f],\n.markdown-body details[data-v-0f95dc8f],\n.markdown-body dl[data-v-0f95dc8f],\n.markdown-body ol[data-v-0f95dc8f],\n.markdown-body p[data-v-0f95dc8f],\n.markdown-body pre[data-v-0f95dc8f],\n.markdown-body table[data-v-0f95dc8f],\n.markdown-body ul[data-v-0f95dc8f] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-0f95dc8f] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-0f95dc8f] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-0f95dc8f]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-0f95dc8f]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-0f95dc8f],\n.markdown-body h2[data-v-0f95dc8f],\n.markdown-body h3[data-v-0f95dc8f],\n.markdown-body h4[data-v-0f95dc8f],\n.markdown-body h5[data-v-0f95dc8f],\n.markdown-body h6[data-v-0f95dc8f] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-0f95dc8f] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-0f95dc8f],\n.markdown-body h2[data-v-0f95dc8f] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-0f95dc8f] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-0f95dc8f] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-0f95dc8f] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-0f95dc8f] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-0f95dc8f] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-0f95dc8f],\n.markdown-body ul[data-v-0f95dc8f] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-0f95dc8f],\n.markdown-body ol ul[data-v-0f95dc8f],\n.markdown-body ul ol[data-v-0f95dc8f],\n.markdown-body ul ul[data-v-0f95dc8f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-0f95dc8f] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-0f95dc8f] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-0f95dc8f] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-0f95dc8f] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-0f95dc8f] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-0f95dc8f] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-0f95dc8f] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-0f95dc8f] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-0f95dc8f],\n.markdown-body table th[data-v-0f95dc8f] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-0f95dc8f] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-0f95dc8f]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-0f95dc8f] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-0f95dc8f] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-0f95dc8f] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-0f95dc8f] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-0f95dc8f] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-0f95dc8f] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-0f95dc8f] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-0f95dc8f] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-0f95dc8f],\n.markdown-body pre[data-v-0f95dc8f] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-0f95dc8f] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-0f95dc8f] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-0f95dc8f]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-0f95dc8f] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-0f95dc8f] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-0f95dc8f] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-0f95dc8f]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-0f95dc8f]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-0f95dc8f] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-0f95dc8f] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-0f95dc8f],\n.markdown-body .pl-token[data-v-0f95dc8f]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-0f95dc8f] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-0f95dc8f] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-0f95dc8f] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-0f95dc8f] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-0f95dc8f] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-0f95dc8f] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-0f95dc8f] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-0f95dc8f] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-0f95dc8f] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-0f95dc8f] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-0f95dc8f] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-0f95dc8f] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-0f95dc8f] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-0f95dc8f] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-0f95dc8f] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},9803:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var o=t(487),d=t(3216),e={components:{MProgressBar:o.v,MHeading:d.b},data:()=>({color:"#000",progress:50}),computed:{},methods:{}},r=t(9979),i=t.n(r),f=t(1900);var s=(0,f.Z)(e,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{class:n.$s.Container},[t("div",{class:n.$s.Section},[t("label",[n._v("\n\t\t\tColor picker\n\t\t\t"),t("input",{directives:[{name:"model",rawName:"v-model",value:n.color,expression:"color"}],attrs:{type:"color"},domProps:{value:n.color},on:{input:function(a){a.target.composing||(n.color=a.target.value)}}})])]),n._v(" "),t("div",{class:n.$s.Section},[t("label",[n._v("\n\t\t\tProgress ("+n._s(n.progress)+"%)\n\t\t\t"),t("input",{directives:[{name:"model",rawName:"v-model",value:n.progress,expression:"progress"}],attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:n.progress},on:{__r:function(a){n.progress=a.target.value}}})])]),n._v(" "),n._l(["pill","rounded","squared"],(function(a){return t("div",{key:a,class:n.$s.Sizes},[t("m-heading",{attrs:{size:2}},[n._v("\n\t\t\t"+n._s(a)+" shape\n\t\t")]),n._v(" "),n._l(["xsmall","small","medium","large"],(function(o){return t("div",{key:o},[t("m-heading",{attrs:{size:0}},[n._v("\n\t\t\t\t"+n._s(o)+"\n\t\t\t")]),n._v(" "),t("m-progress-bar",{attrs:{shape:a,size:o,color:n.color,progress:n.progress}})],1)}))],2)}))],2)}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports,l=t(415),c={components:{Demo0:s,DemoCollapse:l.DemoCollapse,SrcFile:l.SrcFile}},m=(t(9156),(0,f.Z)(c,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(1)}),[function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("size")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'medium'")])]),n._v(" "),t("td",[t("code",[n._v("xsmall")]),n._v(", "),t("code",[n._v("small")]),n._v(", "),t("code",[n._v("medium")]),n._v(", "),t("code",[n._v("large")])]),n._v(" "),t("td",[n._v("Size (height) of the progress bar")])]),n._v(" "),t("tr",[t("td",[n._v("shape")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'rounded'")])]),n._v(" "),t("td",[t("code",[n._v("squared")]),n._v(", "),t("code",[n._v("rounded")]),n._v(", "),t("code",[n._v("pill")])]),n._v(" "),t("td",[n._v("Shape of the progress bar")])]),n._v(" "),t("tr",[t("td",[n._v("color")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'#000'")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Color of the progress bar (not background)")])]),n._v(" "),t("tr",[t("td",[n._v("progress")]),n._v(" "),t("td",[t("code",[n._v("number")])]),n._v(" "),t("td",[t("code",[n._v("0")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Progress/width of the bar (0-100)")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Progress Bar")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div :class="$s.Container">\n\t\t<div :class="$s.Section">\n\t\t\t<label>\n\t\t\t\tColor picker\n\t\t\t\t<input\n\t\t\t\t\tv-model="color"\n\t\t\t\t\ttype="color"\n\t\t\t\t>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div :class="$s.Section">\n\t\t\t<label>\n\t\t\t\tProgress ({{ progress }}%)\n\t\t\t\t<input\n\t\t\t\t\tv-model="progress"\n\t\t\t\t\ttype="range"\n\t\t\t\t\tstep="1"\n\t\t\t\t\tmin="0"\n\t\t\t\t\tmax="100"\n\t\t\t\t>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div\n\t\t\tv-for="shape in [\'pill\', \'rounded\', \'squared\']"\n\t\t\t:key="shape"\n\t\t\t:class="$s.Sizes"\n\t\t>\n\t\t\t<m-heading :size="2">\n\t\t\t\t{{ shape }} shape\n\t\t\t</m-heading>\n\n\t\t\t<div\n\t\t\t\tv-for="size in [\'xsmall\', \'small\', \'medium\', \'large\']"\n\t\t\t\t:key="size"\n\t\t\t>\n\t\t\t\t<m-heading :size="0">\n\t\t\t\t\t{{ size }}\n\t\t\t\t</m-heading>\n\t\t\t\t<m-progress-bar\n\t\t\t\t\t:shape="shape"\n\t\t\t\t\t:size="size"\n\t\t\t\t\t:color="color"\n\t\t\t\t\t:progress="progress"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MProgressBar } from \'@square/maker/components/ProgressBar\';\nimport { MHeading } from \'@square/maker/components/Heading\';\n\nexport default {\n\tcomponents: {\n\t\tMProgressBar,\n\t\tMHeading,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tcolor: \'#000\',\n\t\t\tprogress: 50,\n\t\t};\n\t},\n\n\tcomputed: {},\n\n\tmethods: {},\n};\n<\/script>\n\n<style module="$s">\n.Container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\tmax-width: 500px;\n}\n\n.Sizes {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n}\n\n</style>\n\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(0)],1)}],!1,null,"0f95dc8f",null).exports)},9979:function(n,a,t){var o=t(3655);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4023).Z)("7723eae3",o,!0,{})},1491:function(n,a,t){var o=t(2630);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4023).Z)("ceb27898",o,!0,{})},3619:function(n,a,t){var o=t(9802);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4023).Z)("2b496f20",o,!0,{})},9156:function(n,a,t){var o=t(3025);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(4023).Z)("82893b06",o,!0,{})}}]);