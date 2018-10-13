import React, { Component } from "react";
import { CirclePicker } from "react-color";

class LiftsForm extends Component {
  state = {
    label: this.props.lift ? this.props.lift.label : "",
    borderColor: this.props.lift ? this.props.lift.borderColor : "",
    error: ""
  };

  onNameChange = e => {
    const { value } = e.target;
    this.setState({
      label: value
    });
  };

  onColorChange = color => {
    this.setState({
      borderColor: color.hex
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label && this.state.borderColor) {
      if (this.props.type === "add") {
        this.props.addLift({
          label: this.state.label,
          borderColor: this.state.borderColor,
          backgroundColor: "transparent"
        });
        this.setState({
          label: "",
          borderColor: "",
          error: ""
        });
      } else if (this.props.type === "edit") {
        this.props.editLift(this.props.lift.liftID, {
          label: this.state.label,
          borderColor: this.state.borderColor
        });
      }
    } else {
      this.setState({
        error: "Please enter a valid lift name and select a color"
      });
    }
  };

  handleDeleteLift = e => {
    e.preventDefault();
    this.props.deleteLift(this.props.lift.liftID);
    this.props.deleteLiftPbs(this.props.lift.liftID);
  };

  render() {
    return (
      <div>
        <h2>{this.props.lifts && this.props.lifts.label}</h2>
        <form onSubmit={this.onSubmit}>
          <label>Lift name:</label>
          <input
            onChange={this.onNameChange}
            type="text"
            value={this.state.label}
          />
          <br />
          <br />
          <label>Select a color:</label>
          <CirclePicker
            color={this.state.borderColor}
            onChange={this.onColorChange}
          />
          <br />
          <br />
          <button>Save</button>
          {this.props.lift && (
            <button onClick={this.handleDeleteLift}>Delete</button>
          )}
          {this.state.error && this.state.error}
        </form>
      </div>
    );
  }
}

export default LiftsForm;
