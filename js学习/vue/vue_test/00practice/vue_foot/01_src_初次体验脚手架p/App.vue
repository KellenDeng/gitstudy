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

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

