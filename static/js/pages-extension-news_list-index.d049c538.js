(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extension-news_list-index"],{"3fbd":function(t,i,e){"use strict";var a=e("888d"),n=e.n(a);n.a},46069:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticStyle:{"touch-action":"none"}},[e("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?e("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[e("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),e("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}})],1):t._e(),e("v-uni-view",{staticClass:"pictrueBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},n=[]},"546b":function(t,i,e){"use strict";e.r(i);var a=e("dab9"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"888d":function(t,i,e){var a=e("d767");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("2490518e",a,!0,{sourceMap:!1,shadowMode:!1})},ba4c:function(t,i,e){"use strict";e.r(i);var a=e("bb13"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},bb13:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c223");var n=e("d35e"),s=a(e("f7b6")),o=a(e("f96f")),r=e("a586"),c={components:{home:s.default},mixins:[o.default],data:function(){return{imgHost:r.HTTP_REQUEST_URL,coutList:[],imgUrls:[],articleList:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,navList:[],active:0,page:1,limit:8,status:!1,scrollLeft:0,activeCou:0}},onShow:function(){this.status=!1,this.page=1,this.articleList=[],this.getCidArticle(0),this.getArticleBanner(),this.getArticleCate()},onReachBottom:function(){this.getCidArticle(this.activeCou)},methods:{getArticleHot:function(){var t=this;(0,n.getArticleHotList)().then((function(i){t.$set(t,"articleList",i.data)}))},getArticleBanner:function(){var t=this;(0,n.getArticleBannerList)().then((function(i){t.imgUrls=i.data}))},getCidArticle:function(t,i){var e=this;i&&(e.status=!1,this.activeCou=t,this.$set(this,"articleList",[]),e.page=1);var a=e.limit,s=e.page,o=e.articleList;e.status||(0,n.getArticleList)(e.activeCou,{page:s,limit:a}).then((function(t){var i,n=t.length;i=o.concat(t.data),e.page++,e.$set(e,"articleList",i),e.status=a>n,e.page=e.page}))},getArticleCate:function(){var t=this;(0,n.getArticleCategoryList)().then((function(i){t.$set(t,"navList",i.data)}))},tabSelect:function(t,i,e){this.active=t,this.scrollLeft=60*i,this.$set(this,"coutList",[]),this.$set(this,"articleList",[]),0==this.active?this.getArticleHot():(this.page=1,this.status=!1,e.children.length?(this.activeCou=e.children[0].id||0,this.coutList=e.children||[],this.getCidArticle(this.activeCou)):this.getCidArticle(e.id,!0))}}};i.default=c},c928:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticClass:"newsList"},[t.imgUrls.length>0?e("v-uni-view",{staticClass:"swiper"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(102,102,102,0.3)","indicator-active-color":"#666"}},[t._l(t.imgUrls,(function(t,i){return[e("v-uni-swiper-item",[e("v-uni-navigator",{attrs:{url:"/pages/extension/news_details/index?id="+t.id}},[e("v-uni-image",{staticClass:"slide-image",attrs:{src:t.image_input[0]}})],1)],1)]}))],2)],1):t._e(),t.navList.length>0?e("v-uni-view",{staticClass:"nav"},[e("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},[t._l(t.navList,(function(i,a){return[e("v-uni-view",{key:a+"_0",staticClass:"item",class:t.active==i.id?"on":"",attrs:{id:"news_"+i.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(i.id,a,i)}}},[e("v-uni-view",[t._v(t._s(i.title))]),t.active==i.id?e("v-uni-view",{staticClass:"line bg-color"}):t._e()],1)]}))],2),t.coutList.length?e("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden"},attrs:{"scroll-x":!0,"scroll-with-animation":!0}},[e("v-uni-view",{staticClass:"coutry-list"},t._l(t.coutList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"coutry",class:t.activeCou==i.id?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCidArticle(i.id,1)}}},[t._v(t._s(i.title))])})),1)],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"list"},[t._l(t.articleList,(function(i,a){return[1==i.image_input.length?e("v-uni-navigator",{key:a+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"text acea-row row-column-between"},[e("v-uni-view",{staticClass:"name line2"},[t._v(t._s(i.title))]),e("v-uni-view",[t._v(t._s(i.add_time))])],1),e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:i.image_input[0]}})],1)],1):2==i.image_input.length?e("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"picList acea-row row-between-wrapper"},[t._l(i.image_input,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t}})],1)]}))],2),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.add_time))])],1):i.image_input.length>2?e("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"picList on acea-row row-between-wrapper"},[t._l(i.image_input,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t}})],1)]}))],2),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.add_time))])],1):t._e()]}))],2)],1),0!=t.articleList.length||1==t.page&&0!=t.active?t._e():e("v-uni-view",{staticClass:"noCommodity"},[e("v-uni-view",{staticClass:"emptyBox"},[e("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/empty-box.png"}})],1)],1),e("home")],1)},n=[]},d767:function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.noCommodity[data-v-1ec171eb]{border-top-width:0;padding-bottom:%?30?%}.noCommodity .emptyBox[data-v-1ec171eb]{margin-top:%?50?%;text-align:center}.noCommodity .emptyBox .tips[data-v-1ec171eb]{color:#aaa;font-size:%?26?%}.noCommodity .emptyBox uni-image[data-v-1ec171eb]{width:%?414?%;height:%?304?%}uni-page-body[data-v-1ec171eb]{background-color:#fff!important}body.?%PAGE?%[data-v-1ec171eb]{background-color:#fff!important}.newsList .swiper[data-v-1ec171eb]{width:100%;position:relative;box-sizing:border-box;padding:%?30?% %?30?% 0 %?30?%}.newsList .swiper uni-swiper[data-v-1ec171eb]{width:100%;height:%?365?%;position:relative}.newsList .swiper .slide-image[data-v-1ec171eb]{width:100%;height:%?335?%;border-radius:%?6?%}.newsList[data-v-1ec171eb] uni-swiper .uni-swiper-dots-horizontal{bottom:20px}.newsList .swiper[data-v-1ec171eb] .uni-swiper-dot{width:%?12?%!important;height:%?12?%!important;border-radius:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.newsList .swiper[data-v-1ec171eb] .uni-swiper-dot ~ .uni-swiper-dot{margin-left:%?5?%}.newsList .nav[data-v-1ec171eb]{padding:0 %?30?%;width:100%;white-space:nowrap;box-sizing:border-box;margin-top:%?43?%}.newsList .nav .item[data-v-1ec171eb]{display:inline-block;font-size:%?32?%;color:#999}.newsList .nav .item.on[data-v-1ec171eb]{color:#000;font-size:%?36?%;font-weight:700}.newsList .nav .item ~ .item[data-v-1ec171eb]{margin-left:%?46?%}.newsList .nav .item .line[data-v-1ec171eb]{width:%?24?%;height:%?4?%;border-radius:%?2?%;margin:%?10?% auto 0 auto}.newsList .list[data-v-1ec171eb]{margin-top:%?20?%}.newsList .list .item[data-v-1ec171eb]{margin:0 %?30?%;border-bottom:%?1?% solid #f0f0f0;padding:%?35?% 0}.newsList .list .item .pictrue[data-v-1ec171eb]{width:%?250?%;height:%?156?%}.newsList .list .item .pictrue uni-image[data-v-1ec171eb]{width:100%;height:100%;border-radius:%?6?%}.newsList .list .item .text[data-v-1ec171eb]{width:%?420?%;height:%?156?%;font-size:%?24?%;color:#999}.newsList .list .item .text .name[data-v-1ec171eb]{font-size:%?30?%;color:#282828}.newsList .list .item .picList .pictrue[data-v-1ec171eb]{width:%?335?%;height:%?210?%;margin-top:%?30?%}.newsList .list .item .picList.on .pictrue[data-v-1ec171eb]{width:%?217?%;height:%?136?%}.newsList .list .item .picList .pictrue uni-image[data-v-1ec171eb]{width:100%;height:100%;border-radius:%?6?%}.newsList .list .item .time[data-v-1ec171eb]{text-align:right;font-size:%?24?%;color:#999;margin-top:%?22?%}.coutry-list[data-v-1ec171eb]{display:flex;align-items:center;margin:%?10?% 0;padding-top:%?10?%;border-top:1px solid #f2f2f2;height:%?80?%}.coutry-list .coutry[data-v-1ec171eb]{border-radius:%?26?%;padding:%?4?% %?20?%;color:#666;font-size:%?26?%;margin-right:%?20?%}.coutry-list .coutry.on[data-v-1ec171eb]{border-style:solid;border-width:%?2?%;color:#e93323}',""]),t.exports=i},dab9:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("8f59"),s=a(e("f96f")),o=e("a586"),r={name:"Home",props:{},mixins:[s.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};i.default=r},e588:function(t,i,e){"use strict";var a=e("f27c"),n=e.n(a);n.a},e99b:function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".pictrueBox[data-v-38e20512]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-38e20512]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-38e20512]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-38e20512]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?200?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-38e20512]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-38e20512]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-38e20512]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=i},ed79:function(t,i,e){"use strict";e.r(i);var a=e("c928"),n=e("ba4c");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("3fbd");var o=e("828b"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1ec171eb",null,!1,a["a"],void 0);i["default"]=r.exports},f27c:function(t,i,e){var a=e("e99b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("5800ae4f",a,!0,{sourceMap:!1,shadowMode:!1})},f7b6:function(t,i,e){"use strict";e.r(i);var a=e("46069"),n=e("546b");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("e588");var o=e("828b"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"38e20512",null,!1,a["a"],void 0);i["default"]=r.exports}}]);