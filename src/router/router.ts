// @ts-ignore
import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About.vue'
import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/login', component: Login},
    ],
});

export default router
