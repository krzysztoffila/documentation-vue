import Vue from 'vue'
import Vuex from 'vuex'
import LeftMenu from "@/store/modules/left-menu-module"
import RightMenu from "@/store/modules/right-menu-module"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LeftMenu,
    RightMenu
  }
})