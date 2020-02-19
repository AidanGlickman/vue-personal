<template>
  <div id="header">
    <b-container>
      <b-jumbotron bg-variant="transparent" fluid>
        <template v-slot:header>
          <div class="headline">Aidan Glickman</div>
        </template>

        <h3>
          <span class="text-muted">$</span> &nbsp;
          <span class="text-success">whatis</span> aidanglickman
          <br />
        </h3>
        <vue-typed-js
          :strings="['student', 'developer', 'entrepreneur']"
          :loop="true"
          :typeSpeed="75"
          :backDelay="200"
          :backSpeed="100"
        >
          <h1 id="typed-lead">
            aidanglickman (1) -
            <span class="typing"></span>
          </h1>
        </vue-typed-js>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
#header {
  width: 100vw;
}
.jumbotron {
  margin: auto;
  // text-align: center;
}
.headline {
  text-align: center;
  width: 100%;
}

#typed-lead {
  margin: auto;
}
</style>
