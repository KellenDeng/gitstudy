<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/MySchool.vue";
import Student from "./components/MyStudent";
// import { mixin1, mixin2 } from "./mixin";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  // mixins: [mixin1, mixin2],
};
</script>

