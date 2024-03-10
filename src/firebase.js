
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCePS0NwNgqSS7BoPXaxjhIQQX73P8PLw4",
  authDomain: "voyawander-main.firebaseapp.com",
  projectId: "voyawander-main",
  storageBucket: "voyawander-main.appspot.com",
  messagingSenderId: "1045501989301",
  appId: "1:1045501989301:web:ade3ef720d101d196709fc",
  measurementId: "G-XLPGNBKE4P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app,auth,provider};