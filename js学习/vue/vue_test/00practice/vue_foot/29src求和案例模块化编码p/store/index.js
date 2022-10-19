import Vue from 'vue'
import Vuex from "vuex";
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)



export default new Vuex.Store({
    //   利用了es6对象的简写形式
    modules: {
        countOptions,
        personOptions
    }


})