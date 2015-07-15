var webpack = require('webpack');
module.exports = {
    //entry: [
    //    'webpack/hot/only-dev-server', "./js/Application.js"
    //],
    entry: {
        app: ["webpack/hot/dev-server", "./js/Application.js"]
    },
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};