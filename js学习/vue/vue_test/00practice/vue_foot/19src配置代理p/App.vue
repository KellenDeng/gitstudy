<template>
  <div>
    <button @click="getname">点我发向学生发请求</button>
    <button @click="getcar">点我发向汽车发请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getname() {
      axios.get("http://localhost:8080/mystudent/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    getcar() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>

