import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logoutAsync } from '../actions/authActions';
import { LogoutButton } from './Buttons';

const Navbar = styled.div`
  position: relative;
  padding: 2rem;
  height: 8rem;
  background-color: #353b48;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  h1 {
    margin: 0;
  }
`;

const NavbarList = styled.ul`
  padding: 0;
  display: flex;
  /* flex-direction: column; */
  align-self: center;

  *:not(:last-child) {
    margin-right: 2rem;
  }

  > .active {
    color: #95afc0;
  }

  @media (max-width: 654px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 2rem;
    background-color: #353b48;
    opacity: 0.9;
    flex-direction: column;
    align-items: center;
    z-index: 100000;

    *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  align-items: flex-start;
  transition: all 0.2s;

  :hover {
    color: #95afc0;
  }
`;

const Expand = styled.div`
  display: none;

  @media (max-width: 654px) {
    display: inline-block;
    cursor: pointer;
  }
`;

const NavBurger = styled.span`
  display: none;

  @media (max-width: 654px) {
    position: relative;
    background-color: white;
    display: inline-block;
    content: '';
    width: 3rem;
    height: 1px;
    cursor: pointer;

    ::before {
      position: absolute;
      top: 1rem;
      background-color: white;
      display: inline-block;
      content: '';
      width: 3rem;
      height: 1px;
    }

    ::after {
      position: absolute;
      bottom: 1rem;
      background-color: white;
      display: inline-block;
      content: '';
      width: 3rem;
      height: 1px;
    }
  }
`;

const activeStyle = {
  color: '#95afc0'
};

class Nav extends Component {
  state = {
    isDrawerOpen: false
  };

  handleDrawer = () => {
    this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  };

  closeDrawer = () => {
    this.setState(() => ({ isDrawerOpen: false }));
  };

  render() {
    return (
      <Navbar>
        <Header>
          <h1>PB Tracker</h1>
        </Header>
        <NavbarList isOpen={this.state.isDrawerOpen}>
          <StyledNavLink
            to="/dashboard"
            activeStyle={activeStyle}
            exact
            onClick={this.closeDrawer}
          >
            Dashboard
          </StyledNavLink>
          <StyledNavLink
            to="/addlift"
            activeStyle={activeStyle}
            exact
            onClick={this.closeDrawer}
          >
            Add Lift
          </StyledNavLink>
          <StyledNavLink
            to="/addpb"
            activeStyle={activeStyle}
            exact
            onClick={this.closeDrawer}
          >
            Add PB
          </StyledNavLink>
          <StyledNavLink
            to="/settings"
            activeStyle={activeStyle}
            exact
            onClick={this.closeDrawer}
          >
            Settings
          </StyledNavLink>
          <LogoutButton onClick={this.props.logout}>Log Out</LogoutButton>
        </NavbarList>
        <Expand onClick={this.handleDrawer}>
          {!this.state.isDrawerOpen ? 'Expand!!' : 'Close'}
        </Expand>
      </Navbar>
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
