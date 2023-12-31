<script setup lang="ts">
import { inject } from 'vue';

import { type IRouteData } from '@/shared/types/routerProvider/routerProviderTypes';

const routeData = inject<IRouteData>('routeData');
</script>

<template>
    {{ routeData }}
    <div>Восстановление пароля <router-link to="/">Форма авторизации</router-link></div>
</template>
