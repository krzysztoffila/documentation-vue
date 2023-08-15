import Vue from 'vue'
import VueRouter from 'vue-router'
import UI from '../views/UI.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/ui',
    name: 'ui',
    component: UI
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router