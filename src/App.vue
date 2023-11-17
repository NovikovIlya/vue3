<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostList :posts="posts" />
  </div>

</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue'; 
export default {
  components:{
    PostForm,PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaSCript', body: 'Описание поста' },
        { id: 2, title: 'JavaSCript 2', body: 'Описание поста 2' },
      ],
      title: '',
      body: '',
    };
  },
  methods: {
    createPost(post,second,third) {
      console.log(post,second,third)
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
