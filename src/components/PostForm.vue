<template>
  <div>
    <div>
      <form @submit.prevent>
        <h4>Создание поста</h4>
        <!-- @input="post.title = $event.target.value"
          v-bind:value="title" -->
        <input v-model="post.title" class="inp" type="text" placeholder="Название поста" />
        <input v-model="post.body" class="inp" type="text" placeholder="Описание поста" />
        <button @click="createPost" class="btn">Создать</button>
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
.inp {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
.btn {
  margin-top: 10px;
  align-self: end;
}
</style>
