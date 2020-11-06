<template>
  <div>
    <h2>Main Technologies</h2>
    <b-row v-for="skill in skills" :key="skill.name" class="mb-1">
      <b-col sm="12" md="3">{{skill.name}}</b-col>
      <b-col sm="12" md="9" class="text-right">{{skill.list.join(", ")}}</b-col>
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
