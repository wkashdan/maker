(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{326:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){var n=l[e];if("function"==typeof n)return n(t,r,a);return n};var a,n=(a=r(59))&&a.__esModule?a:{default:a};var u=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function o(e){return"'"+u[e]+" alle' p"}var l={lastWeek:function(e,t,r){var a=e.getUTCDay();return(0,n.default)(e,t,r)?o(a):function(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+u[e]+" scorso alle' p"}}(a)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,r){var a=e.getUTCDay();return(0,n.default)(e,t,r)?o(a):function(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+u[e]+" prossimo alle' p"}}(a)},other:"P"};e.exports=t.default},59:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){(0,n.default)(2,arguments);var u=(0,a.default)(e,r),o=(0,a.default)(t,r);return u.getTime()===o.getTime()};var a=u(r(62)),n=u(r(58));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);