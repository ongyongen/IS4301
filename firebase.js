import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB1h2wQb6JLX6MlD7CIVb8C-z5sQ41z2rU',
    authDomain: 'jpm-cfg-b58c7.firebaseapp.com',
    projectId: 'jpm-cfg-b58c7',
    storageBucket: 'jpm-cfg-b58c7.appspot.com',
    messagingSenderId: '1070199726455',
    appId: '1:1070199726455:web:c0ea05237021c91298c172',
    measurementId: 'G-2G74G32785',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // set up authentication


