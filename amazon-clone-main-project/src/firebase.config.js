// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD60rKS1crlZLTttRmNHGbWtB4-M_5w1Mk",
  authDomain: "react-clone-eb0c4.firebaseapp.com",
  projectId: "react-clone-eb0c4",
  storageBucket: "react-clone-eb0c4.appspot.com",
  messagingSenderId: "386502782749",
  appId: "1:386502782749:web:a82113894d0bc5504afbf4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig