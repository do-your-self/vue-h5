webpackJsonp([4],{"9Hjr":function(e,t){},JtjT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"",created:function(){1===this.$store.state.user.roleLevel&&(this.form.approveType=2),this.getData()},data:function(){return{form:{approveType:"1",from:"bdcrm",token:this.$store.state.token},loading:!0,selected:"1",allLoaded:!1,allLoaded2:!1,items:[],items2:[],pageIndex:"",pageIndex2:"",pageCount:"",pageCount2:"",flag:!1}},methods:{getData:function(){var e=this;this.axios.approveList(this.form).then(function(t){var a=t.data;a.success&&("1"===e.selected?(e.pageIndex=a.data.pageIndex,e.pageCount=a.data.pageIndex,(a.data.pageCount===a.data.pageIndex||0==a.data.rowsCount)&&(e.allLoaded=!0),e.$set(e,"items",e.items.concat(e.util.sortDate(a.data.list,"createDate")))):(e.pageIndex2=a.data.pageIndex,e.pageCount2=a.data.pageCount,(a.data.pageCount===a.data.pageIndex||0==a.data.rowsCount)&&(e.allLoaded2=!0),e.$set(e,"items2",e.items2.concat(e.util.sortDate(a.data.list,"createDate")))),e.loading=!1),a.success||e.$toast({message:a.msg,position:"model",duration:3e3})}).catch(function(e){console.log(e)})},request:function(){"1"===this.selected?this.pageIndex===this.pageCount?this.allLoaded=!0:(this.form.page=++this.pageIndex,this.getData()):this.pageIndex2===this.pageCount2?this.allLoaded2=!0:(this.form.page=++this.pageIndex2,this.getData())}},watch:{selected:function(e,t){this.form.approveType=e,"2"!==e||this.flag||(this.flag=!0,this.getData())}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?e._e():a("div",{},[a("mt-header",{attrs:{title:"审批管理"}},[a("router-link",{attrs:{slot:"left",to:"/home"},slot:"left"},[a("mt-button",{attrs:{icon:"back"}},[e._v("返回")])],1)],1),e._v(" "),a("mt-navbar",{directives:[{name:"show",rawName:"v-show",value:2===e.$store.state.user.roleLevel||3===e.$store.state.user.roleLevel,expression:"$store.state.user.roleLevel === 2 || $store.state.user.roleLevel === 3"}],model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[e._v("我审批的")]),e._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[e._v("我发起的")])],1),e._v(" "),a("mt-tab-container",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},["1"===e.selected?a("mt-tab-container-item",{staticClass:"ms",attrs:{id:"1"}},[a("pullup",{attrs:{allLoaded:e.allLoaded},on:{request:e.request}},e._l(e.items,function(t,s){return a("cardapproval",{key:s,attrs:{data:t},nativeOn:{click:function(a){e.$router.push({path:"/approvalDetail/"+t.id,query:{type:t.type}})}}})}))],1):e._e(),e._v(" "),a("mt-tab-container-item",{staticClass:"ms",attrs:{id:"2"}},["2"===e.selected?a("pullup",{attrs:{allLoaded:e.allLoaded2},on:{request:e.request}},e._l(e.items2,function(t,s){return a("cardapproval",{key:s,attrs:{data:t},nativeOn:{click:function(a){e.$router.push({path:"/approvalDetail/"+t.id,query:{type:t.type}})}}})})):e._e()],1)],1)],1)},staticRenderFns:[]};var n=a("vSla")(s,o,!1,function(e){a("9Hjr")},"data-v-e86a1ff6",null);t.default=n.exports}});
//# sourceMappingURL=4.9aa893b4092f6b1c4183.js.map