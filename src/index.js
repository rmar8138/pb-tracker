import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import AppRouter, { history } from './router/AppRouter';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { login, logout } from './actions/authActions';
import { fetchLiftsAsync } from './actions/liftsActions';
import { fetchPbsAsync } from './actions/pbsActions';
import { getScaleAsync } from './actions/settingsActions';

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('root')
    );
    serviceWorker.unregister();
  }
  hasRendered = true;
};

ReactDOM.render(<p>Loading</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(fetchLiftsAsync(user.uid));
    store.dispatch(getScaleAsync());
    store.dispatch(fetchPbsAsync(user.uid)).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    // redirect to dashboard only if currently in log in page
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
