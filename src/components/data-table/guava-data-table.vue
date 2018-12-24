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
            <tr v-for="item in rows" :key="item.id">
                <template v-for="column in columns">
                    <data-cell :item="item" :column="column" :key="column.field"/>
                </template>
                <!-- <td v-for="column in columns" :key="column.field">
                    <div class="columns">
                        <p class="column">
                            {{item[column.field]}}
                        </p>
                        <p class="column is-one-third" v-if="column.isEditable">
                            EDIT BUTTON
                        </p>
                         <button class="button column is-one-third"  @click="edit(item, column.field)">
                            <span>Edit</span>
                            <span class="icon">
                                <i class="typcn typcn-edit"></i>
                            </span>
                        </button>
                    </div>
                </td> -->
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
            required: true,
            type: Array
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

        edit(item, field) {
            console.log(item, field);
        }
    },

    data() {
        // console.log('COLUMNS', this.columns, 'ROWS' ,this.rows);
        return {
            currentlySortedColumn: {}
        }
    }

}
</script>

<style scoped>

</style>
