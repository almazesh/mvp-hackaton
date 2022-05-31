import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3g4IlSpSKz2VlbbFZkdkERqfUo9Wfj20",
  authDomain: "mvp-crafters.firebaseapp.com",
  projectId: "mvp-crafters",
  storageBucket: "mvp-crafters.appspot.com",
  messagingSenderId: "203090353286",
  appId: "1:203090353286:web:4f4f57254c66ec571e0507"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getDatabase(app)

export const authentification = getAuth(app)


