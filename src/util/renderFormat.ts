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
    // data.props = data.template.template.dataSources;
    // 处理html格式
    data.template.template.containerNamespace = "maxIot_cd_comp" + index;
    data.template.template.templateHtml = getHtml(data.template.template.templateHtml, data.template.template.containerNamespace);

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
    console.log(config.styles.margin, config.styles.padding);
    return {
        width: config.styles.width ? config.styles.width : 'auto',
        height: config.styles.height ? config.styles.height + 'px' : 'auto',
        position: config.styles.position,
        left: (typeof config.relation.x === 'string') ? config.relation.x : config.relation.x + "px",
        top: config.relation.y + "px",
        margin: config.styles.margin,
        padding: config.styles.padding,
        "z-index": config.zIndex,
        backgroundColor: config.backgroundColor,
        "box-shadow": config.styles.boxShadow
    };
}

/**
 * 处理html格式
 * @param html html字符
 * @param index 当前组件序列
 */
function getHtml(html: string, containerNamespace: string) {
    html = '<div id="' + containerNamespace + '">' + html + '</div>';
    return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
}

export {
    renderFormat,
    addStyleFile,
    getHtml
};
