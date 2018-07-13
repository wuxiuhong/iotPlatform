import axios from 'axios';
import Mock from '../mock';

const base = 'dashboard';

// 获取报表数据
export const getDashboard = (path: string, params: any = null) => {
    Mock.bootstrap();
    return axios.get(`${base}/${path}`, {params: params});
};
