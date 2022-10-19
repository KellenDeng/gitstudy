<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="text()">点我测试hello</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "玉龙小12345",
      address: "仁寿1234",
    };
  },
  methods: {
    text() {
      this.hello();
    },
  },
};
</script>

<style>
.demo {
  background-color: blue;
  color: brown;
}
</style>