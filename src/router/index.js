import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstView.vue')
  },
  {
    path: '/second',
    name: 'second',
    component: () => import(/* webpackChunkName: "about" */ '../views/SecondView.vue')
  },
  {
    path: '/third',
    name: 'third',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThirdView.vue')
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: () => import(/* webpackChunkName: "about" */ '../views/FourthView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
