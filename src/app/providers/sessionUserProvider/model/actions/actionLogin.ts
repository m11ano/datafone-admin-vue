import { loginRequest } from '../../api/loginRequest';
import { useSessionUserStore } from '../store/sessionUserStore';
import { ActionLogin } from '../types/actions';

export const actionLogin: ActionLogin = async (data) => {
    const store = useSessionUserStore();

    try {
        const userData = await loginRequest(data);
        store.setSessionUserData(userData);
    } catch (e) {
        throw e;
    }
};
