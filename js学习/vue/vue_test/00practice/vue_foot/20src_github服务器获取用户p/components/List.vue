<template>
  <div>
    <div class="row">
      <div
        v-show="info.users.length"
        class="card"
        v-for="user in info.users"
        :key="user.login"
      >
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
      <h1 v-show="info.isfirst">欢迎使用！</h1>
      <h1 v-show="info.isLoading">加载中。。。</h1>
      <h1 v-show="info.errmeg">{{ info.errmeg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      info: {
        isfirst: true,
        isloading: false,
        errmeg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getusers", (userobj) => {
      // this.info = userobj;
      this.info = { ...this.info, ...userobj };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>