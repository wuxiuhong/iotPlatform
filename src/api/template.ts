import axios from 'axios';

const base = '/api';

// 获取报表数据
export const getTemplate = params => {
    return axios.get(`${base}/templates/3f825d20-fe01-11e7-83b5-9b9f49d154f1`, {params: params});
};
