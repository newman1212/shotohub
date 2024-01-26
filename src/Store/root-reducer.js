import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './User/user-reducer';
import {categoriesReducer} from './Categories/category-reducer';
import {cartReducer} from './Cart/cart.reducer';



export const rootReducer = combineReducers({

	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer







})




