import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex as any);

interface State {
    isShowLoading: Boolean;
    user: any;
}

const state: State = {
    isShowLoading: false,
    user: {}
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});
