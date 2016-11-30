import React from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './DonutChart';

const module = angular.module('future-charts-example', []);

module.directive('donutChart', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            const props = {
                radius          : +attrs['radius'] || undefined,
                holeSize        : +attrs['hole-size'] || undefined,
                text            : attrs['text'] || undefined,
                value           : +attrs['value'] || undefined,
                total           : +attrs['total'] || undefined,
                backgroundColor : attrs['background-color'] || undefined,
                valueColor      : attrs['value-color'] || undefined
            };
            ReactDOM.render((
                <DonutChart {...props}/>
            ), element[0]);
        }
    };
});