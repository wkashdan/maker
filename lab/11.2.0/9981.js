(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9981],{2982:(t,e,n)=>{"use strict";n.d(e,{j:()=>p});var i=n(771),a=n.n(i),s=n(9901),o=n(648),r=n(2416);const l={components:{MLoading:s.g},inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>a().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,o.C9)("textbutton",["pattern","size","color"]),style(){return function(t){const e=t.color?a()(t.color):void 0;return{color:e?e.hex():void 0}}({color:this.resolvedColor})},isDisabled(){return this.disabled||this.loading}},created(){r.Z.warn(this.$slots.default,"TextButton should be used with a label")}};var c=n(5713),d=n.n(c);const p=(0,n(1900).Z)(l,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("button",e._g(e._b({class:[e.$s.TextButton,e.$s["size_"+e.resolvedSize],(t={},t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?i("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),i("span",{class:e.$s.MainText},[e._t("default")],2)],1)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},9082:(t,e,n)=>{"use strict";n.d(e,{j:()=>o});var i=n(9211),a=n(5832);const s={components:{MTransition:i.T},inheritAttrs:!1,data:()=>({fadeInFn:a.dx,fadeOutFn:a.vq})};const o=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8433:(t,e,n)=>{var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.Preview_XhizJ {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, minmax(360px, 1fr));\n\tgrid-gap: 40px;\n\tmax-height: calc(100vh - 80px);\n\tpadding: 40px;\n\tbackground-color: #f8f8f8;\n\tbox-shadow:\n\t\tinset 0.6px 0.6px 2.2px rgba(0, 0, 0, 0.07),\n\t\tinset 1.3px 1.3px 5.3px rgba(0, 0, 0, 0.05),\n\t\tinset 2.5px 2.5px 10px rgba(0, 0, 0, 0.042),\n\t\tinset 4.5px 4.5px 17.9px rgba(0, 0, 0, 0.035),\n\t\tinset 8.4px 8.4px 33.4px rgba(0, 0, 0, 0.028),\n\t\tinset 20px 20px 80px rgba(0, 0, 0, 0.02);\n}\n.Canvas_TguRI {\n\tposition: relative;\n\theight: calc(100% - 40px);\n\tmax-height: calc(100% - 40px);\n\tpadding: 20px 10px;\n\toverflow: hidden;\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--font-weights-text, normal);\n\tfont-size: var(--font-base-size);\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tbackground-color: var(--maker-color-background);\n\tborder-radius: 30px;\n\tbox-shadow:\n\t\t4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),\n\t\t12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),\n\t\t23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),\n\t\t38px 51px 54px -40px rgba(0, 0, 0, 0.098);\n}\n.Notch_LGvrh {\n\twidth: 40%;\n\theight: 20px;\n\tmargin: -20px auto 0;\n\tbackground-color: black;\n\tborder-radius: 0 0 30px 30px;\n}\n.Page_Rbb5q {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: scroll;\n}\n.Section_wNM99 {\n\tpadding: 2vh 1vw;\n}\n",""]),i.locals={Preview:"Preview_XhizJ",Canvas:"Canvas_TguRI",Notch:"Notch_LGvrh",Page:"Page_Rbb5q",Section:"Section_wNM99"},t.exports=i},4298:(t,e,n)=>{var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.TextButton__xxoX {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--maker-color-neutral-90);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\toutline-color: currentColor;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.TextButton__xxoX.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.TextButton__xxoX.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.TextButton__xxoX.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.TextButton__xxoX:active,\n\t.TextButton__xxoX:focus {\n\t\tbox-shadow: 0 0 0 1px currentColor;\n}\n.TextButton__xxoX:disabled {\n\t\tcursor: initial\n}\n.TextButton__xxoX:disabled > * {\n\t\t\topacity: 0.5;\n}\n.TextButton__xxoX.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--maker-color-neutral-90);\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1.5;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),i.locals={TextButton:"TextButton__xxoX",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",loading:"loading_bNQgE",Loading:"Loading_pd2rj",MainText:"MainText_qfj5z"},t.exports=i},8900:(t,e,n)=>{var i=n(7705)((function(t){return t[1]}));i.push([t.id,'\n.header {\n\tdisplay: grid;\n\tgrid-template-columns: 40px 3fr 40px;\n\talign-items: center;\n\tjustify-items: center;\n\tmin-height: 44px;\n}\n.logo {\n\tfont-weight: bold;\n\tfont-size: 32px;\n\tfont-family: "Palatino Linotype", Palatino, Palladio, "Century Schoolbook L", Georgia, serif;\n\ttext-align: center;\n}\n.icon {\n\twidth: 24px;\n\theight: 24px;\n}\n.icon-sm {\n\twidth: 16px;\n\theight: 16px;\n}\n.banner {\n\tmin-height: 200px;\n\tbackground-image: url(https://source.unsplash.com/Kwdp-0pok-I/400x250);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n.item,\n.cart-item {\n\tdisplay: flex;\n\tgrid-gap: 20px;\n\tpadding: 20px 0;\n}\n.item-title,\n.item-price,\n.item-description {\n\tmargin-bottom: 16px;\n}\n.item .item-description {\n\tdisplay: -webkit-box;\n\tmargin: 0;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.item-preview {\n\tflex: 0 0 auto;\n\twidth: 96px;\n\theight: 96px;\n\toverflow: hidden;\n\tborder-radius: var(--radii-default, 16px);\n}\n.detail-image {\n\theight: 250px;\n}\n.option {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 44px;\n}\n.cart-item {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgrid-gap: 20px;\n\tjustify-content: space-between;\n\tpadding: 20px 0;\n}\n.cart-item .item-title {\n\tmargin: 0;\n}\n.cart-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 3;\n\tgrid-gap: 30px;\n\talign-content: space-between;\n\theight: 84px;\n}\n.cart-text,\n.cart-controls {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.cart-text {\n\talign-items: center;\n}\n.cart-media {\n\torder: 1;\n\twidth: 84px;\n\theight: 84px;\n\toverflow: hidden;\n\tborder-radius: var(--radii-default, 16px);\n}\n.row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tline-height: 1.5;\n}\n.row .side-label {\n\ttext-align: right;\n}\n\n',""]),t.exports=i},937:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>T});var i=n(2698),a=n.n(i),s=n(3810),o=n.n(s),r=n(9893),l=n.n(r),c=n(2598),d=n.n(c),p=n(648),v=n(990),m=n(900),u=n(7842),x=n(9795),_=n(1855),h=n(8457),f=n(5019),g=n(4949),b=n(5539),y=n(2982),C=n(4416),w=n(8415);const k={components:{MenuIcon:a(),ShoppingBagIcon:o(),XIcon:l(),Trash:d(),MTheme:p.qo,MText:v.H,MDivider:m.j,MImage:u.F,MStepper:x.f,MContainer:_.U,MRadio:h.H,MCheckbox:f._,MInput:g.z,MButton:b.G,MTextButton:y.j,MChoice:C.g,MChoiceOption:C.c,MInlineActionBar:w.pE,MActionBarButton:w.n5},data:()=>({categories:["Coffee","Tea","Pastries"],items:[{id:1,name:"Americano",description:"Italian espresso gets the American treatment; hot water fills the cup for a rich alternative to drip coffee.",photo:"https://source.unsplash.com/900x600/?coffee",categories:["Coffee"]},{id:2,name:"Holiday Spice Latte",description:"A returning favorite, our Holiday Spice Latte mingles holiday baking spices like cinnamon, ginger, cloves, and nutmeg with hand-pulled espresso and freshly steamed milk.",photo:"https://source.unsplash.com/900x600/?latte",categories:["Coffee"]},{id:3,name:"Cappuccino",description:"The essence of handcrafting. Our rich espresso is artfully marbled with freshly micro-foamed milk.",photo:"https://source.unsplash.com/900x600/?cappuccino",categories:["Coffee"]}],size:"sm",selected:"choice-1",quantity:1,nestedThemeProfile:"primary-bold"}),methods:{categoryItems(t){return this.items.filter((e=>e.categories.includes(t)))}}};n(3881);var z=n(2797),$=n.n(z);const T=(0,n(1900).Z)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Preview},[n("div",{class:t.$s.Canvas},[n("div",{class:t.$s.Notch}),t._v(" "),n("div",{class:t.$s.Page},[n("div",{class:t.$s.Section},[n("div",{staticClass:"header"},[n("menu-icon",{staticClass:"icon"}),t._v(" "),n("span",{staticClass:"logo"},[t._v("Kafo")]),t._v(" "),n("shopping-bag-icon",{staticClass:"icon"})],1)]),t._v(" "),n("m-theme",{class:t.$s.Section,attrs:{profile:t.nestedThemeProfile}},[t._v('\n\t\t\t\tTesting nested themes, this is using a defined profile called "primary-bold".\n\t\t\t')]),t._v(" "),t._l(t.categories,(function(e){return n("div",{key:e,class:t.$s.Section},[n("m-text",{attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")]),t._v(" "),t._l(t.categoryItems(e),(function(e){return[n("div",{key:e.name,staticClass:"item"},[n("div",{staticClass:"item-details"},[n("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:0}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"item-description",attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.description)+"\n\t\t\t\t\t\t\t")])],1),t._v(" "),n("m-image",{staticClass:"item-preview",attrs:{src:e.photo}})],1),t._v(" "),n("m-divider",{key:e.id})]}))],2)})),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tMenu\n\t\t\t\t")])],1)],2)]),t._v(" "),n("div",{class:t.$s.Canvas},[n("div",{class:t.$s.Notch}),t._v(" "),n("div",{class:t.$s.Page},[n("m-image",{staticClass:"detail-image",attrs:{src:"https://source.unsplash.com/900x600/?cappuccino"}}),t._v(" "),n("div",{class:t.$s.Section},[n("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:2}},[t._v("\n\t\t\t\t\tCappuccino\n\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"item-price",attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\t$4.00\n\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"item-description",attrs:{size:0}},[t._v("\n\t\t\t\t\tThe essence of handcrafting. Our rich espresso is artfully\n\t\t\t\t\tmarbled with freshly micro-foamed milk.\n\t\t\t\t")]),t._v(" "),n("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1),t._v(" "),n("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[n("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tSize\n\t\t\t\t\t")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"option"},[n("m-radio",{attrs:{value:"sm"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[t._v("\n\t\t\t\t\t\tSmall\n\t\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$3.00\n\t\t\t\t\t")])],1),t._v(" "),n("m-divider"),t._v(" "),n("div",{staticClass:"option"},[n("m-radio",{attrs:{value:"md"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[t._v("\n\t\t\t\t\t\tMedium\n\t\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$3.50\n\t\t\t\t\t")])],1),t._v(" "),n("m-divider"),t._v(" "),n("div",{staticClass:"option"},[n("m-radio",{attrs:{value:"lg"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[t._v("\n\t\t\t\t\t\tLarge\n\t\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t$4.00\n\t\t\t\t\t")])],1)],1),t._v(" "),n("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[n("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tModifiers\n\t\t\t\t\t")])]},proxy:!0},{key:"required-label",fn:function(){return[t._v("\n\t\t\t\t\tOptional\n\t\t\t\t")]},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"option"},[n("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Cream\n\t\t\t\t\t")])],1),t._v(" "),n("m-divider"),t._v(" "),n("div",{staticClass:"option"},[n("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Sugar\n\t\t\t\t\t")])],1),t._v(" "),n("m-divider"),t._v(" "),n("div",{staticClass:"option"},[n("m-checkbox",[t._v("\n\t\t\t\t\t\tAdd Cinnamon\n\t\t\t\t\t")])],1)],1),t._v(" "),n("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[n("m-text",{attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\tNotes\n\t\t\t\t\t")])]},proxy:!0},{key:"required-label",fn:function(){return[t._v("\n\t\t\t\t\tOptional\n\t\t\t\t")]},proxy:!0}])},[t._v(" "),t._v(" "),n("m-input",{attrs:{variant:"outline",placeholder:"Details"}})],1),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[n("x-icon",{staticClass:"icon"})],1),t._v(" "),n("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tAdd to Order\n\t\t\t\t")])],1)],1)]),t._v(" "),n("div",{class:t.$s.Canvas},[n("div",{class:t.$s.Notch}),t._v(" "),n("div",{class:t.$s.Page},[n("div",{class:t.$s.Section},[n("div",{staticClass:"header"},[n("menu-icon",{staticClass:"icon"}),t._v(" "),n("span",{staticClass:"logo"},[t._v("Kafo")]),t._v(" "),n("shopping-bag-icon",{staticClass:"icon"})],1)]),t._v(" "),n("div",{class:[t.$s.Section,t.$s.Cart]},[n("m-text",{attrs:{pattern:"title",size:1}},[t._v("\n\t\t\t\t\tShopping Cart\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"cart-item"},[n("div",{staticClass:"cart-content"},[n("div",{staticClass:"cart-text"},[n("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\t\t\tHoliday Spice Latte\n\t\t\t\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"cart-price",attrs:{size:-1,element:"span"}},[t._v("\n\t\t\t\t\t\t\t\t$6.00\n\t\t\t\t\t\t\t")])],1),t._v(" "),n("div",{staticClass:"cart-controls"},[n("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),n("m-text-button",[n("trash",{staticClass:"icon-sm"})],1)],1)]),t._v(" "),n("m-image",{staticClass:"cart-media",attrs:{src:"https://source.unsplash.com/900x600/?latte"}})],1),t._v(" "),n("m-divider"),t._v(" "),n("div",{staticClass:"cart-item"},[n("div",{staticClass:"cart-content"},[n("div",{staticClass:"cart-text"},[n("m-text",{staticClass:"item-title",attrs:{pattern:"title",size:-1}},[t._v("\n\t\t\t\t\t\t\t\tBlonde Latte\n\t\t\t\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"cart-price",attrs:{size:-1,element:"span"}},[t._v("\n\t\t\t\t\t\t\t\t$5.00\n\t\t\t\t\t\t\t")])],1),t._v(" "),n("div",{staticClass:"cart-controls"},[n("m-stepper",{attrs:{min:"1",max:"10"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),n("m-text-button",[n("trash",{staticClass:"icon-sm"})],1)],1)]),t._v(" "),n("m-image",{staticClass:"cart-media",attrs:{src:"https://source.unsplash.com/900x600/?latte"}})],1),t._v(" "),n("m-button",{attrs:{variant:"secondary","full-width":""}},[t._v("\n\t\t\t\t\tAdd more items\n\t\t\t\t")]),t._v(" "),n("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),n("m-text",{attrs:{pattern:"title",size:0}},[t._v("\n\t\t\t\t\tAdd a tip\n\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t100% of the tip goes to the kitchen\n\t\t\t\t")]),t._v(" "),n("m-choice",{staticStyle:{"font-size":"12px","line-height":"1.2"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("m-choice-option",{attrs:{value:"choice-1"}},[n("strong",[t._v("10%")]),n("br"),t._v("\n\t\t\t\t\t\t$1.00\n\t\t\t\t\t")]),t._v(" "),n("m-choice-option",{attrs:{value:"choice-2"}},[n("strong",[t._v("15%")]),n("br"),t._v("\n\t\t\t\t\t\t$3.00\n\t\t\t\t\t")]),t._v(" "),n("m-choice-option",{attrs:{value:"choice-3"}},[n("strong",[t._v("20%")]),n("br"),t._v("\n\t\t\t\t\t\t$5.00\n\t\t\t\t\t")]),t._v(" "),n("m-choice-option",{attrs:{value:"choice-4"}},[t._v("\n\t\t\t\t\t\tOther\n\t\t\t\t\t")])],1),t._v(" "),n("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),n("m-input",{attrs:{placeholder:"Add gift card or coupon",variant:"outline"}}),t._v(" "),n("m-divider",{staticStyle:{margin:"24px 0"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\tTotal will be calculated at checkout\n\t\t\t\t")]),t._v(" "),n("m-divider",{staticStyle:{margin:"24px 0"}})],1),t._v(" "),n("m-inline-action-bar",[n("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\t\tCheckout\n\t\t\t\t")])],1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("strong",[t._v("Subtotal (2 items)")]),t._v(" "),n("span",{staticClass:"side-label"},[n("strong",[t._v("$14.00")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._v("\n\t\t\t\t\tTaxes\n\t\t\t\t\t"),n("span",{staticClass:"side-label"},[t._v("$1.56")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._v("\n\t\t\t\t\tTip (10%)\n\t\t\t\t\t"),n("span",{staticClass:"side-label"},[t._v("$1.36")])])}],!1,(function(t){this.$s=$().locals||$()}),null,null).exports},2797:(t,e,n)=>{var i=n(8433);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("ed3c5e92",i,!0,{})},5713:(t,e,n)=>{var i=n(4298);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("49bbe38a",i,!0,{})},3881:(t,e,n)=>{var i=n(8900);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("082aca10",i,!0,{})}}]);