import Vue from 'vue'
import App from './App.vue'

import 'amfe-flexible/index.js';
import { Uploader } from 'vant';
import 'vant/lib/index.css';
let obj = {
  Uploader
};
for(let i in obj){
  Vue.use(obj[i]);
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
