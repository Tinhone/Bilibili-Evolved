!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["live/auto-draw"]=e():t["live/auto-draw"]=e()}(self,(function(){return function(){"use strict";var t,e,n={156:function(t){t.exports=coreApis.observer},569:function(t){t.exports=coreApis.spinQuery}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var c=o[t]={exports:{}};return n[t](c,c.exports,r),c.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var c=Object.create(null);r.r(c);var i={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&n;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){i[t]=function(){return n[t]}}));return i.default=function(){return n},r.d(c,i),c},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var c={};return function(){r.d(c,{component:function(){return e}});var t=coreApis.utils.urls;const e={name:"liveAutoDraw",displayName:"直播间自动抽奖",description:{"zh-CN":"在当前直播间有抽奖活动时, 自动点击抽奖按钮. 注意只适用于少量抽奖, 那种99+限量抽奖可能跟不上其他人的手速("},tags:[componentsTags.live],entry:async()=>{const{sq:t}=await Promise.resolve().then(r.t.bind(r,569,23)),{childListSubtree:e,attributes:n}=await Promise.resolve().then(r.t.bind(r,156,23)),o=await t((()=>dq(".chat-popups-section")),(t=>null!==t&&null===t.querySelector("chat-draw-area")));o?e(o,(()=>{console.log("draw button = ",dq(".chat-popups-section .draw>span:nth-child(3)"));const t=dq(".chat-popups-section .draw>span:nth-child(3)");if(null===t){const t=dq(".chat-popups-section .function-bar>span:nth-child(3)");if(null!==t){const[e]=n(t,(()=>{"none"!==t.style.display&&(e.disconnect(),t.click())}))}}null!==t&&t.click()})):console.warn("[自动领奖] 未能找到弹窗容器")},urlInclude:t.liveUrls,commitHash:"41782f0146fc064228e439cfd4abd96742d14ca3"}}(),c=c.component}()}));