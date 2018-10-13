import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../components/Nav";

export const PrivateRoute = ({ uid, component: Component, ...rest }) => (
  <div>
    <Nav />
    <Route
      {...rest}
      component={props =>
        uid ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  </div>
);

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
