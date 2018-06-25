import { renderFormat, addStyleFile, getHtml } from '../util/renderFormat';
import TemplateService from '../util/template.service';

/**
 * 处理组件，生成子组件
 * @param data
 * @param {number} index
 * @return {any}
 */
function renderFn(data: any, index: number, self: any) {
    // 初始化格式
    data = renderFormat(data, index);
    const {initData, bindData, onResize, onDataUpdated, onInit, onDestroy, onRender} = TemplateService(data.template.template, self);
    data.comp = {
        template: data.template.template.templateHtml,
        props: ['content'],
        data() {
            return {
                ...initData,
                ...data.template.template.defaultData,
            };
        },
        mounted() {
            // 重新绑定节点
            bindData(this);
            self.data = Object.assign({...self.data}, this);
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
    const {initData, onResize, onDataUpdated, onInit, onDestroy, onRender} = data.getTemplate;
    const result = {
        template: getHtml(data.template.templateHtml, 'maxIot_cd_comp'),
        props: ['content'],
        data() {
            return {
                ...data.template.defaultData,
                ...initData
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
