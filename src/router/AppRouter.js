import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddLiftPage from "../components/AddLiftPage";
import AddPBPage from "../components/AddPBPage";
import EditLiftsPage from "../components/EditLiftsPage";
import EditPBsPage from "../components/EditPBsPage";
import NotFoundPage from "../components/NotFoundPage";

export const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/addlift" component={AddLiftPage} />
        <PrivateRoute path="/addpb" component={AddPBPage} />
        <PrivateRoute path="/editlifts" component={EditLiftsPage} />
        <PrivateRoute path="/editpbs" component={EditPBsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
