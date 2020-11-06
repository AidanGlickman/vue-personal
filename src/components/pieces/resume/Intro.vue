<template>
  <div>
    <h3>Aidan Glickman</h3>
    <a href="mailto:contact@aidanglickman.com">
      <p>contact@aidanglickman.com</p>
    </a>
    <a href="https://aidanglickman.com"><p>aidanglickman.com</p></a>
    <a href="https://github.com/AidanGlickman"><p>github.com/AidanGlickman</p></a>
    <p>{{intro.summary}}</p>
  </div>
</template>

<script>
import intro from '@/assets/data/intro.json';
export default {
  data(){
    return {
      intro
    }
  }
};
</script>

<style></style>
