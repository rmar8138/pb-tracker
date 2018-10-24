import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import liftsReducer from "../reducers/liftsReducer";
import pbsReducer from "../reducers/pbsReducer";
import settingsReducer from "../reducers/settingsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      lifts: liftsReducer,
      pbs: pbsReducer,
      settings: settingsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
