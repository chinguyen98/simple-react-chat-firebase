import React, { FormEvent, useContext, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../../contexts/firebase.context';
import { IMessage } from '../../dtos/message.dto';
import ChatMessage from '../ChatMessage';

function Chatroom() {
  const { firestore, auth, serverTimeStamp } = useContext(FirebaseContext);
  const [inputValue, setInputValue] = useState<string>('')

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('created_at').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser || {};

    await messageRef.add({
      uid,
      text: inputValue,
      photoURL: photoURL,
      created_at: serverTimeStamp,
      name: displayName,
    } as IMessage)

    setInputValue('');
  }

  return (
    <>
      <div>
        {
          messages && (messages as IMessage[]).map(({ uid, text, created_at, photoURL, name }) => (
            <ChatMessage
              key={uid}
              id={uid}
              text={text}
              photoURL={photoURL}
              name={name}
            />
          ))
        }
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Chatroom;