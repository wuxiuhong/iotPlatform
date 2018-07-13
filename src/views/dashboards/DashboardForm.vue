<template>
    <!--视图 start-->
    <section class="template-wrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="添加报表" name="first">
                <el-form :model="dashboardInfo" label-width="80px">
                    <el-form-item label="报表版本">
                        <el-input v-model="dashboardInfo.dashboardVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="报表名称">
                        <el-input v-model="dashboardInfo.dashboardTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="报表描述">
                        <el-input v-model="dashboardInfo.description"></el-input>
                    </el-form-item>
                    <el-form-item label="报表配置">
                        <codemirror class="js-editor" v-model="dashboardInfo.dashboardConfiguration"
                                    :options="codeOptions"></codemirror>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addDashboard">添加报表</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改报表" name="second">
                <el-form :model="dashboardInfo" label-width="80px">
                    <el-form-item label="版本信息">
                        <el-input v-model="dashboardInfo.dashboardVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="报表ID">
                        <el-input v-model="dashboardInfo.id" style="width: 50%"></el-input>
                        <el-button type="primary" @click="searchDashboard">查看</el-button>
                    </el-form-item>
                    <el-form-item label="报表标题">
                        <el-input v-model="dashboardInfo.dashboardTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="报表描述">
                        <el-input v-model="dashboardInfo.description"></el-input>
                    </el-form-item>
                    <el-form-item label="报表配置">
                        <codemirror class="js-editor" v-model="dashboardInfo.dashboardConfiguration"
                                    :options="codeOptions"></codemirror>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateDashboard">修改报表</el-button>
                        <el-button v-if="dashboardInfo.dashboardVersion && dashboardInfo.id" type="primary"
                                   @click="goBashboard()">查看报表页面
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="报表信息" name="third">
                <el-form :model="dashboardInfo" label-width="80px">
                    <el-form-item label="报表版本">
                        <el-input v-model="dashboardInfo.dashboardVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="报表ID">
                        <el-input v-model="dashboardInfo.id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchDashboard">查看报表</el-button>
                        <el-button type="primary" @click="delDashboard">删除报表</el-button>
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
    import { DashboardsApi } from '../../api/index';
    import { codemirror } from 'vue-codemirror-lite';
    import 'codemirror/mode/javascript/javascript';

    @Component({
        components: {
            codemirror
        }
    })
    export default class DashboardForm extends Vue {
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
        dashboardInfo: any = {
            dashboardConfiguration: ""
        };

        handleClick(tab, event) {
            // console.log(tab, event);
        }

        // 跳转链接， 查看报表页面
        goBashboard() {
            this.$router.push({
                path: `/dashboards/detail/${ this.dashboardInfo.id}/${ this.dashboardInfo.dashboardVersion}`,
            });
        }

        /**
         * 查看组件数据
         */
        searchDashboard() {
            DashboardsApi.getDashboard({
                "id": this.dashboardInfo.id,
                "dashboardVersion": this.dashboardInfo.dashboardVersion || '1.0.0'
            }).then((ret: any) => {
                this.$message('查看报表成功');
                this.dashboardInfo = ret.data ? ret.data : {
                    dashboardConfiguration: ""
                };
                console.log(ret);
            });
        }

        /**
         * 添加数据
         */
        addDashboard() {
            DashboardsApi.addDashboard({
                "active": true,
                "isActive": true,
                "dashboardTitle": "报表名称",
                "dashboardVersion": "1.0.0",
                ...this.dashboardInfo
            }).then((ret: any) => {
                this.$message('添加报表成功');
                console.log(ret, '11111111111111111111111111');
                this.dashboardInfo.id = ret.data;
            });
        }


        /**
         * 修改数据
         */
        updateDashboard() {
            DashboardsApi.updateDashboard({
                "active": true,
                "isActive": true,
                "dashboardVersion": "1.0.0",
                ...this.dashboardInfo
            }).then((ret: any) => {
                this.$message('修改报表成功');
                console.log(ret, 'update');
            });
        }

        /**
         * 删除组件数据
         */
        delDashboard() {
            DashboardsApi.deleteDashboard({
                "id": this.dashboardInfo.id,
                "dashboardVersion": this.dashboardInfo.dashboardVersion || '1.0.0'
            }).then((ret: any) => {
                this.$message('删除组件成功');
                console.log(ret);
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
