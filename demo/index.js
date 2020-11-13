import Vue from 'vue'
import app from './app.vue'
import mdEditor from '../dist'
Vue.use(mdEditor)
new Vue({
  el: '#app',
  render: h => h(app)
})