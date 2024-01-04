import { MainPage } from '@/pages/MainPage';
import { IAuthRouteRecordRaw } from '../model/types/route';

export const authRoutes: Array<IAuthRouteRecordRaw> = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage,
        meta: {
            type: 'page',
            breadcrumb: [
                {
                    title: 'Добро пожаловать',
                },
            ],
        },
    },
    {
        path: '/gg',
        name: 'mainPagegg',
        component: MainPage,
        meta: {
            type: 'page',
        },
    },
];
