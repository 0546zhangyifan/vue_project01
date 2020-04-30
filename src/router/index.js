import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */'../views/Home')
const Top = () => import(/* webpackChunkName: "top" */'../views/Top')
const Category = () => import(/* webpackChunkName: "category" */'../views/Category')
const Search = () => import(/* webpackChunkName: "search" */'../views/Search')

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
