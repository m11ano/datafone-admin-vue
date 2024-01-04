<script setup lang="ts">
import { inject, watch } from 'vue';
import { useRoute } from 'vue-router';
import { NotAuthLayout } from '@/layouts/NotAuthLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { sessionUserProviderInjectKey } from '@/injectionKeys';
import { useGetModulesList } from '../../modulesProvider';

const {
    data: { isAuth },
} = inject(sessionUserProviderInjectKey)!;

const route = useRoute();

const modules = useGetModulesList();

watch(
    route,
    () => {
        const mainTitle = 'Панель управления';
        console.log('REFRESH PAGE');
        document.title = `${route.meta.title ? `${route.meta.title} / ` : ''} ${mainTitle}`;

        if (isAuth.value) {
            if (route.meta.type === 'module' && route.meta.moduleId) {
                const module = modules.find((i) => i.id === route.meta.moduleId);
                console.log(module);
            }
        }
    },
    { immediate: true },
);
</script>

<template>
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
