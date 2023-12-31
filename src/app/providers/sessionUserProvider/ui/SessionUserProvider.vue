<script setup lang="ts">
import { onMounted, onUnmounted, provide, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSessionUserStore } from '../model/store/sessionUserStore';
import { actionInitAuthRequest } from '../model/actions/actionInitAuthRequest';
import { actionLogin } from '../model/actions/actionLogin';
import { actionLogout } from '../model/actions/actionLogout';
import { sessionUserProviderInjectKey } from '@/injectionKeys';

const store = useSessionUserStore();

let timeoutUpdateSession: ReturnType<typeof setTimeout>;

const updateSessionUserData = async () => {
    try {
        const userData = await actionInitAuthRequest();
        store.setSessionUserData(userData);
    } catch (e) {
        console.log('Error on auth init', e);
    }
};

const callTimeoutUpdateSession = async () => {
    if (timeoutUpdateSession) {
        clearTimeout(timeoutUpdateSession);
    }

    if (store.sessionUserData !== null) {
        timeoutUpdateSession = setTimeout(async () => {
            await updateSessionUserData();
        }, 60000 * 15);
    }
};

const storeRefs = storeToRefs(store);

provide(sessionUserProviderInjectKey, {
    actionLogin,
    actionLogout,
    data: {
        isLoading: storeRefs.isLoading,
        sessionUserData: storeRefs.sessionUserData,
        isAuth: storeRefs.isAuth,
    },
});

onMounted(async () => {
    store.setIsLoading(true);
    await updateSessionUserData();
    store.setIsLoading(false);
});

watch(
    () => store.sessionUserData,
    () => {
        callTimeoutUpdateSession();
    },
);

onUnmounted(() => {
    if (timeoutUpdateSession) {
        clearTimeout(timeoutUpdateSession);
    }
});
</script>

<template>
    <template v-if="store.isLoading"><FullPageLoader /></template>
    <template v-else>
        <slot></slot>
    </template>
</template>
