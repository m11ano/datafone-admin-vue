export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode?: BuildMode;
    port?: string;
    API_URL?: string;
    URL_PREFIX?: string;
    LIMIT_FILESIZE_MB?: string;
    RECAPTCHA_V2_PUBLIC?: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    urlPrefix: string;
    recaptchaV2Public: string;
    limitFileSizeMb: number;
    project: 'frontend';
}
