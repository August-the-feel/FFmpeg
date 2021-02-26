import Vue from 'vue'
import App from './App.vue'
import Utils from './utils/utils'
Vue.prototype.Utils = Utils
import './index.scss'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
 
Vue.prototype.$layer = layer(Vue);
new Vue({
    render: h => h(App)
}).$mount('#app')
