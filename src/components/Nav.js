import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { logoutAsync } from "../actions/authActions";
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

  > .active {
    color: #95afc0;
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

const activeStyle = {
  color: "#95afc0"
};

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Header>
          <h1>PB Tracker</h1>
        </Header>
        <NavbarList>
          <StyledNavLink to="/dashboard" activeStyle={activeStyle} exact>
            Dashboard
          </StyledNavLink>
          <StyledNavLink to="/addlift" activeStyle={activeStyle} exact>
            Add Lift
          </StyledNavLink>
          <StyledNavLink to="/addpb" activeStyle={activeStyle} exact>
            Add PB
          </StyledNavLink>
          <StyledNavLink to="/editlifts" activeStyle={activeStyle} exact>
            Edit Lifts
          </StyledNavLink>
          <StyledNavLink to="/editpbs" activeStyle={activeStyle} exact>
            Edit PBs
          </StyledNavLink>
        </NavbarList>
        <SettingsList>
          <StyledNavLink to="/settings" activeStyle={activeStyle} exact>
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
