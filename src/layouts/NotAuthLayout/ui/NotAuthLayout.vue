<script setup lang="ts">
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
    <div class="notAuthLayout">
        <slot></slot>
    </div>
</template>
