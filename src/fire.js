import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMBhYymrhIqfVz_6L_ccWsQV0iGEIMB3Y",
  authDomain: "react-hackaton.firebaseapp.com",
  projectId: "react-hackaton",
  storageBucket: "react-hackaton.appspot.com",
  messagingSenderId: "412491220677",
  appId: "1:412491220677:web:2c331ff50212d6f7f412ac",
  measurementId: "G-6E9RS4ZT40",
};

export default fire.initializeApp(firebaseConfig);
