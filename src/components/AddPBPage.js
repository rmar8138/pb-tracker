import React, { Component } from "react";
import { connect } from "react-redux";
import PBForm from "./PBForm";
import { addPbAsync } from "../actions/pbsActions";

class AddPBPage extends Component {
  addPb = (liftID, pb) => {
    this.props.addPbAsync(liftID, pb);
    // push to dashboard
  };

  render() {
    return (
      <div>
        {this.props.lifts.length ? (
          <PBForm type="add" lifts={this.props.lifts} addPb={this.addPb} />
        ) : (
          <p>You haven't added any lifts! Go to the add lifts page first</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts
});

const mapDispatchToProps = dispatch => ({
  addPbAsync: (liftID, pb) => dispatch(addPbAsync(liftID, pb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPBPage);
