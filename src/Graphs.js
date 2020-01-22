import React from 'react';
import _ from 'underscore';

export default class Graphs extends React.Component {
    render() {
        <div>
            PM 2.5: {_.last(this.props.pm25)}
            <br/>
            PM 10: {_.last(this.props.pm10)}
        </div>
    }
}