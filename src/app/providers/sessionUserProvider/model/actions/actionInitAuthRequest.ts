import { initAuthRequest } from '../../api/initAuthRequest';
import { ActionInitAuthRequest } from '../types/actions';

export const actionInitAuthRequest: ActionInitAuthRequest = async () => {
    try {
        const userData = await initAuthRequest();
        return userData;
    } catch (e) {
        throw e;
    }
};
