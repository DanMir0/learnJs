<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
        <input 
        type="text" 
        :value="props.modelValue"
        @input="emit('update:modelValue',  $event.target.value)"
        >
</template>

<style scoped>
input {
    width: 70%;
    padding: 20px;
    border-radius: 30px;
}
</style>