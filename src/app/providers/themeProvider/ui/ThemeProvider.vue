<script setup lang="ts">
import { onMounted, provide, watch } from 'vue';
import { ConfigProvider, theme as themeAntd } from 'ant-design-vue';
import ruRU from 'ant-design-vue/locale/ru_RU';
import { storeToRefs } from 'pinia';
import { Theme, useThemeStore } from '../model/store/useThemeStore';
import { themeProviderInjectKey } from '@/injectionKeys';
import { setTheme } from '../model/actions/setTheme';

const store = useThemeStore();

const updateTheme = () => {
    document.documentElement.dataset.theme = store.theme;
};

const storeRefs = storeToRefs(store);

provide(themeProviderInjectKey, {
    enumTheme: Theme,
    setTheme,
    theme: storeRefs.theme,
});

onMounted(() => {
    updateTheme();
});

watch(
    () => store.theme,
    () => {
        updateTheme();
    },
);
</script>

<template>
    <ConfigProvider
        :locale="ruRU"
        :theme="{
            algorithm: store.theme === Theme.DARK ? themeAntd.darkAlgorithm : themeAntd.defaultAlgorithm,
        }"
    >
        <slot></slot>
    </ConfigProvider>
</template>
../model/store/useThemeStore
