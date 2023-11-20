<template>
  <div v-show='posts.length > 0'>
    <h3>Список пользователей</h3>
    <PostItem 
      v-for="post in posts"
      :key="post.id"
      
      :post="post" 
      @remove="$emit('remove', post)"
     />
  </div>
  <h2 v-show="posts.length === 0">
    Список постов пуст 
  </h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
