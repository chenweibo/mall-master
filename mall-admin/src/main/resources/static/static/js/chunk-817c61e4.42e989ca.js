(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-817c61e4"],{"055b":function(t,e,s){"use strict";s("22f5")},"22f5":function(t,e,s){},c466:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return r}));s("ac1f"),s("5319"),s("4d63"),s("25f0"),s("1276");function l(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var l in s)if(new RegExp("(".concat(l,")")).test(e)){var r=s[l]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:a(r))}return e}function a(t){return("00"+t).substr(t.length)}function r(t,e){e||(e="-");var s,l=t.split(e),a=parseInt(l[0]);s=0===l[1].indexOf("0")?parseInt(l[1].substring(1)):parseInt(l[1]);var r=parseInt(l[2]),o=new Date(a,s-1,r);return o}},cc88:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-container"},[s("div",[s("el-steps",{attrs:{active:t.formatStepStatus(t.order.status),"finish-status":"success","align-center":""}},[s("el-step",{attrs:{title:"提交订单",description:t.formatTime(t.order.createTime)}}),s("el-step",{attrs:{title:"支付订单",description:t.formatTime(t.order.paymentTime)}}),s("el-step",{attrs:{title:"平台发货",description:t.formatTime(t.order.deliveryTime)}}),s("el-step",{attrs:{title:"确认收货",description:t.formatTime(t.order.receiveTime)}}),s("el-step",{attrs:{title:"完成评价",description:t.formatTime(t.order.commentTime)}})],1)],1),s("el-card",{staticStyle:{"margin-top":"15px"},attrs:{shadow:"never"}},[s("div",{staticClass:"operate-container"},[s("i",{staticClass:"el-icon-warning color-danger",staticStyle:{"margin-left":"20px"}}),s("span",{staticClass:"color-danger"},[t._v("当前订单状态："+t._s(t._f("formatStatus")(t.order.status)))]),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.order.status,expression:"order.status===0"}],staticClass:"operate-button-container"},[s("el-button",{attrs:{size:"mini"},on:{click:t.showUpdateReceiverDialog}},[t._v("修改收货人信息")]),s("el-button",{attrs:{size:"mini"}},[t._v("修改商品信息")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showUpdateMoneyDialog}},[t._v("修改费用信息")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMessageDialog}},[t._v("发送站内信")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showCloseOrderDialog}},[t._v("关闭订单")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMarkOrderDialog}},[t._v("备注订单")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.order.status,expression:"order.status===1"}],staticClass:"operate-button-container"},[s("el-button",{attrs:{size:"mini"},on:{click:t.showUpdateReceiverDialog}},[t._v("修改收货人信息")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMessageDialog}},[t._v("发送站内信")]),s("el-button",{attrs:{size:"mini"}},[t._v("取消订单")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMarkOrderDialog}},[t._v("备注订单")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.order.status||3===t.order.status,expression:"order.status===2||order.status===3"}],staticClass:"operate-button-container"},[s("el-button",{attrs:{size:"mini"},on:{click:t.showLogisticsDialog}},[t._v("订单跟踪")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMessageDialog}},[t._v("发送站内信")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMarkOrderDialog}},[t._v("备注订单")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:4===t.order.status,expression:"order.status===4"}],staticClass:"operate-button-container"},[s("el-button",{attrs:{size:"mini"},on:{click:t.handleDeleteOrder}},[t._v("删除订单")]),s("el-button",{attrs:{size:"mini"},on:{click:t.showMarkOrderDialog}},[t._v("备注订单")])],1)]),s("div",{staticStyle:{"margin-top":"20px"}},[s("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),s("span",{staticClass:"font-small"},[t._v("基本信息")])],1),s("div",{staticClass:"table-layout"},[s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("订单编号")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("发货单流水号")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("用户账号")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("支付方式")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("订单来源")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("订单类型")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.order.orderSn))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v("暂无")]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.order.memberUsername))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatPayType")(t.order.payType)))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatSourceType")(t.order.sourceType)))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatOrderType")(t.order.orderType)))])],1),s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("配送方式")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("物流单号")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("自动确认收货时间")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("订单可得优币")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("订单可得成长值")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("活动信息")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatNull")(t.order.deliveryCompany)))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatNull")(t.order.deliverySn)))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.order.autoConfirmDay)+"天")]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.order.integration))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.order.growth))]),s("el-col",{staticClass:"table-cell",attrs:{span:4}},[s("el-popover",{attrs:{placement:"top-start",title:"活动信息",width:"200",trigger:"hover",content:t.order.promotionInfo}},[s("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t._f("formatLongText")(t.order.promotionInfo)))])])],1)],1)],1),s("div",{staticStyle:{"margin-top":"20px"}},[s("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),s("span",{staticClass:"font-small"},[t._v("收货人信息")])],1),s("div",{staticClass:"table-layout"},[s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("收货人")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("手机号码")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("邮政编码")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("收货地址")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v(t._s(t.order.receiverName))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v(t._s(t.order.receiverPhone))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v(t._s(t.order.receiverPostCode))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v(t._s(t._f("formatAddress")(t.order)))])],1)],1),s("div",{staticStyle:{"margin-top":"20px"}},[s("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),s("span",{staticClass:"font-small"},[t._v("商品信息")])],1),s("el-table",{ref:"orderItemTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.order.orderItemList,border:""}},[s("el-table-column",{attrs:{label:"商品图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{staticStyle:{height:"80px"},attrs:{src:t.row.productPic}})]}}])}),s("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("p",[t._v(t._s(e.row.productName))]),s("p",[t._v("品牌："+t._s(e.row.productBrand))])]}}])}),s("el-table-column",{attrs:{label:"价格/货号",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("p",[t._v("价格：￥"+t._s(e.row.productPrice))]),s("p",[t._v("货号："+t._s(e.row.productSn))])]}}])}),s("el-table-column",{attrs:{label:"属性",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatProductAttr")(e.row.productAttr))+" ")]}}])}),s("el-table-column",{attrs:{label:"数量",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.productQuantity)+" ")]}}])}),s("el-table-column",{attrs:{label:"小计",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.productPrice*e.row.productQuantity)+" ")]}}])})],1),s("div",{staticStyle:{float:"right",margin:"20px"}},[t._v(" 合计："),s("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.totalAmount))])]),s("div",{staticStyle:{"margin-top":"60px"}},[s("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),s("span",{staticClass:"font-small"},[t._v("费用信息")])],1),s("div",{staticClass:"table-layout"},[s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("商品合计")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("运费")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("优惠券")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("积分抵扣")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("￥"+t._s(t.order.totalAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("￥"+t._s(t.order.freightAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.couponAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.integrationAmount))])],1),s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("活动优惠")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("折扣金额")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("订单总金额")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("应付款金额")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.promotionAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.discountAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.totalAmount+t.order.freightAmount))])]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.payAmount+t.order.freightAmount-t.order.discountAmount))])])],1)],1),s("div",{staticStyle:{"margin-top":"20px"}},[s("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),s("span",{staticClass:"font-small"},[t._v("操作信息")])],1),s("el-table",{ref:"orderHistoryTable",staticStyle:{"margin-top":"20px",width:"100%"},attrs:{data:t.order.historyList,border:""}},[s("el-table-column",{attrs:{label:"操作者",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.operateMan)+" ")]}}])}),s("el-table-column",{attrs:{label:"操作时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.formatTime(e.row.createTime))+" ")]}}])}),s("el-table-column",{attrs:{label:"订单状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatStatus")(e.row.orderStatus))+" ")]}}])}),s("el-table-column",{attrs:{label:"付款状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatPayStatus")(e.row.orderStatus))+" ")]}}])}),s("el-table-column",{attrs:{label:"发货状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatDeliverStatus")(e.row.orderStatus))+" ")]}}])}),s("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.note)+" ")]}}])})],1)],1),s("el-dialog",{attrs:{title:"修改收货人信息",visible:t.receiverDialogVisible,width:"40%"},on:{"update:visible":function(e){t.receiverDialogVisible=e}}},[s("el-form",{ref:"receiverInfoForm",attrs:{model:t.receiverInfo,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"收货人姓名："}},[s("el-input",{staticStyle:{width:"200px"},model:{value:t.receiverInfo.receiverName,callback:function(e){t.$set(t.receiverInfo,"receiverName",e)},expression:"receiverInfo.receiverName"}})],1),s("el-form-item",{attrs:{label:"手机号码："}},[s("el-input",{staticStyle:{width:"200px"},model:{value:t.receiverInfo.receiverPhone,callback:function(e){t.$set(t.receiverInfo,"receiverPhone",e)},expression:"receiverInfo.receiverPhone"}})],1),s("el-form-item",{attrs:{label:"邮政编码："}},[s("el-input",{staticStyle:{width:"200px"},model:{value:t.receiverInfo.receiverPostCode,callback:function(e){t.$set(t.receiverInfo,"receiverPostCode",e)},expression:"receiverInfo.receiverPostCode"}})],1),s("el-form-item",{attrs:{label:"所在区域："}},[s("v-distpicker",{attrs:{province:t.receiverInfo.receiverProvince,city:t.receiverInfo.receiverCity,area:t.receiverInfo.receiverRegion},on:{selected:t.onSelectRegion}})],1),s("el-form-item",{attrs:{label:"详细地址："}},[s("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:t.receiverInfo.receiverDetailAddress,callback:function(e){t.$set(t.receiverInfo,"receiverDetailAddress",e)},expression:"receiverInfo.receiverDetailAddress"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.receiverDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleUpdateReceiverInfo}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"修改费用信息",visible:t.moneyDialogVisible,width:"40%"},on:{"update:visible":function(e){t.moneyDialogVisible=e}}},[s("div",{staticClass:"table-layout"},[s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("商品合计")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("运费")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("优惠券")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("积分抵扣")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("￥"+t._s(t.order.totalAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("el-input",{attrs:{size:"mini"},model:{value:t.moneyInfo.freightAmount,callback:function(e){t.$set(t.moneyInfo,"freightAmount",t._n(e))},expression:"moneyInfo.freightAmount"}},[s("template",{slot:"prepend"},[t._v("￥")])],2)],1),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.couponAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.integrationAmount))])],1),s("el-row",[s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("活动优惠")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("折扣金额")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("订单总金额")]),s("el-col",{staticClass:"table-cell-title",attrs:{span:6}},[t._v("应付款金额")])],1),s("el-row",[s("el-col",{staticClass:"table-cell",attrs:{span:6}},[t._v("-￥"+t._s(t.order.promotionAmount))]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("el-input",{attrs:{size:"mini"},model:{value:t.moneyInfo.discountAmount,callback:function(e){t.$set(t.moneyInfo,"discountAmount",t._n(e))},expression:"moneyInfo.discountAmount"}},[s("template",{slot:"prepend"},[t._v("-￥")])],2)],1),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.totalAmount+t.moneyInfo.freightAmount))])]),s("el-col",{staticClass:"table-cell",attrs:{span:6}},[s("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.payAmount+t.moneyInfo.freightAmount-t.moneyInfo.discountAmount))])])],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.moneyDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleUpdateMoneyInfo}},[t._v("确 定")])],1)]),s("el-dialog",{attrs:{title:"发送站内信",visible:t.messageDialogVisible,width:"40%"},on:{"update:visible":function(e){t.messageDialogVisible=e}}},[s("el-form",{ref:"receiverInfoForm",attrs:{model:t.message,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"标题："}},[s("el-input",{staticStyle:{width:"200px"},model:{value:t.message.title,callback:function(e){t.$set(t.message,"title",e)},expression:"message.title"}})],1),s("el-form-item",{attrs:{label:"内容："}},[s("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.messageDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleSendMessage}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"关闭订单",visible:t.closeDialogVisible,width:"40%"},on:{"update:visible":function(e){t.closeDialogVisible=e}}},[s("el-form",{attrs:{model:t.closeInfo,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"操作备注："}},[s("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:t.closeInfo.note,callback:function(e){t.$set(t.closeInfo,"note",e)},expression:"closeInfo.note"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.closeDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseOrder}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"备注订单",visible:t.markOrderDialogVisible,width:"40%"},on:{"update:visible":function(e){t.markOrderDialogVisible=e}}},[s("el-form",{attrs:{model:t.markInfo,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"操作备注："}},[s("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:t.markInfo.note,callback:function(e){t.$set(t.markInfo,"note",e)},expression:"markInfo.note"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.markOrderDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleMarkOrder}},[t._v("确 定")])],1)],1),s("logistics-dialog",{model:{value:t.logisticsDialogVisible,callback:function(e){t.logisticsDialogVisible=e},expression:"logisticsDialogVisible"}})],1)},a=[],r=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("f8b7")),o=s("d60c"),i=s("c466"),n=s("784f"),c=s.n(n),u={orderId:null,receiverName:null,receiverPhone:null,receiverPostCode:null,receiverDetailAddress:null,receiverProvince:null,receiverCity:null,receiverRegion:null,status:null},d={name:"OrderDetail",components:{VDistpicker:c.a,LogisticsDialog:o["a"]},filters:{formatNull:function(t){return void 0===t||null===t||""===t?"暂无":t},formatLongText:function(t){return void 0===t||null===t||""===t?"暂无":t.length>8?t.substr(0,8)+"...":t},formatPayType:function(t){return 1===t?"支付宝":2===t?"微信":"未支付"},formatSourceType:function(t){return 1===t?"APP订单":"PC订单"},formatOrderType:function(t){return 1===t?"秒杀订单":"正常订单"},formatAddress:function(t){var e=t.receiverProvince;return null!=t.receiverCity&&(e+="  "+t.receiverCity),e+="  "+t.receiverRegion,e+="  "+t.receiverDetailAddress,e},formatStatus:function(t){return 1===t?"待发货":2===t?"已发货":3===t?"已完成":4===t?"已关闭":5===t?"无效订单":"待付款"},formatPayStatus:function(t){return 0===t?"未支付":4===t?"已退款":"已支付"},formatDeliverStatus:function(t){return 0===t||1===t?"未发货":"已发货"},formatProductAttr:function(t){if(null==t)return"";for(var e=JSON.parse(t),s="",l=0;l<e.length;l++)s+=e[l].key,s+=":",s+=e[l].value,s+=";";return s}},data:function(){return{id:null,order:{},receiverDialogVisible:!1,receiverInfo:Object.assign({},u),moneyDialogVisible:!1,moneyInfo:{orderId:null,freightAmount:0,discountAmount:0,status:null},messageDialogVisible:!1,message:{title:null,content:null},closeDialogVisible:!1,closeInfo:{note:null,id:null},markOrderDialogVisible:!1,markInfo:{note:null},logisticsDialogVisible:!1}},created:function(){var t=this;this.id=this.list=this.$route.query.id,Object(r["e"])(this.id).then((function(e){t.order=e.data}))},methods:{onSelectRegion:function(t){this.receiverInfo.receiverProvince=t.province.value,this.receiverInfo.receiverCity=t.city.value,this.receiverInfo.receiverRegion=t.area.value},formatTime:function(t){if(null==t||""===t)return"";var e=new Date(t);return Object(i["a"])(e,"yyyy-MM-dd hh:mm:ss")},formatStepStatus:function(t){return 1===t?2:2===t?3:3===t?4:1},showUpdateReceiverDialog:function(){this.receiverDialogVisible=!0,this.receiverInfo={orderId:this.order.id,receiverName:this.order.receiverName,receiverPhone:this.order.receiverPhone,receiverPostCode:this.order.receiverPostCode,receiverDetailAddress:this.order.receiverDetailAddress,receiverProvince:this.order.receiverProvince,receiverCity:this.order.receiverCity,receiverRegion:this.order.receiverRegion,status:this.order.status}},handleUpdateReceiverInfo:function(){var t=this;this.$confirm("是否要修改收货信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["h"])(t.receiverInfo).then((function(e){t.receiverDialogVisible=!1,t.$message({type:"success",message:"修改成功!"}),Object(r["e"])(t.id).then((function(e){t.order=e.data}))}))}))},showUpdateMoneyDialog:function(){this.moneyDialogVisible=!0,this.moneyInfo.orderId=this.order.id,this.moneyInfo.freightAmount=this.order.freightAmount,this.moneyInfo.discountAmount=this.order.discountAmount,this.moneyInfo.status=this.order.status},handleUpdateMoneyInfo:function(){var t=this;this.$confirm("是否要修改费用信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["f"])(t.moneyInfo).then((function(e){t.moneyDialogVisible=!1,t.$message({type:"success",message:"修改成功!"}),Object(r["e"])(t.id).then((function(e){t.order=e.data}))}))}))},showMessageDialog:function(){this.messageDialogVisible=!0,this.message.title=null,this.message.content=null},handleSendMessage:function(){var t=this;this.$confirm("是否要发送站内信?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.messageDialogVisible=!1,t.$message({type:"success",message:"发送成功!"})}))},showCloseOrderDialog:function(){this.closeDialogVisible=!0,this.closeInfo.note=null,this.closeInfo.id=this.id},handleCloseOrder:function(){var t=this;this.$confirm("是否要关闭?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=new URLSearchParams;e.append("ids",[t.closeInfo.id]),e.append("note",t.closeInfo.note),Object(r["a"])(e).then((function(e){t.closeDialogVisible=!1,t.$message({type:"success",message:"订单关闭成功!"}),Object(r["e"])(t.id).then((function(e){t.order=e.data}))}))}))},showMarkOrderDialog:function(){this.markOrderDialogVisible=!0,this.markInfo.id=this.id,this.closeOrder.note=null},handleMarkOrder:function(){var t=this;this.$confirm("是否要备注订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=new URLSearchParams;e.append("id",t.markInfo.id),e.append("note",t.markInfo.note),e.append("status",t.order.status),Object(r["g"])(e).then((function(e){t.markOrderDialogVisible=!1,t.$message({type:"success",message:"订单备注成功!"}),Object(r["e"])(t.id).then((function(e){t.order=e.data}))}))}))},handleDeleteOrder:function(){var t=this;this.$confirm("是否要进行该删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=new URLSearchParams;e.append("ids",[t.id]),Object(r["b"])(e).then((function(e){t.$message({message:"删除成功！",type:"success",duration:1e3}),t.$router.back()}))}))},showLogisticsDialog:function(){this.logisticsDialogVisible=!0}}},f=d,m=(s("055b"),s("2877")),p=Object(m["a"])(f,l,a,!1,null,"b05952d2",null);e["default"]=p.exports},d60c:function(t,e,s){"use strict";var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:"订单跟踪",visible:t.visible,"before-close":t.handleClose,width:"40%"},on:{"update:visible":function(e){t.visible=e}}},[s("el-steps",{attrs:{direction:"vertical",active:6,"finish-status":"success",space:"50px"}},t._l(t.logisticsList,(function(t){return s("el-step",{key:t.name,attrs:{title:t.name,description:t.time}})})),1)],1)},a=[],r=[{name:"订单已提交，等待付款",time:"2017-04-01 12:00:00 "},{name:"订单付款成功",time:"2017-04-01 12:00:00 "},{name:"在北京市进行下级地点扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在分拨中心广东深圳公司进行卸车扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在广东深圳公司进行发出扫描",time:"2017-04-01 12:00:00 "},{name:"到达目的地网点广东深圳公司，快件将很快进行派送",time:"2017-04-01 12:00:00 "},{name:"订单已签收，期待再次为您服务",time:"2017-04-01 12:00:00 "}],o={name:"LogisticsDialog",props:{value:Boolean},data:function(){return{logisticsList:Object.assign({},r)}},computed:{visible:{get:function(){return this.value},set:function(t){this.value=t}}},methods:{emitInput:function(t){this.$emit("input",t)},handleClose:function(){this.emitInput(!1)}}},i=o,n=s("2877"),c=Object(n["a"])(i,l,a,!1,null,null,null);e["a"]=c.exports},f8b7:function(t,e,s){"use strict";s.d(e,"d",(function(){return a})),s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return i})),s.d(e,"e",(function(){return n})),s.d(e,"h",(function(){return c})),s.d(e,"f",(function(){return u})),s.d(e,"g",(function(){return d}));var l=s("b775");function a(t){return Object(l["a"])({url:"/order/list",method:"get",params:t})}function r(t){return Object(l["a"])({url:"/order/update/close",method:"post",params:t})}function o(t){return Object(l["a"])({url:"/order/delete",method:"post",params:t})}function i(t){return Object(l["a"])({url:"/order/update/delivery",method:"post",data:t})}function n(t){return Object(l["a"])({url:"/order/"+t,method:"get"})}function c(t){return Object(l["a"])({url:"/order/update/receiverInfo",method:"post",data:t})}function u(t){return Object(l["a"])({url:"/order/update/moneyInfo",method:"post",data:t})}function d(t){return Object(l["a"])({url:"/order/update/note",method:"post",params:t})}}}]);