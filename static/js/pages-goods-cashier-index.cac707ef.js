(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-cashier-index"],{"0586":function(t,e,i){"use strict";i.r(e);var n=i("1018"),a=i("f608");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6862");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"13279574",null,!1,n["a"],void 0);e["default"]=s.exports},"05d5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.payPriceShow?i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"pay-price"},[i("v-uni-view",{staticClass:"price"},[i("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$t("￥")))]),i("numberScroll",{attrs:{num:t.payPriceShow,color:"#E93323",width:"30",height:"50",fontSize:"50"}})],1),i("v-uni-view",{staticClass:"count-down"},[t._v(t._s(t.$t("支付剩余时间"))+"："),i("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" : ","minute-text":" : ","second-text":" ",datatime:t.invalidTime}})],1)],1),i("v-uni-view",{staticClass:"payment"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("支付方式")))]),t._l(t.cartArr,(function(e,n){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.payStatus,expression:"item.payStatus"}],key:n,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payType(e.number||0,e.value,n)}}},[i("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"iconfont",class:e.icon}),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.$t(e.name)))]),"yue"==e.value?i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.$t(e.title))),i("span",{staticClass:"money"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])]):i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.$t(e.title)))])],1)],1),i("v-uni-view",{staticClass:"iconfont",class:t.active==n?"icon-xuanzhong11 font-num":"icon-weixuan"})],1)}))],2),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"button acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay(t.number,t.paytype)}}},[t._v(t._s(t.$t("联系客服付款")))]),i("v-uni-view",{staticClass:"wait-pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.waitPay.apply(void 0,arguments)}}},[t._v(t._s(t.$t("暂不支付")))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],domProps:{innerHTML:t._s(t.formContent)}})],1):t._e()},a=[]},"0bca":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page .pay-price[data-v-345de2b4]{display:flex;justify-content:center;flex-direction:column;align-items:center;padding:%?50?% 0 %?40?% 0}.page .pay-price .price[data-v-345de2b4]{color:#e93323;margin-bottom:%?20?%;display:flex;align-items:flex-end}.page .pay-price .price .unit[data-v-345de2b4]{font-size:%?34?%;font-weight:500;line-height:%?41?%}.page .pay-price .price .num[data-v-345de2b4]{font-size:%?50?%;font-weight:600}.page .pay-price .count-down[data-v-345de2b4]{display:flex;align-items:center;background-color:#fff;padding:%?8?% %?28?%;border-radius:%?40?%;font-size:%?24?%;color:#e93323}.page .pay-price .count-down .time[data-v-345de2b4]{margin-top:0!important}.page .pay-price .count-down[data-v-345de2b4] .red{margin:0!important}.page .payment[data-v-345de2b4]{width:%?690?%;border-radius:%?14?% %?14?%;background-color:#fff;z-index:999;margin:0 %?30?%}.page .payment .title[data-v-345de2b4]{color:#666;font-size:%?26?%;padding:%?30?% 0 0 %?30?%}.page .payment .payMoney[data-v-345de2b4]{font-size:%?28?%;color:#333;text-align:center;margin-top:%?50?%}.page .payment .payMoney .font-color[data-v-345de2b4]{margin-left:%?10?%}.page .payment .payMoney .font-color .money[data-v-345de2b4]{font-size:%?40?%}.page .payment.on[data-v-345de2b4]{-webkit-transform:translateZ(0);transform:translateZ(0)}.page .icon-xuanzhong11[data-v-345de2b4]{color:#e93323!important}.page .payment .item[data-v-345de2b4]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.page .payment .item[data-v-345de2b4]:last-child{border-bottom:none}.page .payment .item .left[data-v-345de2b4]{flex:1}.page .payment .item .left .text[data-v-345de2b4]{flex:1}.page .payment .item .left .text .name[data-v-345de2b4]{font-size:%?30?%;color:#333}.page .payment .item .left .text .info[data-v-345de2b4]{font-size:%?22?%;color:#999}.page .payment .item .left .text .info .money[data-v-345de2b4]{color:#f90}.page .payment .item .left .iconfont[data-v-345de2b4]{font-size:%?50?%;color:#09bb07;margin-right:%?28?%}.page .payment .item .left .iconfont.icon-zhifubao[data-v-345de2b4]{color:#00aaea}.page .payment .item .left .iconfont.icon-yuezhifu[data-v-345de2b4]{color:#f90}.page .payment .item .left .iconfont.icon-yuezhifu1[data-v-345de2b4]{color:#eb6623}.page .payment .item .left .iconfont.icon-tonglianzhifu1[data-v-345de2b4]{color:#305fd8}.page .payment .item .iconfont[data-v-345de2b4]{font-size:%?40?%;color:#ccc}.page .icon-haoyoudaizhifu[data-v-345de2b4]{color:#f34c3e!important}.page .btn[data-v-345de2b4]{position:fixed;left:%?30?%;display:flex;flex-direction:column;align-items:center;bottom:%?30?%;bottom:calc(%?30?% + constant(safe-area-inset-bottom));bottom:calc(%?30?% + env(safe-area-inset-bottom))}.page .wait-pay[data-v-345de2b4]{color:#aaa;font-size:%?24?%;padding-top:%?20?%}.page .button[data-v-345de2b4]{width:%?690?%;height:%?90?%;border-radius:%?45?%;color:#fff;background-color:#e93323}',""]),t.exports=e},1018:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"time",style:t.justifyLeft},[t.tipText?i("v-uni-text",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),!0===t.isDay?i("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.day))]):t._e(),t.dayText?i("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),i("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.hour))]),t.hourText?i("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),i("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.minute))]),t.minuteText?i("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),i("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.second))]),t.secondText?i("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()],1)},a=[]},1851:function(t,e,i){"use strict";var n=i("8bdb"),a=i("84d6"),r=i("1cb5");n({target:"Array",proto:!0},{fill:a}),r("fill")},"28ad":function(t,e,i){"use strict";i.r(e);var n=i("c87b"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"37fc":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".time[data-v-13279574]{display:flex;justify-content:center}.red[data-v-13279574]{color:var(--view-theme);margin:0 %?4?%}",""]),t.exports=e},4284:function(t,e,i){"use strict";var n=i("b835"),a=i.n(n);a.a},"485a":function(t,e,i){"use strict";i.r(e);var n=i("cfb7"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"4e6c":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var n={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0},bgColor:{type:String,default:""},colors:{type:String,default:""}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,i=0,n=0,a=0,r=0;e>0?(i=!0===t.isDay?Math.floor(e/86400):0,n=Math.floor(e/3600)-24*i,a=Math.floor(e/60)-24*i*60-60*n,r=Math.floor(e)-24*i*60*60-60*n*60-60*a,n<=9&&(n="0"+n),a<=9&&(a="0"+a),r<=9&&(r="0"+r),t.day=i,t.hour=n,t.minute=a,t.second=r):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}};e.default=n},6862:function(t,e,i){"use strict";var n=i("a2bb"),a=i.n(n);a.a},"8394b":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.number-box[data-v-e3248744]{display:flex;flex-wrap:wrap;justify-content:center}.swiper[data-v-e3248744]{position:relative}.swiper[data-v-e3248744]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%}',""]),t.exports=e},8959:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.adminExpress=function(t,e){return r.default.get("admin/order/express/"+t+"".concat(e?"/refund":""))},e.aliPay=function(t,e){return r.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})},e.cancelRefundOrder=function(t){return r.default.post("order/refund/cancel/"+t)},e.cartDel=function(t){"object"===(0,a.default)(t)&&(t=t.join(","));return r.default.post("cart/del",{ids:t})},e.changeCartNum=function(t,e){return r.default.post("cart/num",{id:t,number:e})},e.checkShipping=function(t,e){return r.default.post("order/check_shipping",{cartId:t,new:e})},e.express=function(t,e){return r.default.get("order/express/"+t+"".concat(e?"/refund":""))},e.getCartCounts=function(t){return r.default.get("cart/count",{numType:void 0===t?0:t})},e.getCartList=function(t){return r.default.get("cart/list",t)},e.getCashierOrder=function(t,e){return r.default.get("order/cashier/".concat(t,"/").concat(e))},e.getCouponsOrderPrice=function(t,e){return r.default.get("coupons/order/"+t,e)},e.getNewOrderList=function(t){return r.default.get("order/refund/list",t)},e.getOrderDetail=function(t,e){return r.default.get("order/detail/"+t+"".concat(e?"/".concat(e):""))},e.getOrderList=function(t){return r.default.get("order/list",t)},e.getRefundOrderDetail=function(t,e){return r.default.get("order/refund_detail/"+t+"".concat(e?"/".concat(e):""))},e.getResetCart=function(t){return r.default.post("v2/reset_cart",t)},e.offlineCheckPrice=function(t){return r.default.post("order/offline/check/price",t)},e.offlineCreate=function(t){return r.default.post("order/offline/create",t)},e.ordeRefundReason=function(){return r.default.get("order/refund/reason")},e.orderAgain=function(t){return r.default.post("order/again",{uni:t})},e.orderCancel=function(t){return r.default.post("order/cancel",{id:t})},e.orderComment=function(t){return r.default.post("order/comment",t)},e.orderConfirm=function(t,e,i,n){return r.default.post("order/confirm",{cartId:t,new:e,addressId:i,shipping_type:n})},e.orderCoupon=function(t){return r.default.post("v2/order/product_coupon/"+t)},e.orderCreate=function(t,e){return r.default.post("order/create/"+t,e)},e.orderData=function(){return r.default.get("order/data")},e.orderDel=function(t){return r.default.post("order/del",{uni:t})},e.orderInvoiceDetail=function(t){return r.default.get("v2/order/invoice_detail/".concat(t))},e.orderInvoiceList=function(t){return r.default.get("v2/order/invoice_list",t)},e.orderOfflinePayType=function(){return r.default.get("order/offline/pay/type")},e.orderPay=function(t){return r.default.post("order/pay",t)},e.orderProduct=function(t){return r.default.post("order/product",{unique:t})},e.orderRefundVerify=function(t){return r.default.post("order/refund/verify",t)},e.orderTake=function(t){return r.default.post("order/take",{uni:t})},e.postOrderComputed=function(t,e){return r.default.post("order/computed/"+t,e)},e.postRefundGoods=function(t){return r.default.post("order/refund/cart_info",t)},e.refundExpress=function(t){return r.default.post("order/refund/express",t)},e.refundGoodsList=function(t){return r.default.get("order/refund/cart_info/".concat(t))},e.refundOrderDel=function(t){return r.default.get("order/refund/del/"+t,{})},e.refundOrderDetail=function(t){return r.default.get("order/refund/detail/"+t)},e.returnGoodsSubmit=function(t,e){return r.default.post("order/refund/apply/".concat(t),e)},e.vcartList=function(){return r.default.get("v2/cart_list")},i("c223");var a=n(i("fcf3")),r=n(i("dd8e"))},8966:function(t,e,i){"use strict";var n=i("912a"),a=i.n(n);a.a},"903c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"number-box"},[t._l(t.indexArr,(function(e,n){return[i("v-uni-swiper",{key:n+"_0",staticClass:"swiper",style:{color:t.color,width:10==e?"14rpx":1==e?"22rpx":t.width+"rpx",height:t.height+"rpx",lineHeight:t.fontSize+"rpx",fontSize:t.fontSize+"rpx",fontWeight:t.fontWeight},attrs:{vertical:"true",current:e,circular:"true"}},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("0")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("1")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("2")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("3")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("4")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("5")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("6")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("7")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("8")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v("9")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[t._v(".")])],1)],1)]}))],2)},a=[]},"912a":function(t,e,i){var n=i("0bca");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("df66ad82",n,!0,{sourceMap:!1,shadowMode:!1})},a2bb:function(t,e,i){var n=i("37fc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("420ef7c2",n,!0,{sourceMap:!1,shadowMode:!1})},a396:function(t,e,i){"use strict";i.r(e);var n=i("05d5"),a=i("485a");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("8966");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"345de2b4",null,!1,n["a"],void 0);e["default"]=s.exports},a88e:function(t,e,i){"use strict";i.r(e);var n=i("903c"),a=i("28ad");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4284");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"e3248744",null,!1,n["a"],void 0);e["default"]=s.exports},b835:function(t,e,i){var n=i("8394b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("2ffbd3e8",n,!0,{sourceMap:!1,shadowMode:!1})},c87b:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("c9b5"),i("bf0f"),i("ab80"),i("1851"),i("f7a5"),i("aa9c");var n={props:{num:[String,Number],color:{type:String,default:"#000000"},width:{type:String,default:"30"},height:{type:String,default:"30"},fontSize:{type:String,default:"30"},fontWeight:{type:[String,Number],default:500}},data:function(){return{indexArr:[]}},created:function(){var t=this.num,e=new Array(t.toString().length);e.fill(0),this.indexArr=e},watch:{num:function(t,e){var i=Array.prototype.slice.apply(this.indexArr),n=t.toString().length,a=e.toString().length;if(n>a){for(var r=0;r<n-a;r++)i.push(0);this.indexArr=i}if(n<a){for(var o=0;o<a-n;o++)i.pop();this.indexArr=i}this.numChange(t)}},mounted:function(){var t=this;this._time=setTimeout((function(){t.numChange(t.num),clearTimeout(t._time)}),50)},methods:{numChange:function(t){var e=this;this.$nextTick((function(){for(var i=e.indexArr,n=Array.prototype.slice.apply(i),a=t.toString(),r=0;r<a.length;r++)"."===a[r]?n[r]=10:n[r]=Number(a[r]);e.indexArr=n}))}}};e.default=n},cfb7:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("bf0f"),i("2797"),i("aa9c"),i("c223"),i("64aa"),i("e838");var a=n(i("0586")),r=n(i("a88e")),o=i("8959"),s=i("2d54"),u={components:{countDown:a.default,numberScroll:r.default},data:function(){return{checked:!1,datatime:1676344056,product_id:"",cartArr:[{name:this.$t("微信支付"),icon:"icon-weixin2",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:1},{name:this.$t("支付宝支付"),icon:"icon-zhifubao",value:"alipay",title:this.$t("使用支付宝支付"),payStatus:1},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("可用余额"),payStatus:1},{name:this.$t("线上支付"),icon:"icon-yuezhifu1",value:"offline",title:this.$t("使用线上付款"),payStatus:2},{name:this.$t("好友代付"),icon:"icon-haoyoudaizhifu",value:"friend",title:this.$t("找微信好友支付"),payStatus:1}],orderId:0,fromType:"",active:0,payPrice:0,payPriceShow:0,payPostage:0,offlinePostage:!1,invalidTime:0,initIn:!1,jumpData:{orderId:"",msg:""},formContent:"",oid:0}},watch:{cartArr:{handler:function(t,e){var i=this,n=[];t.forEach((function(t,e){t.payStatus&&(t.index=e,n.push(t))})),this.$nextTick((function(t){i.active=n[0].index,i.paytype=n[0].value}))},immediate:!0,deep:!0}},onLoad:function(t){t.order_id&&(this.orderId=t.order_id),t.from_type&&(this.fromType=t.from_type),this.getBasicConfig()},onShow:function(){var t=wx.getEnterOptionsSync();if("1038"==t.scene&&"wxef277996acc166c3"==t.referrerInfo.appId&&this.initIn){var e=t.referrerInfo.extraData;this.initIn=!1,e?"success"==e.code?this.$util.Tips({title:this.$t("支付成功"),icon:"success"},{tab:5,url:"/pages/goods/order_pay_status/index?order_id=".concat(this.orderId,"&msg=").concat(this.jumpData.msg,"&type=3&totalPrice=").concat(this.payPriceShow)}):"cancel"==e.code?this.$util.Tips({title:this.$t("取消支付")},{tab:5,url:"/pages/goods/order_pay_status/index?order_id=".concat(this.orderId,"&msg=").concat(this.$t("取消支付"),"&type=3&totalPrice=").concat(this.payPriceShow,"&status=2")}):uni.reLaunch({url:"/pages/goods/order_pay_status/index?order_id=".concat(this.orderId,"&msg=").concat(this.$t("支付失败"),"&totalPrice=").concat(this.payPriceShow)}):this.$util.Tips({title:this.$t("取消支付")},{tab:5,url:"/pages/goods/order_pay_status/index?order_id=".concat(this.orderId,"&msg=").concat(this.$t("取消支付"),"&type=3&totalPrice=").concat(this.payPriceShow,"&status=2")})}},methods:{getBasicConfig:function(){var t=this;(0,s.basicConfig)().then((function(e){t.cartArr[0].payStatus=e.data.pay_weixin_open||0,t.cartArr[1].payStatus=e.data.ali_pay_status||0,t.cartArr[2].payStatus=e.data.yue_pay_status,e.data.offline_pay_status?t.cartArr[3].payStatus=1:t.cartArr[3].payStatus=0,t.cartArr[4].payStatus=e.data.friend_pay_status||0,t.getCashierOrder()})).catch((function(e){return uni.hideLoading(),t.$util.Tips({title:e})}))},getCashierOrder:function(){var t=this;uni.showLoading({title:this.$t("创建订单中")}),(0,o.getCashierOrder)(this.orderId,this.fromType).then((function(e){t.payPrice=t.payPriceShow=e.data.pay_price,t.payPostage=e.data.pay_postage,t.offlinePostage=e.data.offline_postage,t.invalidTime=e.data.invalid_time,t.cartArr[2].number=e.data.now_money,t.number=Number(e.data.now_money)||0,t.oid=e.data.oid,t.product_id=e.data.product_id[0],uni.hideLoading()})).catch((function(e){return uni.hideLoading(),t.$util.Tips({title:e})}))},payType:function(t,e,i){this.active=i,this.paytype=e,this.number=t,this.offlinePostage&&(this.payPriceShow="offline"==e?this.$util.$h.Sub(this.payPrice,this.payPostage):this.payPrice)},formpost:function(t,e){var i=document.createElement("form");for(var n in i.action=t,i.method="post",i.target="_self",i.style.display="none",e){var a=document.createElement("input");a.name=n,a.value=e[n],i.appendChild(a)}document.body.appendChild(i),this.$nextTick((function(t){i.submit()}))},waitPay:function(){uni.reLaunch({url:"/pages/goods/order_pay_status/index?order_id="+this.orderId+"&msg=取消支付&type=3&status=2&totalPrice="+this.payPriceShow})},goPay:function(t,e){var i=this,n=this;return n.orderId?"yue"==e&&parseFloat(t)<parseFloat(n.payPriceShow)?n.$util.Tips({title:n.$t("余额不足")}):(uni.showLoading({title:n.$t("支付中")}),"friend"==e&&n.orderId?(uni.hideLoading(),uni.navigateTo({url:"/pages/users/payment_on_behalf/index?oid="+n.oid+"&spread="+this.$store.state.app.uid,success:function(t){},fail:function(){},complete:function(){}})):void(0,o.orderPay)({uni:n.orderId,paytype:e,type:n.friendPay?1:0,quitUrl:location.port?location.protocol+"//"+location.hostname+":"+location.port+"/pages/goods/order_details/index?order_id="+this.orderId:location.protocol+"//"+location.hostname+"/pages/goods/order_details/index?order_id="}).then((function(t){var a=t.data.status,r=(t.data.result.order_id,t.data.result.jsConfig),o="/pages/extension/customer_list/chat?productId="+i.product_id,s="/pages/users/payment_on_behalf/index?order_id="+i.orderId+"&spread="+i.$store.state.app.uid;switch(a){case"ORDER_EXIST":case"EXTEND_ORDER":return uni.hideLoading(),n.$util.Tips({title:t.msg},{tab:5,url:o});case"ALLINPAY_PAY":uni.hideLoading(),i.formpost(t.data.result.pay_url,r);break;case"PAY_ERROR":return uni.hideLoading(),n.$util.Tips({title:t.msg},{tab:5,url:o});case"SUCCESS":return uni.hideLoading(),"friend"!==e?n.$util.Tips({title:t.msg,icon:"success"},{tab:4,url:o}):n.$util.Tips({title:t.msg,icon:"success"},{tab:4,url:s});case"WECHAT_PAY":n.toPay=!0,i.$wechat.pay(t.data.result.jsConfig).then((function(t){return n.$util.Tips({title:n.$t("支付成功"),icon:"success"},{tab:5,url:o})})).catch((function(t){if(i.$wechat.isWeixin()||uni.redirectTo({url:o+"&msg="+n.$t("支付失败")+"&status=2"}),"chooseWXPay:cancel"==t.errMsg)return n.$util.Tips({title:n.$t("取消支付")},{tab:5,url:o+"&status=2"})}));break;case"PAY_DEFICIENCY":return uni.hideLoading(),n.$util.Tips({title:t.msg},{tab:5,url:o+"&status=1"});case"WECHAT_H5_PAY":uni.hideLoading(),n.$util.Tips({title:n.$t("等待支付中")},{tab:4,url:o+"&status=0"}),setTimeout((function(){location.href=t.data.result.jsConfig.h5_url}),1500);break;case"ALIPAY_PAY":uni.hideLoading(),n.$util.Tips({title:n.$t("等待支付中")},{tab:4,url:o+"&status=0"}),n.formContent=t.data.result.jsConfig,setTimeout((function(){document.getElementById("alipaysubmit").submit()}),1500);break}})).catch((function(t){return uni.hideLoading(),n.$util.Tips({title:t},(function(){n.$emit("onChangeFun",{action:"pay_fail"})}))}))):n.$util.Tips({title:n.$t("请选择要支付的订单")})}}};e.default=u},f608:function(t,e,i){"use strict";i.r(e);var n=i("4e6c"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);