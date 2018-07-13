const dashboard_fmcs2 = {
    "id" : 1,
    "title" : "fmcs2 报表",
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
                    "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                    "edgeClientName" : "C-edgeclient",
                    "deviceList" : [
                        {
                            "id" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                            "label" : "devicelabel-1",
                            "name" : "restApi",
                            "keys" : [ "CDA_schedule", "Q_baseline", "Q_level_pred", "CDA_switch", "CDA_arrange"
                            ]
                        },
                        {
                            "id": "316a75eb-e139-4787-ba3b-7910436f8457",
                            "label" : "devicelabel-2",
                            "name" : "FMCS_SQLServer",
                            "keys" : [
                                "CDA_schedule_current", "efficiency", "cda_power_per_minute", "Q_real_level", "request_volume"
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
                "height" : 880,
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
            "type": "html",
            "version": "1.0.0",
            "templateId": "5",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f5",
                "version": "1.0.0",
                "name": "空压机启停优化排程",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_fmcs_chart3_main\" style=\"width: 100%;height:850px;\"></div>",
                    "templateCss": " body{\n" +
                    "            background-color: #262d45;\n" +
                    "        }",
                    "controllerScript": "    self.data = {\n" +
                    "        da: {},\n" +
                    "        option: {},\n" +
                    "        myChart: {},\n" +
                    "        data: [],\n" +
                    "        data1: [],\n" +
                    "        data2: [],\n" +
                    "        types: [],\n" +
                    "        n: 0,\n" +
                    "        olddata: [],\n" +
                    "        oldtime: 1529708400000,\n" +
                    "        endtime: 0\n" +
                    "    };\n" +
                    "\n" +
                    "    self.renderItem = function (params, api) {\n" +
                    "        var categoryIndex = api.value(0);\n" +
                    "        var start = api.coord([api.value(1), categoryIndex]);\n" +
                    "        var end = api.coord([api.value(2), categoryIndex]);\n" +
                    "        var height = api.size([0, 1])[1] * 0.3;\n" +
                    "\n" +
                    "        return {\n" +
                    "            type: 'rect',\n" +
                    "            shape: self.ctx.echarts.graphic.clipRectByRect({\n" +
                    "                x: start[0] + 1,\n" +
                    "                y: start[1] - 30,\n" +
                    "                width: end[0] - start[0] + 0.3,\n" +
                    "                height: height\n" +
                    "            }, {\n" +
                    "                x: params.coordSys.x,\n" +
                    "                y: params.coordSys.y,\n" +
                    "                width: params.coordSys.width,\n" +
                    "                height: params.coordSys.height\n" +
                    "            }),\n" +
                    "            style: api.style()\n" +
                    "        };\n" +
                    "    };\n" +
                    "    self.renderItem1 = function (params, api) {\n" +
                    "        var categoryIndex = api.value(0);\n" +
                    "        var start = api.coord([api.value(1), categoryIndex]);\n" +
                    "        var end = api.coord([api.value(2), categoryIndex]);\n" +
                    "        var height = api.size([0, 1])[1] * 0.3;\n" +
                    "\n" +
                    "        return {\n" +
                    "            type: 'rect',\n" +
                    "            shape: self.ctx.echarts.graphic.clipRectByRect({\n" +
                    "                x: start[0] + 1,\n" +
                    "                y: start[1] - 8,\n" +
                    "                width: end[0] - start[0] + 0.3,\n" +
                    "                height: height\n" +
                    "            }, {\n" +
                    "                x: params.coordSys.x,\n" +
                    "                y: params.coordSys.y,\n" +
                    "                width: params.coordSys.width,\n" +
                    "                height: params.coordSys.height\n" +
                    "            }),\n" +
                    "            style: api.style()\n" +
                    "        };\n" +
                    "    };\n" +
                    "    self.renderItem2 = function (params, api) {\n" +
                    "        var categoryIndex = api.value(0);\n" +
                    "        var start = api.coord([api.value(1), categoryIndex]);\n" +
                    "        var end = api.coord([api.value(2), categoryIndex]);\n" +
                    "        var height = 700;\n" +
                    "\n" +
                    "        return {\n" +
                    "            type: 'rect',\n" +
                    "            shape: self.ctx.echarts.graphic.clipRectByRect({\n" +
                    "                x: start[0] + 1,\n" +
                    "                y: start[1] - 660,\n" +
                    "                width: 1,\n" +
                    "                height: 700\n" +
                    "            }, {\n" +
                    "                x: params.coordSys.x,\n" +
                    "                y: params.coordSys.y,\n" +
                    "                width: params.coordSys.width,\n" +
                    "                height: params.coordSys.height\n" +
                    "            }),\n" +
                    "            style: api.style()\n" +
                    "        };\n" +
                    "    };\n" +
                    "\n" +
                    "    self.findPreAction = function (starttime, endtime, n) {\n" +
                    "        // var arr = self.data.data1.filter(e => e.value[0] == n) ;\n" +
                    "        console.log(starttime+\":\"+endtime);\n" +
                    "        var arr=self.data.data1.filter(e=>e.value[0]==n);\n" +
                    "        for (var i = 0; i < arr.length; i++) {\n" +
                    "            if (arr[i].value[1] <= starttime && arr[i].value[2] >= endtime) {\n" +
                    "                return arr[i].name;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        return \"\";\n" +
                    "    };\n" +
                    "\n" +
                    "    self.findRealAction = function (starttime, endtime, n) {\n" +
                    "        console.log(starttime+\":\"+endtime);\n" +
                    "        var arr=self.data.data.filter(e=>e.value[0]==n);\n" +
                    "        for (var i = 0; i < arr.length; i++) {\n" +
                    "            if (arr[i].value[1] >= starttime && arr[i].value[2] <= endtime) {\n" +
                    "                return arr[i].name;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        return \"\";\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getDatestr = function (date) {\n" +
                    "        var date = new Date(date);\n" +
                    "        Y = date.getFullYear() + '-';\n" +
                    "        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';\n" +
                    "        D = date.getDate() + ' ';\n" +
                    "        h = date.getHours() + ':';\n" +
                    "        m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();\n" +
                    "\n" +
                    "        return Y + M + D + h + m;\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getShift = function(){\n" +
                    "\n" +
                    "        var date = new Date();\n" +
                    "        if(date.getHours() > 7 && date.getHours() < 19){\n" +
                    "            return 'A';\n" +
                    "        }\n" +
                    "        else {\n" +
                    "            return 'B';\n" +
                    "        }\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function () {\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_fmcs_chart3_main'));\n" +
                    "\n" +
                    "        var startTime = (new Date()).valueOf(); // 2018/5/9 11:16:31\n" +
                    "\n" +
                    "        var categories = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10'];\n" +
                    "        self.data.types = [{\n" +
                    "            name: '预计开启',\n" +
                    "            color: '#00b2a5',\n" +
                    "            icon: 'image://static/images/fmcs/radial/pink/on.svg'\n" +
                    "        }, {\n" +
                    "            name: '实际开启',\n" +
                    "            color: '#c665ad',\n" +
                    "            icon: 'image://static/images/fmcs/radial/green/on.svg'\n" +
                    "        }, {\n" +
                    "            name: '机台关闭',\n" +
                    "            color: '#c665ad',\n" +
                    "            icon: 'image://./static/images/fmcs/greysquare.svg'\n" +
                    "        }\n" +
                    "        ];\n" +
                    "        for(var i=0;i<10;i++){\n" +
                    "            self.data.data.push({\n" +
                    "                name: '未开始',\n" +
                    "                value: [i, startTime, self.data.endtime, 3600000],\n" +
                    "                itemStyle: {normal: {color: 'rgba(60,66,87,1)'}}\n" +
                    "            });\n" +
                    "        }\n" +
                    "\n" +
                    "        self.data.data2 = [\n" +
                    "            {\n" +
                    "                name: '开启',\n" +
                    "                value: [0, 1529708400000 + 3600000 * 4, 1529708400000 + 3600000 * 4, 3600000],\n" +
                    "                itemStyle: {normal: {color: '#00b2a5'}}\n" +
                    "            }\n" +
                    "        ];\n" +
                    "\n" +
                    "        self.data.option = {\n" +
                    "            tooltip: {\n" +
                    "                formatter: function (params) {\n" +
                    "\n" +
                    "                    if (params.name == \"未开始\") {\n" +
                    "                        return \"\";\n" +
                    "                    }\n" +
                    "                    var datetime = self.getDatestr(params.value[2]);\n" +
                    "\n" +
                    "                    var date = datetime.substr(0, 10);\n" +
                    "                    var time = datetime.substr(10);\n" +
                    "                    var seriesIndex = params.seriesIndex;\n" +
                    "                    var precation = \"\", realaction = \"\";\n" +
                    "\n" +
                    "                    if (seriesIndex == 0) {\n" +
                    "                        realaction = params.name;\n" +
                    "                        precation = self.findPreAction(params.value[1], params.value[2], params.value[0]);\n" +
                    "                    }\n" +
                    "                    else if (seriesIndex == 1) {\n" +
                    "                        precation = params.name;\n" +
                    "                        realaction = self.findRealAction(params.value[1], params.value[2], params.value[0]);\n" +
                    "                    }\n" +
                    "\n" +
                    "                    return \"日期&nbsp;&nbsp;<span style='color:#04c1b0'>\" + date + \"</span><br/>时间&nbsp;&nbsp;<span style='color:#04c1b0'>\" + time + \"</span><br/>机台&nbsp;&nbsp;<span style='color:#04c1b0'>\" + (params.value[0] + 1) + \"#</span><br/>预计动作&nbsp;&nbsp;<span style='color:#04c1b0'>\" + precation + \"</span><br/>实际动作&nbsp;&nbsp;<span style='color:#04c1b0'>\" + realaction + \"</span>\";\n" +
                    "                },\n" +
                    "                textStyle: {\n" +
                    "                    color: 'rgba(255,255,255,0.5)'\n" +
                    "                },\n" +
                    "                backgroundColor: 'rgba(0,0,0,0.8)'\n" +
                    "\n" +
                    "            },\n" +
                    "            title: [{\n" +
                    "                text: '空压机起停优化排程',\n" +
                    "                left: 30,\n" +
                    "                top: '0%',\n" +
                    "                textStyle: {\n" +
                    "                    color: 'rgba(255,255,255,1)',\n" +
                    "                    fontStyle: 'normal',\n" +
                    "                    fontFamily: 'MicrosoftYaHei',\n" +
                    "                    fontSize: 16\n" +
                    "                },\n" +
                    "                subtext: '早班7:00 - 19:00'\n" +
                    "            }, {\n" +
                    "                text: '#1 空压机 400hp    #2 空压机  900hp    #3-10  空压机  1500hp',\n" +
                    "                right: 20,\n" +
                    "                top: 58,\n" +
                    "                textStyle: {\n" +
                    "                    color: 'rgba(255,255,255,0.54)',\n" +
                    "                    fontStyle: 'normal',\n" +
                    "                    fontFamily: 'sans-serif',\n" +
                    "                    fontSize: 12\n" +
                    "                }\n" +
                    "            }],\n" +
                    "            legend: {\n" +
                    "                data: self.data.types,\n" +
                    "                top: 56,\n" +
                    "                right: 400,\n" +
                    "                itemWidth:15,\n" +
                    "                itemHeight:15,\n" +
                    "                selected: {\n" +
                    "                    '预计开启': true,\n" +
                    "                    '实际开启': true,\n" +
                    "                    '机台关闭': false\n" +
                    "                },\n" +
                    "                textStyle: {\n" +
                    "                    color: 'rgba(255,255,255,0.8)',\n" +
                    "                    fontSize:12\n" +
                    "                }\n" +
                    "            },\n" +
                    "            grid: {\n" +
                    "                height: 700,\n" +
                    "                top: 90,\n" +
                    "                left:65,\n" +
                    "                right:50\n" +
                    "            },\n" +
                    "            xAxis: {\n" +
                    "                type: 'time',\n" +
                    "                name:'時間 (min)',\n" +
                    "                nameTextStyle:{\n" +
                    "                    fontFamily: 'MicrosoftYaHei',\n" +
                    "                    fontSize: '12',\n" +
                    "                    color: 'rgba(255,255,255,0.87)',\n" +
                    "                    textAlign:'center',\n" +
                    "                    letterSpacing:0.07,\n" +
                    "                    lineHeight:16\n" +
                    "                },\n" +
                    "                nameLocation:'center',\n" +
                    "                nameGap:'30',\n" +
                    "                min:function(){\n" +
                    "\n" +
                    "                    var date = new Date();\n" +
                    "                    var newDate;\n" +
                    "                    if(self.getShift() == 'A'){\n" +
                    "                        newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),7,0,0);\n" +
                    "                    }\n" +
                    "                    else{\n" +
                    "                        newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),19,0,0);\n" +
                    "                    }\n" +
                    "                    return Date.parse(newDate);\n" +
                    "\n" +
                    "                },\n" +
                    "                max:function(){\n" +
                    "\n" +
                    "                    var date = new Date();\n" +
                    "                    var newDate;\n" +
                    "                    if(self.getShift() == 'A'){\n" +
                    "                        newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),19,0,0);\n" +
                    "                    }\n" +
                    "                    else{\n" +
                    "\n" +
                    "                        date.setDate(date.getDate() + 1);\n" +
                    "                        newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),7,0,0);\n" +
                    "\n" +
                    "                    }\n" +
                    "                    return Date.parse(newDate);\n" +
                    "                },\n" +
                    "                scale: false,\n" +
                    "                splitNumber: 12,\n" +
                    "                axisLabel: {\n" +
                    "                    formatter: function (val) {\n" +
                    "                        var date = new Date(val);\n" +
                    "                        return date.getHours() + \":\" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());\n" +
                    "                    },\n" +
                    "                    color: 'rgba(255,255,255,0.5)'\n" +
                    "                },\n" +
                    "                splitLine: {\n" +
                    "                    show: false\n" +
                    "                },\n" +
                    "                axisLine: {\n" +
                    "                    lineStyle: {\n" +
                    "                        color: 'rgba(255,255,255,0.5)'\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                axisTick: {\n" +
                    "                    inside: true\n" +
                    "                }\n" +
                    "            },\n" +
                    "            yAxis: [\n" +
                    "                {\n" +
                    "                    data: categories,\n" +
                    "                    axisLabel: {\n" +
                    "                        color: 'rgba(255,255,255,0.5)'\n" +
                    "                    },\n" +
                    "                    axisLine: {\n" +
                    "                        lineStyle: {\n" +
                    "                            color: 'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisTick: {\n" +
                    "                        show: false\n" +
                    "                    },\n" +
                    "                    name: '空压机编号'\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    data: categories,\n" +
                    "                    axisLabel: {\n" +
                    "                        color: 'rgba(255,255,255,0.5)'\n" +
                    "                    },\n" +
                    "                    axisLine: {\n" +
                    "                        lineStyle: {\n" +
                    "                            color: 'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisTick: {\n" +
                    "                        show: false\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    type: 'custom',\n" +
                    "                    name: self.data.types[1].name,\n" +
                    "                    color: '#00b2a5',\n" +
                    "                    renderItem: self.renderItem,\n" +
                    "                    itemStyle: {\n" +
                    "                        normal: {\n" +
                    "                            opacity: 0.8\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    encode: {\n" +
                    "                        x: [1, 2, 3],\n" +
                    "                        y: 0,\n" +
                    "                    },\n" +
                    "                    z: 1,\n" +
                    "                    data: self.data.data\n" +
                    "\n" +
                    "                }\n" +
                    "                ,\n" +
                    "                {\n" +
                    "                    type: 'custom',\n" +
                    "                    name: self.data.types[0].name,\n" +
                    "                    color: '#c665ad',\n" +
                    "                    renderItem: self.renderItem1,\n" +
                    "                    itemStyle: {\n" +
                    "                        normal: {\n" +
                    "                            opacity: 0.8\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    encode: {\n" +
                    "                        x: [1, 2, 3],\n" +
                    "                        y: 0\n" +
                    "                    },\n" +
                    "                    z: 1,\n" +
                    "                    data: self.data.data1\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    type: 'custom',\n" +
                    "                    renderItem: self.renderItem2,\n" +
                    "                    itemStyle: {\n" +
                    "                        normal: {\n" +
                    "                            opacity: 0.8\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    encode: {\n" +
                    "                        x: [1, 2, 3],\n" +
                    "                        y: 0\n" +
                    "                    },\n" +
                    "                    z: 10,\n" +
                    "                    data: self.data.data2\n" +
                    "                },\n" +
                    "                {name: self.data.types[2].name, type: 'bar', data: [], color: '#1a2031'},\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "        //       self.data.endtime = 1529708400000 + 3600000 * 12;\n" +
                    "//        self.data.si = setInterval(function () {\n" +
                    "//            var time = self.getrandtime();\n" +
                    "//            if (new Date(time).getHours() == 19 && new Date(time).getMinutes() == 0) {\n" +
                    "//                return;\n" +
                    "//            }\n" +
                    "//            var data = [{\n" +
                    "//                \"v\": '[0,1,1,0,1,1,1,1,0,1]',\n" +
                    "//                \"t\": time,\n" +
                    "//                \"k\": {\"o\": \"CDA_schedule_current\", \"l\": \"CDA_schedule_current\"}\n" +
                    "//            },{\n" +
                    "//                \"v\": '{\"order\":0,\"scheduleData\":\"[0,1,1,0,1,1,1,1,0,1]\"}',\n" +
                    "//                \"t\": time,\n" +
                    "//                \"k\": {\"o\": \"CDA_schedule\", \"l\": \"CDA_schedule\"}\n" +
                    "//            }];\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//        }, 2000);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.setData = function (newdata, time) {\n" +
                    "        console.log(\"newdata\");\n" +
                    "        console.log(newdata);\n" +
                    "        for (var i = 0; i < newdata.length; i++) {\n" +
                    "            if (newdata[i] == 0) {\n" +
                    "                self.data.data.push({\n" +
                    "                    name: '关闭',\n" +
                    "                    value: [i, self.data.oldtime, time, 600000],\n" +
                    "                    itemStyle: {normal: {color: '#1a2031'}}\n" +
                    "                });\n" +
                    "            }\n" +
                    "            else {\n" +
                    "                self.data.data.push({\n" +
                    "                    name: '开启',\n" +
                    "                    value: [i, self.data.oldtime, time, 600000],\n" +
                    "                    itemStyle: {normal: {color: '#00b2a5'}}\n" +
                    "                });\n" +
                    "            }\n" +
                    "            if (self.data.data.filter(e=>e.name == \"未开始\" && e.value[0] == i).length > 0)\n" +
                    "            {\n" +
                    "                self.data.data.slice(self.data.data.filter(e=>e.name == \"未开始\" && e.value[0] == i));\n" +
                    "\n" +
                    "                self.data.data.push({\n" +
                    "                    name: '未开始',\n" +
                    "                    value: [i, time, self.data.endtime, 3600000],\n" +
                    "                    itemStyle: {normal: {color: 'rgba(60,66,87,1)'}}\n" +
                    "                });\n" +
                    "            }\n" +
                    "        else\n" +
                    "            {\n" +
                    "                self.data.data.push({\n" +
                    "                    name: '未开始',\n" +
                    "                    value: [i, time, self.data.endtime, 3600000],\n" +
                    "                    itemStyle: {normal: {color: 'rgba(60,66,87,1)'}}\n" +
                    "                });\n" +
                    "            }\n" +
                    "        }\n" +
                    "        for (var i = 0; i < self.data.data.length; i++) {\n" +
                    "            if (self.data.data[i].name == \"未开始\") {\n" +
                    "                self.data.data[i].value[1] = time;\n" +
                    "                self.data.data[i].value[2] =  self.data.endtime;\n" +
                    "            }\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.setData1 = function (data, time,order) {\n" +
                    "        var  startdate,enddate;\n" +
                    "\n" +
                    "        var newtime=self.getDatestr(time).substr(0,10);\n" +
                    "\n" +
                    "        if(order==1){\n" +
                    "            startdate=new Date(newtime+\" 07:00:00\");\n" +
                    "        }\n" +
                    "        else{\n" +
                    "            startdate=new Date(newtime+\" 19:00:00\");\n" +
                    "        }\n" +
                    "        console.log(startdate);\n" +
                    "        self.data.data1=[];\n" +
                    "        for (var i = 0; i < data.length; i++) {\n" +
                    "            if(i==720){\n" +
                    "                break;\n" +
                    "            }\n" +
                    "            enddate = new Date(startdate.valueOf()+1*60*1000);\n" +
                    "\n" +
                    "            for(var j=0;j<data[i].length;j++){\n" +
                    "                if(data[i][j]==0.0){\n" +
                    "\n" +
                    "                    self.data.data1.push({name: '关闭', value: [j, startdate.valueOf(), enddate.valueOf(), 3600000], itemStyle: {normal: {color: '#1a2031'}}});\n" +
                    "                }\n" +
                    "                else{\n" +
                    "                    self.data.data1.push({name: '开启', value: [j, startdate.valueOf(), enddate.valueOf(), 3600000], itemStyle: {normal: {color: '#c665ad'}}});\n" +
                    "                }\n" +
                    "            }\n" +
                    "            startdate=enddate;\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function (data) {\n" +
                    "        console.log(\"chart3:\");\n" +
                    "        console.log(data);\n" +
                    "        self.ctx.$.each(data, function (i, obj) {\n" +
                    "            self.data.da[obj.k.o] = obj.v;\n" +
                    "            self.data.da.t = obj.t;\n" +
                    "        });\n" +
                    "        self.data.da.CDA_schedule=JSON.parse(self.data.da.CDA_schedule);\n" +
                    "        self.data.endtime = self.getEndtime(self.data.da.t);\n" +
                    "        console.log( self.data.endtime);\n" +
                    "        if(self.data.da.CDA_schedule_current!=undefined){\n" +
                    "            console.log(self.data.da.CDA_schedule_current);\n" +
                    "            self.data.da.CDA_schedule_current=JSON.parse(self.data.da.CDA_schedule_current);\n" +
                    "            console.log(self.data.da.CDA_schedule_current.length);\n" +
                    "            self.setData(self.data.da.CDA_schedule_current, self.data.da.t);\n" +
                    "        }\n" +
                    "\n" +
                    "        if(self.data.data1.length==0){\n" +
                    "            if(self.data.da.CDA_schedule.scheduleData!=undefined){\n" +
                    "                self.setData1(self.data.da.CDA_schedule.scheduleData.analysis_data.CDA_schedule,self.data.da.t,self.data.da.CDA_schedule.order);\n" +
                    "                self.data.option.series[1].data = self.data.data1;\n" +
                    "            }\n" +
                    "\n" +
                    "        }\n" +
                    "        // self.setData1(self.createData1(),self.data.da.t,self.data.da.CDA_schedule.order);\n" +
                    "        console.log(\"data:\");\n" +
                    "        console.log(self.data.data);\n" +
                    "        console.log(\"data1:\");\n" +
                    "        console.log(self.data);\n" +
                    "\n" +
                    "        self.data.oldtime = self.data.da.t;\n" +
                    "        self.data.option.series[0].data = self.data.data;\n" +
                    "        // self.data.option.series[1].data = self.data.data1;\n" +
                    "        self.data.option.series[2].data[0].value[1] = self.data.da.t;\n" +
                    "        self.data.option.series[2].data[0].value[2] = self.data.da.t;\n" +
                    "        self.data.myChart.clear();\n" +
                    "        self.data.myChart.setOption(self.data.option, true);\n" +
                    "\n" +
                    "//        if (new Date(self.data.da.t).getHours() >= 19) {\n" +
                    "//            clearInterval(self.data.si);\n" +
                    "//            console.log(\"clear\");\n" +
                    "//            return;\n" +
                    "//        }\n" +
                    "    };\n" +
                    "    self.getEndtime=function(timestamp){\n" +
                    "        var date=new Date(timestamp);\n" +
                    "        console.log(date.getHours());\n" +
                    "        if(date.getHours()>=7 && date.getHours()<19){\n" +
                    "            var newdate=new Date(date.getFullYear(),date.getMonth(),date.getDate(),19,0,0);\n" +
                    "            console.log(newdate);\n" +
                    "            return newdate.valueOf();\n" +
                    "        }\n" +
                    "        else{\n" +
                    "            if(date.getHours()<=23){\n" +
                    "                var newdate=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1,7,0,0);\n" +
                    "                console.log(newdate);\n" +
                    "                return newdate.valueOf();\n" +
                    "            }\n" +
                    "            else{\n" +
                    "                var newdate=new Date(date.getFullYear(),date.getMonth(),date.getDate(),7,0,0);\n" +
                    "                console.log(newdate);\n" +
                    "                return newdate.valueOf();\n" +
                    "            }\n" +
                    "\n" +
                    "        }\n" +
                    "    };\n" +
                    "    self.onResize = function () {\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "    self.onDestroy = function () {\n" +
                    "\n" +
                    "    };\n" +
                    "    self.onPendding = function () {\n" +
                    "\n" +
                    "    };",
                    "defaultData": {
                        "da": {},
                        "option": {},
                        "myChart": {},
                        "data":[],
                        "data1":[],
                        "data2":[],
                        "types":[],
                        "n":0,
                        "olddata":[],
                        "oldtime":1529708400000,
                        "endtime":0
                    },
                    "dataSources": []
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 0,
                "y": 20
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "基本信息",
            "zIndex": 1,
            "styles": {
                "width": "calc(50% - 45px)",
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
                        "label" : "CDA_schedule",
                        "key" : "CDA_schedule",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_schedule_current",
                        "key" : "CDA_schedule_current",
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
                "name": "空压机能效分析",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_fmcs_chart4_app\" style=\"width:100%;height:400px;\"></div>",
                    "templateCss": " body{\n" +
                    "            background-color: #262d45;\n" +
                    "        }",
                    "controllerScript": "  self.data = {\n" +
                    "        da:{},\n" +
                    "        option:{},\n" +
                    "        myChart:{}\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onInit = function(){\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_fmcs_chart4_app'));\n" +
                    "        self.data.option = {\n" +
                    "            title:{\n" +
                    "                text:'空压机能效分析 ',\n" +
                    "                left:30,\n" +
                    "                top:'0%',\n" +
                    "                textStyle:{\n" +
                    "                    color:'#fff',\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    fontFamily:'MicrosoftYaHei',\n" +
                    "                    fontSize:16,\n" +
                    "                    letterSpacing:0.08\n" +
                    "                },\n" +
                    "                subtext:'16:00-17:00',\n" +
                    "                subtextStyle:{\n" +
                    "                    color:'rgba(255,255,255,0.54)',\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    fontFamily:'PingFangSC-Regular',\n" +
                    "                    fontSize:12,\n" +
                    "                    letterSpacing:0.06,\n" +
                    "                    lineHeight:12,\n" +
                    "                    marginBottom:20\n" +
                    "                }\n" +
                    "            },\n" +
                    "            grid:{\n" +
                    "                top:100,\n" +
                    "                left:70,\n" +
                    "                right:70\n" +
                    "            },\n" +
                    "            toolbox: {\n" +
                    "                feature: {\n" +
                    "                    saveAsImage: {show: true}\n" +
                    "                }\n" +
                    "            },\n" +
                    "            color:['#00D4BD','#EB73C7'],\n" +
                    "            legend: {\n" +
                    "                data:['平均压力','平均耗电量'],\n" +
                    "                icon:'bar',\n" +
                    "                itemWidth:15,\n" +
                    "                top:50,\n" +
                    "                textStyle:{\n" +
                    "                    color:'rgba(255,255,255,0.54)',\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    fontFamily:'MicrosoftYaHei',\n" +
                    "                    fontSize:12,\n" +
                    "                    letterSpacing:-0.07,\n" +
                    "                    lineHeight:11\n" +
                    "                }\n" +
                    "            },\n" +
                    "            tooltip:{\n" +
                    "                show:true,\n" +
                    "                trigger:'axis'\n" +
                    "            },\n" +
                    "            xAxis: [\n" +
                    "                {\n" +
                    "                    type: 'category',\n" +
                    "                    boundaryGap:true,\n" +
                    "                    name:'空压机编号',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        textAlign:'center'\n" +
                    "                    },\n" +
                    "                    nameLocation:'center',\n" +
                    "                    nameGap:'30',\n" +
                    "                    data:[1,2,3,4,5,6,7,8,9,10],\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'NotoSans;',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '12',\n" +
                    "                        textAlign:'center',\n" +
                    "                        formatter: function (val) {\n" +
                    "                            return \"#\"+val;\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLine:{\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        alignWithLabel:false,\n" +
                    "                        inside:true\n" +
                    "                    },\n" +
                    "                    splitLine: {\n" +
                    "                        show: false\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            yAxis: [\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    name:'压力 (psi)',\n" +
                    "                    nameGap:'30',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(0,212,189,0.8)',\n" +
                    "                        lineHeight:12,\n" +
                    "                    },\n" +
                    "                    min: 0,\n" +
                    "                    max: 10.0,\n" +
                    "                    interval:1.0 ,\n" +
                    "                    axisLine:{\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(0,212,189,0.8)',\n" +
                    "                        lineHeight: '12',\n" +
                    "                        textAlign:'right'\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    name:'耗电量 (KW)',\n" +
                    "                    nameGap:'30',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(235,115,199,0.7)',\n" +
                    "                        textAlign:'right',\n" +
                    "                        lineHeight:12\n" +
                    "                    },\n" +
                    "                    min: 0,\n" +
                    "                    max: 20000,\n" +
                    "                    interval:2000,\n" +
                    "                    axisLine:{\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        fontFamily: 'NotoSans',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(235,115,199,0.7)',\n" +
                    "                        lineHeight: '12',\n" +
                    "                        textAlign:'right'\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    name:'平均压力',\n" +
                    "                    yAxisIndex: '0',\n" +
                    "                    type:'bar',\n" +
                    "                    barGap:'70%',\n" +
                    "                    barWidth:12,\n" +
                    "                    data:[],\n" +
                    "                    itemStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'rgba(0,212,189,0.8)',\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'平均耗电量',\n" +
                    "                    yAxisIndex: '1',\n" +
                    "                    type:'bar',\n" +
                    "                    barWidth:12,\n" +
                    "                    data:[],\n" +
                    "                    itemStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'rgba(235,115,199,0.7)',\n" +
                    "                            show:false\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "//        var data ='[{ \"v\":\"[5.6,7.3,7.8,9.0,8.7,8.5,8.0,8.4,9.0,8.8]\", \"t\":1528358866224, \"k\":{\"o\":\"pressure\",\"l\":\"pressure\"} }, { \"v\":\"[12500,15500,17500,18400,18100,19000,17500,18800,19000,18000]\", \"t\":1528358866224, \"k\":{\"o\":\"cda_power_per_minute\",\"l\":\"cda_power_per_minute\"}}]';\n" +
                    "//        self.onDataUpdated(data);\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "        console.log(\"chart4:\");\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "            eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\");\n" +
                    "        });\n" +
                    "        console.log(self.data.da);\n" +
                    "        self.data.da.efficiency= eval('('+self.data.da.efficiency+')');\n" +
                    "        var pressure=[],cda_power_per_minute=[];\n" +
                    "        self.ctx.$.each(self.data.da.efficiency,function(i,obj){\n" +
                    "            pressure.push([obj.cda,obj.pressureavg]);\n" +
                    "            cda_power_per_minute.push([obj.cda,obj.poweravg]);\n" +
                    "        });\n" +
                    "        self.data.option.series[0].data = pressure;\n" +
                    "        self.data.option.series[1].data = cda_power_per_minute;\n" +
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
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "efficiency",
                        "key" : "efficiency",
                        "valueFunc" : "",
                    }
                ]
            }
            ]

        },
        {
            "type": "html",
            "version": "1.0.0",
            "templateId": "5",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f5",
                "version": "1.0.0",
                "name": "空压机用气量分析",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=\"maxiot_cd_chart5_main\" style=\"width:100%;height:450px;\"></div>",
                    "templateCss": " body{\n" +
                    "            background-color: #262d45;\n" +
                    "        }",
                    "controllerScript": "    self.data = {\n" +
                    "        da:{},\n" +
                    "        option:{},\n" +
                    "        myChart:{},\n" +
                    "        n:0,\n" +
                    "        AShiftText:'早班 7:00-19:00',\n" +
                    "        BShiftText:'晚班 19:00-7:00',\n" +
                    "        Q_real_level:[],\n" +
                    "        request_volume:[],\n" +
                    "        Q_baseline:[],\n" +
                    "        Q_level_pred:[],\n" +
                    "        Q_real_pred:[],\n" +
                    "        CDA_switch:[],\n" +
                    "        CDA_arrange:[],\n" +
                    "        xAxisData:[]\n" +
                    "        //1529896920000\n" +
                    "    };\n" +
                    "    self.onInit = function(){\n" +
                    "        self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart5_main'));\n" +
                    "        self.data.AShiftText='早班 7:00-19:00';\n" +
                    "        self.data.BShiftText='晚班 19:00-7:00';\n" +
                    "\n" +
                    "        self.data.option = {\n" +
                    "            title:{\n" +
                    "                text:'空压机用气量分析',\n" +
                    "                left:20,\n" +
                    "                top:'0%',\n" +
                    "                textStyle:{\n" +
                    "                    //文字颜色\n" +
                    "                    color:'#fff',\n" +
                    "                    //字体风格,'normal','italic','oblique'\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    //字体系列\n" +
                    "                    fontFamily:'MicrosoftYaHei',\n" +
                    "                    //字体大小\n" +
                    "                    fontSize:16,\n" +
                    "                    //字符间距\n" +
                    "                    letterSpacing:0.08\n" +
                    "                },\n" +
                    "                subtext:'早班 7:00-19:00',\n" +
                    "                subtextStyle:{\n" +
                    "                    //文字颜色\n" +
                    "                    color:'rgba(255,255,255,0.54)',\n" +
                    "                    //字体风格,'normal','italic','oblique'\n" +
                    "                    fontStyle:'normal',\n" +
                    "                    //字体系列\n" +
                    "                    fontFamily:'PingFangSC-Regular',\n" +
                    "                    //字体大小\n" +
                    "                    fontSize:12,\n" +
                    "                    //字符间距\n" +
                    "                    letterSpacing:0.06,\n" +
                    "                    lineHeight:12,\n" +
                    "                    marginBottom:20\n" +
                    "                }\n" +
                    "            },\n" +
                    "            grid:{\n" +
                    "                top:110,\n" +
                    "                left:70,\n" +
                    "                right:50\n" +
                    "            },\n" +
                    "            tooltip:{\n" +
                    "                show:true,\n" +
                    "\n" +
                    "            },\n" +
                    "            toolbox:{\n" +
                    "                show:true,\n" +
                    "                feature:{\n" +
                    "                    saveAsImage:{show:true}\n" +
                    "                }\n" +
                    "            },\n" +
                    "            color:['#00D4BD','#00D4BD','#C9FF91','#EB73C7','#EAB62A'],\n" +
                    "            legend: {\n" +
                    "                data:[\n" +
                    "                    {\n" +
                    "                        name:'实际值'\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:'基线',\n" +
                    "                        icon:'line'\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:'预估值(依产能计划)'\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:'理论值(模型优化后)'\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        name:'未来30分预测值',\n" +
                    "                        icon:'image://static/images/fmcs/twoline.svg'\n" +
                    "                    }\n" +
                    "                ],\n" +
                    "                textStyle:{\n" +
                    "                    fontFamily: 'MicrosoftYaHei',\n" +
                    "                    fontSize:12,\n" +
                    "                    color: 'rgba(255,255,255,0.54)',\n" +
                    "                    letterSpacing:-0.07,\n" +
                    "                    lineHeight:11\n" +
                    "                },\n" +
                    "                right:50,\n" +
                    "                top:60,\n" +
                    "            },\n" +
                    "            xAxis: [\n" +
                    "                {\n" +
                    "                    type: 'time',\n" +
                    "                    min:function(){\n" +
                    "\n" +
                    "                        var date = new Date();\n" +
                    "                        var newDate;\n" +
                    "                        if(self.getShift() == 'A'){\n" +
                    "                            newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),7,0,0);\n" +
                    "                        }\n" +
                    "                        else{\n" +
                    "                            newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),19,0,0);\n" +
                    "                        }\n" +
                    "                        return Date.parse(newDate);\n" +
                    "\n" +
                    "                    },\n" +
                    "                    max:function(){\n" +
                    "\n" +
                    "                        var date = new Date();\n" +
                    "                        var newDate;\n" +
                    "                        if(self.getShift() == 'A'){\n" +
                    "                            newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),19,0,0);\n" +
                    "                        }\n" +
                    "                        else{\n" +
                    "\n" +
                    "                            date.setDate(date.getDate() + 1);\n" +
                    "                            newDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),7,0,0);\n" +
                    "\n" +
                    "                        }\n" +
                    "                        return Date.parse(newDate);\n" +
                    "                    },\n" +
                    "\n" +
                    "                    interval:1000*60*60,\n" +
                    "                    // scale: false,\n" +
                    "                    //data:self.data.xAxisData,\n" +
                    "                    name:'時間 (min)',\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'MicrosoftYaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        textAlign:'center',\n" +
                    "                        letterSpacing:0.07,\n" +
                    "                        lineHeight:16\n" +
                    "                    },\n" +
                    "                    nameLocation:'center',\n" +
                    "                    nameGap:'30',\n" +
                    "                    axisLabel: {\n" +
                    "                        formatter: function(val) {\n" +
                    "\n" +
                    "                            var date=new Date(val);\n" +
                    "                            console.log(date);\n" +
                    "                            return date.getHours()+\":\"+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes());\n" +
                    "                        },\n" +
                    "                        color:'rgba(255,255,255,0.5)',\n" +
                    "                        Interval:30\n" +
                    "                    },\n" +
                    "                    splitLine:{\n" +
                    "                        show:false\n" +
                    "                    },\n" +
                    "                    axisLine:{\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.5)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        inside:true\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ],\n" +
                    "            yAxis: [\n" +
                    "                {\n" +
                    "                    type: 'value',\n" +
                    "                    name:'用气量 (m³/h)',\n" +
                    "                    nameGap:30,\n" +
                    "                    nameTextStyle:{\n" +
                    "                        fontFamily: 'MicrosoftYaHei',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        textAlign:'right',\n" +
                    "                        lineHeight:16\n" +
                    "                    },\n" +
                    "                    min:0,\n" +
                    "                    max:100000,\n" +
                    "                    axisLine:{//坐标轴线条相关设置(颜色等)\n" +
                    "                        lineStyle:{\n" +
                    "                            color:'rgba(255,255,255,0.54)'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    axisLabel:{\n" +
                    "                        show:true,\n" +
                    "                        fontFamily: 'PingFangSC-Regular',\n" +
                    "                        fontSize: '12',\n" +
                    "                        color: 'rgba(255,255,255,0.87)',\n" +
                    "                        lineHeight: '12',\n" +
                    "                    },\n" +
                    "                    axisTick:{\n" +
                    "                        show:false\n" +
                    "                    }\n" +
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
                    "\n" +
                    "            series: [\n" +
                    "                {\n" +
                    "                    name:'实际值',\n" +
                    "                    type:'line',\n" +
                    "                    data:self.data.Q_real_level,\n" +
                    "                    boundaryGap:false,\n" +
                    "                    smooth:true,\n" +
                    "                    symbol:'none',\n" +
                    "\n" +
                    "                    lineStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#00D4BD'\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    areaStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:new self.ctx.echarts.graphic.LinearGradient(0,0,0,1,[{\n" +
                    "                                offset:0,\n" +
                    "                                color:'rgba(0,212,189,0.40) '\n" +
                    "                            },{\n" +
                    "                                offset:0.85,\n" +
                    "                                color:'rgba(11,22,35,0.00) '\n" +
                    "                            }],false),\n" +
                    "                            shadowColor:'rgba(0,0,0,0.1)',\n" +
                    "                            shadowBlur:10,\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'基线',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'none',\n" +
                    "                    data:self.data.Q_baseline,\n" +
                    "                    lineStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#00D4BD',\n" +
                    "                            type:'dashed'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'预估值(依产能计划)',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'none',\n" +
                    "                    step:true,\n" +
                    "                    data:self.data.request_volume,\n" +
                    "                    lineStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#C9FF91',\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'理论值(模型优化后)',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'none',\n" +
                    "                    step:true,\n" +
                    "                    data:self.data.Q_level_pred,\n" +
                    "                    lineStyle:{\n" +
                    "                        normal:{\n" +
                    "                            color:'#EB73C7'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                },\n" +
                    "                {\n" +
                    "                    name:'未来30分预测值',\n" +
                    "                    type:'line',\n" +
                    "                    symbol:'none',\n" +
                    "                    step:true,\n" +
                    "                    data:self.data.Q_real_pred,\n" +
                    "                    lineStyle:{\n" +
                    "                        normal:{\n" +
                    "                            width:2,\n" +
                    "                            color:'#EAB62A'\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "                }\n" +
                    "            ]\n" +
                    "        };\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "\n" +
                    "//        setInterval(function(){\n" +
                    "//\n" +
                    "//            var timeStamp=self.getRandTimeStamp();\n" +
                    "//\n" +
                    "//            var t = timeStamp;\n" +
                    "////            var getdata_request_volume=self.data_request_volume(t);\n" +
                    "////            var getdata_level_pred = self.data_level_pred(t);\n" +
                    "//\n" +
                    "//            var data=[\n" +
                    "//                { \"v\": 5500, \"t\": timeStamp, \"k\": { \"o\": \"Q_baseline\", \"l\": \"Q_baseline\" } },\n" +
                    "//                { \"v\": 3000+Math.random() *1000, \"t\": timeStamp, \"k\": { \"o\": \"Q_real_level\", \"l\": \"Q_real_level\" } },\n" +
                    "//                { \"v\": 4000+ Math.random() *1000, \"t\": timeStamp, \"k\": { \"o\": \"Q_level_pred\", \"l\": \"Q_level_pred\" } },\n" +
                    "//                { \"v\": 6000+ Math.random() *1000, \"t\": timeStamp, \"k\": { \"o\": \"request_volume\", \"l\": \"request_volume\" } },\n" +
                    "//                { \"v\": 6000+ Math.random() *1000, \"t\": timeStamp, \"k\": { \"o\": \"Q_real_pred\", \"l\": \"Q_real_pred\" } },\n" +
                    "//                { \"v\": 1, \"t\": timeStamp, \"k\": { \"o\": \"CDA_switch\", \"l\": \"CDA_switch\" } },\n" +
                    "//                { \"v\": [0, 0, -1, 1, 0, 0, 0, 0, 0, 0], \"t\": timeStamp, \"k\": { \"o\": \"CDA_arrange\", \"l\": \"CDA_arrange\" }}];\n" +
                    "//\n" +
                    "//            self.onDataUpdated(data);\n" +
                    "//\n" +
                    "//        },50000);\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getShift = function(){\n" +
                    "\n" +
                    "        var date = new Date();\n" +
                    "        if(date.getHours() > 7 && date.getHours() < 19){\n" +
                    "            return 'A';\n" +
                    "        }\n" +
                    "        else {\n" +
                    "            return 'B';\n" +
                    "        }\n" +
                    "\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getRandTimeStamp=function(){\n" +
                    "        var today = new Date();\n" +
                    "\n" +
                    "        var  startTime ;\n" +
                    "        if(self.getShift() == 'A') {\n" +
                    "            startTime = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0, 0));\n" +
                    "        }\n" +
                    "        else{\n" +
                    "            startTime = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19, 0, 0));\n" +
                    "        }\n" +
                    "\n" +
                    "        return startTime+600000*self.data.n++;\n" +
                    "    };\n" +
                    "\n" +
                    "\n" +
                    "\n" +
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
                    "    self.addData = function(data){\n" +
                    "\n" +
                    "        var t = 0;\n" +
                    "        self.data.Q_real_pred.length = 0;\n" +
                    "        self.data.CDA_switch.length = 0;\n" +
                    "        self.data.CDA_arrange.length = 0;\n" +
                    "\n" +
                    "        if(self.getShift() == 'A'){\n" +
                    "            self.data.option.title.subtext =  self.data.AShiftText;\n" +
                    "        }\n" +
                    "        else {\n" +
                    "            self.data.option.title.subtext = self.data.BShiftText;\n" +
                    "        }\n" +
                    "\n" +
                    "        self.ctx.$.each(data,function(i,obj){\n" +
                    "\n" +
                    "            if(obj.k.o==\"request_volume\"){\n" +
                    "                self.data.request_volume=JSON.parse(obj.v);\n" +
                    "            }\n" +
                    "            else if(Array.isArray(self.data[obj.k.o])) {\n" +
                    "                self.data[obj.k.o].push([obj.t, obj.v]);\n" +
                    "            }\n" +
                    "        });\n" +
                    "        if(self.data.Q_level_pred.length>0){\n" +
                    "            var lastlevel=self.data.Q_level_pred[self.data.Q_level_pred.length-1];\n" +
                    "            var lasttime = lastlevel[0] + 60 * 30 *1000;\n" +
                    "            self.data.Q_real_pred.length =0;\n" +
                    "            self.data.Q_real_pred.push([lastlevel[0]  ,lastlevel[1]]);\n" +
                    "            self.data.Q_real_pred.push([lasttime ,lastlevel[1]]);\n" +
                    "        }\n" +
                    "        console.log(self.data);\n" +
                    "        if(self.data.Q_real_pred.length == 1){\n" +
                    "            var timestamp =  self.data.Q_real_pred[0][0];\n" +
                    "            var value = self.data.Q_real_pred[0][1];\n" +
                    "            self.data.Q_real_pred.push([timestamp + 1000 * 60 * 30,value]);\n" +
                    "        }\n" +
                    "\n" +
                    "        if(self.data.Q_baseline.length >2){\n" +
                    "            self.data.Q_baseline.splice(1,1);\n" +
                    "        }\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDataUpdated = function(data){\n" +
                    "        console.log(\"chart5:\");\n" +
                    "        console.log(data);\n" +
                    "        self.addData(data);\n" +
                    "\n" +
                    "        self.data.myChart.setOption(self.data.option,true);\n" +
                    "    };\n" +
                    "\n" +
                    "    self.getDatestr=function(date){\n" +
                    "        var date = new Date(date);\n" +
                    "        Y = date.getFullYear() + '-';\n" +
                    "        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';\n" +
                    "        D = date.getDate() + ' ';\n" +
                    "        h = date.getHours() + ':';\n" +
                    "        m = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();\n" +
                    "\n" +
                    "        return Y+M+D;\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onResize = function () {\n" +
                    "        //self.onInit();\n" +
                    "        self.data.myChart.resize();\n" +
                    "    };\n" +
                    "\n" +
                    "    self.onDestroy = function () {\n" +
                    "        console.log(\"销毁\")\n" +
                    "    };\n",
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
            "dataSources": [{
                "type" : "edgeClient",
                "aliasId" : 1,
                "dataKeys" : [
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "Q_baseline",
                        "key" : "Q_baseline",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "Q_real_level",
                        "key" : "Q_real_level",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "Q_level_pred",
                        "key" : "Q_level_pred",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "316a75eb-e139-4787-ba3b-7910436f8457",
                        "deviceLabel" : "devicelabel-2",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "request_volume",
                        "key" : "request_volume",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_switch",
                        "key" : "CDA_switch",
                        "valueFunc" : "",
                    },
                    {
                        "deviceId" : "4effc8f5-910c-42af-95bb-6777d0c20ff2",
                        "deviceLabel" : "devicelabel-1",
                        "edgeClientId" : "e0f2b8a9-a6c4-4e15-98ec-d99e9c3145a7",
                        "type" : "latest",
                        "label" : "CDA_arrange",
                        "key" : "CDA_arrange",
                        "valueFunc" : "",
                    }
                ]
            }]
        }
    ]
};

export { dashboard_fmcs2 };
