// import './cart-item.scss';





// const CartItem = ({CartItem}) => {


// const {name,quantity,imageUrl,price} = CartItem

// 	return (

// 		<div className='cart-item-container'>
// 			<img src={imageUrl} alt={`${name}`} />
// 			<div className='item-details'>
// 				<span className = {name}>{name}</span>
// 				<span className='price'>{quantity} x ${price}</span>
// 			</div>


// 		</div>


// 		)





// }



// export default CartItem;







import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;