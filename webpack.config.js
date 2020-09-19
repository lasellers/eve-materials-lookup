// webpack.config.js
// import webpack from 'webpack'
// import path from 'path'

module.exports = {
    module: {
        rules: [
            {
                test: /\.txt$/i,
                use: 'raw-loader',
                loader: 'raw-loader'
            },
            {
                test: /\.csv$/i,
                use: 'raw-loader',
                loader: 'raw-loader'
            }
        ]
    }
}
