const dashboard = {
    "id" : 1,
    "title" : "C+D 报表",
    "createTime" : "2018-5-28",
    "description" : "test from Kim",
    "styles" : {
        "showTitle" : false,
        "backgroundColor" : "rgba(0,0,0,0)",
        "titleColor" : "rgba(0,0,0,0.870588)",
        "margins" : [
            10,
            10
        ],
        "backgroundSizeMode" : "100%"
    },
    "edgeClientAliases" : [
        {
            "aliasId" : 1,
            "alias" : "别名1",
            "edgeClients" : [
                {
                    "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                    "edgeClientName" : "C-edgeclient",
                    "deviceList" : [
                        {
                            "id" : "1", "name" : "restApi",
                            "keys" : ["spindle_alarm", "spindle_fcft_score", "spindle_health", "temp_alarm", "spindle_front_bearing_temp", "spindle_back_bearing_temp",
                                "spindle_current", "spindle_load", "tool_wear_perc", "tool_wear", "tool_wear_prid", "tool_rul", "tool_wear_ratio", "tool_break_alarm"
                            ]
                        },
                        {
                            "id" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a", "name" : "websocket",
                            "keys" : [
                                "OPstate", "workcount", "poweronTime", "cycletime", "operatingTime", "x_load", "y_load", "z_load", "RPM_actual", "RPM_set"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "components" : [
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "机床信息",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp1_app\" class=\"main\"> <div class=\"leftdiv\"><img src=\"./static/images/cnc.png\"></div> <div class=\"rightdiv\"> <div class=\"bottom-row\"> <div style=\"color:#04c1b0;\"><img src=\"./static/images/svg/bullet/green.svg\" style=\"\"/>&nbsp;&nbsp;机床信息</div> <div><span>设备编号</span><span>22323423</span></div> <div><span>设备型号</span><span>快捷设备DEPO SPEED</span></div> <div><span>类别</span><span>立式</span></div> <div><span>入厂日期</span><span>2001/01/05</span></div> <div><span>年限</span><span>14.2</span></div> </div> <div class=\"bottom-row\"> <div><span>机床状态</span> <span v-if=\"da.opstate === 1\" style=\"color:#09a4d5;\" >在线 &nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\" /></span> <span v-else style=\"color:#09a4d5;\" >离线 &nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/offline.svg\" /></span> </div> <div><span>网络状态</span><span style=\"color:#7ed651;\">在线&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\"/></span></div> <div><span>加工件数</span><span id=\"workcount\">{{da.workcount}}</span></div> <div><span>开机时间</span><span id=\"poweronTime\">{{da.poweronTime}}h</span></div> <div><span>循环时间</span><span id=\"cycletime\">{{da.cycletime}}h</span></div> <div><span>运行时间</span><span id=\"operatingTime\">{{da.operatingTime}}m</span></div> </div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 100px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; } .leftdiv{ float:left; width:190px; height:100px; line-height:100px;}.leftdiv img{ vertical-align: middle; } .rightdiv{ float:left; width:calc(100% - 190px); height:calc(100% - 15px); padding-top:15px; } .bottom-row{ height:35px; line-height: 35px; float:left; width:100%; } .bottom-row div{ float:left; width:16%; color:#ededef; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span:first-child{ padding-right:10px; color:rgba(255,255,255,0.5); } .bottom-row div img{ vertical-align: middle; }",
                    "controllerScript" : "self.data = { da: {}, data: [ { v: '运行', t: 1528358866224, k: {o: \"opstate\", l: \"opstate\"} }, { v: 2, t: 1528358866224, k: {o: \"workcount\", l: \"workcount\"} }, { v: 6, t: 1528358866224, k: {o: \"poweronTime\", l: \"poweronTime\"} }, { v: 6, t: 1528358866224, k: {o: \"cycletime\", l: \"cycletime\"} }, { v: 5, t: 1528358866224, k: {o: \"operatingTime\", l: \"operatingTime\"} }] }; self.onInit = function () {}; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { console.log( self.ctx.$(\"#front-w\",self.ctx.$element).get(0))}; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "workcount" : "0",
                            "poweronTime" : "0",
                            "cycletime" : "0",
                            "operatingTime" : "0",
                            "opstate" : 0
                        }
                    },
                    "dataSources" : [
                        {
                            "label" : "OPstate",
                            "valueFunc" : "return {\n    OPstate:\"\"}\n//机床状态"
                        },
                        {
                            "label" : "workcount",
                            "valueFunc" : "return {\n    workcount:\"2\"}\n//加工件数"
                        },
                        {
                            "label" : "poweronTime",
                            "valueFunc" : "return {\n    poweronTime:\"\"}\n//开机时间"
                        },
                        {
                            "label" : "cycletime",
                            "valueFunc" : "return {\n    cycletime:\"\"}\n//水循环时间"
                        },
                        {
                            "label" : "operatingTime",
                            "valueFunc" : "return {\n    operatingTime:\"\"}\n//运行时间"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 0,
                "y" : 0
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "组件名称",
            "zIndex" : 2,
            "styles" : {
                "width" : "100%",
                "showTitle" : false,
                "position" : "relative",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#dedede",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "margin" : "0 0 20px 0",
                "boxShadow" : "0 6px 8px 0 rgba(0,0,0,0.30)"
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "OPstate",
                            "key" : "OPstate",
                            "valueFunc" : "",
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "workcount",
                            "key" : "workcount",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "poweronTime",
                            "key" : "poweronTime",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "cycletime",
                            "key" : "cycletime",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "operatingTime",
                            "key" : "operatingTime",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "空白组件",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"empty-component\"></div>",
                    "templateCss" : ".empty-component{ width:100%; height: 100%;  background-color:#262d45;  } ",
                    "controllerScript" : "",
                    "defaultData" : {},
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 0,
                "y" : 0
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "空白组件",
            "zIndex" : 0,
            "styles" : {
                "width" : "100%",
                "height" : 740,
                "showTitle" : false,
                "position" : "relative",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "boxShadow" : "0 6px 8px 0 rgba(0,0,0,0.30)"
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具基础信息",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp2_app\" class=\"main\"> <div id=\"tool_status\" v-bind:class=\"da.tool_break_alarm==0? 'tpdiv':'alarm'\"> <div id=\"knife_status_img\"><img v-if=\"da.tool_break_alarm == 0\" src=\"./static/images/svg/meter/n.svg\"><img v-else src=\"./static/images/svg/meter/a.svg\"></div> <div id=\"knife_status_txt\">{{da.tool_break_alarm==0?\"刀具状态正常\":\"刀具断刀提示\"}}</div> </div> <div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\"> <div class=\"col1\"><img src=\"./static/images/svg/bullet/green.svg\">&nbsp;&nbsp;刀具基础信息</div> </div> <div class=\"bottom-row\" style=\"margin-top:5px;\"> <div><span>刀具品牌</span><span>日立</span> </div> <div><span>刀具规格</span><span>D35</span> </div> <div><span>主轴刀号</span><span id=\"currenttoolnum\">T21</span> </div> <div><span>预备刀号</span><span id=\"pretoolnum\">T09</span> </div> </div> <div class=\"bottom-row\" > <div><span>X 轴负载</span><span id=\"x_load\">{{da.x_load}}%</span> </div> <div><span>Y 轴负载</span><span id=\"y_load\">{{da.y_load}}%</span> </div> <div><span>Z 轴负载</span><span id=\"z_load\">{{da.z_load}}%</span> </div> </div> </div> <div class=\"leftdiv-col2\"> <img src=\"./static/images/dao.png\" /> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(25% - 26px); height:96px; float:left; vertical-align: middle; background-color:#292c4a; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:75%; height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(22% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : "self.data = { da: {}, i: 1, a:58 }; self.onInit=function(){ self.data.a=58;}; self.onDataUpdated=function(data){ self.ctx.$.each(data,function(i,obj){ eval(\"self.data.da.\"+obj.k.o+\"='\"+obj.v+\"'\"); }); if(self.data.da.tool_break_alarm==1){ self.data.da.statustxt = '刀具断刀提示'; } else{ self.data.da.statustxt = '刀具状态正常'; } }; self.onResize=function(){ }; self.onDestroy=function(){ }; self.onPendding=function(){ }; self.getstatus=function(){ var tool_warn=0,tool_alarm=0,tool_rul=100; if(self.data.a<0){ self.data.a=58; } if(self.data.a<40){ tool_warn=1; } if(self.data.a<20){ tool_alarm=1; } tool_rul=self.data.a; self.data.a = self.data.a -2; return { tool_rul: tool_rul, tool_break_warn:tool_warn, tool_break_alarm:tool_alarm } };",
                    "defaultData" : {
                        "da" : {
                            "x_load" : "31",
                            "y_load" : "42",
                            "z_load" : "53",
                            "tool_break_alarm" : 0
                        }
                    },
                    "dataSources" : [
                        {
                            "label" : "tool_break_alarm",
                            "valueFunc" : "return {\n    tool_break_alarm:\"\"}\n//断刀报警"
                        },
                        {
                            "label" : "x_load",
                            "valueFunc" : "return {\n    x_load:\"1\"}\n//x轴负载"
                        },
                        {
                            "label" : "y_load",
                            "valueFunc" : "return {\n    x_load:\"1\"}\n//y轴负载"
                        }, {
                            "label" : "z_load",
                            "valueFunc" : "return {\n   z_load:\"1\"}\n//z轴负载"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 15,
                "y" : 140
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "刀具基本信息",
            "zIndex" : 1,
            "styles" : {
                "width" : 'calc(58% - 15px)',
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#dedede",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_break_alarm",
                            "key" : "tool_break_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "x_load",
                            "key" : "x_load",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "y_load",
                            "key" : "y_load",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "z_load",
                            "key" : "z_load",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具磨损量预测——隔离线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : "self.data = { da : {}, i : 1 }; self.onInit = function () {}; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "comp_title" : '刀具磨损量预测'
                        }
                    },
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 15,
                "y" : 300
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "刀具磨损量预测——分割线",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(58% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : []
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具磨损量百分比",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_chart1_mainchart\" class=\"main\"></div>",
                    "templateCss" : "#maxiot_cd_chart1_mainchart{ width:100%; min-height: 300px; margin-top:20px}",
                    "controllerScript" : "self.data = { option : {}, myChart : {}, a : 98 }; self.onInit = function () { self.data.a = 98; self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart1_mainchart')); self.data.option = { tooltip : { formatter : \"{a} <br/>{b} : {c}%\" }, series : [ { name : '业务指标', type : 'gauge', startAngle : 210, endAngle : -30, data : [{value : 50, name : '磨损百分比'}], min : 0, max : 100, splitNumber : 2, radius : '80%', axisLine : { lineStyle : { \"width\" : 10, color : [ [0.2, '#01C6FD'], [0.8, '#EAB62A'], [1, '#E04F23'] ] } }, axisTick : {show : false}, splitLine : { length : 10, lineStyle : { color : 'auto' }, show : false }, pointer : { width : 3 }, title : { offsetCenter : [0, '30%'], }, axisLabel : {}, detail : { fontWeight : 'normal', color : 'rgba(49, 178, 231,1)', offsetCenter : [\"0%\", \"80%\"], formatter : function (value) { return \"{a|\" + value + \"}\" + \"{b|%}\"; }, rich : { a : { fontSize : 44 }, b : { fontSize : 22, padding : 5, verticalAlign : 'bottom' } } } } ] }; self.data.option.series[0].data[0].value = 0; self.data.myChart.setOption(self.data.option, true); }; self.onDataUpdated = function (data) { var da = {}; self.ctx.$.each(data, function (i, obj) { eval(\"da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); self.data.option.series[0].data[0].value = da.tool_wear_ratio; self.data.myChart.setOption(self.data.option, true); }; self.onResize = function () { self.data.myChart.resize(); }; self.onDestroy = function () { }; self.onPendding = function () { }; ",
                    "defaultData" : {},
                    "dataSources" : [
                        {
                            "label" : "tool_wear_ratio",
                            "valueFunc" : "return {\n    tool_wear_ratio:\"\"}\n//磨损量百分比"
                        }
                    ]
                }
            },
            "templateType" : "刀具磨损量百分比",
            "relation" : {
                "x" : 15,
                "y" : 340
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "echart",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(25% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_wear_ratio",
                            "key" : "tool_wear_ratio",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具衰退趋势图",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_charts_main\" style=\"width: 100%;height:350px;\"></div>",
                    "templateCss" : "",
                    "controllerScript" : "self.data = { da: {}, option: {}, firstDate: \"\", oldData:[], curmin:0, myChart:{}, n:1, a:0 }; self.onInit = function () { self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_charts_main')); self.data.option = { title : [{ text : '刀具衰退趋势图', left : '0%', top : '0%', textStyle : { color : 'rgba(255,255,255,0.5)', fontStyle : 'normal', fontFamily : 'sans-serif', fontSize : 14 } },{ text : '健康值（0故障-1正常)', left : '0%', top : '12%', textStyle : { color : '#399fae', fontStyle : 'normal', fontFamily : 'sans-serif', fontSize : 12 } }], tooltip : { trigger : 'axis', formatter : function (params) { params = params[0]; return \"磨损量 <span style='color:#01c6fd' >\" + params.value[1] + \"mm</span>\"; }, axisPointer : { type : 'cross', animation : false, label : { backgroundColor : '#505765' } }, textStyle : { color : 'rgba(255,255,255,0.5)' } }, xAxis : { type : 'value', boundaryGap : false, name : '(mins)', nameGap : 20, splitNumber : 16, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, axisLabel : { interval : 5 }, splitLine : { show : false } }, yAxis : { type : 'value', name : '', nameLocation:'end', nameTextStyle : { color : '#399fae', fontSize : '16px' }, nameGap : 30, axisTick : { length : '0' }, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, }, grid : { left : 36, top : 90 }, visualMap : { top : 10, right : 10, pieces : [{ gt : 0, lte : 0.6, color : '#E04F23' }, { gt : 0.6, lte : 0.8, color : '#EAB62A' }, { gt : 0.8, lte : 1.2, color : '#01c5fd' }], outOfRange : { color : '#999' }, show : false }, color : ['#E04F23', '#EAB62A', '#01c5fd'], series : [ { data : [], type : 'line', showSymbol : false, symbolSize : 1, smooth : true, itemStyle : { normal : { borderWidth : 3, borderColor : 'white', color : 'blue' } }, markLine : { data : [{name : '最小值', xAxis : 0}], lineStyle : { type : 'solid', color : '#000' }, symbol : '', label : { show : false } } }, { data : [], type : 'line', symbol : 'none', smooth : true, itemStyle : { normal : { color : '#20aefc', show : false } }, lineStyle : { normal : { width : 4, type : 'dashed' } } }, { name : '低故障率', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 3 } }, markArea : { data : [[{ yAxis : '0' }, { yAxis : '0.6' }]] }, }, { name : '中等故障率', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.6' }, { yAxis : '0.8' }]] } }, { name : '高故障率', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.8' }, { yAxis : '1.2' }]] } }] };  self.data.myChart.setOption(self.data.option, true);}; self.onDataUpdated = function (data) { var minutes = 0; self.ctx.$.each(data, function (i, obj) { self.data.da[obj.k.o] = obj.v; }); if (self.data.oldData.length == 0) { self.data.oldData.push([0, self.data.da.tool_wear]); self.data.firstDate = self.data.da.tool_end_time; } else { var minutes = self.getMinsDiff(self.data.da.tool_end_time, self.data.firstDate); self.data.oldData.push([minutes, self.data.da.tool_wear]); } self.data.curmin = minutes; var tool_wear_prid = eval(\"(\" + self.data.da.tool_wear_prid + \")\"); var arr = []; arr.push([self.data.curmin, self.data.da.tool_wear]); for(var i=0;i<tool_wear_prid.length;i++){ arr.push([self.data.curmin+i+1,tool_wear_prid[i]]); } self.data.option.series[0].data = self.data.oldData; self.data.option.series[1].data = arr; self.data.option.series[0].markLine.data[0].xAxis = minutes; self.data.myChart.setOption(self.data.option, true); }; self.onResize = function () { self.data.myChart.resize(); }; self.onDestroy = function () { }; self.onPendding = function () { }; self. getMinsDiff = function (date1, date2) { var date = new Date(date1).getTime() - new Date(date2).getTime(); var diffmins = date / (60 * 1000); return diffmins; }; self.getDatestr = function () { var date = new Date(\"2018-06-10 12:20:20\"); date.setMinutes(date.getMinutes() + self.data.n++); return date; }; self.getData = function () { var cd=self.data.mockdata[self.data.a]; self.data.a++; if(self.data.a==self.data.mockdata.length) { self.data.a=0; } return{ tool_wear:cd.tool_wear, tool_wear_pred:cd.tool_wear_pred } }",
                    "defaultData" : {},
                    "dataSources" : [
                        {
                            "label" : "tool_wear",
                            "valueFunc" : "return {\n    tool_wear:\"\"}\n//刀具磨损量"
                        },
                        {
                            "label" : "tool_wear_prid",
                            "valueFunc" : "return {\n    tool_wear_prid:\"\"}\n//刀具磨损量预测"
                        }
                    ]
                }
            },
            "templateType" : "echart",
            "relation" : {
                "x" : "25%",
                "y" : 340
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "刀具衰退趋势图",
            "zIndex" : 1,
            "styles" : {
                "width" : "35%",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_wear",
                            "key" : "tool_wear",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_wear_prid",
                            "key" : "tool_wear_prid",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具剩余寿命--分割线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : "self.data = { da : {}, i : 1 }; self.onInit = function () { var data = [ { v : \"刀具剩余寿命\", t : 1528358866224, k : {o : \"comp_title\", l : \"comp_title\"} } ]; self.onDataUpdated(data); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "comp_title" : '刀具剩余寿命'
                        }
                    },
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 15,
                "y" : 700
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "刀具剩余寿命--分割线",
            "zIndex" : 1,
            "styles" : {
                "width" : 'calc(58% - 15px)',
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具剩余寿命",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp6_main\" style=\"height: 100px;\"> <div class=\"left\"> <div class=\"leftdiv\" id=\"tool_rul_perc\" v-bind:class=\"da.tool_alarm?'alarm':da.tool_warn?'warn':'ok'\"> {{da.tool_rul_perc}}<em>%</em></div> <div class=\"rightdiv\"> <div style=\"width:100%;\"><span>0</span><span style=\"padding-left:calc(50% - 20px)\">50</span><span style=\"padding-left:calc(50% - 50px)\">100</span></div> <div class=\"barLife\"></div> </div> </div> <div class=\"right\"> <div class=\"righttxt\">刀具剩余寿命</div> <div class=\"right-sub-txt\" id=\"tool_rul\" v-bind:class=\"da.tool_alarm?'alarm':da.tool_warn?'warn':'ok'\"> {{da.tool_rul}}<em>min</em></div> </div> </div>",
                    "templateCss" : ".leftdiv { float: left; width: 100px; height: 100px; line-height: 100px; font-size: 50px; text-align: left; font-weight: normal; color: rgb(1, 198, 253); } .rightdiv { float: left; width: calc(100% - 110px); margin-left: 10px; margin-top: 15px; } .txtdiv { color: rgba(255, 255, 255, 0.5); font-size: 14px; font-weight: normal; } .barLife div { width: 4px; height: 35px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.3); float: left; margin-right: 5px; } .bottomdiv { margin-top: 10px; } em { font-size: 18px; font-style: normal; } .rightdiv span { color: rgba(255, 255, 255, 0.5); font-weight: 100; } .left { float: left; width: 75%; } .right { float: left; width: calc(25% - 60px); text-align: left; padding-left: 60px; } .righttxt { font-size: 14px; color: rgba(255, 255, 255, 0.5); font-weight: 100; } .right-sub-txt { font-size: 50px; color: rgb(1, 198, 253); font-weight: 100; } .alarm { color: rgb(224, 79, 35); } .warn { color: #EAB62A; } .ok { color: rgba(49, 178, 231, 1); }",
                    "controllerScript" : "self.data = { i : 1, a : 0, da : { tool_rul_perc : \"0\", tool_rul : 0, tool_wear : 1.0230706280181004, tool_warn : false, tool_alarm : false }, mockdata : [] }; self.init = function () { self.data.a = 0; self.data.i = 1; var width = self.ctx.$(\".barLife\", self.ctx.$element).width(); var bar = self.ctx.$(\".barLife\", self.ctx.$element); bar.empty(); var n = width / 9; for (var i = 1; i < n; i++) { self.ctx.$(\".barLife\", self.ctx.$element).append(\"<div></div>\"); } }; self.set = function (percent, tool_wear) { var width = self.ctx.$(\".barLife\", self.ctx.$element).width(); var newwidth = (percent / 100.0) * width; var n = newwidth / 9; self.ctx.$(\".barLife div\", self.ctx.$element).css(\"background-color\", \"rgba(255,255,255,0.3)\"); for (var i = 0; i < n; i++) { if (tool_wear < 0.2) { self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgb(224, 79, 35)\"); } else if (tool_wear < 0.8) { self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"#EAB62A\"); } else { self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgba(49, 178, 231, 0.8)\"); } } if (tool_wear < 0.2) { self.data.da.tool_alarm = true; self.data.da.tool_warn = false; } else if (tool_wear < 0.8) { self.data.da.tool_alarm = false; self.data.da.tool_warn = true; } else { self.data.da.tool_alarm = false; self.data.da.tool_warn = false; } }; self.ctx.$(window).resize(function () { self.init(); self.set(self.data.da.tool_rul_perc, self.data.da.tool_wear); }); self.onInit = function () { self.init(); self.data.mockdata = []; }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); self.data.da.tool_rul_perc = (self.data.da.tool_rul_perc * 100).toFixed(0); self.set(self.data.da.tool_rul_perc, self.data.da.tool_wear); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { }; ",
                    "defaultData" : {
                        "da" : {
                            "tool_rul_perc" : "0",
                            "tool_rul" : 0,
                            "tool_wear" : 1,
                            "tool_warn" : false,
                            "tool_alarm" : false
                        }
                    },
                    "dataSources" : [
                        {
                            "label" : "tool_rul",
                            "valueFunc" : "return {\n    tool_rul:\"0\"}\n//刀具剩余寿命"
                        },
                        {
                            "label" : "tool_rul_perc",
                            "valueFunc" : "return {\n    tool_rul_perc:\"0\"}\n//刀具剩余寿命比例"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 15,
                "y" : 740
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "刀具磨损量预测",
            "zIndex" : 1,
            "styles" : {
                "width" : 'calc(58% - 15px)',
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_rul",
                            "key" : "tool_rul",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "tool_rul_perc",
                            "key" : "tool_rul_perc",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴基础信息",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"main\" id=\"maxiot_cd_comp3_main\"> <div id=\"spindle_status\" v-bind:class=\"{alarm:da.alarm,tpdiv:!da.alarm}\"> <div v-if=\"da.alarm\"><img src=\"./static/images/svg/meter/a.svg\"></div> <div v-else><img src=\"./static/images/svg/meter/n.svg\"></div> <div>{{da.statustxt}}</div> </div> <div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\"> <div class=\"col1\"><img src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;主轴基础信息</div> </div> <div class=\"bottom-row\" style=\"margin-top:5px;\"> <div style=\"width:55%;\"><span>主轴编号</span><span>D09s361</span></div> <div style=\"width:45%;\"><span>主轴设定转速</span><span id=\"RPM_set\">{{da.RPM_set}}</span></div> </div> <div class=\"bottom-row\"> <div style=\"width:55%;\"><span>主轴型号</span><span>SK 40 / HSK80</span></div> <div style=\"width:45%;\"><span>主轴实际转速</span><span id=\"RPM_actual\">{{da.RPM_actual}}</span></div> </div> </div> <div class=\"leftdiv-col2\"> <img src=\"./static/images/spindle.png\"/> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; background-color:#262d45; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:calc(82% - 20px); height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;} .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : "self.data = { da: {}, data: [], spindle_alarm: 0 }; self.onInit = function () { self.onDataUpdated(data); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); if (self.data.da.spindle_alarm === 1) { self.data.da.alarm=true; self.data.da.statustxt = '主轴故障报警'; } else { self.data.da.alarm=false; self.data.da.statustxt = '主轴状态正常'; } }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { }; self.getstatus = function () { if (self.data.spindle_alarm === 0) { self.data.spindle_alarm = 1; } else { self.data.spindle_alarm = 0; } return self.data.spindle_alarm; };",
                    "defaultData" : {
                        "da" : {
                            "RPM_set" : "0",
                            "RPM_actual" : "0",
                            "spindle_alarm" : 1,
                            "statustxt" : "主轴状态正常",
                            "alarm" : false
                        }
                    },
                    "dataSources" : [
                        {
                            "label" : "spindle_alarm",
                            "valueFunc" : "return {\n    spindle_alarm:\"0\"}\n//主轴报警"
                        },
                        {
                            "label" : "RPM_set",
                            "valueFunc" : "return {\n    RPM_set:\"0\"}\n//主轴设定转速"
                        },
                        {
                            "label" : "RPM_actual",
                            "valueFunc" : "return {\n    RPM_actual:\"0\"}\n//主轴实际转速"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : "60%",
                "y" : 140
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "主轴基础信息",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#dedede",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_alarm",
                            "key" : "spindle_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "2",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "RPM_set",
                            "key" : "RPM_set",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "2",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "RPM_actual",
                            "key" : "RPM_actual",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "轴故障预警--分割线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : "self.data = { da : {}, i : 1 }; self.onInit = function () {}; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "comp_title" : '主轴故障预警'
                        }
                    },
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : '60%',
                "y" : 300
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "轴故障预警--分割线",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴故障预警",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp4_app\" class=\"main\"> <div class=\"row-item statusok \"> <div class=\"colorwhite\">电流</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/elect/n.svg\"/></div><div class=\"col2\" id=\"spindle_current\">{{da.spindle_current}}</div><div class=\"col3\">A</div> </div> <div class=\"row-item\"> <div>前轴承温度</div> <div id=\"font-div\" v-bind:class=\"da.spindle_front_bearing_temp>40 ? 'alarm':'statusok'\"> <div id=\"front-img\" class=\"col1\" > <img v-if=\"data.alarm1\" src=\"./static/images/svg/spindleData/temp/a.svg\"/> <img v-else src=\"./static/images/svg/spindleData/temp/n.svg\"/> </div> <div class=\"col2\" id=\"temp_front_bearing\">{{da.spindle_front_bearing_temp}}</div> <div v-if=\"data.alarm1\" style=\"font-size:34px;padding-top:0;\" class=\"col3\" >℃</div> <div v-else class=\"col3\">℃</div> </div> </div> <div class=\"row-item\"> <div>后轴承温度</div> <div id=\"back-div\" v-bind:class=\"da.spindle_back_bearing_temp>40 ? 'alarm':'statusok'\"> <div id=\"back-img\" class=\"col1\" > <img v-if=\"data.alarm2\" src=\"./static/images/svg/spindleData/temp/a.svg\"/> <img v-else src=\"./static/images/svg/spindleData/temp/n.svg\"/> </div> <div class=\"col2\" id=\"temp_back_bearing\">{{da.spindle_back_bearing_temp}}</div> <div v-if=\"data.alarm2\" style=\"font-size:34px;padding-top:0;\" class=\"col3\" >℃</div> <div v-else class=\"col3\">℃</div> </div> </div> <div class=\"row-item statusok\" > <div class=\"colorwhite\">负载</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/load/n.svg\"/></div><div class=\"col2\" id=\"spindle_load\">{{da.spindle_load}}</div><div class=\"col3\">%</div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height:80px; background-color:#292c4a; border-bottom:1px solid rgba(255,255,255,0.3); font-size:12px; } .row-item{ height:45px; float:left; width:25%; color:rgba(255,255,255,0.5); } .row-item div img{ vertical-align: middle; } .col1{ width:20px; text-align: left; padding-left:0px; float:left; padding-top:13px; } .col2{ text-align: right; padding-left:13px; font-size:34px; width:40px; float:left; height: 40px; } .col3{ width:40px; text-align: left; padding-left:3px; float:left; padding-top:19px; font-size:16px; } .statusok{ color:#01c6fd; } .alarm{ color:#EAb62A; } .colorwhite{ color:rgba(255,255,255,0.5); }",
                    "controllerScript" : "self.data = { frontw: 35, backw: 35, da:{spindle_front_bearing_temp:'43', spindle_back_bearing_temp:'43', spindle_load:'20', spindle_current:'2' }, data:{alarm1:true,alarm2:false} }; self.getTemp=function(){ self.data.frontw++; self.data.backw++; if(self.data.frontw==46){ self.data.frontw=35; self.data.backw=35; } return { frontw:self.data.frontw, backw:self.data.backw } }; self.onInit=function(){ self.onDataUpdated(data) }; self.onDataUpdated=function(data){ self.ctx.$.each(data,function(i,obj){ eval(\"self.data.da.\"+obj.k.o+\"='\"+obj.v+\"'\"); }); if(self.data.da.spindle_front_bearing_temp>=40){ self.data.data.alarm1=true; } else{ self.data.data.alarm1=false; } if(self.data.da.spindle_back_bearing_temp>=40){ self.data.data.alarm2=false; } else{ self.data.data.alarm2=false; } }; self.onResize=function(){ }; self.onDestroy=function(){ }; self.onPendding=function(){ }; self.getRandom=function(min, max){ var r = Math.random() * (max - min); var re = Math.round(r + min); re = Math.max(Math.min(re, max), min); return re; };",
                    "defaultData" : {
                        "da" : {
                            "spindle_front_bearing_temp" : "0",
                            "spindle_back_bearing_temp" : "0",
                            "spindle_load" : "0",
                            "spindle_current" : "0"
                        },
                        "data" : {
                            "alarm1" : false,
                            "alarm2" : false
                        },
                    },
                    "dataSources" : [
                        {
                            "label" : "spindle_current",
                            "valueFunc" : "return {\n    spindle_current:\"0\"}\n//电流"
                        },
                        {
                            "label" : "spindle_front_bearing_temp",
                            "valueFunc" : "return {\n    spindle_front_bearing_temp:\"0\"}\n//前轴承温度"
                        },
                        {
                            "label" : "spindle_back_bearing_temp",
                            "valueFunc" : "return {\n    spindle_back_bearing_temp:\"0\"}\n//后轴承温度"
                        },
                        {
                            "label" : "spindle_load",
                            "valueFunc" : "return {\n    spindle_load:\"0\"}\n//负载"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : "60%",
                "y" : 340
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "主轴故障预警",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_current",
                            "key" : "spindle_current",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_front_bearing_temp",
                            "key" : "spindle_front_bearing_temp",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_back_bearing_temp",
                            "key" : "spindle_back_bearing_temp",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_load",
                            "key" : "spindle_load",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴健康风险监测--分割线 ",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : "self.data = { da : {}, i : 1 }; self.onInit = function () {}; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "comp_title" : '主轴健康风险监测'
                        }
                    },
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : '60%',
                "y" : 430
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "主轴健康风险监测--分割线 ",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : []
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴健康风险监测图表",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp5_main\"> <div class=\"txtdiv\">FCFT评分</div> <div class=\"bottomdiv\"> <div class=\"leftdiv\" id=\"spindle_fcft_score\" v-bind:class=\"da.alarm?'alarm':da.warn?'warn':'ok'\">{{da.spindle_fcft_score}}</div> <div class=\"rightdiv\"> <div style=\"width:100%;\"><span>0</span><span style=\"padding-left:calc(50% - 20px)\">0.5</span><span style=\"padding-left:calc(50% - 50px)\">1.0</span></div> <div class=\"bar\"></div> </div> </div> </div>",
                    "templateCss" : ".leftdiv { float: left; width: 80px; height: 65px; line-height: 75px; font-size: 50px; text-align: center; font-weight: normal; } .rightdiv { float: left; width: calc(100% - 95px); margin-left: 10px; } .txtdiv { color: rgba(255, 255, 255, 0.5); font-size: 14px; font-weight: normal; } .bar div { width: 4px; height: 35px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.3); float: left; margin-right: 5px; } .bottomdiv { margin-top: 10px; } em { font-size: 18px; } .rightdiv span { color: rgba(255, 255, 255, 0.5); } .alarm { color: rgb(224, 79, 35); } .warn { color: #EAB62A; } .ok { color: rgba(49, 178, 231, 1); }",
                    "controllerScript" : "self.data = { i : 1, da : { spindle_fcft_score : 0.9 } }; self.onInit = function () { var width = self.ctx.$(\".bar\", self.ctx.$element).width(); var bar = self.ctx.$(\".bar\", self.ctx.$element); bar.empty(); var n = width / 9; for (var i = 1; i < n; i++) { self.ctx.$(\".bar\", self.ctx.$element).append(\"<div></div>\"); } self.onDataUpdated(data);; }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); self.data.da.spindle_fcft_score = parseFloat(self.data.da.spindle_fcft_score).toFixed(1); self.set(self.data.da.spindle_fcft_score); }; self.onResize = function () { self.onInit(); self.set(self.data.da.spindle_fcft_score); }; self.onDestroy = function () { console.log(\"销毁\") }; self.set = function (percent) { var width = self.ctx.$(\".bar\", self.ctx.$element).width(); var newwidth = percent * width; var n = newwidth / 9; self.ctx.$(\".bar div\", self.ctx.$element).css(\"background-color\", \"rgba(255,255,255,0.3)\"); for (var i = 0; i < n; i++) { if (percent < 0.2) { self.ctx.$(\".bar div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgb(224, 79, 35)\"); } else if (percent < 0.8) { self.ctx.$(\".bar div\", self.ctx.$element).eq(i).css(\"background-color\", \"#EAB62A\"); } else { self.ctx.$(\".bar div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgba(49, 178, 231, 0.8)\"); } } if (percent < 0.2) { self.data.da.alarm = true; self.data.da.warn = false; } else if (percent < 0.8) { self.data.da.alarm = false; self.data.da.warn = true; } else { self.data.da.alarm = false; self.data.da.warn = false; } }; self.getstatus = function () { var spindle_alarm = 0, spindle_warn = 0, spindle_fcft_score = 0; if (self.data.i < 0) { self.data.i = 1; } if (self.data.i < 0.2) { spindle_fcft_score = self.data.i; spindle_alarm = 1; spindle_warn = 0; } else if (self.data.i < 0.8) { spindle_fcft_score = self.data.i; spindle_alarm = 0; spindle_warn = 1; } else { spindle_fcft_score = self.data.i; spindle_alarm = 0; spindle_warn = 0; } self.data.i = (self.data.i - 0.1).toFixed(1); return { spindle_fcft_score : spindle_fcft_score, spindle_alarm : spindle_alarm, spindle_warn : spindle_warn }; }; self.ctx.$(window).resize(function () { self.onInit(); self.set(self.ctx.$(\"#spindle_fcft_score\", self.ctx.$element).html()); });",
                    "defaultData" : {
                        "da" : {
                            "spindle_fcft_score" : "0",
                            "alarm" : false,
                            "warn" : false
                        }
                    },
                    "dataSources" : [
                        {
                            "label" : "spindle_fcft_score",
                            "valueFunc" : "return {\n    spindle_fcft_score:\"0\"}\n//FIFT评分"
                        }
                    ]
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : '60%',
                "y" : 470
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "主轴健康风险监测图表 ",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_fcft_score",
                            "key" : "spindle_fcft_score",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }, {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "健康风险变化曲线 ",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_chart3_main\" style=\"width: 100%;height:300px;\"></div>",
                    "templateCss" : "",
                    "controllerScript" : "self.data = { option: {}, myChart:{} }; self.onInit = function () { self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart3_main')); self.data.option = { title : [{ text : '健康风险变化曲线', left : '‘0%', top : '0%', textStyle : { color : 'rgba(255,255,255,0.5)', fontStyle : 'normal', fontFamily : 'sans-serif', fontSize : 14 } }, { text : '风险值(0低-1高)', left : '‘0%', top : '10%', textStyle : { color : 'rgba(255,255,255,0.5)', fontStyle : 'normal', fontFamily : 'sans-serif', fontSize : 12 } }], tooltip : { trigger : 'axis', formatter : function (params) { params = params[0]; return \"日期 <span style='color:#01c6fd' >\" + params.name + \"</span><br/>风险值 <span style='color:#01c6fd'>\" + params.value + \"</span>\"; }, axisPointer : { type : 'cross', animation : false, label : { backgroundColor : '#505765' } }, textStyle : { color : 'rgba(255,255,255,0.5)' } }, xAxis : { type : 'category', boundaryGap : false, name : '日期(天)', nameLocation : 'end', nameGap : 10, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, axisLabel : { formatter : function (value, idx) { var date = new Date(value); return [date.getMonth() + 1, date.getDate()].join('/'); }, interval : 1 }, splitLine : { show : false } }, yAxis : { type : 'value', name : '', nameTextStyle : { color : 'rgba(255,255,255,0.5)', fontSize : '14' }, nameGap : 30, axisTick : { length : '0' }, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, }, grid : { left : 36, top : 90 }, visualMap : { top : 10, right : 10, pieces : [{ gt : 0, lte : 0.2, color : '#01c5fd' }, { gt : 0.2, lte : 0.8, color : '#EAB62A' }, { gt : 0.8, lte : 1, color : '#E04F23' }], outOfRange : { color : '#999' }, show : false }, color : ['#01c5fd', '#EAB62A', 'rgba(224,79,35,0.1)'], series : [{ type : 'line', showSymbol : true, symbolSize : 0.01, smooth : true, itemStyle : { normal : { borderWidth : 3, borderColor : 'white', color : 'blue' } } }, { name : '低风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 3 } }, markArea : { data : [[{ yAxis : '0' }, { yAxis : '0.2' }]] }, }, { name : '中等风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.2' }, { yAxis : '0.8' }]] } }, { name : '高风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.8' }, { yAxis : '1' }]] } }] }; var data=[{ v:'[{\"value\":0,\"date\":\"0\"}]', t:1528358866224, k:{o:\"spindle_health\",l:\"spindle_health\"}}]; self.onDataUpdated(data);self.data.myChart.setOption(self.data.option, true); }; self.onDataUpdated = function (data) { var da={}; self.ctx.$.each(data, function (i, obj) { da[obj.k.o] = obj.v; }); da.spindle_health=eval(da.spindle_health); self.data.option.xAxis.data = da.spindle_health.map(function (item) { return item.date; }); self.data.option.series[0].data = da.spindle_health.map(function (item) { return item.value; }); self.data.myChart.setOption(self.data.option, true); }; self.onResize = function () { self.data.myChart.resize(); }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {},
                    "dataSources" : []
                }
            },
            "templateType" : "echart",
            "relation" : {
                "x" : "60%",
                "y" : 570
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "健康风险变化曲线",
            "zIndex" : 1,
            "styles" : {
                "width" : "calc(40% - 15px)",
                "showTitle" : false,
                "position" : "absolute",
                "titleStyle" : {
                    "fontSize" : "16px",
                    "fontWeight" : 400
                },
                "backgroundColor" : "#fff",
                "color" : "rgba(0, 0, 0, 0.87)",
                "padding" : "0px",
                "boxShadow" : ""
            },
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "1",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "spindle_alarm",
                            "key" : "spindle_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "2",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "RPM_set",
                            "key" : "RPM_set",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "2",
                            "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                            "type" : "latest",
                            "label" : "RPM_actual",
                            "key" : "RPM_actual",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }
    ]
};

export { dashboard };
