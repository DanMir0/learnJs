<script setup>
import {onMounted, ref, watch} from "vue"

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const selectedMonthIndex = ref(0)
const monthTasks = ref(months.map(() => []))
const newTask = ref(Array(months.length).fill(""));
const addTask = (index) => {
    selectedMonthIndex.value = index;
    if (newTask.value[index].trim() !== "") {
        monthTasks.value[selectedMonthIndex.value].push({
            description: newTask.value[index].trim(),
            done: false,
        });
        newTask.value[index] = "";
    }
};

const removeTask = (taskIndex, monthIndex) => {
    monthTasks.value[monthIndex].splice(taskIndex, 1)
}

const saveTasksToLocalStorage = () => {
    localStorage.setItem('monthlyTasks', JSON.stringify(monthTasks.value))
}

const loadToLocalStorage = () => {
    const storedTasks = localStorage.getItem('monthlyTasks')
    if (storedTasks) {
        monthTasks.value = JSON.parse(storedTasks)
    }
}
onMounted(() => {
    loadToLocalStorage()
})
watch(selectedMonthIndex, (newValue) => {
    console.log(`Selected Month: ${months[newValue]}`)
})

window.addEventListener('beforeunload', saveTasksToLocalStorage)
</script>

<template>
    <div>
        <div>
            <ul class="lists">
                <li class="list" v-for="(month, index) in months" :key="index">
                    <div class="month">
                        <div class="month__name">
                            <h3>{{ month }}</h3>
                        </div>
                        <div class="mount__info">
                            <fieldset>
                                <div v-for="(task, taskIndex) in monthTasks[index]" :key="taskIndex" class="month__tasks">
                                  <div class="month__group-task">
                                      <input type="checkbox" v-model="task.done"/>
                                      <label>{{ task.description }}</label>
                                  </div>
                                    <button class="btn__delete" @click="removeTask(taskIndex, index)">X</button>
                                </div>
                                <input class="add-task" v-model.trim="newTask[index]" @keyup.enter="addTask(index)"
                                       placeholder="Add new task"/>
                            </fieldset>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.lists {
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex-wrap: wrap;
    gap: 50px;
}

.list {
    max-width: 200px;
    width: 100%;
}

.month {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #DCDCDC;
}
.mount__info {
padding: 15px;

}
.month__tasks {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.month__group-task {
    display: flex;
    gap: 10px;
}
.btn__delete {
    max-width: 30px;
    width: 100%;
    border: none;
    background-color: transparent;
    color: red;
    font-size: 15px;
    font-weight: 600;
}
.btn__delete:hover {
    opacity: 0.5;
}
.add-task {
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
}
fieldset {
    border: none;
}
.month__name {
    text-align: center;
    width: 100%;
    padding: 15px;
    background-color: #D3D3D3;
}
</style>
