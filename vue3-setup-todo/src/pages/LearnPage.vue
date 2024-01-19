<script setup>
import axios from 'axios'
import { onMounted, ref, watch, watchEffect } from 'vue'
import PostsList from "@/components/PostsList"

const posts = ref([])
const title = ref('')
const body = ref('')
const searchQuery = ref('')

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        posts.value = response.data
    } catch (e) {
        console.log('response', e);
    }
}

const searchedPosts = () => {
 return posts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
}

function createPost() {
    if (title.value === '') {
        return alert('Title is empty')
    }
    else {
        posts.value.push({ id: Date.now(), title: title.value, body: body.value })
        alert('Post add')
    }
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
        <input type="text" placeholder="search" v-model="searchQuery">
      <posts-list :posts="searchedPosts()"></posts-list>
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