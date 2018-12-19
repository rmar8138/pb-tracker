import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import PBForm from './PBForm';
import { addPbAsync } from '../actions/pbsActions';

class AddPBPage extends Component {
  addPb = (liftID, pb) => {
    this.props.addPbAsync(liftID, pb);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <Container>
        <h1 className="mt-2 text-center">Add PB</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {this.props.lifts.length ? (
              <PBForm
                type="add"
                lifts={this.props.lifts}
                addPb={this.addPb}
                scale={this.props.scale}
              />
            ) : (
              <p>You haven't added any lifts! Go to the add lifts page first</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  scale: state.settings.scale
});

const mapDispatchToProps = dispatch => ({
  addPbAsync: (liftID, pb) => dispatch(addPbAsync(liftID, pb))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddPBPage)
);
