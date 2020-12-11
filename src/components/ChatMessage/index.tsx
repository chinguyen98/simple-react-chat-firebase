import React, { FC, useContext } from 'react';
import { FirebaseContext } from '../../contexts/firebase.context';

interface IChatMessage {
  text: string,
  id: string,
  photoURL: string,
  name: string,
}

const ChatMessage: FC<IChatMessage> = ({ text, id, photoURL, name }: IChatMessage) => {
  const { auth } = useContext(FirebaseContext);
  const messageClass = id === auth.currentUser?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <b><p>{name}</p></b>
      <img alt="notfound_photo" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  )
}

export default ChatMessage;