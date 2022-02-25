import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_KYCrBaNwm1VFxGv9wXZCO5eOOkP2hUY",
  authDomain: "vue3firebase9.firebaseapp.com",
  projectId: "vue3firebase9",
  storageBucket: "vue3firebase9.appspot.com",
  messagingSenderId: "909733465346",
  appId: "1:909733465346:web:cffb9428c5d569ec06061b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;
