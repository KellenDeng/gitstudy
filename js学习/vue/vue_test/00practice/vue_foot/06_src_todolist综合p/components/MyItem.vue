<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handlecheck(todo.id)"
        />
        <span v-show="!todo.isedit"> {{ todo.title }}</span>
        <input
          v-show="todo.isedit"
          type="text"
          :value="todo.title"
          @blur="handleblur(todo.id, $event)"
          ref="inputtitle"
        />
        <!-- 上面两行代码可以用v-model 来写 但是不建议 会修改props里面的值 -->
      </label>

      <button class="btn btn-danger" @click="handledelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isedit"
        class="btn btn-edit"
        @click="handleedit(todo.id)"
      >
        编辑
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    //是否勾选一个todo
    handlecheck(id) {
      this.$bus.$emit("changecheck", id);
    },
    //删除一个TODO
    handledelete(id) {
      if (confirm("你确定删除吗？")) {
        this.$bus.$emit("deletetodo", id);
      }
    },
    //编辑todo  拿到id后 去app.vue里面去编辑
    handleedit(id) {
      this.$bus.$emit("todoedit", id);

      this.$nextTick(function () {
        this.$refs.inputtitle.focus();
      });
    },
    //失去交点 真正的修改类容 拿到id后 去app.vue里面去去修改
    handleblur(id, e) {
      if (!e.target.value) return alert("输入不能为空");
      this.$bus.$emit("todoblur", id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>