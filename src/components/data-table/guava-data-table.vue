<template>
    <table class="table is-striped is-hoverable">
        <thead>
            <tr>
                <template v-for="column in columns">
                    <column-header :column="column" :key="column.field" @sort="sort(column)"/>
                </template>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in rows" :key="key">
                <template v-for="column in columns">
                    <data-cell :item="item" :column="column" :key="column.field" @save-edit="saveEdit(item, key, $event)"/>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ColumnHeader from "./header-component/column-header.vue";
import DataCell from "./data-cell-component/data-cell.vue";

export default {
    name: 'guava-data-table',

    components: {
        ColumnHeader,
        DataCell
    },

    props: {
        columns: {
            required: true,
            type: Array
        },

        rows: {
            required: true
        }
    },

    methods: {
        sort(column) {

            if(column.header != this.currentlySortedColumn.header) {
                this.currentlySortedColumn.sortOrder = '';
                this.currentlySortedColumn.isSorted = false;
                this.currentlySortedColumn = column;
            }
            
            this.$set(column, 'isSorted', true);
            if(column.sortOrder) {
                column.sortOrder = column.sortOrder == 'asc' ?  'desc' :  'asc' ;
            } else {
                this.$set(column, 'sortOrder', 'desc');
            }

            const {field, sortOrder} = column;
            //TODO: Fix sorting in case there is an object instead an array
            this.rows.sort((itemA, itemB) => {
                if (itemA[field] < itemB[field]) {
                    return sortOrder == 'desc' ? -1 : 1;
                }

                if (itemA[field] > itemB[field]) {
                    return sortOrder == 'desc' ? 1 : -1;
                }

                return 0;
            });

        },

        saveEdit(item, key, event) {            
            Object.assign(item, event);
            this.$emit('edited-item', {
                item,
                key
            });
        }
    },

    data() {
        return {
            currentlySortedColumn: {}
        }
    }

}
</script>

<style scoped>

</style>
