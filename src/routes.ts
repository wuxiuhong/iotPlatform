import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Home from './views/Home.vue';
import Dashborad from './views/dashboards/dashboard.vue';
import Template from './views/template/index.vue';

const routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-dashboard',
        leaf: true, // 只有一个节点
        children: [
            {path: '/dashboards', component: Dashborad, name: '报表'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-dashboard',
        leaf: true, // 只有一个节点
        children: [
            {path: '/template', component: Template, name: '模板'},
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];
export default routes;
