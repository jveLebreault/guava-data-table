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
            <template v-if="isRowArray">
                <tr v-for="(item, key) in rows" :key="key">
                    <template v-for="column in columns">
                        <data-cell :item="item" :column="column" :key="column.field" @save-edit="saveEdit($event, item, key)"/>
                    </template>
                </tr>
            </template>
            <template v-else>
                <tr v-for="key in sortedKeys" :key="key">
                    <template v-for="column in columns">
                        <data-cell :item="rows[key]" :column="column" :key="column.field" @save-edit="saveEdit($event, rows[key], key)"/>
                    </template>
                </tr>
            </template>
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

    computed: {
        isRowArray() {
            this.sortedKeys = Object.keys(this.rows);
            return Array.isArray(this.rows);
        },
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

            if(Array.isArray(this.rows)) {
                this.sortArray(field, sortOrder);
            } else {
                this.sortObjectKeys(field, sortOrder);
            }
        },

        sortArray(field, sortOrder) {
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

        sortObjectKeys(field, sortOrder) {
            this.sortedKeys.sort((itemA, itemB) => {
                if (this.rows[itemA][field] < this.rows[itemB][field]) {
                    return sortOrder == 'desc' ? -1 : 1;
                }

                if (this.rows[itemA][field] > this.rows[itemB][field]) {
                    return sortOrder == 'desc' ? 1 : -1;
                }

                return 0;
            });

        },

        saveEdit(event, item, key) {
            Object.assign(item, event);
            this.$emit('edited-item', {
                item,
                key
            });
        },
    },

    data() {
        return {
            currentlySortedColumn: {},
            sortedKeys: Object.keys(this.rows)
        }
    }

}
</script>

<style scoped>

</style>
