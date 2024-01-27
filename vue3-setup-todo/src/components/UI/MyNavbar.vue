<script setup>

</script>

<template>
    <div class="navbar">
        <div class="logo">
            <img src="@/img/logo.webp" alt="ToDo">
        </div>
        <nav class="menu">
           <ul class="list">
                <li> 
                    <router-link style="text-decoration: none;" to="/">Learn vue</router-link>
                </li>
                <li>
                    <router-link style="text-decoration: none;" to="/my-tasks"> My tasks</router-link>
                </li>
           </ul>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
}

img {
    width: 200px;
}

.menu {
    display: flex;
    margin: 0 auto;
    align-items: center;
}

.list {
    display: flex;
    list-style: none;
}
li {
    margin-right: 10px;
    padding: 15px;
    border: 1px solid teal
}
li:hover {
    opacity: 0.5;
}
</style>