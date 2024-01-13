import { RouteRecordRaw, useRouter } from 'vue-router';
import { notAuthRoutes } from '../config/notAuthRoutes';
import { authRoutes } from '../config/authRoutes';
import { buildModulesRoutes } from '../lib/buildModulesRoutes';
import { NotFoundPage } from '@/pages/NotFoundPage';

let removeFuncs: (() => void)[] = [];

export const useAddRoutes = () => {
    const router = useRouter();

    const addRoutes = async (routes: Array<RouteRecordRaw>, toFirstRoute: boolean) => {
        removeFuncs.forEach((f) => {
            f();
        });
        removeFuncs = [];

        routes.forEach((route) => {
            const rmF = router.addRoute(route);
            removeFuncs.push(rmF);
        });

        if (toFirstRoute && routes.length > 0) {
            await router.push(routes[0]);
        } else {
            await router.push(router.currentRoute.value.path);
        }
    };

    const addRoutesForNotAuth = async (toFirstRoute: boolean = true) => {
        await addRoutes(
            [
                ...notAuthRoutes,
                {
                    path: '/:pathMatch(.*)*',
                    name: '404',
                    redirect: '/',
                },
            ],
            toFirstRoute,
        );
    };

    const addRoutesForAuth = async (toFirstRoute: boolean = true) => {
        await addRoutes(
            [
                ...authRoutes,
                ...buildModulesRoutes(),
                {
                    path: '/:pathMatch(.*)*',
                    name: '404',
                    component: NotFoundPage,
                    meta: {
                        type: 'page',
                    },
                },
            ],
            toFirstRoute,
        );
    };

    return { addRoutesForNotAuth, addRoutesForAuth };
};
