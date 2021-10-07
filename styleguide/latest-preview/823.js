(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[823],{59823:function(t,n,e){"use strict";e.d(n,{G:function(){return g},j:function(){return b}});var o=e(60771),i=e.n(o),r=e(69901),a=e(32531),l=e(46475);function s(t){return t.alpha(.3)}function c(t){return i().mix(t,"#000",.05)}function d(t){return i().mix(t,"#000",.1)}const u={primary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=t.textColor?i()(t.textColor):void 0,a=(0,l.Z)(n,r),u=c(a),p=d(a),f=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":n.hex(),"--color-main-hover":e.hex(),"--color-main-active":o.hex(),"--color-contrast":a.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":p.hex(),"--color-focus":f.hex()}},secondary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const n=i()(t.color),e=c(n),o=d(n),r=s(n);return{"--small-padding":"0 8px","--medium-padding":"0 12px","--large-padding":"0 20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":e.hex(),"--color-contrast-active":o.hex(),"--color-focus":r.hex()}}};var p={components:{MLoading:r.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>i().valid(t)},textColor:{type:String,default:void 0,validator:t=>i().valid(t)},variant:{type:String,default:void 0,validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("button",["color","size","textColor","variant","shape","align","fullWidth"]),style(){return u[this.resolvedVariant]({color:this.resolvedColor,textColor:this.resolvedTextColor})}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}},f=e(3441),_=e.n(f),h=e(51900);var g=(0,h.Z)(p,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild(),t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?o("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=_().locals||_()}),null,null).exports,m=e(32416);var v={components:{MLoading:r.g},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>i().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{style(){return function(t){const n=t.color?i()(t.color):void 0;return{"--color-main":"color","--color-contrast":n?n.hex():void 0}}({color:this.color})}},created(){m.Z.warn(this.$slots.default,"TextButton should be used with a label")}},x=e(73012),B=e.n(x);var b=(0,h.Z)(v,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.size],(t={},t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.disabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("span",{class:n.$s.MainText},[n._t("default")],2)],1)}),[],!1,(function(t){this.$s=B().locals||B()}),null,null).exports},69901:function(t,n,e){"use strict";e.d(n,{g:function(){return a}});var o={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}},i=e(17531),r=e.n(i);var a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.Loading},[e("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=r().locals||r()}),null,null).exports},32531:function(t,n,e){"use strict";e.d(n,{qo:function(){return y},YH:function(){return l},uH:function(){return B},C9:function(){return x}});var o=e(85066),i=e.n(o),r=e(54299),a=e.n(r);var l=Symbol("ThemeKey"),s=e(20643),c=e.n(s),d=e(71586),u=e.n(d),p=e(2588),f=e.n(p),_=e(75692),h=e.n(_),g=e(32416);function m(t){return h()(t)&&t.startsWith("@")?this.getPath(t):t}function v(t){if(!h()(t))throw new Error(`cannot resolve pointer ${t} it is not a string`);if(!t.startsWith("@"))throw new Error(`cannot resolve pointer ${t} it is missed the @ prefix`);const n=t.slice(1),e=c()(this,n);if(u()(e)||f()(e))throw new Error(`invalid pointer ${t} does not point to a field that exists within the theme`);return e}function x(t,n){const e={};for(const i of n)e[`resolved${o=i,o[0].toUpperCase()+o.slice(1)}`]=function(){if(this[i])return this[i];const n=this.theme[t][i];if(n){const e=n,o=this.theme.resolve(e),r=this.$vnode.componentOptions.Ctor.extendOptions.props[i].validator;return r&&g.Z.error(r(o),`Invalid value "${o}" for prop "${i}" for component "${t}" in theme.`),o}};var o;return e}function B(){return{colors:{primary:"#000000",text:"#000000",heading:"#000000"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{textColor:"@colors.text",fontFamily:"inherit",size:0},heading:{textColor:"@colors.heading",fontFamily:"inherit",size:2},stepper:{color:"#cccccc",textColor:"#000000"},resolve:m,getPath:v}}function b(t,n,e,o){a()(t,n,e),a()(t,i()(t.profiles,{id:o})),t.resolve=m,t.getPath=v}var w={inject:{parentTheme:{default:B(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return b(t,this.parentTheme,this.theme,this.profile),t},beforeUpdate(){b(this.$data,this.parentTheme,this.theme,this.profile)}},y=(0,e(51900).Z)(w,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",[t._t("default")],2)}),[],!1,null,null,null).exports},32416:function(t,n){"use strict";const e=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],o={warn(t,n){t||console.warn(...e,n)},error(t,n){if(!t)throw console.error(...e,n),new Error(`[@square/maker] ${n}`)}};n.Z=o},46475:function(t,n,e){"use strict";var o=e(60771),i=e.n(o);n.Z=function(t,n){if(!n||i().contrast(t,n)<4.5){const n=.32,e=t.luminance()>n;return i()(e?"#000":"#fff")}return n}},20758:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_vQBWk {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: 32px;\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_vQBWk:disabled > * {\n\t\t\topacity: 0.4;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px #fff,\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),o.locals={Button:"Button_vQBWk",shape_pill:"shape_pill_aYEm0",shape_squared:"shape_squared_IPrN0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=o},28171:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n.Button_UfoQd {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, inherit);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_UfoQd.iconButton__JrGg {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_UfoQd.size_medium_f3QRI {\n\t\tfont-size: 14px;\n}\n.Button_UfoQd.size_large__tIVh {\n\t\tfont-size: 16px;\n}\n.Button_UfoQd:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_UfoQd:disabled > * {\n\t\t\topacity: 0.4;\n}\n.Button_UfoQd.loading_mxjea {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_o7CJ2 {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText__arHd {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),o.locals={Button:"Button_UfoQd",iconButton:"iconButton__JrGg",size_medium:"size_medium_f3QRI",size_large:"size_large__tIVh",loading:"loading_mxjea",Loading:"Loading_o7CJ2",MainText:"MainText__arHd"},t.exports=o},39832:function(t,n,e){var o=e(77705)((function(t){return t[1]}));o.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=o},3441:function(t,n,e){var o=e(20758);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("180e274e",o,!0,{})},73012:function(t,n,e){var o=e(28171);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("69aa5930",o,!0,{})},17531:function(t,n,e){var o=e(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(54023).Z)("7ac45ae2",o,!0,{})}}]);