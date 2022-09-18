!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["utils/black-list"]=n():t["utils/black-list"]=n()}(self,(function(){return function(){var t={423:function(t,n,e){"use strict";e.d(n,{q:function(){return s}});const s="blackList.data"},610:function(t,n,e){var s=e(645)((function(t){return t[1]}));s.push([t.id,'.custom-black-list-settings {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  width: 400px;\n  font-size: 14px;\n  padding: 12px 12px 12px 18px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 100002;\n}\nbody.dark .custom-black-list-settings {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .custom-black-list-settings {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .custom-black-list-settings {\n  background-color: #222;\n}\n.custom-black-list-settings.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.custom-black-list-settings .black-list-settings-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  justify-content: space-between;\n}\n.custom-black-list-settings .black-list-settings-header .title {\n  margin-left: 6px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.custom-black-list-settings .black-list-settings-header .grow {\n  flex: 1;\n}\n.custom-black-list-settings .black-list-settings-header .close {\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n}\n.custom-black-list-settings .black-list-settings-header .close:hover {\n  color: var(--theme-color);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section {\n  margin-top: 12px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section > :not(:last-child) {\n  margin-bottom: 6px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-title {\n  font-size: 14px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-input {\n  display: flex;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-input div {\n  margin: 0 10px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-description {\n  font-size: 12px;\n  opacity: 0.6;\n  line-height: 1.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex-wrap: wrap;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .be-slider {\n  margin: 0 4px;\n  flex: 1;\n}\n[dir="ltr"] .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .padding-value {\n  text-align: right;\n}\n[dir="rtl"] .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .padding-value {\n  text-align: left;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .padding-value {\n  margin-left: 12px;\n  width: 50px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 0;\n  transition: none;\n  white-space: nowrap;\n  padding: 6px;\n  padding-left: 8px;\n  margin: 0 4px 4px 0;\n  cursor: move;\n}\nbody.dark .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  background-color: #282828;\n  color: #eee;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item:hover {\n  border-color: var(--theme-color);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.black-list-hidden {\n  opacity: 0.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-ghost {\n  opacity: 0;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-chosen {\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.16);\n  transform: scale(1.05);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-drag {\n  opacity: 1;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-drag.black-list-hidden {\n  opacity: 0.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item .toggle-visible {\n  margin-left: 6px;\n  cursor: pointer;\n}',""]),t.exports=s},798:function(t,n,e){var s=e(645)((function(t){return t[1]}));s.push([t.id,".custom-black-list-extra-options {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}",""]),t.exports=s},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,s){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(s)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);s&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},379:function(t,n,e){"use strict";var s,i=function(){return void 0===s&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
s=Boolean(window&&document&&document.all&&!window.atob)),s},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function l(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},s=[],i=0;i<t.length;i++){var o=t[i],c=n.base?o[0]+n.base:o[0],r=e[c]||0,u="".concat(c," ").concat(r);e[c]=r+1;var d=l(u),g={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(g)):a.push({identifier:u,updater:m(g,n),references:1}),s.push(u)}return s}function r(t){var n=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var i=e.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(t){n.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function g(t,n,e,s){var i=e?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function p(t,n,e){var s=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var b=null,f=0;function m(t,n){var e,s,i;if(n.singleton){var o=f++;e=b||(b=r(n)),s=g.bind(null,e,o,!1),i=g.bind(null,e,o,!0)}else e=r(n),s=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return s(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;s(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<e.length;s++){var i=l(e[s]);a[i].references--}for(var o=c(t,n),r=0;r<e.length;r++){var u=l(e[r]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=o}}}},421:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VPopup",{ref:"popup",staticClass:"custom-black-list-settings",attrs:{fixed:"",lazy:!1,"trigger-element":t.triggerElement},model:{value:t.open,callback:function(n){t.open=n},expression:"open"}},[e("div",{staticClass:"black-list-settings-header"},[e("VIcon",{staticClass:"title-icon",attrs:{icon:"mdi-sort",size:24}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n      "+t._s(t.titleName)+"黑名单设置\n    ")]),t._v(" "),e("div",{staticClass:"grow"}),t._v(" "),e("div",{staticClass:"close",on:{click:function(n){t.open=!1}}},[e("VIcon",{attrs:{icon:"close",size:18}})],1)],1),t._v(" "),e("div",{staticClass:"black-list-settings-content"},[e("div",{staticClass:"black-list-settings-section"},[e("div",{staticClass:"black-list-settings-section-title"},[t._v("\n        添加到黑名单\n      ")]),t._v(" "),e("div",{staticClass:"black-list-settings-section-input"},[e("TextBox",{attrs:{text:t.name},on:{change:t.changeName}}),t._v(" "),e("VButton",{on:{click:t.add}},[t._v("添加")])],1)]),t._v(" "),e("div",{staticClass:"black-list-settings-section"},[e("div",{staticClass:"black-list-settings-section-title"},[t._v("\n        黑名单列表\n      ")]),t._v(" "),e("div",{staticClass:"black-list-settings-section-description"},[t._v("\n        点击×图标可以删除名单.\n      ")]),t._v(" "),t.loaded?t._e():e("VLoading"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],ref:"black-listSortList",staticClass:"black-list-settings-section-content black-list-sort-list"},t._l(t.list,(function(n){return e("div",{key:n,staticClass:"black-list-sort-item",attrs:{"data-name":n}},[e("div",{staticClass:"item-name"},[t._v("\n            "+t._s(n)+"\n          ")]),t._v(" "),e("div",{staticClass:"toggle-visible"},[e("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(e){return t.toggleVisible(n)}}})],1)])})),0)],1)])])};s._withStripped=!0;var i=e(648),o=Vue.extend({components:{VPopup:i.VPopup,TextBox:i.TextBox,VIcon:i.VIcon,VButton:i.VButton},props:{triggerElement:{type:HTMLElement,default:null},list:{type:Array,default:null},save:{type:Function,default:void 0},titleName:{type:String,default:""}},data:()=>({open:!1,loaded:!1,name:""}),watch:{open(t){t||this.save(this.list)}},async mounted(){this.loaded=!0},methods:{toggle(){this.$refs.popup.toggle()},changeName(t){this.name=t},add(){
// eslint-disable-next-line vue/no-mutating-props
this.list.push(this.name),// eslint-disable-next-line vue/no-mutating-props
this.list=lodash.uniq(this.list),this.name=""},toggleVisible(t){
// eslint-disable-next-line vue/no-mutating-props
this.list.splice(this.list.indexOf(t),1)}}}),a=e(379),l=e.n(a),c=e(610),r=e.n(c),u={insert:"head",singleton:!1},d=(l()(r(),u),r().locals,(0,e(900).Z)(o,s,[],!1,null,null,null));d.options.__file="registry/lib/components/utils/black-list/BlackListSettings.vue";var g=d.exports},714:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return y}});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"custom-black-list-extra-options"},[t.login?e("VButton",{ref:"button",on:{mouseover:function(n){return t.loadNameBlackListSettings()},click:function(n){return t.toggleNameSettings()}}},[t._v("\n      精确匹配列表"),e("VIcon",{attrs:{icon:"right-arrow",size:16}})],1):t._e()],1),t._v(" "),e("div",{staticClass:"custom-black-list-extra-options"},[t.login?e("VButton",{ref:"button",on:{mouseover:function(n){return t.loadRegexBlackListSettings()},click:function(n){return t.toggleRegexSettings()}}},[t._v("\n      正则匹配列表"),e("VIcon",{attrs:{icon:"right-arrow",size:16}})],1):t._e()],1)])};s._withStripped=!0;var i=coreApis.utils,o=e(648),a=coreApis.settings,l=e(153),c=e(423);let r,u;const d=(0,a.getComponentSettings)("blackList").options,g=async()=>{if(r)return!1;const t=await Promise.resolve().then(e.bind(e,421)).then((t=>t.default));return r=(0,i.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",r.$el),!0},p=async()=>{if(u)return!1;const t=await Promise.resolve().then(e.bind(e,421)).then((t=>t.default));return u=(0,i.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",u.$el),!0};var b=Vue.extend({components:{VIcon:o.VIcon,VButton:o.VButton},data:()=>({login:Boolean((0,i.getUID)())}),methods:{async loadNameBlackListSettings(){if(await g()){(t=>{if(!r)return;r.triggerElement=t;const n=(0,l.getData)(c.q);r.list=lodash.cloneDeep(n[0].up),r.save=t=>{(0,l.addData)(c.q,(n=>{n.up=t})),d.up=t},r.titleName="精确匹配"})(this.$refs.button.$el)}},toggleNameSettings:async()=>{var t;r||await g(),null===(t=r)||void 0===t||t.toggle()},async loadRegexBlackListSettings(){if(await p()){(t=>{if(!u)return;u.triggerElement=t;const n=(0,l.getData)(c.q);u.list=lodash.cloneDeep(n[0].upRegex),u.save=t=>{(0,l.addData)(c.q,(n=>{n.upRegex=t})),d.upRegex=t},u.titleName="正则匹配"})(this.$refs.button.$el)}},toggleRegexSettings:async()=>{var t;u||await p(),null===(t=u)||void 0===t||t.toggle()}}}),f=e(379),m=e.n(f),v=e(798),k=e.n(v),h={insert:"head",singleton:!1},x=(m()(k(),h),k().locals,(0,e(900).Z)(b,s,[],!1,null,null,null));x.options.__file="registry/lib/components/utils/black-list/Settings.vue";var y=x.exports},900:function(t,n,e){"use strict";function s(t,n,e,s,i,o,a,l){var c,r="function"==typeof t?t.options:t;if(n&&(r.render=n,r.staticRenderFns=e,r._compiled=!0),s&&(r.functional=!0),o&&(r._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},r._ssrRegister=c):i&&(c=l?function(){i.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(r.functional){r._injectStyles=c;var u=r.render;r.render=function(t,n){return c.call(n),u(t,n)}}else{var d=r.beforeCreate;r.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:r}}e.d(n,{Z:function(){return s}})},153:function(t){"use strict";t.exports=coreApis.pluginApis.data},648:function(t){"use strict";t.exports=coreApis.ui}},n={};function e(s){var i=n[s];if(void 0!==i)return i.exports;var o=n[s]={id:s,exports:{}};return t[s](o,o.exports,e),o.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return function(){"use strict";e.d(s,{component:function(){return c}});var t=coreApis.componentApis.define,n=coreApis.utils.urls,i=coreApis.observer,o=coreApis.spinQuery,a=e(153),l=e(423);const c=(0,t.defineComponentMetadata)({name:"blackList",entry:async t=>{let{settings:{options:n}}=t;const e={up:n.up,upRegex:n.upRegex};(0,a.registerData)(l.q,e);const s=await(0,o.selectAll)(".bili-grid");(0,i.allMutationsOn)(s,(async()=>{const t=await(0,o.selectAll)(".bili-video-card");if(!t)return;const n=(0,a.getData)(l.q),e=n[0].upRegex.map((t=>new RegExp(t)));t.forEach((t=>{const s=t.querySelector(".bili-video-card__info--author"),i=t.querySelector(".bili-video-card__info--tit > a");if(null!=s){const o=s.innerHTML;if(-1!==n[0].up.indexOf(o)){t.querySelector(".v-img.bili-video-card__cover").innerHTML="",s.innerHTML="",i.innerHTML=""}else for(const n in e)if(e[n].test(o)){t.querySelector(".v-img.bili-video-card__cover").innerHTML="",s.innerHTML="",i.innerHTML="";break}}}))}))},extraOptions:()=>Promise.resolve().then(e.bind(e,714)).then((t=>t.default)),options:{up:{displayName:"up主名称",defaultValue:[],hidden:!0},upRegex:{displayName:"正则匹配up主名称",defaultValue:[],hidden:!0}},displayName:"屏蔽黑名单up主",tags:[componentsTags.utils],description:{"zh-CN":"屏蔽黑名单up主, 根据up主的名称进行匹配，支持精确匹配和正则匹配"},author:{name:"snowraincloud",link:"https://github.com/snowraincloud"},urlInclude:n.mainSiteUrls,commitHash:"45e1d6c6a44e57d6fec1a584f971e8e263f43c96",coreVersion:"2.4.1"})}(),s=s.component}()}));