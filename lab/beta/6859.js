(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6859],{8425:(n,t,e)=>{"use strict";e.d(t,{w:()=>x});var r=e(2554),o=e.n(r),a=e(7437),l=e.n(a),i=e(4877),s=e.n(i),c=e(6014),d=e.n(c),u=e(3419),p=e.n(u),v=e(2416),_=e(8731);const f={components:{AlertTriangle:l(),AlertCircle:s(),CheckCircle:d(),Info:p()},inject:{theme:{default:(0,_.uH)(),from:_.YH}},inheritAttrs:!1,props:{type:{type:String,default:"info",validator:n=>["error","success","warning","info"].includes(n)},variant:{type:String,default:"inline",validator:n=>["inline","block"].includes(n)},color:{type:String,default:void 0,validator:n=>o().valid(n)}},computed:{...(0,_.C9)("notice",["color"]),iconComponent(){return"error"===this.type?s():"success"===this.type?d():"warning"===this.type?l():p()},showActions(){return this.$slots.actions&&"block"===this.variant},style(){return{"--color":this.resolvedColor,"--color-icon":this.resolvedColor}}},created(){v.Z.warn(!("inline"===this.variant&&this.$slots.actions),"inline Notices cannot have an actions slot")}};var h=e(3777),b=e.n(h);const x=(0,e(1900).Z)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",n._g(n._b({class:[n.$s.Notice,n.$s["type_"+n.type],n.$s["variant_"+n.variant]],style:n.style},"div",n.$attrs,!1),n.$listeners),[e("div",{class:n.$s.IconContentWrapper},[e("div",{class:n.$s.IconAligner},[e(n.iconComponent,{tag:"component",class:n.$s.Icon,attrs:{inline:""}})],1),n._v(" "),e("div",[n._t("default")],2)]),n._v(" "),n.showActions?e("div",{class:n.$s.ActionsWrapper},[n._t("actions")],2):n._e()])}),[],!1,(function(n){this.$s=b().locals||b()}),null,null).exports},1180:(n,t,e)=>{"use strict";e.d(t,{W:()=>u});var r=e(7346),o=e(8300);const a={components:{ChevronDownIcon:e.n(o)()},inheritAttrs:!1,model:{prop:"value",event:"select:update"},props:{variant:{type:String,default:"fill",validator:n=>["fill","outline"].includes(n)},value:{type:String,default:void 0},placeholder:{type:String,default:""},options:{type:Array,required:!0},invalid:{type:Boolean,default:!1}},computed:{selected:{get(){return this.value},set(n){return this.$emit("select:update",n),n}},optionSelected(){return this.options.find((n=>n.value===this.value))},placeholderValue(){return this.optionSelected?void 0:this.value}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{setCustomValidity(){const n=this.invalid?"invalid":"";this.$refs.select.setCustomValidity(n)}}};var l=e(182),i=e.n(l),s=e(1900);const c=(0,s.Z)(a,(function(){var n,t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.$s.SelectContainer,t.$s["variant_"+t.variant]]},[t.$slots.prefix?r("span",{class:t.$s.Prefix},[t._t("prefix")],2):t._e(),t._v(" "),r("select",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],ref:"select",class:[t.$s.Select,(n={},n[t.$s.selected]=t.optionSelected,n[t.$s.invalid]=t.invalid,n[t.$s.hasPrefix]=t.$slots.prefix,n)],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(n){return n.selected})).map((function(n){return"_value"in n?n._value:n.value}));t.selected=n.target.multiple?e:e[0]}}},"select",t.$attrs,!1),t.$listeners),[t.placeholder?r("option",{attrs:{disabled:""},domProps:{value:t.placeholderValue}},[t._v("\n\t\t\t"+t._s(t.placeholder)+"\n\t\t")]):t._e(),t._v(" "),t._l(t.options,(function(n){return r("option",{key:n.value,attrs:{disabled:n.disabled},domProps:{value:n.value,selected:n.value===t.value}},[t._v("\n\t\t\t"+t._s(n.label)+"\n\t\t")])}))],2),t._v(" "),r("chevron-down-icon",{class:t.$s.Icon})],1)}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports,d={components:{MBlockFormControlLayout:r.S,SelectControl:c},inheritAttrs:!1,model:{prop:"value",event:"select:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}}};const u=(0,s.Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("m-block-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[e("select-control",n._g(n._b({attrs:{invalid:n.isInvalid},scopedSlots:n._u([n._l(n.$slots,(function(t,e){return{key:e,fn:function(){return[n._t(e)]},proxy:!0}}))],null,!0)},"select-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"error",fn:function(){return[n._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},588:(n,t,e)=>{"use strict";e.d(t,{p:()=>d});var r=e(7346);const o={model:{prop:"value",event:"textarea:update"},props:{variant:{type:String,default:"fill",validator:n=>["fill","outline"].includes(n)},value:{type:String,default:""},invalid:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1}},computed:{textareaVal:{get(){return this.value},set(n){this.$emit("textarea:update",n)}}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{setCustomValidity(){const n=this.invalid?"invalid":"";this.$refs.textarea.setCustomValidity(n)}}};var a=e(3068),l=e.n(a),i=e(1900);const s=(0,i.Z)(o,(function(){var n,t=this,e=t.$createElement;return(t._self._c||e)("textarea",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.textareaVal,expression:"textareaVal"}],ref:"textarea",class:[t.$s.Textarea,t.$s["variant_"+t.variant],(n={},n[t.$s.resizable]=t.resizable,n)],domProps:{value:t.textareaVal},on:{input:function(n){n.target.composing||(t.textareaVal=n.target.value)}}},"textarea",t.$attrs,!1),t.$listeners))}),[],!1,(function(n){this.$s=l().locals||l()}),null,null).exports,c={components:{MBlockFormControlLayout:r.S,TextareaControl:s},inheritAttrs:!1,model:{prop:"value",event:"textarea:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}}};const d=(0,i.Z)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("m-block-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[e("textarea-control",n._g(n._b({attrs:{invalid:n.isInvalid}},"textarea-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"error",fn:function(){return[n._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},2158:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n.Notice_M_oGn {\n\tcolor: var(--color);\n\tfont-size: 14px;\n\tline-height: 24px;\n\tborder-radius: 8px;\n}\n.IconContentWrapper_ill5_ {\n\tdisplay: flex;\n}\n.ActionsWrapper_va9WP {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n.ActionsWrapper_va9WP > * {\n\tmargin-right: 24px;\n}\n.IconAligner_Ok3dF {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.Icon_Eo92s {\n\twidth: 16px;\n\theight: 16px;\n\tstroke: var(--color-icon);\n}\n.ActionsWrapper_va9WP > *:last-child {\n\tmargin-right: 0;\n}\n.type_error_EiA8m {\n\t--color: #a12712;\n\t--color-icon: #d83e3b;\n\t--color-bg: #f6eceb;\n}\n.type_warning_hTphd {\n\t--color: #584400;\n\t--color-icon: #f2bd0d;\n\t--color-bg: #f9eecf;\n}\n.type_success_Y28n_ {\n\t--color: #035203;\n\t--color-icon: #1fad1f;\n\t--color-bg: #ebf1eb;\n}\n.type_info_QXd_q {\n\t--color: var(--maker-color-neutral-90, #1b1b1b);\n\t--color-icon: var(--maker-color-neutral-80, #707070);\n\t--color-bg: var(--maker-color-neutral-10, #f1f1f1);\n}\n.variant_block_CnhOq {\n\tpadding: 16px;\n\tbackground-color: var(--maker-color-neutral-10, var(--color-bg));\n}\n",""]),r.locals={Notice:"Notice_M_oGn",IconContentWrapper:"IconContentWrapper_ill5_",ActionsWrapper:"ActionsWrapper_va9WP",IconAligner:"IconAligner_Ok3dF",Icon:"Icon_Eo92s",type_error:"type_error_EiA8m",type_warning:"type_warning_hTphd",type_success:"type_success_Y28n_",type_info:"type_info_QXd_q",variant_block:"variant_block_CnhOq"},n.exports=r},8670:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tMost (if not all) of these should be provided\n\tby the Theme Context, but this is a placeholder\n\tuntil we get a Theme Context component\n*/\n.variant_fill_MNP6k {\n\t--color-background: var(--maker-color-neutral-10, #f6f7f9);\n\t--color-border: transparent;\n}\n.variant_outline_K9CIe {\n\t--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));\n}\n.SelectContainer_i5cEi {\n\t--color-placeholder: var(--maker-color-neutral-80, rgba(0, 0, 0, 0.55));\n\t--color-foreground: var(--maker-color-neutral-90, rgba(2, 1, 1, 0.9));\n\t--color-border-active: var(--maker-color-neutral-80, #222);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--border-radius: 8px;\n\n\tposition: relative;\n\tbox-sizing: border-box;\n\tmin-width: 80px;\n\tfont-size: 16px;\n\tborder-radius: var(--border-radius);\n}\n.Prefix_pnDG1 {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 16px;\n\tline-height: 0;\n\ttransform: translateY(-50%);\n\tpointer-events: none;\n}\n.Select_QHt8E {\n\tbox-sizing: inherit;\n\twidth: 100%;\n\theight: 48px;\n\tpadding: 0 32px 0 16px;\n\toverflow: hidden;\n\tcolor: var(--color-foreground);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: inherit;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: border-color 0.2s ease;\n\t-webkit-appearance: none;\n\t        appearance: none\n}\n.Select_QHt8E.hasPrefix_wDbAV {\n\t\t/* select left padding + icon width + icon right padding */\n\t\tpadding-left: calc(16px + 16px + 8px);\n}\n.Select_QHt8E.selected_YEaIi {\n\t\tcolor: var(--color-foreground);\n}\n.Select_QHt8E:not(:disabled, :invalid):hover {\n\t\tborder-color: var(--color-border-active);\n}\n.Select_QHt8E:not(:disabled, :invalid):focus, .Select_QHt8E:not(:disabled, :invalid):active {\n\t\tborder-color: var(--color-border-active);\n}\n.Select_QHt8E:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Select_QHt8E:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Select_QHt8E::-ms-expand {\n\t\tdisplay: none;\n}\n.Icon_vqrGe {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 16px;\n\twidth: 16px;\n\theight: 16px;\n\tcolor: var(--color-foreground);\n\ttransform: translateY(-50%);\n\tpointer-events: none;\n}\n",""]),r.locals={variant_fill:"variant_fill_MNP6k",variant_outline:"variant_outline_K9CIe",SelectContainer:"SelectContainer_i5cEi",Prefix:"Prefix_pnDG1",Select:"Select_QHt8E",hasPrefix:"hasPrefix_wDbAV",selected:"selected_YEaIi",Icon:"Icon_vqrGe"},n.exports=r},8950:(n,t,e)=>{var r=e(7705)((function(n){return n[1]}));r.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tMost (if not all) of these should be provided\n\tby the Theme Context, but this is a placeholder\n\tuntil we get a Theme Context component\n*/\n.variant_fill_ugQyA {\n\t--color-background: var(--maker-color-neutral-10, #f6f7f9);\n\t--color-border: transparent;\n}\n.variant_outline_dYYZt {\n\t--color-border: var(--maker-color-neutral-20, rgba(0, 0, 0, 0.3));\n}\n.Textarea_VsZKt {\n\t--color-placeholder: var(--maker-color-neutral-80, rgba(0, 0, 0, 0.55));\n\t--color-foreground: var(--maker-color-neutral-90, rgba(0, 0, 0, 0.9));\n\t--color-border-active: var(--maker-color-neutral-80, #222);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--border-radius: 8px;\n\n\tbox-sizing: border-box;\n\twidth: 100%;\n\n\t/* top & bottom padding + 3 line-heights */\n\tmin-height: calc(12px * 2 + 24px * 3);\n\tpadding: 12px 16px;\n\tcolor: var(--color-foreground);\n\tfont-weight: var(--maker-font-weight-paragraph, inherit);\n\tfont-size: 16px;\n\tfont-family: var(--maker-font-family-paragraph, inherit);\n\tline-height: 24px;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: var(--border-radius);\n\toutline: none;\n\ttransition:\n\t\tborder 0.2s ease,\n\t\tbackground-color 0.2s ease,\n\t\tcolor 0.2s ease;\n\tresize: none\n}\n.Textarea_VsZKt::placeholder {\n\t\tcolor: var(--color-placeholder);\n}\n.Textarea_VsZKt:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Textarea_VsZKt:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Textarea_VsZKt:hover:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-border-active);\n}\n.Textarea_VsZKt:active:not(:disabled, :invalid), .Textarea_VsZKt:focus:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-border-active);\n}\n.Textarea_VsZKt.resizable_RzrdQ {\n\t\tresize: vertical;\n}\n",""]),r.locals={variant_fill:"variant_fill_ugQyA",variant_outline:"variant_outline_dYYZt",Textarea:"Textarea_VsZKt",resizable:"resizable_RzrdQ"},n.exports=r},3777:(n,t,e)=>{var r=e(2158);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("64eace34",r,!0,{})},182:(n,t,e)=>{var r=e(8670);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("f916da2c",r,!0,{})},3068:(n,t,e)=>{var r=e(8950);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("3d55d4a8",r,!0,{})}}]);