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
            "aliasId": "别名Id",
            "alias": "别名1",
            "edgeClientList": [
                "5f4f7ca0-fda7-11e7-94de-d786c97a036f",
                "5f4f7ca0-fda7-11e7-94de-d786c97a036f"
            ]
        },
        {
            "aliasId": "别名Id",
            "alias": "别名2",
            "edgeClientList": [
                "5f4f7ca0-fda7-11e7-94de-d786c97a036f"
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
                    "templateHtml": "<div class='templateOne'>template1</div>",
                    "templateCss": ".templateOne{width:300px; height:300px; border:1px solid #dedede;}",
                    "controllerScript": "",
                    "defaultData": '',
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
                "y": 11
            },
            "size": {
                "x": 5,
                "y": 6
            },
            "title": "组件名称",
            "z-index": 0,
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
