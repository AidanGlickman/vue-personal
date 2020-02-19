<template>
  <div id="card" class="mx-auto">
    <a :href="project.url" target="_blank">
      <b-card
        :img-src="require('@/assets/images/projects/' + project.img)"
        :img-alt="project.title"
        :title="project.title"
        :sub-title="project.tech"
        :text-variant="textType"
        :bg-variant="themeOpp"
      >
        <b-card-text>{{ project.desc }}</b-card-text>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  },
  computed: {
    textType() {
      return this.$store.getters.textType;
    },
    themeOpp() {
      return this.$store.getters.themeOpp;
    }
  }
};
</script>

<style>
#card {
  max-width: 20rem;
}
</style>
