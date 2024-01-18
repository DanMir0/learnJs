<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref([])
const title = ref('')
const body = ref('')

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        posts.value = response.data
    } catch (e) {
        console.log('response', e);
    }
}

function createPost() {
    if (title.value === '') { 
        return alert('Title is empty')
    }
    else {
        posts.value.push({id: Date.now, title: title.value, body: body.value})
    alert('Post add')}
}

onMounted(getPosts)
</script>

<template>
    <div class="container">
        <div style="display: flex; justify-content: center">
            <form class="form">
        <input type="text" v-model.trim="title" placeholder="title">
        <input type="text" v-model.trim="body" placeholder="body">
        <button @click.prevent="createPost">Add post</button>
    </form>
        </div>
    <div class="post" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
    </div>
    
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
}
.form {
    width: 50%;
    margin: 20px 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F8FF;
}
input {
    width: 80%;
    padding: 15px;
    border-radius: 5%;
}
</style>