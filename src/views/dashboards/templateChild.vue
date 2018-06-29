<template>
    <div>
        <component :is="templateInfo.comp" :ref="templateInfo.ref" @child-event="parentMethod" keep-alive></component>
        <div v-if="templateInfo.template.components && templateInfo.template.components.length" :scope="child.ref"
             class="component-wrapper" v-for="child in templateInfo.template.components" :style="child.styleObject">
            <templateChild :templateInfo="child" :ref="child.pref"></templateChild>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class templateChild extends Vue {
        @Prop() templateInfo: any;

        /**
         * 子组件通信到父组件
         * @param msg
         */
        parentMethod(msg: any) {
            console.log(msg, 1);
        }

    }
</script>

<style lang="scss" scoped>
    .component-wrapper {
        width: auto;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        div {
            width: 100%;
            height: 100%;
        }
    }
</style>
