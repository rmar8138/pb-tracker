import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import shortid from "shortid";
import LiftsForm from "./LiftForm";
import { editLiftAsync, deleteLiftAsync } from "../actions/liftsActions";
import { deleteLiftPbsAsync } from "../actions/pbsActions";
import { Header, Container } from "../styles/utilities";

class EditLiftsPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h1>Edit Lifts</h1>
        </Header>
        {this.props.lifts.length ? (
          this.props.lifts.map(lift => {
            return (
              <LiftsForm
                key={shortid.generate()}
                lift={lift}
                type="edit"
                editLift={this.props.editLiftAsync}
                deleteLift={this.props.deleteLiftAsync}
                deleteLiftPbs={this.props.deleteLiftPbsAsync}
              />
            );
          })
        ) : (
          <p>Do you even lift? There are no lifts to edit...</p>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts
});

const mapDispatchToProps = dispatch => ({
  editLiftAsync: (liftID, updates) => dispatch(editLiftAsync(liftID, updates)),
  deleteLiftAsync: liftID => dispatch(deleteLiftAsync(liftID)),
  deleteLiftPbsAsync: liftID => dispatch(deleteLiftPbsAsync(liftID))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditLiftsPage)
);
