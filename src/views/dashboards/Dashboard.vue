<template>
    <section>
        <div class="" v-for="item in dashboard.components">
            {{item.title}}
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { getDashboard } from '../../api/dashboard';

    @Component
    export default class Dashboard extends Vue {
        dashboard: any = {
            components: []
        };

        mounted() {
            // 初始化报表数据
            getDashboard({}).then((ret: any) => {
                this.dashboard = ret.data;
                const head = document.head;
                this.dashboard.components.map((item: any) => {
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
                        left: item.relation.x,
                        top: item.relation.y,
                        sizeX: item.size.x,
                        sizeY: item.size.y,
                        templateHtml: item.template.template.templateHtml
                    };
                    return item;
                });
                console.log(this.dashboard.components);
            });
        }
    }
</script>

<style scoped>

</style>
