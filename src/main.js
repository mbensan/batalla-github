import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueFirestore, {key: 'id'});      // adding this use statement

new Vue({
  render: h => h(App),
}).$mount('#app')
