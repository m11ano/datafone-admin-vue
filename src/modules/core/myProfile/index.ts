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
        },
    ],
};

export default moduleConfig;
