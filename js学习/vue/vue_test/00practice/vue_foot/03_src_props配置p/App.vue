<template>
  <div>
    <School name="中学" address="仁寿" :age="20" />
  </div>
</template>

<script>
//引入School组件
import School from "./components/School";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
};
</script>
