const dashboard = {
    "id" : "510f3d58-74e3-488d-a054-e75a136e82ed",
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
            "templateId" : "ca2a2b17-0e1f-4f90-8d59-bc0c691ec950",
            "templateVersion" : "1.0.0",
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
                "adsorptionnode" : '',
                "canmove" : false,
                "canedit" : false
            },
            "styles" : {
                "width" : "100%",
                "position": "relative",
                "margin" : "0 0 20px 0",
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
            "templateId" : "ee654efd-23da-42a1-b04d-d88c4553f53d",
            "templateVersion" : "1.0.0",
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
                "position": "relative",
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
            "templateId" : "0b6b860e-5ba1-4285-8df8-e7b20e7c4d04",
            "templateVersion" : "1.0.0",
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
                "width" : "calc(58% - 15px)",
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
            "templateId" : "737f27a6-4b9f-4f96-925f-2e082a631ab7",
            "templateVersion" : "1.0.0",
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
            "defaultData":{
                "da" : {
                    "comp_title" : "刀具磨损量预测"
                }
            },
            "dataSources" : []
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "e60a2747-4a4b-4f7e-a343-deeb2a5bd961",
            "templateVersion" : "1.0.0",
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
            "templateId" : "85486f6b-84fe-4a30-a3a6-e163ca214652",
            "templateVersion" : "1.0.0",
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
            "templateId" : "737f27a6-4b9f-4f96-925f-2e082a631ab7",
            "templateVersion" : "1.0.0",
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
            "defaultData":{
                "da" : {
                    "comp_title" : "刀具剩余寿命"
                }
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2a8b9d32-8ebb-4ebc-b8fb-bd4bf2edc45e",
            "templateVersion" : "1.0.0",
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
            "templateId" : "298bce57-4ae9-4e9a-b0db-7a917b0ae99c",
            "templateVersion" : "1.0.0",
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
            "templateId" : "737f27a6-4b9f-4f96-925f-2e082a631ab7",
            "templateVersion" : "1.0.0",
            "templateType" : "latest | time",
            "relation" : {
                "x" : "60%",
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
            "defaultData":{
                "da" : {
                    "comp_title" : "主轴故障预警"
                }
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "bd095587-14f3-47c5-a675-24181b3c9d59",
            "templateVersion" : "1.0.0",
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
            "templateId" : "737f27a6-4b9f-4f96-925f-2e082a631ab7",
            "templateVersion" : "1.0.0",
            "templateType" : "latest | time",
            "relation" : {
                "x" : "60%",
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
            "defaultData" : {
                "da" : {
                    "comp_title" : "主轴健康风险监测"
                }
            },
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "64babee5-a27d-4ef2-9533-1246bf514cd4",
            "templateVersion" : "1.0.0",
            "templateType" : "latest | time",
            "relation" : {
                "x" : "60%",
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
            "templateId" : "6a704ce9-649c-4995-b91e-5c2901229afd",
            "templateVersion" : "1.0.0",
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
