import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ResourcesPage from '../views/ResourcesPage.vue'
import SuggestionsPage from '../views/SuggestionsPage.vue'
import YieldsPage from '../views/YieldsPage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/resources',
        component: ResourcesPage
    },
    {
        path: '/suggestions',
        component: SuggestionsPage
    },
    {
        path: '/yields',
        component: YieldsPage
    },
    {
        path: '/stats',
        component: HomePage
    },
    {
        path: '/eve-materials-lookup/home',
        redirect: '/eve-materials-lookup/'
    },
    {
        path: '/eve-materials-lookup/',
        component: HomePage
    },
    {
        path: '/eve-materials-lookup/resources',
        component: ResourcesPage
    },
    {
        path: '/eve-materials-lookup/suggestions',
        component: SuggestionsPage
    },
    {
        path: '/eve-materials-lookup/yields',
        component: YieldsPage
    },
    {
        path: '/eve-materials-lookup/stats',
        component: HomePage
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
