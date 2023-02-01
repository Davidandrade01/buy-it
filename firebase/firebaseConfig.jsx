
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRlZ7IccNxe-Lo8T3GNq6Z-OrW4hfR1bE",
  authDomain: "buyit-a18e7.firebaseapp.com",
  projectId: "buyit-a18e7",
  storageBucket: "buyit-a18e7.appspot.com",
  messagingSenderId: "656716305938",
  appId: "1:656716305938:web:4fe65fd30b8abdec3deacb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

export{db,auth}