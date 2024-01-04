import { RouteMeta, RouteRecordRaw } from 'vue-router';

interface IRouteBreadcrumb {
    title: string;
    url?: string;
}

export interface IAuthRouteMetaPage {
    type: 'page';
}

export interface IAuthRouteMetaModule {
    type: 'module';
}

export type IAuthRouteMeta = IAuthRouteMetaPage | IAuthRouteMetaModule;

export type IAuthRouteRecordRaw = RouteRecordRaw & {
    meta: RouteMeta &
        IAuthRouteMeta & {
            breadcrumb?: IRouteBreadcrumb[];
        };
};

export type INotAuthRouteRecordRaw = RouteRecordRaw & {
    meta?: RouteMeta & {
        breadcrumb?: IRouteBreadcrumb[];
    };
};
