import { defineStore } from 'pinia';
import { LOCAL_STORAGE_THEME_KEY } from '../const/const';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeStoreState {
    theme: Theme;
}

const storageValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const initState: ThemeStoreState = {
    theme: storageValue && Object.values(Theme).includes(storageValue) ? storageValue : Theme.LIGHT,
};

export const useThemeStore = defineStore('theme', {
    state: () => initState,
    actions: {
        setTheme(theme: ThemeStoreState['theme']) {
            this.theme = theme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        },
    },
});
