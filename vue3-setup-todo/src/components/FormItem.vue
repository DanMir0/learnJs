<script setup>
import {ref} from "vue"
const props = defineProps({
  show: Boolean
})

const title = ref('')
const body = ref('')
const emit = defineEmits(['create', 'close'])
function createPost() {
    emit('create', {
        id: Date.now(),
        title: title.value,
        body: body.value
    })
    title.value = ''
    body.value = ''
}
</script>

<template>
    <div v-if="show" class="modal-mask">
        <form class="form" v-if="show" @submit.prevent>
        <h2 style="margin-bottom: 20px">Create post</h2>
        <my-input 
        v-model="title"
        placeholder="title"
        style="margin-bottom: 15px; max-width: 350px; width: 100%"
        />
        <my-input 
        v-model="body"
        placeholder="body"
        style="max-width: 350px; width: 100%"
        />
        <div class="group__btn">
            <my-button @click="createPost">Create</my-button>
            <my-button 
            @click="$emit('close')"
            style="margin-left: 20px"
            >
            CLose
            </my-button>
        </div>
        
        <!-- <my-input  v-model.trim="title" placeholder="title" />
        <my-input v-model.trim="body" placeholder="body" />
        <my-button @click.prevent="createPost">Add post</my-button>
       
         -->
    </form>
    </div>
</template>

<style>
.form {
    max-width: 500px;
    width: 100%;
    display: flex;
    background-color: #DCDCDC;
    flex-direction: column;
    padding: 50px;
    align-items: center;
    border-radius: 20px;
}

.modal-mask {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.group__btn {
    display: flex;
    margin-top: 20px;
}
</style>