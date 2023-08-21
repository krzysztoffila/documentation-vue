import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
import vClickOutside from "v-click-outside";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vClickOutside);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');