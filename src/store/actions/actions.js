import { FETCH_PAYMENTS, UPDATE_PAYMENT } from './action-types';
import { SET_PAYMENTS } from '../mutations/mutations-types';
import firebase from 'firebase/app';
import firebaseDatabase from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBHQk0SEap8m54Z_GUAuxCEQRrHkQ3mBCs",
    authDomain: "guava-data-table-data.firebaseapp.com",
    databaseURL: "https://guava-data-table-data.firebaseio.com",
    projectId: "guava-data-table-data",
    storageBucket: "guava-data-table-data.appspot.com",
    messagingSenderId: "185755581150"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const actions = {

    [FETCH_PAYMENTS](context) {
        database.ref('/payments').once('value').then(snapshot => {
            context.commit(SET_PAYMENTS, snapshot.val());
        });
    },

    [UPDATE_PAYMENT](context, payload){
        console.log(payload);
    }
}