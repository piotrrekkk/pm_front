import React from 'react';
import { last } from 'underscore';
import { Line } from 'react-chartjs-2';


export class Graphs extends React.Component {
    render() {
        return (
            <div>
                <h2> Ostatnie wartości:</h2>
                <b>PM 2.5:</b> {last(this.props.pm25)}
                <br />
                <b>PM 10:</b> {last(this.props.pm10)}

                <Line data={{
                    datasets: [this.props.pm25]
                }} />
            </div>
        )
    }
}