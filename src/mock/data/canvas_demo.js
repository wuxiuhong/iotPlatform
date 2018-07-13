const canvas_demo = {
    "width" : 357,
    "height" : 357,
    "background" : "rgb(0,23,71)",
    "fitSize" : true,
    "clip" : true,
    "element" : [
        {
            "id" : 1,
            "type" : "M.Block",
            "setting" : {
                "isEdit" : true,
                "displayName" : "背景",
                "location" : {
                    "x" : 204,
                    "y" : -55
                },
                "tag" : "map",
                "width" : 1366,
                "height" : 768,
                "select.width" : 0
            }
        },
        {
            "id" : 2,
            "type" : "M.Node",
            "setting" : {
                "isEdit" : true,
                "name" : "节点名称",
                "displayName" : "背景",
                "width" : 1366,
                "height" : 768,
                "parentId" : 1,
                "location" : {
                    "x" : 204,
                    "y" : -55
                },
                "select.width" : 0,
                "shape" : "rect",
                "shape.background" : "rgb(3, 11, 33)",
                "shape.border.color" : "#979797",
                "shape.gradient.color" : null
            }
        },
        {
            "id" : 3,
            "type" : "M.Node",
            "setting" : {
                "isEdit" : true,
                "displayName" : "地图背景",
                "image" : "symbols/demo/1",
                "parentId" : 1,
                "location" : {
                    "x" : 204,
                    "y" : -55
                },
                "select.width" : 0,
                "2d.selectable" : false,
                "opacity" : 0.2
            }
        },
        {
            "id" : 4,
            "type" : "M.Text",
            "setting" : {
                "isEdit" : true,
                "parentId" : 1,
                "text" : "文字内容",
                "dataBindings" : {
                    "styles" : {
                        "text" : {
                            "id" : "discTotal"
                        }
                    }
                },
                "rotation" : 3.5623,
                "anchor" : {
                    "x" : 0.55995,
                    "y" : 0.5
                },
                "location" : {
                    "x" : 204,
                    "y" : -55
                },
                "scale" : {
                    "x" : 1.5,
                    "y" : 1.5
                },
                "select.width" : 0,
                "text.color" : "rgb(224,118,25)"
            }
        },
        {
            "id" : 5,
            "type" : "M.Shape",
            "setting" : {
                "isEdit" : true,
                "parentId" : 1,
                "location" : {
                    "x" : 204,
                    "y" : -55
                },
                "points" : [
                    {
                        "x" : 204,
                        "y" : -55
                    },
                    {
                        "x" : 204,
                        "y" : -55
                    }
                ],
                "animation" : "linear | ease | ease-in | ease-in-out",
                "animation,duration" : "10",
                "animation.count" : "4",
                "animation.keyframe" : {
                    "0%" : {
                        "top" : "0px"
                    },
                    "25%" : {
                        "top" : "200px"
                    },
                    "50%" : {
                        "top" : "100px"
                    },
                    "75%" : {
                        "top" : "200px"
                    },
                    "100%" : {
                        "top" : "0px"
                    }
                },
                "rotation" : 6.28319,
                "shape.background" : null,
                "shape.border.cap" : "round",
                "shape.border.color" : "rgb(224,118,25)",
                "shape.border.width" : 1,
                "shape.gradient" : "radial.center",
                "shape.gradient.color" : "rgb(12,19,51)"
            }
        },
        {
            "id" : 6,
            "type" : "M.Node",
            "defaultData" : {
                "dataSource" : "[{'no': '001','intro': 'Boston能展区灯00001-LED通讯故障解除','time':'2017.10.20',{ 'no': '001','intro': 'Boston能展区灯00001-LED通讯故障解除','time':'2017.10.20' },{ 'no': '001','intro': 'Boston能展区灯00001-LED通讯故障解除','time':'2017.10.20' } }]",
                "table.columns" : "[{'align': 'center','key': 'no','width': 40,'color': 'rgb(117,175,255)' },{'align': 'center','key': 'no','width': 40, 'color': 'rgb(117,175,255)' },{ 'align': 'center','key': 'no','width': 40,'color': 'rgb(117,175,255)' }]",
                "table.translate.y" : 0
            },
            "setting" : {
                "isEdit" : true,
                "displayName" : "节点",
                "tag" : "messageTable",
                "dataBindings" : {
                    "defaultData" : {
                        "id" : "tableColumns"
                    }
                },
                "image" : "symbols/demo/table/1",
                "parentId" : 1,
                "location" : {
                    "x" : 204,
                    "y" : -55
                }
            }
        },
        {
            "type" : "M.Edge",
            "id" : 7,
            "setting" : {
                "isEdit" : true,
                "sourceId" : 5,
                "targetId" : 6
            }
        }
    ]
};

