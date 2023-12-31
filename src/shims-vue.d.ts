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

type DeepReadonly<T> = Readonly<{
    [K in keyof T]: // Is it a primitive? Then make it readonly
    T[K] extends number | string | symbol
        ? Readonly<T[K]>
        : // Is it an array of items? Then make the array readonly and the item as well
          T[K] extends Array<infer A>
          ? Readonly<Array<DeepReadonly<A>>>
          : // It is some other object, make it readonly as well
            DeepReadonly<T[K]>;
}>;
