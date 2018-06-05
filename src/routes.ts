import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Home from './views/Home.vue';
import Main from './views/Main.vue';
import Table from './views/nav1/Table.vue';
import Form from './views/nav1/Form.vue';
import user from './views/nav1/user.vue';
import Page4 from './views/nav2/Page4.vue';
import Page5 from './views/nav2/Page5.vue';
import Page6 from './views/nav3/Page6.vue';
import echarts from './views/charts/echarts.vue';
import Dashborad from './views/dashboards/dashboard.vue';

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
            {path: '/dashboards', component: Dashborad, name: '报表'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];
export default routes;
