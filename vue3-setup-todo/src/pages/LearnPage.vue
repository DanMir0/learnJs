<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PostsList from "@/components/PostsList"

const posts = ref([])
const searchQuery = ref('')
const page = ref(1)
const totalPages = ref(1)
const limit = ref(10)
const showModal = ref(false)

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
            params: {
                _page: page.value,
                _limit: limit.value,
            }
        })
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit.value)
        posts.value = response.data
    } catch (e) {
        console.log('response', e);
    }
}

const searchedAndSortedPosts = () => {
   let sortedPosts =  getSortedPosts()
   return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase())) 
}

const createPost = (post) => {
    posts.value.push(post);
    showModal.value = false
}

function getSortedPosts(selectedSort) {
  const  sortedPosts = posts.value.sort((post1, post2) => post1[selectedSort]?.localeCompare(post2[selectedSort]))
    return sortedPosts
}

function changePage(pageNumber) {
  page.value = pageNumber;
  getPosts()
}

function prevPage() {
    return page.value -= 1;
}

function nextPage() {
    return page.value += 1;
}

function removePost(postDel) {
posts.value =  posts.value.filter(post => post.id !== postDel.id)
}

onMounted(getPosts)

</script>

<template>
    <div class="container">
      <div class="menu">
        <my-input v-model="searchQuery" placeholder="search"></my-input>
        <my-select @change="getSortedPosts"></my-select>
          <my-button @click="showModal = true">Create post</my-button>
      </div>
      <posts-list :posts="searchedAndSortedPosts()" @remove="removePost"></posts-list>
    </div>
    <div class="pagination">
        <ul class="pagination__pages">
            <li 
            class="pagination__page"
            v-if="page !== 1"
            @click="prevPage"
            >
                Prev
            </li>
            <li 
            v-for="pageNumber in totalPages" 
            :key="pageNumber"
            class="pagination__page"
            :class="{'current-page': page === pageNumber}"
            @click="changePage(pageNumber)"
            >
             {{ pageNumber }}
            </li>
            <li 
            class="pagination__page"
            v-if="page !== totalPages"
            @click="nextPage"
            >
                Next
            </li>
        </ul>
    </div>
    <form-item :show="showModal" @create="createPost" @close="showModal = false"></form-item>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
}

.menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.pagination__pages {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
}
.pagination__page {
    margin: 0 5px;
    border-radius: 30px;
    border: 1px solid black;
    padding: 15px;
}
.pagination__page:hover {
    border: 2px solid teal;
    opacity: 0.5;
}
.current-page {
    border: 2px solid teal;
}

</style>