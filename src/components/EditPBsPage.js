import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import PBForm from "./PBForm";
import { editPbAsync, deletePbAsync } from "../actions/pbsActions";

class EditPBsPage extends Component {
  editPb = (liftID, pbID, updates) => {
    this.props.editPbAsync(liftID, pbID, updates);
    // push to dashboard
  };

  deletePb = (liftID, pbID) => {
    this.props.deletePbAsync(liftID, pbID);
    // push to dashboard
  };

  render() {
    return (
      <div>
        {this.props.pbs.length ? (
          this.props.lifts.map(lift => (
            <div key={shortid.generate()}>
              <h2>{lift.label}</h2>
              {this.props.pbs.map(
                pb =>
                  pb.liftID === lift.liftID && (
                    <PBForm
                      key={shortid.generate()}
                      type="edit"
                      editPb={this.editPb}
                      deletePb={this.deletePb}
                      pb={pb}
                      lifts={this.props.lifts}
                    />
                  )
              )}
            </div>
          ))
        ) : (
          <p>There are no PB's to edit</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  pbs: state.pbs
});

const mapDispatchToProps = dispatch => ({
  editPbAsync: (liftID, pbID, updates) =>
    dispatch(editPbAsync(liftID, pbID, updates)),
  deletePbAsync: (liftID, pbID) => dispatch(deletePbAsync(liftID, pbID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPBsPage);
