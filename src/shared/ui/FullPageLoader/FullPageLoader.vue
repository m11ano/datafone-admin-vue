<script setup lang="ts">
import classNames from 'classNames';
import Loader from '@/shared/ui/Loader/Loader.vue';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.fullPageLoader, className)">
        <Loader />
    </div>
</template>

<style lang="less" module>
.fullPageLoader {
    display: flex;
    height: 100vh;
    height: 100dvh;
    align-items: center;
    justify-content: center;
}
</style>
