<template>
    <div class="dashboard-bar-component">
        <!--设置导航 start-->
        <div class="dashboard-bar">
            <!--<transition name="el-fade-in">-->
                <div class="bar-nav" v-show="isBar">
                    <el-button type="info" icon="el-icon-setting" circle v-show="isEdit"></el-button>
                    <el-button type="info" icon="el-icon-news" circle @click="dialogSourceVisible = true"></el-button>
                    <el-button type="info" icon="el-icon-download" circle></el-button>
                    <el-button type="info" icon="el-icon-close" circle @click="isBar=false"></el-button>
                </div>
            <!--</transition>-->
            <!--<transition name="el-fade-in">-->
                <div class="bar-more" v-show="!isBar">
                    <el-button type="info" icon="el-icon-more" circle @click="isBar=true"></el-button>
                </div>
            <!--</transition>-->
        </div>
        <!--设置导航 end-->
        <!--数据来源别名配置 start-->
        <el-dialog title="数据来源配置" class="bar-modal" width="60%" :visible.sync="dialogSourceVisible">
            <div class="dashboard-modal-content">
                <el-row :gutter="12" class="table-head">
                    <el-col :span="8" class="table-th">别名</el-col>
                    <el-col :span="12" class="table-th">数据</el-col>
                </el-row>
                <el-card shadow="always" class="card-body" v-for="(item, index) in config.edgeClientAliases" :key="index">
                    <el-row :gutter="12" class="dashboard-modal-card">
                        <el-col :span="1">{{index+1}}</el-col>
                        <el-col :span="8">
                            <el-input v-model="item.alias" placeholder="请输入别名"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-select class="w100" v-model="item.edgeClientList" multiple filterable placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <span class="card-del" @click="delAlias(index)"> <i class="el-icon-close"></i></span>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-plus" class="btn-add" circle @click="addAlias"></el-button>
                <el-button @click="dialogSourceVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveAlias">确 定</el-button>
            </div>
        </el-dialog>
        <!--数据来源别名配置 end-->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class DashboardBar extends Vue {
        isBar: boolean = false;
        dialogSourceVisible: boolean = false;
        options: any = [{
            value: '5f4f7ca0-fda7-11e7-94de-d786c97a036f',
            label: 'edgeClient1'
        }, {
            value: '5f2f',
            label: 'edgeClient2'
        }, {
            value: '5f4f7ca0-fda7',
            label: 'edgeClient3'
        }, {
            value: '5f4f7ca0',
            label: 'edgeClient4'
        }, {
            value: '5f4f7ca0-fda',
            label: 'edgeClient5'
        }];
        @Prop() isEdit: boolean;
        @Prop() config: any;

        mounted() {
            // 如果不存在别名数据
            if (this.config.edgeClientAliases && !this.config.edgeClientAliases.length) {
                this.config.edgeClientAliases.push({
                    alias: '',
                    edgeClientList: []
                });
            }
        }

        /**
         * 添加edgeClient数据别名设置
         */
        addAlias() {
            this.config.edgeClientAliases.push({
                alias: '',
                edgeClientList: []
            });
        }

        /**
         * 删除edgeClient数据别名设置
         * @param {number} index
         */
        delAlias(index: number) {
            if (this.config.edgeClientAliases.length === 1) {
                return this.$message({
                    message: '至少存在一条数据',
                    type: 'warning'
                });
            }
            this.config.edgeClientAliases.splice(index, 1);
        }

        /**
         * 保存别名设置
         */
        saveAlias() {
            console.log('设置别名');
            this.dialogSourceVisible = false;
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard-bar {
        margin-bottom: 8px;
        /*.bar-nav {*/
            /*text-align: right;*/
        /*}*/
        /*.bar-more {*/
            /*position: absolute;*/
            /*right: 0;*/
            /*top: 0;*/
        /*}*/
    }

    .dashboard-modal-content {
        max-height: 400px;
        overflow-y: auto;
        .table-head {
            height: 35px;
            margin: 0 !important;
            .table-th {
                padding-left: 50px !important;
            }
        }
        .card-body + .card-body {
            margin-top: 10px;
        }
        .dashboard-modal-card {
            display: flex;
            justify-content: center;
            align-items: Center;
        }
        .card-del {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            margin-left: 20px;
            i {
                color: rgb(48, 86, 128);
            }
            &:hover {
                border-radius: 50%;
                background-color: hsla(0, 0%, 62%, .2);
            }
        }
    }
    .bar-modal{
        text-align: left;
    }
    .dialog-footer {
        .btn-add {
            float: left;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        }
    }
</style>
