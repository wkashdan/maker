!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Loading"),require("../../components/ProgressBar"),require("@square/maker-icons/Plus"),require("@square/maker-icons/X"));else if("function"==typeof define&&define.amd)define(["../../components/Loading","../../components/ProgressBar","@square/maker-icons/Plus","@square/maker-icons/X"],t);else{var r="object"==typeof exports?t(require("../../components/Loading"),require("../../components/ProgressBar"),require("@square/maker-icons/Plus"),require("@square/maker-icons/X")):t(e["../../components/Loading"],e["../../components/ProgressBar"],e["@square/maker-icons/Plus"],e["@square/maker-icons/X"]);for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(this,(function(e,t,r,s){return function(){"use strict";var n={175:function(t){t.exports=e},984:function(e){e.exports=t},597:function(e){e.exports=r},438:function(e){e.exports=s}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){o.r(i),o.d(i,{IMAGE_SELECTOR_STATUSES:function(){return u},MImageUploader:function(){return $}});var e=o(597),t={name:"MImagePicker",components:{PlusIcon:o.n(e)()},methods:{selectImages(e){this.$emit("selectImages",[...e.target.files])}}},r={ImagePickerInputContainer:"📚0-0-0-semantic-releasepQAz9",ImagePickerInputIcon:"📚0-0-0-semantic-releasezAfnU",ImagePickerInput:"📚0-0-0-semantic-releasepeBvR"};function s(e,t,r,s,n,a,o,i){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=i?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var m=l.render;l.render=function(e,t){return c.call(t),m(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}var n=s(t,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$s.ImagePickerInputContainer,on:{click:function(t){return e.$refs.input.click()}}},[r("input",e._b({ref:"input",class:e.$s.ImagePickerInput,attrs:{type:"file"},on:{change:e.selectImages}},"input",e.$attrs,!1)),e._v(" "),r("plus-icon",{class:e.$s.ImagePickerInputIcon,attrs:{inline:""}})],1)}),[],!1,(function(e){this.$s=r.locals||r}),null,null).exports,a=o(175),c=o(984),l=o(438),m=o.n(l);const u={PENDING:"pending",ERROR:"error",COMPLETE:"complete"},g=1,p=0;var d={name:"MImageSelection",components:{Loading:a.MLoading,ProgressBar:c.MProgressBar,XIcon:m()},props:{image:{type:Object,required:!0}},computed:{bgImageStyle(){const e=`url("${this.image.url}")`;return{backgroundImage:this.showProgressBar?`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${e}`:`linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), ${e}`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}},showProgressBar(){return this.image.progress<100},progressContainerStyle(){return{opacity:this.showProgressBar?g:p}},progressStyle(){return{width:`${this.image.progress}%`}},isUploading(){return this.image.status===u.PENDING},hasError(){return this.image.status===u.ERROR}}},f={ImageSelectionContainer:"📚0-0-0-semantic-release_plKd",ImageSelectionLoaderContainer:"📚0-0-0-semantic-releaseJD5kO",ImageSelectionContainerError:"📚0-0-0-semantic-release_KEpe",ImageSelectionRemoveButton:"📚0-0-0-semantic-releaseLjdan",ImageSelectionRemoveIcon:"📚0-0-0-semantic-releaseqSHso",ImageSelectionProgressContainer:"📚0-0-0-semantic-releasettMpu"};var I=s(d,(function(){var e,t=this,r=t.$createElement,s=t._self._c||r;return s("div",{class:(e={},e[t.$s.ImageSelectionContainer]=!0,e[t.$s.ImageSelectionContainerError]=t.hasError,e),style:t.bgImageStyle,attrs:{role:"img"}},[t.isUploading?s("div",{class:t.$s.ImageSelectionLoaderContainer},[s("loading",{class:t.$s.ImageSelectionLoader})],1):t._e(),t._v(" "),s("progress-bar",{class:t.$s.ImageSelectionProgressContainer,style:t.progressContainerStyle,attrs:{progress:t.image.progress,size:"xsmall"}}),t._v(" "),t.isUploading?t._e():s("button",{class:t.$s.ImageSelectionRemoveButton,attrs:{type:"button"},on:{click:function(e){return t.$emit("removeImage",t.image.id)}}},[s("x-icon",{class:t.$s.ImageSelectionRemoveIcon,attrs:{inline:""}})],1)],1)}),[],!1,(function(e){this.$s=f.locals||f}),null,null).exports;const h=100;var v={ImageUploaderContainer:"📚0-0-0-semantic-release_H4Zl",ImageUploaderItem:"📚0-0-0-semantic-releaseEt600"};var $=s({name:"MImageUploader",components:{ImagePicker:n,ImageSelection:I},props:{images:{type:Array,default:()=>[]},uploadHandlerFn:{type:Function,default:()=>{}},maxImages:{type:Number,default:()=>{}},maxSize:{type:Number,default:()=>{}},accept:{type:String,default:()=>"image/*",validator:e=>e.startsWith("image/")}},data:()=>({nextID:0}),computed:{canUploadImage(){return void 0===this.maxImages||this.images.length<this.maxImages},remainingImagesCount(){return this.canUploadImage?this.maxImages-this.images.length:0},canUploadMultiple(){return!this.maxImages||this.maxImages>1}},methods:{selectImages(e){if(!this.canUploadImage)return;const t=e.length>this.remainingImagesCount?e.slice(0,this.remainingImagesCount):e,r=this.formatImages(t);this.$emit("input",[...this.images,...r]),r.forEach((e=>this.handleImageUpload(e)))},formatImages(e){const t=e.map((e=>(this.nextID+=1,{id:this.nextID,file:e,status:u.PENDING,progress:0})));return t.forEach((e=>this.buildImageURL(e))),t},async handleImageUpload(e){if(this.maxSize&&e.file.size>this.maxSize)return this.$set(e,"progress",h),this.$set(e,"status",u.ERROR),void this.$set(e,"fileTooLarge",!0);if(this.$set(e,"fileTooLarge",!1),!this.uploadHandlerFn)return this.$set(e,"progress",h),void this.$set(e,"status",u.COMPLETE);try{const t=await this.uploadHandlerFn({image:e.file,uploadProgressHandler:t=>this.$set(e,"progress",t)});this.$set(e,"progress",h),this.$set(e,"apiResponse",t),this.$set(e,"status",u.COMPLETE)}catch(t){this.$set(e,"progress",h),this.$set(e,"apiError",t),this.$set(e,"status",u.ERROR)}},removeImage(e){this.$emit("input",this.images.filter((({id:t})=>t!==e)))},async buildImageURL(e){const t=await new Promise((t=>{const r=new FileReader;r.onloadend=()=>t(r.result),r.onerror=()=>t(""),r.readAsDataURL(e.file)}));this.$set(e,"url",t)}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$s.ImageUploaderContainer},[e.canUploadImage?r("image-picker",{class:e.$s.ImageUploaderItem,attrs:{multiple:e.canUploadMultiple,accept:e.accept},on:{selectImages:e.selectImages}}):e._e(),e._v(" "),e._l(e.images,(function(t){return r("image-selection",{key:t.id,class:e.$s.ImageUploaderItem,attrs:{image:t},on:{removeImage:e.removeImage}})}))],2)}),[],!1,(function(e){this.$s=v.locals||v}),null,null).exports}(),i}()}));
//# sourceMappingURL=script.js.map