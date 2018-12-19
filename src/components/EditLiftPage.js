import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import LiftForm from './LiftForm';
import { editLiftAsync, deleteLiftAsync } from '../actions/liftsActions';
import { deleteLiftPbsAsync } from '../actions/pbsActions';

class EditLiftPage extends Component {
  editLift = (liftID, updates) => {
    this.props.editLiftAsync(liftID, updates);
    this.props.history.push('/dashboard');
  };

  deleteLift = liftID => {
    this.props.deleteLiftAsync(liftID);
    this.props.history.push('/dashboard');
  };

  deleteLiftPbs = liftID => {
    this.props.deleteLiftPbsAsync(liftID);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <Container>
        <h1 className="mt-2 text-center">Edit Lift</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <LiftForm
              lift={this.props.lift}
              type="edit"
              editLift={this.editLift}
              deleteLift={this.deleteLift}
              deleteLiftPbs={this.deleteLiftPbs}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  lift: state.lifts.find(lift => lift.liftID === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editLiftAsync: (liftID, updates) => dispatch(editLiftAsync(liftID, updates)),
  deleteLiftAsync: liftID => dispatch(deleteLiftAsync(liftID)),
  deleteLiftPbsAsync: liftID => dispatch(deleteLiftPbsAsync(liftID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLiftPage);
