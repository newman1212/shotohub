import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './Utils/Firebase/firebase';

import Home from './Routes/Home/Home';
import Navigation from './Routes/Navigation/Navigation';
import Authentication from './Routes/Authentication/authentication';
import Shop from './Routes/Shop/shop';
import Checkout from './Routes/Checkout/checkout';
import ContactPage from './Routes/Contact/contact';
import { setCurrentUser } from './Store/User/user-reducer';



const App = () => {
      const dispatch = useDispatch();


    useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {

   if (user) {
        createUserDocumentFromAuth(user);
      }

      const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));


    });



    return unsubscribe;

      }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )


};




export default App;
