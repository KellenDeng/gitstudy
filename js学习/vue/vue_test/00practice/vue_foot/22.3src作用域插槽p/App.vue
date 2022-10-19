<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
        <a href=""> 查看更多</a>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 这里使用了解构解析 -->
      <template slot-scope="{ games }">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
        <a href=""> 查看更多</a>
      </template>
    </Category>
  </div>
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
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
