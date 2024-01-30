<script setup>

import FormItem from "@/components/FormItem.vue"
import PostsList from "@/components/PostsList.vue"
import {computed, onMounted, ref, watch} from "vue"
import MyButton from "@/components/UI/MyButton.vue";

const showModal = ref(false)
const tasks = ref([])
const selectedState = ref({
    all: true,
    done: false,
    undone: false
})
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

const showDoneTasks = () => {
    selectedState.value.all = false;
    selectedState.value.done = true;
    selectedState.value.undone = false;
}
const showAllTasks = () => {
    selectedState.value.all = true;
    selectedState.value.done = false;
    selectedState.value.undone = false;
}

const showUnDoneTasks = () => {
    selectedState.value.all = false;
    selectedState.value.done = false;
    selectedState.value.undone = true;
    console.log(selectedState)
}

const showTasks = computed(() => {
    if (selectedState.value.all) {
        return  tasks.value
    } else if (selectedState.value.done) {
        return [...tasks.value].filter(task => task.done === true)
    } else if (selectedState.value.undone) {
        return [...tasks.value].filter(task => task.done !== true)
    }
    return tasks.value
})
onMounted(() =>{
    loadTasksFromLocalStorage()
})


window.addEventListener('beforeunload', saveTasksToLocalStorage)
</script>

<template>
    <div class="container">
        <div class="menu">
          <my-button @click="showModal = true">Create task</my-button>
            <div class="menu__show-tasks">
                <my-button @click="showDoneTasks">Done tasks</my-button>
                <my-button @click="showAllTasks">All tasks</my-button>
                <my-button @click="showUnDoneTasks">Undone tasks</my-button>
            </div>
        </div>
        <posts-list :posts="showTasks" @addToDone="addToDoneTasks" @remove="removeTask"></posts-list>
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
.menu {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.menu__show-tasks {
    display: flex;
    gap: 10px;
}

</style>