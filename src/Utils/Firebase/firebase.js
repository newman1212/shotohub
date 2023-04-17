// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,


} 
from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from "firebase/firestore";

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


const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account"
})

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()


 export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) => {

  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=> {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);

  })

    await batch.commit();

    console.log('done')


}


export const getCategoriesAndDocuments = async () => {

  const collectionRef = collection(db,'categories');

  // console.log(collectionRef,'collectionRef')

  const q = query(collectionRef);
  // console.log(q,'query');

  const querySnapshot = await getDocs(q);

  // console.log(querySnapshot)

  const categoryMap =  querySnapshot.docs.reduce((acc,docSnapshot) => {

    // console.log(docSnapshot.data())

    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;

  },{})

  return categoryMap;


}


export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log(userDocRef,'userDocRef')
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot,'userSnapShot')
  console.log(userSnapShot.exists())


if (!userSnapShot.exists()){
  const {displayName,email} = userAuth;
  const createdAt = new Date();


try {
  await setDoc(userDocRef,{displayName,email,createdAt,...additionalInfo})
}

catch(error){
  console.log('error creating user',error.message)
}

};

return userDocRef;

}


export const createAuthUserWithEmailAndPassword = async(email,password) => {

  if(!email || !password) return;
    

  return await createUserWithEmailAndPassword(auth,email,password)
  }
  


export const signInAuthUserWithEmailAndPassword = async(email,password) => {

  if(!email || !password) return;
    

  return await signInWithEmailAndPassword(auth,email,password)
  }


  export const signOutUser = async() => {
   const res = await signOut(auth);

   
  }


  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)
  






export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth);

