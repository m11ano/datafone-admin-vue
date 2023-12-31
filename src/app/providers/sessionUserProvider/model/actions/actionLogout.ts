import { logoutRequest } from '../../api/logoutRequest';
import { useSessionUserStore } from '../store/sessionUserStore';
import { ActionLogout } from '../types/actions';

export const actionLogout: ActionLogout = async () => {
    const store = useSessionUserStore();

    try {
        store.setIsLoading(true);
        await logoutRequest();
        store.setSessionUserData(null);
    } catch (e) {
        throw e;
    } finally {
        store.setIsLoading(false);
    }
};
