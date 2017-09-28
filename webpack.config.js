var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: [
        './src/script.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'stage-1'],
                    plugins: ['babel-plugin-add-module-exports']
                }
            },
            {test: /\.json$/, use: [{loader: 'json-loader'}]},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: [{loader: 'file-loader'}]},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: 'url-loader?limit=10000&mimetype=application/font-woff'}]},
            {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: [{loader: 'url-loader?limit=10000&mimetype=application/octet-stream'}]},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}]},
            {test: /\.(jpe?g|png|gif)$/i, use: [{loader: 'file-loader?name=[name].[ext]'}]},
            {test: /(\.css|\.scss|\.sass)$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'postcss-loader', options: {plugins: function() {return [autoprefixer]}}}, {loader: 'sass-loader'}]}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
