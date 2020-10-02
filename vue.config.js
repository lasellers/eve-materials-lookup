process.env.VUE_APP_VERSION = require('./package.json').version

console.log('VUE config js')
module.exports = {
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
        config.performance
            .maxEntrypointSize(1700000)
            .maxAssetSize(13000000)
    },
}
