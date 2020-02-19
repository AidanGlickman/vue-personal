<template>
  <b-button @click="toggle">
    <Unicon name="moon" />
  </b-button>
</template>

<script>
export default {
  name: "ThemeToggle",
  methods: {
    toggle() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_custvars.scss";
.light {
  background-color: $light;
  color: $dark;
}
</style>
