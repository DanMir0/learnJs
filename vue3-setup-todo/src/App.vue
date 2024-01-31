<script setup>
</script>

<template>
    <my-navbar></my-navbar>
    <div class="app">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    background-color: #F8F8FF
}
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
}
</style>
