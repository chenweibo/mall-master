(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7555418"],{"0f39":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{attrs:{action:e.useOss?e.ossUploadUrl:e.minioUploadUrl,data:e.useOss?e.dataObj:null,"list-type":"picture",multiple:!1,"show-file-list":e.showFileList,"file-list":e.fileList,"before-upload":e.beforeUpload,"on-remove":e.handleRemove,"on-success":e.handleUploadSuccess,"on-preview":e.handlePreview}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过10MB")])],1),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.fileList[0].url,alt:""}})])],1)},a=[],r=(i("d3b7"),i("b0c0"),i("6e0d")),n={name:"SingleUpload",props:{value:{type:String,default:""}},data:function(){return{dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""},dialogVisible:!1,useOss:!1,ossUploadUrl:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com",minioUploadUrl:"/minio/upload"}},computed:{imageUrl:function(){return this.value},imageName:function(){return null!=this.value&&""!==this.value?this.value.substr(this.value.lastIndexOf("/")+1):null},fileList:function(){return[{name:this.imageName,url:this.imageUrl}]},showFileList:{get:function(){return null!==this.value&&""!==this.value&&void 0!==this.value},set:function(e){}}},methods:{emitInput:function(e){this.$emit("input",e)},handleRemove:function(e,t){this.emitInput("")},handlePreview:function(e){this.dialogVisible=!0},beforeUpload:function(e){var t=this;return!this.useOss||new Promise((function(e,i){Object(r["a"])().then((function(i){t.dataObj.policy=i.data.policy,t.dataObj.signature=i.data.signature,t.dataObj.ossaccessKeyId=i.data.accessKeyId,t.dataObj.key=i.data.dir+"/${filename}",t.dataObj.dir=i.data.dir,t.dataObj.host=i.data.host,e(!0)})).catch((function(e){console.log(e),i(!1)}))}))},handleUploadSuccess:function(e,t){this.showFileList=!0,this.fileList.pop();var i=this.dataObj.host+"/"+this.dataObj.dir+"/"+t.name;this.useOss||(i=e.data.url),this.fileList.push({name:t.name,url:i}),this.emitInput(this.fileList[0].url)}}},l=n,o=i("2877"),u=Object(o["a"])(l,s,a,!1,null,null,null);t["a"]=u.exports},"117d":function(e,t,i){"use strict";i("1fe8")},"1fe8":function(e,t,i){},"6e0d":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("b775");function a(){return Object(s["a"])({url:"/aliyun/oss/policy",method:"get"})}},"86f1":function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"f",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return l})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return u}));var s=i("b775");function a(e){return Object(s["a"])({url:"/home/advertise/list",method:"get",params:e})}function r(e,t){return Object(s["a"])({url:"/home/advertise/update/status/"+e,method:"post",params:t})}function n(e){return Object(s["a"])({url:"/home/advertise/delete",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/home/advertise/create",method:"post",data:e})}function o(e){return Object(s["a"])({url:"/home/advertise/"+e,method:"get"})}function u(e,t){return Object(s["a"])({url:"/home/advertise/update/"+e,method:"post",data:t})}},aba3:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[i("el-form",{ref:"homeAdvertiseFrom",attrs:{model:e.homeAdvertise,rules:e.rules,"label-width":"150px",size:"small"}},[i("el-form-item",{attrs:{label:"广告名称：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.name,callback:function(t){e.$set(e.homeAdvertise,"name",t)},expression:"homeAdvertise.name"}})],1),i("el-form-item",{attrs:{label:"广告位置："}},[i("el-select",{model:{value:e.homeAdvertise.type,callback:function(t){e.$set(e.homeAdvertise,"type",t)},expression:"homeAdvertise.type"}},e._l(e.typeOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("el-form-item",{attrs:{label:"开始时间：",prop:"startTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.homeAdvertise.startTime,callback:function(t){e.$set(e.homeAdvertise,"startTime",t)},expression:"homeAdvertise.startTime"}})],1),i("el-form-item",{attrs:{label:"到期时间：",prop:"endTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.homeAdvertise.endTime,callback:function(t){e.$set(e.homeAdvertise,"endTime",t)},expression:"homeAdvertise.endTime"}})],1),i("el-form-item",{attrs:{label:"上线/下线："}},[i("el-radio-group",{model:{value:e.homeAdvertise.status,callback:function(t){e.$set(e.homeAdvertise,"status",t)},expression:"homeAdvertise.status"}},[i("el-radio",{attrs:{label:0}},[e._v("下线")]),i("el-radio",{attrs:{label:1}},[e._v("上线")])],1)],1),i("el-form-item",{attrs:{label:"广告图片："}},[i("single-upload",{model:{value:e.homeAdvertise.pic,callback:function(t){e.$set(e.homeAdvertise,"pic",t)},expression:"homeAdvertise.pic"}})],1),i("el-form-item",{attrs:{label:"排序："}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.sort,callback:function(t){e.$set(e.homeAdvertise,"sort",t)},expression:"homeAdvertise.sort"}})],1),i("el-form-item",{attrs:{label:"广告链接：",prop:"url"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.url,callback:function(t){e.$set(e.homeAdvertise,"url",t)},expression:"homeAdvertise.url"}})],1),i("el-form-item",{attrs:{label:"广告备注："}},[i("el-input",{staticClass:"input-width",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.homeAdvertise.note,callback:function(t){e.$set(e.homeAdvertise,"note",t)},expression:"homeAdvertise.note"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("homeAdvertiseFrom")}}},[e._v("提交")]),e.isEdit?e._e():i("el-button",{on:{click:function(t){return e.resetForm("homeAdvertiseFrom")}}},[e._v("重置")])],1)],1)],1)},a=[],r=i("0f39"),n=i("86f1"),l=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],o={name:null,type:1,pic:null,startTime:null,endTime:null,status:0,url:null,note:null,sort:0},u={name:"HomeAdvertiseDetail",components:{SingleUpload:r["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{homeAdvertise:null,rules:{name:[{required:!0,message:"请输入广告名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入广告链接",trigger:"blur"}],startTime:[{required:!0,message:"请选择开始时间",trigger:"blur"}],endTime:[{required:!0,message:"请选择到期时间",trigger:"blur"}],pic:[{required:!0,message:"请选择广告图片",trigger:"blur"}]},typeOptions:Object.assign({},l)}},created:function(){var e=this;this.isEdit?Object(n["d"])(this.$route.query.id).then((function(t){e.homeAdvertise=t.data})):this.homeAdvertise=Object.assign({},o)},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate((function(i){if(!i)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.isEdit?Object(n["e"])(t.$route.query.id,t.homeAdvertise).then((function(i){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()})):Object(n["a"])(t.homeAdvertise).then((function(i){t.$refs[e].resetFields(),t.homeAdvertise=Object.assign({},o),t.$message({message:"提交成功",type:"success",duration:1e3})}))}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.homeAdvertise=Object.assign({},o)}}},d=u,c=(i("117d"),i("2877")),m=Object(c["a"])(d,s,a,!1,null,"9bedf47c",null);t["a"]=m.exports},e541:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("home-advertise-detail",{attrs:{"is-edit":!0}})},a=[],r=i("aba3"),n={name:"UpdateHomeAdvertise",components:{HomeAdvertiseDetail:r["a"]}},l=n,o=i("2877"),u=Object(o["a"])(l,s,a,!1,null,null,null);t["default"]=u.exports}}]);