(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f2c016"],{5286:function(t,e,o){"use strict";o("64d4")},"64d4":function(t,e,o){},a434:function(t,e,o){"use strict";var n=o("23e7"),r=o("23cb"),u=o("a691"),a=o("50c4"),l=o("7b0b"),c=o("65f0"),i=o("8418"),s=o("1dde"),d=o("ae40"),p=s("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,e){var o,n,s,d,p,m,v=l(this),y=a(v.length),C=r(t,y),O=arguments.length;if(0===O?o=n=0:1===O?(o=0,n=y-C):(o=O-2,n=h(f(u(e),0),y-C)),y+o-n>b)throw TypeError(g);for(s=c(v,n),d=0;d<n;d++)p=C+d,p in v&&i(s,d,v[p]);if(s.length=n,o<n){for(d=C;d<y-n;d++)p=d+n,m=d+o,p in v?v[m]=v[p]:delete v[m];for(d=y;d>y-n+o;d--)delete v[d-1]}else if(o>n)for(d=y-n;d>C;d--)p=d+n-1,m=d+o-1,p in v?v[m]=v[p]:delete v[m];for(d=0;d<o;d++)v[d+C]=arguments[d+2];return v.length=y-n+o,s}})},bf65:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("coupon-detail",{attrs:{"is-edit":!0}})},r=[],u=o("e546"),a={name:"UpdateCoupon",components:{CouponDetail:u["a"]}},l=a,c=o("2877"),i=Object(c["a"])(l,n,r,!1,null,"4701eb42",null);e["default"]=i.exports},c4c8:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return u})),o.d(e,"e",(function(){return a})),o.d(e,"f",(function(){return l})),o.d(e,"i",(function(){return c})),o.d(e,"h",(function(){return i})),o.d(e,"a",(function(){return s})),o.d(e,"g",(function(){return d})),o.d(e,"d",(function(){return p}));var n=o("b775");function r(t){return Object(n["a"])({url:"/product/list",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/product/simpleList",method:"get",params:t})}function a(t){return Object(n["a"])({url:"/product/update/deleteStatus",method:"post",params:t})}function l(t){return Object(n["a"])({url:"/product/update/newStatus",method:"post",params:t})}function c(t){return Object(n["a"])({url:"/product/update/recommendStatus",method:"post",params:t})}function i(t){return Object(n["a"])({url:"/product/update/publishStatus",method:"post",params:t})}function s(t){return Object(n["a"])({url:"/product/create",method:"post",data:t})}function d(t,e){return Object(n["a"])({url:"/product/update/"+t,method:"post",data:e})}function p(t){return Object(n["a"])({url:"/product/updateInfo/"+t,method:"get"})}},cbfe:function(t,e,o){"use strict";o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return u})),o.d(e,"d",(function(){return a})),o.d(e,"e",(function(){return l})),o.d(e,"b",(function(){return c}));var n=o("b775");function r(t){return Object(n["a"])({url:"/coupon/list",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/coupon/create",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/coupon/"+t,method:"get"})}function l(t,e){return Object(n["a"])({url:"/coupon/update/"+t,method:"post",data:e})}function c(t){return Object(n["a"])({url:"/coupon/delete/"+t,method:"post"})}},d1f3:function(t,e,o){"use strict";o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return u})),o.d(e,"a",(function(){return a})),o.d(e,"g",(function(){return l})),o.d(e,"e",(function(){return c})),o.d(e,"h",(function(){return i})),o.d(e,"f",(function(){return s})),o.d(e,"d",(function(){return d}));var n=o("b775");function r(t,e){return Object(n["a"])({url:"/productCategory/list/"+t,method:"get",params:e})}function u(t){return Object(n["a"])({url:"/productCategory/delete/"+t,method:"post"})}function a(t){return Object(n["a"])({url:"/productCategory/create",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/productCategory/update/"+t,method:"post",data:e})}function c(t){return Object(n["a"])({url:"/productCategory/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/productCategory/update/showStatus",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/productCategory/update/navStatus",method:"post",data:t})}function d(){return Object(n["a"])({url:"/productCategory/list/withChildren",method:"get"})}},e546:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[o("el-form",{ref:"couponFrom",attrs:{model:t.coupon,rules:t.rules,"label-width":"150px",size:"small"}},[o("el-form-item",{attrs:{label:"优惠券类型："}},[o("el-select",{model:{value:t.coupon.type,callback:function(e){t.$set(t.coupon,"type",e)},expression:"coupon.type"}},t._l(t.typeOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"优惠券名称：",prop:"name"}},[o("el-input",{staticClass:"input-width",model:{value:t.coupon.name,callback:function(e){t.$set(t.coupon,"name",e)},expression:"coupon.name"}})],1),o("el-form-item",{attrs:{label:"适用平台："}},[o("el-select",{model:{value:t.coupon.platform,callback:function(e){t.$set(t.coupon,"platform",e)},expression:"coupon.platform"}},t._l(t.platformOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"总发行量：",prop:"publishCount"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.publishCount,callback:function(e){t.$set(t.coupon,"publishCount",t._n(e))},expression:"coupon.publishCount"}})],1),o("el-form-item",{attrs:{label:"面额：",prop:"amount"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"面值只能是数值，限2位小数"},model:{value:t.coupon.amount,callback:function(e){t.$set(t.coupon,"amount",t._n(e))},expression:"coupon.amount"}},[o("template",{slot:"append"},[t._v("元")])],2)],1),o("el-form-item",{attrs:{label:"每人限领："}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.perLimit,callback:function(e){t.$set(t.coupon,"perLimit",e)},expression:"coupon.perLimit"}},[o("template",{slot:"append"},[t._v("张")])],2)],1),o("el-form-item",{attrs:{label:"使用门槛：",prop:"minPoint"}},[o("el-input",{staticClass:"input-width",attrs:{placeholder:"只能输入正整数"},model:{value:t.coupon.minPoint,callback:function(e){t.$set(t.coupon,"minPoint",t._n(e))},expression:"coupon.minPoint"}},[o("template",{slot:"prepend"},[t._v("满")]),o("template",{slot:"append"},[t._v("元可用")])],2)],1),o("el-form-item",{attrs:{label:"领取日期：",prop:"enableTime"}},[o("el-date-picker",{staticClass:"input-width",attrs:{type:"date",placeholder:"选择日期"},model:{value:t.coupon.enableTime,callback:function(e){t.$set(t.coupon,"enableTime",e)},expression:"coupon.enableTime"}})],1),o("el-form-item",{attrs:{label:"有效期："}},[o("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.coupon.startTime,callback:function(e){t.$set(t.coupon,"startTime",e)},expression:"coupon.startTime"}}),o("span",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[t._v("至")]),o("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.coupon.endTime,callback:function(e){t.$set(t.coupon,"endTime",e)},expression:"coupon.endTime"}})],1),o("el-form-item",{attrs:{label:"可使用商品："}},[o("el-radio-group",{model:{value:t.coupon.useType,callback:function(e){t.$set(t.coupon,"useType",e)},expression:"coupon.useType"}},[o("el-radio-button",{attrs:{label:0}},[t._v("全场通用")]),o("el-radio-button",{attrs:{label:1}},[t._v("指定分类")]),o("el-radio-button",{attrs:{label:2}},[t._v("指定商品")])],1)],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1===t.coupon.useType,expression:"coupon.useType===1"}]},[o("el-cascader",{attrs:{clearable:"",placeholder:"请选择分类名称",options:t.productCateOptions},model:{value:t.selectProductCate,callback:function(e){t.selectProductCate=e},expression:"selectProductCate"}}),o("el-button",{on:{click:function(e){return t.handleAddProductCategoryRelation()}}},[t._v("添加")]),o("el-table",{ref:"productCateRelationTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.coupon.productCategoryRelationList,border:""}},[o("el-table-column",{attrs:{label:"分类名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.parentCategoryName)+">"+t._s(e.row.productCategoryName))]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(o){return t.handleDeleteProductCateRelation(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1)],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2===t.coupon.useType,expression:"coupon.useType===2"}]},[o("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"商品名称/商品货号","remote-method":t.searchProductMethod,loading:t.selectProductLoading},model:{value:t.selectProduct,callback:function(e){t.selectProduct=e},expression:"selectProduct"}},t._l(t.selectProductOptions,(function(e){return o("el-option",{key:e.productId,attrs:{label:e.productName,value:e.productId}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.productName))]),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("NO."+t._s(e.productSn))])])})),1),o("el-button",{on:{click:function(e){return t.handleAddProductRelation()}}},[t._v("添加")]),o("el-table",{ref:"productRelationTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.coupon.productRelationList,border:""}},[o("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productName))]}}])}),o("el-table-column",{attrs:{label:"货号",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("NO."+t._s(e.row.productSn))]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(o){return t.handleDeleteProductRelation(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1)],1),o("el-form-item",{attrs:{label:"备注："}},[o("el-input",{staticClass:"input-width",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.coupon.note,callback:function(e){t.$set(t.coupon,"note",e)},expression:"coupon.note"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("couponFrom")}}},[t._v("提交")]),t.isEdit?t._e():o("el-button",{on:{click:function(e){return t.resetForm("couponFrom")}}},[t._v("重置")])],1)],1)],1)},r=[],u=(o("b0c0"),o("a434"),o("cbfe")),a=o("c4c8"),l=o("d1f3"),c={type:0,name:null,platform:0,amount:null,perLimit:1,minPoint:null,startTime:null,endTime:null,useType:0,note:null,publishCount:null,productRelationList:[],productCategoryRelationList:[]},i=[{label:"全场赠券",value:0},{label:"会员赠券",value:1},{label:"购物赠券",value:2},{label:"注册赠券",value:3}],s=[{label:"全平台",value:0},{label:"移动平台",value:1},{label:"PC平台",value:2}],d={name:"CouponDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{coupon:Object.assign({},c),typeOptions:Object.assign({},i),platformOptions:Object.assign({},s),rules:{name:[{required:!0,message:"请输入优惠券名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],publishCount:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}],amount:[{type:"number",required:!0,message:"面值只能是数值，0.01-10000，限2位小数",trigger:"blur"}],minPoint:[{type:"number",required:!0,message:"只能输入正整数",trigger:"blur"}]},selectProduct:null,selectProductLoading:!1,selectProductOptions:[],selectProductCate:null,productCateOptions:[]}},created:function(){var t=this;this.isEdit&&Object(u["d"])(this.$route.query.id).then((function(e){t.coupon=e.data})),this.getProductCateList()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate((function(o){if(!o)return e.$message({message:"验证失败",type:"error",duration:1e3}),!1;e.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.isEdit?Object(u["e"])(e.$route.query.id,e.coupon).then((function(o){e.$refs[t].resetFields(),e.$message({message:"修改成功",type:"success",duration:1e3}),e.$router.back()})):Object(u["a"])(e.coupon).then((function(o){e.$refs[t].resetFields(),e.$message({message:"提交成功",type:"success",duration:1e3}),e.$router.back()}))}))}))},resetForm:function(t){this.$refs[t].resetFields(),this.coupon=Object.assign({},c)},searchProductMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(a["c"])({keyword:t}).then((function(t){e.loading=!1;var o=t.data;e.selectProductOptions=[];for(var n=0;n<o.length;n++){var r=o[n];e.selectProductOptions.push({productId:r.id,productName:r.name,productSn:r.productSn})}}))):this.selectProductOptions=[]},handleAddProductRelation:function(){null!==this.selectProduct?(this.coupon.productRelationList.push(this.getProductById(this.selectProduct)),this.selectProduct=null):this.$message({message:"请先选择商品",type:"warning"})},handleDeleteProductRelation:function(t,e){this.coupon.productRelationList.splice(t,1)},handleAddProductCategoryRelation:function(){null!==this.selectProductCate&&0!==this.selectProductCate.length?(this.coupon.productCategoryRelationList.push(this.getProductCateByIds(this.selectProductCate)),this.selectProductCate=[]):this.$message({message:"请先选择商品分类",type:"warning"})},handleDeleteProductCateRelation:function(t,e){this.coupon.productCategoryRelationList.splice(t,1)},getProductById:function(t){for(var e=0;e<this.selectProductOptions.length;e++)if(t===this.selectProductOptions[e].productId)return this.selectProductOptions[e];return null},getProductCateList:function(){var t=this;Object(l["d"])().then((function(e){var o=e.data;t.productCateOptions=[];for(var n=0;n<o.length;n++){var r=[];if(null!=o[n].children&&o[n].children.length>0)for(var u=0;u<o[n].children.length;u++)r.push({label:o[n].children[u].name,value:o[n].children[u].id});t.productCateOptions.push({label:o[n].name,value:o[n].id,children:r})}}))},getProductCateByIds:function(t){for(var e,o,n=0;n<this.productCateOptions.length;n++)if(this.productCateOptions[n].value===t[0]){o=this.productCateOptions[n].label;for(var r=0;r<this.productCateOptions[n].children.length;r++)this.productCateOptions[n].children[r].value===t[1]&&(e=this.productCateOptions[n].children[r].label)}return{productCategoryId:t[1],productCategoryName:e,parentCategoryName:o}}}},p=d,m=(o("5286"),o("2877")),f=Object(m["a"])(p,n,r,!1,null,"916147ce",null);e["a"]=f.exports}}]);