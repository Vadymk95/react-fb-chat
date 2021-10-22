import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { createContext } from 'react';

firebase.initializeApp({
  apiKey: 'AIzaSyDWTbAIACcnC_Ocw4KzHC7F1GeemSMbBPQ',
  authDomain: 'chat-react-3b324.firebaseapp.com',
  projectId: 'chat-react-3b324',
  storageBucket: 'chat-react-3b324.appspot.com',
  messagingSenderId: '966582372200',
  appId: '1:966582372200:web:7cbab06e9e8fcf666a78dd',
  measurementId: 'G-WRHPY7WPZP',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
