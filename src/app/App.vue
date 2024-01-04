<script setup lang="ts">
import { ModulesProvider } from './providers/modulesProvider';
import { UserSessionProvider } from './providers/sessionUserProvider';
import { ThemeProvider } from './providers/themeProvider';
import { RouterProvider } from './providers/routerProvider';
import { useInitDocWidth } from '@/shared/lib/hooks/useDocWidth';

useInitDocWidth();
</script>

<template>
    <ThemeProvider>
        <ModulesProvider>
            <UserSessionProvider>
                <RouterProvider />
            </UserSessionProvider>
        </ModulesProvider>
    </ThemeProvider>
</template>
