<template>
  <div>
    <div>
      <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input v-model="post.title"  type="text" placeholder="Название поста" />
        <my-input v-model="post.body" type="text" placeholder="Описание поста" />
        <my-button @click="createPost" class="btn">Создать</my-button>
      </form>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 10px;
  align-self: end;
}
</style>
