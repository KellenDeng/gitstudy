/* 该文件是整个项目的入口文件 */

// 引入vue
// import { from } from 'core-js/core/array'
import Vue from 'vue'
// 引入App组件 ,它是所有组件的父组件
import App from './App.vue'
//mixin混合的引入 写在main里面  就是全局的使用
import { mixin1, mixin2 } from './mixin'
//mixin混合的使用
Vue.mixin(mixin1)
Vue.mixin(mixin2)

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
}).$mount('#app')
