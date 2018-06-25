# 报表组件快速入门
为了能快速配置报表，组件开发人员请按照以下规范来编写代码，谢谢合作！

## 核心代码案例
```js
    // 配置当前的页面显示效果初始化，若是配置于报表无需配置，解析会自动注入self对象
    var self = {
        ctx: {
            $: $,
            echarts: echarts
        }
    };

    self.data = {};

    self.onInit = function () {};

    self.onDataUpdated = function (data) {};

    self.onResize = function () {};

    self.onDestroy = function () {};

    self.* = function(){} // 组件内运用的方法

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