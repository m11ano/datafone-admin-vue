<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { useAuthStore } from '../model/store/useAuthStore';
import { useAuthProvider } from '../hooks/useAuthProvider';

const authStore = useAuthStore();
const authProvider = useAuthProvider();

let timeoutUpdateSession: ReturnType<typeof setTimeout>;

const updateSessionUserData = async () => {
    try {
        const userData = await authProvider.actionInitAuthRequest();
        authStore.setAuthUserData(userData);
    } catch (e) {
        console.log('Error on auth init', e);
    }
};

const callTimeoutUpdateSession = async () => {
    if (timeoutUpdateSession) {
        clearTimeout(timeoutUpdateSession);
    }

    if (authStore.sessionUserData !== null) {
        timeoutUpdateSession = setTimeout(async () => {
            await updateSessionUserData();
        }, 60000 * 15);
    }
};

onMounted(async () => {
    authStore.setIsLoading(true);
    await updateSessionUserData();
    authStore.setIsLoading(false);

    // setTimeout(() => {
    //     authStore.setAuthUserData({
    //         user: {
    //             lastName: '123',
    //             avatarOriginal: null,
    //             avatarThumb100: null,
    //             email: '313',
    //             firstName: '434',
    //             id: 1,
    //             roles: [1],
    //         },
    //         rights: {
    //             'core::access_to_admin': true,
    //             'core::access_to_admin_core_settings': true,
    //         },
    //     });
    // }, 1500);
});

watch(
    () => authStore.sessionUserData,
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
    <slot></slot>
</template>
