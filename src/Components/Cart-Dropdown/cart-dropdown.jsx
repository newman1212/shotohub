// import {DropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';
// import Button from '../Button/button';
// import CartItem from '../Cart-Item/cart-item';
// import {useContext} from 'react';
// import {CartContext} from '../../Contexts/cart-context'
// import {useNavigate} from 'react-router-dom';




// const CartDropdown = () => {

// 	const {cartItems} = useContext(CartContext);



// 		const navigate = useNavigate();


// 		const goToCheckout = () => navigate('/checkout');





// 	return(

// 		<DropDownContainer>
// 		<CartItems>

// 			{ cartItems.length ? (
// 					cartItems.map(item=> <CartItem key={item.id} CartItem={item}/> ) )

// 			: (  <EmptyMessage>Your cart is empty </EmptyMessage>  )

// 		}

// 				</CartItems>


// 		<Button onClick={goToCheckout}> CHECKOUT</Button>

			


				

			

// 		</DropDownContainer>


// 		)



// }


// export default CartDropdown;








// Original ...


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../Store/Cart/cart.selector';
import Button from '../Button/button';
import CartItem from '../Cart-Item/cart-item';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
