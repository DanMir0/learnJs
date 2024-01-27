<script setup>
</script>

<template>
    <my-navbar></my-navbar>
    <div class="app">
        <router-view></router-view>
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
</style>
