import { FirebaseOptions } from '@firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBGSoAnm0RGK_Ub9AUuSMLeZRL3esBEUn8",
  authDomain: "nextfire-c85f5.firebaseapp.com",
  projectId: "nextfire-c85f5",
  storageBucket: "nextfire-c85f5.appspot.com",
  messagingSenderId: "507716848873",
  appId: "1:507716848873:web:5b6579cc653e5b2b2b7478",
  measurementId: "G-VMVCN37YFZ"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()