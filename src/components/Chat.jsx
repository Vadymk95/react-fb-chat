import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  return <div>chat</div>;
};

export default Chat;
