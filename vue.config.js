import * as webpack from "webpack";
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    PACKAGE_VERSION: '"' + version + '"'
                }
            })
        ]
    },
    publicPath: './',
    assetsDir: './',
    // publicPath: process.env.BASE_URL,
    // assetsDir: process.env.BASE_URL,
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.csv$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
}
