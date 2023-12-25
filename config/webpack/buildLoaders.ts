import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
// import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    // const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(options.isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // transpileOnly: true,
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ],
        exclude: /node_modules/,
    };

    const vueLoader = {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
    };

    return [
        vueLoader,
        fileLoader,
        // codeBabelLoader,
        // tsxCodeBabelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
