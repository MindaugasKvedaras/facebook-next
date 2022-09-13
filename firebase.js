import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDGl15UeMODZ9jblJ-5XAYl0I_2HCfnt0",
    authDomain: "facebook-fe9af.firebaseapp.com",
    projectId: "facebook-fe9af",
    storageBucket: "facebook-fe9af.appspot.com",
    messagingSenderId: "367380684094",
    appId: "1:367380684094:web:f8ffa4c736a6815650a06f"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage }; 
