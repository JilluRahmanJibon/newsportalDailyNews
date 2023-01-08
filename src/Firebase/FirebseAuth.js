import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8Z-bW1cL5sitOCrQKzyJYS58lZQNZoPs",
  authDomain: "newsportal-dailynews.firebaseapp.com",
  projectId: "newsportal-dailynews",
  storageBucket: "newsportal-dailynews.appspot.com",
  messagingSenderId: "987538244424",
  appId: "1:987538244424:web:31a3aeec2846852ecae97d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app