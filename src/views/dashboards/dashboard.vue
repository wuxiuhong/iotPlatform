<template>
    <div @click="contextMenu.show = false">
        <!--报表Bar start-->
        <dashboard-bar :is-edit="isEdit" :config="dashboard"></dashboard-bar>
        <!--报表Bar end-->
        <!--视图 start-->
        <section class="dashboard-wrapper">
            <div class="component-wrapper" v-for="(item,index) in dashboard.components" :scope="item.ref"
                 :style="item.styleObject" @contextmenu.stop.prevent="rightClick(item,index,$event)">
                <component :is="item.comp" :content="item.props" :ref="item.ref"
                           @child-event="parentMethod" keep-alive></component>
            </div>
        </section>
        <!--视图 end-->
        <!--视图中操作菜单 start-->
        <section class="context-wrapper" :style="contextMenu.style">
            <el-popover popper-class="context-menu" width="80" v-model="contextMenu.show">
                <ul>
                    <li @click="changeLevel(1)">上一层</li>
                    <li @click="changeLevel(-1)">下一层</li>
                    <li @click="showEdit">编辑</li>
                    <li @click="deleteComponent">删除</li>
                </ul>
            </el-popover>
        </section>
        <!--视图中操作菜单 end-->

        <!--编辑配置信息 start-->
        <dashboard-edit :details-info="editInfo.data" :aliases="dashboard.edgeClientAliases" :show-modal="showModal"></dashboard-edit>
        <!--编辑配置信息 end-->
        <!--编辑操作按钮 start-->
        <section class="dashboard-btn-group">
            <el-button v-if="!isEdit" type="primary" icon="el-icon-edit" circle @click="isEdit=true"></el-button>
            <div v-show="isEdit">
                <el-button type="success" icon="el-icon-check" circle @click="isEdit=false"></el-button>
                <el-button type="danger" icon="el-icon-close" circle @click="isEdit=false"></el-button>
            </div>
        </section>
        <!--编辑操作按钮 end-->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { renderFn } from '../../common/render.ts';
    import { Component } from 'vue-property-decorator';
    import { getDashboard } from '../../api/dashboard';
    import dashboardBar from './dashboardBar.vue';
    import dashboardEdit from './dashboardEdit.vue';

    @Component({
        components: {
            dashboardBar,
            dashboardEdit
        }
    })
    export default class Dashboard extends Vue {
        showModal: boolean = false;
        isEdit: boolean = false;
        dashboard: any = {
            components: []
        };
        editInfo: any = {
            data: {},
            index: null
        };
        contextMenu: any = {
            show: false,
            style: {}
        };

        mounted() {
            // 定时更新重置组件
            // setInterval(() => {
            //     if (this.dashboard.components.length)
            //         this.resize();
            // }, 5000);
            this.$store.state.isShowLoading = true;
            // 初始化报表数据
            getDashboard({}).then((ret: any) => {
                this.dashboard = ret.data;
                // 处理格式
                this.dashboard.components = this.dashboard.components.map((item: any, index: number) => {
                    return renderFn(item, index);
                });
                this.$store.state.isShowLoading = false;
            });
        }

        /**
         * 右击事件
         * @param template 当前模板信息
         * @param index 当前模板序列
         * @param e 当前事件节点
         */
        rightClick(template: any, index: number, e: any) {
            if (!this.isEdit) return;
            this.contextMenu.style = {
                position: 'fixed',
                left: e.x + 10 + 'px',
                top: e.y - 10 + 'px',
                'z-index': template.zIndex + 1
            };
            this.contextMenu.show = true;
            this.editInfo = {
                data: template,
                index: index
            };
        }

        /**
         * 显示当前模板编辑信息
         */
        showEdit() {
            this.contextMenu.show = false;
            this.showModal = true;
            this.dashboard.components[this.editInfo.index].props[0].type = 'test';
            // 更新数据
            this.$refs[this.dashboard.components[this.editInfo.index].ref][0].$emit('onUpdate', '');
        }

        /**
         * 删除组件
         */
        deleteComponent() {
            this.contextMenu.show = false;
            this.dashboard.components.splice(this.editInfo.index, 1);
        }

        /**
         * 改变层级
         * @param num 1为上一层, -1为下一层
         */
        changeLevel(num: number) {
            const {zIndex, styleObject} = this.dashboard.components[this.editInfo.index];
            if ((zIndex + num) < 0) return;
            this.dashboard.components[this.editInfo.index].zIndex = zIndex + num;
            this.dashboard.components[this.editInfo.index].styleObject = Object.assign({}, styleObject, {
                ['z-index']: zIndex + num
            });
        }

        /**
         * 重置报表, 循环更新每个组件
         */
        resize() {
            this.dashboard.components.forEach((item: any) => {
                this.$refs[item.ref][0].$emit('onResize', '');
            });
        }

        /**
         * 子组件通信到父组件
         * @param msg
         */
        parentMethod(msg) {
            console.log(msg, 1);
        }

    }
</script>

<style lang="scss" scoped>
    .dashboard-wrapper {
        position: relative;
        height: calc(100vh - 150px);
    }

    .component-wrapper {
        width: auto;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    .context-wrapper li {
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
    }

    .dashboard-btn-group {
        position: absolute;
        right: 40px;
        bottom: 50px;
    }
</style>
