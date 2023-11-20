<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <!-- <input type="text" v-model.trim="modificatorValue"/> -->
    <my-button @click="showCreate" class="btnCreate">Создать</my-button>
    <!-- <my-button @click="fetchPost">Получить</my-button> -->
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import MyDialog from './components/UI/MyDialog.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue:'',
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showCreate() {
      this.dialogVisible = true;
    },
    async fetchPost(){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data
        console.log(response)
      } catch (error) {
        alert(error)
      }
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btnCreate {
  margin-top: 15px;
}
</style>
