import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBcVD8hLr3h5DXOkQ9jJFdGoXeDBKpiak",
  authDomain: "masbrillo-70109.firebaseapp.com",
  projectId: "masbrillo-70109",
  storageBucket: "masbrillo-70109.appspot.com",
  messagingSenderId: "269912057567",
  appId: "1:269912057567:web:89d58c8853baa7dd77eb6a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
