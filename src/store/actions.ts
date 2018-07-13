import { ActionTree } from 'vuex';
import TYPES from './types';

const actions: ActionTree<any, any> = {
    // 初始化
    async initInfo({dispatch}) {
        dispatch('getUser');
        setTimeout(() => dispatch('getUserInfo'), 2000);
    },
};

export default actions;
