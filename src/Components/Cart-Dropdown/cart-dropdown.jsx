import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import { selectCartItems,selectIsCartOpen } from '../../Store/Cart/cart.selector';
import Button from '../Button/button';
import CartItem from '../Cart-Item/cart-item';
import { setIsCartOpen } from '../../Store/Cart/cart.reducer';




import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';





const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
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
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
