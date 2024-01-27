<script setup>

import FormItem from "@/components/FormItem.vue"
import PostsList from "@/components/PostsList.vue"
import { ref } from "vue"

const showModal = ref(false)
const tasks = ref([])

const createTask = (task) => {
    tasks.value.push(task)
    showModal.value = false
}
</script>

<template>
    <div class="container">
        <div class="menu">
            <my-button @click="showModal = true">Create task</my-button>
        </div>
        <posts-list :posts="tasks"></posts-list>
    </div>
        <form-item :show="showModal" @create="createTask" @close="showModal = false"></form-item>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
}
</style>