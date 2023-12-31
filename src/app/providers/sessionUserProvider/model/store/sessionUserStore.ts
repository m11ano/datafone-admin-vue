import { defineStore } from 'pinia';
import { IAuthUserData } from '../types/iAuthUserData';

interface SessionUserStoreState {
    isLoading: boolean;
    sessionUserData: IAuthUserData | null;
}

const initState: SessionUserStoreState = {
    isLoading: true,
    // isAuth: false,
    sessionUserData: null,
};

export const useSessionUserStore = defineStore('sessionUser', {
    state: () => initState,
    actions: {
        setIsLoading(value: boolean) {
            this.isLoading = value;
        },
        setSessionUserData(data: SessionUserStoreState['sessionUserData']) {
            this.sessionUserData = data;
        },
    },
    getters: {
        isAuth: (state) => state.sessionUserData !== null,
    },
});
