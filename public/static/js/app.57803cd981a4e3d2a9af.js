webpackJsonp([1],{"37qN":function(t,e){},"9ckf":function(t,e){},ED4V:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pwd-container"},t._l(t.pwd_list,function(e,a){return n("div",{staticClass:"pwd-value",on:{click:function(n){t.button_click(e)}}},[t._v(t._s(e))])}))},i=[],o={render:a,staticRenderFns:i};e.a=o},G9wJ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[n("div",{staticClass:"title"},[t._v("消费项目("),n("span",{staticStyle:{color:"red"}},[t._v(t._s((t.cost/1e3).toFixed(2))+"k")]),t._v(")")]),t._v(" "),n("el-radio-group",{model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},t._l(t.content_list.action,function(t,e){return n("el-radio-button",{key:e,attrs:{label:e}})})),t._v(" "),n("el-select",{staticStyle:{margin:"5px",width:"310px"},attrs:{filterable:"","allow-create":"",placeholder:"请选择消费项目"},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},t._l(t.content_list.action_list,function(t,e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),t._v(" "),n("div",{staticClass:"title"},[t._v("消费内容")]),t._v(" "),n("el-checkbox-group",{model:{value:t.things,callback:function(e){t.things=e},expression:"things"}},[t._l(t.things_list,function(e){return n("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.things_more_flag,expression:"!things_more_flag"}],staticStyle:{color:"steelblue",margin:"0px 10px","font-size":"14px",cursor:"pointer"},on:{click:function(e){t.things_more_click()}}},[t._v("更多")])],2),t._v(" "),n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.things_more_flag,expression:"things_more_flag"}],staticStyle:{width:"310px",margin:"5px"},attrs:{placeholder:"输入消费内容"},model:{value:t.things_more,callback:function(e){t.things_more=e},expression:"things_more"}}),t._v(" "),n("div",{staticClass:"title"},[t._v("对象")]),t._v(" "),n("el-radio-group",{staticStyle:{margin:"5px"},model:{value:t.who,callback:function(e){t.who=e},expression:"who"}},t._l(t.content_list.who,function(t){return n("el-radio-button",{key:t,attrs:{label:t}})})),t._v(" "),n("div",{staticClass:"title"},[t._v("事件地点")]),t._v(" "),n("el-input",{staticStyle:{width:"310px",margin:"5px"},attrs:{placeholder:"输入事件地点"},model:{value:t.where,callback:function(e){t.where=e},expression:"where"}}),t._v(" "),n("div",{staticClass:"title"},[t._v("金额")]),t._v(" "),n("el-input",{staticStyle:{width:"310px",margin:"5px"},attrs:{size:"large",placeholder:"输入金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),t._v(" "),n("div",{staticClass:"submit-button",on:{click:function(e){t.submit_data()}}},[t._v("提交")])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},I4t6:function(t,e,n){"use strict";e.a={name:"login",data:function(){return{pwd_list:["1","2","3","4","5","6","7","8","9","0"],reslut:"",b:"726"}},methods:{button_click:function(t){this.reslut=this.reslut+t,t==this.b[this.reslut.length-1]?this.reslut.length==this.b.length&&(localStorage.login=!0,this.$router.push({name:"upload"})):this.reslut=""}},mounted:function(){}}},K31e:function(t,e,n){"use strict";function a(t){n("9ckf")}var i=n("I4t6"),o=n("ED4V"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,"data-v-165c6d12",null);e.a=c.exports},KAZe:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},t._l(t.nav,function(e,a){return n("el-button",{key:e.name,attrs:{type:e.active?"success":"info",icon:e.icon},on:{click:function(n){t.gotoPage(e.id)}}},[t._v(t._s(e.name))])})),t._v(" "),n("router-view")],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},M93x:function(t,e,n){"use strict";function a(t){n("TD19")}var i=n("xJD8"),o=n("KAZe"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x"),o=n("YaEn"),s=n("zL8q"),l=n.n(s),c=n("q8zI"),r=(n.n(c),n("mtWM")),h=n.n(r);a.default.prototype.$ajax=h.a,a.default.use(l.a),a.default.config.productionTip=!1,o.a.beforeEach(function(t,e,n){localStorage.login||"/login"==t.path?n():n("/login")}),new a.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},NRlI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticStyle:{margin:"10px 0px"}},[n("span",{staticStyle:{"font-family":"'Microsoft YaHei'"}},[t._v(t._s(t.year)+"年"+t._s(t.month)+"月花费 ：\n      "),n("span",{staticStyle:{color:"steelblue","font-weight":"700"}},[t._v(t._s(t.out_money)+" / "+t._s(t.out_money_all))])])]),t._v(" "),n("div",{staticStyle:{margin:"10px 0px"}},[n("el-button",{attrs:{type:"info",disabled:!1},on:{click:function(e){t.frontMonth()}}},[t._v("上个月")]),t._v(" "),n("el-button",{attrs:{type:"info",disabled:0==t.month_ago},on:{click:function(e){t.nextMonth()}}},[t._v("下个月")])],1),t._v(" "),t._l(t.event_list,function(e){return n("div",{staticStyle:{margin:"10px 0px"}},[n("el-button",{attrs:{type:"info"},on:{click:function(n){t.getEvent(e.where)}}},[t._v(t._s(e.where)+" ("+t._s(e.money)+")")])],1)}),t._v(" "),t._l(t.bar_data,function(e){return n("div",{key:e.action,staticStyle:{margin:"5px 0px"}},[n("div",{staticClass:"viz-table-key"},[t._v(t._s(e.action))]),t._v(" "),n("div",{staticClass:"viz-table-value"},[t._v("\n      "+t._s(e.money)+"\n      "),n("div",{staticClass:"viz-table-value-bar",style:t.caculateWidth(e.money)})])])}),t._v(" "),t.detail_list_flag?t._e():n("div",{staticClass:"button",on:{click:function(e){t.detail_list_click()}}},[t._v("详细信息")]),t._v(" "),t.detail_list_flag?n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"viz-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"消费项目"}},[n("span",[t._v(t._s(e.row.things))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"time_day",label:"日期",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"action",label:"项目",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"money",label:"金额",sortable:""}})],1),t._v(" "),n("div",{staticStyle:{margin:"10px 0px"}}),t._v(" "),n("el-button",{attrs:{type:"info",disabled:!(t.current_page>1)},on:{click:function(e){t.frontPage()}}},[t._v("上一页")]),t._v(" "),n("el-button",{attrs:{type:"info",disabled:t.tableData.length<t.num_pro_page},on:{click:function(e){t.nextPage()}}},[t._v("下一页")])],1):t._e()],2)},i=[],o={render:a,staticRenderFns:i};e.a=o},SUaH:function(t,e,n){"use strict";function a(t){n("37qN")}var i=n("Z1Bd"),o=n("NRlI"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,"data-v-1098ce96",null);e.a=c.exports},TD19:function(t,e){},VpYQ:function(t,e){var n={action:{"缴费":["交通费","饭卡","停车费","充电费","快递费","水费","电费","煤气费"],"生活":["交通","理发","运动","娱乐","礼品","书"],"采购":["食材","零食","日用品"],"服装":["上衣","裤子","内衣","鞋","饰品"],"化妆品":["护肤","彩妆"]},action_list:{"电器":["小家电","电脑配件"],"旅游":["门票","吃饭","商品"],"医院":["看病","保健"],"出差":["吃饭","商品","游玩"],"早饭":["请客","外卖"],"午饭":["请客","外卖"],"晚饭":["请客","外卖"],"其他":["暖气费","房贷本金","房贷利息"]},who:["JJ","JYJ","JW","ALL"],where:["北京","大连","长春"]};t.exports={content_list:n}},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),o=n("hYS1"),s=n("SUaH"),l=n("K31e");a.default.use(i.a),e.a=new i.a({routes:[{path:"/upload",name:"upload",component:o.a},{path:"/viz",name:"viz",component:s.a},{path:"/login",name:"login",component:l.a}]})},Z1Bd:function(t,e,n){"use strict";var a=n("pDRr");n.n(a);e.a={name:"viz",data:function(){return{event_list:[],cag:"北京",tableData:[],current_page:1,num_pro_page:100,out_money:0,out_money_all:0,month_ago:0,month:0,year:0,detail_list_flag:!1,bar_data:[]}},mounted:function(){this.getMonthMoney(),this.getMonthMoneyAll(),this.getMonthBar(),this.get_event_list()},methods:{reset:function(){this.detail_list_flag=!1,this.bar_data=[]},get_event_list:function(){var t=this;this.$ajax.get(a.upload_url+"/sql/get_cag",{params:{month:this.month_ago}}).then(function(e){if(0!=e.data.length){var n=e.data;t.$set(t,"event_list",n)}else console.log("no data")}).catch(function(t){console.log(t)})},getEvent:function(t){this.cag=t,this.reset(),this.getMonthMoney(),this.getMonthMoneyAll(),this.getMonthBar()},caculateWidth:function(t){return this.out_money&&0!=this.out_money?"width:"+t/this.out_money*100+"%":"width: 0px"},detail_list_click:function(){this.detail_list_flag=!0,this.getData()},nextMonth:function(){this.cag="北京",this.month_ago--,this.getMonthMoney(),this.getMonthMoneyAll(),this.getMonthBar(),this.reset(),this.get_event_list()},frontMonth:function(){this.cag="北京",this.month_ago++,this.getMonthMoney(),this.getMonthMoneyAll(),this.getMonthBar(),this.reset(),this.get_event_list()},getMonthMoney:function(){var t=this;this.$ajax.get(a.upload_url+"/sql/select_bytime",{params:{month:this.month_ago,cag:this.cag}}).then(function(e){if(0!=e.data.length){var n=e.data[0];t.out_money=n.sum,t.month=n.month,t.year=n.year}else console.log("no data")}).catch(function(t){console.log(t)})},getMonthMoneyAll:function(){var t=this;this.$ajax.get(a.upload_url+"/sql/select_bytime_all",{params:{month:this.month_ago,cag:this.cag}}).then(function(e){if(0!=e.data.length){var n=e.data[0];t.out_money_all=n.sum,t.month=n.month,t.year=n.year}else console.log("no data")}).catch(function(t){console.log(t)})},getMonthBar:function(){var t=this;this.$ajax.get(a.upload_url+"/sql/select_bytime_bar",{params:{month:t.month_ago,cag:this.cag}}).then(function(e){0!=e.data.length?t.bar_data=e.data:console.log("no data")}).catch(function(t){console.log(t)})},getData:function(){var t=this,e={num_pro_page:this.num_pro_page,current_page:this.current_page,month:this.month_ago,cag:this.cag};this.$ajax.get(a.upload_url+"/sql/select",{params:e}).then(function(e){t.tableData=e.data}).catch(function(t){console.log(t)})},nextPage:function(){this.current_page++,this.getData()},frontPage:function(){this.current_page--,this.getData()}}}},gZCx:function(t,e,n){"use strict";var a=n("VpYQ"),i=(n.n(a),n("pDRr"));n.n(i);e.a={name:"upload",data:function(){return{action:"",things:[],things_more:"",money:null,who:"ALL",where:"北京",things_list:[],content_list:{},loading:!1,things_more_flag:!1,cost:0}},watch:{action:function(){this.click_action(this.action)}},methods:{reset:function(){this.money=null,this.things=[],this.things_more="",this.things_more_flag=!1},click_action:function(t){""!=t&&(this.things=[],this.content_list.action[t]?this.things_list=this.content_list.action[t]:this.content_list.action_list[t]&&(this.things_list=this.content_list.action_list[t]))},things_more_click:function(){this.things_more_flag=!0},check_format:function(){var t=/^[0-9. ]+$/,e=/^[\u4E00-\u9FA5A-Za-z0-9.,， ]+$/;return t.test(this.money)?!(""!=this.things_more&&!e.test(this.things_more))||(this.$message({duration:1e3,showClose:!0,title:"格式错误",message:"输入只能用 , 隔开",type:"warning"}),!1):(this.$message({duration:1e3,showClose:!0,title:"格式错误",message:"金额只能是数字",type:"warning"}),!1)},submit_data:function(){if(this.check_format()){var t=this;t.loading=!0;var e="";e=this.things.join(","),e+=""!=this.things_more&&""!=e?","+this.things_more:this.things_more;var n={action:this.action,things:e,money:this.money,who:this.who,where:this.where};this.$ajax.get(i.upload_url+"/sql/insert",{params:n}).then(function(e){1==e.data?(t.$message({duration:1e3,showClose:!0,title:"成功",message:"插入数据成功",type:"success"}),t.set_mode(),t.reset()):t.$message({duration:1e3,showClose:!0,title:"失败",message:"插入数据失败",type:"error"}),t.loading=!1}).catch(function(e){t.$message({duration:1e3,showClose:!0,title:"失败",message:"插入数据失败",type:"error"}),console.log(e),t.loading=!1})}},set_mode:function(){localStorage.where=this.where,localStorage.action=this.action,localStorage.who=this.who},get_mode:function(){var t=this;if(t.who=localStorage.who||"ALL","北京"!=localStorage.where&&localStorage.where&&localStorage.action)t.action=localStorage.action,t.where=localStorage.where;else{var e=(new Date).getHours();t.action=e<10?"早饭":e<15?"午饭":"晚饭"}},getMonthMoney:function(){var t=this;this.$ajax.get(i.upload_url+"/sql/select_bytime",{params:{month:0}}).then(function(e){if(0!=e.data.length){var n=e.data[0];t.cost=n.sum}else console.log("no data")}).catch(function(t){console.log(t)})}},mounted:function(){this.get_mode(),this.getMonthMoney(),this.content_list=a.content_list}}},hYS1:function(t,e,n){"use strict";function a(t){n("qcbv")}var i=n("gZCx"),o=n("G9wJ"),s=n("VU/8"),l=a,c=s(i.a,o.a,l,"data-v-01b552e3",null);e.a=c.exports},pDRr:function(t,e){var n=window.location.protocol+"//"+window.location.host;t.exports={upload_url:n}},q8zI:function(t,e){},qcbv:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{nav:[{name:"数据上传",id:"upload",icon:"upload",active:!0},{name:"数据记录",id:"viz",icon:"document",active:!1}]}},methods:{gotoPage:function(t){this.$router.push({name:t});for(var e=0;e<this.nav.length;e++)this.nav[e].active=t==this.nav[e].id}},mounted:function(){for(var t=0;t<this.nav.length;t++)this.nav[t].active&&this.$router.push({name:this.nav[t].id})}}}},["NHnr"]);