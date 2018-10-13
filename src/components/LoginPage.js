import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAsync } from "../actions/authActions";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.login}>Log In</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAsync())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
