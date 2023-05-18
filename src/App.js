import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import './categories.scss';
import Home from './Routes/Home/Home'
import Navigation from './Routes/Navigation/Navigation'
import Checkout from './Routes/Checkout/checkout'
import Authentication from './Routes/Authentication/authentication'
import {Routes,Route} from 'react-router-dom'
import Shop from './Routes/Shop/shop'
// import Shop from './Components/Shop/Shop'
// import Shop from './Shop/shop'
import {onAuthStateChangedListener, createUserDocumentFromAuth} from './Utils/Firebase/firebase';
import {createAction} from './Utils/Reducer/reducer'
import {setCurrentUser} from './Store/User/user.action'



const App =() => {


  const dispatch = useDispatch(); 


  useEffect(()=>{
  const unsubscribe = onAuthStateChangedListener((user)=>{

  if(user) {
    createUserDocumentFromAuth(user)
  }



    dispatch(setCurrentUser(user));

    


  });


    return unsubscribe;

  

} ,[])




    return (

      <Routes>
          <Route path = '/' element ={<Navigation/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/shop/*' element ={<Shop/>}/>
          <Route path = '/auth' element ={<Authentication/>}/>
          <Route path = '/checkout' element ={<Checkout/>}/>

          </Route>


      </Routes>

      );


};

export default App;
