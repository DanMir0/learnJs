import { createApp } from 'vue'
import App from './App.vue'
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import MyNavbar from "@/components/UI/MyNavbar"
import router from "@/router/router"

const app = createApp(App)

app
    .use(router)
    .component('my-navbar', MyNavbar)
    .component('my-input', MyInput)
    .component('my-button', MyButton)
    .mount('#app')