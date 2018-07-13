<template>
    <!--视图 start-->
    <section class="template-wrapper" v-if="!isLoading">
        <div class="component-wrapper" :scope="templateInfo.ref" :style="templateInfo.styleObject" >
            <component :is="templateInfo.comp" :ref="templateInfo.ref"></component>
        </div>
    </section>
    <!--视图 end-->
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { DashboardsApi } from '../../api';
    import { renderFn } from '../../common';
    import _ from 'lodash';

    @Component
    export default class Widget extends Vue {
        isLoading: boolean = true;
        templateInfo: any = {
            "title": "测试单独组件",
            "zIndex": 1,
            "relation": {
                "x": 0,
                "y": 0
            },
            "styles": {
                "width": "100%",
                "showTitle": false,
                "titleStyle": {
                    "fontSize": "16px",
                    "fontWeight": 400
                },
                "backgroundColor": "#fff",
                "color": "rgba(0, 0, 0, 0.87)",
                "padding": "0px",
                "boxShadow": ""
            }
        };
        resize: any;

        created() {
            // 这样就能保证 resize 只归某个实例拥有
            this.resize = _.debounce(() => {
                this.$children[0].$emit('onResize', '');
                this.$children[0].$emit('onDataUpdated', '更新');
            }, 1000);
        }

        mounted() {
            window.addEventListener('resize', this.resize, {passive: false});
            // 初始化报表数据
            DashboardsApi.getWidget(this.$route.params).then((ret: any) => {
                this.templateInfo.template = {
                    ...ret.data,
                    ... JSON.parse(ret.data.widgetDescriptor)
                };
                // 处理组件格式
                this.templateInfo = renderFn(this.templateInfo, 0, this);
                this.isLoading = false;
            });
        }
    }
</script>

<style lang="scss" scoped>
    .template-wrapper {
        position: relative;
        width: 100%;
        height: calc(100vh - 150px);
        z-index: 0
    }
</style>
