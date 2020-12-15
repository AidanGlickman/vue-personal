<template>
  <div>
    <h2>Education</h2>
    <b-row>
      <b-col sm="6">{{ edData.highschool }}</b-col>
      <b-col sm="6" class="text-right">{{ edData.years }}</b-col>
      <b-col sm="6">{{ edData.major }}</b-col>
      <b-col sm="6" class="text-right">{{ edData.location }}</b-col>
      <b-col sm="12">{{ edData.gpa }} GPA</b-col>
      <b-col sm="12">{{ edData.extra }}</b-col>
      <b-col sm="12">{{ edData.act }} ACT</b-col>
      <b-col sm="12">{{ edData.tests.join(', ') }}</b-col>
    </b-row>
    <template v-if="course">
    <h3>CS Coursework</h3>
    <b-row>
      <b-col
        sm="6"
        md="4"
        lg="3"
        v-for="course in edData.courses"
        :key="course"
        >{{ course }}</b-col
      >
    </b-row>
    </template>
  </div>
</template>

<script>
  import education from '@/assets/data/education.json'
  export default {
    name: 'Education',
    props: {
      course: Boolean
    },
    data() {
      return {
        edData: education,
      }
    },
  }
</script>

<style></style>
