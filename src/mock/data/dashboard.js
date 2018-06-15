const dashboard = {
    "id" : 1,
    "title" : "报表",
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
    "edgeClients" : {
        "id" : "6147f73d-07f5-4f1f-94b3-887f8e216e77",
        "keys" : ['age', 'name']
    },
    "edgeClientAliases" : [
        {
            "aliasId" : 1,
            "alias" : "别名1",
            "edgeClientList" : [
                "6147f73d-07f5-4f1f-94b3-887f8e216e77",
                "5f4f7ca0-fda7"
            ]
        },
        {
            "aliasId" : 2,
            "alias" : "别名2",
            "edgeClientList" : [
                "5f2f"
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
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"main\"> <div class=\"leftdiv\"><img src=\"./static/images/cnc.png\"></div> <div class=\"rightdiv\"> <div class=\"bottom-row\"> <div style=\"color:#04c1b0;\"><img src=\"./static/images/svg/bullet/green.svg\" style=\"\" />&nbsp;&nbsp;机床信息</div> <div><span>设备编号</span><span >22323423</span></div> <div><span>设备型号</span><span>快捷设备DEPO SPEED</span></div> <div><span>类别</span><span>立式</span></div> <div><span>入厂日期</span><span>2001/01/05</span></div> <div><span>年限</span><span>14.2</span></div> </div> <div class=\"bottom-row\"> <div><span>机床状态</span><span style=\"color:#09a4d5;\" id=\"OPmtate\">{{OPmtate}}&nbsp;&nbsp;</span></div> <div><span>网络状态</span><span style=\"color:#7ed651;\">在线&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\" /></span></div> <div><span>加工件数</span><span id=\"workcount\">{{workcount}}</span></div> <div><span>开机时间</span><span id=\"poweronTime\">{{poweronTime}}h</span></div> <div><span>循环时间</span><span id=\"cycletime\">{{cycletime}}h</span></div> <div><span>运行时间</span><span id=\"operatingTime\">{{operatingTime}}m</span></div> </div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 100px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; } .leftdiv{ float:left; width:190px; height:100px; line-height:100px;}.leftdiv img{ vertical-align: middle; } .rightdiv{ float:left; width:calc(100% - 190px); height:calc(100% - 15px); padding-top:15px; } .bottom-row{ height:35px; line-height: 35px; float:left; width:100%; } .bottom-row div{ float:left; width:16%; color:#ededef; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span:first-child{ padding-right:10px; color:rgba(255,255,255,0.5); } .bottom-row div img{ vertical-align: middle; }",
                    "controllerScript" : {
                        "mounted" : "if(maxIot.OPmtate==1){ $(\"#OPmtate\").html(\"在线\"+'&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\" />'); } else{ $(\"#OPmtate\").html(\"离线\"+'&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/offline.svg\" />'); }",
                        "methods" : "return { onDataUpdated(data) { if (data.length) { data.forEach((item) => { this[item.k.l]= item.v; }); if(this.OPmtate==1){ $(\"#OPmtate\").html(\"在线\"+'&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\" />'); } else{ $(\"#OPmtate\").html(\"离线\"+'&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/offline.svg\" />'); }}}, onResize() { this.getCount = 0; }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "OPmtate" : 0,
                        "workcount" : 2,
                        "poweronTime" : 6,
                        "cycletime" : 6,
                        "operatingTime" : 5
                    },
                    "dataSources" : [
                        {
                            "label" : "age",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "label" : "WaterPump2",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
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
            "styles" : {
                "width" : "100%",
                "showTitle" : false,
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
            ]
        },
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
                    "templateCss" : ".empty-component{ width:calc(100vw - 88px); height: 100%;  background-color:#262d45;  } ",
                    "controllerScript" : {},
                    "defaultData" : {
                        "title" : '刀具磨损量预测'
                    },
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
            "title" : "刀具磨损量预测",
            "zIndex" : 0,
            "styles" : {
                "height" : 720,
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
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"main\"> <div id=\"tool_status\" class=\"tpdiv\"> <div id=\"knife_status_img\"><img src=\"./static/images/svg/meter/n.svg\"></div> <div id=\"knife_status_txt\">刀具状态正常</div> </div> <div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\"> <div class=\"col1\"><img src=\"./static/images/svg/bullet/green.svg\">&nbsp;&nbsp;刀具基础信息</div> </div> <div class=\"bottom-row\" style=\"margin-top:5px;\"> <div><span>刀具品牌</span><span>日立</span> </div> <div><span>刀具规格</span><span>D35</span> </div> <div><span>主轴刀号</span><span id=\"currenttoolnum\">T21</span> </div> <div><span>预备刀号</span><span id=\"pretoolnum\">T09</span> </div> </div> <div class=\"bottom-row\" > <div><span>X 轴负载</span><span id=\"x_load\">40%</span> </div> <div><span>Y 轴负载</span><span id=\"y_load\">40%</span> </div> <div><span>Z 轴负载</span><span id=\"z_load\">40%</span> </div> <div><span>X伺服轴进给率</span><span>40%</span> </div> </div> </div> <div class=\"leftdiv-col2\"> <img src=\"./static/images/tool.png\" /> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(25% - 26px); height:96px; float:left; vertical-align: middle; background-color:#292c4a; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:75%; height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:25%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(22% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : {
                        "mounted" : "maxIot.formatData(maxIot.currentData)",
                        "methods" : " return { onDataUpdated(data) {if (data.length) { data.forEach((item) => { this.currentData[item.k.l]= item.v; }); } maxIot.formatData(this.currentData)}, onResize() {}, formatData(data) { if (data.tool_break_alarm === 1) { $(\"#tool_status\").removeClass(\"tpdiv\").addClass(\"alarm\"); $(\"#knife_status_txt\").html(\"刀具断刀提示\");$(\"#knife_status_img\").html('<img src=\"./static/images/svg/meter/a.svg\">');} else { $(\"#tool_status\").removeClass(\"alarm\").addClass(\"tpdiv\"); $(\"#knife_status_txt\").html(\"刀具状态正常\");  $(\"#knife_status_img\").html('<img src=\"./static/images/svg/meter/n.svg\">');} }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "currentData" : {
                            "tool_break_alarm" : 1,
                            "z_load" : "30%"
                        }
                    },
                    "dataSources" : [
                        {
                            "type" : "edgeClient",
                            "dataKeys" : [
                                {
                                    "key" : "WaterPump",
                                    "value" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                },
                                {
                                    "key" : "WaterPump",
                                    "value" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                                }
                            ]
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
                    "type" : "function",
                    "dataKeys" : [
                        {
                            "type" : "latest",
                            "name" : "f(x)",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "type" : "attr",
                            "label" : "edgeClient1",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type" : "latest",
                            "label" : "edgeClient2",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "隔离线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"top-row\"> <div class=\"col1\" id=\"title\"><embed src=\"./static/images/svg/bullet/green.svg\" />&nbsp;&nbsp;{{title}}</div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : {
                        "methods" : " return {onDataUpdated(data) { }, onResize() { }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '刀具磨损量预测'
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
            "dataSources" : []
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"mainChart\"></div>",
                    "templateCss" : "#mainChart{ width:100%; min-height: 300px; margin-top:20px}",
                    "controllerScript" : {
                        "mounted" : "maxIot.myChart = echarts.init(document.getElementById('mainChart')); maxIot.option = { tooltip : { formatter : \"{a} <br/>{b} : {c}%\" }, series : [ { name : '业务指标', type : 'gauge', startAngle : 210, endAngle : -30, data : [{value : 50, name : '磨损百分比'}], min : 0, max : 100, splitNumber : 2, radius : '80%', axisLine : { lineStyle : { \"width\" : 10, color : [ [0.6, '#01C6FD'], [0.8, '#EAB62A'], [1, '#E04F23'] ] } }, axisTick : {show : false}, splitLine : { length : 10, lineStyle : { color : 'auto' }, show : false }, pointer : { width : 3 }, title : { offsetCenter : [0, '30%'], }, axisLabel:{ }, detail : { fontWeight : 'normal', color:'rgba(49, 178, 231,1)', offsetCenter: [\"0%\", \"80%\"], formatter:function(value){ return \"{a|\"+value+\"}\"+\"{b|%}\"; }, rich:{ a:{ fontSize:44 } , b:{ fontSize:22, padding:5, verticalAlign:'bottom' } } } } ] }; setInterval(function () { maxIot.option.series[0].data[0].value = (Math.random() * 100).toFixed(0) - 0; maxIot.myChart.setOption(maxIot.option, true); }, 2000);",
                        "methods" : "return { onDataUpdated(data) {}, onResize() {this.myChart.resize(); }}"
                    },
                    "defaultData" : {
                        "myChart" : null,
                        "option" : {}
                    },
                    "dataSources" : []
                }
            },
            "templateType" : "echart",
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
            "dataSources" : []
        },
        {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"mainChart2\" style=\"width: 100%;height:350px;\"></div>",
                    "templateCss" : "",
                    "controllerScript" : {
                        "mounted" : "maxIot.option = { title: { text: '刀具衰退趋势图', left:'‘0%', top:'0%', textStyle:{ color:'rgba(255,255,255,0.5)', fontStyle:'normal', fontFamily:'sans-serif', fontSize:14 } }, tooltip: { trigger: 'axis', formatter: function (params) { params = params[0]; return \"磨损量 <span style='color:#01c6fd' >\"+ params.value[1]+ \"mm</span>\"; }, axisPointer: { type: 'cross', animation: false, label: { backgroundColor: '#505765' } }, textStyle:{ color:'rgba(255,255,255,0.5)' } }, xAxis: { type: 'value', boundaryGap: false, name:'(mins)', nameGap:20, splitNumber:16, axisLine:{ lineStyle:{ color:'rgba(255,255,255,0.5)' } }, axisLabel:{ interval:5 }, splitLine: { show: false } }, yAxis: { type: 'value', name:'磨损量（mm）', nameTextStyle:{ color:'#399fae', fontSize:'16px' }, nameGap:30, axisTick:{ length:'0' }, axisLine:{ lineStyle:{ color:'rgba(255,255,255,0.5)' } }, }, grid:{ left:36, top:90 }, visualMap: { top: 10, right: 10, pieces: [{ gt: 0, lte: 0.2, color: '#E04F23' }, { gt:0.2, lte: 0.4, color: '#EAB62A' }, { gt: 0.4, lte: 1, color: '#01c5fd' }], outOfRange: { color: '#999' }, show:false }, color:['#E04F23','#EAB62A','#01c5fd'], series: [ { data:[], type: 'line', showSymbol:false, symbolSize:1,   smooth: true, itemStyle: { normal: { borderWidth: 3, borderColor: 'white', color: 'blue' } }, markLine: { data: [ { name: '最小值',xAxis:0} ], lineStyle:{ type:'solid', color:'#000' }, symbol:'', label:{ show:false } } }, { data:[], type: 'line', symbol:'none', smooth: true, itemStyle:{ normal:{ color:'#20aefc', show:false } }, lineStyle: { normal: { width: 4, type: 'dashed' } } }, { name:'低故障率', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 3 } }, markArea: { data: [[{ yAxis: '0' }, { yAxis: '0.2' }]] }, },{ name:'中等故障率', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.2' }, { yAxis: '0.4' }]] } },{ name:'高故障率', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.4' }, { yAxis: '1' }]] } }] }; setInterval(function () { var data=[ { v:'2018-06-10 12:19:20', t:1528358866224, k:{o:\"tool_start_time\",l:\"tool_start_time\"} }, { v:maxIot.getDatestr(), t:1528358866224, k:{o:\"tool_end_time\",l:\"tool_end_time\"} }, { v: maxIot.getData(), t:1528358866224, k:{o:\"tool_wear\",l:\"tool_wear\"} }, { v:\"[0.5,0.4,0.3]\", t:1528358866224, k:{o:\"tool_wear_prid\",l:\"tool_wear_prid\"} }, { v:0, t:1528358866224, k:{o:\"tool_alarm\",l:\"tool_alarm\"} }, { v:1, t:1528358866224, k:{o:\"tool_warn\",l:\"tool_warn\"} }, { v:0.4, t:1528358866224, k:{o:\"tool_warn_thres\",l:\"tool_warn_thres\"} }, { v:0.2, t:1528358866224, k:{o:\"tool_alarm_thres\",l:\"tool_alarm_thres\"} } ]; maxIot.onDataUpdated(data); },5000);",
                        "methods" : "return { onDataUpdated(data) { if (data.length) { data.forEach((item) => { this.da[item.k.l]= item.v; }); var minutes=0; if(this.oldData.length==0){ this.oldData.push([0,this.da.tool_wear]); this.firstDate=this.da.tool_end_time; } else{ var minutes= this.getMinsDiff(this.da.tool_end_time,this.firstDate); this.oldData.push([minutes,this.da.tool_wear]); } this.curmin=minutes; var tool_wear_prid= eval (\"(\" + this.da.tool_wear_prid + \")\"); var arr=[]; arr.push([this.curmin,this.da.tool_wear]); arr.push([this.curmin+1,tool_wear_prid[0]]); arr.push([this.curmin+2,tool_wear_prid[1]]); arr.push([this.curmin+3,tool_wear_prid[2]]); this.option.series[0].data = this.oldData; this.option.series[1].data = arr; this.option.visualMap.pieces[0].lte=this.da.tool_alarm_thres; this.option.visualMap.pieces[1].gt=this.da.tool_alarm_thres; this.option.visualMap.pieces[1].lte=this.da.tool_warn_thres; this.option.visualMap.pieces[2].gt=this.da.tool_warn_thres; this.option.series[2].markArea.data[0][1].yAxis=this.da.tool_alarm_thres; this.option.series[3].markArea.data[0][0].yAxis= this.da.tool_alarm_thres; this.option.series[3].markArea.data[0][1].yAxis= this.da.tool_warn_thres; this.option.series[4].markArea.data[0][0].yAxis= this.da.tool_warn_thres; this.option.series[0].markLine.data[0].xAxis = minutes; } this.myChart = echarts.init(document.getElementById('mainChart2'));   this.myChart.setOption(this.option, true);}, onResize() { this.myChart.resize();}, getMinsDiff(date1,date2){ var date=new Date(date1).getTime() - new Date(date2).getTime(); var diffmins=date/(60*1000) ; return diffmins; }, getDatestr(){ var date=new Date(\"2018-06-10 12:20:20\"); date.setMinutes(date.getMinutes() + this.n++); return date; }, getData(){ this.a=this.a-0.02; return this.a; } }"
                    },
                    "defaultData" : {
                        "myChart" : null,
                        "n" : 1,
                        "a" : 1,
                        "firstDate" : "",
                        "oldData" : [],
                        "curmin" : 0,
                        "option" : {},
                        "da" : {}
                    },
                    "dataSources" : []
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
            "title" : "echart",
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
            "dataSources" : []
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "隔离线",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"top-row\"> <div class=\"col1\" id=\"title\"><embed src=\"./static/images/svg/bullet/green.svg\" />&nbsp;&nbsp;{{title}}</div> <div class=\"infomore\"></div></div>",
                    "templateCss" : ".top-row{ height: 50px; line-height: 50px; border-top: 1px solid rgba(255,255,255,0.3);} .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px; background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : {
                        "methods" : " return {onDataUpdated(data) { }, onResize() { }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '刀具剩余寿命'
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
            "dataSources" : []
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "刀具剩余寿命",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div style=\"height: 100px;\"> <div class=\"left\"> <div class=\"leftdiv\" id=\"tool_rul_perc\">70<em>%</em></div> <div class=\"rightdiv\"> <div style=\"width:100%;\"><span>0</span><span style=\"padding-left:calc(50% - 20px)\">50</span><span style=\"padding-left:calc(50% - 50px)\">100</span></div> <div class=\"barLife\"></div> </div> </div> <div class=\"right\"> <div class=\"righttxt\">刀具剩余寿命</div> <div class=\"right-sub-txt\" id=\"tool_rul\">122<em>min</em></div> </div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px; background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .leftdiv{ float:left; width:100px; height:100px; line-height:100px; font-size:50px; text-align: left; font-weight: normal; color:rgb(1, 198, 253); } .rightdiv{ float:left; width:calc(100% - 110px); margin-left:10px; margin-top:15px; } .txtdiv{ color:rgba(255,255,255,0.5); font-size:14px; font-weight: normal; } .barLife div{ width:4px; height: 35px; border-radius: 10px; background-color: rgba(255,255,255,0.3); float:left; margin-right:5px; } .bottomdiv{ margin-top:10px; } em{ font-size:18px; font-style:normal; } .rightdiv span{ color:rgba(255,255,255,0.5); font-weight: 100; } .left{ float:left; width:75%; } .right{ float:left; width:calc(25% - 60px); text-align: left; padding-left:60px; } .righttxt{ font-size:14px; color:rgba(255,255,255,0.5); font-weight:100; } .right-sub-txt{ font-size:50px; color:rgb(1, 198, 253); font-weight:100; } .alarm{ color: rgb(224, 79, 35); } .warn{ color: #EAB62A; } .ok{ color:rgba(49, 178, 231,1); }",
                    "controllerScript" : {
                        "mounted" : "maxIot.init(); $(window).resize(function () { maxIot.init(); maxIot.set($(\"#tool_rul_perc\").html(),'',''); }); setInterval(function () { const data = [ { v:1, t:1528358866224, k:{o:\"tool_warn\",l:\"tool_warn\"} }, { v:0, t:1528358866224, k:{o:\"tool_alarm\",l:\"tool_alarm\"} }, { v:10, t:1528358866224, k:{o:\"tool_rul_perc\",l:\"tool_rul_perc\"} }, { v:110, t:1528358866224, k:{o:\"tool_rul\",l:\"tool_rul\"} } ]; maxIot.onDataUpdated(data); }, 2000);",
                        "methods" : " return { onDataUpdated(data) { data.forEach((item) => { this.da[item.k.l]= item.v; }); this.set(this.da.tool_rul_perc,this.da.tool_warn,this.da.tool_alarm); $(\"#tool_rul\").html(this.da.tool_rul+\"<em>min</em>\");}, onResize() { }, init(){ var width=$(\".bar\").width(); var bar=$(\".barLife\"); bar.empty(); var n=width/9; for(var i=1;i<n;i++){ $(\".barLife\").append(\"<div></div>\"); } }, set(percent,tool_warn,tool_alarm){var width=$(\".barLife\").width(); var newwidth=percent/100.0*width; var n=newwidth/9; for(var i=0;i<n;i++){ if(tool_alarm==1){ $(\".barLife div\").eq(i).css(\"background-color\",\"rgb(224, 79, 35)\"); } else if(tool_warn==1){ $(\".barLife div\").eq(i).css(\"background-color\",\"#EAB62A\"); } else{ $(\".barLife div\").eq(i).css(\"background-color\",\"rgba(49, 178, 231, 0.8)\"); } } if(tool_alarm==1){ $(\"#tool_rul_perc\").removeClass(\"ok\").removeClass(\"warn\").addClass(\"alarm\"); $(\"#tool_rul\").removeClass(\"ok\").removeClass(\"warn\").addClass(\"alarm\"); } else if(tool_warn==1){ $(\"#tool_rul_perc\").removeClass(\"ok\").removeClass(\"alarm\").addClass(\"warn\"); $(\"#tool_rul\").removeClass(\"ok\").removeClass(\"alarm\").addClass(\"warn\"); } else{ $(\"#tool_rul_perc\").removeClass(\"alarm\").removeClass(\"warn\").addClass(\"ok\"); $(\"#tool_rul\").removeClass(\"alarm\").removeClass(\"warn\").addClass(\"ok\"); } $(\"#tool_rul_perc\").html(percent+\"<em>%</em>\");} } ",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '刀具剩余寿命',
                        "da" : {}
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
            "dataSources" : []
        },
        {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"main\"> <div id=\"spindle_status\" class=\"tpdiv\"> <div id=\"img\"><img src=\"./static/images/svg/meter/n.svg\"></div> <div id=\"status_txt\">主轴状态正常</div> </div> <div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\"> <div class=\"col1\"><img src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;主轴基础信息</div> </div> <div class=\"bottom-row\" style=\"margin-top:5px;\"> <div style=\"width:55%;\"><span>主轴编号</span><span>D09s361</span> </div> <div style=\"width:45%;\"><span>主轴设定转速</span><span id=\"RPM_set\">6000</span> </div> </div> <div class=\"bottom-row\" > <div style=\"width:55%;\"><span>主轴型号</span><span>SK 40 / HSK80</span> </div> <div style=\"width:45%;\"><span>主轴实际转速</span><span id=\"RPM_actual\">6000</span> </div> </div> </div> <div class=\"leftdiv-col2\"> <img src=\"./static/images/spindle.png\" /> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; background-color:#262d45; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:calc(82% - 20px); height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;} .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : {
                        "mounted" : "maxIot.formatData(maxIot.data)",
                        "methods" : " return { onDataUpdated(data) {if (data.length) { data.forEach((item) => { maxIot.data[item.k.l]= item.v; }); } maxIot.formatData(maxIot.data);}, onResize() { this.getCount = 0; },  formatData(data) {if(data.spindle_alarm === 1){ $(\"#spindle_status\").removeClass(\"tpdiv\").addClass(\"alarm\"); $(\"#status_txt\").html(\"主轴故障报警\");$(\"#img\").html('<img src=\"./static/images/svg/meter/a.svg\">'); } else{ $(\"#spindle_status\").removeClass(\"alarm\").addClass(\"tpdiv\"); $(\"#status_txt\").html(\"主轴状态正常\");  $(\"#img\").html('<img src=\"./static/images/svg/meter/n.svg\">');}} }",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "data" : {
                            "spindle_alarm" : 0
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
            "title" : "刀具基本信息",
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
                    "type" : "function",
                    "dataKeys" : [
                        {
                            "type" : "latest",
                            "name" : "f(x)",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                },
                {
                    "type" : "edgeClient",
                    "aliasId" : 1,
                    "dataKeys" : [
                        {
                            "type" : "attr",
                            "label" : "edgeClient1",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        },
                        {
                            "type" : "latest",
                            "label" : "edgeClient2",
                            "color" : "#ffd600",
                            "key" : "WaterPump",
                            "valueFunc" : "return {\n    areaName:\"S11\",\n    deviceType:\"WaterPump\",\n    belongTo:\"WaterCurtainPool\",\n    group:0,\n    category:1,\n    item:1,\n    telemetryValue:1\n}\n//水泵--水帘池"
                        }
                    ]
                }
            ]
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "轴故障预警",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"top-row\"> <div class=\"col1\" id=\"title\"><embed src=\"./static/images/svg/bullet/green.svg\" />&nbsp;&nbsp;{{title}}</div> <div class=\"infomore\">i</div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px; background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : {
                        "methods" : " return {onDataUpdated(data) {}, onResize() { }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '轴故障预警'
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
            "title" : "轴故障预警",
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
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "轴故障预警",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"app\" class=\"main\"> <div class=\"row-item statusok \"> <div class=\"colorwhite\">电流</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/elect/n.svg\"/></div><div class=\"col2\" id=\"spindle_current\"></div><div class=\"col3\">A</div> </div> <div class=\"row-item\"> <div>前轴承温度</div> <div id=\"font-div\" v-bind:class=\"currentData.temp_front_bearing>currentData.temp_thres_front_bearing ? 'alarm':'statusok'\"> <div id=\"front-img\" class=\"col1\" ><img src=\"./static/images/svg/spindleData/temp/n.svg\"/></div><div class=\"col2\" id=\"temp_front_bearing\"></div><div class=\"col3\" id=\"front-w\">℃</div> </div> </div> <div class=\"row-item\"> <div>后轴承温度</div> <div id=\"back-div\" v-bind:class=\"currentData.temp_back_bearing>currentData.temp_thres_back_bearing ? 'alarm':'statusok'\"> <div id=\"back-img\" class=\"col1\" ><img src=\"./static/images/svg/spindleData/temp/n.svg\"/></div><div class=\"col2\" id=\"temp_back_bearing\"></div><div class=\"col3\" id=\"back-w\">℃</div> </div> </div> <div class=\"row-item statusok\" > <div class=\"colorwhite\">负载</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/load/n.svg\"/></div><div class=\"col2\" id=\"spindle_load\"></div><div class=\"col3\">%</div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height:80px; border-bottom:1px solid rgba(255,255,255,0.3); font-size:12px; } .row-item{ height:45px; float:left; width:25%; color:rgba(255,255,255,0.5); } .row-item div img{ vertical-align: middle; } .col1{ width:20px; text-align: left; padding-left:0px; float:left; padding-top:13px; } .col2{ text-align: right; padding-left:13px; font-size:34px; width:40px; float:left; height: 40px; } .col3{ width:40px; text-align: left; padding-left:3px; float:left; padding-top:19px; font-size:16px; } .statusok{ color:#01c6fd; } .alarm{ color:#EAb62A; } .colorwhite{ color:rgba(255,255,255,0.5); }",
                    "controllerScript" : {
                        "mounted" : "setInterval(function () { const params = [ { v : maxIot.getRandom(0, 100), t : 1528358866224, k : {o : \"temp_front_bearing\", l : \"temp_front_bearing\"} }, { v : maxIot.getRandom(0, 100), t : 1528358866224, k : {o : \"temp_back_bearing\", l : \"temp_back_bearing\"} }, { v : maxIot.getRandom(0, 100), t : 1528358866224, k : {o : \"spindle_load\", l : \"spindle_load\"} }, { v : maxIot.getRandom(0, 100), t : 1528358866224, k : {o : \"spindle_current\", l : \"spindle_current\"} }, { v : 40, t : 1528358866224, k : {o : \"temp_thres_front_bearing\", l : \"temp_thres_front_bearing\"} }, { v : 40, t : 1528358866224, k : {o : \"temp_thres_back_bearing\", l : \"temp_thres_back_bearing\"} }]; maxIot.onDataUpdated(params); }, 2000);",
                        "methods" : " return {onDataUpdated(data) {if (data.length) {data.forEach((item) => { this.currentData[item.k.l]= item.v; });  $(\"#temp_front_bearing\").html( this.currentData.temp_front_bearing); $(\"#temp_back_bearing\").html( this.currentData.temp_back_bearing); $(\"#spindle_current\").html( this.currentData.spindle_current); $(\"#spindle_load\").html( this.currentData.spindle_load); if( this.currentData.temp_front_bearing>= this.currentData.temp_thres_front_bearing){ $(\"#font-div\").removeClass(\"statusok\").addClass(\"alarm\"); $(\"#front-w\").css(\"font-size\",\"34px\"); $(\"#front-w\").css(\"padding-top\",\"0px\"); $(\"#front-img\").html('<img src=\"./static/images/svg/spindleData/temp/a.svg\">');} else{ $(\"#font-div\").removeClass(\"alarm\").addClass(\"statusok\"); $(\"#front-w\").css(\"font-size\",\"16px\"); $(\"#front-w\").css(\"padding-top\",\"19px\");  $(\"#front-img\").html('<img src=\"./static/images/svg/spindleData/temp/n.svg\">'); } if( this.currentData.temp_back_bearing>= this.currentData.temp_thres_back_bearing){ $(\"#back-div\").removeClass(\"statusok\").addClass(\"alarm\"); $(\"#back-w\").css(\"font-size\",\"34px\"); $(\"#back-w\").css(\"padding-top\",\"0px\");  $(\"#back-img\").html('<img src=\"./static/images/svg/spindleData/temp/a.svg\">');} else{ $(\"#back-div\").removeClass(\"alarm\").addClass(\"statusok\"); $(\"#back-w\").css(\"font-size\",\"16px\"); $(\"#back-w\").css(\"padding-top\",\"19px\"); $(\"#back-img\").html('<img src=\"./static/images/svg/spindleData/temp/n.svg\">');} }}, onResize() { }, getRandom(min, max) { const r = Math.random() * (max - min); let re = Math.round(r + min); re = Math.max(Math.min(re, max), min); return re; }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "currentData" : {
                            "temp_front_bearing" : 9,
                            "temp_back_bearing" : 10,
                            "spindle_load" : 20,
                            "spindle_current" : 80,
                            "temp_thres_front_bearing" : 10
                        }
                    },
                    "dataSources" : []
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
            "title" : "轴故障预警图",
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
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴健康风险监测 ",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div class=\"top-row\"> <div class=\"col1\" id=\"title\"><embed src=\"./static/images/svg/bullet/green.svg\" />&nbsp;&nbsp;{{title}}</div> <div class=\"infomore\"></div> </div>",
                    "templateCss" : ".top-row{ height: 40px; line-height: 40px; } .col1{ width:auto; font-size:14px; float:left; letter-spacing: 2px; } .col1 img{ vertical-align: middle; } .obj { clear:both; height: 0px; width:100%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .infomore{ margin-top:13px; width:16px; height:16px; line-height:16px; border-radius:10px;background: url(./static/images/svg/info/n.svg) no-repeat; float:right; text-align:center; color:rgba(0,0,0,.5); font-size:12px; font-weight:bold; } .infomore:hover{ background: url(./static/images/svg/info/h.svg) no-repeat; content:\"\"; }",
                    "controllerScript" : {
                        "mounted" : "maxIot.init(); $(window).resize(function () { maxIot.init(); maxIot.set($(\"#spindle_fcft_score\").html(),''); }); setInterval(function () { const data = [ { v : Math.random().toFixed(1), t : 1528358866224, k : {o : \"spindle_fcft_score\", l : \"spindle_fcft_score\"} }, { v : 1, t : 1528358866224, k : {o : \"spindle_alarm\", l : \"spindle_alarm\"} }, { v : 40, t : 1528358866224, k : {o : \"spindle_thres\", l : \"spindle_thres\"} } ]; maxIot.onDataUpdated(data); }, 2000);",
                        "methods" : " return { onDataUpdated(data) { data.forEach((item) => { this.da[item.k.l]= item.v; }); this.set(this.da.spindle_fcft_score, this.da.spindle_alarm);}, onResize() { }, init () { var width = $(\".bar\").width(); var bar = $(\".bar\"); bar.empty(); var n = width / 9; for (var i = 1; i < n; i++) { $(\".bar\").append(\"<div></div>\"); } } , set (percent, spindle_alarm) { var width = $(\".bar\").width(); var newwidth = percent * width; var n = newwidth / 9; for (var i = 0; i < n; i++) { if (spindle_alarm == 1) { $(\".bar div\").eq(i).css(\"background-color\", \"rgb(224, 79, 35)\"); } else { $(\".bar div\").eq(i).css(\"background-color\", \"rgba(49, 178, 231, 0.8)\"); } } if (spindle_alarm == 1) { $(\"#spindle_fcft_score\").removeClass(\"ok\").addClass(\"alarm\"); } else { $(\"#spindle_fcft_score\").removeClass(\"alarm\").addClass(\"ok\"); } $(\"#spindle_fcft_score\").html(percent); }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '主轴健康风险监测 ',
                        "da" : {
                            "spindle_fcft_score" : 0,
                            "spindle_alarm" : 1,
                            "spindle_thres" : 40
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
            "title" : "主轴健康风险监测 ",
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
        }, {
            "type" : "html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "主轴健康风险监测图表",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div> <div class=\"txtdiv\">健康值</div> <div class=\"bottomdiv\"> <div class=\"leftdiv\" id=\"spindle_fcft_score\">0</div> <div class=\"rightdiv\"> <div style=\"width:100%;\"><span>0</span><span style=\"padding-left:calc(50% - 20px)\">0.5</span><span style=\"padding-left:calc(50% - 50px)\">1.0</span></div> <div class=\"bar\"></div> </div> </div> </div>",
                    "templateCss" : ".leftdiv{ float:left; width:80px; height:65px; line-height:75px; font-size:50px; text-align: center; font-weight: normal; } .rightdiv{ float:left; width:calc(100% - 95px); margin-left:10px; } .txtdiv{ color:rgba(255,255,255,0.5); font-size:14px; font-weight: normal; } .bar div{ width:4px; height: 35px; border-radius: 10px; background-color: rgba(255,255,255,0.3); float:left; margin-right:5px; } .bottomdiv{ margin-top:10px; } em{ font-size:18px; } .rightdiv span{ color:rgba(255,255,255,0.5); } .alarm{ color: rgb(224, 79, 35); } .ok{ color:rgba(49, 178, 231,1); }",
                    "controllerScript" : {
                        "methods" : " return {onDataUpdated(data) { }, onResize() { }}",
                        "onDestroy" : "console.log('销毁')"
                    },
                    "defaultData" : {
                        "title" : '主轴健康风险监测图表 '
                    },
                    "dataSources" : []
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
            "dataSources" : []
        }, {
            "type" : "canvas | html",
            "version" : "1.0.0",
            "templateId" : "2",
            "template" : {
                "id" : "3f825d20-fe01-11e7-83b5-9b9f49d154f1",
                "version" : "1.0.0",
                "name" : "健康风险变化曲线 ",
                "type" : "html",
                "templateType" : "echart",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"riskChart\" style=\"width: 100%;height:300px;\"></div>",
                    "templateCss" : "",
                    "controllerScript" : {
                        "mounted" : "const data= [ { \"value\": 0, \"date\": \"2012-05-01\" }, { \"value\": 0.1, \"date\": \"2012-05-02\" }, { \"value\": 0.15, \"date\": \"2012-05-03\" }, { \"value\": 0.15, \"date\": \"2012-05-04\" }, { \"value\": 0.15, \"date\": \"2012-05-05\" }, { \"value\":0.15, \"date\": \"2012-05-06\" }, { \"value\":0.15, \"date\": \"2012-05-07\" }, { \"value\": 0.15, \"date\": \"2012-05-08\" }, { \"value\": 0.15, \"date\": \"2012-05-09\" }, { \"value\": 0.15, \"date\": \"2012-05-10\" }, { \"value\": 0.15, \"date\": \"2012-05-11\" }, { \"value\": 0.15, \"date\": \"2012-05-12\" }, { \"value\":0.15, \"date\": \"2012-05-13\" }, { \"value\": 0.15, \"date\": \"2012-05-14\" }, { \"value\":0.15, \"date\": \"2012-05-15\" }, { \"value\": 0.15, \"date\": \"2012-05-16\" }, { \"value\":0.15, \"date\": \"2012-05-17\" }, { \"value\": 0.15, \"date\":\"2012-05-18\" }, { \"value\": 0.15, \"date\": \"2012-05-19\" }, { \"value\":0.15, \"date\": \"2012-05-20\" }, { \"value\":0.15, \"date\": \"2012-05-21\" }, { \"value\": 0.15, \"date\": \"2012-05-22\" }, { \"value\": 0.15, \"date\": \"2012-05-23\" }, { \"value\": 0.5, \"date\": \"2012-05-24\" }, { \"value\":0.15, \"date\": \"2012-05-25\" }, { \"value\":0.15, \"date\": \"2012-05-26\" }, { \"value\":0.15, \"date\": \"2012-05-27\" }, { \"value\": 0.15, \"date\": \"2012-05-28\" }, { \"value\":0.15, \"date\": \"2012-05-29\" }, { \"value\":0.15, \"date\": \"2012-05-30\" } ];  maxIot.myChart = echarts.init(document.getElementById('riskChart')); maxIot.option = { title: { text: '健康风险变化曲线', left:'‘0%', top:'0%', textStyle:{ color:'rgba(255,255,255,0.5)', fontStyle:'normal', fontFamily:'sans-serif', fontSize:14 } }, tooltip: { trigger: 'axis', formatter: function (params) { params = params[0]; return \"日期 <span style='color:#01c6fd' >\"+ params.name+ \"</span><br/>风险值 <span style='color:#01c6fd'>\"+ params.value+ \"</span>\"; }, axisPointer: { type: 'cross', animation: false, label: { backgroundColor: '#505765' } }, textStyle:{ color:'rgba(255,255,255,0.5)' } }, xAxis: { type: 'category', boundaryGap: true, name:'日期(天)', nameLocation:'end', nameGap:20, axisLine:{ lineStyle:{ color:'rgba(255,255,255,0.5)' } } ,axisLabel: { formatter: function (value, idx) { var date = new Date(value); return [date.getMonth() + 1, date.getDate()].join('/'); }, interval:1 }, splitLine: { show: false } }, yAxis: { type: 'value', name:'风险值', nameTextStyle:{ color:'rgba(255,255,255,0.5)', fontSize:'14' }, nameGap:30, axisTick:{ length:'0' }, axisLine:{ lineStyle:{ color:'rgba(255,255,255,0.5)' } }, }, grid:{ left:36, top:90 }, visualMap: { top: 10, right: 10, pieces: [{ gt: 0, lte: 0.2, color: '#01c5fd' }, { gt:0.2, lte: 0.4, color: '#EAB62A' }, { gt: 0.4, lte: 1, color: '#E04F23' }], outOfRange: { color: '#999' }, show:false }, color:['#01c5fd','#EAB62A','rgba(224,79,35,0.1)'], series: [{ type: 'line', showSymbol:false, symbolSize:0, itemStyle:{ normal:{ color:'#20aefc', show:false } }, itemStyle: { normal: { borderWidth: 3, borderColor: 'yellow', color: 'blue' } } }, { name:'低风险', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 3 } }, markArea: { data: [[{ yAxis: '0' }, { yAxis: '0.2' }]] }, },{ name:'中等风险', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.2' }, { yAxis: '0.4' }]] } },{ name:'高风险', type:'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.4' }, { yAxis: '1' }]] } }] }; maxIot.option.series[0].data = data.map(function (item) { return item.value; }); maxIot.myChart.setOption(maxIot.option, true);",
                        "methods" : "return { onDataUpdated(data) {}, onResize() {this.myChart.resize();}}"
                    },
                    "defaultData" : {
                        "option" : {},
                        "myChart" : null
                    },
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
            "title" : "echart",
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
        }
    ]
};

export { dashboard };
