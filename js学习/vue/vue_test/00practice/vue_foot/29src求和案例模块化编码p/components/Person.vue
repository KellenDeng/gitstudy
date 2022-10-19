<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPerson">添加一个人，名字随机的</button>
    <h2>Count组件的和:{{ sum }}</h2>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("countOptions", ["sum"]),
    ...mapState("personOptions", ["personList"]),
  },
  methods: {
    //想想怎么用这个式子把personObj传给index.js 不要忘记this啊！！！
    ...mapMutations("personOptions", ["ADD_PERSON"]),
    ...mapActions("personOptions", ["addPersonServer"]),
    //下面的全写就是上面的缩写
    // ADD_PERSON(value) {
    //   this.$store.commit("ADD_PERSON", value);
    // },
    add() {
      const personObj = { id: nanoid(), name: this.name };
      //   this.$store.commit("ADD_PERSON", personObj);
      this.ADD_PERSON(personObj);
    },
    addPerson() {
      this.addPersonServer();
    },
  },
};
</script>

<style>
</style>