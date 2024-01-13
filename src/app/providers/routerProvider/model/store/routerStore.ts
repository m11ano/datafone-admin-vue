import { defineStore } from 'pinia';
import { RouteData } from '../types/route';

interface RouterStore {
    showLoader: boolean;
    isProcessFuncsInited: boolean;
    routeData: RouteData;
}

export const useRouterStore = defineStore('router', {
    state: (): RouterStore => ({
        showLoader: true,
        isProcessFuncsInited: false,
        routeData: {
            type: 'page',
        },
    }),
    actions: {
        setShowLoader(value: boolean) {
            this.showLoader = value;
        },
        setProcessFuncsInited() {
            this.isProcessFuncsInited = true;
        },
        setRouteData(routeData: RouteData) {
            this.routeData = routeData;
        },
    },
});
