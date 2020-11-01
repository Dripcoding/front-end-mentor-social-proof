const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './',
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                loader: 'file=loader',
                options: {
                    name: '[path][name][contenthash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            filename: 'main.js',
            hash: true,
            path: path.resolve(__dirname, "dist"),
            scriptLoading: 'defer',
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    }
}