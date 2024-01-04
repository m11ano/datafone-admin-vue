<script setup lang="ts">
import { watch, onBeforeMount, onUnmounted, VNode, RendererNode, RendererElement, inject } from 'vue';
import { useRouter } from 'vue-router';
import { LayoutProvider } from '@/app/providers/layoutProvider';
import { useAddRoutes } from '../hooks/useAddRoutes';
import { useRouterStore } from '../model/store/routerStore';
import FullPageLoader from '@/shared/ui/FullPageLoader/FullPageLoader.vue';
import { sessionUserProviderInjectKey } from '@/injectionKeys';

type RouterViewSlot = {
    Component: VNode<RendererNode, RendererElement, { [key: string]: any }>;
};

const routerStore = useRouterStore();
const router = useRouter();
const {
    data: { isAuth },
} = inject(sessionUserProviderInjectKey)!;
const { addRoutesForNotAuth, addRoutesForAuth } = useAddRoutes();

const refreshRoutes = async (toFirstRoute: boolean) => {
    if (isAuth.value) {
        await addRoutesForAuth(toFirstRoute);
    } else {
        await addRoutesForNotAuth(toFirstRoute);
    }
};

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

        router.afterEach(() => {
            if (loaderTimeout) {
                clearTimeout(loaderTimeout);
            }
            routerStore.setShowLoader(false);
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
