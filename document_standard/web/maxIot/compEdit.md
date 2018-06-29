# 报表组件快速入门
为了能快速配置报表，组件开发人员请按照以下规范来编写代码，谢谢合作！

## 核心代码案例
```js
// 配置当前的页面显示效果初始化，若是配置于报表无需配置，解析会自动注入self对象
var self = {
    ctx: {
        $: $,
        echarts: echarts,
        $element : document
    }
};

self.data = {};

self.onInit = function () {};

self.onDataUpdated = function (data) {};

self.onResize = function () {};

self.onDestroy = function () {};

self.* = function(){} // 组件内运用的方法或者对象

// 组件页面运行初始化
self.onInit();
```

## 运用vue的组件
```js
new Vue({
    el: '#maxiot_cd_comp3_main',
    data: {},
    mounted: function () {
    self.data = Object.assign({}, {...self.data}, this.$data);  // 为了能使用vue指令，实时数据
    self.onInit();
    }
});
```

## ctx
注入依赖。组件编写，使用依赖，从注入的依赖中获取。比如echart依赖:`self.ctx.echarts`; jquery依赖: `self.ctx.$`; 当前组件节点: `self.ctx.$element`等。

```js
var self = {
ctx : {
    $ : $,
    echarts : echarts,
    $element : document,
    ...
    }
};
self.onInit = function () {
// echarts使用, 当前组件$element
self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart1_mainchart'));
// jquery使用
self.ctx.$("#maxiot_cd_comp3_lefdiv").css("width","calc(100%  -  "+w+"px)");
}
```

> 为了组件间避免ID使用的覆盖性。会给组件注入当前组件的DOM元素集Element。使用的是self.ctx.$element来代替当前组件的DOM元素集Element

使用self.ctx注入依赖注意事项
- 在静态html页面组件，在js代码中新建`self`对象，自定义注入`self.ctx`。
- 当前编写的`self.ctx`无需配置到报表中
- `self.ctx.$element，为避免不同组件间重复的ID相互影响。使用情况如下:

```js
// echarts使用, 找到当前组件的self.ctx.$element.querySelector
self.data.myChart = self.ctx.echarts.init(self.ctx.$element.querySelector('#maxiot_cd_chart1_mainchart'));
// jquery, 在当前组件节点找到id为 maxiot_cd_comp3_lefdiv
self.ctx.$("#maxiot_cd_comp3_lefdiv", self.ctx.$element)
}
```

!> 请慎重使用jquery，能不用就不用！！

## data
当一个组件实例被创建时，它向报表响应式系统中加入了其 `self.data` 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```js
self.data = {
    da : {},
    data : [],
    spindle_alarm : 0,
    ...
};
```
!> 建议: 若全局变量不是视图实时响应的数据，最好不要放到`self.data`对象中。将其放到自定义对象`self.*`中, 如下所示:
```js
self.util = {
    a : 1,
    i : 0
};
```
> vue页面的使用data

```html
    <h1>{{title}}</h1>
```

```js
self.data = {
    title: "当前组件标题"
}
```

## onInit
组件el已被实例，初始化相关操作。

## onDataUpdated
由于数据更改, 比如`webSocket`, 需要实时改变组件的数据。当方法被调用后，对逻辑操作，组件 DOM 更新。

## onResize
由于页面的分辨率改变等，导致的DOM 重新渲染和打补丁，会调用该方法。
> 尤其是在echart， D3使用，一定需要重置，重新渲染DOM.

## onDestroy
组件实例销毁后调用。调用后，组件实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## self.*
自定义对象或者函数，最好是被公共函数使用或者页面的操作方法。

```html
    <button @click="myClick('点击操作测试')">操作</button>
```

```js
    self.myData =  {
        "data":{ a: 1},
        "event1": function(msg){
            console.log(msg);
        }
    }
    self.myClick =  function(data){
        console.log(self.myData.a);   // 输出 1
        self.myData.event1('自定义函数调用');  // 输出 自定义函数调用
        console.log(data);  // 输出 点击操作测试
    }
```

## sendMessage
组件间的通讯，使用`self.sendMessage`。只需要传递: 当前组件配置发送消息类型label：`type`；发送消息的数据:`msg`, 代码如下:

```js
    self.sendMessage('event1', '发送的数据');
```

## other
使用规范遇到问题主要如下:
- 1.$没有换成`self.ctx.$`
- 2.echarts没有换成`self.ctx.echarts`
- 3.vue 双向绑定没有添加 `self.data = Object.assign({}, {...self.data}, this.$data)`
- 4.获取ID的doc操作没有使用`self.ctx.$element`
- 5.使用 `===` ， 注意变量的数据类型
- 6.要学会充分利用`onResize事件`。尤其在使用echarts图表。 要在onResize事件中，重置报表，比如: `self.data.myChart.resize()`