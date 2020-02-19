<template>
  <div>
    <h2>Extracurricular Activities</h2>
    <div v-for="act in activities" :key="act.organization">
      <b-row>
        <b-col sm="6">{{act.title}}</b-col>
        <b-col sm="6" class="text-right">{{ act.dates }}</b-col>
        <b-col sm="6">{{act.organization}}</b-col>

        <ul>
          <li v-for="bul in act.bullets" :key="bul">{{bul}}</li>
        </ul>
      </b-row>
    </div>
  </div>
</template>

<script>
import acts from "@/assets/data/extracurr.json";
export default {
  name: "ExtraCurr",
  data() {
    return {
      activities: acts
    };
  }
};
</script>

<style>
</style>
