import {
    SET_PAYMENTS, 
    TOGGLE_REQUEST_PENDING, 
    SET_REQUEST_PENDING} from './mutations-types';

export const mutations = {
    [SET_PAYMENTS](state, payments) {
        state.payments = payments;
    },

    [TOGGLE_REQUEST_PENDING](state) {
        state.isRequestPending = !state.isRequestPending;
    },

    [SET_REQUEST_PENDING](state, requestStatus) {
        state.isRequestPending = requestStatus;
    }
}