/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*.less' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __APP_URL_PREFIX__: string;
declare const __RECAPTCHA_V2_PUBLIC__: string;
declare const __PROJECT__: 'storybook' | 'jest' | 'frontend';
declare const __LIMIT_FILESIZE_MB__: number;
