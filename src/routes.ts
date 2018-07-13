import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Home from './views/Home.vue';
import Dashboard from './views/dashboards/Dashboard.vue';
import Widget from './views/widget/Widget.vue';
import WidgetForm from './views/widget/WidgetForm.vue';
import DashboardForm from './views/dashboards/DashboardForm.vue';
import DashboardDetail from './views/dashboards/DashboardDetail.vue';
import Canvas from './views/canvas/Canvas.vue';
import CanvasSvg from './views/canvas/CanvasSvg.vue';
import Newdashboards from './views/newdashboards/dashboard.vue';

const routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '报表模块',
        iconCls: 'fa fa-dashboard',
        leaf: true, // 只有一个节点
        children: [
            {path: '/dashboards', component: Dashboard, name: '报表'},
            {path: '/dashboardForm', component: DashboardForm, name: '报表表单'},
            {path: '/dashboards/detail/:id/:version', component: DashboardDetail, name: '报表信息详情'},
            {path: '/dashboards/:id', component: Dashboard, name: '报表详情'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '组件',
        iconCls: 'fa fa-dashboard',
        // leaf: true, // 只有一个节点
        children: [
            {path: '/widgetForm', component: WidgetForm, name: '组件表单'},
            {path: '/widget/:id/:version', component: Widget, name: '模板'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-dashboard',
        leaf: true, // 只有一个节点
        children: [
            {path: '/newdashboards/:id', component: Newdashboards, name: '新报表详情'}
            ]
    },
    {
        path: '/',
        component: Home,
        name: 'canvas',
        iconCls: 'fa fa-dashboard',
        leaf: true, // 只有一个节点
        children: [
            {path: '/canvas/:key', component: Canvas, name: 'canvas绘图'},
            {path: '/canvasSvg', component: CanvasSvg, name: 'canvas绘图svg'}
        ]
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];
export default routes;
