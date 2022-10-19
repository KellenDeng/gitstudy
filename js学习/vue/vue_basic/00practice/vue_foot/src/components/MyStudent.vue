<template>
  <div>
    <h2>我的名字是：{{ name }}</h2>
    <h2>我的年龄是：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "邓凯伦",
      age: 18,
    };
  },
};
</script>

<style>
</style>