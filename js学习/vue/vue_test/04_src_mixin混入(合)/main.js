//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//全局引用
import { hunhe, hunhe2 } from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

//全局应用混合  这样使用后，所以的vm和所以的cv都会得到混合里面的类容
Vue.mixin(hunhe)
Vue.mixin(hunhe2)


//创建vm
new Vue({
	el: '#app',
	render: h => h(App)
})