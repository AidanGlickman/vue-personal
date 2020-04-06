<template>
  <div>
    <h2>CS Skills</h2>
    <b-row>
      <b-col sm="4" lg="3" v-for="skill in skills" :key="skill">
        {{
        skill
        }}
      </b-col>
      <b-col sm="12" class="text-center">Ability to learn new technologies and skills very fast</b-col>
    </b-row>
  </div>
</template>

<script>
import skillList from "@/assets/data/cskills.json";
export default {
  name: "Skills",
  data() {
    return {
      skills: skillList
    };
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  margin: 20px 0;
}
</style>
