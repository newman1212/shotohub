import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../Store/Cart/cart.reducer';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  ControlButton,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <ControlButton onClick={removeItemHandler}>-</ControlButton>
        <Value>{quantity}</Value>
        <ControlButton onClick={addItemHandler}>+</ControlButton>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>×</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
