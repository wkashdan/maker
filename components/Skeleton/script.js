!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{MSkeletonBlock:()=>o,MSkeletonText:()=>m});const n={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(e){return this.$slots.default?this.$slots.default:e("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r={SkeletonBlock:"📚0-0-0-semantic-release_etLT",loading:"📚0-0-0-semantic-releaseJOsYT",pulsing:"📚0-0-0-semantic-releasesRbq0"};function i(e,t,n,r,i,o,s,a){var l,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=l):i&&(l=a?function(){i.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var c=f.render;f.render=function(e,t){return l.call(t),c(e,t)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:f}}const o=i(n,undefined,undefined,!1,(function(e){this.$s=r.locals||r}),null,null).exports;var s=Symbol();function a(e,t){e[s]||(e[s]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[s]||this.parentElement}}))}var l=function(e,t){var n=e.splice(0);t.append.apply(t,n),n.forEach((function(e){e[s]=void 0}))};function f(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[d]){var r=this[d].get(t);r&&(t=r[0])}t.before(e),a(e,this)}function c(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var n=this[d];if(n){var r=n.get(e);if(r)return l(r,e),n.delete(e),void(e[s]=void 0)}e.remove()}var d=Symbol(),u={insertBefore:f,removeChild:c},p=Symbol(),h={insertBefore:f,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[p],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[p]),n.forEach((function(e){return e.remove()}))},removeChild:c,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[p];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),a(e,this),this.frag.push(e)}};const v={directives:{frag:{inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,r=document.createComment("");e[p]=r,0===t.length&&t.push(r);var i=document.createDocumentFragment();i.append.apply(i,t),e.replaceWith(i),e.frag=t,function(e,t,n){e[d]||(e[d]=new Map,Object.assign(e,u)),e[d].set(t,n)}(n,e,t),a(e,n),t.forEach((function(t){return a(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var r=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,r))},get:function(){return""}}),Object.assign(e,h)},unbind:function(e){l(e.frag,e),e[p].remove()}}},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((e=>e.tag||e.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},g={SkeletonText:"📚0-0-0-semantic-release_QdYk",pulsing:"📚0-0-0-semantic-releaseHQVq0"};const m=i(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[e.loaded||e.children?[e._t("default")]:e._l(e.linesNum,(function(t){return n("div",e._g(e._b({key:"skeleton-text-"+t,class:e.$s.SkeletonText},"div",e.$attrs,!1),e.$listeners))}))],2)}),[],!1,(function(e){this.$s=g.locals||g}),null,null).exports;return t})()}));
//# sourceMappingURL=script.js.map