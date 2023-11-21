<template>
  <div class="post">
  <div>{{ post.id }}</div>
    <div><strong>Название</strong> {{ post.title }}</div>
    <div><strong>Описание</strong>: {{ post.body }}</div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
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
  &__btns {
    margin-top: 10px;
    display: flex;
    justify-content: end;
  }
}
</style>
