import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { VueLoaderPlugin } from 'vue-loader';

import { type BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl, project, urlPrefix, recaptchaV2Public, limitFileSizeMb }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            inject: false,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __APP_URL_PREFIX__: JSON.stringify(urlPrefix),
            __PROJECT__: JSON.stringify(project),
            __RECAPTCHA_V2_PUBLIC__: JSON.stringify(recaptchaV2Public),
            __LIMIT_FILESIZE_MB__: JSON.stringify(limitFileSizeMb),
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        }),
        // new ForkTsCheckerWebpackPlugin({
        //     typescript: {
        //         diagnosticOptions: {
        //             semantic: true,
        //             syntactic: true,
        //         },
        //         mode: 'write-references',
        //         extensions: {
        //             vue: {
        //                 enabled: true,
        //                 compiler: '@vue/compiler-sfc'
        //             },
        //         },
        //     },
        // }),
        new VueLoaderPlugin(),
    ];

    if (isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
        // plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
        );
    }

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        );
    }

    return plugins;
}
