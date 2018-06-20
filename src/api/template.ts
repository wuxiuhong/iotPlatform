import axios from 'axios';

const base = '/api';

// 获取报表数据
export const getTemplate = params => {
    return axios.get(`${base}/templates/2`, {params: params});
};
