import React from 'react';
import SignUp from '../../Components/Sign-Up-Form/SignUp';
import SignIn from '../../Components/Sign-In-Form/SignIn';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn/>
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;



