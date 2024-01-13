import { inject } from 'vue';
import { themeProviderInjectKey } from '@/injectionKeys';

export const useThemeProvider = () => inject(themeProviderInjectKey)!;
