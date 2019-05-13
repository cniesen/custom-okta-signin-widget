const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/script.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src/static',
        port: 3000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};