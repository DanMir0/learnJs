import {createRouter, createWebHashHistory} from 'vue-router'
import LearnPage from '@/pages/LearnPage'
import MyTasksPage from '@/pages/MyTasksPage'
import TasksByMonthPage from "@/pages/TasksByMonthPage.vue";

const routes = [
    {
        path: '/', 
        component: LearnPage
    },
    {
        path: '/my-tasks',
        component: MyTasksPage
    },
    {
        path: '/tasks-by-month',
        component: TasksByMonthPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router