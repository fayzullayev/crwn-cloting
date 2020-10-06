import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCsTTgViL3mpykOKl68_crhCVtaRwx6EB4",
  authDomain: "crwn-db-d7cfb.firebaseapp.com",
  databaseURL: "https://crwn-db-d7cfb.firebaseio.com",
  projectId: "crwn-db-d7cfb",
  storageBucket: "crwn-db-d7cfb.appspot.com",
  messagingSenderId: "447019987976",
  appId: "1:447019987976:web:6b621ea49b78f153948dbd",
  measurementId: "G-SJVP1SMJH0",
};

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additinalData,
      });
    } catch (e) {
      console.log("error creating user : ", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
