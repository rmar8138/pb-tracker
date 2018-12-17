import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Nav from '../components/Nav';

const Layout = styled.div`
  /* display: flex; */
`;

export const PrivateRoute = ({ uid, component: Component, ...rest }) => (
  <Layout>
    <Nav />
    <Route
      {...rest}
      component={props =>
        uid ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  </Layout>
);

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
