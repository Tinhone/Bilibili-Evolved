!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/ip-show"]=t():e["utils/ip-show"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,i={206:e=>{e.exports=coreApis.componentApis.utils.commentApis}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var l=s[e]={exports:{}};return i[e](l,l.exports,a),l.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(i,s){if(1&s&&(i=this(i)),8&s)return i;if("object"==typeof i&&i){if(4&s&&i.__esModule)return i;if(16&s&&"function"==typeof i.then)return i}var l=Object.create(null);a.r(l);var n={};e=e||[null,t({}),t([]),t(t)];for(var o=2&s&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>n[e]=()=>i[e]));return n.default=()=>i,a.d(l,n),l},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{a.d(l,{component:()=>d});const e=coreApis.componentApis.define;let t,i=2;const s=function(e,i,s){const a=this._parentBlacklistDom(e,i,s),l=[`<div class="con ${s===i?"no-border":""}">`,`<div class="user">${this._createNickNameDom(e)}`,this._createLevelLink(e),this._identity(e.mid,e.assist,e.member.fans_detail),`${this._createNameplate(e.member.nameplate)+this._createUserSailing(e)}</div>`,this._createMsgContent(e),this._createPerfectReply(e),'<div class="info">',this._createPlatformDom(e.content.plat),'<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location">${e?.reply_control?.location||""}</span>`:"","</span>",e.lottery_id?"":`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,e.lottery_id?"":`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,e.lottery_id?"":this._createReplyBtn(e.rcount),e.lottery_id&&e.mid!==t.userStatus.mid?"":`<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>${this._canSetTop(e)?`<li class="set-top">${e.isUpTop?"取消置顶":"设为置顶"}</li>`:""}${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)&&!e.isTop?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,this._createLotteryContent(e.content),this._createVoteContent(e.content),this._createTags(e),"</div>",'<div class="reply-box">',this._createSubReplyList(e.replies,e.rcount,!1,e.rpid,e.folder&&e.folder.has_folded,e.reply_control),"</div>",'<div class="paging-box">',"</div>","</div>"].join("");return e.state===t.blacklistCode?a:l},n=function(e,t){return[`<div class="reply-item reply-wrap" data-id="${e.rpid}" data-index="${t}">`,this._createSubReplyUserFace(e),'<div class="reply-con">','<div class="user">',this._createNickNameDom(e),this._createLevelLink(e),this._identity(e.mid),this._createSubMsgContent(e),"</div>","</div>",'<div class="info">','<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location">${e?.reply_control?.location||""}</span>`:"","</span>",`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,'<span class="reply btn-hover">回复</span>',`<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,"</div>","</div>"].join("")},o=function(e,t,i){const s=this._parentBlacklistDom(e,t,i),a=[`<div class="con ${i===t?"no-border":""}">`,`<div class="user">${this._identity(e.mid,e.assist,e.member.fans_detail)}`,`<a data-usercard-mid="${e.mid}" href="//space.bilibili.com/${e.mid}" target="_blank" class="name ${this._createVipClass(e.member.vip.vipType,e.member.vip.vipStatus,e.member.vip.themeType)}">${this._unhtmlFix(e.member.uname)}</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l${e.member.level_info.current_level}"></i></a>${this._createNameplate(e.member.nameplate)}${this._createUserSailing(e.member&&e.member.user_sailing||{})}</div>`,this._createMsgContent(e),'<div class="info">',e.floor?`<span class="floor">#${e.floor}</span>`:"",this._createPlatformDom(e.content.plat),`<span class="time">${this._formateTime(e.ctime)}</span>`,e?.reply_control?.location?`<span style="margin-left:-15px;">${e?.reply_control?.location||""}</span>`:"",e.lottery_id?"":`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like||""}</span></span>`,e.lottery_id?"":`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,e.lottery_id?"":this._createReplyBtn(e.rcount),e.lottery_id&&e.mid!==this.userStatus.mid?"":`<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>${this._canSetTop(e)?`<li class="set-top">${e.isUpTop?"取消置顶":"设为置顶"}</li>`:""}${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)&&!e.isTop?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,this._createLotteryContent(e.content),this._createVoteContent(e.content),this._createTags(e),"</div>",'<div class="reply-box">',this._createSubReplyList(e.replies,e.rcount,!1,e.rpid,e.folder&&e.folder.has_folded),"</div>",'<div class="paging-box">',"</div>","</div>"].join("");return e.state===this.blacklistCode?s:a},r=function(e,t){return[`<div class="reply-item reply-wrap" data-id="${e.rpid}" data-index="${t}">`,`<a href="//space.bilibili.com/${e.mid}" data-usercard-mid="${e.mid}" target="_blank" class="reply-face">`,`<img src="${this._trimHttpFix(this._webpFix(e.member.avatar,{w:52,h:52}))}" alt="">`,"</a>",'<div class="reply-con">','<div class="user">',`<a href="//space.bilibili.com/${e.mid}" target="_blank" data-usercard-mid="${e.mid}" class="name ${this._createVipClass(e.member.vip.vipType,e.member.vip.vipStatus,e.member.vip.themeType)}">${this._unhtmlFix(e.member.uname)}</a>`,`<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l${e.member.level_info.current_level}"></i></a>`,this._createSubMsgContent(e),"</div>","</div>",'<div class="info">',`<span class="time">${this._formateTime(e.ctime)}</span>`,e?.reply_control?.location?`<span style="margin-left:-15px;">${e?.reply_control?.location||""}</span>`:"",`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like||""}</span></span>`,`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,'<span class="reply btn-hover">回复</span>',`<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,"</div>","</div>"].join("")},c=new MutationObserver((e=>{e.forEach((()=>{void 0!==unsafeWindow.bbComment&&(t=unsafeWindow.bbComment,"blackroom"===unsafeWindow.location.href.split("/")[3]?(t.prototype._unhtmlFix=function(e,t){return e?
// eslint-disable-next-line @typescript-eslint/no-shadow
e.replace(t||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\\d+);)?/g,(function(e,t){return t?e:{"<":"","&":"",'"':"",">":"","'":""}[e]})):""},t.prototype._trimHttpFix=function(e){return e?e.replace(/^http:/,""):""},t.prototype._webpFix=function(e,t){if(!e)return e;const i=e.match(/(.*\\.(jpg|jpeg|gif|png|bmp))(\\?.*)?/);let s=-1!==e.indexOf("/bfs/");return i&&"gif"!==i[2]&&"bmp"!==i[2]&&s?(s=t.w,e=t.h,e=s&&e?`@${s}w_${e}h`:"@",t=i[3]||"",this.isWebp?`${i[1]+e}.webp${t}`:`${i[1]+e}.${i[2]}${t}`):e},t.prototype._createListCon=o,t.prototype._createSubReplyItem=r):(t.prototype._createListCon=s,t.prototype._createSubReplyItem=n),i=1,c.disconnect())}))}));c.observe(document.head,{childList:!0});const p=e=>{e.forEach((e=>{const t=(e=>{const t=e.__vueParentComponent?.props;return(t?.reply??t?.subReply)?.reply_control?.location??void 0})(e.element);if(void 0!==t){const i=e.element.querySelector(".reply-info>.reply-time")??e.element.querySelector(".sub-reply-info>.sub-reply-time");if(0===i.childElementCount){const e=document.createElement("span");e.style.marginLeft="5px",e.innerText=t,i.appendChild(e)}}}))},d=(0,e.defineComponentMetadata)({name:"ipShow",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"评论区IP属地显示",tags:[componentsTags.utils],entry:async()=>{const{forEachCommentItem:e}=await Promise.resolve().then(a.t.bind(a,206,23));e({added:e=>{2===i&&(p([e,...e.replies]),e.addEventListener("repliesUpdate",(e=>p(e.detail))))}})},description:{"zh-CN":"在评论区显示评论的IP属地信息"},commitHash:"c839f80bc76f6b63f5eb1b66192493ce5cb3e0a0",coreVersion:"2.8.8"})})(),l=l.component})()));