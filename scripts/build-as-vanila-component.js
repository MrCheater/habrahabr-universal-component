var webpack = require('webpack');
var config = require('./webpack.config');
var statsConfig = require('./statsConfig');

config.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
};
config.entry = './src/DonutChartVanilaComponent.js';
config.output.filename = 'DonutChartVanilaComponent.js';
config.output.library = 'DonutChart';
config.output.libraryTarget = 'umd';

webpack(config).run(function (err, stats) {
    console.log(stats.toString(statsConfig));
});