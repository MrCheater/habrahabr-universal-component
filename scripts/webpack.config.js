var webpack = require('webpack');

var preactCompat = 'preactCompat';

module.exports = {
    entry: './src/DonutChart.js',
    output: {
        path: './dist',
        filename: 'DonutChart.js',
        library : 'DonutChart',
        libraryTarget : 'umd'
    },
    resolve: {
        extensions: ['', '.js'],
        // alias: {
        //     'react': 'preact-compat',
        //     'react-dom': 'preact-compat'
        // }
    },
    externals: {
        'react': preactCompat,
        'react-dom' : preactCompat
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
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `'production'`
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

