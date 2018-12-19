import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Input, Label } from 'reactstrap';
import Chart from './Chart';
import LiftsSummary from './LiftsSummary';

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
      <Container>
        <h1 className="display-5 text-center mt-2">Dashboard</h1>
        <Chart
          lifts={this.props.lifts}
          pbs={this.props.pbs}
          scale={this.props.scale}
        />
        <Col xs="12" md="4" className="mt-5">
          <Label>Selected lift:</Label>
          <Input type="select" onChange={this.onSelectedLiftChange}>
            {this.props.lifts.map(lift => (
              <option key={lift.label} value={lift.liftID}>
                {lift.label}
              </option>
            ))}
          </Input>
        </Col>
        <LiftsSummary
          scale={this.props.scale}
          lift={this.props.lifts.find(
            lift => lift.liftID === this.state.selectedLiftID
          )}
          pbs={this.props.pbs.filter(
            pb => pb.liftID === this.state.selectedLiftID
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lifts: state.lifts,
  pbs: state.pbs,
  scale: state.settings.scale
});

export default withRouter(connect(mapStateToProps)(DashboardPage));
