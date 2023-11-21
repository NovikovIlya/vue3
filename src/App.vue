<template>
  <Navbar></Navbar>
  <div class="mainVue">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from './components/UI/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
