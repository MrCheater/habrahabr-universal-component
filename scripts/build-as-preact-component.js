var webpack = require('webpack');
var config = require('./webpack.config');
var stats = require('./stats');
webpack(config).run(function (err, stats) {
    console.log(stats.toString(stats));
});