import { storeToRefs } from 'pinia';
import { useAuthStore } from '../model/store/useAuthStore';
import { ILoginRequest } from '../model/types/iLoginRequest';
import { loginRequest } from '../api/loginRequest';
import { IAuthUserData } from '../model/types/iAuthUserData';
import { initAuthRequest } from '../api/initAuthRequest';
import { logoutRequest } from '../api/logoutRequest';

export const useAuthProvider = () => {
    const store = useAuthStore();

    const actionLogin = async (data: ILoginRequest): Promise<void> => {
        try {
            const userData = await loginRequest(data);
            store.setAuthUserData(userData);
        } catch (e) {
            throw e;
        }
    };

    const actionLogout = async (): Promise<void> => {
        try {
            store.setIsLoading(true);
            await logoutRequest();
            store.setAuthUserData(null);
        } catch (e) {
            throw e;
        } finally {
            store.setIsLoading(false);
        }
    };

    const actionInitAuthRequest = async (): Promise<IAuthUserData | null> => {
        try {
            const userData = await initAuthRequest();
            return userData;
        } catch (e) {
            throw e;
        }
    };

    return {
        ...storeToRefs(store),
        actionLogin,
        actionLogout,
        actionInitAuthRequest,
    };
};
