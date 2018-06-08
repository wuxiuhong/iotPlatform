<template>
    <transition name="el-zoom-in-bottom">
        <div class="edit-wrapper side-nav" v-show="showModal">
            <header class="toolbar-header">
                <span class="icon"><i class="el-icon-close" @click="closeDetails"></i></span>
                <div class="header-title">
                    <span class="tb-details-title">{{detailsInfo.title}}</span>
                    <span class="tb-details-subtitle">Timeseries - Flot</span>
                </div>
            </header>
            <div class="toolbar-body">
                <div class="toolbar-operation">
                    <el-button type="primary" size="mini" icon="el-icon-check">保存</el-button>
                    <el-button type="info" size="mini" icon="el-icon-close">取消</el-button>
                </div>
                <el-tabs class="toolbar-tabs" v-model="activeName">
                    <el-tab-pane label="数据" name="first">
                        <div class="tab-item-data">
                            <el-row :gutter="12" class="table-head">
                                <el-col :span="8" class="table-th">类型</el-col>
                                <el-col :span="16" class="table-th">数据</el-col>
                            </el-row>
                            <el-card shadow="always" class="card-body" v-for="(item, index) in detailsInfo.dataSources"
                                     :key="index">
                                <el-row :gutter="12" class="card-body-key">
                                    <el-col :span="1">{{index+1}}</el-col>
                                    <el-col :span="6">
                                        <el-select class="w100" v-model="item.type" placeholder="请选择数据类型">
                                            <el-option key="function" label="Function" value="function"></el-option>
                                            <el-option key="edgeClient" label="EdgeClient"
                                                       value="edgeClient"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="14" v-if="item.type === 'function'">
                                        <el-input placeholder="请输入内容"></el-input>
                                    </el-col>
                                    <el-col :span="4" v-if="item.type === 'edgeClient'">
                                        <el-select class="w100" v-model="item.aliasId" filterable placeholder="请选择别名">
                                            <el-option v-for="alias in aliases" :key="alias.aliasId"
                                                       :label="alias.alias"
                                                       :value="alias.aliasId">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="10" v-if="item.type === 'edgeClient'">
                                        <el-collapse accordion>
                                            <el-collapse-item>
                                                <template slot="title">TimeSeries</template>
                                                <ul>
                                                    <li v-for="keys in item.dataKeys">{{keys.name}}</li>
                                                </ul>
                                            </el-collapse-item>
                                            <el-collapse-item>
                                                <template slot="title">Attributes</template>
                                                <ul>
                                                    <li v-for="keys in item.dataKeys">{{keys.name}}</li>
                                                </ul>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </el-col>
                                    <el-col :span="3">
                                        <span class="card-del" @click="delData(index)"> <i
                                                class="el-icon-close"></i></span>
                                    </el-col>
                                </el-row>
                            </el-card>
                            <el-button type="primary" icon="el-icon-plus" circle @click="addData"></el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="组件设置" name="second">配置管理</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component({})
    export default class DashboardEdit extends Vue {
        activeName: string = 'first';
        @Prop() showModal: boolean;
        @Prop() detailsInfo: any;
        @Prop() aliases: any;

        mounted() {
            console.log(this.detailsInfo);
        }

        closeDetails() {
            this.showModal = false;
        }

        /**
         * 添加数据绑定设置
         */
        addData() {
            this.detailsInfo.dataSources.push({
                "type": "function",
                "dataKeys": []
            });
        }

        /**
         * 删除数据绑定设置
         * @param {number} index
         */
        delData(index: number) {
            this.detailsInfo.dataSources.splice(index, 1);
        }
    }
</script>

<style lang="scss" scoped>
    .edit-wrapper {
        background: #ffffff;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1000;
        width: 60%;
        height: 100%;
        border-left: 1px solid #e6e6e6;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
        .toolbar-header {
            background-color: #262d45;
            color: rgba(255, 255, 255, 0.87);
            box-sizing: border-box;
            display: -webkit-box;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            font-size: 20px;
            min-height: 64px;
            width: 100%;
            .header-title {
                min-height: 100px;
                max-height: 120px;
                height: 100%;
                padding: 0 16px;
            }
            .tb-details-subtitle, .tb-details-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: inherit;
                display: block;
            }
            .tb-details-title {
                font-size: 1.6rem;
                font-weight: 400;
                text-transform: uppercase;
                margin: 20px 8px 0 0;
            }
            .tb-details-subtitle {
                font-size: 1rem;
                margin: 10px 0;
                opacity: .8;
            }
            .icon {
                color: #ffffff;
                position: absolute;
                padding: 10px;
                top: 30px;
                right: 10px;
                cursor: pointer;
                &:hover {
                    border-radius: 50%;
                    background-color: hsla(0, 0%, 62%, .2);
                }
            }
        }
        .toolbar-body {
            position: relative;
        }
        .toolbar-operation {
            position: absolute;
            right: 20px;
            top: 15px;
            z-index: 1000;
        }
        .toolbar-tabs {
            line-height: 55px;
            .tab-item-data {
              margin: 0 20px;
            }
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
            .card-body-key {
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
    }

</style>
