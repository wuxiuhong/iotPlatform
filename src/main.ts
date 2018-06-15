import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import store from './vuex/store';
import Vuex from 'vuex';
import routes from './routes';
import Mock from './mock';
import './styles/index.scss';
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex as any);

const router = new VueRouter({routes} as object);

router.beforeEach((to: any, from: any, next: any) => {
    if (to.path === '/login') sessionStorage.removeItem('user');
    const user = JSON.parse(sessionStorage.getItem('user'));
    (!user && to.path !== '/login') ? next({path: '/login'}) : next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

