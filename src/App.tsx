import React, { useContext } from 'react';
import { FirebaseContext } from './contexts/firebase.context';
import SignIn from './components/SignIn';
import WaitingRoom from './pages/WaitingRoom';

function App() {
  const { user } = useContext(FirebaseContext);
  return (
    <div className="App">
      <header></header>
      <section>
        {
          user ? <WaitingRoom /> : <SignIn />
        }
      </section>
    </div>
  );
}

export default App;
