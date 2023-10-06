
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw6JoP59Fa7cdHs24-LAotHNH1NOpAWUI",
    authDomain: "doctorapp-bf33f.firebaseapp.com",
    projectId: "doctorapp-bf33f",
    storageBucket: "doctorapp-bf33f.appspot.com",
    messagingSenderId: "265021370221",
    appId: "1:265021370221:web:2cba60d74624f3dcdf7464"
  };

// firestore Configg 
const firebaseConfigfirestore = {
  apiKey: "AIzaSyAr_cm5PlJdZ1ekzwdaS_aT0EjEc7gDZ5M",
  authDomain: "fir-abff8.firebaseapp.com",
  projectId: "fir-abff8",
  storageBucket: "fir-abff8.appspot.com",
  messagingSenderId: "128538596454",
  appId: "1:128538596454:web:0b3fac73f686a5adc7c9a7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth , firebaseConfigfirestore};