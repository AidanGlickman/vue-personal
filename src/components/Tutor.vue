<template>
  <b-container>
    <h1>Aidan Glickman Tutoring</h1>
    <p>Bergen County Academies graduate with experience as a peer tutor. 
      All levels of high school math and computer science through college.
      Tutored and served as Webmaster for Bergen County Academies National Honor Society.
    </p>
    <h3>Courses</h3>
    <b-row>
      <b-col md="6">
        <h4>Computer Science</h4>
        <ul>
          <li>Intro to Computer Science</li>
          <li>AP Computer Science</li>
          <li>Data Structures & Algorithms</li>
          <li>Assembly Language & C</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Web Development</li>
        </ul>
      </b-col>
      <b-col md="6">
        <h4>Mathematics</h4>
        <ul>
          <li>Algebra I & II</li>
          <li>Pre-Calculus</li>
          <li>AP Calculus AB & BC</li>
          <li>AP Statistics</li>
          <li>Linear Algebra</li>
          <li>Mathematical Modeling & Writing</li>
        </ul>
      </b-col>
    </b-row>
    <Education :course="false"/>
    <h3>Contact</h3>
    <p>Email me at <a href="mailto:aidan@aidanglickman.com">aidan@aidanglickman.com</a>. Available for virtual tutoring and in person instruction in Bergen County.</p>
  </b-container>
</template>

<script>
import Education from "@/components/pieces/resume/Education.vue"
export default {
  components: {
    Education
  }

}
</script>

<style scoped>
    h1 {
      margin-top: 20px;
      text-align: center;
    }
    .container {
      margin-bottom: 30px;
    }
</style>