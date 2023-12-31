import { RouteRecordRaw } from 'vue-router';
import { MainPage } from '@/pages/MainPage';

export const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: '/gg',
        name: 'mainPagegg',
        component: MainPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        redirect: '/',
    },
];
