<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyword"
        />&nbsp;<button @click="getname">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    getname() {
      this.$bus.$emit("getusers", {
        isLoading: true,
        errMsg: "",
        users: [],
        isfirst: false,
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (reponse) => {
          // console.log("请求成功", reponse.data.items);
          this.$bus.$emit("getusers", {
            isLoading: false,
            errMsg: "",
            users: reponse.data.items,
            isfirst: false,
          });
        },
        (error) => {
          console.log("请求失败", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>