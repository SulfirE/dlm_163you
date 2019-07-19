import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import 'lib-flexible/flexible'



new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
