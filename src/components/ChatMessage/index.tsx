import React, { FC, useContext } from 'react';
import { FirebaseContext } from '../../contexts/firebase.context';

interface IChatMessage {
  text: string,
  id: string,
  photoURL: string,
}

const ChatMessage: FC<IChatMessage> = ({ text, id, photoURL }: IChatMessage) => {
  const { auth } = useContext(FirebaseContext);
  const messageClass = id === auth.currentUser?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  )
}

export default ChatMessage;