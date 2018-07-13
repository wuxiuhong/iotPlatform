const dashboard_openDemo = {
    "id" : 1,
    "title" : "demo 报表",
    "version" : "1.0.0",
    "createTime" : "2018-5-28",
    "description" : "test from Kim",
    "styles" : {
        "minWidth" : 1600,
        "maxWidth" : 1920,
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
                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                    "edgeClientName" : "C-edgeclient",
                    "deviceList" : [
                        {
                            "id" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4", "name" : "restApi",
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
            "templateId" : "15",
            "templateVersion" : "1.0.0",
            "templateType" : "latest | time",
            "template" : {
                "id" : "15",
                "version" : "1.0.0",
                "name" : "空白组件",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"empty-component\" @click=\"getInfo()\"></div>",
                    "templateCss" : ".empty-component{ width:100%; height: 100%;  background-color:#262d45;  } ",
                    "controllerScript" : "self.util={ formatData:function(data){console.log(data);}};  self.getInfo = function(){ self.sendMessage('event1','通讯参数'); };  self.onInit = function () { self.sendMessage('event1','通讯参数');}",
                    "defaultData" : {},
                    "components" : [],
                    "defaultSources" : [
                        {
                            "type" : "sendMessage",
                            "label" : "event1",
                            "name" : "组件发送通讯事件",
                            "valueFunc" : "console.log('对外开发接口')"
                        },
                        {
                            "type" : "data",
                            "name" : "字体样式",
                            "label" : "textColor",
                            "valueFunc" : "#333333"
                        },
                    ],
                    "dataSources" : []
                },
                "components" : [
                    {
                        "type" : "html",
                        "version" : "1.0.0",
                        "templateId" : "15",
                        "templateVersion" : "1.0.0",
                        "templateType" : "latest | time",
                        "template" : {
                            "id" : "15",
                            "version" : "1.0.0",
                            "name" : "空白组件",
                            "type" : "html",
                            "templateType" : "组件模板类型",
                            "image" : "缩略图",
                            "createTime" : "2018-5-28",
                            "template" : {
                                "dependent" : [],
                                "templateHtml" : "<div class=\"empty-component\" @click=\"getInfo()\"></div>",
                                "templateCss" : ".empty-component{ width:100%; height: 100%;  background-color:#262d45;  } ",
                                "controllerScript" : "self.util={ formatData:function(data){console.log(data);}};  self.getInfo = function(){ self.sendMessage('event1','通讯参数'); };  self.onInit = function () { self.onendMessage('event1','通讯参数');}",
                                "defaultData" : {},
                                "components" : [],
                                "defaultSources" : [
                                    {
                                        "type" : "sendMessage",
                                        "label" : "event1",
                                        "name" : "组件发送通讯事件",
                                        "valueFunc" : "console.log('对外开发接口')"
                                    },
                                    {
                                        "type" : "data",
                                        "name" : "字体样式",
                                        "label" : "textColor",
                                        "valueFunc" : "#333333"
                                    },
                                ],
                                "dataSources" : []
                            },
                            "components" : [
                                {
                                    "type" : "html",
                                    "version" : "1.0.0",
                                    "templateId" : "1",
                                    "templateVersion" : "1.0.0",
                                    "template" : {
                                        "id" : "1",
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
                                            "dataSources" : []
                                        }
                                    },
                                    "templateType" : "latest | time",
                                    "relation" : {
                                        "x" : 0,
                                        "y" : 15
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
                                        "titleStyle" : {
                                            "fontSize" : "16px",
                                            "fontWeight" : 400
                                        },
                                        "backgroundColor" : "#dedede",
                                        "color" : "rgba(0, 0, 0, 0.87)",
                                        "padding" : "0px",
                                        "boxShadow" : "0 6px 8px 0 rgba(0,0,0,0.30)"
                                    },
                                    "dataSources" : [
                                        {
                                            "type" : "edgeClient",
                                            "aliasId" : 1,
                                            "deviceData" : [
                                                {
                                                    "deviceId" : "5sdf5we6-sad546s-sd55-0asf",
                                                    "dataKeys" : [
                                                        {
                                                            "type" : "attributes",
                                                            "label" : "edgeClient1",
                                                            "key" : "age",
                                                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                                        },
                                                        {
                                                            "type" : "latest",
                                                            "label" : "edgeClient2",
                                                            "key" : "WaterPump2",
                                                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "dataKeys" : [
                                                {
                                                    "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                                                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                                                    "type" : "latest",
                                                    "label" : "OPstate",
                                                    "key" : "OPstate",
                                                    "valueFunc" : "",
                                                },
                                                {
                                                    "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                                                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                                                    "type" : "latest",
                                                    "label" : "workcount",
                                                    "key" : "workcount",
                                                    "valueFunc" : ""
                                                },
                                                {
                                                    "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                                                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                                                    "type" : "latest",
                                                    "label" : "poweronTime",
                                                    "key" : "poweronTime",
                                                    "valueFunc" : ""
                                                },
                                                {
                                                    "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                                                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                                                    "type" : "latest",
                                                    "label" : "cycletime",
                                                    "key" : "cycletime",
                                                    "valueFunc" : ""
                                                },
                                                {
                                                    "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                                                    "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                                                    "type" : "latest",
                                                    "label" : "operatingTime",
                                                    "key" : "operatingTime",
                                                    "valueFunc" : ""
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
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
                            "height" : 900,
                            "showTitle" : false,
                            "position" : "absolute",
                            "titleStyle" : {
                                "fontSize" : "16px",
                                "fontWeight" : 400
                            },
                            "backgroundColor" : "#fff",
                            "color" : "rgba(0, 0, 0, 0.87)",
                            "boxShadow" : "0 6px 8px 0 rgba(0,0,0,0.30)"
                        },
                        "defaultSources" : [
                            {
                                "type" : "sendMessage",
                                "label" : "event1",
                                "key" : "sendMessage1",
                                "valueFunc" : "报表设计的数据"
                            }
                        ],
                        "dataSources" : []
                    }
                ]
            },
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
            "config" : {
                "angleofrotation" : "90",
                "adsorptionnode" : "[1]",
                "canmove" : false,
                "canedit" : false
            },
            "styles" : {
                "width" : "100%",
                "height" : 900,
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
            "defaultSources" : [
                {
                    "type" : "sendMessage",
                    "label" : "event1",
                    "key" : "sendMessage1",
                    "valueFunc" : "报表设计的数据"
                }
            ],
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "3",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "3",
                "version" : "1.0.0",
                "name" : "刀具基础信息",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp2_app\" class=\"main\">" +
                    " <div id=\"tool_status\" v-bind:class=\" radioInput ? 'tpdiv':'alarm'\"> " +
                    "<div id=\"knife_status_img\"><img v-if=\"da.tool_break_alarm == 0\" src=\"./static/images/svg/meter/n.svg\">" +
                    "<img v-else src=\"./static/images/svg/meter/a.svg\"></div> <div id=\"knife_status_txt\">" +
                    "{{radioInput? textInput :\"刀具断刀提示\"}}</div> </div> " +
                    "<div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\">" +
                    " <div class=\"col1\" :style=\"{ color: textColor }\"><img src=\"./static/images/svg/bullet/green.svg\">&nbsp;&nbsp;刀具基础信息(报表配置的颜色)</div> </div> " +
                    "<div class=\"bottom-row\" style=\"margin-top:5px;\"> <div><span>刀具品牌</span><span>日立</span> </div> " +
                    "<div><span>刀具规格</span><span>D35</span> </div> <div><span>主轴刀号</span><span id=\"currenttoolnum\">T21</span></div>" +
                    " <div><span>预备刀号</span><span id=\"pretoolnum\">T09</span> </div> </div>" +
                    " <div class=\"bottom-row\" > <div><span>X 轴负载</span><span id=\"x_load\">{{da.x_load}}%</span> </div>" +
                    " <div><span>Y 轴负载</span><span id=\"y_load\">{{da.y_load}}%</span> </div>" +
                    " <div><span>Z 轴负载</span><span id=\"z_load\">{{da.z_load}}%</span> </div> </div> </div>" +
                    " <div class=\"leftdiv-col2\"> <img src=\"./static/images/dao.png\" @click=\"myClick('测试点击传参')\"/> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(25% - 26px); height:96px; float:left; vertical-align: middle; background-color:#292c4a; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:75%; height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(22% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : "self.data = { da: {}, i: 1, a:58 };self.onInit=function(){ self.data.getInit('测试'); }; self.onDataUpdated=function(data){ self.ctx.$.each(data,function(i,obj){ eval(\"self.data.da.\"+obj.k.o+\"='\"+obj.v+\"'\"); }); if(self.data.da.tool_break_alarm==1){ self.data.da.statustxt = '刀具断刀提示'; } else{ self.data.da.statustxt = '刀具状态正常'; } }; self.onResize=function(){ }; self.onDestroy=function(){ }; self.onPendding=function(){ }; self.getstatus=function(){ var tool_warn=0,tool_alarm=0,tool_rul=100; if(self.data.a<0){ self.data.a=58; } if(self.data.a<40){ tool_warn=1; } if(self.data.a<20){ tool_alarm=1; } tool_rul=self.data.a; self.data.a = self.data.a -2; return { tool_rul: tool_rul, tool_break_warn:tool_warn, tool_break_alarm:tool_alarm } };",
                    "defaultData" : {
                        "da" : {
                            "x_load" : "31",
                            "y_load" : "42",
                            "z_load" : "53",
                            "tool_break_alarm" : 0
                        }
                    },
                    "defaultSources" : [
                        {
                            "type" : "onMessage",
                            "label" : "onEvent1",
                            "name" : "显示订阅标题事件a",
                            "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
                        },
                        {
                            "type" : "func",
                            "label" : "getInit",
                            "name" : "初始化调用",
                            "valueFunc" : "console.log('对外开发接口')"
                        }, {
                            "type" : "func",
                            "label" : "myClick",
                            "name" : "测试按钮点击事件",
                            "valueFunc" : "console.log('点击事件')"
                        }, {
                            "type" : "color",
                            "name" : "文本框颜色",
                            "label" : "textColor1",
                            "valueFunc" : "#333333"
                        },
                        {
                            "type" : "string",
                            "name" : "字符串表单",
                            "label" : "textInput",
                            "valueFunc" : "报表文字提示"
                        }, {
                            "type" : "number",
                            "name" : "数字表单",
                            "label" : "numberInput",
                            "valueFunc" : 2
                        }, {
                            "type" : "textArea",
                            "name" : "文字域表单",
                            "label" : "textInput",
                            "valueFunc" : "测试文字"
                        }, {
                            "type" : "radio",
                            "name" : "单选按钮",
                            "label" : "radioInput",
                            "valueFunc" : "单选按钮"
                        }, {
                            "type" : "checkbox",
                            "name" : "复选按钮",
                            "label" : "checkboxInput",
                            "valueFunc" : "复选按钮"
                        }, {
                            "type" : "date",
                            "name" : "时间选择器",
                            "label" : "dateInput",
                            "valueFunc" : "时间选择器表单"
                        }
                    ],
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
                "y" : 150
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "基本信息",
            "zIndex" : 1,
            "config" : {
                "angleofrotation" : "90",
                "adsorptionnode" : "[1]",
                "canmove" : false,
                "canedit" : false
            },
            "styles" : {
                "width" : "calc(50% - 15px)",
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
            "defaultSources" : [
                {
                    "type" : "onMessage",
                    "label" : "onEvent1",
                    "fromKey" : ['sendMessage1'],
                    "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
                }, {
                    "type" : "func",
                    "label" : "getInit",
                    "valueFunc" : "console.log(self, data, '配置报表方法')"
                }, {
                    "type" : "func",
                    "label" : "myClick",
                    "valueFunc" : "console.log(data); console.log('测试按钮点击事件')"
                }, {
                    "type" : "data",
                    "label" : "textColor",
                    "valueFunc" : "#ffffff"
                }, {
                    "type" : "data",
                    "label" : "radioInput",
                    "valueFunc" : true
                }, {
                    "type" : "data",
                    "label" : "textInput",
                    "valueFunc" : "报表配置的标题"
                }
            ],
            "dataSources" : [
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "tool_break_alarm",
                            "key" : "tool_break_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "x_load",
                            "key" : "x_load",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "y_load",
                            "key" : "y_load",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "z_load",
                            "key" : "z_load",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        }
    ]
};

export { dashboard_openDemo };
