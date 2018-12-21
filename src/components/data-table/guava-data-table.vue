<template>
    <table class="table is-striped is-hoverable">

        <tbody>
            <tr>
                <template v-for="column in columns">
                    <th :key="column.field">{{column.header}}</th>
                </template>
            </tr>

            <tr v-for="item in data" :key="item.id">
                <td v-for="column in columns" :key="column.field">
                    {{item[column.field]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'guava-data-table',

    props: {
        columns: {
            required: true,
            type: Array
        },

        data: {
            required: true,
            type: Array
        }
    }

}
</script>

<style>

</style>
