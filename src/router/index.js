import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'adminPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPost.vue')
  },
  {
    path: '/adminProject',
    name: 'adminProject',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProject.vue')
  },
  {
    path: '/adminContact',
    name: 'adminContact',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminContact.vue')
  },
  {
    path: '/adminAbout',
    name: 'adminAbout',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAbout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
