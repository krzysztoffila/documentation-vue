import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '@/store/modules/auth-module.js'
import Toast from '@/store/modules/toast-module.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Toast
    }
})