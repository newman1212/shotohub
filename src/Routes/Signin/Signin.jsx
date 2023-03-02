import React from 'react';
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';
import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from '../../Utils/Firebase/firebase'
import SignUp from '../../Components/Sign-Up-Form/SignUp'


const Signin = () => {

	// useEffect(() => {

	// 	const redirectfunc = async()=>{
	// 	const response = await getRedirectResult(auth);
	// 		if (response){const userDocRef = await createUserDocumentFromAuth(response.user)} 

	// 	}

	// 	redirectfunc()

		
	// }, []);



	const logGoogleUser = async() => {

		const {user} = await signInWithGooglePopup();
		// const userDocRef = await createUserDocumentFromAuth(user)
	}




	// const logGoogleRedirectUser = async() => {

	// 	const {user} = await signInWithGoogleRedirect();
	// 	console.log(user)
		
	// }







	return(



			<div>
			 	<h1> This is the Sign In Page</h1>
			 	<button onClick = {logGoogleUser}>Sign In With Google PopUp</button>
			 	<SignUp/>


		      
		    </div>
		    
		    

		)
}



export default Signin;





