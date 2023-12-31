import { RouteRecordRaw } from 'vue-router';
import { LoginPage } from '@/pages/LoginPage';
import { RecoverPasswordPage } from '@/pages/RecoverPasswordPage';

export const notAuthRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'loginPage',
        component: LoginPage,
        meta: {
            title: 'Авторизация',
        },
    },
    {
        path: '/recover-password',
        name: 'recoverPasswordPage',
        component: RecoverPasswordPage,
        meta: {
            title: 'Восстановление пароля',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        redirect: '/',
    },
];
