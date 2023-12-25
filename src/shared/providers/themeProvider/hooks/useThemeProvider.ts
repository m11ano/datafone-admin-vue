import { storeToRefs } from 'pinia';
import { Theme, useThemeStore } from '../store/useThemeStore';

export const useThemeProvider = () => {
    const store = useThemeStore();

    const toogleTheme = () => {
        store.setTheme(store.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    return {
        ...storeToRefs(store),
        toogleTheme,
    };
};
