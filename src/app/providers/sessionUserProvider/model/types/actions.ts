import { IAuthUserData } from './iAuthUserData';
import { ILoginRequest } from './iLoginRequest';

export type ActionInitAuthRequest = () => Promise<IAuthUserData | null>;
export type ActionLogin = (data: ILoginRequest) => Promise<void>;
export type ActionLogout = () => Promise<void>;
