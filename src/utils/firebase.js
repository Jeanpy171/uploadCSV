// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//PRODUCTIONDB
// const firebaseConfig = {
//   apiKey: "AIzaSyBqdDpABnYFDFmT-ttbx0XVyxNbAp_vT7Y",
//   authDomain: "segunda-es-todo-production.firebaseapp.com",
//   projectId: "segunda-es-todo-production",
//   storageBucket: "segunda-es-todo-production.appspot.com",
//   messagingSenderId: "850805934173",
//   appId: "1:850805934173:web:c78b48495d3827665fa5b4",
//   measurementId: "G-0VHCEP67E6",
// };

//TESTDB
const firebaseConfig = {
  apiKey: "AIzaSyD3tzUWpDwEMzeBnH0Zc1Z4_NFV_noTyjc",
  authDomain: "segundaestodoapp.firebaseapp.com",
  databaseURL: "https://segundaestodoapp-default-rtdb.firebaseio.com",
  projectId: "segundaestodoapp",
  storageBucket: "segundaestodoapp.appspot.com",
  messagingSenderId: "917966498579",
  appId: "1:917966498579:web:e7c247c1f79709056048e6",
  measurementId: "G-NMH9NR2JMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const addDinamicDocument = async (collectionName, id, data) => {
  await setDoc(doc(firestore, collectionName, id), data);
};
