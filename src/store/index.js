import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations/mutations';
import { actions } from './actions/actions';

Vue.use(Vuex)

const state = {
    isRequestPending: true,
    payments: []
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})
