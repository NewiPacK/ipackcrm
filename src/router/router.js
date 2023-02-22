import Main from "@/pages/Main";
import {createRouter,createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostidPage from "@/pages/PostidPage";

const routes = [
    {
        name: 'main',
        path: '/',
        component: Main
    },
    {
        name: 'posts',
        path: '/posts',
        component: PostPage
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'posts_id',
        path: '/posts/:id',
        component: PostidPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;