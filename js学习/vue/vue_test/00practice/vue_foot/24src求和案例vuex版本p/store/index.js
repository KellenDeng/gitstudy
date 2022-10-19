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
            console.log(context)
        }, 1000);
    }

}
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
const state = {
    sum: 0,//当前的和
}

export default new Vuex.Store({
    //   利用了es6对象的简写形式
    actions,
    mutations,
    state

})