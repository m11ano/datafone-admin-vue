import { defineStore } from 'pinia';
import { IBreadcrumb } from '../types/breadcrumb';

interface LayoutStore {
    extraBreadcrumb: IBreadcrumb[];
    replacementBreadcrumb: IBreadcrumb[];
}

export const useLayoutStore = defineStore('layout', {
    state: (): LayoutStore => ({
        extraBreadcrumb: [],
        replacementBreadcrumb: [],
    }),
    actions: {
        setExtraBreadcrumb(breadcrumb: IBreadcrumb[]) {
            this.extraBreadcrumb = breadcrumb;
        },
        setReplacementBreadcrumb(breadcrumb: IBreadcrumb[]) {
            this.replacementBreadcrumb = breadcrumb;
        },
    },
});
