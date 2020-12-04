import React, { FC, useContext } from 'react';
import { FirebaseContext } from '../../contexts/firebase.context';

const SignIn: FC = () => {
  const { googleAuthProvider, auth } = useContext(FirebaseContext);

  const handleSignin = () => {
    auth.signInWithPopup(googleAuthProvider);
  }

  return (
    <button onClick={handleSignin}>
      Sign in with Google!
    </button>
  )
}

export default SignIn;