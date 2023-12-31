<script setup lang="ts">
import { watch, defineProps, provide, reactive, inject } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { type IRouteData } from '@/shared/types/routerProvider/routerProviderTypes';
import { NotAuthLayout } from '@/layouts/NotAuthLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { sessionUserProviderInjectKey } from '@/injectionKeys';

const {
    data: { isAuth },
} = inject(sessionUserProviderInjectKey)!;

const props = defineProps<{
    meta?: RouteRecordRaw['meta'];
}>();

const routeData = reactive<IRouteData>({
    meta: props.meta || {},
});

provide('routeData', routeData);

watch(
    () => props.meta,
    () => {
        routeData.meta = props.meta || {};
    },
);
</script>

<template>
    <template v-if="routeData.meta.noLayout === true">
        <slot></slot>
    </template>
    <template v-else-if="isAuth">
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
