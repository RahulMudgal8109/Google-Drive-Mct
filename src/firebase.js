import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBjGRQ1JTM3nRxwziiYSekyQgU6-sTZ-sU",
    authDomain: "drive-clone-145fc.firebaseapp.com",
    projectId: "drive-clone-145fc",
    storageBucket: "drive-clone-145fc.appspot.com",
    messagingSenderId: "315217624039",
    appId: "1:315217624039:web:771bea3323a824af765b42"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const storage=firebase.storage();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db,storage,auth,provider}
