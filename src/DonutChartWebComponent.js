import React from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './DonutChart';

const proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function() {
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);
            const props = {
                radius          : +this.getAttribute('radius') || undefined,
                holeSize        : +this.getAttribute('hole-size') || undefined,
                text            : this.getAttribute('text') || undefined,
                value           : +this.getAttribute('value') || undefined,
                total           : +this.getAttribute('total') || undefined,
                backgroundColor : this.getAttribute('background-color') || undefined,
                valueColor      : this.getAttribute('value-color') || undefined
            };
            ReactDOM.render((
                <DonutChart {...props}/>
            ), mountPoint);
        }
    }
});
document.registerElement('donut-chart', {prototype: proto});