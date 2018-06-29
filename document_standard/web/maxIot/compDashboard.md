# 报表配置
为了能快速配置报表，报表配置人员请按照以下规范，谢谢合作！

## version/title/description
报表版本/报表标题/报表描述

## style
报表样式， 比如最小宽度，最大宽度等

```js
"styles" : {
    "minWidth" : 1600,
    "maxWidth" : 1920,
    "backgroundColor" : "rgba(0,0,0,0)",
    "margins" : [10,10]
},
```

## edgeClientAliases
报表edgeClient的数据来源。配置组件的edgeClient前提要配置edgeClientAliases

```js
 [
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
                        "spindle_current", "spindle_load", "tool_wear_perc", "tool_wear", "tool_wear_prid", "tool_rul", "tool_wear_ratio", "tool_break_alarm"]
                    },
                    {
                        "id" : "d9e80502-a9e2-44ab-9402-0cb97829bb1a", "name" : "websocket",
                        "keys" : ["OPstate", "workcount", "poweronTime", "cycletime", "operatingTime", "x_load", "y_load", "z_load", "RPM_actual", "RPM_set"]
                    }
                ]
            }
        ]
    }
]
```

## components
组件数据， 通过`templateId`和`templateVersion`来获取组件模板数据

## 组件config
报表组件默认配置， 比如：

- 组件角度：`angleofrotation`  ---组件旋转
- 吸附节点：`adsorptionnode`  ----- 组件拖动时联动其他组件
- 可以移动：`canmove` ----是否可以拖动
- 可编辑：`canedit`  ---是否可以被编辑

```js
{
    "angleofrotation" : "90",
    "adsorptionnode" : ['1'],
    "canmove" : false,
    "canedit" : false
}
```

## 组件style
报表组件样式配置， 比如：

- 组件宽度：`width`
- 组件高度：`height`
- 是否显示标题：`showTitle` ----组件是否显示标题
- 位置类型：`position`  ---相对类型或者绝对定位
- 组件背景：`backgroundColor`
- 组件字体颜色： `color`
- 组件阴影： `boxShadow`

```js
{
    "width" : "100%",
    "height" : 900,
    "showTitle" : false,
    "position" : "relative",
    "backgroundColor" : "#fff",
    "color" : "rgba(0, 0, 0, 0.87)",
    "boxShadow" : "0 6px 8px 0 rgba(0,0,0,0.30)"
}
```

## 组件zIndex
组件的层级

## 组件relation
组件位置定位X，Y

```js
{
"x" : 0,
"y" : 0
}
```

## 组件size
组件缩放宽高比例x，y

```js
{
"x" : 5,
"y" : 6
}
```

## 组件defaultSources
组件对报表开放默认数据来源配置， 其中包括简单的数据:`data`， 比如文本框颜色； 函数：`func`;  组件间通讯发送: `sendMessage`;  监听接受组件通讯: `onMessage`;
报表配置来源通过label绑定组件

> 在组件配置所需类型，`type`:类型； `label`: 关联视图/控制js的关键词； 默认值(数据/逻辑控制操作)：valueFunc。
报表配置可对值进行重新覆盖。

```js
[
    {
    "type" : "onMessage",
    "label" : "onEvent1",
    "fromKey" : ['sendMessage1'],
    "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
    }, {
    "type" : "func",
    "label" : "getInit",
    "valueFunc" : "console.log(self, data, '配置报表方法')"
    }, {
    "type" : "func",
    "label" : "myClick",
    "valueFunc" : "console.log(data); console.log('测试按钮点击事件')"
    }, {
    "type" : "data",
    "label" : "textColor",
    "valueFunc" : "#ffffff"
    }, {
    "type" : "data",
    "label" : "radioInput",
    "valueFunc" : true
    }, {
    "type" : "data",
    "label" : "textInput",
    "valueFunc" : "报表配置的标题"
    }
]
```


## 组件dataSources
实时数据来源配置，主要针对于实时报表数据配置, 比如针对`webSocket`实时数据响应

```js
[
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
```


