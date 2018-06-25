import axios from 'axios';

const base = '';

// 获取报表数据
export const getDashboard = (path: string, params: any = null) => {
    return axios.get(`${base}/dashboard/${path}`, {params: params});
};
