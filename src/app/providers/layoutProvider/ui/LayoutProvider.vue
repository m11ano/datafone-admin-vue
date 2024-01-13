<script setup lang="ts">
import { inject, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NotAuthLayout } from '@/layouts/NotAuthLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { sessionUserProviderInjectKey } from '@/injectionKeys';
import { useRouterProvider } from '@/shared/lib/injectHooks/useRouterProvider/useRouterProvider';
import { useGetBreadcrumb } from '../hooks/useGetBreadcrumb';
import { useLayoutStore } from '../model/store/layoutStore';

const {
    data: { isAuth },
} = inject(sessionUserProviderInjectKey)!;

const router = useRouter();
const route = useRoute();
const layoutStore = useLayoutStore();
const { routeData } = useRouterProvider();

const breadcrumb = useGetBreadcrumb();

router.afterEach(() => {
    layoutStore.setExtraBreadcrumb([]);
    layoutStore.setReplacementBreadcrumb([]);
});

watch(
    route,
    () => {
        const mainTitle = 'Панель управления';
        const titles = [...breadcrumb.value].reverse().map((item) => item.title);
        titles.push(mainTitle);
        document.title = titles.join(' / ');
    },
    { immediate: true },
);
</script>

<template>
    {{ breadcrumb }}
    <template v-if="isAuth">
        <AuthLayout>
            <slot></slot>
        </AuthLayout>
    </template>
    <template v-else>
        <NotAuthLayout>
            <slot></slot>
        </NotAuthLayout>
    </template>
</template>
@/shared/lib/hooks/useRouterProvider/useRouterProvider
