import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.css|less$/i,
        use: [
            // 'vue-style-loader',
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        auto: (resPath: string) => Boolean(resPath.includes('.vue')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'less-loader',
        ],
    };
}
