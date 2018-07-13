import TYPES from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {

    [TYPES.USER_INFO](state, modules): void {
        state.user = modules;
    },
};
export default mutations;
