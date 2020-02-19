<template>
  <b-navbar toggleable="lg" type="dark" variant="bg-secondary">
    <b-container>
      <ThemeToggle />
      <b-navbar-brand to="/">Aidan Glickman</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/resume">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import ThemeToggle from "@/components/pieces/ThemeToggle.vue";
export default {
  name: "Navbar",
  components: {
    ThemeToggle
  },
  computed: {
    textType() {
      return this.$store.getters.textType;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  margin-left: 20px;
}
</style>
