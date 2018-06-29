import echarts from 'echarts';
import $ from 'jquery';
import { eventBus } from '../common';

/**
 * 处理模板的js的Service
 * @param data 模板数据
 * @param _self 当前vue
 * @return {any}
 * @constructor
 */
function TemplateService(data: any, _self: any = null) {
    // 处理格式
    const templateContext: any = {
        inited: false,
        echarts: echarts,
        $: $,
        eventMessage: eventBus
    };
    // 公共方法是
    const commonFunction = ['onInit', 'onDataUpdated', 'onResize', 'onDestroy', 'sendMessage'];

    let TemplateTypeInstance: any; // 模板实例化数据流
    // 模板js数据函数
    let TemplateType: any;
    try {
        TemplateTypeInstance = createTemplateFunction(data, 'getTemplate');
        // 初始公共方法
        commonFunction.forEach((func: string) => {
            if (!TemplateTypeInstance[func]) {
                TemplateTypeInstance[func] = function () {
                };
            }
        });
    } catch (e) {
        TemplateTypeInstance = {};
    }


    /**
     * 初始组件数据
     */
    function onInit() {
        if (!templateContext.inited) {
            templateContext.inited = true;
            try {
                TemplateTypeInstance.onInit();
            } catch (e) {
            }
            if (TemplateTypeInstance.dataUpdatePending) {
                onDataUpdated();
            }
        }
    }

    /**
     * 更新组件数据
     */
    function onDataUpdated(msg: any = null) {
        if (templateContext.inited) {
            try {
                TemplateTypeInstance.onDataUpdated(msg);
            } catch (e) {
                // handleWidgetException(e);
            }
        } else {
            TemplateTypeInstance.dataUpdatePending = true;
        }
    }

    /**
     * 重置组件
     */
    function onResize() {
        if (templateContext.inited) {
            try {
                TemplateTypeInstance.onResize();
            } catch (e) {
                console.log('重置抛出异常');
                // handleWidgetException(e);
            }
        }
    }

    /**
     * 销毁组件
     */
    function onDestroy() {
        if (templateContext.inited) {
            templateContext.inited = false;
            templateContext.dataUpdatePending = false;
            try {
                TemplateTypeInstance.onDestroy();
            } catch (e) {
                // handleWidgetException(e);
            }
        }
    }


    /**
     * 组件方式设置, 处理除公共方法外的数据
     */
    function onRender() {
        const result = {};
        if (!templateContext.inited) {
            // 对self对象函数赋值为method
            Object.keys(TemplateTypeInstance).forEach((key: string) => {
                if (typeof TemplateTypeInstance[key] === 'function' && !commonFunction.includes(key)) {
                    result[key] = TemplateTypeInstance[key];
                }
            });
        }
        return result;
    }


    /**
     * 创建模板函数
     * @param templateInfo
     * @param name
     * @return {any}
     */
    function createTemplateFunction(templateInfo, name) {
        let TemplateFunctionBody = 'return function ' + name + ' (ctx, data, notify) {\n' +
            '    const self = this;\n' +
            '    self.data = {};\n' +
            '    self.ctx = ctx;\n\n' +
            '    self.notify = notify;\n\n' +
            '    self.sendMessage = ' + sendMessage + ';\n';
        TemplateFunctionBody += templateInfo.controllerScript;
        TemplateFunctionBody += '\n\n self.data = { ...self.data, ...data};\n\n';
        TemplateFunctionBody += '\n};\n';
        try {
            const TemplateTypeFunction = new Function(TemplateFunctionBody);
            TemplateType = TemplateTypeFunction.apply(_self);
            TemplateTypeInstance = new TemplateType(templateContext, templateInfo.defaultData, templateInfo.SendMessage);
            return TemplateTypeInstance;
        } catch (e) {
            console.log('抛出异常');
            throw e;
        }
    }

    /**
     * 组件发送间通讯事件
     */
    function sendMessage(type: string, msg: any) {
        if (this.notify.length) {
            // 处理报表的订阅的type值
            const event = this.notify.find((item: any) => item.label === type);
            this.ctx.eventMessage.$emit('onMessage', event.key, msg || event.valueFunc);
        }
    }

    /**
     * 组件接收通讯数据，操作
     * @param message 当前消息
     * @param view 当前组件vue
     */
    function onMessage(message: any, view: any) {
        if (message && message.length) {
            eventBus.$on('onMessage', (type: string, msg: any) => {
                const messageInfo = message.find((item: any) => item.fromKey.includes(type));
                if (messageInfo) {
                    // self当前上下文， msg收到的通讯数据，view为vue的组件
                    new Function('self', 'msg', 'view', messageInfo.valueFunc)(TemplateTypeInstance, msg, view);
                }
            });
        }
    }

    // // self当前上下文， msg收到的通讯数据，view为vue的组件
    // const onMessageFunciton = (self: any, msg: any, view: any) => {
    //
    // };
    //
    // // self当前上下文， msg收到的通讯数据，view为vue的组件
    // const eventFunciton = (self: any, data: any) => {
    //
    // };


    /**
     * 重新绑定上下文数据
     * @param template 当前组件值
     * @param scope 当前vue组件
     */
    function injectData(template: any, scope: any) {
        // 订阅组件操作
        if (TemplateType) {
            onMessage(template.OnMessage, scope);
            templateContext.$element = scope.$el;
            // 报表开放事件处理，注入self,当前组件上下文。data调取获取的数据
            template.OnFunction && template.OnFunction.forEach((item: any) => {
                let FunctionBody = ' const self = this;';
                FunctionBody += item.valueFunc;
                TemplateTypeInstance.data[item.label] = new Function('data', FunctionBody).bind(TemplateTypeInstance);
            });
            TemplateTypeInstance = new TemplateType(templateContext, TemplateTypeInstance.data);
        }
    }

    return {
        initData: TemplateTypeInstance.data,
        injectData: injectData,
        onInit: onInit,
        onDestroy: onDestroy,
        onResize: onResize,
        onRender: onRender,
        onDataUpdated: onDataUpdated
    } as any;
}

export default TemplateService;
