// import './checkout-item.scss';
// import {useContext} from 'react';
// import {CartContext} from '../../Contexts/cart-context';




// const CheckoutItem = ({cartItem}) => {

// 	const {name,imageUrl,price,quantity} = cartItem

// 	const {clearItemFromCart,removeItemFromCart, addItemToCart} = useContext(CartContext);
	

// 	const clearItemHandler = () => clearItemFromCart(cartItem);
// 	const removeItemHandler = () => removeItemFromCart(cartItem);
// 	const addItemHandler = () => addItemToCart(cartItem);

	

	

// 	// const addProductToCart =() => addItemToCart(product);



// 	return(
// 		<div className='checkout-item-container'>
// 				<div className='image-container'>
// 					<img src = {imageUrl} alt = {`${name}`}/>

// 				</div>

// 				<span className='name'>{name}</span>

// 				<span className='quantity'>
							
// 							<div className="arrow" onClick = {removeItemHandler}>&#10094;</div>
// 							<span className='value'>{quantity}</span>
// 							<div className="arrow" onClick={addItemHandler} >&#10095;</div>

// 				</span>

// 				<span className= 'price'>${price}.00</span>
// 				<div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
// 		</div>

// 		)
// }



// export default CheckoutItem;










import { useDispatch, useSelector } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../Store/Cart/cart.action';
import { selectCartItems } from '../../Store/Cart/cart.selector';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;