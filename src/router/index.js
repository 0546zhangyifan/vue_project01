import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */'../views/Home')
const Top = () => import(/* webpackChunkName: "top" */'../views/Top')
const Category = () => import(/* webpackChunkName: "category" */'../views/Category')
const Search = () => import(/* webpackChunkName: "search" */'../views/Search')
const Class = () => import(/* webpackChunkName: "class" */'../views/Class')
const FindNull = () => import(/* webpackChunkName: "404" */'../views/Find404')

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
    path: '/class',
    component: Class
  },
  {
    path: '/404',
    component: FindNull
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
