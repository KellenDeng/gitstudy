<template>
  <div>
    <h2>我的名字是：{{ name }}</h2>
    <h2>我的年龄是：{{ age }}</h2>
    <button @click="fun()">点我</button>
  </div>
</template>

<script>
// import { mixin1, mixin2 } from "../mixin";

export default {
  name: "MyStudent",
  data() {
    return {
      name: "邓凯伦",
      age: 18,
    };
  },
  mounted() {
    console.log("123");
  },
  // mixins: [mixin1, mixin2],
};
</script>

<style>
</style>