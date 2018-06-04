<template>
    <section>
        <div class="component-wrapper" v-for="item in dashboard.components"
             :style="item.styleObject" track-by="$index">
            {{item.title}}
            <!--<template>-->
            <!--<div v-html="item.templateHtml"></div>-->
            <!--</template>-->
            <async-load-comp :content="item.templateHtml"></async-load-comp>
        </div>
    </section>
</template>

<script lang="tsx">
    import Vue, { CreateElement } from 'vue';
    import { Component } from 'vue-property-decorator';
    import { getDashboard } from '../../api/dashboard';
    import { makeControl, addRenderFn } from '../../core/code_helper';
    import { copyProperties, stringify, parse, deepCopy, jsCopy } from '../../util/assist';

    Vue.component('asyncLoadComp', {
        props: {
            content: String
        },
        data() {
            return {
                info: '22',
            };
        },
        render: function () {
            return (<div>111</div>)
        },
    });
    @Component({})
    export default class Dashboard extends Vue {
        info: string = 'test1111111';
        dashboard: any = {
            components: [{
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
                        const style = document.createElement('style');
                        style.id = 'vue-layout-style';
                        style.type = 'text/css';
                        const textNode = document.createTextNode(item.template.template.templateCss);
                        style.innerHTML = '';
                        style.appendChild(textNode);
                        head.appendChild(style);
                        console.log(style);
                    }
                    item.styleObject = {
                        left: item.relation.x + 'px',
                        top: item.relation.y + 'px'
                    };
                    // item.templateHtml = addRenderFn({
                    //     code: item.template.template.templateHtml,
                    //     render: (item, index) => {
                    //     }
                    // });
                    item.templateHtml = item.template.template.templateHtml;
                    console.log(item.templateHtml);
                    return item;
                });
                console.log(this.dashboard.components);
            });
        }
    }
</script>

<style scoped>
    .component-wrapper {
        width: 200px;
        height: 400px;
        position: relative;
        left: 0;
        top: 0;
        z-index: 0;
    }
</style>
