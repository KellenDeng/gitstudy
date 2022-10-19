<template>
  <ul>
    <li :style="{ opacity }">欢迎光临</li>
    <li><a href="/message1">message001</a><input type="text" />&nbsp;&nbsp;</li>
    <li><a href="/message2">message002</a><input type="text" />&nbsp;&nbsp;</li>
    <li>
      <a href="/message/3">message003</a><input type="text" />&nbsp;&nbsp;
    </li>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("Message组件即将被销毁");
  // },
  activated() {
    console.log("激活");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>