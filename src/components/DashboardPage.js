import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import LiftsSummary from "./LiftsSummary";
import { Header } from "../styles/utilities";

const ChartContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 2rem;
  height: 100vh;
  overflow: scroll;
`;

class DashboardPage extends Component {
  state = {
    selectedLiftID: this.props.lifts[0].liftID
  };

  onSelectedLiftChange = e => {
    const { value } = e.target;
    const lift = this.props.lifts.find(lift => lift.liftID === value);
    this.setState({ selectedLiftID: lift.liftID });
  };

  render() {
    return (
      <ChartContainer>
        <Header>
          <h1>Dashboard</h1>
        </Header>
        <Chart
          lifts={this.props.lifts}
          pbs={this.props.pbs}
          scale={this.props.scale}
        />
        <div>
          <label>Selected lift: </label>
          <select onChange={this.onSelectedLiftChange}>
            {this.props.lifts.map(lift => (
              <option key={lift.label} value={lift.liftID}>
                {lift.label}
              </option>
            ))}
          </select>
        </div>
        <LiftsSummary
          scale={this.props.scale}
          lift={this.props.lifts.find(
            lift => lift.liftID === this.state.selectedLiftID
          )}
          pbs={this.props.pbs.filter(
            pb => pb.liftID === this.state.selectedLiftID
          )}
        />
      </ChartContainer>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  pbs: state.pbs,
  scale: state.settings.scale
});

export default withRouter(connect(mapStateToProps)(DashboardPage));
