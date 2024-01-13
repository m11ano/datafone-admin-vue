<script setup lang="ts">
import { watch, onBeforeMount, onUnmounted, VNode, RendererNode, RendererElement, provide } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { LayoutProvider } from '@/app/providers/layoutProvider';
import { useAddRoutes } from '../hooks/useAddRoutes';
import { useRouterStore } from '../model/store/routerStore';
import FullPageLoader from '@/shared/ui/FullPageLoader/FullPageLoader.vue';
import { useSessionUserProvider } from '@/shared/lib/injectHooks/useSessionUserProvider/useSessionUserProvider';
import { routerProviderInjectKey } from '@/injectionKeys';
import { useGetModulesList } from '../../modulesProvider';
import { RouteData } from '../model/types/route';

type RouterViewSlot = {
    Component: VNode<RendererNode, RendererElement, { [key: string]: any }>;
};

const routerStore = useRouterStore();
const router = useRouter();
const {
    data: { isAuth },
} = useSessionUserProvider();
const { addRoutesForNotAuth, addRoutesForAuth } = useAddRoutes();

const modules = useGetModulesList();

const refreshRoutes = async (toFirstRoute: boolean) => {
    if (isAuth.value) {
        await addRoutesForAuth(toFirstRoute);
    } else {
        await addRoutesForNotAuth(toFirstRoute);
    }
};

const storeRefs = storeToRefs(routerStore);

provide(routerProviderInjectKey, {
    routeData: storeRefs.routeData,
});

let loaderTimeout: ReturnType<typeof setTimeout>;

onBeforeMount(async () => {
    refreshRoutes(false);

    if (routerStore.isProcessFuncsInited === false) {
        router.beforeEach((to, from, next) => {
            loaderTimeout = setTimeout(() => {
                routerStore.setShowLoader(true);
            }, 1);
            next();
        });

        router.afterEach((route) => {
            if (loaderTimeout) {
                clearTimeout(loaderTimeout);
            }
            routerStore.setShowLoader(false);

            const routeData: RouteData = {
                type: 'page',
            };

            if (isAuth.value && route.meta.type === 'module' && route.meta.moduleId) {
                routeData.type = 'module';
                const moduleData = modules.find((i) => i.id === route.meta.moduleId);
                if (moduleData) {
                    const routes: number[] = [];
                    if (route.meta.routes) {
                        routes.push(...(route.meta.routes as Array<number>).map((v) => Number(v)));
                    }

                    routeData.module = {
                        data: moduleData,
                        routes,
                    };
                }
            }

            routerStore.setRouteData(routeData);
        });

        routerStore.setProcessFuncsInited();
    }
});

watch(isAuth, () => {
    refreshRoutes(true);
});

onUnmounted(() => {
    if (loaderTimeout) {
        clearTimeout(loaderTimeout);
    }
});
</script>

<template>
    <RouterView v-slot="{ Component }: RouterViewSlot">
        <FullPageLoader v-if="routerStore.showLoader" />
        <LayoutProvider v-else>
            <component :is="Component" />
        </LayoutProvider>
    </RouterView>
</template>
@/shared/lib/hooks/useSessionUserProvider/useSessionUserProvider
