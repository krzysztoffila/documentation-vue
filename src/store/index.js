import Vue from 'vue'
import Vuex from 'vuex'
import RightMenu from "@/store/modules/right-menu-module"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    RightMenu
  }
})