import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue'),
    meta: {
      title: 'Posts Page'
    }
  },
  {
    path: '/post/:id',
    name: 'Individual Post',
    component: () => import('../views/IndividualPost.vue'),
    meta: {
      title: 'Post Page'
    }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue'),
    meta: {
      title: 'Projects Page'
    }
  },
  {
    path: '/proyect/:id',
    name: 'Individual Proyect',
    component: () => import('../views/IndividualProject.vue'),
    meta: {
      title: 'Proyect Page'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
    meta: {
      title: 'Contact Page'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About me Page'
    }
  },
  {
    path: '/admin',
    name: 'adminPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPost.vue'),
    meta: {
      title: 'Admin Post Page'
    }
  },
  {
    path: '/adminProject',
    name: 'adminProject',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProject.vue'),
    meta: {
      title: 'Admin Project Page'
    }
  },
  {
    path: '/adminContact',
    name: 'adminContact',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminContact.vue'),
    meta: {
      title: 'Admin Contact Page'
    }
  },
  {
    path: '/adminAbout',
    name: 'adminAbout',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAbout.vue'),
    meta: {
      title: 'Admin About me Page'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
