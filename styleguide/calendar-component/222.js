(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{263:function(e,u,n){"use strict";function t(e){return e.replace(/sekuntia?/,"sekunnin")}function o(e){return e.replace(/minuuttia?/,"minuutin")}function i(e){return e.replace(/tuntia?/,"tunnin")}function r(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function a(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function s(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,u,n){n=n||{};var t=c[e],o=1===u?t.one:t.other.replace("{{count}}",u);if(n.addSuffix)return n.comparison>0?t.futureTense(o)+" kuluttua":o+" sitten";return o};var c={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:t},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:t},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:o},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:o},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:i},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:i},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(e){return e.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:r},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:a},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:a},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:s},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:s},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:s},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:s}};e.exports=u.default}}]);