<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="getback">点我后退</button>
      <button @click="getgo">点我前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    getback() {
      this.$router.back();
    },
    getgo() {
      this.$router.forward();
    },
  },
};
</script>

<style>
</style>