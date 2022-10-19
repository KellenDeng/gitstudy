<template>
  <div class="demo">
    <h1>当前的和为:{{ $store.state.sum }}</h1>
    <h3>当前求和的10倍后:{{ $store.getters.bigSum }}</h3>
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
      n: 1, //用户选择的数据
    };
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWrite() {
      this.$store.dispatch("jiaWrite", this.n);
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>