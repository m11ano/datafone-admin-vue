import { inject } from 'vue';
import { sessionUserProviderInjectKey } from '@/injectionKeys';

export const useSessionUserProvider = () => inject(sessionUserProviderInjectKey)!;
