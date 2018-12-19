import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from 'reactstrap';

class PBForm extends Component {
  state = {
    date: this.props.pb ? moment(this.props.pb.x) : moment(),
    weight: this.props.pb ? this.props.pb.y : 0,
    note: this.props.pb ? this.props.pb.note : '',
    liftID:
      this.props.type === 'edit'
        ? this.props.pb.liftID
        : this.props.lifts[0].liftID,
    error: ''
  };

  onNameChange = e => {
    const { value } = e.target;
    const lift = this.props.lifts.find(lift => lift.label === value);
    this.setState({ liftID: lift.liftID });
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
    if (this.props.type === 'add') {
      if (this.state.date && this.state.weight) {
        // submit only if date and weight are valid
        this.props.addPb(this.state.liftID, {
          x: moment(this.state.date)
            .startOf('day')
            .valueOf(),
          y: this.state.weight,
          note: this.state.note
        });
        this.setState({
          weight: 0,
          note: '',
          focused: null,
          error: ''
        });
      } else {
        // else display error
        this.setState({
          error: 'Please enter a valid date and weight'
        });
      }
    } else if (this.props.type === 'edit') {
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
        <Form onSubmit={this.onSubmit}>
          {this.props.type === 'edit' && (
            <div>
              <h2>{this.props.lift.label}</h2>
            </div>
          )}
          <FormGroup>
            <Label for="date">Date:</Label>
            <DatePicker
              id="date"
              name="date"
              selected={this.state.date}
              onChange={this.onDateChange}
            />
            <FormText>Please enter in MM/DD/YYYY format</FormText>
          </FormGroup>
          {this.props.type === 'add' && (
            <FormGroup>
              <Label id="liftName">Lift name: </Label>
              <Input
                id="liftName"
                name="liftName"
                type="select"
                onChange={this.onNameChange}
              >
                {this.props.lifts.map(lift => (
                  <option key={lift.label} value={lift.label}>
                    {lift.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          <FormGroup>
            <Label for="weight">Weight:</Label>
            <InputGroup>
              <Input
                id="weight"
                name="weight"
                onChange={this.onWeightChange}
                type="number"
                value={this.state.weight}
                min={0}
                step="0.01"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>{this.props.scale}</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="note">Note:</Label>
            <Input
              id="note"
              type="textarea"
              onChange={this.onNoteChange}
              name="note"
              value={this.state.note}
            />
          </FormGroup>
          <Button color="success">Save</Button>
          {this.props.type === 'edit' && (
            <Button
              color="danger"
              onClick={this.handleDeletePB}
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

export default PBForm;
