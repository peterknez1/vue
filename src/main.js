// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './states/store'
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use( CKEditor );


console.log(store.state.users);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
