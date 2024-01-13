import { TModuleRouteItem } from '@/shared/types/module/moduleConfig';
import { useGetModulesList } from '../../modulesProvider';
import { IAuthRouteRecordRaw } from '../model/types/route';
import ModuleLoaderVue from '../ui/ModuleLoader.vue';
import { getModuleRoutePath } from '@/shared/lib/getters/getModuleRoutePath/getModuleRoutePath';

const buildModuleRouteKids = (route: IAuthRouteRecordRaw, routeItems: TModuleRouteItem[], pathPrefix: string = '', routesPrefix: number[] = []) => {
    routeItems.forEach((routeItem, index) => {
        if (route.children) {
            // const newRouteId = route.children.length;
            const routeToAdd = { ...routeItem };
            delete routeToAdd.kids;
            routeToAdd.path = [pathPrefix, routeToAdd.path].filter((v) => v.length > 0).join('/');
            const routes = [...routesPrefix, index];
            routeToAdd.meta = {
                ...routeToAdd.meta,
                routes,
            };

            route.children.push(routeToAdd);

            if (routeItem.kids) {
                buildModuleRouteKids(route, routeItem.kids, routeToAdd.path, routes);
            }
        }
    });
};

export const buildModulesRoutes = (): IAuthRouteRecordRaw[] => {
    const modulesList = useGetModulesList();
    const list: IAuthRouteRecordRaw[] = [];
    modulesList.forEach((module) => {
        const route: IAuthRouteRecordRaw = {
            path: getModuleRoutePath(module),
            component: ModuleLoaderVue,
            meta: {
                type: 'module',
                moduleId: module.id,
            },
            children: [
                {
                    path: '',
                    name: `${module.type}_${module.config.name}`,
                    component: module.config.component,
                    meta: {
                        routes: [],
                    },
                },
            ],
        };

        if (module.config.routes) {
            buildModuleRouteKids(route, module.config.routes);
        }

        list.push(route);
    });

    return list;
};
