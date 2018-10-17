import React, { Component } from "react";
import { connect } from "react-redux";
import LiftForm from "./LiftForm";
import { addLiftAsync } from "../actions/liftsActions";

export class AddLiftPage extends Component {
  addLift = lift => {
    this.props.addLiftAsync(lift);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <LiftForm addLift={this.addLift} type="add" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLiftAsync: lift => dispatch(addLiftAsync(lift))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddLiftPage);
