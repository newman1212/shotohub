import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../Form-Input/FormInput';
import Button, { BUTTON_TYPES_CLASSES } from '../Button/button';

import { SignInContainer, ButtonsContainer } from './SignIn.styles';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../Utils/Firebase/firebase';
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from '../../Store/User/user.action';








const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPES_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            <span>Sign In With Google</span>
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
