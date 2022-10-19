<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <!-- <router-link :to="`/Home/News/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
        <router-link
          :to="{
            //   path: '/Home/News/Detail',
            name: 'detail',
            query: {
              id: m.id,
              title: m.title,
            },
            params: {
              id2: m.id,
              title2: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="getpush(m)">点我push</button>
        <button @click="getreplace(m)">点我replace</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      message: [
        { id: "001", title: "邓凯伦" },
        { id: "002", title: "赵誉" },
        { id: "003", title: "小米" },
      ],
    };
  },
  methods: {
    //不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活 这是在按钮上添加路由跳转
    getpush(m) {
      this.$router.push({
        name: "detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    getreplace(m) {
      this.$router.replace({
        name: "detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
  //组件内路由守卫
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("G") === "K") {
        next();
      } else {
        alert("储存的结果不对,无权利查看");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style>
</style>