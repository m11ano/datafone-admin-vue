import { LoginPage } from '@/pages/LoginPage';
import { RecoverPasswordPage } from '@/pages/RecoverPasswordPage';
import { INotAuthRouteRecordRaw } from '../model/types/route';

export const notAuthRoutes: Array<INotAuthRouteRecordRaw> = [
    {
        path: '/',
        name: 'loginPage',
        component: LoginPage,
        meta: {
            breadcrumb: [
                {
                    title: 'Авторизация',
                },
            ],
        },
    },
    {
        path: '/recover-password',
        name: 'recoverPasswordPage',
        component: RecoverPasswordPage,
        meta: {
            breadcrumb: [
                {
                    title: 'Восстановление пароля',
                },
            ],
        },
    },
];
