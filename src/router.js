import Vue from 'vue'
import VueRouter from 'vue-router'
import tokyo from './components/tokyo.vue'
import newyork from './components/newyork.vue'
// import australia from './components/australia.vue'
import riodejaneiro from './components/riodejaneiro.vue'
import hokkaido from './components/hokkaido.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/tokyo', component: tokyo },
  { path: '/newyork', component: newyork },
  { path: '/riodejaneiro', component: riodejaneiro },
  { path: '/hokkaido', component: hokkaido }
]

const router = new VueRouter({
  routes
  // mode: 'history'
})

export default router
