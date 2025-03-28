// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo7GLcs4C7DKv6kukjt9GDHk2Ee1FnvJ4",
  authDomain: "educations-fb2da.firebaseapp.com",
  projectId: "educations-fb2da",
  storageBucket: "educations-fb2da.firebasestorage.app",
  messagingSenderId: "1065359544969",
  appId: "1:1065359544969:web:9bc32b83d23ce33fa62c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;