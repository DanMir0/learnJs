<script setup>
import MyButton from "@/components/UI/MyButton.vue";

const props = defineProps({
    post: Object,
    require: true
})
</script>

<template>
    <div class="post" :class="{ 'done': post.done, 'unDone': !post.done}">
        <h3>{{ post.id }}</h3>
        <h2 class="post__title">Title: {{ post.title }}</h2>
        <p>Body: {{ post.body }}</p>
        <div class="group__btns">
          <my-button @click="$emit('addToDone', post)">Done</my-button>
          <my-button @click="$emit('remove', post.id)">Delete</my-button>
        </div>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    border: 1px solid #7FFFD4;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 15px;
}

.post__title {
    margin-bottom: 15px;
}
.group__btns {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.done {
  background-color: #7FFFD4;
}

.unDone {
  background-color: rgba(0, 0, 0, 0);
}
</style>