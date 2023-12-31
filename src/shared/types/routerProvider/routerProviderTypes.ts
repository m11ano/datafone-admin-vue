import { RouteMeta } from 'vue-router';

export interface IRouteData {
    meta: RouteMeta;
}

export interface IAuthRouteMetaPage {
    type: 'page';
}

export interface IAuthRouteMetaModule {
    type: 'module';
}

export type IAuthRouteMeta = IAuthRouteMetaPage | IAuthRouteMetaModule;
