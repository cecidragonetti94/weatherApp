import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weatherCity',
    name: 'WeatherCity',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/WeatherCity.vue')
  },
  {
    path: '/argentina',
    name: 'Argentina',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Argentina.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
