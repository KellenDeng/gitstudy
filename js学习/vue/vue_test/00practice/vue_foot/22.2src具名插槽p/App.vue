<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.IDoyUmvAnzFYUoo-HCrLSwHaHa?pid=ImgDet&rs=1"
        alt=""
      />
      <h2 slot="footer"><a href="">欢迎光临</a></h2>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <a href="" slot="footer">了解更多</a>
      <a href="" slot="footer"> 查看更多</a>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template slot="footer">
        <a href="">了解更多</a>
        <a href=""> 查看更多</a>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
