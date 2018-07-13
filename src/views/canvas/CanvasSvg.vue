<template>
    <!--视图 start-->
    <section class="canvas-wrapper">
        <div style="width:600px; border:solid 1px black; float: left">
            <canvas id="canvas" width="600" height="600"></canvas>
        </div>
        <div style="width:400px; float:left; padding:50px;">
            <el-upload class="upload-demo" :before-upload="beforeUpload" drag multiple action="">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <button id="export_import_json" @click="exportCanvas()">Export/Import JSON</button>
        </div>

    </section>
    <!--视图 end-->
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import { fabric } from 'fabric';

    @Component
    export default class Canvas extends Vue {
        canvasData: any = '';

        @Watch('$route')
        onRouterChanged(value: string, oldValue: string) {
            if (value !== oldValue) location.reload();
        }


        mounted() {
            const svg = '<?xml version="1.0" encoding="utf-8"?>' +
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                'x="0px" y="0px" width="400px" height="400px" viewBox="0 0 400 400" enable-background="new 0 0 400 400" xml:space="preserve">' +
                '<rect id="colourFill" x="32.5" y="36.5" fill="#ED1C24" width="107" height="107"/>' +
                '<polygon fill="#8DC63F" points="278,36.5 302.98,87.117 358.84,95.233 318.42,134.633 327.962,' +
                '190.267 278,164 228.038,190.267 237.58,134.633 197.16,95.233 253.02,87.117 "/></svg>';
            this.drawSvg(svg);
        }

        /**
         * 绘制svg的canvas
         * @param svg
         */
        drawSvg(svg) {
            const canvasData = this.canvasData || new fabric.Canvas('canvas');
            canvasData.renderAll();
            fabric.loadSVGFromString(svg, (objects: any, options: any) => {
                objects.forEach((item) => canvasData.add(item));
            }, addSVGProperties);

            // 添加svg属性ID
            function addSVGProperties(el, obj) {
                obj.id = el.getAttribute('id');
            }

            this.canvasData = canvasData;
        }

        /**
         * 导出canvas数据，json数据
         */
        exportCanvas() {
            let exportData = this.canvasData.toJSON(['id', 'hex']);
            console.log(exportData.objects);
            exportData = JSON.stringify(exportData);
            this.canvasData.clear();
            this.canvasData.loadFromJSON(exportData);
        }

        /**
         * 上传文件前操作
         * @author wendy
         * @param file 上传的文件
         */
        beforeUpload(file) {
            const isJPG = file.type === 'image/svg+xml';
            if (!isJPG) this.$message.error('上传图片只能是 SVG 格式!');
            const name = file.name;
            if (typeof FileReader === 'undefined') {
                console.log('Sorry, FileReader() not supported, switch to Chrome and try again.');
            }
            const reader = new FileReader();
            // 读取文件，并且读取svg内容，绘制canvas
            reader.onload = (e: any) => {
                const dataURL = e.target.result;
                const imgEL = new Image();
                imgEL.name = name;
                imgEL.onload = (event: any) => {
                    const image = event.target;
                    // 将image文件内容编码
                    const content = decodeURIComponent(escape(atob(image.src.substring('data:image/svg+xml;base64,'.length))));
                    this.drawSvg(content);
                };
                imgEL.src = dataURL;
            };
            reader.readAsDataURL(file);
        }
    }
</script>
