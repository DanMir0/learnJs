<script setup>
import {onMounted, ref} from "vue";
// Задача 1
// const count = ref(0)
// function add() {
//     count.value += 1
// }
//
// function desc() {
//     count.value -= 1
// }

// Задача 2
// const tasks = ref([])
// const text = ref('')
// function add() {
//     if (text.value.trim()) {
//         tasks.value.push(text.value)
//         text.value = ''
//     }
// }
// function deleteTask(delIndex) {
//     tasks.value = tasks.value.filter((task, index) => index !== delIndex)
// }

// Задача 3. Динамические классы
// const isActive = ref(false)
// function toggle() {
//     isActive.value = !isActive.value
// }

// Задача 4. Фильтр для форматирования даты
// const orders = ref([
//     { id: 1, date: '2024-01-15'},
//     { id: 2, date: '2024-02-20'},
//     { id: 3, date: '2024-03-10'}
// ])
// function formatDate(dateString) {
//     if (!dateString) return '-'
//
//     const date = new Date(dateString)
//     const day = String(date.getDate()).padStart(2, '0') // "05" вместо "5"
//     const month = date.getMonth()
//     const year = date.getFullYear()
//
//     const months = [
//         'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//         'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
//     ];
//
//     return `${day}.${months[month]}.${year}`
// }

// Задача 5  Обработка формы
// const email = ref("")
// const password = ref("")
// const passwordError = ref("")
// const emailError = ref("")
// function submit() {
//     passwordError.value = ''
//     emailError.value = ''
//
//     if (!email.value.trim()) {
//         emailError.value = 'Email обязателен!'
//     } else if (!email.value.includes('@')) {
//         emailError.value = 'Неверный формат email'
//     }
//
//     if (!password.value) {
//         passwordError.value = 'Пароль обязателен!'
//     } else if (password.value.length < 6) {
//         passwordError.value = 'Слишком короткий пароль'
//     }
//
//     if (!passwordError.value && !emailError.value) {
//         console.log('Form submit', {
//             email: email.value,
//             password: password.value,
//         })
//     }
// }

//Задача 6  Кастомная директива v-click-outside
// const vClickOutside  = {
//     mounted(el, binding) {
//         el.clickOutsideHandler = (event) => {
//             if (!el.contains(event.target)) {
//                 binding.value(event)
//             }
//         }
//         setTimeout(() => {
//             document.addEventListener('click', el.clickOutsideHandler);
//         }, 0);
//     },
//     unmounted(el) {
//     document.removeEventListener('click', el.clickOutsideHandler)
//     }
// }
// const isMenuOpen = ref(false);
//
// function openMenu() {
//     isMenuOpen.value = true;
// }
//
// function closeMenu() {
//     isMenuOpen.value = false;
// }
</script>

<template>
<!--    Задача 1-->
<!--    <p>{{ count }}</p>-->
<!--    <div class="btns">-->
<!--        <button @click="add">Add</button>-->
<!--        <button @click="desc">Desc</button>-->
<!--    </div>-->


   <!-- Задача 2 -->
<!--    <div>-->
<!--        <div>-->
<!--            <input type="text" v-model="text">-->
<!--            <button @click="add">Добавить</button>-->
<!--        </div>-->
<!--        <p>Список задач:</p>-->
<!--        <ul class="lists">-->
<!--            <li v-for="(item, index) in tasks" :key="index" class="task">-->
<!--                <p>{{ item }}</p>-->
<!--                <button @click="deleteTask(index)">Удалить</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->

    <!-- Задача 3 -->
<!--    <button @click="toggle" :class="{active: isActive}">Toggle</button>-->

    <!-- Задача 4 -->
<!--    <div v-for="order in orders" :key="order.id">-->
<!--        <p>{{formatDate(order.date) }}</p>-->
<!--    </div>-->

    <!-- Задача 5 -->
<!--    <form @submit.prevent="submit">-->
<!--        <input v-model="email" type="email">-->
<!--        <input v-model="password" type="password">-->
<!--        <button>Register</button>-->

<!--        <div v-if="emailError" class="error">{{ emailError}}</div>-->
<!--        <div v-if="passwordError" class="error">{{ passwordError}}</div>-->
<!--    </form> -->

    <!-- Задача 6  Кастомная директива v-click-outside -->
<!--    <button @click="openMenu">Открыть меню</button>-->

<!--    <div v-if="isMenuOpen" v-click-outside="closeMenu" class="dropdown-menu">-->
<!--        <p>Пункт меню 1</p>-->
<!--        <p>Пункт меню 2</p>-->
<!--        <p>Пункт меню 3</p>-->
<!--    </div>-->
</template>

<style scoped>
.btns {
    display: flex;
    gap: 15px;
}

.lists {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.active {
    background-color: green;
}
.error {
    color: red;
}
.dropdown-menu {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>
