const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/main.js',//入口
    output: {
        path: path.resolve(__dirname, 'dist'),//出口
        filename:'bundle.js'//出口文件名字
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./public/index.html'
    })],
    devServer: {
        //yarn serve 自动打开浏览器
        open: true,
        //0-65535
        port: 52525
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
}