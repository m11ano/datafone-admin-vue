import { ModuleConfig } from '@/shared/types/module/moduleConfig';
import { MyProfilePage } from './pages/MyProfilePage';
import { MyProfileAccessPage } from './pages/MyProfileAccessPage';

const moduleConfig: ModuleConfig = {
    name: 'myProfile',
    title: 'Мой профиль',
    component: MyProfilePage,
    routes: [
        {
            path: 'access',
            component: MyProfileAccessPage,
            meta: {
                title: 'Доступ к профилю',
            },
            kids: [
                {
                    path: '123',
                    component: MyProfileAccessPage,
                    meta: {
                        title: 'Принудиловка',
                    },
                },
                {
                    path: ':id',
                    component: MyProfileAccessPage,
                    meta: {
                        title: 'Тест хуйни',
                    },
                },
            ],
        },
    ],
};

export default moduleConfig;
