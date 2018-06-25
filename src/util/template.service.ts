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
    const commonFunction = ['onInit', 'onDataUpdated', 'onResize', 'onDestroy'];

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
            Object.keys(TemplateTypeInstance).forEach((key: string) => {
                if (typeof TemplateTypeInstance[key] === 'function' && !commonFunction.includes(key)) {
                    result[key] = TemplateTypeInstance[key];
                }
            });
        }
        return result;
    }

    function onRestart() {
        onDestroy();
        onInit();
    }

    /**
     *
     * @param templateInfo
     * @param name
     * @return {any}
     */
    function createTemplateFunction(templateInfo, name) {
        let TemplateFunctionBody = 'return function ' + name + ' (ctx, data) {\n' +
            '    const self = this;\n' +
            '    self.data = {};\n' +
            '    self.ctx = ctx;\n\n';
        TemplateFunctionBody += templateInfo.controllerScript;
        TemplateFunctionBody += '\n\n self.data = { ...self.data, ...data};\n\n';
        TemplateFunctionBody += '\n};\n';
        try {
            const TemplateTypeFunction = new Function(TemplateFunctionBody);
            TemplateType = TemplateTypeFunction.apply(_self);
            TemplateTypeInstance = new TemplateType(templateContext, templateInfo.defaultData);
            return TemplateTypeInstance;
        } catch (e) {
            console.log('抛出异常');
            throw e;
        }
    }

    /**
     * 重新绑定上下文数据
     * @param element
     */
    function bindData(scope: any) {
        if (TemplateType) {
            templateContext.$element = scope.$el;
            TemplateTypeInstance = new TemplateType(templateContext, TemplateTypeInstance.data);
        }
    }

    return {
        initData: TemplateTypeInstance.data,
        bindData: bindData,
        onInit: onInit,
        onDestroy: onDestroy,
        onResize: onResize,
        onRender: onRender,
        onDataUpdated: onDataUpdated
    } as any;
}

export default TemplateService;
