import { defineStore } from 'pinia';

export const useRouterStore = defineStore('router', {
    state: () => ({
        showLoader: true,
        isProcessFuncsInited: false,
    }),
    actions: {
        setShowLoader(value: boolean) {
            this.showLoader = value;
        },
        setProcessFuncsInited() {
            this.isProcessFuncsInited = true;
        },
    },
});
