<script setup>
import PostItem from '@/components/PostItem.vue';
import { gsap } from "gsap";

const props = defineProps({
    posts: {
    type: Array,
    require: true,
    }
})
function onBeforeEnter(el) {
  el.style.opacity = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>

<template>
    <div v-if="posts.length > 0">
        <transition-group 
        name="list"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        >
            <post-item :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove', post)"></post-item>
        </transition-group>
    </div>
    <div v-else>
        <h3>Список пуст</h3>
    </div>
</template>

<style scoped>
.list-move {
  transition: all 0.5s ease;
}


</style>