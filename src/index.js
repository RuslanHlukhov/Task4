import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCHfore195vSh8RvG9SJBN64H4KB6Ak-2w",
  authDomain: "task4-a7f7f.firebaseapp.com",
  databaseURL: "https://task4-a7f7f-default-rtdb.firebaseio.com",
  projectId: "task4-a7f7f",
  storageBucket: "task4-a7f7f.appspot.com",
  messagingSenderId: "288786156768",
  appId: "1:288786156768:web:8ce2dea3c072bcb9efd485",
  measurementId: "G-9VJW9FYWE1"
};

export const Context = createContext(null)
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
export const auth = firebase.auth();
const firestore = firebase.firestore();

// export default firebase;



ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
