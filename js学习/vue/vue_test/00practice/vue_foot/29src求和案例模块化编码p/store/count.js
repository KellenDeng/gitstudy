export default {
    namespaced: true,//开启命名空间
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWrite(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
                // console.log(context)
            }, 1000);
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,//当前的和
        student: '邓凯伦',
        address: '成都',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }

}