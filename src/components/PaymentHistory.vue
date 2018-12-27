<template>
    <div>
        <h3 class="title">Payment history </h3>
        <spinner v-if="requestPending"/>
        <guava-data-table :columns="fields" :rows="payments" @edited-item="editedItem"></guava-data-table>
    </div>
</template>

<script>
import GuavaDataTable from "./data-table/guava-data-table.vue";
import Spinner from "./spinner.vue";
import { FETCH_PAYMENTS, UPDATE_PAYMENT } from "../store/actions/action-types";
import { TOGGLE_REQUEST_PENDING, SET_REQUEST_PENDING } from "../store/mutations/mutations-types";

const paymentHistoryColumns = [
    {
        header: 'Id',
        field: 'id'
    },
    {
        header: 'Name',
        field: 'name',
        isSortable: true
    },
    {
        header: 'Description',
        field: 'description',
        isEditable: true
    },
    {
        header: 'Date',
        field: 'date',
        isSortable: true
    },
    {
        header: 'Amount',
        field: 'amount',
        isSortable: true
    }
];

export default {
    name: 'PaymentHistory',
    components: {
        GuavaDataTable,
        Spinner
    },

    beforeMount() {
        this.$store.commit(SET_REQUEST_PENDING, true);
        this.$store.dispatch(FETCH_PAYMENTS).then(() => {
            this.$store.commit(TOGGLE_REQUEST_PENDING);
        });
    },

    computed: {
        payments() {
            return this.$store.state.payments;
        },

        requestPending() {
            return this.$store.state.isRequestPending;
        }
    },

    methods: {
        editedItem(payload){
            this.$store.dispatch(UPDATE_PAYMENT, payload);
        }
    },

    data() {
        return {
            fields: paymentHistoryColumns,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
