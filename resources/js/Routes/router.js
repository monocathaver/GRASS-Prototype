import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../Components/Views/LoginView.vue";
import RegistrationView from "../Components/Views/RegistrationView.vue";
import Home from "../Components/Pages/Home.vue";
import NotFound from "../Components/404.vue";

const routes = [
    {
        path: "/",
        component: LoginView,
        name: "login",
    },
    {
        path: "/register",
        component: RegistrationView,
        name: "register",
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/:path(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
