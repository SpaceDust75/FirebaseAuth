// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import {initializeApp} from "firebase";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgK7s280e5jOyAcpkkJnL11EfSHG8Zgdw",
  authDomain: "kidinbus.firebaseapp.com",
  projectId: "kidinbus",
  storageBucket: "kidinbus.appspot.com",
  messagingSenderId: "578952650695",
  appId: "1:578952650695:web:b17fb84d3360fdbbd843e2"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};