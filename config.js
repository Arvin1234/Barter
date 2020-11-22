import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyACTziLRDTZUWg-9Lfd8HiuTTBSMg_HRmo",
  authDomain: "book-santa-82f41.firebaseapp.com",
  databaseURL: "https://book-santa-82f41.firebaseio.com",
  projectId: "book-santa-82f41",
  storageBucket: "book-santa-82f41.appspot.com",
  messagingSenderId: "899192612743",
  appId: "1:899192612743:web:49858fc41c8678d0355522"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();