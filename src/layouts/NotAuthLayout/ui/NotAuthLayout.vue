<script setup lang="ts">
import { watch, onMounted, inject } from 'vue';
import { type IRouteData } from '@/shared/types/router/routeTypes';

const routeData = inject<IRouteData>('routeData');

const updateTitle = () => {
    const mainTitle = 'Панель управления';
    document.title = `${routeData && routeData.meta.title ? `${routeData.meta.title} / ` : ''} ${mainTitle}`;
};

onMounted(() => {
    updateTitle();
});

watch(
    () => routeData?.meta,
    () => {
        updateTitle();
    },
);
</script>

<template>
    <div class="notAuthLayout">
        <slot></slot>
    </div>
</template>
