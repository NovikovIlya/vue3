<template>
    <div>
        <input :value="modelValue" @input="updateInput" class="inp" type="text" />
    </div>
 
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
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
</style>
