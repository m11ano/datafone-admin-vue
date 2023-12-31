import { RouteRecordRaw, useRouter } from 'vue-router';
import { authRoutes } from '@/shared/config/providers/router/authRoutes';
import { notAuthRoutes } from '@/shared/config/providers/router/notAuthRoutes';

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
        await addRoutes(notAuthRoutes, toFirstRoute);
    };

    const addRoutesForAuth = async (toFirstRoute: boolean = true) => {
        await addRoutes(authRoutes, toFirstRoute);
    };

    return { addRoutesForNotAuth, addRoutesForAuth };
};
