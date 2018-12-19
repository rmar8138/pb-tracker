import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Button
} from 'reactstrap';
import { logoutAsync } from '../actions/authActions';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/dashboard">
            PB Tracker
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/dashboard">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/addlift">
                  Add Lift
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/addpb">
                  Add PB
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/settings">
                  Settings
                </NavLink>
              </NavItem>
              <Button
                outline
                color="danger"
                onClick={this.props.logout}
                className="ml-2"
              >
                Log Out
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

//   render() {
//     return (
//       <Navbar>
//         <Header>
//           <h1>PB Tracker</h1>
//         </Header>
//         <NavbarList isOpen={this.state.isDrawerOpen}>
//           <StyledNavLink
//             to="/dashboard"
//             activeStyle={activeStyle}
//             exact
//             onClick={this.closeDrawer}
//           >
//             Dashboard
//           </StyledNavLink>
//           <StyledNavLink
//             to="/addlift"
//             activeStyle={activeStyle}
//             exact
//             onClick={this.closeDrawer}
//           >
//             Add Lift
//           </StyledNavLink>
//           <StyledNavLink
//             to="/addpb"
//             activeStyle={activeStyle}
//             exact
//             onClick={this.closeDrawer}
//           >
//             Add PB
//           </StyledNavLink>
//           <StyledNavLink
//             to="/settings"
//             activeStyle={activeStyle}
//             exact
//             onClick={this.closeDrawer}
//           >
//             Settings
//           </StyledNavLink>
//           <LogoutButton onClick={this.props.logout}>Log Out</LogoutButton>
//         </NavbarList>
//         <Expand onClick={this.handleDrawer}>
//           {!this.state.isDrawerOpen ? 'Expand!!' : 'Close'}
//         </Expand>
//       </Navbar>
//     );
//   }
// }

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAsync())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Navigation);
