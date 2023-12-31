import { onBeforeMount, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useDocWidthStore } from './model/store/docWidthStore';
import { breakpoints } from '@/shared/config/app/breakpoints';
import { Breakpoint } from './model/types/types';

export const useInitDocWidth = () => {
    const store = useDocWidthStore();

    const { width } = useWindowSize();
    store.setWidth(width.value);

    const fillStoreValues = () => {
        Object.entries(breakpoints).forEach(([bp, bpWidth]) => {
            store.setValue('>', bp as Breakpoint, bpWidth > width.value);
            store.setValue('>=', bp as Breakpoint, bpWidth >= width.value);
            store.setValue('<', bp as Breakpoint, bpWidth < width.value);
            store.setValue('<=', bp as Breakpoint, bpWidth <= width.value);
        });
    };

    watch(width, () => {
        fillStoreValues();
        store.setWidth(width.value);
    });

    onBeforeMount(() => {
        fillStoreValues();
    });
};
