<script setup>
import FormItem from "@/components/FormItem.vue"
import PostsList from "@/components/PostsList.vue"
import {computed, onMounted, ref, watch} from "vue"

const showModal = ref(false)
const tasks = ref([])
const selectedState = ref({
    all: true,
    done: false,
    undone: false
})
const searchQuery = ref('')
const createTask = (task) => {
    tasks.value.push(task)
    showModal.value = false
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

const searchedTask = () => {
    let sortedTask = getSortedPosts()
    let searchedAndSort = sortedTask.filter(task => task['title'].toLowerCase().includes(searchQuery.value.toLowerCase()))
    return searchedAndSort
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
    let newTasks = searchedTask()
    if (selectedState.value.all) {
        return  newTasks
    } else if (selectedState.value.done) {
        return [...newTasks].filter(task => task.done === true)
    } else if (selectedState.value.undone) {
        return [...newTasks].filter(task => task.done !== true)
    }
    return newTasks
})

onMounted(() =>{
    loadTasksFromLocalStorage()
})

const getSortedPosts = (selectedSort) => {
    const sortTasks = tasks.value.sort((prevTask, nextTask) => prevTask[selectedSort]?.localeCompare(nextTask[selectedSort]))
    return sortTasks
}
window.addEventListener('beforeunload', saveTasksToLocalStorage)
</script>

<template>
    <div>
        <div class="menu">
          <my-button @click="showModal = true">Create task</my-button>
            <div class="block__search">
                <my-input class="search" v-model="searchQuery" placeholder="Search..."></my-input>
            </div>
            <div class="menu__show-tasks">
                <my-button @click="showDoneTasks">Done tasks</my-button>
                <my-button @click="showAllTasks">All tasks</my-button>
                <my-button @click="showUnDoneTasks">Undone tasks</my-button>
            </div>
          <my-select @change="getSortedPosts"></my-select>
        </div>
        <posts-list :posts="showTasks" @addToDone="addToDoneTasks" @remove="removeTask"></posts-list>
    </div>
        <form-item :show="showModal" @create="createTask" @close="showModal = false"></form-item>
</template>

<style scoped>
.menu {
    padding: 15px;
    border: 1px solid turquoise;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    background-color: azure;
}
.menu__show-tasks {
    display: flex;
    gap: 10px;
}
.block__search {
    max-width: 350px;
    width: 100%;
}
.search {
    padding: 15px;
    width: 100%;
}
</style>