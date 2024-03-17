import { createRouter, createWebHistory } from "vue-router";
import Home from "../Components/Pages/Home.vue";
import NotFound from "../Components/404.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/:path(.*)",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;


