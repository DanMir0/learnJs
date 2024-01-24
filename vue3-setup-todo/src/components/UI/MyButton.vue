<script setup>

</script>

<template>
    <div>
        <button class="button">
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>
.button {
    padding: 15px;
    border-radius: 30px;
    background-color: transparent;
    border: 1px solid blue;
}
.button:hover {
    opacity: 0.6;
}
</style>