import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
    load(state): boolean {
        const { user } = state;
        return !!(user);
    }
};

export default getters;
