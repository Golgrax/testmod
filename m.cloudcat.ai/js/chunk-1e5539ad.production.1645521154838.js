(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5539ad"],{"0048":function(e,t,n){},"10c2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"faq-container"},[e._e(),n("iframe",{ref:"faqFrame",staticClass:"frame",attrs:{src:e.src}}),e._e()])},a=[],o={name:"Faq",data:function(){return{src:""}},computed:{isDebug:function(){return this.$variable.isDebug()}},created:function(){var e=this,t=this.$route.params.select;this.src=(this.isDebug?"https://www.test.yunmaowan.com/faq":"https://www.cloudcat.ai/faq")+(t?"?select="+t:""),this.$catloading.on("faqFrame"),setTimeout((function(){e.$catloading.off("faqFrame")}),3e3),window.addEventListener("message",this.receiveMsg,!0)},mounted:function(){var e=this;this.$refs.faqFrame.onload=function(t){e.$catloading.off("faqFrame")}},beforeDestroy:function(){window.removeEventListener("message",this.receiveMsg,!0)},methods:{test:function(){},finishThis:function(){this.$router.push({path:this.$path.get()})},receiveMsg:function(e){switch(/test/.test(e.data),e.data){case"closeFaq":this.finishThis();break}}}},i=o,s=(n("8d36"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"d0d519ae",null);t["default"]=c.exports},"178d":function(e,t,n){},"1b29":function(e,t,n){},2336:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filler"})},a=[],o={name:"DiscordFiller"},i=o,s=(n("a7c7"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"587fb687",null);t["default"]=c.exports},"45f2":function(e,t,n){"use strict";n("1b29")},5366:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bot-options-container"},[n("NeedHelpTag"),n("router-view")],1)},a=[],o=(n("ac1f"),n("5319"),n("6e00")),i={name:"BotOptions",components:{NeedHelpTag:o["a"]},created:function(){switch(this.$store.state.GameInfo.selectedGameInfo.game_name_short){case"hayday":this.$router.replace({path:"/bot/hayday"});break;case"ro":this.$router.replace({path:"/bot/ragnarok"});break;default:this.$router.replace({path:"/bot/default"})}}},s=i,c=(n("45f2"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"56036b83",null);t["default"]=u.exports},"7d07":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkout-container"},[n("router-view")],1)},a=[],o=(n("b0c0"),n("a9e3"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),i={name:"checkout",data:function(){return{sourceLink:window.localStorage.getItem("paymentSourceLink")||"Unknown"}},computed:{},created:function(){var e=this.$route.query;"platinum"===this.$route.name||this.$route.meta.checkoutPass||("donate"===e.for?this.donateVerify(e):this.paymentVerify(e))},beforeDestroy:function(){window.localStorage.removeItem("paymentSourceLink")},methods:{doPaymentTracker:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$variable.getTrackerParam();case 2:r=n.sent,Object.assign(r,e),t.$nenlyTracker({action:"show_payment_result",param:r});case 5:case"end":return n.stop()}}),n)})))()},donateVerify:function(e){var t=this;void 0!==e.result?"false"!=e.result?void 0!==e.nenlyOrderNo?this.$api.payment.checkout({nenlyToken:e.nenlyToken,token:e.token,nenlyOrderNo:e.nenlyOrderNo}).then((function(e){t.handleDonationCheckoutRes(e)})):this.$router.push({path:this.$path.get()}):this.$router.push({name:"failed",params:{for:e.for}}):this.$router.push({path:this.$path.get()})},paymentVerify:function(e){null!=e&&(void 0!==e.result?"false"!=e.result?void 0!==e.nenlyOrderNo?(this.$catloading.on("paymentCallback"),void 0===e.channel&&(e.channel="Paypal"),e.channel=e.channel.replace(e.channel[0],e.channel[0].toUpperCase()),"true"==e.subscription?this.subscriptionCallback(e):this.creditCallback(e)):this.$router.push({path:this.$path.get()}):this.$router.push({path:"/checkout/failed"}):this.$router.push({path:this.$path.get()}))},subscriptionCallback:function(e){this.$catloading.off("paymentCallback"),this.$api.payment.checkout({nenlyToken:e.nenlyToken,token:e.token,nenlyOrderNo:e.nenlyOrderNo}),window.localStorage.getItem("isSubscribed")||(this.$nenlyTracker({action:"user_status_change",param:{isSubscribed:!0}}),window.localStorage.setItem("isSubscribed","true"));var t=e.product_id,n=e.product_price,r="Subscription",a="Success";this.doPaymentTracker({order_item:t,order_amount:n,order_type:r,payment_result:a,payment_medium:e.channel,payment_method:e.method}),this.$nenlyTracker({action:"payment_success",param:{order_item:t,order_membership:e.order_membership,order_amount:Number(n)/100,order_type:r,payment_medium:e.channel,payment_method:e.method,currency:this.$product.currency.content,source_link:this.sourceLink,game_name:e.game_name}}),"upgrade"===e.product_type?this.$router.push({path:"/checkout/platinum"}):this.$router.push({path:"/checkout/success"})},creditCallback:function(e){var t=this;this.$api.payment.checkout({nenlyToken:e.nenlyToken,token:e.token,nenlyOrderNo:e.nenlyOrderNo}).then((function(n){t.handleCheckoutResponse(n,e)}))},creditCallbackBack:function(e){var t=this;switch(e.channel){case"Stripe":this.$api.payment.checkoutStripe({token:window.localStorage.getItem("token")||"",nenlyOrderNo:e.nenlyOrderNo}).then((function(n){t.handleCheckoutResponse(n,e)}));break;case"Payssion":this.$api.payment.checkoutPayssion({token:window.localStorage.getItem("token")||"",nenlyOrderNo:e.nenlyOrderNo}).then((function(n){t.handleCheckoutResponse(n,e)}));break;case"PayerMax":this.$api.payment.checkoutPayermax({token:window.localStorage.getItem("token")||"",nenlyOrderNo:e.nenlyOrderNo}).then((function(n){t.handleCheckoutResponse(n,e)}));break;case"Paypal":this.$api.payment.checkoutPaypal({nenlyToken:e.nenlyToken,token:e.token,nenlyOrderNo:e.nenlyOrderNo}).then((function(n){t.handleCheckoutResponse(n,e)}));break;default:this.$router.push({path:"/checkout/failed"})}},handleDonationCheckoutRes:function(e){e.success?this.$router.push({path:"/checkout/donate"}):this.$router.push({path:"/checkout/failed"})},handleCheckoutResponse:function(e,t){this.$catloading.off("paymentCallback"),this.$store.dispatch("getUserInfo");var n="",r=0,a="One-time",o="",i=this.$route.query.for;"redeem"===i&&(a="Code"),e.success?(n=e.productId,r=e.product.price,o="Success",window.localStorage.getItem("isPayingUser")||(this.$nenlyTracker({action:"user_status_change",param:{isPayingUser:!0}}),window.localStorage.setItem("isPayingUser","true")),this.$nenlyTracker({action:"payment_success",param:{order_item:n,order_membership:t.order_membership,order_amount:Number(r)/100,order_type:a,payment_medium:t.channel,payment_method:t.method,currency:this.$product.currency.content,source_link:this.sourceLink,game_name:t.game_name}}),this.$router.push({path:"/checkout/success?from="+i})):(o="Failure",this.$router.push({name:"failed",params:{for:t.for}})),this.doPaymentTracker({order_item:n,order_amount:Number(r)/100,order_type:a,payment_result:o,payment_medium:t.channel})}}},s=i,c=(n("d323"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"4bd1d5d0",null);t["default"]=u.exports},"8d36":function(e,t,n){"use strict";n("e5ad")},a7c7:function(e,t,n){"use strict";n("c016")},a9c9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-container"},[n("transition",{attrs:{name:e.transitionName}},[n("router-view")],1),n("van-popup",{staticClass:"bottom-agreement",attrs:{position:"bottom","overlay-class":"agreement-fade"},model:{value:e.agreementShow,callback:function(t){e.agreementShow=t},expression:"agreementShow"}},[n("div",{staticClass:"agreement-wrapper"},[n("div",{staticClass:"agreement-wrapper__header"},[n("van-icon",{staticClass:"btn-back",attrs:{name:"cross",color:"#7B7B7B"},on:{click:e.closeAgreement}})],1),"tos"===e.agreementName?n("iframe",{staticClass:"agreement-frame",attrs:{src:"https://cloudcat.ai/TeamOfService.html"}}):e._e(),"pp"===e.agreementName?n("iframe",{staticClass:"agreement-frame",attrs:{src:"https://cloudcat.ai/PrivacyPolicy.html"}}):e._e()])])],1)},a=[],o=n("52da"),i=(n("56c1"),{name:"Auth",data:function(){return{transitionName:"swipe-left",agreementShow:!1,agreementName:""}},created:function(){var e=this;o["a"].$on("agreementShow",(function(t){e.agreementName=t,e.agreementShow=!0}))},mounted:function(){},beforeDestroy:function(){o["a"].$off("agreementShow")},methods:{closeAgreement:function(){this.agreementShow=!1}},watch:{$route:function(e,t){e.meta.index>t.meta.index?this.transitionName="swipe-left":this.transitionName="swipe-right"}}}),s=i,c=(n("f8c4"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"29d6d50a",null);t["default"]=u.exports},bf8a:function(e,t,n){"use strict";n.r(t),n.d(t,"loadStripe",(function(){return d}));var r="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null},i=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},s=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})},c=null,u=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe,window.Stripe)t(window.Stripe);else try{var r=o();r&&e||r||(r=i(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))),c},l=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return s(r,n),r},h=Promise.resolve().then((function(){return u(null)}));h["catch"]((function(e){}));var d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];!0;var r=Date.now();return h.then((function(e){return l(e,t,r)}))}},c016:function(e,t,n){},d323:function(e,t,n){"use strict";n("178d")},e5ad:function(e,t,n){},f8c4:function(e,t,n){"use strict";n("0048")}}]);