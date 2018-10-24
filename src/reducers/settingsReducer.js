export default (state = {}, action) => {
  switch (action.type) {
    case "GET_SCALE":
      return {
        scale: action.scale
      };
    case "CHANGE_SCALE":
      return {
        scale: action.scale
      };
    default:
      return state;
  }
};
