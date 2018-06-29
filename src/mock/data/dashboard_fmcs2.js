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
            "templateId" : "15",
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
            "templateId" : "3",
            "templateVersion" : "1.0.0",
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
            "defaultSources" : [
                {
                    "type" : "func",
                    "label" : "getInfo",
                    "valueFunc" : "console.log('配置报表方法')"
                }, {
                    "type" : "data",
                    "label" : "boardInfo",
                    "valueFunc" : "报表配置得数据"
                }
            ],
            "dataSources" : []
        }
    ]
};

export { dashboard_fmcs2 };
