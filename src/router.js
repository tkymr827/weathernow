import Vue from 'vue'
import VueRouter from 'vue-router'
import tokyo from './components/tokyo.vue'
import newyork from './components/newyork.vue'
// import australia from './components/australia.vue'
import mexico from './components/mexico.vue'
import test from './components/test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/tokyo', component: tokyo },
  { path: '/newyork', component: newyork },
  { path: '/mexico', component: mexico },
  { path: '/test', component: test }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
