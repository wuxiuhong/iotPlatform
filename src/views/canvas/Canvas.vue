<template>
    <!--视图 start-->
    <section class="canvas-wrapper">
        <canvas id="canvas" width="1600" height="1000"></canvas>
    </section>
    <!--视图 end-->
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { fabric } from 'fabric';
    import { CanvasApi } from '../../api';
    import { CanvasService } from '../../common';

    @Component
    export default class Canvas extends Vue {
        @Watch('$route')
        onRouterChanged(value: string, oldValue: string) {
            if (value !== oldValue) location.reload();
        }
        mounted() {
            CanvasApi.getCanvas(this.$route.params).then((ret: any) => {
                ret.data.data.canvasName = 'canvas';
                CanvasService(ret.data.data, 'static').render();
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>
