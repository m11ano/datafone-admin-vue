<script setup lang="ts">
import { AuthProvider, useAuthProvider } from '@/shared/providers/authProvider';
import { ThemeProvider } from '@/shared/providers/themeProvider';
import FullPageLoader from '@/shared/ui/FullPageLoader/FullPageLoader.vue';
import { RouterProvider } from './router';

const { isLoading } = useAuthProvider();
</script>

<template>
    <ThemeProvider>
        <AuthProvider>
            <template v-if="isLoading"><FullPageLoader /></template>
            <template v-else>
                <RouterProvider />
            </template>
        </AuthProvider>
    </ThemeProvider>
</template>
