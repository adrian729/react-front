import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import requireAuth from 'components/requireAuth';

class ChartjsExample extends Component {
    render() {
        const dataNumber = [3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3];
        
        const dataPoint = [{
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
        }];

        const xAxesNumber = [{
            type: 'category',
            position: 'bottom',
            labels: [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]
        }];

        const xAxesPoint = [{
            type: 'linear',
            position: 'bottom'
        }];

        const data = {
            datasets: [{
                label: 'Scatter Dataset',
                data: dataNumber
            }]
        };

        const options = {
            scales: {
                xAxes: xAxesNumber
            }
        };

        return (
            <div>
                <Scatter data={data} options={options} />
            </div>
        );
    }
}

export default requireAuth(ChartjsExample);