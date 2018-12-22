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
                <td v-for="column in columns" :key="column.field">
                    {{item[column.field]}}
                    <button class="button" v-if="column.isEditable" @click="edit(item, column.field)">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ColumnHeader from "./header-component/column-header.vue";

export default {
    name: 'guava-data-table',

    components: {
        ColumnHeader
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
            column.isSorted = true;
            if(column.sortOrder) {
                column.sortOrder = column.sortOrder == 'asc' ?  'desc' :  'asc' ;
            } else {
                column.sortOrder = 'desc';
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
            dataColumns: this.columns,
            dataRows: this.rows
        }
    }

}
</script>

<style scoped>

</style>
