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
        <LiftsSummary
          lifts={this.props.lifts}
          pbs={this.props.pbs}
          scale={this.props.scale}
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
