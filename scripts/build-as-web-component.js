var webpack = require('webpack');
var config = require('./webpack.config');
var statsConfig = require('./statsConfig');

config.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
};
config.entry = './src/DonutChartWebComponent.js';
config.output.filename = 'DonutChartWebComponent.js';

webpack(config).run(function (err, stats) {
    console.log(stats.toString(statsConfig));
});