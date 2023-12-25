import path from 'path';
import dotenv from 'dotenv';
import type webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/webpack/types/config';

dotenv.config({ path: './.env' });

export default (clienv: BuildEnv) => {
    const env: BuildEnv = { ...clienv, ...process.env };

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode === 'production' ? 'production' : 'development';
    const isDev = mode === 'development';
    const port = env.port ? Number(env.port) : 3000;
    const apiUrl = env.API_URL || 'http://127.0.0.1:5000/api';
    const urlPrefix = env.URL_PREFIX || '/';
    const recaptchaV2Public = env.RECAPTCHA_V2_PUBLIC || '/';
    const limitFileSizeMb = env.LIMIT_FILESIZE_MB ? Number(env.LIMIT_FILESIZE_MB) : 1;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        urlPrefix,
        recaptchaV2Public,
        project: 'frontend',
        limitFileSizeMb,
    });

    return config;
};
