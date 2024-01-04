<script setup lang="ts">
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.myProfileAccessPage, className)">Мой профиль - доступ</div>
</template>

<style lang="less" module>
// @import '~includes.less';
.myProfileAccessPage {
}
</style>
