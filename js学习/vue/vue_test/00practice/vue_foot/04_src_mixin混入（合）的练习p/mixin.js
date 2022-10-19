export const mixin1 = {
    methods: {
        fun() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好呀')
    },
}
export const mixin2 = {
    data() {
        return {
            a: 1,
            b: 2
        }
    },
}