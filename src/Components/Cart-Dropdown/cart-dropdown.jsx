import {DropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';
import Button from '../Button/button';
import CartItem from '../Cart-Item/cart-item';
import {useContext} from 'react';
import {CartContext} from '../../Contexts/cart-context'
import {useNavigate} from 'react-router-dom';




const CartDropdown = () => {

	const {cartItems} = useContext(CartContext);



		const navigate = useNavigate();


		const goToCheckout = () => navigate('/checkout');





	return(

		<DropDownContainer>
		<CartItems>

			{ cartItems.length ? (
					cartItems.map(item=> <CartItem key={item.id} CartItem={item}/> ) )

			: (  <EmptyMessage>Your cart is empty </EmptyMessage>  )

		}

				</CartItems>


		<Button onClick={goToCheckout}> CHECKOUT</Button>

			


				

			

		</DropDownContainer>


		)



}


export default CartDropdown;