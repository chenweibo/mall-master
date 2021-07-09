(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26385fb2"],{"9add":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"f",(function(){return l})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return u})),a.d(e,"e",(function(){return c}));var n=a("b775");function i(t){return Object(n["a"])({url:"/brand/list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/brand/create",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/brand/update/showStatus",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/brand/update/factoryStatus",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/brand/delete/"+t,method:"get"})}function u(t){return Object(n["a"])({url:"/brand/"+t,method:"get"})}function c(t,e){return Object(n["a"])({url:"/brand/update/"+t,method:"post",data:e})}},fe11:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",{staticStyle:{"margin-bottom":"40px"}},[a("i",{staticClass:"el-icon-search"}),a("span",[t._v("筛选搜索")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.searchBrandList()}}},[t._v(" 查询结果 ")])],1),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"输入搜索："}},[a("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"品牌名称/关键字"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1)],1)],1)]),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),a("span",[t._v("数据列表")]),a("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(e){return t.addBrand()}}},[t._v(" 添加 ")])],1),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"brandTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),a("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),a("el-table-column",{attrs:{label:"品牌名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),a("el-table-column",{attrs:{label:"品牌首字母",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.firstLetter))]}}])}),a("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort))]}}])}),a("el-table-column",{attrs:{label:"品牌制造商",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.handleFactoryStatusChange(e.$index,e.row)}},model:{value:e.row.factoryStatus,callback:function(a){t.$set(e.row,"factoryStatus",a)},expression:"scope.row.factoryStatus"}})]}}])}),a("el-table-column",{attrs:{label:"是否显示",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.handleShowStatusChange(e.$index,e.row)}},model:{value:e.row.showStatus,callback:function(a){t.$set(e.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),a("el-table-column",{attrs:{label:"相关",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("商品：")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.getProductList(e.$index,e.row)}}},[t._v("100 ")]),a("span",[t._v("评价：")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.getProductCommentList(e.$index,e.row)}}},[t._v("1000 ")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleUpdate(e.$index,e.row)}}},[t._v("编辑 ")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1)],1),a("div",{staticClass:"batch-operate-container"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.operateType,callback:function(e){t.operateType=e},expression:"operateType"}},t._l(t.operates,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleBatchOperate()}}},[t._v(" 确定 ")])],1),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],s=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9add")),r={name:"BrandList",data:function(){return{operates:[{label:"显示品牌",value:"showBrand"},{label:"隐藏品牌",value:"hideBrand"}],operateType:null,listQuery:{keyword:null,pageNum:1,pageSize:10},list:null,total:null,listLoading:!0,multipleSelection:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(s["c"])(this.listQuery).then((function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total,t.totalPage=e.data.totalPage,t.pageSize=e.data.pageSize}))},handleSelectionChange:function(t){this.multipleSelection=t},handleUpdate:function(t,e){this.$router.push({path:"/pms/updateBrand",query:{id:e.id}})},handleDelete:function(t,e){var a=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["b"])(e.id).then((function(t){a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()}))}))},getProductList:function(t,e){console.log(t,e)},getProductCommentList:function(t,e){console.log(t,e)},handleFactoryStatusChange:function(t,e){var a=this,n=new URLSearchParams;n.append("ids",e.id),n.append("factoryStatus",e.factoryStatus),Object(s["f"])(n).then((function(t){a.$message({message:"修改成功",type:"success",duration:1e3})})).catch((function(){0===e.factoryStatus?e.factoryStatus=1:e.factoryStatus=0}))},handleShowStatusChange:function(t,e){var a=this,n=new URLSearchParams;n.append("ids",e.id),n.append("showStatus",e.showStatus),Object(s["g"])(n).then((function(t){a.$message({message:"修改成功",type:"success",duration:1e3})})).catch((function(){0===e.showStatus?e.showStatus=1:e.showStatus=0}))},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},searchBrandList:function(){this.listQuery.pageNum=1,this.getList()},handleBatchOperate:function(){var t=this;if(console.log(this.multipleSelection),this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{var e=0;if("showBrand"===this.operateType)e=1;else{if("hideBrand"!==this.operateType)return void this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3});e=0}for(var a=[],n=0;n<this.multipleSelection.length;n++)a.push(this.multipleSelection[n].id);var i=new URLSearchParams;i.append("ids",a),i.append("showStatus",e),Object(s["g"])(i).then((function(e){t.getList(),t.$message({message:"修改成功",type:"success",duration:1e3})}))}},addBrand:function(){this.$router.push({path:"/pms/addBrand"})}}},l=r,o=a("2877"),u=Object(o["a"])(l,n,i,!1,null,"a1060cc2",null);e["default"]=u.exports}}]);