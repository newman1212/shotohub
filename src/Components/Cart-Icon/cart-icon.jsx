import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import {useContext} from 'react';

import {CartContext} from '../../Contexts/cart-context'



const CartIcon = () => {

	const {isCartOpen,setIsCartOpen} = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)



	return(
		<div className='cart-icon-container' onClick = {toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon'/>
			<span className='item-count'>10</span>
		</div>

		)




}




export default CartIcon;