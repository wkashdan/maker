(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[185],{33216:function(n,o,t){"use strict";t.d(o,{b:function(){return l}});var a=t(60771),d=t.n(a),e=t(65833);var r={inject:{theme:{default:(0,e.uH)(),from:e.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:n=>n>=-2&&n<=7},element:{type:String,default:void 0,validator:n=>["h1","h2","h3","h4","h5","h6","div"].includes(n)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:n=>d().valid(n)}},computed:{...(0,e.C9)("heading",["size","fontFamily","textColor"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor}}},render(n){const{$s:o,sizeClass:t,tag:a,inlineStyles:d}=this,e=this.$slots.default;return n(a,{class:[o.Heading,o[`size_${t}`]],style:d,attrs:this.$attrs,on:this.$listeners},e)}},i=t(71491),b=t.n(i);var l=(0,t(51900).Z)(r,undefined,undefined,!1,(function(n){this.$s=b().locals||b()}),null,null).exports},65833:function(n,o,t){"use strict";t.d(o,{qo:function(){return _},YH:function(){return i},uH:function(){return g},C9:function(){return y}});var a=t(85066),d=t.n(a),e=t(54299),r=t.n(e);var i=Symbol("ThemeKey"),b=t(20643),l=t.n(b),s=t(71586),m=t.n(s),v=t(2588),p=t.n(v),c=t(75692),h=t.n(c),f=t(32416);function k(n){return h()(n)&&n.startsWith("@")?this.getPath(n):n}function w(n){if(!h()(n))throw new Error(`cannot resolve pointer ${n} it is not a string`);if(!n.startsWith("@"))throw new Error(`cannot resolve pointer ${n} it is missed the @ prefix`);const o=n.slice(1),t=l()(this,o);if(m()(t)||p()(t))throw new Error(`invalid pointer ${n} does not point to a field that exists within the theme`);return t}function y(n,o){const t={};for(const d of o)t[`resolved${a=d,a[0].toUpperCase()+a.slice(1)}`]=function(){if(this[d])return this[d];const o=this.theme[n][d];if(o){const t=o,a=this.theme.resolve(t),e=this.$vnode.componentOptions.Ctor.extendOptions.props[d].validator;return e&&f.Z.error(e(a),`Invalid value "${a}" for prop "${d}" for component "${n}" in theme.`),a}};var a;return t}function g(){return{colors:{background:"#ffffff",primary:"#000000",text:"#636363",heading:"#303030","color-100":"#f1f1f1","color-300":"#d7d7d7","color-800":"#636363","color-900":"#303030"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:void 0,size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{textColor:"@colors.text",fontFamily:"inherit",size:0},heading:{textColor:"@colors.heading",fontFamily:"inherit",size:2},stepper:{color:'@colors["color-100"]',textColor:'@colors["color-900"]'},resolve:k,getPath:w}}function u(n,o,t,a){r()(n,o,t),r()(n,d()(n.profiles,{id:a})),n.colors={...n.colors},n.resolve=k,n.getPath=w}var z={inject:{parentTheme:{default:g(),from:i}},provide(){return{[i]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return u(n,this.parentTheme,this.theme,this.profile),n},computed:{styles(){const{colors:n}=this;return{color:n["color-800"],"--color-background":n.background,"--color-100":n["color-100"],"--color-300":n["color-300"],"--color-800":n["color-800"],"--color-900":n["color-900"],"--color-elevation":n["color-elevation"]}}},beforeUpdate(){u(this.$data,this.parentTheme,this.theme,this.profile)}},_=(0,t(51900).Z)(z,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("div",{style:n.styles},[n._t("default")],2)}),[],!1,null,null,null).exports},32416:function(n,o){"use strict";const t=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],a={warn(n,o){n||console.warn(...t,o)},error(n,o){if(!n)throw console.error(...t,o),new Error(`[@square/maker] ${o}`)}};o.Z=a},72630:function(n,o,t){var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--color-900);\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),a.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},n.exports=a},56386:function(n,o,t){var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n.heading[data-v-22733944] {\n\tcolor: #24292e;\n}\n",""]),n.exports=a},43472:function(n,o,t){var a=t(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-5294b8de] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-5294b8de] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-5294b8de]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-5294b8de],\n.markdown-body h2 .octicon-link[data-v-5294b8de],\n.markdown-body h3 .octicon-link[data-v-5294b8de],\n.markdown-body h4 .octicon-link[data-v-5294b8de],\n.markdown-body h5 .octicon-link[data-v-5294b8de],\n.markdown-body h6 .octicon-link[data-v-5294b8de] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-5294b8de],\n.markdown-body h2:hover .anchor[data-v-5294b8de],\n.markdown-body h3:hover .anchor[data-v-5294b8de],\n.markdown-body h4:hover .anchor[data-v-5294b8de],\n.markdown-body h5:hover .anchor[data-v-5294b8de],\n.markdown-body h6:hover .anchor[data-v-5294b8de] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-5294b8de],\n.markdown-body h2:hover .anchor .octicon-link[data-v-5294b8de],\n.markdown-body h3:hover .anchor .octicon-link[data-v-5294b8de],\n.markdown-body h4:hover .anchor .octicon-link[data-v-5294b8de],\n.markdown-body h5:hover .anchor .octicon-link[data-v-5294b8de],\n.markdown-body h6:hover .anchor .octicon-link[data-v-5294b8de] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-5294b8de]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-5294b8de]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-5294b8de]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-5294b8de]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-5294b8de]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-5294b8de]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-5294b8de] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-5294b8de] {\n  display: block;\n}\n.markdown-body summary[data-v-5294b8de] {\n  display: list-item;\n}\n.markdown-body a[data-v-5294b8de] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-5294b8de]:active,\n.markdown-body a[data-v-5294b8de]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-5294b8de] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-5294b8de] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-5294b8de] {\n  border-style: none;\n}\n.markdown-body code[data-v-5294b8de],\n.markdown-body kbd[data-v-5294b8de],\n.markdown-body pre[data-v-5294b8de] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-5294b8de] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-5294b8de] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-5294b8de] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-5294b8de] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-5294b8de] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-5294b8de] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-5294b8de] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-5294b8de]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-5294b8de] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-5294b8de] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-5294b8de]:after,\n.markdown-body hr[data-v-5294b8de]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-5294b8de]:after {\n  clear: both;\n}\n.markdown-body table[data-v-5294b8de] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-5294b8de],\n.markdown-body th[data-v-5294b8de] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-5294b8de] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-5294b8de] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-5294b8de],\n.markdown-body h2[data-v-5294b8de],\n.markdown-body h3[data-v-5294b8de],\n.markdown-body h4[data-v-5294b8de],\n.markdown-body h5[data-v-5294b8de],\n.markdown-body h6[data-v-5294b8de] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-5294b8de] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-5294b8de],\n.markdown-body h2[data-v-5294b8de] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-5294b8de] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-5294b8de] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-5294b8de],\n.markdown-body h4[data-v-5294b8de] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-5294b8de] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-5294b8de] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-5294b8de],\n.markdown-body h6[data-v-5294b8de] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-5294b8de] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-5294b8de] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-5294b8de] {\n  margin: 0;\n}\n.markdown-body ol[data-v-5294b8de],\n.markdown-body ul[data-v-5294b8de] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-5294b8de],\n.markdown-body ul ol[data-v-5294b8de] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-5294b8de],\n.markdown-body ol ul ol[data-v-5294b8de],\n.markdown-body ul ol ol[data-v-5294b8de],\n.markdown-body ul ul ol[data-v-5294b8de] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-5294b8de] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-5294b8de],\n.markdown-body pre[data-v-5294b8de] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-5294b8de] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-5294b8de]::-webkit-inner-spin-button,\n.markdown-body input[data-v-5294b8de]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-5294b8de] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-5294b8de] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-5294b8de] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-5294b8de] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-5294b8de] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-5294b8de] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-5294b8de] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-5294b8de] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-5294b8de] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-5294b8de] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-5294b8de] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-5294b8de] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-5294b8de] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-5294b8de] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-5294b8de] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-5294b8de],\n.markdown-body .px-3[data-v-5294b8de] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-5294b8de] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-5294b8de] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-5294b8de] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-5294b8de] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-5294b8de] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-5294b8de] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-5294b8de] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-5294b8de] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-5294b8de],\n.markdown-body .pl-s .pl-v[data-v-5294b8de] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-5294b8de],\n.markdown-body .pl-en[data-v-5294b8de] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-5294b8de],\n.markdown-body .pl-smi[data-v-5294b8de] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-5294b8de] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-5294b8de] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-5294b8de],\n.markdown-body .pl-s[data-v-5294b8de],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-5294b8de],\n.markdown-body .pl-sr[data-v-5294b8de],\n.markdown-body .pl-sr .pl-cce[data-v-5294b8de],\n.markdown-body .pl-sr .pl-sra[data-v-5294b8de],\n.markdown-body .pl-sr .pl-sre[data-v-5294b8de] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-5294b8de],\n.markdown-body .pl-v[data-v-5294b8de] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-5294b8de] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-5294b8de] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-5294b8de] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-5294b8de]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-5294b8de] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-5294b8de] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-5294b8de],\n.markdown-body .pl-mh .pl-en[data-v-5294b8de],\n.markdown-body .pl-ms[data-v-5294b8de] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-5294b8de] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-5294b8de] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-5294b8de] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-5294b8de] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-5294b8de] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-5294b8de] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-5294b8de] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-5294b8de] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-5294b8de] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-5294b8de] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-5294b8de] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-5294b8de] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-5294b8de] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-5294b8de] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-5294b8de] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-5294b8de] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-5294b8de] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-5294b8de] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-5294b8de] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-5294b8de] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-5294b8de] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-5294b8de] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-5294b8de] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-5294b8de] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-5294b8de] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-5294b8de] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-5294b8de] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-5294b8de] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-5294b8de] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-5294b8de] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-5294b8de]:after,\n.markdown-body[data-v-5294b8de]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-5294b8de]:after {\n  clear: both;\n}\n.markdown-body[data-v-5294b8de]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-5294b8de]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-5294b8de]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-5294b8de],\n.markdown-body details[data-v-5294b8de],\n.markdown-body dl[data-v-5294b8de],\n.markdown-body ol[data-v-5294b8de],\n.markdown-body p[data-v-5294b8de],\n.markdown-body pre[data-v-5294b8de],\n.markdown-body table[data-v-5294b8de],\n.markdown-body ul[data-v-5294b8de] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-5294b8de] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-5294b8de] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-5294b8de]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-5294b8de]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-5294b8de],\n.markdown-body h2[data-v-5294b8de],\n.markdown-body h3[data-v-5294b8de],\n.markdown-body h4[data-v-5294b8de],\n.markdown-body h5[data-v-5294b8de],\n.markdown-body h6[data-v-5294b8de] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-5294b8de] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-5294b8de],\n.markdown-body h2[data-v-5294b8de] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-5294b8de] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-5294b8de] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-5294b8de] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-5294b8de] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-5294b8de] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-5294b8de],\n.markdown-body ul[data-v-5294b8de] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-5294b8de],\n.markdown-body ol ul[data-v-5294b8de],\n.markdown-body ul ol[data-v-5294b8de],\n.markdown-body ul ul[data-v-5294b8de] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-5294b8de] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-5294b8de] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-5294b8de] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-5294b8de] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-5294b8de] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-5294b8de] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-5294b8de] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-5294b8de] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-5294b8de],\n.markdown-body table th[data-v-5294b8de] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-5294b8de] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-5294b8de]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-5294b8de] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-5294b8de] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-5294b8de] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-5294b8de] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-5294b8de] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-5294b8de] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-5294b8de] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-5294b8de] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-5294b8de],\n.markdown-body pre[data-v-5294b8de] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-5294b8de] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-5294b8de] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-5294b8de]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-5294b8de] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-5294b8de] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-5294b8de] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-5294b8de]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-5294b8de]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-5294b8de] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-5294b8de] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-5294b8de],\n.markdown-body .pl-token[data-v-5294b8de]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-5294b8de] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-5294b8de] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-5294b8de] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-5294b8de] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-5294b8de] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-5294b8de] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-5294b8de] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-5294b8de] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-5294b8de] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-5294b8de] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-5294b8de] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-5294b8de] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-5294b8de] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-5294b8de] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-5294b8de] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},53185:function(n,o,t){"use strict";t.r(o),t.d(o,{default:function(){return b}});var a={components:{MHeading:t(33216).b}},d=(t(94108),t(51900)),e=(0,d.Z)(a,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",n._l([-2,-1,0,1,2,3,4,5,6,7],(function(o){return t("m-heading",{key:o,staticClass:"heading",attrs:{size:o}},[n._v("\n\t\tSize "+n._s(o)+"\n\t")])})),1)}),[],!1,null,"22733944",null).exports,r=t(415),i={components:{Demo0:e,DemoCollapse:r.DemoCollapse,SrcFile:r.SrcFile}},b=(t(73165),(0,d.Z)(i,(function(){var n=this,o=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("Supports attributes from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1"}},[t("code",[n._v("<h1>")])]),n._v(".")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("size")]),n._v(" "),t("td",[t("code",[n._v("number")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Size of heading. Influences which element is used.")])]),n._v(" "),t("tr",[t("td",[n._v("element")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[t("code",[n._v("h1")]),n._v(", "),t("code",[n._v("h2")]),n._v(", "),t("code",[n._v("h3")]),n._v(", "),t("code",[n._v("h4")]),n._v(", "),t("code",[n._v("h5")]),n._v(", "),t("code",[n._v("h6")]),n._v(", "),t("code",[n._v("div")])]),n._v(" "),t("td",[n._v("Override Heading element. By default, the element is derived from size.")])]),n._v(" "),t("tr",[t("td",[n._v("font-family")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Heading font family")])]),n._v(" "),t("tr",[t("td",[n._v("text-color")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Heading text color")])])])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("table",[t("thead",[t("tr",[t("th",[n._v("Slot")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("default")]),n._v(" "),t("td",[n._v("heading content")])])])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("Supports events from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1"}},[t("code",[n._v("<h1>")])]),n._v(".")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Heading")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-heading\n\t\t\tv-for="size in [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]"\n\t\t\t:key="size"\n\t\t\t:size="size"\n\t\t\tclass="heading"\n\t\t>\n\t\t\tSize {{ size }}\n\t\t</m-heading>\n\t</div>\n</template>\n\n<script>\nimport { MHeading } from \'@square/maker/components/Heading\';\n\nexport default {\n\tcomponents: {\n\t\tMHeading,\n\t},\n};\n<\/script>\n\n<style scoped>\n.heading {\n\tcolor: #24292e;\n}\n</style>\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),t("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),t("h2",[n._v("Events")]),n._v(" "),n._m(3)],1)}],!1,null,"5294b8de",null).exports)},71491:function(n,o,t){var a=t(72630);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("ceb27898",a,!0,{})},94108:function(n,o,t){var a=t(56386);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("c384517c",a,!0,{})},73165:function(n,o,t){var a=t(43472);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("ff2b44ee",a,!0,{})}}]);