import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import AppRouter, { history } from "./router/AppRouter";
import * as serviceWorker from "./serviceWorker";
import { firebase } from "./firebase/firebase";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/authActions";
import { fetchLiftsAsync } from "./actions/liftsActions";
import { fetchPbsAsync } from "./actions/pbsActions";

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("root")
    );
    serviceWorker.unregister();
  }
  hasRendered = true;
};

ReactDOM.render(<p>Loading</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("uid", user.uid);

    store.dispatch(login(user.uid));
    store.dispatch(fetchLiftsAsync(user.uid));
    store.dispatch(fetchPbsAsync(user.uid)).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    // redirect to dashboard only if currently in log in page
  } else {
    store.dispatch(logout());
    renderApp();
    console.log("log out");
    history.push("/");
  }
});
