// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDQhdNFZGw4ax4Dr4_cuoUp35x3-bIp0iw",
  authDomain: "bulgetextapp.firebaseapp.com",
  projectId: "bulgetextapp",
  storageBucket: "bulgetextapp.firebasestorage.app",
  messagingSenderId: "1031448447701",
  appId: "1:1031448447701:web:e9a776bc90911c1932305c",
  measurementId: "G-YQRWG2KR0J"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {db}
