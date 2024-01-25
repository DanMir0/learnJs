import { createApp } from 'vue'
import App from './App.vue'
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"

const app = createApp(App)

app
    .component('my-input', MyInput)
    .component('my-button', MyButton)
    .mount('#app')