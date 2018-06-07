// 渲染编译好的组件
/**
 * @param data 组件信息
 * @param {number} index 组件序列号
 */
function renderFormat(data: any, index: number) {
    // 组件的节点
    data.ref = 'child' + index;
    // 添加css，css格式处理
    addStyleFile(data.template.template.templateCss, data.ref);
    // 当前组件外部的样式处理
    data.styleObject = addStyle(data);
    // 开放的接口处理
    data.props = data.template.template.dataSources;
    // 处理html格式
    data.template.template.templateHtml = getHtml(data.template.template.templateHtml);
    return data;
}

/**
 * 添加样式文件
 * @param {string} params
 */
function addStyleFile(params: string = null, ref: string) {
    if (!params) return;
    const head = document.head || document.getElementsByTagName('head')[0];
    params = params.replace(/} \./g, `} .component-wrapper[scope=${ref}] .`);
    params = `.component-wrapper[scope=${ref}] ` + params;
    const style = document.createElement("style");
    style.id = "vue-component-style";
    style.type = "text/css";
    style.appendChild(document.createTextNode(params));
    head.appendChild(style);
}

/**
 * 当前组件外部的样式处理
 * @param config 配置信息
 */
function addStyle(config: any) {
    return {
        left: config.relation.x + "px",
        top: config.relation.y + "px",
        "z-index": config.zIndex,
        backgroundColor: config.backgroundColor
    };
}

/**
 * 处理html格式
 * @param config 配置信息
 */
function getHtml(html: string) {
    return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
}

export {
    renderFormat
};
