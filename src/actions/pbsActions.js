import database from "../firebase/firebase";

// FETCH_PBS

export const fetchPbs = pbs => ({
  type: "FETCH_PBS",
  pbs
});

export const fetchPbsAsync = uid => {
  return dispatch => {
    const pbs = [];
    return database
      .ref(`users/${uid}/pbs`)
      .once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          childSnapshot.forEach(childChildSnapshot => {
            pbs.push({
              pbID: childChildSnapshot.key,
              liftID: childSnapshot.key,
              ...childChildSnapshot.val()
            });
          });
        });
      })
      .then(() => dispatch(fetchPbs(pbs)));
  };
};

//ADD_PB

export const addPb = pb => ({
  type: "ADD_PB",
  pb
});

export const addPbAsync = (liftID, pb) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/pbs/${liftID}`)
      .push({
        ...pb
      })
      .then(ref => {
        dispatch(
          addPb({
            ...pb,
            pbID: ref.key,
            liftID
          })
        );
      });
  };
};

//EDIT_PB

export const editPb = (pbID, updates) => ({
  type: "EDIT_PB",
  pbID,
  updates
});

export const editPbAsync = (liftID, pbID, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/pbs/${liftID}/${pbID}`)
      .update({
        ...updates
      })
      .then(() => dispatch(editPb(pbID, updates)));
  };
};

//DELETE_PB

export const deletePb = pbID => ({
  type: "DELETE_PB",
  pbID
});

export const deleteLiftPbs = liftID => ({
  type: "DELETE_LIFT_PBS",
  liftID
});

export const deletePbAsync = (liftID, pbID) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/pbs/${liftID}/${pbID}`)
      .remove()
      .then(() => dispatch(deletePb(pbID)));
  };
};

export const deleteLiftPbsAsync = liftID => {
  // when deleting a lift, delete all pbs under that lift
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/pbs/${liftID}`)
      .remove()
      .then(() => dispatch(deleteLiftPbs(liftID)));
  };
};
