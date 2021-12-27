import { FirebaseOptions, initializeApp } from '@firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBGSoAnm0RGK_Ub9AUuSMLeZRL3esBEUn8",
  authDomain: "nextfire-c85f5.firebaseapp.com",
  projectId: "nextfire-c85f5",
  storageBucket: "nextfire-c85f5.appspot.com",
  messagingSenderId: "507716848873",
  appId: "1:507716848873:web:5b6579cc653e5b2b2b7478",
  measurementId: "G-VMVCN37YFZ"
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()

export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)