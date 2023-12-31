import { Ref } from 'vue';
import { ActionLogin, ActionLogout } from './actions';
import { IAuthUserData } from './iAuthUserData';

export interface SessionUserProviderInject {
    actionLogin: ActionLogin;
    actionLogout: ActionLogout;
    data: {
        isLoading: Readonly<Ref<boolean>>;
        sessionUserData: Readonly<Ref<IAuthUserData | null>>;
        isAuth: Readonly<Ref<boolean>>;
    };
}
