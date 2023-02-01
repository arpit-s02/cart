import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAL7D44jMVweGxLf0X2t0ivzSRhUCf6D3Y",
  authDomain: "cart-7fb12.firebaseapp.com",
  projectId: "cart-7fb12",
  storageBucket: "cart-7fb12.appspot.com",
  messagingSenderId: "928169286651",
  appId: "1:928169286651:web:88409a2db1f6451542c95e"
};

const firebase = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <App />
 
);

export default firebase;
