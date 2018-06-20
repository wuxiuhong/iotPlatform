import { renderFormat, addStyleFile, getHtml } from '../util/renderFormat';
import echarts from 'echarts';
import $ from 'jquery';

/**
 * 处理组件，生成子组件
 * @param data
 * @param {number} index
 * @return {any}
 */
function renderFn(data: any, index: number) {
    // 初始化格式
    data = renderFormat(data, index);
    data.comp = {
        template: data.template.template.templateHtml,
        props: ['content'],
        data() {
            return {
                ...data.template.template.defaultData
            };
        },
        mounted() {
            // 定义重置组件监听通知函数
            this.$on('onResize', (msg: any) => {
                if (typeof this.onResize === 'function') this.onResize();
            });
            // 定义重置组件监听通知函数
            this.$on('onDataUpdated', (msg: any) => {
                if (typeof this.onResize === 'function') this.onDataUpdated(msg);
            });
            // 处理初始化格式处理
            new Function('maxIot', 'echarts', '$', data.template.template.controllerScript.mounted)(this, echarts, $);
        },
        methods: new Function('maxIot', 'echarts', '$', data.template.template.controllerScript.methods)(this, echarts, $),
        beforeDestroy() {
            new Function(data.template.template.controllerScript.onDestroy)();
        }
    };
    return data;
}

/**
 * 处理组件数据
 * @param data
 * @param {number} index
 * @return {any}
 */
function renderTemplateFn(data: any) {
    // 初始化格式
    addStyleFile(data.template.templateCss, 'child');
    const {onResize, onDataUpdated, onInit, onDestroy, onRender} = data.getTemplate;
    const result = {
        template: getHtml(data.template.templateHtml),
        props: ['content'],
        data() {
            return {
                ...data.template.defaultData,
                ...data.template.getTemplate
            };
        },
        mounted() {
            // 定义重置组件监听通知函数
            this.$on('onResize', (msg: any) => {
                if (typeof onResize === 'function') onResize();
            });
            // 定义重置组件监听通知函数
            this.$on('onDataUpdated', (msg: any) => {
                if (typeof onDataUpdated === 'function') onDataUpdated(msg);
            });
            // 处理初始化格式处理
            onInit();
        },
        methods: onRender(),
        beforeDestroy() {
            onDestroy();
        }
    };
    return result;
}

export { renderFn, renderTemplateFn };
