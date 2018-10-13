import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import LiftsForm from "./LiftForm";
import { editLiftAsync, deleteLiftAsync } from "../actions/liftsActions";
import { deleteLiftPbsAsync } from "../actions/pbsActions";

class EditLiftsPage extends Component {
  render() {
    return (
      <div>
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
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLiftsPage);
