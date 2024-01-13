import { RouteComponent, RouteRecordRaw } from 'vue-router';

type IRouteTitleItem = string | (() => string);

type TModuleRoute = RouteRecordRaw & {
    meta?: {
        title?: IRouteTitleItem;
    };
};

export type TModuleRouteItem = TModuleRoute & {
    kids?: TModuleRouteItem[];
};

type Lazy<T> = () => Promise<T>;

export interface ModuleConfig {
    name: string;
    title: string;
    component: RouteComponent | Lazy<RouteComponent>;
    routes?: TModuleRouteItem[];
}
