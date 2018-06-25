const dashboard_fmcs2 = {
    "id" : 1,
    "title" : "fmcs2 报表",
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
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "基础信息",
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
                    "dataSources" : []
                }
            },
            "templateType" : "latest | time",
            "relation" : {
                "x" : 15,
                "y" : 15
            },
            "size" : {
                "x" : 5,
                "y" : 6
            },
            "title" : "基本信息",
            "zIndex" : 1,
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
            "dataSources" : []
        }
    ]
};

export { dashboard_fmcs2 };
