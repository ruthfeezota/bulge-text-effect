// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  where,
} from 'firebase/firestore'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  signInAnonymously,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth'


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
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const yahooProvider = new OAuthProvider('yahoo.com');

const usersReference = collection(db, 'users');
const taskReference = collection(db, 'tasks');

// - - - - - Authentication - - - - -

// Google Authentication
const googleAuth = async () => {
  try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
          const userData = {
              'uid': user.uid,
              'name': user.displayName ? user.displayName : null,
          }
          await addDoc(usersReference, userData);
      }
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Facebook Authentication
const facebookAuth = async () => {
  try {
      const response = await signInWithPopup(auth, facebookProvider);
      const user = response.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
          const userData = {
              'uid': user.uid,
              'name': user.displayName ? user.displayName : null,
          }
          await addDoc(usersReference, userData);
      }
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Github Authentication
const githubAuth = async () => {
  try {
      const response = await signInWithPopup(auth, githubProvider);
      const user = response.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
          const userData = {
              'uid': user.uid,
              'name': user.displayName ? user.displayName : null,
          }
          await addDoc(usersReference, userData);
      }
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Yahoo Authentication
const yahooAuth = async () => {
  try {
      const response = await signInWithPopup(auth, yahooProvider);
      const user = response.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
          const userData = {
              'uid': user.uid,
              'name': user.displayName ? user.displayName : null,
          }
          await addDoc(usersReference, userData);
      }
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Anonymous Authentication
const anonAuth = async () => {
  try {
      const response = await signInAnonymously(auth);
      const user = response.user;
      const userData = {
          'uid': user.uid,
          'name': null,
      }
      await addDoc(usersReference, userData);
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Email and Password Authentication
const emailPasswordAuth = async (email, password) => {
  try {
      await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Register a new user
const register = async (email, password) => {
  try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const userData = {
          'uid': user.uid,
          'name': null,
      }
      await addDoc(usersReference, userData);
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// Logout
const logout = () => {
  try {
      signOut(auth);
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

const reset = async (email) => {
  try {
      await sendPasswordResetEmail(auth, email);
      alert('Email sent. Check you inbox.')
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
}

// - - - - - Firestore - - - - -

// Add new task
const addNewTask =  async (data) => {
  await addDoc(taskReference, data);
}

export {
  emailPasswordAuth,
  usersReference,
  taskReference,
  addNewTask,
  facebookAuth,
  googleAuth,
  githubAuth,
  yahooAuth,
  register,
  anonAuth,
  logout,
  reset,
  auth,
  db,
}
