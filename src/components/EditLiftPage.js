import React, { Component } from "react";
import { connect } from "react-redux";
import LiftForm from "./LiftForm";
import { editLiftAsync, deleteLiftAsync } from "../actions/liftsActions";
import { deleteLiftPbsAsync } from "../actions/pbsActions";
import { Header, Container } from "../styles/utilities";

class EditLiftPage extends Component {
  editLift = (liftID, updates) => {
    this.props.editLiftAsync(liftID, updates);
    this.props.history.push("/dashboard");
  };

  deleteLift = liftID => {
    this.props.deleteLiftAsync(liftID);
    this.props.history.push("/dashboard");
  };

  deleteLiftPbs = liftID => {
    this.props.deleteLiftPbsAsync(liftID);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>Edit Lift</h1>
        </Header>
        <LiftForm
          lift={this.props.lift}
          type="edit"
          editLift={this.editLift}
          deleteLift={this.deleteLift}
          deleteLiftPbs={this.deleteLiftPbs}
        />
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
