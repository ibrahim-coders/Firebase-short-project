// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnMz0uUYhIHqYY-ip81Jz3ZjPAoYpPFM8',
  authDomain: 'my-fast-project-6b8d8.firebaseapp.com',
  projectId: 'my-fast-project-6b8d8',
  storageBucket: 'my-fast-project-6b8d8.firebasestorage.app',
  messagingSenderId: '123583003370',
  appId: '1:123583003370:web:75e289424537e1e4ae7593',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
