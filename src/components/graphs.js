import React from 'react';
import { last } from 'underscore';
import { Line } from 'react-chartjs-2';


export class Graphs extends React.Component {
    render() {
        if (!this.props.pm10 || !this.props.pm25) {
            return
        }
        return (
            <div>
                <h2> Ostatnie wartości:</h2>
                <b>PM 2.5:</b> {last(this.props.pm25).value}
                <br />
                <b>PM 10:</b> {last(this.props.pm10).value}

                <Line data={{
                    labels: [this.props.pm10.map(value => value.time)],
                    datasets: [this.props.pm25]
                }} />
            </div>
        )
    }
}