import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class PBForm extends Component {
  state = {
    label: this.props.lifts ? this.props.lifts[0].label : "",
    date: this.props.pb ? this.props.pb.x : moment().startOf("day"),
    weight: this.props.pb ? this.props.pb.y : 0,
    note: this.props.pb ? this.props.pb.note : "",
    liftID: this.props.lifts[0].liftID,
    focused: null,
    error: ""
  };

  onNameChange = e => {
    const { value } = e.target;
    const lift = this.props.lifts.filter(lift => lift.label === value);
    this.setState({
      name: value,
      liftID: lift[0].liftID
    });
  };

  onWeightChange = e => {
    const { value } = e.target;
    this.setState({
      weight: value ? parseFloat(value) : value
    });
  };

  onDateChange = date => this.setState({ date });

  onFocusChange = ({ focused }) => this.setState({ focused });

  onNoteChange = e => {
    const { value } = e.target;
    this.setState({
      note: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.type === "add") {
      if (this.state.date && this.state.weight) {
        // submit only if date and weight are valid
        this.props.addPb(this.state.liftID, {
          x: moment(this.state.date).valueOf(),
          y: this.state.weight,
          note: this.state.note
        });
        this.setState({
          weight: 0,
          note: "",
          focused: null,
          error: ""
        });
      } else {
        // else display error
        this.setState({
          error: "Please enter a valid date and weight"
        });
      }
    } else if (this.props.type === "edit") {
      this.props.editPb(this.props.pb.liftID, this.props.pb.pbID, {
        x: moment(this.state.date).valueOf(),
        y: this.state.weight,
        note: this.state.note
      });
    }
  };

  handleDeletePB = e => {
    e.preventDefault();
    this.props.deletePb(this.props.pb.liftID, this.props.pb.pbID);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Date: </label>
          <SingleDatePicker
            date={moment(this.state.date)}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          {this.props.type === "add" && (
            <div>
              <br />
              <select onChange={this.onNameChange} name="name" id="name">
                {this.props.lifts.map(lift => {
                  return (
                    <option name="option" key={lift.label} value={lift.label}>
                      {lift.label}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          <br />
          <label>Weight: </label>
          <input
            name="weight"
            onChange={this.onWeightChange}
            type="number"
            value={this.state.weight}
            min={0}
            step="0.01"
          />
          <br />
          <br />
          <label>Note: </label>
          <textarea
            onChange={this.onNoteChange}
            name="note"
            id="note"
            value={this.state.note}
          />
          <br />
          <br />
          <button>Save</button>
          {this.props.type === "edit" && (
            <button onClick={this.handleDeletePB}>Delete</button>
          )}
          {this.state.error && this.state.error}
        </form>
      </div>
    );
  }
}

export default PBForm;
