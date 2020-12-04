import React, { createContext, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
firebase.initializeApp({
  apiKey: "AIzaSyDbvDrscu-ah5XQ-mngSRTmScFUefnTXJE",
  authDomain: "simple-react-chat-937db.firebaseapp.com",
  projectId: "simple-react-chat-937db",
  storageBucket: "simple-react-chat-937db.appspot.com",
  messagingSenderId: "938491989935",
  appId: "1:938491989935:web:c155c4ba2c0991d683e95a",
  measurementId: "G-Q0SG0NE8K3"
});
const auth = firebase.auth();
const firestore = firebase.firestore();


interface IFirebaseContext {
  auth: firebase.auth.Auth,
  firestore: firebase.firestore.Firestore,
  googleAuthProvider: firebase.auth.GoogleAuthProvider,
  serverTimeStamp: object,
  user: any,
}

interface IFirebaseProvider {
  children: JSX.Element | JSX.Element[],
}

export const FirebaseContext = createContext({} as IFirebaseContext)

export const FirebaseProvider = ({ children }: IFirebaseProvider) => {
  const [user] = useAuthState(auth);
  const googleAuthProvider = useMemo(() => new firebase.auth.GoogleAuthProvider(), []);
  const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp();

  const contextValue = useMemo<IFirebaseContext>(() => ({
    googleAuthProvider,
    user,
    auth,
    firestore,
    serverTimeStamp,
  }), [user, serverTimeStamp, googleAuthProvider]);

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  )
}