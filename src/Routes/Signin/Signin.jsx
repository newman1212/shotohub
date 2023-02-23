import React from 'react';
import {signInWithGooglePopup,createUserDocumentFromAuth } from '../../Utils/Firebase/firebase'


const Signin = () => {

	const logGoogleUser = async() => {

		const {user} = await signInWithGooglePopup();
		createUserDocumentFromAuth(user)

	}






	return(



			<div>
			 	<h1> This is the Sign In Page</h1>
			 	<button onClick = {logGoogleUser}>Sign In With Google PopUp</button>
		      
		    </div>
		    
		    

		)
}



export default Signin;





