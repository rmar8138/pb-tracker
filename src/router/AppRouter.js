import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddLiftPage from "../components/AddLiftPage";
import AddPBPage from "../components/AddPBPage";
import EditLiftPage from "../components/EditLiftPage";
import EditPBPage from "../components/EditPBPage";
import SettingsPage from "../components/SettingsPage";
import NotFoundPage from "../components/NotFoundPage";

export const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact />
        <PrivateRoute path="/addlift" component={AddLiftPage} exact />
        <PrivateRoute path="/addpb" component={AddPBPage} exact />
        <PrivateRoute path="/editpb/:id" component={EditPBPage} />
        <PrivateRoute path="/editlift/:id" component={EditLiftPage} />
        <PrivateRoute path="/settings" component={SettingsPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
