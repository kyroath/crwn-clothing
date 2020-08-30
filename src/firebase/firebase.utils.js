import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAz3kMUhFI6oAOYw8UHG1nrbFuL_liLTiQ",
  authDomain: "crwn-db-d4dca.firebaseapp.com",
  databaseURL: "https://crwn-db-d4dca.firebaseio.com",
  projectId: "crwn-db-d4dca",
  storageBucket: "crwn-db-d4dca.appspot.com",
  messagingSenderId: "582998421956",
  appId: "1:582998421956:web:0ddff1e38074e3f1f6b491",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
