# 组件配置
为了能快速配置组件，组件开发人员请按照以下规范，谢谢合作！

## version
组件版本

## type
组件类型

## templateHtml
组件视图

## templateCss
组件样式

## controllerScript
组件js控制代码

## defaultData
对报表开放默认数据配置，当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

## dependent
控制对组件所注入的依赖来源

## defaultSources
对报表开放默认数据来源配置， 其中包括简单的数据:`number\string\date\color\radio\textArea\textArea\...`，
比如文本框颜色； 函数：`func`;  组件间通讯发送: `sendMessage`;  监听接受组件通讯: `onMessage`;
报表配置来源通过label绑定组件

> 在组件配置所需类型，`type`:类型； `label`: 关联视图/控制js的关键词； 'name':报表配置提示标题； 默认值(数据/逻辑控制操作)：valueFunc。
  报表配置可对值进行重新覆盖。

```js
"defaultSources" : [
    {
    "type" : "sendMessage",
    "label" : "event1",
    "name" : "显示订阅标题事件a",
    "valueFunc" : "报表设计的数据"
    }
    {
    "type" : "onMessage",
    "label" : "onEvent1",
    "name" : "显示订阅标题事件a",
    "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
    },
    {
    "type" : "func",
    "label" : "getInit",
    "name" : "初始化调用",
    "valueFunc" : "console.log('对外开发接口')"
    }, {
    "type" : "func",
    "label" : "myClick",
    "name" : "测试按钮点击事件",
    "valueFunc" : "console.log('点击事件')"
    }, {
    "type" : "color",
    "name" : "文本框颜色",
    "label" : "textColor1",
    "valueFunc" : "#333333"
    },
    {
    "type" : "string",
    "name" : "字符串表单",
    "label" : "textInput",
    "valueFunc" : "报表文字提示"
    }, {
    "type" : "number",
    "name" : "数字表单",
    "label" : "numberInput",
    "valueFunc" : 2
    }, {
    "type" : "textArea",
    "name" : "文字域表单",
    "label" : "textInput",
    "valueFunc" : "测试文字"
    }, {
    "type" : "radio",
    "name" : "单选按钮",
    "label" : "radioInput",
    "valueFunc" : "单选按钮"
    }, {
    "type" : "checkbox",
    "name" : "复选按钮",
    "label" : "checkboxInput",
    "valueFunc" : "复选按钮"
    }, {
    "type" : "date",
    "name" : "时间选择器",
    "label" : "dateInput",
    "valueFunc" : "时间选择器表单"
    }
],
```

> 案例：组件间的通信

类型：sendMessage。 发送通信事件，将配置的`label` 配合发送`self.sendMessage('type')`。
层级：self.sendMessage事件的参数的数据 > 报表配置的发送数据 > 配置默认发送的数据

组件的配置
```js
    {
    "type" : "sendMessage",
    "label" : "event1",
    "name" : "显示订阅标题事件a",
    "valueFunc" : "报表设计的数据"
    }
```

报表的配置
```js
    {
    "type" : "sendMessage",
    "label" : "event1",
    "name" : "显示订阅标题事件a",
    "valueFunc" : "报表设计的数据"
    }
```

```js
    self.* = function(){
        self.sendMessage('event1','通讯参数'); // 发送的数据: '通讯参数'
        self.sendMessage('event1'); // 发送的数据: '报表设计的数据'
    };
```

类型：onMessage。 监听收到通信事件数据，将配置的`label`，来配合报表配置通信的来源
层级：报表配置的逻辑控制 > 组件配置的逻辑控制

组件的配置
```js
{
    "type" : "onMessage",
    "label" : "onEvent1",
    "name" : "显示订阅标题事件a",
    "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
},
```

报表的配置
```js
{
    "type" : "onMessage",
    "label" : "onEvent1",
    "fromKey" : ['sendMessage1'],
    "valueFunc" : "console.log(msg); self.data.getInit('组件通讯且调用开发接口参数'); self.data.da.x_load=520; "
}
```

## dataSources
实时数据来源配置，主要针对于实时报表数据配置, 比如针对`webSocket`实时数据响应

```js
"dataSources" : [
    {
    "label" : "tool_break_alarm",
    "valueFunc" : "return {\n    tool_break_alarm:\"\"}\n//断刀报警"
    },
    {
    "label" : "x_load",
    "valueFunc" : "return {\n    x_load:\"1\"}\n//x轴负载"
    },
    {
    "label" : "y_load",
    "valueFunc" : "return {\n    x_load:\"1\"}\n//y轴负载"
    }, {
    "label" : "z_load",
    "valueFunc" : "return {\n   z_load:\"1\"}\n//z轴负载"
    }
]
```
## components
组件嵌套组件, 相关配置类似报表配置。

## image
组件的缩略图，方便日后报表配置，组件嵌套拖拽识别性高。
