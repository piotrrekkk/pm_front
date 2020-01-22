import React from 'react';
import { last } from 'underscore';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export class Graphs extends React.Component {

    constructor(props) {
        super(props);
    }

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

                <LineChart width={600} height={300} data={this.props.pm25}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time" />
                    <YAxis />
                </LineChart>
            </div>
        )
    }
}