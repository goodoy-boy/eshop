(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-vip_paid-index~pages-goods-order_confirm-index~pages-users-payment_on_behalf-index~pages~6615de16"],{2558:function(t,e,n){var a=n("42a5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("967d").default;o("1222e8ea",a,!0,{sourceMap:!1,shadowMode:!1})},2993:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f"),n("2797"),n("aa9c"),n("e838"),n("5c47"),n("a1c1"),n("c223");var o=n("8959"),i=a(n("f96f")),r={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"},isCall:{type:Boolean,default:!1},friendPay:{type:Boolean,default:!1}},mixins:[i.default],data:function(){return{formContent:"",active:0,paytype:"",number:0}},watch:{payMode:{handler:function(t,e){var n=[];t.forEach((function(t,e){t.payStatus&&(t.index=e,n.push(t))})),this.active=n[0].index,this.paytype=n[0].value,this.number=n[0].number||0},immediate:!0,deep:!0}},methods:{payType:function(t,e,n){this.active=n,this.paytype=e,this.number=t,this.$emit("changePayType",e)},formpost:function(t,e){var n=document.createElement("form");for(var a in n.action=t,n.method="post",n.target="_self",n.style.display="none",e){var o=document.createElement("input");o.name=a,o.value=e[a],n.appendChild(o)}document.body.appendChild(n),this.$nextTick((function(t){n.submit()}))},close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(t,e){var n=this;if(this.isCall)return this.$emit("onChangeFun",{action:"payCheck",value:e});var a=this;return a.order_id?"yue"==e&&parseFloat(t)<parseFloat(a.totalPrice)?a.$util.Tips({title:a.$t("余额不足")}):(uni.showLoading({title:a.$t("支付中")}),void(0,o.orderPay)({uni:a.order_id,paytype:e,type:a.friendPay?1:0,from:this.$wechat.isWeixin()?"weixin":"weixinh5",quitUrl:location.port?location.protocol+"//"+location.hostname+":"+location.port+"/pages/goods/order_details/index?order_id="+this.order_id:location.protocol+"//"+location.hostname+"/pages/goods/order_details/index?order_id="+this.order_id}).then((function(t){var o=t.data.result.jsConfig;if("ALLINPAY_PAY"==t.data.status)uni.hideLoading(),n.formpost(t.data.result.pay_url,o);else switch(e){case"weixin":if(void 0===t.data.result)return a.$util.Tips({title:a.$t("缺少支付参数")});var i=t.data;if("WECHAT_H5_PAY"==i.status)return uni.hideLoading(),location.replace(i.result.jsConfig.h5_url),a.$util.Tips({title:a.$t("支付成功"),icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));a.$wechat.pay(i.result.jsConfig).then((function(){return a.$util.Tips({title:a.$t("支付成功"),icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}))})).catch((function(){return a.$util.Tips({title:a.$t("支付失败")},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}));break;case"yue":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"offline":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"friend":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"alipay":uni.hideLoading(),n.$wechat.isWeixin()?uni.redirectTo({url:"/pages/users/alipay_invoke/index?id=".concat(t.data.result.order_id,"&pay_key=").concat(t.data.result.pay_key)}):(uni.hideLoading(),a.formContent=t.data.result.jsConfig,a.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}})).catch((function(t){return uni.hideLoading(),a.$util.Tips({title:t},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}))):a.$util.Tips({title:a.$t("请选择要支付的订单")})}}};e.default=r},"42a5":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bgcolor[data-v-c28ab6a0]{background-color:var(--view-theme)}.payment[data-v-c28ab6a0]{position:fixed;bottom:0;left:0;width:100%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;padding-bottom:%?60?%;z-index:999;transition:all .3s cubic-bezier(.25,.5,.5,.9);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.payment .payMoney[data-v-c28ab6a0]{font-size:%?28?%;color:#333;text-align:center;margin-top:%?50?%}.payment .payMoney .font-color[data-v-c28ab6a0]{margin-left:%?10?%}.payment .payMoney .font-color .money[data-v-c28ab6a0]{font-size:%?40?%}.payment .button[data-v-c28ab6a0]{width:%?690?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?20?% auto 0 auto}.payment.on[data-v-c28ab6a0]{-webkit-transform:translateZ(0);transform:translateZ(0)}.payment .title[data-v-c28ab6a0]{text-align:center;height:%?123?%;font-size:%?32?%;color:#282828;font-weight:700;padding-right:%?30?%;margin-left:%?30?%;position:relative;border-bottom:%?1?% solid #eee}.payment .title .iconfont[data-v-c28ab6a0]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?38?%;color:#8a8a8a;font-weight:400}.payment .item[data-v-c28ab6a0]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.payment .item .left[data-v-c28ab6a0]{width:%?610?%}.payment .item .left .text[data-v-c28ab6a0]{width:%?540?%}.payment .item .left .text .name[data-v-c28ab6a0]{font-size:%?32?%;color:#282828}.payment .item .left .text .info[data-v-c28ab6a0]{font-size:%?24?%;color:#999}.payment .item .left .text .info .money[data-v-c28ab6a0]{color:#f90}.payment .item .left .iconfont[data-v-c28ab6a0]{font-size:%?45?%;color:#09bb07}.payment .item .left .iconfont.icon-zhifubao[data-v-c28ab6a0]{color:#00aaea}.payment .item .left .iconfont.icon-yuezhifu[data-v-c28ab6a0]{color:#f90}.payment .item .left .iconfont.icon-yuezhifu1[data-v-c28ab6a0]{color:#eb6623}.payment .item .left .iconfont.icon-tonglianzhifu1[data-v-c28ab6a0]{color:#305fd8}.payment .item .iconfont[data-v-c28ab6a0]{font-size:%?40?%;color:#ccc}.icon-haoyoudaizhifu[data-v-c28ab6a0]{color:#f34c3e!important}',""]),t.exports=e},"46d4":function(t,e,n){"use strict";var a=n("2558"),o=n.n(a);o.a},"68c2":function(t,e,n){"use strict";n.r(e);var a=n("6c6f"),o=n("c629");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("46d4");var r=n("828b"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"c28ab6a0",null,!1,a["a"],void 0);e["default"]=u.exports},"6c6f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"payment",class:t.pay_close?"on":""},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[t._v(t._s(t.$t("选择付款方式"))),n("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),t._l(t.payMode,(function(e,a){return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.payStatus,expression:"item.payStatus"}],key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.payType(e.number||0,e.value,a)}}},[n("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"iconfont",class:e.icon}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),"yue"==e.value?n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title)),n("span",{staticClass:"money"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])]):n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title))])],1)],1),n("v-uni-view",{staticClass:"iconfont",class:t.active==a?"icon-xuanzhong11 font-num":"icon-weixuan"})],1)})),n("v-uni-view",{staticClass:"payMoney"},[t._v(t._s(t.$t("支付"))),n("span",{staticClass:"font-color"},[t._v(t._s(t.$t("￥"))),n("span",{staticClass:"money"},[t._v(t._s(t.totalPrice))])])]),n("v-uni-view",{staticClass:"button bg-color acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay(t.number,t.paytype)}}},[t._v(t._s(t.$t("去付款")))])],2),t.pay_close?n("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],domProps:{innerHTML:t._s(t.formContent)}})],1)},o=[]},8959:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.adminExpress=function(t,e){return i.default.get("admin/order/express/"+t+"".concat(e?"/refund":""))},e.aliPay=function(t,e){return i.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})},e.cancelRefundOrder=function(t){return i.default.post("order/refund/cancel/"+t)},e.cartDel=function(t){"object"===(0,o.default)(t)&&(t=t.join(","));return i.default.post("cart/del",{ids:t})},e.changeCartNum=function(t,e){return i.default.post("cart/num",{id:t,number:e})},e.checkShipping=function(t,e){return i.default.post("order/check_shipping",{cartId:t,new:e})},e.express=function(t,e){return i.default.get("order/express/"+t+"".concat(e?"/refund":""))},e.getCartCounts=function(t){return i.default.get("cart/count",{numType:void 0===t?0:t})},e.getCartList=function(t){return i.default.get("cart/list",t)},e.getCashierOrder=function(t,e){return i.default.get("order/cashier/".concat(t,"/").concat(e))},e.getCouponsOrderPrice=function(t,e){return i.default.get("coupons/order/"+t,e)},e.getNewOrderList=function(t){return i.default.get("order/refund/list",t)},e.getOrderDetail=function(t,e){return i.default.get("order/detail/"+t+"".concat(e?"/".concat(e):""))},e.getOrderList=function(t){return i.default.get("order/list",t)},e.getRefundOrderDetail=function(t,e){return i.default.get("order/refund_detail/"+t+"".concat(e?"/".concat(e):""))},e.getResetCart=function(t){return i.default.post("v2/reset_cart",t)},e.offlineCheckPrice=function(t){return i.default.post("order/offline/check/price",t)},e.offlineCreate=function(t){return i.default.post("order/offline/create",t)},e.ordeRefundReason=function(){return i.default.get("order/refund/reason")},e.orderAgain=function(t){return i.default.post("order/again",{uni:t})},e.orderCancel=function(t){return i.default.post("order/cancel",{id:t})},e.orderComment=function(t){return i.default.post("order/comment",t)},e.orderConfirm=function(t,e,n,a){return i.default.post("order/confirm",{cartId:t,new:e,addressId:n,shipping_type:a})},e.orderCoupon=function(t){return i.default.post("v2/order/product_coupon/"+t)},e.orderCreate=function(t,e){return i.default.post("order/create/"+t,e)},e.orderData=function(){return i.default.get("order/data")},e.orderDel=function(t){return i.default.post("order/del",{uni:t})},e.orderInvoiceDetail=function(t){return i.default.get("v2/order/invoice_detail/".concat(t))},e.orderInvoiceList=function(t){return i.default.get("v2/order/invoice_list",t)},e.orderOfflinePayType=function(){return i.default.get("order/offline/pay/type")},e.orderPay=function(t){return i.default.post("order/pay",t)},e.orderProduct=function(t){return i.default.post("order/product",{unique:t})},e.orderRefundVerify=function(t){return i.default.post("order/refund/verify",t)},e.orderTake=function(t){return i.default.post("order/take",{uni:t})},e.postOrderComputed=function(t,e){return i.default.post("order/computed/"+t,e)},e.postRefundGoods=function(t){return i.default.post("order/refund/cart_info",t)},e.refundExpress=function(t){return i.default.post("order/refund/express",t)},e.refundGoodsList=function(t){return i.default.get("order/refund/cart_info/".concat(t))},e.refundOrderDel=function(t){return i.default.get("order/refund/del/"+t,{})},e.refundOrderDetail=function(t){return i.default.get("order/refund/detail/"+t)},e.returnGoodsSubmit=function(t,e){return i.default.post("order/refund/apply/".concat(t),e)},e.vcartList=function(){return i.default.get("v2/cart_list")},n("c223");var o=a(n("fcf3")),i=a(n("dd8e"))},c629:function(t,e,n){"use strict";n.r(e);var a=n("2993"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}}]);