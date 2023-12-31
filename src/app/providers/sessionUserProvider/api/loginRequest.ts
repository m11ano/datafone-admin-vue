import { $api } from '@/shared/api/api';
import { IAuthUserData } from '../model/types/iAuthUserData';
import { ILoginRequest } from '../model/types/iLoginRequest';

export const loginRequest = async (data: ILoginRequest): Promise<IAuthUserData> => {
    try {
        const result = await $api.post<IAuthUserData>('auth/admin/login', data);

        return result.data;
    } catch (e: unknown) {
        throw e;
    }
};
