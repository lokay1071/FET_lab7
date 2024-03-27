const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index.html",
            template: path.resolve(__dirname, "src/pages/index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            title: "schedule.html",
            template: path.resolve(__dirname, "src/pages/schedule.html"),
            filename: "schedule.html",
        }),
        new HtmlWebpackPlugin({
            title: "photo.html",
            template: path.resolve(__dirname, "src/pages/photo.html"),
            filename: "photo.html",
        }),
        new HtmlWebpackPlugin({
            title: "news.html",
            template: path.resolve(__dirname, "src/pages/news.html"),
            filename: "news.html",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/images/"),
                    to: "assets/images",
                },
            ],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
    },
};
