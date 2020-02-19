<template>
  <div id="app" :class="{'light': this.$store.state.lightTheme}">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
