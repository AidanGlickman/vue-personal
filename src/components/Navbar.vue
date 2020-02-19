<template>
  <b-navbar toggleable="lg" :type="textType" variant="bg-secondary">
    <b-container>
      <b-navbar-brand to="/">Aidan Glickman</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-container>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',

    computed: {
      textType() {
        return this.$store.getters.textType
      },
    },
  }
</script>

<style></style>
