<script setup lang="ts">
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.notFoundPage, className)">Страница не найдена!</div>
</template>

<style lang="less" module>
// @import '~includes.less';
.notFoundPage {
}
</style>
