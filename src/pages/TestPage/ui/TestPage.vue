<script setup lang="ts">
import Title from 'ant-design-vue/es/typography/Title';
import classNames from 'classNames';
import { useRoute } from 'vue-router';

defineProps<{
    className?: string;
}>();

const route = useRoute();

console.log(route);
</script>

<template>
    {{ route }}
    <div :class="classNames($style.mainPage, className)">
        <Title :level="4">Тест страница</Title>
        <RouterLink to="/gg">GG</RouterLink>
    </div>
</template>

<style lang="less" module>
// @import '~includes.less';
.mainPage {
}
</style>
