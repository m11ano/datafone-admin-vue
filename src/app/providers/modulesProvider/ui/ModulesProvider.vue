<script setup lang="ts">
import { useBuildModulesList } from '../hooks/useModulesList';

useBuildModulesList();
</script>

<template>
    <slot></slot>
</template>
