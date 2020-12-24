import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import createorder from './createorder.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('create-component', createorder);

new Vue({
  el: '#app',
  render: h => h(App)
})
