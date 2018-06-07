import { renderFormat } from '../util/renderFormat';
import echarts from 'echarts';

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
                this.onResize();
            });
            // 定义重置组件监听通知函数
            this.$on('onUpdate', (msg: any) => {
                this.onUpdate();
            });
            // 处理初始化格式处理
            new Function('maxIot', 'echarts', data.template.template.controllerScript.mounted)(this, echarts);
        },
        methods: new Function(data.template.template.controllerScript.methods)(),
        beforeDestroy() {
            new Function(data.template.template.controllerScript.destroy)();
        }
    };
    return data;
}

export { renderFn };
