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
        path: '/eve-materials-lookup/',
        redirect: '/eve-materials-lookup/home'
    },
    {
        path: '/eve-materials-lookup/home',
        component: HomePage
    },
    {
        path: '/eve-materials-lookup/yields',
        component: YieldsPage
    },
    {
        path: '/eve-materials-lookup/suggestions',
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
