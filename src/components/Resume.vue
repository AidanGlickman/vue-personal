<template>
  <b-container>
    <Intro />
    <hr />
    <Education />
    <hr />
    <Workex />
    <hr />
    <ExtraCurr />
    <hr />
    <Skills />
  </b-container>
</template>

<script>
import Intro from "@/components/pieces/resume/Intro.vue";
import Education from "@/components/pieces/resume/Education.vue";
import Workex from "@/components/pieces/resume/Workex.vue";
import ExtraCurr from "@/components/pieces/resume/ExtraCurr.vue";
import Skills from "@/components/pieces/resume/Skills.vue";
export default {
  name: "Resume",
  components: {
    Intro,
    Education,
    Workex,
    ExtraCurr,
    Skills
  }
};
</script>

<style></style>
