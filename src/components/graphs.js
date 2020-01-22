import React from 'react';
import { last } from 'underscore';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export class Graphs extends React.Component {
    render() {
        if (!this.props.pm10 || !this.props.pm25) {
            return <div></div>
        }

        // const labels = this.props.pm10.map(value => (`${new Date(value.time).getHours()}:${new Date(value.time).getMinutes()}`)); 
        return (
            <div>
                <h2> Ostatnie wartości:</h2>
                <b>PM 2.5:</b> {last(this.props.pm25).value}
                <br />
                <b>PM 10:</b> {last(this.props.pm10).value}

                <div>
                    <LineChart width={400} height={400} data={this.props.pm25}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div>
                    <LineChart width={400} height={400} data={this.props.pm10}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                </div>
            </div>
        )
    }
}