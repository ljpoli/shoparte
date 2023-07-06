import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDumhPPIJcpvJmyb7dvB76PlpJxCSv_YKk",
  authDomain: "shoparte-19285.firebaseapp.com",
  projectId: "shoparte-19285",
  storageBucket: "shoparte-19285.appspot.com",
  messagingSenderId: "870692879817",
  appId: "1:870692879817:web:c0ee5416cb1501b69a3c18"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);