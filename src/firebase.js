// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBviqJ0FtpN4k7JnM3LyLu1CvSa6cy4PFA',
  authDomain: 'realtor-clone-6295d.firebaseapp.com',
  projectId: 'realtor-clone-6295d',
  storageBucket: 'realtor-clone-6295d.appspot.com',
  messagingSenderId: '531258325671',
  appId: '1:531258325671:web:d22174c6fb4a74d2eff982',
  measurementId: 'G-WB7TYL0Q47',
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
