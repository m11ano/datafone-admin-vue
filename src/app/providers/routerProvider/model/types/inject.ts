import { Ref } from 'vue';
import { RouteData } from './route';

export interface RouterProviderInject {
    routeData: Readonly<Ref<RouteData>>;
}
