(function(t){function e(e){for(var n,s,a=e[0],c=e[1],d=e[2],m=0,l=[];m<a.length;m++)s=a[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1e09":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"input-container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoUrl,expression:"videoUrl"}],attrs:{type:"text",hidden:"hidden"},domProps:{value:t.videoUrl},on:{input:function(e){e.target.composing||(t.videoUrl=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",hidden:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),i("video",{ref:"video",attrs:{src:t.videoUrl,controls:"",width:"600px"}}),i("CropTool",{attrs:{duration:t.duration,playing:t.playing,currentPlayingTime:t.currentTime},on:{play:t.playVideo,pause:t.pauseVideo,stop:t.stopVideo}})],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"crop-container"},[i("div",{staticClass:"crop-slider"},[i("div",{ref:"timeLineContainer",staticClass:"crop-time-line-container"},[i("div",{staticClass:"crop-time-line"}),t._l(t.cropItemList,(function(e,n){return i("div",{key:n,class:t.getCropRangeClass(n),style:t.computedRangeStyle(e)},[i("div",{class:t.getTimeHintClass(n)},[i("div",{staticClass:"cursor-line"}),i("div",{staticClass:"cursor-time"},[t._v(t._s(t.getFormatTime(e.startTime)))])]),i("div",{class:t.getTimeHintClass(n),style:t.computedEndTimeIndicatorStyle(e)},[i("div",{staticClass:"cursor-line"}),i("div",{staticClass:"cursor-time"},[t._v(t._s(t.getFormatTime(e.endTime)))])])])})),i("div",{class:["cursor-time-hint",{"moving-cursor":t.showNormalCursorTimeHint}],style:"transform: translateX("+t.currentCursorOffsetX+"px)"},[i("div",{staticClass:"cursor-line"}),i("div",{staticClass:"cursor-time"},[t._v(t._s(t.getFormatTime(t.currentCursorTime)))])])],2),i("div",{staticClass:"media-duration"},[t._v(t._s(t.durationText))])]),i("div",{staticClass:"crop-panel"},[i("div",{staticClass:"crop-time-area"},[t.listLength>0?i("div",{staticClass:"crop-time-header"},[i("div",{staticClass:"text"},[t._v(t._s(t.language.CROP_CLIP_LIST))]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.reset()}}},[t._v("\n          清空\n        ")]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.toggleShowList()}}},[t._v("\n          "+t._s(t.showList?"收起":"展开")+"\n        ")])]):t._e(),i("div",{ref:"timeItemContainer",class:["crop-time-body",{"crop-time-body-hide":!t.showList}],attrs:{"data-count":t.showList?t.listLength>10?10:t.listLength:0}},[t._l(t.cropItemList,(function(e,n){return[i("div",{key:n,staticClass:"crop-time-item",attrs:{"data-highlight":t.cropItemHoverIndex===n?1:0}},[i("div",{staticClass:"time-area"},[i("div",{staticClass:"time-input-area"},[i("span",{staticClass:"time-text"},[t._v(t._s(t.language.CUT_BEGIN_TIME))]),i("div",{staticClass:"time-input"},[i("input",{attrs:{type:"text"},domProps:{value:e.startTimeArr[0]},on:{blur:function(e){return t.startTimeChange(e,n,0)}}}),t._v("\n                  :\n                  "),i("input",{attrs:{type:"text"},domProps:{value:e.startTimeArr[1]},on:{blur:function(e){return t.startTimeChange(e,n,1)}}}),t._v("\n                  :\n                  "),i("input",{attrs:{type:"text"},domProps:{value:e.startTimeArr[2]},on:{blur:function(e){return t.startTimeChange(e,n,2)}}})])]),i("span",{staticClass:"range-text"},[t._v(" ~ ")]),i("div",{staticClass:"time-input-area"},[i("span",{staticClass:"time-text"},[t._v(t._s(t.language.CUT_END_TIME))]),i("div",{staticClass:"time-input"},[i("input",{attrs:{type:"text"},domProps:{value:e.endTimeArr[0]},on:{blur:function(e){return t.endTimeChange(e,n,0)}}}),t._v("\n                  :\n                  "),i("input",{attrs:{type:"text"},domProps:{value:e.endTimeArr[1]},on:{blur:function(e){return t.endTimeChange(e,n,1)}}}),t._v("\n                  :\n                  "),i("input",{attrs:{type:"text"},domProps:{value:e.endTimeArr[2]},on:{blur:function(e){return t.endTimeChange(e,n,2)}}})])])]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.togglePlayClip(n)}}},[t._v("\n              "+t._s(t.playingIndex===n?"暂停":"播放")+"\n            ")]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.removeCropItem(n)}}},[t._v("\n              删除\n            ")])])]}))],2)]),i("div",{staticClass:"crop-time-item",attrs:{"data-highlight":0===t.cropItemHoverIndex?1:0,"data-index":t.cropItemHoverIndex}},[i("div",{staticClass:"time-area"},[i("div",{staticClass:"time-input-area"},[i("span",{staticClass:"time-text"},[t._v(t._s(t.language.CUT_BEGIN_TIME))]),i("div",{staticClass:"time-input"},[i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.startTimeArr[0]},on:{blur:function(e){return t.startTimeChange(e,-1,0)},focus:function(e){return t.inputFocus()}}}),t._v("\n            :\n            "),i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.startTimeArr[1]},on:{blur:function(e){return t.startTimeChange(e,-1,1)},focus:function(e){return t.inputFocus()}}}),t._v("\n            :\n            "),i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.startTimeArr[2]},on:{blur:function(e){return t.startTimeChange(e,-1,2)},focus:function(e){return t.inputFocus()}}})])]),i("span",{staticClass:"range-text"},[t._v(" ~ ")]),i("div",{staticClass:"time-input-area"},[i("span",{staticClass:"time-text"},[t._v(t._s(t.language.CUT_END_TIME))]),i("div",{staticClass:"time-input"},[i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.endTimeArr[0]},on:{blur:function(e){return t.endTimeChange(e,-1,0)},focus:function(e){return t.inputFocus()}}}),t._v("\n            :\n            "),i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.endTimeArr[1]},on:{blur:function(e){return t.endTimeChange(e,-1,1)},focus:function(e){return t.inputFocus()}}}),t._v("\n            :\n            "),i("input",{attrs:{type:"text"},domProps:{value:t.cropItemToAdd&&t.cropItemToAdd.endTimeArr[2]},on:{blur:function(e){return t.endTimeChange(e,-1,2)},focus:function(e){return t.inputFocus()}}})])])]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.togglePlayClip(-1)}}},[t._v("\n        "+t._s(t.playing&&-1===t.playingIndex?"暂停":"播放")+"\n      ")]),i("button",{staticClass:"small-btn",on:{click:function(e){return t.onAddClick()}}},[t._v("\n        添加\n      ")])]),i("div",{class:["confirm-btn",{"confirm-btn-disabled":t.isSendingCrop}],on:{click:function(e){return t.confirmCrop()}}},[t._v(t._s(t.isSendingCrop?t.language.SENDING_DATA:t.language.CONFIRM_CUT_VIDEO)+"\n    ")])])])},a=[],c=(i("55dd"),i("f576"),i("ac6a"),i("c5f6"),i("28a5"),function(t){var e=new Date(1e3*t);return{days:String(e.getUTCDate()-1).padStart(2,"0"),hours:String(e.getUTCHours()).padStart(2,"0"),minutes:String(e.getUTCMinutes()).padStart(2,"0"),seconds:String(e.getUTCSeconds()).padStart(2,"0")}}),d=function(t){var e=c(t<0?0:t);return[e.hours,e.minutes,e.seconds].join(":")},u=function(t){var e=c(t<0?0:t);return[e.hours,e.minutes,e.seconds]},m=function(t){var e=3600*+t[0]+60*+t[1]+ +t[2];return e>0?e:0},l=function(t){var e=t.split(":");if(3!==e.length||2!==e[0].length||2!==e[1].length||2!==e[2].length)return 0;var i=3600*e[0]+60*e[1]+e[2];return i>0?i:0},p={getFormatTime:d,getFormatTimeArr:u,restoreTimeFromTimeArr:m,restoreOriginalTime:l};function h(t,e,i){var n,r,o,s,a,c=0,d=0,u=null;function m(){d=(new Date).getTime(),u=null,t.apply(o,s||[])}e=e||0;var l=function(){n=(new Date).getTime(),o=this,s=arguments;var t=a||e,l=a||i;a=null,r=n-(l?c:d)-t,clearTimeout(u),l?u=setTimeout(m,t):r>=0?m():u=setTimeout(m,-r),c=n};return l.clear=function(){u&&(clearTimeout(u),u=null)},l.debounceNextCall=function(t){a=t},l}var g=h,f=0,T=0,I=function(t,e){return Math.abs(t-e)<2},v={name:"crop-tool",components:{},props:{duration:{type:Number,default:0},currentPlayingTime:{type:Number,default:0},playing:{type:Boolean,default:!1}},data:function(){return{cropItemHoverIndex:-1,timeLineContainer:null,sliderLength:0,onclickstatus:!1,timeToPixelRatio:1,cropItemToAdd:null,cropItemList:[],startTimeIndicatorHoverIndex:-1,endTimeIndicatorHoverIndex:-1,startTimeIndicatorDraggingIndex:-1,endTimeIndicatorDraggingIndex:-1,currentEditingIndex:-1,currentCursorTime:0,currentCursorOffsetX:0,isCursorIn:!1,isCropping:!1,language:{CROP_CLIP_LIST:"裁剪列表",CUT_BEGIN_TIME:"开始时间",CUT_END_TIME:"结束时间",SENDING_DATA:"裁剪中",CONFIRM_CUT_VIDEO:"裁剪"},playingIndex:-1,showList:!1,playingItem:null,isSendingCrop:!1}},computed:{listLength:function(){return this.cropItemList.length},durationText:function(){return this.getFormatTime(this.duration)},disableEditing:function(){return!this.duration||this.duration<=0},showNormalCursorTimeHint:function(){return this.isCursorIn&&!this.isCropping&&!~this.startTimeIndicatorHoverIndex&&!~this.endTimeIndicatorHoverIndex}},watch:{timeToPixelRatio:function(){this.forceUpdateCropDataList()},currentPlayingTime:function(t){var e=this.playingItem;e&&t>=e.endTime&&this.pause()},isCropping:function(t){t&&(this.playingItem=null,this.playingIndex=-1)},duration:function(){this.calculateTimeLineData()}},mounted:function(){var t=this;this.timeLineContainer=this.$refs.timeLineContainer,this.$nextTick((function(){t.calculateTimeLineData(),t.addListeners()}))},methods:{getCropRangeClass:function(t){var e="crop-range";return this.cropItemHoverIndex===t&&(e+=" crop-range-hover",this.isCropping&&(e+=" crop-range-dragging")),e},getTimeHintClass:function(t){var e="cursor-time-hint";return this.isTimeIndicatorHovered(t)?e+=" crop-moving-cursor":e+=this.currentEditingIndex===t?" cropping":"",e},forceUpdateCropDataList:function(){if(this.listLength){var t=this.cropItemList,e=this.duration,i=this.timeToPixelRatio;t.forEach((function(t){var n=t.startTime,r=t.endTime;(!n||n<0||n>=e)&&(n=0),(!r||r<n||r>e)&&(r=e),t.startTimeIndicatorOffsetX=n/i,t.endTimeIndicatorOffsetX=r/i})),this.cropItemList=t.slice(0)}},calculateTimeLineData:function(){if(this.timeLineContainer){var t=this.duration,e=this.timeLineContainer.getBoundingClientRect();f=e.left,T=Math.floor(e.width),this.sliderLength=T,this.timeToPixelRatio=t/T}},getFormatTime:function(t){var e=c(t<0?0:t);return[e.hours,e.minutes,e.seconds].join(":")},isTimeIndicatorHovered:function(t){return this.startTimeIndicatorDraggingIndex===t||this.startTimeIndicatorHoverIndex===t||this.endTimeIndicatorDraggingIndex===t||this.endTimeIndicatorHoverIndex===t},computedRangeStyle:function(t){return"transform: translateX("+t.startTimeIndicatorOffsetX+"px); width:"+(t.endTimeIndicatorOffsetX-t.startTimeIndicatorOffsetX)+"px"},computedEndTimeIndicatorStyle:function(t){return"transform: translateX("+(t.endTimeIndicatorOffsetX-t.startTimeIndicatorOffsetX)+"px)"},getFormattedCropItem:function(t,e){var i=this.duration,n=this.timeToPixelRatio;return(!t||t<0||t>i)&&(t=0),(void 0===e||e<t||e>i)&&(e=i),{startTime:t,endTime:e,startTimeArr:p.getFormatTimeArr(t),endTimeArr:p.getFormatTimeArr(e),startTimeIndicatorOffsetX:t/n,endTimeIndicatorOffsetX:e/n}},getDefaultValues:function(){var t=this.duration/4;return this.getFormattedCropItem(t,3*t)},startCropping:function(t){this.endTimeIndicatorDraggingIndex=t,this.currentEditingIndex=t,this.cropItemHoverIndex=t,this.isCropping=!0,this.showList=!0},stopCropping:function(){this.startTimeIndicatorDraggingIndex=-1,this.endTimeIndicatorDraggingIndex=-1,this.currentEditingIndex=-1,this.cropItemHoverIndex=-1,this.isCropping=!1},addNewCropItemInSlider:function(){var t=this.currentCursorTime,e=this.getFormattedCropItem(t,t);this.addCropItem(e)},getFormattedOffsetX:function(t){return t<0?0:t>=T?T:t},timeIndicatorCheck:function(t,e){var i=this;this.isCropping||(this.startTimeIndicatorHoverIndex=-1,this.endTimeIndicatorHoverIndex=-1,this.startTimeIndicatorDraggingIndex=-1,this.endTimeIndicatorDraggingIndex=-1,this.cropItemHoverIndex=-1,this.cropItemList.forEach((function(n,r){~i.cropItemHoverIndex||i.isCropping||(t>=n.startTimeIndicatorOffsetX&&t<=n.endTimeIndicatorOffsetX&&(i.cropItemHoverIndex=r),I(n.endTimeIndicatorOffsetX,t)?(i.endTimeIndicatorHoverIndex=r,"mousedown"===e&&(i.endTimeIndicatorDraggingIndex=r,i.currentEditingIndex=r,i.isCropping=!0)):I(n.startTimeIndicatorOffsetX,t)&&(i.startTimeIndicatorHoverIndex=r,"mousedown"===e&&(i.startTimeIndicatorDraggingIndex=r,i.currentEditingIndex=r,i.isCropping=!0)))})))},timeIndicatorMove:function(t){if(this.isCropping){var e=this.currentEditingIndex,i=this.startTimeIndicatorDraggingIndex,n=this.endTimeIndicatorDraggingIndex,r=this.currentCursorTime,o=this.cropItemList[e];if(i>-1&&o){if(t>o.endTimeIndicatorOffsetX)return;o.startTimeIndicatorOffsetX=t,o.startTime=r}if(n>-1&&o){if(t<o.startTimeIndicatorOffsetX)return;o.endTimeIndicatorOffsetX=t,o.endTime=r}this.updateCropItem(o,e)}},addListeners:function(){var t=this;if(window.addEventListener("resize",this.calculateTimeLineData.bind(this)),this.timeLineContainer){var e=null;this.timeLineContainer.addEventListener("mousemove",(function(e){g((function(){var i=e.clientX-f;if(i<0||i>T)return t.isCursorIn=!1,void(t.isCropping&&(t.stopCropping(),t.timeIndicatorCheck(i<0?0:T,"mouseup")));t.isCursorIn=!0,t.currentCursorTime=i*t.timeToPixelRatio,t.currentCursorOffsetX=i,t.timeIndicatorCheck(i,"mousemove"),t.timeIndicatorMove(i)}),10,!0)()})),this.timeLineContainer.addEventListener("mousedown",(function(i){var n=i.clientX-f;e=n,t.timeIndicatorCheck(n,"mousedown")})),this.timeLineContainer.addEventListener("mouseup",(function(i){if(t.isCropping)t.stopCropping();else{var n=t.getFormattedOffsetX(i.clientX-f);Math.abs(n-e)>3||(t.currentCursorTime=n*t.timeToPixelRatio,t.isCropping||(t.addNewCropItemInSlider(),t.startCropping(t.cropItemList.length-1)))}}))}},inputFocus:function(){this.cropItemToAdd=this.getDefaultValues()},getTargetItem:function(t){var e=null;if(-1===t)this.cropItemToAdd||(this.cropItemToAdd=this.getDefaultValues()),e=this.cropItemToAdd;else{var i=this.cropItemList.slice(0);e=i[t]}return e},startTimeChange:function(t,e,i){var n=Math.floor(+t.target.value),r=this.getTargetItem(e);n<0||n>59||n!==n?console.log("不合法的输入值"):(r.startTimeArr[i]=String(n).padStart(2,"0"),r.startTime=p.restoreTimeFromTimeArr(r.startTimeArr),r.startTime>r.endTime&&(r.startTime=r.endTime-1,r.startTimeArr=p.getFormatTimeArr(r.startTime),console.log("起始值必须小于结束值")),this.updateCropItem(r,e)),t.target.value=r.startTimeArr[i]},endTimeChange:function(t,e,i){var n=Math.floor(+t.target.value),r=this.getTargetItem(e);if(n<0||n>59||n!==n)console.log("不合法的输入值");else{r.endTimeArr[i]=String(n).padStart(2,"0"),r.endTime=p.restoreTimeFromTimeArr(r.endTimeArr),r.endTime<r.startTime&&(r.endTime=r.startTime+1,r.endTimeArr=p.getFormatTimeArr(r.endTime),console.log("结束值必须大于起始值"));var o=this.duration;r.endTime>o&&(console.log("结束值不能大于总时长"),r.endTime=o,r.endTimeArr=p.getFormatTimeArr(o)),this.updateCropItem(r,e)}t.target.value=r.endTimeArr[i]},toggleShowList:function(){this.showList=!this.showList},updateAllCropItems:function(t){this.cropItemList=t,this.forceUpdateCropDataList()},updateCropItem:function(t,e){if(!(e<0)){var i=this.getFormattedCropItem(t.startTime,t.endTime);this.cropItemList.splice(e,1,i)}},removeCropItem:function(t){this.cropItemList.splice(t,1)},onAddClick:function(){this.showList=!0,this.addCropItem(this.cropItemToAdd||this.getDefaultValues())},addCropItem:function(t){this.cropItemList.push(t),this.cropItemToAdd=null,this.smoothScrollContainer()},smoothScrollContainer:function(){var t=this;if(!(this.listLength<=10)){var e=40*(this.listLength-10),i=this.$refs.timeItemContainer.scrollTop,n=e-i,r=n/10,o=function i(n){n>=e||requestAnimationFrame((function(){t.$refs.timeItemContainer.scrollTo(0,n),i(n+r)}))};o(i+r)}},reset:function(){this.cropItemToAdd=null,this.cropItemList=[],this.cropItemHoverIndex=-1,this.startTimeIndicatorHoverIndex=-1,this.endTimeIndicatorHoverIndex=-1,this.startTimeIndicatorDraggingIndex=-1,this.endTimeIndicatorDraggingIndex=-1,this.currentEditingIndex=-1,this.currentCursorTime=0,this.currentCursorOffsetX=0,this.isCursorIn=!1,this.isCropping=!1,this.showList=!1,this.playingItem=void 0,this.playingIndex=-1,this.isSendingCrop=!1,this.$emit("stop")},togglePlayClip:function(t){this.playingItem?this.pause():this.playSelectedClip(t)},playSelectedClip:function(t){if(this.playingItem=this.getTargetItem(t),this.playingIndex=t,this.playingItem){this.isCropping=!1;var e=this.playingItem.startTime;this.$emit("play",e||0)}else console.log("无裁剪片段")},pause:function(){this.$emit("pause")},cleanCropItemList:function(){var t=this.cropItemList;t=t.sort((function(t,e){return t.startTime-e.startTime}));var e=[],i=t[0].startTime,n=t[0].endTime;return t.forEach((function(t){t.endTime<=n&&t.startTime>=i||(t.startTime<=n&&t.endTime>=n?n=t.endTime:t.startTime>n&&(e.push({startTime:i,endTime:n,startTimeArr:p.getFormatTimeArr(i),endTimeArr:p.getFormatTimeArr(n)}),i=t.startTime,n=t.endTime))})),e.push({startTime:i,endTime:n,startTimeArr:p.getFormatTimeArr(i),endTimeArr:p.getFormatTimeArr(n)}),e},confirmCrop:function(){var t=this;if(!this.onclickstatus){if(this.onclickstatus=!0,void 0===this.cropItemList[0]||""===this.cropItemList[0]||null===this.cropItemList[0])return this.onclickstatus=!1,this.$layer.alert("裁剪时间段不能为空");var e=this.cropItemList[0].startTime,i=this.cropItemList[0].endTime,n=this.Utils.getUrlKey("id");this.isSendingCrop=!0,this.isSendingCrop&&this.$layer.alert("裁剪中"),this.$axios.get("http://asd.tryoubest.top/api/v1/reporter/reporter/shearedit?startTime=".concat(e,"&endTime=").concat(i,"&id=").concat(n)).then((function(e){t.$layer.alert("裁剪成功"),t.onclickstatus=!0,window.location.href="http://asd.tryoubest.top/backend/common/videos/index"}),(function(e){return t.onclickstatus=!1,t.$layer.alert("裁剪失败，请稍后重试")})),this.isSendingCrop&&console.log("裁剪中")}}}},C=v,x=i("2877"),y=Object(x["a"])(C,s,a,!1,null,null,null),_=y.exports,L={name:"app",components:{CropTool:_},data:function(){return{videoUrl:"",id:"",duration:0,playing:!1,currentTime:0}},mounted:function(){var t=this,e=this.$refs.video;this.videoUrl=decodeURI(this.Utils.getUrlKey("videoUrl")),this.id=this.Utils.getUrlKey("id"),e.ondurationchange=function(){t.duration=e.duration},e.onplaying=function(){t.playing=!0},e.onpause=function(){t.playing=!1},e.ontimeupdate=function(){t.currentTime=e.currentTime}},methods:{seekVideo:function(t){this.$refs.video.currentTime=t},playVideo:function(t){this.seekVideo(t),this.$refs.video.play()},pauseVideo:function(){this.$refs.video.pause()},stopVideo:function(){this.$refs.video.pause(),this.$refs.video.currentTime=0}}},A=L,b=Object(x["a"])(A,r,o,!1,null,null,null),w=b.exports,O=(i("3b2b"),i("a481"),{getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}}),S=(i("1e09"),i("bc3a")),D=i.n(S),P=i("d842"),E=i.n(P);i("2ba8");n["a"].prototype.Utils=O,n["a"].prototype.$axios=D.a,n["a"].config.productionTip=!1,n["a"].prototype.$layer=E()(n["a"]),new n["a"]({render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.d4119ecb.js.map