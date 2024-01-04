<script setup lang="ts">
import AuthLayoutHeader from './AuthLayoutHeader.vue';

// const routeData = inject<IRouteData>('routeData')!;

// watch(
//     routeData,
//     () => {
//         const mainTitle = 'Панель управления';
//         document.title = `${routeData.meta.title ? `${routeData.meta.title} / ` : ''} ${mainTitle}`;
//     },
//     { immediate: true },
// );
</script>

<template>
    <div class="authLayout">
        <AuthLayoutHeader />
        <slot></slot>
    </div>
</template>
