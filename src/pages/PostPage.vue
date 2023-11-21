<template>
  <div >
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuerry" placeholder="Поиск..." />
    <div class="app__btns">
      <my-button @click="showCreate" class="btnCreate">Создать</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <!-- :show='dialogVisible'   @update:show='dialogVisible=$event'(false) -->
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />

    <div v-else>Идет загрузка...</div>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import MyDialog from '../components/UI/MyDialog.vue';
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
      searchQuerry: '',
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPage: 0,
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
        console.log(response);
      } catch (error) {
        alert(error);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePost() {
      try {
        this.page += 1;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
        console.log(response);
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.fetchPost();

    var options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    var callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPage) {
        console.log('ПЕРЕСЕЕЕК');
        this.loadMorePost();
      }
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuerry.toLowerCase()),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.btnCreate {
  margin-top: 15px;
  padding: 10px;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid green;
}
.observer {
  height: 30px;
  background: green;
}
</style>
