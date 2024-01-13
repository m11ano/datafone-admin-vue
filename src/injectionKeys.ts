import { InjectionKey } from 'vue';
import { SessionUserProviderInject } from './app/providers/sessionUserProvider/model/types/inject';
import { ThemeProviderInject } from './app/providers/themeProvider/model/types/inject';
import { RouterProviderInject } from './app/providers/routerProvider/model/types/inject';

export const themeProviderInjectKey: InjectionKey<ThemeProviderInject> = Symbol('themeProvider');
export const sessionUserProviderInjectKey: InjectionKey<SessionUserProviderInject> = Symbol('sessionUserProvider');
export const routerProviderInjectKey: InjectionKey<RouterProviderInject> = Symbol('routerProvider');
