import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Cart from '../views/Cart/Cart'
import Explorer from '../views/Explorer/Explorer'
import Me from '../views/Me/Me'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/explorer',
    name: 'explorer',
    component: Explorer
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
