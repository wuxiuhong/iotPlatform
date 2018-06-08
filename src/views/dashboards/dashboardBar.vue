<template>
    <section class="dashboard-bar">
        <transition name="el-fade-in">
            <div class="bar-nav" v-show="isBar">
                <el-button type="info" icon="el-icon-setting" circle v-show="isEdit"></el-button>
                <el-button type="info" icon="el-icon-news" circle></el-button>
                <el-button type="info" icon="el-icon-download" circle></el-button>
                <el-button type="info" icon="el-icon-close" circle @click="isBar=false"></el-button>
            </div>
        </transition>
        <transition name="el-fade-in">
            <div class="bar-more" v-show="!isBar">
                <el-button type="info" icon="el-icon-more" circle @click="isBar=true"></el-button>
            </div>
        </transition>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component({})
    export default class DashboardBar extends Vue {
        isBar: boolean = false;
        @Prop() isEdit: boolean;
        mounted() {}

    }
</script>

<style lang="scss" scoped>
    .dashboard-bar {
        position: relative;
        top: 0;
        z-index: 1000;
        .bar-nav {
            height: 55px;
            line-height: 55px;
            text-align: right;
        }
        .bar-more {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>
