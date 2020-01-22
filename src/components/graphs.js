import React from 'react';
import { last } from 'underscore';
import { Line } from 'react-chartjs-2';


export class Graphs extends React.Component {
    render() {
        if (!this.props.pm10 || !this.props.pm25) {
            return <div></div>
        }
        return (
            <div>
                <h2> Ostatnie wartości:</h2>
                <b>PM 2.5:</b> {last(this.props.pm25).value}
                <br />
                <b>PM 10:</b> {last(this.props.pm10).value}

                <Line data={{
                    labels: [this.props.pm10.map(value => (`${new Date(value.time).getHours()}:${new Date(value.time).getMinutes()}`))],
					backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.red,
					fill: false,
                    datasets: [{
                        label: 'PM 2.5',
                        data: this.props.pm25.map(value => value.value)
                    }],
                    options: {
                        title: {
                            text: 'Chart.js Time Scale'
                        },
                        scales: {
                            xAxes: [{
                                type: 'time',
                                time: {
                                    parser: timeFormat,
                                    // round: 'day'
                                    tooltipFormat: 'll HH:mm'
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date'
                                }
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'value'
                                }
                            }]
                        },
                    }
                }} />
            </div>
        )
    }
}