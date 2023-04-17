import {ShopIcon,CartIconContainer,ItemCount} from './cart-icon.styles'
import {useContext} from 'react';

import {CartContext} from '../../Contexts/cart-context'



const CartIcon = () => {

	const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)



	return(
		<CartIconContainer>
			<ShopIcon onClick = {toggleIsCartOpen}/>
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>

		)




}




export default CartIcon;