<template>
    <div class="dashboard-bar-component">
        <div class="dashboard-bar">
            <transition name="el-fade-in">
                <div class="bar-nav" v-show="isBar">
                    <el-button type="info" icon="el-icon-setting" circle v-show="isEdit"></el-button>
                    <el-button type="info" icon="el-icon-news" circle @click="dialogSourceVisible = true"></el-button>
                    <el-button type="info" icon="el-icon-download" circle></el-button>
                    <el-button type="info" icon="el-icon-close" circle @click="isBar=false"></el-button>
                </div>
            </transition>
            <transition name="el-fade-in">
                <div class="bar-more" v-show="!isBar">
                    <el-button type="info" icon="el-icon-more" circle @click="isBar=true"></el-button>
                </div>
            </transition>
        </div>
        <el-dialog title="数据来源配置" width="70%" :visible.sync="dialogSourceVisible">
            <div class="dashboard-modal-content">
                <el-row :gutter="12" class="table-head">
                    <el-col :span="8" class="table-th">别名</el-col>
                    <el-col :span="12" class="table-th">数据</el-col>
                </el-row>
                <el-card shadow="always">
                    <el-row :gutter="12" class="dashboard-modal-card">
                        <el-col :span="1">1</el-col>
                        <el-col :span="8">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-select class="w100" v-model="value5" multiple filterable placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <span class="card-del"> <i class="el-icon-close"></i></span>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-plus" class="btn-add" circle></el-button>
                <el-button @click="dialogSourceVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogSourceVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component({})
    export default class DashboardBar extends Vue {
        isBar: boolean = false;
        dialogSourceVisible: boolean = false;
        options: any = [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面'
        }, {
            value: '选项5',
            label: '北京烤鸭'
        }];
        value5: any = [];
        input: string = '';
        @Prop() isEdit: boolean;

        mounted() {
        }

    }
</script>

<style lang="scss" scoped>
    .dashboard-bar {
        position: relative;
        top: 0;
        z-index: 1000;
        height: 55px;
        line-height: 55px;
        .bar-nav {
            text-align: right;
        }
        .bar-more {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    .dashboard-modal-content {
        .table-head {
            height: 35px;
            .table-th {
                padding-left: 50px !important;
            }
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

    .dialog-footer {
        .btn-add {
            float: left;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        }
    }
</style>
