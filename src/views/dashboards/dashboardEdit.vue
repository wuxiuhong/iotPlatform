<template>
    <transition name="el-zoom-in-bottom">
        <div class="edit-wrapper" v-show="showModal">
            <i class="icon el-icon-close" @click="showModal = false"></i>
            <h3>编辑{{detailsInfo.title}}</h3>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component({})
    export default class DashboardEdit extends Vue {
        isBar: boolean = false;
        @Prop() showModal: boolean;
        @Prop() detailsInfo: any;

        mounted() {
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
        width: 300px;
        height: 100%;
        border-left: 1px solid #e6e6e6;
        h3 {
            padding: 10px;
        }
        .icon {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
        }
    }

</style>
