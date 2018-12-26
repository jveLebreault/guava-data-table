<template>
    <td class="">
        <div class="columns">
            <div class="column">
                <p v-if="!isEditing">
                    {{item[column.field]}}
                </p>
                <div v-if="column.isEditable && isEditing">
                    <textarea class="textarea" v-model="itemData[column.field]" id="" cols="30" rows="4"></textarea>
                </div>
            </div>
            <div class="column is-one-fifth" v-if="column.isEditable" >
                <div class="field">
                    <div class="control">
                        <button class="button is-primary is-fullwidth" @click="editOrSave">
                            <span>
                                {{isEditing ? 'Save' : 'Edit'}}
                            </span>
                            <span class="icon">
                                <i class="typcn" :class="saveOrEditIcon"></i>
                            </span>
                        </button>
                    </div>

                    <div class="control">
                        <button class="button is-danger is-fullwidth" v-if="isEditing" @click="discardEdit">
                            <span>Discard</span>
                            <span class="icon">
                                <i class="typcn typcn-times"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
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

    computed: {
        saveOrEditIcon() {
            return {
                'typcn-edit': !this.isEditing,
                'typcn-input-checked':this.isEditing
            }
        }
    },

    methods: {
        toggleEdit(){
            this.isEditing = !this.isEditing;
        },

        editOrSave() {
            if(this.isEditing) {
                this.$emit('save-edit', this.itemData);
            } 
            
            this.toggleEdit();
        },

        discardEdit() {
            this.toggleEdit();
            this.itemData[this.column.field] = this.item[this.column.field];
        }
    },

    data() {
        return {
            isEditing: false,
            itemData: Object.assign({}, this.item)
        }
    }
}
</script>

<style>
    .button.is-danger.is-fullwidth  {
        margin-top: 4.5%;
    }
</style>
