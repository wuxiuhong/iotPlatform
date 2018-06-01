<template>
    <section>
        <div v-for="item in dashboard.components">
            {{item.title}}
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { getDashboard } from '../../api/dashboard';

    @Component
    export default class Dashboard extends Vue {
        dashboard: any = {
            components: []
        };

        mounted() {
            // 初始化报表数据
            getDashboard({}).then((ret: any) => {
                this.dashboard = ret.data;
                console.log(this.dashboard.components);
            });
        }
    }
</script>

<style scoped>

</style>
