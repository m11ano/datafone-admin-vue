import { useGetModulesList } from '../../modulesProvider';
import { IAuthRouteRecordRaw } from '../model/types/route';
import ModuleLoaderVue from '../ui/ModuleLoader.vue';

export const buildModulesRoutes = (): IAuthRouteRecordRaw[] => {
    const modulesList = useGetModulesList();
    const list: IAuthRouteRecordRaw[] = [];
    modulesList.forEach((module) => {
        list.push({
            path: `/${module.type === 'core' ? '' : 'module/'}${module.config.name}`,
            name: `${module.type}_${module.config.name}`,
            component: ModuleLoaderVue,
            meta: {
                type: 'module',
                moduleId: module.id,
            },
            children: [
                {
                    path: '',
                    name: `${module.config.name}`,
                    component: module.config.component,
                },
            ],
        });
    });

    return list;
};
