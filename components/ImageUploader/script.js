!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Button"),require("../../components/Icon"),require("../../components/Loading"),require("../../components/ProgressBar"),require("lodash/escapeRegExp"),require("lodash/isEqual"),require("lodash/partition"),require("lodash/uniqWith"));else if("function"==typeof define&&define.amd)define(["../../components/Button","../../components/Icon","../../components/Loading","../../components/ProgressBar","lodash/escapeRegExp","lodash/isEqual","lodash/partition","lodash/uniqWith"],t);else{var a="object"==typeof exports?t(require("../../components/Button"),require("../../components/Icon"),require("../../components/Loading"),require("../../components/ProgressBar"),require("lodash/escapeRegExp"),require("lodash/isEqual"),require("lodash/partition"),require("lodash/uniqWith")):t(e["../../components/Button"],e["../../components/Icon"],e["../../components/Loading"],e["../../components/ProgressBar"],e["lodash/escapeRegExp"],e["lodash/isEqual"],e["lodash/partition"],e["lodash/uniqWith"]);for(var s in a)("object"==typeof exports?exports:e)[s]=a[s]}}(this,(function(e,t,a,s,r,i,n,o){return(()=>{"use strict";var l={914:t=>{t.exports=e},20:e=>{e.exports=t},175:e=>{e.exports=a},984:e=>{e.exports=s},381:e=>{e.exports=r},414:e=>{e.exports=i},532:e=>{e.exports=n},424:e=>{e.exports=o}},m={};function g(e){var t=m[e];if(void 0!==t)return t.exports;var a=m[e]={exports:{}};return l[e](a,a.exports,g),a.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var a in t)g.o(t,a)&&!g.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{g.r(c),g.d(c,{IMAGE_SELECTOR_STATUSES:()=>x,MImageUploader:()=>R});var e=g(532),t=g.n(e),a=g(381),s=g.n(a),r=g(424),i=g.n(r),n=g(414),o=g.n(n),l=g(20);const m=async(e,t=[])=>{const a=await(e=>new Promise(((t,a)=>{e.readEntries(t,a)})))(e);return 0===a.length?t:m(e,t.concat(a))};async function p(e){if(e)try{if(e.isFile)return await(e=>new Promise(((t,a)=>{e.file(t,a)})))(e);if(e.isDirectory){const t=await m(e.createReader());return Promise.all(t.map((e=>p(e))))}}catch{return}}const d={components:{MIcon:l.MIcon},data:()=>({dragged:!1}),methods:{addImages(e){this.emitFiles([...e.target.files])},setDragged(e){this.dragged=e},async handleDrop(e){if(this.setDragged(!1),e.dataTransfer.items){const t=await Promise.all([...e.dataTransfer.items].map((e=>p((e=>e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry?e.webkitGetAsEntry():void 0)(e))))),a=await Promise.all(t.filter((e=>Boolean(e))).flat(1/0).map((e=>e.arrayBuffer().then((t=>({file:e,buffer:t})))))),s=i()(a,o()).map((e=>e.file));this.validateAndEmit(s)}else this.validateAndEmit(e.dataTransfer.files)},validateFile(e){const{accept:t}=this.$attrs;if(!t)return!0;const a=e.type;return t.split(",").map((e=>e.trim())).some((t=>{if("."===t[0])return new RegExp("".concat(s()(t),"$"),"i").test(e.name);return t.match(/^.+\/.+$/)?"*/*"===t||new RegExp(s()(t).replace(/\\\*/g,".+")).test(a):t===a}))},validateAndEmit(e){const[a]=t()(e,this.validateFile);this.emitFiles(a)},emitFiles(e){this.$emit("image-picker:add-images",e)}}},u={ImagePickerInputContainer:"📚0-0-0-semantic-releasepQAz9",isDragged:"📚0-0-0-semantic-releaseUj9Zx",ImagePickerInput:"📚0-0-0-semantic-releasepeBvR"};function h(e,t,a,s,r,i,n,o){var l,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=a,m._compiled=!0),s&&(m.functional=!0),i&&(m._scopeId="data-v-"+i),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},m._ssrRegister=l):r&&(l=o?function(){r.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(m.functional){m._injectStyles=l;var g=m.render;m.render=function(e,t){return l.call(t),g(e,t)}}else{var c=m.beforeCreate;m.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:m}}const f=h(d,(function(){var e,t=this,a=t.$createElement,s=t._self._c||a;return s("div",{class:(e={},e[t.$s.ImagePickerInputContainer]=!0,e[t.$s.isDragged]=t.dragged,e),attrs:{role:"button",tabindex:"0"},on:{click:function(e){return t.$refs.input.click()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.$refs.input.click())},drop:function(e){return e.preventDefault(),t.handleDrop(e)},dragenter:function(e){return e.preventDefault(),t.setDragged(!0)},dragover:function(e){return e.preventDefault(),t.setDragged(!0)},dragleave:function(e){return e.preventDefault(),t.setDragged(!1)}}},[s("input",t._b({ref:"input",class:t.$s.ImagePickerInput,attrs:{type:"file"},on:{change:t.addImages}},"input",t.$attrs,!1)),t._v(" "),t.dragged?s("m-icon",{attrs:{name:"arrowUp",size:"large"}}):s("m-icon",{attrs:{name:"plus",size:"medium"}})],1)}),[],!1,(function(e){this.$s=u.locals||u}),null,null).exports;var I=g(914),v=g(175),y=g(984);const E={components:{MButton:I.MButton,MLoading:v.MLoading,MProgressBar:y.MProgressBar,MIcon:l.MIcon},props:{progress:{type:Number,default:0},url:{type:String,default:""},isUploading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},computed:{imageDisplayStyles(){return{backgroundImage:'url("'.concat(this.url,'")'),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}}},$={ImageSelectionContainer:"📚0-0-0-semantic-release_plKd",ImageDisplay:"📚0-0-0-semantic-releaseXWUfc",ImageFilter:"📚0-0-0-semantic-releaseKgIpM",ImageSelectionLoaderContainer:"📚0-0-0-semantic-releaseJD5kO",ImageIcon:"📚0-0-0-semantic-releaseWwuJY",IsLoading:"📚0-0-0-semantic-releaseVghL9",ImageSelectionContainerError:"📚0-0-0-semantic-release_KEpe",TopRight:"📚0-0-0-semantic-releaseX6JMj",ImageSelectionRemoveIcon:"📚0-0-0-semantic-releaseqSHso",ImageSelectionProgressContainer:"📚0-0-0-semantic-releasettMpu"};const _=h(E,(function(){var e,t,a,s=this,r=s.$createElement,i=s._self._c||r;return i("div",{class:(e={},e[s.$s.ImageSelectionContainer]=!0,e[s.$s.ImageSelectionContainerError]=s.isError,e),attrs:{role:"img"}},[i("div",{class:s.$s.ImageDisplay,style:s.imageDisplayStyles}),s._v(" "),i("div",{class:(t={},t[s.$s.ImageFilter]=!0,t[s.$s.IsLoading]=s.isUploading,t)}),s._v(" "),s.isUploading?i("div",{class:s.$s.ImageSelectionLoaderContainer},[i("m-loading",{class:s.$s.ImageSelectionLoader})],1):s._e(),s._v(" "),i("m-progress-bar",{class:(a={},a[s.$s.ImageSelectionProgressContainer]=!0,a[s.$s.IsLoading]=s.isUploading,a),attrs:{progress:s.progress,size:"xsmall"}}),s._v(" "),s.isUploading?s._e():i("m-button",{class:s.$s.TopRight,attrs:{size:"small",color:"#ffffff"},on:{click:function(e){return s.$emit("removeImage")}}},[i("m-icon",{class:s.$s.ImageSelectionRemoveIcon,attrs:{name:"close"}})],1)],1)}),[],!1,(function(e){this.$s=$.locals||$}),null,null).exports,x={UPLOADING:"uploading",ERROR:"error",COMPLETE:"complete"},S={ImageUploaderContainer:"📚0-0-0-semantic-release_H4Zl",ImageUploaderItem:"📚0-0-0-semantic-releaseEt600"};const R=h({name:"MImageUploader",components:{ImagePicker:f,ImageSelection:_},props:{uploadHandler:{type:Function,default:void 0},maxImages:{type:Number,default:void 0},maxSize:{type:Number,default:void 0},accept:{type:String,default:"image/*",validator:e=>e.startsWith("image/")}},data:()=>({images:[],nextID:0}),computed:{canUploadImage(){return void 0===this.maxImages||this.images.length<this.maxImages},remainingImagesCount(){return this.canUploadImage?this.maxImages-this.images.length:0},canUploadMultiple(){return!this.maxImages||this.maxImages>1}},watch:{images:{deep:!0,handler(){this.updateImages()},immediate:!0}},methods:{async addImages(e){if(!this.canUploadImage)return;const t=e.length>this.remainingImagesCount?e.slice(0,this.remainingImagesCount):e,a=await this.formatImages(t);this.images=[...this.images,...a],a.forEach((e=>this.handleImageUpload(e)))},async formatImages(e){const t=e.map((e=>(this.nextID+=1,{id:this.nextID,file:e,status:x.UPLOADING,progress:0})));return this.buildImageURLs(t),t},buildImageURLs(e){e.forEach((e=>{try{this.$set(e,"url",window.URL.createObjectURL(e.file))}catch(t){this.$set(e,"fileReadError",!0),this.setImageError(e,t)}}))},async handleImageUpload(e){if(this.validateImageSize(e),this.isImageValid(e))if(this.uploadHandler)try{const t=await this.uploadHandler({imageFile:e.file,setImageProgress:t=>this.setImageProgress(e,t)});this.setImageComplete(e,t)}catch(t){this.setImageFailed(e,t)}else this.setImageComplete(e);else this.setImageFailed(e)},removeImage(e){this.images=this.images.filter((({id:t})=>t!==e))},validateImageSize(e){this.maxSize&&e.file.size>this.maxSize&&this.$set(e,"fileTooLarge",!0)},isImageValid:e=>!e.fileTooLarge&&!e.fileReadError,setImageComplete(e,t){t&&this.setImageApiResponse(e,t),this.setImageStatus(e,x.COMPLETE),this.setImageProgress(e,100)},setImageFailed(e,t){t&&this.setImageError(e,t),this.setImageStatus(e,x.ERROR),this.setImageProgress(e,100)},setImageStatus(e,t){this.$set(e,"status",t)},setImageProgress(e,t){this.$set(e,"progress",t)},setImageApiResponse(e,t){this.$set(e,"apiResponse",t)},setImageError(e,t){this.$set(e,"error",t)},imagesForStatus(e){return this.images.filter((t=>t.status===e))},sanitizeOutputImages:e=>e.map((e=>({id:e.id,status:e.status,file:e.file,apiResponse:e.apiResponse,error:e.error,fileTooLarge:e.fileTooLarge,fileReadError:e.fileReadError}))),updateImages(){this.$emit("image-uploader:change",this.sanitizeOutputImages(this.images)),this.$emit("image-uploader:uploading",this.sanitizeOutputImages(this.imagesForStatus(x.UPLOADING))),this.$emit("image-uploader:error",this.sanitizeOutputImages(this.imagesForStatus(x.ERROR))),this.$emit("image-uploader:complete",this.sanitizeOutputImages(this.imagesForStatus(x.COMPLETE)))},isUploadingImage:e=>e.status===x.UPLOADING,isImageWithError:e=>e.status===x.ERROR}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$s.ImageUploaderContainer},[e.canUploadImage?a("image-picker",{class:e.$s.ImageUploaderItem,attrs:{multiple:e.canUploadMultiple,accept:e.accept},on:{"image-picker:add-images":e.addImages}}):e._e(),e._v(" "),e._l(e.images,(function(t){return a("image-selection",{key:t.id,class:e.$s.ImageUploaderItem,attrs:{progress:t.progress,url:t.url,"is-uploading":e.isUploadingImage(t),"is-error":e.isImageWithError(t)},on:{removeImage:function(a){return e.removeImage(t.id)}}})}))],2)}),[],!1,(function(e){this.$s=S.locals||S}),null,null).exports})(),c})()}));
//# sourceMappingURL=script.js.map