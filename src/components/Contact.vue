<template>
  <b-container>
    <h3>
      <span class="text-muted">$</span> &nbsp;
      <span class="text-success">where</span> aidanglickman
      <br />
    </h3>
    <b-row>
      <b-col
        class="text-center"
        :class="{'dark': !this.$store.state.lightTheme, 'light': this.$store.state.lightTheme}"
      >
        <a href="https://github.com/aidanglickman">
          <unicon name="github" width="5rem" height="5rem" />
        </a>
      </b-col>
      <b-col
        class="text-center"
        :class="{'dark': !this.$store.state.lightTheme, 'light': this.$store.state.lightTheme}"
      >
        <a href="https://www.youtube.com/channel/UC4sLvmZVtLhQag4DVqgPQmw">
          <unicon name="youtube" width="5rem" height="5rem" />
        </a>
      </b-col>
      <b-col
        class="text-center"
        :class="{'dark': !this.$store.state.lightTheme, 'light': this.$store.state.lightTheme}"
      >
        <a href="mailto:aidan@aidanglickman.com">
          <unicon name="envelope" width="5rem" height="5rem" />
        </a>
      </b-col>
      <b-col
        class="text-center"
        :class="{'dark': !this.$store.state.lightTheme, 'light': this.$store.state.lightTheme}"
      >
        <a href="https://www.linkedin.com/in/aidanglickman/">
          <unicon name="linkedin" width="5rem" height="5rem" />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.dark {
  fill: $light;
}
.light {
  fill: $dark;
}
</style>
