import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Top from '../views/Top'
import Category from '../views/Category'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/top',
    component: Top
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
