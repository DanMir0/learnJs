import {createRouter, createWebHashHistory} from 'vue-router'
import LearnPage from '@/pages/LearnPage'
import MyTasksPage from '@/pages/MyTasksPage'

const routes = [
    {
        path: '/', 
        component: LearnPage
    },
    {
        path: '/my-tasks',
        component: MyTasksPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router