const canvas_demo1 = {
    "background" : "rgb(49,51,79)",
    "width" : 420,
    "height" : 90,
    "dataBindings" : [
        {
            "valueType" : "String",
            "name" : "PVBranch0",
            "attr" : "branch0"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch1",
            "attr" : "branch1"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch2",
            "attr" : "branch2"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch3",
            "attr" : "branch3"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch4",
            "attr" : "branch4"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch5",
            "attr" : "branch5"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch6",
            "attr" : "branch6"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch7",
            "attr" : "branch7"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch8",
            "attr" : "branch8"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch9",
            "attr" : "branch9"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch10",
            "attr" : "branch10"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch11",
            "attr" : "branch11"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch12",
            "attr" : "branch12"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch13",
            "attr" : "branch13"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch14",
            "attr" : "branch14"
        },
        {
            "valueType" : "String",
            "name" : "PVBranch15",
            "attr" : "branch15"
        },
        {
            "valueType" : "String",
            "name" : "PVDeviceName",
            "attr" : "deviceName"
        },
        {
            "valueType" : "String",
            "name" : "PVDiscreteRate",
            "attr" : "discreteRate"
        },
        {
            "valueType" : "String",
            "name" : "PVOutputPower",
            "attr" : "outputPower"
        },
        {
            "valueType" : "String",
            "name" : "PVCapacity",
            "attr" : "capacity"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState0",
            "attr" : "state0"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState1",
            "attr" : "state1"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState2",
            "attr" : "state2"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState3",
            "attr" : "state3"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState4",
            "attr" : "state4"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState5",
            "attr" : "state5"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState6",
            "attr" : "state6"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState7",
            "attr" : "state7"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState8",
            "attr" : "state8"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState9",
            "attr" : "state9"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState10",
            "attr" : "state10"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState11",
            "attr" : "state11"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState12",
            "attr" : "state12"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState13",
            "attr" : "state13"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState14",
            "attr" : "state14"
        },
        {
            "valueType" : "PVState",
            "name" : "PVState15",
            "attr" : "state15"
        },
        {
            "valueType" : "Percentage",
            "name" : "PVPercentage",
            "attr" : "percentage"
        },
        {
            "valueType" : "PVHLXState",
            "name" : "PVHLXState",
            "attr" : "hlxState"
        }
    ],
    "comps" : [
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state0",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                101.37917,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state1",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                140.88709,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state2",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                180.39501,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state3",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                219.90293,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state7",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                377.93461,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state6",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                338.42669,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state5",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                298.91877,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state4",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                259.41085,
                7.07966,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state12",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                259.34316,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state13",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                298.85108,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state14",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                338.359,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state15",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                377.86692,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state11",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                219.83524,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state10",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                180.32732,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state9",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                140.8194,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "roundRect",
            "background" : {
                "func" : "attr@state8",
                "value" : "#454668"
            },
            "borderColor" : "rgb(69,70,105)",
            "cornerRadius" : 4,
            "rect" : [
                101.31148,
                48.36686,
                36,
                36
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch0",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                98.28632,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch1",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                138.38905,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch2",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                177.12843,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch3",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                216.54949,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch4",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                255.97055,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch5",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                295.39161,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch6",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                334.81267,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch7",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                374.23373,
                8.93605,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch15",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                374.16604,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch14",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                334.74498,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch13",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                295.32393,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch12",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                255.90287,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch11",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                216.48181,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch10",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                177.06075,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch9",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                137.63969,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@branch8",
                "value" : "0.0"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                98.21863,
                50.22325,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "rect",
            "background" : {
                "func" : "attr@hlxState",
                "value" : "#81E746"
            },
            "borderColor" : "#979797",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                6.29321,
                5.73394,
                13.13847,
                32.52949
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@deviceName",
                "value" : "S01-NBA-001"
            },
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                20.94921,
                3.08958,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@discreteRate",
                "value" : "15%"
            },
            "align" : "center",
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                30.05421,
                23.37424,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "rect",
            "background" : "rgb(111,112,130)",
            "borderColor" : "#979797",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                6,
                48,
                80,
                4
            ]
        },
        {
            "type" : "rect",
            "background" : "#FF6A01",
            "borderColor" : "#979797",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                6,
                48,
                12,
                4
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@outputPower",
                "value" : "7.8KW"
            },
            "color" : "white",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                1.49347,
                61.34521,
                42.84479,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@capacity",
                "value" : "76.8KW"
            },
            "align" : "right",
            "color" : "rgb(111,112,130)",
            "fontSize" : "10",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                51.78591,
                61.34521,
                42.84479,
                20.59823
            ]
        }
    ]
};
const canvas_demo2 = {
    "background" : "rgb(41,32,40)",
    "dataBindings" : [
        {
            "valueType" : "String",
            "name" : "PVOutputPower",
            "attr" : "outputPower"
        },
        {
            "valueType" : "String",
            "name" : "PVResValue",
            "attr" : "rescourceValue"
        },
        {
            "valueType" : "String",
            "name" : "PVRadiDayGen",
            "attr" : "radiDayGen"
        },
        {
            "valueType" : "String",
            "name" : "PVDayGen",
            "attr" : "dayGen"
        },
        {
            "valueType" : "String",
            "name" : "PVRefreshTime",
            "attr" : "lastRefreshTime"
        },
        {
            "valueType" : "String",
            "name" : "PVCapacity",
            "attr" : "capacity"
        }
    ],
    "width" : 480,
    "height" : 100,
    "comps" : [
        {
            "type" : "text",
            "text" : "实时功率",
            "color" : "white",
            "fontSize" : "14",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                10.36025,
                11.92516,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "rect",
            "background" : "rgb(111,112,130)",
            "borderColor" : "#979797",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                10,
                48,
                160,
                4
            ]
        },
        {
            "type" : "rect",
            "background" : "#FCB32B",
            "borderColor" : "#979797",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : {
                "func" : "__ht__function(data, view) {\nvar outputPower = data.a('outputPower') || 0;\nvar capacity = data.a('capacity') || 21;\nvar width = 160 * outputPower / capacity;\nreturn [10,48,width,4]\n}",
                "value" : [
                    10,
                    48,
                    84.69266,
                    4
                ]
            }
        },
        {
            "type" : "text",
            "text" : "装机容量",
            "align" : "right",
            "color" : "white",
            "fontSize" : "14",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                95.53669,
                11.92516,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "瞬时辐射",
            "align" : "center",
            "color" : "white",
            "fontSize" : "14",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                214.19677,
                9.92516,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "日曝辐值",
            "align" : "center",
            "color" : "white",
            "fontSize" : "14",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                301.46932,
                9.92516,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "日发电量",
            "align" : "center",
            "color" : "white",
            "fontSize" : "14",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                388.74187,
                10.61637,
                79.1413,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@outputPower",
                "value" : "10.51"
            },
            "align" : "right",
            "color" : "#FCB32B",
            "fontSize" : "15",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                7.82888,
                64.80443,
                43.54678,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@capacity",
                "value" : "21.00"
            },
            "align" : "right",
            "color" : "rgb(150,150,150)",
            "fontSize" : "15",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                103.37984,
                64.80443,
                46.56797,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "MW",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                152.15376,
                64.80443,
                24.94011,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "MW",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                53.45646,
                64.80443,
                24.94011,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@rescourceValue",
                "value" : "798.3"
            },
            "align" : "right",
            "color" : "#FCB32B",
            "fontSize" : "15",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                199.60192,
                37.37702,
                52.25599,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "W/m2",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                254.53829,
                37.37702,
                30.46977,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@radiDayGen",
                "value" : "3.7"
            },
            "align" : "right",
            "color" : "#FCB32B",
            "fontSize" : "15",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                285.38516,
                37.37702,
                52.25599,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "MJ/m2",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                340.32153,
                37.37702,
                35.30821,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@dayGen",
                "value" : "1.66"
            },
            "align" : "right",
            "color" : "#FCB32B",
            "fontSize" : "15",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                373.86554,
                37.37702,
                52.25599,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : "万kwh",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                429.07615,
                37.37702,
                35.30821,
                20.59823
            ]
        },
        {
            "type" : "text",
            "text" : {
                "func" : "attr@lastRefreshTime",
                "value" : "更新时间：12/24/2016, 12:27:09 PM"
            },
            "align" : "right",
            "color" : "rgb(150,150,150)",
            "fontSize" : "11",
            "fontFamily" : "arial, sans-serif",
            "rect" : [
                265.70497,
                62.43549,
                198.48604,
                30
            ]
        }
    ]
};
const canvas_demo3 = {
    "width" : 100,
    "height" : 100,
    "opacity" : {
        "func" : "attr@alarm.opacity",
        "value" : 1
    },
    "comps" : [
        {
            "type" : "triangle",
            "background" : {
                "func" : "attr@alarm.color",
                "value" : "gray"
            },
            "rect" : [
                2,
                2,
                96,
                96
            ]
        },
        {
            "type" : "rect",
            "background" : "white",
            "rect" : [
                45,
                30,
                10,
                40
            ]
        },
        {
            "type" : "circle",
            "background" : "white",
            "rect" : [
                39,
                72,
                22,
                20
            ]
        }
    ]
};
const canvas_demo4 = {
    "width" : 100,
    "height" : 50,
    "comps" : [
        {
            "type" : "shape",
            "borderWidth" : 5,
            "borderColor" : "rgb(230,209,209)",
            "border3d" : true,
            "points" : [
                20,
                25,
                70,
                25
            ]
        },
        {
            "type" : "shape",
            "background" : {
                "func" : "attr@arrow.color",
                "value" : "rgb(230,209,209)"
            },
            "borderWidth" : 1,
            "borderColor" : "#40ACFF",
            "gradient" : "linear",
            "gradientColor" : "#FF7C7C",
            "points" : [
                60,
                10,
                60,
                40,
                80,
                25,
                60,
                10
            ]
        }
    ]
};
const canvas_demo5 = {
    "width" : 40,
    "height" : 20,
    "comps" : [
        {
            "type" : "rect",
            "background" : "red",
            "rect" : [
                2,
                8,
                8,
                4
            ]
        },
        {
            "type" : "shape",
            "background" : "red",
            "borderWidth" : 1,
            "borderColor" : "red",
            "gradient" : "linear",
            "closePath" : true,
            "points" : [
                5,
                2,
                10,
                10,
                5,
                18,
                20,
                10
            ]
        }
    ]
};
const canvas_demo6 = {
    "dataBindings" : [
        {
            "attr" : "tang.volume",
            "valueType" : "Percentage",
            "name" : "液量"
        }
    ],
    "width" : 100,
    "height" : 100,
    "fitSize" : true,
    "comps" : [
        {
            "type" : "rect",
            "background" : "rgb(107,99,99)",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "gradient" : "linear",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                11.11862,
                10.72153,
                79.26747,
                78.22746
            ]
        },
        {
            "type" : "roundRect",
            "background" : "rgb(33,26,26)",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "gradient" : "linear",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                5.9226,
                87.24716,
                90,
                10
            ]
        },
        {
            "type" : "roundRect",
            "background" : "rgb(33,26,26)",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "gradient" : "linear",
            "gradientColor" : "rgb(255,255,255)",
            "rect" : [
                5.9226,
                2.6662,
                90,
                10
            ]
        },
        {
            "type" : "shape",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "points" : [
                60.8877,
                23.82562,
                77.68687,
                23.90365
            ]
        },
        {
            "type" : "shape",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "points" : [
                60.8877,
                50.86581,
                77.3935,
                50.81391
            ]
        },
        {
            "type" : "shape",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "points" : [
                60.8877,
                77.90601,
                77.78602,
                77.94316
            ]
        },
        {
            "type" : "shape",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "points" : [
                60.8877,
                37.34572,
                69.68765,
                37.41244
            ]
        },
        {
            "type" : "shape",
            "borderWidth" : 1,
            "borderColor" : "rgb(0,0,0)",
            "points" : [
                60.8877,
                64.38591,
                70.02269,
                64.32706
            ]
        }
    ]
};
const canvas_demo7 = {
    "width" : 750,
    "height" : 240,
    "comps" : [
        {
            "type" : "rect",
            "background" : "#E74C3C",
            "borderWidth" : 1,
            "borderColor" : "#34495E",
            "depth" : 5,
            "rect" : [
                11,
                20,
                130,
                80
            ]
        },
        {
            "type" : "oval",
            "borderWidth" : 12,
            "borderColor" : "rgb(51,153,255)",
            "border3d" : true,
            "borderPattern" : [
                12,
                12
            ],
            "rect" : [
                161,
                20,
                130,
                80
            ]
        },
        {
            "type" : "polygon",
            "background" : "#3498DB",
            "borderWidth" : 10,
            "borderColor" : "#34495E",
            "borderJoin" : "miter",
            "gradient" : "linear",
            "gradientColor" : "white",
            "polygonSide" : 5,
            "rect" : [
                311,
                20,
                130,
                80
            ]
        },
        {
            "type" : "star",
            "background" : "red",
            "gradient" : "radial",
            "gradientColor" : "yellow",
            "outerRadius" : 50,
            "innerRadius" : 25,
            "spikeCount" : 5,
            "rect" : [
                461,
                20,
                130,
                80
            ]
        },
        {
            "type" : "arc",
            "borderWidth" : 6,
            "borderColor" : "blue",
            "dash" : true,
            "dashPattern" : [
                5,
                12
            ],
            "dashColor" : "yellow",
            "startAngle" : 90,
            "endAngle" : 360,
            "arcClose" : false,
            "rect" : [
                611,
                20,
                130,
                80
            ]
        },
        {
            "type" : "roundRect",
            "repeatImage" : "assets/ie.png",
            "borderWidth" : 5,
            "borderColor" : "blue",
            "dash" : true,
            "dashColor" : "yellow",
            "cornerRadius" : 6,
            "rect" : [
                11,
                136.81172,
                130,
                80
            ]
        },
        {
            "type" : "oval",
            "borderWidth" : 12,
            "borderColor" : "#34495E",
            "border3d" : true,
            "dash" : true,
            "dashColor" : "red",
            "dashWidth" : 8,
            "dash3d" : true,
            "dash3dColor" : "yellow",
            "rect" : [
                161,
                136.81172,
                130,
                80
            ]
        },
        {
            "type" : "polygon",
            "repeatImage" : "assets/ie.png",
            "borderColor" : "#34495E",
            "borderJoin" : "miter",
            "gradient" : "linear",
            "gradientColor" : "white",
            "sideCount" : 5,
            "dash" : true,
            "dashPattern" : [
                10
            ],
            "dashColor" : "yellow",
            "polygonSide" : 5,
            "rect" : [
                311,
                136.81172,
                130,
                80
            ]
        },
        {
            "type" : "star",
            "background" : "red",
            "borderWidth" : 2,
            "borderColor" : "#34495E",
            "outerRadius" : 50,
            "innerRadius" : 25,
            "spikeCount" : 5,
            "borderPattern" : [
                10,
                4,
                4,
                4
            ],
            "gradient" : "radial",
            "gradientColor" : "yellow",
            "rect" : [
                461,
                136.81172,
                130,
                80
            ]
        },
        {
            "type" : "arc",
            "repeatImage" : "assets/ie.png",
            "gradient" : "radial",
            "gradientColor" : "white",
            "startAngle" : 90,
            "endAngle" : 360,
            "arcOval" : true,
            "rect" : [
                611,
                136.81172,
                130,
                80
            ]
        }
    ]
};
const canvas_demo11 = {
    "dataBindings" : [
        {
            "attr" : "clock.hour",
            "valueType" : "Number",
            "name" : "ClockHours"
        },
        {
            "attr" : "clock.minute",
            "valueType" : "Number",
            "name" : "ClockMinutes"
        },
        {
            "attr" : "clock.second",
            "valueType" : "Number",
            "name" : "ClockSeconds"
        }
    ],
    "width" : 100,
    "height" : 100,
    "clip" : "__ht__function(g, width, height, data, view, image) {\ng.beginPath();\ng.arc(width / 2, height / 2, Math.min(width, height) * 0.5, 0, Math.PI * 2, true);\ng.clip();\n}",
    "comps" : [
        {
            "type" : "image",
            "name" : "/static/images/vintage.png",
            "rect" : [
                0,
                0,
                100,
                100
            ]
        },
        {
            "type" : "json",
            "url" : "demo3",
            "displayName" : "components/clock/clock-pointer.json",
            "rect" : [
                0,
                0,
                100,
                100
            ],
            "hours" : {
                "func" : "attr@clock.hour",
                "value" : 2
            },
            "minutes" : {
                "func" : "attr@clock.minute",
                "value" : 37
            },
            "seconds" : {
                "func" : "attr@clock.second",
                "value" : 16
            },
            "hourColor" : "rgb(0,0,0)",
            "minuteColor" : "rgb(117,102,76)",
            "secondColor" : "rgb(179,142,79)",
            "numberVisible" : false
        }
    ]
};

export {
    canvas_demo,
    canvas_demo1,
    canvas_demo2,
    canvas_demo3,
    canvas_demo4,
    canvas_demo5,
    canvas_demo6,
    canvas_demo7,
    canvas_demo11
};
