import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

const config = {
    apiKey: 'AIzaSyDWEuxQZ8nkjoBbRAgC-cDIQHlqVcYgd0Y',
    authDomain: 'rpg-manager-8fe53.firebaseapp.com',
    databaseURL: 'https://rpg-manager-8fe53.firebaseio.com',
    storageBucket: 'rpg-manager-8fe53.appspot.com',
    messagingSenderId: '32736213244'
  };
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

injectTapEventPlugin();
