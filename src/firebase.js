import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJ96nQ0AK7JJqjRv2Y5_vXBGmaSD2ypVM",
    authDomain: "clone-9264a.firebaseapp.com",
    projectId: "clone-9264a",
    storageBucket: "clone-9264a.appspot.com",
    messagingSenderId: "809866692839",
    appId: "1:809866692839:web:d7c1b38a663a52e001fa42"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};

