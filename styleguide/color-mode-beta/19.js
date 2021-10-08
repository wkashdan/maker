(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[19],{2374:function(n,t,o){"use strict";o.d(t,{g:function(){return v},c:function(){return f}});var a=o(38378),e=o(32416),d=o(46475),r=o(60771),i=o.n(r);var b=Symbol("ChoiceKey"),l={provide(){return{[b]:this.$data}},inject:{theme:{default:(0,a.uH)(),from:a.YH}},model:{prop:"selected",event:"choice:update"},props:{selected:{type:void 0,default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"single-select",validator:n=>["single-select","multi-select"].includes(n)},selectedColor:{type:String,default:void 0,validator:n=>i().valid(n)}},data(){return{currentValue:this.selected,isMultiSelect:"multi-select"===this.mode}},computed:{...(0,a.C9)("choice",["selectedColor"]),contrastColor(){const n=this.resolvedSelectedColor,t=i()(n);return(0,d.Z)(t,"#fff")},disabledContrastColor(){return i()(this.contrastColor).alpha(.4)},style(){return this.resolvedSelectedColor?{"--selected-background-color":this.resolvedSelectedColor,"--selected-text-color":this.contrastColor,"--selected-disabled-text-color":this.disabledContrastColor}:{}}},watch:{selected(){this.validateProps()},currentValue(n){this.$emit("choice:update",n)}},created(){this.validateProps()},methods:{validateProps(){this.isMultiSelect&&e.Z.error(Array.isArray(this.selected),"The v-model value for a multi-select must be of type Array.")}}},c=o(67426),s=o.n(c),m=o(51900);var v=(0,m.Z)(l,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{class:[n.$s.Container],style:n.style},[n._t("default")],2)}),[],!1,(function(n){this.$s=s().locals||s()}),null,null).exports,p={inject:{controlState:b},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.isMultiSelect?this.controlState.currentValue.includes(this.value):this.controlState.currentValue===this.value}},methods:{selectSelf(){let n=this.value;if(this.controlState.isMultiSelect){const t=this.controlState.currentValue.slice();if(t.includes(n)){const o=1;t.splice(t.indexOf(n),o)}else t.push(n);n=t}this.controlState.currentValue=n}}},h=o(96233),u=o.n(h);var f=(0,m.Z)(p,(function(){var n,t=this,o=t.$createElement;return(t._self._c||o)("button",{class:[t.$s.Button,(n={},n[t.$s.selected]=t.isSelected,n)],on:{click:t.selectSelf}},[t._t("default")],2)}),[],!1,(function(n){this.$s=u().locals||u()}),null,null).exports},38378:function(n,t,o){"use strict";o.d(t,{qo:function(){return x},YH:function(){return i},uH:function(){return w},C9:function(){return y}});var a=o(85066),e=o.n(a),d=o(54299),r=o.n(d);var i=Symbol("ThemeKey"),b=o(20643),l=o.n(b),c=o(71586),s=o.n(c),m=o(2588),v=o.n(m),p=o(75692),h=o.n(p),u=o(32416);function f(n){return h()(n)&&n.startsWith("@")?this.getPath(n):n}function k(n){if(!h()(n))throw new Error(`cannot resolve pointer ${n} it is not a string`);if(!n.startsWith("@"))throw new Error(`cannot resolve pointer ${n} it is missed the @ prefix`);const t=n.slice(1),o=l()(this,t);if(s()(o)||v()(o))throw new Error(`invalid pointer ${n} does not point to a field that exists within the theme`);return o}function y(n,t){const o={};for(const e of t)o[`resolved${a=e,a[0].toUpperCase()+a.slice(1)}`]=function(){if(this[e])return this[e];const t=this.theme[n][e];if(t){const o=t,a=this.theme.resolve(o),d=this.$vnode.componentOptions.Ctor.extendOptions.props[e].validator;return d&&u.Z.error(d(a),`Invalid value "${a}" for prop "${e}" for component "${n}" in theme.`),a}};var a;return o}function w(){return{colors:{background:"#ffffff",primary:"#000000",text:"#636363",heading:"#303030","color-100":"#f1f1f1","color-300":"#d7d7d7","color-700":"#9e9e9e","color-800":"#636363","color-900":"#303030"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:void 0,size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{textColor:"@colors.text",fontFamily:"inherit",size:0},heading:{textColor:"@colors.heading",fontFamily:"inherit",size:2},choice:{selectedColor:void 0},stepper:{color:'@colors["color-100"]',textColor:'@colors["color-900"]'},resolve:f,getPath:k}}function g(n,t,o,a){r()(n,t,o),r()(n,e()(n.profiles,{id:a})),n.colors={...n.colors},n.resolve=f,n.getPath=k}var _={inject:{parentTheme:{default:w(),from:i}},provide(){return{[i]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return g(n,this.parentTheme,this.theme,this.profile),n},computed:{styles(){const{colors:n}=this;return{color:n["color-800"],"--color-background":n.background,"--color-100":n["color-100"],"--color-300":n["color-300"],"--color-700":n["color-700"],"--color-800":n["color-800"],"--color-900":n["color-900"],"--color-elevation":n["color-elevation"]}}},beforeUpdate(){g(this.$data,this.parentTheme,this.theme,this.profile)}},x=(0,o(51900).Z)(_,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{style:n.styles},[n._t("default")],2)}),[],!1,null,null,null).exports},32416:function(n,t){"use strict";const o=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],a={warn(n,t){n||console.warn(...o,t)},error(n,t){if(!n)throw console.error(...o,t),new Error(`[@square/maker] ${t}`)}};t.Z=a},46475:function(n,t,o){"use strict";var a=o(60771),e=o.n(a);t.Z=function(n,t){if(!t||e().contrast(n,t)<4.5){const t=.32,o=n.luminance()>t;return e()(o?"#000":"#fff")}return t}},17051:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.Container_CxZAy {\n\t--font-size: 14px;\n\t--font-weight: 500;\n\t--line-height: 24px;\n\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tfont-weight: var(--font-weight);\n\tfont-size: var(--font-size);\n\tfont-family: inherit;\n\tline-height: var(--line-height);\n}\n",""]),a.locals={Container:"Container_CxZAy"},n.exports=a},42452:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tDefined in Choice component:\n\t--selected-background-color\n\t--selected-text-color\n\t--selected-disabled-text-color\n*/\n.Button_mNW4n {\n\t--border-radius: 8px;\n\t--normal-text-color: #222;\n\t--normal-disabled-text-color: rgba(0, 0, 0, 0.4);\n\t--color-focus: rgba(0, 0, 0, 0.3);\n\t--button-padding: 12px 24px;\n\n\tflex-shrink: 0;\n\tpadding: var(--button-padding);\n\tcolor: var(--color-900, #222);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\ttext-align: left;\n\tbackground-color: var(--color-100, #f2f2f2);\n\tborder: none;\n\tborder-radius: var(--border-radius);\n\toutline: none;\n\tbox-shadow: var(--focus-border, 0 0);\n\tcursor: pointer\n}\n.Button_mNW4n:not(:last-child) {\n\t\tmargin-right: 8px;\n}\n.Button_mNW4n:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--color-100, #fff),\n\t\t\t0 0 0 3px var(--color-300, rgba(0, 0, 0, 0.3));\n}\n.Button_mNW4n:disabled {\n\t\tcolor: var(--normal-disabled-text-color);\n\t\tcursor: auto;\n\t\tcursor: initial;\n}\n.selected_MLoDE {\n\tcolor: var(--selected-text-color, var(--color-100, #f1f1f1));\n\tbackground-color: var(--selected-background-color, var(--color-900, #222))\n}\n.selected_MLoDE:disabled {\n\t\tcolor: var(--selected-disabled-text-color, var(--color-300, #666));\n}\n",""]),a.locals={Button:"Button_mNW4n",selected:"selected_MLoDE"},n.exports=a},58613:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.choice-option[data-v-177a4f29] {\n\twidth: 172px;\n}\n",""]),n.exports=a},30448:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-eb5ba986] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-eb5ba986] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-eb5ba986]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-eb5ba986],\n.markdown-body h2 .octicon-link[data-v-eb5ba986],\n.markdown-body h3 .octicon-link[data-v-eb5ba986],\n.markdown-body h4 .octicon-link[data-v-eb5ba986],\n.markdown-body h5 .octicon-link[data-v-eb5ba986],\n.markdown-body h6 .octicon-link[data-v-eb5ba986] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-eb5ba986],\n.markdown-body h2:hover .anchor[data-v-eb5ba986],\n.markdown-body h3:hover .anchor[data-v-eb5ba986],\n.markdown-body h4:hover .anchor[data-v-eb5ba986],\n.markdown-body h5:hover .anchor[data-v-eb5ba986],\n.markdown-body h6:hover .anchor[data-v-eb5ba986] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-eb5ba986],\n.markdown-body h2:hover .anchor .octicon-link[data-v-eb5ba986],\n.markdown-body h3:hover .anchor .octicon-link[data-v-eb5ba986],\n.markdown-body h4:hover .anchor .octicon-link[data-v-eb5ba986],\n.markdown-body h5:hover .anchor .octicon-link[data-v-eb5ba986],\n.markdown-body h6:hover .anchor .octicon-link[data-v-eb5ba986] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-eb5ba986]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-eb5ba986]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-eb5ba986]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-eb5ba986]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-eb5ba986]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-eb5ba986]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-eb5ba986] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-eb5ba986] {\n  display: block;\n}\n.markdown-body summary[data-v-eb5ba986] {\n  display: list-item;\n}\n.markdown-body a[data-v-eb5ba986] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-eb5ba986]:active,\n.markdown-body a[data-v-eb5ba986]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-eb5ba986] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-eb5ba986] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-eb5ba986] {\n  border-style: none;\n}\n.markdown-body code[data-v-eb5ba986],\n.markdown-body kbd[data-v-eb5ba986],\n.markdown-body pre[data-v-eb5ba986] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-eb5ba986] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-eb5ba986] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-eb5ba986] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-eb5ba986] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-eb5ba986] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-eb5ba986] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-eb5ba986] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-eb5ba986]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-eb5ba986] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-eb5ba986] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-eb5ba986]:after,\n.markdown-body hr[data-v-eb5ba986]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-eb5ba986]:after {\n  clear: both;\n}\n.markdown-body table[data-v-eb5ba986] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-eb5ba986],\n.markdown-body th[data-v-eb5ba986] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-eb5ba986] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-eb5ba986] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-eb5ba986],\n.markdown-body h2[data-v-eb5ba986],\n.markdown-body h3[data-v-eb5ba986],\n.markdown-body h4[data-v-eb5ba986],\n.markdown-body h5[data-v-eb5ba986],\n.markdown-body h6[data-v-eb5ba986] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-eb5ba986] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-eb5ba986],\n.markdown-body h2[data-v-eb5ba986] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-eb5ba986] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-eb5ba986] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-eb5ba986],\n.markdown-body h4[data-v-eb5ba986] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-eb5ba986] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-eb5ba986] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-eb5ba986],\n.markdown-body h6[data-v-eb5ba986] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-eb5ba986] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-eb5ba986] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-eb5ba986] {\n  margin: 0;\n}\n.markdown-body ol[data-v-eb5ba986],\n.markdown-body ul[data-v-eb5ba986] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-eb5ba986],\n.markdown-body ul ol[data-v-eb5ba986] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-eb5ba986],\n.markdown-body ol ul ol[data-v-eb5ba986],\n.markdown-body ul ol ol[data-v-eb5ba986],\n.markdown-body ul ul ol[data-v-eb5ba986] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-eb5ba986] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-eb5ba986],\n.markdown-body pre[data-v-eb5ba986] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-eb5ba986] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-eb5ba986]::-webkit-inner-spin-button,\n.markdown-body input[data-v-eb5ba986]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-eb5ba986] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-eb5ba986] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-eb5ba986] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-eb5ba986] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-eb5ba986] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-eb5ba986] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-eb5ba986] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-eb5ba986] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-eb5ba986] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-eb5ba986] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-eb5ba986] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-eb5ba986] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-eb5ba986] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-eb5ba986] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-eb5ba986] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-eb5ba986],\n.markdown-body .px-3[data-v-eb5ba986] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-eb5ba986] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-eb5ba986] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-eb5ba986] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-eb5ba986] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-eb5ba986] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-eb5ba986] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-eb5ba986] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-eb5ba986] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-eb5ba986],\n.markdown-body .pl-s .pl-v[data-v-eb5ba986] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-eb5ba986],\n.markdown-body .pl-en[data-v-eb5ba986] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-eb5ba986],\n.markdown-body .pl-smi[data-v-eb5ba986] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-eb5ba986] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-eb5ba986] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-eb5ba986],\n.markdown-body .pl-s[data-v-eb5ba986],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-eb5ba986],\n.markdown-body .pl-sr[data-v-eb5ba986],\n.markdown-body .pl-sr .pl-cce[data-v-eb5ba986],\n.markdown-body .pl-sr .pl-sra[data-v-eb5ba986],\n.markdown-body .pl-sr .pl-sre[data-v-eb5ba986] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-eb5ba986],\n.markdown-body .pl-v[data-v-eb5ba986] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-eb5ba986] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-eb5ba986] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-eb5ba986] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-eb5ba986]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-eb5ba986] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-eb5ba986] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-eb5ba986],\n.markdown-body .pl-mh .pl-en[data-v-eb5ba986],\n.markdown-body .pl-ms[data-v-eb5ba986] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-eb5ba986] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-eb5ba986] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-eb5ba986] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-eb5ba986] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-eb5ba986] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-eb5ba986] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-eb5ba986] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-eb5ba986] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-eb5ba986] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-eb5ba986] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-eb5ba986] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-eb5ba986] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-eb5ba986] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-eb5ba986] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-eb5ba986] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-eb5ba986] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-eb5ba986] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-eb5ba986] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-eb5ba986] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-eb5ba986] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-eb5ba986] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-eb5ba986] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-eb5ba986] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-eb5ba986] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-eb5ba986] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-eb5ba986] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-eb5ba986] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-eb5ba986] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-eb5ba986] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-eb5ba986] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-eb5ba986]:after,\n.markdown-body[data-v-eb5ba986]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-eb5ba986]:after {\n  clear: both;\n}\n.markdown-body[data-v-eb5ba986]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-eb5ba986]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-eb5ba986]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-eb5ba986],\n.markdown-body details[data-v-eb5ba986],\n.markdown-body dl[data-v-eb5ba986],\n.markdown-body ol[data-v-eb5ba986],\n.markdown-body p[data-v-eb5ba986],\n.markdown-body pre[data-v-eb5ba986],\n.markdown-body table[data-v-eb5ba986],\n.markdown-body ul[data-v-eb5ba986] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-eb5ba986] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-eb5ba986] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-eb5ba986]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-eb5ba986]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-eb5ba986],\n.markdown-body h2[data-v-eb5ba986],\n.markdown-body h3[data-v-eb5ba986],\n.markdown-body h4[data-v-eb5ba986],\n.markdown-body h5[data-v-eb5ba986],\n.markdown-body h6[data-v-eb5ba986] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-eb5ba986] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-eb5ba986],\n.markdown-body h2[data-v-eb5ba986] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-eb5ba986] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-eb5ba986] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-eb5ba986] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-eb5ba986] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-eb5ba986] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-eb5ba986],\n.markdown-body ul[data-v-eb5ba986] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-eb5ba986],\n.markdown-body ol ul[data-v-eb5ba986],\n.markdown-body ul ol[data-v-eb5ba986],\n.markdown-body ul ul[data-v-eb5ba986] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-eb5ba986] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-eb5ba986] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-eb5ba986] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-eb5ba986] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-eb5ba986] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-eb5ba986] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-eb5ba986] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-eb5ba986] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-eb5ba986],\n.markdown-body table th[data-v-eb5ba986] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-eb5ba986] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-eb5ba986]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-eb5ba986] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-eb5ba986] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-eb5ba986] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-eb5ba986] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-eb5ba986] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-eb5ba986] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-eb5ba986] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-eb5ba986] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-eb5ba986],\n.markdown-body pre[data-v-eb5ba986] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-eb5ba986] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-eb5ba986] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-eb5ba986]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-eb5ba986] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-eb5ba986] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-eb5ba986] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-eb5ba986]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-eb5ba986]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-eb5ba986] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-eb5ba986] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-eb5ba986],\n.markdown-body .pl-token[data-v-eb5ba986]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-eb5ba986] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-eb5ba986] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-eb5ba986] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-eb5ba986] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-eb5ba986] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-eb5ba986] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-eb5ba986] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-eb5ba986] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-eb5ba986] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-eb5ba986] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-eb5ba986] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-eb5ba986] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-eb5ba986] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-eb5ba986] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-eb5ba986] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},92019:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var a=o(2374),e={components:{MChoice:a.g,MChoiceOption:a.c},data:()=>({selected:"choice-1",color:"#222"})},d=o(51900),r=(0,d.Z)(e,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("label",[n._v("\n\t\tColor picker\n\t\t"),o("input",{directives:[{name:"model",rawName:"v-model",value:n.color,expression:"color"}],attrs:{type:"color"},domProps:{value:n.color},on:{input:function(t){t.target.composing||(n.color=t.target.value)}}})]),n._v(" "),o("br"),n._v(" "),o("br"),n._v(" "),o("m-choice",{attrs:{"selected-color":n.color},model:{value:n.selected,callback:function(t){n.selected=t},expression:"selected"}},[o("m-choice-option",{attrs:{value:"choice-1"}},[n._v("\n\t\t\tChoice\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{value:"choice-2"}},[n._v("\n\t\t\tChoice\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{value:"choice-3"}},[n._v("\n\t\t\tChoice\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{disabled:!0,value:"choice-4"}},[n._v("\n\t\t\tChoice\n\t\t")])],1),n._v(" "),o("br"),n._v(" "),o("p",[n._v("Selected value: "+n._s(n.selected))])],1)}),[],!1,null,null,null).exports,i=o(415),b={components:{MChoice:a.g,MChoiceOption:a.c},data:()=>({selected:["choice-1","choice-4"]})},l=(0,d.Z)(b,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("m-choice",{attrs:{mode:"multi-select"},model:{value:n.selected,callback:function(t){n.selected=t},expression:"selected"}},[o("m-choice-option",{attrs:{value:"choice-1"}},[n._v("\n\t\t\tChoice\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{value:"choice-2"}},[n._v("\n\t\t\tChoice"),o("br"),n._v("second line\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{value:"choice-3"}},[n._v("\n\t\t\tChoice longer text\n\t\t")]),n._v(" "),o("m-choice-option",{attrs:{disabled:!0,value:"choice-4"}},[n._v("\n\t\t\tChoice disabled\n\t\t")])],1),n._v(" "),o("br"),n._v(" "),o("p",[n._v("Selected value: "+n._s(n.selected))])],1)}),[],!1,null,null,null).exports,c={components:{MChoice:a.g,MChoiceOption:a.c},data:()=>({selected:"choice-1"})},s=(o(55371),(0,d.Z)(c,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("m-choice",{model:{value:n.selected,callback:function(t){n.selected=t},expression:"selected"}},[o("m-choice-option",{staticClass:"choice-option",attrs:{value:"choice-1"}},[n._v("\n\t\t\tChoice\n\t\t")]),n._v(" "),o("m-choice-option",{staticClass:"choice-option",attrs:{value:"choice-2"}},[n._v("\n\t\t\tChoice longer text\n\t\t")]),n._v(" "),o("m-choice-option",{staticClass:"choice-option",attrs:{value:"choice-3"}},[n._v("\n\t\t\tChoice\n\t\t")])],1),n._v(" "),o("br"),n._v(" "),o("p",[n._v("Selected value: "+n._s(n.selected))])],1)}),[],!1,null,"177a4f29",null).exports),m={components:{Demo0:r,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile,Demo1:l,Demo2:s}},v=(o(56148),(0,d.Z)(m,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("v-model")]),n._v(" "),o("td",[o("code",[n._v("undefined")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Selected choice option")])]),n._v(" "),o("tr",[o("td",[n._v("disabled")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Disables choice option")])]),n._v(" "),o("tr",[o("td",[n._v("mode")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'single-select'")])]),n._v(" "),o("td",[o("code",[n._v("single-select")]),n._v(", "),o("code",[n._v("multi-select")])]),n._v(" "),o("td",[n._v("Selects single choice option or multiple choice options")])]),n._v(" "),o("tr",[o("td",[n._v("selected-color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Background color of a selected option")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Event")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("choice:update")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("value*")]),n._v(" "),o("td",[o("code",[n._v("undefined")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Choice")]),n._v(" "),o("h2",[n._v("Examples")]),n._v(" "),o("h3",[n._v("Default")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<label>\n\t\t\tColor picker\n\t\t\t<input\n\t\t\t\tv-model="color"\n\t\t\t\ttype="color"\n\t\t\t>\n\t\t</label>\n\t\t<br>\n\t\t<br>\n\t\t<m-choice\n\t\t\tv-model="selected"\n\t\t\t:selected-color="color"\n\t\t>\n\t\t\t<m-choice-option value="choice-1">\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option value="choice-2">\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option value="choice-3">\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option\n\t\t\t\t:disabled="true"\n\t\t\t\tvalue="choice-4"\n\t\t\t>\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t</m-choice>\n\t\t<br>\n\t\t<p>Selected value: {{ selected }}</p>\n\t</div>\n</template>\n\n<script>\nimport { MChoice, MChoiceOption } from \'@square/maker/components/Choice\';\n\nexport default {\n\tcomponents: {\n\t\tMChoice,\n\t\tMChoiceOption,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tselected: \'choice-1\',\n\t\t\tcolor: \'#222\',\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h3",[n._v("Multi select mode")]),n._v(" "),o("demo-collapse",[o("Demo1"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-choice\n\t\t\tv-model="selected"\n\t\t\tmode="multi-select"\n\t\t>\n\t\t\t<m-choice-option value="choice-1">\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option value="choice-2">\n\t\t\t\tChoice<br>second line\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option value="choice-3">\n\t\t\t\tChoice longer text\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option\n\t\t\t\t:disabled="true"\n\t\t\t\tvalue="choice-4"\n\t\t\t>\n\t\t\t\tChoice disabled\n\t\t\t</m-choice-option>\n\t\t</m-choice>\n\t\t<br>\n\t\t<p>Selected value: {{ selected }}</p>\n\t</div>\n</template>\n\n<script>\nimport { MChoice, MChoiceOption } from \'@square/maker/components/Choice\';\n\nexport default {\n\tcomponents: {\n\t\tMChoice,\n\t\tMChoiceOption,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tselected: [\'choice-1\', \'choice-4\'],\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h3",[n._v("Fixed width")]),n._v(" "),o("demo-collapse",[o("Demo2"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-choice v-model="selected">\n\t\t\t<m-choice-option\n\t\t\t\tvalue="choice-1"\n\t\t\t\tclass="choice-option"\n\t\t\t>\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option\n\t\t\t\tvalue="choice-2"\n\t\t\t\tclass="choice-option"\n\t\t\t>\n\t\t\t\tChoice longer text\n\t\t\t</m-choice-option>\n\t\t\t<m-choice-option\n\t\t\t\tvalue="choice-3"\n\t\t\t\tclass="choice-option"\n\t\t\t>\n\t\t\t\tChoice\n\t\t\t</m-choice-option>\n\t\t</m-choice>\n\t\t<br>\n\t\t<p>Selected value: {{ selected }}</p>\n\t</div>\n</template>\n\n<script>\nimport { MChoice, MChoiceOption } from \'@square/maker/components/Choice\';\n\nexport default {\n\tcomponents: {\n\t\tMChoice,\n\t\tMChoiceOption,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tselected: \'choice-1\',\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.choice-option {\n\twidth: 172px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Choice Props")]),n._v(" "),n._m(0),n._v(" "),o("h2",[n._v("Choice Slots")]),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Choice Events")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("ChoiceOption Props")]),n._v(" "),n._m(3),n._v(" "),o("h2",[n._v("ChoiceOption Slots")]),n._v(" "),n._m(4)],1)}],!1,null,"eb5ba986",null).exports)},67426:function(n,t,o){var a=o(17051);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("a6d1c446",a,!0,{})},96233:function(n,t,o){var a=o(42452);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("54d35d07",a,!0,{})},55371:function(n,t,o){var a=o(58613);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("0f7153da",a,!0,{})},56148:function(n,t,o){var a=o(30448);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("572372ca",a,!0,{})}}]);