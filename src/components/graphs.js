import React from 'react';
import { last } from 'underscore';
import { LineChart, Line } from 'recharts';

export class Graphs extends React.Component {

    constructor(props) {
        super(props);
        this.labels = this.props.pm10.map(value => (`${new Date(value.time).getHours()}:${new Date(value.time).getMinutes()}`)); 
    }

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

                <LineChart width={400} height={400} data={this.props.pm25}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}