<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title"  v-bind:modelValue="post.title" @update:modelValue="post.title=$event" type="text" placeholder="Название" v-focus />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button style="align-self: flex-end; margin-top: 15px" @click="createPost"
      >Создать</my-button
    >
  </form>
</template>

<script>
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
