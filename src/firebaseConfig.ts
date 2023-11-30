// // Import the functions you need from the SDKs you need

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCTHNd61Md7IYEzsV_O813o1nVB_foFNEo",
//   authDomain: "edulearnbase.firebaseapp.com",
//   projectId: "edulearnbase",
//   storageBucket: "edulearnbase.appspot.com",
//   messagingSenderId: "215059212684",
//   appId: "1:215059212684:web:f7a9daf51a6610d5cf0ea9",
//   measurementId: "G-5YPQSRLC8J",
// };

// // firebase.initializeApp(firebaseConfig);
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default firebase;

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCFtNwuGOQ1TvulOQp3j5SatJEpWdnF0J4",
  authDomain: "dbedulearn.firebaseapp.com",
  projectId: "dbedulearn",
  storageBucket: "dbedulearn.appspot.com",
  messagingSenderId: "1023417292801",
  appId: "1:1023417292801:web:889b40bb42c2f07f9c0800",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export {
  auth,
  database,
  createUserWithEmailAndPassword,
  ref,
  set,
  signInWithEmailAndPassword,
};
