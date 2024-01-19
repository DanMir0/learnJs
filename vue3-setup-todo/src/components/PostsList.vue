<script setup>
import PostItem from '@/components/PostItem.vue';

const props = defineProps({
    posts: {
    type: Array,
    require: true,
    }
})
</script>

<template>
    <div v-if="posts.length > 0">
        <post-item :post="post" v-for="post in posts" :key="post.id"></post-item>
    </div>
    <div v-else>
        <h3>Список пуст</h3>
    </div>
</template>

<style scoped>

</style>