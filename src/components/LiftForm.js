import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class LiftForm extends Component {
  state = {
    label: this.props.lift ? this.props.lift.label : '',
    borderColor: this.props.lift ? this.props.lift.borderColor : '',
    error: ''
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
      if (this.props.type === 'add') {
        this.props.addLift({
          label: this.state.label,
          borderColor: this.state.borderColor
        });
        this.setState({
          label: '',
          borderColor: '',
          error: ''
        });
      } else if (this.props.type === 'edit') {
        this.props.editLift(this.props.lift.liftID, {
          label: this.state.label,
          borderColor: this.state.borderColor
        });
      }
    } else {
      this.setState({
        error: 'Please enter a valid lift name and select a color'
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
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="liftName">Lift name:</Label>
            <Input
              id="liftName"
              name="liftName"
              onChange={this.onNameChange}
              type="text"
              value={this.state.label}
            />
          </FormGroup>

          <FormGroup>
            <Label for="color">Select a color:</Label>
            <CirclePicker
              id="color"
              name="color"
              color={this.state.borderColor}
              onChange={this.onColorChange}
            />
          </FormGroup>

          <Button color="success">Save</Button>
          {this.props.lift && (
            <Button
              color="danger"
              onClick={this.handleDeleteLift}
              className="ml-2"
            >
              Delete
            </Button>
          )}
          {this.state.error && this.state.error}
        </Form>
      </div>
    );
  }
}

export default LiftForm;
