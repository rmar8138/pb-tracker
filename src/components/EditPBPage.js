import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PBForm from './PBForm';
import { editPbAsync, deletePbAsync } from '../actions/pbsActions';

class EditPBPage extends Component {
  editPb = (liftID, pbID, updates) => {
    this.props.editPbAsync(liftID, pbID, updates);
    this.props.history.push('/dashboard');
  };

  deletePb = (liftID, pbID) => {
    this.props.deletePbAsync(liftID, pbID);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <Container>
        <h1 className="mt-2 text-center">Edit PB</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <PBForm
              pb={this.props.pb}
              lift={this.props.lift.find(
                lift => lift.liftID === this.props.pb.liftID
              )}
              scale={this.props.scale}
              editPb={this.editPb}
              deletePb={this.deletePb}
              type="edit"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pb: state.pbs.find(pb => pb.pbID === props.match.params.id),
  lift: state.lifts,
  scale: state.settings.scale
});

const mapDispatchToProps = dispatch => ({
  editPbAsync: (liftID, pbID, updates) =>
    dispatch(editPbAsync(liftID, pbID, updates)),
  deletePbAsync: (liftID, pbID) => dispatch(deletePbAsync(liftID, pbID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPBPage);
