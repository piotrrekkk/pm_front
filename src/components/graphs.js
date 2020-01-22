import React from 'react';
import { last } from 'underscore';

export class Graphs extends React.Component {
    render() {
        return (
            <div>
                PM 2.5: {last(this.props.pm25)}
                <br />
                PM 10: {last(this.props.pm10)}
            </div>
        )
    }
}