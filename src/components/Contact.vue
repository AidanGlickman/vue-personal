<template>
  <b-container>
    <h3>
      <span class="text-muted">$</span> &nbsp;
      <span class="text-success">where</span> aidanglickman
      <br />
    </h3>
    <b-row>
      <b-col sm="4" class="contact-icon text-center">
        <a href="https://github.com/aidanglickman">
          <unicon name="github" width="5rem" height="5rem" />
        </a>
      </b-col>
      <b-col sm="4" class="contact-icon text-center">
        <a href="https://medium.com/@aidgli">
          <unicon name="medium-m" width="5rem" height="5rem" />
        </a>
      </b-col>
      <b-col sm="4" class="contact-icon text-center">
        <a href="mailto:aidan@aidanglickman.com">
          <unicon name="envelope" width="5rem" height="5rem" />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/main.scss';
  .contact-icon {
    fill: $body-color;
  }
</style>
