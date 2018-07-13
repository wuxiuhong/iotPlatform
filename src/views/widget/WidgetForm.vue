<template>
    <!--视图 start-->
    <section class="template-wrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="添加组件" name="first">
                <el-form :model="widgetInfo" label-width="80px">
                    <el-form-item label="版本信息">
                        <el-input v-model="widgetInfo.widgetVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="组件名称">
                        <el-input v-model="widgetInfo.widgetName"></el-input>
                    </el-form-item>
                    <el-form-item label="组件描述">
                        <el-input v-model="widgetInfo.description"></el-input>
                    </el-form-item>
                    <el-form-item label="json组件值">
                        <codemirror class="js-editor" v-model="widgetInfo.widgetDescriptor"
                                    :options="codeOptions"></codemirror>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addWidget">添加组件</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改组件" name="second">
                <el-form :model="widgetInfo" label-width="80px">
                    <el-form-item label="版本信息">
                        <el-input v-model="widgetInfo.widgetVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="组件ID">
                        <el-input v-model="widgetInfo.id" style="width: 50%"></el-input>
                        <el-button type="primary" @click="searchWidget">查看</el-button>
                    </el-form-item>
                    <el-form-item label="组件名称">
                        <el-input v-model="widgetInfo.widgetName"></el-input>
                    </el-form-item>
                    <el-form-item label="组件描述">
                        <el-input v-model="widgetInfo.description"></el-input>
                    </el-form-item>
                    <el-form-item label="json组件值">
                        <codemirror class="js-editor" v-model="widgetInfo.widgetDescriptor"
                                    :options="codeOptions"></codemirror>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateWidget">修改组件</el-button>
                        <el-button type="primary" @click="goWidget">查看组件页面</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="组件信息" name="third">
                <el-form :model="widgetInfo" label-width="80px">
                    <el-form-item label="版本信息">
                        <el-input v-model="widgetInfo.widgetVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="组件ID">
                        <el-input v-model="widgetInfo.id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchWidget">查看组件</el-button>
                        <el-button type="primary" @click="delWidget">删除组件</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>

    </section>
    <!--视图 end-->
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import { DashboardsApi } from '../../api';
    import { codemirror } from 'vue-codemirror-lite';
    import 'codemirror/mode/javascript/javascript';

    @Component({
        components: {
            codemirror
        }
    })
    export default class WidgetForm extends Vue {
        private codeOptions: any = {
            mode: 'javascript',
            extraKeys: {'Ctrl-Space': 'autocomplete'},
            tabSize: 2,
            lineNumbers: true,
            lineWrapping: true,
            iewportMargin: Infinity
        };
        code: string = "";
        activeName: string = "first";
        widgetInfo: any = {
            widgetDescriptor: ""
        };

        handleClick(tab, event) {
            // console.log(tab, event);
        }

        /**
         * 查看组件数据
         */
        searchWidget() {
            DashboardsApi.getWidget({
                "id": this.widgetInfo.id,
                "widgetVersion": this.widgetInfo.widgetVersion || '1.0.0'
            }).then((ret: any) => {
                this.$message('查看组件成功');
                this.widgetInfo = ret.data ? ret.data : {
                    widgetDescriptor: ""
                };
                console.log(ret);
            });
        }

        /**
         * 添加数据
         */
        addWidget() {
            DashboardsApi.addWidget({
                "active": true,
                "isActive": true,
                "widgetName": "机床信息",
                "widgetVersion": "1.0.0",
                ...this.widgetInfo,
            }).then((ret: any) => {
                this.$message('添加组件成功');
                console.log(ret, '11111111111111111111111111');
                this.widgetInfo.id = ret.data;
            });
        }


        /**
         * 修改数据
         */
        updateWidget() {
            DashboardsApi.updateWidget({
                "active": true,
                "isActive": true,
                "widgetName": "机床信息",
                "widgetVersion": "1.0.0",
                ...this.widgetInfo,
            }).then((ret: any) => {
                this.$message('修改组件成功');
                console.log(ret, 'update');
            });
        }

        /**
         * 删除组件数据
         */
        delWidget() {
            DashboardsApi.deleteWidget({
                "id": this.widgetInfo.id,
                "widgetVersion": this.widgetInfo.widgetVersion || '1.0.0'
            }).then((ret: any) => {
                this.$message('删除组件成功');
                console.log(ret);
            });
        }

        // 跳转链接， 查看报表页面
        goWidget() {
            this.$router.push({
                path: `/widget/${ this.widgetInfo.id}/${ this.widgetInfo.widgetVersion}`,
            });
        }
    }
</script>

<style lang="scss" scoped>
    .template-wrapper {
        position: relative;
        padding: 20px 100px;
        height: 100vh;
        background: #ffffff;
        z-index: 0
    }

    .js-editor {
        font-size: 14px;
        line-height: 25px;
        border: 1px solid #ddd;
    }
</style>
