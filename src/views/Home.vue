<template>
    <el-row class="container">
        <!--暂时隐藏-->
        <!--<el-col :span="24" class="header">-->
        <!--&lt;!&ndash;<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">&ndash;&gt;-->
        <!--&lt;!&ndash;{{collapsed ? '' : sysName}}&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :span="10">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="tools" @click.prevent="collapse">&ndash;&gt;-->
        <!--&lt;!&ndash;<i class="fa fa-align-justify"></i>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--<el-col :span="4" class="userinfo">-->
        <!--<el-dropdown trigger="hover">-->
        <!--<span class="el-dropdown-link userinfo-inner"><img-->
        <!--:src="this.sysUserAvatar"/> {{sysUserName}}</span>-->
        <!--<el-dropdown-menu slot="dropdown">-->
        <!--<el-dropdown-item>我的消息</el-dropdown-item>-->
        <!--<el-dropdown-item>设置</el-dropdown-item>-->
        <!--<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--</el-col>-->
        <!--</el-col>-->
        <el-col :span="24" class="main">
            <!--<aside :class="collapsed?'menu-collapsed':'menu-expanded'">-->
            <!--&lt;!&ndash;导航菜单&ndash;&gt;-->
            <!--<div v-show="!collapsed" style="height: 100%;">-->
            <!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen"-->
            <!--@close="handleclose" @select="handleselect"-->
            <!--unique-opened router>-->
            <!--<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">-->
            <!--<el-submenu :index="index+''" v-if="!item.leaf">-->
            <!--<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>-->
            <!--<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"-->
            <!--v-if="!child.hidden">{{child.name}}-->
            <!--</el-menu-item>-->
            <!--</el-submenu>-->
            <!--<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i-->
            <!--:class="item.iconCls"></i>{{item.children[0].name}}-->
            <!--</el-menu-item>-->
            <!--</template>-->
            <!--</el-menu>-->
            <!--</div>-->
            <!--&lt;!&ndash;导航菜单-折叠后&ndash;&gt;-->
            <!--<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">-->
            <!--<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">-->
            <!--<template v-if="!item.leaf">-->
            <!--<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"-->
            <!--@mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>-->
            <!--<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"-->
            <!--@mouseout="showMenu(index,false)">-->
            <!--<li v-for="child in item.children" v-if="!child.hidden" :key="child.path"-->
            <!--class="el-menu-item" style="padding-left: 40px;"-->
            <!--:class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">-->
            <!--{{child.name}}-->
            <!--</li>-->
            <!--</ul>-->
            <!--</template>-->
            <!--<template v-else>-->
            <!--<div class="el-submenu">-->
            <!--<div class="el-submenu__title el-menu-item"-->
            <!--style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"-->
            <!--:class="$route.path==item.children[0].path?'is-active':''"-->
            <!--@click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i>-->
            <!--</div>-->
            <!--</div>-->
            <!--</template>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</aside>-->
            <section class="content-container" v-loading="this.$store.state.isShowLoading">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">{{$route.name}}</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Home extends Vue {
        sysName: string = 'MAXIOT';
        collapsed: boolean = true;
        sysUserName: string = '';
        sysUserAvatar: string = '';
        form: any = {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        };

        // 声明周期钩子
        mounted() {
            let user: any = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }
        }

        onSubmit() {
            console.log('submit!');
        }

        handleopen() {
            // console.log('handleopen');
        }

        handleclose() {
            // console.log('handleclose');
        }

        handleselect(a, b) {
        }

        // 退出登录
        logout() {
            this.$confirm('确认退出吗?', '提示', {
                // type: 'warning'
            }).then(() => {
                sessionStorage.removeItem('user');
                this.$router.push('/login');
            }).catch(() => {
            });
        }

        // 折叠导航栏
        collapse() {
            this.collapsed = !this.collapsed;
        }

        showMenu(i, status) {
            ((this.$refs.menuCollapsed as HTMLElement).getElementsByClassName('submenu-hook-' + i)[0] as any).style.display =
                status ? 'block' : 'none';
        }
    }
</script>

<style scoped lang="scss">
    @import '~scss_vars';

    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            height: 60px;
            line-height: 60px;
            background: $color-primary;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
            border-bottom: 2px solid #000000;
            color: #fff;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    color: #fff;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 20px;
                        margin: 15px 0px 15px 10px;
                        float: right;
                    }
                }
            }
            .logo {
                //width:230px;
                height: 60px;
                font-size: 22px;
                padding-left: 20px;
                padding-right: 20px;
                border-color: rgba(238, 241, 146, 0.3);
                border-right-width: 1px;
                border-right-style: solid;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color: #fff;
                }
            }
            .logo-width {
                width: 230px;
            }
            .logo-collapse-width {
                width: 60px
            }
            .tools {
                padding: 0px 23px;
                width: 14px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
        }
        .main {
            display: flex;
            // background: #324057;
            background: $color-primary;
            position: absolute;
            top: 0;
            bottom: 0;
            overflow: hidden;
            aside {
                flex: 0 0 230px;
                width: 230px;
                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                .el-menu {
                    height: 100%;
                }
                .collapsed {
                    width: 60px;
                    .item {
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0;
                        left: 60px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }

                }
            }
            .menu-collapsed {
                flex: 0 0 60px;
                width: 60px;
            }
            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }
            .content-container {
                // background: #f1f2f7;
                flex: 1;
                // position: absolute;
                // right: 0px;
                // top: 0px;
                // bottom: 0px;
                // left: 230px;
                overflow-y: scroll;
                padding: 0 40px 35px;
                .breadcrumb-container {
                    height: 52px;
                    line-height: 52px;
                    .title {
                        /*width: 200px;*/
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        line-height: 52px;
                    }
                }
                .content-wrapper {
                    background-color: $color-primary;
                    box-sizing: border-box;
                    color: #ffffff;
                }
            }
        }
    }
</style>
