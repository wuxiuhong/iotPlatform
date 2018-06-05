<template>
    <div>
        <section class="dashboard-wrapper">
            <div class="component-wrapper" v-for="item in dashboard.components"
                 :style="item.styleObject" track-by="$index" @contextmenu.stop.prevent="showEdit(item)">
                {{item.title}}
                <component :is="item.comp"></component>
            </div>
        </section>
        <div class="edit-wrapper" v-if="showModal">
            <span></span>
            <h3>编辑组件</h3>
        </div>
    </div>
</template>

<script lang="ts">
    import echarts from 'echarts';
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { getDashboard } from '../../api/dashboard';

    @Component({})
    export default class Dashboard extends Vue {
        info: string = 'test';
        showModal: boolean = false;
        dashboard: any = {
            components: [{
                comp: null,
                styleObject: {}
            }]
        };

        mounted() {
            // 初始化报表数据
            getDashboard({}).then((ret: any) => {
                this.dashboard = ret.data;
                const head = document.head;
                this.dashboard.components = this.dashboard.components.map((item: any) => {
                    // 添加css
                    if (item.template.template.templateCss) {
                        const style = document.createElement("style");
                        style.id = "vue-layout-style";
                        style.type = "text/css";
                        const textNode = document.createTextNode(item.template.template.templateCss);
                        style.innerHTML = "";
                        style.appendChild(textNode);
                        head.appendChild(style);
                    }
                    item.styleObject = {
                        left: item.relation.x + "px",
                        top: item.relation.y + "px",
                        "z-index": item.zIndex,
                        backgroundColor: item.backgroundColor
                    };
                    // item.templateHtml = addRenderFn({
                    //     code: item.template.template.templateHtml,
                    //     render: (item, index) => {
                    //     }
                    item.comp = {
                        template: item.template.template.templateHtml,
                        props: {
                            messageTest: String
                        },
                        data() {
                            return {
                                ...item.template.template.defaultData
                            };
                        },
                        mounted() {
                            if (item.template.templateType === 'echart') {
                                this.chartPie = echarts.init(<HTMLDivElement>document.getElementById('chartPie'));
                                this.chartPie.setOption({
                                    title: {
                                        text: 'Pie Chart',
                                        subtext: '纯属虚构',
                                        x: 'center'
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                                    },
                                    legend: {
                                        orient: 'vertical',
                                        left: 'left',
                                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                    },
                                    series: [
                                        {
                                            name: '访问来源',
                                            type: 'pie',
                                            radius: '55%',
                                            center: ['50%', '60%'],
                                            data: [
                                                {value: 335, name: '直接访问'},
                                                {value: 310, name: '邮件营销'},
                                                {value: 234, name: '联盟广告'},
                                                {value: 135, name: '视频广告'},
                                                {value: 1548, name: '搜索引擎'}
                                            ],
                                            itemStyle: {
                                                emphasis: {
                                                    shadowBlur: 10,
                                                    shadowOffsetX: 0,
                                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                                }
                                            }
                                        }
                                    ]
                                });
                            }
                        },
                        methods: {
                            increment() {
                                this.getCount++;
                            },
                            decrement() {
                                this.getCount--;
                            }
                        }
                    };
                    return item;
                });
            });
        }

        /**
         * 显示当前模板编辑信息
         * @param template
         */
        showEdit(template: any) {
            this.showModal = true;
        }
    }
</script>

<style scoped>
    .dashboard-wrapper {
        position: relative;
        height: calc(100vh - 150px);
    }

    .component-wrapper {
        border: 1px dotted #ffffff;
        width: auto;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    .component-wrapper:hover {
        border: 1px dotted #dedede;
    }

    .edit-wrapper {
        background: #ffffff;
        position: absolute;
        right: -22px;
        top: 0;
        z-index: 1000;
        width: 300px;
        height: 100%;
        border-left: 1px solid #e6e6e6;
    }
</style>
