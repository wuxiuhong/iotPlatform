import axios from 'axios';
import Mock from '../mock';

const base = 'canvas';
export const getCanvas = (params: any = null) => {
    Mock.bootstrap();
    return axios.get(`${base}/demo`, params);
};
