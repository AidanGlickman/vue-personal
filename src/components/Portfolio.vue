<template>
<b-container>
  <h1>Projects</h1>
  <hr/>
  <b-row>
    <Project v-for="proj in projList" :key="proj.key" :project="proj" />
  </b-row>
  </b-container>
</template>

<script>
import Project from '@/components/pieces/Project.vue';
import pList from '@/assets/data/projects.json';
export default {
  name: "Portfolio",
  components: {Project},
  data() {
    return {
      projList: pList
    };
  }
}
</script>

<style>

</style>