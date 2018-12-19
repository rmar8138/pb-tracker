import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Jumbotron
} from 'reactstrap';
import { loginAsync } from '../actions/authActions';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Navbar color="light">
          <NavbarBrand href="/">PB Tracker</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="https://github.com/rmar8138/pb-tracker">
                Github
              </NavLink>
            </NavItem>
            <Button color="primary" onClick={this.props.login}>
              Log In
            </Button>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1 className="display-3">PB Tracker</h1>
          <p className="lead">Track your best lifts on all your exercises.</p>
          <hr className="my-2" />
          <p>Login with Google, Facebook or Twitter to start.</p>
          <Button color="primary" onClick={this.props.login}>
            Log In
          </Button>
        </Jumbotron>
      </Container>
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
