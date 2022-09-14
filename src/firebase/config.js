import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCENqq_EC_9J1bH5F8hPmU7_uMiqCRMIPM",
  authDomain: "portifolio-e410c.firebaseapp.com",
  projectId: "portifolio-e410c",
  storageBucket: "portifolio-e410c.appspot.com",
  messagingSenderId: "471478683733",
  appId: "1:471478683733:web:003f543a9882eff47eecdc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
