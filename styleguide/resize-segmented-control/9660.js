(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9660],{30648:(a,n,o)=>{"use strict";o.d(n,{qo:()=>_,YH:()=>i,uH:()=>k,C9:()=>y});var d=o(85066),t=o.n(d),e=o(54299),r=o.n(e);const i=Symbol("ThemeKey");var l=o(20643),s=o.n(l),m=o(92810),b=o.n(m),c=o(75692),p=o.n(c),v=o(32416);function f(a){return p()(a)&&a.startsWith("@")?this.resolve(this.getPath(a)):a}function h(a){if(!p()(a))throw new Error("cannot resolve pointer ".concat(a," it is not a string"));if(!a.startsWith("@"))throw new Error("cannot resolve pointer ".concat(a," it is missed the @ prefix"));const n=a.slice(1),o=s()(this,n);if(b()(o))throw new Error("invalid pointer ".concat(a," does not point to a field that exists within the theme"));return o}function y(a,n){const o={};for(const t of n)"pattern"===t?o.resolvedPattern=function(){if(!b()(this.pattern))return this.pattern;let n;const o=this.theme[a].pattern;if(b()(o)||(n=o),b()(n))return;const d=this.theme.resolve(n),t=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(t)v.Z.error(t(d),'Invalid value "'.concat(d,'" for prop "pattern" for component "').concat(a,'" in theme.'));else{var e;const n=null===(e=this.theme[a].patterns)||void 0===e?void 0:e[d];v.Z.error(n,'Invalid pattern "'.concat(d,'" for component "').concat(a,'" in theme.'))}return d}:o["resolved".concat((d=t,d[0].toUpperCase()+d.slice(1)))]=function(){if(!b()(this[t]))return this[t];let n;const o=this.theme[a][t];if(b()(o)||(n=o),!b()(this.resolvedPattern)){var d,e;const o=null===(d=this.theme[a].patterns)||void 0===d||null===(e=d[this.resolvedPattern])||void 0===e?void 0:e[t];b()(o)||(n=o)}if(b()(n))return;const r=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[t].validator;return i&&v.Z.error(i(r),'Invalid value "'.concat(r,'" for prop "').concat(t,'" for component "').concat(a,'" in theme.')),r};var d;return o}function k(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:f,getPath:h}}function w(a,n,o,d){r()(a,n,o),r()(a,t()(a.profiles,{id:d})),a.colors={...a.colors},a.resolve=f,a.getPath=h}const g={inject:{parentTheme:{default:k(),from:i}},provide(){return{[i]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const a={};return w(a,this.parentTheme,this.theme,this.profile),a},computed:{styles(){const{colors:a,fonts:n,shapes:o}=this;return{"--maker-color-neutral-0":a["neutral-0"],"--maker-color-neutral-10":a["neutral-10"],"--maker-color-neutral-20":a["neutral-20"],"--maker-color-neutral-80":a["neutral-80"],"--maker-color-neutral-90":a["neutral-90"],"--maker-color-neutral-100":a["neutral-100"],"--maker-color-primary":a.primary,"--maker-color-background":a.background,"--maker-color-heading":a.heading,"--maker-color-body":a.body,"--maker-color-elevation":a.elevation,"--maker-color-overlay":a.overlay,"--maker-font-heading-font-family":n.heading.fontFamily,"--maker-font-heading-font-weight":n.heading.fontWeight,"--maker-font-body-font-family":n.body.fontFamily,"--maker-font-body-font-weight":n.body.fontWeight,"--maker-font-label-font-family":n.label.fontFamily,"--maker-font-label-font-weight":n.label.fontWeight,"--maker-shape-default-border-radius":o.defaultBorderRadius,"--maker-shape-button-border-radius":o.buttonBorderRadius,"--maker-shape-image-border-radius":o.imageBorderRadius}}},beforeUpdate(){w(this.$data,this.parentTheme,this.theme,this.profile)}};var u=o(35004),x=o.n(u);const _=(0,o(51900).Z)(g,(function(){var a=this,n=a.$createElement;return(a._self._c||n)("div",{class:a.$s.Theme,style:a.styles},[a._t("default")],2)}),[],!1,(function(a){this.$s=x().locals||x()}),null,null).exports},32416:(a,n,o)=>{"use strict";o.d(n,{Z:()=>t});var d=o(14219);const t={warn(a,n,o){a||(0,d.K)(n,o)},error(a,n,o){a||(0,d._)(n,o)}}},27060:(a,n,o)=>{"use strict";o.d(n,{Z:()=>d});const d=function(a){return function(n){return!o.g.CSS||o.g.CSS.supports(a,n)}}},14219:(a,n,o)=>{"use strict";o.d(n,{_:()=>e,K:()=>r});const d="object"==typeof process&&"object"==typeof process.env&&!0,t=a=>["%c @square/maker".concat(a),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],e=(a,n)=>{throw console.error(...t(n),a),new Error("".concat((a=>"[@square/maker]".concat(a))(n)," ").concat(a))},r=(a,n)=>{d&&console.warn(...t(n),a)}},60592:(a,n,o)=>{var d=o(77705)((function(a){return a[1]}));d.push([a.id,"\n.Pill_Qio4r {\n\tdisplay: inline-block;\n\tpadding: 4px 8px;\n\tcolor: var(--text-color, #1b1b1b);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-size: 12px;\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tline-height: 16px;\n\tbackground-color: var(--bg-color);\n\tborder: 1px solid var(--border-color);\n\tborder-radius: 100px;\n}\n",""]),d.locals={Pill:"Pill_Qio4r"},a.exports=d},35820:(a,n,o)=>{var d=o(77705)((function(a){return a[1]}));d.push([a.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),d.locals={Theme:"Theme_rI2oH"},a.exports=d},37136:(a,n,o)=>{var d=o(77705)((function(a){return a[1]}));d.push([a.id,"\n.spaceout > *[data-v-16549456] {\n\tmargin: 4px;\n}\n",""]),a.exports=d},79428:(a,n,o)=>{var d=o(77705)((function(a){return a[1]}));d.push([a.id,'\n.markdown-body .octicon[data-v-adaea9da] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-adaea9da] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-adaea9da]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-adaea9da],\n.markdown-body h2 .octicon-link[data-v-adaea9da],\n.markdown-body h3 .octicon-link[data-v-adaea9da],\n.markdown-body h4 .octicon-link[data-v-adaea9da],\n.markdown-body h5 .octicon-link[data-v-adaea9da],\n.markdown-body h6 .octicon-link[data-v-adaea9da] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-adaea9da],\n.markdown-body h2:hover .anchor[data-v-adaea9da],\n.markdown-body h3:hover .anchor[data-v-adaea9da],\n.markdown-body h4:hover .anchor[data-v-adaea9da],\n.markdown-body h5:hover .anchor[data-v-adaea9da],\n.markdown-body h6:hover .anchor[data-v-adaea9da] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-adaea9da],\n.markdown-body h2:hover .anchor .octicon-link[data-v-adaea9da],\n.markdown-body h3:hover .anchor .octicon-link[data-v-adaea9da],\n.markdown-body h4:hover .anchor .octicon-link[data-v-adaea9da],\n.markdown-body h5:hover .anchor .octicon-link[data-v-adaea9da],\n.markdown-body h6:hover .anchor .octicon-link[data-v-adaea9da] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-adaea9da]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-adaea9da]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-adaea9da]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-adaea9da]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-adaea9da]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-adaea9da]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-adaea9da] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-adaea9da] {\n  display: block;\n}\n.markdown-body summary[data-v-adaea9da] {\n  display: list-item;\n}\n.markdown-body a[data-v-adaea9da] {\n  background-color: initial;\n}\n.markdown-body a[data-v-adaea9da]:active,\n.markdown-body a[data-v-adaea9da]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-adaea9da] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-adaea9da] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-adaea9da] {\n  border-style: none;\n}\n.markdown-body code[data-v-adaea9da],\n.markdown-body kbd[data-v-adaea9da],\n.markdown-body pre[data-v-adaea9da] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-adaea9da] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-adaea9da] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-adaea9da] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-adaea9da] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-adaea9da] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-adaea9da] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-adaea9da] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-adaea9da]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-adaea9da] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-adaea9da] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-adaea9da]:after,\n.markdown-body hr[data-v-adaea9da]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-adaea9da]:after {\n  clear: both;\n}\n.markdown-body table[data-v-adaea9da] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-adaea9da],\n.markdown-body th[data-v-adaea9da] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-adaea9da] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-adaea9da] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-adaea9da],\n.markdown-body h2[data-v-adaea9da],\n.markdown-body h3[data-v-adaea9da],\n.markdown-body h4[data-v-adaea9da],\n.markdown-body h5[data-v-adaea9da],\n.markdown-body h6[data-v-adaea9da] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-adaea9da] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-adaea9da],\n.markdown-body h2[data-v-adaea9da] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-adaea9da] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-adaea9da] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-adaea9da],\n.markdown-body h4[data-v-adaea9da] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-adaea9da] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-adaea9da] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-adaea9da],\n.markdown-body h6[data-v-adaea9da] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-adaea9da] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-adaea9da] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-adaea9da] {\n  margin: 0;\n}\n.markdown-body ol[data-v-adaea9da],\n.markdown-body ul[data-v-adaea9da] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-adaea9da],\n.markdown-body ul ol[data-v-adaea9da] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-adaea9da],\n.markdown-body ol ul ol[data-v-adaea9da],\n.markdown-body ul ol ol[data-v-adaea9da],\n.markdown-body ul ul ol[data-v-adaea9da] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-adaea9da] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-adaea9da],\n.markdown-body pre[data-v-adaea9da] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-adaea9da] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-adaea9da]::-webkit-inner-spin-button,\n.markdown-body input[data-v-adaea9da]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-adaea9da] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-adaea9da] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-adaea9da] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-adaea9da] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-adaea9da] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-adaea9da] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-adaea9da] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-adaea9da] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-adaea9da] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-adaea9da] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-adaea9da] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-adaea9da] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-adaea9da] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-adaea9da] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-adaea9da] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-adaea9da],\n.markdown-body .px-3[data-v-adaea9da] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-adaea9da] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-adaea9da] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-adaea9da] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-adaea9da] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-adaea9da] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-adaea9da] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-adaea9da] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-adaea9da] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-adaea9da],\n.markdown-body .pl-s .pl-v[data-v-adaea9da] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-adaea9da],\n.markdown-body .pl-en[data-v-adaea9da] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-adaea9da],\n.markdown-body .pl-smi[data-v-adaea9da] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-adaea9da] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-adaea9da] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-adaea9da],\n.markdown-body .pl-s[data-v-adaea9da],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-adaea9da],\n.markdown-body .pl-sr[data-v-adaea9da],\n.markdown-body .pl-sr .pl-cce[data-v-adaea9da],\n.markdown-body .pl-sr .pl-sra[data-v-adaea9da],\n.markdown-body .pl-sr .pl-sre[data-v-adaea9da] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-adaea9da],\n.markdown-body .pl-v[data-v-adaea9da] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-adaea9da] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-adaea9da] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-adaea9da] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-adaea9da]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-adaea9da] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-adaea9da] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-adaea9da],\n.markdown-body .pl-mh .pl-en[data-v-adaea9da],\n.markdown-body .pl-ms[data-v-adaea9da] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-adaea9da] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-adaea9da] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-adaea9da] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-adaea9da] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-adaea9da] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-adaea9da] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-adaea9da] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-adaea9da] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-adaea9da] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-adaea9da] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-adaea9da] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-adaea9da] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-adaea9da] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-adaea9da] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-adaea9da] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-adaea9da] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-adaea9da] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-adaea9da] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-adaea9da] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-adaea9da] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-adaea9da] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-adaea9da] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-adaea9da] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-adaea9da] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-adaea9da] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-adaea9da] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-adaea9da] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-adaea9da] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-adaea9da] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-adaea9da] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-adaea9da]:after,\n.markdown-body[data-v-adaea9da]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-adaea9da]:after {\n  clear: both;\n}\n.markdown-body[data-v-adaea9da]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-adaea9da]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-adaea9da]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-adaea9da],\n.markdown-body details[data-v-adaea9da],\n.markdown-body dl[data-v-adaea9da],\n.markdown-body ol[data-v-adaea9da],\n.markdown-body p[data-v-adaea9da],\n.markdown-body pre[data-v-adaea9da],\n.markdown-body table[data-v-adaea9da],\n.markdown-body ul[data-v-adaea9da] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-adaea9da] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-adaea9da] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-adaea9da]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-adaea9da]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-adaea9da],\n.markdown-body h2[data-v-adaea9da],\n.markdown-body h3[data-v-adaea9da],\n.markdown-body h4[data-v-adaea9da],\n.markdown-body h5[data-v-adaea9da],\n.markdown-body h6[data-v-adaea9da] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-adaea9da] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-adaea9da],\n.markdown-body h2[data-v-adaea9da] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-adaea9da] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-adaea9da] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-adaea9da] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-adaea9da] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-adaea9da] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-adaea9da],\n.markdown-body ul[data-v-adaea9da] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-adaea9da],\n.markdown-body ol ul[data-v-adaea9da],\n.markdown-body ul ol[data-v-adaea9da],\n.markdown-body ul ul[data-v-adaea9da] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-adaea9da] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-adaea9da] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-adaea9da] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-adaea9da] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-adaea9da] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-adaea9da] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-adaea9da] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-adaea9da] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-adaea9da],\n.markdown-body table th[data-v-adaea9da] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-adaea9da] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-adaea9da]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-adaea9da] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-adaea9da] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-adaea9da] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-adaea9da] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-adaea9da] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-adaea9da] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-adaea9da] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-adaea9da] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-adaea9da],\n.markdown-body pre[data-v-adaea9da] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-adaea9da] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-adaea9da] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-adaea9da]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-adaea9da] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-adaea9da] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-adaea9da] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-adaea9da]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-adaea9da]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-adaea9da] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-adaea9da] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-adaea9da],\n.markdown-body .pl-token[data-v-adaea9da]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-adaea9da] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-adaea9da] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-adaea9da] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-adaea9da] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-adaea9da] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-adaea9da] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-adaea9da] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-adaea9da] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-adaea9da] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-adaea9da] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-adaea9da] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-adaea9da] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-adaea9da] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-adaea9da] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-adaea9da] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),a.exports=d},99660:(a,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>p});var d=o(27060),t=o(30648);const e={inject:{theme:{default:(0,t.uH)(),from:t.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:(0,d.Z)("color")},bgColor:{type:String,default:void 0,validator:(0,d.Z)("color")}},computed:{...(0,t.C9)("pill",["pattern","textColor","bgColor"]),style(){const a=this.resolvedTextColor||"var(--maker-color-neutral-90)",n=this.resolvedBgColor||"transparent";return{"--text-color":a,"--bg-color":n,"--border-color":"transparent"===n?a:n}}}};var r=o(6537),i=o.n(r),l=o(51900);const s={components:{MPill:(0,l.Z)(e,(function(){var a=this,n=a.$createElement;return(a._self._c||n)("span",a._g(a._b({class:a.$s.Pill,style:a.style},"span",a.$attrs,!1),a.$listeners),[a._t("default")],2)}),[],!1,(function(a){this.$s=i().locals||i()}),null,null).exports},data:()=>({patterns:Object.keys((0,t.uH)().pill.patterns)})};o(78700);const m=(0,l.Z)(s,(function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("div",{staticClass:"spaceout"},a._l(a.patterns,(function(n){return o("m-pill",{key:n,attrs:{pattern:n}},[a._v("\n\t\t"+a._s(n)+" pill\n\t")])})),1)}),[],!1,null,"16549456",null).exports;var b=o(415);const c={components:{Demo0:m,DemoCollapse:b.DemoCollapse,SrcFile:b.SrcFile}};o(22425);const p=(0,l.Z)(c,(function(){var a=this,n=a.$createElement;a._self._c;return a._m(4)}),[function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("p",[a._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[a._v("<div>")])]),a._v(".")])},function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("table",[o("thead",[o("tr",[o("th",[a._v("Prop")]),a._v(" "),o("th",[a._v("Type")]),a._v(" "),o("th",[a._v("Default")]),a._v(" "),o("th",[a._v("Possible values")]),a._v(" "),o("th",[a._v("Description")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("pattern")]),a._v(" "),o("td",[o("code",[a._v("string")])]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("pattern defined at theme level")])]),a._v(" "),o("tr",[o("td",[a._v("text-color")]),a._v(" "),o("td",[o("code",[a._v("string")])]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("text color, also border color if no bg color")])]),a._v(" "),o("tr",[o("td",[a._v("bg-color")]),a._v(" "),o("td",[o("code",[a._v("string")])]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("—")]),a._v(" "),o("td",[a._v("bg & border color")])])])])},function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("table",[o("thead",[o("tr",[o("th",[a._v("Slot")]),a._v(" "),o("th",[a._v("Description")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("default")]),a._v(" "),o("td",[a._v("pill content")])])])])},function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("p",[a._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[o("code",[a._v("<div>")])]),a._v(".")])},function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("div",{staticClass:"markdown-body"},[o("h1",[a._v("Pill")]),a._v(" "),o("p",[a._v("Use Pill to notify users of things.")]),a._v(" "),o("h2",[a._v("Examples")]),a._v(" "),o("p",[a._v("Pill comes with the following pre-defined patterns:")]),a._v(" "),o("demo-collapse",[o("Demo0"),a._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[a._v('<template>\n\t<div class="spaceout">\n\t\t<m-pill\n\t\t\tv-for="pattern in patterns"\n\t\t\t:key="pattern"\n\t\t\t:pattern="pattern"\n\t\t>\n\t\t\t{{ pattern }} pill\n\t\t</m-pill>\n\t</div>\n</template>\n\n<script>\nimport { MPill } from \'@square/maker/components/Pill\';\nimport { defaultTheme } from \'@square/maker/components/Theme\';\n\nexport default {\n\tcomponents: {\n\t\tMPill,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tpatterns: Object.keys(defaultTheme().pill.patterns),\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.spaceout > * {\n\tmargin: 4px;\n}\n</style>\n')]],2)],1),a._v(" "),o("h2",[a._v("Props")]),a._v(" "),a._m(0),a._v(" "),a._m(1),a._v(" "),o("h2",[a._v("Slots")]),a._v(" "),a._m(2),a._v(" "),o("h2",[a._v("Events")]),a._v(" "),a._m(3)],1)}],!1,null,"adaea9da",null).exports},6537:(a,n,o)=>{var d=o(60592);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[a.id,d,""]]),d.locals&&(a.exports=d.locals);(0,o(54023).Z)("0bc17b75",d,!0,{})},35004:(a,n,o)=>{var d=o(35820);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[a.id,d,""]]),d.locals&&(a.exports=d.locals);(0,o(54023).Z)("12fe2849",d,!0,{})},78700:(a,n,o)=>{var d=o(37136);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[a.id,d,""]]),d.locals&&(a.exports=d.locals);(0,o(54023).Z)("9185bc72",d,!0,{})},22425:(a,n,o)=>{var d=o(79428);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[a.id,d,""]]),d.locals&&(a.exports=d.locals);(0,o(54023).Z)("7abd1fe2",d,!0,{})}}]);