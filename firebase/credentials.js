import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXXXXXXXX",
  authDomain: "XXXXXX",
  projectId: "XXXXXX",
  storageBucket: "XXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXX",
  appId: "XXXXXXXXX"
};

const frapp = initializeApp(firebaseConfig);
const auth = getAuth(frapp);
const db = getFirestore(frapp)

export {db, auth};