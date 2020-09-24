import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import YieldsPage from '../views/YieldsPage.vue'
import SuggestionsPage from '../views/SuggestionsPage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/yields',
    component: YieldsPage
  },
  {
    path: '/suggestions',
    component: SuggestionsPage
  },
  {
    path: '/*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
