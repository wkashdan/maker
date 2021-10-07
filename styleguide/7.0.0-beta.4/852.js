(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[852],{33216:function(e,t,n){"use strict";n.d(t,{b:function(){return h}});var i=n(60771),s=n.n(i),r=n(32531);var o={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:e=>s().valid(e)}},computed:{...(0,r.C9)("heading",["size","fontFamily","textColor"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor}}},render(e){const{$s:t,sizeClass:n,tag:i,inlineStyles:s}=this,r=this.$slots.default;return e(i,{class:[t.Heading,t[`size_${n}`]],style:s,attrs:this.$attrs,on:this.$listeners},r)}},a=n(71491),l=n.n(a);var h=(0,n(51900).Z)(o,undefined,undefined,!1,(function(e){this.$s=l().locals||l()}),null,null).exports},90487:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var i=n(60771),s=n.n(i);var r={name:"ProgressBar",props:{size:{type:String,default:"medium",validator:e=>["xsmall","small","medium","large"].includes(e)},shape:{type:String,default:"rounded",validator:e=>["squared","rounded","pill"].includes(e)},color:{type:String,default:"#000",validator:e=>s().valid(e)},progress:{type:Number,default:0,validator:e=>e>=0&&e<=100}},computed:{barStyles(){return{"--bar-color":this.color,"--fill-percent":`${this.progress}%`}}}},o=n(3619),a=n.n(o);var l=(0,n(51900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$s.ProgressBarContainer,e.$s["size_"+e.size],e.$s["shape_"+e.shape]]},[n("div",{class:e.$s.ProgressBar,style:e.barStyles})])}),[],!1,(function(e){this.$s=a().locals||a()}),null,null).exports},32531:function(e,t,n){"use strict";n.d(t,{qo:function(){return C},YH:function(){return a},uH:function(){return x},C9:function(){return m}});var i=n(85066),s=n.n(i),r=n(54299),o=n.n(r);var a=Symbol("ThemeKey"),l=n(20643),h=n.n(l),f=n(71586),_=n.n(f),p=n(2588),c=n.n(p),d=n(75692),u=n.n(d),g=n(32416);function v(e){return u()(e)&&e.startsWith("@")?this.getPath(e):e}function z(e){if(!u()(e))throw new Error(`cannot resolve pointer ${e} it is not a string`);if(!e.startsWith("@"))throw new Error(`cannot resolve pointer ${e} it is missed the @ prefix`);const t=e.slice(1),n=h()(this,t);if(_()(n)||c()(n))throw new Error(`invalid pointer ${e} does not point to a field that exists within the theme`);return n}function m(e,t){const n={};for(const s of t)n[`resolved${i=s,i[0].toUpperCase()+i.slice(1)}`]=function(){if(this[s])return this[s];const t=this.theme[e][s];if(t){const n=t,i=this.theme.resolve(n),r=this.$vnode.componentOptions.Ctor.extendOptions.props[s].validator;return r&&g.Z.error(r(i),`Invalid value "${i}" for prop "${s}" for component "${e}" in theme.`),i}};var i;return n}function x(){return{colors:{primary:"#000000",text:"#000000",heading:"#000000"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{textColor:"@colors.text",fontFamily:"inherit",size:0},heading:{textColor:"@colors.heading",fontFamily:"inherit",size:2},stepper:{color:"#cccccc",textColor:"#000000"},resolve:v,getPath:z}}function y(e,t,n,i){o()(e,t,n),o()(e,s()(e.profiles,{id:i})),e.resolve=v,e.getPath=z}var B={inject:{parentTheme:{default:x(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return y(e,this.parentTheme,this.theme,this.profile),e},beforeUpdate(){y(this.$data,this.parentTheme,this.theme,this.profile)}},C=(0,n(51900).Z)(B,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._t("default")],2)}),[],!1,null,null,null).exports},32416:function(e,t){"use strict";const n=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i={warn(e,t){e||console.warn(...n,t)},error(e,t){if(!e)throw console.error(...n,t),new Error(`[@square/maker] ${t}`)}};t.Z=i},72630:function(e,t,n){var i=n(77705)((function(e){return e[1]}));i.push([e.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},e.exports=i},59802:function(e,t,n){var i=n(77705)((function(e){return e[1]}));i.push([e.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: #f5f4f4;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tbackground-color: var(--bar-color);\n\ttransition: width 100ms linear;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x,\n.ProgressBarContainer__cJD1.shape_squared_gzT9x .ProgressBar_aeQRL {\n\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n.ProgressBarContainer__cJD1.shape_rounded_NBloK .ProgressBar_aeQRL,\n.ProgressBarContainer__cJD1.shape_pill_wddxw,\n.ProgressBarContainer__cJD1.shape_pill_wddxw .ProgressBar_aeQRL {\n\tborder-radius: 16px;\n}\n",""]),i.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw"},e.exports=i},71491:function(e,t,n){var i=n(72630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(54023).Z)("ceb27898",i,!0,{})},3619:function(e,t,n){var i=n(59802);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(54023).Z)("2b496f20",i,!0,{})}}]);