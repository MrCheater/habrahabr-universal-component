import React from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './DonutChart';

jQuery.fn.extend({
    DonutChart: function(props) {
        this.each(
            function () {
                ReactDOM.render((
                    <DonutChart {...props}/>
                ), this);
            }
        );
    }
});