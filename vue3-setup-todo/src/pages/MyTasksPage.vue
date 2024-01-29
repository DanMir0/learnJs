<script setup>

import FormItem from "@/components/FormItem.vue"
import PostsList from "@/components/PostsList.vue"
import {onMounted, ref} from "vue"
import MyButton from "@/components/UI/MyButton.vue";

const showModal = ref(false)
const tasks = ref([])
const createTask = (task) => {
    tasks.value.push(task)
    showModal.value = false
    saveTasksToLocalStorage()
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
  console.log('del')
}

const addToDoneTasks = (task) => {
  if (task.done) {
    task.done = false;
  } else {
    task.done = true;
  }
}
const saveTasksToLocalStorage = () => {
    localStorage.setItem('allTasks', JSON.stringify(tasks.value))
}

const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('allTasks');
    if (storedTasks) {
        try {
            tasks.value = JSON.parse(storedTasks)
        } catch (e) {
            console.log('Ошибка при разьоре JSON', e);
        }
    }
}

onMounted(() =>{
    loadTasksFromLocalStorage()
})

window.addEventListener('beforeunload', saveTasksToLocalStorage)
</script>

<template>
    <div class="container">
        <div class="menu">
          <my-button @click="showModal = true">Create task</my-button>
        </div>
      <div>
        <posts-list :posts="tasks" @addToDone="addToDoneTasks" @remove="removeTask"></posts-list>
      </div>


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