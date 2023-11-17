<template>
  <div>
    <div class="post" v-for="post in posts">
      <div>Название: {{ post.title }}</div>
      <div>Название: {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { 
      type: Array,
      required: true,
    }, 
  },
};
</script>

<style lang="scss" scoped>
.post {
  text-align: left;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>
