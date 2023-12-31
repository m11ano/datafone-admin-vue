<script setup lang="ts">
import Title from 'ant-design-vue/es/typography/Title';
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.mainPage, className)">
        <Title :level="4">Добро пожаловать в админку!</Title>
        <RouterLink to="/gg">GG</RouterLink>
    </div>
</template>

<style lang="less" module>
// @import '~includes.less';
.mainPage {
}
</style>
