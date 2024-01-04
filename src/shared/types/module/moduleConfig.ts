import { RouteComponent, RouteRecordRaw } from 'vue-router';

interface RouteBreadcrumb {
    title: string;
    url?: string;
}

type ModuleRoute = RouteRecordRaw & {
    meta?: {
        breadcrumb?: RouteBreadcrumb;
    };
};

type ModuleRouteItem = ModuleRoute & {
    kids?: ModuleRouteItem[];
};

type Lazy<T> = () => Promise<T>;

export interface ModuleConfig {
    name: string;
    title: string;
    component: RouteComponent | Lazy<RouteComponent>;
    routes?: ModuleRouteItem[];
    breadcrumb?: RouteBreadcrumb | (() => RouteBreadcrumb);
}
