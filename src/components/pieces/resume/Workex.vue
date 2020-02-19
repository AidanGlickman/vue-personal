<template>
  <div>
    <h2>Work Experience</h2>
    <div v-for="job in jobs" :key="job.company">
      <b-row>
        <b-col sm="6">{{job.title}}</b-col>
        <b-col sm="6" class="text-right">{{ job.dates }}</b-col>
        <b-col sm="6">{{job.company}}</b-col>
        <b-col sm="6" class="text-right">{{ job.location }}</b-col>
        <b-col sm="12">{{job.description}}</b-col>

        <ul>
          <li v-for="bul in job.bullets" :key="bul">{{bul}}</li>
        </ul>
      </b-row>
    </div>
  </div>
</template>

<script>
import workex from "@/assets/data/workex.json";
export default {
  name: "WorkExperience",
  data() {
    return {
      jobs: workex
    };
  }
};
</script>

<style>
</style>
