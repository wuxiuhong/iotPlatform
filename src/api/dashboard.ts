import axios from 'axios';

const base = '';

// 获取报表数据
export const getDashboard = params => {
    return axios.get(`${base}/dashboard`, {params: params});
};
