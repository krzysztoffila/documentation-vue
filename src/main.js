import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';

// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/default.css';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue,
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');