const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                }
            }
        ]   
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'defer',
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css"
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    }
}