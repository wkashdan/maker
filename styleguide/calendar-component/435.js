(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{478:function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(t(56)),r=n(t(57));function n(i){return i&&i.__esModule?i:{default:i}}var d={ordinalNumber:(0,e.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ب|ك)/i,wide:/^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^بۇرۇن/i,/^كىيىن/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^چ[1234]/i,wide:/^چارەك [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[يفمئامئ‍ئاسۆند]/i,abbreviated:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,wide:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^ا/i,/^م/i,/^ى‍/i,/^ى‍/i,/^ا‍/i,/^س/i,/^ۆ/i,/^ن/i,/^د/i],any:[/^يان/i,/^فېۋ/i,/^مار/i,/^ئاپ/i,/^ماي/i,/^ئىيۇن/i,/^ئىيول/i,/^ئاۋ/i,/^سىن/i,/^ئۆك/i,/^نوي/i,/^دىك/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[دسچپجشي]/i,short:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,abbreviated:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,wide:/^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,any:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ئە/i,pm:/^چ/i,midnight:/^ك/i,noon:/^چ/i,morning:/ئەتىگەن/i,afternoon:/چۈشتىن كىيىن/i,evening:/ئاخشىم/i,night:/كىچە/i}},defaultParseWidth:"any"})};a.default=d,i.exports=a.default}}]);