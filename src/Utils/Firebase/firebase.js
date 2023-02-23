// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMeBXjwMZMzQlC6tgdS8pPIxQK-X9Rtqk",
  authDomain: "shotohub-db.firebaseapp.com",
  projectId: "shotohub-db",
  storageBucket: "shotohub-db.appspot.com",
  messagingSenderId: "334654014602",
  appId: "1:334654014602:web:97a01d1763600333e6d973"
};


const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log(userDocRef,'userDocRef')
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot,'userSnapShot')
  console.log(userSnapShot.exists())


if (!userSnapShot.exists()){
  const {displayName,email} = userAuth;
  const createdAt = new Date();


try {
  await setDoc(userDocRef,{displayName,email,createdAt})
}

catch(error){
  console.log('error creating user',error.message)
}

};

return userDocRef;

}



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)