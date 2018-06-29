const dashboard = {
    "id" : 1,
    "title" : "C+D 报表",
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
                    "templateHtml" : "<div id=\"maxiot_cd_comp1_app\" class=\"maxiot-cd-comp1-main\">\n" +
                    "    <div class=\"leftdiv\"><img src=\"static/images/cnc.png\"></div>\n" +
                    "    <div class=\"rightdiv\">\n" +
                    "        <div class=\"bottom-row\">\n" +
                    "            <div style=\"color:#04c1b0;\"><img src=\"static/images/svg/bullet/green.svg\" style=\"\"/>&nbsp;&nbsp;机床信息</div>\n" +
                    "            <div><span>设备编号</span><span>22323423</span></div>\n" +
                    "            <div><span>设备型号</span><span>快捷设备DEPO SPEED</span></div>\n" +
                    "            <div><span>类别</span><span>立式</span></div>\n" +
                    "            <div><span>入厂日期</span><span>2001/01/05</span></div>\n" +
                    "            <div><span>年限</span><span>14.2</span></div>\n" +
                    "        </div>\n" +
                    "        <div class=\"bottom-row\">\n" +
                    "            <div><span>机床状态</span>\n" +
                    "                <span v-if=\"da.OPstate  == 'wait'\" style=\"color:#09a4d5;\" >离线&nbsp;&nbsp;<img src=\"static/images/svg/operationStats/off.svg\" /></span>\n" +
                    "                <span v-else style=\"color:#09a4d5;\" >在线 &nbsp;&nbsp;<img src=\"static/images/svg/operationStats/running.svg\" /></span>\n" +
                    "            </div>\n" +
                    "            <div><span>网络状态</span><span style=\"color:#7ed651;\">在线&nbsp;&nbsp;<img\n" +
                    "                    src=\"static/images/svg/internetStats/online.svg\"/></span></div>\n" +
                    "            <div><span>加工件数</span><span id=\"workcount\">{{da.workcount}}</span></div>\n" +
                    "            <div><span>开机时间</span><span id=\"poweronTime\">{{da.poweronTime}}h</span></div>\n" +
                    "            <div><span>循环时间</span><span id=\"cycletime\">{{da.cycletime}}h</span></div>\n" +
                    "            <div><span>运行时间</span><span id=\"operatingTime\">{{da.operatingTime}}m</span></div>\n" +
                    "\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss" : ".maxiot-cd-comp1-main{ width:100%; height: 100px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; font-family: \"Microsoft YaHei\"; } .leftdiv{ float:left; width:190px; height:100%; line-height:100px ; } .leftdiv img{ vertical-align: middle; } .rightdiv{ float:left; width:calc(100% - 190px); height:calc(100% - 15px); padding-top:15px; } .bottom-row{ height:35px; line-height: 35px; float:left; width:100%; } .bottom-row div{ float:left; width:16%; color:#ededef; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span:first-child{ padding-right:10px; color:rgba(255,255,255,0.5); } .bottom-row div img{ vertical-align: middle; }",
                    "controllerScript" : " self.onDataUpdated = function (data) {\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        console.log(\"comp1:\"+self.data.da);\n" +
                    "        console.log(self.data.da);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };\n",
                    "defaultData" : {
                        "da" : {
                            "workcount" : "0",
                            "poweronTime" : "0",
                            "cycletime" : "0",
                            "operatingTime" : "0",
                            "OPstate " : 0
                        }
                    },
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
            "title" : "组件名称",
            "zIndex" : 2,
            "config" : {
                "angleofrotation" : "90",
                "adsorptionnode" : ['1'],
                "canmove" : false,
                "canedit" : false
            },
            "styles" : {
                "width" : "100%",

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
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "2",
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
                "y" : 120
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
                    "templateHtml" : "<div id=\"maxiot_cd_comp2_app\" class=\"maxiot-cd-comp2-main\">\n" +
                    "    <div id=\"tool_status\" v-bind:class=\"da.tool_break_alarm==1? 'alarm':da.tool_break_warn==1?'tpwarn':'tpdiv'\">\n" +
                    "        <div id=\"knife_status_img\">\n" +
                    "            <img v-if=\"da.tool_break_alarm == 1|| da.tool_break_warn\" src=\"svg/meter/a.svg\">\n" +
                    "                   <img v-else src=\"static/images/svg/meter/n.svg\">\n" +
                    "        </div>\n" +
                    "        <div id=\"knife_status_txt\">{{da.statustxt}}</div>\n" +
                    "    </div>\n" +
                    "    <div class=\"leftdiv\">\n" +
                    "        <div class=\"leftdiv-col1\">\n" +
                    "            <div class=\"top-row\">\n" +
                    "                <div class=\"col1\"><img src=\"static/images/svg/bullet/green.svg\">&nbsp;&nbsp;刀具基础信息</div>\n" +
                    "            </div>\n" +
                    "\n" +
                    "            <div class=\"bottom-row\" style=\"margin-top:5px;\">\n" +
                    "                <div><span>刀具品牌</span><span>日立</span>  </div>\n" +
                    "                <div><span>刀具规格</span><span>D35</span>  </div>\n" +
                    "                <div><span>主轴刀号</span><span id=\"currenttoolnum\">T21</span>  </div>\n" +
                    "                <div><span>预备刀号</span><span id=\"pretoolnum\">T09</span>  </div>\n" +
                    "            </div>\n" +
                    "            <div class=\"bottom-row\" >\n" +
                    "                <div><span>X 轴负载</span><span id=\"x_load\">{{da.x_load}}%</span>  </div>\n" +
                    "                <div><span>Y 轴负载</span><span id=\"y_load\">{{da.y_load}}%</span>  </div>\n" +
                    "                <div><span>Z 轴负载</span><span id=\"z_load\">{{da.z_load}}%</span>  </div>\n" +
                    "\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"leftdiv-col2\">\n" +
                    "            <img src=\"static/images/dao.png\" />\n" +
                    "        </div>\n" +
                    "        <hr/>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</div>\n",
                    "templateCss" : ".maxiot-cd-comp2-main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; font-family:\"Microsoft YaHei\"; } .tpdiv{ width:calc(22% - 4px); height:96px; float:left; vertical-align: middle; background-color:#262d45; margin:0 auto; text-align:center; border:2px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:75%; height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; font-size:14px; } .bottom-row div{ float:left; width:25%; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); font-size:14px; } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 90px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(22%); height:100px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); } .tpwarn{ width:calc(22%); height:100px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#EAB62A,#E04F23); } #knife_status_txt{ margin-top:8px; }",
                    "controllerScript" : "  self.data = {\n" +
                    "        da: {},\n" +
                    "        i: 1,\n" +
                    "        a:58\n" +
                    "    };\n" +
                    "    self.onInit=function(){\n" +
                    "        self.data.a=58;\n" +
                    "//        setInterval(function () {\n" +
                    "//            var getdata=self.getstatus();\n" +
                    "//            var data='[{\"v\":\"40%\",\"t\":1528358866224,\"k\":{\"o\":\"x_load\",\"l\":\"x_load\"}},{\"v\":\"45%\",\"t\":1528358866224,\"k\":{\"o\":\"y_load\",\"l\":\"y_load\"}},{\"v\":\"30%\",\"t\":1528358866224,\"k\":{\"o\":\"z_load\",\"l\":\"z_load\"}},{\"v\":0,\"t\":1528358866224,\"k\":{\"o\":\"tool_break_alarm\",\"l\":\"tool_break_alarm\"}},{\"v\":0.75,\"t\":1528358866224,\"k\":{\"o\":\"tool_wear_ratio\",\"l\":\"tool_wear_ratio\"}}]';\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//        },2000);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated=function(data){\n" +
                    "        console.log(\"comp2:\"+data);\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "            eval(\"self.data.da.\"+obj.k.o+\"='\"+obj.v+\"'\");\n" +
                    "        });\n" +
                    "\n" +
                    "        if(self.data.da.tool_break_alarm==1){\n" +
                    "            self.data.da.tool_break_warn=0;\n" +
                    "            self.data.da.statustxt = '刀具断刀提示';\n" +
                    "        }\n" +
                    "        else  if(self.data.da.tool_wear_ratio>0.7){\n" +
                    "            self.data.da.tool_break_alarm=0;\n" +
                    "            self.data.da.tool_break_warn=1;\n" +
                    "            self.data.da.statustxt = '刀具换刀提示';\n" +
                    "        }\n" +
                    "        else{\n" +
                    "            self.data.da.tool_break_alarm=0;\n" +
                    "            self.data.da.tool_break_warn=0;\n" +
                    "            self.data.da.statustxt = '刀具状态正常';\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onPendding=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getstatus=function(){\n" +
                    "        var tool_warn=0,tool_alarm=0,tool_rul=100;\n" +
                    "        if(self.data.a<0){\n" +
                    "            self.data.a=58;\n" +
                    "        }\n" +
                    "        if(self.data.a<40){\n" +
                    "            tool_warn=1;\n" +
                    "        }\n" +
                    "        if(self.data.a<20){\n" +
                    "            tool_alarm=1;\n" +
                    "        }\n" +
                    "        tool_rul=self.data.a;\n" +
                    "        self.data.a = self.data.a -2;\n" +
                    "        return {\n" +
                    "            tool_rul: tool_rul,\n" +
                    "            tool_break_warn:tool_warn,\n" +
                    "            tool_break_alarm:tool_alarm\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n",
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
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "4",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "4",
                "version" : "1.0.0",
                "name" : "刀具磨损量预测——隔离线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row { height: 40px; line-height: 40px; font-family: \"Microsoft YaHei\"; } .col1 { width: auto; font-size: 14px; float: left; letter-spacing: 2px; color: #07b3a5; } .col1 img { vertical-align: middle; } .obj { clear: both; height: 0px; width: 100%; min-width: 300px; border: 1px solid rgba(24, 174, 156, 0.5); border-radius: 0 50% 50% 0; } .infomore { margin-top: 13px; width: 16px; height: 16px; line-height: 16px; border-radius: 10px; /* background-color: rgba(254,254,254,.5);;*/ background: url(svg/info/n.svg) no-repeat; float: right; text-align: center; color: rgba(0, 0, 0, .5); font-size: 12px; font-weight: bold; } .infomore:hover { background: url(svg/info/h.svg) no-repeat; conent: \"\"; }",
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
            "templateId" : "5",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "5",
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
                    "controllerScript" : "    self.data = {\n" +
                    "        option : {},\n" +
                    "        myChart : {},\n" +
                    "        a : 98\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "        self.data.a = 98;\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart1_mainchart'));\n" +
                    "\n" +
                    "        self.data.option = {\n" +
                    "            tooltip : {\n" +
                    "                formatter : \"{b} : {c}%\"\n" +
                    "            },\n" +
                    "            series : [\n" +
                    "                {\n" +
                    "                    name : '刀具磨损',\n" +
                    "                    type : 'gauge',\n" +
                    "                    startAngle : 210,\n" +
                    "                    endAngle : -30,\n" +
                    "                    data : [{value : 50, name : '磨损百分比'}],\n" +
                    "                    min : 0,\n" +
                    "                    max : 100,\n" +
                    "                    splitNumber : 2,\n" +
                    "                    radius : '80%',\n" +
                    "                    axisLine : {\n" +
                    "                        lineStyle : {\n" +
                    "                            \"width\" : 10,\n" +
                    "                            color : [\n" +
                    "                                [0.7, '#4caf50'],\n" +
                    "                                [1, '#EAB62A']\n" +
                    "\n" +
                    "                            ]\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisTick : {show : false},\n" +
                    "                    splitLine : {\n" +
                    "                        length : 10,\n" +
                    "                        lineStyle : {\n" +
                    "                            color : 'auto'\n" +
                    "                        },\n" +
                    "                        show : false\n" +
                    "                    },\n" +
                    "                    pointer : {\n" +
                    "                        width : 3\n" +
                    "                    },\n" +
                    "                    title : {\n" +
                    "                        offsetCenter : [0, '30%'],\n" +
                    "                    },\n" +
                    "                    axisLabel : {},\n" +
                    "                    detail : {\n" +
                    "\n" +
                    "                        fontWeight : 'normal',\n" +
                    "\n" +
                    "                        color : 'rgba(49, 178, 231,1)',\n" +
                    "                        offsetCenter : [\"0%\", \"80%\"],\n" +
                    "                        formatter : function (value) {\n" +
                    "                            return \"{a|\" + value + \"}\" + \"{b|%}\";\n" +
                    "                        },\n" +
                    "                        rich : {\n" +
                    "                            a : {\n" +
                    "                                fontSize : 56\n" +
                    "                            },\n" +
                    "                            b : {\n" +
                    "                                fontSize : 22,\n" +
                    "                                padding : 5,\n" +
                    "                                verticalAlign : 'bottom'\n" +
                    "                            }\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "//        setInterval(function () {\n" +
                    "//            self.data.option.series[0].data[0].value = self.getData();\n" +
                    "//            self.data.myChart.setOption(self.data.option, true);\n" +
                    "//        }, 2000);\n" +
                    "    };\n" +
                    "\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        //  data=JSON.parse(data);    //正式打开\n" +
                    "        console.log(\"chart1:\"+data);\n" +
                    "        var da = {};\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        self.data.option.series[0].data[0].value = da.tool_wear_ratio;\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getData = function () {\n" +
                    "        if (self.data.a < 0) {\n" +
                    "            self.data.a = 98;\n" +
                    "        }\n" +
                    "        var result = ((100 - self.data.a)).toFixed(0);\n" +
                    "        self.data.a = self.data.a - 2;\n" +
                    "        return result;\n" +
                    "    };",
                    "defaultData" : {
                        "option" : {},
                        "myChart" : {},
                        "a" : 98
                    },
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
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
            "templateId" : "6",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "6",
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
                    "controllerScript" : "  self.data = {\n" +
                    "        da: {},\n" +
                    "        option: {},\n" +
                    "        firstDate: \"\",\n" +
                    "        oldData:[],\n" +
                    "        curmin:0,\n" +
                    "        myChart:{},\n" +
                    "        n:1,\n" +
                    "        a:0\n" +
                    "    };\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_charts_main'));\n" +
                    "        self.data.option = {\n" +
                    "            title : [{\n" +
                    "                text : '刀具衰退趋势图',\n" +
                    "                left : '0%',\n" +
                    "                top : '0%',\n" +
                    "                textStyle : {\n" +
                    "                    color : 'rgba(255,255,255,0.5)',\n" +
                    "                    fontStyle : 'normal',\n" +
                    "                    fontFamily : 'sans-serif',\n" +
                    "                    fontSize : 14\n" +
                    "                }\n" +
                    "            },{\n" +
                    "                text : '健康值（0失效-1正常)',\n" +
                    "                left : '0%',\n" +
                    "                top : '12%',\n" +
                    "                textStyle : {\n" +
                    "                    color : 'rgba(255,255,255,0.5)',\n" +
                    "                    fontStyle : 'normal',\n" +
                    "                    fontFamily : 'sans-serif',\n" +
                    "                    fontSize : 12\n" +
                    "                }\n" +
                    "            },\n" +
                    "                {\n" +
                    "                    text : '时间(min)',\n" +
                    "                    right : 50,\n" +
                    "                    bottom : 20,\n" +
                    "                    textStyle : {\n" +
                    "                        color : 'rgba(255,255,255,0.5)',\n" +
                    "                        fontStyle : 'normal',\n" +
                    "                        fontFamily : 'sans-serif',\n" +
                    "                        fontSize : 12\n" +
                    "                    }\n" +
                    "                }],\n" +
                    "            tooltip : {\n" +
                    "                trigger : 'axis',\n" +
                    "                formatter : function (params) {\n" +
                    "                    params = params[0];\n" +
                    "                    return \"健康值  <span style='color:#01c6fd' >\" + parseFloat(params.value[1]).toFixed(3)  + \"mm</span>\";\n" +
                    "                },\n" +
                    "                axisPointer : {\n" +
                    "                    type : 'cross',\n" +
                    "                    animation : false,\n" +
                    "                    label : {\n" +
                    "                        backgroundColor : '#505765'\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                textStyle : {\n" +
                    "                    color : 'rgba(255,255,255,0.5)'\n" +
                    "                }\n" +
                    "            },\n" +
                    "\n" +
                    "            xAxis : {\n" +
                    "                type : 'value',\n" +
                    "                boundaryGap : false,\n" +
                    "                nameLocation:'center',\n" +
                    "                splitNumber : 16,\n" +
                    "                axisLine : {\n" +
                    "                    lineStyle : {\n" +
                    "                        color : 'rgba(255,255,255,0.5)'\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                axisLabel : {\n" +
                    "\n" +
                    "                    interval : 5\n" +
                    "                },\n" +
                    "                splitLine : {\n" +
                    "                    show : false\n" +
                    "                }\n" +
                    "            },\n" +
                    "            yAxis : {\n" +
                    "                type : 'value',\n" +
                    "                name : '',\n" +
                    "                nameLocation:'end',\n" +
                    "                nameTextStyle : {\n" +
                    "                    color : '#399fae',\n" +
                    "                    fontSize : '16px'\n" +
                    "                },\n" +
                    "                nameGap : 30,\n" +
                    "                axisTick : {\n" +
                    "                    length : '0'\n" +
                    "                },\n" +
                    "                axisLine : {\n" +
                    "                    lineStyle : {\n" +
                    "                        color : 'rgba(255,255,255,0.5)'\n" +
                    "\n" +
                    "                    }\n" +
                    "                },\n" +
                    "            },\n" +
                    "            grid : {\n" +
                    "                left : 36,\n" +
                    "                top : 90,\n" +
                    "                right:50\n" +
                    "            },\n" +
                    "            visualMap : {\n" +
                    "                top : 10,\n" +
                    "                right : 10,\n" +
                    "                pieces : [{\n" +
                    "                    gt : 0,\n" +
                    "                    lte : 0.6,\n" +
                    "                    color : '#E04F23'\n" +
                    "                }, {\n" +
                    "                    gt : 0.6,\n" +
                    "                    lte : 0.8,\n" +
                    "                    color : '#EAB62A'\n" +
                    "                }, {\n" +
                    "                    gt : 0.8,\n" +
                    "                    lte : 1.2,\n" +
                    "                    color : '#01c5fd'\n" +
                    "                }],\n" +
                    "                outOfRange : {\n" +
                    "                    color : '#999'\n" +
                    "                },\n" +
                    "                show : false\n" +
                    "            },\n" +
                    "\n" +
                    "                        color:['#E04F23', '#EAB62A','#01c5fd'],\n" +
                    "            series : [\n" +
                    "                {\n" +
                    "                    data : [],\n" +
                    "                    type : 'line',\n" +
                    "                    showSymbol : false,\n" +
                    "                    symbolSize : 1,\n" +
                    "                    smooth : true,\n" +
                    "                    itemStyle : {\n" +
                    "                        normal : {\n" +
                    "                            borderWidth : 3,\n" +
                    "                            borderColor : 'white',\n" +
                    "                            color : 'blue'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    markLine : {\n" +
                    "                        data : [{name : '最小值', xAxis : 0}],\n" +
                    "                        lineStyle : {\n" +
                    "                            type : 'solid',\n" +
                    "                            color : '#000',\n" +
                    "                            width:0.5\n" +
                    "                        },\n" +
                    "                        symbol : '',\n" +
                    "                        label : {\n" +
                    "                            show : false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    data : [],\n" +
                    "                    type : 'line',\n" +
                    "                    symbol : 'none',\n" +
                    "                    smooth : true,\n" +
                    "                    itemStyle : {\n" +
                    "                        normal : {\n" +
                    "                            color : '#20aefc',\n" +
                    "                            show : false\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    lineStyle : {\n" +
                    "                        normal : {\n" +
                    "                            width : 4,\n" +
                    "                            type : 'dashed'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name : '低故障率',\n" +
                    "                    type : 'line',\n" +
                    "                    animation : false,\n" +
                    "                    areaStyle : {\n" +
                    "                        normal : {}\n" +
                    "                    },\n" +
                    "                    lineStyle : {\n" +
                    "                        normal : {\n" +
                    "                            width : 3\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    markArea : {\n" +
                    "                        data : [[{\n" +
                    "                            yAxis : '0'\n" +
                    "                        }, {\n" +
                    "                            yAxis : '0.6'\n" +
                    "                        }]],\n" +
                    "                        itemStyle:{\n" +
                    "                           color:'rgba(224,79,35,0.3)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "\n" +
                    "                }, {\n" +
                    "                    name : '中等故障率',\n" +
                    "                    type : 'line',\n" +
                    "                    animation : false,\n" +
                    "                    areaStyle : {\n" +
                    "                        normal : {}\n" +
                    "                    },\n" +
                    "                    lineStyle : {\n" +
                    "                        normal : {\n" +
                    "                            width : 1\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    markArea : {\n" +
                    "                        data : [[{\n" +
                    "                            yAxis : '0.6'\n" +
                    "                        }, {\n" +
                    "                            yAxis : '0.8'\n" +
                    "                        }]],\n" +
                    "                        itemStyle:{\n" +
                    "                            color:'rgba(234,182,42,0.3)'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }, {\n" +
                    "                    name : '高故障率',\n" +
                    "                    type : 'line',\n" +
                    "                    animation : false,\n" +
                    "                    areaStyle : {\n" +
                    "                        normal : {}\n" +
                    "                    },\n" +
                    "                    lineStyle : {\n" +
                    "                        normal : {\n" +
                    "                            width : 1\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    markArea : {\n" +
                    "                        data : [[{\n" +
                    "                            yAxis : '0.8'\n" +
                    "                        }, {\n" +
                    "                            yAxis : '1.2'\n" +
                    "                        }]],\n" +
                    "                        itemStyle:{\n" +
                    "                          color:'rgba(1,197,253,0.3)'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }]\n" +
                    "        };\n" +
                    "        self.data.mockdata=   [{\"tool_wear\": \"1.0248631137316073\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"30\", \"tool_rul_perc\": \"1.0\"},\n" +
                    "            {\"tool_wear\": \"1.0386530152740175\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"29\", \"tool_rul_perc\": \"0.967\"},\n" +
                    "            {\"tool_wear\": \"1.0108516052532324\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"28\", \"tool_rul_perc\": \"0.937\"},\n" +
                    "            {\"tool_wear\": \"1.0230706280181004\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"27\", \"tool_rul_perc\": \"0.9\"},\n" +
                    "            {\"tool_wear\": \"0.995844405068224\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"26\", \"tool_rul_perc\": \"0.867\"},\n" +
                    "            {\"tool_wear\": \"1.020418995953353\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"25\", \"tool_rul_perc\": \"0.833\"},\n" +
                    "            {\"tool_wear\": \"0.9962380352171709\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"24\", \"tool_rul_perc\": \"0.766666667\"},\n" +
                    "            {\"tool_wear\": \"1.03548539492709\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"23\", \"tool_rul_perc\": \"0.7\"},\n" +
                    "            {\"tool_wear\": \"1.0459856981268421\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"22\", \"tool_rul_perc\": \"0.666666667\"},\n" +
                    "            {\"tool_wear\": \"1.0518477856908957\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"21\", \"tool_rul_perc\": \"0.633333333\"},\n" +
                    "            {\"tool_wear\": \"1.0325671991118395\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"20\", \"tool_rul_perc\": \"0.6\"},\n" +
                    "            {\"tool_wear\": \"1.0328611382547717\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"19\", \"tool_rul_perc\": \"0.566666667\"},\n" +
                    "            {\"tool_wear\": \"1.0250958081751844\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"18\", \"tool_rul_perc\": \"0.533333333\"},\n" +
                    "            {\"tool_wear\": \"1.012092089094648\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"17\", \"tool_rul_perc\": \"0.466666667\"},\n" +
                    "            {\"tool_wear\": \"1.0075849712911238\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"16\", \"tool_rul_perc\": \"0.433333333\"},\n" +
                    "            {\"tool_wear\": \"0.9787613830285989\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"15\", \"tool_rul_perc\": \"0.4\"},\n" +
                    "            {\"tool_wear\": \"0.9669877628915108\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"14\", \"tool_rul_perc\": \"0.366666667\"},\n" +
                    "            {\"tool_wear\": \"0.9496547369436008\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"13\", \"tool_rul_perc\": \"0.333333333\"},\n" +
                    "            {\"tool_wear\": \"0.9171396271845964\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"12\", \"tool_rul_perc\": \"0.3\"},\n" +
                    "            {\"tool_wear\": \"0.9181136276172355\", \"tool_wear_pred\": \"[]\", \"tool_rul\": \"11\", \"tool_rul_perc\": \"0.266666667\"},\n" +
                    "            {\"tool_wear\": \"0.9227071427128337\", \"tool_wear_pred\": \"[0.88178031 ,0.8604292 , 0.83791339 ,0.81423289, 0.78938769 ,0.76337781 ,0.73620323, 0.70786395, 0.67835999, 0.64769133]\", \"tool_rul\": \"10\", \"tool_rul_perc\": \"0.233333333\"},\n" +
                    "            {\"tool_wear\": \"0.8973814696355247\", \"tool_wear_pred\": \"[0.86681149, 0.84540564 ,0.82291218 ,0.79933112 ,0.77466244, 0.74890614 ,0.72206224 ,0.69413072, 0.66511159 ,0.63500486]\", \"tool_rul\": \"10\", \"tool_rul_perc\": \"0.233333333\"},\n" +
                    "            {\"tool_wear\": \"0.877867095032775\", \"tool_wear_pred\": \"[0.84973175, 0.82795931, 0.80514733 ,0.7812958 , 0.75640473 ,0.73047411, 0.70350395, 0.67549425, 0.646445 ,  0.61635621]\", \"tool_rul\": \"9\", \"tool_rul_perc\": \"0.2\"},\n" +
                    "            {\"tool_wear\": \"0.8645913790647765\", \"tool_wear_pred\": \"[0.83353167, 0.81161126 ,0.78870847, 0.76482328 ,0.7399557 , 0.71410573 ,0.68727336, 0.65945861, 0.63066146, 0.60088193]\", \"tool_rul\": \"9\", \"tool_rul_perc\": \"0.2\"},\n" +
                    "            {\"tool_wear\": \"0.8381275003873718\", \"tool_wear_pred\": \"[0.81326576, 0.7906175 , 0.76700257, 0.74242095 ,0.71687265 ,0.69035768 ,0.66287602 ,0.63442769 ,0.60501267 ,0.57463098]\", \"tool_rul\": \"8\", \"tool_rul_perc\": \"0.166666667\"},\n" +
                    "            {\"tool_wear\": \"0.8466856025472931\", \"tool_wear_pred\": \"[0.80218591, 0.78028481 ,0.75751904, 0.73388861 ,0.70939352, 0.68403376, 0.65780933 ,0.63072024 ,0.60276649 ,0.57394807]\", \"tool_rul\": \"8\", \"tool_rul_perc\": \"0.166666667\"},\n" +
                    "            {\"tool_wear\": \"0.8343053909262558\", \"tool_wear_pred\": \"[0.7909913 , 0.76975504 ,0.74774201, 0.72495222 ,0.70138566 ,0.67704234, 0.65192226, 0.62602542 ,0.59935181, 0.57190145]\", \"tool_rul\": \"8\", \"tool_rul_perc\": \"0.166666667\"},\n" +
                    "            {\"tool_wear\": \"0.8151772951052989\", \"tool_wear_pred\": \"[0.7775291 , 0.75658836, 0.73493043 ,0.7125553,  0.68946298 ,0.66565347, 0.64112677 ,0.61588288 ,0.5899218 , 0.56324352]\", \"tool_rul\": \"7\", \"tool_rul_perc\": \"0.133333333\"},\n" +
                    "            {\"tool_wear\": \"0.8114645483539122\", \"tool_wear_pred\": \"[0.76712005 ,0.74686634, 0.72597093, 0.70443383 ,0.68225504 ,0.65943455, 0.63597236 ,0.61186848 ,0.5871229 , 0.56173563]\", \"tool_rul\": \"7\", \"tool_rul_perc\": \"0.133333333\"},\n" +
                    "            {\"tool_wear\": \"0.7812755053357727\", \"tool_wear_pred\": \"[0.75111298, 0.73076552, 0.70980492, 0.68823115 ,0.66604423, 0.64324415 ,0.61983092, 0.59580453, 0.57116498, 0.54591228]\", \"tool_rul\": \"7\", \"tool_rul_perc\": \"0.133333333\"},\n" +
                    "            {\"tool_wear\": \"0.7583333044158993\", \"tool_wear_pred\": \"[0.73286175, 0.71216317, 0.69086466, 0.66896624, 0.64646789 ,0.62336962 ,0.59967143, 0.57537331, 0.55047527, 0.52497731]\", \"tool_rul\": \"6\", \"tool_rul_perc\": \"0.1\"},\n" +
                    "            {\"tool_wear\": \"0.7355387232024841\", \"tool_wear_pred\": \"[0.71291607, 0.69170882 ,0.66990613 ,0.64750799 ,0.6245144 , 0.60092536 ,0.57674088 ,0.55196094 ,0.52658556, 0.50061472]\", \"tool_rul\": \"5\", \"tool_rul_perc\": \"0.066666667\"}];\n" +
                    "\n" +
                    "            var datanow=self.getData();\n" +
                    "            var data = [\n" +
                    "                {\n" +
                    "                    v : '2018-06-10 12:19:20',\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_start_time\", l : \"tool_start_time\"}\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    v : self.getDatestr(),\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_end_time\", l : \"tool_end_time\"}\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    v : datanow.tool_wear,\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_wear\", l : \"tool_wear\"}\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    v : datanow.tool_wear_pred,\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_wear_prid\", l : \"tool_wear_prid\"}\n" +
                    "                }\n" +
                    "            ];\n" +
                    "            if (self.data.a < 0) {\n" +
                    "                self.data.a = 1;\n" +
                    "                self.data.oldData = [];\n" +
                    "                self.data.myChart.resize();\n" +
                    "            } else {\n" +
                    "                self.onDataUpdated(data);\n" +
                    "            }\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        //  data=JSON.parse(data);    //正式打开\n" +
                    "        console.log(\"chart2:\"+data);\n" +
                    "        var minutes = 0;\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            self.data.da[obj.k.o] = obj.v;\n" +
                    "        });\n" +
                    "\n" +
                    "        if (self.data.oldData.length == 0) {\n" +
                    "            self.data.oldData.push([0, self.data.da.tool_wear]);\n" +
                    "            self.data.firstDate = self.data.da.tool_end_time;\n" +
                    "        }\n" +
                    "        else {\n" +
                    "            var minutes = self.getMinsDiff(self.data.da.tool_end_time, self.data.firstDate);\n" +
                    "            self.data.oldData.push([minutes, self.data.da.tool_wear]);\n" +
                    "        }\n" +
                    "        self.data.curmin = minutes;\n" +
                    "        var tool_wear_prid = eval(\"(\" + self.data.da.tool_wear_prid + \")\");\n" +
                    "        var arr = [];\n" +
                    "        arr.push([self.data.curmin, self.data.da.tool_wear]);\n" +
                    "        for(var i=0;i<tool_wear_prid.length;i++){\n" +
                    "            arr.push([self.data.curmin+i+1,tool_wear_prid[i]]);\n" +
                    "        }\n" +
                    "        self.data.option.series[0].data = self.data.oldData;\n" +
                    "        self.data.option.series[1].data = arr;\n" +
                    "        self.data.option.series[0].markLine.data[0].xAxis = minutes;\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self. getMinsDiff = function (date1, date2) {\n" +
                    "        var date = new Date(date1).getTime() - new Date(date2).getTime();\n" +
                    "        var diffmins = date / (60 * 1000);\n" +
                    "        return diffmins;\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getDatestr = function () {\n" +
                    "        var date = new Date(\"2018-06-10 12:20:20\");\n" +
                    "        date.setMinutes(date.getMinutes() + self.data.n++);\n" +
                    "        return date;\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getData = function () {\n" +
                    "        var cd=self.data.mockdata[self.data.a];\n" +
                    "        self.data.a++;\n" +
                    "        if(self.data.a==self.data.mockdata.length)\n" +
                    "        {\n" +
                    "            self.data.a=0;\n" +
                    "        }\n" +
                    "        return{\n" +
                    "            tool_wear:cd.tool_wear,\n" +
                    "            tool_wear_pred:cd.tool_wear_pred\n" +
                    "        }\n" +
                    "    };",
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "tool_wear",
                            "key" : "tool_wear",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "tool_wear_prid",
                            "key" : "tool_wear_prid",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "7",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "7",
                "version" : "1.0.0",
                "name" : "刀具剩余寿命--分割线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp7_main\" class=\"top-row\"> <div class=\"col1\" id=\"title\"> <embed src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;{{da.comp_title}} </div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row {border-top:1px solid rgba(255,255,255,0.3); height: 40px; line-height: 40px; font-family: \"Microsoft YaHei\"; } .col1 { width: auto; font-size: 14px; float: left; letter-spacing: 2px; color: #07b3a5; } .col1 img { vertical-align: middle; } .obj { clear: both; height: 0px; width: 100%; min-width: 300px; border: 1px solid rgba(24, 174, 156, 0.5); border-radius: 0 50% 50% 0; } .infomore { margin-top: 13px; width: 16px; height: 16px; line-height: 16px; border-radius: 10px; /* background-color: rgba(254,254,254,.5);;*/ background: url(svg/info/n.svg) no-repeat; float: right; text-align: center; color: rgba(0, 0, 0, .5); font-size: 12px; font-weight: bold; } .infomore:hover { background: url(svg/info/h.svg) no-repeat; conent: \"\"; }",
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
            "templateId" : "8",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "8",
                "version" : "1.0.0",
                "name" : "刀具剩余寿命",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp6_main\" style=\"height: 100px;\">\n" +
                    "\n" +
                    "    <div class=\"left\">\n" +
                    "        <div class=\"leftdiv\" id=\"tool_rul_perc\" v-bind:class=\"da.tool_alarm?'alarm':da.tool_warn?'warn':'ok'\">\n" +
                    "            {{da.tool_rul_perc}}<em>%</em></div>\n" +
                    "        <div class=\"rightdiv\">\n" +
                    "            <div style=\"width:100%;height:26px;\"><span>0</span><span style=\"padding-left:calc(50% - 20px)\">50</span><span\n" +
                    "                    style=\"padding-left:calc(50% - 50px)\">100</span></div>\n" +
                    "            <div class=\"barLife\"></div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"right\">\n" +
                    "        <div class=\"righttxt\">刀具剩余寿命</div>\n" +
                    "        <div class=\"right-sub-txt\" id=\"tool_rul\" v-bind:class=\"da.tool_alarm?'alarm':da.tool_warn?'warn':'ok'\">\n" +
                    "            {{da.tool_rul_show}}<em>min</em></div>\n" +
                    "    </div>\n" +
                    "</div>\n",
                    "templateCss" : ".top-row { height: 40px; line-height: 40px; } .col1 { width: auto; font-size: 14px; float: left; letter-spacing: 2px; } .col1 img { vertical-align: middle; } .obj { clear: both; height: 0px; width: 100%; min-width: 300px; border: 1px solid rgba(24, 174, 156, 0.5); border-radius: 0 50% 50% 0; } .infomore { margin-top: 13px; width: 16px; height: 16px; line-height: 16px; border-radius: 10px; background-color: rgba(254, 254, 254, .5);; float: right; text-align: center; color: rgba(0, 0, 0, .5); font-size: 12px; font-weight: bold; } .leftdiv { float: left; width: 110px; height: 100px; line-height: 110px; font-size: 56px; text-align: left; font-weight: normal; color: rgb(1, 198, 253); } .rightdiv { float: left; width: calc(100% - 120px); margin-left: 10px; margin-top: 15px; } .txtdiv { color: rgba(255, 255, 255, 0.5); font-size: 14px; font-weight: normal; } .barLife div { width: 4px; height: 35px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.3); float: left; margin-right: 5px; } .bottomdiv { margin-top: 10px; } em { font-size: 18px; font-style: normal; } .rightdiv span { color: rgba(255, 255, 255, 0.5); font-weight: 100; } .left { float: left; width: 75%; margin-top:0px; } .right { float: left; width: calc(25% - 60px); text-align: left; padding-left: 60px; } .righttxt { font-size: 14px; color: rgba(255, 255, 255, 0.5); font-weight: 100; } .right-sub-txt { font-size: 56px; color: rgb(1, 198, 253); font-weight: 100; } .alarm { color: rgb(224, 79, 35); } .warn { color: #EAB62A; } .ok { color: rgba(49, 178, 231, 1); }",
                    "controllerScript" : "  self.data = {\n" +
                    "        i : 1,\n" +
                    "        a : 0,\n" +
                    "        da : {\n" +
                    "            tool_rul_perc : \"0.9\",\n" +
                    "            tool_rul : 27,\n" +
                    "            tool_rul_show:27,\n" +
                    "            tool_wear : 1.0230706280181004,\n" +
                    "            tool_warn : false,\n" +
                    "            tool_alarm : false\n" +
                    "        },\n" +
                    "        mockdata : []\n" +
                    "    };\n" +
                    "\n" +
                    "    self.init = function () {\n" +
                    "        self.data.a = 0;\n" +
                    "        self.data.i = 1;\n" +
                    "        var width = self.ctx.$(\".barLife\", self.ctx.$element).width();\n" +
                    "        var bar = self.ctx.$(\".barLife\", self.ctx.$element);\n" +
                    "        bar.empty();\n" +
                    "        var n = width / 9;\n" +
                    "        for (var i = 1; i < n; i++) {\n" +
                    "            self.ctx.$(\".barLife\", self.ctx.$element).append(\"<div></div>\");\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.set = function (percent, tool_wear) {\n" +
                    "        var width = self.ctx.$(\".barLife\", self.ctx.$element).width();\n" +
                    "        var newwidth = (percent / 100.0) * width;\n" +
                    "        var n = newwidth / 9;\n" +
                    "        self.ctx.$(\".barLife div\", self.ctx.$element).css(\"background-color\", \"rgba(255,255,255,0.3)\");\n" +
                    "        for (var i = 0; i < n; i++) {\n" +
                    "            if (tool_wear < 0.2) {\n" +
                    "                self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgb(224, 79, 35)\");\n" +
                    "            }\n" +
                    "            else if (tool_wear < 0.8) {\n" +
                    "                self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"#EAB62A\");\n" +
                    "            }\n" +
                    "            else {\n" +
                    "                self.ctx.$(\".barLife div\", self.ctx.$element).eq(i).css(\"background-color\", \"rgba(49, 178, 231, 0.8)\");\n" +
                    "            }\n" +
                    "        }\n" +
                    "        if (tool_wear < 0.2) {\n" +
                    "            self.data.da.tool_alarm = true;\n" +
                    "            self.data.da.tool_warn = false;\n" +
                    "\n" +
                    "        }\n" +
                    "        else if (tool_wear < 0.8) {\n" +
                    "            self.data.da.tool_alarm = false;\n" +
                    "            self.data.da.tool_warn = true;\n" +
                    "\n" +
                    "        }\n" +
                    "        else {\n" +
                    "            self.data.da.tool_alarm = false;\n" +
                    "            self.data.da.tool_warn = false;\n" +
                    "\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.ctx.$(window).resize(function () {\n" +
                    "        self.init();\n" +
                    "        self.set(self.data.da.tool_rul_perc, self.data.da.tool_wear);\n" +
                    "    });\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "        self.init();\n" +
                    "        self.data.mockdata = [{\n" +
                    "            \"tool_wear\" : \"1.0248631137316073\",\n" +
                    "            \"tool_wear_pred\" : \"[]\",\n" +
                    "            \"tool_rul\" : \"300\",\n" +
                    "            \"tool_rul_perc\" : \"1.0\"\n" +
                    "        },\n" +
                    "            {\"tool_wear\" : \"1.0386530152740175\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"29\", \"tool_rul_perc\" : \"0.967\"},\n" +
                    "            {\"tool_wear\" : \"1.0108516052532324\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"28\", \"tool_rul_perc\" : \"0.937\"},\n" +
                    "            {\"tool_wear\" : \"1.0230706280181004\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"27\", \"tool_rul_perc\" : \"0.9\"},\n" +
                    "            {\"tool_wear\" : \"0.995844405068224\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"26\", \"tool_rul_perc\" : \"0.867\"},\n" +
                    "            {\"tool_wear\" : \"1.020418995953353\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"25\", \"tool_rul_perc\" : \"0.833\"},\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.9962380352171709\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"240\",\n" +
                    "                \"tool_rul_perc\" : \"0.766666667\"\n" +
                    "            },\n" +
                    "            {\"tool_wear\" : \"1.03548539492709\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"23\", \"tool_rul_perc\" : \"0.7\"},\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.0459856981268421\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"220\",\n" +
                    "                \"tool_rul_perc\" : \"0.666666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.0518477856908957\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"210\",\n" +
                    "                \"tool_rul_perc\" : \"0.633333333\"\n" +
                    "            },\n" +
                    "            {\"tool_wear\" : \"1.0325671991118395\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"20\", \"tool_rul_perc\" : \"0.6\"},\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.0328611382547717\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"190\",\n" +
                    "                \"tool_rul_perc\" : \"0.566666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.0250958081751844\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"180\",\n" +
                    "                \"tool_rul_perc\" : \"0.533333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.012092089094648\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"90\",\n" +
                    "                \"tool_rul_perc\" : \"0.466666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"1.0075849712911238\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"45\",\n" +
                    "                \"tool_rul_perc\" : \"0.433333333\"\n" +
                    "            },\n" +
                    "            {\"tool_wear\" : \"0.9787613830285989\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"15\", \"tool_rul_perc\" : \"0.4\"},\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.9669877628915108\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"34\",\n" +
                    "                \"tool_rul_perc\" : \"0.366666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.9496547369436008\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"30\",\n" +
                    "                \"tool_rul_perc\" : \"0.333333333\"\n" +
                    "            },\n" +
                    "            {\"tool_wear\" : \"0.9171396271845964\", \"tool_wear_pred\" : \"[]\", \"tool_rul\" : \"12\", \"tool_rul_perc\" : \"0.3\"},\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.9181136276172355\",\n" +
                    "                \"tool_wear_pred\" : \"[]\",\n" +
                    "                \"tool_rul\" : \"11\",\n" +
                    "                \"tool_rul_perc\" : \"0.266666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.9227071427128337\",\n" +
                    "                \"tool_wear_pred\" : \"[0.88178031 ,0.8604292 , 0.83791339 ,0.81423289, 0.78938769 ,0.76337781 ,0.73620323, 0.70786395, 0.67835999, 0.64769133]\",\n" +
                    "                \"tool_rul\" : \"10\",\n" +
                    "                \"tool_rul_perc\" : \"0.233333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8973814696355247\",\n" +
                    "                \"tool_wear_pred\" : \"[0.86681149, 0.84540564 ,0.82291218 ,0.79933112 ,0.77466244, 0.74890614 ,0.72206224 ,0.69413072, 0.66511159 ,0.63500486]\",\n" +
                    "                \"tool_rul\" : \"10\",\n" +
                    "                \"tool_rul_perc\" : \"0.233333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.877867095032775\",\n" +
                    "                \"tool_wear_pred\" : \"[0.84973175, 0.82795931, 0.80514733 ,0.7812958 , 0.75640473 ,0.73047411, 0.70350395, 0.67549425, 0.646445 ,  0.61635621]\",\n" +
                    "                \"tool_rul\" : \"9\",\n" +
                    "                \"tool_rul_perc\" : \"0.2\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8645913790647765\",\n" +
                    "                \"tool_wear_pred\" : \"[0.83353167, 0.81161126 ,0.78870847, 0.76482328 ,0.7399557 , 0.71410573 ,0.68727336, 0.65945861, 0.63066146, 0.60088193]\",\n" +
                    "                \"tool_rul\" : \"9\",\n" +
                    "                \"tool_rul_perc\" : \"0.2\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8381275003873718\",\n" +
                    "                \"tool_wear_pred\" : \"[0.81326576, 0.7906175 , 0.76700257, 0.74242095 ,0.71687265 ,0.69035768 ,0.66287602 ,0.63442769 ,0.60501267 ,0.57463098]\",\n" +
                    "                \"tool_rul\" : \"8\",\n" +
                    "                \"tool_rul_perc\" : \"0.166666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8466856025472931\",\n" +
                    "                \"tool_wear_pred\" : \"[0.80218591, 0.78028481 ,0.75751904, 0.73388861 ,0.70939352, 0.68403376, 0.65780933 ,0.63072024 ,0.60276649 ,0.57394807]\",\n" +
                    "                \"tool_rul\" : \"8\",\n" +
                    "                \"tool_rul_perc\" : \"0.166666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8343053909262558\",\n" +
                    "                \"tool_wear_pred\" : \"[0.7909913 , 0.76975504 ,0.74774201, 0.72495222 ,0.70138566 ,0.67704234, 0.65192226, 0.62602542 ,0.59935181, 0.57190145]\",\n" +
                    "                \"tool_rul\" : \"8\",\n" +
                    "                \"tool_rul_perc\" : \"0.166666667\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8151772951052989\",\n" +
                    "                \"tool_wear_pred\" : \"[0.7775291 , 0.75658836, 0.73493043 ,0.7125553,  0.68946298 ,0.66565347, 0.64112677 ,0.61588288 ,0.5899218 , 0.56324352]\",\n" +
                    "                \"tool_rul\" : \"7\",\n" +
                    "                \"tool_rul_perc\" : \"0.133333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.8114645483539122\",\n" +
                    "                \"tool_wear_pred\" : \"[0.76712005 ,0.74686634, 0.72597093, 0.70443383 ,0.68225504 ,0.65943455, 0.63597236 ,0.61186848 ,0.5871229 , 0.56173563]\",\n" +
                    "                \"tool_rul\" : \"7\",\n" +
                    "                \"tool_rul_perc\" : \"0.133333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.7812755053357727\",\n" +
                    "                \"tool_wear_pred\" : \"[0.75111298, 0.73076552, 0.70980492, 0.68823115 ,0.66604423, 0.64324415 ,0.61983092, 0.59580453, 0.57116498, 0.54591228]\",\n" +
                    "                \"tool_rul\" : \"7\",\n" +
                    "                \"tool_rul_perc\" : \"0.133333333\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.7583333044158993\",\n" +
                    "                \"tool_wear_pred\" : \"[0.73286175, 0.71216317, 0.69086466, 0.66896624, 0.64646789 ,0.62336962 ,0.59967143, 0.57537331, 0.55047527, 0.52497731]\",\n" +
                    "                \"tool_rul\" : \"6\",\n" +
                    "                \"tool_rul_perc\" : \"0.1\"\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"tool_wear\" : \"0.7355387232024841\",\n" +
                    "                \"tool_wear_pred\" : \"[0.71291607, 0.69170882 ,0.66990613 ,0.64750799 ,0.6245144 , 0.60092536 ,0.57674088 ,0.55196094 ,0.52658556, 0.50061472]\",\n" +
                    "                \"tool_rul\" : \"5\",\n" +
                    "                \"tool_rul_perc\" : \"0.066666667\"\n" +
                    "            }];\n" +
                    "\n" +
                    "\n" +
                    "            var datanow = self.getData();\n" +
                    "            var data = [\n" +
                    "                {\n" +
                    "                    v : datanow.tool_rul_perc,\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_rul_perc\", l : \"tool_rul_perc\"}\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    v : datanow.tool_rul,\n" +
                    "                    t : 1528358866224,\n" +
                    "                    k : {o : \"tool_rul\", l : \"tool_rul\"}\n" +
                    "                }\n" +
                    "            ];\n" +
                    "            self.onDataUpdated(data);\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        //  data=JSON.parse(data);    //正式打开\n" +
                    "        console.log(\"comp6:\"+data);\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        self.data.da.tool_rul_perc = (self.data.da.tool_rul_perc * 100).toFixed(0);\n" +
                    "        self.set(self.data.da.tool_rul_perc, self.data.da.tool_wear);\n" +
                    "        if(self.data.da.tool_rul>200){\n" +
                    "            self.data.da.tool_rul_show=\">200\";\n" +
                    "        }\n" +
                    "        else if(self.data.da.tool_rul>100){\n" +
                    "            self.data.da.tool_rul_show=\">100\";\n" +
                    "        }\n" +
                    "        else if(self.data.da.tool_rul>50){\n" +
                    "            self.data.da.tool_rul_show=\">50\";\n" +
                    "        }\n" +
                    "        else if(self.data.da.tool_rul>40){\n" +
                    "            self.data.da.tool_rul_show=\">40\";\n" +
                    "        }\n" +
                    "        else if(self.data.da.tool_rul>30){\n" +
                    "            self.data.da.tool_rul_show=\">30\";\n" +
                    "        }\n" +
                    "        else{\n" +
                    "            self.data.da.tool_rul_show=self.data.da.tool_rul;\n" +
                    "        }\n" +
                    "    };\n" +
                    "    self.onResize = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getData = function () {\n" +
                    "        var cd = self.data.mockdata[self.data.a];\n" +
                    "        self.data.a++;\n" +
                    "        if (self.data.a == self.data.mockdata.length) {\n" +
                    "            self.data.a = 0;\n" +
                    "        }\n" +
                    "        return {\n" +
                    "            tool_rul : cd.tool_rul,\n" +
                    "            tool_rul_perc : cd.tool_rul_perc,\n" +
                    "            tool_wear : cd.tool_wear\n" +
                    "        }\n" +
                    "    };",
                    "defaultData" : {
                        "da" : {
                            "tool_rul_perc" : "0",
                            "tool_rul" : 0,
                            "tool_wear" : 1,
                            "tool_warn" : false,
                            "tool_alarm" : false
                        }
                    },
                    "dataSources" : []
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "tool_rul",
                            "key" : "tool_rul",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
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
            "templateId" : "9",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "9",
                "version" : "1.0.0",
                "name" : "主轴基础信息",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"main\" id=\"maxiot_cd_comp3_main\">\n" +
                    "    <div id=\"spindle_status\" v-bind:class=\"{alarm:da.alarm,tpdiv:!da.alarm}\">\n" +
                    "        <div v-if=\"da.alarm\"><img src=\"static/images/svg/meter/a.svg\"></div>\n" +
                    "        <div v-else><img src=\"static/images/svg/meter/n.svg\"></div>\n" +
                    "        <div style=\"margin-top:8px;\">{{da.statustxt}}</div>\n" +
                    "    </div>\n" +
                    "    <div id=\"maxiot_cd_comp3_lefdiv\" class=\"leftdiv\">\n" +
                    "        <div class=\"leftdiv-col1\">\n" +
                    "            <div id=\"top-row\" class=\"top-row\">\n" +
                    "                <div class=\"col1\"><img src=\"static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;主轴基础信息</div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"bottom-row\" style=\"margin-top:5px;\">\n" +
                    "                <div style=\"width:55%;\"><span>主轴编号</span><span>D09s361</span></div>\n" +
                    "                <div style=\"width:45%;\"><span>主轴设定转速</span><span id=\"RPM_set\">{{da.RPM_set}}</span></div>\n" +
                    "\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"bottom-row\">\n" +
                    "                <div style=\"width:55%;\"><span>主轴型号</span><span>SK 40 / HSK80</span></div>\n" +
                    "                <div style=\"width:45%;\"><span>主轴实际转速</span><span id=\"RPM_actual\">{{da.RPM_actual}}</span></div>\n" +
                    "\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"leftdiv-col2\">\n" +
                    "            <img src=\"static/images/spindle.png\"/>\n" +
                    "        </div>\n" +
                    "        <hr/>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</div>",
                    "templateCss" : ".main { width: 100%; height: 140px; background-color: #262d45; color: rgba(255, 255, 255, 0.5); font-size: 13px; } .tpdiv { width: calc(18% - 4px); height: 96px; float: left; vertical-align: middle; background-color: #262d45; margin: 0 auto; text-align: center; border: 2px solid rgba(49, 178, 231, 0.8); -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: rgba(255, 255, 255, 0.9); padding-top: 38px; min-width:108px; } .leftdiv { float: left; width: calc(82% - 20px); height: 100%; padding-left: 20px; } .top-row { height: 40px; line-height: 40px; } .col1 { width: 300px; font-size: 14px; letter-spacing: 2px; color: #07b3a5; } .bottom-row { height: 35px; line-height: 35px; } .bottom-row div { float: left; width: 50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bottom-row div span { width: auto; padding-right: 20px; color: rgba(255, 255, 255, 0.9); font-size:14px; } .bottom-row div span:first-child { color: rgba(255, 255, 255, 0.5); } .obj { clear: both; height: 0px; width: 20%; min-width: 300px; border: 1px solid rgba(24, 174, 156, 0.5); border-radius: 0 50% 50% 0; } .col1 img { vertical-align: middle; } hr { margin-top: 23px; clear: both; display: inline-block; width: 100%; border: none; border-top: 1px solid rgba(255, 255, 255, 0.3); } .leftdiv-col1 { float: left; width: calc(100% - 90px); } .leftdiv-col2 { float: right; width: 90px; padding-top: 40px; } .alarm { width: calc(18%); height: 96px; float: left; vertical-align: middle; margin: 0 auto; text-align: center; min-width:112px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: rgba(255, 255, 255, 0.9); padding-top: 38px; background: linear-gradient(to right, #E04F23, #EAB62A); }",
                    "controllerScript" : "  self.data = {\n" +
                    "        da : {},\n" +
                    "        data : [],\n" +
                    "        spindle_alarm : 0\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "       var w= self.ctx.$(\"#spindle_status\").width();\n" +
                    "        w=w+24;\n" +
                    "        self.ctx.$(\"#maxiot_cd_comp3_lefdiv\").css(\"width\",\"calc(100%  -  \"+w+\"px)\");\n" +
                    "//        setInterval(function () {\n" +
                    "//            var data = [\n" +
                    "//                {\n" +
                    "//                    v : self.getstatus(),\n" +
                    "//                    t : 1528358866224,\n" +
                    "//                    k : {o : \"spindle_alarm\", l : \"spindle_alarm\"}\n" +
                    "//                },\n" +
                    "//                {\n" +
                    "//                    v : 5000,\n" +
                    "//                    t : 1528358866224,\n" +
                    "//                    k : {o : \"RPM_set\", l : \"RPM_set\"}\n" +
                    "//                }, {\n" +
                    "//                    v : 6600,\n" +
                    "//                    t : 1528358866224,\n" +
                    "//                    k : {o : \"RPM_actual\", l : \"RPM_actual\"}\n" +
                    "//                }];\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//        }, 10000);\n" +
                    "    };\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "      //  data=JSON.parse(data);    //正式打开\n" +
                    "        console.log(\"comp3:\"+data);\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        if (self.data.da.spindle_alarm === 1) {\n" +
                    "            self.data.da.alarm = true;\n" +
                    "            self.data.da.statustxt = '主轴故障报警';\n" +
                    "        } else {\n" +
                    "            self.data.da.alarm = false;\n" +
                    "            self.data.da.statustxt = '主轴状态正常';\n" +
                    "        }\n" +
                    "    };\n" +
                    "    self.onResize = function () {\n" +
                    "        var w= self.ctx.$(\"#spindle_status\").width();\n" +
                    "        w=w+24;\n" +
                    "        self.ctx.$(\"#maxiot_cd_comp3_lefdiv\").css(\"width\",\"calc(100%  -  \"+w+\"px)\");\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getstatus = function () {\n" +
                    "        if (self.data.spindle_alarm === 0) {\n" +
                    "            self.data.spindle_alarm = 1;\n" +
                    "        } else {\n" +
                    "            self.data.spindle_alarm = 0;\n" +
                    "        }\n" +
                    "        return self.data.spindle_alarm;\n" +
                    "    };\n",
                    "defaultData" : {
                        "da" : {
                            "RPM_set" : "0",
                            "RPM_actual" : "0",
                            "spindle_alarm" : 1,
                            "statustxt" : "主轴状态正常",
                            "alarm" : false
                        }
                    },
                    "dataSources" : []
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
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_alarm",
                            "key" : "spindle_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "RPM_set",
                            "key" : "RPM_set",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "RPM_actual",
                            "key" : "RPM_actual",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "10",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "10",
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
            "templateId" : "11",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "11",
                "version" : "1.0.0",
                "name" : "主轴故障预警",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp4_app\" class=\"maxiot-cd-comp4-main\">\n" +
                    "\n" +
                    "<div class=\"row-item statusok \">\n" +
                    "    <div class=\"colorwhite\">电流</div>\n" +
                    "    <div class=\"col1\"><img src=\"static/images/svg/spindleData/elect/n.svg\"/></div><div class=\"col2\" id=\"spindle_current\">{{da.spindle_current}}</div><div class=\"col3\">A</div>\n" +
                    "</div>\n" +
                    "    <div class=\"row-item\" style=\"margin-left:calc((100% - 440px)/3)\">\n" +
                    "        <div>前轴承温度</div>\n" +
                    "        <div id=\"font-div\" v-bind:class=\"da.spindle_front_bearing_temp>40 ? 'alarm':'statusok'\">\n" +
                    "        <div id=\"front-img\" class=\"col1\" >\n" +
                    "            <img v-if=\"data.alarm1\" src=\"static/images/svg/spindleData/temp/a.svg\"/>\n" +
                    "            <img v-else src=\"static/images/svg/spindleData/temp/n.svg\"/>\n" +
                    "        </div>\n" +
                    "            <div class=\"col2\" id=\"temp_front_bearing\">{{da.spindle_front_bearing_temp}}</div>\n" +
                    "            <div v-if=\"data.alarm1\" class=\"col3\" >℃</div>\n" +
                    "            <div v-else class=\"col3\">℃</div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"row-item\" style=\"margin-left:calc((100% - 440px)/3)\">\n" +
                    "        <div>后轴承温度</div>\n" +
                    "        <div id=\"back-div\"  v-bind:class=\"da.spindle_back_bearing_temp>40 ? 'alarm':'statusok'\">\n" +
                    "        <div  id=\"back-img\" class=\"col1\" >\n" +
                    "            <img v-if=\"data.alarm2\" src=\"static/images/svg/spindleData/temp/a.svg\"/>\n" +
                    "            <img v-else src=\"static/images/svg/spindleData/temp/n.svg\"/>\n" +
                    "        </div>\n" +
                    "            <div class=\"col2\" id=\"temp_back_bearing\">{{da.spindle_back_bearing_temp}}</div>\n" +
                    "            <div v-if=\"data.alarm2\" class=\"col3\" >℃</div>\n" +
                    "            <div v-else class=\"col3\">℃</div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"row-item statusok\" style=\"margin-left:calc((100% - 440px)/3)\">\n" +
                    "        <div class=\"colorwhite\">负载</div>\n" +
                    "        <div class=\"col1\"><img src=\"static/images/svg/spindleData/load/n.svg\"/></div><div class=\"col2\" id=\"spindle_load\">{{da.spindle_load}}</div><div class=\"col3\">%</div>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss" : ".maxiot-cd-comp4-main{ width:100%; height:80px; background-color:#262d45; border-bottom:1px solid rgba(255,255,255,0.3); font-size:12px; } .row-item{ height:45px; float:left; width:110px; color:rgba(255,255,255,0.5); } .row-item div img{ vertical-align: middle; } .col1{ width:20px; text-align: left; padding-left:0px; float:left; padding-top:22px; } .col2{ text-align: right; padding-left:13px;padding-top:3px; font-size:46px; width:50px; float:left; height: 40px; } .col3{ width:20px; text-align: left; padding-left:5px; float:left; padding-top:25px; font-size:20px; } .statusok{ color:#01c6fd; } .alarm{ color:#EAb62A; } .colorwhite{ color:rgba(255,255,255,0.5); }",
                    "controllerScript" : "    self.data = {\n" +
                    "        frontw: 35,\n" +
                    "        backw: 35,\n" +
                    "        da:{spindle_front_bearing_temp:'43',\n" +
                    "            spindle_back_bearing_temp:'43',\n" +
                    "            spindle_load:'20',\n" +
                    "            spindle_current:'2'\n" +
                    "        },\n" +
                    "        data:{alarm1:true,alarm2:false}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getTemp=function(){\n" +
                    "        self.data.frontw++;\n" +
                    "        self.data.backw++;\n" +
                    "        if(self.data.frontw==46){\n" +
                    "            self.data.frontw=35;\n" +
                    "            self.data.backw=35;\n" +
                    "        }\n" +
                    "        return {\n" +
                    "            frontw:self.data.frontw,\n" +
                    "            backw:self.data.backw\n" +
                    "        }\n" +
                    "    };\n" +
                    "    self.onInit=function(){\n" +
                    "//        setInterval(function(){\n" +
                    "//            var getData=self.getTemp();\n" +
                    "//            var data=[\n" +
                    "//                {\n" +
                    "//                    v:getData.frontw,\n" +
                    "//                    t:1528358866224,\n" +
                    "//                    k:{o:\"spindle_front_bearing_temp\",l:\"spindle_front_bearing_temp\"}\n" +
                    "//                },\n" +
                    "//                {\n" +
                    "//                    v:getData.backw,\n" +
                    "//                    t:1528358866224,\n" +
                    "//                    k:{o:\"spindle_back_bearing_temp\",l:\"spindle_back_bearing_temp\"}\n" +
                    "//                },\n" +
                    "//                {\n" +
                    "//                    v:self.getRandom(0,100),\n" +
                    "//                    t:1528358866224,\n" +
                    "//                    k:{o:\"spindle_load\",l:\"spindle_load\"}\n" +
                    "//                },\n" +
                    "//                {\n" +
                    "//                    v:self.getRandom(20,30),\n" +
                    "//                    t:1528358866224,\n" +
                    "//                    k:{o:\"spindle_current\",l:\"spindle_current\"}\n" +
                    "//                }];\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//        },2000);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated=function(data){\n" +
                    "        //  data=JSON.parse(data);    //正式打开\n" +
                    "        console.log(\"comp4:\"+data);\n" +
                    "      self.ctx.$.each(data,function(i,obj){\n" +
                    "          eval(\"self.data.da.\"+obj.k.o+\"='\"+obj.v+\"'\");\n" +
                    "      });\n" +
                    "      if(self.data.da.spindle_front_bearing_temp>=40){\n" +
                    "          self.data.data.alarm1=true;\n" +
                    "      }\n" +
                    "      else{\n" +
                    "          self.data.data.alarm1=false;\n" +
                    "      }\n" +
                    "      if(self.data.da.spindle_back_bearing_temp>=40){\n" +
                    "          self.data.data.alarm2=false;\n" +
                    "      }\n" +
                    "      else{\n" +
                    "          self.data.data.alarm2=false;\n" +
                    "      }\n" +
                    "    };\n" +
                    "    self.onResize=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onDestroy=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding=function(){\n" +
                    "\n" +
                    "    };\n" +
                    "    self.getRandom=function(min, max){\n" +
                    "        var r = Math.random() * (max - min);\n" +
                    "        var re = Math.round(r + min);\n" +
                    "        re = Math.max(Math.min(re, max), min);\n" +
                    "        return re;\n" +
                    "    };",
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_current",
                            "key" : "spindle_current",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_front_bearing_temp",
                            "key" : "spindle_front_bearing_temp",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_back_bearing_temp",
                            "key" : "spindle_back_bearing_temp",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_load",
                            "key" : "spindle_load",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "12",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "12",
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
            "templateId" : "13",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "13",
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_fcft_score",
                            "key" : "spindle_fcft_score",
                            "valueFunc" : ""
                        }
                    ]
                }
            ]
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "14",
            "templateVersion" : "1.0.0",
            "template" : {
                "id" : "14",
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
                            "deviceId" : "ea8fe0ed-3c15-4b0d-8bf3-0580222938d4",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "spindle_alarm",
                            "key" : "spindle_alarm",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
                            "type" : "latest",
                            "label" : "RPM_set",
                            "key" : "RPM_set",
                            "valueFunc" : ""
                        },
                        {
                            "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                            "edgeClientId" : "f5f02b38-4dab-4ba9-9160-fc4aab58ff84",
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
