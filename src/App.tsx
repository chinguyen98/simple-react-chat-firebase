import React, { useContext } from 'react';
import Chatroom from './components/Chatroom';
import SignIn from './components/SignIn';
import { FirebaseContext } from './contexts/firebase.context';

function App() {
  const { user } = useContext(FirebaseContext);
  return (
    <div className="App">
      <header></header>
      <section>
        {
          user ? <Chatroom /> : <SignIn />
        }
      </section>
    </div>
  );
}

export default App;
