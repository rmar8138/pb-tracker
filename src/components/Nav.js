import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import shortid from "shortid";
import { logoutAsync } from "../actions/authActions";
import Container from "./Container";
import { LogoutButton } from "./Buttons";

const Navbar = styled.div`
  padding: 2rem 4rem;
  flex: 0 0 17.5%;
  background-color: #353b48;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const NavbarList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    margin-bottom: 4rem;
  }
`;

const SettingsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  * {
    margin-bottom: 4rem;
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

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Header>
          <h1>PB Tracker</h1>
        </Header>
        <NavbarList>
          <StyledNavLink
            to="/dashboard"
            activeStyle={{ color: "#95afc0" }}
            exact
          >
            Dashboard
          </StyledNavLink>
          <StyledNavLink to="/addlift" activeStyle={{ color: "#95afc0" }} exact>
            Add Lift
          </StyledNavLink>
          <StyledNavLink to="/addpb" activeStyle={{ color: "#95afc0" }} exact>
            Add PB
          </StyledNavLink>
          <StyledNavLink
            to="/editlifts"
            activeStyle={{ color: "#95afc0" }}
            exact
          >
            Edit Lifts
          </StyledNavLink>
          <StyledNavLink to="/editpbs" activeStyle={{ color: "#95afc0" }} exact>
            Edit PBs
          </StyledNavLink>
        </NavbarList>
        <SettingsList>
          <StyledNavLink
            to="/settings"
            activeStyle={{ color: "#95afc0" }}
            exact
          >
            Settings
          </StyledNavLink>
          <LogoutButton onClick={this.props.logout}>Log Out</LogoutButton>
        </SettingsList>
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
