import { Theme, useThemeStore } from '../store/useThemeStore';
import { ActionSetTheme } from '../types/actions';

export const setTheme: ActionSetTheme = (value: Theme) => {
    const store = useThemeStore();
    store.setTheme(value);
};
