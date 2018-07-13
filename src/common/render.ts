import { renderFormat } from './tool/renderFormat';
import { TemplateService, CanvasService } from './service';
import { CanvasApi } from '../api';


/**
 * 处理组件，生成子组件
 * @param data
 * @param {number} index
 * @return {any}
 */
function renderFn(data: any, index: any, self: any) {
    // 初始化格式
    data = renderFormat(data, index);
    const {initData, injectData, onResize, onDataUpdated, onInit, onDestroy, onRender} = TemplateService(data.template.template, self);
    data.comp = {
        template: data.template.template.templateHtml,
        data() {
            return {
                ...initData,
                ...data.template.template.defaultData,
                ...data.defaultData
            };
        },
        mounted() {
            // 重新绑定节点，注入数据
            injectData(data, this);
            // 定义重置组件监听通知函数
            this.$on('onResize', (msg: any) => {
                if (typeof onResize === 'function') onResize();
            });
            // 定义重置组件监听通知函数
            this.$on('onDataUpdated', (msg: any) => {
                if (typeof onDataUpdated === 'function') onDataUpdated(msg);
            });
            // 判断是否为canvas
            if (data.type === 'canvas') {
                CanvasApi.getCanvas({key: data.template.template.canvasData}).then((ret: any) => {
                    ret.data.data.canvasName = data.template.template.containerNamespace + '_canvas';
                    CanvasService(ret.data.data, 'static').render();
                });
            }
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

export { renderFn };
