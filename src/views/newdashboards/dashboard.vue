<template>
    <div :style="dashboard.styles" @click="select($event)">
        <div class="header">
            <div class="logo">智能管理系统</div>
            <div class="select">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{currentItem}}
                    </span>
                    <i class="icon" @click.stop="idExpanded==!idExpanded;"></i>
                    <div v-show="idExpanded" class="option">
                        <ul class="option-content">
                            <li v-for="item in items" v-bind:key="item" marking=“vaule”>
                                {{item}}
                            </li>
                        </ul>
                        <i class="option-icon"></i>
                    </div>
                </el-dropdown>
            </div>
            <div class="user">
                <i class="user-icon"></i>
                <span class="user-info">{{userInfo.username}}</span>
            </div>
            <div class="logout" @click="logout">登出</div>
        </div>
        <div class="dashboard-container" @click="contextMenu.show = false">

            <!-- <Breadcrumb :aliases="[dashboard.title ]"></Breadcrumb> -->
            <!--视图 start-->
            <section class="dashboard-wrapper" v-if="!isLoading">
                <div class="component-wrapper" v-for="(item,index) in dashboard.components" :scope="item.ref"
                     :style="item.styleObject" @contextmenu.stop.prevent="rightClick(item,index, $event)">
                    <component :is="item.comp" :ref="item.ref" @child-event="parentMethod" keep-alive></component>
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
            <dashboard-edit :details-info="editInfo.data" :aliases="dashboard.edgeClientAliases" @on-refresh="onRefresh"
                            :show-modal="showModal" v-if="showModal"></dashboard-edit>
            <!--编辑配置信息 end-->
            <!--编辑操作按钮 start-->
            <!--<section class="dashboard-btn-group">-->
            <!--&lt;!&ndash;报表Bar start&ndash;&gt;-->
            <!--<dashboard-bar :is-edit="isEdit" :config="dashboard"></dashboard-bar>-->
            <!--&lt;!&ndash;报表Bar end&ndash;&gt;-->
            <!--<el-button v-if="!isEdit" type="primary" icon="el-icon-edit" circle @click="isEdit=true"></el-button>-->
            <!--<div v-show="isEdit">-->
            <!--<el-button type="success" icon="el-icon-check" circle @click="isEdit=false"></el-button>-->
            <!--<el-button type="danger" icon="el-icon-close" circle @click="isEdit=false"></el-button>-->
            <!--</div>-->
            <!--</section>-->
            <!--编辑操作按钮 end-->

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { renderFn, subscribeEdgeClient } from "../../common";
    import axios from "axios";
    import { Component, Watch } from "vue-property-decorator";
    import { DashboardApi, TemplateApi } from "../../api";
    import WebsocketService from "../../common/service/websocket.service";
    import { formatDashboard } from "../../common/tool/renderFormat";
    import CopyRight from "../../components/layout/CopyRight.vue";
    import Breadcrumb from "../../components/layout/Breadcrumb.vue";
    import _ from "lodash";

    @Component({
        components: {CopyRight, Breadcrumb},
        // 验证是否登陆
        beforeRouteEnter(to, from, next) {
            if (to.path.indexOf("login") !== -1) {
                sessionStorage.removeItem("user");
                next();
            } else if (sessionStorage.getItem("user")) {
                next();
            } else {
                next({path: "/login"});
            }
        }
    })
    export default class Dashboard extends Vue {
        showModal: boolean = false;
        isEdit: boolean = false;
        isLoading: boolean = true;
        idExpanded: boolean = false;
        items: String[] = ["空压机", "冰机"];
        currentItem: string = "空压机";
        userInfo: object = JSON.parse(sessionStorage.getItem("user"));
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

        @Watch("$route")
        onRouterChanged(value: string, oldValue: string) {
            if (value !== oldValue) location.reload();
        }

        created() {
            // 这样就能保证 resize 只归某个实例拥有
            this.resize = _.debounce(() => {
                this.dashboard.components.forEach((item: any) => {
                    this.$refs[item.ref][0].$emit("onResize", "");
                });
            }, 1000);
        }

        mounted() {
            console.log(typeof sessionStorage.getItem("user"));
            // 定义重置组件监听通知函数
            this.$on("onHide", (msg: any) => {
                this.isEdit = false;
            });
            window.addEventListener("resize", this.resize, {passive: false});
            this.$store.state.isShowLoading = true;

            // 获取路由参数数据
            const path = (this.$route.params as any).id || "cd";
            const routerData = ["cd", "fmcs1", "fmcs2", "demo"];
            if (!routerData.includes(path)) this.$router.push("/404");
            // 初始化报表数据
            DashboardApi.getDashboard(path).then((ret: any) => {
                // 处理报表数据格式
                this.dashboard = formatDashboard(ret.data);
                // 处理组件数据格式
                axios
                    .all(
                        this.dashboard.components.map(
                            (item: any, index: number) => {
                                // todo 如果报表存在组件，无需获取组件
                                if (item.template) {
                                    this.dashboard.components[index] = renderFn(
                                        item,
                                        index,
                                        this
                                    );
                                    return false;
                                }
                                return TemplateApi.getTemplate({
                                    id: item.templateId,
                                    version: item.templateVersion
                                }).then((t: any) => {
                                    item.template = t.data;
                                    this.dashboard.components[index] = renderFn(
                                        item,
                                        index,
                                        this
                                    );
                                });
                            }
                        )
                    )
                    .then(
                        axios.spread((acct: any, perms: any) => {
                            // 请求现已完成
                            subscribeEdgeClient.bind(this)(this.dashboard);
                            this.isLoading = false;
                            this.$store.state.isShowLoading = false;
                        })
                    );
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
                position: "fixed",
                left: e.x + 10 + "px",
                top: e.y - 10 + "px",
                "z-index": template.zIndex + 1
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
            const {zIndex, styleObject} = this.dashboard.components[
                this.editInfo.index
                ];
            if (zIndex + num < 0) return;
            this.dashboard.components[this.editInfo.index].zIndex = zIndex + num;
            this.dashboard.components[
                this.editInfo.index
                ].styleObject = Object.assign({}, styleObject, {
                ["z-index"]: zIndex + num
            });
        }

        /**
         * 重置报表, 循环更新每个组件
         */
        resize() {
            this.dashboard.components.forEach((item: any) => {
                this.$refs[item.ref][0].$emit("onResize", "");
            });
        }

        /**
         * 子组件通信到父组件
         * @param msg
         */
        parentMethod(msg: any) {
            console.log(msg, 1);
        }

        onRefresh(msg: any) {
            this.showModal = false;
            this.dashboard.components[this.editInfo.index].data = msg;
            this.editInfo = {
                data: null,
                index: null
            };
        }

        beforeDestroy() {
            window.removeEventListener("resize", this.resize);
            WebsocketService().reset(true);
        }

        // 获取分类值
        select(e) {
            if (e.target.getAttribute("marking")) {
                this.currentItem = e.target.innerText;
            }
            this.idExpanded = false;
        }

        // 退出登陆
        logout() {
            sessionStorage.removeItem("user");
            this.$router.push("/login");
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard-container {
        padding: 50px 30px 0 30px;
        margin: auto;
    }

    .header {
        width: 100%;
        height: 52px;
        border-bottom: 3px solid black;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1;
        background: #131725 100%;
        .logo {
            position: absolute;
            left: 40px;
            top: 50%;
            margin-top: -9px;
            font-size: 16px;
            color: #ffffff;
            letter-spacing: 0.07px;
            line-height: 19px;
        }
        .select {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -9px;
            margin-left: -29px;
            cursor: pointer;
            .icon {
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                background: url("../../../static/images/svg/header/down.svg") no-repeat;
            }
            .el-dropdown {
                color: #00d4bd;
                font-size: 16px;
                .el-dropdown-link {
                    vertical-align: middle;
                }
            }
            .option {
                width: 80px;
                background: #131725;
                position: absolute;
                top: -5px;
                left: -5px;
                color: #00d4bd;
                z-index: 1;
                .option-content {
                    li {
                        margin-left: 5px;
                        padding: 5px 0px;
                    }
                }
                .option-icon {
                    position: absolute;
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url("../../../static/images/svg/header/up.svg") center no-repeat;
                    top: 4px;
                    right: 2px;
                }
            }
        }
        .user {
            position: absolute;
            right: 108px;
            top: 50%;
            margin-top: -16px;
            color: rgba(255, 255, 255, 0.54);
            font-size: 16px;
            .user-info {
                font-size: 16px;
                color: rgba(255, 255, 255, 0.54);
                letter-spacing: 0.09px;
                line-height: 14px;
                vertical-align: middle;
            }
            .user-icon {
                vertical-align: middle;
            }
        }
        .logout {
            position: absolute;
            right: 40px;
            top: 50%;
            margin-top: -10px;
            color: rgba(255, 255, 255, 0.54);
            cursor: pointer;
        }
    }

    .user-icon {
        display: inline-block;
        width: 32px;
        height: 32px;
        background: url("../../../static/images/svg/header/profile.svg") no-repeat;
    }

    .dashboard-wrapper {
        position: relative;
        width: 100%;
        z-index: 0;
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
