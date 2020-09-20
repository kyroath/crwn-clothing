import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAz3kMUhFI6oAOYw8UHG1nrbFuL_liLTiQ',
  authDomain: 'crwn-db-d4dca.firebaseapp.com',
  databaseURL: 'https://crwn-db-d4dca.firebaseio.com',
  projectId: 'crwn-db-d4dca',
  storageBucket: 'crwn-db-d4dca.appspot.com',
  messagingSenderId: '582998421956',
  appId: '1:582998421956:web:0ddff1e38074e3f1f6b491',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
