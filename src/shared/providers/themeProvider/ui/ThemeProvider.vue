<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { ConfigProvider, theme as themeAntd } from 'ant-design-vue';
import ruRU from 'ant-design-vue/locale/ru_RU';
import { Theme, useThemeStore } from '../store/useThemeStore';

const store = useThemeStore();

const updateTheme = () => {
    document.documentElement.dataset.theme = store.theme;
};

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
