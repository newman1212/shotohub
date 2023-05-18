import {createContext,useReducer} from 'react';
import {createAction} from './../Utils/Reducer/reducer'








const addCartItem = (cartItems,productToAdd) => {

	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
     
	if(existingCartItem) {
		return cartItems.map((cartItem)=> cartItem.id===productToAdd.id? 
		{...cartItem, quantity:cartItem.quantity+1}
		:
		cartItem);
	}

	return [ ...cartItems, {...productToAdd,quantity:1}] ;
	}







const removeCartItem = (cartItems,cartItemToRemove) => {

	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
     
	if(existingCartItem.quantity===1) {
		return cartItems.filter((cartItem)=> cartItem.id!==cartItemToRemove.id)	
	}


	return cartItems.map((cartItem) => cartItem.id===cartItemToRemove.id?
		{...cartItem,quantity:cartItemToRemove.quantity-1}
		
		:
		cartItem

		) ;
	}




























export const CartContext = createContext({

	isCartOpen : false,
	setIsCartOpen : ()=>{},
	cartItems:[],
	addItemToCart : ()=>{},
	removeItemFromCart : ()=>{},
	clearItemFromCart : ()=>{},
	cartCount:0,
	cartTotal:0
}

	)

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'

}


const INITIAL_STATE = {


	isCartOpen : false,
	cartItems:[], 
	cartCount:0,
	cartTotal:0
}

const cartReducer = (state,action)=>{
 
	const {type,payload} = action;



	switch(type){

	case  CART_ACTION_TYPES.SET_CART_ITEMS :
		return{
			...state,
			...payload,
			
		};

	case  CART_ACTION_TYPES.SET_IS_CART_OPEN :
		return{
			...state,
			isCartOpen:payload,
			
		};

	default:
		throw new Error(`unhandled type ${type} in cartReducer`)


	};

}









export const CartProvider = ({children}) => {




	// const [isCartOpen,setIsCartOpen] = useState(false);
	// const [cartCount,setCartCount] = useState(0);
	// const [cartItems,setCartItems] = useState([]);
	// const [cartTotal,setCartTotal] = useState(0);



	// useEffect( ()=>{

	// 	const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
	// 	setCartCount(newCartCount);
	// },[cartItems])




	// useEffect( ()=>{

	// 	const newCartTotal = cartItems.reduce((total,cartItem) => total + (cartItem.quantity*cartItem.price),0)
	// 	setCartTotal(newCartTotal)

	// },[cartItems])










const clearCartItem = (cartItems,cartItemToClear) => {

	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToClear.id);

     
	if(existingCartItem) {
		return cartItems.filter((cartItem)=> cartItem.id!==cartItemToClear.id)	
	}
	
	}




const addItemToCart = (productToAdd) => {

		const newCartItems = addCartItem(cartItems,productToAdd);
		updateCartItems(newCartItems);

	}


const removeItemFromCart = (cartItemToRemove) => {

		const newCartItems = removeCartItem(cartItems,cartItemToRemove);
		updateCartItems(newCartItems);



	}


const clearItemFromCart = (cartItemToClear) => {

		const newCartItems = clearCartItem(cartItems,cartItemToClear);
		updateCartItems(newCartItems);



	}






	const [{isCartOpen,cartItems,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE);

	const updateCartItems =(newCartItems) => {

const newCartCount = newCartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
const newCartTotal = newCartItems.reduce((total,cartItem) => total + (cartItem.quantity*cartItem.price),0)
dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,{cartItems:newCartItems,
	cartCount:newCartCount,cartTotal:newCartTotal}));

	console.log(createAction(),'createAction')	

} //similar to a setCartItems function.








	const setIsCartOpen = (bool) => {

		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));

	// dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN ,payload:bool}); //less optimized approach
	
}






	const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal }

	return <CartContext.Provider value ={value}>{children}</CartContext.Provider>


} 