<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="fun()">点我</button>
  </div>
</template>

<script>
// import { mixin1, mixin2 } from "../mixin";
export default {
  name: "MySchool",
  data() {
    return {
      name: "玉龙小学",
      address: "仁寿",
    };
  },
  // mixins: [mixin1, mixin2],
};
</script>

<style>
.demo {
  background-color: blue;
  color: brown;
}
</style>