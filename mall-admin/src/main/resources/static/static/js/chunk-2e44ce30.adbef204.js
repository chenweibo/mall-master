(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e44ce30"],{1276:function(t,e,r){"use strict";var a=r("d784"),s=r("44e7"),n=r("825a"),l=r("1d80"),o=r("4840"),i=r("8aa5"),c=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,m=Math.min,v=4294967295,h=!p((function(){return!RegExp(v,"y")}));a("split",2,(function(t,e,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var a=String(l(this)),n=void 0===r?v:r>>>0;if(0===n)return[];if(void 0===t)return[a];if(!s(t))return e.call(a,t,n);var o,i,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,h=new RegExp(t.source,p+"g");while(o=d.call(h,a)){if(i=h.lastIndex,i>m&&(u.push(a.slice(m,o.index)),o.length>1&&o.index<a.length&&f.apply(u,o.slice(1)),c=o[0].length,m=i,u.length>=n))break;h.lastIndex===o.index&&h.lastIndex++}return m===a.length?!c&&h.test("")||u.push(""):u.push(a.slice(m)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var s=l(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,s,r):a.call(String(s),e,r)},function(t,s){var l=r(a,t,this,s,a!==e);if(l.done)return l.value;var d=n(t),p=String(this),f=o(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),y=new f(h?d:"^(?:"+d.source+")",b),x=void 0===s?v:s>>>0;if(0===x)return[];if(0===p.length)return null===u(y,p)?[p]:[];var _=0,A=0,R=[];while(A<p.length){y.lastIndex=h?A:0;var w,C=u(y,h?p:p.slice(A));if(null===C||(w=m(c(y.lastIndex+(h?0:A)),p.length))===_)A=i(p,A,g);else{if(R.push(p.slice(_,A)),R.length===x)return R;for(var S=1;S<=C.length-1;S++)if(R.push(C[S]),R.length===x)return R;A=_=w}}return R.push(p.slice(_)),R}]}),!h)},"14c3":function(t,e,r){var a=r("c6b6"),s=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var n=r.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"1da9":function(t,e,r){"use strict";r("b1f0")},"25f0":function(t,e,r){"use strict";var a=r("6eeb"),s=r("825a"),n=r("d039"),l=r("ad6d"),o="toString",i=RegExp.prototype,c=i[o],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=o;(u||d)&&a(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),r=t.flags,a=String(void 0===r&&t instanceof RegExp&&!("flags"in i)?l.call(t):r);return"/"+e+"/"+a}),{unsafe:!0})},2626:function(t,e,r){"use strict";var a=r("d066"),s=r("9bf2"),n=r("b622"),l=r("83ab"),o=n("species");t.exports=function(t){var e=a(t),r=s.f;l&&e&&!e[o]&&r(e,o,{configurable:!0,get:function(){return this}})}},4840:function(t,e,r){var a=r("825a"),s=r("1c0b"),n=r("b622"),l=n("species");t.exports=function(t,e){var r,n=a(t).constructor;return void 0===n||void 0==(r=a(n)[l])?e:s(r)}},"4d63":function(t,e,r){var a=r("83ab"),s=r("da84"),n=r("94ca"),l=r("7156"),o=r("9bf2").f,i=r("241c").f,c=r("44e7"),u=r("ad6d"),d=r("9f7f"),p=r("6eeb"),f=r("d039"),m=r("69f3").set,v=r("2626"),h=r("b622"),g=h("match"),b=s.RegExp,y=b.prototype,x=/a/g,_=/a/g,A=new b(x)!==x,R=d.UNSUPPORTED_Y,w=a&&n("RegExp",!A||R||f((function(){return _[g]=!1,b(x)!=x||b(_)==_||"/a/i"!=b(x,"i")})));if(w){var C=function(t,e){var r,a=this instanceof C,s=c(t),n=void 0===e;if(!a&&s&&t.constructor===C&&n)return t;A?s&&!n&&(t=t.source):t instanceof C&&(n&&(e=u.call(t)),t=t.source),R&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var o=l(A?new b(t,e):b(t,e),a?this:y,C);return R&&r&&m(o,{sticky:r}),o},S=function(t){t in C||o(C,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},E=i(b),P=0;while(E.length>P)S(E[P++]);y.constructor=C,C.prototype=y,p(s,"RegExp",C)}v("RegExp")},5319:function(t,e,r){"use strict";var a=r("d784"),s=r("825a"),n=r("7b0b"),l=r("50c4"),o=r("a691"),i=r("1d80"),c=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(r,a){var s=i(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,s,a):e.call(String(s),r,a)},function(t,a){if(!g&&b||"string"===typeof a&&-1===a.indexOf(y)){var n=r(e,t,this,a);if(n.done)return n.value}var i=s(t),f=String(this),m="function"===typeof a;m||(a=String(a));var v=i.global;if(v){var _=i.unicode;i.lastIndex=0}var A=[];while(1){var R=u(i,f);if(null===R)break;if(A.push(R),!v)break;var w=String(R[0]);""===w&&(i.lastIndex=c(f,l(i.lastIndex),_))}for(var C="",S=0,E=0;E<A.length;E++){R=A[E];for(var P=String(R[0]),I=d(p(o(R.index),f.length),0),N=[],$=1;$<R.length;$++)N.push(h(R[$]));var T=R.groups;if(m){var k=[P].concat(N,I,f);void 0!==T&&k.push(T);var O=String(a.apply(void 0,k))}else O=x(P,f,I,N,T,a);I>=S&&(C+=f.slice(S,I)+O,S=I+P.length)}return C+f.slice(S)}];function x(t,r,a,s,l,o){var i=a+t.length,c=s.length,u=v;return void 0!==l&&(l=n(l),u=m),e.call(o,u,(function(e,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,a);case"'":return r.slice(i);case"<":o=l[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>c){var d=f(u/10);return 0===d?e:d<=c?void 0===s[d-1]?n.charAt(1):s[d-1]+n.charAt(1):e}o=s[u-1]}return void 0===o?"":o}))}}))},7156:function(t,e,r){var a=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var n,l;return s&&"function"==typeof(n=e.constructor)&&n!==r&&a(l=n.prototype)&&l!==r.prototype&&s(t,l),t}},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),s=r("9f7f"),n=RegExp.prototype.exec,l=String.prototype.replace,o=n,i=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=i||u||c;d&&(o=function(t){var e,r,s,o,d=this,p=c&&d.sticky,f=a.call(d),m=d.source,v=0,h=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,v++),r=new RegExp("^(?:"+m+")",f)),u&&(r=new RegExp("^"+m+"$(?!\\s)",f)),i&&(e=d.lastIndex),s=n.call(p?r:d,h),p?s?(s.input=s.input.slice(v),s[0]=s[0].slice(v),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:i&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&l.call(s[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s}),t.exports=o},9481:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return o}));var a=r("b775");function s(t){return Object(a["a"])({url:"/returnApply/list",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/returnApply/delete",method:"post",params:t})}function l(t,e){return Object(a["a"])({url:"/returnApply/update/status/"+t,method:"post",data:e})}function o(t){return Object(a["a"])({url:"/returnApply/"+t,method:"get"})}},"9f7f":function(t,e,r){"use strict";var a=r("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var a=r("23e7"),s=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,r){"use strict";var a=r("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b1f0:function(t,e,r){},c466:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));r("ac1f"),r("5319"),r("4d63"),r("25f0"),r("1276");function a(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in r)if(new RegExp("(".concat(a,")")).test(e)){var n=r[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:s(n))}return e}function s(t){return("00"+t).substr(t.length)}function n(t,e){e||(e="-");var r,a=t.split(e),s=parseInt(a[0]);r=0===a[1].indexOf("0")?parseInt(a[1].substring(1)):parseInt(a[1]);var n=parseInt(a[2]),l=new Date(s,r-1,n);return l}},cd50:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail-container"},[r("el-card",{attrs:{shadow:"never"}},[r("span",{staticClass:"font-title-medium"},[t._v("退货商品")]),r("el-table",{ref:"productTable",staticClass:"standard-margin",attrs:{border:"",data:t.productList}},[r("el-table-column",{attrs:{label:"商品图片",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("img",{staticStyle:{height:"80px"},attrs:{src:t.row.productPic}})]}}])}),r("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"font-small"},[t._v(t._s(e.row.productName))]),r("br"),r("span",{staticClass:"font-small"},[t._v("品牌："+t._s(e.row.productBrand))])]}}])}),r("el-table-column",{attrs:{label:"价格/货号",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"font-small"},[t._v("价格：￥"+t._s(e.row.productRealPrice))]),r("br"),r("span",{staticClass:"font-small"},[t._v("货号：NO."+t._s(e.row.productId))])]}}])}),r("el-table-column",{attrs:{label:"属性",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productAttr))]}}])}),r("el-table-column",{attrs:{label:"数量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productCount))]}}])}),r("el-table-column",{attrs:{label:"小计",width:"100",align:"center"}},[[t._v("￥"+t._s(t.totalAmount))]],2)],1),r("div",{staticStyle:{float:"right","margin-top":"15px","margin-bottom":"15px"}},[r("span",{staticClass:"font-title-medium"},[t._v("合计：")]),r("span",{staticClass:"font-title-medium color-danger"},[t._v("￥"+t._s(t.totalAmount))])])],1),r("el-card",{staticClass:"standard-margin",attrs:{shadow:"never"}},[r("span",{staticClass:"font-title-medium"},[t._v("服务单信息")]),r("div",{staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("服务单号")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.id))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("申请状态")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t._f("formatStatus")(t.orderReturnApply.status)))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"50px","line-height":"30px"},attrs:{span:6}},[t._v("订单编号 ")]),r("el-col",{staticClass:"form-border font-small",staticStyle:{height:"50px"},attrs:{span:18}},[t._v(" "+t._s(t.orderReturnApply.orderSn)+" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:t.handleViewOrder}},[t._v("查看")])],1)],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("申请时间")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t._f("formatTime")(t.orderReturnApply.createTime)))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("用户账号")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.memberUsername))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("联系人")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.returnName))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("联系电话")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.returnPhone))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("退货原因")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.reason))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("问题描述")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.description))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"100px","line-height":"80px"},attrs:{span:6}},[t._v("凭证图片 ")]),r("el-col",{staticClass:"form-border font-small",staticStyle:{height:"100px"},attrs:{span:18}},t._l(t.proofPics,(function(t,e){return r("img",{key:e,staticStyle:{width:"80px",height:"80px"},attrs:{src:t}})})),0)],1)],1),r("div",{staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("订单金额")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v("￥"+t._s(t.totalAmount))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"52px","line-height":"32px"},attrs:{span:6}},[t._v("确认退款金额 ")]),r("el-col",{staticClass:"form-border font-small",staticStyle:{height:"52px"},attrs:{span:18}},[t._v(" ￥ "),r("el-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{size:"small",disabled:0!==t.orderReturnApply.status},model:{value:t.updateStatusParam.returnAmount,callback:function(e){t.$set(t.updateStatusParam,"returnAmount",e)},expression:"updateStatusParam.returnAmount"}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:3!==t.orderReturnApply.status,expression:"orderReturnApply.status!==3"}]},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"52px","line-height":"32px"},attrs:{span:6}},[t._v("选择收货点 ")]),r("el-col",{staticClass:"form-border font-small",staticStyle:{height:"52px"},attrs:{span:18}},[r("el-select",{staticStyle:{width:"200px"},attrs:{size:"small",disabled:0!==t.orderReturnApply.status},model:{value:t.updateStatusParam.companyAddressId,callback:function(e){t.$set(t.updateStatusParam,"companyAddressId",e)},expression:"updateStatusParam.companyAddressId"}},t._l(t.companyAddressList,(function(t){return r("el-option",{key:t.id,attrs:{value:t.id,label:t.addressName}})})),1)],1)],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("收货人姓名")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.currentAddress.name))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("所在区域")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t._f("formatRegion")(t.currentAddress)))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("详细地址")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.currentAddress.detailAddress))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("联系电话")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.currentAddress.phone))])],1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.orderReturnApply.status,expression:"orderReturnApply.status!==0"}],staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("处理人员")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.handleMan))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("处理时间")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t._f("formatTime")(t.orderReturnApply.handleTime)))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("处理备注")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.handleNote))])],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:2===t.orderReturnApply.status,expression:"orderReturnApply.status===2"}],staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("收货人员")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.receiveMan))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("收货时间")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t._f("formatTime")(t.orderReturnApply.receiveTime)))])],1),r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",attrs:{span:6}},[t._v("收货备注")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[t._v(t._s(t.orderReturnApply.receiveNote))])],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0===t.orderReturnApply.status,expression:"orderReturnApply.status===0"}],staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"52px","line-height":"32px"},attrs:{span:6}},[t._v("处理备注")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[r("el-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{size:"small"},model:{value:t.updateStatusParam.handleNote,callback:function(e){t.$set(t.updateStatusParam,"handleNote",e)},expression:"updateStatusParam.handleNote"}})],1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:1===t.orderReturnApply.status,expression:"orderReturnApply.status===1"}],staticClass:"form-container-border"},[r("el-row",[r("el-col",{staticClass:"form-border form-left-bg font-small",staticStyle:{height:"52px","line-height":"32px"},attrs:{span:6}},[t._v("收货备注")]),r("el-col",{staticClass:"form-border font-small",attrs:{span:18}},[r("el-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{size:"small"},model:{value:t.updateStatusParam.receiveNote,callback:function(e){t.$set(t.updateStatusParam,"receiveNote",e)},expression:"updateStatusParam.receiveNote"}})],1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0===t.orderReturnApply.status,expression:"orderReturnApply.status===0"}],staticStyle:{"margin-top":"15px","text-align":"center"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleUpdateStatus(1)}}},[t._v("确认退货")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.handleUpdateStatus(3)}}},[t._v("拒绝退货")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:1===t.orderReturnApply.status,expression:"orderReturnApply.status===1"}],staticStyle:{"margin-top":"15px","text-align":"center"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleUpdateStatus(2)}}},[t._v("确认收货")])],1)])],1)},s=[],n=(r("ac1f"),r("1276"),r("9481")),l=r("b775");function o(){return Object(l["a"])({url:"/companyAddress/list",method:"get"})}var i=r("c466"),c={companyAddressId:null,handleMan:"admin",handleNote:null,receiveMan:"admin",receiveNote:null,returnAmount:0,status:0},u={id:null,orderId:null,companyAddressId:null,productId:null,orderSn:null,createTime:null,memberUsername:null,returnAmount:null,returnName:null,returnPhone:null,status:null,handleTime:null,productPic:null,productName:null,productBrand:null,productAttr:null,productCount:null,productPrice:null,productRealPrice:null,reason:null,description:null,proofPics:null,handleNote:null,handleMan:null,receiveMan:null,receiveTime:null,receiveNote:null},d={name:"ReturnApplyDetail",filters:{formatStatus:function(t){return 0===t?"待处理":1===t?"退货中":2===t?"已完成":"已拒绝"},formatTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(i["a"])(e,"yyyy-MM-dd hh:mm:ss")},formatRegion:function(t){var e=t.province;return null!=t.city&&(e+="  "+t.city),e+="  "+t.region,e}},data:function(){return{id:null,orderReturnApply:Object.assign({},u),productList:null,proofPics:null,updateStatusParam:Object.assign({},c),companyAddressList:null}},computed:{totalAmount:function(){return null!=this.orderReturnApply?this.orderReturnApply.productRealPrice*this.orderReturnApply.productCount:0},currentAddress:function(){console.log("currentAddress()");var t=this.updateStatusParam.companyAddressId;if(null==this.companyAddressList)return{};for(var e=0;e<this.companyAddressList.length;e++){var r=this.companyAddressList[e];if(r.id===t)return r}return null}},created:function(){this.id=this.$route.query.id,this.getDetail()},methods:{handleViewOrder:function(){this.$router.push({path:"/oms/orderDetail",query:{id:this.orderReturnApply.orderId}})},getDetail:function(){var t=this;Object(n["c"])(this.id).then((function(e){console.log("getDetail"),t.orderReturnApply=e.data,t.productList=[],t.productList.push(t.orderReturnApply),null!=t.orderReturnApply.proofPics&&(t.proofPics=t.orderReturnApply.proofPics.split(",")),1!==t.orderReturnApply.status&&2!==t.orderReturnApply.status||(t.updateStatusParam.returnAmount=t.orderReturnApply.returnAmount,t.updateStatusParam.companyAddressId=t.orderReturnApply.companyAddressId),t.getCompanyAddressList()}))},getCompanyAddressList:function(){var t=this;o().then((function(e){console.log("getCompanyAddressList()"),t.companyAddressList=e.data;for(var r=0;r<t.companyAddressList.length;r++)1===t.companyAddressList[r].receiveStatus&&0===t.orderReturnApply.status&&(t.updateStatusParam.companyAddressId=t.companyAddressList[r].id)}))},handleUpdateStatus:function(t){var e=this;this.updateStatusParam.status=t,this.$confirm("是否要进行此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["d"])(e.id,e.updateStatusParam).then((function(t){e.$message({type:"success",message:"操作成功!",duration:1e3}),e.$router.back()}))}))}}},p=d,f=(r("1da9"),r("2877")),m=Object(f["a"])(p,a,s,!1,null,"cab966b0",null);e["default"]=m.exports},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),s=r("d039"),n=r("b622"),l=r("9263"),o=r("9112"),i=n("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var m=n(t),v=!s((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),h=v&&!s((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[i]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return e=!0,null},r[m](""),!e}));if(!v||!h||"replace"===t&&(!c||!u||p)||"split"===t&&!f){var g=/./[m],b=r(m,""[t],(function(t,e,r,a,s){return e.exec===l?v&&!s?{done:!0,value:g.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=b[0],x=b[1];a(String.prototype,t,y),a(RegExp.prototype,m,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&o(RegExp.prototype[m],"sham",!0)}}}]);