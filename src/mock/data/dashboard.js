const dashboard = {
    "id": 1,
    "title": "报表",
    "createTime": "2018-5-28",
    "description": "test from Kim",
    "styles": {
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
            "edgeClientList": [
                "5f4f7ca0-fda7-11e7-94de-d786c97a036f",
                "5f4f7ca0-fda7"
            ]
        },
        {
            "aliasId": 2,
            "alias": "别名2",
            "edgeClientList": [
                "5f2f"
            ]
        }
    ],
    "components": [
        {
            "type": "canvas | html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version": "1.0.0",
                "name": "html组件名称",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div class=\"main\"> <div class=\"leftdiv\"></div> <div class=\"rightdiv\"> <div class=\"bottom-row\"> <div style=\"color:#04c1b0;\"><img src=\"images/14.png\"/>&nbsp;&nbsp;机床信息</div> <div><span>设备编号</span><span>22323423</span></div> <div><span>设备型号</span><span>快捷设备DEPO SPEED</span></div> <div><span>类别</span><span>立式</span></div> <div><span>入厂日期</span><span>2001/01/05</span></div> <div><span>年限</span><span>14.2</span></div> </div> <div class=\"bottom-row\"> <div><span>机床状态</span><span style=\"color:#09a4d5;\">运行&nbsp;&nbsp;<img src=\"images/10.png\"/></span></div> <div><span>网络状态</span><span style=\"color:#7ed651;\">在线&nbsp;&nbsp; <img src=\"images/12.png\"/></span></div> <div><span>加工件数</span><span>2</span></div> <div><span>开机时间</span><span>6h</span></div> <div><span>循环时间</span><span>6h</span></div> <div><span>运行时间</span><span>6h30m</span></div> </div> </div> </div>",
                    "templateCss": ".main{ width:100%; height: 100px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; } .leftdiv{ float:left; width:190px; height:100%; } .rightdiv{ float:left; width:calc(100% - 190px); height:calc(100% - 15px); padding-top:15px; } .bottom-row{ height:35px; line-height: 35px; float:left; width:100%; } .bottom-row div{ float:left; width:16%; color:#ededef; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span:first-child{ padding-right:10px; color:rgba(255,255,255,0.5); } .bottom-row div img{ vertical-align: middle; }",
                    "controllerScript": {
                        "mounted": "maxIot.getCount = 100 ",
                        "methods": " return { onUpdate() { this.getCount++; }, onResize() { this.getCount = 0; }, increment() { this.getCount++; console.log('2222');this.$emit('child-event','hehe'); }, decrement() { this.getCount--; } }",
                        "destroy": "console.log('销毁')"
                    },
                    "defaultData": {
                        "getCount": 1
                    },
                    "dataSources": [
                        {
                            "type": "edgeClient",
                            "dataKeys": [
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                },
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                }
                            ]
                        }
                    ]
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
            "title": "组件名称",
            "zIndex": 2,
            "styles": {
                "showTitle": false,
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": "1px 2px #dedede"
            },
            "dataSources": [
                {
                    "type": "function",
                    "dataKeys": [
                        {
                            "type": "latest",
                            "name": "f(x)",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type": "edgeClient",
                    "aliasId": 1,
                    "dataKeys": [
                        {
                            "type": "attr",
                            "name": "edgeClient1",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type": "latest",
                            "name": "edgeClient2",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        },
        {
            "type": "canvas | html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version": "1.0.0",
                "name": "html组件名称",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div class='templateOne'><h1>vue 事件测试</h1> Clicked: {{ getCount }} times <button @click='increment'>+</button> <button @click='decrement'>-</button>{{content[0].type}}</div>",
                    "templateCss": ".templateOne{width:300px; height:100px; border:1px solid #dedede; padding:10px;} .test{padding:0}",
                    "controllerScript": {
                        "mounted": "maxIot.getCount = 100 ",
                        "methods": " return { onUpdate() { this.getCount++; }, onResize() { this.getCount = 0; }, increment() { this.getCount++; console.log('2222');this.$emit('child-event','hehe'); }, decrement() { this.getCount--; } }",
                        "destroy": "console.log('销毁')"
                    },
                    "defaultData": {
                        "getCount": 1
                    },
                    "dataSources": [
                        {
                            "type": "edgeClient",
                            "dataKeys": [
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                },
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                }
                            ]
                        }
                    ]
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 10,
                "y": 100
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "组件名称",
            "zIndex": 0,
            "styles": {
                "showTitle": false,
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#dedede",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": "1px 2px #dedede"
            },
            "dataSources": [
                {
                    "type": "function",
                    "dataKeys": [
                        {
                            "type": "latest",
                            "name": "f(x)",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type": "edgeClient",
                    "aliasId": 1,
                    "dataKeys": [
                        {
                            "type": "attr",
                            "name": "edgeClient1",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type": "latest",
                            "name": "edgeClient2",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        },
        {
            "type": "canvas | html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version": "1.0.0",
                "name": "html组件名称",
                "type": "html",
                "templateType": "组件模板类型",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<el-form ref='form' :model='form' label-width='80px' style='margin:20px;width:60%;min-width:300px;'><el-form-item label='活动名称'><el-input v-model='form.name'></el-input></el-form-item></el-form>",
                    "templateCss": "",
                    "controllerScript": {
                        "methods": "return { onUpdate() { }, onResize() {}}"
                    },
                    "defaultData": {
                        "form": {
                            "name": "姓名"
                        }
                    },
                    "dataSources": [
                        {
                            "type": "edgeClient",
                            "dataKeys": [
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                },
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                }
                            ]
                        }
                    ]
                }
            },
            "templateType": "latest | time",
            "relation": {
                "x": 400,
                "y": 100
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "form 表单组件",
            "zIndex": 1,
            "styles": {
                "showTitle": false,
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#fff",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": "1px 2px #dedede"
            },
            "dataSources": [
                {
                    "type": "function",
                    "dataKeys": [
                        {
                            "type": "latest",
                            "name": "f(x)",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type": "edgeClient",
                    "aliasId": 1,
                    "dataKeys": [
                        {
                            "type": "attr",
                            "name": "edgeClient1",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type": "latest",
                            "name": "edgeClient2",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        },
        {
            "type": "canvas | html",
            "version": "1.0.0",
            "templateId": "2",
            "template": {
                "id": "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version": "1.0.0",
                "name": "html组件名称",
                "type": "html",
                "templateType": "echart",
                "image": "缩略图",
                "createTime": "2018-5-28",
                "template": {
                    "dependent": [],
                    "templateHtml": "<div id=chartPie style='width:300px; height:300px;'></div>",
                    "templateCss": "",
                    "controllerScript": {
                        "mounted": "maxIot.chartPie = echarts.init(document.getElementById('chartPie')); maxIot.chartPie.setOption({ title: { text: 'Pie Chart', subtext: '纯属虚构', x: 'center' }, tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' }, legend: { orient: 'vertical', left: 'left', data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'] }, series: [ { name: '访问来源', type: 'pie', radius: '55%', center: ['50%', '60%'], data: [ {value: 335, name: '直接访问'}, {value: 310, name: '邮件营销'}, {value: 234, name: '联盟广告'}, {value: 135, name: '视频广告'}, {value: 1548, name: '搜索引擎'} ], itemStyle: { emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } } } ] });",
                        "methods": "return { onUpdate() { }, onResize() {}}"
                    },
                    "defaultData": {
                        "message": "hello world"
                    },
                    "dataSources": [
                        {
                            "type": "edgeClient",
                            "dataKeys": [
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                },
                                {
                                    "key": "WaterPump",
                                    "value": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                }
                            ]
                        }
                    ]
                }
            },
            "templateType": "echart",
            "relation": {
                "x": 100,
                "y": 300
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "echart",
            "zIndex": 1,
            "styles": {
                "showTitle": false,
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#fff",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": "1px 2px #dedede"
            },
            "dataSources": [
                {
                    "type": "function",
                    "dataKeys": [
                        {
                            "type": "latest",
                            "name": "f(x)",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type": "edgeClient",
                    "aliasId": 1,
                    "dataKeys": [
                        {
                            "type": "attr",
                            "name": "edgeClient1",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type": "latest",
                            "name": "edgeClient2",
                            "color": "#ffd600",
                            "key": "WaterPump",
                            "valueFunc": "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        }
    ]
};

export { dashboard };
