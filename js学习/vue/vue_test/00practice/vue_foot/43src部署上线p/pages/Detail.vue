<template>
  <div>
    <!-- <h3>{{ $route.query.id }}</h3>
    <h3>{{ $route.query.title }}</h3>
    <h2>{{ $route.params.id2 }}</h2>
    <h2>{{ $route.params.title2 }}</h2> -->
    <h4>{{ id }}</h4>
    <h4>{{ title }}</h4>
    <h5>{{ id2 }}</h5>
    <h5>{{ title2 }}</h5>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title", "id2", "title2"],
};
</script>

<style>
</style>