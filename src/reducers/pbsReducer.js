export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PBS":
      return [...action.pbs].sort((a, b) => a.x - b.x);
    case "ADD_PB":
      return [...state, action.pb].sort((a, b) => a.x - b.x);
    case "EDIT_PB":
      return state.map(pb => {
        if (pb.pbID === action.pbID) {
          return {
            ...pb,
            ...action.updates
          };
        } else {
          return pb;
        }
      });
    case "DELETE_PB":
      return state.filter(pb => pb.pbID !== action.pbID);
    case "DELETE_LIFT_PBS":
      return state.filter(pb => pb.liftID !== action.liftID);
    default:
      return state;
  }
};
