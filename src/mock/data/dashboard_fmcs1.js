const dashboard_fmcs1 = {
    "id": 1,
    "title": "fmcs1 报表",
    "version" : "1.0.0",
    "createTime": "2018-6-25",
    "description": "",
    "styles": {
        "minWidth" : 1600,
        "maxWidth" : 1920,
        "showTitle": false,
        "backgroundColor": "rgba(0,0,0,0)",
        "titleColor": "rgba(0,0,0,0.870588)",
        "margins": [
            10,
            10
        ],
        "backgroundSizeMode": "100%"
    },
    "edgeClientAliases": [
        {
            "aliasId": 1,
            "alias": "别名1",
            "edgeClients": [
                {
                    "edgeClientId": "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                    "edgeClientName": "C-edgeclient",
                    "deviceList": [
                        {
                            "id": "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                            "label" : "devicelabel-1",
                            "name": "restApi",
                            "keys": ["cost_day_real", "cost_day_real_N2", "CDA_open", "CDA_per","shift"
                            ]
                        },
                        {
                            "id": "316a75eb-e139-4787-ba3b-7910436f8457",
                            "label" : "devicelabel-2",
                            "name": "FMCS_SQLServer",
                            "keys": [
                                "N2_open", "cdamana", "flow"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "components": [
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "1",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version": "1.0.0",
                "name": "地图",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div class=\"empty-component\"></div>",
                    "templateCss": ".empty-component{ width:100%; height: 100%;  background-color:#262d45;  } ",
                    "controllerScript": "",
                    "defaultData": {},
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 0,
                "y": 0
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "空白组件",
            "zIndex": 0,
            "styles": {
                "width": "100%",
                "height": 900,
                "showTitle": false,
                "position": "relative",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#fff",
                "color": "rgba(0, 0, 0, 0.87)",
                "boxShadow": "0 6px 8px 0 rgba(0,0,0,0.30)"
            },
            "dataSources": []
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f2",
                "version": "1.0.0",
                "name": "当前时间",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div class=\"maxiot_fmcs_curdate_datetime\" id=\"maxiot_fmcs_curdate_datetime\">{{da.date}}<span style=\"padding-left:10px;font-size:12px;\">{{da.time}}</span></div>",
                    "templateCss": " .maxiot_fmcs_curdate_datetime{\n" +
                    "            height: 50px;\n" +
                    "            line-height: 50px;\n" +

                    "            color:white;\n" +
                    "            width:100%;\n" +
                    "        }",
                    "controllerScript": "  self.getNowFormatDate=function () {\n" +
                    "        var date = new Date();\n" +
                    "        var seperator1 = \"-\";\n" +
                    "        var seperator2 = \":\";\n" +
                    "        var month = date.getMonth() + 1;\n" +
                    "        var strDate = date.getDate();\n" +
                    "        var strHour=date.getHours();\n" +
                    "        var strMin=date.getMinutes();\n" +
                    "        var strSec=date.getSeconds();\n" +
                    "        if (month >= 1 && month <= 9) {\n" +
                    "            month = \"0\" + month;\n" +
                    "        }\n" +
                    "        if (strDate >= 0 && strDate <= 9) {\n" +
                    "            strDate = \"0\" + strDate;\n" +
                    "        }\n" +
                    "        if (strHour >= 0 && strHour <= 9) {\n" +
                    "            strHour = \"0\" + strHour;\n" +
                    "        }\n" +
                    "        if (strMin >= 0 && strMin <= 9) {\n" +
                    "            strMin = \"0\" + strMin;\n" +
                    "        }\n" +
                    "        if (strSec >= 0 && strSec <= 9) {\n" +
                    "            strSec = \"0\" + strSec;\n" +
                    "        }\n" +
                    "        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;\n" +
                    "\n" +
                    "        var currenttime=strHour + seperator2 + strMin\n" +
                    "            + seperator2 + strSec;\n" +
                    "        return {date:currentdate,\n" +
                    "            time:currenttime}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "       setInterval(function(){\n" +
                    "           var dateobj= self.getNowFormatDate();\n" +
                    "           self.data.da.date= dateobj.date;\n" +
                    "           self.data.da.time= dateobj.time;\n" +
                    "       },1000)\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };",
                    "defaultData": {
                        "da": {
                            "date":"",
                            "time":""
                        }
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": "calc(100% - 150px)",
                "y": 0
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "150px",
                "height": "50px",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 'normal'
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": []
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f2",
                "version": "1.0.0",
                "name": "昨日空压机成本",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div  id=\"maxiot_cd_comp1_app\" class=\"comp1_main\">\n" +
                    "    <div class=\"content\">\n" +
                    "        <div>\n" +
                    "            <div class=\"top_txt\"><span>昨日空压机成本</span> <span>(CN¥)</span></div>\n" +
                    "            <div class=\"bottom_txt\">\n" +
                    "                <div class=\"btm_left\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"btm_right\"><span>合計</span><span id=\"cost_day_real\">{{da.cost_day_real}}</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"content\">\n" +
                    "        <div>\n" +
                    "            <div class=\"top_txt\"><span>昨日氮气成本</span> <span>(CN¥)</span></div>\n" +
                    "            <div class=\"bottom_txt\">\n" +
                    "                <div class=\"btm_left\"><img src=\"./static/images/cda/n2bottle.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"btm_right\"><span>合計</span><span id=\"cost_day_real_N2\">{{da.cost_day_real_N2}}</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"content\">\n" +
                    "        <div>\n" +
                    "            <div class=\"top_txt\"><span>氮气開啟次數 </span><span>(次)</span></div>\n" +
                    "            <div class=\"bottom_txt\">\n" +
                    "                <div class=\"btm_left\"><img src=\"./static/images/cda/n2open.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"btm_right\"><span>合計</span><span id=\"N2_open\">{{da.N2_open}}</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</div>",
                    "templateCss": ".comp1_main{ width:100%; height:120px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: hidden; display:flex; flex-direction:row; justify-content:space-between; align-items:center; padding:10px; font-family:\"Microsoft YaHei\"; } .content{ width:30%; height:100%; line-height:100%; margin-top:20px; padding:10px; } .top_txt{ width:158px; height:22px; font-size: 16px; color: #FFFFFF; letter-spacing: 0.08px; } .top_txt span:nth-child(2){ font-size:12px; color: } .bottom_txt{ height:64px; line-height:64px; margin-top:26px; } .btm_left { float:left; width:62px; height:62px; background:#00D4BD; box-shadow:0 0 8px #00D4BD; border-radius:100px; margin-right:24px; } .btm_left img{ vertical-align: middle; } .btm_right{ float:left; } .btm_right span:first-child{ padding:3px 7px; margin-right:10px; background: rgba(255,255,255,0.54); border-radius: 100px; font-size: 12px; color: #262D45; letter-spacing: 0.07px; } .btm_right span:nth-child(2){ font-size: 26px; color: #00D4BD; letter-spacing: 0.17px; line-height: 26px; position:relative; top:5px; }",
                    "controllerScript": "  self.data = {\n" +
                    "        da: {},\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.toThousands = function(num){\n" +
                    "        return (num || 0).toString().replace(/(\\d)(?=(?:\\d{3})+$)/g, '$1,');\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        console.log(\"comp1:\");\n" +
                    "\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        console.log(self.data.da);\n" +
                    "        self.data.da.cost_day_real = self.toThousands(parseFloat(self.data.da.cost_day_real).toFixed(0));\n" +
                    "        self.data.da.cost_day_real_N2 = self.toThousands(parseFloat(self.data.da.cost_day_real_N2).toFixed(0));\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };",
                    "defaultData": {
                        "da": {
                            'N2_open': "",
                            "cost_day_real": "",
                            "cost_day_real_N2": ""
                        }
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 15,
                "y": 5
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50% - 15px)",
                "height": "100%",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 'normal'
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": [  {
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "cost_day_real",
                        "key" : "cost_day_real",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "cost_day_real_N2",
                        "key" : "cost_day_real_N2",
                        "valueFunc" : ""
                    },
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "N2_open",
                        "key" : "N2_open",
                        "valueFunc" : ""
                    }
                ]
            }]
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "3",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f3",
                "version": "1.0.0",
                "name": "空壓及裕度",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div  id=\"maxiot_fmcs_comp2_app\" class=\"comp2_main\">\n" +
                    "    <div class=\"caption\">空压机裕度</div>\n" +
                    "    <div class=\"usage\">\n" +
                    "        <div><span class = 'textTile'>已啟用&nbsp;</span><span id=\"CDA_per\">{{da.CDA_per}}%</span></div>&nbsp;&nbsp;\n" +
                    "        <div style = \"padding-left:15px\"><span class = 'textTile'>未啟用&nbsp;</span><span id=\"CDA_notopened\">{{(100-da.CDA_per)}}%</span></div>\n" +
                    "    </div>\n" +
                    "    <div class=\"itemlist\">\n" +
                    "        <div class=\"top_row\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 1</span><br><span>400hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 2</span><br><span>900hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 3</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 4</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 5</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"bottom_row\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 6</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 7</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 8</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 9</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span># 10</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss": ".comp2_main{ width:100%; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; padding-top:0px; padding-left:20px; } .caption{ font-family:\"Microsoft YaHei\"; font-size: 16px; color: #FFFFFF; letter-spacing: 0.08px; text-align: left; margin-bottom:16px; } .usage{ height:10%; line-height:10%; margin-bottom:4px; } .usage div{ display:inline-block; } .usage div span:nth-child(2){ font-family:\"Microsoft YaHei\"; font-size: 30px; color: #00D4BD; letter-spacing: 0.17px; line-height: 30px; padding-left:10px; }, sub{ font-size:large; color:#00D4BD; } .textFile{ position:relative; top:-5px; font-family:\"Microsoft YaHei\"; color:rgba(255,255,255,0.54); letter-spacing:0.07px; text-align:left; } #CDA_per{ position:relative; top:4px; } #CDA_notopened{ position:relative; top:4px; } .itemlist{ width:100%; height:70%; } .top_row, .bottom_row{ height:50%; display:flex; flex-direction:row; justify-content:space-between; align-items:center; } .item{ width:160px; height:90px; } .item_img{ width:45px; height:45px; float:left; margin-top:23px; margin-left:8px; margin-right:12px; border-radius:50%; } .item_img img{ width:95%; height:95%; vertical-align:middle; } .item_txt{ float:left; width:48px; height:40px; margin-top:26px; margin-right:28px; margin-bottom:24px; font-size: 16px; letter-spacing: 0.08px; line-height: 20px; } .item_txt span:first-child{ font-weight:bold; font-size:16px; margin-bottom:50px; } .item_txt span:last-child{ font-size:12px; }",
                    "controllerScript": "  self.data = {\n" +
                    "        da:{}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "        var data = [\n" +
                    "            {\n" +
                    "                \"v\":0,\n" +
                    "                \"t\":1528358866224,\n" +
                    "                \"k\":{\"o\":\"CDA_per\",\"l\":\"CDA_per\"}\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"v\":\"[0,0,0,0,0,0,0,0,0,0]\",\n" +
                    "                \"t\":1528358866224,\n" +
                    "                \"k\":{\"o\":\"CDA_open\",\"l\":\"CDA_open\"}\n" +
                    "            }\n" +
                    "        ];\n" +
                    "        self.onDataUpdated(data);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "        console.log(\"comp2:\");\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        console.log(self.data.da);\n" +
                    "        self.data.da.CDA_open = eval('('+ self.data.da.CDA_open +')');\n" +
                    "\n" +
                    "        self.data.da.CDA_per = parseFloat(self.data.da.CDA_per).toFixed((2))*100;\n" +
                    "        var CDA_notopened = (1 - self.data.da.CDA_per);\n" +
                    "\n" +
                    "        var open_arr = self.data.da.CDA_open;\n" +
                    "\n" +
                    "        for(var i=0;i<5;i++){\n" +
                    "            if(open_arr[i] == 0){\n" +
                    "                self.ctx.$(\".usageshadow\").eq(i).css(\"box-shadow\",\"0 0 0 0 #131725\");\n" +
                    "                self.ctx.$(\".top_row .item .item_img\").eq(i).css(\"background-color\",\"rgba(255,255,255,0.24)\");\n" +
                    "                self.ctx.$(\".top_row .item .item_txt\").eq(i).css(\"color\",\"rgba(255,255,255,0.54)\");\n" +
                    "            }else if(open_arr[i] == 1){\n" +
                    "                self.ctx.$(\".usageshadow\").eq(i).css(\"box-shadow\",\"0 0 10px 0 #00D4BD\");\n" +
                    "                self.ctx.$(\".top_row .item .item_img\").eq(i).css(\"background-color\",\"#00D4BD\");\n" +
                    "                self.ctx.$(\".top_row .item .item_txt\").eq(i).css(\"color\",\"#00D4BD\");\n" +
                    "            }\n" +
                    "        };\n" +
                    "        for(var i=5;i<10;i++){\n" +
                    "            if(open_arr[i] == 0){\n" +
                    "                self.ctx.$(\".usageshadow\").eq(i).css(\"box-shadow\",\"0 0 0 0 #131725\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_img\").eq(i - 5).css(\"background-color\",\"rgba(255,255,255,0.24)\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_txt\").eq(i - 5).css(\"color\",\"rgba(255,255,255,0.54)\");\n" +
                    "            }else if(open_arr[i] == 1){\n" +
                    "                self.ctx.$(\".usageshadow\").eq(i).css(\"box-shadow\",\"0 0 10px 0 #00D4BD\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_img\").eq(i - 5).css(\"background-color\",\"#00D4BD\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_txt\").eq(i - 5).css(\"color\",\"#00D4BD\");\n" +
                    "            }\n" +
                    "        };\n" +
                    "    }\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };\n",
                    "defaultData": {
                        "da": {
                            "CDA_per": 0,
                            "CDA_notopened": 0
                        }
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 15,
                "y": 182
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(47%)",
                "height": "200px",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": [  {
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_open",
                        "key" : "CDA_open",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_per",
                        "key" : "CDA_per",
                        "valueFunc" : ""
                    }
                ]
            }]
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "4",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f4",
                "version": "1.0.0",
                "name": "空壓机系統管理表",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_fmcs_table_app\" class=\"maxiot_fmcs_table_main\">\n" +
                    "    <div class=\"caption\">空压机系统管理表</div>\n" +
                    "    <div class=\"table_content\">\n" +
                    "        <table>\n" +
                    "            <thead>\n" +
                    "            <tr>\n" +
                    "                <th>日期<br>(年/月/日)</th>\n" +
                    "                <th>耗電量<br>(KW)</th>\n" +
                    "                <th>用氣量<br>(m<sup>3</sup>)</th>\n" +
                    "                <th>單位能耗<br>(KW/m<sup>3</sup>)</th>\n" +
                    "                <th>液氮用量<br>(Kg)</th>\n" +
                    "                <th>環境溫度<br>(<sup>。</sup>C)</th>\n" +
                    "                <th>單位能耗差異<br>(%)</th>\n" +
                    "            </tr>\n" +
                    "            </thead>\n" +
                    "            <tbody>\n" +
                    "            <tr v-for=\"item in da.cdamana\">\n" +
                    "                <td><span id=\"date\">{{item.stand_by_datetime}}</span></td>\n" +
                    "                <td><span id=\"power_whole_day\">{{item.power_whole_day}}</span></td>\n" +
                    "                <td><span id=\"flow_whole_day\">{{item.flow_whole_day}}</span></td>\n" +
                    "                <td><span id=\"performance\">{{item.performance}}</span></td>\n" +
                    "                <td><span id=\"n2_quantity\">{{item.n2_quantity}}</span></td>\n" +
                    "                <td><span id=\"temperature\">{{item.temperature}}</span></td>\n" +
                    "                <td>\n" +
                    "                    <span v-if=\"item.performancediff>0\" style=\"color:#E04F23\"><img src=\"static/images/fmcs/arrowup.svg\" alt=\"\">&nbsp;&nbsp;+{{item.performancediff}}</span>\n" +
                    "                    <span v-if=\"item.performancediff<0\" style=\"color:lightgreen\"><img src=\"static/images/fmcs/arrowdown.svg\" alt=\"\">&nbsp;&nbsp; {{item.performancediff}}</span>\n" +
                    "                    <span v-if=\"item.performancediff==0\" style=\"color:#00D4BD\"><img src=\"static/images/fmcs/even.svg\" alt=\"\">&nbsp;&nbsp; {{item.performancediff}}</span>\n" +
                    "                </td>\n" +
                    "            </tr>\n" +
                    "            <tr>\n" +
                    "                <td>7日平均值</td>\n" +
                    "                <td><span>{{da.power_whole_day_7p}}</span></td>\n" +
                    "                <td><span>{{da.flow_whole_day_7p}}</span></td>\n" +
                    "                <td><span>{{da.performance_7p}}</span></td>\n" +
                    "                <td><span>{{da.n2_quantity_7p}}</span></td>\n" +
                    "                <td><span>{{da.temperature_7p}}</span></td>\n" +
                    "                <td><span v-if=\"da.performancediff_7p>0\" style=\"color:#E04F23\"><img src=\"static/images/fmcs/arrowup.svg\" alt=\"\">+{{da.performancediff_7p}}</span>\n" +
                    "                    <span v-if=\"da.performancediff_7p<0\" style=\"color:lightgreen\"><img src=\"static/images/fmcs/arrowdown.svg\" alt=\"\"> {{da.performancediff_7p}}</span>\n" +
                    "                    <span v-if=\"da.performancediff_7p==0\" style=\"color:#00D4BD\"><img src=\"static/images/fmcs/even.svg\" alt=\"\"> {{da.performancediff_7p}}</span>\n" +
                    "                </td>\n" +
                    "            </tr>\n" +
                    "            </tbody>\n" +
                    "        </table>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss": ".maxiot_fmcs_table_main{ width:100%; height:435px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; padding-left:20px; font-family: \"Microsoft YaHei\"; } .caption{ /*font-family: PingFangSC-Regular;*/ font-size: 16px; color: #FFFFFF; letter-spacing: 0.08px; margin-bottom:15px; } .table_content{ width:100%; } table{ width:100%; border-collapse:collapse; } thead tr{ height:48px; } thead th{ font-weight:normal; text-align:left; color: rgba(255,255,255,0.54); background-color:rgba(19,23,37,0.3); padding-left:10px; padding-right:10px; } tbody tr:last-child{ height:38px; } tbody tr:nth-child(even){ background-color:rgba(19,23,37,0.3); } tbody tr td{ padding:11px 10px; } tbody tr td img{ position:relative; top:3px; } tbody tr td:nth:cihld(even) img{ background-color:rgba(19,23,37,0.3); } tbody tr td:first-child{ color: rgba(255,255,255,0.87); } tbody tr td:last-child{ letter-spacing:2px; } tbody tr td:nth-child(2), tbody tr td:nth-child(3), tbody tr td:nth-child(4), tbody tr td:nth-child(5), tbody tr td:nth-child(6){ color: rgba(0,212,189,0.87); }",
                    "controllerScript": "    self.data = {\n" +
                    "        da:{}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "//        var data = [\n" +
                    "//            {\n" +
                    "//                \"v\":[{\"stand_by_datetime\":\"2018/05/26\",\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":21.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/05/27\",\"power_whole_day\":158219,\"flow_whole_day\":1535630,\"performance\":0.11384,\"n2_quantity\":2569,\"temperature\":23.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/05/28\",\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11126,\"n2_quantity\":2203,\"temperature\":22.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/05/29\",\"power_whole_day\":153219,\"flow_whole_day\":1535730,\"performance\":0.11021,\"n2_quantity\":2458,\"temperature\":27.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/05/30\",\"power_whole_day\":152219,\"flow_whole_day\":1535530,\"performance\":0.11223,\"n2_quantity\":2617,\"temperature\":23.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/05/31\",\"power_whole_day\":156219,\"flow_whole_day\":1535230,\"performance\":0.11218,\"n2_quantity\":2198,\"temperature\":24.6},\n" +
                    "//                    {\"stand_by_datetime\":\"2018/06/01\",\"power_whole_day\":152219,\"flow_whole_day\":1534230,\"performance\":0.11044,\"n2_quantity\":2353,\"temperature\":23.6}],\n" +
                    "//                \"t\":1528358866224,\n" +
                    "//                \"k\":{\"o\":\"cdamana\",\"l\":\"cdamana\"}\n" +
                    "//            }\n" +
                    "//        ];\n" +
                    "//\n" +
                    "//        self.onDataUpdated(data);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "        console.log(\"table:\");\n" +
                    "\n" +
                    "        data.forEach((item)=>{\n" +
                    "            self.data.da[item.k.o] = item.v;\n" +
                    "    });\n" +
                    "        self.data.da.cdamana= eval('('+self.data.da.cdamana+')');\n" +
                    "\n" +
                    "        var power_whole_day_7ds=0,\n" +
                    "            flow_whole_day_7ds=0,\n" +
                    "            performance_7ds=0,\n" +
                    "            n2_quantity_7ds=0,\n" +
                    "            temperature_7ds=0;\n" +
                    "\n" +
                    "        self.ctx.$.each(self.data.da.cdamana,function(i,obj){\n" +
                    "            power_whole_day_7ds+=obj.power_whole_day;\n" +
                    "            flow_whole_day_7ds+=obj.flow_whole_day;\n" +
                    "            performance_7ds+=obj.performance;\n" +
                    "            n2_quantity_7ds+=obj.n2_quantity;\n" +
                    "            temperature_7ds+=obj.temperature;\n" +
                    "        });\n" +
                    "\n" +
                    "        //7日平均值\n" +
                    "        self.data.da.power_whole_day_7p=parseInt(power_whole_day_7ds/7);\n" +
                    "        self.data.da.flow_whole_day_7p=parseInt(flow_whole_day_7ds/7);\n" +
                    "        self.data.da.performance_7p=parseFloat((performance_7ds/7).toFixed(5));\n" +
                    "        self.data.da.n2_quantity_7p=parseInt(n2_quantity_7ds/7);\n" +
                    "        self.data.da.temperature_7p=parseFloat((temperature_7ds/7).toFixed(1));\n" +
                    "\n" +
                    "        var performancediffs=0;\n" +
                    "        self.ctx.$.each(self.data.da.cdamana,function(i,obj){\n" +
                    "            var performancediff =self.data.da.performance_7p==0?0: parseFloat((((obj.performance-self.data.da.performance_7p)/self.data.da.performance_7p)*100).toFixed(1));//每日单位能耗差异\n" +
                    "            obj.performancediff = performancediff;\n" +
                    "            performancediffs+=performancediff;\n" +
                    "            obj.stand_by_datetime=self.getFormatDate(new Date(obj.stand_by_datetime));\n" +
                    "        });\n" +
                    "\n" +
                    "        self.data.da.performancediff_7p=(performancediffs/7).toFixed(5);//7日平均单位能耗差异\n" +
                    "        console.log(self.data.da);\n" +
                    "    };\n" +
                    "    self.getFormatDate=function (date) {\n" +
                    "        var seperator1 = \"/\";\n" +
                    "        var month = date.getMonth() + 1;\n" +
                    "        var strDate = date.getDate();\n" +
                    "\n" +
                    "        if (month >= 1 && month <= 9) {\n" +
                    "            month = \"0\" + month;\n" +
                    "        }\n" +
                    "        if (strDate >= 0 && strDate <= 9) {\n" +
                    "            strDate = \"0\" + strDate;\n" +
                    "        }\n" +
                    "\n" +
                    "        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;\n" +
                    "\n" +
                    "      return currentdate;\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };",
                    "defaultData": {
                        "da": {
                            "cdamana": [
                                {
                                    "power_whole_day": 152219,
                                    "flow_whole_day": 1535230,
                                    "performance": 0.11463,
                                    "n2_quantity": 2783,
                                    "temperature": 21.6
                                },
                                {
                                    "power_whole_day": 158219,
                                    "flow_whole_day": 1535630,
                                    "performance": 0.11463,
                                    "n2_quantity": 2753,
                                    "temperature": 23.6
                                },
                                {
                                    "power_whole_day": 152219,
                                    "flow_whole_day": 1535230,
                                    "performance": 0.13463,
                                    "n2_quantity": 2483,
                                    "temperature": 22.6
                                },
                                {
                                    "power_whole_day": 153219,
                                    "flow_whole_day": 1535730,
                                    "performance": 0.11463,
                                    "n2_quantity": 2453,
                                    "temperature": 27.6
                                },
                                {
                                    "power_whole_day": 152219,
                                    "flow_whole_day": 1535530,
                                    "performance": 0.11443,
                                    "n2_quantity": 2873,
                                    "temperature": 23.6
                                },
                                {
                                    "power_whole_day": 156219,
                                    "flow_whole_day": 1535230,
                                    "performance": 0.14463,
                                    "n2_quantity": 2793,
                                    "temperature": 24.6
                                },
                                {
                                    "power_whole_day": 152219,
                                    "flow_whole_day": 1534230,
                                    "performance": 0.13463,
                                    "n2_quantity": 2783,
                                    "temperature": 23.6
                                },
                            ],
                            "power_whole_day_7p": 152219,
                            "flow_whole_day_7p": 1535230,
                            "performance_7p": 0.11463,
                            "n2_quantity_7p": 2453,
                            "temperature_7p": 23.6,
                            "performancediff_7p": 0
                        }
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 15,
                "y": 465
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(47%)",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": [  {
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "cdamana",
                        "key" : "cdamana",
                        "valueFunc" : "",
                    }
                ]
            }]
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "5",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f5",
                "version": "1.0.0",
                "name": "空压机设备状况",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_fmcs_chart1_main\" style=\"width:100%;height:430px;\"></div>",
                    "templateCss": "",
                    "controllerScript": "  self.data = {\n" +
                    "        da:{},\n" +
                    "        option:{},\n" +
                    "        myChart:{}\n" +
                    "    };\n" +
                    "\n" +
                    "\n" +
                    "    self.util = {\n" +
                    "        formatDate: function(date) {\n" +
                    "            dates = date.split(\"/\");\n" +
                    "            if (dates.length == 3) {\n" +
                    "                if (dates[1].length == 1) {\n" +
                    "                    dates[1] = \"0\" + dates[1];\n" +
                    "                }\n" +
                    "                if (dates[2].length == 1) {\n" +
                    "                    dates[2] = \"0\" + dates[2];\n" +
                    "                }\n" +
                    "                date = dates.join(\"-\");\n" +
                    "                return date;\n" +
                    "            } else {\n" +
                    "                return null;\n" +
                    "            }\n" +
                    "        },\n" +
                    "        parseTimeStampToDate:  function(timestamp) {\n" +
                    "            var date = new Date(parseInt(timestamp));\n" +
                    "            //输出结果为2016/8/9\n" +
                    "            //date = this.formatDate(date);\n" +
                    "            //输出结果为2016-08-09，满足YYYY-MM-DD格式要求\n" +
                    "            return date;\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector(\"#maxiot_fmcs_chart1_main\"));\n" +
                    "\n" +
                    "        // var data = [ [\"16:00\",4400], [\"16:01\",4080], [\"16:02\",4300], [\"16:03\",4700], [\"16:04\",4500], [\"16:05\",4250], [\"16:06\",6000], [\"16:07\",4850], [\"16:08\",5500], [\"16:09\",6000], [\"16:10\",5500], [\"16:11\",5000], [\"16:12\",4700], [\"16:13\",4900], [\"16:14\",4500], [\"16:15\",4600], [\"16:16\",4300], [\"16:17\",4700], [\"16:18\",5000], [\"16:19\",6800], [\"16:20\",5000], [\"16:21\",5000], [\"16:22\",4700], [\"16:23\",4400], [\"16:24\",6200], [\"16:25\",4950], [\"16:26\",4800], [\"16:27\",4400], [\"16:28\",4500], [\"16:29\",5000], [\"16:30\",4500], [\"16:31\",5000], [\"16:32\",5300], [\"16:33\",7000], [\"16:34\",5300], [\"16:35\",4600], [\"16:36\",4300], [\"16:37\",4300], [\"16:38\",4500], [\"16:39\",4900], [\"16:40\",4700], [\"16:41\",4500], [\"16:42\",6200], [\"16:43\",5000], [\"16:44\",5600], [\"16:45\",6200], [\"16:46\",5600], [\"16:47\",5200], [\"16:48\",4950], [\"16:49\",5000], [\"16:50\",5100], [\"16:51\",4650], [\"16:52\",4700], [\"16:53\",4400], [\"16:54\",4800], [\"16:55\",5000], [\"16:56\",6100], [\"16:57\",5000], [\"16:58\",5000], [\"16:59\",4800], [\"17:00\",5000] ];\n" +
                    "\n" +
                    "        self.data.da.xAxisTitleList = [];\n" +
                    "        self.data.da.valueList = [];\n" +
                    "        self.data.da.xIntervals = 0;\n" +
                    "\n" +
                    "        self.data.option = {\n" +
                    "            title:{\n" +
                    "                text:'空压机设备状况 ',\n" +
                    "                left:10,\n" +
                    "                top:'0%',\n" +
                    "                textStyle:{\n" +
                    "                    //文字颜色\n" +
                    "                    color:'#fff',\n" +
                    "                    //字体风格,'normal','italic','oblique'\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    //字体系列\n" +
                    "                    fontFamily:'Microsoft YaHei',\n" +
                    "                    //字体大小\n" +
                    "                    fontSize:16\n" +
                    "                }\n" +
                    "            },\n" +
                    "            tooltip: {\n" +
                    "                trigger: 'axis',\n" +
                    "\n" +
                    "                backgroundColor:'#131725',\n" +
                    "                borderColor:'#131725',\n" +
                    "                borderRadius:2,\n" +
                    "                borderWidth:1,\n" +
                    "                textStyle:{\n" +
                    "                    color:'#00D4BD'\n" +
                    "                },\n" +
                    "                formatter:function(params){\n" +
                    "                    var myDate = new Date();\n" +
                    "                    const year = myDate.getFullYear();        //获取当前年份(2位)\n" +
                    "                    const month = myDate.getMonth() + 1;    //获取完整的年份(4位,1970-????)\n" +
                    "                    const day =  myDate.getDate();       //获取当前月份(0-11,0代表1月)\n" +
                    "                    const date =  [year,month,day].join(\"-\");\n" +
                    "\n" +
                    "                    var res = \"<span style='color:rgba(255,255,255,0.54)'>日期 </span>\" + date + \"<br/><span style='color:rgba(255,255,255,0.54)'>時間 </span>\" + params[0].name +\"<br/><span style='color:rgba(255,255,255,0.54)'>用气量  </span>\" + params[0].value+\" m³/h\";\n" +
                    "                    return res;\n" +
                    "                }\n" +
                    "            },\n" +
                    "            legend: {\n" +
                    "                data:['用气量'],\n" +
                    "                textStyle:{\n" +
                    "                    color:'#fff'\n" +
                    "                },\n" +
                    "                top:30\n" +
                    "            },\n" +
                    "            grid:{\n" +
                    "                left:60,\n" +
                    "                top:70,\n" +
                    "                right:30\n" +
                    "            },\n" +
                    "            xAxis: [\n" +
                    "                {\n" +
                    "                    type: 'category',\n" +
                    "                    boundaryGap:false,\n" +
                    "                    data:self.data.da.xAxisTitleList,\n" +
                    "\n" +
                    "                    name:'時間 (min)',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'Microsoft YaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        textAlign:'center'\n" +
                    "                    },\n" +
                    "                    nameLocation:'center',\n" +
                    "                    nameGap:'30',\n" +
                    "\n" +
                    "                    axisPointer: {\n" +
                    "                        type: 'line'\n" +
                    "                    },\n" +
                    "\n" +
                    "                    axisLabel:{\n" +
                    "                        interval: self.data.da.xIntervals,\n" +
                    "                        fontFamily: 'Microsoft YaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '14',\n" +
                    "                        textAlign:'center'\n" +
                    "                    },\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    splitLine: {\n" +
                    "                        show: false\n" +
                    "                    }\n" +
                    "\n" +
                    "\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            yAxis: [\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "\n" +
                    "                    name:'用气量 (m³/h)',\n" +
                    "                    nameGap:20,\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'Microsoft YaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: '#00D4BD'\n" +
                    "                    },\n" +
                    "                    min: 0,\n" +
                    "                   // max: 10000,\n" +
                    "                  //  interval: 1000,\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'Microsoft YaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: '#00D4BD',\n" +
                    "                        lineHeight: '12'\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
                    "\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    type:'value',\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    },\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    name:'用气量',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'circle',\n" +
                    "                    data:self.data.da.valueList,\n" +
                    "\n" +
                    "                    itemStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#00D4BD',\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    areaStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:new self.ctx.echarts.graphic.LinearGradient(0,0,0,1,[{\n" +
                    "                                offset:0,\n" +
                    "                                color:'rgba(0,212,189,0.40) '\n" +
                    "                            },{\n" +
                    "                                offset:0.85,\n" +
                    "                                color:'rgba(11,22,35,0.00)'\n" +
                    "                            }],false),\n" +
                    "                            shadowColor:'rgba(0,0,0,0.1)',\n" +
                    "                            shadowBlur:10,\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "//        var n = 0;\n" +
                    "//        var today = new Date();\n" +
                    "//        var timeStamp = Date.parse(new Date(today.getFullYear(),today.getMonth()+1,today.getDate(),7,0,0));\n" +
                    "\n" +
                    "//        setInterval(function(){\n" +
                    "//\n" +
                    "//            var   data = [\n" +
                    "//                {\n" +
                    "//                    \"v\":Math.random()* 100000,\n" +
                    "//                    \"t\":timeStamp + 1000*60 *n++,\n" +
                    "//                    \"k\":{\"o\":\"flow\",\"l\":\"flow\"}\n" +
                    "//                }\n" +
                    "//            ];\n" +
                    "//\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//        },1000)\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.addData = function(time,value){\n" +
                    "\n" +
                    "        self.data.da.xAxisTitleList.push(time)\n" +
                    "        self.data.da.valueList.push(value);\n" +
                    "\n" +
                    "        if(self.data.da.xAxisTitleList.length > 50) {\n" +
                    "            self.data.da.xAxisTitleList.shift();\n" +
                    "            self.data.da.valueList.shift();\n" +
                    "        }\n" +
                    "        if(self.data.da.xAxisTitleList.length  > 5) {\n" +
                    "            self.data.option.xAxis[0].axisLabel.interval = parseInt(self.data.da.xAxisTitleList.length / 5);\n" +
                    "            console.log(parseInt(self.data.option.xAxis[0].axisLabel.interval));\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "  console.log(\"chart1:\");\n" +
                    "  console.log(data);\n" +
                    "        if(data.length == 0){\n" +
                    "            return;\n" +
                    "        }\n" +
                    "\n" +
                    "        const value = data[0].v;\n" +
                    "        const timestamp = data[0].t-600000;\n" +
                    "\n" +
                    "        const date = self.util.parseTimeStampToDate(timestamp);\n" +
                    "\n" +
                    "        const time = (date.getHours()<10?'0'+date.getHours():date.getHours()) + \":\" + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes());\n" +
                    "\n" +
                    "        self.addData(time,value);\n" +
                    "\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };",
                    "defaultData": {
                        "da": {},
                        "option": {},
                        "myChart": {}
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": '50%',
                "y": 25
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50%)",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": [{
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "flow",
                        "key" : "flow",
                        "valueFunc" : "",
                    }
                ]
            }]
        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "5",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f5",
                "version": "1.0.0",
                "name": "空压机系统优化前后电费成本",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_fmcs_chart2_main\" style=\"width:100%;height:350px;\"></div>\n" +
                    "<div id=\"maxiot_FMCS_table_app\" style=\"margin-left:20px;margin-top:15px;\">\n" +
                    "    <div class=\"average\">6班平均值</div>\n" +
                    "    <div class=\"result\"><span>实际操作成本&nbsp;</span><span class=\"real\">{{da.cost_shift_real_avg}}</span></div>\n" +
                    "    <div class=\"result\"><span>智能推算成本&nbsp;</span><span class=\"calc\">{{da.cost_shift_pred_avg}}</span></div>\n" +
                    "    <div class=\"result\"><span>成本差異&nbsp;</span><span class=\"diff\">{{da.cost_shift_diff_avg}}</span></div>\n" +
                    "</div>",
                    "templateCss": " body{\n" +
                    "            background-color: #292c4a;\n" +
                    "\n" +
                    "            color:#0b415d;\n" +
                    "        }\n" +
                    "        .average{\n" +
                    "            font-size: 14px;\n" +
                    "            color: rgba(255,255,255,0.54);\n" +
                    "            line-height: 14px;\n" +
                    "            margin-right:17px;\n" +
                    "            display:inline-block;\n" +
                    "            text-align:center;\n" +
                    "        }\n" +
                    "        .result{\n" +
                    "            width:180px;\n" +
                    "            height:40px;\n" +
                    "            line-height:40px;\n" +
                    "            background: rgba(19,23,37,0.3);\n" +
                    "            color:#fff;\n" +
                    "            margin-right:10px;\n" +
                    "            display:inline-block;\n" +
                    "            text-align:center;\n" +
                    "        }\n" +
                    "        .real{\n" +
                    "\n" +
                    "            font-size: 15px;\n" +
                    "            color: rgba(0,212,189,1);\n" +
                    "            letter-spacing: -0.09px;\n" +
                    "            line-height: 14px;\n" +
                    "        }\n" +
                    "        .calc{\n" +
                    "\n" +
                    "            font-size: 15px;\n" +
                    "            color: #EB73C7;\n" +
                    "            letter-spacing: -0.09px;\n" +
                    "            line-height: 14px;\n" +
                    "        }\n" +
                    "        .diff{\n" +
                    "            position:relative;\n" +
                    "\n" +
                    "            font-size: 15px;\n" +
                    "            color: #E04F23;\n" +
                    "            letter-spacing: -0.09px;\n" +
                    "            line-height: 14px;\n" +
                    "            margin-right:0;\n" +
                    "        }",
                    "controllerScript": "\n" +
                    "    self.data = {\n" +
                    "        da:{},\n" +
                    "        option:{},\n" +
                    "        myChart:{},\n" +
                    "        cost_shift_real_avg:0,\n" +
                    "        cost_shift_pred_avg:0,\n" +
                    "        cost_shift_diff_avg:0\n" +
                    "    };\n" +
                    "\n" +
                    "    self.initShiftData = function(){\n" +
                    "\n" +
                    "        (self.data.da.cost_shift_pred = self.data.da.cost_shift_pred || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_real = self.data.da.cost_shift_real || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_diff = self.data.da.cost_shift_diff || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_diffColumnColor = self.data.da.cost_shift_diffColumnColor || []).length = 0;\n" +
                    "        (self.data.da.shiftTitle = self.data.da.shiftTitle || []).length = 0;\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "//    self.UnitTest = function(){\n" +
                    "//\n" +
                    "//        setInterval( function(){\n" +
                    "//\n" +
                    "//            const data = [\n" +
                    "//                {\n" +
                    "//                    \"v\":[{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-25 20:00:00\"},{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-24 11:00:00\"},{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-24 21:00:00\"},{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-23 11:00:00\"},{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-23 11:00:00\"},{\"cost_shift_pred\":30000+Math.random() * 40000,\"cost_shift_real\":30000+Math.random() * 40000,\"cost_shift_diff\":-Math.random(),\"invoke_time\":\"2018-06-22 11:00:00\"}],\n" +
                    "//                    \"t\":1528358866224,\n" +
                    "//                    \"k\":{\"o\":\"shift\",\"l\":\"shift\"}\n" +
                    "//                }\n" +
                    "//            ];\n" +
                    "//\n" +
                    "//\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//\n" +
                    "//        },1000)\n" +
                    "//\n" +
                    "//    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "\n" +
                    "        self.initShiftData();\n" +
                    "\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_fmcs_chart2_main'));\n" +
                    "        self.data.option = {\n" +
                    "            title:{\n" +
                    "                text:'空压机系统优化前后电费成本',\n" +
                    "                left:10,\n" +
                    "                top:'0%',\n" +
                    "                textStyle:{\n" +
                    "                    color:'#fff',\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    fontFamily:'PingFangSC-Regular',\n" +
                    "                    fontSize:16\n" +
                    "                }\n" +
                    "            },\n" +
                    "            tooltip: {\n" +
                    "                trigger: 'axis',\n" +
                    "                backgroundColor:'#131725',\n" +
                    "                <!--阴影效果不显示-->\n" +
                    "                boxShadow: '0 2px 10px 0 #131725',\n" +
                    "                borderColor:'#131725',\n" +
                    "                borderRadius:2,\n" +
                    "                borderWidth:1,\n" +
                    "                textStyle:{\n" +
                    "                    color:'#00D4BD'\n" +
                    "                },\n" +
                    "                formatter:function(params){\n" +
                    "                    var diff = params[2].value;\n" +
                    "                    if(diff > 0) diff='+'+diff.toFixed(2);\n" +
                    "                    var res = \"<span style='color:rgba(255,255,255,0.54)'>日期 </span>\" + params[0].name + \"<br/><span style='color:rgba(255,255,255,0.54)'>实际操作 </span>￥\" + params[0].value.toFixed(2) +\"<br/><span style='color:rgba(255,255,255,0.54)'>智能推算 </span>￥\" + params[1].value.toFixed(2) +\"<br/><span style='color:rgba(255,255,255,0.54)'>成本差異 </span>\" + diff +\"%\";\n" +
                    "                    return res;\n" +
                    "                }\n" +
                    "            },\n" +
                    "            legend: {\n" +
                    "                data:[\n" +
                    "                    {\n" +
                    "                        name:\"实际操作成本\",\n" +
                    "                        textStyle:{\n" +
                    "                            color:'#fff'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:\"智能推算成本\",\n" +
                    "                        textStyle:{\n" +
                    "                            color:'#fff'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:\"成本差異\",\n" +
                    "                        textStyle:{\n" +
                    "                            color:'#fff'\n" +
                    "                        },\n" +
                    "                        icon:'image://static/images/fmcs/twobar.svg'\n" +
                    "                    }\n" +
                    "                ],\n" +
                    "                top:30\n" +
                    "            },\n" +
                    "            grid:{\n" +
                    "                left:60,\n" +
                    "                right:50,\n" +
                    "                top:70\n" +
                    "            },\n" +
                    "            xAxis: [\n" +
                    "                {\n" +
                    "                    type: 'category',\n" +
                    "                    name:'時間 (班)',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '14',\n" +
                    "                        letterSpacing:'0.07'\n" +
                    "                    },\n" +
                    "                    axisPointer:{\n" +
                    "                        type:\"shadow\"\n" +
                    "                    },\n" +
                    "                    nameLocation:'center',\n" +
                    "                    nameGap:'30',\n" +
                    "                    boundaryGap:true,\n" +
                    "                    data:self.data.da.shiftTitle,\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular;',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '14',\n" +
                    "                        textAlign:'center'\n" +
                    "                    },\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    splitLine: {\n" +
                    "                        show: false\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            yAxis: [\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    name:'成本 (CN￥)',\n" +
                    "                    nameGap:20,\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '15'\n" +
                    "                    },\n" +
                    "                    min: 30000,\n" +
                    "                    max: 70000,\n" +
                    "                    interval: 10000,\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '12'\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    name:'成本差異(%)',\n" +
                    "                    nameGap:20,\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '15'\n" +
                    "                    },\n" +
                    "                    min: -1.0,\n" +
                    "                    max: 3.0,\n" +
                    "                    interval: 1.0,\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '12'\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    name:'实际操作成本',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'circle',\n" +
                    "                    data:self.data.da.cost_shift_real,\n" +
                    "                    itemStyle:{//折线拐点的样式\n" +
                    "                        normal:{\n" +
                    "                            color:'#00D4BD',\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'智能推算成本',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'circle',\n" +
                    "                    data:self.data.da.cost_shift_pred,\n" +
                    "                    itemStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#EB73C7',\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'成本差異',\n" +
                    "                    type:'bar',\n" +
                    "                    barWidth:25,\n" +
                    "                    yAxisIndex: 1,\n" +
                    "                    data:self.data.da.cost_shift_diff,\n" +
                    "                    itemStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:function(params){\n" +
                    "\n" +
                    "\n" +
                    "                                return self.data.da.cost_shift_diffColumnColor[params.dataIndex]\n" +
                    "                            },\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "        // var data = '[{\"v\":\"[58000, 59000, 60000, 61000, 61500,60000]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_pred\",\"l\":\"cost_shift_pred\"}},{\"v\":\"[57000, 57200, 59000, 60000, 60800, 61000]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_real\",\"l\":\"cost_shift_real\"}},{\"v\":\"[0.3, 0.2, 0.1, 0.2, 0.3, -0.3]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_diff\",\"l\":\"cost_shift_diff\"}}]';\n" +
                    "      //  self.UnitTest();\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "console.log(\"chart2:\");\n" +
                    "console.log(data);\n" +
                    "        self.initShiftData();\n" +
                    "\n" +
                    "        const badColor = \"#E04F23\";\n" +
                    "        const goodColor = \"#71D045\";\n" +
                    "\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "            if(obj.k.o == \"shift\"){\n" +
                    "                var shifts =eval('('+obj.v+')');\n" +
                    "console.log(shifts);\n" +
                    "                shifts.forEach(function(objShift,i){\n" +
                    "\n" +
                    "                    self.data.da.cost_shift_pred.push(objShift.analysis_data.cost_shift_pred);\n" +
                    "                    self.data.da.cost_shift_real.push(objShift.analysis_data.cost_shift_real);\n" +
                    "                    self.data.da.cost_shift_diff.push(objShift.analysis_data.cost_shift_diff);\n" +
                    "\n" +
                    "                    if(objShift.analysis_data.cost_shift_diff > 0){\n" +
                    "                        self.data.da.cost_shift_diffColumnColor.push(new self.ctx.echarts.graphic.LinearGradient(0,0,0,1,[\n" +
                    "                            {\n" +
                    "                                offset:0.1,\n" +
                    "                                color: badColor\n" +
                    "                            },\n" +
                    "                            {\n" +
                    "                                offset:1,\n" +
                    "                                color:badColor\n" +
                    "                            }]));\n" +
                    "                    }\n" +
                    "                    else {\n" +
                    "\n" +
                    "                        self.data.da.cost_shift_diffColumnColor.push(new self.ctx.echarts.graphic.LinearGradient(0,0,0,1,[\n" +
                    "                            {\n" +
                    "                                offset:0.1,\n" +
                    "                                color: goodColor\n" +
                    "                            },\n" +
                    "                            {\n" +
                    "                                offset:1,\n" +
                    "                                color:goodColor\n" +
                    "                            }]));\n" +
                    "\n" +
                    "                    }\n" +
                    "\n" +
                    "                    var invokeTime = objShift.invoke_time;\n" +
                    "                    var datetimes = invokeTime.split(\" \");\n" +
                    "                    var dateSections = datetimes[0].split('-');\n" +
                    "                    var timeSections = datetimes[1].split('-');\n" +
                    "                    var hour = timeSections[0];\n" +
                    "                    var shiftName = \"\";\n" +
                    "                    var day = dateSections[1] + \"/\" + dateSections[2];\n" +
                    "\n" +
                    "                    if(hour > 7 && hour <19){\n" +
                    "                        shiftName = \"白班\"\n" +
                    "                    }else {\n" +
                    "                        shiftName = \"晚班\"\n" +
                    "                    }\n" +
                    "\n" +
                    "                    self.data.da.shiftTitle.push(day + \" \" + shiftName);\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "                })\n" +
                    "            }\n" +
                    "            //eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "\n" +
                    "//\n" +
                    "//        self.data.da.cost_shift_pred= eval('('+self.data.da.cost_shift_pred+')');\n" +
                    "//        self.data.da.cost_shift_real= eval('('+self.data.da.cost_shift_real+')');\n" +
                    "//        self.data.da.cost_shift_diff= eval('('+self.data.da.cost_shift_diff+')');\n" +
                    "//        self.data.option.series[0].data = self.data.da.cost_shift_pred;\n" +
                    "//        self.data.option.series[1].data = self.data.da.cost_shift_real;\n" +
                    "//        self.data.option.series[2].data = self.data.da.cost_shift_diff;\n" +
                    "\n" +
                    "        self.data.da.cost_shift_pred_avg=self.avg(self.data.da.cost_shift_pred);\n" +
                    "        self.data.da.cost_shift_real_avg=self.avg(self.data.da.cost_shift_real);\n" +
                    "        self.data.da.cost_shift_diff_avg=self.avg(self.data.da.cost_shift_diff);\n" +
                    "\n" +
                    "\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getData = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.avg=function(dataIntArr) {\n" +
                    "        var avg=0;\n" +
                    "        for(var i=0;i<dataIntArr.length;i++){\n" +
                    "\n" +
                    "            avg+=parseFloat(dataIntArr[i]);\n" +
                    "        }\n" +
                    "        return (avg/dataIntArr.length).toFixed(2);\n" +
                    "    };\n",
                    "defaultData": {
                        "da": {
                            "cost_shift_real_avg":0,
                            "cost_shift_pred_avg":0,
                            "cost_shift_diff_avg":0
                        },
                        "option": {},
                        "myChart": {}

                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": '50%',
                "y": 470
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50%)",
                "showTitle": false,
                "position": "absolute",
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            },
            "dataSources": [{
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "shift",
                        "key" : "shift",
                        "valueFunc" : "",
                    }
                ]
            }]
        }
    ]
};

export {dashboard_fmcs1};
