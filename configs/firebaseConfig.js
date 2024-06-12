import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, deleteDoc } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBAvlNX6Lyxe9NSQI1nU-19VzZdFDxH2oM",
  authDomain: "transportadora-3c3d8.firebaseapp.com",
  projectId: "transportadora-3c3d8",
  storageBucket: "transportadora-3c3d8.appspot.com",
  messagingSenderId: "345343521842",
  appId: "1:345343521842:web:43cf38c5c9d41ac702b82b"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
export {database, collection, doc, deleteDoc};
