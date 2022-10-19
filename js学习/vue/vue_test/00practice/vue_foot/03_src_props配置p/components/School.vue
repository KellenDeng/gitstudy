<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学校年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      msg: "欢迎来到仁寿",
    };
  },
  // props: ["name", "address", "age"],

  /* props: {
    name: String,
    address: String,
    age: Number,
  }, */
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    address: {
      type: String,
      required: true,
    },
  },
};
</script>

