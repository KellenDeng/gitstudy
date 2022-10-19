export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        //定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
                element.value = binding.value
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        //给Vue原型上添加一个方法（目的就是vm和vc(就是其他的Vue结尾文件)就都能用上面全局定义的一些配置!!!!!!）
        Vue.prototype.hello = () => { alert('你好啊') }
    }
}