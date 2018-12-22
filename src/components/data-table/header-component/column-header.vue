<template>
    <th>
        <a href="#" class="table-header" @click.prevent="emitSort">
            <span>{{column.header}}</span>
                        
            <span class="icon" :class="getSortedIconColor" v-if="column.isSortable" >
                <i class="typcn" :class="getSortedIconClass"></i>
            </span>
        </a>
    </th>
</template>

<script>
export default {
    name: 'column-header',
    props: {
        column: {
            required: true,
            type: Object
        }
    },

    computed: {
        getSortedIconClass() {
            console.log(this.column);
            return {
                'typcn-arrow-unsorted': !this.column.sortOrder,
                'typcn-arrow-sorted-down': this.column.sortOrder == 'desc',
                'typcn-arrow-sorted-up': this.column.sortOrder == 'asc',
            }
        },

        getSortedIconColor() {
            return {
                'has-text-grey-light': !this.column.isSorted,
                'has-text-black': this.column.isSorted,
            }
        }
    },

    methods: {
        emitSort() {
            if(this.column.isSortable) {
                this.$emit('sort');
            }
        },
    }

}
</script>

<style scoped>
    .table-header {
        color: black;
    }
</style>
