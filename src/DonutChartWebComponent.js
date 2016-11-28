import DonutChart from './DonutChart';

const proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function() {
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);
            const props = {
                radius          : this.getAttribute('radius'),
                holeSize        : this.getAttribute('hole-size'),
                text            : this.getAttribute('text'),
                value           : this.getAttribute('value'),
                total           : this.getAttribute('total'),
                backgroundColor : this.getAttribute('background-color'),
                valueColor      : this.getAttribute('value-color')
            };
            ReactDOM.render((
                <DonutChart {...props}/>
            ), mountPoint);
        }
    }
});
document.registerElement('donut-chart', {prototype: proto});