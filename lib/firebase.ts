import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhd0pT-4waukalKlVlFY3a6byeeK1uKgI",
  authDomain: "studytogetherapp-f8f76.firebaseapp.com",
  projectId: "studytogetherapp-f8f76",
  storageBucket: "studytogetherapp-f8f76.firebasestorage.app",
  messagingSenderId: "1026268636545",
  appId: "1:1026268636545:web:a9fbc2795fe5a7a527f480",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, facebookProvider, githubProvider };
