<script setup>
import MyButton from "@/components/UI/MyButton.vue";

const props = defineProps({
    post: Object,
    require: true
})

function timeAgo(timestamp) {
    const currentDate = new Date();
    const previousDate = new Date(timestamp);
    const timeDifference = currentDate - previousDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));

    if (minutes < 1) {
        return 'Только что';
    } else if (minutes === 1) {
        return '1 минуту назад';
    } else if (minutes < 60) {
        return `${minutes} минут назад`;
    } else if (minutes < 24 * 60) {
        const hours = Math.floor(minutes / 60)
        return `${hours} часов назад`;
    } else {
        const days = Math.floor(minutes / (24 * 60))
        return `${days} дней назад`
    }
}
</script>

<template>
    <div class="post" :class="{ 'done': post.done, 'unDone': !post.done}">
        <h2 class="post__title">Title: {{ post.title }}</h2>
        <p>Body: {{ post.body }}</p>
        <div class="group__btns">
          <my-button @click="$emit('addToDone', post)">Done</my-button>
          <my-button @click="$emit('remove', post.id)">Delete</my-button>
        </div>
        <p class="post__date">{{ timeAgo(post.id) }}</p>
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

.post__date {
    margin-top: 15px;
    margin-left: auto;
    color: #808080;
}
</style>