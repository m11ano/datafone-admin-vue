<script setup lang="ts">
import classNames from 'classNames';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.[FTName | camelcase], className)"></div>
</template>

<style lang="less" module>
// @import '~includes.less';
.[FTName|camelcase] {
}
</style>
