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
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore()


 export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) => {

  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=> {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);

  })

    await batch.commit();




}


export const getCategoriesAndDocuments = async () => {

  const collectionRef = collection(db,'categories');

  const q = query(collectionRef);


  const querySnapshot = await getDocs(q);


  return querySnapshot.docs.map(docSnapshot=>docSnapshot.data());


}


export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  
  const userSnapShot = await getDoc(userDocRef)

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


 
  export const signOutUser = async () => await signOut(auth);


  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);


  export const getCurrentUser = () => {

    return new Promise((resolve,reject)=>{

      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth)=>{
          unsubscribe();
          resolve(userAuth);

          }

        )


    }
    )

  }
  






export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth);

