import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Empty from './ui/Empty.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Empty,
    },
];

export const router = createRouter({
    history: createWebHistory(__APP_URL_PREFIX__),
    routes,
});

// setTimeout(() => {
//     router.addRoute({
//         path: '/',
//         name: 'home',
//         component: LoginPage,
//     });

//     console.log('Добавлен маршрут');
// }, 1000);
