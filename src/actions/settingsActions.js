import database from "../firebase/firebase";

export const getScaleAsync = () => {
  return (dispatch, getState) => {
    let scale = "";
    database
      .ref(`users/${getState().auth.uid}/settings/scale`)
      .once("value", snapshot => {
        console.log(snapshot.val());
        if (!snapshot.val()) {
          // if new user, set initial default scale to kg
          database.ref(`users/${getState().auth.uid}/settings/scale`).set("kg");
          scale = "kg";
        } else {
          // else, get scale from user settings
          scale = snapshot.val();
        }
      })
      .then(() => {
        dispatch({
          type: "GET_SCALE",
          scale
        });
      });
  };
};

export const changeScaleAsync = () => {
  return (dispatch, getState) => {
    let scale = "";
    return database
      .ref(`users/${getState().auth.uid}/settings/scale`)
      .once("value", snapshot => {
        if (snapshot.val() === "kg") {
          scale = "lb";
        } else if (snapshot.val() === "lb") {
          scale = "kg";
        }
      })
      .then(() => {
        database.ref(`users/${getState().auth.uid}/settings/scale`).set(scale);
        dispatch({
          type: "CHANGE_SCALE",
          scale
        });
      });
  };
};
