<template>
  <div class="demo">
    <h1>当前的和为:{{ sum }}</h1>
    <h3>当前求和的10倍后:{{ bigSum }}</h3>

    <h3>{{ student }}</h3>
    <h3>{{ address }}</h3>
    <h3>person组人的个数:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWrite(n)">等一会儿再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1, //用户选择的数据
    };
  },
  methods: {
    //程序员自己定义写法
    /*  increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */

    //对象写法
    ...mapMutations("countOptions", { increment: "JIA", decrement: "JIAN" }),

    //程序员自己定义写法
    /*  incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWrite() {
      this.$store.dispatch("jiaWrite", this.n);
    }, */

    //数组写法
    ...mapActions("countOptions", ["jiaOdd", "jiaWrite"]),
  },
  computed: {
    //程序员自己定义写法
    /*  sum(){
      return this.$store.state.sum
    } */

    //对象写法
    /* ...mapState({ sum: "sum", student: "student", address: "address" }),
    ...mapGetters({ bigSum: "bigSum" }), */
    //数组写法
    ...mapState("countOptions", ["sum", "student", "address"]),
    ...mapState("personOptions", ["personList"]),
    ...mapGetters("countOptions", ["bigSum"]),
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>