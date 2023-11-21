<template>
  <div v-show='posts.length > 0'>
    <h3>Список пользователей</h3>
    <TransitionGroup name="post-list">
        <PostItem 
        v-for="post in posts"
        :key="post.id"
        
        :post="post" 
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  

  </div>
  <h2 v-show="posts.length === 0">
    Список постов пуст 
  </h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  emits: ['remove'],
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
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>
