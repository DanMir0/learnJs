<script setup>
import {ref} from "vue";
const selectedSort = ref('')
const selectOptions = ref([
  { value: 'title', name: 'Sort by title'},
  { value: 'body', name: 'Sort by body'},
])
const emit = defineEmits(['change'])
</script>

<template>
  <div>
    <select v-model="selectedSort" class="select" @change="$emit('change', selectedSort)">
      <option disabled value="">Select sort...</option>
      <option v-for="option in selectOptions" :value="option.value" :key="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<style scoped>
.select {
    border-radius: 30px;
    padding: 15px;
}
</style>