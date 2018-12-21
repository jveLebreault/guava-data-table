import { FETCH_PAYMENTS } from './action-types';
import { SET_PAYMENTS } from '../mutations/mutations-types';

export const actions = {

    [FETCH_PAYMENTS](context) {
        fetch('payments.json').then(response => {
            return response.json();
        }).then(json => {
            context.commit(SET_PAYMENTS, json);
        });
    }
}