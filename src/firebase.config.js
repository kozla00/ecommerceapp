import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBO9vD3X8E0R7wZBRi2pRfw7MGfG9OU884",
    authDomain: "ecommerceapp-56290.firebaseapp.com",
    databaseURL: "https://ecommerceapp-56290-default-rtdb.firebaseio.com",
    projectId: "ecommerceapp-56290",
    storageBucket: "ecommerceapp-56290.appspot.com",
    messagingSenderId: "853340922550",
    appId: "1:853340922550:web:dce87dc00b521928eabc17"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
  
export { app, firestore, storage };