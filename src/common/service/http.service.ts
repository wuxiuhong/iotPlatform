import axios from 'axios';

/**
 * http类
 * @author wendy
 */
class HttpService {
    constructor() {
        // axios 基本配置，请求超时参数，地址前缀
        axios.defaults.timeout = 5000;
        axios.defaults.baseURL = 'http://172.16.33.145:9103/api/visual/v1/';
        // axios.defaults.baseURL = 'http://10.60.136.145:9103/api/visual/v1/';
        axios.defaults.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
        // axios请求功能配置
        axios.interceptors.request.use((config: any) => {
            // loading
            return config;
        }, (error: any) => {
            return Promise.reject(error);
        });
        // axios响应功能配置
        axios.interceptors.response.use((response: any) => {
            return response;
        }, (error: any) => {
            return Promise.resolve(error.response);
        });
    }

    /**
     * 检测请求状态值
     * @param response
     * @return {any}
     */
    checkStatus(response: any) {
        // loading 如果http状态码正常，则直接返回数据
        if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
            return response.data;
        }
        // 异常状态下，把错误信息返回去
        return {status: -404, msg: '网络异常'};
    }

    /**
     * 请求成功，数据处理
     * @param res 返回数据
     * @return {any}
     */
    successHandler(res: any) {
        if (res.status === -404) return alert(res.msg);
        if (res.data && (!res.result)) return alert(res.data.error_msg);
        return {
            code: 0,
            data: res.data
        };
    }

    /**
     * 请求失败，数据处理
     * @param error 返回错误信息
     * @return {any}
     */
    errHandler(error: any) {
        console.log("错误处理");
    }

    /**
     * 过滤请求参数参数
     * @param params 请求数据
     * @return {any} 返回请求数据
     */
    filterParam(params: { [key: string]: any }) {
        if (params === null || params === undefined) return null;
        return Object.keys(params).filter((item: any) => {
            return params[item] || [0, '', false].includes(params[item]);
        }).reduce((prev: any, curr: any) => Object.assign(prev, {
            [curr]: params[curr]
        }), {});
    }

    /**
     * http请求获取方式， GET
     * @param {string} method 请求方式 POST/PUT/GET/DELETE
     * @param {string} url
     * @param params
     * @return {Promise<void>}
     */
    request(method: string, url: string, data?: any) {
        data = this.filterParam(data);
        let options = {};
        // 判断method是get/delete还是post/put，请求的options不同
        if (method === 'get' || method === 'delete') {
            Object.values(data).forEach((item: any) => url += '/' + item);
            options = {method, url, data: {}};
        } else {
            options = {method, url, data};
        }
        return axios(options).then((response: any) => {
            return this.checkStatus(response);
        }).then((res: any) => {
            return this.successHandler(res);
        }).catch((error: any) => {
            return this.errHandler(error);
        });
    }

}

export const BaseHttp = new HttpService();
