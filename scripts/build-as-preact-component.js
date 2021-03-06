var webpack = require('webpack');
var config = require('./webpack.config');
var statsConfig = require('./statsConfig');

var preactCompat = {
    root: 'preactCompat',
    commonjs2: 'preact-compat',
    commonjs: 'preact-compat'
};

config.externals = {
    'react': preactCompat,
    'react-dom': preactCompat
};
config.entry = './src/DonutChartUMD.js';
config.output.filename = 'DonutChartPreact.js';
config.output.library = 'DonutChart';
config.output.libraryTarget = 'umd';

webpack(config).run(function (err, stats) {
    console.log(stats.toString(statsConfig));
});