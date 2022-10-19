<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <input type="checkbox" v-model="isall" />
      </label>
      <span>
        <span>已完成{{ donetodos }}</span> / 全部{{ total }}
      </span>
      <button class="btn btn-danger" @click="deleteall">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFoot",
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    total() {
      return this.todos.length;
    },
    donetodos() {
      // let a = 0;
      // this.todos.forEach((value) => {
      //   if (value.done) a++;
      // });
      // return a;
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
    isall: {
      get() {
        return this.total == this.donetodos;
      },
      set(value) {
        this.$emit("alltodo", value);
      },
    },
  },
  methods: {
    deleteall() {
      if (confirm("你确定要清除已完成吗？")) this.$emit("cleartodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>