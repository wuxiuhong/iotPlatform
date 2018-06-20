<template>
    <!--视图 start-->
    <section class="template-wrapper">
        <div class="component-wrapper" :scope="compInfo.ref" v-if="compInfo.ref">
            <component :is="compInfo.comp" :content="compInfo.props" :ref="compInfo.ref"></component>
        </div>
    </section>
    <!--视图 end-->
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { TemplateApi } from '../../api';
    import TemplateService from '../../util/template.service';
    import { renderTemplateFn } from '../../common';
    import _ from 'lodash';

    @Component
    export default class Template extends Vue {

        templateInfo: any = {};
        compInfo: any = {
            props: {},
            ref: "",
            comp: {}
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
            TemplateApi.getTemplate({}).then((ret: any) => {
                this.templateInfo = ret.data.data;
                // 处理组件格式
                this.templateInfo.getTemplate = TemplateService.bind(this)(this.templateInfo.template, this);
                this.compInfo.ref = 'child';
                this.compInfo.comp = renderTemplateFn(this.templateInfo);
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
