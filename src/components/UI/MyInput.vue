<template>
  <input :value="modelValue" @input="updateInput" class="inp" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.inp {
  padding: 10px;
  margin-top: 10px;
}
</style>
