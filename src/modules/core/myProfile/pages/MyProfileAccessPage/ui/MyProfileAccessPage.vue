<script setup lang="ts">
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.myProfileAccessPage, className)">
        Мой профиль - доступ
        <RouterLink to="/myProfile/">маин</RouterLink>
        !
        <RouterLink to="/myProfile/access">доступ</RouterLink>
        !
        <RouterLink to="/myProfile/access/12">субкид</RouterLink>
    </div>
</template>

<style lang="less" module>
// @import '~includes.less';
.myProfileAccessPage {
}
</style>
