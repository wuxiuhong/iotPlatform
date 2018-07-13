import { fabric } from 'fabric';
import { CanvasApi } from '../../api';

/**
 * 处理canvas的js的Service
 * @param data 当前canvas的数据
 * @return {any}
 * @constructor
 */
function CanvasService(data: any, type: string = null) {

    /**
     * 渲染canvas
     */
    function render() {
        const canvasType = type ? "StaticCanvas" : "Canvas";

        const canvas = new fabric[canvasType](data.canvasName, {
            width: data.width,
            height: data.height,
            backgroundColor: data.background
        });
        // 设置自定义fabric对象
        _canvas.setConfig();
        data.comps && data.comps.forEach((item: any) => {
            _canvas[item.type] && _canvas[item.type](canvas, item);
        });
    }

    /**
     * 封装canvas各个类型解析
     * @return {any}
     */
    const _canvas = (function () {

        // 初始化对象
        function init() {
        }

        // 公共设置
        function commonSet(ctx, temp, element) {
            // 处理渐变方法
            if (element.gradient) {
                let option: any = {
                    type: 'linear', x1: 0, y1: 0, x2: 0, y2: 0,
                    colorStops: {0: temp.fill || '#ffffff', 1: element.gradientColor || '#ffffff'}
                };
                switch (element.gradient) {
                    case 'linear': {
                        option = {...option, x1: -temp.width / 2, x2: temp.width / 2};
                        break;
                    }
                    case 'radial': {
                        option = {...option, type: 'radial', r1: temp.width / 2, r2: 10};
                        break;
                    }
                    default: {
                        break;
                    }
                }
                temp.setGradient('fill', option);
            }
            element.shadow && temp.setShadow({
                color: element.shadowColor || '#000000',
                blur: element.shadowBlur,
                offsetX: element.shadowOffsetX || 3,
                offsetY: element.shadowOffsetY || 3
            });
            return element.isChild ? temp : ctx.add(temp);
        }

        /**
         * 矩阵值解析
         * @param rect
         * @return {{left: any; top: any; width: any; height: any}}
         */
        function getRectInfo(element: any) {
            const rect = element.rect ? element.rect.value || element.rect : [];
            return {
                left: rect[0],
                top: rect[1],
                width: rect[2] > 0.01 ? rect[2] : undefined,
                height: rect[3] > 0.01 ? rect[3] : undefined,
                strokeDashArray: element.dash ? [16, 16] : element.borderPattern,
                stroke: element.borderColor,
                strokeWidth: element.borderWidth || 1,
                fill: element.background ? element.background.value || element.background : ""
            };
        }

        // 返回对外开发的方式
        return {
            setConfig: function () {
                // 设置自定义类矩阵圆角
                fabric.RoundRect = fabric.util.createClass(fabric.Rect, {
                    initialize: function (options) {
                        options || (options = {});
                        this.callSuper('initialize', options);
                        this.set('rx', options.r || '');
                        this.set('ry', options.r || 'labelText');
                    },
                    _render: function (ctx) {
                        this.callSuper('_render', ctx);
                    }
                });
                // 设置自定义类弧度
                fabric.Storearc = fabric.util.createClass(fabric.Object, {
                    type: 'storearc',
                    stAngle: 0,
                    endAngle: 1,

                    initialize: function (options) {
                        options = options || {};
                        this.callSuper('initialize', options);
                        this.set('radius', options.radius || 0);
                        this.set('stAngle', options.stAngle || 0);
                        this.set('endAngle', options.endAngle || 1);
                        const diameter = this.get('radius') * 2;
                        this.set('width', diameter);
                        this.set('height', diameter);
                    },

                    toObject: function (propertiesToInclude) {
                        return fabric.util.object.extend(this.callSuper('toObject', propertiesToInclude), {
                            radius: this.get('radius'),
                            width: this.get('width'),
                            height: this.get('height'),
                            stAngle: this.get('stAngle'),
                            endAngle: this.get('endAngle')
                        });
                    },
                    _render: function (ctx, noTransform) {
                        ctx.beginPath();
                        // multiply by currently set alpha (the one that was set by path group where this object is contained, for example)
                        ctx.globalAlpha = this.group ? (ctx.globalAlpha * this.opacity) : this.opacity;
                        ctx.arc(noTransform ? this.left : 0,
                            noTransform ? this.top : 0,
                            this.radius,
                            this.stAngle * (Math.PI),
                            this.endAngle * (Math.PI),
                            true);
                        ctx.stroke();
                    }

                });
                fabric.Storearc.fromObject = function (object) {
                    return new fabric.Storearc(object);
                };
                fabric.Storearc.async = false;

            },
            // 矩阵
            rect: function (ctx: any, element: any) {
                const temp = new fabric.Rect({
                    ...getRectInfo(element)
                });
                return commonSet(ctx, temp, element);
            },
            // 矩阵圆角
            roundRect: function (ctx: any, element: any) {
                const temp = new fabric.RoundRect({
                    ...getRectInfo(element),
                    r: element.cornerRadius || 5
                });
                return commonSet(ctx, temp, element);
            },
            // 椭圆
            oval: function (ctx: any, element: any) {
                const temp = new fabric.Ellipse({
                    ...getRectInfo(element),
                    rx: element.rect[2] / 2,
                    ry: element.rect[3] / 2
                });
                return commonSet(ctx, temp, element);
            },
            // 三角形
            triangle: function (ctx: any, element: any) {
                const temp = new fabric.Triangle({
                    ...getRectInfo(element),
                });
                return commonSet(ctx, temp, element);
            },
            // 圆形
            circle: function (ctx: any, element: any) {
                const radius = (element.rect[2] > element.rect[3]) ? element.rect[3] / 2 : element.rect[2] / 2;
                const temp = new fabric.Circle({
                    ...getRectInfo(element),
                    radius: radius
                });
                return commonSet(ctx, temp, element);
            },
            // 正多边形状
            polygon: function (ctx: any, element: any) {
                const radius = (element.rect[2] > element.rect[3]) ? element.rect[3] / 2 : element.rect[2] / 2;
                const sweep = Math.PI * 2 / element.polygonSide;
                const cx = radius;
                const cy = radius;
                const points = [];
                // 计算每个角度的点
                for (let i = 0; i < element.polygonSide; i++) {
                    const x = cx + radius * Math.cos(i * sweep);
                    const y = cy + radius * Math.sin(i * sweep);
                    points.push({x: x, y: y});
                }
                const temp = new fabric.Polygon(points, {
                    ...getRectInfo(element)
                });
                return commonSet(ctx, temp, element);
            },
            // 五角星形状
            star: function (ctx: any, element: any) {
                const cx = element.outerRadius;
                const cy = element.outerRadius;
                const sweep = Math.PI / element.spikeCount;
                const points = [];
                let angle = 0;

                // 计算每个角度的点
                for (let i = 0; i < element.spikeCount; i++) {
                    let x = cx + Math.cos(angle) * element.outerRadius;
                    let y = cy + Math.sin(angle) * element.outerRadius;
                    points.push({x: x, y: y});
                    angle += sweep;

                    x = cx + Math.cos(angle) * element.innerRadius;
                    y = cy + Math.sin(angle) * element.innerRadius;
                    points.push({x: x, y: y});
                    angle += sweep;
                }
                const temp = new fabric.Polygon(points, {
                    ...getRectInfo(element)
                });
                return commonSet(ctx, temp, element);
            },
            // 弧度
            arc: function (ctx: any, element: any) {
                const radius = (element.rect[2] > element.rect[3]) ? element.rect[3] / 2 : element.rect[2] / 2;
                const temp = new fabric.Circle({
                    ...getRectInfo(element),
                    radius: radius,
                    startAngle: (element.startAngle || 0) * Math.PI / 180,
                    endAngle: (element.endAngle || 360) * Math.PI / 180,
                });
                return commonSet(ctx, temp, element);
            },
            // 无规则形状
            shape: function (ctx: any, element: any) {
                // 处理point转化为路径
                let path = '';
                if (element.segments) {
                    let pointsIndex = 0;
                    element.segments.forEach((key: number, index: number) => {
                            if (index === 0 && key === 1) {
                                path += (element.segments[1] === 2) ? ' M ' + element.points[0] + ' ' + element.points[1]
                                    : ' Q ' + element.points[2] + ' ' + element.points[3]
                                    + ' ' + element.points[0] + ' ' + element.points[1];
                                return pointsIndex += (element.segments[1] === 2) ? 1 : 3;
                            }
                            if (index > 0) {
                                // 当2点相等或者下个节点为2时候
                                if ((key === 2 && element.segments[index + 1] === 4)
                                    || (element.points[pointsIndex + 1] === element.points[pointsIndex + 3]
                                        && element.points[pointsIndex + 2] === element.points[pointsIndex + 5])) {
                                    path += ' Q ' + element.points[pointsIndex + 3] + ' ' + element.points[pointsIndex + 4]
                                        + ' ' + element.points[pointsIndex + 1] + ' ' + element.points[pointsIndex + 2];
                                    return pointsIndex = pointsIndex + 4;
                                } else if ((key === 4 && element.segments[index + 1] === 2)) {
                                    path += ' Q ' + element.points[pointsIndex + 1] + ' ' + element.points[pointsIndex + 2]
                                        + ' ' + element.points[pointsIndex + 3] + ' ' + element.points[pointsIndex + 4];
                                    return pointsIndex = pointsIndex + 4;
                                } else if (key === 2) {
                                    path += ' L ' + element.points[pointsIndex + 1] + ' ' + element.points[pointsIndex + 2];
                                    return pointsIndex = pointsIndex + 2;
                                } else {
                                    path += ' C ' + element.points[pointsIndex + 1] + ' ' + element.points[pointsIndex + 2]
                                        + ' ' + element.points[pointsIndex + 5] + ' ' + element.points[pointsIndex + 6]
                                        + ' ' + element.points[pointsIndex + 3] + ' ' + element.points[pointsIndex + 4];
                                    return pointsIndex = pointsIndex + 6;
                                }
                            }
                        }
                    );
                } else {
                    element.points.forEach((num: number, index: number) => {
                        if (index === 0) path += ' M ' + num + ' ' + element.points[index + 1];
                        if (index % 2 === 0) path += ' L ' + num + ' ' + element.points[index + 1];
                    });
                }
                if (path && element.closePath) path += ' Z';
                const temp = new fabric.Path(path, {
                    stroke: element.borderColor,
                    strokeWidth: element.borderWidth || 1,
                    fill: element.background ? element.background.value || element.background : ""
                });
                return commonSet(ctx, temp, element);
            },
            // 文字
            text: function (ctx: any, element: any) {
                const Type = (element.rect[2] > 0.01) ? 'Textbox' : 'Text';
                const temp = new fabric[Type](element.text ? element.text.value || element.text : "", {
                    fontSize: element.fontSize || 12,
                    fontFamily: element.fontFamily || '',
                    textAlign: element.align || 'center',
                    ...getRectInfo(element),
                    fill: element.color
                });
                return commonSet(ctx, temp, element);
            },
            // 图片类型
            image: function (ctx: any, element: any) {
                fabric.Image.fromURL(element.name, (img: any) => {
                    img.scale(element.rect[2] / img.width || 1, element.rect[3] / img.height || 1).set({
                        ...getRectInfo(element),
                        cropX: 0,
                        cropY: 0,
                        width: img.width,
                        height: img.height
                    });
                    element.isChild ? img : ctx.add(img);
                });
            },
            // json类型
            json: function (ctx: any, element: any) {
                CanvasApi.getCanvas({key: element.url}).then((ret: any) => {
                    const groupList: any = [];
                    // 将子类json进行组合
                    ret.data.data.comps && ret.data.data.comps.forEach((item: any) => {
                        item.isChild = true;
                        _canvas[item.type] && groupList.push(_canvas[item.type](ctx, item));
                    });
                    const temp = new fabric.Group(groupList, {left: 0, top: 0});
                    return commonSet(ctx, temp, element);
                });
            }
        };
    })();

    return {
        render: render
    } as any;
}

export default CanvasService;
