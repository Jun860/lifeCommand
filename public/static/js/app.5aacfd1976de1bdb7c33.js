webpackJsonp([1],{"37qN":function(t,e){},G9wJ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[n("div",{staticClass:"title"},[t._v("消费项目")]),t._v(" "),n("el-radio-group",{model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},t._l(t.content_list.action,function(t,e){return n("el-radio-button",{key:e,attrs:{label:e}})})),t._v(" "),n("el-select",{staticStyle:{margin:"5px"},attrs:{filterable:"","allow-create":"",placeholder:"请选择消费项目"},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},t._l(t.content_list.action_list,function(t,e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),t._v(" "),n("div",{staticClass:"title"},[t._v("消费内容")]),t._v(" "),n("el-checkbox-group",{model:{value:t.things,callback:function(e){t.things=e},expression:"things"}},t._l(t.things_list,function(e){return n("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),t._v(" "),n("el-input",{staticStyle:{width:"80%",margin:"5px"},attrs:{placeholder:"输入消费内容"},model:{value:t.things_more,callback:function(e){t.things_more=e},expression:"things_more"}}),t._v(" "),n("div",{staticClass:"title"},[t._v("金额")]),t._v(" "),n("el-input",{staticStyle:{width:"80%",margin:"5px"},attrs:{size:"large",placeholder:"输入金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),t._v(" "),n("div",{staticClass:"title"},[t._v("对象")]),t._v(" "),n("el-radio-group",{staticStyle:{margin:"5px"},model:{value:t.who,callback:function(e){t.who=e},expression:"who"}},t._l(t.content_list.who,function(t){return n("el-radio-button",{key:t,attrs:{label:t}})})),t._v(" "),n("div",{staticClass:"title"},[t._v("地点")]),t._v(" "),n("el-select",{staticStyle:{margin:"5px"},attrs:{filterable:"","allow-create":"",placeholder:"请选择地点"},model:{value:t.where,callback:function(e){t.where=e},expression:"where"}},t._l(t.content_list.where,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),n("div",{staticClass:"submit-button",on:{click:function(e){t.submit_data()}}},[t._v("提交")])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},KAZe:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},t._l(t.nav,function(e,a){return n("el-button",{key:e.name,attrs:{type:e.active?"success":"info",icon:e.icon},on:{click:function(n){t.gotoPage(e.id)}}},[t._v(t._s(e.name))])})),t._v(" "),n("router-view")],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},M93x:function(t,e,n){"use strict";function a(t){n("TD19")}var i=n("xJD8"),o=n("KAZe"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x"),o=n("YaEn"),s=n("zL8q"),l=n.n(s),c=n("q8zI"),r=(n.n(c),n("mtWM")),u=n.n(r);a.default.prototype.$ajax=u.a,a.default.use(l.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},NRlI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"time_day",label:"日期",sortable:"",width:"130px"}}),t._v(" "),n("el-table-column",{attrs:{prop:"action",label:"项目",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"money",label:"金额",sortable:""}})],1),t._v(" "),n("div",{staticStyle:{margin:"10px 0px"}}),t._v(" "),n("el-button",{attrs:{type:"info",disabled:!(t.current_page>1)},on:{click:function(e){t.frontPage()}}},[t._v("上一页")]),t._v(" "),n("el-button",{attrs:{type:"info",disabled:t.tableData.length<50},on:{click:function(e){t.nextPage()}}},[t._v("下一页")])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},SUaH:function(t,e,n){"use strict";function a(t){n("37qN")}var i=n("Z1Bd"),o=n("NRlI"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,"data-v-1098ce96",null);e.a=c.exports},TD19:function(t,e){},VpYQ:function(t,e){var n={action:{"缴费":["交通费","饭卡","水费","电费","煤气费","暖气费"],"生活":["超市","零食","日用品","理发","运动"],"服装":["上衣","裤子","内衣","饰品"],"化妆品":["护肤","彩妆"],"电器":["小家电","鼠标"]},action_list:{"早饭":["面包","包子","香肠","油条","豆浆"],"午饭":["米饭","炒菜"],"晚饭":["吉野家","麦当劳"]},who:["JJ","JYJ","JW","ALL"],where:["北京","大连","长春"]};t.exports={content_list:n}},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),o=n("hYS1"),s=n("SUaH");a.default.use(i.a),e.a=new i.a({routes:[{path:"/upload",name:"upload",component:o.a},{path:"/viz",name:"viz",component:s.a}]})},Z1Bd:function(t,e,n){"use strict";var a=n("pDRr");n.n(a);e.a={name:"viz",data:function(){return{tableData:[],current_page:1,num_pro_page:50}},mounted:function(){this.getData()},methods:{getData:function(){var t=this,e={key:"to_char(time,'YYYY-MM-DD') as time_day,action,money",condition:"ORDER BY time DESC limit "+this.num_pro_page+" offset "+this.num_pro_page*(this.current_page-1)};this.$ajax.get(a.upload_url+"/sql/select",{params:e}).then(function(e){t.tableData=e.data}).catch(function(t){console.log(t)})},nextPage:function(){this.current_page++,this.getData()},frontPage:function(){this.current_page--,this.getData()}}}},gZCx:function(t,e,n){"use strict";var a=n("VpYQ"),i=(n.n(a),n("pDRr"));n.n(i);e.a={name:"upload",data:function(){return{action:"",things:[],things_more:"",money:null,who:"ALL",where:"北京",things_list:[],content_list:{},loading:!1}},watch:{action:function(){this.click_action(this.action)}},methods:{click_action:function(t){""!=t&&(this.things=[],this.content_list.action[t]?this.things_list=this.content_list.action[t]:this.content_list.action_list[t]&&(this.things_list=this.content_list.action_list[t]))},check_format:function(){var t=/^[0-9. ]+$/,e=/^[\u4E00-\u9FA5A-Za-z0-9.,， ]+$/;return t.test(this.money)?!(""!=this.things_more&&!e.test(this.things_more))||(this.$message({duration:1e3,showClose:!0,title:"格式错误",message:"输入只能用 , 隔开",type:"warning"}),!1):(this.$message({duration:1e3,showClose:!0,title:"格式错误",message:"金额只能是数字",type:"warning"}),!1)},submit_data:function(){if(this.check_format()){var t=this;t.loading=!0;var e="";e=this.things.join(","),e+=""!=this.things_more&&""!=e?","+this.things_more:this.things_more;var n={action:this.action,things:e,money:this.money,who:this.who,where:this.where};console.log(n),this.$ajax.get(i.upload_url+"/sql/insert",{params:n}).then(function(e){1==e.data?t.$message({duration:1e3,showClose:!0,title:"成功",message:"插入数据成功",type:"success"}):t.$message({duration:1e3,showClose:!0,title:"失败",message:"插入数据失败",type:"error"}),t.loading=!1}).catch(function(e){t.$message({duration:1e3,showClose:!0,title:"失败",message:"插入数据失败",type:"error"}),console.log(e),t.loading=!1})}}},mounted:function(){this.content_list=a.content_list;var t=(new Date).getHours();this.action=t<10?"早饭":t<15?"午饭":"晚饭"}}},hYS1:function(t,e,n){"use strict";function a(t){n("qcbv")}var i=n("gZCx"),o=n("G9wJ"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,"data-v-01b552e3",null);e.a=c.exports},pDRr:function(t,e){t.exports={upload_url:"http://47.93.12.46"}},q8zI:function(t,e){},qcbv:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{nav:[{name:"数据上传",id:"upload",icon:"upload",active:!0},{name:"数据记录",id:"viz",icon:"document",active:!1}]}},methods:{gotoPage:function(t){this.$router.push({name:t});for(var e=0;e<this.nav.length;e++)this.nav[e].active=t==this.nav[e].id}},mounted:function(){for(var t=0;t<this.nav.length;t++)this.nav[t].active&&this.$router.push({name:this.nav[t].id})}}}},["NHnr"]);