import axios from 'axios';
import Mock from '../mock';

const base = '';

// 获取报表组件数据
export const getTemplate = (params: any = null) => {
    Mock.bootstrap();
    return axios.get(`${base}/getTemplate`, {params: params});
};
