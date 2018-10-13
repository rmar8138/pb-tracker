import database from "../firebase/firebase";

// FETCH_LIFTS

export const fetchLifts = lifts => ({
  type: "FETCH_LIFTS",
  lifts
});

export const fetchLiftsAsync = uid => {
  return dispatch => {
    const lifts = [];
    return database
      .ref(`users/${uid}/lifts`)
      .once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          lifts.push({
            liftID: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
      })
      .then(() => {
        dispatch(fetchLifts(lifts));
      });
  };
};

//ADD_LIFT

export const addLift = lift => ({
  type: "ADD_LIFT",
  lift
});

export const addLiftAsync = lift => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);
    database
      .ref(`users/${uid}/lifts`)
      .push({
        ...lift
      })
      .then(ref => {
        dispatch(
          addLift({
            liftID: ref.key,
            ...lift
          })
        );
      });
  };
};

//EDIT_LIFT

export const editLift = (liftID, updates) => ({
  type: "EDIT_LIFT",
  liftID,
  updates
});

export const editLiftAsync = (liftID, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/lifts/${liftID}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editLift(liftID, updates));
      });
  };
};

//DELETE_LIFT

export const deleteLift = liftID => ({
  type: "DELETE_LIFT",
  liftID
});

export const deleteLiftAsync = liftID => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/lifts/${liftID}`)
      .remove()
      .then(() => {
        dispatch(deleteLift(liftID));
      });
  };
};
