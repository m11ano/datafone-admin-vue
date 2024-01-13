import { RouteMeta, RouteRecordRaw } from 'vue-router';
import { ModulesListItem } from '@/app/providers/modulesProvider/model/types/modules';

interface IRouteBreadcrumb {
    title: string;
    url?: string;
}

type IRouteBreadcrumbItem = IRouteBreadcrumb | (() => IRouteBreadcrumb);

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
            breadcrumb?: Array<IRouteBreadcrumbItem> | IRouteBreadcrumbItem;
        };
};

export type INotAuthRouteRecordRaw = RouteRecordRaw & {
    meta?: RouteMeta & {
        breadcrumb?: Array<IRouteBreadcrumbItem> | IRouteBreadcrumbItem;
    };
};

export interface RouteData {
    type: IAuthRouteMeta['type'];
    module?: {
        data: ModulesListItem;
        routes: number[];
    };
}
