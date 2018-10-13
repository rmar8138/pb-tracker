import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAsync } from "../actions/authActions";

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>PB Tracker</h1>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/addlift">Add Lift</NavLink>
        <NavLink to="/addpb">Add PB</NavLink>
        <NavLink to="/editlifts">Edit Lifts</NavLink>
        <NavLink to="/editpbs">Edit PBs</NavLink>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAsync())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Nav);
