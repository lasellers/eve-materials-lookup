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
    },
}
