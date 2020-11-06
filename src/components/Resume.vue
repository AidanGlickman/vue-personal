<template>
  <b-container>
    <b-button @click="printWindow" class="no-print" id="printbutton"
      ><unicon name="print"
    /></b-button>
    <Intro />
    <hr />
    <Education />
    <hr />
    <Workex />
    <hr class="pagebreak" />
    <Skills />
    <hr />
    <ExtraCurr />
  </b-container>
</template>

<script>
  import Intro from '@/components/pieces/resume/Intro.vue'
  import Education from '@/components/pieces/resume/Education.vue'
  import Workex from '@/components/pieces/resume/Workex.vue'
  import ExtraCurr from '@/components/pieces/resume/ExtraCurr.vue'
  import Skills from '@/components/pieces/resume/Skills.vue'
  export default {
    name: 'Resume',
    components: {
      Intro,
      Education,
      Workex,
      ExtraCurr,
      Skills,
    },
    methods: {
      printWindow: function() {
        window.print()
      },
    },
  }
</script>

<style lang="scss" scoped>
#printbutton{
  margin-top: 5px;
}
</style>
