import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const loginAsync = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const logoutAsync = () => {
  return () => {
    firebase.auth().signOut();
  };
};
