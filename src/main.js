import Vue from 'vue'
import App from './App.vue'
import RowTitle from '../dist/build.js'
// const RowTitle = require('../dist/build')

console.log(111)
console.log(RowTitle)
console.log(222)

Vue.use(RowTitle)

new Vue({
  el: '#app',
  render: h => h(App)
})
