/* 该文件是整个项目的入口文件 */
// 引入vue
import Vue from 'vue'
// 引入App组件 ,它是所有组件的父组件
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false
//  创建Vue的实例对象
new Vue({
  // el:'#root',
  // 将App组件放入容器中
  // 原式子例子 最下面的是简写
  /* render(createElement){
       return createElement('h1','你好呀')
  } */
  render: h => h(App),
  // 利用了es6对象的简写形式
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }

}).$mount('#app')
