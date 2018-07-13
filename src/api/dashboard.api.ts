import { BaseHttp as $http } from '../common/service/http.service';

const prefix = '/dashboard';
export const DashboardsApi = {
    // 获取报表数据
    getDashboard: (params?: any) => $http.request('get', 'dashboard', params),
    addDashboard: (params?: any) => $http.request('post', 'dashboard', params),
    updateDashboard: (params?: any) => $http.request('put', 'dashboard', params),
    deleteDashboard: (params?: any) => $http.request('delete', 'dashboard', params),
    // 报表配置数据
    getDashboardexpansion: (params?: any) => $http.request('get', 'dashboardexpansion', params),
    addDashboardexpansion: (params?: any) => $http.request('post', 'dashboardexpansion', params),
    updateDashboardexpansion: (params?: any) => $http.request('put', 'dashboardexpansion', params),
    deleteDashboardexpansion: (params?: any) => $http.request('delete', 'dashboardexpansion', params),
    // 报表组件数据
    getWidget: (params?: any) => $http.request('get', 'widget', params),
    addWidget: (params?: any) => $http.request('post', 'widget', params),
    updateWidget: (params?: any) => $http.request('put', 'widget', params),
    deleteWidget: (params?: any) => $http.request('delete', 'widget', params)

};
