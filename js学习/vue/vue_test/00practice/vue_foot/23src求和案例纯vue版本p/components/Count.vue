<template>
  <div class="demo">
    <h1>当前的和为：{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWrite">等一会儿再加</button>
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      sum: 0, //当前的和
      n: 1, //用户选择的数据
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWrite() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>