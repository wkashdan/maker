(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{290:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o,t,e){if(e=e||{},"xDays"===o&&e.addSuffix&&t<=2){return e.comparison>0?{1:"מחר",2:"מחרתיים"}[t]:{1:"אתמול",2:"שלשום"}[t]}var r;r="string"==typeof n[o]?n[o]:1===t?n[o].one:2===t?n[o].two:n[o].other.replace("{{count}}",t);if(e.addSuffix)return e.comparison>0?"בעוד "+r:"לפני "+r;return r};var n={lessThanXSeconds:{one:"פחות משנייה",two:"פחות משתי שניות",other:"פחות מ־{{count}} שניות"},xSeconds:{one:"שנייה",two:"שתי שניות",other:"{{count}} שניות"},halfAMinute:"חצי דקה",lessThanXMinutes:{one:"פחות מדקה",two:"פחות משתי דקות",other:"פחות מ־{{count}} דקות"},xMinutes:{one:"דקה",two:"שתי דקות",other:"{{count}} דקות"},aboutXHours:{one:"כשעה",two:"כשעתיים",other:"כ־{{count}} שעות"},xHours:{one:"שעה",two:"שעתיים",other:"{{count}} שעות"},xDays:{one:"יום",two:"יומיים",other:"{{count}} ימים"},aboutXWeeks:{one:"כשבוע",two:"כשבועיים",other:"כ־{{count}} שבועות"},xWeeks:{one:"שבוע",two:"שבועיים",other:"{{count}} שבועות"},aboutXMonths:{one:"כחודש",two:"כחודשיים",other:"כ־{{count}} חודשים"},xMonths:{one:"חודש",two:"חודשיים",other:"{{count}} חודשים"},aboutXYears:{one:"כשנה",two:"כשנתיים",other:"כ־{{count}} שנים"},xYears:{one:"שנה",two:"שנתיים",other:"{{count}} שנים"},overXYears:{one:"יותר משנה",two:"יותר משנתיים",other:"יותר מ־{{count}} שנים"},almostXYears:{one:"כמעט שנה",two:"כמעט שנתיים",other:"כמעט {{count}} שנים"}};o.exports=t.default}}]);