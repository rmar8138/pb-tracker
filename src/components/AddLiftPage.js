import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import LiftForm from './LiftForm';
import { addLiftAsync } from '../actions/liftsActions';

export class AddLiftPage extends Component {
  addLift = lift => {
    this.props.addLiftAsync(lift);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <Container>
        <h1 className="mt-2 text-center">Add Lift</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <LiftForm addLift={this.addLift} type="add" />
          </Col>
        </Row>
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
