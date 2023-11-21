import { createWebHistory,createRouter } from 'vue-router'
import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage.vue'
import infoPage from '../pages/About.vue'
import PostIdPage from '../pages/PostIdPage.vue'

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
    {
        path: '/post/:id',
        component: PostIdPage
    },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})



  export default router;