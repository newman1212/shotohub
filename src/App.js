 import React from 'react';
import './App.css';
import './categories.scss';
import Home from './Routes/Home/Home'
import Navigation from './Routes/Navigation/Navigation'
import Authentication from './Routes/Authentication/authentication'
import {Routes,Route} from 'react-router-dom'
import Shop from './Components/Shop/Shop'



const App =() => {

    return (

      <Routes>
          <Route path = '/' element ={<Navigation/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/shop' element ={<Shop/>}/>
          <Route path = '/auth' element ={<Authentication/>}/>

          </Route>


      </Routes>

      );


};

export default App;
