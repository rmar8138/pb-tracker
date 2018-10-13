import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import LiftsSummary from "./LiftsSummary";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Chart lifts={this.props.lifts} pbs={this.props.pbs} />
        <LiftsSummary lifts={this.props.lifts} pbs={this.props.pbs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  pbs: state.pbs
});

export default connect(mapStateToProps)(DashboardPage);
