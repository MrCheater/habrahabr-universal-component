var webpack = require('webpack');
var config = require('./webpack.config');
var statsConfig = require('./statsConfig');

config.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
};
config.entry = './src/DonutChartAngularComponent.js';
config.output.filename = 'DonutChartAngularComponent.js';
config.output.library = 'DonutChart';
config.output.libraryTarget = 'umd';

webpack(config).run(function (err, stats) {
    console.log(stats.toString(statsConfig));
});