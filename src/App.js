import React from "react";
import "./styles.css";
import { Dropdown } from "./components/dropdown";
import { fetchData } from "./data/fetch";
import { Graphs } from './components/graphs'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      location: ""
    };
  }

  handleDropdownChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  getData() {
    fetchData(this.state.location)
      .then(data => {
        if (data) {
          let pm25 = data.filter(value => value.type === 'PM 2.5').map(value => {
            return {
              value: value.value,
              time: value.time
            }
          });

          let pm10 = data.filter(value => value.type === 'PM 10').map(value => {
            return {
              value: value.value,
              time: value.time
            }
          });

          this.setState({
            pm25: pm25,
            pm10: pm10
          })

        }

      });
  }

  render() {
    return (
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Lokalizacja</label>
          </div>
          <Dropdown
            options={["Kobylany"]}
            handleChange={this.handleDropdownChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.getData}
            >
              Pokaż
            </button>
          </div>
        </div>
        <Graphs pm25={this.state.pm25} pm10={this.state.pm10} />
      </div>
    );
  }
}
