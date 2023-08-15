import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
import VeeValidate from 'vee-validate';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');