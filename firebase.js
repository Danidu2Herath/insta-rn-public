{
  {
    /* import * as firebase from "firebase/app"; */
  }
}
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

/* cSpell:disable */
const firebaseConfig = {
  apiKey: "AIzaSyBIAqfTpwjBu9X4iNmtlZblNxgAKvXSKE8",
  authDomain: "insta-clone-3a18f.firebaseapp.com",
  projectId: "insta-clone-3a18f",
  storageBucket: "insta-clone-3a18f.appspot.com",
  messagingSenderId: "753133418451",
  appId: "1:753133418451:web:82a5a6f2a4eefae9e12126",
};

/* cSpell:enable */
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
