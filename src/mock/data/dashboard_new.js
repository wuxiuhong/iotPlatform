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
    "edgeClientAliases" : [
        {
            "aliasId" : 1,
            "alias" : "别名1",
            "edgeClients" : [
                {
                    "edgeClientId" : "6147f73d-07f5-4f1f-94b3-887f8e216e77",
                    "edgeClientName" : "C-edgeclient",
                    "deviceList" : [
                        {"id" : "6147f73d-07f5-4f1f-94b3-887f8e216e77", "name" : "冲压机1", "keys" : ["k1", "k2"]},
                        {"id" : "5f4f7ca0-fda7", "name" : "冲压机2", "keys" : ["k1", "k2", "k3"]}
                    ]
                },
                {
                    "edgeClientId" : "9147f73d-07f5-4f1f-94b3-887f8e216e78",
                    "edgeClientName" : "D-edgeclient",
                    "deviceList" : [
                        {"id" : "6147f73d-07f5-4f1f-94b3-887f8e216e77", "name" : "冲压机3", "keys" : ["k1", "k2"]},
                        {"id" : "5f4f7ca0-fda7", "name" : "冲压机4", "keys" : ["k1", "k2", "k3"]}
                    ]
                }
            ]
        },
        {
            "aliasId" : 2,
            "alias" : "C-edgeclient",
            "edgeClients" : [
                {
                    "edgeClientId" : "6147f73d-07f5-4f1f-94b3-887f8e216e77",
                    "edgeClientName" : "C-edgeclient",
                    "deviceList" : [
                        {"id" : "6147f73d-07f5-4f1f-94b3-887f8e216e77", "name" : "冲压机4", "keys" : ["k1", "k2"]},
                        {"id" : "5f4f7ca0-fda7", "name" : "冲压机6", "keys" : ["k1", "k2", "k3"]}
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
                "name" : "html组件名称",
                "type" : "html",
                "templateType" : "组件模板类型",
                "image" : "缩略图",
                "createTime" : "2018-5-28",
                "template" : {
                    "dependent" : [],
                    "templateHtml" : "<div id=\"maxiot_cd_comp1_app\" class=\"main\"> <div class=\"leftdiv\"><img src=\"./static/images/cnc.png\"></div> <div class=\"rightdiv\"> <div class=\"bottom-row\"> <div style=\"color:#04c1b0;\"><img src=\"./static/images/svg/bullet/green.svg\" style=\"\"/>&nbsp;&nbsp;机床信息</div> <div><span>设备编号</span><span>22323423</span></div> <div><span>设备型号</span><span>快捷设备DEPO SPEED</span></div> <div><span>类别</span><span>立式</span></div> <div><span>入厂日期</span><span>2001/01/05</span></div> <div><span>年限</span><span>14.2</span></div> </div> <div class=\"bottom-row\"> <div><span>机床状态</span> <span v-if=\"da.opstate === 1\" style=\"color:#09a4d5;\" >在线 &nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\" /></span> <span v-else style=\"color:#09a4d5;\" >离线 &nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/offline.svg\" /></span> </div> <div><span>网络状态</span><span style=\"color:#7ed651;\">在线&nbsp;&nbsp;<img src=\"./static/images/svg/internetStats/online.svg\"/></span></div> <div><span>加工件数</span><span id=\"workcount\">{{da.workcount}}</span></div> <div><span>开机时间</span><span id=\"poweronTime\">{{da.poweronTime}}h</span></div> <div><span>循环时间</span><span id=\"cycletime\">{{da.cycletime}}h</span></div> <div><span>运行时间</span><span id=\"operatingTime\">{{da.operatingTime}}m</span></div> </div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 100px; background-color:#262d45; color:rgba(255,255,255,0.7); font-size:14px; overflow: auto; } .leftdiv{ float:left; width:190px; height:100px; line-height:100px;}.leftdiv img{ vertical-align: middle; } .rightdiv{ float:left; width:calc(100% - 190px); height:calc(100% - 15px); padding-top:15px; } .bottom-row{ height:35px; line-height: 35px; float:left; width:100%; } .bottom-row div{ float:left; width:16%; color:#ededef; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; } .bottom-row div span:first-child{ padding-right:10px; color:rgba(255,255,255,0.5); } .bottom-row div img{ vertical-align: middle; }",
                    "controllerScript" : "self.data = { da: {}, data: [ { v: '运行', t: 1528358866224, k: {o: \"opstate\", l: \"opstate\"} }, { v: 2, t: 1528358866224, k: {o: \"workcount\", l: \"workcount\"} }, { v: 6, t: 1528358866224, k: {o: \"poweronTime\", l: \"poweronTime\"} }, { v: 6, t: 1528358866224, k: {o: \"cycletime\", l: \"cycletime\"} }, { v: 5, t: 1528358866224, k: {o: \"operatingTime\", l: \"operatingTime\"} }] }; self.onInit = function () { self.onDataUpdated(self.data.data); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { };",
                    "defaultData" : {
                        "da" : {
                            "workcount" : "1",
                            "poweronTime" : "2",
                            "cycletime" : "3",
                            "operatingTime" : "4",
                            "opstate" : 1
                        }
                    },
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
            "dataSources" : []
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
                    "templateCss" : ".empty-component{ width:100%; height: 100%;  background-color:#262d45;  } ",
                    "controllerScript" : "",
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
                "width" : "100%",
                "height" : 740,
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
                    "controllerScript" : "",
                    "defaultData" : {
                        "currentData" : {
                            "tool_break_alarm" : 1,
                            "z_load" : "30%"
                        }
                    },
                    "dataSources" : []
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
            "dataSources" : []
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
                    "controllerScript" : "",
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
                    "controllerScript" : "self.data = { da: {}, option: {}, a: 1 }; self.onInit = function () { self.data.option = { tooltip: { formatter: \"{a} <br/>{b} : {c}%\" }, series: [ { name: '业务指标', type: 'gauge', startAngle: 210, endAngle: -30, data: [{value: 50, name: '磨损百分比'}], min: 0, max: 100, splitNumber: 2, radius: '80%', axisLine: { lineStyle: { \"width\": 10, color: [ [0.6, '#01C6FD'], [0.8, '#EAB62A'], [1, '#E04F23'] ] } }, axisTick: {show: false}, splitLine: { length: 10, lineStyle: { color: 'auto' }, show: false }, pointer: { width: 3 }, title: { offsetCenter: [0, '30%'], }, axisLabel: {}, detail: { fontWeight: 'normal', color: 'rgba(49, 178, 231,1)', offsetCenter: [\"0%\", \"80%\"], formatter: function (value) { return \"{a|\" + value + \"}\" + \"{b|%}\"; }, rich: { a: { fontSize: 44 }, b: { fontSize: 22, padding: 5, verticalAlign: 'bottom' } } } } ] }; var myChart = self.ctx.echarts.init(document.getElementById('mainChart')); setInterval(function () { self.data.option.series[0].data[0].value = self.getData(); myChart.setOption(self.data.option, true); }, 500); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); self.data.option.series[0].data[0].value = self.data.da.tool_wear_ratio; }; self.onResize = function () { self.ctx.echarts.resize(); }; self.onDestroy = function () { console.log(\"销毁\") }; self.getData = function () { if (self.data.a < 0) { self.data.a = 1; } var result = ((1 - self.data.a) * 100).toFixed(0); self.data.a = self.data.a - 0.02; return result; };",
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
                    "controllerScript" : "self.data = { da: {}, option: {}, a: 1, myChart:{}, n: 1, curmin: 0, oldData : [], firstDate:\"\" }; self.onInit = function () { self.data.option = { title: { text: '刀具衰退趋势图', left: '‘0%', top: '0%', textStyle: { color: 'rgba(255,255,255,0.5)', fontStyle: 'normal', fontFamily: 'sans-serif', fontSize: 14 } }, tooltip: { trigger: 'axis', formatter: function (params) { params = params[0]; return \"磨损量 <span style='color:#01c6fd' >\" + params.value[1] + \"mm</span>\"; }, axisPointer: { type: 'cross', animation: false, label: { backgroundColor: '#505765' } }, textStyle: { color: 'rgba(255,255,255,0.5)' } }, xAxis: { type: 'value', boundaryGap: false, name: '(mins)', nameGap: 20, splitNumber: 16, axisLine: { lineStyle: { color: 'rgba(255,255,255,0.5)' } }, axisLabel: { interval: 5 }, splitLine: { show: false } }, yAxis: { type: 'value', name: '磨损量（mm）', nameTextStyle: { color: '#399fae', fontSize: '16px' }, nameGap: 30, axisTick: { length: '0' }, axisLine: { lineStyle: { color: 'rgba(255,255,255,0.5)' } }, }, grid: { left: 36, top: 90 }, visualMap: { top: 10, right: 10, pieces: [{ gt: 0, lte: 0.2, color: '#E04F23' }, { gt: 0.2, lte: 0.4, color: '#EAB62A' }, { gt: 0.4, lte: 1, color: '#01c5fd' }], outOfRange: { color: '#999' }, show: false }, color: ['#E04F23', '#EAB62A', '#01c5fd'], series: [ { data: [], type: 'line', showSymbol: false, symbolSize: 1, smooth: true, itemStyle: { normal: { borderWidth: 3, borderColor: 'white', color: 'blue' } }, markLine: { data: [{name: '最小值', xAxis: 0}], lineStyle: { type: 'solid', color: '#000' }, symbol: '', label: { show: false } } }, { data: [], type: 'line', symbol: 'none', smooth: true, itemStyle: { normal: { color: '#20aefc', show: false } }, lineStyle: { normal: { width: 4, type: 'dashed' } } }, { name: '低故障率', type: 'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 3 } }, markArea: { data: [[{ yAxis: '0' }, { yAxis: '0.2' }]] }, }, { name: '中等故障率', type: 'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.2' }, { yAxis: '0.4' }]] } }, { name: '高故障率', type: 'line', animation: false, areaStyle: { normal: {} }, lineStyle: { normal: { width: 1 } }, markArea: { data: [[{ yAxis: '0.4' }, { yAxis: '1' }]] } }] }; self.data.myChart = self.ctx.echarts.init(document.getElementById('mainChart2')); setInterval(function () { var datanow = self.getData(); var datapre = \"[\" + (datanow - 0.02) + \",\" + (datanow - 0.04) + \",\" + (datanow - 0.06) + \"]\"; var data = [ { v: '2018-06-10 12:19:20', t: 1528358866224, k: {o: \"tool_start_time\", l: \"tool_start_time\"} }, { v: self.getDatestr(), t: 1528358866224, k: {o: \"tool_end_time\", l: \"tool_end_time\"} }, { v: datanow, t: 1528358866224, k: {o: \"tool_wear\", l: \"tool_wear\"} }, { v: datapre, t: 1528358866224, k: {o: \"tool_wear_prid\", l: \"tool_wear_prid\"} }, { v: 0, t: 1528358866224, k: {o: \"tool_alarm\", l: \"tool_alarm\"} }, { v: 1, t: 1528358866224, k: {o: \"tool_warn\", l: \"tool_warn\"} }, { v: 0.4, t: 1528358866224, k: {o: \"tool_warn_thres\", l: \"tool_warn_thres\"} }, { v: 0.2, t: 1528358866224, k: {o: \"tool_alarm_thres\", l: \"tool_alarm_thres\"} } ]; if (self.data.a < 0) { self.data.a = 1; self.data.oldData = []; self.data.myChart.resize(); } else { self.onDataUpdated(data); } }, 2000); }; self.onDataUpdated = function (data) { var minutes = 0; self.ctx.$.each(data, function (i, obj) { self.data.da[obj.k.o] = obj.v; }); if (self.data.oldData.length == 0) { self.data.oldData.push([0, self.data.da.tool_wear]); self.data.firstDate = self.data.da.tool_end_time; } else { var minutes = self.getMinsDiff(self.data.da.tool_end_time, self.data.firstDate); self.data.oldData.push([minutes, self.data.da.tool_wear]); } self.data.curmin = minutes; var tool_wear_prid = eval(\"(\" + self.data.da.tool_wear_prid + \")\"); var arr = []; arr.push([self.data.curmin, self.data.da.tool_wear]); arr.push([self.data.curmin + 1, tool_wear_prid[0]]); arr.push([self.data.curmin + 2, tool_wear_prid[1]]); arr.push([self.data.curmin + 3, tool_wear_prid[2]]); self.data.option.series[0].data = self.data.oldData; self.data.option.series[1].data = arr; self.data.option.visualMap.pieces[0].lte = self.data.da.tool_alarm_thres; self.data.option.visualMap.pieces[1].gt = self.data.da.tool_alarm_thres; self.data.option.visualMap.pieces[1].lte = self.data.da.tool_warn_thres; self.data.option.visualMap.pieces[2].gt = self.data.da.tool_warn_thres; self.data.option.series[2].markArea.data[0][1].yAxis = self.data.da.tool_alarm_thres; self.data.option.series[3].markArea.data[0][0].yAxis = self.data.da.tool_alarm_thres; self.data.option.series[3].markArea.data[0][1].yAxis = self.data.da.tool_warn_thres; self.data.option.series[4].markArea.data[0][0].yAxis = self.data.da.tool_warn_thres; self.data.option.series[0].markLine.data[0].xAxis = minutes; self.data.myChart.setOption(self.data.option, true); }; self.onResize = function () { self.data.myChart.resize(); }; self.onDestroy = function () { }; self.getMinsDiff = function (date1, date2) { var date = new Date(date1).getTime() - new Date(date2).getTime(); var diffmins = date / (60 * 1000); return diffmins; }; self.getDatestr = function () { var date = new Date(\"2018-06-10 12:20:20\"); date.setMinutes(date.getMinutes() + self.data.n++); return date; }; self.getData = function () { self.data.a = self.data.a - 0.02; return self.data.a; };",
                    "defaultData" : {},
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
                    "controllerScript" : "",
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
        },
        {
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
                    "controllerScript" : "",
                    "defaultData" : {},
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
                    "templateHtml" : "<div class=\"main\" id=\"maxiot_cd_comp3_main\"> <div id=\"spindle_status\" v-bind:class=\"{alarm:da.alarm,tpdiv:!da.alarm}\"> <div v-if=\"da.alarm\"><img src=\"./static/images/svg/meter/a.svg\"></div> <div v-else><img src=\"./static/images/svg/meter/n.svg\"></div> <div>{{da.statustxt}}</div> </div> <div class=\"leftdiv\"> <div class=\"leftdiv-col1\"> <div class=\"top-row\"> <div class=\"col1\"><img src=\"./static/images/svg/bullet/green.svg\"/>&nbsp;&nbsp;主轴基础信息</div> </div> <div class=\"bottom-row\" style=\"margin-top:5px;\"> <div style=\"width:55%;\"><span>主轴编号</span><span>D09s361</span></div> <div style=\"width:45%;\"><span>主轴设定转速</span><span id=\"RPM_set\">{{da.RPM_set}}</span></div> </div> <div class=\"bottom-row\"> <div style=\"width:55%;\"><span>主轴型号</span><span>SK 40 / HSK80</span></div> <div style=\"width:45%;\"><span>主轴实际转速</span><span id=\"RPM_actual\">{{da.RPM_actual}}</span></div> </div> </div> <div class=\"leftdiv-col2\"> <img src=\"./static/images/spindle.png\"/> </div> <hr/> </div> </div>",
                    "templateCss" : ".main{ width:100%; height: 140px; background-color:#262d45; color:rgba(255,255,255,0.5); font-size:13px; } .tpdiv{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; background-color:#262d45; margin:0 auto; text-align:center; border:3px solid rgba(49, 178, 231, 0.8); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; } .leftdiv{ float:left; width:calc(82% - 20px); height:100%; padding-left:20px; } .top-row{ height: 40px; line-height: 40px; } .col1{ width:300px; font-size:14px; letter-spacing: 2px; color:#07b3a5; } .bottom-row{ height: 35px; line-height: 35px; } .bottom-row div{ float:left; width:50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;} .bottom-row div span{ width:auto; padding-right:20px; color:rgba(255,255,255,0.9); } .bottom-row div span:first-child{ color:rgba(255,255,255,0.5); } .obj { clear:both; height: 0px; width: 20%; min-width:300px; border: 1px solid rgba(24, 174, 156,0.5); border-radius: 0 50% 50% 0; } .col1 img{ vertical-align: middle; } hr{ margin-top: 23px; clear: both; display: inline-block; width: 100%; border:none; border-top:1px solid rgba(255,255,255,0.3); } .leftdiv-col1{ float:left; width:calc(100% - 130px); } .leftdiv-col2{ float:right; width:90px; padding-top:40px; } .alarm{ width:calc(18% - 6px); height:96px; float:left; vertical-align: middle; margin:0 auto; text-align:center; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; color:rgba(255,255,255,0.9); padding-top:38px; background: linear-gradient(to right,#E04F23,#EAB62A); }",
                    "controllerScript" : "self.data = { da: {}, data: [], spindle_alarm: 0 }; self.onInit = function () { setInterval(function () { var data = [ { v: self.getstatus(), t: 1528358866224, k: {o: \"spindle_alarm\", l: \"spindle_alarm\"} }, { v: 5000, t: 1528358866224, k: {o: \"RPM_set\", l: \"RPM_set\"} }, { v: 6600, t: 1528358866224, k: {o: \"RPM_actual\", l: \"RPM_actual\"} }]; self.onDataUpdated(data); }, 10000); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); if (self.data.da.spindle_alarm === 1) { self.data.da.alarm=true; self.data.da.statustxt = '主轴故障报警'; } else { self.data.da.alarm=false; self.data.da.statustxt = '主轴状态正常\"'; } }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { }; self.getstatus = function () { if (self.data.spindle_alarm === 0) { self.data.spindle_alarm = 1; } else { self.data.spindle_alarm = 0; } return self.data.spindle_alarm; };",
                    "defaultData" : {
                        "da" : {
                            "RPM_set" : "1",
                            "RPM_actual" : "2",
                            "spindle_alarm" : "1",
                            "statustxt" : "主轴状态正常",
                            "alarm" : true
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
            "dataSources" : []
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
                    "controllerScript" : "",
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
                    "templateHtml" : "<div id=\"maxiot_cd_comp4_app\" class=\"main\"> <div class=\"row-item statusok \"> <div class=\"colorwhite\">电流</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/elect/n.svg\"/></div> <div class=\"col2\" id=\"spindle_current\">{{da.spindle_current}}</div> <div class=\"col3\">A</div> </div> <div class=\"row-item\"> <div>前轴承温度</div> <div id=\"font-div\" v-bind:class=\"data.alarm1 ? 'alarm':'statusok'\"> <div id=\"front-img\" class=\"col1\"><img src=\"./static/images/svg/spindleData/temp/n.svg\"/></div> <div class=\"col2\" id=\"temp_front_bearing\">{{da.temp_front_bearing}}</div> <div class=\"col3\" id=\"front-w\">℃</div> </div> </div> <div class=\"row-item\"> <div>后轴承温度</div> <div id=\"back-div\" v-bind:class=\"data.alarm2 ? 'alarm':'statusok'\"> <div id=\"back-img\" class=\"col1\"><img src=\"./static/images/svg/spindleData/temp/n.svg\"/></div> <div class=\"col2\" id=\"temp_back_bearing\">{{da.temp_back_bearing}}</div> <div class=\"col3\" id=\"back-w\">℃</div> </div> </div> <div class=\"row-item statusok\"> <div class=\"colorwhite\">负载</div> <div class=\"col1\"><img src=\"./static/images/svg/spindleData/load/n.svg\"/></div> <div class=\"col2\" id=\"spindle_load\">{{da.spindle_load}}</div> <div class=\"col3\">%</div> </div> </div>",
                    "templateCss" : ".main{ width:100%; height:80px; border-bottom:1px solid rgba(255,255,255,0.3); font-size:12px; } .row-item{ height:45px; float:left; width:25%; color:rgba(255,255,255,0.5); } .row-item div img{ vertical-align: middle; } .col1{ width:20px; text-align: left; padding-left:0px; float:left; padding-top:13px; } .col2{ text-align: right; padding-left:13px; font-size:34px; width:40px; float:left; height: 40px; } .col3{ width:40px; text-align: left; padding-left:3px; float:left; padding-top:19px; font-size:16px; } .statusok{ color:#01c6fd; } .alarm{ color:#EAb62A; } .colorwhite{ color:rgba(255,255,255,0.5); }",
                    "controllerScript" : "self.data = { da: {}, data: [], frontw: 35, backw: 35, alarm1:false, alarm2:false }; self.getTemp = function () { self.data.frontw++; self.data.backw++; if (self.data.frontw == 46) { self.data.frontw = 35; self.data.backw = 35; } return { frontw: self.data.frontw, backw: self.data.backw } }; self.onInit = function () { setInterval(function () { var getData = self.getTemp(); var data = [ { v: getData.frontw, t: 1528358866224, k: {o: \"temp_front_bearing\", l: \"temp_front_bearing\"} }, { v: getData.backw, t: 1528358866224, k: {o: \"temp_back_bearing\", l: \"temp_back_bearing\"} }, { v: self.getRandom(0, 100), t: 1528358866224, k: {o: \"spindle_load\", l: \"spindle_load\"} }, { v: self.getRandom(0, 100), t: 1528358866224, k: {o: \"spindle_current\", l: \"spindle_current\"} }, { v: 40, t: 1528358866224, k: {o: \"temp_thres_front_bearing\", l: \"temp_thres_front_bearing\"} }, { v: 40, t: 1528358866224, k: {o: \"temp_thres_back_bearing\", l: \"temp_thres_back_bearing\"} }]; self.onDataUpdated(data); }, 2000); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); if (self.data.da.temp_front_bearing >= self.data.da.temp_thres_front_bearing) { self.data.alarm1=true; self.ctx.$(\"#front-w\").css(\"font-size\", \"34px\"); self.ctx.$(\"#front-w\").css(\"padding-top\", \"0px\"); self.ctx.$(\"#front-img\").html('<img src=\"./static/images/svg/spindleData/temp/a.svg\">'); } else { self.data.alarm1 = false; self.ctx.$(\"#front-w\").css(\"font-size\", \"16px\"); self.ctx.$(\"#front-w\").css(\"padding-top\", \"19px\"); self.ctx.$(\"#front-img\").html('<img src=\"./static/images/svg/spindleData/temp/n.svg\">'); } if (self.data.da.temp_back_bearing >= self.data.da.temp_thres_back_bearing) { self.data.alarm2=true; self.ctx.$(\"#back-w\").css(\"font-size\", \"34px\"); self.ctx.$(\"#back-w\").css(\"padding-top\", \"0px\"); self.ctx.$(\"#back-img\").html('<img src=\"./static/images/svg/spindleData/temp/a.svg\">'); } else { self.data.alarm2=false; self.ctx.$(\"#back-w\").css(\"font-size\", \"16px\"); self.ctx.$(\"#back-w\").css(\"padding-top\", \"19px\"); self.ctx.$(\"#back-img\").html('<img src=\"./static/images/svg/spindleData/temp/n.svg\">'); } }; self.onResize = function () { }; self.onDestroy = function () { }; self.onPendding = function () { }; self.getRandom = function (min, max) { var r = Math.random() * (max - min); var re = Math.round(r + min); re = Math.max(Math.min(re, max), min); return re; }",
                    "defaultData" : {
                        "da" : {
                            "temp_front_bearing" : "1",
                            "temp_back_bearing" : "2",
                            "spindle_load" : "1",
                            "spindle_current" : "46"
                        },
                        "data" : {
                            "alarm1" : false,
                            "alarm2" : false
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
                    "controllerScript" : "",
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
                    "controllerScript": "self.data = { da: {}, i: 1 }; self.onInit = function () { self.ctx.eventMessage.$emit('testMessage', '测试组件间通信'); var width = self.ctx.$(\".bar\").width(); var bar = self.ctx.$(\".bar\"); bar.empty(); var n = width / 9; for (var i = 1; i < n; i++) { self.ctx.$(\".bar\").append(\"<div></div>\"); } var getstatus = function () { var spindle_alarm = 0, spindle_warn = 0, spindle_fcft_score = 0; if (self.data.i < 0) { self.data.i = 1; } if (self.data.i < 0.2) { spindle_fcft_score = self.data.i; spindle_alarm = 1; spindle_warn = 0; } else if (self.data.i < 0.8) { spindle_fcft_score = self.data.i; spindle_alarm = 0; spindle_warn = 1; } else { spindle_fcft_score = self.data.i; spindle_alarm = 0; spindle_warn = 0; } self.data.i = (self.data.i - 0.1).toFixed(1); return { spindle_fcft_score: spindle_fcft_score, spindle_alarm: spindle_alarm, spindle_warn: spindle_warn }; }; setInterval(function () { var da = getstatus(); var data = [ { v: da.spindle_fcft_score, t: 1528358866224, k: {o: \"spindle_fcft_score\", l: \"spindle_fcft_score\"} }, { v: da.spindle_alarm, t: 1528358866224, k: {o: \"spindle_alarm\", l: \"spindle_alarm\"} }, { v: da.spindle_warn, t: 1528358866224, k: {o: \"spindle_warn\", l: \"spindle_warn\"} } ]; self.onDataUpdated(data); }, 2000); }; self.onDataUpdated = function (data) { self.ctx.$.each(data, function (i, obj) { eval(\"self.data.da.\" + obj.k.o + \"='\" + obj.v + \"'\"); }); self.set(self.data.da.spindle_fcft_score, self.data.da.spindle_alarm, self.data.da.spindle_warn); }; self.onResize = function () { self.onInit(); self.set(self.ctx.$(\"#spindle_fcft_score\").html()); }; self.onDestroy = function () { console.log(\"销毁\") }; self.set = function (percent, spindle_alarm, spindle_warn) { var width = self.ctx.$(\".bar\").width(); var newwidth = percent * width; var n = newwidth / 9; self.ctx.$(\".bar div\").css(\"background-color\", \"rgba(255,255,255,0.3)\"); for (var i = 0; i < n; i++) { if (spindle_alarm == 1) { self.ctx.$(\".bar div\").eq(i).css(\"background-color\", \"rgb(224, 79, 35)\"); } else if (spindle_warn == 1) { self.ctx.$(\".bar div\").eq(i).css(\"background-color\", \"#EAB62A\"); } else { self.ctx.$(\".bar div\").eq(i).css(\"background-color\", \"rgba(49, 178, 231, 0.8)\"); } } if (spindle_alarm == 1) { self.ctx.$(\"#spindle_fcft_score\").removeClass(\"ok\").removeClass(\"warn\").addClass(\"alarm\"); } else if (spindle_warn == 1) { self.ctx.$(\"#spindle_fcft_score\").removeClass(\"ok\").removeClass(\"alarm\").addClass(\"warn\"); } else { self.ctx.$(\"#spindle_fcft_score\").removeClass(\"alarm\").removeClass(\"warn\").addClass(\"ok\"); } self.ctx.$(\"#spindle_fcft_score\").html(percent); };",
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
                    "templateHtml" : "<div id=\"riskChart\" style=\"width: 100%; height:300px;\"></div>",
                    "templateCss" : "",
                    "controllerScript" : "self.data = { da : {}, option : {}, myChart : {}, data : [ { \"value\" : 0, \"date\" : \"2012-05-01\" }, { \"value\" : 0.1, \"date\" : \"2012-05-02\" }, { \"value\" : 0.15, \"date\" : \"2012-05-03\" }, { \"value\" : 0.17, \"date\" : \"2012-05-04\" }, { \"value\" : 0.18, \"date\" : \"2012-05-05\" }, { \"value\" : 0.19, \"date\" : \"2012-05-06\" }, { \"value\" : 0.25, \"date\" : \"2012-05-07\" }, { \"value\" : 0.26, \"date\" : \"2012-05-08\" }, { \"value\" : 0.29, \"date\" : \"2012-05-09\" }, { \"value\" : 0.30, \"date\" : \"2012-05-10\" }, { \"value\" : 0.34, \"date\" : \"2012-05-11\" }, { \"value\" : 0.35, \"date\" : \"2012-05-12\" }, { \"value\" : 0.40, \"date\" : \"2012-05-13\" }, { \"value\" : 0.44, \"date\" : \"2012-05-14\" }, { \"value\" : 0.46, \"date\" : \"2012-05-15\" }, { \"value\" : 0.50, \"date\" : \"2012-05-16\" }, { \"value\" : 0.55, \"date\" : \"2012-05-17\" }, { \"value\" : 0.56, \"date\" : \"2012-05-18\" }, { \"value\" : 0.60, \"date\" : \"2012-05-19\" }, { \"value\" : 0.65, \"date\" : \"2012-05-20\" }, { \"value\" : 0.68, \"date\" : \"2012-05-21\" }, { \"value\" : 0.70, \"date\" : \"2012-05-22\" }, { \"value\" : 0.75, \"date\" : \"2012-05-23\" }, { \"value\" : 0.77, \"date\" : \"2012-05-24\" }, { \"value\" : 0.78, \"date\" : \"2012-05-25\" }, { \"value\" : 0.80, \"date\" : \"2012-05-26\" }, { \"value\" : 0.85, \"date\" : \"2012-05-27\" }, { \"value\" : 0.88, \"date\" : \"2012-05-28\" }, { \"value\" : 0.90, \"date\" : \"2012-05-29\" }, { \"value\" : 0.95, \"date\" : \"2012-05-30\" } ] }; self.onInit = function () { self.data.option = { title : { text : '健康风险变化曲线', left : '‘0%', top : '0%', textStyle : { color : 'rgba(255,255,255,0.5)', fontStyle : 'normal', fontFamily : 'sans-serif', fontSize : 14 } }, tooltip : { trigger : 'axis', formatter : function (params) { params = params[0]; return \"日期 <span style='color:#01c6fd' >\" + params.name + \"</span><br/>风险值 <span style='color:#01c6fd'>\" + params.value + \"</span>\"; }, axisPointer : { type : 'cross', animation : false, label : { backgroundColor : '#505765' } }, textStyle : { color : 'rgba(255,255,255,0.5)' } }, xAxis : { type : 'category', boundaryGap : true, name : '日期(天)', nameLocation : 'end', nameGap : 10, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, axisLabel : { formatter : function (value, idx) { var date = new Date(value); return [date.getMonth() + 1, date.getDate()].join('/'); }, interval : 1 }, splitLine : { show : false } }, yAxis : { type : 'value', name : '风险值', nameTextStyle : { color : 'rgba(255,255,255,0.5)', fontSize : '14' }, nameGap : 30, axisTick : { length : '0' }, axisLine : { lineStyle : { color : 'rgba(255,255,255,0.5)' } }, }, grid : { left : 36, top : 90 }, visualMap : { top : 10, right : 10, pieces : [{ gt : 0, lte : 0.2, color : '#01c5fd' }, { gt : 0.2, lte : 0.4, color : '#EAB62A' }, { gt : 0.4, lte : 1, color : '#E04F23' }], outOfRange : { color : '#999' }, show : false }, color : ['#01c5fd', '#EAB62A', 'rgba(224,79,35,0.1)'], series : [{ type : 'line', showSymbol : false, symbolSize : 0, itemStyle : { normal : { color : '#20aefc', show : false } }, itemStyle : { normal : { borderWidth : 3, borderColor : 'yellow', color : 'blue' } } }, { name : '低风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 3 } }, markArea : { data : [[{ yAxis : '0' }, { yAxis : '0.2' }]] }, }, { name : '中等风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.2' }, { yAxis : '0.4' }]] } }, { name : '高风险', type : 'line', animation : false, areaStyle : { normal : {} }, lineStyle : { normal : { width : 1 } }, markArea : { data : [[{ yAxis : '0.4' }, { yAxis : '1' }]] } }] }; self.data.myChart = self.ctx.echarts.init(document.getElementById('riskChart')); self.onDataUpdated(self.data.data); }; self.sendMessage = function (msg) { if (msg.issendtell === 1) { msg.mstype = '33'; msg.data = \"我已经初始化完成！\"; } else if (msg.issendtell === 2) { msg.mstype = '11'; msg.data = \"我已经销毁！\"; } }; self.onDataUpdated = function (data) { self.data.option.xAxis.data = data.map(function (item) { return item.date; }); self.data.option.series[0].data = data.map(function (item) { return item.value; }); self.data.myChart.setOption(self.data.option, true); }; self.onResize = function () { self.data.myChart.resize(); }; self.onDestroy = function () { }; self.onPendding = function () { };",
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
