(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2022],{51315:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e<0?"-":"",u=Math.abs(e).toString();for(;u.length<t;)u="0"+u;return r+u},e.exports=t.default},48150:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},78594:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},7340:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(2,arguments);var r=(0,n.default)(e),o=(0,u.default)(t);if(isNaN(o))return new Date(NaN);if(!o)return r;return r.setDate(r.getDate()+o),r};var u=o(r(78594)),n=o(r(30853)),a=o(r(48150));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},94456:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(2,arguments);var r=(0,n.default)(e),o=(0,u.default)(t);if(isNaN(o))return new Date(NaN);if(!o)return r;var f=r.getDate(),l=new Date(r.getTime());l.setMonth(r.getMonth()+o+1,0);var i=l.getDate();return f>=i?l:(r.setFullYear(l.getFullYear(),l.getMonth(),f),r)};var u=o(r(78594)),n=o(r(30853)),a=o(r(48150));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},92426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=(0,u.default)(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t};var u=a(r(30853)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},98283:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var r=(0,u.default)(e);if(!(0,n.default)(r))throw new RangeError("Invalid time value");var o=t||{},f=null==o.format?"extended":String(o.format),l=null==o.representation?"complete":String(o.representation);if("extended"!==f&&"basic"!==f)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==l&&"time"!==l&&"complete"!==l)throw new RangeError("representation must be 'date', 'time', or 'complete'");var i="",d="",s="extended"===f?"-":"",c="extended"===f?":":"";if("time"!==l){var p=(0,a.default)(r.getDate(),2),v=(0,a.default)(r.getMonth()+1,2),g=(0,a.default)(r.getFullYear(),4);i="".concat(g).concat(s).concat(v).concat(s).concat(p)}if("date"!==l){var x=r.getTimezoneOffset();if(0!==x){var _=Math.abs(x),m=(0,a.default)(Math.floor(_/60),2),b=(0,a.default)(_%60,2),D=x<0?"+":"-";d="".concat(D).concat(m,":").concat(b)}else d="Z";var h=(0,a.default)(r.getHours(),2),w=(0,a.default)(r.getMinutes(),2),N=(0,a.default)(r.getSeconds(),2),M=""===i?"":"T",y=[h,w,N].join(c);i="".concat(i).concat(M).concat(y).concat(d)}return i};var u=o(r(30853)),n=o(r(94687)),a=o(r(51315));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},25227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(2,arguments);var r=(0,u.default)(e),a=(0,u.default)(t);return r.getTime()===a.getTime()};var u=a(r(97451)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},20772:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(1,arguments),(0,u.default)(e,Date.now())};var u=a(r(25227)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},94687:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=(0,u.default)(e);return!isNaN(t)};var u=a(r(30853)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},58279:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(1,arguments);var r=t||{},a=null==r.additionalDigits?2:(0,u.default)(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,f=s(e);if(f.date){var l=c(f.date,a);o=p(l.restDateString,l.year)}if(isNaN(o)||!o)return new Date(NaN);var i,d=o.getTime(),v=0;if(f.time&&(v=g(f.time),isNaN(v)||null===v))return new Date(NaN);if(!f.timezone){var x=new Date(d+v),m=new Date(0);return m.setFullYear(x.getUTCFullYear(),x.getUTCMonth(),x.getUTCDate()),m.setHours(x.getUTCHours(),x.getUTCMinutes(),x.getUTCSeconds(),x.getUTCMilliseconds()),m}if(i=_(f.timezone),isNaN(i))return new Date(NaN);return new Date(d+v+i)};var u=a(r(78594)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}var o=36e5,f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,i=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e){var t,r={},u=e.split(f.dateTimeDelimiter);if(u.length>2)return r;if(/:/.test(u[0])?(r.date=null,t=u[0]):(r.date=u[0],t=u[1],f.timeZoneDelimiter.test(r.date)&&(r.date=e.split(f.timeZoneDelimiter)[0],t=e.substr(r.date.length,e.length))),t){var n=f.timezone.exec(t);n?(r.time=t.replace(n[1],""),r.timezone=n[1]):r.time=t}return r}function c(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),u=e.match(r);if(!u)return{year:null};var n=u[1]&&parseInt(u[1]),a=u[2]&&parseInt(u[2]);return{year:null==a?n:100*a,restDateString:e.slice((u[1]||u[2]).length)}}function p(e,t){if(null===t)return null;var r=e.match(l);if(!r)return null;var u=!!r[4],n=v(r[1]),a=v(r[2])-1,o=v(r[3]),f=v(r[4]),i=v(r[5])-1;if(u)return function(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}(0,f,i)?function(e,t,r){var u=new Date(0);u.setUTCFullYear(e,0,4);var n=u.getUTCDay()||7,a=7*(t-1)+r+1-n;return u.setUTCDate(u.getUTCDate()+a),u}(t,f,i):new Date(NaN);var d=new Date(0);return function(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(m[t]||(b(e)?29:28))}(t,a,o)&&function(e,t){return t>=1&&t<=(b(e)?366:365)}(t,n)?(d.setUTCFullYear(t,a,Math.max(n,o)),d):new Date(NaN)}function v(e){return e?parseInt(e):1}function g(e){var t=e.match(i);if(!t)return null;var r=x(t[1]),u=x(t[2]),n=x(t[3]);return function(e,t,r){if(24===e)return 0===t&&0===r;return r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}(r,u,n)?r*o+6e4*u+1e3*n:NaN}function x(e){return e&&parseFloat(e.replace(",","."))||0}function _(e){if("Z"===e)return 0;var t=e.match(d);if(!t)return 0;var r="+"===t[1]?-1:1,u=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?r*(u*o+6e4*n):NaN}var m=[31,null,31,30,31,30,31,31,30,31,30,31];function b(e){return e%400==0||e%4==0&&e%100}e.exports=t.default},97451:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=(0,u.default)(e);return t.setHours(0,0,0,0),t};var u=a(r(30853)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},27385:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=(0,u.default)(e);return t.setDate(1),t.setHours(0,0,0,0),t};var u=a(r(30853)),n=a(r(48150));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},35280:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(1,arguments);var r=t||{},o=r.locale,f=o&&o.options&&o.options.weekStartsOn,l=null==f?0:(0,n.default)(f),i=null==r.weekStartsOn?l:(0,n.default)(r.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,u.default)(e),s=d.getDay(),c=(s<i?7:0)+s-i;return d.setDate(d.getDate()-c),d.setHours(0,0,0,0),d};var u=o(r(30853)),n=o(r(78594)),a=o(r(48150));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},30853:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var u,n=(u=r(48150))&&u.__esModule?u:{default:u};e.exports=t.default},19258:e=>{e.exports=function(e,t){for(var r=-1,u=null==e?0:e.length,n=Array(u);++r<u;)n[r]=t(e[r],r,e);return n}},21205:e=>{e.exports=function(e,t,r,u){var n=-1,a=null==e?0:e.length;for(u&&a&&(r=e[++n]);++n<a;)r=t(r,e[n],n,e);return r}},88263:e=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},642:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},38257:(e,t,r)=>{var u=r(52773),n=r(19258),a=r(43670),o=r(34655),f=u?u.prototype:void 0,l=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return n(t,e)+"";if(o(t))return l?l.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},48014:(e,t,r)=>{var u=r(21205),n=r(64383),a=r(15208),o=RegExp("['’]","g");e.exports=function(e){return function(t){return u(a(n(t).replace(o,"")),e,"")}}},8303:(e,t,r)=>{var u=r(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=u},49952:e=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},46083:e=>{var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",o="\\d+",f="[\\u2700-\\u27bf]",l="["+r+"]",i="[^\\ud800-\\udfff"+n+o+t+r+u+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+u+"]",p="(?:"+l+"|"+i+")",v="(?:"+c+"|"+i+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",_="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?",b=m+_+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,s].join("|")+")"+m+_+")*"),D="(?:"+[f,d,s].join("|")+")"+b,h=RegExp([c+"?"+l+"+"+g+"(?="+[a,c,"$"].join("|")+")",v+"+"+x+"(?="+[a,c+p,"$"].join("|")+")",c+"?"+p+"+"+g,c+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,D].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},64383:(e,t,r)=>{var u=r(8303),n=r(72049),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(a,u).replace(o,"")}},34655:(e,t,r)=>{var u=r(1185),n=r(44939);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==u(e)}},95573:(e,t,r)=>{var u=r(48014)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=u},72049:(e,t,r)=>{var u=r(38257);e.exports=function(e){return null==e?"":u(e)}},15208:(e,t,r)=>{var u=r(88263),n=r(49952),a=r(72049),o=r(46083);e.exports=function(e,t,r){return e=a(e),void 0===(t=r?void 0:t)?n(e)?o(e):u(e):e.match(t)||[]}}}]);