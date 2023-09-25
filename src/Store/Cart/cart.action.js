// import {CART_ACTION_TYPES} from './cart.types';
// import {createAction} from '../../Utils/Reducer/reducer';


// export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);






// const clearCartItem = (cartItems,cartItemToClear) => {

// 	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToClear.id);

     
// 	if(existingCartItem) {
// 		return cartItems.filter((cartItem)=> cartItem.id!==cartItemToClear.id)	
// 	}
	
// 	}





// const addItemToCart = (productToAdd) => {

// 		const newCartItems = addCartItem(cartItems,productToAdd);
// 		updateCartItems(newCartItems);

// 	}


// const removeItemFromCart = (cartItemToRemove) => {

// 		const newCartItems = removeCartItem(cartItems,cartItemToRemove);
// 		updateCartItems(newCartItems);



// 	}


// const clearItemFromCart = (cartItemToClear) => {

// 		const newCartItems = clearCartItem(cartItems,cartItemToClear);
// 		updateCartItems(newCartItems);



// 	}











// original code....

import { createAction } from '../../Utils/Reducer/reducer';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);




  // export const createAction = (type,payload) => ({type,payload})