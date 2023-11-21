import { createWebHistory,createRouter } from 'vue-router'
import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage.vue'
import infoPage from '../pages/About.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/about',
        component: infoPage
    },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})



  export default router;