import Vue from 'vue'
import booklist from './booklist.vue'
import bookdetail from './components/bookdetail'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
router: new VueRouter({
  routes:[
    {path: "/books/:bookId", component:bookdetail}
  ]
}),

  render: h => h(booklist),
}).$mount('#app')
