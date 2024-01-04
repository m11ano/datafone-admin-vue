<script setup lang="ts">
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.myProfilePage, className)">Мой профиль</div>
</template>

<style lang="less" module>
// @import '~includes.less';
.myProfilePage {
}
</style>
