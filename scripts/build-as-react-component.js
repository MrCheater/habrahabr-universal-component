var webpack = require('webpack');
var config = require('./webpack.config');
var statsConfig = require('./statsConfig');

var react = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react'
};

var reactDom = {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom'
};

config.externals = {
    'react': react,
    'react-dom': reactDom
};
config.entry = './src/DonutChartUMD.js';
config.output.filename = 'DonutChartReact.js';
config.output.library = 'DonutChart';
config.output.libraryTarget = 'umd';

webpack(config).run(function (err, stats) {
    console.log(stats.toString(statsConfig));
});