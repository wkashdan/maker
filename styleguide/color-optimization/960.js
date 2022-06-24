(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[960],{49604:(n,t,r)=>{"use strict";r.d(t,{G:()=>u});var e=r(16765),o=r(46475),i=r(69901),a=r(37502);const l={components:{MLoading:i.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:n=>["small","medium","large"].includes(n)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:n=>(0,e.Vi)(n).isValid()},textColor:{type:String,default:void 0,validator:n=>(0,e.Vi)(n).isValid()},variant:{type:String,default:void 0,validator:n=>["primary","secondary","tertiary"].includes(n)},shape:{type:String,default:void 0,validator:n=>["squared","rounded","pill"].includes(n)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:n=>["center","stack","space-between"].includes(n)},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("button",["color","size","textColor","variant","shape","align","fullWidth","pattern"]),style(){return function(n,t){const r=n.textColor?n.textColor:(0,o.mj)(n.color),i=(0,e.Vi)(n.color),a=i.alpha(.3).toHex();let l;l="primary"===t?i.isDark()?"lighten":"darken":"alpha";const s=i[l](.05).toHex(),d=i[l](.1).toHex();return{"--color-main":n.color,"--color-contrast":r,"--color-hover":s,"--color-active":d,"--color-focus":a}}({color:this.resolvedColor,textColor:this.resolvedTextColor},this.resolvedVariant)},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const n=(this.$slots.default||[]).filter((n=>n.tag||n.text.trim().length>0));return 1===n.length&&n[0].tag}}};var s=r(3441),d=r.n(s);const u=(0,r(51900).Z)(l,(function(){var n,t=this,r=t.$createElement,e=t._self._c||r;return e("button",t._g(t._b({class:[t.$s.Button,t.$s["variant_"+t.resolvedVariant],t.$s["size_"+t.resolvedSize],t.$s["shape_"+t.resolvedShape],t.$s["align_"+t.resolvedAlign],(n={},n[t.$s.fullWidth]=t.resolvedFullWidth,n[t.$s.iconButton]=t.isSingleChild()&&!t.resolvedFullWidth,n[t.$s.loading]=t.loading,n)],style:t.style,attrs:{type:t.type,disabled:t.isDisabled}},"button",t.$attrs,!1),t.$listeners),[t.loading?e("m-loading",{class:t.$s.Loading}):t._e(),t._v(" "),e("span",{class:t.$s.MainText},[t._t("default")],2),t._v(" "),t.$scopedSlots.information?e("span",{class:t.$s.InformationText},[t._t("information")],2):t._e()],1)}),[],!1,(function(n){this.$s=d().locals||d()}),null,null).exports},94949:(n,t,r)=>{"use strict";r.d(t,{z:()=>d});var e=r(57346);const o={inheritAttrs:!1,model:{event:"input:update"},props:{variant:{type:String,default:"fill",validator:n=>["fill","outline"].includes(n)},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},align:{type:String,default:"left",validator:n=>["left","right"].includes(n)}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()},setCustomValidity(){const n=this.invalid?"invalid":"";this.$refs.input.setCustomValidity(n)}}};var i=r(86861),a=r.n(i),l=r(51900);const s={components:{InputControl:(0,l.Z)(o,(function(){var n,t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:[t.$s.InputContainer,t.$s["variant_"+t.variant],(n={},n[t.$s.disabled]=t.disabled,n[t.$s.invalid]=t.invalid,n)],on:{click:t.focus}},[t.$slots.prefix?e("span",{class:[t.$s.Affix,t.$s.Prefix]},[t._t("prefix")],2):t._e(),t._v(" "),e("input",t._g(t._b({ref:"input",class:[t.$s.Input,t.$s["align_"+t.align]],attrs:{disabled:t.disabled},on:{input:function(n){return t.$emit("input:update",n.target.value)}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),t.$slots.suffix?e("span",{class:[t.$s.Affix,t.$s.Suffix]},[t._t("suffix")],2):t._e()])}),[],!1,(function(n){this.$s=a().locals||a()}),null,null).exports,MBlockFormControlLayout:e.S},inheritAttrs:!1,model:{event:"input:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}},methods:{focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()}}};const d=(0,l.Z)(s,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("m-block-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[r("input-control",n._g(n._b({ref:"input",attrs:{invalid:n.isInvalid},scopedSlots:n._u([n._l(n.$slots,(function(t,r){return{key:r,fn:function(){return[n._t(r)]},proxy:!0}}))],null,!0)},"input-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"error",fn:function(){return[n._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},57346:(n,t,r)=>{"use strict";r.d(t,{S:()=>i});var e=r(43941),o=r.n(e);const i=(0,r(51900).Z)({},(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{class:n.$s.Container},[n._t("control"),n._v(" "),n.$slots.error?r("span",{class:n.$s.Error},[n._t("error")],2):n._e()],2)}),[],!1,(function(n){this.$s=o().locals||o()}),null,null).exports},27060:(n,t,r)=>{"use strict";r.d(t,{Z:()=>e});const e=function(n){return function(t){return!r.g.CSS||r.g.CSS.supports(n,t)}}},20758:(n,t,r)=>{var e=r(77705)((function(n){return n[1]}));e.push([n.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, #fff);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main, var(--maker-color-primary, #000));\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tfilter 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:hover {\n\t\tbackground-color: var(--color-hover);\n}\n.Button_vQBWk:active {\n\t\tbackground-color: var(--color-active);\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:disabled {\n\t\tbackground-color: var(--color-main, var(--maker-color-primary, #000));\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n}\n\n/* Variants */\n.Button_vQBWk.variant_primary_CoE7d,\n.Button_vQBWk.variant_secondary_nK9rR {\n\t--small-padding: 0 16px;\n\t--medium-padding: 0 24px;\n\t--large-padding: 0 32px;\n}\n.Button_vQBWk.variant_primary_CoE7d .Loading_LttwZ {\n\tcolor: var(--color-contrast);\n}\n.Button_vQBWk.variant_secondary_nK9rR {\n\t--outline-border: inset 0 0 0 1px var(--color-main);\n}\n.Button_vQBWk.variant_tertiary_vRAUt {\n\t--small-padding: 0 8px;\n\t--medium-padding: 0 12px;\n\t--large-padding: 0 20px;\n}\n.Button_vQBWk.variant_secondary_nK9rR,\n.Button_vQBWk.variant_tertiary_vRAUt {\n\tcolor: var(--color-main);\n\tbackground-color: transparent\n}\n.Button_vQBWk.variant_secondary_nK9rR:disabled, .Button_vQBWk.variant_tertiary_vRAUt:disabled {\n\t\tbackground-color: transparent;\n}\n.Button_vQBWk.variant_secondary_nK9rR .Loading_LttwZ, .Button_vQBWk.variant_tertiary_vRAUt .Loading_LttwZ {\n\t\tcolor: var(--color-main);\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),e.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",variant_primary:"variant_primary_CoE7d",variant_secondary:"variant_secondary_nK9rR",variant_tertiary:"variant_tertiary_vRAUt",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},n.exports=e},51934:(n,t,r)=>{var e=r(77705)((function(n){return n[1]}));e.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tMost (if not all) of these should be provided\n\tby the Theme Context, but this is a placeholder\n\tuntil we get a Theme Context component\n*/\n.variant_fill_CNuZQ {\n\t--color-background: var(--maker-color-neutral-10, #f6f7f9);\n\t--color-border: transparent;\n}\n.variant_outline__2TXJ {\n\t--color-background: var(--maker-color-background);\n\t--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));\n}\n.Affix_swXoB {\n\tdisplay: flex;\n\talign-items: center;\n\tbox-sizing: inherit;\n\tcolor: var(--color-placeholder);\n\tfont-size: inherit;\n\tbackground-color: transparent;\n\tborder-radius: inherit;\n\tcursor: inherit;\n\tfill: currentColor\n}\n.Affix_swXoB.Prefix_qI9Qu {\n\t\tpadding-right: 8px;\n}\n.Affix_swXoB.Suffix_Du2TA {\n\t\tpadding-left: 8px;\n}\n.InputContainer__FrL8 {\n\t--color-placeholder: var(--maker-color-neutral-80, rgba(0, 0, 0, 0.55));\n\t--color-foreground: var(--maker-color-neutral-90, rgba(107, 107, 107, 0.9));\n\t--color-border-active: var(--maker-color-neutral-80, #222);\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: flex;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 48px;\n\tpadding: 0 16px;\n\tcolor: var(--color-foreground);\n\tfont-size: 16px;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\ttransition: border-color 0.2s ease\n}\n.InputContainer__FrL8:not(.disabled_ZTPmq, .invalid__8xt2):hover, .InputContainer__FrL8:not(.disabled_ZTPmq, .invalid__8xt2):focus-within {\n\t\tborder-color: var(--color-border-active);\n}\n.InputContainer__FrL8.disabled_ZTPmq {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.InputContainer__FrL8.invalid__8xt2 {\n\t\tborder-color: var(--color-error);\n}\n.Input_U4Dfn {\n\tflex-grow: 1;\n\tbox-sizing: inherit;\n\tcolor: inherit;\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\ttext-overflow: ellipsis;\n\tbackground-color: transparent;\n\tborder: none;\n\toutline: none;\n\tbox-shadow: none;\n\tcursor: inherit;\n\t-webkit-appearance: none;\n\t        appearance: none\n}\n.Input_U4Dfn::placeholder {\n\t\tcolor: var(--color-placeholder);\n}\n.Input_U4Dfn.align_left_jZ_Vi {\n\t\ttext-align: left;\n}\n.Input_U4Dfn.align_right_L_V3_ {\n\t\ttext-align: right;\n}\n",""]),e.locals={variant_fill:"variant_fill_CNuZQ",variant_outline:"variant_outline__2TXJ",Affix:"Affix_swXoB",Prefix:"Prefix_qI9Qu",Suffix:"Suffix_Du2TA",InputContainer:"InputContainer__FrL8",disabled:"disabled_ZTPmq",invalid:"invalid__8xt2",Input:"Input_U4Dfn",align_left:"align_left_jZ_Vi",align_right:"align_right_L_V3_"},n.exports=e},30263:(n,t,r)=>{var e=r(77705)((function(n){return n[1]}));e.push([n.id,"\n.Container_rLuTK {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.Error__kSnm {\n\t/* provided by theme eventually */\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: inline-block;\n\tmargin-top: 8px;\n\tcolor: var(--color-error);\n}\n",""]),e.locals={Container:"Container_rLuTK",Error:"Error__kSnm"},n.exports=e},3441:(n,t,r)=>{var e=r(20758);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,r(54023).Z)("180e274e",e,!0,{})},86861:(n,t,r)=>{var e=r(51934);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,r(54023).Z)("257fa8de",e,!0,{})},43941:(n,t,r)=>{var e=r(30263);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);(0,r(54023).Z)("6db595db",e,!0,{})}}]);