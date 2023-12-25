import { defineStore } from 'pinia';
import { IAuthUserData } from '../types/iAuthUserData';

interface AuthStoreState {
    isLoading: boolean;
    sessionUserData: IAuthUserData | null;
}

const initState: AuthStoreState = {
    isLoading: true,
    // isAuth: false,
    sessionUserData: null,
};

export const useAuthStore = defineStore('auth', {
    state: () => initState,
    actions: {
        setIsLoading(value: boolean) {
            this.isLoading = value;
        },
        setAuthUserData(data: AuthStoreState['sessionUserData']) {
            this.sessionUserData = data;
        },
    },
    getters: {
        isAuth: (state) => state.sessionUserData !== null,
    },
});
