import util from './util';

/**
 * 渲染编译好的组件
 * @param data 组件信息
 * @param {number} index 组件序列号
 */
function renderFormat(data: any, index: any) {
    // 组件的节点
    data.pref = util.createRandomId('parent' + index);
    data.ref = util.createRandomId('child' + index);
    // 添加css，css格式处理
    data.template.template.templateCss && addStyleFile(data.template.template.templateCss, data.ref);
    // 当前组件外部的样式处理
    data.styleObject = addStyle(data);

    // 开放的接口处理， 处理对应格式
    if (data.defaultSources) {
        data.template.template.SendMessage = data.defaultSources.filter((item: any) => item.type === 'sendMessage');
        data.OnMessage = data.defaultSources.filter((item: any) => item.type === 'onMessage');
        data.OnFunction = data.defaultSources.filter((item: any) => item.type === 'func');
        data.props = getDefaultSources(data.defaultSources);
    }
    // 将开放报表配置数据合并于初始化默认数据
    data.template.template.defaultData = {...data.template.template.defaultData, ...data.props};
    // 处理html格式
    data.template.template.containerNamespace = "maxIot_cd_comp" + index;
    data.template.template.templateHtml =
        getHtml(data.template.template.templateHtml, data.template.template.containerNamespace, data.type);

    return data;
}

/**
 * 添加样式文件
 * @param {string} params
 */
function addStyleFile(params: string = null, ref: string) {
    if (!params) return;
    const head = document.head || document.getElementsByTagName('head')[0];
    // 去除换行符， css样式加上前缀
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
function getHtml(html: string, containerNamespace: string, type: string) {
    if (type === 'canvas') html += '<canvas id="' + containerNamespace + '_canvas" width="100%" height="100%"></canvas>';
    html = '<div id="' + containerNamespace + '">' + html + '</div>';
    return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
}


/**
 * 处理对报表开发接口数据格式
 * @param data 报表配置数据
 * @return {{}}
 */
function getDefaultSources(data: any) {
    const result = {};
    data.forEach((item: any) => {
        switch (item.type) {
            case 'func':
                result[item.label] = null;
                break;
            case 'data':
                result[item.label] = item.valueFunc;
                break;
            default:
                break;
        }
    });
    return result;
}

/**
 * 处理报表数据格式
 * @param data 报表数据
 * @return {any} 报表数据
 */
function formatDashboard(data: any) {
    data.styles = {
        'min-width': data.styles.minWidth ? data.styles.minWidth + 'px' : '',
        'max-width': data.styles.maxWidth ? data.styles.maxWidth + 'px' : '',
    };
    return data;
}

export {
    renderFormat,
    addStyleFile,
    getHtml,
    formatDashboard
};
