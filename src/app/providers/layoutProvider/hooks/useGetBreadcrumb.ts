import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouterProvider } from '@/shared/lib/injectHooks/useRouterProvider/useRouterProvider';
import { IBreadcrumb } from '../model/types/breadcrumb';
import { getModuleRoutePath } from '@/shared/lib/getters/getModuleRoutePath/getModuleRoutePath';

type IBreadcrumbCanBe = IBreadcrumb | (() => IBreadcrumb);
type ITitleCanBe = string | (() => string);

const processBreadcrumb = (breadcrumb: IBreadcrumbCanBe): IBreadcrumb => (typeof breadcrumb === 'function' ? breadcrumb() : { ...breadcrumb });
const processTitle = (title: ITitleCanBe): string => (typeof title === 'function' ? title() : title);

export const useGetBreadcrumb = () => {
    const { routeData } = useRouterProvider();
    const route = useRoute();
    return computed<IBreadcrumb[]>(() => {
        const result: IBreadcrumb[] = [];

        if (routeData.value.type === 'page' && route.meta.breadcrumb) {
            if (Array.isArray(route.meta.breadcrumb)) {
                route.meta.breadcrumb.forEach((breadcrumb) => {
                    result.push(processBreadcrumb(breadcrumb));
                });
            } else {
                result.push(processBreadcrumb(route.meta.breadcrumb as IBreadcrumbCanBe));
            }
        } else if (routeData.value.type === 'module' && routeData.value.module) {
            const modulePath = getModuleRoutePath(routeData.value.module.data);

            result.push({
                title: routeData.value.module.data.config.title,
                url: modulePath,
            });

            if (routeData.value.module.data.config.routes) {
                let routesItems = routeData.value.module.data.config.routes;
                let url = modulePath;
                routeData.value.module.routes.every((rId) => {
                    if (!routesItems[rId]) {
                        return false;
                    }

                    const { kids, meta, path } = routesItems[rId];
                    if (meta && meta.title) {
                        const title = processTitle(meta.title);
                        url = [url, path].filter((v) => v.length > 0).join('/');

                        result.push({
                            title,
                            url,
                        });
                    }

                    if (kids) {
                        routesItems = kids;
                    }

                    return true;
                });
            }
        }

        return result;
    });
};
