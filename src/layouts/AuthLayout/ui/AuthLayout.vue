<script setup lang="ts">
import AuthLayoutHeader from './AuthLayoutHeader.vue';
</script>

<template>
    <div class="authLayout">
        <AuthLayoutHeader />
        <slot></slot>
    </div>
</template>
