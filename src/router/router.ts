// @ts-ignore
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/home/Home.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
    ],
});

export default router
