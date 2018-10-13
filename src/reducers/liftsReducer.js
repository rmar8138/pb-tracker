export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LIFTS":
      return [...action.lifts];
    case "ADD_LIFT":
      return [...state, action.lift];
    case "EDIT_LIFT":
      return state.map(lift => {
        if (lift.liftID === action.liftID) {
          return {
            ...lift,
            ...action.updates
          };
        } else {
          return lift;
        }
      });
    case "DELETE_LIFT":
      return state.filter(lift => lift.liftID !== action.liftID);
    default:
      return state;
  }
};
