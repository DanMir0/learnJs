<template>
    <div class="navbar">
        <div  @click="$router.push('/')">ToDo</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/composition')">Composition API</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 20px;">VueX</my-button>
            <my-button @click="$router.push('/posts')" style="margin-left: 20px;">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px;">О сайте</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
    export default {
  components: { MyButton },
        
    }
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
}
</style>