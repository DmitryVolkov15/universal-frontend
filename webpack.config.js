const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = (env) => {
    return {
        mode: env.mode || "development",
        entry: path.resolve(__dirname, 'src', 'test.js'),
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'public'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: "[name][contenthash].css",
            }),
            new webpack.ProgressPlugin(),
        ],

        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        env.mode ? MiniCssExtractPlugin.loader : 'style-loader',
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
        devServer: {
            port: 8000,
            open: true,
            static: path.join(__dirname, 'src'),
        },
    }
};