<template>
    <div class="dashboard-container" :style="dashboard.styles"
         @click="contextMenu.show = false">
        <Breadcrumb :aliases="[dashboard.title ]"></Breadcrumb>
        <!--视图 start-->
        <section class="dashboard-wrapper" v-if="!isLoading">
            <div class="component-wrapper" v-for="(item,index) in dashboard.components" :scope="item.ref"
                 :style="item.styleObject" @contextmenu.stop.prevent="rightClick(item, index, $event)">
                <WidgetItem :templateInfo="item" :ref="item.pref"></WidgetItem>
            </div>

            <CopyRight></CopyRight>
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
        <DashboardEdit :details-info="editInfo.data" :aliases="dashboard.edgeClientAliases" @on-refresh="onRefresh"
                       :show-modal="showModal" v-if="showModal"></DashboardEdit>
        <!--编辑配置信息 end-->
        <!--编辑操作按钮 start-->
        <!--<section class="dashboard-btn-group">-->
        <!--&lt;!&ndash;报表Bar start&ndash;&gt;-->
        <!--<DashboardBar :is-edit="isEdit" :config="dashboard"></DashboardBar>-->
        <!--&lt;!&ndash;报表Bar end&ndash;&gt;-->
        <!--<el-button v-if="!isEdit" type="primary" icon="el-icon-edit" circle @click="isEdit=true"></el-button>-->
        <!--<div v-show="isEdit">-->
        <!--<el-button type="success" icon="el-icon-check" circle @click="isEdit=false"></el-button>-->
        <!--<el-button type="danger" icon="el-icon-close" circle @click="isEdit=false"></el-button>-->
        <!--</div>-->
        <!--</section>-->
        <!--编辑操作按钮 end-->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import axios from 'axios';
    import { Component, Watch } from 'vue-property-decorator';
    import { DashboardApi, TemplateApi } from '../../api/index';
    import { renderFn, subscribeEdgeClient, WebsocketService } from '../../common/index';
    import { formatDashboard } from '../../common/tool/renderFormat';
    import DashboardBar from './DashboardBar.vue';
    import DashboardEdit from './DashboardEdit.vue';
    import WidgetItem from './WidgetItem.vue';
    import CopyRight from '../../components/layout/CopyRight.vue';
    import Breadcrumb from '../../components/layout/Breadcrumb.vue';
    import _ from 'lodash';

    @Component({
        components: {
            DashboardBar,
            DashboardEdit,
            WidgetItem,
            CopyRight,
            Breadcrumb
        }
    })
    export default class Dashboard extends Vue {
        showModal: boolean = false;
        isEdit: boolean = false;
        isLoading: boolean = true;
        dashboard: any = {
            components: []
        };
        editInfo: any = {
            data: null,
            index: null
        };
        contextMenu: any = {
            show: false,
            style: {}
        };

        resize() {
        }

        @Watch('$route')
        onRouterChanged(value: string, oldValue: string) {
            if (value !== oldValue) location.reload();
        }

        created() {
            // 这样就能保证 resize 只归某个实例拥有
            this.resize = _.debounce(() => {
                this.dashboard.components.forEach((item: any) => {
                    if (this.$refs && this.$refs[item.pref]) {
                        this.resizeWidget(item, this.$refs[item.pref][0].$refs);
                    }
                });
            }, 1000);
        }

        mounted() {
            // 定义重置组件监听通知函数
            this.$on('onHide', (msg: any) => {
                this.isEdit = false;
            });
            window.addEventListener('resize', this.resize, {passive: false});
            this.$store.state.isShowLoading = true;

            // 获取路由参数数据
            const path = (this.$route.params as any).id || 'cd';
            const routerData = ['cd', 'fmcs1', 'fmcs2', 'demo', 'canvas'];
            if (!routerData.includes(path)) this.$router.push('/404');
            // 初始化报表数据
            DashboardApi.getDashboard(path).then((ret: any) => {
                // 处理报表数据格式
                this.dashboard = formatDashboard(ret.data);
                // 处理组件数据格式
                axios.all(this.dashboard.components.map((item: any, index: number) => {
                    return this.formatTemplate(item, index);
                })).then(axios.spread(() => {
                    // 请求现已完成
                    subscribeEdgeClient.bind(this)(this.dashboard);
                    this.isLoading = false;
                    this.$store.state.isShowLoading = false;
                }));
            });
        }

        /**
         * 处理组件
         * @param template 当前组件信息
         * @param index 当前组件序列
         */
        formatTemplate(template: any, index: number) {
            // todo 如果报表存在组件，无需获取组件
            if (template.template) {
                template = renderFn(template, index, this);
                if (template.template.components && template.template.components.length) {
                    axios.all(template.template.components.map((child: any, cindex: number) => {
                        return this.formatTemplate(child, cindex);
                    }));
                }
                return false;
            }
            return TemplateApi.getTemplate({
                id: template.templateId,
                version: template.templateVersion
            }).then((t: any) => {
                template.template = t.data;
                // 如果存在模板信息
                if (t.data) {
                    template = renderFn(template, index, this);
                    if (template.template.components && template.template.components.length) {
                        axios.all(template.template.components.map((child: any, cindex: number) => {
                            return this.formatTemplate(child, cindex);
                        }));
                    }
                }
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
         * @param comp 当前组件
         * @param  eventRef 当前ref事件
         */
        resizeWidget(comp: any, eventRef: any) {
            eventRef[comp.ref].$emit('onResize', '');
            if (comp.template.components) {
                // 嵌套组件处理
                comp.template.components.forEach((temp: any) => {
                    if (eventRef[temp.pref]) {
                        this.resizeWidget(temp, eventRef[temp.pref][0].$refs);
                    }
                });
            }
        }

        /**
         * 编辑配置信息刷新
         * @param msg
         */
        onRefresh(msg: any) {
            this.showModal = false;
            this.dashboard.components[this.editInfo.index].data = msg;
            this.editInfo = {
                data: null,
                index: null
            };
        }


        beforeDestroy() {
            window.removeEventListener('resize', this.resize);
            WebsocketService().reset(true);
        }

    }
</script>

<style lang="scss" scoped>
    .dashboard-container {
        padding: 0 30px;
        margin: auto;
    }

    .dashboard-wrapper {
        position: relative;
        width: 100%;
        z-index: 0
    }

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

    .context-wrapper li {
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
    }

    .dashboard-btn-group {
        position: absolute;
        right: 48px;
        bottom: 50px;
        text-align: right;
    }
</style>
