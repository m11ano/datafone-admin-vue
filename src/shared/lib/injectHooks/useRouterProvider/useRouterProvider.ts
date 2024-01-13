import { inject } from 'vue';
import { routerProviderInjectKey } from '@/injectionKeys';

export const useRouterProvider = () => inject(routerProviderInjectKey)!;
