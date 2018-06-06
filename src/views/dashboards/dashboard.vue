<template>
    <div>
        <section class="dashboard-wrapper">
            <div class="component-wrapper" v-for="(item,index) in dashboard.components"
                 :style="item.styleObject" @contextmenu.stop.prevent="showEdit(item,index)">
                {{item.title}}
                <component :is="item.comp" :content="item.props" :ref="item.ref"></component>
            </div>
        </section>
        <div class="edit-wrapper" v-if="showModal">
            <i class="icon el-icon-close" @click="showModal = false"></i>
            <h3>编辑{{editInfo.title}}</h3>
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
            components: []
        };
        editInfo: any = {};

        mounted() {
            // 定时更新重置组件
            setInterval(() => {
                if (this.dashboard.components.length)
                    this.resize();
            }, 5000);

            // 初始化报表数据
            getDashboard({}).then((ret: any) => {
                this.dashboard = ret.data;
                const head = document.head;
                this.dashboard.components = this.dashboard.components.map((item: any, index: number) => {
                    // 添加css，css格式处理
                    if (item.template.template.templateCss) {
                        const style = document.createElement("style");
                        style.id = "vue-layout-style";
                        style.type = "text/css";
                        const textNode = document.createTextNode(item.template.template.templateCss);
                        style.innerHTML = "";
                        style.appendChild(textNode);
                        head.appendChild(style);
                    }
                    // 当前组件外部的样式处理
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
                    // 开放的接口处理
                    item.props = item.template.template.dataSources;
                    // 组件的节点
                    item.ref = 'child' + index;
                    const method = {
                        onUpdate() {
                            this.getCount++;
                        },
                        onResize() {
                            this.getCount = 0;
                        },
                        increment() {
                            this.getCount++;
                        },
                        decrement() {
                            this.getCount--;
                        }
                    };
                    item.comp = {
                        template: item.template.template.templateHtml,
                        props: ['content'],
                        data() {
                            return {
                                ...item.template.template.defaultData
                            };
                        },
                        mounted() {
                            // 处理初始化格式处理
                            new Function('maxIot', 'echarts', item.template.template.controllerScript.mounted)(this, echarts);

                        },
                        methods: new Function(item.template.template.controllerScript.methods)()
                    };

                    return item;
                });
            });
        }

        /**
         * 显示当前模板编辑信息
         * @param template
         */
        showEdit(template: any, index: number) {
            this.showModal = true;
            this.editInfo = template;
            this.dashboard.components[index].props[0].type = 'test';
            this.$refs[this.dashboard.components[index].ref][0].onUpdate();
        }

        /**
         * 重置报表, 循环更新每个组件
         */
        resize() {
            this.dashboard.components.forEach((item: any) => {
                this.$refs[item.ref][0].onResize();
            });
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
        right: 0;
        top: 0;
        z-index: 1000;
        width: 300px;
        height: 100%;
        border-left: 1px solid #e6e6e6;
    }

    .edit-wrapper h3 {
        padding: 10px;
    }

    .edit-wrapper .icon {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
</style>
