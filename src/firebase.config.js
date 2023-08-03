import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCw8qg5CSC8ykPEryiCPGDGA5oTdHYkPTc",
  authDomain: "foodapp-826c4.firebaseapp.com",
  databaseURL: "https://foodapp-826c4-default-rtdb.firebaseio.com",
  projectId: "foodapp-826c4",
  storageBucket: "foodapp-826c4.appspot.com",
  messagingSenderId: "1028845475865",
  appId: "1:1028845475865:web:49ffe21c9dd16a1e023288",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
