var webpack = require('webpack');

module.exports = {
    output: {
        path: './dist'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'latest',
                        'stage-0',
                        'react'
                    ],
                    plugins: [
                        'transform-react-remove-prop-types',
                        'transform-react-constant-elements'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            sourceMap: true,
            mangle: true,
            minimize: true
        })
    ]
};

