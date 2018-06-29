<template>
    <el-col :span="24" class="breadcrumb-container">
        <strong class="title">{{$route.name}}</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item></el-breadcrumb-item>
            <!--<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>-->
            <el-breadcrumb-item v-for="(item, index) in aliases" :key="index">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Breadcrumb extends Vue {
        @Prop() aliases: any;
    }
</script>
<style lang="scss" scoped>

    .breadcrumb-container {
        height: 52px;
        line-height: 52px;
        padding: 0 30px;
        display: contents;

        .title {
            /*width: 200px;*/
            float: left;
            color: #475669;
        }
        .breadcrumb-inner {
            line-height: 52px;
        }
    }
</style>