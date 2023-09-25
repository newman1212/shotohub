import React from 'react';
import {useState} from 'react';
import { signInAuthUserWithEmailAndPassword,signInWithGooglePopup} from '../../Utils/Firebase/firebase';
import FormInput from '../Form-Input/FormInput'
import './SignIn.scss'
import Button , {BUTTON_TYPES_CLASSES} from '../Button/button' 

const defaultFormFields = {
email :'',
password :'',
}




const SignIn = () => {


	const [formFields,setFormFields] = useState(defaultFormFields);
	const {email,password} = formFields;



	  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };



  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

// const signInWithGoogle = async() => {

// 		const user = await signInWithGooglePopup();
// 		await createUserDocumentFromAuth(user)
// 	}....MY CODE









  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      console.log('successful')
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };
// const handleSignIn = async(event) => {
// 	event.preventDefault()

// 	try{ 
// 		resetFormFields();
// 		const {user} = await signInAuthUserWithEmailAndPassword(email,password);
// 		// console.log(response)

	

// 	}
// 	catch(error){ 

// 		switch(error.code){
// 		case 'auth/wrong-password':
// 			alert('wrong password for email')
// 			break;
// 		case 'auth/user-not-found':
// 			alert('user does not exist')
// 			break;
// 		default: console.log("Error")
// 		}


		
// }


// 	}...MY CODE


const handleChange =(event) =>{

	const {name,value} = event.target; 
	setFormFields({...formFields,[name]:value}) 

	console.log(value) 


}


return(
	<div className = 'sign-up-container'>
		<h2>Already have an account?</h2>
		<span>Sign In with your email and password</span>

		<form>


			<FormInput required type='email' onChange={handleChange} name ='email' value={email} label="email"/>
				
			<FormInput required type='password' onChange={handleChange} name ='password' value ={password} label="password"/>



		<div className= 'buttons-container'>


			<Button onClick = {handleSignIn }  type="submit">Sign In</Button>
			<Button  type="button" buttonType = {BUTTON_TYPES_CLASSES.google} onClick = {signInWithGoogle}>Google Sign In</Button>

		</div>





		</form>


	</div>



	)




}

export default SignIn;


















// import { useState } from 'react';

// import FormInput from '../form-input/form-input.component';
// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import {
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from '../../utils/firebase/firebase.utils';

// import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

// const defaultFormFields = {
//   email: '',
//   password: '',
// };

// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { email, password } = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const signInWithGoogle = async () => {
//     await signInWithGooglePopup();
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await signInAuthUserWithEmailAndPassword(email, password);
//       resetFormFields();
//     } catch (error) {
//       console.log('user sign in failed', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <SignInContainer>
//       <h2>Already have an account?</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={email}
//         />

//         <FormInput
//           label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={password}
//         />
//         <ButtonsContainer>
//           <Button type='submit'>Sign In</Button>
//           <Button
//             buttonType={BUTTON_TYPE_CLASSES.google}
//             type='button'
//             onClick={signInWithGoogle}
//           >
//             Sign In With Google
//           </Button>
//         </ButtonsContainer>
//       </form>
//     </SignInContainer>
//   );
// };

// export default SignInForm;






