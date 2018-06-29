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
                            "id": "4effc8f5-910c-42af-95bb-6777d0c20ff2", "name": "restApi",
                            "keys": ["cost_day_real", "cost_day_real_N2", "CDA_open", "CDA_per","shift"
                            ]
                        },
                        {
                            "id": "d9e80502-a9e2-44ab-9402-0cb97829bb1a", "name": "websocket",
                            "keys": [
                                "N2_open", "SystemMgrData", "flow"
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
                "name": "昨日空压机成本",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div  id=\"maxiot_cd_comp1_app\" class=\"main\">\n" +
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
                    "templateCss": ".main{\n" +
                    "            width:100%;\n" +
                    "            background-color:#262d45;\n" +
                    "            color:rgba(255,255,255,0.7);\n" +
                    "            font-size:14px;\n" +
                    "            overflow: auto;\n" +
                    "            display:flex;\n" +
                    "            flex-direction:row;\n" +
                    "            justify-content:space-between;\n" +
                    "            align-items:center;\n" +
                    "        }\n" +
                    "        .content{\n" +
                    "            width:30%;\n" +
                    "            height:100%;\n" +
                    "            line-height:100%;\n" +
                    "            padding:10px 10px 10px 0px;\n" +
                    "        }\n" +
                    "        .top_txt{\n" +
                    "            width:158px;\n" +
                    "            height:22px;\n" +
                    "            font-family: MicrosoftYaHei;\n" +
                    "            font-size: 16px;\n" +
                    "            color: #FFFFFF;\n" +
                    "            letter-spacing: 0.08px;\n" +
                    "        }\n" +
                    "        .top_txt span:nth-child(2){\n" +
                    "            font-size:12px;\n" +
                    "            color:\n" +
                    "        }\n" +
                    "        .bottom_txt{\n" +
                    "            height:64px;\n" +
                    "            line-height:64px;\n" +
                    "            margin-top:26px;\n" +
                    "        }\n" +
                    "        .btm_left {\n" +
                    "            float:left;\n" +
                    "            width:62px;\n" +
                    "            height:62px;\n" +
                    "            background:#00D4BD;\n" +
                    "            box-shadow:0 0 8px #00D4BD;\n" +
                    "            border-radius:100px;\n" +
                    "            margin-right:24px;\n" +
                    "        }\n" +
                    "        .btm_left img{\n" +
                    "            vertical-align: middle;\n" +
                    "        }\n" +
                    "        .btm_right{\n" +
                    "            float:left;\n" +
                    "        }\n" +
                    "        .btm_right span:first-child{\n" +
                    "            padding:3px 7px;\n" +
                    "            margin-right:10px;\n" +
                    "            background: rgba(255,255,255,0.54);\n" +
                    "            border-radius: 100px;\n" +
                    "            font-family: PingFangSC-Regular;\n" +
                    "            font-size: 12px;\n" +
                    "            color: #262D45;\n" +
                    "            letter-spacing: 0.07px;\n" +
                    "        }\n" +
                    "        .btm_right span:nth-child(2){\n" +
                    "            font-family: NotoSans;\n" +
                    "            font-size: 30px;\n" +
                    "            color: #00D4BD;\n" +
                    "            letter-spacing: 0.17px;\n" +
                    "            line-height: 26px;\n" +
                    "            position:relative;\n" +
                    "            top:5px;\n" +
                    "        }",
                    "controllerScript": "self.data = {\n" +
                    "        da: {},\n" +
                    "    };\n" +
                    "    self.onInit = function () {\n" +
                    "        var data = [\n" +
                    "            {\n" +
                    "                v: 56890,\n" +
                    "                t: 1528358866224,\n" +
                    "                k: {o: \"cost_day_real\", l: \"cost_day_real\"}\n" +
                    "            },\n" +
                    "            {\n" +
                    "                v: 3620,\n" +
                    "                t: 1528358866224,\n" +
                    "                k: {o: \"cost_day_real_N2\", l: \"cost_day_real_N2\"}\n" +
                    "            },\n" +
                    "            {\n" +
                    "                v: 200,\n" +
                    "                t: 1528358866224,\n" +
                    "                k: {o: \"N2_open\", l: \"N2_open\"}\n" +
                    "            }\n" +
                    "        ];\n" +
                    "        self.onDataUpdated(data);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.toThousands = function (num) {\n" +
                    "        return (num || 0).toString().replace(/(\\d)(?=(?:\\d{3})+$)/g, '$1,');\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    //"       console.log(self.data.da) ;" +
                    " self.data.da.cost_day_real = self.data.da.cost_day_real;\n" +
                    "        self.data.da.cost_day_real_N2 = self.data.da.cost_day_real_N2;\n" +
                    //"console.log(self.data.da);"+
                    "    };\n" +
                    "    self.onResize = function () {};\n" +
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
                "y": 15
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
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "cost_day_real",
                        "key" : "cost_day_real",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "cost_day_real_N2",
                        "key" : "cost_day_real_N2",
                        "valueFunc" : ""
                    },
                    {
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
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
                    "templateHtml": "<div id=\"maxiot_cd_comp2_app\" class=\"main\">\n" +
                    "    <div class=\"caption\">空压机裕度</div>\n" +
                    "    <div class=\"usage\">\n" +
                    "        <div><span class='textTile'>已啟用&nbsp;</span><span id=\"CDA_per\">{{da.CDA_per*100}}</span><sub>%</sub></div>&nbsp;&nbsp;\n" +
                    "        <div style='padding-left: 15px;'><span class='textTile'>未啟用&nbsp;</span><span id=\"CDA_notopened\">{{(1-da.CDA_per)*100}}</span><sub>%</sub></div>\n" +
                    "    </div>\n" +
                    "    <div class=\"itemlist\">\n" +
                    "        <div class=\"top_row\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#1</span><br><span>400hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#2</span><br><span>900hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#3</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#4</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#5</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"bottom_row\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#6</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#7</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#8</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img\"><img src=\"./static/images/cda/d.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#9</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"item\">\n" +
                    "                <div class=\"item_img usageshadow\"><img src=\"./static/images/cda/a.svg\" alt=\"\"></div>\n" +
                    "                <div class=\"item_txt\"><span>#10</span><br><span>1500hp</span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss": "body {\n" +
                    "            margin: 0;\n" +
                    "            padding: 0;\n" +
                    "        }\n" +
                    "        .main {\n" +
                    "            width: 100%;\n" +
                    "            background-color: #262d45;\n" +
                    "            color: rgba(255, 255, 255, 0.7);\n" +
                    "            font-size: 14px;\n" +
                    "            overflow: auto;\n" +
                    "        }\n" +
                    "        .caption {\n" +
                    "            font-family: MicrosoftYaHei;\n" +
                    "            font-size: 16px;\n" +
                    "            color: #FFFFFF;\n" +
                    "            letter-spacing: 0.08px;\n" +
                    "            text-align: left;\n" +
                    "            margin-bottom: 16px;\n" +
                    "        }\n" +
                    "        .usage {\n" +
                    "            height: 10%;\n" +
                    "            line-height: 10%;\n" +
                    "            margin-bottom: 4px;\n" +
                    "        }\n" +
                    "        .usage div {\n" +
                    "            display: inline-block;\n" +
                    "        }\n" +
                    ".usageshadow{" +
                    "background-image: linear-gradient(-147deg, #00D4BD 50%, rgba(2,222,212,0.70) 99%);\n" +
                    "box-shadow: 0 0 6px 0 #00D4BD;" +
                    "}"+
                    "        .usage div span:nth-child(2) {\n" +
                    "            font-family: NotoSans;\n" +
                    "            font-size: 30px;\n" +
                    "            color: #00D4BD;\n" +
                    "            letter-spacing: 0.17px;\n" +
                    "            line-height: 30px;padding-left: 10px;\n" +
                    "        }\n" +
                    "        sub {\n" +
                    "            font-size: large;\n" +
                    "            color: #00D4BD;\n" +
                    "        }\n" +
                    ".textTile{" +
                    "    position: relative;\n" +
                    "           top: -5px;" +
                    "font-family: PingFangSC-Regular;\n" +
                    "font-size: 14px;\n" +
                    "color: rgba(255,255,255,0.54);\n" +
                    "letter-spacing: 0.07px;\n" +
                    "text-align: left;"+
                    "}"+

                    "        .itemlist {\n" +
                    "            width: 100%;\n" +
                    "            height: 70%;\n" +
                    "        }\n" +
                    "        .top_row,\n" +
                    "        .bottom_row {\n" +
                    "            width: 90%;\n" +
                    "            height: 50%;\n" +
                    "            display: flex;\n" +
                    "            flex-direction: row;\n" +
                    "            justify-content: space-between;\n" +
                    "            align-items: center;\n" +
                    "        }\n" +
                    "        .item {\n" +
                    "            width: 160px;\n" +
                    "            height: 90px;\n" +
                    "        }\n" +
                    "        .item_img {\n" +
                    "            width: 64px;\n" +
                    "            height: 64px;\n" +
                    "            float: left;\n" +
                    "            margin-top: 13px;\n" +
                    "            margin-left: 8px;\n" +
                    "            margin-right: 12px;\n" +
                    "            border-radius: 50%;\n" +
                    "        }\n" +
                    "        .item_img img {\n" +
                    "            vertical-align: middle;\n" +
                    "        }\n" +
                    "        .item_txt {\n" +
                    "            float: left;\n" +
                    "            width: 48px;\n" +
                    "            height: 40px;\n" +
                    "            margin-top: 26px;\n" +
                    "            margin-bottom: 24px;\n" +
                    "            font-family: NotoSans;\n" +
                    "            font-size: 16px;\n" +
                    "            letter-spacing: 0.08px;\n" +
                    "            line-height: 20px;\n" +
                    "        }",
                    "controllerScript": "self.data = {\n" +
                    "        da: {" +
                    "}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "        var data = [\n" +
                    "            {\n" +
                    "                \"v\": 0.5,\n" +
                    "                \"t\": 1528358866224,\n" +
                    "                \"k\": {\"o\": \"CDA_per\", \"l\": \"CDA_per\"}\n" +
                    "            },\n" +
                    "            {\n" +
                    "                \"v\": \"[1,0,1,0,1,0,1,0,0,1]\",\n" +
                    "                \"t\": 1528358866224,\n" +
                    "                \"k\": {\"o\": \"CDA_open\", \"l\": \"CDA_open\"}\n" +
                    "            }\n" +
                    "        ];\n" +
                    "        self.onDataUpdated(data);\n" +
                    "    };\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        self.data.da.CDA_open = eval('(' + self.data.da.CDA_open + ')');\n" +
                    "        var CDA_per = self.data.da.CDA_per * 100;\n" +
                    "        var CDA_notopened = (1 - self.data.da.CDA_per) * 100;\n" +
                    "        var open_arr = self.data.da.CDA_open;\n" +
                    "        for (var i = 0; i < 5; i++) {\n" +
                    "            if (open_arr[i] == 0) {\n" +
                    "                self.ctx.$(\".top_row .item .item_img\").eq(i).css(\"background-color\", \"rgba(255,255,255,0.24)\");\n" +
                    "                self.ctx.$(\".top_row .item .item_txt\").eq(i).css(\"color\", \"rgba(255,255,255,0.24)\");\n" +
                    "                self.ctx.$(\".top_row .item .item_txt\").eq(i).css(\"color\", \"rgba(255,255,255,0.24)\");\n" +
                    "            } else if (open_arr[i] == 1) {\n" +
                    "                self.ctx.$(\".top_row .item .item_img\").eq(i).css(\"background-color\", \"#00D4BD\");\n" +
                    "                self.ctx.$(\".top_row .item .item_txt\").eq(i).css(\"color\", \"#00D4BD\");\n" +
                    "            }\n" +
                    "        };\n" +
                    "        for (var i = 5; i < 10; i++) {\n" +
                    "            if (open_arr[i] == 0) {\n" +
                    "                self.ctx.$(\".bottom_row .item .item_img\").eq(i - 5).css(\"background-color\", \"rgba(255,255,255,0.24)\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_txt\").eq(i - 5).css(\"color\", \"rgba(255,255,255,0.24)\");\n" +
                    "            } else if (open_arr[i] == 1) {\n" +
                    "                self.ctx.$(\".bottom_row .item .item_img\").eq(i - 5).css(\"background-color\", \"#00D4BD\");\n" +
                    "                self.ctx.$(\".bottom_row .item .item_txt\").eq(i - 5).css(\"color\", \"#00D4BD\");\n" +
                    "            }\n" +
                    "        }\n" +
                    "    }\n" +
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
                "y": 172
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50% - 15px)",
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
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_open",
                        "key" : "CDA_open",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
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
                    "templateHtml": "<div id=\"maxiot_cd_table_app\">\n" +
                    "    <div class=\"caption\">空压机系统管理表</div>\n" +
                    "    <div class=\"table_content\">\n" +
                    "        <table >\n" +
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
                    "            <tr v-for=\"item in da.SystemMgrData\">\n" +
                    "                <td>2018/05/26</td>\n" +
                    "                <td><span id=\"power_whole_day\">{{item.power_whole_day}}</span></td>\n" +
                    "                <td><span id=\"flow_whole_day\">{{item.flow_whole_day}}</span></td>\n" +
                    "                <td><span id=\"performance\">{{item.performance}}</span></td>\n" +
                    "                <td><span id=\"n2_quantity\">{{item.n2_quantity}}</span></td>\n" +
                    "                <td><span id=\"temperature\">{{item.temperature}}</span></td>\n" +
                    "                <td>\n" +
                    "                    <span v-if=\"item.performance-da.performance_7p>0\" style=\"color:#E04F23\">↑&nbsp;&nbsp;{{(item.performance-da.performance_7p).toFixed(2)}}</span>\n" +
                    "                    <span v-if=\"item.performance-da.performance_7p<0\" style=\"color:lightgreen\">↓&nbsp;&nbsp;{{(item.performance-da.performance_7p).toFixed(2)}}</span>\n" +
                    "                    <span v-if=\"item.performance-da.performance_7p==0\" style=\"color:#00D4BD\">-&nbsp;&nbsp;{{(item.performance-da.performance_7p).toFixed(2)}}</span>\n" +
                    "                </td>\n" +
                    "            </tr>\n" +
                    "            <tr>\n" +
                    "                <td>7日平均值</td>\n" +
                    "                <td><span>{{da.power_whole_day_7p}}</span></td>\n" +
                    "                <td><span>{{da.flow_whole_day_7p}}</span></td>\n" +
                    "                <td><span>{{da.performance_7p}}</span></td>\n" +
                    "                <td><span>{{da.n2_quantity_7p}}</span></td>\n" +
                    "                <td><span>{{da.temperature_7p}}</span></td>\n" +
                    "                <td><span v-if=\"da.performancediff_7p>0\" style=\"color:#E04F23\">↑&nbsp;&nbsp;{{da.performancediff_7p.toFixed(2)}}</span>\n" +
                    "                    <span v-if=\"da.performancediff_7p<0\" style=\"color:lightgreen\">↓&nbsp;&nbsp;{{da.performancediff_7p.toFixed(2)}}</span>\n" +
                    "                    <span v-if=\"da.performancediff_7p==0\" style=\"color:#00D4BD\">-&nbsp;&nbsp;{{da.performancediff_7p.toFixed(2)}}</span>\n" +
                    "                </td>\n" +
                    "            </tr>\n" +
                    "            </tbody>\n" +
                    "        </table>\n" +
                    "    </div>\n" +
                    "</div>",
                    "templateCss": "body {\n" +
                    "            background-color: #262d45;\n" +
                    "            font-family: \"Arial\", \"Microsoft YaHei\", \"黑体\", \"宋体\", sans-serif;\n" +
                    "        }\n" +
                    "        .caption {\n" +
                    "            /*font-family: PingFangSC-Regular;*/\n" +
                    "            font-size: 16px;\n" +
                    "            color: #FFFFFF;\n" +
                    "            letter-spacing: 0.08px;\n" +
                    "            margin-bottom: 18px;\n" +
                    "        }\n" +
                    "        .table_content {\n" +
                    "            width: 100%;\n" +
                    "            height: 100%;\n" +
                    "        }\n" +
                    "        table {\n" +
                    "            width: 100%;\n" +
                    "            height: 75%;\n" +
                    "            border-collapse: collapse;\n" +
                    "        }\n" +
                    "        thead th {\n" +
                    "            font-weight: normal;\n" +
                    "            text-align: left;\n" +
                    "            /*font-family: PingFangSC-Regular;*/\n" +
                    "            font-size: 14px;\n" +
                    "            color: rgba(255, 255, 255, 0.54);\n" +
                    "            letter-spacing: 0;\n" +
                    "            background-color: #32394f;;\n" +
                    "            padding: 12px 16px;\n" +
                    "        }\n" +
                    "\n" +
                    "        tbody tr td {\n" +
                    "            padding: 12px 16px;\n" +
                    "        }\n" +
                    "\n" +
                    "        tbody tr:nth-child(even) {\n" +
                    "            background-color: #32394f;;\n" +
                    "        }\n" +
                    "\n" +
                    "        tbody tr td:first-child {\n" +
                    "            /*font-family: NotoSans;*/\n" +
                    "            font-size: 14px;\n" +
                    "            color: rgba(255, 255, 255, 0.87);\n" +
                    "            letter-spacing: 0;\n" +
                    "        }\n" +
                    "        tbody tr td:last-child {\n" +
                    "            /*font-family: NotoSans-Bold;*/\n" +
                    "            font-size: 14px;\n" +
                    "            color: #E04F23;\n" +
                    "            letter-spacing: 0;\n" +
                    "        }\n" +
                    "        tbody tr td:nth-child(2),\n" +
                    "        tbody tr td:nth-child(3),\n" +
                    "        tbody tr td:nth-child(4),\n" +
                    "        tbody tr td:nth-child(5),\n" +
                    "        tbody tr td:nth-child(6) {\n" +
                    "            /*font-family: NotoSans;*/\n" +
                    "            font-size: 14px;\n" +
                    "            color: rgba(0, 212, 189, 0.87);\n" +
                    "            letter-spacing: 0;\n" +
                    "        }",
                    "controllerScript": "self.data = {\n" +
                    "        da: {}\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onInit = function () {\n" +
                    "        var data = [{\n" +
                    "            \"v\": '[{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6},{\"power_whole_day\":152219,\"flow_whole_day\":1535230,\"performance\":0.11463,\"n2_quantity\":2783,\"temperature\":23.6}]',\n" +
                    "            \"t\": 1528358866224,\n" +
                    "            \"k\": {\"o\": \"SystemMgrData\", \"l\": \"SystemMgrData\"}\n" +
                    "        }];\n" +
                    "        self.onDataUpdated(data);\n" +
                    "    };\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        self.data = Object.assign({}, {...self.data}, this.$data);\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        self.data.da.SystemMgrData = eval('(' + self.data.da.SystemMgrData + ')');\n" +
                    "        var power_whole_day_7ds = 0,\n" +
                    "            flow_whole_day_7ds = 0,\n" +
                    "            performance_7ds = 0,\n" +
                    "            n2_quantity_7ds = 0,\n" +
                    "            temperature_7ds = 0;\n" +
                    "        self.ctx.$.each(self.data.da.SystemMgrData, function (i, obj) {\n" +
                    "            power_whole_day_7ds += obj.power_whole_day;\n" +
                    "            flow_whole_day_7ds += obj.flow_whole_day;\n" +
                    "            performance_7ds += obj.performance;\n" +
                    "            n2_quantity_7ds += obj.n2_quantity;\n" +
                    "            temperature_7ds += obj.temperature;\n" +
                    "        });\n" +
                    "        self.data.da.power_whole_day_7p = power_whole_day_7ds / 7;\n" +
                    "        self.data.da.flow_whole_day_7p = flow_whole_day_7ds / 7;\n" +
                    "        self.data.da.performance_7p = performance_7ds / 7;\n" +
                    "        self.data.da.n2_quantity_7p = n2_quantity_7ds / 7;\n" +
                    "        self.data.da.temperature_7p = temperature_7ds / 7;\n" +
                    "\n" +
                    "        var performacediffs = 0;\n" +
                    "        self.ctx.$.each(self.data.da.SystemMgrData, function (i, obj) {\n" +
                    "            performacediffs += obj.performance - self.data.da.performance_7p;\n" +
                    "        });\n" +
                    "        self.data.da.performancediff_7p = performacediffs / 7;\n" +
                    //  "        console.log(self.data.da.power_whole_day_7p, self.data.da.flow_whole_day_7p, self.data.da.daperformance_7p, self.data.da.n2_quantity_7p, self.data.da.temperature_7p, self.data.da.performancediff_7p);\n" +
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
                            "SystemMgrData": [
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
                "y": 440
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50% - 15px)",
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
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "SystemMgrData",
                        "key" : "SystemMgrData",
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
                    "controllerScript": "self.data = {\n" +
                    "        da: {},\n" +
                    "        option: {},\n" +
                    "        myChart: {}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.parseTimeStampToDate= function (timestamp) {\n" +
                    "            var date = new Date(parseInt(timestamp));\n" +
                    "            return date;\n" +
                    "    };\n" +
                    "    self.onInit = function () {\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector(\"#maxiot_fmcs_chart1_main\"));\n" +
                    //     "console.log(1221);"+
                    "        self.data.da.xAxisTitleList = [];\n" +
                    "        self.data.da.valueList = [];\n" +
                    "        self.data.da.xIntervals = 0;\n" +
                    "        self.data.option = {\n" +
                    "            title: {\n" +
                    "                text: '空压机设备状况 ',\n" +
                    "                left: '20',\n" +
                    "                top: '0%',\n" +
                    "                textStyle: {\n" +
                    "                    //文字颜色\n" +
                    "                    color: '#fff',\n" +
                    "                    //字体风格,'normal','italic','oblique'\n" +
                    "                    fontStyle: 'normal',\n" +
                    "                    //字体系列\n" +
                    "                    fontFamily: 'PingFangSC-Regular',\n" +
                    "                    //字体大小\n" +
                    "                    fontSize: 16\n" +
                    "                }\n" +
                    "            },\n" +
                    "            tooltip: {\n" +
                    "                trigger: 'axis',\n" +
                    "\n" +
                    "                backgroundColor: '#131725',\n" +
                    "                borderColor: '#131725',\n" +
                    "                borderRadius: 2,\n" +
                    "                borderWidth: 1,\n" +
                    "                textStyle: {\n" +
                    "                    color: '#00D4BD'\n" +
                    "                },\n" +
                    "                formatter: function (params) {\n" +
                    "                    var myDate = new Date();\n" +
                    "                    const year = myDate.getFullYear();        //获取当前年份(2位)\n" +
                    "                    const month = myDate.getMonth() + 1;    //获取完整的年份(4位,1970-????)\n" +
                    "                    const day = myDate.getDay();       //获取当前月份(0-11,0代表1月)\n" +
                    "                    const date = [year, month, day].join(\"-\");\n" +
                    "\n" +
                    "                    var res = \"<span style='color:rgba(255,255,255,0.54)'>日期 </span>\" + date + \"<br/><span style='color:rgba(255,255,255,0.54)'>時間 </span>\" + params[0].name + \"<br/><span style='color:rgba(255,255,255,0.54)'>用气量  </span>\" + params[0].value + \" m³/h\";\n" +
                    "                    return res;\n" +
                    "                }\n" +
                    "            },\n" +
                    "            legend: {\n" +
                    "                data: ['用气量'],\n" +
                    "                textStyle: {\n" +
                    "                    color: '#fff'\n" +
                    "                }\n" +
                    "            },\n" +
                    "           grid:{\n" +
                    "            left:60,\n" +
                    "           top:70,\n" +
                    "           right:50\n" +
                    "},\n" +
                    "            xAxis: [\n" +
                    "                {\n" +
                    "                    type: 'category',\n" +
                    "                    boundaryGap: false,\n" +
                    "                    data: self.data.da.xAxisTitleList,\n" +
                    "\n" +
                    "                    name: '時間 (min)',\n" +
                    "                    nameTextStyle: {\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        textAlign: 'center'\n" +
                    "                    },\n" +
                    "                    nameLocation: 'center',\n" +
                    "                    nameGap: '30',\n" +
                    "\n" +
                    "                    axisPointer: {\n" +
                    "                        type: 'line'\n" +
                    "                    },\n" +
                    "\n" +
                    "                    axisLabel: {\n" +
                    "                        interval: self.data.da.xIntervals,\n" +
                    "                        fontFamily: 'PingFangSC-Regular;',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '14',\n" +
                    "                        textAlign: 'center'\n" +
                    "                    },\n" +
                    "                    axisLine: {//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle: {\n" +
                    "                            color: 'rgba(255,255,255,0.5)'\n" +
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
                    "                    name: '用气量 (m³/h)',\n" +
                    "                    nameTextStyle: {\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: '#00D4BD'\n" +
                    "                    },\n" +
                    "                    min: 0,\n" +
                    "                    max: 10000,\n" +
                    "                    interval: 1000,\n" +
                    "                    axisLine: {//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle: {\n" +
                    "                            color: 'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel: {\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: '#00D4BD',\n" +
                    "                        lineHeight: '12'\n" +
                    "                    },\n" +
                    "                    axisTick: {\n" +
                    "                        show: false\n" +
                    "                    }\n" +
                    "\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    axisTick: {\n" +
                    "                        show: false\n" +
                    "                    },\n" +
                    "                    axisLine: {//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle: {\n" +
                    "                            color: 'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    name: '用气量',\n" +
                    "                    type: 'line',\n" +
                    "                    symbol: 'circle',\n" +
                    "                    data: self.data.da.valueList,\n" +
                    "\n" +
                    "                    itemStyle: {\n" +
                    "                        normal: {\n" +
                    "                            color: '#00D4BD',\n" +
                    "                            show: false\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    areaStyle: {\n" +
                    "                        normal: {\n" +
                    "                            color: new self.ctx.echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n" +
                    "                                offset: 0,\n" +
                    "                                color: 'rgba(0,212,189,0.40) '\n" +
                    "                            }, {\n" +
                    "                                offset: 0.85,\n" +
                    "                                color: 'rgba(11,22,35,0.00)'\n" +
                    "                            }], false),\n" +
                    "                            shadowColor: 'rgba(0,0,0,0.1)',\n" +
                    "                            shadowBlur: 10,\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        setInterval(function () {\n" +
                    "            let data = [\n" +
                    "                {\n" +
                    "                    \"v\": Math.random() * 10000,\n" +
                    "                    \"t\": Date.parse(new Date()),\n" +
                    "                    \"k\": {\"o\": \"flow\", \"l\": \"flow\"}\n" +
                    "                }\n" +
                    "            ];\n" +
                    "            self.onDataUpdated(data);\n" +
                    "        }, 1000)\n" +
                    "    };\n" +
                    "    self.addData = function (time, value) {\n" +
                    "\n" +
                    "        self.data.da.xAxisTitleList.push(time)\n" +
                    "        self.data.da.valueList.push(value);\n" +
                    "\n" +
                    "        if (self.data.da.xAxisTitleList.length > 50) {\n" +
                    "            self.data.da.xAxisTitleList.shift();\n" +
                    "            self.data.da.valueList.shift();\n" +
                    "        }\n" +
                    "        if (self.data.da.xAxisTitleList.length > 5) {\n" +
                    "            self.data.option.xAxis[0].axisLabel.interval = parseInt(self.data.da.xAxisTitleList.length / 5);\n" +
                    //"            console.log(parseInt(self.data.option.xAxis[0].axisLabel.interval));\n" +
                    "        }\n" +
                    "    };\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    //    "console.log(data) ;"+
                    "        data = [\n" +
                    "            {\n" +
                    "                \"v\": Math.random() * 10000,\n" +
                    "                \"t\": Date.parse(new Date()),\n" +
                    "                \"k\": {\"o\": \"flow\", \"l\": \"flow\"}\n" +
                    "            }\n" +
                    "        ];\n" +
                    "        if (data.length == 0) {\n" +
                    "            return;\n" +
                    "        }\n" +
                    "        const value = data[0].v;\n" +
                    "        const timestamp = data[0].t;\n" +
                    "        const date = self.parseTimeStampToDate(timestamp);\n" +
                    "        const time = date.getHours() + \":\" + date.getMinutes() + \":\" + date.getSeconds();\n" +
                    "        self.addData(time, value);\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "    };\n" +
                    "    self.onResize = function () {};\n" +
                    "    self.onDestroy = function () {};",
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
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
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
                    "templateHtml": "<div id=\"maxiot_cd_chart2_main\" style=\"width:100%;height:350px;\"></div>\n" +
                    "<div id=\"maxiot_FMCS_table_app\" style=\"margin-left:20px;margin-top:15px;\">\n" +
                    "    <div class=\"average\">6班平均值</div>\n" +
                    "    <div class=\"result\"><span>实际操作成本&nbsp;</span><span class=\"real\">{{cost_shift_real}}</span></div>\n" +
                    "    <div class=\"result\"><span>智能推算成本&nbsp;</span><span class=\"calc\">{{cost_shift_pred}}</span></div>\n" +
                    "    <div class=\"result\"><span>成本差異&nbsp;</span><span class=\"diff\">{{cost_shift_diff}}</span></div>\n" +
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
                    "controllerScript": "self.initShiftData = function(){\n" +
                    "\n" +
                    "        (self.data.da.cost_shift_pred = self.data.da.cost_shift_pred || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_real = self.data.da.cost_shift_real || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_diff = self.data.da.cost_shift_diff || []).length = 0;\n" +
                    "        (self.data.da.cost_shift_diffColumnColor = self.data.da.cost_shift_diffColumnColor || []).length = 0;\n" +
                    "        (self.data.da.shiftTitle = self.data.da.shiftTitle || []).length = 0;\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.UnitTest = function(){\n" +
                    "\n" +
                    "        setInterval( function(){\n" +
                    "\n" +
                    "            const data = [\n" +
                    "                {\n" +
                    "                    \"v\":[{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-25 20:00:00\"},{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-24 11:00:00\"},{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-24 21:00:00\"},{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-23 11:00:00\"},{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":Math.random(),\"invoke_time\":\"2018-06-23 11:00:00\"},{\"cost_shift_pred\":Math.random() * 70000,\"cost_shift_real\":Math.random() * 70000,\"cost_shift_diff\":-Math.random(),\"invoke_time\":\"2018-06-22 11:00:00\"}],\n" +
                    "                    \"t\":1528358866224,\n" +
                    "                    \"k\":{\"o\":\"shift\",\"l\":\"shift\"}\n" +
                    "                }\n" +
                    "            ];\n" +
                    "\n" +
                    "            self.onDataUpdated(data);\n" +
                    "\n" +
                    "        },1000)\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "\n" +
                    "        self.initShiftData();\n" +
                    "\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart2_main'));\n" +
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
                    "                        }\n" +
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
                    "                    data:self.data.da.cost_shift_pred,\n" +
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
                    "                    data:self.data.da.cost_shift_real,\n" +
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
                    "\n" +
                    "        // var data = '[{\"v\":\"[58000, 59000, 60000, 61000, 61500,60000]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_pred\",\"l\":\"cost_shift_pred\"}},{\"v\":\"[57000, 57200, 59000, 60000, 60800, 61000]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_real\",\"l\":\"cost_shift_real\"}},{\"v\":\"[0.3, 0.2, 0.1, 0.2, 0.3, -0.3]\",\"t\":1528358866224,\"k\":{\"o\":\"cost_shift_diff\",\"l\":\"cost_shift_diff\"}}]';\n" +
                    "        self.UnitTest();\n" +
                    "    }\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "\n" +
                    "        self.initShiftData();\n" +
                    "\n" +
                    "        const badColor = \"#E04F23\";\n" +
                    "        const goodColor = \"#71D045\";\n" +
                    "\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "            if(obj.k.o == \"shift\"){\n" +
                    "                var shifts = obj.v;\n" +
                    "                shifts.forEach(function(objShift,i){\n" +
                    "\n" +
                    "                    self.data.da.cost_shift_pred.push(objShift.cost_shift_pred);\n" +
                    "                    self.data.da.cost_shift_real.push(objShift.cost_shift_real);\n" +
                    "                    self.data.da.cost_shift_diff.push(objShift.cost_shift_diff);\n" +
                    "\n" +
                    "                    if(objShift.cost_shift_diff > 0){\n" +
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
                    "        console.log(self.data.da);\n" +
                    "//\n" +
                    "//        self.data.da.cost_shift_pred= eval('('+self.data.da.cost_shift_pred+')');\n" +
                    "//        self.data.da.cost_shift_real= eval('('+self.data.da.cost_shift_real+')');\n" +
                    "//        self.data.da.cost_shift_diff= eval('('+self.data.da.cost_shift_diff+')');\n" +
                    "//        self.data.option.series[0].data = self.data.da.cost_shift_pred;\n" +
                    "//        self.data.option.series[1].data = self.data.da.cost_shift_real;\n" +
                    "//        self.data.option.series[2].data = self.data.da.cost_shift_diff;\n" +
                    "\n" +
                    "        self.data.cost_shift_pred_avg=self.avg(self.data.da.cost_shift_pred);\n" +
                    "        self.data.cost_shift_real_avg=self.avg(self.data.da.cost_shift_real);\n" +
                    "        self.data.cost_shift_diff_avg=self.avg(self.data.da.cost_shift_diff);\n" +
                    "\n" +
                    "\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
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
                    "        return avg/dataIntArr.length;\n" +
                    "    };",
                    "defaultData": {
                        "da": {},
                        "option": {},
                        "myChart": {},
                        "cost_shift_real":59846,
                        "cost_shift_pred":59846,
                        "cost_shift_diff":-1

                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": '50%',
                "y": 460
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
                        "deviceId" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a",
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
