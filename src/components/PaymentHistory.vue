<template>
    <div>
        <h3 class="title">Payment history</h3>
        <guava-data-table :columns="fields" :rows="payments"></guava-data-table>
    </div>
</template>

<script>
import GuavaDataTable from "./data-table/guava-data-table.vue";
import { FETCH_PAYMENTS } from "../store/actions/action-types";

const paymentHistoryColumns = [
    {
        header: 'Id',
        field: 'id'
    },
    {
        header: 'Name',
        field: 'name'
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
        GuavaDataTable
    },

    mounted() {
        this.$store.dispatch(FETCH_PAYMENTS);
    },

    computed: {
        payments() {
            return this.$store.state.payments;
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
