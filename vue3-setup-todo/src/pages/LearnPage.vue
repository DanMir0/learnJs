<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref([])

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        posts.value = response.data
    } catch (e) {
        console.log('response', e);
    }
}

onMounted(getPosts)
</script>

<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>