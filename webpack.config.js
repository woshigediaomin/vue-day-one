const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/main.js',//入口
    output: {
        path: path.resolve(__dirname, 'dist'),//出口
        filename: 'bundle.js'//出口文件名字
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
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
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                        // 配置limit, 超过2k, 不转, file-loader复制, 随机名, 输出文件
                        options: {
                            limit: 2 * 1024,
                        },
                    },
                ],
            }
        ]
    }
}