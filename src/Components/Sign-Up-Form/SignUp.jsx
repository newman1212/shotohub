import React from 'react';
import {useState} from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../Utils/Firebase/firebase';
import FormInput from '../Form-Input/FormInput'
import './signUp.scss'
import Button from '../Button/button'


const defaultFormFields = {

displayName :'',
email :'',
password :'',
confirmPassword :''
}



const SignUp = () => {

	const [formFields,setFormFields] = useState({defaultFormFields});
	const {displayName,email,password,confirmPassword} = formFields;

	console.log(formFields)

	const resetFormFields =()=>{
		setFormFields(defaultFormFields)
	}

const handleSubmit = async(event) => {
	event.preventDefault()

	if(password!==confirmPassword) {
		alert('passwords do not match');
		return;
	}

	try{ const {user} = await createAuthUserWithEmailAndPassword(email,password);
		await createUserDocumentFromAuth(user,{displayName});
		resetFormFields();

	}
	catch(error){ if(error.code=='auth/email-already-in-use'){alert('email already exist')}
	console.log('error creating user', error)}
}

const handleChange =(event) =>{

	const {name,value} = event.target;
	setFormFields({...formFields,[name]:value})  


}

return(
	<div className = 'sign-up-container'>
		<h2>Don't have an account?</h2>
		<span>Sign up with your email and password</span>

		<form onSubmit={handleSubmit}>

			<FormInput required type='text' onChange={handleChange} name ='displayName' value ={displayName} label ="displayName"/>

			<FormInput required type='email' onChange={handleChange} name ='email' value ={email} label="email"/>
				
			<FormInput required type='password' onChange={handleChange} name ='password' value ={password} label="password"/>

			<FormInput required type='password' onChange={handleChange} name ='confirmPassword' value ={confirmPassword} label="re-enter password"/>

			<Button  type="submit">Sign Up</Button>


		</form>


	</div>



	)




}

export default SignUp;  