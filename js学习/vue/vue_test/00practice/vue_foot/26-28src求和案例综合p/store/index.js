import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
const actions = {
    // jia(context, value) {
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // }
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

}
const mutations = {
    //mutations 里面只能写纯函数 不要写业务逻辑
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}
const state = {
    sum: 0,//当前的和
    student: '邓凯伦',
    address: '成都',
    personList: [{ id: "001", name: '张哥' }]

}
const getters = {
    //类似于计算属性
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    //   利用了es6对象的简写形式
    actions,
    mutations,
    state,
    getters

})