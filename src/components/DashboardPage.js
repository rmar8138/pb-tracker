import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Chart from "./Chart";
import LiftsSummary from "./LiftsSummary";
import Container from "./Container";

const ChartContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 2rem;
`;

class DashboardPage extends Component {
  render() {
    return (
      <ChartContainer>
        <Chart lifts={this.props.lifts} pbs={this.props.pbs} />
        <LiftsSummary lifts={this.props.lifts} pbs={this.props.pbs} />
      </ChartContainer>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  pbs: state.pbs
});

export default connect(mapStateToProps)(DashboardPage);
