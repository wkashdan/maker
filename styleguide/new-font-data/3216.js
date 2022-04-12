(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3216],{33216:(e,t,n)=>{"use strict";n.d(t,{b:()=>o});var a=n(807);const i={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:e=>e>=100&&e<=900},fontSize:{type:String,default:void 0},lineHeight:{type:Number,default:void 0},color:{type:String,default:void 0,validator:e=>!n.g.CSS||n.g.CSS.supports("color",e)},fontStyle:{type:String,default:"inherit",validator:e=>["inherit","normal","italic"].includes(e)},textTransform:{type:String,default:"inherit",validator:e=>["inherit","none","uppercase"].includes(e)},textAlign:{type:String,default:"inherit",validator:e=>["inherit","left","right","center"].includes(e)}},computed:{...(0,a.C9)("heading",["size","fontFamily","fontWeight","color"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:e}=this.theme;return{fontFamily:this.resolvedFontFamily,fontWeight:this.resolvedFontWeight,color:this.resolvedColor,fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":e.baseSize,"--mobile-font-size-scale":e.sizeScale}}},render(e){const{$s:t,sizeClass:n,tag:a,inlineStyles:i,fontStyle:r,textTransform:s,textAlign:o}=this,l=this.$slots.default;return e(a,{class:[t.Heading,t["size_".concat(n)],{[t["fontstyle_".concat(r)]]:"inherit"!==r,[t["texttransform_".concat(s)]]:"inherit"!==s,[t["textalign_".concat(o)]]:"inherit"!==o}],style:i,attrs:this.$attrs,on:this.$listeners},l)}};var r=n(71491),s=n.n(r);const o=(0,n(51900).Z)(i,undefined,undefined,!1,(function(e){this.$s=s().locals||s()}),null,null).exports},807:(e,t,n)=>{"use strict";n.d(t,{qo:()=>S,YH:()=>o,uH:()=>p,C9:()=>_});var a=n(85066),i=n.n(a),r=n(54299),s=n.n(r);const o=Symbol("ThemeKey");var l=n(20643),c=n.n(l),f=n(92810),h=n.n(f),v=n(75692),m=n.n(v),d=n(32416);function g(e){return m()(e)&&e.startsWith("@")?this.getPath(e):e}function u(e){if(!m()(e))throw new Error("cannot resolve pointer ".concat(e," it is not a string"));if(!e.startsWith("@"))throw new Error("cannot resolve pointer ".concat(e," it is missed the @ prefix"));const t=e.slice(1),n=c()(this,t);if(h()(n))throw new Error("invalid pointer ".concat(e," does not point to a field that exists within the theme"));return n}function _(e,t){const n={};for(const i of t)n["resolved".concat((a=i,a[0].toUpperCase()+a.slice(1)))]=function(){if(!h()(this[i]))return this[i];const t=this.theme[e][i];if(t){const n=t,a=this.theme.resolve(n),r=this.$vnode.componentOptions.Ctor.extendOptions.props[i].validator;return r&&d.Z.error(r(a),'Invalid value "'.concat(a,'" for prop "').concat(i,'" for component "').concat(e,'" in theme.')),a}};var a;return n}function p(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17,body:"inherit",heading:"inherit",headline:"inherit",label:"inherit"},fontWeights:{body:400,heading:600,headline:300,label:500},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:g,getPath:u}}function x(e,t,n,a){s()(e,t,n),s()(e,i()(e.profiles,{id:a})),e.colors={...e.colors},e.resolve=g,e.getPath=u}const z={inject:{parentTheme:{default:p(),from:o}},provide(){return{[o]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return x(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e,fonts:t,fontWeights:n}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"],"--fonts-baseSize":t.baseSize,"--fonts-body":t.body,"--fonts-heading":t.heading,"--fonts-headline":t.headline,"--fonts-label":t.label,"--fontWeights-body":n.body,"--fontWeights-heading":n.heading,"--fontWeights-headline":n.headline,"--fontWeights-label":n.label}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}};var y=n(35004),b=n.n(y);const S=(0,n(51900).Z)(z,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=b().locals||b()}),null,null).exports},32416:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(14219);const i={warn(e,t,n){e||(0,a.K)(t,n)},error(e,t,n){e||(0,a._)(t,n)}}},14219:(e,t,n)=>{"use strict";n.d(t,{_:()=>r,K:()=>s});const a="object"==typeof process&&"object"==typeof process.env&&!0,i=e=>["%c @square/maker".concat(e),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(e,t)=>{throw console.error(...i(t),e),new Error("".concat((e=>"[@square/maker]".concat(e))(t)," ").concat(e))},s=(e,t)=>{a&&console.warn(...i(t),e)}},72630:(e,t,n)=>{var a=n(77705)((function(e){return e[1]}));a.push([e.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n.fontstyle_normal_TopyV {\n\tfont-style: normal;\n}\n.fontstyle_italic_hY9C3 {\n\tfont-style: italic;\n}\n.texttransform_none_Ep8oi {\n\ttext-transform: none;\n}\n.texttransform_uppercase_kW7HE {\n\ttext-transform: uppercase;\n}\n.textalign_left_mxEQR {\n\ttext-align: left;\n}\n.textalign_right__uM8B {\n\ttext-align: right;\n}\n.textalign_center_QlcAw {\n\ttext-align: center;\n}\n@media (min-width: 1200px) {\n.Heading__6G7M {\n\t\t--resolution: 1200px;\n}\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Heading:"Heading__6G7M",fontstyle_normal:"fontstyle_normal_TopyV",fontstyle_italic:"fontstyle_italic_hY9C3",texttransform_none:"texttransform_none_Ep8oi",texttransform_uppercase:"texttransform_uppercase_kW7HE",textalign_left:"textalign_left_mxEQR",textalign_right:"textalign_right__uM8B",textalign_center:"textalign_center_QlcAw","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},e.exports=a},35820:(e,t,n)=>{var a=n(77705)((function(e){return e[1]}));a.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tfont-weight: var(--fontWeights-body, normal);\n\tfont-size: calc(var(--fonts-baseSize, 16) * 1px);\n\tfont-family: var(--fonts-body, sans-serif);\n\tbackground-color: var(--color-background);\n}\n",""]),a.locals={Theme:"Theme_rI2oH"},e.exports=a},71491:(e,t,n)=>{var a=n(72630);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(54023).Z)("ceb27898",a,!0,{})},35004:(e,t,n)=>{var a=n(35820);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(54023).Z)("12fe2849",a,!0,{})}}]);