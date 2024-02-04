
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../Store/Cart/cart.selector';
import { setIsCartOpen } from '../../Store/Cart/cart.action';
import { setIsCartOpen } from '../../Store/Cart/cart.reducer';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;




