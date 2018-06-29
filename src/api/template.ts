import axios from 'axios';

const base = '';

// 获取报表组件数据
export const getTemplate = (params: any = null) => {
    return axios.get(`${base}/getTemplate`, {params: params});
};
