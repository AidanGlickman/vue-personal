<template>
  <div id="home">
    <Header />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "Home",
  components: {
    Header,
    Projects,
    Contact
  }
};
</script>

<style lang="scss" scoped>
  #home{
    margin-bottom: 30px;
  }
</style>
