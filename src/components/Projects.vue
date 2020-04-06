<template>
  <b-container>
    <h3>
      <span class="text-muted">$</span> &nbsp;
      <span class="text-success">ls</span> projects
      <br />
    </h3>
    <b-card-group deck class="mx-auto">
      <Project v-for="proj in projList" :key="proj.key" :project="proj" />
    </b-card-group>
    <p class="text-center follow">
      Find projects that don't have pretty frontends on my
      <a
        href="https://github.com/AidanGlickman"
      >Github</a>
    </p>
  </b-container>
</template>

<script>
import Project from "@/components/pieces/Project.vue";
import pList from "@/assets/data/projects.json";
export default {
  name: "Projects",
  components: {
    Project
  },
  data() {
    return {
      projList: pList
    };
  }
};
</script>

<style lang="scss" scoped>
.follow {
  margin-top: 20px;
}
</style>
