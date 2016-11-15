const webpack = require('webpack');


module.exports = {
    entry: './src/app.jsx',
    output: {
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            }
        ]
    }
}