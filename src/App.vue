<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <div class="app__btns">
      <my-button @click="showCreate" class="btnCreate">Создать</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <!-- :show='dialogVisible'   @update:show='dialogVisible=$event'(false) -->
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList 
      :posts="sortedPosts" 
      @remove="removePost"
      v-if="!isPostLoading" />
    <div v-else>Идет загрузка...</div>
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
      modificatorValue: '',
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
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
    async fetchPost() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
        console.log(response);
      } catch (error) {
        alert(error);
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1,post2)=>{
        return(
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        )
      })
    }
  },
  
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btnCreate {
  margin-top: 15px;
  padding: 10px;
}
.app {
  &__btns {
    display: flex;
    justify-content: space-between;
  }
}
</style>
