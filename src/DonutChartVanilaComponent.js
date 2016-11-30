import React from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './DonutChart';

module.exports = function DonutChartVanilaComponent(mountPoint, props) {
    ReactDOM.render((
        <DonutChart {...props}/>
    ), mountPoint);
};