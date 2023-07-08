import MainLayout from "./layout/MainLayout.vue";
import Login from "./pages/user/Login.vue";
import Register from "./pages/user/Register.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'MainLayout',
        component: MainLayout,
        path: '/'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Register',
        component: Register,
        path: '/register'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router