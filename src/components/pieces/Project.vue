<template>
  <div id="card">
    <a :href="project.url" target="_blank">
      <b-card
        :img-src="require('@/assets/images/projects/' + project.img)"
        :img-alt="project.title"
        :title="project.title"
        :sub-title="project.tech"
        :text-variant="textType"
        bg-variant="opposite"
      >
        <b-card-text>
          {{ project.desc }}
        </b-card-text>
      </b-card>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      project: Object,
    },
    computed: {
      textType() {
        return this.$store.getters.textType
      },
    },
  }
</script>

<style>
  #card {
    max-width: 20rem;
  }
</style>
