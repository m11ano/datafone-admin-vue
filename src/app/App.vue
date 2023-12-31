<script setup lang="ts">
import { UserSessionProvider } from './providers/sessionUserProvider';
import { ThemeProvider } from './providers/themeProvider';
import { RouterProvider } from './providers/routerProvider';
import { useInitDocWidth } from '@/shared/lib/hooks/useDocWidth';

useInitDocWidth();
</script>

<template>
    <ThemeProvider>
        <UserSessionProvider>
            <RouterProvider />
        </UserSessionProvider>
    </ThemeProvider>
</template>
