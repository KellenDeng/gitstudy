<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addtodo="addtodo" />
      <MyList :todos="todos" />
      <MyFoot :todos="todos" ref="cleartodo" @alltodo="alltodo" />
    </div>
  </div>
</template>

<script>
import MyFoot from "./components/MyFoot";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
export default {
  name: "App",
  components: { MyFoot, MyHeader, MyList },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    //添加新数据
    addtodo(newobjtodo) {
      this.todos.unshift(newobjtodo);
    },
    // 是否勾选一个todo
    changecheck(id) {
      this.todos.forEach((value) => {
        if (value.id === id) {
          value.done = !value.done;
        }
      });
    },
    //删除某个TODO
    deletetodo(id) {
      this.todos = this.todos.filter((value) => {
        return value.id !== id;
      });
    },
    //清除已完成的任务
    cleartodo() {
      this.todos = this.todos.filter((value) => {
        return value.done == false;
      });
    },
    //是否全选or 全不选
    alltodo(done) {
      this.todos.forEach((value) => {
        value.done = done;
      });
    },
    //编辑
    todoedit(id) {
      this.todos.forEach((value) => {
        if (value.id === id) {
          value.isedit = true;
        }
      });
    },
    //失去焦点  真正修改内容
    todoblur(id, newtitle) {
      this.todos.forEach((value) => {
        if (value.id === id) {
          value.isedit = false;
          value.title = newtitle;
        }
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$refs.cleartodo.$on("cleartodo", this.cleartodo);
    this.$bus.$on("changecheck", this.changecheck);
    this.$bus.$on("deletetodo", this.deletetodo);
    this.$bus.$on("todoedit", this.todoedit);
    this.$bus.$on("todoblur", this.todoblur);
  },
  beforeDestroy() {
    this.$bus.$off(["changecheck", "deletetodo", "todoedit", "todoblur"]);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(113, 182, 209);
  margin-right: 5px;
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
