<template>
  <div class="container">
    <Category title="游戏">
      <!-- atguigu表示的是一个对象 -->
      <template scope="atguigu">
        <ul>
          <!-- 下面的games表示Category.vue 里面的:games="games" 第一个games -->
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 这里用了 解构赋值 -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(g, index) in games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>
    <!-- slot-scope 和 scope 的使用一样的 只是名字不同 -->
    <!-- slot-scope 和 scope 在vue2.6后 被弃用了  取而代之的是v-slot:default="{ games }" 这种格式 -->
    <Category title="游戏">
      <!-- 这里使用了解构解析 -->
      <template slot-scope="{ games }">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
