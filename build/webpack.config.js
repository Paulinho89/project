const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', // 区分环境
    entry: path.resolve(__dirname, '../src/main.js'), // 入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash:6].js',
        publicPath: '/'
    }, 
    module: { // 定义处理的loader
        rules: [ 
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },   
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                loaders: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 8192,
                    outputPath: 'img/',
                    name: '[name]-[hash:6].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}