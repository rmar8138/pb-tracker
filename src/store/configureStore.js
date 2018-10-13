import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import liftsReducer from "../reducers/liftsReducer";
import pbsReducer from "../reducers/pbsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      lifts: liftsReducer,
      pbs: pbsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
