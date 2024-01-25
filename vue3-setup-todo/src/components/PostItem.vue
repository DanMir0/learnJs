<script setup>
const props = defineProps({
    post: Object,
    require: true
})
</script>

<template>
    <div class="post">
        <h3>{{ post.id }}</h3>
        <h2 class="post__title">Title: {{ post.title }}</h2>
        <p>Body: {{ post.body }}</p>
        <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    border: 1px solid #7FFFD4;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 15px;
}

.post__title {
    margin-bottom: 15px;
}
</style>