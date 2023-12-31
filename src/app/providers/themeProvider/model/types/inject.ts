import { Ref } from 'vue';
import { Theme } from '../store/useThemeStore';
import { ActionSetTheme } from './actions';

export interface ThemeProviderInject {
    setTheme: ActionSetTheme;
    theme: Readonly<Ref<Theme>>;
    enumTheme: Readonly<typeof Theme>;
}
