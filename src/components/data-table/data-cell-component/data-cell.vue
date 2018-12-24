<template>
    <td class="">
        <div class="columns">
            <p class="column">
                {{item[column.field]}}
            </p>
            <p class="column is-one-quarter" v-if="column.isEditable">
                <button class="button">
                    <span>
                        Edit
                    </span>
                    <span class="icon">
                        <i class="typcn typcn-edit"></i>
                    </span>
                </button>
            </p>
        </div>
    </td>
</template>

<script>
export default {
    name: 'data-cell',
    props: {
        item: {
            type: Object,
            required: true
        },
        column: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isEditing: false
        }
    }
}
</script>

<style>

</style>
