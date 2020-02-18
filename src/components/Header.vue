<template>
  <div id="header">
    <b-container>
      <b-jumbotron bg-variant="transparent">
        <template v-slot:header>
          <span>
            Aidan Glickman
          </span></template
        >
        <hr />
        <h3>
          <span class="text-muted">$ </span>
          <span class="text-success">whatis</span> aidan&#8209;glickman <br />
        </h3>
        <vue-typed-js
          :strings="['student', 'developer', 'entrepreneur']"
          :loop="true"
          :typeSpeed="75"
          :backDelay="100"
          :backSpeed="50"
        >
          <h1 id="typed-lead">
            aidan-glickman (1) - <span class="typing"></span>
          </h1>
        </vue-typed-js>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss" scoped>
  #header {
    min-height: 50vh;
    width: 100vw;
  }
  .jumbotron {
    margin: auto;
    text-align: center;
  }

  #typed-lead {
    margin: auto;
  }
</style>
