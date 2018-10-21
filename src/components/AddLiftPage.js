import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LiftForm from "./LiftForm";
import { addLiftAsync } from "../actions/liftsActions";
import { Header, Container } from "../styles/utilities";

export class AddLiftPage extends Component {
  addLift = lift => {
    this.props.addLiftAsync(lift);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>Add Lift</h1>
        </Header>
        <LiftForm addLift={this.addLift} type="add" />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLiftAsync: lift => dispatch(addLiftAsync(lift))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddLiftPage)
);
