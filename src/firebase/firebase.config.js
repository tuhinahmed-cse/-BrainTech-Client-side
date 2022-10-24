// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs9cW-pfGvxQQMviGggsYUqRHYVOgVtaA",
  authDomain: "learning-platform-client-aa99b.firebaseapp.com",
  projectId: "learning-platform-client-aa99b",
  storageBucket: "learning-platform-client-aa99b.appspot.com",
  messagingSenderId: "328658707742",
  appId: "1:328658707742:web:c71cfe3c150e18ea31150f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;